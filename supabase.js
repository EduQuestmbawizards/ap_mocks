const SUPABASE_CONFIG = {
    url: 'https://dyvvhmuegtzooijrtwyd.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY'
};

// =============================================
// Supabase Client Wrapper & Session Interceptor
// =============================================
if (typeof window !== 'undefined' && window.supabase && !window._origSupabaseCreateClient) {
    window._origSupabaseCreateClient = window.supabase.createClient.bind(window.supabase);
    window.supabase.createClient = function(url, key, opts) {
        const client = window._origSupabaseCreateClient(url, key, opts);
        if (client && client.auth) {
            const origGetSess = client.auth.getSession.bind(client.auth);
            client.auth.getSession = async function() {
                const res = await origGetSess();
                if (!res.data || !res.data.session) {
                    const custom = localStorage.getItem('eduquest_ap_session');
                    if (custom) {
                        try {
                            const parsed = JSON.parse(custom);
                            if (parsed && parsed.user) {
                                if (!res.data) res.data = {};
                                res.data.session = parsed;
                            }
                        } catch(e) {}
                    }
                }
                return res;
            };

            const origSignOut = client.auth.signOut.bind(client.auth);
            client.auth.signOut = async function() {
                localStorage.removeItem('eduquest_ap_session');
                return await origSignOut();
            };
        }
        return client;
    };
}

// ── Helper: Get active Supabase client instance ─────────
function getSupabaseClient() {
    if (typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
        if (!window._appSupabaseClient) {
            window._appSupabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        }
        return window._appSupabaseClient;
    }
    return null;
}

// ── Calculate AP Score (1 to 5 scale reference) ─────────
function calculateAPScore(pct) {
    const p = parseFloat(pct) || 0;
    if (p >= 80) return 5;
    if (p >= 65) return 4;
    if (p >= 50) return 3;
    if (p >= 35) return 2;
    return 1;
}

// ── Save registration to Supabase (ap_user) ─────────────
async function saveRegistration(studentData, examName) {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) return;

    const row = {
        name: studentData.name,
        email: studentData.email,
        phone: studentData.phone || '',
        topic: examName || 'AP Exam',
        created_at: new Date().toISOString()
    };

    try {
        const client = getSupabaseClient();
        if (client) {
            const { data: { session } } = await client.auth.getSession();
            if (session?.user?.id) {
                row.user_id = session.user.id;
            }
        }

        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/ap_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(row)
        });

        if (res.ok || res.status === 201) {
            console.log('✅ Registration saved to ap_user table');
        }
    } catch (err) {
        console.warn('Supabase registration notice:', err.message);
    }
}

// ============================================================
// SERVER-AUTHORITATIVE EXAM ATTEMPT LIFECYCLE (RPC-ONLY)
// ============================================================

/**
 * Creates an exam attempt server-side via create_exam_attempt RPC.
 * Server derives: auth.uid(), NOW(), and expires_at.
 * Client timestamps are never trusted.
 */
async function createExamAttempt(testId, studentEmail, durationSeconds) {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
        return { ok: false, msg: 'Supabase configuration missing' };
    }

    try {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client unavailable');

        const { data: { session } } = await client.auth.getSession();
        const authToken = session?.access_token || SUPABASE_CONFIG.anonKey;

        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/rpc/create_exam_attempt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                p_test_id: testId,
                p_student_email: studentEmail || session?.user?.email || 'student@eduquest.com',
                p_duration_seconds: durationSeconds || 2700
            })
        });

        if (res.ok) {
            const data = await res.json();
            console.log('✅ Server attempt created/resumed:', data.attempt_id, 'Expires:', data.expires_at);
            return {
                ok: true,
                attempt: {
                    id: data.attempt_id,
                    started_at: data.started_at,
                    expires_at: data.expires_at,
                    duration_seconds: data.duration_seconds,
                    status: data.status,
                    resumed: !!data.resumed
                }
            };
        } else {
            const errText = await res.text();
            console.warn('⚠️ Server create_exam_attempt failed:', res.status, errText);
            return { ok: false, status: res.status, msg: errText };
        }
    } catch (err) {
        console.warn('⚠️ createExamAttempt network error:', err);
        return { ok: false, msg: err.message };
    }
}

