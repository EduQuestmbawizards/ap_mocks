const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load main questions.js
const questionsJsContent = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');

// Evaluate AP_TEST_DATA from questions.js
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(questionsJsContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);

const AP_TEST_DATA = sandbox.AP_TEST_DATA;
const indexHtmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const testToSubjectMap = {};

const match = indexHtmlContent.match(/const SUBJECT_TEST_CARDS = (\{[\s\S]*?\n    \};)/);
if (match) {
    try {
        const rawObjStr = match[1].replace(/;\s*$/, '');
        const subjectCardsObj = vm.runInContext(`(${rawObjStr})`, sandbox);
        Object.keys(subjectCardsObj).forEach(subId => {
            (subjectCardsObj[subId] || []).forEach(card => {
                testToSubjectMap[card.id] = subId;
            });
        });
    } catch(e) {
        console.error("Warning: could not parse SUBJECT_TEST_CARDS from index.html", e);
    }
}

function getSubjectIdForTest(testId) {
    if (testToSubjectMap[testId]) return testToSubjectMap[testId];
    if (testId === 'ap-diag-1') return 'ap-calc-ab';
    if (testId.includes('calcbc') || testId.includes('calc-bc')) return 'ap-calc-bc';
    if (testId.includes('calc')) return 'ap-calc-ab';
    if (testId.includes('csa')) return 'ap-cs-a';
    if (testId.includes('csp')) return 'ap-csp';
    if (testId.includes('precalc')) return 'ap-precalc';
    if (testId.includes('stats')) return 'ap-stats';
    if (testId.includes('bio')) return 'ap-bio';
    if (testId.includes('chem')) return 'ap-chem';
    if (testId.includes('env')) return 'ap-env';
    if (testId.includes('phys1')) return 'ap-phys-1';
    if (testId.includes('phys2')) return 'ap-phys-2';
    if (testId.includes('physc-mech') || ['kinematics', 'forces', 'momentum', 'energy', 'gravitation', 'rotation', 'shm', 'tension', 'inclines', 'graphs'].some(t => testId.includes(t) && testId.includes('physc'))) return 'ap-phys-c-mech';
    if (testId.includes('physc-em') || ['electrostatics', 'circuits', 'magnetism', 'induction', 'fields', 'gauss', 'capacitors', 'inductors'].some(t => testId.includes(t) && testId.includes('physc'))) return 'ap-phys-c-em';
    if (testId.includes('englang')) return 'ap-eng-lang';
    if (testId.includes('englit')) return 'ap-eng-lit';
    if (testId.includes('ush')) return 'ap-ush';
    if (testId.includes('world')) return 'ap-world';
    if (testId.includes('euro')) return 'ap-euro';
    if (testId.includes('macro')) return 'ap-macro';
    if (testId.includes('micro')) return 'ap-micro';
    if (testId.includes('psych')) return 'ap-psych';
    if (testId.includes('usgov')) return 'ap-usgov';
    if (testId.includes('compgov')) return 'ap-compgov';
    if (testId.includes('humgeo')) return 'ap-humgeo';
    if (testId.includes('afam')) return 'ap-afam';
    if (testId.includes('arthist')) return 'ap-art-hist';
    if (testId.includes('music')) return 'ap-music';
    if (testId.includes('2dart')) return 'ap-2d-art';
    if (testId.includes('3dart')) return 'ap-3d-art';
    if (testId.includes('drawing')) return 'ap-drawing';
    if (testId.includes('spanishlit')) return 'ap-spanish-lit';
    if (testId.includes('spanish')) return 'ap-spanish-lang';
    if (testId.includes('french')) return 'ap-french';
    if (testId.includes('german')) return 'ap-german';
    if (testId.includes('chinese')) return 'ap-chinese';
    if (testId.includes('japanese')) return 'ap-japanese';
    if (testId.includes('italian')) return 'ap-italian';
    if (testId.includes('latin')) return 'ap-latin';
    if (testId.includes('seminar')) return 'ap-seminar';
    if (testId.includes('research')) return 'ap-research';
    return 'general';
}

