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
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
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

    document.addEventListener('DOMContentLoaded', async () => {
      currentTest = AP_TEST_DATA[testId];
      questions = currentTest.questions || [];
      const durationSeconds = (currentTest.timeLimitMinutes || 45) * 60;

      document.getElementById('testTitle').textContent = currentTest.title;
      document.getElementById('testBadge').textContent = currentTest.testType || 'AP Prep';

      // Load authenticated student info
      const client = getSupabaseClient() || (window.supabase && window.supabase.createClient ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey) : null);
      if (client && client.auth) {
        try {
          const { data: { session } } = await client.auth.getSession();
          if (session && session.user) {
            studentInfo.email = session.user.email;
            studentInfo.name = session.user.user_metadata?.full_name || session.user.email.split('@')[0];
            studentInfo.phone = session.user.user_metadata?.phone || '';
          }
        } catch (e) {}
      }

      // Restore temporary user answers from localStorage for UI recovery
      try {
        const savedAns = localStorage.getItem(\`eduquest_ap_answers_\${testId}\`);
        if (savedAns) userAnswers = JSON.parse(savedAns);
      } catch (e) {}

      // Server-authoritative attempt initialization via create_exam_attempt RPC
      let attemptRes = await createExamAttempt(testId, studentInfo.email, durationSeconds);
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

      // Save registration log to ap_user
      saveRegistration(studentInfo, currentTest.title);

      if (timeRemaining <= 0) {
        alert('⏰ Test time limit has expired! Submitting test automatically.');
        submitTest();
        return;
      }

      startTimer();
      renderQuestion();
      renderPalette();
    });

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

      document.getElementById('qText').innerHTML = fixImgPaths(q.question || '');

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
          
          let renderedOpt = fixImgPaths(optText || '');
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

      // Prepare payload: raw answers and question metadata for server evaluation.
      // Client-calculated scores are NEVER sent.
      const studentMeta = {
        name: studentInfo.name,
        email: studentInfo.email,
        phone: studentInfo.phone,
        examName: currentTest.title,
        testType: currentTest.testType || 'AP Test',
        raw_questions: questions.map(q => ({
          id: q.id,
          isFRQ: !!q.isFRQ,
          answer: q.answer || '',
          topic: q.topic || 'General',
          difficulty: q.difficulty || 'medium',
          question: q.question,
          options: q.options || [],
          explanation: q.explanation || q.rubric || ''
        }))
      };

      try {
        const subRes = await submitExamAttempt(currentAttemptId, userAnswers, studentMeta);

        // Clear temporary UI persistence
        localStorage.removeItem(SESSION_KEY);
        localStorage.removeItem(\`eduquest_ap_answers_\${testId}\`);
        localStorage.removeItem(\`eduquest_ap_time_\${testId}\`);
        localStorage.removeItem('eduquest_ap_last_report');

        if (subRes && subRes.ok) {
          console.log('✅ Server RPC processed submission. Redirecting to authoritative report...');
          window.location.href = \`${relRoot}report.html?attemptId=\${currentAttemptId}\`;
          return;
        } else {
          const msg = subRes?.msg || 'Submission rejected by server.';
          alert('Submission Notice: ' + msg);
          if (currentAttemptId) {
            window.location.href = \`${relRoot}report.html?attemptId=\${currentAttemptId}\`;
          } else {
            window.location.href = \`${relRoot}index.html\`;
          }
        }
      } catch (err) {
        console.error('Submission error:', err);
        alert('Network error during submission. Please check connection and try again.');
        submitBtns.forEach(b => {
          b.disabled = false;
          b.textContent = 'Submit Test';
        });
      }
    }
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(testFolder, 'test.html'), htmlContent, 'utf8');
    const relPath = path.relative(__dirname, testFolder).replace(/\\/g, '/');
    console.log(`Created folder: ${relPath} with test.html and questions.js`);
});

console.log('✅ Successfully generated categorized test folders with server-authoritative logic!');
