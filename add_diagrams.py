"""
Fix missing diagrams in AP Physics 1 Diagnostic questions.js
1. Fix broken image paths: images/ -> /images/
2. Add inline SVG diagrams for dphys1_1, dphys1_18, dphys1_20
"""

FPATH = 'tests/diagnostic/ap-phys-1/ap-diag-phys1/questions.js'

with open(FPATH, 'r', encoding='utf-8') as f:
    content = f.read()

# ─── 1. Fix all image paths ────────────────────────────────────────────────────
content = content.replace('src=\\"images/', 'src=\\"/images/')
content = content.replace("src='images/", "src='/images/")
print("Fixed image paths")

# ─── 2. SVG for dphys1_1: Mass on angled rope from ceiling + horizontal rope ──
svg_ropes = (
    '<p style=\\"text-align:center;margin:12px 0\\">'
    '<svg width=\\"220\\" height=\\"160\\" viewBox=\\"0 0 220 160\\" '
    'style=\\"background:transparent;\\" xmlns=\\"http://www.w3.org/2000/svg\\">'
    # Ceiling hatch
    '<rect x=\\"40\\" y=\\"0\\" width=\\"140\\" height=\\"10\\" fill=\\"#666\\"/>'
    '<line x1=\\"50\\" y1=\\"0\\" x2=\\"40\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"70\\" y1=\\"0\\" x2=\\"60\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"90\\" y1=\\"0\\" x2=\\"80\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"110\\" y1=\\"0\\" x2=\\"100\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"130\\" y1=\\"0\\" x2=\\"120\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"150\\" y1=\\"0\\" x2=\\"140\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"170\\" y1=\\"0\\" x2=\\"160\\" y2=\\"10\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    # Angled rope T2 (steep, >45 from horizontal)
    '<line x1=\\"90\\" y1=\\"10\\" x2=\\"130\\" y2=\\"110\\" stroke=\\"#fff\\" stroke-width=\\"2\\"/>'
    # Angle arc
    '<path d=\\"M 90 35 Q 100 28 108 35\\" fill=\\"none\\" stroke=\\"#aaa\\" stroke-width=\\"1\\"/>'
    '<text x=\\"95\\" y=\\"50\\" fill=\\"#aaa\\" font-size=\\"11\\" font-family=\\"serif\\">&#x3B8;&gt;45&#xB0;</text>'
    # T2 label
    '<text x=\\"95\\" y=\\"70\\" fill=\\"#ccc\\" font-size=\\"12\\" font-family=\\"serif\\">T&#x2082;</text>'
    # Mass block
    '<rect x=\\"117\\" y=\\"105\\" width=\\"26\\" height=\\"26\\" rx=\\"4\\" fill=\\"#6c63ff\\" stroke=\\"#fff\\" stroke-width=\\"1.5\\"/>'
    '<text x=\\"130\\" y=\\"122\\" text-anchor=\\"middle\\" fill=\\"#fff\\" font-size=\\"12\\" font-family=\\"serif\\">m</text>'
    # Horizontal rope T (to right wall)
    '<line x1=\\"143\\" y1=\\"118\\" x2=\\"205\\" y2=\\"118\\" stroke=\\"#fff\\" stroke-width=\\"2\\"/>'
    # Wall right
    '<rect x=\\"205\\" y=\\"90\\" width=\\"10\\" height=\\"56\\" fill=\\"#666\\"/>'
    '<line x1=\\"205\\" y1=\\"95\\" x2=\\"215\\" y2=\\"85\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"205\\" y1=\\"107\\" x2=\\"215\\" y2=\\"97\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"205\\" y1=\\"119\\" x2=\\"215\\" y2=\\"109\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"205\\" y1=\\"131\\" x2=\\"215\\" y2=\\"121\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    # T label
    '<text x=\\"168\\" y=\\"112\\" fill=\\"#ccc\\" font-size=\\"12\\" font-family=\\"serif\\">T</text>'
    # Weight arrow downward
    '<line x1=\\"130\\" y1=\\"131\\" x2=\\"130\\" y2=\\"150\\" stroke=\\"#ff6b6b\\" stroke-width=\\"2\\"/>'
    '<polygon points=\\"126,148 134,148 130,156\\" fill=\\"#ff6b6b\\"/>'
    '<text x=\\"135\\" y=\\"155\\" fill=\\"#ff6b6b\\" font-size=\\"11\\" font-family=\\"serif\\">mg</text>'
    '</svg></p>'
)

