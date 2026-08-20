// Specific Question Bank for Test: ap-diag-physc-em
const AP_TEST_DATA = {
    "ap-diag-physc-em": {
        "id": "ap-diag-physc-em",
        "title": "AP Physics C: Electricity & Magnetism Diagnostic Assessment",
        "subtitle": "Comprehensive 30-Question Baseline Assessment across Electrostatics, Gauss's Law, Circuits, Magnetism & Induction",
        "timeLimitMinutes": 45,
        "testType": "Diagnostic",
        "subject": "AP Physics C: Electricity & Magnetism",
        "topic": "E&M Diagnostic",
        "questions": [
            {
                "id": "diag_physc_em_q1",
                "topic": "Coulomb's Law & Superposition",
                "difficulty": "medium",
                "question": "<p>Two point charges $+q$ and $+4q$ are fixed a distance $L$ apart. A third charge $Q$ is placed on the line connecting them such that the net electrostatic force on $Q$ is zero. What is the position of $Q$ relative to $+q$?</p>",
                "options": [
                    "$\\frac{1}{5}L$",
                    "$\\frac{1}{4}L$",
                    "$\\frac{1}{3}L$",
                    "$\\frac{1}{2}L$",
                    "$\\frac{2}{3}L$"
                ],
                "answer": "C",
                "explanation": "<p>Equating electrostatic forces: $\\frac{k q |Q|}{x^2} = \\frac{k (4q) |Q|}{(L - x)^2} \\implies \\frac{1}{x} = \\frac{2}{L - x} \\implies L - x = 2x \\implies 3x = L \\implies x = \\frac{L}{3}$.</p>"
            },
            {
                "id": "diag_physc_em_q2",
                "topic": "Continuous Charge Distribution - Ring",
                "difficulty": "hard",
                "question": "<p>A thin circular ring of radius $R$ carries a uniform positive charge $Q$. What is the electric field magnitude on the ring's central axis at a distance $z$ from its center?</p>",
                "options": [
                    "$\\frac{kQ}{z^2}$",
                    "$\\frac{kQz}{(z^2 + R^2)^{3/2}}$",
                    "$\\frac{kQ}{(z^2 + R^2)}$",
                    "$\\frac{kQR}{(z^2 + R^2)^{3/2}}$",
                    "$\\frac{kQz^2}{(z^2 + R^2)^2}$"
                ],
                "answer": "B",
                "explanation": "<p>By symmetry, perpendicular components cancel. The axial component is $E_z = \\int dE_z = \\int \\frac{k\\,dq}{r^2}\\cos\\theta = \\frac{kz}{(z^2+R^2)^{3/2}}\\int dq = \\frac{kQz}{(z^2 + R^2)^{3/2}}$.</p>"
            },
            {
                "id": "diag_physc_em_q3",
                "topic": "Gauss's Law - Infinite Line of Charge",
                "difficulty": "medium",
                "question": "<p>Using a cylindrical Gaussian surface of radius $r$ and length $L$, calculate the electric field magnitude at distance $r$ from an infinitely long straight wire with uniform linear charge density $\\lambda$.</p>",
                "options": [
                    "$\\frac{\\lambda}{\\epsilon_0 r}$",
                    "$\\frac{\\lambda}{2\\pi\\epsilon_0 r}$",
                    "$\\frac{\\lambda}{4\\pi\\epsilon_0 r^2}$",
                    "$\\frac{\\lambda}{2\\epsilon_0 r^2}$",
                    "$\\frac{\\lambda}{\\pi\\epsilon_0 r}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\oint \\vec{E}\\cdot d\\vec{A} = E(2\\pi r L) = \\frac{q_{\\text{enc}}}{\\epsilon_0} = \\frac{\\lambda L}{\\epsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$.</p>"
            },
            {
                "id": "diag_physc_em_q4",
                "topic": "Electric Flux & Cube Geometry",
                "difficulty": "medium",
                "question": "<p>A point charge $+q$ is placed at the exact center of a cube. What is the electric flux through ONE single face of the cube?</p>",
                "options": [
                    "$\\frac{q}{\\epsilon_0}$",
                    "$\\frac{q}{2\\epsilon_0}$",
                    "$\\frac{q}{4\\epsilon_0}$",
                    "$\\frac{q}{6\\epsilon_0}$",
                    "$\\frac{q}{8\\epsilon_0}$"
                ],
                "answer": "D",
                "explanation": "<p>By Gauss's Law, the total flux through all 6 identical faces is $\\Phi_{\\text{total}} = \\frac{q}{\\epsilon_0}$. By symmetry, the flux through one face is $\\Phi_{\\text{face}} = \\frac{q}{6\\epsilon_0}$.</p>"
            },
            {
                "id": "diag_physc_em_q5",
                "topic": "Conductors in Electrostatic Equilibrium",
                "difficulty": "medium",
                "question": "<p>An uncharged conducting spherical shell has inner radius $a$ and outer radius $b$. A point charge $+Q$ is placed at the center of the hollow cavity. What is the surface charge density $\\sigma_{\\text{inner}}$ on the inner cavity surface?</p>",
                "options": [
                    "$0$",
                    "$-\\frac{Q}{4\\pi a^2}$",
                    "$+\\frac{Q}{4\\pi a^2}$",
                    "$-\\frac{Q}{4\\pi b^2}$",
                    "$+\\frac{Q}{4\\pi b^2}$"
                ],
                "answer": "B",
                "explanation": "<p>Inside the conducting material ($a < r < $b$), $\\vec{E} = 0$. A Gaussian sphere in this region must enclose zero net charge, so $q_{\\text{inner$}} = $-Q$. The surface charge density on the inner surface of area $4\\pi a^$2$ is $\\sigma_{\\text{inner}} = -\\frac{Q}{4\\pi a^2}$.</p>"
            },
            {
                "id": "diag_physc_em_q6",
                "topic": "Gauss's Law - Non-Conducting Sphere",
                "difficulty": "hard",
                "question": "<p>A solid insulating sphere of radius $R$ has a uniform volume charge density $\\rho$. What is the electric field magnitude $E(r)$ at a distance $r < R$ inside the sphere?</p>",
                "options": [
                    "$\\frac{\\rho r}{3\\epsilon_0}$",
                    "$\\frac{\\rho r}{2\\epsilon_0}$",
                    "$\\frac{\\rho R^3}{3\\epsilon_0 r^2}$",
                    "$\\frac{\\rho r^2}{3\\epsilon_0}$",
                    "$\\frac{\\rho}{3\\epsilon_0 r}$"
                ],
                "answer": "A",
                "explanation": "<p>Enclosed charge in Gaussian sphere of radius $r$: $q_{\\text{enc}} = \\rho\\left(\\frac{4}{3}\\pi r^3\\right)$. Applying Gauss's Law: $E(4\\pi r^2) = \\frac{\\rho (4/3\\pi r^3)}{\\epsilon_0} \\implies E = \\frac{\\rho r}{3\\epsilon_0}$.</p>"
            },
            {
                "id": "diag_physc_em_q7",
                "topic": "Electric Potential Difference",
                "difficulty": "medium",
                "question": "<p>In a region of uniform electric field $\\vec{E} = (200\\hat{i})\\text{ N/C}$, what is the potential difference $V_B - V_A$ between point $A$ at $(0, 0)\\text{ m}$ and point $B$ at $(3, 4)\\text{ m}$?</p>",
                "options": [
                    "$-600\\text{ V}$",
                    "$+600\\text{ V}$",
                    "$-800\\text{ V}$",
                    "$-1000\\text{ V}$",
                    "$+1000\\text{ V}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\Delta V = $-\\int_{A}^{B} $vec{E}\\cdot d\\vec{r} = -\\vec{E}\\cdot\\Delta\\vec{r} = -(200\\hat{i})\\cdot(3\\hat{i} + 4\\hat{j}) = -600\\text{ V}$.</p>"
            },
            {
                "id": "diag_physc_em_q8",
                "topic": "Gradient of Potential & Field",
                "difficulty": "hard",
                "question": "<p>The electric potential in a region of space is given by $V(x, y, z) = 3x^2y - 2yz^2\\text{ V}$. What is the $x$-component of the electric field $E_x$ at $(x, y, z)$?</p>",
                "options": [
                    "$6xy$",
                    "$-6xy$",
                    "$3x^2$",
                    "$-3x^2$",
                    "$6x$"
                ],
                "answer": "B",
                "explanation": "<p>The electric field is the negative gradient of potential: $\\vec{E} = -\\nabla V$. The $x$-component is $E_x = -\\frac{\\partial V}{\\partial x} = -\\frac{\\partial}{\\partial x}(3x^2y - 2yz^2) = -6xy$.</p>"
            },
            {
                "id": "diag_physc_em_q9",
                "topic": "Electrostatic Potential Energy of System",
                "difficulty": "medium",
                "question": "<p>Three identical point charges $+q$ are placed at the vertices of an equilateral triangle of side length $a$. What is the total electrostatic potential energy of this system?</p>",
                "options": [
                    "$\\frac{kq^2}{a}$",
                    "$\\frac{2kq^2}{a}$",
                    "$\\frac{3kq^2}{a}$",
                    "$\\frac{3kq^2}{2a}$",
                    "$\\frac{6kq^2}{a}$"
                ],
                "answer": "C",
                "explanation": "<p>Sum over all pairs: $U = U_{12} + U_{13} + U_{23} = \\frac{kq^2}{a} + \\frac{kq^2}{a} + \\frac{kq^2}{a} = \\frac{3kq^2}{a}$.</p>"
            },
            {
                "id": "diag_physc_em_q10",
                "topic": "Parallel Plate Capacitors with Dielectrics",
                "difficulty": "medium",
                "question": "<p>A parallel plate capacitor with plate area $A$ and separation $d$ is charged to voltage $V$ and then <strong>disconnected from the battery</strong>. A dielectric slab of dielectric constant $\\kappa = 3.0$ is then fully inserted between the plates. How does the stored electric energy change?</p>",
                "options": [
                    "Increases by a factor of $3$",
                    "Increases by a factor of $9$",
                    "Remains constant",
                    "Decreases to $\\frac{1}{3}$ of initial value",
                    "Decreases to $\\frac{1}{9}$ of initial value"
                ],
                "answer": "D",
                "explanation": "<p>Since the capacitor is disconnected, the charge $Q$ is constant. Capacitance increases to $C' = \\kappa C = 3C$. The stored energy is $U = \\frac{Q^2}{2C}$. Therefore, $U' = \\frac{Q^2}{2(3C)} = \\frac{U}{3}$.</p>"
            },
            {
                "id": "diag_physc_em_q11",
                "topic": "Cylindrical Capacitor",
                "difficulty": "hard",
                "question": "<p>A coaxial cable consists of a central conducting wire of radius $a$ and an outer conducting cylinder of radius $b$. What is the capacitance per unit length $C/L$?</p>",
                "options": [
                    "$\\frac{2\\pi\\epsilon_0}{\\ln(b/a)}$",
                    "$\\frac{\\pi\\epsilon_0}{\\ln(b/a)}$",
                    "$\\frac{2\\pi\\epsilon_0}{b - a}$",
                    "$\\frac{4\\pi\\epsilon_0}{\\ln(b/a)}$",
                    "$\\frac{\\epsilon_0 (b-a)}{2\\pi}$"
                ],
                "answer": "A",
                "explanation": "<p>Field between conductors is $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$. Potential difference is $V =$\\int_{a}^{b} E$,dr = \\frac{\\lambda}{2\\pi\\epsilon_0}\\ln(b/a)$. Since $Q = \\lambda L$, capacitance per unit length is $C/L = \\frac{\\lambda}{V} = \\frac{2\\pi\\epsilon_0}{\\ln(b/a)}$.</p>"
            },
            {
                "id": "diag_physc_em_q12",
                "topic": "Energy Density in Electric Fields",
                "difficulty": "medium",
                "question": "<p>What is the electrostatic energy density $u_E$ stored in a vacuum region where the electric field has magnitude $E$?</p>",
                "options": [
                    "$\\epsilon_0 E$",
                    "$\\frac{1}{2}\\epsilon_0 E$",
                    "$\\frac{1}{2}\\epsilon_0 E^2$",
                    "$\\epsilon_0 E^2$",
                    "$\\frac{E^2}{2\\epsilon_0}$"
                ],
                "answer": "C",
                "explanation": "<p>The energy per unit volume in an electric field is $u_E = \\frac{1}{2}\\epsilon_0 E^2$.</p>"
            },
            {
                "id": "diag_physc_em_q13",
                "topic": "Drift Velocity & Current Density",
                "difficulty": "medium",
                "question": "<p>A copper wire of cross-sectional area $A$ carries a steady current $I$. If the free electron density is $n$ and elementary charge is $e$, what is the drift velocity $v_d$ of the electrons?</p>",
                "options": [
                    "$v_d = \\frac{I}{neA}$",
                    "$v_d = \\frac{neA}{I}$",
                    "$v_d = \\frac{I A}{ne}$",
                    "$v_d = \\frac{ne}{I A}$",
                    "$v_d = \\frac{I^2}{neA}$"
                ],
                "answer": "A",
                "explanation": "<p>Current is related to drift speed by $I = n e A v_d \\implies v_d = \\frac{I}{neA}$.</p>"
            },
            {
                "id": "diag_physc_em_q14",
                "topic": "Resistance & Geometry",
                "difficulty": "medium",
                "question": "<p>A cylindrical wire of resistance $R$ is stretched uniformly to twice its original length while keeping its volume constant. What is the new resistance of the wire?</p>",
                "options": [
                    "$\\frac{1}{4}R$",
                    "$\\frac{1}{2}R$",
                    "$2R$",
                    "$4R$",
                    "$8R$"
                ],
                "answer": "D",
                "explanation": "<p>Since volume $V = A L$ is constant, doubling the length ($L' = 2L$) halves the area ($A' = A/2$). Resistance is $R' = \\rho\\frac{L'}{A'} = \\rho\\frac{2L}{A/2} = 4\\left(\\rho\\frac{L}{A}\\right) = 4R$.</p>"
            },
            {
                "id": "diag_physc_em_q15",
                "topic": "Kirchhoff's Rules",
                "difficulty": "medium",
                "question": "<p>In an electrical circuit, Kirchhoff's Junction Rule is a direct consequence of the conservation of which physical quantity?</p>",
                "options": [
                    "Energy",
                    "Electric Charge",
                    "Electric Potential",
                    "Linear Momentum",
                    "Power"
                ],
                "answer": "B",
                "explanation": "<p>Kirchhoff's Junction Rule ($\\Sigma I_{\\text{in}} = \\Sigma I_{\\text{out}}$) states that charge cannot accumulate at a junction, which is a direct consequence of the conservation of electric charge.</p>"
            },
            {
                "id": "diag_physc_em_q16",
                "topic": "RC Circuits - Charging",
                "difficulty": "medium",
                "question": "<p>In a series $RC$ charging circuit connected to battery voltage $\\mathcal{E}$, how long does it take for the capacitor charge to reach $\\approx 63.2\\%$ of its maximum charge $Q_{\\max} = C\\mathcal{E}$?</p>",
                "options": [
                    "$\\frac{1}{2}RC$",
                    "$RC$",
                    "$2RC$",
                    "$RC\\ln 2$",
                    "$5RC$"
                ],
                "answer": "B",
                "explanation": "<p>$q(t) = C\\mathcal{E}(1 - e^{$-t$/RC})$. At $t = RC$, $1 - e^{-1} = 1 - 0.368 = 0.632$ ($63.2\\%$). Thus, the time constant is $\\tau = RC$.</p>"
            },
            {
                "id": "diag_physc_em_q17",
                "topic": "RC Circuits - Current Initial & Steady State",
                "difficulty": "medium",
                "question": "<p>An uncharged capacitor $C$ is connected in series with a resistor $R$ and ideal battery $\\mathcal{E}$ at $t = 0$. What are the initial current $I(0)$ and the long-term current $I(\\infty)$ through the resistor?</p>",
                "options": [
                    "$I(0) = \\frac{\\mathcal{E}}{R}$, $I(\\infty) = 0$",
                    "$I(0) = 0$, $I(\\infty) = \\frac{\\mathcal{E}}{R}$",
                    "$I(0) = \\frac{\\mathcal{E}}{R}$, $I(\\infty) = \\frac{\\mathcal{E}}{R}$",
                    "$I(0) = 0$, $I(\\infty) = 0$",
                    "$I(0) = \\frac{\\mathcal{E}}{2R}$, $I(\\infty) = 0$"
                ],
                "answer": "A",
                "explanation": "<p>At $t = 0^$+, the uncharged capacitor behaves like a short circuit ($V_C = 0$), so $I(0) = \\frac{\\mathcal{E}}{R}$. After a long time ($t \\to \\infty$), the capacitor is fully charged and acts like an open circuit, so $I(\\infty) = 0$.</p>"
            },
            {
                "id": "diag_physc_em_q18",
                "topic": "Magnetic Force on Moving Charges",
                "difficulty": "medium",
                "question": "<p>A proton with velocity $\\vec{v} = (2.0 \\times 10^6\\hat{i})\\text{ m/s}$ enters a region with uniform magnetic field $\\vec{B} = (0.50\\hat{j})\\text{ T}$. Taking $q = 1.6 \\times 10^{-19}\\text{ C}$, what is the magnetic force vector $\\vec{F}_B$ acting on the proton?</p>",
                "options": [
                    "$(1.6 \\times 10^{-13}\\hat{k})\\text{ N}$",
                    "$(-1.6 \\times 10^{-13}\\hat{k})\\text{ N}$",
                    "$(1.6 \\times 10^{-13}\\hat{j})\\text{ N}$",
                    "$(-1.6 \\times 10^{-13}\\hat{i})\\text{ N}$",
                    "$\\vec{0}\\text{ N}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\vec{F}_B = q(\\vec{v}\\times\\vec{B}) = (1.6 \\times 10^{-19})[(2.0 \\times 10^6\\hat{i}) \\times (0.50\\hat{j})] = (1.6 \\times 10^{-19})(1.0 \\times 10^6\\hat{k}) = 1.6 \\times 10^{-13}\\hat{k}\\text{ N}$.</p>"
            },
            {
                "id": "diag_physc_em_q19",
                "topic": "Cyclotron Motion",
                "difficulty": "medium",
                "question": "<p>A particle of charge $q$ and mass $m$ moves in a plane perpendicular to a uniform magnetic field $B$. What is the radius $R$ of its circular trajectory in terms of speed $v$?</p>",
                "options": [
                    "$R = \\frac{qB}{mv}$",
                    "$R = \\frac{mv}{qB}$",
                    "$R = \\frac{mv^2}{qB}$",
                    "$R = \\frac{qBv}{m}$",
                    "$R = \\sqrt{\\frac{mv}{qB}}$"
                ],
                "answer": "B",
                "explanation": "<p>The magnetic force provides centripetal acceleration: $qvB = \\frac{mv^2}{R} \\implies R = \\frac{mv}{qB}$.</p>"
            },
            {
                "id": "diag_physc_em_q20",
                "topic": "Velocity Selector",
                "difficulty": "medium",
                "question": "<p>In a velocity selector, mutually perpendicular uniform electric field $\\vec{E}$ and magnetic field $\\vec{B}$ act on a beam of charged particles. What speed $v$ allows particles to pass undeflected?</p>",
                "options": [
                    "$v = EB$",
                    "$v = \\frac{E}{B}$",
                    "$v = \\frac{B}{E}$",
                    "$v = \\sqrt{\\frac{E}{B}}$",
                    "$v = \\frac{E^2}{B}$"
                ],
                "answer": "B",
                "explanation": "<p>For zero deflection, electric force equals magnetic force: $qE = qvB \\implies v = \\frac{E}{B}$.</p>"
            },
            {
                "id": "diag_physc_em_q21",
                "topic": "Magnetic Force on Current Wires",
                "difficulty": "medium",
                "question": "<p>A straight wire of length $L = 0.50\\text{ m$}$ carries a current of $4.0\\text{ A$}$ along the $+x$-axis in a uniform magnetic field $\\vec{B} = (0.30\\hat{j})\\text{ T}$. What is the magnetic force on the wire?</p>",
                "options": [
                    "$0.60\\hat{k}\\text{ N}$",
                    "$-0.60\\hat{k}\\text{ N}$",
                    "$0.60\\hat{j}\\text{ N}$",
                    "$1.20\\hat{k}\\text{ N}$",
                    "$0\\text{ N}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\vec{F} = I(\\vec{L}\\times\\vec{B}) = 4.0(0.50\\hat{i} \\times 0.30\\hat{j}) = 0.60\\hat{k}\\text{ N}$.</p>"
            },
            {
                "id": "diag_physc_em_q22",
                "topic": "Biot-Savart Law - Circular Loop",
                "difficulty": "medium",
                "question": "<p>What is the magnetic field magnitude at the center of a circular wire loop of radius $R$ carrying a steady current $I$?</p>",
                "options": [
                    "$\\frac{\\mu_0 I}{2\\pi R}$",
                    "$\\frac{\\mu_0 I}{2R}$",
                    "$\\frac{\\mu_0 I}{4\\pi R}$",
                    "$\\frac{\\mu_0 I}{R}$",
                    "$\\frac{\\mu_0 I}{4R}$"
                ],
                "answer": "B",
                "explanation": "<p>By the Biot-Savart Law: $B = \\int \\frac{\\mu_0 I\\,d\\ell}{4\\pi R^2} = \\frac{\\mu_0 I (2\\pi R)}{4\\pi R^2} = \\frac{\\mu_0 I}{2R}$.</p>"
            },
            {
                "id": "diag_physc_em_q23",
                "topic": "Ampère's Law - Long Wire",
                "difficulty": "medium",
                "question": "<p>Using Ampère's Law $\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}}$, what is the magnetic field magnitude at distance $r$ outside a long straight wire carrying current $I$?</p>",
                "options": [
                    "$\\frac{\\mu_0 I}{2\\pi r}$",
                    "$\\frac{\\mu_0 I}{2r}$",
                    "$\\frac{\\mu_0 I}{4\\pi r^2}$",
                    "$\\frac{\\mu_0 I}{\\pi r}$",
                    "$\\frac{\\mu_0 I r}{2\\pi}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\oint \\vec{B}\\cdot d\\vec{\\ell} = B(2\\pi r) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r}$.</p>"
            },
            {
                "id": "diag_physc_em_q24",
                "topic": "Magnetic Field of a Solenoid",
                "difficulty": "medium",
                "question": "<p>What is the magnetic field inside an ideal long solenoid with $n$ turns per unit length carrying current $I$?</p>",
                "options": [
                    "$B = \\mu_0 n I$",
                    "$B = \\frac{\\mu_0 n I}{2}$",
                    "$B = \\frac{\\mu_0 I}{2\\pi n}$",
                    "$B = \\mu_0 n^2 I$",
                    "$B = 2\\pi \\mu_0 n I$"
                ],
                "answer": "A",
                "explanation": "<p>Applying Ampère's Law to a rectangular loop enclosing $N = n L$ turns gives $B L = \\mu_0 (n L I) \\implies B = \\mu_0 n I$.</p>"
            },
            {
                "id": "diag_physc_em_q25",
                "topic": "Faraday's Law & Induced EMF",
                "difficulty": "medium",
                "question": "<p>A flat single-turn circular loop of area $A = 0.20\\text{ m}^2$ is oriented perpendicular to a magnetic field that changes according to $B(t) = (4.0t^2 + 2.0)\\text{ T}$. What is the magnitude of the induced EMF in the loop at $t = 3.0\\text{ s}$?</p>",
                "options": [
                    "$2.4\\text{ V}$",
                    "$4.8\\text{ V}$",
                    "$7.6\\text{ V}$",
                    "$9.6\\text{ V}$",
                    "$12.0\\text{ V}$"
                ],
                "answer": "B",
                "explanation": "<p>Magnetic flux is $\\Phi_B = B(t)A = (4.0t^2 + 2.0)(0.20) = 0.80t^2 + 0.40\\text{ Wb}$. The induced EMF is $|\\mathcal{E}| = \\frac{d\\Phi_B}{dt} = 1.60t$. At $t = 3.0\\text{ s}$, $|\\mathcal{E}| = 1.60(3.0) = 4.8\\text{ V}$.</p>"
            },
            {
                "id": "diag_physc_em_q26",
                "topic": "Motional EMF",
                "difficulty": "medium",
                "question": "<p>A conducting rod of length $L = 0.40\\text{ m}$ moves at speed $v = 5.0\\text{ m/s}$ perpendicular to a uniform magnetic field $B = 0.60\\text{ T}$ on frictionless conducting rails. What is the induced motional EMF across the rod?</p>",
                "options": [
                    "$0.60\\text{ V}$",
                    "$1.20\\text{ V}$",
                    "$2.00\\text{ V}$",
                    "$2.40\\text{ V}$",
                    "$3.00\\text{ V}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\mathcal{E} = B L v = 0.60 \\times 0.40 \\times 5.0 = 1.20\\text{ V}$.</p>"
            },
            {
                "id": "diag_physc_em_q27",
                "topic": "Rotating Conducting Rod",
                "difficulty": "hard",
                "question": "<p>A conducting rod of length $L$ rotates with constant angular speed $\\omega$ about a pivot at one end in a uniform perpendicular magnetic field $B$. What is the EMF induced between the two ends of the rod?</p>",
                "options": [
                    "$B\\omega L^2$",
                    "$\\frac{1}{2}B\\omega L^2$",
                    "$\\frac{1}{3}B\\omega L^2$",
                    "$2B\\omega L^2$",
                    "$\\frac{1}{4}B\\omega L^2$"
                ],
                "answer": "B",
                "explanation": "<p>$\\mathcal{E} =$\\int_{0}^{L} v B$,dr =$\\int_{0}^{L} ($omega r) B\\,dr = B\\omega$\\int_{0}^{L} r$,dr = \\frac{1}{2}B\\omega L^2$.</p>"
            },
            {
                "id": "diag_physc_em_q28",
                "topic": "Inductors & Magnetic Energy",
                "difficulty": "medium",
                "question": "<p>How much magnetic energy is stored in an inductor of inductance $L = 50\\text{ mH}$ carrying a current of $I = 4.0\\text{ A}$?</p>",
                "options": [
                    "$0.10\\text{ J}$",
                    "$0.20\\text{ J}$",
                    "$0.40\\text{ J}$",
                    "$0.80\\text{ J}$",
                    "$1.60\\text{ J}$"
                ],
                "answer": "C",
                "explanation": "<p>$U_B = \\frac{1}{2}LI^2 = \\frac{1}{2}(50 \\times 10^{-3})(4.0)^2 = 0.025 \\times 16 = 0.40\\text{ J}$.</p>"
            },
            {
                "id": "diag_physc_em_q29",
                "topic": "LR Circuits - Current Growth",
                "difficulty": "medium",
                "question": "<p>An inductor $L$ and resistor $R$ are connected in series with battery $\\mathcal{E}$ at $t = 0$. What is the initial rate of change of current $(di/dt)_{t=0}$?</p>",
                "options": [
                    "$\\frac{\\mathcal{E}}{L}$",
                    "$\\frac{\\mathcal{E}}{R}$",
                    "$0$",
                    "$\\frac{\\mathcal{E} R}{L}$",
                    "$\\frac{\\mathcal{E}}{L R}$"
                ],
                "answer": "A",
                "explanation": "<p>At $t = 0$, $i(0) = 0$, so $iR = 0$. Kirchhoff's loop rule gives $\\mathcal{E} - L\\frac{di}{dt} = 0 \\implies \\left(\\frac{di}{dt}\\right)_{t=0} = \\frac{\\mathcal{E}}{L}$.</p>"
            },
            {
                "id": "diag_physc_em_q30",
                "topic": "LC Oscillations",
                "difficulty": "medium",
                "question": "<p>An $LC$ circuit consists of an inductor $L = 2.0\\text{ mH}$ and capacitor $C = 5.0\\,\\mu\\text{F}$. What is the angular frequency $\\omega$ of electromagnetic oscillations in the circuit?</p>",
                "options": [
                    "$1000\\text{ rad/s}$",
                    "$5000\\text{ rad/s}$",
                    "$10000\\text{ rad/s}$",
                    "$20000\\text{ rad/s}$",
                    "$50000\\text{ rad/s}$"
                ],
                "answer": "C",
                "explanation": "<p>$\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{(2.0 \\times 10^{-3})(5.0 \\times 10^{-6})}} = \\frac{1}{\\sqrt{1.0 \\times 10^{-8}}} = \\frac{1}{10^{-4}} = 10000\\text{ rad/s}$.</p>"
            }
        ]
    }
};
