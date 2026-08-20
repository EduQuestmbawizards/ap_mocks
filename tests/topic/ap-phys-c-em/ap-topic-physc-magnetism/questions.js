// Specific Question Bank for Test: ap-topic-physc-magnetism
const AP_TEST_DATA = {
    "ap-topic-physc-magnetism": {
        "id": "ap-topic-physc-magnetism",
        "title": "AP Physics C: Magnetic Fields, Biot-Savart & Induction",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Magnetism & Induction",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics C: Electricity & Magnetism",
        "topic": "Magnetism & Induction",
        "questions": [
            {
                "id": "ap-topic-physc-magnetism_q1",
                "topic": "Magnetism & Induction",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> A point charge of +1 $\\mu$C moves with velocity $v$ into a uniform magnetic field $B$ directed to the right, as shown above. What is the direction of the magnetic force on the charge?</p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0210-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>to the right and up the page</p>",
                    "<p>directly out of the page</p>",
                    "<p>directly into the page</p>",
                    "<p>to the right and into the page</p>",
                    "<p>to the right and out of the page</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>1.</strong> <strong>C</strong>—Use the right-hand rule for the force on charged particles. You point in the direction of the velocity, and curl your fingers in the direction of the magnetic field. This should get your thumb pointing into the page. Because this is a positive charge, no need to switch the direction of the force.</p>"
            },
            {
                "id": "ap-topic-physc-magnetism_q2",
                "topic": "Magnetism & Induction",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> A uniform magnetic field $B$ points up the page, as shown above. A loop of wire carrying a clockwise current is placed at rest in this field as shown above, and then let go. Which of the following describes the motion of the wire immediately after it is let go?</p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0210-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>The wire will expand slightly in all directions.</p>",
                    "<p>The wire will contract slightly in all directions.</p>",
                    "<p>The wire will rotate, with the top part coming out of the page.</p>",
                    "<p>The wire will rotate, with the left part coming out of the page.</p>",
                    "<p>The wire will rotate clockwise, remaining in the plane of the page.</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>C</strong>—Use the right-hand rule for the force on a wire. Look at each part of this wire. At the leftmost and rightmost points, the current is along the magnetic field lines. Thus, these parts of the wire experience no force. The topmost part of the wire experiences a force out of the page (point to the right, fingers curl up the page, the thumb points out of the page). The bottommost part of the wire experiences a force <em>into</em> the page. So, the wire will rotate.</p>"
            },
            {
                "id": "ap-topic-physc-magnetism_q3",
                "topic": "Magnetism & Induction",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> An electron moves to the right in a uniform magnetic field that points into the page. What is the direction of the electric field that could be used to cause the electron to travel in a straight line?</p><h4 class=\"h4\">Free Response:</h4><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0210-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>down toward the bottom of the page</p>",
                    "<p>up toward the top of the page</p>",
                    "<p>into the page</p>",
                    "<p>out of the page</p>",
                    "<p>to the left</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>A</strong>—Use the right-hand rule for the force on a charge. Point in the direction of velocity, curl the fingers into the page, the thumb points up the page . . . but this is a <em>negative</em> charge, so the force on the charge is down the page. Now, the electric force must cancel the magnetic force for the charge to move in a straight line, so the electric force should be up the page. (E and B <em>fields</em> cannot cancel, but forces sure can.) The direction of an <em>electric</em> force on a negative charge is opposite the field; so the field should point down, toward the bottom of the page.</p>"
            },
            {
                "id": "ap-topic-physc-magnetism_q4",
                "topic": "Magnetism & Induction",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> A circular loop of wire of negligible resistance and radius $R$ = 20 cm is attached to the circuit shown above. Each resistor has resistance 10 Ω. The magnetic field of the Earth points up along the plane of the page in the direction shown, and has magnitude $B$ = 5.0 × 10<sup>-5</sup> T.</p><p class=\"quesi\">The wire loop rotates about a horizontal diameter, such that after a quarter rotation the loop is no longer in the page, but perpendicular to it. The loop makes 500 revolutions per second, and remains connected to the circuit the entire time.</p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0211-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>Determine the magnetic flux through the loop when the loop is in the orientation shown.</p>",
                    "<p>Determine the maximum magnetic flux through the loop.</p>",
                    "<p>Estimate the average value of the induced EMF in the loop.</p>",
                    "<p>Estimate the average current through resistor <em>C.</em></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"quesal\"><strong>4.</strong> (a) Flux equals zero because the field points along the loop, not ever going straight through the loop.</p><p class=\"alphabr1\">(b) Flux is maximum when the field <em>is</em> pointing straight through the loop; that is, when the loop is perpendicular to the page. Then flux will be just <em>BA</em> = 5.0 × 10<sup>-5</sup> T·$\\pi$(0.20 m)<sup>2</sup> = 6.3 × 10<sup>-6</sup> T·$m^{2}$. (Be sure your units are right!)</p><p class=\"alphabr1\">(c) Induced EMF for this one loop is change in flux over time interval. It takes 1/500 of a second for the loop to make one complete rotation; so it takes ¼ of that, or 1/2000 of a second, for the loop to go from zero to maximum flux. Divide this change in flux by 1/2000 of a second . . . this is 6.3 × 10<sup>-6</sup> T·$m^{2}$/0.0005 s = 0.013 V. (That’s 13 mV.)</p><p class=\"alphabr1\">(d) Now we can treat the circuit as if it were attached to a battery of voltage 13 mV. The equivalent resistance of the parallel combination of resistors $B$ and $C$ is 5 Ω; the total resistance of the circuit is 15 Ω. So the current in the whole circuit is 0.013 V/15 W = 8.4 × 10<sup>–4</sup> A. (This can also be stated as 840 $\\mu$A.) The current splits evenly between resistors $B$ and $C$ since they’re equal resistances, so we get 420 $\\mu$A for resistor $C$.</p>"
            },
            {
                "id": "ap-topic-physc-magnetism_frq5",
                "topic": "Magnetism & Induction",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> A loop of wire is located inside a uniform magnetic field, as shown above. Name at least four things you could do to induce a current in the loop.</p>",
                "isFRQ": true,
                "rubric": "<p class=\"ques\"><strong>5.</strong> The question might as well be restated, “Name four things you could do to change the flux through the loop,” because only a changing magnetic flux induces an EMF.</p><p class=\"alphabrt\">(a) Rotate the wire about an axis in the plane of the page. This will change the <em>θ</em> term in the expression for magnetic flux, <em>BA</em> cos <em>θ</em>.</p><p class=\"alphabr\">(b) Pull the wire out of the field. This will change the area term, because the magnetic field lines will intersect a smaller area of the loop.</p><p class=\"alphabr\">(c) Shrink or expand the loop. This also changes the area term in the equation for magnetic flux.</p><p class=\"alphabr\">(d) Increase or decrease the strength of the magnetic field. This changes the <em>B</em> term in the flux equation.</p>",
                "options": [
                    "Submit step-by-step mathematical derivation in the workspace below."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<p class=\"ques\"><strong>5.</strong> The question might as well be restated, “Name four things you could do to change the flux through the loop,” because only a changing magnetic flux induces an EMF.</p><p class=\"alphabrt\">(a) Rotate the wire about an axis in the plane of the page. This will change the $\\theta$ term in the expression for magnetic flux, <em>BA</em> cos $\\theta$.</p><p class=\"alphabr\">(b) Pull the wire out of the field. This will change the area term, because the magnetic field lines will intersect a smaller area of the loop.</p><p class=\"alphabr\">(c) Shrink or expand the loop. This also changes the area term in the equation for magnetic flux.</p><p class=\"alphabr\">(d) Increase or decrease the strength of the magnetic field. This changes the $B$ term in the flux equation.</p>"
            },
            {
                "id": "physc_mag_q6",
                "topic": "Force Between Parallel Wires",
                "difficulty": "medium",
                "question": "<p>Two long parallel wires separated by distance $d = 0.10\\text{ m}$ carry currents $I_1 = 5.0\\text{ A}$ and $I_2 = 10.0\\text{ A}$ in the <strong>same direction</strong>. What is the magnetic force per unit length between them?</p>",
                "options": [
                    "$1.0 \\times 10^{-4}\\text{ N/m}$, attractive",
                    "$1.0 \\times 10^{-4}\\text{ N/m}$, repulsive",
                    "$5.0 \\times 10^{-5}\\text{ N/m}$, attractive",
                    "$5.0 \\times 10^{-5}\\text{ N/m}$, repulsive",
                    "$0\\text{ N/m}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{(4\\pi \\times 10^{-7})(5)(10)}{2\\pi(0.10)} = 1.0 \\times 10^{-4}\\text{ N/m}$. Currents in the same direction attract.</p>"
            },
            {
                "id": "physc_mag_q7",
                "topic": "Toroid Magnetic Field",
                "difficulty": "hard",
                "question": "<p>A toroid with $N$ turns carrying current $I$ has mean radius $r$. Using Ampère's Law, what is the magnetic field magnitude inside the toroid core?</p>",
                "options": [
                    "$\\frac{\\mu_0 N I}{2\\pi r}$",
                    "$\\frac{\\mu_0 N I}{r}$",
                    "$\\mu_0 N I$",
                    "$\\frac{\\mu_0 I}{2\\pi r}$",
                    "$0$"
                ],
                "answer": "A",
                "explanation": "<p>$\\oint \\vec{B}\\cdot d\\vec{\\ell} = B(2\\pi r) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi r}$.</p>"
            },
            {
                "id": "physc_mag_q8",
                "topic": "Lenz's Law Application",
                "difficulty": "medium",
                "question": "<p>A bar magnet is dropped north-pole-first through a stationary horizontal copper ring. Viewed from above, as the north pole enters the top of the ring, what is the direction of the induced current?</p>",
                "options": [
                    "Clockwise",
                    "Counterclockwise",
                    "No current is induced",
                    "Current alternates continuously",
                    "Current flows radially outward"
                ],
                "answer": "B",
                "explanation": "<p>Downward magnetic flux is increasing. By Lenz's Law, the induced current creates an upward opposing field, which corresponds to a counterclockwise current when viewed from above.</p>"
            },
            {
                "id": "physc_mag_q9",
                "topic": "Eddy Currents & Magnetic Braking",
                "difficulty": "easy",
                "question": "<p>When a solid copper plate swings like a pendulum between the poles of a strong magnet, it rapidly decelerates and stops because of:</p>",
                "options": [
                    "Air resistance",
                    "Gravitational shielding",
                    "Induced eddy currents generating opposing Lorentz forces",
                    "Electrostatic charge accumulation",
                    "Copper becoming permanently magnetized"
                ],
                "answer": "C",
                "explanation": "<p>Motional EMF creates swirling eddy currents whose induced magnetic forces oppose the motion by Lenz's Law (magnetic braking).</p>"
            },
            {
                "id": "physc_mag_q10",
                "topic": "Inductance of a Coil",
                "difficulty": "medium",
                "question": "<p>If the number of turns $N$ on a solenoid of fixed length and cross-sectional area is doubled, by what factor does its self-inductance $L$ increase?</p>",
                "options": [
                    "$\\sqrt{2}$",
                    "$2$",
                    "$4$",
                    "$8$",
                    "$16$"
                ],
                "answer": "C",
                "explanation": "<p>$L = \\frac{\\mu_0 N^2 A}{\\ell} \\propto N^2$. Doubling turns ($N \\to 2N$) quadruples inductance ($2^2 = 4$).</p>"
            },
            {
                "id": "physc_mag_q11",
                "topic": "LR Circuit Steady State Current",
                "difficulty": "medium",
                "question": "<p>An $LR$ series circuit with $L = 50\\text{ mH}$, $R = 10\\,\\Omega$, and battery $\\mathcal{E} = 20\\text{ V}$ has been connected for a very long time ($t \\gg L/R$). What is the steady-state current?</p>",
                "options": [
                    "$0\\text{ A}$",
                    "$1.0\\text{ A}$",
                    "$2.0\\text{ A}$",
                    "$4.0\\text{ A}$",
                    "$10.0\\text{ A}$"
                ],
                "answer": "C",
                "explanation": "<p>In steady state, $\\frac{di}{dt} = 0$, so the inductor acts as a short circuit ($V_L = 0$). Current $I = \\frac{\\mathcal{E}}{R} = \\frac{20}{10} = 2.0\\text{ A}$.</p>"
            },
            {
                "id": "physc_mag_q12",
                "topic": "LR Circuit Time Constant",
                "difficulty": "easy",
                "question": "<p>What is the inductive time constant $\\tau_L$ of a series $LR$ circuit?</p>",
                "options": [
                    "$\\tau = L R$",
                    "$\\tau = \\frac{L}{R}$",
                    "$\\tau = \\frac{R}{L}$",
                    "$\\tau = \\sqrt{L R}$",
                    "$\\tau = \\frac{1}{L R}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\tau_L = \\frac{L}{R}$.</p>"
            },
            {
                "id": "physc_mag_q13",
                "topic": "Magnetic Energy Density",
                "difficulty": "medium",
                "question": "<p>What is the energy density $u_B$ stored in a vacuum region with magnetic field $B$?</p>",
                "options": [
                    "$\\frac{1}{2}\\mu_0 B^2$",
                    "$\\frac{B^2}{2\\mu_0}$",
                    "$\\mu_0 B^2$",
                    "$\\frac{B}{2\\mu_0}$",
                    "$\\frac{B^2}{\\mu_0}$"
                ],
                "answer": "B",
                "explanation": "<p>$u_B = \\frac{B^2}{2\\mu_0}$.</p>"
            },
            {
                "id": "physc_mag_q14",
                "topic": "Magnetic Dipole Moment",
                "difficulty": "medium",
                "question": "<p>A flat coil of $N = 100$ turns carrying current $I = 2.0\\text{ A}$ has cross-sectional area $A = 0.05\\text{ m}^2$. What is its magnetic dipole moment magnitude $\\mu$?</p>",
                "options": [
                    "$5.0\\text{ A}\\cdot\\text{m}^2$",
                    "$10.0\\text{ A}\\cdot\\text{m}^2$",
                    "$20.0\\text{ A}\\cdot\\text{m}^2$",
                    "$50.0\\text{ A}\\cdot\\text{m}^2$",
                    "$100.0\\text{ A}\\cdot\\text{m}^2$"
                ],
                "answer": "B",
                "explanation": "<p>$\\mu = N I A = 100 \\times 2.0 \\times 0.05 = 10.0\\text{ A}\\cdot\\text{m}^2$.</p>"
            },
            {
                "id": "physc_mag_q15",
                "topic": "Displacement Current",
                "difficulty": "hard",
                "question": "<p>In Maxwell's Ampère-Maxwell law $\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0(I + I_d)$, what is the definition of Maxwell's displacement current $I_d$?</p>",
                "options": [
                    "$I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$",
                    "$I_d = \\frac{1}{\\mu_0}\\frac{d\\Phi_B}{dt}$",
                    "$I_d = \\epsilon_0 \\frac{dE}{dt}$",
                    "$I_d = \\mu_0\\epsilon_0 \\frac{d\\Phi_E}{dt}$",
                    "$I_d = \\frac{d q}{dt}$"
                ],
                "answer": "A",
                "explanation": "<p>Maxwell's displacement current is $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$, which accounts for changing electric flux between capacitor plates.</p>"
            }
        ]
    }
};