/**
 * Submits an exam attempt server-side via submit_exam_attempt RPC.
 * Server validates ownership, server timestamp, grace period, and scores raw answers.
 * Client-submitted scores are strictly ignored.
 */
async function submitExamAttempt(attemptId, answersJson, studentInfo) {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
        return { ok: false, msg: 'Supabase configuration missing' };
    }

    try {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client unavailable');

        const { data: { session } } = await client.auth.getSession();
        const authToken = session?.access_token || SUPABASE_CONFIG.anonKey;

        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/rpc/submit_exam_attempt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                p_attempt_id: attemptId,
                p_answers_json: answersJson || {},
                p_student_info: studentInfo || {}
            })
        });

        if (res.ok) {
            const data = await res.json();
            console.log('✅ Authoritative exam submission confirmed:', data);
            return { ok: true, report: data };
        } else {
            const errText = await res.text();
            console.error('❌ Server submit_exam_attempt rejected:', res.status, errText);
            return { ok: false, status: res.status, msg: errText };
        }
    } catch (err) {
        console.error('❌ submitExamAttempt network error:', err);
        return { ok: false, msg: err.message };
    }
}

/**
 * Fetches the authoritative score report directly from Supabase ap_reports.
 * RLS ensures only the owning authenticated user can read this report.
 */
async function fetchAuthoritativeReport(attemptId) {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
        return { ok: false, msg: 'Supabase configuration missing' };
    }

    try {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client unavailable');

        const { data: { session } } = await client.auth.getSession();
        const authToken = session?.access_token || SUPABASE_CONFIG.anonKey;

        // Query by attempt_id using authenticated authorization header
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/ap_reports?attempt_id=eq.${attemptId}&select=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (res.ok) {
            const reports = await res.json();
            if (Array.isArray(reports) && reports.length > 0) {
                return { ok: true, report: reports[0] };
            }
            return { ok: false, status: 404, msg: 'Report not found or access denied by security policy' };
        } else {
            const errText = await res.text();
            return { ok: false, status: res.status, msg: errText };
        }
    } catch (err) {
        return { ok: false, msg: err.message };
    }
}

// ── Country Dropdown Helper ────────────────────
const COUNTRIES = [
  { "name": "India", "dial_code": "+91", "code": "IN" },
  { "name": "United States", "dial_code": "+1", "code": "US" },
  { "name": "United Kingdom", "dial_code": "+44", "code": "GB" },
  { "name": "Canada", "dial_code": "+1", "code": "CA" },
  { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" },
  { "name": "Singapore", "dial_code": "+65", "code": "SG" },
  { "name": "Australia", "dial_code": "+61", "code": "AU" },
  { "name": "Germany", "dial_code": "+49", "code": "DE" }
];

function countryCodeToFlag(countryCode) {
  const code = countryCode.toUpperCase();
  const offset = 127397;
  return Array.from(code)
    .map(letter => String.fromCodePoint(letter.charCodeAt(0) + offset))
    .join('');
}

function populateCountryDropdown() {
  const selects = document.querySelectorAll('#regCC, #stuSignupCC, .country-select');
  selects.forEach(select => {
    const prevVal = select.value;
    select.innerHTML = '';
    COUNTRIES.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.dial_code;
      const flag = countryCodeToFlag(c.code);
      opt.textContent = `${flag} ${c.dial_code} (${c.name})`;
      if (c.code === 'IN') opt.selected = true;
      select.appendChild(opt);
    });
    if (prevVal) select.value = prevVal;
  });
}

document.addEventListener('DOMContentLoaded', () => {
    populateCountryDropdown();
});
