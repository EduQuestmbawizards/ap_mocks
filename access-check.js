// =============================================
// access-check.js - AP Test Access Verification
// Checks if current user is logged in & has AP test access
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
    const testId = new URLSearchParams(window.location.search).get('id') || 'ap-diag-1';
    
    // Resolve relative path to root depending on page location depth
    let basePath = '';
    if (window.location.pathname.includes('/tests/')) {
        const partsAfterTests = window.location.pathname.split('/tests/')[1].split('/').filter(Boolean);
        // If file is inside tests/category/test-id/test.html, partsAfterTests length is 3 -> ../../../
        basePath = '../'.repeat(partsAfterTests.length);
    }

    const isFirstDiagnostic = (testId === 'ap-diag-1');

    // Allow 1st diagnostic test access even without login, but require login for all other tests
    if (!session && !isFirstDiagnostic) {
        window.location.href = basePath + 'login.html?redirect=' + encodeURIComponent(window.location.href);
        return;
    }

    if (session) {
        const isAdmin = session.user.email === 'rupali.eduquest@gmail.com' || session.user.email === 'admin@eduquest.com';
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

        // Check test unlock status
        const hasDiagAccess = profile && (profile.has_ap_diag_access || profile.has_ap_diagnostic_access || profile.has_ap_access);
        const hasTopicAccess = profile && (profile.has_ap_topic_access || profile.has_ap_access);
        const hasMockAccess = profile && (profile.has_ap_mock_access || profile.has_ap_access);
        const isUnlocked = isFirstDiagnostic || (isDiagnostic && hasDiagAccess) || (hasTopicAccess && isTopic) || (hasMockAccess && isFullMock) || unlockedTests.includes(testId);

        if (!isUnlocked) {
            document.documentElement.style.visibility = 'visible';
            document.body.innerHTML = `
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:'IBM Plex Sans',sans-serif;text-align:center;padding:20px;background:#0d0d14;color:#fff">
                <h2 style="font-family:'Syne',sans-serif;font-size:1.8rem;margin-bottom:12px;color:#f87171">🔒 Test Locked</h2>
                <p style="color:rgba(255,255,255,0.6);max-width:440px;line-height:1.6;margin-bottom:20px">
                  This AP test is currently locked. Access must be granted by your teacher/admin from the Admin Dashboard.
                </p>
                <div style="display:flex;gap:12px">
                  <a href="${basePath}index.html" style="background:#2563eb;color:#fff;text-decoration:none;padding:10px 20px;border-radius:8px;font-weight:600">← Back to Portal</a>
                  <button onclick="window.supabaseLogout()" style="background:none;border:1px solid rgba(255,255,255,0.2);color:#fff;padding:10px 20px;border-radius:8px;cursor:pointer">Logout</button>
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
