const fs = require('fs');
const path = require('path');

// Load main questions.js
const questionsJsContent = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');

// Evaluate AP_TEST_DATA from questions.js
const vm = require('vm');
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

    // 2. Create individual test.html for this test
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${AP_TEST_DATA[testId].title} – EduQuest AP</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
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
      <button class="btn-nav" onclick="togglePalette()">📋 Palette</button>
      <button class="btn-nav btn-submit" onclick="confirmSubmit()">Submit Test</button>
    </div>
  </header>

  <!-- BODY CONTENT -->
  <div class="test-body">
    <div class="question-area">
      <div class="q-meta-row">
        <div class="q-number" id="qNumber">Question 1 of 1</div>
        <div class="q-tags">
          <span class="tag" id="qTopicTag">${AP_TEST_DATA[testId].topic || 'AP Calculus'}</span>
          <span class="tag medium" id="qDiffTag">Medium</span>
        </div>
      </div>

      <!-- Question Text -->
      <div class="q-text" id="qText">Loading question content...</div>

      <!-- MCQ Options -->
      <div class="options-list" id="optionsList"></div>

      <!-- FRQ Input Box -->
      <div class="frq-box" id="frqBox" style="display:none;">
        <label style="display:block; font-size:0.85rem; font-weight:700; color:rgba(255,255,255,0.6); margin-bottom:8px;">FREE RESPONSE SOLUTION</label>
        <textarea id="frqTextarea" class="frq-textarea" placeholder="Type your step-by-step mathematical work, justification, or final numerical answer here..."></textarea>
      </div>
    </div>
  </div>

  <!-- BOTTOM FOOTER NAVIGATION -->
  <footer class="test-ftr">
    <button class="btn-nav" id="btnPrev" onclick="navQuestion(-1)">← Previous</button>
    <button class="btn-nav" id="btnFlag" onclick="toggleFlag()">🚩 Flag for Review</button>
    <button class="btn-nav btn-primary" id="btnNext" onclick="navQuestion(1)">Next Question →</button>
  </footer>

  <!-- PALETTE DRAWER -->
  <div class="palette-modal" id="paletteDrawer">
    <h3 style="font-family:'Syne',sans-serif; font-size:1.1rem; margin-bottom:12px;">Question Navigator</h3>
    <div class="palette-grid" id="paletteGrid"></div>
  </div>

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

    document.addEventListener('DOMContentLoaded', async () => {
      currentTest = AP_TEST_DATA[testId];
      questions = currentTest.questions || [];
      const durationSeconds = (currentTest.timeLimitMinutes || 45) * 60;

      // Secure timestamp-based session persistence
      let sessionData = null;
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (raw) sessionData = JSON.parse(raw);
      } catch (e) { }

      const now = Date.now();
      if (sessionData && sessionData.endTime && sessionData.startTime) {
        // Tamper guard: prevent extending endTime beyond configured test duration
        const maxAllowedEnd = sessionData.startTime + (durationSeconds * 1000) + 5000;
        if (sessionData.endTime > maxAllowedEnd) {
          sessionData.endTime = maxAllowedEnd;
        }
        examEndTime = sessionData.endTime;
        timeRemaining = Math.max(0, Math.floor((examEndTime - now) / 1000));
      } else {
        const startTime = now;
        examEndTime = startTime + (durationSeconds * 1000);
        timeRemaining = durationSeconds;
        localStorage.setItem(SESSION_KEY, JSON.stringify({
          startTime,
          endTime: examEndTime,
          durationSeconds
        }));
      }

      document.getElementById('testTitle').textContent = currentTest.title;
      document.getElementById('testBadge').textContent = currentTest.testType || 'AP Prep';

      const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      const { data: { session } } = await client.auth.getSession();
      if (session && session.user) {
        studentInfo.email = session.user.email;
        studentInfo.name = session.user.user_metadata?.full_name || session.user.email.split('@')[0];
        studentInfo.phone = session.user.user_metadata?.phone || '';
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
          localStorage.removeItem(\`eduquest_ap_time_\${testId}\`);
          alert('⏰ Time limit reached! Submitting test automatically.');
          submitTest();
          return;
        }

        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        const display = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
        const el = document.getElementById('timerDisplay');
        if (el) el.textContent = display;

        if (timeRemaining < 300) {
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
          
          // Fix paths and strip outer <p> tags from option content
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

      // Typeset math using KaTeX and/or MathJax
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

      const btnPrev = document.getElementById('btnPrev');
      const btnNext = document.getElementById('btnNext');
      btnPrev.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
      btnNext.textContent = currentIndex === questions.length - 1 ? 'Review & Submit' : 'Next Question →';
      renderPalette();
    }

    function selectOption(qId, pref) {
      userAnswers[qId] = pref;
      renderQuestion();
    }

    document.getElementById('frqTextarea').addEventListener('input', (e) => {
      const q = questions[currentIndex];
      if (q && q.isFRQ) {
        userAnswers[q.id] = e.target.value;
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
      document.getElementById('paletteDrawer').classList.toggle('open');
    }

    function renderPalette() {
      const grid = document.getElementById('paletteGrid');
      grid.innerHTML = '';

      questions.forEach((q, idx) => {
        const item = document.createElement('div');
        let statusClass = '';
        if (userAnswers[q.id]) statusClass = 'answered';
        if (flaggedList.has(q.id)) statusClass = 'flagged';
        if (idx === currentIndex) statusClass += ' active';

        item.className = \`palette-item \${statusClass}\`;
        item.textContent = idx + 1;
        item.onclick = () => {
          currentIndex = idx;
          renderQuestion();
          document.getElementById('paletteDrawer').classList.remove('open');
        };
        grid.appendChild(item);
      });
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
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(\`eduquest_ap_time_\${testId}\`);

      let correct = 0;
      let wrong = 0;
      let unattempted = 0;
      let frqCount = 0;
      const details = [];

      questions.forEach(q => {
        const chosen = userAnswers[q.id];
        let status = 'unattempted';

        if (!chosen || chosen.toString().trim() === '') {
          unattempted++;
        } else if (q.isFRQ) {
          status = 'frq_submitted';
          frqCount++;
          // FRQs are student-written work evaluated against rubrics; not auto-scored as MCQ correct
        } else if (chosen === q.answer) {
          correct++;
          status = 'correct';
        } else {
          wrong++;
          status = 'wrong';
        }

        details.push({
          id: q.id,
          topic: q.topic || 'General',
          difficulty: q.difficulty || 'medium',
          status: status,
          isFRQ: !!q.isFRQ,
          chosen: chosen || 'Unattempted',
          answer: q.answer,
          question: q.question,
          options: q.options || [],
          explanation: q.explanation || q.rubric || ''
        });
      });

      const mcqQuestions = questions.filter(q => !q.isFRQ);
      const mcqTotal = mcqQuestions.length;
      const total = questions.length;
      const pct = mcqTotal > 0 ? Math.round((correct / mcqTotal) * 100) : 100;
      const apScore = calculateAPScore(pct);

      const result = {
        student: studentInfo,
        examName: currentTest.title,
        testType: currentTest.testType || 'AP Test',
        topicNumber: 1,
        correct,
        wrong,
        unattempted,
        total,
        pct,
        ap_score: apScore,
        submitTime: new Date().toISOString(),
        answers: userAnswers,
        details: details
      };

      localStorage.setItem('eduquest_ap_last_report', JSON.stringify(result));
      await saveToSupabase(result);
      window.location.href = '${relRoot}report.html';
    }
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(testFolder, 'test.html'), htmlContent, 'utf8');
    const relPath = path.relative(__dirname, testFolder).replace(/\\/g, '/');
    console.log(`Created folder: ${relPath} with test.html and questions.js`);
});

console.log('✅ Successfully generated categorized test folders!');
