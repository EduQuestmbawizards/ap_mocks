import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Fix the duplicate options in E&M questions
with open('scratch/pt1_em_questions.json', 'r', encoding='utf-8') as f:
    em_qs = json.load(f)

# Fix Q24
em_qs[23]['options'] = [
    r'$\frac{L\mathcal{E}^2}{(2r+R)^2}$',
    r'$\frac{L\mathcal{E}^2}{2(2r+R)^2}$',
    r'$\frac{L\mathcal{E}^2}{4(2r+R)^2}$',
    r'$\frac{RL\mathcal{E}^2}{8(2r+R)^2}$',
    r'$\frac{L\mathcal{E}^2}{8(2r+R)^2}$'
]

# Fix Q29
em_qs[28]['options'] = [
    '6',
    '9',
    '12',
    '14',
    '15'
]

# Fix Q31
em_qs[30]['options'] = [
    r'$\frac{\varepsilon_0 A(2+3K)}{d}$',
    r'$\frac{3\varepsilon_0 A}{d(2K+1)}$',
    r'$\frac{K\varepsilon_0 A}{d(2K+1)}$',
    r'$\frac{3K\varepsilon_0 A}{d(2K+1)}$',
    r'$\frac{3K\varepsilon_0 A}{d(K+2)}$'
]

# Save clean pt1_em_questions.json
with open('scratch/pt1_em_questions.json', 'w', encoding='utf-8') as f:
    json.dump(em_qs, f, indent=4, ensure_ascii=False)

print("Updated scratch/pt1_em_questions.json with distinct, clean options!")
