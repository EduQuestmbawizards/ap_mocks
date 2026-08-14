import glob, os, re

BASE = r'c:\Users\priya\OneDrive\Desktop\ap_mock'
all_js = glob.glob(os.path.join(BASE, 'tests', '**', 'questions.js'), recursive=True)

print(f"Checking {len(all_js)} subfolder questions.js files...\n")

broken_paths = []
ok_paths = []

for jspath in all_js:
    with open(jspath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all src= occurrences referencing images
    matches = re.findall(r'src=\\"([^"]+)\\"', content)
    matches += re.findall(r"src='([^']+)'", content)

    for m in matches:
        if 'images/' in m:
            rel = os.path.relpath(jspath, BASE)
            if m.startswith('/'):
                ok_paths.append((rel, m))
            else:
                broken_paths.append((rel, m))

print(f"BROKEN (relative) paths: {len(broken_paths)}")
for p, m in broken_paths:
    print(f"  FILE: {p}")
    print(f"  SRC : {m}")
    print()

print(f"\nOK (absolute) paths: {len(ok_paths)}")
for p, m in ok_paths:
    print(f"  OK: {m}  ({os.path.basename(p)})")
