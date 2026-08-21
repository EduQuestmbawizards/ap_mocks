import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pt1_mech_questions.json', 'r', encoding='utf-8') as f:
    mech_qs = json.load(f)

with open('scratch/pt1_em_questions.json', 'r', encoding='utf-8') as f:
    em_qs = json.load(f)

print('=== 1. MECHANICS TEST AUDIT (35 Questions) ===')
mech_issues = []
for i, q in enumerate(mech_qs):
    num = i + 1
    opts = q.get('options', [])
    ans = q.get('answer', '')
    if len(opts) != 5:
        mech_issues.append(f"Q{num}: Expected 5 options, found {len(opts)}")
    if len(set(opts)) != len(opts):
        mech_issues.append(f"Q{num}: Duplicate options found: {opts}")
    if ans not in ['A', 'B', 'C', 'D', 'E']:
        mech_issues.append(f"Q{num}: Invalid answer: {ans}")
    if not q.get('question'):
        mech_issues.append(f"Q{num}: Missing question text")
    if not q.get('explanation'):
        mech_issues.append(f"Q{num}: Missing explanation")

if not mech_issues:
    print("[PASS] All 35 Mechanics questions are 100% clean, no duplicate options, valid answers and explanations!")
else:
    for issue in mech_issues:
        print("[ISSUE] " + issue)

print('\n=== 2. E&M TEST AUDIT (35 Questions) ===')
em_issues = []
for i, q in enumerate(em_qs):
    num = i + 1
    opts = q.get('options', [])
    ans = q.get('answer', '')
    if len(opts) != 5:
        em_issues.append(f"Q{num}: Expected 5 options, found {len(opts)}")
    if len(set(opts)) != len(opts):
        em_issues.append(f"Q{num}: Duplicate options found: {opts}")
    if ans not in ['A', 'B', 'C', 'D', 'E']:
        em_issues.append(f"Q{num}: Invalid answer: {ans}")
    if not q.get('question'):
        em_issues.append(f"Q{num}: Missing question text")
    if not q.get('explanation'):
        em_issues.append(f"Q{num}: Missing explanation")

if not em_issues:
    print("[PASS] All 35 E&M questions are 100% clean!")
else:
    for issue in em_issues:
        print("[ISSUE] " + issue)
