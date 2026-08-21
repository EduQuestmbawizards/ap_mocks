import json
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pt1_mech_questions.json', 'r', encoding='utf-8') as f:
    mech_qs = json.load(f)

with open('scratch/pt1_em_questions.json', 'r', encoding='utf-8') as f:
    em_qs = json.load(f)

def normalize_text(text):
    # remove latex formatting, punctuation, and lowercase
    t = re.sub(r'[\$\\\{\}\_\^\(\)\.\,\:\;]', '', text)
    t = re.sub(r'\s+', ' ', t).strip().lower()
    return t

print("=== 1. CHECKING FOR DUPLICATES WITHIN MECHANICS TEST 1 (35 Questions) ===")
mech_seen = {}
mech_dups = []
for i, q in enumerate(mech_qs):
    norm = normalize_text(q['question'])
    if norm in mech_seen:
        mech_dups.append((mech_seen[norm] + 1, i + 1, q['question'][:60]))
    else:
        mech_seen[norm] = i

if not mech_dups:
    print("✅ Mechanics Test 1 me koi bhi duplicate question nahi hai (All 35 questions are 100% unique).")
else:
    for d in mech_dups:
        print(f"⚠️ Duplicate found: Q{d[0]} and Q{d[1]}: {d[2]}")

print("\n=== 2. CHECKING FOR DUPLICATES WITHIN E&M TEST 1 (35 Questions) ===")
em_seen = {}
em_dups = []
for i, q in enumerate(em_qs):
    norm = normalize_text(q['question'])
    if norm in em_seen:
        em_dups.append((em_seen[norm] + 1, i + 1, q['question'][:60]))
    else:
        em_seen[norm] = i

if not em_dups:
    print("✅ E&M Test 1 me koi bhi duplicate question nahi hai (All 35 questions are 100% unique).")
else:
    for d in em_dups:
        print(f"⚠️ Duplicate found: Q{d[0]} and Q{d[1]}: {d[2]}")

print("\n=== 3. CHECKING CROSS-TEST DUPLICATES (Mechanics vs E&M) ===")
cross_dups = []
for i, qm in enumerate(mech_qs):
    norm_m = normalize_text(qm['question'])
    for j, qe in enumerate(em_qs):
        norm_e = normalize_text(qe['question'])
        if norm_m == norm_e:
            cross_dups.append((i + 1, j + 1, qm['question'][:60]))

if not cross_dups:
    print("✅ Mechanics aur E&M ke beech koi overlap/duplicate nahi hai (Subjects are completely distinct).")
else:
    for d in cross_dups:
        print(f"⚠️ Cross Duplicate found: Mech Q{d[0]} and E&M Q{d[1]}: {d[2]}")
