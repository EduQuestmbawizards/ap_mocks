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

// ── Calculate AP Score (1 to 5 scale) ─────────
function calculateAPScore(pct) {
    const p = parseFloat(pct) || 0;
    if (p >= 80) return 5;
    if (p >= 65) return 4;
    if (p >= 50) return 3;
    if (p >= 35) return 2;
    return 1;
}

// ── Save registration to Supabase (ap_user) ───
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
        } else {
            console.error('❌ Supabase registration error:', await res.text());
        }
    } catch (err) {
        console.error('❌ Supabase network error:', err);
    }
}

// ── Save result to Supabase (ap_reports) ──────
async function saveToSupabase(result) {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
        return { ok: false, msg: 'Supabase not configured' };
    }

    const pct = parseFloat(result.pct) || 0;
    const apScore = result.ap_score || calculateAPScore(pct);

    const row = {
        name:         result.student.name,
        email:        result.student.email,
        phone:        result.student.phone || '',
        topic:        result.examName || 'AP Test',
        topic_number: result.topicNumber || 1,
        test_type:    result.testType || 'AP Test',
        correct:      result.correct,
        wrong:        result.wrong,
        unattempted:  result.unattempted,
        total:        result.total,
        pct:          pct,
        ap_score:     apScore,
        grade:        `AP ${apScore}/5`,
        scaled:       Math.round(100 + (pct * 1.0)), // 100-200 scaled score for diagnostic
        submit_time:  result.submitTime || new Date().toISOString(),
        answers_json: JSON.stringify(result.answers || {}),
        details_json: JSON.stringify((result.details || []).map(d => ({
            id: d.id,
            status: d.status,
            chosen: d.chosen,
            answer: d.answer !== undefined ? d.answer : d.correctAnswer,
            text: d.text || d.question || '',
            topic: d.topic || 'General',
            difficulty: d.difficulty || 'medium',
            options: d.options || d.choices || [],
            explanation: d.explanation || d.solution || ''
        })))
    };

    try {
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/ap_reports`, {
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
            console.log('✅ Result saved to ap_reports table');
            return { ok: true, status: res.status, apScore: apScore };
        } else {
            const errText = await res.text();
            console.error('❌ Supabase save error:', res.status, errText);
            return { ok: false, msg: errText };
        }
    } catch (err) {
        console.error('❌ Supabase network error:', err);
        return { ok: false, msg: err.message };
    }
}

// ── Server-Authoritative Exam Attempt Lifecycle (ap_attempts) ───
async function createExamAttempt(testId, studentEmail, durationSeconds) {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
        return { ok: false, msg: 'Supabase not configured' };
    }

    try {
        const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        const { data: { session } } = await client.auth.getSession();
        const userId = session?.user?.id || null;
        const now = new Date();
        const expiresAt = new Date(now.getTime() + durationSeconds * 1000);

        const attemptPayload = {
            user_id: userId,
            student_email: studentEmail || 'guest@eduquest.com',
            test_id: testId,
            started_at: now.toISOString(),
            duration_seconds: durationSeconds,
            expires_at: expiresAt.toISOString(),
            status: 'active'
        };

        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/ap_attempts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(attemptPayload)
        });

        if (res.ok || res.status === 201) {
            const data = await res.json();
            const record = Array.isArray(data) ? data[0] : data;
            console.log('✅ Server attempt created:', record?.id);
            return { ok: true, attempt: record };
        } else {
            const err = await res.text();
            console.warn('⚠️ Could not create server attempt:', err);
            return { ok: false, msg: err };
        }
    } catch (err) {
        console.warn('⚠️ Server attempt network failure:', err);
        return { ok: false, msg: err.message };
    }
}

async function validateAndFinalizeAttempt(attemptId) {
    if (!attemptId || !SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_SUPABASE')) {
        return { ok: true, fallback: true };
    }

    try {
        const now = new Date().toISOString();
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/ap_attempts?id=eq.${attemptId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                status: 'submitted',
                submitted_at: now
            })
        });

        if (res.ok) {
            console.log('✅ Server attempt marked submitted');
            return { ok: true };
        } else {
            const err = await res.text();
            console.warn('⚠️ Server attempt submission notice:', err);
            return { ok: false, msg: err };
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
