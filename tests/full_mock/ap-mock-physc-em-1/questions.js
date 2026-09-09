// Specific Question Bank for Test: ap-mock-physc-em-1
const AP_TEST_DATA = {
    "ap-mock-physc-em-1": {
        "id": "ap-mock-physc-em-1",
        "title": "AP Physics C: Electricity & Magnetism Practice Exam 1",
        "testType": "Practice Exam",
        "subject": "ap-phys-c-em",
        "topic": "Electricity & Magnetism Full Practice",
        "timeLimitMinutes": 45,
        "totalQuestions": 35,
        "questions": [
            {
                "id": "ap-mock-physc-em-1_q1",
                "global_num": 1,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A nonconducting sphere is given a nonzero net electric charge, $+Q$, and then brought close to a neutral conducting sphere of the same radius. Which of the following will be true?",
                "options": [
                    "An electric field will be induced within the conducting sphere.",
                    "The conducting sphere will develop a net electric charge of $-Q$.",
                    "The spheres will experience an electrostatic attraction.",
                    "The spheres will experience an electrostatic repulsion.",
                    "The spheres will experience no electrostatic interaction."
                ],
                "answer": "C",
                "explanation": "(C) The positive charge $+Q$ on the nonconducting sphere induces negative mobile electrons to migrate toward the near side of the neutral conducting sphere, leaving equal positive bound charge on the far side. Because electrostatic force varies inversely with the square of distance ($F \\propto 1/r^2$), the attractive force on the closer negative charges is strictly greater than the repulsive force on the farther positive charges, resulting in a net attractive electrostatic force.",
                "difficulty": "easy",
                "topic": "Electrostatic Induction & Polarization"
            },
            {
                "id": "ap-mock-physc-em-1_q2",
                "global_num": 2,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "If the total resistance of a circuit were doubled, the power dissipated by that same circuit would",
                "options": [
                    "increase by a factor of 4",
                    "increase by a factor of 2",
                    "decrease by a factor of 2",
                    "decrease by a factor of 4",
                    "Cannot be determined"
                ],
                "answer": "E",
                "explanation": "(E) Power dissipation can be expressed as $P = I^2 R$ or $P = V^2/R$. If the circuit is operated under a constant voltage source, doubling $R$ cuts power in half ($P \\propto 1/R$). If operated under a constant current source, doubling $R$ doubles the power ($P \\propto R$). Without specifying whether the voltage or current remains fixed, the change in power dissipation cannot be determined.",
                "difficulty": "easy",
                "topic": "Electric Power & Resistance Relationships"
            },
            {
                "id": "ap-mock-physc-em-1_q3",
                "global_num": 3,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Each of the following ionized isotopes is projected with the same speed into a uniform magnetic field $B$ such that the isotope's initial velocity is perpendicular to $B$. Which combination of mass and charge would result in a circular path with the largest radius?",
                "options": [
                    "$m = 16\\text{ u},\\ q = -5e$",
                    "$m = 18\\text{ u},\\ q = -2e$",
                    "$m = 19\\text{ u},\\ q = -2e$",
                    "$m = 16\\text{ u},\\ q = +e$",
                    "$m = 20\\text{ u},\\ q = +e$"
                ],
                "answer": "E",
                "explanation": "(E) The magnetic Lorentz force supplies the centripetal acceleration:\n  $$|q|vB = \\frac{mv^2}{r} \\implies r = \\frac{mv}{|q|B}$$\nSince $v$ and $B$ are identical for all particles, the radius $r$ is directly proportional to the mass-to-charge magnitude ratio $m/|q|$. Evaluating $m/|q|$:\n(A) $16/5 = 3.2$\n(B) $18/2 = 9.0$\n(C) $19/2 = 9.5$\n(D) $16/1 = 16.0$\n(E) $20/1 = 20.0$\nOption (E) yields the largest ratio, producing the largest orbit radius.",
                "difficulty": "medium",
                "topic": "Magnetic Lorentz Force & Orbital Radius"
            },
            {
                "id": "ap-mock-physc-em-1_q4",
                "global_num": 4,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "The picture shows 4 charges of equal magnitude fixed at the corners of a rectangle ($2\\text{ cm} \\times 4\\text{ cm}$). How many locations on either Line A (vertical bisector) or Line B (horizontal bisector) would be places with zero net electric field?",
                "options": [
                    "1",
                    "2",
                    "All of Line A",
                    "All of Line B",
                    "All of both Line A and Line B"
                ],
                "answer": "A",
                "explanation": "(A) By symmetry, only at the exact geometric center of the rectangle do the electric field vectors from all four symmetrically placed identical charges cancel out vectorially to yield $\\vec{E}_{\\text{net}} = 0$. Moving away from the center along Line A or Line B introduces asymmetric distances to the pairs of charges, creating a nonzero net electric field component along the perpendicular axis. Thus, there is only $1$ point of zero net electric field.",
                "difficulty": "medium",
                "topic": "Electric Field Symmetry & Superposition"
            },
            {
                "id": "ap-mock-physc-em-1_q5",
                "global_num": 5,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Four wires are each made of aluminum. Which wire will have the greatest electrical resistance?",
                "options": [
                    "Wire A (short, thick)",
                    "Wire B (longest, thinnest cross-section)",
                    "Wire C (short, thin)",
                    "Wire D (long, thick)",
                    "All the wires have the same resistance."
                ],
                "answer": "B",
                "explanation": "(B) The resistance of a cylindrical conductor of resistivity $\\rho$, length $L$, and cross-sectional area $A$ is given by $R = \\frac{\\rho L}{A}$. Because all wires have the same resistivity $\\rho$, resistance is maximized by choosing the maximum length $L$ and minimum cross-sectional area $A$ (Wire B).",
                "difficulty": "easy",
                "topic": "Resistivity & Conductor Geometry"
            },
            {
                "id": "ap-mock-physc-em-1_q6",
                "global_num": 6,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Which of the following is NOT equal to one tesla?",
                "options": [
                    "$1\\text{ J}/(\\text{A}\\cdot\\text{m}^2)$",
                    "$1\\text{ kg}/(\\text{C}\\cdot\\text{s})$",
                    "$1\\text{ N}/(\\text{A}\\cdot\\text{m})$",
                    "$1\\text{ V}\\cdot\\text{s}/\\text{m}^2$",
                    "$1\\text{ A}\\cdot\\text{N}/\\text{V}$"
                ],
                "answer": "E",
                "explanation": "(E) From $F = qvB = ILB$, $1\\text{ T} = 1\\frac{\\text{N}}{\\text{A}\\cdot\\text{m}}$.\n$\\frac{\\text{J}}{\\text{A}\\cdot\\text{m}^2} = \\frac{\\text{N}\\cdot\\text{m}}{\\text{A}\\cdot\\text{m}^2} = \\frac{\\text{N}}{\\text{A}\\cdot\\text{m}} = 1\\text{ T}$\n$\\frac{\\text{kg}}{\\text{C}\\cdot\\text{s}} = \\frac{\\text{kg}\\cdot\\text{m/s}^2}{(\\text{C/s})\\cdot\\text{m}} = \\frac{\\text{N}}{\\text{A}\\cdot\\text{m}} = 1\\text{ T}$\n$1\\text{ V}\\cdot\\text{s}/\\text{m}^2 = \\frac{\\text{J/C}\\cdot\\text{s}}{\\text{m}^2} = \\frac{\\text{N}\\cdot\\text{m}}{\\text{A}\\cdot\\text{m}^2} = 1\\text{ T}$\nOption (E): $1\\frac{\\text{A}\\cdot\\text{N}}{\\text{V}} = \\frac{\\text{A}\\cdot\\text{N}}{\\text{J/C}} = \\frac{\\text{A}^2\\text{s}\\cdot\\text{N}}{\\text{N}\\cdot\\text{m}} = \\frac{\\text{A}^2\\text{s}}{\\text{m}} \\ne 1\\text{ T}$.",
                "difficulty": "easy",
                "topic": "Magnetic Units & Dimensional Analysis"
            },
            {
                "id": "ap-mock-physc-em-1_q7",
                "global_num": 7,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A cube with side length $d$ and a sphere with diameter $d$ each enclose the same net electric charge $+Q$. If $\\Phi_C$ is the flux through the cube and $\\Phi_S$ is the flux through the sphere, which of the following is true?",
                "options": [
                    "$\\Phi_C > \\Phi_S$",
                    "$\\Phi_C < \\Phi_S$",
                    "$\\Phi_C = \\Phi_S$",
                    "$\\Phi_C = 0$",
                    "$\\Phi_S = 0$"
                ],
                "answer": "C",
                "explanation": "(C) By Gauss's Law, the total electric flux through any closed surface depends exclusively on the net enclosed charge: $\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}$. Because both closed surfaces enclose identical net charge $+Q$, their total electric fluxes are equal: $\\Phi_C = \\Phi_S = \\frac{Q}{\\varepsilon_0}$.",
                "difficulty": "easy",
                "topic": "Gauss's Law & Enclosed Electric Flux"
            },
            {
                "id": "ap-mock-physc-em-1_q8",
                "global_num": 8,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Two positive charges $Q_1$ and $Q_2$ of equal magnitude are fixed at $x = 0$ and $x = 100\\text{ cm}$. A third positive charge $q$ is released from rest at $x = 70\\text{ cm}$. At what position would it return to rest?",
                "options": [
                    "$x = 30\\text{ cm}$",
                    "$x = 50\\text{ cm}$",
                    "$x = 70\\text{ cm}$",
                    "Cannot be determined without $q$",
                    "It will not stop."
                ],
                "answer": "E",
                "explanation": "(E) In ideal electrostatic conditions without friction or radiation damping, energy is conserved. The symmetric potential energy well causes the charge to oscillate periodically between turning points $x = 70\\text{ cm}$ and $x = 30\\text{ cm}$, passing through $x = 50\\text{ cm}$ at maximum speed. It continuously oscillates back and forth and does not come to a permanent stop.",
                "difficulty": "medium",
                "topic": "Electrostatic Potential Wells & Oscillations"
            },
            {
                "id": "ap-mock-physc-em-1_q9",
                "global_num": 9,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "An object carries a charge of $-1\\text{ C}$. How many excess electrons does it contain?",
                "options": [
                    "$6.25 \\times 10^{18}$",
                    "$8.00 \\times 10^{18}$",
                    "$1.60 \\times 10^{19}$",
                    "$3.20 \\times 10^{19}$",
                    "$6.25 \\times 10^{19}$"
                ],
                "answer": "A",
                "explanation": "(A) Using the elementary charge $e = 1.6 \\times 10^{-19}\\text{ C}$:\n  $$N = \\frac{|Q|}{e} = \\frac{1.0\\text{ C}}{1.6 \\times 10^{-19}\\text{ C/electron}} = 6.25 \\times 10^{18}\\text{ electrons}$$",
                "difficulty": "easy",
                "topic": "Elementary Charge Quantization"
            },
            {
                "id": "ap-mock-physc-em-1_q10",
                "global_num": 10,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Four $200\\ \\Omega$ resistors are configured such that $R_2, R_3, R_4$ are in parallel with each other, and that entire parallel block is in series with $R_1$ across a $24\\text{ V}$ ideal battery. How much total current is provided by the source?",
                "options": [
                    "$30\\text{ mA}$",
                    "$48\\text{ mA}$",
                    "$64\\text{ mA}$",
                    "$72\\text{ mA}$",
                    "$90\\text{ mA}$"
                ],
                "answer": "E",
                "explanation": "(E) Equivalent resistance of three identical $200\\ \\Omega$ resistors in parallel:\n  $$R_{234} = \\frac{200\\ \\Omega}{3} \\approx 66.67\\ \\Omega$$\nTotal series resistance:\n  $$R_{\\text{total}} = R_1 + R_{234} = 200 + \\frac{200}{3} = \\frac{800}{3}\\ \\Omega \\approx 266.67\\ \\Omega$$\nTotal source current:\n  $$I_{\\text{total}} = \\frac{V}{R_{\\text{total}}} = \\frac{24\\text{ V}}{\\frac{800}{3}\\ \\Omega} = \\frac{72}{800}\\text{ A} = 0.090\\text{ A} = 90\\text{ mA}$$",
                "difficulty": "medium",
                "topic": "DC Resistor Networks & Kirchhoff's Rules"
            },
            {
                "id": "ap-mock-physc-em-1_q11",
                "global_num": 11,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "For the same circuit in Question 10, what is the ratio of the power dissipated by $R_1$ to the power dissipated by $R_4$?",
                "options": [
                    "$1/9$",
                    "$1/3$",
                    "$1$",
                    "$3$",
                    "$9$"
                ],
                "answer": "E",
                "explanation": "(E) The entire current $I$ passes through $R_1$, whereas in the parallel bank of three identical resistors, the current through $R_4$ is $I_4 = \\frac{1}{3}I$. Since $R_1 = R_4 = R$, the ratio of power dissipation is:\n  $$\\frac{P_1}{P_4} = \\frac{I^2 R_1}{I_4^2 R_4} = \\frac{I^2 R}{\\left(\\frac{1}{3}I\\right)^2 R} = \\frac{I^2}{\\frac{1}{9}I^2} = 9$$",
                "difficulty": "medium",
                "topic": "Power Dissipation in Resistor Networks"
            },
            {
                "id": "ap-mock-physc-em-1_q12",
                "global_num": 12,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "What is the value and unit of the product: $20\\ \\mu\\text{F} \\times 500\\ \\Omega$?",
                "options": [
                    "$0.01\\text{ henry}$",
                    "$0.01\\text{ ampere per coulomb}$",
                    "$0.01\\text{ weber}$",
                    "$0.01\\text{ second}$",
                    "$0.01\\text{ volt per ampere}$"
                ],
                "answer": "D",
                "explanation": "(D) Numerical value: $(20 \\times 10^{-6}\\text{ F}) \\times (500\\ \\Omega) = 0.010$.\nDimensional analysis of the $RC$ time constant ($\\tau = RC$):\n  $$[\\text{Farad}] \\times [\\text{Ohm}] = \\left(\\frac{\\text{Coulomb}}{\\text{Volt}}\\right) \\times \\left(\\frac{\\text{Volt}}{\\text{Ampere}}\\right) = \\frac{\\text{C}}{\\text{C/s}} = \\text{second}$$\nThus, the result is $0.01\\text{ second}$.",
                "difficulty": "easy",
                "topic": "RC Time Constant & Dimensional Analysis"
            },
            {
                "id": "ap-mock-physc-em-1_q13",
                "global_num": 13,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A copper wire circle of radius $1\\text{ m}$ is immersed in a magnetic field $B(t) = 2t(1-t) = 2t - 2t^2$ perpendicular into the page. What is the magnitude of the induced electric field in the wire at time $t = 1\\text{ s}$?",
                "options": [
                    "$(1/\\pi)\\text{ N/C}$",
                    "$1\\text{ N/C}$",
                    "$2\\text{ N/C}$",
                    "$\\pi\\text{ N/C}$",
                    "$2\\pi\\text{ N/C}$"
                ],
                "answer": "B",
                "explanation": "(B) Faraday's Law in non-electrostatic form relating $\\vec{E}$ and magnetic flux $\\Phi_B$:\n  $$\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt} = -A\\frac{dB}{dt}$$\n  $$E(2\\pi r) = -\\pi r^2 \\frac{d}{dt}(2t - 2t^2) = -\\pi r^2 (2 - 4t)$$\n  $$E = \\frac{r}{2}|2 - 4t|$$\nAt $t = 1\\text{ s}$ with $r = 1\\text{ m}$:\n  $$E = \\frac{1}{2}|2 - 4(1)| = \\frac{1}{2}(2) = 1\\text{ N/C} \\text{ (or V/m)}$$",
                "difficulty": "hard",
                "topic": "Faraday's Law & Induced Electric Fields"
            },
            {
                "id": "ap-mock-physc-em-1_q14",
                "global_num": 14,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "The top half of a rectangular loop of wire ($x\\text{ m} \\times y\\text{ m}$) hangs vertically in a uniform magnetic field $B$ pointing into the page, supporting a mass $m$. Find the magnitude and direction of the loop current to balance the mass's weight.",
                "options": [
                    "$I = \\frac{mg}{xB}$, clockwise",
                    "$I = \\frac{mg}{xB}$, counterclockwise",
                    "$I = \\frac{mg}{(x + \\frac{1}{2}y)B}$, clockwise",
                    "$I = \\frac{mg}{(x + \\frac{1}{2}y)B}$, counterclockwise",
                    "$I = \\frac{mg}{(x + y)B}$, clockwise"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic forces on the vertical segments of length $y/2$ are equal and opposite, canceling each other out. The top horizontal wire of length $x$ must produce an upward magnetic force balancing gravity:\n  $$F_B = I x B = mg \\implies I = \\frac{mg}{xB}$$\nBy the right-hand rule ($\\vec{F}_B = I\\vec{L}\\times\\vec{B}$), with $\\vec{B}$ directed into the page, an upward force requires current pointing to the right along the top wire, which corresponds to a clockwise circulation.",
                "difficulty": "medium",
                "topic": "Magnetic Force on Current Loops & Equilibrium"
            },
            {
                "id": "ap-mock-physc-em-1_q15",
                "global_num": 15,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Particle $q_1 = 10\\text{ nC}$ is fixed in place. Particle $q_2 = -5\\text{ nC}$ of mass $m = 5 \\times 10^{-10}\\text{ kg}$ is released from rest $2\\text{ cm}$ away from $q_1$. How fast will it move when it is $1\\text{ cm}$ away?",
                "options": [
                    "$100\\text{ m/s}$",
                    "$200\\text{ m/s}$",
                    "$300\\text{ m/s}$",
                    "$400\\text{ m/s}$",
                    "$500\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "(C) Change in electric potential from $r_i = 0.02\\text{ m}$ to $r_f = 0.01\\text{ m}$:\n  $$\\Delta V = k q_1 \\left(\\frac{1}{r_f} - \\frac{1}{r_i}\\right) = (9 \\times 10^9)(10 \\times 10^{-9})\\left(\\frac{1}{0.01} - \\frac{1}{0.02}\\right) = 90(100 - 50) = +4500\\text{ V}$$\nChange in electric potential energy:\n  $$\\Delta U_E = q_2 \\Delta V = (-5 \\times 10^{-9}\\text{ C})(4500\\text{ V}) = -2.25 \\times 10^{-5}\\text{ J}$$\nBy Conservation of Energy ($\\Delta K = -\\Delta U_E$):\n  $$\\frac{1}{2}m v_f^2 = 2.25 \\times 10^{-5}\\text{ J} \\implies v_f = \\sqrt{\\frac{2(2.25 \\times 10^{-5}\\text{ J})}{5 \\times 10^{-10}\\text{ kg}}} = \\sqrt{9 \\times 10^4} = 300\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Electrostatic Potential Energy & Energy Conservation"
            },
            {
                "id": "ap-mock-physc-em-1_q16",
                "global_num": 16,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Two long straight parallel wires carry current: Wire 1 carries $I$ to the right, and Wire 2 carries $2I$ to the left. At which of the marked points is the net magnetic field zero?",
                "options": [
                    "Point 1 only (above Wire 1)",
                    "Points 1 and 2 only",
                    "Point 2 only",
                    "Points 3 and 4 only",
                    "Point 3 only"
                ],
                "answer": "A",
                "explanation": "(A) Between the wires, right-hand rule shows both currents produce magnetic fields pointing into the page, so they add constructively and cannot cancel.\nAbove Wire 1 (Point 1), Wire 1 produces a field pointing out of the page ($B_1 = \\frac{\\mu_0 I}{2\\pi d}$), while Wire 2 produces a field pointing into the page ($B_2 = \\frac{\\mu_0 (2I)}{2\\pi (2d)} = \\frac{\\mu_0 I}{2\\pi d}$). Because the fields are equal in magnitude and opposite in direction, the net magnetic field at Point 1 is zero.",
                "difficulty": "medium",
                "topic": "Magnetic Fields of Parallel Current Wires"
            },
            {
                "id": "ap-mock-physc-em-1_q17",
                "global_num": 17,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A charge $+q$ is released from rest near a fixed charge $+Q$. Which graph best depicts the acceleration $a$ of $+q$ as a function of its distance $r$ from $+Q$?",
                "options": [
                    "Decreasing curve proportional to $1/r^2$",
                    "Decreasing linear line",
                    "Increasing curve",
                    "Horizontal line (constant)",
                    "Exponential increase"
                ],
                "answer": "A",
                "explanation": "(A) By Coulomb's Law and Newton's Second Law:\n  $$a(r) = \\frac{F_E}{m} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Qq}{m r^2} \\propto \\frac{1}{r^2}$$\nThe acceleration decreases monotonically following an inverse-square relationship with distance $r$, which is correctly illustrated in graph (A).",
                "difficulty": "easy",
                "topic": "Coulomb's Law & Variable Acceleration"
            },
            {
                "id": "ap-mock-physc-em-1_q18",
                "global_num": 18,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Capacitors $C_1 = 3\\ \\mu\\text{F}$ (initially $Q_1 = 24\\ \\mu\\text{C}$) and $C_2 = 6\\ \\mu\\text{F}$ (initially $Q_2 = 12\\ \\mu\\text{C}$) are connected in parallel when switch S is closed. How much charge will be stored on the positive plate of the $6\\ \\mu\\text{F}$ capacitor at equilibrium?",
                "options": [
                    "$18\\ \\mu\\text{C}$",
                    "$20\\ \\mu\\text{C}$",
                    "$24\\ \\mu\\text{C}$",
                    "$27\\ \\mu\\text{C}$",
                    "$36\\ \\mu\\text{C}$"
                ],
                "answer": "C",
                "explanation": "(C) Total initial charge on the plates:\n  $$Q_{\\text{total}} = 24\\ \\mu\\text{C} + 12\\ \\mu\\text{C} = 36\\ \\mu\\text{C}$$\nIn parallel, both capacitors share the same potential difference $V = \\frac{Q_{\\text{total}}}{C_1 + C_2} = \\frac{36\\ \\mu\\text{C}}{3\\ \\mu\\text{F} + 6\\ \\mu\\text{F}} = 4\\text{ V}$.\nFinal charge on the $6\\ \\mu\\text{F}$ capacitor ($C_2$):\n  $$Q_2' = C_2 V = (6\\ \\mu\\text{F})(4\\text{ V}) = 24\\ \\mu\\text{C}$$",
                "difficulty": "medium",
                "topic": "Parallel Capacitors & Charge Redistribution"
            },
            {
                "id": "ap-mock-physc-em-1_q19",
                "global_num": 19,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A metal bar of length $L$ is pulled with velocity $v$ through a uniform magnetic field $B$ pointing into the plane of the page. The velocity $v$ is parallel to the magnetic field. What is the voltage produced between the ends of the bar?",
                "options": [
                    "$vB$, with point X at a higher potential than point Y",
                    "$vB$, with point Y at a higher potential than point X",
                    "$vBL$, with point X at a higher potential than point Y",
                    "$vBL$, with point Y at a higher potential than point X",
                    "None of the above"
                ],
                "answer": "E",
                "explanation": "(E) The magnetic force on mobile conduction electrons within the conductor is given by $\\vec{F}_B = q(\\vec{v} \\times \\vec{B})$. Because the velocity vector $\\vec{v}$ is parallel to the magnetic field vector $\\vec{B}$, the cross product is zero ($\\vec{v} \\times \\vec{B} = 0$). No charge separation occurs along the bar, producing zero motional emf ($\\mathcal{E} = 0\\text{ V}$). Therefore, (E) is the correct choice.",
                "difficulty": "medium",
                "topic": "Motional EMF & Cross Product Geometry"
            },
            {
                "id": "ap-mock-physc-em-1_q20",
                "global_num": 20,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "An electric dipole consists of a pair of equal but opposite point charges of magnitude $4.0\\text{ nC}$ separated by a distance of $2.0\\text{ cm}$. What is the electric field strength at the point midway between the charges?",
                "options": [
                    "$9.0 \\times 10^4\\text{ V/m}$",
                    "$1.8 \\times 10^5\\text{ V/m}$",
                    "$3.6 \\times 10^5\\text{ V/m}$",
                    "$7.2 \\times 10^4\\text{ V/m}$",
                    "$7.2 \\times 10^5\\text{ V/m}$"
                ],
                "answer": "E",
                "explanation": "(E) The midpoint is at distance $r = 1.0\\text{ cm} = 0.01\\text{ m}$ from each charge. Electric field lines point away from $+q$ and toward $-q$, so the electric field vectors from both charges point in the exact same direction and add constructively:\n  $$E_{\\text{net}} = E_+ + E_- = 2\\left(\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}\\right) = 2(9.0 \\times 10^9)\\frac{4.0 \\times 10^{-9}\\text{ C}}{(0.01\\text{ m})^2} = 18.0 \\times \\frac{4.0}{1.0 \\times 10^{-4}} = 7.2 \\times 10^5\\text{ V/m}$$",
                "difficulty": "medium",
                "topic": "Electric Dipole Field at Midpoint"
            },
            {
                "id": "ap-mock-physc-em-1_q21",
                "global_num": 21,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Two concentric spherical metal shells have radii $R$ and $2R$, respectively. Find the capacitance of this spherical capacitor.",
                "options": [
                    "$\\frac{1}{8\\pi\\varepsilon_0 R}$",
                    "$\\frac{1}{4\\pi\\varepsilon_0 R}$",
                    "$2\\pi\\varepsilon_0 R$",
                    "$4\\pi\\varepsilon_0 R$",
                    "$8\\pi\\varepsilon_0 R$"
                ],
                "answer": "E",
                "explanation": "(E) The potential difference between two concentric spherical conductors of radii $a = R$ and $b = 2R$ carrying charge $+Q$ and $-Q$ is:\n  $$\\Delta V = \\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{R} - \\frac{1}{2R}\\right) = \\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{2R}\\right) = \\frac{Q}{8\\pi\\varepsilon_0 R}$$\nThe capacitance is defined by $C = \\frac{Q}{\\Delta V}$:\n  $$C = \\frac{Q}{\\frac{Q}{8\\pi\\varepsilon_0 R}} = 8\\pi\\varepsilon_0 R$$",
                "difficulty": "hard",
                "topic": "Spherical Capacitor Capacitance Derivation"
            },
            {
                "id": "ap-mock-physc-em-1_q22",
                "global_num": 22,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Traveling at an initial speed of $1.5 \\times 10^6\\text{ m/s}$, a proton enters a region of constant magnetic field $B = 1.0\\text{ T}$ at an angle of $30^\\circ$ with $\\vec{B}$. Compute the proton's speed $4\\text{ s}$ after entering the magnetic field.",
                "options": [
                    "$5.0 \\times 10^5\\text{ m/s}$",
                    "$7.5 \\times 10^5\\text{ m/s}$",
                    "$1.5 \\times 10^6\\text{ m/s}$",
                    "$3.0 \\times 10^6\\text{ m/s}$",
                    "$6.0 \\times 10^6\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "(C) The magnetic force $\\vec{F}_B = q(\\vec{v} \\times \\vec{B})$ is strictly perpendicular to the velocity vector $\\vec{v}$ at all times. Consequently, the magnetic work done on the charged particle is zero ($W = \\int \\vec{F}_B \\cdot d\\vec{r} = 0$), meaning the kinetic energy and orbital speed remain constant over time. Thus, the speed remains $1.5 \\times 10^6\\text{ m/s}$.",
                "difficulty": "easy",
                "topic": "Magnetic Force Work & Constant Speed"
            },
            {
                "id": "ap-mock-physc-em-1_q23",
                "global_num": 23,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "An $LR$ circuit consists of a battery $\\mathcal{E}$, resistor $r$, and a parallel branch with resistor $R$ and inductor $L$ in series with another resistor $R$. What is the current through $r$ immediately after switch S is closed?",
                "options": [
                    "$0$",
                    "$\\frac{\\mathcal{E}}{r + R}$",
                    "$\\frac{\\mathcal{E}}{r + 2R}$",
                    "$\\frac{\\mathcal{E}}{2r + R}$",
                    "$\\frac{2\\mathcal{E}}{2r + R}$"
                ],
                "answer": "B",
                "explanation": "(B) At $t = 0^+$, the inductor produces an infinite back-emf opposing any instantaneous change in current, acting as an open circuit ($I_L(0^+) = 0$). Therefore, current only flows through the loop consisting of resistor $r$ and the single parallel resistor $R$. The initial current is:\n  $$I(0^+) = \\frac{\\mathcal{E}}{r + R}$$",
                "difficulty": "medium",
                "topic": "LR Circuit Initial Response ($t = 0^+$)"
            },
            {
                "id": "ap-mock-physc-em-1_q24",
                "global_num": 24,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "After the switch has been kept closed for a long time in the circuit of Question 23, how much energy is stored in the inductor?",
                "options": [
                    "$\\frac{L\\mathcal{E}^2}{(2r+R)^2}$",
                    "$\\frac{L\\mathcal{E}^2}{2(2r+R)^2}$",
                    "$\\frac{L\\mathcal{E}^2}{4(2r+R)^2}$",
                    "$\\frac{RL\\mathcal{E}^2}{8(2r+R)^2}$",
                    "$\\frac{L\\mathcal{E}^2}{8(2r+R)^2}$"
                ],
                "answer": "B",
                "explanation": "(B) As $t \\to \\infty$, the inductor acts as a short circuit with zero resistance. The parallel combination of the two branches (each containing resistance $R$) is $R_{\\text{parallel}} = R/2$.\nTotal equivalent resistance is $R_{\\text{eq}} = r + R/2 = \\frac{2r+R}{2}$.\nTotal current from the source: $I_{\\text{total}} = \\frac{\\mathcal{E}}{r + R/2} = \\frac{2\\mathcal{E}}{2r + R}$.\nBecause both parallel branches have equal resistance $R$, the current splits evenly, so the inductor branch current is $I_L = \\frac{1}{2}I_{\\text{total}} = \\frac{\\mathcal{E}}{2r + R}$.\nThe magnetic energy stored is:\n  $$U_L = \\frac{1}{2}L I_L^2 = \\frac{1}{2}L\\left(\\frac{\\mathcal{E}}{2r+R}\\right)^2 = \\frac{L\\mathcal{E}^2}{2(2r+R)^2}$$",
                "difficulty": "hard",
                "topic": "LR Circuit Steady-State Inductor Energy"
            },
            {
                "id": "ap-mock-physc-em-1_q25",
                "global_num": 25,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "After having been closed for a long time, the switch S is suddenly opened. What is the current through $r$ immediately after S is opened?",
                "options": [
                    "$0$",
                    "$\\frac{\\mathcal{E}}{r+R}$",
                    "$\\frac{\\mathcal{E}}{r+2R}$",
                    "$\\frac{\\mathcal{E}}{2r+R}$",
                    "$\\frac{2\\mathcal{E}}{2r+R}$"
                ],
                "answer": "A",
                "explanation": "(A) Opening the switch mechanically isolates the branch containing resistor $r$ from the closed loop. The current through $r$ drops instantaneously to zero ($I_r = 0$). The inductor continues to drive current through the remaining closed loop containing the two $R$ resistors until its stored magnetic energy is dissipated.",
                "difficulty": "medium",
                "topic": "LR Circuit Switch Opening Dynamics"
            },
            {
                "id": "ap-mock-physc-em-1_q26",
                "global_num": 26,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A solid neutral metal sphere of radius $6a$ contains an off-center spherical cavity of radius $a$ enclosing a point charge $+q$. If $E_X$ and $E_Y$ denote the electric field strengths at exterior points X and Y located at the same distance $r > 6a$ from the center of the sphere, which of the following is true?",
                "options": [
                    "$E_X = 16E_Y$",
                    "$E_X = \\left(\\frac{11}{5}\\right)E_Y$",
                    "$E_X = E_Y$",
                    "$E_X = \\left(\\frac{11}{5}\\right)^2 E_Y$",
                    "$E_X = 0$"
                ],
                "answer": "C",
                "explanation": "(C) By electrostatic shielding, charge $-q$ distributes on the inner cavity wall, leaving $+q$ distributed uniformly over the outer spherical conductor surface. Outside the conducting sphere ($r > 6a$), the external electric field is identical to that of a point charge $+q$ located at the sphere's geometric center:\n  $$E(r) = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}$$\nBecause points X and Y are equidistant from the center of the sphere, $E_X = E_Y$.",
                "difficulty": "hard",
                "topic": "Electrostatic Shielding & Cavity Fields"
            },
            {
                "id": "ap-mock-physc-em-1_q27",
                "global_num": 27,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Two charges $+Q$ are fixed at $(0, 4\\text{ m})$ and $(0, -4\\text{ m})$. Determine the work done by the electric field to move a charge $-Q$ from infinity to point P at $(3\\text{ m}, 0)$.",
                "options": [
                    "$\\frac{2kQ^2}{3}$",
                    "$\\frac{2kQ^2}{5}$",
                    "$-\\frac{2kQ^2}{5}$",
                    "$\\frac{kQ^2}{5}$",
                    "$-\\frac{3kQ^2}{5}$"
                ],
                "answer": "B",
                "explanation": "(B) The distance from each $+Q$ charge to point P is $r = \\sqrt{3^2 + 4^2} = 5\\text{ m}$.\nThe electric potential at point P is:\n  $$V_P = \\frac{kQ}{5} + \\frac{kQ}{5} = \\frac{2kQ}{5}$$\nThe work done by the electric field is $W_E = -\\Delta U = -q(V_P - V_\\infty)$:\n  $$W_E = -(-Q)\\left(\\frac{2kQ}{5} - 0\\right) = +\\frac{2kQ^2}{5}$$",
                "difficulty": "medium",
                "topic": "Electric Potential & Work by Electric Field"
            },
            {
                "id": "ap-mock-physc-em-1_q28",
                "global_num": 28,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A circuit connects a battery $\\mathcal{E}$, switch, resistor $R$, and inductor $L$ in series. How long will it take for the current to reach $99\\%$ of its maximum value?",
                "options": [
                    "$(\\ln 0.99)\\frac{L}{R}$",
                    "$(\\ln 99)RL$",
                    "$\\left(\\ln\\frac{1}{100}\\right)\\frac{L}{R}$",
                    "$\\left(\\ln\\frac{100}{99}\\right)\\frac{L}{R}$",
                    "$(\\ln 100)\\frac{L}{R}$"
                ],
                "answer": "E",
                "explanation": "(E) The current in a charging $RL$ circuit obeys $I(t) = I_{\\max}(1 - e^{-t/\\tau})$, where $\\tau = L/R$. Setting $I(t) = 0.99 I_{\\max}$:\n  $$1 - e^{-t/\\tau} = 0.99 \\implies e^{-t/\\tau} = 0.01 = \\frac{1}{100}$$\n  $$-\\frac{t}{\\tau} = \\ln\\left(\\frac{1}{100}\\right) = -\\ln(100) \\implies t = (\\ln 100)\\tau = (\\ln 100)\\frac{L}{R}$$",
                "difficulty": "medium",
                "topic": "RL Circuit Exponential Rise Time Constant"
            },
            {
                "id": "ap-mock-physc-em-1_q29",
                "global_num": 29,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "What is the maximum number of $40\\text{ W}$ light bulbs that can be connected in parallel across a $120\\text{ V}$ source without exceeding a $5\\text{ A}$ fuse limit?",
                "options": [
                    "6",
                    "9",
                    "12",
                    "14",
                    "15"
                ],
                "answer": "E",
                "explanation": "(E) The maximum total electric power available without blowing the fuse is:\n  $$P_{\\max} = V I_{\\max} = (120\\text{ V})(5\\text{ A}) = 600\\text{ W}$$\nThe number of $40\\text{ W}$ bulbs in parallel is:\n  $$N = \\frac{P_{\\max}}{P_{\\text{bulb}}} = \\frac{600\\text{ W}}{40\\text{ W}} = 15 \\text{ bulbs}$$",
                "difficulty": "easy",
                "topic": "Parallel Appliance Circuits & Fuse Limits"
            },
            {
                "id": "ap-mock-physc-em-1_q30",
                "global_num": 30,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A loop of wire is situated in a magnetic field $\\vec{B}$ pointing out of the page. If $B$ decreases uniformly in strength, the induced current in the loop is:",
                "options": [
                    "clockwise and decreasing",
                    "clockwise and increasing",
                    "counterclockwise and decreasing",
                    "counterclockwise and constant",
                    "counterclockwise and increasing"
                ],
                "answer": "D",
                "explanation": "(D) As the out-of-page flux decreases, by Lenz's Law the induced current must create out-of-page magnetic flux to oppose this change, which requires a counterclockwise current. Because $B(t)$ decreases uniformly ($\\frac{dB}{dt} = \\text{constant}$), the induced electromotive force $\\mathcal{E} = -A\\frac{dB}{dt}$ and the resulting induced current $I = \\mathcal{E}/R$ are nonzero and constant.",
                "difficulty": "easy",
                "topic": "Faraday's Law, Lenz's Law & Induced Current"
            },
            {
                "id": "ap-mock-physc-em-1_q31",
                "global_num": 31,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A dielectric of thickness $d/3$ and constant $K$ is inserted between the plates (separation $d$) of a parallel-plate capacitor. What is the total capacitance?",
                "options": [
                    "$\\frac{\\varepsilon_0 A(2+3K)}{d}$",
                    "$\\frac{3\\varepsilon_0 A}{d(2K+1)}$",
                    "$\\frac{K\\varepsilon_0 A}{d(2K+1)}$",
                    "$\\frac{3K\\varepsilon_0 A}{d(2K+1)}$",
                    "$\\frac{3K\\varepsilon_0 A}{d(K+2)}$"
                ],
                "answer": "D",
                "explanation": "(D) The system consists of three series capacitors: two vacuum gaps of thickness $d/3$ and one dielectric slab of thickness $d/3$.\n  $$C_{\\text{vac}} = \\frac{\\varepsilon_0 A}{d/3} = \\frac{3\\varepsilon_0 A}{d}, \\quad C_{\\text{diel}} = \\frac{K\\varepsilon_0 A}{d/3} = \\frac{3K\\varepsilon_0 A}{d}$$\n  $$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_{\\text{vac}}} + \\frac{1}{C_{\\text{diel}}} + \\frac{1}{C_{\\text{vac}}} = \\frac{2d}{3\\varepsilon_0 A} + \\frac{d}{3K\\varepsilon_0 A} = \\frac{d(2K+1)}{3K\\varepsilon_0 A}$$\n  $$C_{\\text{eq}} = \\frac{3K\\varepsilon_0 A}{d(2K+1)}$$",
                "difficulty": "hard",
                "topic": "Composite Dielectric Parallel-Plate Capacitor"
            },
            {
                "id": "ap-mock-physc-em-1_q32",
                "global_num": 32,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "For two charges $+Q$ and $-Q$ separated by a finite distance, at how many points in the plane of the page are both the electric field and the electric potential equal to zero?",
                "options": [
                    "0",
                    "1",
                    "2",
                    "Infinite",
                    "None of the above"
                ],
                "answer": "A",
                "explanation": "(A) The electric potential $V = 0$ along the perpendicular bisector line. However, on this line, the electric fields from the two charges add constructively parallel to the dipole axis, meaning $\\vec{E} \\ne 0$ everywhere in the finite plane. Thus, there are $0$ points where both $\\vec{E} = 0$ and $V = 0$ simultaneously (except at infinity).",
                "difficulty": "medium",
                "topic": "Dipole Electric Field vs. Potential Zeros"
            },
            {
                "id": "ap-mock-physc-em-1_q33",
                "global_num": 33,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Four wires pass perpendicularly through a square $WXYZ$, carrying currents $I, 2I, 3I, 4I$ with orientations as labeled (two in, two out). What is the absolute value of $\\oint \\vec{B}\\cdot d\\vec{\\ell}$ around $WXYZ$?",
                "options": [
                    "$\\frac{1}{2}\\mu_0 I$",
                    "$\\mu_0 I$",
                    "$\\sqrt{5}\\mu_0 I$",
                    "$2\\mu_0 I$",
                    "$5\\mu_0 I$"
                ],
                "answer": "D",
                "explanation": "(D) By Ampere's Law: $\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}}$.\nThe net enclosed current is the algebraic sum taking directions into account:\n  $$I_{\\text{enc}} = (2I + 4I) - (I + 3I) = 6I - 4I = 2I$$\n  $$\\left|\\oint \\vec{B}\\cdot d\\vec{\\ell}\\right| = 2\\mu_0 I$$",
                "difficulty": "medium",
                "topic": "Ampere's Law Line Integrals"
            },
            {
                "id": "ap-mock-physc-em-1_q34",
                "global_num": 34,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "A charge $+q$ is moved from point A to point B along Path 1. What would the change in potential energy be if the charge moved along Path 2 from point A to point B instead?",
                "options": [
                    "Double",
                    "The same",
                    "Negative of the original",
                    "Zero",
                    "Cannot be determined"
                ],
                "answer": "B",
                "explanation": "(B) The electrostatic force is conservative, which means the electrostatic potential difference $\\Delta V = V_B - V_A$ and the corresponding change in potential energy $\\Delta U = q\\Delta V$ depend entirely on the initial and final endpoints and are completely independent of the path taken.",
                "difficulty": "easy",
                "topic": "Conservative Electric Fields & Path Independence"
            },
            {
                "id": "ap-mock-physc-em-1_q35",
                "global_num": 35,
                "section": "Practice Test 1 – Electricity & Magnetism",
                "question": "Two point charges $+Q$ are fixed a distance $L$ apart. A particle of charge $-q$ and mass $m$ is placed symmetrically on the perpendicular bisector at distance $L/2$. What is its initial acceleration when released from rest?",
                "options": [
                    "$\\frac{\\sqrt{2}Qq}{2\\pi\\varepsilon_0 L^2 m}$",
                    "$\\frac{Qq}{\\pi\\varepsilon_0 L^2 m}$",
                    "$\\frac{2Qq}{\\pi\\varepsilon_0 L^2 m}$",
                    "$\\frac{2\\sqrt{2}Qq}{\\pi\\varepsilon_0 L^2 m}$",
                    "$\\frac{4Qq}{\\pi\\varepsilon_0 L^2 m}$"
                ],
                "answer": "A",
                "explanation": "(A) The distance from $-q$ to each $+Q$ is $r = \\sqrt{(L/2)^2 + (L/2)^2} = \\frac{L}{\\sqrt{2}}$.\nThe force from each $+Q$ charge has magnitude:\n  $$F_1 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Qq}{r^2} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Qq}{L^2/2} = \\frac{2Qq}{4\\pi\\varepsilon_0 L^2}$$\nThe horizontal components cancel, and the vertical components add at an angle of $45^\\circ$:\n  $$F_{\\text{net}} = 2 F_1 \\cos 45^\\circ = 2\\left(\\frac{2Qq}{4\\pi\\varepsilon_0 L^2}\\right)\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\sqrt{2}Qq}{2\\pi\\varepsilon_0 L^2}$$\nAcceleration $a = \\frac{F_{\\text{net}}}{m} = \\frac{\\sqrt{2}Qq}{2\\pi\\varepsilon_0 L^2 m}$.",
                "difficulty": "hard",
                "topic": "2D Electrostatic Vector Forces & Acceleration"
            }
        ]
    }
};