# Insert SVG into dphys1_1 question - after the question text, before closing "
OLD_Q1 = (
    '"question": "A mass is suspended from the ceiling by one rope at an angle as indicated. '
    'The mass is held in place by a second, horizontal rope. Without knowing the exact angle from '
    'the ceiling, except that it is greater than 45 degrees, which statement best represents the '
    'possible value for tension in the horizontal line?</p>"'
)
NEW_Q1 = (
    '"question": "A mass is suspended from the ceiling by one rope at an angle as indicated. '
    'The mass is held in place by a second, horizontal rope. Without knowing the exact angle from '
    'the ceiling, except that it is greater than 45 degrees, which statement best represents the '
    'possible value for tension in the horizontal line?</p>' + svg_ropes + '"'
)

if OLD_Q1 in content:
    content = content.replace(OLD_Q1, NEW_Q1)
    print("Added diagram to dphys1_1")
else:
    print("WARNING: dphys1_1 pattern not found - check manually")


# ─── 3. SVG for dphys1_18: Rod with forces A, B, C ───────────────────────────
svg_rod = (
    '<p style=\\"text-align:center;margin:12px 0\\">'
    '<svg width=\\"320\\" height=\\"140\\" viewBox=\\"0 0 320 140\\" '
    'style=\\"background:transparent;\\" xmlns=\\"http://www.w3.org/2000/svg\\">'
    # Fixed axis (pivot) left
    '<circle cx=\\"30\\" cy=\\"80\\" r=\\"8\\" fill=\\"none\\" stroke=\\"#fff\\" stroke-width=\\"2\\"/>'
    '<line x1=\\"20\\" y1=\\"80\\" x2=\\"10\\" y2=\\"70\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    '<line x1=\\"20\\" y1=\\"80\\" x2=\\"10\\" y2=\\"90\\" stroke=\\"#888\\" stroke-width=\\"1\\"/>'
    # Wall at left
    '<rect x=\\"0\\" y=\\"60\\" width=\\"10\\" height=\\"40\\" fill=\\"#555\\"/>'
    # Rod (horizontal)
    '<rect x=\\"38\\" y=\\"76\\" width=\\"240\\" height=\\"8\\" rx=\\"2\\" fill=\\"#8888cc\\"/>'
    # Force A: upward at x=90 (close to pivot)
    '<line x1=\\"90\\" y1=\\"76\\" x2=\\"90\\" y2=\\"36\\" stroke=\\"#4ade80\\" stroke-width=\\"2\\"/>'
    '<polygon points=\\"86,40 94,40 90,30\\" fill=\\"#4ade80\\"/>'
    '<text x=\\"96\\" y=\\"55\\" fill=\\"#4ade80\\" font-size=\\"14\\" font-weight=\\"bold\\" font-family=\\"serif\\">A</text>'
    # Force B: upward at x=220 (far from pivot)
    '<line x1=\\"220\\" y1=\\"76\\" x2=\\"220\\" y2=\\"36\\" stroke=\\"#60a5fa\\" stroke-width=\\"2\\"/>'
    '<polygon points=\\"216,40 224,40 220,30\\" fill=\\"#60a5fa\\"/>'
    '<text x=\\"226\\" y=\\"55\\" fill=\\"#60a5fa\\" font-size=\\"14\\" font-weight=\\"bold\\" font-family=\\"serif\\">B</text>'
    # Force C: along rod (leftward at right end)
    '<line x1=\\"278\\" y1=\\"80\\" x2=\\"310\\" y2=\\"80\\" stroke=\\"#fb923c\\" stroke-width=\\"2\\"/>'
    '<polygon points=\\"280,76 280,84 272,80\\" fill=\\"#fb923c\\"/>'
    '<text x=\\"296\\" y=\\"72\\" fill=\\"#fb923c\\" font-size=\\"14\\" font-weight=\\"bold\\" font-family=\\"serif\\">C</text>'
    # Axis label
    '<text x=\\"15\\" y=\\"115\\" fill=\\"#aaa\\" font-size=\\"10\\" font-family=\\"sans-serif\\">Fixed axis</text>'
    # Equal force label
    '<text x=\\"90\\" y=\\"130\\" text-anchor=\\"middle\\" fill=\\"#aaa\\" font-size=\\"10\\">|A|=|B|=|C|</text>'
    '</svg></p>'
)

OLD_Q18 = (
    '"question": "Which of the following ranks the torques applied by the three equal forces '
    '<i>A, B,</i> and <i>C</i> to the long thin rod about its fixed axis as indicated above?</p>"'
)
NEW_Q18 = (
    '"question": "' + svg_rod.replace('"', '\\"') +
    'Which of the following ranks the torques applied by the three equal forces '
    '<i>A, B,</i> and <i>C</i> to the long thin rod about its fixed axis as indicated above?</p>"'
)