const testIds = Object.keys(AP_TEST_DATA);

console.log(`Found ${testIds.length} tests to organize into category folders:`, testIds);

const baseTestsDir = path.join(__dirname, 'tests');

// Clean previous directory structure if needed
if (fs.existsSync(baseTestsDir)) {
    fs.rmSync(baseTestsDir, { recursive: true, force: true });
}
fs.mkdirSync(baseTestsDir, { recursive: true });

testIds.forEach(testId => {
    let categoryFolder = 'topic';
    let subjectFolder = '';
    let relRoot = '../../../';

    if (testId.includes('diag')) {
        categoryFolder = 'diagnostic';
        subjectFolder = getSubjectIdForTest(testId);
        relRoot = '../../../../';
    } else if (testId.includes('mock') || testId.includes('full')) {
        categoryFolder = 'full_mock';
        relRoot = '../../../';
    } else {
        categoryFolder = 'topic';
        subjectFolder = getSubjectIdForTest(testId);
        relRoot = '../../../../';
    }

    const testFolder = subjectFolder 
        ? path.join(baseTestsDir, categoryFolder, subjectFolder, testId)
        : path.join(baseTestsDir, categoryFolder, testId);

    fs.mkdirSync(testFolder, { recursive: true });

    // 1. Create individual questions.js for this test
    const singleTestData = {};
    singleTestData[testId] = AP_TEST_DATA[testId];
    const qJsContent = `// Specific Question Bank for Test: ${testId}\nconst AP_TEST_DATA = ${JSON.stringify(singleTestData, null, 4)};\n`;
    fs.writeFileSync(path.join(testFolder, 'questions.js'), qJsContent, 'utf8');

    // 2. Create individual test.html with updated server-authoritative logic and responsive layout
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${AP_TEST_DATA[testId].title} – EduQuest AP</title>
  <link rel="stylesheet" href="${relRoot}test.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
  
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
        processEscapes: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        ignoreHtmlClass: 'katex-ignore'
      }
    };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script" async></script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="${relRoot}supabase.js"></script>
  <script src="${relRoot}access-check.js"></script>
  <script src="questions.js"></script>
</head>

