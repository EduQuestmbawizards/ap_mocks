import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

json_str = re.sub(r'^\s*const\s+AP_TEST_DATA\s*=\s*', '', content).rstrip(';\n ')
all_tests = json.loads(json_str)

def normalize(text):
    t = re.sub(r'[\$\\\{\}\_\^\(\)\.\,\:\;]', '', text or '')
    return re.sub(r'\s+', ' ', t).strip().lower()

print(f"============================================================")
print(f"📊 GLOBAL PLATFORM SUMMARY (All Subjects)")
print(f"============================================================")
total_tests = len(all_tests)
total_questions = 0
global_question_hashes = {}
global_duplicates = []

subject_breakdown = {}

for test_id, test_data in all_tests.items():
    subject = test_data.get('subject', 'general')
    test_type = test_data.get('testType', 'Topic')
    title = test_data.get('title', test_id)
    qs = test_data.get('questions', [])
    q_count = len(qs)
    total_questions += q_count

    if subject not in subject_breakdown:
        subject_breakdown[subject] = {'tests': 0, 'questions': 0, 'list': []}
    subject_breakdown[subject]['tests'] += 1
    subject_breakdown[subject]['questions'] += q_count
    subject_breakdown[subject]['list'].append((test_id, title, q_count, test_type))

    # Check internal test uniqueness
    seen_in_test = set()
    for q in qs:
        norm = normalize(q.get('question', ''))
        seen_in_test.add(norm)
    if len(seen_in_test) != q_count and q_count > 0:
        print(f"⚠️ Internal duplicates in test {test_id}: {q_count - len(seen_in_test)} duplicate questions")

print(f"Total Tests on Platform: {total_tests}")
print(f"Total Questions across All Tests: {total_questions}\n")

print(f"============================================================")
print(f"⚡ AP PHYSICS C BREAKDOWN (Mechanics & E&M)")
print(f"============================================================")

physc_tests = [ (tid, t) for tid, t in all_tests.items() if 'physc' in tid or t.get('subject') in ['ap-phys-c-mech', 'ap-phys-c-em'] ]

physc_total_q = sum(len(t.get('questions', [])) for tid, t in physc_tests)
print(f"AP Physics C Total Tests: {len(physc_tests)}")
print(f"AP Physics C Total Questions: {physc_total_q}\n")

print(f"--- AP Physics C Full Mocks (Practice Exams) ---")
for tid, t in physc_tests:
    if t.get('testType') == 'Practice Exam' or 'mock' in tid:
        print(f"• {t.get('title')}: {len(t.get('questions', []))} MCQs (ID: {tid})")

print(f"\n--- AP Physics C Topic Tests ---")
for tid, t in physc_tests:
    if t.get('testType') != 'Practice Exam' and 'mock' not in tid:
        print(f"• {t.get('title')}: {len(t.get('questions', []))} MCQs (ID: {tid})")

print(f"\n============================================================")
print(f"📚 ALL OTHER AP SUBJECTS BREAKDOWN")
print(f"============================================================")
for subj, data in sorted(subject_breakdown.items()):
    if 'physc' not in subj:
        print(f"• {subj.upper()}: {data['tests']} tests | {data['questions']} questions")
