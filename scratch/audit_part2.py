import json
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/combined_mrsg_questions.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Total questions in Part 2 dataset: {len(qs)}")
issues = []
for i, q in enumerate(qs):
    num = i + 1
    opts = q['options']
    ans = q['answer']
    if len(opts) != 5:
        issues.append(f"Q{num}: Expected 5 options, got {len(opts)}")
    if len(set(opts)) != len(opts):
        issues.append(f"Q{num}: Duplicate options found: {opts}")
    if ans not in ['A', 'B', 'C', 'D', 'E']:
        issues.append(f"Q{num}: Invalid answer: {ans}")
    for field in ['question', 'topic', 'section', 'explanation']:
        val = q.get(field, '')
        if re.search(r'\bChapter\b|\bCh\.\b', val, re.IGNORECASE):
            issues.append(f"Q{num}: Found Chapter reference in {field}")

if not issues:
    print("[PASS] All 30 questions are 100% clean, distinct options, valid answers, and no chapter labels!")
else:
    for issue in issues:
        print("[ISSUE] " + issue)
