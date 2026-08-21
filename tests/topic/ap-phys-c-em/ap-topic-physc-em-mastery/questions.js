// Specific Question Bank for Test: ap-topic-physc-em-mastery
const AP_TEST_DATA = {
    "ap-topic-physc-em-mastery": {
        "id": "ap-topic-physc-em-mastery",
        "title": "AP Physics C: Electrostatics, Circuits & Electromagnetism Mastery",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "Electrostatics, Circuits & Electromagnetism",
        "timeLimitMinutes": 35,
        "totalQuestions": 25,
        "questions": [
            {
                "id": "em-drill-q1",
                "global_num": 1,
                "section": "Electrostatics",
                "question": "What will happen to the magnitude of electric force between two particles if the distance between them is doubled and each charge is tripled?",
                "options": [
                    "Multiplied by a factor of $9/4$",
                    "Multiplied by a factor of $3/2$",
                    "Multiplied by a factor of $3/4$",
                    "Multiplied by a factor of $9/2$",
                    "Multiplied by a factor of $6/4$"
                ],
                "answer": "A",
                "explanation": "(A) From Coulomb's Law, $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$. Tripling both charges scales the numerator by $3 \\times 3 = 9$. Doubling the separation distance scales the denominator by $2^2 = 4$. The resulting electrostatic force is multiplied by a factor of $9/4$.",
                "difficulty": "easy",
                "topic": "Coulomb's Law Scaling Factor"
            },
            {
                "id": "em-drill-q2",
                "global_num": 2,
                "section": "Electrostatics",
                "question": "A particle ($m = 10^{-10}\\text{ kg}, q = -5 \\times 10^{-13}\\text{ C}$) starts at rest inside a uniform electric field $E = 50\\text{ N/C}$ directed toward the left in a $1\\text{-m}$ square region, positioned $70\\text{ cm}$ from the left edge and $30\\text{ cm}$ from the right edge. How long will it take to escape the field?",
                "options": [
                    "$1.10\\text{ s}$",
                    "$1.23\\text{ s}$",
                    "$1.55\\text{ s}$",
                    "$2.31\\text{ s}$",
                    "$2.59\\text{ s}$"
                ],
                "answer": "C",
                "explanation": "(C) Because the charge is negative, the electric force acts to the right, opposite to $\\vec{E}$. The distance to escape out the right side is $d = 30\\text{ cm} = 0.30\\text{ m}$.\n  $$a = \\frac{|q|E}{m} = \\frac{(5 \\times 10^{-13}\\text{ C})(50\\text{ N/C})}{10^{-10}\\text{ kg}} = \\frac{2.5 \\times 10^{-11}}{10^{-10}} = 0.25\\text{ m/s}^2$$\n  $$d = \\frac{1}{2}at^2 \\implies t = \\sqrt{\\frac{2d}{a}} = \\sqrt{\\frac{2(0.30\\text{ m})}{0.25\\text{ m/s}^2}} = \\sqrt{2.4} \\approx 1.55\\text{ s}$$",
                "difficulty": "medium",
                "topic": "Negative Charge Kinematics in Electric Field"
            },
            {
                "id": "em-drill-q3",
                "global_num": 3,
                "section": "Electrostatics",
                "question": "Points A and B are equidistant from point P. At A, a charge $+Q$ creates field $\\vec{E}$ pointing to the right at P. What charge placed at B will triple the net electric field at P?",
                "options": [
                    "$+2Q$",
                    "$+3Q$",
                    "$-Q$",
                    "$-2Q$",
                    "$-3Q$"
                ],
                "answer": "D",
                "explanation": "(D) To amplify the field at P to $3E$ in the same direction, the charge at B must contribute an electric field of magnitude $2E$ directed toward B (to the right). A negative charge attracts a positive test charge, so the charge must be negative with twice the magnitude: $q_B = -2Q$.",
                "difficulty": "medium",
                "topic": "Electric Field Superposition & Tripling"
            },
            {
                "id": "em-drill-q4",
                "global_num": 4,
                "section": "Electrostatics",
                "question": "A fixed sphere $+Q$ repels a small movable sphere $+q$ released from rest. The small sphere moves away with:",
                "options": [
                    "decreasing velocity and decreasing acceleration",
                    "decreasing velocity and increasing acceleration",
                    "decreasing velocity and constant acceleration",
                    "increasing velocity and decreasing acceleration",
                    "increasing velocity and increasing acceleration"
                ],
                "answer": "D",
                "explanation": "(D) As $r$ increases, the repulsive force $F = \\frac{kQq}{r^2}$ and acceleration $a = F/m$ decrease toward zero. Because acceleration remains strictly positive ($a > 0$), the speed and velocity continue to increase ($dv/dt > 0$).",
                "difficulty": "easy",
                "topic": "Repulsive Coulomb Force Kinematics"
            },
            {
                "id": "em-drill-q5",
                "global_num": 5,
                "section": "Electrostatics",
                "question": "A particle of charge $q = 1\\ \\mu\\text{C}$ is fixed at the origin. An object ($m = 10^{-3}\\text{ kg}, q = 1\\ \\mu\\text{C}$) is released from rest $1\\text{ m}$ directly above it. How far does the object fall before coming momentarily to rest ($g = 10\\text{ m/s}^2$)?",
                "options": [
                    "$0.1\\text{ m}$",
                    "$0.3\\text{ m}$",
                    "$0.5\\text{ m}$",
                    "$0.7\\text{ m}$",
                    "$0.9\\text{ m}$"
                ],
                "answer": "A",
                "explanation": "(A) At the turnaround point (fall distance $x$), $\\Delta K = 0$, so net work done by gravity and electrostatic repulsion is zero:\n  $$W_g + W_E = 0 \\implies mgx - k q^2 \\left(\\frac{1}{1-x} - 1\\right) = 0 \\implies mgx = \\frac{k q^2 x}{1-x}$$\n  $$1 - x = \\frac{k q^2}{mg} = \\frac{(9 \\times 10^9)(10^{-6})^2}{(10^{-3})(10)} = \\frac{9 \\times 10^{-3}}{10^{-2}} = 0.9 \\implies x = 1 - 0.9 = 0.1\\text{ m}$$",
                "difficulty": "hard",
                "topic": "Electrostatic Potential Energy Turnaround"
            },
            {
                "id": "em-drill-q6",
                "global_num": 6,
                "section": "Electrostatics",
                "question": "Charges $Q_2, Q_3$ are inside a Gaussian surface while $Q_1, Q_4$ are outside. Point P is on the surface. Which is true?",
                "options": [
                    "Flux depends on all four; $\\vec{E}$ at P depends on $Q_2, Q_3$.",
                    "Flux depends only on $Q_2, Q_3$; $\\vec{E}$ at P depends on all four.",
                    "Flux depends on $Q_2, Q_3$; $\\vec{E}$ at P depends on $Q_1, Q_2, Q_3$.",
                    "Flux depends on $Q_1, Q_4$; $\\vec{E}$ at P depends on $Q_2, Q_3$.",
                    "Both flux and $\\vec{E}$ depend on all four."
                ],
                "answer": "B",
                "explanation": "(B) By Gauss's Law, total enclosed flux $\\Phi_E = \\frac{Q_{\\text{enc}}}{\\varepsilon_0} = \\frac{Q_2 + Q_3}{\\varepsilon_0}$ depends only on internal charges. By the principle of linear superposition, the local electric field vector $\\vec{E}$ at any spatial point P is the vector sum of fields produced by all charges present ($Q_1, Q_2, Q_3, Q_4$).",
                "difficulty": "medium",
                "topic": "Gauss's Law Flux vs. Point Field Superposition"
            },
            {
                "id": "em-drill-q7",
                "global_num": 7,
                "section": "Electrostatics",
                "question": "A nonconducting solid sphere of radius $R$ carries uniform charge $-Q$. What is the electric field magnitude at distance $r < R$ from the center?",
                "options": [
                    "$\\frac{Q r}{4\\pi\\varepsilon_0 R^3}$",
                    "$\\frac{Q}{4\\pi\\varepsilon_0 R^2}$",
                    "$\\frac{Q}{4\\pi\\varepsilon_0 R^3}$",
                    "$\\frac{Q}{4\\pi\\varepsilon_0 R^3 r}$",
                    "$\\frac{Q}{4\\pi\\varepsilon_0 r^2}$"
                ],
                "answer": "A",
                "explanation": "(A) Enclosed charge at radius $r < R$: $Q_{\\text{enc}} = -Q\\left(\\frac{r^3}{R^3}\\right)$. Applying Gauss's Law:\n  $$E(4\\pi r^2) = \\frac{Q(r^3/R^3)}{\\varepsilon_0} \\implies E(r) = \\frac{Q r}{4\\pi\\varepsilon_0 R^3}$$",
                "difficulty": "hard",
                "topic": "Uniformly Charged Sphere Interior Field"
            },
            {
                "id": "em-drill-q8",
                "global_num": 8,
                "section": "Electrostatics",
                "question": "Calculate the electric flux through a Gaussian surface enclosing an electric dipole of charge magnitude $q$.",
                "options": [
                    "$0$",
                    "$\\frac{Aq}{4\\pi\\varepsilon_0}$",
                    "$\\frac{Aq^2}{4\\pi\\varepsilon_0}$",
                    "$\\frac{Aq}{4\\pi\\varepsilon_0 r}$",
                    "$\\frac{Aq}{4\\pi\\varepsilon_0 r^2}$"
                ],
                "answer": "A",
                "explanation": "(A) A dipole consists of equal and opposite charges $+q$ and $-q$. Total enclosed net charge $Q_{\\text{enc}} = +q + (-q) = 0$. By Gauss's Law, $\\Phi_E = \\frac{Q_{\\text{enc}}}{\\varepsilon_0} = 0$.",
                "difficulty": "easy",
                "topic": "Gaussian Surface Enclosing Electric Dipole"
            },
            {
                "id": "em-drill-q9",
                "global_num": 9,
                "section": "Electrostatics",
                "question": "An electron moves from point A ($-10\\text{ V}$) to E ($-10\\text{ V}$), then from E to C ($0\\text{ V}$). Describe the work done by the electric field for each step.",
                "options": [
                    "Negative; Positive",
                    "Zero; Positive",
                    "Zero; Negative",
                    "Positive; Zero",
                    "Positive; Positive"
                ],
                "answer": "C",
                "explanation": "(C) From A to E: $\\Delta V = 0\\text{ V}$ (equipotential line), so $W_E = -q\\Delta V = 0\\text{ J}$.  \nFrom E to C: $\\Delta V = 0 - (-10) = +10\\text{ V}$. Work done by the electric field on the negative electron: $W_E = -q\\Delta V = -(-e)(+10\\text{ V}) = -10\\text{ eV}$ (negative work).",
                "difficulty": "medium",
                "topic": "Equipotential Work & Potential Difference"
            },
            {
                "id": "em-drill-q10",
                "global_num": 10,
                "section": "Electrostatics",
                "question": "How much work does the electric field do moving charge $q = -0.05\\text{ C}$ from $V_A = 200\\text{ V}$ to $V_B = 100\\text{ V}$ along a curved path?",
                "options": [
                    "$-5\\text{ J}$",
                    "$+5\\text{ J}$",
                    "$-10\\text{ J}$",
                    "$+10\\text{ J}$",
                    "$0\\text{ J}$"
                ],
                "answer": "B",
                "explanation": "(B) $$W_E = -q(V_B - V_A) = -(-0.05\\text{ C})(100\\text{ V} - 200\\text{ V}) = +0.05(-100) \\implies W_E = -\\Delta U = +5\\text{ J}$$",
                "difficulty": "easy",
                "topic": "Work by Conservative Electric Field"
            },
            {
                "id": "em-drill-q11",
                "global_num": 11,
                "section": "Capacitors & Dielectrics",
                "question": "A capacitor is fully charged by a battery, disconnected, and then a dielectric is inserted. Which statements are true?  I. Voltage remains the same.  II. Potential energy increases.  III. Capacitance increases.",
                "options": [
                    "I only",
                    "I and II only",
                    "I and III only",
                    "II and III only",
                    "III only"
                ],
                "answer": "E",
                "explanation": "(E) With the battery disconnected, stored charge $Q$ is constant. Inserting a dielectric increases capacitance ($C = \\kappa C_0$, III is true). Voltage decreases ($V = Q/C$, I is false), and stored energy decreases ($U = Q^2/(2C)$, II is false).",
                "difficulty": "easy",
                "topic": "Capacitor Dielectric Insertion & Stored Energy"
            },
            {
                "id": "em-drill-q12",
                "global_num": 12,
                "section": "Capacitors & Dielectrics",
                "question": "If the electric field does negative work on a negative charge moving from A to B, the electrical potential energy:",
                "options": [
                    "is negative",
                    "is positive",
                    "increases",
                    "decreases",
                    "cannot be determined"
                ],
                "answer": "C",
                "explanation": "(C) By definition, $\\Delta U_E = -W_E$. If $W_E < 0$, then $\\Delta U_E > 0$, meaning the potential energy increases.",
                "difficulty": "easy",
                "topic": "Electric Potential Energy Sign Definition"
            },
            {
                "id": "em-drill-q13",
                "global_num": 13,
                "section": "Capacitors & Dielectrics",
                "question": "Three $6\\ \\mu\\text{F}$ capacitors are connected in parallel across a $9\\text{ V}$ battery. Determine the energy stored in each individual capacitor.",
                "options": [
                    "$2.43\\text{ J}$",
                    "$7.29 \\times 10^{-4}\\text{ J}$",
                    "$8.10 \\times 10^{-5}\\text{ J}$",
                    "$2.43 \\times 10^{-4}\\text{ J}$",
                    "$27\\text{ J}$"
                ],
                "answer": "D",
                "explanation": "(D) Each parallel capacitor receives the full $9\\text{ V}$ potential difference:\n  $$U = \\frac{1}{2}C V^2 = \\frac{1}{2}(6 \\times 10^{-6}\\text{ F})(9\\text{ V})^2 = (3 \\times 10^{-6})(81) = 2.43 \\times 10^{-4}\\text{ J}$$",
                "difficulty": "easy",
                "topic": "Parallel Capacitors Individual Stored Energy"
            },
            {
                "id": "em-drill-q14",
                "global_num": 14,
                "section": "Capacitors & Dielectrics",
                "question": "In a uniform electric field between parallel plates, which points lie on the same equipotential?",
                "options": [
                    "1 and 2 only",
                    "1 and 3 only",
                    "2 and 4 only",
                    "3 and 4 only",
                    "All points lie on same equipotential"
                ],
                "answer": "C",
                "explanation": "(C) Equipotential surfaces in a uniform electric field are parallel planes perpendicular to the field lines. Points located at the same perpendicular distance from the plates share the identical electric potential.",
                "difficulty": "easy",
                "topic": "Equipotential Surfaces in Uniform Field"
            },
            {
                "id": "em-drill-q15",
                "global_num": 15,
                "section": "Capacitors & Dielectrics",
                "question": "Isolated conducting spheres of radius $a$ (Sphere 1) and $4a$ (Sphere 2) each carry charge $-Q$. Connected by a thin wire, what are the final charges?",
                "options": [
                    "$-Q,\\ -Q$",
                    "$-2Q/3,\\ -4Q/3$",
                    "$-2Q/5,\\ -8Q/5$",
                    "$-4Q/5,\\ -6Q/5$",
                    "$-Q/2,\\ -3Q/2$"
                ],
                "answer": "C",
                "explanation": "(C) Total charge $Q_{\\text{tot}} = -2Q$. When connected, potential equalizes: $V_1 = V_2 \\implies \\frac{k q_1}{a} = \\frac{k q_2}{4a} \\implies q_2 = 4q_1$.\n  $$q_1 + 4q_1 = -2Q \\implies 5q_1 = -2Q \\implies q_1 = -\\frac{2}{5}Q,\\quad q_2 = -\\frac{8}{5}Q$$",
                "difficulty": "medium",
                "topic": "Connected Conducting Spheres Charge Equilibrium"
            },
            {
                "id": "em-drill-q16",
                "global_num": 16,
                "section": "Electric Circuits",
                "question": "Brass wire has $4\\times$ diameter and $5\\times$ resistivity of silver wire of the same length. Compare resistances $R_B$ and $R_S$.",
                "options": [
                    "$R_B = \\frac{5}{16}R_S$",
                    "$R_B = \\frac{5}{4}R_S$",
                    "$R_B = \\frac{5}{64}R_S$",
                    "$R_B = \\frac{16}{5}R_S$",
                    "$R_B = 20 R_S$"
                ],
                "answer": "A",
                "explanation": "(A) Area scales with diameter squared: $A_B = 4^2 A_S = 16 A_S$.\n  $$R_B = \\frac{\\rho_B L}{A_B} = \\frac{(5\\rho_S)L}{16 A_S} = \\frac{5}{16}R_S$$",
                "difficulty": "easy",
                "topic": "Resistivity & Conductor Cross-Section Ratio"
            },
            {
                "id": "em-drill-q17",
                "global_num": 17,
                "section": "Electric Circuits",
                "question": "Doubling the voltage across an ohmic conductor without changing resistance causes current to:",
                "options": [
                    "decrease by 4",
                    "decrease by 2",
                    "remain unchanged",
                    "increase by a factor of 2",
                    "increase by 4"
                ],
                "answer": "D",
                "explanation": "(D) By Ohm's Law, $I = V/R$. For constant $R$, current is directly proportional to voltage, doubling when $V$ is doubled.",
                "difficulty": "easy",
                "topic": "Ohm's Law Proportionality"
            },
            {
                "id": "em-drill-q18",
                "global_num": 18,
                "section": "Electric Circuits",
                "question": "A circuit with total resistance $5\\ \\Omega$ dissipates $125\\text{ W}$ of power. At what voltage is it operating?",
                "options": [
                    "$5\\text{ V}$",
                    "$15\\text{ V}$",
                    "$25\\text{ V}$",
                    "$45\\text{ V}$",
                    "$625\\text{ V}$"
                ],
                "answer": "C",
                "explanation": "(C) $$P = \\frac{V^2}{R} \\implies V = \\sqrt{P R} = \\sqrt{(125\\text{ W})(5\\ \\Omega)} = \\sqrt{625} = 25\\text{ V}$$",
                "difficulty": "easy",
                "topic": "Circuit Power & Operating Voltage"
            },
            {
                "id": "em-drill-q19",
                "global_num": 19,
                "section": "Electric Circuits",
                "question": "A $120\\text{ V}, 60\\text{ W}$ bulb is connected to a $240\\text{ V}$ outlet. How bright is the bulb compared to standard operation?",
                "options": [
                    "4 times as bright",
                    "2 times as bright",
                    "Same brightness",
                    "Half as bright",
                    "One-quarter as bright"
                ],
                "answer": "A",
                "explanation": "(A) $$P = \\frac{V^2}{R} \\propto V^2$$\nDoubling the operating voltage quadruples the power dissipated ($2^2 = 4$), making the bulb 4 times as bright.",
                "difficulty": "easy",
                "topic": "Incandescent Bulb Overvoltage Power"
            },
            {
                "id": "em-drill-q20",
                "global_num": 20,
                "section": "Electric Circuits",
                "question": "An ammeter arranged to measure circuit branch current should possess which characteristics?",
                "options": [
                    "High resistance, in series",
                    "Low resistance, in series",
                    "High resistance, in parallel",
                    "Low resistance, in parallel",
                    "Same resistance, in series"
                ],
                "answer": "B",
                "explanation": "(B) Ammeters must be placed in series so the entire branch current passes through them. Their internal resistance must approach zero ($R \\approx 0$) so they do not add series resistance or alter the circuit current.",
                "difficulty": "easy",
                "topic": "Ammeter Construction & Series Resistance"
            },
            {
                "id": "em-drill-q21",
                "global_num": 21,
                "section": "Magnetic Fields",
                "question": "Which statements are true regarding magnetic forces?  I. Magnetic force can never do work on a charged particle.  II. Magnetic force can never change the velocity of a charged particle.  III. A charged particle always experiences a force moving in a magnetic field.",
                "options": [
                    "I only",
                    "I and II only",
                    "II and III only",
                    "III only",
                    "None of the above"
                ],
                "answer": "A",
                "explanation": "(A) $\\vec{F}_B = q(\\vec{v}\\times\\vec{B})$ is always perpendicular to $\\vec{v}$, so power $P = \\vec{F}_B\\cdot\\vec{v} = 0$ and work is always zero (I is true). It alters direction, thus changing velocity vector $\\vec{v}$ (II is false). Moving parallel to $\\vec{B}$ produces zero force (III is false).",
                "difficulty": "easy",
                "topic": "Magnetic Force Work & Trajectory Properties"
            },
            {
                "id": "em-drill-q22",
                "global_num": 22,
                "section": "Magnetic Fields",
                "question": "Particle ($q = 4.0\\text{ nC}, m = 2 \\times 10^{-4}\\text{ kg}$) moves perpendicular to $B = 0.1\\text{ T}$ at $3 \\times 10^4\\text{ m/s}$. What is its acceleration?",
                "options": [
                    "$0.0006\\text{ m/s}^2$",
                    "$0.006\\text{ m/s}^2$",
                    "$0.06\\text{ m/s}^2$",
                    "$0.6\\text{ m/s}^2$",
                    "None of the above"
                ],
                "answer": "C",
                "explanation": "(C) $$F_B = q v B = (4.0 \\times 10^{-9}\\text{ C})(3 \\times 10^4\\text{ m/s})(0.1\\text{ T}) = 1.2 \\times 10^{-5}\\text{ N}$$\n$$a = \\frac{F_B}{m} = \\frac{1.2 \\times 10^{-5}\\text{ N}}{2 \\times 10^{-4}\\text{ kg}} = 0.06\\text{ m/s}^2$$",
                "difficulty": "medium",
                "topic": "Magnetic Lorentz Force & Particle Acceleration"
            },
            {
                "id": "em-drill-q23",
                "global_num": 23,
                "section": "Magnetic Fields",
                "question": "Find the magnetic field $2\\text{ cm}$ from a long straight wire carrying $10\\text{ A}$.",
                "options": [
                    "$1 \\times 10^{-6}\\text{ T}$",
                    "$1 \\times 10^{-5}\\text{ T}$",
                    "$2 \\times 10^{-5}\\text{ T}$",
                    "$1 \\times 10^{-4}\\text{ T}$",
                    "$2 \\times 10^{-4}\\text{ T}$"
                ],
                "answer": "D",
                "explanation": "(D) $$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{(4\\pi \\times 10^{-7})(10)}{2\\pi (0.02)} = \\frac{4 \\times 10^{-6}}{0.04} = 1.0 \\times 10^{-4}\\text{ T}$$",
                "difficulty": "easy",
                "topic": "Biot-Savart Law Straight Wire Magnetic Field"
            },
            {
                "id": "em-drill-q24",
                "global_num": 24,
                "section": "Electromagnetic Induction",
                "question": "A metal rod of length $L$ is pulled upward with speed $v$ through a uniform magnetic field $B$ pointing out of the page. What is the potential difference between endpoints $a$ (left) and $b$ (right)?",
                "options": [
                    "$0$",
                    "$\\frac{1}{2}vBL$, $a$ higher",
                    "$\\frac{1}{2}vBL$, $b$ higher",
                    "$vBL$, point $a$ at higher potential",
                    "$vBL$, point $b$ at higher potential"
                ],
                "answer": "E",
                "explanation": "(E) By the right-hand rule, $\\vec{v}\\times\\vec{B}$ for upward velocity and out-of-page field points to the right. Mobile electrons are pushed left toward point $a$, leaving positive charge accumulation at point $b$. Point $b$ is at the higher electric potential by $\\Delta V = vBL$.",
                "difficulty": "medium",
                "topic": "Motional EMF & Endpoint Potential Polarity"
            },
            {
                "id": "em-drill-q25",
                "global_num": 25,
                "section": "Electromagnetic Induction",
                "question": "A conducting rod of length $0.2\\text{ m}$ and resistance $10\\ \\Omega$ slides at $3\\text{ m/s}$ to the left along rails in $B = 0.5\\text{ T}$ directed into the page. What is the magnitude and direction of the induced current?",
                "options": [
                    "$0.03\\text{ A}$, downward",
                    "$0.03\\text{ A}$, upward",
                    "$0.3\\text{ A}$, downward",
                    "$0.3\\text{ A}$, upward",
                    "$0.015\\text{ A}$, downward"
                ],
                "answer": "A",
                "explanation": "(A) $$\\mathcal{E} = B L v = (0.5\\text{ T})(0.2\\text{ m})(3\\text{ m/s}) = 0.3\\text{ V}$$\n$$I = \\frac{\\mathcal{E}}{R} = \\frac{0.3\\text{ V}}{10\\ \\Omega} = 0.03\\text{ A}$$\nMoving to the left decreases the loop area and inward flux. By Lenz's Law, the induced current circulates clockwise to produce inward flux, flowing downward through the moving rod.",
                "difficulty": "medium",
                "topic": "Motional EMF on Rails & Lenz's Law Current"
            }
        ]
    }
};