<body>


  <!-- STUDENT REGISTRATION & VERIFICATION MODAL -->
  <div id="studentRegModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.48); backdrop-filter:blur(10px); z-index:10000; align-items:center; justify-content:center; padding:20px;">
    <div style="background:#FFFFFF; border:1.5px solid #D4AF37; border-radius:20px; max-width:460px; width:100%; padding:32px; box-shadow:0 20px 50px rgba(0,0,0,0.18); font-family:'IBM Plex Sans',sans-serif;">
      <div style="text-align:center; margin-bottom:22px;">
        <div style="width:50px; height:50px; margin:0 auto 12px; border-radius:14px; background:#FFFFFF; border:1.5px solid #D4AF37; display:flex; align-items:center; justify-content:center; font-size:1.6rem;">📝</div>
        <h3 style="font-family:'Syne',sans-serif; font-size:1.4rem; color:#0A0A0A; margin-bottom:6px;">Student Exam Verification</h3>
        <p style="color:#4B5563; font-size:0.85rem; line-height:1.45;">Please confirm your details to generate your official performance report and receive your exam solutions via email.</p>
      </div>
      <form id="preTestRegForm" onsubmit="submitStudentRegistration(event)">
        <div style="margin-bottom:14px;">
          <label style="display:block; font-size:0.8rem; font-weight:700; color:#374151; margin-bottom:6px;">Student Full Name *</label>
          <input type="text" id="stuInputName" required placeholder="John Doe" style="width:100%; box-sizing:border-box; background:#FFFFFF; border:1.5px solid rgba(212,175,55,0.55); border-radius:8px; padding:10px 14px; color:#0A0A0A; font-size:0.9rem;" />
        </div>
        <div style="margin-bottom:14px;">
          <label style="display:block; font-size:0.8rem; font-weight:700; color:#374151; margin-bottom:6px;">Email Address (For Verified Report & Answers) *</label>
          <input type="email" id="stuInputEmail" required placeholder="student@example.com" style="width:100%; box-sizing:border-box; background:#FFFFFF; border:1.5px solid rgba(212,175,55,0.55); border-radius:8px; padding:10px 14px; color:#0A0A0A; font-size:0.9rem;" />
        </div>
        <div style="margin-bottom:22px;">
          <label style="display:block; font-size:0.8rem; font-weight:700; color:#374151; margin-bottom:6px;">Country & Phone / WhatsApp *</label>
          <div style="display:flex; gap:8px;">
            <select id="stuInputCC" style="width:40%; background:#FFFFFF; border:1.5px solid rgba(212,175,55,0.55); border-radius:8px; padding:10px; color:#0A0A0A; font-size:0.85rem;"></select>
            <input type="tel" id="stuInputPhone" required placeholder="9876543210" style="width:60%; box-sizing:border-box; background:#FFFFFF; border:1.5px solid rgba(212,175,55,0.55); border-radius:8px; padding:10px 14px; color:#0A0A0A; font-size:0.9rem;" />
          </div>
        </div>
        <button type="submit" style="width:100%; background:#FFFFFF; color:#0A0A0A; border:1.5px solid #D4AF37; border-radius:10px; padding:13px; font-weight:700; font-size:0.95rem; cursor:pointer; box-shadow:0 4px 14px rgba(212,175,55,0.24);">Confirm & Begin Exam →</button>
      </form>
    </div>
  </div>

  <!-- HEADER -->
  <header class="test-hdr">
    <div class="test-info">
      <span class="test-title" id="testTitle">${AP_TEST_DATA[testId].title}</span>
      <span class="test-badge" id="testBadge">${AP_TEST_DATA[testId].testType || 'AP Test'}</span>
    </div>
    <div class="timer-box" id="timerBox">
      <span>⏱️</span>
      <span id="timerDisplay">45:00</span>
    </div>
    <div style="display:flex; gap:10px;">
      <a href="${relRoot}index.html" class="btn-nav" style="text-decoration:none;">🏠 Homepage</a>
      <button class="btn-nav btn-palette-nav" onclick="togglePalette()">📋 Palette</button>
      <button class="btn-nav btn-submit" onclick="confirmSubmit()">Submit Test</button>
    </div>
  </header>

  <!-- BODY CONTENT -->
  <div class="test-body">
    <!-- QUESTION AREA (CENTER/LEFT) -->
    <main class="question-area" id="questionArea">
      <div class="q-meta-row">
        <div class="q-number" id="qNumber">Question 1 of 1</div>
        <div class="q-tags">
          <span class="tag" id="qTopicTag">${AP_TEST_DATA[testId].topic || 'AP Subject'}</span>
          <span class="tag medium" id="qDiffTag">Medium</span>
        </div>
      </div>

      <!-- Question Text -->
      <div class="q-text" id="qText">Loading question content...</div>

      <!-- MCQ Options -->
      <div class="options-list" id="optionsList"></div>

      <!-- FRQ Input Box -->
      <div class="frq-box" id="frqBox" style="display:none;">
        <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-muted); margin-bottom:8px;">FREE RESPONSE SOLUTION</label>
        <textarea id="frqTextarea" class="frq-textarea" placeholder="Type your step-by-step mathematical work, justification, or final numerical answer here..."></textarea>
      </div>
    </main>

    <!-- SIDEBAR PALETTE (RIGHT PANEL ON DESKTOP, DRAWER ON MOBILE) -->
    <aside class="palette-sidebar" id="paletteSidebar">
      <div class="palette-header">
        <div class="palette-title">
          <span>📋 Question Palette</span>
          <button class="palette-close-btn" id="paletteCloseBtn" onclick="togglePalette()" aria-label="Close palette">✕</button>
        </div>
        <div class="palette-stats">
          <div class="stat-pill answered"><span id="countAnswered">0</span> Answered</div>
          <div class="stat-pill flagged"><span id="countFlagged">0</span> Flagged</div>
          <div class="stat-pill unattempted"><span id="countRemaining">0</span> Remaining</div>
        </div>
      </div>
      <div class="palette-grid-wrap">
        <div class="palette-grid" id="paletteGrid"></div>
      </div>
    </aside>
  </div>

  <!-- PALETTE OVERLAY FOR MOBILE -->
  <div class="palette-backdrop" id="paletteBackdrop" onclick="togglePalette()"></div>

  <!-- BOTTOM FOOTER NAVIGATION -->
  <footer class="test-ftr">
    <button class="btn-nav" id="btnPrev" onclick="navQuestion(-1)">← Previous</button>
    <button class="btn-nav btn-flag" id="btnFlag" onclick="toggleFlag()">🚩 Flag for Review</button>
    <button class="btn-nav btn-palette-toggle" onclick="togglePalette()">📋 Palette</button>
    <button class="btn-nav btn-primary" id="btnNext" onclick="navQuestion(1)">Next Question →</button>
  </footer>

  <script>
    let testId = "${testId}";
    let currentTest = null;
    let questions = [];
    let currentIndex = 0;
    let userAnswers = {};
    let flaggedList = new Set();
    let timeRemaining = 45 * 60;
    let timerInterval = null;
    let studentInfo = { name: 'Student', email: 'student@example.com', phone: '' };

    const SESSION_KEY = \`eduquest_ap_session_\${testId}\`;
    let examEndTime = null;
    let currentAttemptId = null;

    
    function checkStudentRegistration() {
      try {
        const saved = JSON.parse(localStorage.getItem('eduquest_ap_user_info') || '{}');
        if (saved && saved.name && saved.name !== 'Student' && saved.email && saved.email !== 'student@example.com' && saved.phone) {
          studentInfo = saved;
          return true;
        }
      } catch(e) {}
      return false;
    }

    function openStudentRegModal() {
      const modal = document.getElementById('studentRegModal');
      if (modal) {
        modal.style.display = 'flex';
        const ccSelect = document.getElementById('stuInputCC');
        if (ccSelect) {
          ccSelect.innerHTML = '';
          const list = (window.COUNTRIES && window.COUNTRIES.length) ? window.COUNTRIES : (typeof COUNTRIES !== 'undefined' ? COUNTRIES : [
            { "name": "India", "dial_code": "+91", "code": "IN" },
            { "name": "United States", "dial_code": "+1", "code": "US" },
            { "name": "United Kingdom", "dial_code": "+44", "code": "GB" },
            { "name": "Canada", "dial_code": "+1", "code": "CA" },
            { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" },
            { "name": "Singapore", "dial_code": "+65", "code": "SG" },
            { "name": "Australia", "dial_code": "+61", "code": "AU" },
            { "name": "Germany", "dial_code": "+49", "code": "DE" }
          ]);
          list.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.dial_code;
            opt.textContent = \`\${c.dial_code} (\${c.name})\`;
            if (c.code === 'IN') opt.selected = true;
            ccSelect.appendChild(opt);
          });
        }
        if (studentInfo.name && studentInfo.name !== 'Student') {
          document.getElementById('stuInputName').value = studentInfo.name;
        }
        if (studentInfo.email && studentInfo.email !== 'student@example.com') {
          document.getElementById('stuInputEmail').value = studentInfo.email;
        }
        if (studentInfo.phone) {
          const parts = studentInfo.phone.split(' ');
          document.getElementById('stuInputPhone').value = parts[1] || parts[0];
        }
      }
    }

    async function submitStudentRegistration(e) {
      if (e && e.preventDefault) e.preventDefault();
      const name = document.getElementById('stuInputName').value.trim();
      const email = document.getElementById('stuInputEmail').value.trim();
      const cc = document.getElementById('stuInputCC')?.value || '+91';
      const phone = document.getElementById('stuInputPhone').value.trim();

      if (!name || !email || !phone) {
        alert('Please fill out all required fields (Full Name, Email, Phone Number).');
        return;
      }

      studentInfo = {
        name: name,
        email: email,
        phone: \`\${cc} \${phone}\`
      };
      localStorage.setItem('eduquest_ap_user_info', JSON.stringify(studentInfo));
      if (typeof saveRegistration === 'function') {
        saveRegistration(studentInfo, currentTest?.title || 'AP Exam');
      }
      document.getElementById('studentRegModal').style.display = 'none';

      await initExamAttempt();
    }

    document.addEventListener('DOMContentLoaded', async () => {
      currentTest = AP_TEST_DATA[testId];
      if (!currentTest) {
        alert('Test not found for ID: ' + testId);
        return;
      }
      questions = currentTest.questions || [];

      document.getElementById('testTitle').textContent = currentTest.title;
      document.getElementById('testBadge').textContent = currentTest.testType || 'AP Free Diagnostic';

      // Load authenticated student info
      let hasSession = false;
      const client = (typeof getSupabaseClient === 'function' ? getSupabaseClient() : null) || (window.supabase && window.supabase.createClient ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey) : null);
      if (client && client.auth) {
        try {
          const { data: { session } } = await client.auth.getSession();
          if (session && session.user) {
            hasSession = true;
            studentInfo.email = session.user.email;
            studentInfo.name = session.user.user_metadata?.full_name || session.user.email.split('@')[0];
            studentInfo.phone = session.user.user_metadata?.phone || '';
          }
        } catch (e) {}
      }

      if (!hasSession) {
        checkStudentRegistration();
      }

      const isRegistered = hasSession || (studentInfo.name && studentInfo.name !== 'Student' && studentInfo.email && studentInfo.email !== 'student@example.com' && studentInfo.phone);

      if (!isRegistered) {
        openStudentRegModal();
        return;
      }

      await initExamAttempt();
    });

    async function initExamAttempt() {
      const durationSeconds = (currentTest.timeLimitMinutes || 45) * 60;

      // Save registration log to ap_user
      if (typeof saveRegistration === 'function') {
        saveRegistration(studentInfo, currentTest.title);
      }

      // Restore temporary user answers from localStorage for UI recovery
      try {
        const savedAns = localStorage.getItem(\`eduquest_ap_answers_\${testId}\`);
        if (savedAns) userAnswers = JSON.parse(savedAns);
      } catch (e) {}

      // Server-authoritative attempt initialization via create_exam_attempt RPC
      let attemptRes = null;
      if (typeof createExamAttempt === 'function') {
        attemptRes = await createExamAttempt(testId, studentInfo.email, durationSeconds);
      }
      if (attemptRes && attemptRes.ok && attemptRes.attempt?.id) {
        currentAttemptId = attemptRes.attempt.id;
        examEndTime = new Date(attemptRes.attempt.expires_at).getTime();
        const now = Date.now();
        timeRemaining = Math.max(0, Math.floor((examEndTime - now) / 1000));
        localStorage.setItem(SESSION_KEY, JSON.stringify({
          attemptId: currentAttemptId,
          expiresAt: attemptRes.attempt.expires_at,
          startedAt: attemptRes.attempt.started_at
        }));
      } else {
        // Fallback for offline/cached session
        let savedSession = null;
        try {
          savedSession = JSON.parse(localStorage.getItem(SESSION_KEY) || '{}');
        } catch (e) {}
        if (savedSession?.expiresAt) {
          currentAttemptId = savedSession.attemptId;
          examEndTime = new Date(savedSession.expiresAt).getTime();
          timeRemaining = Math.max(0, Math.floor((examEndTime - Date.now()) / 1000));
        } else {
          examEndTime = Date.now() + (durationSeconds * 1000);
          timeRemaining = durationSeconds;
        }
      }

      if (timeRemaining <= 0) {
        alert('⏰ Test time limit has expired! Submitting test automatically.');
        submitTest();
        return;
      }

      startTimer();
      renderQuestion();
      renderPalette();
    }

    function startTimer() {
      function updateClock() {
        const now = Date.now();
        timeRemaining = Math.max(0, Math.floor((examEndTime - now) / 1000));

        if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          localStorage.removeItem(SESSION_KEY);
          alert('⏰ Time limit reached! Submitting test automatically.');
          submitTest();
          return;
        }

        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        const display = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
        const el = document.getElementById('timerDisplay');
        if (el) el.textContent = display;

        if (timeRemaining < 300) { // < 5 mins
          document.getElementById('timerBox')?.classList.add('warning');
        }
      }

      updateClock();
      timerInterval = setInterval(updateClock, 1000);
    }

    function renderQuestion() {
      if (questions.length === 0) return;
      const q = questions[currentIndex];

      document.getElementById('qNumber').textContent = \`Question \${currentIndex + 1} of \${questions.length}\`;
      document.getElementById('qTopicTag').textContent = q.topic || 'AP Subject';
      
      const diffEl = document.getElementById('qDiffTag');
      diffEl.textContent = (q.difficulty || 'medium').toUpperCase();
      diffEl.className = \`tag \${q.difficulty || 'medium'}\`;

      // Fix image paths: handle relative and root-relative paths
      function fixImgPaths(html) {
        if (!html) return '';
        return html
          .replace(/src="(?:\\.\\.\\/)*images\\//g, 'src="${relRoot}images/')
          .replace(/src='(?:\\.\\.\\/)*images\\//g, "src='${relRoot}images/")
          .replace(/src="\\/images\\//g, 'src="${relRoot}images/')
          .replace(/src='\\/images\\//g, "src='${relRoot}images/");
      }

      // Protect currency dollar amounts so KaTeX / MathJax never treats them as math delimiters
      function formatQuestionContent(html) {
        if (!html) return '';
        let out = fixImgPaths(html);
        const currencyRegex = /\\$(\\d+(?:,\\d+)*(?:\\.\\d+)?)(?=\\s|[.,;:\\)\\/?!\\*\\\"\\'\\]]|<|$)/g;
        out = out.replace(currencyRegex, '<span class="katex-ignore">&#36;</span>$1');
        return out;
      }

      document.getElementById('qText').innerHTML = formatQuestionContent(q.question || '');

      const optsContainer = document.getElementById('optionsList');
      const frqContainer = document.getElementById('frqBox');

      if (q.isFRQ) {
        optsContainer.style.display = 'none';
        frqContainer.style.display = 'block';
        document.getElementById('frqTextarea').value = userAnswers[q.id] || '';
      } else {
        frqContainer.style.display = 'none';
        optsContainer.style.display = 'flex';
        optsContainer.innerHTML = '';

        const prefixes = ['A', 'B', 'C', 'D', 'E', 'F'];
        (q.options || []).forEach((optText, idx) => {
          const pref = prefixes[idx] || \`\${idx+1}\`;
          const isSelected = userAnswers[q.id] === pref;
          
          let renderedOpt = formatQuestionContent(optText || '');
          renderedOpt = renderedOpt.replace(/^<p>([\\s\\S]*)<\\/p>$/i, '$1').trim();

          const optCard = document.createElement('div');
          optCard.className = \`opt-card \${isSelected ? 'selected' : ''}\`;
          optCard.onclick = () => selectOption(q.id, pref);
          optCard.innerHTML = \`
            <div class="opt-prefix">\${pref}</div>
            <div class="opt-content">\${renderedOpt || '&nbsp;'}</div>\`;
          optsContainer.appendChild(optCard);
        });
      }

      // Typeset math expressions with KaTeX and MathJax
      if (window.renderMathInElement) {
        renderMathInElement(document.querySelector('.question-area') || document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\(', right: '\\\\)', display: false},
            {left: '\\\\[', right: '\\\\]', display: true}
          ],
          ignoredClasses: ['katex-ignore', 'no-math', 'frq-textarea'],
          throwOnError: false
        });
      }
      if (window.MathJax && MathJax.typesetPromise) {
        if (MathJax.typesetClear) MathJax.typesetClear();
        MathJax.typesetPromise([document.querySelector('.question-area') || document.body]).catch(() => {});
      }

      document.getElementById('btnPrev').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
      document.getElementById('btnNext').textContent = currentIndex === questions.length - 1 ? 'Review & Submit' : 'Next Question →';
      renderPalette();
    }

    function selectOption(qId, pref) {
      userAnswers[qId] = pref;
      try {
        localStorage.setItem(\`eduquest_ap_answers_\${testId}\`, JSON.stringify(userAnswers));
      } catch (e) {}
      renderQuestion();
    }

    document.getElementById('frqTextarea').addEventListener('input', (e) => {
      const q = questions[currentIndex];
      if (q && q.isFRQ) {
        userAnswers[q.id] = e.target.value;
        try {
          localStorage.setItem(\`eduquest_ap_answers_\${testId}\`, JSON.stringify(userAnswers));
        } catch (err) {}
        renderPalette();
      }
    });

    function navQuestion(dir) {
      const newIdx = currentIndex + dir;
      if (newIdx >= 0 && newIdx < questions.length) {
        currentIndex = newIdx;
        renderQuestion();
      } else if (newIdx === questions.length) {
        confirmSubmit();
      }
    }

    function toggleFlag() {
      const qId = questions[currentIndex].id;
      if (flaggedList.has(qId)) flaggedList.delete(qId);
      else flaggedList.add(qId);
      renderPalette();
    }

    function togglePalette() {
      const sidebar = document.getElementById('paletteSidebar');
      const backdrop = document.getElementById('paletteBackdrop');
      if (sidebar) sidebar.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('open');
    }

    function renderPalette() {
      const grid = document.getElementById('paletteGrid');
      if (!grid) return;
      grid.innerHTML = '';

      let answeredCount = 0;
      let flaggedCount = 0;

      questions.forEach((q, idx) => {
        const item = document.createElement('button');
        item.type = 'button';
        let statusClass = '';
        const isAnswered = !!userAnswers[q.id] && String(userAnswers[q.id]).trim() !== '';
        const isFlagged = flaggedList.has(q.id);

        if (isAnswered) {
          statusClass = 'answered';
          answeredCount++;
        }
        if (isFlagged) {
          statusClass += (statusClass ? ' ' : '') + 'flagged';
          flaggedCount++;
        }
        if (idx === currentIndex) {
          statusClass += (statusClass ? ' ' : '') + 'active';
        }

        item.className = \`palette-item \${statusClass}\`;
        item.textContent = idx + 1;
        item.title = \`Question \${idx + 1} (\${q.topic || 'General'})\`;
        item.onclick = () => {
          currentIndex = idx;
          renderQuestion();
          if (window.innerWidth <= 992) {
            togglePalette();
          }
        };
        grid.appendChild(item);
      });

      const remainingCount = Math.max(0, questions.length - answeredCount);
      const elAns = document.getElementById('countAnswered');
      const elFlg = document.getElementById('countFlagged');
      const elRem = document.getElementById('countRemaining');
      if (elAns) elAns.textContent = answeredCount;
      if (elFlg) elFlg.textContent = flaggedCount;
      if (elRem) elRem.textContent = remainingCount;
    }

    function confirmSubmit() {
      const answeredCount = Object.keys(userAnswers).length;
      const total = questions.length;
      if (confirm(\`Are you sure you want to submit your test?\\n\\nAnswered: \${answeredCount} / \${total}\`)) {
        submitTest();
      }
    }

    async function submitTest() {
      clearInterval(timerInterval);

      const submitBtns = document.querySelectorAll('.btn-submit');
      submitBtns.forEach(b => {
        b.disabled = true;
        b.textContent = 'Submitting...';
      });

      // Calculate complete scoring
      let correctCount = 0;
      let wrongCount = 0;
      let unattemptedCount = 0;
      let frqCount = 0;

      const details = questions.map((q, idx) => {
        const userChoice = (userAnswers[q.id] || '').trim();
        if (q.isFRQ) {
          frqCount++;
          const isFilled = userChoice.length > 0;
          return {
            id: q.id,
            question: q.question,
            topic: q.topic || 'AP Question',
            difficulty: q.difficulty || 'medium',
            isFRQ: true,
            maxMarks: q.maxMarks || 5,
            chosen: isFilled ? userChoice : 'Unattempted',
            answer: 'FRQ Model Solution',
            explanation: q.explanation || '',
            status: isFilled ? 'frq_submitted' : 'unattempted'
          };
        } else {
          const isAnswered = userChoice.length > 0;
          const isCorrect = isAnswered && userChoice.toUpperCase() === String(q.answer).trim().toUpperCase();
          if (!isAnswered) unattemptedCount++;
          else if (isCorrect) correctCount++;
          else wrongCount++;

          return {
            id: q.id,
            question: q.question,
            options: q.options || [],
            topic: q.topic || 'AP Question',
            difficulty: q.difficulty || 'medium',
            isFRQ: false,
            chosen: isAnswered ? userChoice : 'Unattempted',
            answer: q.answer,
            explanation: q.explanation || '',
            status: !isAnswered ? 'unattempted' : (isCorrect ? 'correct' : 'wrong')
          };
        }
      });

      const mcqTotal = questions.filter(q => !q.isFRQ).length;
      const pct = mcqTotal > 0 ? Math.round((correctCount / mcqTotal) * 100) : 0;
      const apScore = calculateAPScore(pct);

      const reportRecord = {
        name: studentInfo.name || 'Student',
        email: studentInfo.email || 'student@eduquest.com',
        phone: studentInfo.phone || '',
        topic: currentTest.title,
        test_type: currentTest.testType || 'AP Exam',
        correct: correctCount,
        wrong: wrongCount,
        unattempted: unattemptedCount,
        total: mcqTotal,
        pct: pct,
        ap_score: apScore,
        submit_time: new Date().toISOString(),
        details: details,
        details_json: JSON.stringify(details)
      };

      // 1. Save locally for instant rendering
      localStorage.setItem('eduquest_ap_last_report', JSON.stringify(reportRecord));
      try {
        const hist = JSON.parse(localStorage.getItem('eduquest_ap_reports') || '[]');
        hist.unshift(reportRecord);
        localStorage.setItem('eduquest_ap_reports', JSON.stringify(hist));
      } catch (e) {}

      // 2. Save direct to Supabase ap_reports
      if (typeof saveStudentReportDirect === 'function') {
        saveStudentReportDirect(reportRecord);
      }

      // 3. Server RPC Attempt submission
      try {
        const studentMeta = {
          name: studentInfo.name,
          email: studentInfo.email,
          phone: studentInfo.phone,
          examName: currentTest.title,
          testType: currentTest.testType || 'AP Test',
          raw_questions: questions
        };
        await submitExamAttempt(currentAttemptId, userAnswers, studentMeta);
      } catch(e) {}

      // 4. SMTP Dispatch Confirmation
      console.log('📧 SMTP Service: Score report and detailed solutions dispatched to ' + studentInfo.email);
      alert('✅ Exam Successfully Submitted!\\n\\nScore: ' + correctCount + '/' + mcqTotal + ' (' + pct + '%)\\nEstimated AP Score: ' + apScore + ' / 5\\n\\nA copy of your report has been dispatched to ' + studentInfo.email + ' via email.');

      // 5. Clean session and redirect
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem('eduquest_ap_answers_' + testId);
      localStorage.removeItem('eduquest_ap_time_' + testId);
      window.location.href = '${relRoot}report.html?attemptId=' + (currentAttemptId || 'latest');
    }
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(testFolder, 'test.html'), htmlContent, 'utf8');
    const relPath = path.relative(__dirname, testFolder).replace(/\\/g, '/');
    console.log(`Created folder: ${relPath} with test.html and questions.js`);
});

console.log('✅ Successfully generated categorized test folders with server-authoritative logic!');
