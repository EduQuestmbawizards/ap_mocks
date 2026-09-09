// Specific Question Bank for Test: ap-topic-physc-em
const AP_TEST_DATA = {
    "ap-topic-physc-em": {
        "id": "ap-topic-physc-em",
        "title": "AP Physics C: Electricity & Magnetism",
        "subject": "AP Physics C: Electricity and Magnetism",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-physc-em_q1",
                "topic": "Gauss Law",
                "difficulty": "hard",
                "question": "What is the total electric flux through a closed spherical surface containing a point charge $q$?",
                "options": [
                    "0",
                    "$q/\\varepsilon_0$",
                    "$q \\varepsilon_0$",
                    "\\$4\\pi q$"
                ],
                "answer": "B",
                "explanation": "Gauss Law states total flux $\\Phi_E = Q_{enclosed} / \\varepsilon_0$."
            },
            {
                "id": "ap-topic-physc-em_q2",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A solid insulating sphere of radius $R$ has a non-uniform volume charge density $\\rho(r) = \\alpha r$ for $r \\le R$, where $\\alpha$ is a constant. Using Gauss's Law, what is the electric field magnitude $E(r)$ inside the sphere ($r < R$)?",
                "options": [
                    "$E(r) = \\frac{\\alpha r^2}{4\\varepsilon_0}$",
                    "$E(r) = \\frac{\\alpha r}{3\\varepsilon_0}$",
                    "$E(r) = \\frac{\\alpha r^2}{3\\varepsilon_0}$",
                    "$E(r) = \\frac{\\alpha r^3}{4\\varepsilon_0}$"
                ],
                "answer": "A",
                "explanation": "Construct a concentric spherical Gaussian surface of radius $r < R$. Enclosed charge: $q_{\\text{enc}} = \\int_0^r \\rho(r') 4\\pi r'^2\\,dr' = 4\\pi\\alpha \\int_0^r r'^3\\,dr' = 4\\pi\\alpha \\frac{r^4}{4} = \\pi\\alpha r^4$. Gauss's Law: $\\oint \\vec{E} \\cdot d\\vec{A} = E(4\\pi r^2) = \\frac{q_{\\text{enc}}}{\\varepsilon_0} = \\frac{\\pi\\alpha r^4}{\\varepsilon_0}$. Solving for $E$: $E(r) = \\frac{\\pi\\alpha r^4}{4\\pi\\varepsilon_0 r^2} = \\frac{\\alpha r^2}{4\\varepsilon_0}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q3",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A long straight wire of radius $R$ carries a total steady current $I$ distributed with a non-uniform volume current density $J(r) = cr$ for $r \\le R$. What is the magnetic field $B(r)$ inside the wire ($r < R$)?",
                "options": [
                    "$B(r) = \\frac{\\mu_0 I r^2}{2\\pi R^3}$",
                    "$B(r) = \\frac{\\mu_0 I r}{2\\pi R^2}$",
                    "$B(r) = \\frac{\\mu_0 I r^2}{3\\pi R^3}$",
                    "$B(r) = \\frac{\\mu_0 I}{2\\pi r}$"
                ],
                "answer": "A",
                "explanation": "Total current: $I = \\int_0^R J(r') 2\\pi r'\\,dr' = 2\\pi c \\int_0^R r'^2\\,dr' = \\frac{2\\pi c R^3}{3} \\implies c = \\frac{3I}{2\\pi R^3}$. For an Amperean loop of radius $r < R$: $I_{\\text{enc}} = \\int_0^r c r' (2\\pi r')\\,dr' = \\frac{2\\pi c r^3}{3} = I \\left(\\frac{r}{R}\\right)^3$. Ampere's Law: $\\oint \\vec{B} \\cdot d\\vec{\\ell} = B(2\\pi r) = \\mu_0 I_{\\text{enc}} = \\mu_0 I \\frac{r^3}{R^3} \\implies B(r) = \\frac{\\mu_0 I r^2}{2\\pi R^3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q4",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A thin rod of length $L$ lies along the $x$-axis from $x = 0$ to $x = L$ with uniform charge $Q$. What is the electric potential $V$ at the point $(-d, 0)$ on the $x$-axis, relative to $V(\\infty) = 0$?",
                "options": [
                    "$\\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{L}\\ln\\left(1 + \\frac{L}{d}\\right)$",
                    "$\\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{d}$",
                    "$\\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{L+d}$",
                    "$\\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{L}\\ln\\left(\\frac{d}{L}\\right)$"
                ],
                "answer": "A",
                "explanation": "Charge density $\\lambda = \\frac{Q}{L}$. Consider element $dq = \\lambda\\,dx$ at coordinate $x$. The distance from element to $(-d, 0)$ is $r = x - (-d) = x + d$. The potential is $V = \\frac{1}{4\\pi\\varepsilon_0}\\int_0^L \\frac{\\lambda\\,dx}{x + d} = \\frac{\\lambda}{4\\pi\\varepsilon_0}\\left[\\ln(x + d)\\right]_0^L = \\frac{Q}{4\\pi\\varepsilon_0 L}\\left[\\ln(L + d) - \\ln d\\right] = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{L}\\ln\\left(\\frac{L + d}{d}\\right) = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{L}\\ln\\left(1 + \\frac{L}{d}\\right)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q5",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A cylindrical capacitor consists of two concentric conducting cylinders of radii $a$ and $b$ ($a < b$) and length $L \\gg b$. What is its capacitance $C$?",
                "options": [
                    "$C = \\frac{2\\pi\\varepsilon_0 L}{\\ln(b/a)}$",
                    "$C = \\frac{2\\pi\\varepsilon_0 L}{b - a}$",
                    "$C = \\frac{4\\pi\\varepsilon_0 L}{\\ln(b/a)}$",
                    "$C = \\frac{\\pi\\varepsilon_0 L}{\\ln(b/a)}$"
                ],
                "answer": "A",
                "explanation": "Using Gauss's Law: $E(r) = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$. The potential difference between cylinders is $\\Delta V = \\int_a^b E\\,dr = \\frac{\\lambda}{2\\pi\\varepsilon_0} \\ln(b/a)$. Total charge is $Q = \\lambda L$. Capacitance is $C = \\frac{Q}{\\Delta V} = \\frac{\\lambda L}{\\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln(b/a)} = \\frac{2\\pi\\varepsilon_0 L}{\\ln(b/a)}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q6",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "In an $RC$ circuit with resistance $R$ and capacitance $C$ connected to an ideal battery of EMF $\\mathcal{E}$, what is the charge on the capacitor as a function of time after the switch is closed at $t = 0$?",
                "options": [
                    "$q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)$",
                    "$q(t) = C\\mathcal{E} e^{-t/RC}$",
                    "$q(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t/RC}\\right)$",
                    "$q(t) = C\\mathcal{E}\\left(1 - e^{-RC/t}\\right)$"
                ],
                "answer": "A",
                "explanation": "Kirchhoff's Loop Rule: $\\mathcal{E} - iR - \\frac{q}{C} = 0$. Substituting $i = \\frac{dq}{dt}$: $R\\frac{dq}{dt} + \\frac{q}{C} = \\mathcal{E}$. Solving the first-order linear differential equation with $q(0) = 0$ yields $q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q7",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A conducting rod of length $L$, mass $m$, and resistance $R$ slides frictionlessly along two parallel horizontal conducting rails connected by a zero-resistance wire. A uniform magnetic field $\\vec{B}$ points perpendicularly into the page. If the rod is given an initial velocity $v_0$ at $t = 0$, what is its velocity $v(t)$?",
                "options": [
                    "$v(t) = v_0 e^{-\\frac{B^2 L^2}{m R} t}$",
                    "$v(t) = v_0\\left(1 - e^{-\\frac{B^2 L^2}{m R} t}\\right)$",
                    "$v(t) = v_0 - \\frac{B^2 L^2}{m R} t$",
                    "$v(t) = v_0 e^{-\\frac{BL}{m R} t}$"
                ],
                "answer": "A",
                "explanation": "Motional EMF $\\mathcal{E} = BLv$, producing induced current $I = \\frac{\\mathcal{E}}{R} = \\frac{BLv}{R}$. By Lenz's Law, the magnetic braking force opposes motion: $F_B = -I L B = -\\frac{B^2 L^2}{R} v$. By Newton's 2nd Law: $m\\frac{dv}{dt} = -\\frac{B^2 L^2}{R} v \\implies \\frac{dv}{v} = -\\frac{B^2 L^2}{mR} dt$. Integrating: $v(t) = v_0 e^{-\\frac{B^2 L^2}{mR} t}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q8",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "What is the resonant angular frequency $\\omega$ of an ideal $LC$ circuit consisting of an inductor $L$ and capacitor $C$?",
                "options": [
                    "$\\omega = \\frac{1}{\\sqrt{LC}}$",
                    "$\\omega = \\sqrt{\\frac{L}{C}}$",
                    "$\\omega = \\frac{1}{LC}$",
                    "$\\omega = 2\\pi\\sqrt{LC}$"
                ],
                "answer": "A",
                "explanation": "Kirchhoff's Loop Rule for an LC loop gives $-L\\frac{di}{dt} - \\frac{q}{C} = 0$. Since $i = \\frac{dq}{dt}$, $L\\frac{d^2q}{dt^2} + \\frac{1}{C}q = 0 \\implies \\frac{d^2q}{dt^2} + \\frac{1}{LC}q = 0$. Comparing to $\\frac{d^2q}{dt^2} + \\omega^2 q = 0$ gives $\\omega = \\frac{1}{\\sqrt{LC}}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q9",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A circular loop of radius $R$ carries a steady current $I$. Using the Biot-Savart Law, what is the magnetic field magnitude $B$ at the center of the loop?",
                "options": [
                    "$B = \\frac{\\mu_0 I}{2R}$",
                    "$B = \\frac{\\mu_0 I}{2\\pi R}$",
                    "$B = \\frac{\\mu_0 I}{4R}$",
                    "$B = \\frac{\\mu_0 I}{\\pi R}$"
                ],
                "answer": "A",
                "explanation": "Biot-Savart Law: $d\\vec{B} = \\frac{\\mu_0 I}{4\\pi} \\frac{d\\vec{\\ell} \\times \\hat{r}}{R^2}$. At the center, $d\\vec{\\ell} \\perp \\hat{r}$, so $|d\\vec{\\ell} \\times \\hat{r}| = d\\ell$. Integrating around the circumference $\\oint d\\ell = 2\\pi R$: $B = \\frac{\\mu_0 I}{4\\pi R^2}(2\\pi R) = \\frac{\\mu_0 I}{2R}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q10",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "How much energy is stored in the magnetic field of a $4.0\\text{ H}$ inductor carrying a steady current of $3.0\\text{ A}$?",
                "options": [
                    "18 J",
                    "36 J",
                    "12 J",
                    "6.0 J"
                ],
                "answer": "A",
                "explanation": "Energy stored in an inductor is $U_B = \\frac{1}{2}L I^2 = \\frac{1}{2}(4.0\\text{ H})(3.0\\text{ A})^2 = 2.0(9.0) = 18\\text{ J}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q11",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "The electric potential in a region of space is given by $V(x, y, z) = 2x^2 y - 3yz^2$. What is the electric field vector $\\vec{E}$ at the point $(1, 2, -1)$?",
                "options": [
                    "$-8\\hat{i} + 1\\hat{j} - 12\\hat{k}$",
                    "$8\\hat{i} - 1\\hat{j} + 12\\hat{k}$",
                    "$-8\\hat{i} - 7\\hat{j} + 12\\hat{k}$",
                    "$-4\\hat{i} + 1\\hat{j} - 6\\hat{k}$"
                ],
                "answer": "A",
                "explanation": "Electric field is the negative gradient: $\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$. Partial derivatives: $\\frac{\\partial V}{\\partial x} = 4xy$; $\\frac{\\partial V}{\\partial y} = 2x^2 - 3z^2$; $\\frac{\\partial V}{\\partial z} = -6yz$. Evaluating at $(1, 2, -1)$: $\\frac{\\partial V}{\\partial x} = 4(1)(2) = 8$; $\\frac{\\partial V}{\\partial y} = 2(1)^2 - 3(-1)^2 = 2 - 3 = -1$; $\\frac{\\partial V}{\\partial z} = -6(2)(-1) = 12$. Thus $\\vec{E} = -[8\\hat{i} - 1\\hat{j} + 12\\hat{k}] = -8\\hat{i} + 1\\hat{j} - 12\\hat{k}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q12",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "A parallel-plate capacitor with plate area $A$ and separation $d$ is charged to voltage $V$ and then disconnected from the battery. A dielectric slab of dielectric constant $\\kappa = 3.0$ is inserted between the plates. What happens to the potential difference between the plates?",
                "options": [
                    "It decreases to $\\frac{V}{3}$",
                    "It increases to $3V$",
                    "It remains $V$",
                    "It drops to zero"
                ],
                "answer": "A",
                "explanation": "Since the capacitor is disconnected, the charge $Q$ on the plates is conserved. Inserting the dielectric increases capacitance by factor $\\kappa$: $C' = \\kappa C = 3C$. From $V' = \\frac{Q}{C'} = \\frac{Q}{3C} = \\frac{V}{3}$, the voltage is reduced by a factor of 3.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q13",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A long solenoid of radius $R$ and $n$ turns per unit length carries a time-varying current $I(t) = I_0\\cos(\\omega t)$. What is the induced electric field magnitude $E(r)$ at a distance $r < R$ from the central axis?",
                "options": [
                    "$E(r) = \\frac{1}{2}\\mu_0 n I_0 \\omega r \\sin(\\omega t)$",
                    "$E(r) = \\mu_0 n I_0 \\omega r \\sin(\\omega t)$",
                    "$E(r) = \\frac{1}{2}\\mu_0 n I_0 \\omega \\frac{R^2}{r} \\sin(\\omega t)$",
                    "$E(r) = 0$"
                ],
                "answer": "A",
                "explanation": "Inside the solenoid, $B(t) = \\mu_0 n I(t) = \\mu_0 n I_0 \\cos(\\omega t)$. Magnetic flux through a circle of radius $r < R$ is $\\Phi_B = B \\pi r^2 = \\pi r^2 \\mu_0 n I_0 \\cos(\\omega t)$. Faraday's Law: $\\oint \\vec{E} \\cdot d\\vec{\\ell} = E(2\\pi r) = -\\frac{d\\Phi_B}{dt} = \\pi r^2 \\mu_0 n I_0 \\omega \\sin(\\omega t) \\implies E(r) = \\frac{1}{2}\\mu_0 n I_0 \\omega r \\sin(\\omega t)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q14",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "In an $RL$ circuit connected to battery $\\mathcal{E}$ through a switch, what is the inductive time constant $\\tau_L$?",
                "options": [
                    "$\\tau_L = \\frac{L}{R}$",
                    "$\\tau_L = R L$",
                    "$\\tau_L = \\frac{R}{L}$",
                    "$\\tau_L = \\frac{1}{\\sqrt{LR}}$"
                ],
                "answer": "A",
                "explanation": "Kirchhoff's loop equation $L\\frac{di}{dt} + Ri = \\mathcal{E}$ has characteristic time scale $\\tau_L = \\frac{L}{R}$ (in seconds).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q15",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "What is the electrostatic potential energy $U$ required to assemble three identical point charges $+q$ at the vertices of an equilateral triangle of side length $a$ in empty space?",
                "options": [
                    "$U = \\frac{3 q^2}{4\\pi\\varepsilon_0 a}$",
                    "$U = \\frac{q^2}{4\\pi\\varepsilon_0 a}$",
                    "$U = \\frac{3 q^2}{8\\pi\\varepsilon_0 a}$",
                    "$U = \\frac{6 q^2}{4\\pi\\varepsilon_0 a}$"
                ],
                "answer": "A",
                "explanation": "Total assembly work is the sum over all unique pairwise interactions: $U = U_{12} + U_{13} + U_{23} = \\frac{1}{4\\pi\\varepsilon_0}\\left(\\frac{q^2}{a} + \\frac{q^2}{a} + \\frac{q^2}{a}\\right) = \\frac{3q^2}{4\\pi\\varepsilon_0 a}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q16",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A proton (charge $+e$, mass $m$) enters a region with uniform electric field $\\vec{E} = E_0\\hat{j}$ and uniform magnetic field $\\vec{B} = B_0\\hat{k}$ moving along the $+x$-direction. What speed $v$ allows the proton to pass undeflected?",
                "options": [
                    "$v = \\frac{E_0}{B_0}$",
                    "$v = \\frac{B_0}{E_0}$",
                    "$v = \\sqrt{\\frac{E_0}{B_0}}$",
                    "$v = E_0 B_0$"
                ],
                "answer": "A",
                "explanation": "For zero net deflection, electric and magnetic forces must balance: $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) = 0$. Here $\\vec{F}_E = qE_0\\hat{j}$, and $\\vec{F}_B = q(v\\hat{i} \\times B_0\\hat{k}) = -qvB_0\\hat{j}$. Setting magnitudes equal: $qE_0 = qvB_0 \\implies v = \\frac{E_0}{B_0}$ (the velocity selector condition).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q17",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "What is the equivalent capacitance of two capacitors $C_1 = 3\\,\\mu\\text{F}$ and $C_2 = 6\\,\\mu\\text{F}$ connected in series?",
                "options": [
                    "$2.0\\,\\mu\\text{F}$",
                    "$9.0\\,\\mu\\text{F}$",
                    "$4.5\\,\\mu\\text{F}$",
                    "$1.5\\,\\mu\\text{F}$"
                ],
                "answer": "A",
                "explanation": "For capacitors in series: $\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{3} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2.0} \\implies C_{\\text{eq}} = 2.0\\,\\mu\\text{F}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q18",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "A flat square coil of side length $a = 0.20\\text{ m}$ with $N = 50$ turns is placed in a uniform magnetic field perpendicular to the coil plane. The magnetic field increases linearly from $0.10\\text{ T}$ to $0.70\\text{ T}$ in $0.30\\text{ s}$. What is the magnitude of the induced EMF in the coil?",
                "options": [
                    "4.0 V",
                    "2.0 V",
                    "8.0 V",
                    "0.40 V"
                ],
                "answer": "A",
                "explanation": "Area $A = a^2 = (0.20)^2 = 0.040\\text{ m}^2$. Rate of change of magnetic field is $\\frac{\\Delta B}{\\Delta t} = \\frac{0.70 - 0.10}{0.30} = \\frac{0.60}{0.30} = 2.0\\text{ T/s}$. By Faraday's Law: $|\\mathcal{E}| = N A \\left|\\frac{\\Delta B}{\\Delta t}\\right| = 50(0.040)(2.0) = 4.0\\text{ V}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q19",
                "topic": "Electricity & Magnetism",
                "difficulty": "medium",
                "question": "How does the electric field magnitude $E$ scale with distance $r$ from an infinitely long line of uniform linear charge density $\\lambda$?",
                "options": [
                    "$E \\propto \\frac{1}{r}$",
                    "$E \\propto \\frac{1}{r^2}$",
                    "$E \\propto \\frac{1}{r^3}$",
                    "$E$ is constant independent of $r$"
                ],
                "answer": "A",
                "explanation": "Applying Gauss's Law to a cylindrical Gaussian surface gives $E(2\\pi r L) = \\frac{\\lambda L}{\\varepsilon_0} \\implies E(r) = \\frac{\\lambda}{2\\pi\\varepsilon_0 r} \\propto \\frac{1}{r}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-em_q20",
                "topic": "Electricity & Magnetism",
                "difficulty": "hard",
                "question": "What correction did James Clerk Maxwell introduce to Ampere's Law to account for time-varying electric fields?",
                "options": [
                    "Displacement current: $\\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$",
                    "Motional EMF: $-\\frac{d\\Phi_B}{dt}$",
                    "Poynting vector flux: $\\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})$",
                    "Dielectric polarization current: $\\kappa \\frac{dI}{dt}$"
                ],
                "answer": "A",
                "explanation": "Maxwell added the displacement current term $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ to Ampere's Law, completing the Maxwell-Ampere Law: $\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}} + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$, which resolved charge conservation in capacitors and predicted electromagnetic waves.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
