"""
Full code audit: find all image references in all questions.js files,
check if the image exists, and report missing ones.
"""
import os, re, glob

BASE = r'c:\Users\priya\OneDrive\Desktop\ap_mock'
IMAGES_DIR = os.path.join(BASE, 'images')

# Get all available images
available_images = set(f.lower() for f in os.listdir(IMAGES_DIR))
print(f"Total images available: {len(available_images)}")
print()

# Find all questions.js files
all_js = glob.glob(os.path.join(BASE, 'tests', '**', 'questions.js'), recursive=True)
all_js.append(os.path.join(BASE, 'questions.js'))

missing = []  # (file, question_id, image_src)
found   = []  # (file, question_id, image_src)

for jspath in all_js:
    with open(jspath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all image src references
    img_refs = re.findall(r'src=\\"(/?)images/([^"\\]+)\\"', content)
    img_refs += re.findall(r"src='(/?)images/([^']+)'", content)

    if not img_refs:
        continue

    rel_path = os.path.relpath(jspath, BASE)

    for slash, imgfile in img_refs:
        imgfile_clean = imgfile.strip()
        exists = imgfile_clean.lower() in available_images

        # Find nearest question id
        # search backwards from the img reference position for the nearest "id":
        idx = content.find(imgfile_clean)
        snippet = content[max(0, idx-500):idx]
        id_match = list(re.finditer(r'"id":\s*"([^"]+)"', snippet))
        qid = id_match[-1].group(1) if id_match else '?'

        if exists:
            found.append((rel_path, qid, imgfile_clean))
        else:
            missing.append((rel_path, qid, imgfile_clean))

print(f"{'='*60}")
print(f"MISSING IMAGES ({len(missing)} references):")
print(f"{'='*60}")
for f, qid, img in missing:
    print(f"  FILE: {f}")
    print(f"  Q-ID: {qid}")
    print(f"  IMG : {img}")
    print()

print(f"{'='*60}")
print(f"OK IMAGES ({len(found)} references):")
print(f"{'='*60}")
for f, qid, img in found:
    print(f"  OK  : {img}  (in {os.path.basename(f)}, q={qid})")
