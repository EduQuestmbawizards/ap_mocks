import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/topic_kinematics.json', 'r', encoding='utf-8') as f:
    kin_qs = json.load(f)

with open('scratch/topic_forces.json', 'r', encoding='utf-8') as f:
    forces_qs = json.load(f)

with open('scratch/topic_energy.json', 'r', encoding='utf-8') as f:
    energy_qs = json.load(f)

combined_qs = []

# Section 1: Kinematics (1-12)
for i, q in enumerate(kin_qs):
    item = dict(q)
    item['id'] = f"kfe-q{i+1}"
    item['global_num'] = i + 1
    item['section'] = "Kinematics & 1D/2D Motion"
    combined_qs.append(item)

# Section 2: Newton's Laws & Forces (13-24)
for i, q in enumerate(forces_qs):
    num = 12 + i + 1
    item = dict(q)
    item['id'] = f"kfe-q{num}"
    item['global_num'] = num
    item['section'] = "Newton's Laws & Friction Dynamics"
    combined_qs.append(item)

# Section 3: Work, Energy & Power (25-34)
for i, q in enumerate(energy_qs):
    num = 24 + i + 1
    item = dict(q)
    item['id'] = f"kfe-q{num}"
    item['global_num'] = num
    item['section'] = "Work, Energy & Power"
    combined_qs.append(item)

print(f"Total combined questions: {len(combined_qs)}")

with open('scratch/combined_kfe_questions.json', 'w', encoding='utf-8') as f:
    json.dump(combined_qs, f, indent=4, ensure_ascii=False)

print("Saved scratch/combined_kfe_questions.json successfully!")
