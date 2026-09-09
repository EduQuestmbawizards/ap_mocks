/**
 * EduQuest AP Mock Test Platform - Automated Supabase Question Seeder
 * Run: node auto_seed.js
 * 
 * Automatically sends all 2,847 questions in batches of 50 to Supabase via RPC.
 * No copy-pasting required!
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SUPABASE_URL = 'https://dyvvhmuegtzooijrtwyd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';

// Load questions.js
const qContent = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(qContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);
const AP_TEST_DATA = sandbox.AP_TEST_DATA;

const allQuestions = [];
for (const testId of Object.keys(AP_TEST_DATA)) {
  const test = AP_TEST_DATA[testId];
  (test.questions || []).forEach((q, idx) => {
    allQuestions.push({
      id: q.id,
      test_id: testId,
      question_order: idx + 1,
      is_frq: !!q.isFRQ,
      answer_key: q.answer || '',
      topic: q.topic || test.topic || 'General',
      difficulty: q.difficulty || 'medium',
      question_text: q.question || '',
      options_json: q.options || [],
      explanation: q.explanation || q.rubric || ''
    });
  });
}

console.log(`Starting automated seed for ${allQuestions.length} questions across ${Object.keys(AP_TEST_DATA).length} tests...`);

async function seedBatch(batch, batchIndex, totalBatches) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/seed_questions_batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify({ p_batch: batch })
    });

    if (res.ok) {
      const inserted = await res.json();
      console.log(`✅ Batch [${batchIndex}/${totalBatches}] inserted ${inserted} questions.`);
      return true;
    } else {
      const err = await res.text();
      console.error(`❌ Batch [${batchIndex}/${totalBatches}] error (${res.status}):`, err);
      return false;
    }
  } catch (err) {
    console.error(`❌ Batch [${batchIndex}/${totalBatches}] network error:`, err.message);
    return false;
  }
}

async function run() {
  const BATCH_SIZE = 50;
  const totalBatches = Math.ceil(allQuestions.length / BATCH_SIZE);
  let successCount = 0;

  for (let i = 0; i < allQuestions.length; i += BATCH_SIZE) {
    const batch = allQuestions.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const ok = await seedBatch(batch, batchNum, totalBatches);
    if (ok) successCount += batch.length;
    // Brief pause to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\n================ SEED COMPLETE ================`);
  console.log(`Successfully seeded: ${successCount} / ${allQuestions.length} questions.`);
  if (successCount === 0) {
    console.log(`\nNote: If RPC returned 404, please make sure you ran schema.sql in the Supabase SQL Editor first!`);
  }
}

run();