if OLD_Q18 in content:
    content = content.replace(OLD_Q18, NEW_Q18)
    print("Added diagram to dphys1_18")
else:
    print("WARNING: dphys1_18 pattern not found")
    # Try a partial match
    idx = content.find('torques applied by the three equal forces')
    if idx != -1:
        print(f"  Found at char {idx}: {repr(content[idx-20:idx+80])}")


# ─── 4. SVG for dphys1_20: Two cars at right-angle intersection ───────────────
svg_cars = (
    '<p style=\\"text-align:center;margin:12px 0\\">'
    '<svg width=\\"220\\" height=\\"220\\" viewBox=\\"0 0 220 220\\" '
    'style=\\"background:transparent;\\" xmlns=\\"http://www.w3.org/2000/svg\\">'
    # Road horizontal
    '<rect x=\\"0\\" y=\\"90\\" width=\\"220\\" height=\\"40\\" fill=\\"#333\\"/>'
    # Road vertical
    '<rect x=\\"90\\" y=\\"0\\" width=\\"40\\" height=\\"220\\" fill=\\"#333\\"/>'
    # Road markings horizontal
    '<line x1=\\"0\\" y1=\\"110\\" x2=\\"80\\" y2=\\"110\\" stroke=\\"#fff\\" stroke-width=\\"1\\" stroke-dasharray=\\"10,8\\"/>'
    '<line x1=\\"140\\" y1=\\"110\\" x2=\\"220\\" y2=\\"110\\" stroke=\\"#fff\\" stroke-width=\\"1\\" stroke-dasharray=\\"10,8\\"/>'
    # Road markings vertical
    '<line x1=\\"110\\" y1=\\"0\\" x2=\\"110\\" y2=\\"80\\" stroke=\\"#fff\\" stroke-width=\\"1\\" stroke-dasharray=\\"10,8\\"/>'
    '<line x1=\\"110\\" y1=\\"140\\" x2=\\"110\\" y2=\\"220\\" stroke=\\"#fff\\" stroke-width=\\"1\\" stroke-dasharray=\\"10,8\\"/>'
    # Car 1 (moving right, approaching from left)
    '<rect x=\\"28\\" y=\\"97\\" width=\\"36\\" height=\\"22\\" rx=\\"4\\" fill=\\"#6c63ff\\"/>'
    # Car 1 velocity arrow
    '<line x1=\\"64\\" y1=\\"108\\" x2=\\"86\\" y2=\\"108\\" stroke=\\"#60a5fa\\" stroke-width=\\"2\\"/>'
    '<polygon points=\\"84,104 84,112 92,108\\" fill=\\"#60a5fa\\"/>'
    '<text x=\\"65\\" y=\\"92\\" fill=\\"#60a5fa\\" font-size=\\"11\\">v&#x2081;</text>'
    # Car 2 (moving down, approaching from top)
    '<rect x=\\"97\\" y=\\"28\\" width=\\"22\\" height=\\"36\\" rx=\\"4\\" fill=\\"#fb923c\\"/>'
    # Car 2 velocity arrow
    '<line x1=\\"108\\" y1=\\"64\\" x2=\\"108\\" y2=\\"86\\" stroke=\\"#4ade80\\" stroke-width=\\"2\\"/>'
    '<polygon points=\\"104,84 112,84 108,92\\" fill=\\"#4ade80\\"/>'
    '<text x=\\"118\\" y=\\"60\\" fill=\\"#4ade80\\" font-size=\\"11\\">v&#x2082;</text>'
    # Right angle symbol at intersection
    '<rect x=\\"110\\" y=\\"90\\" width=\\"8\\" height=\\"8\\" fill=\\"none\\" stroke=\\"#aaa\\" stroke-width=\\"1\\"/>'
    '</svg></p>'
)

OLD_Q20 = '"question": "Two cars approach an intersection at right angles, as pictured above. What is their relative speed to each other?</p>"'
NEW_Q20 = '"question": "' + svg_cars.replace('"', '\\"') + 'Two cars approach an intersection at right angles, as pictured above. What is their relative speed to each other?</p>"'

if OLD_Q20 in content:
    content = content.replace(OLD_Q20, NEW_Q20)
    print("Added diagram to dphys1_20")
else:
    print("WARNING: dphys1_20 pattern not found")
    idx = content.find('Two cars approach an intersection')
    if idx != -1:
        print(f"  Found at char {idx}: {repr(content[idx-5:idx+80])}")


# ─── Save ──────────────────────────────────────────────────────────────────────
with open(FPATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nSaved successfully!")
print("Images fixed + 3 SVG diagrams added (dphys1_1, dphys1_18, dphys1_20)")
