// Specific Question Bank for Test: ap-mock-physc-em-2
const AP_TEST_DATA = {
    "ap-mock-physc-em-2": {
        "title": "AP Physics C: Electricity & Magnetism Practice Exam 2",
        "testType": "Practice Exam",
        "subject": "ap-phys-c-em",
        "topic": "E&M Full Practice",
        "timeLimitMinutes": 45,
        "totalQuestions": 31,
        "questions": [
            {
                "id": "pt2-em-q1",
                "global_num": 380,
                "section": "Practice Test 2 – E&M",
                "question": "In an RC discharging circuit, a capacitor C with initial voltage V0 discharges through a resistor R when a switch is closed at t = 0. Which of the following functions represents the voltage V(t) across the capacitor as a function of time?",
                "options": [
                    "V(t) = V0 (1 - e^{-t / (RC)})",
                    "V(t) = V0 t / (RC)",
                    "V(t) = V0 (1 - t / (RC))",
                    "V(t) = V0 e^{-t / (RC)}",
                    "V(t) = V0 e^{-t / (2RC)}"
                ],
                "answer": "D",
                "explanation": "During capacitor discharge through resistance R, Kirchhoff's loop rule gives -R (dq/dt) - q/C = 0 ==> dq/dt = -q / (RC). The solution is q(t) = Q0 e^{-t / (RC)}. Dividing by capacitance C yields the capacitor voltage V(t) = q(t)/C = V0 e^{-t / (RC)}, which decays exponentially to zero.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q2",
                "global_num": 381,
                "section": "Practice Test 2 – E&M",
                "question": "A loop of wire of radius r and resistance R is exposed to a magnetic field pointing into the page that steadily increases from zero to magnitude B in time t, as shown. Describe the induced current.",
                "options": [
                    "\\pirB/t, clockwise",
                    "\\pirB/t, counterclockwise",
                    "\\pir2B/Rt, clockwise",
                    "\\pir2B/Rt, counterclockwise",
                    "\\pir2B/t, counterclockwise"
                ],
                "answer": "D",
                "explanation": "(D) First, to oppose the increase in inward flux, the induced current must flow counterclockwise, producing an outward flux. What is the magnitude of the current? The induced EMF is Because the magnetic field increases linearly, its slope dB/dt is simply The resistance is R, so according to Ohm’s law the current is I = V/R = AB/Rt. Finally, to express the result in terms of the variables in the problem, A = \\pir2, so I = \\pir2 B/Rt.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q3",
                "global_num": 382,
                "section": "Practice Test 2 – E&M",
                "question": "The potential in a region of space is given by the formula V = ar, where r is a radial coordinate and a is a positive constant. Which of the following statements is true of this region?",
                "options": [
                    "The electric field has magnitude a and points away from the origin of the coordinates .",
                    "The electric field has a magnitude a and points toward the origin .",
                    "The electric field has a magnitude r2/2a and points away from the origin .",
                    "The electric field has a magnitude r2/2a and points toward the origin .",
                    "The electric force is nonconservative."
                ],
                "answer": "B",
                "explanation": "(B) The electric field equals the negative derivative of the potential along any line, and this holds for a line passing through the radius. Mathematically, Er = −dV/dr = −a. Even without recalling this equation in its entirety, one could arrive at the correct answer by combining the information that (1) the magnitude of the electric field is related to the derivative of the potential, and (2) the electric field always points in the direction of decreasing potential. Choice (E) is false. Any field that has an associated potential function is conservative. (That is, any field for which a potential energy function can be defined is a conservative field.)",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q4",
                "global_num": 383,
                "section": "Practice Test 2 – E&M",
                "question": "A capacitor of capacitance 25 \\muF is charged to 300 V and then connected in series with an inductor of inductance 10 mH. The maximum current flowing through the circuit will be",
                "options": [
                    "7,500 A",
                    "500 A",
                    "300 A",
                    "15 A",
                    "2.5 A"
                ],
                "answer": "D",
                "explanation": "(D) The loop rule for an LC circuit is . This looks just like a harmonic oscillator with . The current is given by and the maximum current obeys Imax = \\omegaQmax. The maximum charge is the initial charge of the capacitor, .",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q5",
                "global_num": 384,
                "section": "Practice Test 2 – E&M",
                "question": "If it requires an input of E joules to move a charge Q from point A to point B at constant velocity, which of the following is true?",
                "options": [
                    "VB − VA = E/Q",
                    "VB − VA = −E/Q",
                    "VB − VA = QE",
                    "VB − VA = −QE",
                    "VB − VA = Q/E"
                ],
                "answer": "A",
                "explanation": "(A) Potential is equal to the potential energy per unit charge, so only choices (A) and (B) have the correct units. To figure out the signs, consider the case where Q and E are positive. If positive energy is required to move the charge from point A to point B, point B must be at higher potential energy (uphill), so Q(VB − VA) must be positive. Because E is positive, only the equation VB − VA = E/Q has signs that are consistent with this situation.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q6",
                "global_num": 385,
                "section": "Practice Test 2 – E&M",
                "question": "A parallel-plate vacuum capacitor with capacitance C0 is connected to a battery of voltage V. While still connected to the battery, a dielectric slab with dielectric constant kappa = 3 is inserted to fill the space between the plates. What is the ratio of the new stored energy to the initial stored energy (U_new / U_initial)?",
                "options": [
                    "1/9",
                    "1/3",
                    "1",
                    "3",
                    "9"
                ],
                "answer": "D",
                "explanation": "Because the capacitor remains connected to the battery, the voltage V across the plates stays constant. The capacitance increases to C_new = kappa C0 = 3 C0. The energy stored in a capacitor at fixed voltage is U = 1/2 C V^2. Therefore, U_new / U_initial = (1/2 (3 C0) V^2) / (1/2 C0 V^2) = 3.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q7",
                "global_num": 386,
                "section": "Practice Test 2 – E&M",
                "question": "A battery with EMF of V and an internal resistance of rint is connected to a heating loop with resistance R. What is the correct expression for the rate at which energy is converted to heat by the heating loop?",
                "options": [
                    "V2/R",
                    "V2rint/(rint + R)2",
                    "V/(rint + R)",
                    "V2R2/(rint + R)2",
                    "none of the above"
                ],
                "answer": "E",
                "explanation": "(E) The current through the circuit is The power dissipated through the heating element is then Because this is not equivalent to any of the given choices, the answer is choice (E).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q8",
                "global_num": 387,
                "section": "Practice Test 2 – E&M",
                "question": "A parallel plate capacitor connected to a battery contains a plastic dielectric material between the plates of the capacitor. Removing the dielectric has what effect on the electric field between the plates and the charge on the plates?",
                "options": [
                    "Electric field and charge both decrease.",
                    "Electric field and charge both increase.",
                    "Electric field increases and the charge remains the same.",
                    "Electric field remains the same and the charge decreases.",
                    "none of the above"
                ],
                "answer": "D",
                "explanation": "(D) The equation always holds, so V = Ed is valid even in the case of a dielectric. Therefore, because the capacitor is always connected to the battery and the plate separation distance is unchanged, V and d are fixed and so E must remain the same. What effect does this have on the plate charge? The key equation here is Q = CV. The capacitance decreases in the absence of the dielectric. The voltage is held fixed (because the capacitor is attached to the battery), so the charge on the plates must decrease. How is it that the electric field can remain constant while the charge on the plates decreases? In the presence of the dielectric, the charge on the plates is partially screened by the induced charge on the surface of the dielectric. Once the dielectric is removed, the charge on the plates no longer needs to cancel this induced charge, so it decreases.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q9",
                "global_num": 388,
                "section": "Practice Test 2 – E&M",
                "question": "An electron (charge -e, mass m) is released from rest at distance r1 from a fixed proton (charge +e). What is the kinetic energy of the electron when it has accelerated to a distance r2 from the proton (where r2 < r1)?",
                "options": [
                    "k e^2 * (1/r1 - 1/r2)",
                    "Zero",
                    "k e^2 / (2 r2)",
                    "k e^2 * (1/r2 - 1/r1)",
                    "1/2 m (k e^2 / r2)^2"
                ],
                "answer": "D",
                "explanation": "Mechanical energy is conserved: K_initial + U_initial = K_final + U_final. The electron starts from rest, so K_initial = 0. The electrostatic potential energy is U(r) = -k e^2 / r. Therefore, 0 - k e^2 / r1 = K_final - k e^2 / r2 ==> K_final = k e^2 (1/r2 - 1/r1). Because r2 < r1, 1/r2 > 1/r1, so the kinetic energy is positive.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q10",
                "global_num": 389,
                "section": "Practice Test 2 – E&M",
                "question": "The magnetic field created by the two wires shown at point A in the figure is B0 (pointing out of the page), and the two wires carry identical currents in the same direction. Which of the following is true?",
                "options": [
                    "Both wires carry a current of 4\\pid/3\\mu0 toward the top of the page.",
                    "Both wires carry a current of 4\\pid/3\\mu0 toward the bottom of the page.",
                    "Both wires carry a current of 4\\pidB0/\\mu0 toward the top of the page.",
                    "Both wires carry a current of 4\\pidB0/\\mu0 toward the bottom of the page.",
                    "It is impossible for the wires to produce a magnetic field pointing perpendicular to the page."
                ],
                "answer": "C",
                "explanation": "(C) A little experimentation with the right-hand rule shows that for points in between two wires carrying current in the same direction, the two wires produce magnetic fields in opposite directions. The wire closer to the point produces a larger magnetic field, so the net magnetic field points in the direction determined by this wire. In this case, because the magnetic field points out of the page, the current through the wire closest to point A (the right wire) must move toward the top of the page. The magnitude of the magnetic field due to a current-carrying wire is B = \\mu0I/2\\pir. Because the two wires produce fields in opposite directions, in this case the net magnetic field has magnitude Solving this equation for the current yields I = 4\\pidB0/\\mu0, so the correct answer is choice (C).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q11",
                "global_num": 390,
                "section": "Practice Test 2 – E&M",
                "question": "Two insulating spheres of equal radii are oppositely charged with uniform charge densities of equal magnitude, as shown in the top half of the figure. The spheres are placed far apart from each other and can be considered completely isolated from each other. What is the effect of exchanging the top halves of these distributions with one another, as shown in the bottom half of the figure?",
                "options": [
                    "The potential increases at point A and decreases at point B.",
                    "The electric field magnitude increases at point A and decreases at point B.",
                    "The potential increases at both points A and B.",
                    "The electric field magnitude increases at both points A and B.",
                    "After the exchange, positive work is required to move a positive charge from point A to point B."
                ],
                "answer": "D",
                "explanation": "(D) Recall that potential is given by the integral . Therefore, moving negative charge closer to point A and positive charge farther away from point A decreases the potential at point A. The opposite occurs at point B, causing the potential to increase at point B. Therefore, choices (A) and (C) are false. Because of symmetry, a sphere of uniform charge density produces a zero net field at its center. Therefore, the electric field at points A and B is initially zero. Exchanging the tops of the spheres leads to nonzero electric fields at points A and B (pointing up at point A and down at point B). Therefore, (B) is false, while (D) is true. As a result of the symmetry of the situation, points A and B have the same potential. Therefore, zero work is required to move any charge from point A to point B, making choice (E) false.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q12",
                "global_num": 391,
                "section": "Practice Test 2 – E&M",
                "question": "A loop of wire is pushed with constant velocity through a region of uniform magnetic field as shown. (The field points out of the page.) As the loop enters and exits the magnetic field, only one of the vertical segments of wire is within the magnetic field. What is the direction of the induced current within this vertical segment?",
                "options": [
                    "upward when both entering and exiting the magnetic field",
                    "downward when both entering and exiting the magnetic field",
                    "upward when entering the magnetic field and downward when exiting the magnetic field",
                    "downward when entering the magnetic field and upward when exiting the magnetic field",
                    "zero, because the segment of wire is perpendicular to the magnetic field"
                ],
                "answer": "B",
                "explanation": "(B) While entering the magnetic field, the induced current flows clockwise, moving downward through the right segment of the loop that is exposed to the magnetic field. While leaving the magnetic field, the induced current flows counterclockwise, moving downward through the left segment of the loop that is exposed to the magnetic field.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q13",
                "global_num": 392,
                "section": "Practice Test 2 – E&M",
                "question": "What is the force on a positive charge +Q located on a 10 V equipotential line?",
                "options": [
                    "10 Q in magnitude, pointing parallel to the line",
                    "10 Q in magnitude, pointing perpendicular to the line in the direction of decreasing potential",
                    "10 Q in magnitude, pointing perpendicular to the line in the direction of increasing potential",
                    "of unknown magnitude, pointing perpendicular to the line in the direction of decreasing potential",
                    "of unknown magnitude, pointing perpendicular to the line in the direction of increasing potential"
                ],
                "answer": "D",
                "explanation": "(D) The force on the charge is proportional to the electric field according to the equation F = qE. The electric field is the negative derivative of the potential, but a single value of potential alone does not indicate anything about the electric field or the electric force. However, we can still determine the direction of the force. Electric fields are always perpendicular to equipotential curves, pointing in the direction of decreasing potential. Because the charge is positive, the force is parallel to the electric field.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q14",
                "global_num": 393,
                "section": "Practice Test 2 – E&M",
                "question": "The capacitor shown consists of two concentric metallic cylindrical shells. Assuming that the radius of the inner cylinder, r, is much greater than the plate separation distance, d, what is the approximate capacitance of the capacitor?",
                "options": [
                    "C = \\epsilon0\\pir2/d",
                    "C = \\epsilon0\\pirl/d",
                    "C = \\epsilon0\\pidl/r",
                    "C = 2\\epsilon0\\pirl/d",
                    "C = \\epsilon0d/2\\pirl"
                ],
                "answer": "D",
                "explanation": "(D) Because the plate separation d is very small compared to the radius of the cylinder, it is reasonable to approximate the capacitor as a parallel plate capacitor with plate separation d and plate area 2\\pirl. (This makes sense: Because d << r, the electric field is relatively constant between the plates and is perpendicular to the plates.) Therefore, the approximate capacitance is Even without making this observation, a few choices can be eliminated. Compared to the formula C = \\epsilon0A/d, choice (E) has incorrect units, so it can be eliminated. Choice (A) does not include the length of the capacitor. However, we know from the simpler case of a parallel plate capacitor that the dimension of the plates is relevant to the value of the capacitance, so we can safely eliminate choice (A).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q15",
                "global_num": 394,
                "section": "Practice Test 2 – E&M",
                "question": "A sphere has a uniform charge density distributed throughout its interior. What effect does doubling the radius of the sphere (while maintaining the same charge density) have on the electric field at a point outside the enlarged sphere?",
                "options": [
                    "The field remains the same.",
                    "The field increases by a factor of 2.",
                    "The field increases by a factor of 4.",
                    "The field increases by a factor of 8.",
                    "The field increases by a factor of 16."
                ],
                "answer": "D",
                "explanation": "(D) Imagine a spherical gaussian surface passing through any point outside the enlarged sphere. Doubling the radius of the sphere increases the enclosed charge by a factor of 8 (because the volume of a sphere is proportional to r3 and the charge is proportional to the volume). Thus, by Gauss’s law, the flux through the gaussian surface (whose surface area is fixed) increases by a factor of 8, and thus so does the electric field.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q16",
                "global_num": 395,
                "section": "Practice Test 2 – E&M",
                "question": "A charged particle moves in a planar, circular orbit as a result of the presence of a uniform magnetic field perpendicular to the plane of its motion. Holding all other variables (such as the magnetic field, the particle’s velocity, and the particle’s charge) constant, which graph shows the relationship between the particle’s mass and the radius of its path?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic force provides the centripetal force: mv2/r = qvB. Rearranging this equation to solve for r in terms of m yields r = (v/qB)m. Therefore, the graph is linear, passing through the origin.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q17",
                "global_num": 396,
                "section": "Practice Test 2 – E&M",
                "question": "A thin uniformly charged rod with negative linear charge density -lambda lies along the y-axis from y = -a to y = +a. What is the direction of the electric field produced by the rod at a point P on the positive x-axis at (x, 0)?",
                "options": [
                    "Directly toward the origin (in the -x direction)",
                    "Directly away from the origin (in the +x direction)",
                    "In the +y direction",
                    "In the -y direction",
                    "The electric field is zero"
                ],
                "answer": "A",
                "explanation": "Consider symmetric elements of charge dq = -lambda dy at +y and -y on the rod. Because the charge is negative, the electric field vectors dE point toward the charge elements. By symmetry, their y-components cancel out, while their x-components add constructively pointing along the -x direction (toward the origin). Thus the net electric field points directly toward the origin in the -x direction.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q18",
                "global_num": 397,
                "section": "Practice Test 2 – E&M",
                "question": "Consider a circuit consisting of the following elements in a single loop: a battery, a resistor, a switch, and a fourth unknown element E. A spark is most likely to occur at the switch if",
                "options": [
                    "E is a capacitor and the switch is being closed for the first time.",
                    "E is a capacitor and the switch is being opened after the circuit has reached equilibrium.",
                    "E is an inductor and the switch is being closed for the first time.",
                    "E is an inductor and the switch is being opened after the circuit has reached equilibrium.",
                    "E is a battery arranged in series with the other battery in the circuit."
                ],
                "answer": "D",
                "explanation": "(D) Recall that the current flowing through inductors is generally continuous because a discontinuous current would cause the time derivative of the current to be infinite and thus produce an infinite voltage. How is this theory applicable to the current problem? In choice (D), when the switch is opened, an abrupt change in the current occurs that produces a very large induced EMF, causing a spark to instantaneously connect the recently opened terminals of the switch. [In choice (C), the current is zero before and immediately after closing the switch, so there is no discontinuity and no spark.]",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q19",
                "global_num": 398,
                "section": "Practice Test 2 – E&M",
                "question": "The two charge distributions shown each contain a net charge +Q uniformly distributed along an arc of a circle with radius r. In distribution A this charge is spread along an arc twice the length of the arc in distribution B. Which of the following comparisons of the potential V and the magnitude E of the electric field at point A and point B are true?",
                "options": [
                    "VA > VB and EA > EB",
                    "VA > VB and EA < EB",
                    "VA = VB and EA > EB",
                    "VA = VB and EA < EB",
                    "VA < VB and EA > EB"
                ],
                "answer": "D",
                "explanation": "(D) All the charge in both distributions is at a fixed distance r from the points of interest. Therefore, the potential at both point A and point B is V = Q/4\\pi\\epsilon0r and these potientials are equal. The electric field sums as vectors rather than scalars, so it is more complicated. In both cases, the net electric field points in the +x- direction because of symmetry about the x-axis. However, in distribution B, because the charge is concentrated closer to the horizontal axis, there is less cancellation of the differential electric field vectors compared to case A. (For further explanation, see Chapter 10.)",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q20",
                "global_num": 399,
                "section": "Practice Test 2 – E&M",
                "question": "Two cylindrical resistors are arranged in series and connected to a complicated circuit, as shown. Both resistors have the same resistivity, and the second resistor has twice the radius and twice the length of the first resistor. Which of the following statements is correct?",
                "options": [
                    "The resistors have the same resistance.",
                    "The resistors experience the same potential drop.",
                    "The resistors dissipate the same amount of power.",
                    "The resistors have the same current.",
                    "The equivalent resistance of the two resistors is equal to 1.5R2."
                ],
                "answer": "D",
                "explanation": "(D) Recalling that the same current flows through elements in series, you could recognize that choice (D) is correct without paying attention to the details of the problem. The other choices are incorrect for the following reasons. The resistance of a cylindrical resistor is given by the equation R = \\rhol/A. Because the second resistor has twice the length and four times the area compared to the first resistor, it has half the resistance of the first resistor, eliminating choice (A). The voltage across the resistors, given by V = IR, is different because the two resistors share the same current but have different resistances, eliminating choice (B). Similarly, power can be expressed as P = I2R, and because the resistors have the same current and different resistances, they dissipate different amounts of power, eliminating choice (D). Finally, R2 is half of R1 (as discussed above), and because resistors in series add, the equivalent resistance is equal to Req = 1.5R1 = 3R2, so choice (E) is incorrect.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q21",
                "global_num": 400,
                "section": "Practice Test 2 – E&M",
                "question": "In a Wheatstone bridge circuit with four resistors R1, R2, R3, and R4 arranged in two parallel branches (branch 1 has R1 and R2 in series; branch 2 has R3 and R4 in series), the potential at the junction between R1 and R2 equals the potential at the junction between R3 and R4. Which condition must be satisfied?",
                "options": [
                    "R1 / R2 = R3 / R4",
                    "R1 R2 = R3 R4",
                    "R1 + R2 = R3 + R4",
                    "R1 - R2 = R3 - R4",
                    "R1 / R4 = R2 / R3"
                ],
                "answer": "A",
                "explanation": "For the bridge to be balanced (equal potentials at the two internal nodes), the voltage drop across R1 must equal the voltage drop across R3: I1 R1 = I2 R3, and the voltage drop across R2 must equal that across R4: I1 R2 = I2 R4. Dividing the two equations yields R1 / R2 = R3 / R4 (the classic Wheatstone bridge balance condition).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q22",
                "global_num": 401,
                "section": "Practice Test 2 – E&M",
                "question": "If each of the capacitors in the network shown has a capacitance of C, what is the equivalent capacitance of the network?",
                "options": [
                    "C/9",
                    "C/3",
                    "C",
                    "3C",
                    "9C"
                ],
                "answer": "C",
                "explanation": "(C) Each set of three capacitors in series has an equivalent capacitance of C/3. Because capacitors in parallel add, the combination of these three equivalent capacitors (each with a capacitance of C/3) in parallel produces a network with an equivalent capacitance of C.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q23",
                "global_num": 402,
                "section": "Practice Test 2 – E&M",
                "question": "What voltage would have to be imposed across the entire network shown in question 26 for the voltage across any of the capacitors to be V?",
                "options": [
                    "V/9",
                    "V/3",
                    "V",
                    "3V",
                    "9V"
                ],
                "answer": "D",
                "explanation": "(D) Imagine charging the capacitor network. Equal amounts of charge would flow through the three branches of the network, causing equal amounts of charge to build up on every one of the nine capacitors. Therefore, for the voltage of one capacitor to be V, the voltage of every capacitor in the network must be V. When the voltage across each capacitor is V, what is the voltage across the entire network? To calculate the voltage across the network, we can imagine traversing one branch and summing the voltage jumps, as in a Kirchhoff’s loop equation. Because the capacitors have the same polarity, their voltages sum, causing the voltage across the branch (and thus the network) to be 3V.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q24",
                "global_num": 403,
                "section": "Practice Test 2 – E&M",
                "question": "The gaussian “unit cube” shown lies in a region where the electric field is constant and parallel to the z-axis: . Which of the following choices lists the outward flux through sides 1 through 6, respectively?",
                "options": [
                    "0, 0, −E, 0, +E, 0",
                    "0, 0, +E, 0, −E, 0",
                    "0, 0, +E, 0, +E, 0",
                    "0, 0, −E, 0, −E, 0",
                    "none of the above"
                ],
                "answer": "B",
                "explanation": "(B) Sides 1, 2, 4, and 6 are parallel to the electric field, so the electric flux through them is zero. Sides 3 and 5 are perpendicular to the field, so the magnitude of the flux passing through each of these faces is equal to the area (which is 1) multiplied by the field, E. Because the field points in the positive z-direction, it enters the cube at side 5 (yielding negative outward flux) and leaves the cube at side 3 (yielding positive outward flux).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q25",
                "global_num": 404,
                "section": "Practice Test 2 – E&M",
                "question": "You have three identical capacitors you are using to design an equivalent capacitor that will be used to store energy for a camera flash, as shown. Charging time is defined as the amount of time required to reach 90% of the maximum energy. Rank the networks in order from least to greatest charging time.",
                "options": [
                    "I, II, III, IV",
                    "IV, III, II, I",
                    "I, III, II, IV",
                    "IV, II, III, I",
                    "I, (II = III), IV I) II) III) IV)"
                ],
                "answer": "C",
                "explanation": "(C) The energy stored in a capacitor can be expressed in the form U = Q2/2C. Therefore, the amount of time required for a capacitor to reach 90% of its maximum energy is equal to the amount of time required to reach 90% of its maximum Q2 value (because C is fixed for any given capacitor). The circuit with the smaller time constant (smaller \\tau = RC), and thus the smaller equivalent capacitance, reaches the 90% value more quickly. Therefore, ordering the networks from least to greatest charging time is simply a matter of ordering them from least to greatest equivalence capacitance. The equivalent capacitances of networks I through IV are and 3C, respectively.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q26",
                "global_num": 405,
                "section": "Practice Test 2 – E&M",
                "question": "Considering the situation introduced in the last problem, rank order the capacitor networks in terms of the energy stored when fully charged. (Assume that the capacitor networks are connected to the same circuit, with a fixed voltage.)",
                "options": [
                    "I, II, III, IV",
                    "IV, III, II, I",
                    "I, III, II, IV",
                    "IV, II, III, I",
                    "I, (II = III), IV"
                ],
                "answer": "C",
                "explanation": "(C) From the equation , networks with higher equivalent capacitance store more energy when connected to the same voltage. Therefore, ordering the capacitors from least to greatest energy is equivalent to ordering them from least to greatest capacitance. This ordering is the same as in question 29, choice (C).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q27",
                "global_num": 406,
                "section": "Practice Test 2 – E&M",
                "question": "What is the rate at which thermal energy is produced in the resistors shown?",
                "options": [
                    "(B) IV",
                    "Directly downward toward the bottom of the page",
                    "2IV",
                    "4IV",
                    "none of the above"
                ],
                "answer": "E",
                "explanation": "(E) What is the current through the circuit? A Kirchhoff’s loop equation for the circuit (moving in the clockwise direction and choosing positive current clockwise) is V − IR − V − IR = 0, which simplifies to 2IR = 0. Therefore, the current around the circuit is zero, which is not surprising because the two identical batteries are connected so as to oppose each other. Thus, the power dissipated in each of the resistors is zero, and absolutely no thermal energy is produced in the circuit.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q28",
                "global_num": 407,
                "section": "Practice Test 2 – E&M",
                "question": "In the circuit shown, there is initially no current flowing through the inductor. The instant after the switch is closed, what is the current through the battery?",
                "options": [
                    "V/R1",
                    "V/(R1 + R2)",
                    "V/(R1 + R3)",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "B",
                "explanation": "(B) The instant after the switch is closed in an RL circuit, the inductor acts like an open circuit (because the current through the inductor must be continuous and thus initially zero). Therefore, the equivalent resistance is R1 + R2, and the current is calculated using Ohm’s law with the result given by choice (B). Elimination approach: Even if you have forgotten about RL circuits, you could eliminate enough choices to make a good guess. First, because no circuit elements block the flow of current through resistors R1 and R2, these resistors determine the current and are expected to show up in the final answer, eliminating choices (A) and (C). The denominator of choice (E) has mixed units (Ω + Ω−1), so it must be incorrect. This leaves us to guess between choices (B) and (D).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q29",
                "global_num": 408,
                "section": "Practice Test 2 – E&M",
                "question": "Referring to the circuit shown in question 32, after the circuit has reached equilibrium, what is the current through the battery?",
                "options": [
                    "V/R1",
                    "V/(R1 + R2)",
                    "V/(R1 + R3)",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "D",
                "explanation": "(D) At equilibrium the inductor acts like a short circuit, so to calculate the current we simply ignore the inductor, calculate the equivalent resistance, and apply Ohm’s law. To calculate the equivalent resistance, note that R2 and R3 are in parallel with each other, so their equivalent resistance together is Because these resistors are in series with R1, the equivalent resistance of the entire circuit is Applying Ohm’s law yields the current given in choice (D).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q30",
                "global_num": 409,
                "section": "Practice Test 2 – E&M",
                "question": "A solid conducting sphere of radius R carries a net positive charge +Q in electrostatic equilibrium. Taking electric potential to be zero at infinity (V = 0 at r = infinity), which of the following correctly describes the electric potential V(r) as a function of radial distance r from the center?",
                "options": [
                    "V(r) is zero inside the sphere and proportional to 1/r outside",
                    "V(r) is constant and equal to k Q / R for all r <= R, and proportional to k Q / r for r >= R",
                    "V(r) increases linearly from 0 at the center to k Q / R at the surface",
                    "V(r) is proportional to 1/r^2 both inside and outside the sphere",
                    "V(r) is constant throughout all space"
                ],
                "answer": "B",
                "explanation": "Because the sphere is a conductor in electrostatic equilibrium, the electric field inside is zero (E = 0 for r <= R). Since E = -dV/dr, the potential must be constant throughout the volume of the conductor and equal to its surface value: V(r) = k Q / R for r <= R. Outside the sphere (r >= R), Gauss's law gives E(r) = k Q / r^2, so integrating from infinity yields V(r) = k Q / r.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "pt2-em-q31",
                "global_num": 410,
                "section": "Practice Test 2 – E&M",
                "question": "For the solid conducting sphere in the previous question, which of the following correctly describes the electric field magnitude E(r) as a function of radial distance r from the center?",
                "options": [
                    "E(r) = 0 for r < R, and E(r) = k Q / r^2 for r > R",
                    "E(r) is constant and non-zero for r < R",
                    "E(r) increases linearly with r for r < R",
                    "E(r) is proportional to 1/r for all r",
                    "E(r) is non-zero at the center and decreases to 0 at the surface"
                ],
                "answer": "A",
                "explanation": "In electrostatic equilibrium, charges reside entirely on the outer surface of a conductor, so the electric field inside the conducting material is identically zero: E(r) = 0 for r < R. Outside the sphere (r > R), Gauss's law with a spherical Gaussian surface enclosing charge Q yields E(4 pi r^2) = Q / epsilon_0 ==> E(r) = k Q / r^2.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            }
        ]
    }
};
