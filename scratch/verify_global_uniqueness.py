import json
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

# Load questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse JSON part of questions.js
json_str = re.sub(r'^\s*const\s+AP_TEST_DATA\s*=\s*', '', content).rstrip(';\n ')
all_tests = json.loads(json_str)

mech_test = all_tests.get('ap-mock-physc-mech-1', {})
em_test = all_tests.get('ap-mock-physc-em-1', {})

mech_questions = mech_test.get('questions', [])
em_questions = em_test.get('questions', [])

def normalize(text):
    t = re.sub(r'[\$\\\{\}\_\^\(\)\.\,\:\;]', '', text or '')
    return re.sub(r'\s+', ' ', t).strip().lower()

print(f"Total tests in system: {len(all_tests)}")
print(f"Mechanics Practice Test 1 questions: {len(mech_questions)}")
print(f"E&M Practice Test 1 questions: {len(em_questions)}")

# Check uniqueness of questions in Mech Test 1
mech_set = set()
for q in mech_questions:
    n = normalize(q['question'])
    mech_set.add(n)

print(f"Unique questions in Mechanics Test 1: {len(mech_set)} / {len(mech_questions)}")

# Check uniqueness of questions in E&M Test 1
em_set = set()
for q in em_questions:
    n = normalize(q['question'])
    em_set.add(n)

print(f"Unique questions in E&M Test 1: {len(em_set)} / {len(em_questions)}")
