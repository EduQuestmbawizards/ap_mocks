const fs = require('fs');
const path = require('path');
const vm = require('vm');

const questionsJsContent = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(questionsJsContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);
const AP_TEST_DATA = sandbox.AP_TEST_DATA;

const testIds = Object.keys(AP_TEST_DATA);
console.log(`Starting comprehensive question integrity audit across ${testIds.length} tests...`);

let totalQuestions = 0;
let totalMCQ = 0;
let totalFRQ = 0;
const issues = [];
const seenGlobalIds = new Set();
const placeholderRegex = /^(?:Option\s+[A-E]|\([A-E]\)|Option\s+\d+|Placeholder)$/i;

testIds.forEach(testId => {
  const test = AP_TEST_DATA[testId];
  if (!test) {
    issues.push({ testId, error: 'Test data missing or null' });
    return;
  }
  const qs = test.questions || [];
  const seenTestIds = new Set();
  const seenTestTexts = new Set();

  qs.forEach((q, idx) => {
    totalQuestions++;
    const qNum = idx + 1;

    // 1. Question ID checks
    if (!q.id) {
      issues.push({ testId, qNum, error: 'Missing question ID' });
    } else {
      if (seenTestIds.has(q.id)) {
        issues.push({ testId, qId: q.id, qNum, error: 'Duplicate question ID within test' });
      }
      seenTestIds.add(q.id);
    }

    // 2. Question text checks
    if (!q.question || q.question.trim() === '') {
      issues.push({ testId, qId: q.id, qNum, error: 'Empty question text' });
    } else {
      const normText = q.question.trim().replace(/\s+/g, ' ');
      if (seenTestTexts.has(normText)) {
        issues.push({ testId, qId: q.id, qNum, error: 'Exact duplicate question text within same test' });
      }
      seenTestTexts.add(normText);
    }

    // 3. FRQ vs MCQ checks
    if (q.isFRQ) {
      totalFRQ++;
      if (!q.rubric && !q.explanation) {
        issues.push({ testId, qId: q.id, qNum, error: 'FRQ missing rubric or explanation' });
      }
    } else {
      totalMCQ++;

      // MCQ options check
      if (!Array.isArray(q.options) || q.options.length === 0) {
        issues.push({ testId, qId: q.id, qNum, error: 'Empty or missing options array' });
      } else if (q.options.length < 4) {
        issues.push({ testId, qId: q.id, qNum, error: `Fewer than 4 options (found ${q.options.length})` });
      } else {
        // Check for placeholder options
        q.options.forEach((opt, oIdx) => {
          if (!opt || opt.toString().trim() === '') {
            issues.push({ testId, qId: q.id, qNum, error: `Empty option at index ${oIdx}` });
          } else if (placeholderRegex.test(opt.toString().trim())) {
            issues.push({ testId, qId: q.id, qNum, error: `Suspicious placeholder option string: "${opt}"` });
          }
        });

        // Check for duplicate options
        const optSet = new Set(q.options.map(o => (o || '').toString().trim()));
        if (optSet.size !== q.options.length) {
          issues.push({ testId, qId: q.id, qNum, error: 'Duplicate options within question', options: q.options });
        }
      }

      // Answer key check
      const validAnswers = ['A', 'B', 'C', 'D', 'E'];
      if (!validAnswers.includes(q.answer)) {
        issues.push({ testId, qId: q.id, qNum, error: `Invalid answer key: "${q.answer}"` });
      }

      // Explanation check
      if (!q.explanation || q.explanation.trim() === '') {
        issues.push({ testId, qId: q.id, qNum, error: 'Missing explanation' });
      }
    }

    // 4. Image check
    const imgMatches = (q.question || '').match(/<img[^>]+src=["']([^"']+)["']/g);
    if (imgMatches) {
      imgMatches.forEach(imgTag => {
        const src = imgTag.match(/src=["']([^"']+)["']/)[1];
        const cleanSrc = src.replace(/^\/?(?:\.\.\/)*images\//, '');
        const fullImgPath = path.join(__dirname, 'images', cleanSrc);
        if (!fs.existsSync(fullImgPath)) {
          issues.push({ testId, qId: q.id, qNum, error: `Referenced image does not exist on disk: "${src}"` });
        }
      });
    }
  });
});

console.log(`\n================ INTEGRITY AUDIT RESULTS ================`);
console.log(`Total tests: ${testIds.length}`);
console.log(`Total questions: ${totalQuestions}`);
console.log(`MCQ questions: ${totalMCQ}`);
console.log(`FRQ questions: ${totalFRQ}`);
console.log(`Total defects found: ${issues.length}`);

if (issues.length > 0) {
  console.log(`\nDefects Breakdown:`);
  issues.forEach(i => console.log(JSON.stringify(i)));
} else {
  console.log(`\n✅ ZERO DEFECTS! Platform question data is 100% structurally intact.`);
}

fs.writeFileSync(path.join(__dirname, 'full_integrity_report.json'), JSON.stringify({
  totalTests: testIds.length,
  totalQuestions,
  totalMCQ,
  totalFRQ,
  defectsCount: issues.length,
  issues
}, null, 2), 'utf8');
console.log('Saved full_integrity_report.json');
