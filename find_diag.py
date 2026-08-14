with open('tests/diagnostic/ap-phys-1/ap-diag-phys1/questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re

for m in re.finditer(r'"id":\s*"(\w+)".*?"question":\s*"(.*?)"', content, re.DOTALL):
    qid = m.group(1)
    qtext = m.group(2)[:300]
    keywords = ['above', 'pictured', 'shown below', 'figure', 'diagram', 'indicated']
    if any(x in qtext.lower() for x in keywords):
        print(f'ID: {qid}')
        print(f'  Q: {qtext[:150]}')
        print()
