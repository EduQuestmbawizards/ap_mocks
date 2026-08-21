import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

for filename in ['scratch/topic_kinematics.json', 'scratch/topic_forces.json', 'scratch/topic_energy.json', 'scratch/topic_mech_drills.json']:
    with open(filename, 'r', encoding='utf-8') as f:
        qs = json.load(f)
    print(f'Checking {filename} ({len(qs)} questions)...')
    found_any = False
    for q in qs:
        for field in ['question', 'topic', 'section', 'explanation']:
            val = q.get(field, '')
            if re.search(r'\bChapter\b|\bCh\.\b', val, re.IGNORECASE):
                print(f"  Found Chapter in Q{q['global_num']} field {field}: {val[:80]}")
                found_any = True
    if not found_any:
        print("  [PASS] No chapter names/numbers found!")

print('Audit complete!')
