// Specific Question Bank for Test: ap-mock-physc-em-full-2
const AP_TEST_DATA = {
    "ap-mock-physc-em-full-2": {
        "title": "AP Physics C: Electricity & Magnetism Comprehensive Full Mock 2",
        "testType": "Full Mock Exam",
        "subject": "ap-phys-c-em",
        "topic": "Comprehensive Electricity & Magnetism",
        "timeLimitMinutes": 90,
        "totalQuestions": 45,
        "questions": [
            {
                "id": "full-em-2-q1",
                "global_num": 380,
                "section": "Practice Test 2 – E&M",
                "question": "Referring to the situation introduced in question 4, which of the graphs shows the voltage as a function of radial position, V(r)?",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) Recall that Er = −dV/dr. Based on this equation, because the electric field is zero within the regions r < R and r < 2R, the potential must be constant, immediately eliminating choices (A) and (B). Because potential is the line integral of the electric field, , it must be continuous in the absence of infinite electric fields (e.g., due to a point charge), making choice (C) incorrect. To choose between choices (D) and (E), we simply decide what the sign of the potential should be for r < R. Because points with r < R are closer to the negative charge than the positive charge (and there are equal amounts of these charges), the potential must be negative [recall that potential is given by the integral . The sign can also be determined by realizing that the electric field between the two cylinders points inward. Recalling that the electric field points from high to low potential, we see that choice (D) is correct.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q2",
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
                "id": "full-em-2-q3",
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
                "id": "full-em-2-q4",
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
                "id": "full-em-2-q5",
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
                "id": "full-em-2-q6",
                "global_num": 385,
                "section": "Practice Test 2 – E&M",
                "question": "A parallel plate vacuum capacitor with capacitance C0 is attached to a battery of voltage V. What is the change in the energy stored in the capacitor if the separation of the plates is doubled? (You can assume that the resistance in the circuit is very small so that the potential difference across the capacitor always equals V.)",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "none of the above"
                ],
                "answer": "D",
                "explanation": "(D) The most useful form of the equation for the energy stored in a capacitor to use here is . Because the voltage remains constant and the capacitance decreases by a factor of 2 (recall that C = \\epsilon0A/d), the energy stored in the capacitor decreases by a factor of 2, from and the change in energy is equal to .",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q7",
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
                "id": "full-em-2-q8",
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
                "id": "full-em-2-q9",
                "global_num": 388,
                "section": "Practice Test 2 – E&M",
                "question": "An electron is released from rest at a distance of r1 from a proton. What is the kinetic energy of the electron when it is a distance r2 from the proton?",
                "options": [
                    "0",
                    "(C)",
                    "Option C",
                    "(E)",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) By the work-energy theorem, we know that , where r1 and r2 are the initial and final separations of the electron and proton, respectively.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q10",
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
                "id": "full-em-2-q11",
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
                "id": "full-em-2-q12",
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
                "id": "full-em-2-q13",
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
                "id": "full-em-2-q14",
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
                "id": "full-em-2-q15",
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
                "id": "full-em-2-q16",
                "global_num": 395,
                "section": "Practice Test 2 – E&M",
                "question": "A charged particle moves in a planar, circular orbit as a result of the presence of a uniform magnetic field perpendicular to the plane of its motion. Holding all other variables (such as the magnetic field, the particle’s velocity, and the particle’s charge) constant, which graph shows the relationship between the particle’s mass and the radius of its path?",
                "options": [
                    "Option A",
                    "(C)",
                    "Option C",
                    "(E)",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic force provides the centripetal force: mv2/r = qvB. Rearranging this equation to solve for r in terms of m yields r = (v/qB)m. Therefore, the graph is linear, passing through the origin.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q17",
                "global_num": 396,
                "section": "Practice Test 2 – E&M",
                "question": "A rod with charge density of −\\lambda C/m lies along the y-axis as shown. Which of the following plots correctly shows Ex(x), the x-component of the electric field along the x-axis?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) Because the rod is negatively charged, the field to the right of the rod is negative and the field to the left of the rod is positive, eliminating all choices except (A) and (D). What happens close to the origin? At points extremely close to the origin, the contributions to the field made by the rod near the point increase (based on the equation dE = dQ/4\\pi\\epsilon0r2), and the electric field due to points farther away decreases (because of vector cancellation; these points produce field mainly in the y-direction that cancels the field produced by matching pieces of charge an opposite distance from the origin). Therefore, the fact that the ends of the rod are missing doesn’t significantly affect the electric field close to the rod, allowing us to approximate the rod as infinite and apply Gauss’s law for small values of x. Applying Gauss’s law with cylindrical symmetry indicates that the field increases without bound as x approaches zero, which is consistent only with choice (A).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q18",
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
                "id": "full-em-2-q19",
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
                "id": "full-em-2-q20",
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
                "id": "full-em-2-q21",
                "global_num": 400,
                "section": "Practice Test 2 – E&M",
                "question": "In the circuit shown, if the potential at point A is equal to the potential at point B, what is the current passing through the unknown resistor R?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "none of the above"
                ],
                "answer": "A",
                "explanation": "(A) The equivalent resistance of the top branch is 6 Ω, so the current running through the upper branch is . Now the potential difference between points A and B is equal to the sum of the potential jumps as we move from point A to point B. Because the resistance R is unknown, we must proceed from point A through the 2 Ω resistor and the 4 Ω resistor. Equating the sum of these potential jumps to zero (and designating the current through the middle branch as I) yields This equation is easily solved for I = 2/3 A.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q22",
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
                "id": "full-em-2-q23",
                "global_num": 402,
                "section": "Practice Test 2 – E&M",
                "question": "What voltage would have to be imposed across the entire network shown in question 26 for the voltage across any of the capacitors to be V?",
                "options": [
                    "V/9",
                    "V/3",
                    "C",
                    "3V",
                    "9V"
                ],
                "answer": "D",
                "explanation": "(D) Imagine charging the capacitor network. Equal amounts of charge would flow through the three branches of the network, causing equal amounts of charge to build up on every one of the nine capacitors. Therefore, for the voltage of one capacitor to be V, the voltage of every capacitor in the network must be V. When the voltage across each capacitor is V, what is the voltage across the entire network? To calculate the voltage across the network, we can imagine traversing one branch and summing the voltage jumps, as in a Kirchhoff’s loop equation. Because the capacitors have the same polarity, their voltages sum, causing the voltage across the branch (and thus the network) to be 3V.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q24",
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
                "id": "full-em-2-q25",
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
                "id": "full-em-2-q26",
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
                "id": "full-em-2-q27",
                "global_num": 406,
                "section": "Practice Test 2 – E&M",
                "question": "What is the rate at which thermal energy is produced in the resistors shown?",
                "options": [
                    "(B) IV",
                    "Option B",
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
                "id": "full-em-2-q28",
                "global_num": 407,
                "section": "Practice Test 2 – E&M",
                "question": "In the circuit shown, there is initially no current flowing through the inductor. The instant after the switch is closed, what is the current through the battery?",
                "options": [
                    "V/R1",
                    "V/(R1 + R2)",
                    "V/(R1 + R3)",
                    "(E)",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) The instant after the switch is closed in an RL circuit, the inductor acts like an open circuit (because the current through the inductor must be continuous and thus initially zero). Therefore, the equivalent resistance is R1 + R2, and the current is calculated using Ohm’s law with the result given by choice (B). Elimination approach: Even if you have forgotten about RL circuits, you could eliminate enough choices to make a good guess. First, because no circuit elements block the flow of current through resistors R1 and R2, these resistors determine the current and are expected to show up in the final answer, eliminating choices (A) and (C). The denominator of choice (E) has mixed units (Ω + Ω−1), so it must be incorrect. This leaves us to guess between choices (B) and (D).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q29",
                "global_num": 408,
                "section": "Practice Test 2 – E&M",
                "question": "Referring to the circuit shown in question 32, after the circuit has reached equilibrium, what is the current through the battery?",
                "options": [
                    "V/R1",
                    "V/(R1 + R2)",
                    "V/(R1 + R3)",
                    "(E)",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) At equilibrium the inductor acts like a short circuit, so to calculate the current we simply ignore the inductor, calculate the equivalent resistance, and apply Ohm’s law. To calculate the equivalent resistance, note that R2 and R3 are in parallel with each other, so their equivalent resistance together is Because these resistors are in series with R1, the equivalent resistance of the entire circuit is Applying Ohm’s law yields the current given in choice (D).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q30",
                "global_num": 409,
                "section": "Practice Test 2 – E&M",
                "question": "Which of the sketches correctly shows potential as a function of position for the charge distribution shown?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) Potential increases toward infinity very close to a positive charge (whether approaching from the right or the left) and decreases to negative infinity when very close to a negative charge (whether approaching from the right or the left) because of the equation V = Σ(Q/4\\pi\\epsilon0r). The only graph that satisfies these simple requirements is graph (B). (There are, of course, many other criteria that could be used to figure out which graph is correct.) Alternative solution: Sketch the potential-vs-position plots for both charges separately and superimpose them, as shown (valid because potential obeys the principles of superposition).",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q31",
                "global_num": 410,
                "section": "Practice Test 2 – E&M",
                "question": "Which graph in question 34 represents the electric field as a function of position? Free-Response Questions DIRECTIONS: Use separate sheets of paper to write down your answers to the free-response questions. You may refer to the formula sheet in the Appendix (pages 575-578). Electricity and Magnetism Electricity and Magnetism I A semicircle of radius a and total positive charge Q (uniformly distributed along its length) lies on the xy-plane as shown. (a) Calculate the potential at the origin. (b) Calculate the electric field at the origin. (c) If a charge of mass m and charge +q is released from rest at the origin, what will its velocity and position be as time approaches infinity? (d) How much work has the electric field done on the charge when the charge has moved a very small displacement \\Delta x to the right of the origin? Electricity and Magnetism II A cylinder of uniform material with resistivity \\rho, length l, and area A is connected to an identical cylinder made of metal (with effectively zero resistance) of the same radius. If a current I runs through both cylinders with a uniform current density, (a) What is the resistance of the two-cylinder apparatus? (b) What is the potential difference between A and B? Between B and C? Which points are at higher potential? (c) What is the electric field in the resistive material? In the metal? (d) Calculate the amount of charge lying on the interface of the two cylinders by constructing a gaussian surface that contains the interface. (Hint: This gaussian surface behaves similarly to the surfaces used to calculate the electric fields of infinite planes of charge.) (e) An experiment is carried out to measure the resistance of the cylinder. The following data are obtained for the potential difference between points A and C and the current flowing between those two points: Plot the data on the grid below. Scale and label the axes, including units. After fitting the data to a straight line, determine the resistance. Electricity and Magnetism III A charge +Q is distributed on an isolated solid metal sphere of radius a. (a) Use Gauss’s law to calculate the electric field for r < a and r > a. (b) Integrate the electric field from r = \\infty to r = a to calculate the potential on the surface of the sphere. (c) If you consider the sphere to be a capacitor (with the opposite charge −Q spread over a sphere an infinite distance away), what is its capacitance? (d) You then place a very thin metal shell of radius b > a concentric with the charged metal sphere. You can assume that the thickness of the shell (where the electric field is zero) is negligible so that it does not affect the potential on the surface of the charged sphere. After connecting the sphere to the shell with a wire, how will the charge redistribute itself? (e) What is the change in electrostatic potential energy as the charge moves from the sphere to the shell? If the energy change is not equal to zero, where does the energy disappear to or appear from?",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) The electric field of a point charge (of either sign) jumps discontinuously from positive to negative infinity as we cross the position of the charge. This immediately eliminates choices (B), (D), and (E). The only difference between choices (A) and (C) is that the graph in choice (C) passes through the origin while the graph in choice (A) always lies above the origin. At the origin, the electric field for the charge distribution shown is nonzero and points to the right; thus, the answer is choice (A). Alternative solution: Sketch the electric field-vs-position plots for both charges separately and superimpose them, as shown. Electricity and Magnetism I (a) All the differential charge elements making up the semicircle lie at a constant distance a from the origin, so the potential is simply (b) Based on symmetry, the only well-defined direction at the origin is along the x-axis. Thus, the y-component of the electric field is zero. Therefore, we divide the semicircle into differential arc lengths ds and sum the contributions of each differential length to Ex. As shown in the figure, it is more useful to define the differential regions in terms of an angle \\theta so that (recalling that arc length is equal to the radius multiplied by the angle of the arc in radians): The amount of charge in each differential arc length is equal to the differential length multiplied by the linear charge density \\lambda, which is given by \\lambda = charge/length = Q/\\pia: The contribution of each differential length to the x-component of the electric field is Integrating: (c) The positive charge will be repelled by the semicircle of positive charge. It moves in the +x-direction to infinity, converting electrical potential energy to kinetic energy. Therefore, as time approaches infinity, its position approaches (\\infty, 0) and its velocity can be obtained by conservation of energy: (d) Recall that work is given by the equation . For a very small increment, \\Delta x, we can assume that the electric force is roughly constant so that the work is Electricity and Magnetism II (a) The resistance of two elements in series is the sum of the two separate resistances. The resistance of the metal is approximately zero, and the resistance of the other cylinder is given by the formula R = \\rhol/A. Thus, the sum of the two resistances, the resistance of the entire apparatus, is R = \\rhol/A. (b) Using Ohm’s law, VAB = IR = I\\rhol/A, and VBC = IR = I(0) = 0. Recall that current flows from high to low potential, so points upstream of the resistor (point A here) are at higher potential than downstream points (points B and C, which are at equal potential). (c) Because the resistance/length is uniform throughout each cylinder, the electric field is constant and is given by the equation |E| = V/l. For the resistive cylinder, this yields |E| = I\\rho/A. For the metal cylinder, this gives a value of |E| = 0/l = 0. (d) The interface is planar, so our gaussian surface is a cube (with faces of area A) bisected by the interface, with two faces parallel to the interface (see figure). The four faces perpendicular to the interface experience no flux because the electric field is parallel to the face and E \\cdot  dA = 0. Of the two faces parallel to the interface, the face immersed in the metal cylinder experiences zero flux because the electric field is zero in the metal. The last face, the face parallel to the interface and lying in the resistive material, experiences an inward flux as follows. (Keep in mind that the electric field is perpendicular to the surface and that inward flux is negative.) Therefore, the surface contains negative charge of surface density: Thus, the complete interface contains a negative charge equal to Check: The electric field lines in the resistive cylinder end on this negative charge. (e) The plot is shown below. Calculate the slope of the fitted line: Electricity and Magnetism III (a) We know that excess charge resides on the surface of metals in equilibrium, and because the sphere is isolated, the charge distributes itself uniformly on the surface. The field is zero for r < a because these points are inside the metal. For r > a, the enclosed charge is Q and is distributed in a spherically symmetric fashion. The electric field points away from the center of the sphere, which is parallel to the directed area vector (which points away from the surface, by definition). Therefore, applying Gauss’s law to a Gaussian sphere of radius r, This is the same magnitude that would be caused by a point charge +Q at the center of the sphere, reflecting the fact that the electric field depends only on the value of the enclosed charge (not on its distribution) as long as the distribution is spherically symmetric. (b) Because the electric field is the same as that of a point charge, the potential calculation is the same as that of a point charge. We choose to evaluate the potential integral along the x-axis (the direction of the electric field is in the +x-direction): Note that this is the same answer we would obtain for a point charge Q located at the center of the sphere. (c) From the definition of capacitance, Reality check: This equation also makes sense in terms of thinking about the amount of charge required to achieve a certain voltage. For example, as a \\to  0, the distribution becomes a point charge, the potential goes to infinity (an infinite amount of energy is stored by the charge when it is infinitesimally close), and the capacitance approaches zero. (d) The charge moves from the surface of the inner sphere to the outer surface of the metal shell (like charge repels, so the positive charge tries to disperse itself as much as it can). Note that this distribution satisfies the requirement for the electric field to be zero within both the metal sphere and the metal shell. (e) The key here is that the metal shell has the same charge distribution (a sphere with charge on its surface) as the metal sphere did before we introduced the shell. Thus, the shell acts like a capacitor with capacitance equal to Cb = 4\\pi\\epsilon0b [see part (c)]. This insight transforms the problem to a straightforward capacitance problem: A charge of +Q is transferred from one capacitor of capacitance Ca = 4\\pi\\epsilon0a to a second capacitor of capacitance Cb = 4\\pi\\epsilon0b. Because we are dealing with charges and capacitances, the most useful equation for the energy of a capacitor is U = Q2/2C. Therefore, which satisfies \\Delta U < 0. Thus, the potential energy decreases during the transfer. The energy is lost as heat while electrons flow through the wire (which acts as a resistor here) into the shell.",
                "difficulty": "medium",
                "topic": "Practice Test 2 – E&M"
            },
            {
                "id": "full-em-2-q32",
                "global_num": 234,
                "section": "Ch14: Magnetic Fields",
                "question": "Two loops of wire centered at the origin with equal radii carry current of equal magnitude, as shown in Figure 14.14. One loop lies on the xz- plane, while the other lies on the xy-plane. At the origin, which of the following vectors is parallel to the magnetic field? Figure 14.14",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "none of the above"
                ],
                "answer": "C",
                "explanation": "(C) Using the right-hand rule, the loop in the xy-plane produces a magnetic field in the +z-direction and the loop in the xz-plane produces a magnetic field in the −y-direction. Because these wires are carrying identical amounts of current, they produce magnetic fields of equal magnitudes so that the net magnetic field consists of two components of equal magnitude (one pointing in the +z-direction and one in the −y- direction). Therefore, the net magnetic field is parallel to the vector . (Note that this problem relies on the superposition of magnetic fields.)",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q33",
                "global_num": 235,
                "section": "Ch14: Magnetic Fields",
                "question": "A coaxial cable consists of a solid inner conductor of radius r1 surrounded by a concentric hollow cylindrical tube with inner radius r2 and outer radius r3; see Figure 14.23. The conductors carry equal and opposite currents I distributed uniformly over their cross sections, with the current flowing out of the page in the inner tube. Calculate the magnetic field at a distance r from the center of the inner conductor when: (a) r < r1 (b) r1 < r < r2 (c) r2 < r < r3 (d) r3 < r Figure 14.23",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) Using the right-hand rule, the loop in the xy-plane produces a magnetic field in the +z-direction and the loop in the xz-plane produces a magnetic field in the −y-direction. Because these wires are carrying identical amounts of current, they produce magnetic fields of equal magnitudes so that the net magnetic field consists of two components of equal magnitude (one pointing in the +z-direction and one in the −y- direction). Therefore, the net magnetic field is parallel to the vector . (Note that this problem relies on the superposition of magnetic fields.)",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q34",
                "global_num": 236,
                "section": "Ch14: Magnetic Fields",
                "question": "A uniform magnetic field of magnitude B points out of the page in the region x > 0, and a uniform magnetic field of equal magnitude points into the page in the region x < 0, as shown in Figure 14.15. A particle with charge +q and mass m initially at the origin moves to the right with speed v. At which of the following points does the particle cross the y- axis? Figure 14.15",
                "options": [
                    "6 mv/qB",
                    "3 mv/qB",
                    "−3 mv/qB",
                    "−6 mv/qB",
                    "The particle will never cross the y-axis."
                ],
                "answer": "D",
                "explanation": "(D) The particle’s velocity is perpendicular to the magnetic field, so it moves in a circular path. The radius of the path can be calculated by equating the magnetic force to the centripetal force, qvB = mv2/r, to obtain r = mv/qB. Careful examination of the particle’s path reveals that it moves in the path shown in Figure 14.25. Therefore, it passes through the y-axis at multiples of −2r = −2 mv/qB. Figure 14.25",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q35",
                "global_num": 237,
                "section": "Ch14: Magnetic Fields",
                "question": "Two infinitely long wires carry equal currents of I into the page, as shown in Figure 14.24.",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) The particle’s velocity is perpendicular to the magnetic field, so it moves in a circular path. The radius of the path can be calculated by equating the magnetic force to the centripetal force, qvB = mv2/r, to obtain r = mv/qB. Careful examination of the particle’s path reveals that it moves in the path shown in Figure 14.25. Therefore, it passes through the y-axis at multiples of −2r = −2 mv/qB. Figure 14.25",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q36",
                "global_num": 238,
                "section": "Ch14: Magnetic Fields",
                "question": "An electron moves in a magnetic field along a certain path at a constant speed. The magnetic field does no work on the electron if",
                "options": [
                    "the path is parallel to the magnetic field so that the magnetic force is zero",
                    "the path is perpendicular to the field so that the electron moves in uniform circular motion",
                    "the magnetic field is constant in space so that there is no induced electric field",
                    "the electron must move along a magnetic field line",
                    "None of the above conditions are necessary."
                ],
                "answer": "E",
                "explanation": "(E) The magnetic force is always perpendicular to velocity, so it can never do work (recall that dW = F \\cdot  d r).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q37",
                "global_num": 239,
                "section": "Ch14: Magnetic Fields",
                "question": "Figure 14.16 shows a cross section of a coaxial cable. A current of 1.0 A passes through the center of the cable, while a uniform current density of 1.0 A/m2 comes out of the page through the outer sheath of the cable. At what distance from the center of the cable is the magnetic field equal to zero? Figure 14.16",
                "options": [
                    "(B)",
                    "Option B",
                    "(D) The magnetic field is zero but not at the radii listed above.",
                    "Option D",
                    "The magnetic field is never zero except at infinity."
                ],
                "answer": "C",
                "explanation": "(C) According to Ampere’s law, the magnetic field is zero when the enclosed current is zero. For the inward current to balance the outward current, the outward current enclosed must equal 1.0 A. The enclosed outward current is 1.0 A when the Amperian path encloses an area of 1.0 m2 of the sheath (because the current density is 1.0 A/m2). Geometrically, 1 = \\pir2 − \\pi(1.0)2. Solving this equation for r yields choice (C).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q38",
                "global_num": 240,
                "section": "Ch14: Magnetic Fields",
                "question": "A charged particle moves in uniform circular motion due to a magnetic field perpendicular to the plane of its motion. Which of the graphs in Figure 14.17 illustrates the relationship between the charge’s velocity and the radius of its motion? (Assume that other variables, such as the magnetic field strength and the mass of the particle, are held constant.) Figure 14.17",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic force provides the centripetal force: Thus, v is a linear function of r that passes through the origin.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q39",
                "global_num": 241,
                "section": "Ch14: Magnetic Fields",
                "question": "A particle with a charge −q and mass m is moving with speed v through a mass spectrometer that contains a uniform outward magnetic field as shown in Figure 14.18. What is the magnitude and direction of the electric field required so that the net force on this particle is zero? Figure 14.18",
                "options": [
                    "E = vB, with a direction upward",
                    "E = vB, with a direction downward",
                    "E = B/v, with a direction upward",
                    "E = B/v, with a direction downward",
                    "E = B/v, with a direction into the page"
                ],
                "answer": "B",
                "explanation": "(B) For the magnetic force to cancel the electric force, |qv \\times  B| = qvB = qE, which simplifies to E = vB. The direction of the magnetic force on the charge is downward (opposite the direction indicated by the right- hand rule because the charge is negative). The electric force must point in the opposite direction, upward. However, since the charge is negative, in order to produce an upward electric force the field must point downward.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q40",
                "global_num": 242,
                "section": "Ch14: Magnetic Fields",
                "question": "Consider current passing through a short segment of a circular loop of wire as shown in Figure 14.19. The current passing through the rest of the circular wire produces a magnetic field at the location of the short segment, resulting in a magnetic force on the current-carrying segment of wire. Which of the following statements about this force is true? Figure 14.19",
                "options": [
                    "The force is to the right.",
                    "The force is to the left.",
                    "The magnetic field is zero because of symmetry, so there is no force.",
                    "The force is pointing out of the page.",
                    "The force is pointing into the page."
                ],
                "answer": "A",
                "explanation": "(A) First, imagine dividing the loop into little segments and considering the magnetic field due to each segment (using the right- hand rule for the direction of a magnetic field produced by a current- carrying wire or using the right-hand rule embedded in Biot-Savart’s law). Because each segment produces a magnetic field pointing out of the page at the segment of wire, the net magnetic field points out of the page. Using the right-hand rule again, the force this field exerts on the segment of wire is to the right. In general, each segment of the loop feels a force directed radially outward due to the rest of the loop.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q41",
                "global_num": 243,
                "section": "Ch14: Magnetic Fields",
                "question": "Two wires located along the x-axis carry equal currents into the page as shown in Figure 14.20. Which of the graphs shows the y-component of the magnetic field along the x-axis? Figure 14.20",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) At the origin, the fields due to the two wires cancel and the net field is zero, eliminating choices (A) and (B). As each wire is approached from the right, the field decreases to negative infinity, and as each wire is approached from the left, the field increases to positive infinity. This is consistent only with choice (D).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q42",
                "global_num": 244,
                "section": "Ch14: Magnetic Fields",
                "question": "A particle moves through an electric field as shown in Figure 14.21. What is the direction of the magnetic field needed to ensure that the particle experiences zero net force? Figure 14.21",
                "options": [
                    "into the page if the particle is positively charged, out of the page if the particle is negatively charged",
                    "into the page if the particle is negatively charged, out of the page if the particle is positively charged",
                    "into the page, irrespective of the particle’s charge",
                    "out of the page, irrespective of the particle’s charge",
                    "to the left, irrespective of the particle’s charge"
                ],
                "answer": "C",
                "explanation": "(C) Changing the sign of the charge of the particle changes the direction of both the electric and the magnetic forces, two changes that cancel each other out, so that in either case the magnetic field must point into the page in order to cancel out the electric field. (If the magnetic field is into the page, a positive charge will feel an electric force to the right and a magnetic force to the left. Alternatively, a negative charge will feel forces in the opposite directions.)",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q43",
                "global_num": 245,
                "section": "Ch14: Magnetic Fields",
                "question": "Three loops of equal radii carrying equal currents lie on planes parallel to the yz-plane as shown in Figure 14.22. Two of the loops are located equal distances d from the yz-plane as shown, while the third loop lies on the yz-plane. In what direction is the net magnetic field at the origin? Figure 14.22",
                "options": [
                    "The magnetic field is zero because of symmetry.",
                    "The magnetic field is in the +x-direction.",
                    "The magnetic field is in the −x-direction.",
                    "The magnetic field lies in the xz-plane.",
                    "The magnetic field lies in the xy-plane. Free-Response Questions"
                ],
                "answer": "B",
                "explanation": "(B) The two loops lying off the yz-plane produce equal and opposite fields which cancel each other. (The loop at x = −d produces a magnetic field in the −x-direction, while the loop at x = d produces a magnetic field in the +x-direction.) The net field is therefore equal to the field produced by the middle loop, which produces a field in the +x- direction. Free-Response 1. Given the cylindrical symmetry of this problem, Ampere’s Law is the way to go. As in Examples 14.4 and 14.5, the field lines will be concentric circles centered on the center of the inner conductor. The Amperian path will be a circle of radius r. The left-hand side of Ampere’s law for this path will be ∮B \\cdot  dl = B(2\\pir). All we need to do is to figure out the direction and magnitude of the enclosed current to solve each part of the problem. (a) The current density in the inner conductor is , positive because the current is flowing out of the page. Thus, the enclosed current is , and Ampere’s law says: The field is counterclockwise because the current is positive, pointing out of the page. (b) Now the enclosed current is the full value I, pointing out of the page, i.e., positive. Ampere’s law yields , just like a thin current- carrying wire. The field is counterclockwise. (c) This is the trickiest part of this problem as we are enclosing the entire inner conductor but only a portion of the outer conductor. First, we need to find the current density in the outer conductor. The cross- sectional area of the outer conductor is and the current density is , negative because the current flows into the page. The enclosed current is then given by I enclosed . Applying Ampere’s law we find: The field is positive, i.e., counterclockwise because the enclosed current is positive. (d) The enclosed current is now zero so the field is zero. 2. (a) The magnetic field due to an infinitely long wire is equal in magnitude to B = \\mu0I/2\\pir and has a direction indicated by the right-hand rule. The magnetic field along the x-axis is a superposition of the magnetic fields due to both of the wires, as shown in Figure 14.26. Figure 14.26 Adding the two vectors yields (b) This expression is given in Figure 14.27. In sketching the curve, first we note that the function has odd symmetry; mathematically, B(−x) = −B(x). Because x is raised to a greater power in the denominator than in the numerator, the function asymptotically approaches zero as x approaches positive or negative infinity. Finally, we note that the function is zero at the origin and that it passes through the origin with a negative slope. Figure 14.27 Note: A graphing calculator can also be used to sketch this curve: Simply graphing the function f(x) = −x/(1 + x2) is sufficient to get an idea of how this curve looks. (c) The magnetic force is always perpendicular to the velocity, so it never does any work. (Thus, the magnetic force can change only an object’s direction, not its speed.) Therefore, no work need be done by an external force to move the charge from infinity to the origin.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "full-em-2-q44",
                "global_num": 246,
                "section": "Ch15: Electromagnetism",
                "question": "An external force pushes a square loop of wire through a region of constant magnetic field as shown in Figure 15.9. Which of the following is a plot of the magnetic flux as a function of the position of the loop? Figure 15.9",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic flux is proportional to the portion of the loop’s area that is exposed to the magnetic field. This area increases linearly as the loop enters the field, remains constant while the loop is completely within the field, and decreases as the loop exits the field.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "full-em-2-q45",
                "global_num": 247,
                "section": "Ch15: Electromagnetism",
                "question": "Referring to the situation introduced in question 1, which of the plots in Figure 15.9 shows the induced current in the loop (with clockwise current designated as positive)?",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) According to Lenz’s law, as the loop enters the field, the induced magnetic current flows in the clockwise direction to create flux into the page (opposing the increase in outward flux); this immediately eliminates choices (D) and (E). While the loop is completely within the magnetic field, the flux through the loop is constant, so the induced current is zero, eliminating choice (A). Finally, as the loop exits the field, the flux decreases at a constant rate, so the induced current is constant, eliminating choice (B).",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            }
        ]
    }
};
