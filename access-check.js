// =============================================
// access-check.js - AP Test & Notes Access Verification
// Checks if current user is logged in & has AP test/notes access
// =============================================

(async function checkAPAccess() {
    document.documentElement.style.visibility = 'hidden';

    if (!window.supabase) {
        console.error('Supabase library not loaded.');
        document.documentElement.style.visibility = 'visible';
        return;
    }

    const supabaseClient = window.supabase.createClient(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
    );

    const { data: { session } } = await supabaseClient.auth.getSession();

    const isDiagnostic = window.location.search.includes('type=diagnostic') || window.location.pathname.includes('diagnostic');
    const isTopic = window.location.search.includes('type=topic');
    const isFullMock = window.location.search.includes('type=mock') || window.location.search.includes('type=full');
    const isNotes = window.location.search.includes('type=notes') || window.location.pathname.includes('notes.html');
    const testId = new URLSearchParams(window.location.search).get('id') || (isNotes ? 'ap-note-micro-unit1' : 'ap-diag-1');
    
    // Resolve relative path to root depending on page location depth
    let basePath = '';
    if (window.location.pathname.includes('/tests/')) {
        const partsAfterTests = window.location.pathname.split('/tests/')[1].split('/').filter(Boolean);
        // If file is inside tests/category/test-id/test.html, partsAfterTests length is 3 -> ../../../
        basePath = '../'.repeat(partsAfterTests.length);
    }

    const isFreeDiagnostic = (!isNotes && (isDiagnostic || testId.includes('diag')));

    // Free diagnostic tests are accessible to all students (name, email, phone required before starting)
    // Full mock practice tests, notes, and locked topic tests require login & access grant
    if (!session && !isFreeDiagnostic) {
        window.location.href = basePath + 'login.html?redirect=' + encodeURIComponent(window.location.href);
        return;
    }

    if (session) {
        const adminEmails = ['rupali.eduquest@gmail.com', 'admin@eduquest.com', 'ajanta1925@gmail.com'];
        const isAdmin = adminEmails.includes((session.user.email || '').toLowerCase());
        if (isAdmin) {
            document.documentElement.style.visibility = 'visible';
            return;
        }

        // Fetch user permissions from profiles table (primary) or ap_profiles (fallback), checking by id and email
        let profile = null;
        const { data: pById } = await supabaseClient.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
        profile = pById;

        if (!profile && session.user.email) {
            const { data: pByEmail } = await supabaseClient.from('profiles').select('*').eq('email', session.user.email).maybeSingle();
            profile = pByEmail;
        }

        if (!profile) {
            const { data: apById } = await supabaseClient.from('ap_profiles').select('*').eq('id', session.user.id).maybeSingle();
            profile = apById;
        }

        if (!profile && session.user.email) {
            const { data: apByEmail } = await supabaseClient.from('ap_profiles').select('*').eq('email', session.user.email).maybeSingle();
            profile = apByEmail;
        }

        let unlockedTests = [];
        try {
            unlockedTests = profile && profile.unlocked_tests ? (typeof profile.unlocked_tests === 'string' ? JSON.parse(profile.unlocked_tests) : profile.unlocked_tests) : [];
        } catch(e) {}

        // Check test & notes unlock status (Notes are unlocked with Full Mock access)
        const hasDiagAccess = profile && (profile.has_ap_diag_access || profile.has_ap_diagnostic_access || profile.has_ap_access);
        const hasTopicAccess = profile && (profile.has_ap_topic_access || profile.has_ap_access);
        const hasMockAccess = profile && (profile.has_ap_mock_access || profile.has_ap_access);
        const isUnlocked = isFreeDiagnostic || (isDiagnostic && hasDiagAccess) || (hasTopicAccess && isTopic) || (hasMockAccess && (isFullMock || isNotes)) || unlockedTests.includes(testId);

        if (!isUnlocked) {
            document.documentElement.style.visibility = 'visible';
            const lockedTitle = isNotes ? '🔒 Chapter Notes Locked' : '🔒 Test Locked';
            const lockedDesc = isNotes
                ? 'These AP chapter notes are currently locked. Notes are unlocked with AP Full Mock access granted by your teacher/admin from the Admin Dashboard.'
                : 'This AP test is currently locked. Access must be granted by your teacher/admin from the Admin Dashboard.';
            document.body.innerHTML = `
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:'IBM Plex Sans',sans-serif;text-align:center;padding:24px;background:#FFFFFF;color:#0A0A0A">
                <div style="background:#FFFFFF;border:1.5px solid #D4AF37;border-radius:20px;padding:36px 32px;max-width:460px;box-shadow:0 12px 32px rgba(212,175,55,0.18);">
                  <h2 style="font-family:'Syne',sans-serif;font-size:1.7rem;margin-bottom:12px;color:#B91C1C">${lockedTitle}</h2>
                  <p style="color:#4B5563;line-height:1.6;margin-bottom:24px;font-size:0.95rem">
                    ${lockedDesc}
                  </p>
                  <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
                    <a href="${basePath}index.html${isNotes ? '?tab=notes' : ''}" style="background:#FFFFFF;border:1.5px solid #D4AF37;color:#0A0A0A;text-decoration:none;padding:10px 22px;border-radius:10px;font-weight:700;box-shadow:0 4px 12px rgba(212,175,55,0.2)">← Back to Portal</a>
                    <button onclick="window.supabaseLogout()" style="background:#FFFFFF;border:1.5px solid rgba(212,175,55,0.45);color:#0A0A0A;padding:10px 20px;border-radius:10px;font-weight:600;cursor:pointer">Logout</button>
                  </div>
                </div>
              </div>`;

            window.supabaseLogout = async function () {
                await supabaseClient.auth.signOut();
                window.location.href = basePath + 'index.html';
            };
            throw new Error('Access denied');
        }
    }

    document.documentElement.style.visibility = 'visible';
})();
