// Specific Question Bank for Test: ap-mock-physc-em-full-1
const AP_TEST_DATA = {
    "ap-mock-physc-em-full-1": {
        "title": "AP Physics C: Electricity & Magnetism Comprehensive Full Mock 1",
        "testType": "Full Mock Exam",
        "subject": "ap-phys-c-em",
        "topic": "Comprehensive Electricity & Magnetism",
        "timeLimitMinutes": 90,
        "totalQuestions": 45,
        "questions": [
            {
                "id": "full-em-1-q1",
                "global_num": 306,
                "section": "Practice Test 1 – E&M",
                "question": "Consider the circuit shown, which contains two identical lightbulbs connected to a battery. The top bulb’s intensity will",
                "options": [
                    "decrease slightly if either of the two switches is closed.",
                    "decrease slightly if S1 is closed but not if S2 is closed.",
                    "decrease slightly if S2 is closed but not if S1 is closed.",
                    "remain unchanged if S2 is closed but go out completely if S1 is closed.",
                    "remain unchanged if S1 is closed but go out completely if S2 is closed."
                ],
                "answer": "E",
                "explanation": "(E) If S1 is closed, a parallel circuit with an equivalent resistance of R/2 will be created. Thus the current drawn from the battery will double and half that current will go through the top bulb, yielding the same current that flowed before the switch S1 was closed. If S2 is closed, creating a path of zero resistance, no current will pass through either bulb.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q2",
                "global_num": 307,
                "section": "Practice Test 1 – E&M",
                "question": "What is the voltage V in the circuit shown in the figure?",
                "options": [
                    "1 V",
                    "2 V",
                    "4 V",
                    "6 V",
                    "8 V"
                ],
                "answer": "D",
                "explanation": "(D) A Kirchhoff’s loop equation for the right loop [clockwise: 8 V − (1 A)(4 Ω) − (I)(2 Ω) = 0] reveals that the current i moving from point A to point B must be 2.0 A (upward). A node equation at point A then shows the current through the left 2 Ω resistor must be 1.0 A flowing to the right. Finally, a Kirchhoff’s loop equation for the left loop [clockwise: V − (1 A)(2 Ω) − (2 A)(2 Ω) = 0] allows us to calculate the voltage of the battery as 6 V.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q3",
                "global_num": 308,
                "section": "Practice Test 1 – E&M",
                "question": "A battery of voltage V is connected in series to a resistor of resistance R and an uncharged capacitor of capacitance C. What is the magnitude of the maximum charge on the capacitor?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "Q = CV2",
                    "Q = CV",
                    "Q grows without limit"
                ],
                "answer": "D",
                "explanation": "(D) Capacitance is defined by the relationship C = Q/V. The battery’s voltage determines the maximum potential difference across the capacitor plates.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q4",
                "global_num": 309,
                "section": "Practice Test 1 – E&M",
                "question": "A sphere of radius R contains a negative charge with a charge density given by the function \\rho = −cr4, where r equals the distance from the center of the sphere. Where does the electric field have the smallest magnitude?",
                "options": [
                    "at the center of the sphere",
                    "at some point between the center of the sphere and the surface of the sphere",
                    "at the surface of the sphere",
                    "outside the sphere",
                    "The electric field is constant in space."
                ],
                "answer": "A",
                "explanation": "(A) At the center of the sphere, as a result of symmetry, the electric field is zero. At every other point in space, the electric field is nonzero.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q5",
                "global_num": 310,
                "section": "Practice Test 1 – E&M",
                "question": "Referring to the charge distribution described in question 4, where is the potential smallest in magnitude?",
                "options": [
                    "at the center of the sphere",
                    "at some point between the center of the sphere and the surface of the sphere",
                    "at the surface of the sphere",
                    "outside the sphere",
                    "at infinity"
                ],
                "answer": "E",
                "explanation": "(E) The electric field at all points in space is directed toward the center of the sphere because the sphere is negatively charged. Electric fields always point in the direction of decreasing potential. With the conventional choice of zero potential at infinity, the potential will be negative everywhere else and thus smallest in magnitude at infinity.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q6",
                "global_num": 311,
                "section": "Practice Test 1 – E&M",
                "question": "A loop is moved out of a magnetic field at constant velocity as shown. Which of the following statements about the induced current in the loop and the applied force on the loop is correct? (The magnetic field points into the page.)",
                "options": [
                    "The current is clockwise, and the applied force is to the right.",
                    "The current is clockwise, and the applied force is to the left.",
                    "The current is counterclockwise, and the applied force is to the right.",
                    "The current is counterclockwise, and the applied force is to the left.",
                    "The current is counterclockwise, and the applied force is into the page."
                ],
                "answer": "A",
                "explanation": "(A) To oppose the decrease in flux going into the page, the current flows clockwise. What magnetic force does this produce on the loop? The magnetic forces on the top and bottom of the loop, which point up and down, respectively, cancel each other out. The force on the left side of the loop points to the left, and there is zero force on the right side of the loop (because the magnetic field is zero in this region), so the net magnetic force points to the left. Because the applied force must cancel out this magnetic force in order for the loop to move at constant velocity, it then points to the right.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q7",
                "global_num": 312,
                "section": "Practice Test 1 – E&M",
                "question": "Which of the following statements about electric field lines and equipotential curves is false?",
                "options": [
                    "Equipotential lines are always perpendicular to electric field lines.",
                    "The electric field magnitude is greater in regions where the density of electric field lines is greater.",
                    "Electric field lines begin and end only at the locations of negative and positive charges, respectively.",
                    "The work required to move a charge along an equipotential line is zero.",
                    "Electric field lines never penetrate metals."
                ],
                "answer": "C",
                "explanation": "(C) Electric field lines begin and end at locations of positive and negative charges, respectively (not the other way around).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q8",
                "global_num": 313,
                "section": "Practice Test 1 – E&M",
                "question": "In an LC circuit composed of an inductor with inductance L and a capacitor of capacitance C, if the current through the capacitor is changing at a rate of dI/dt, what is the magnitude of the charge on the capacitor?",
                "options": [
                    "CL(dI/dt)",
                    "(C/L)(dI/dt)",
                    "(CL2/2)(dI/dt)",
                    "(L/C)(dI/dt)",
                    "Information is not given."
                ],
                "answer": "A",
                "explanation": "(A) Because the capacitor and the inductor are in series, they share a common current. Therefore, if the current through the capacitor is changing with a rate of dI/dt, the current through the inductor is changing at exactly the same rate. The voltage across the inductor is then V = L(dI/dt), which is equal to the magnitude of the voltage across the capacitor (by Kirchhoff’s loop rule). The charge on the capacitor is then given by the equation",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q9",
                "global_num": 314,
                "section": "Practice Test 1 – E&M",
                "question": "A uniform cylindrical resistor has resistance R. Assume that the current density in this resistor is uniform. What is the resistance of a similar cylindrical resistor composed of the same material with half the radius and half the length?",
                "options": [
                    "4R",
                    "2R",
                    "R",
                    "R/2",
                    "R/4"
                ],
                "answer": "B",
                "explanation": "(B) Recall the formula for the resistance of a uniform cylindrical resistor: R = \\rhol/A, where l is the length of the resistor and A is its cross- sectional area. The second resistor has half the length of the first resistor, which alone would cause its resistance to decrease by a factor of 2 compared to R. The second resistor also has one-fourth the area of the first resistor (because A = \\pir2, increasing r by a factor of 2 causes A to increase by a factor of 4), which alone would cause its resistance to increase by a factor of 4 compared to R. The combined results of these changes are an increase by a factor of 2.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q10",
                "global_num": 315,
                "section": "Practice Test 1 – E&M",
                "question": "A parallel plate capacitor of capacitance C has charge +Q on one plate and −Q on the other. It is discharged through a resistor of resistance R. The maximum value of the current flowing through the resistor is given by",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "B",
                "explanation": "(B) The potential difference across the fully charged capacitor is V = Q/C. The capacitor acts like a discharging battery whose maximum voltage is Q/C. Hence, the maximum current through the resistor is choice (B), using Ohm’s law. Note that using dimensional analysis also yields the correct answer.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q11",
                "global_num": 316,
                "section": "Practice Test 1 – E&M",
                "question": "The electric field lines due to a point charge suspended within a spherical conducting shell are shown. These field lines are consistent with which of the following charge distributions? (Qp is the charge of the point charge, and Qs is the net charge on the conducting shell.)",
                "options": [
                    "Qp < 0, Qs < 0, |Qp| > |Qs|",
                    "Qp < 0, Qs > 0, |Qp| > |Qs|",
                    "Qp < 0, Qs > 0, |Qp| < |Qs|",
                    "Qp > 0, Qs < 0, |Qp| > |Qs|",
                    "Qp > 0, Qs < 0, |Qp| < |Qs|"
                ],
                "answer": "E",
                "explanation": "(E) Inside the shell, the field lines point away from the point charge. Because field lines begin only at positive charges, this reveals that the point charge is positive, eliminating choices (A), (B), and (C). Outside the spherical shell, the field lines point toward the shell. Applying Gauss’s law to any spherical surface outside the shell reveals that the net charge of the point charge and the shell must be negative. This can occur only if the net charge on the cylindrical shell is negative and greater in magnitude than the positive charge of the point charge, indicating that the correct answer is (E). Another way to rule out choice (D) is as follows. For the electric field within the metal to be zero, a net charge of −Qp must be distributed on the inside of the spherical shell. Conservation of charge then requires the charge on the outside of the spherical shell to be Qs + Qp. Because electric field lines terminate only at negative charges, the charge on the outside of the spherical shell must be negative. Because Qp > 0 and (Qs + Qp) < 0, this requires Qs to be negative and greater in magnitude than Qp.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q12",
                "global_num": 317,
                "section": "Practice Test 1 – E&M",
                "question": "Three wires carry currents as shown. Which vector in the diagram shows the direction of the magnetic force on the top wire due to the other two?",
                "options": [
                    "Directly upward toward the top of the page",
                    "Directly downward toward the bottom of the page",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "Zero net field / magnitude"
                ],
                "answer": "B",
                "explanation": "(B) Recall that wires carrying currents in opposite directions repel each other. (If you forget this, you can quickly figure it out by applying the right-hand rule twice to determine the direction of the magnetic field that one wire produces and the force exerted as the second wire carries current through this field.) Because the repulsive force between the top wire and the wire carrying current 2I has twice the magnitude of the repulsive force between the top wire and the wire carrying current I, the net force points upward and to the right as shown.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q13",
                "global_num": 318,
                "section": "Practice Test 1 – E&M",
                "question": "Referring to the situation introduced in question 12, if the value of I is increased by a factor of 2 (doubling the current carried by each wire), how will the magnitude of the force on the top wire change?",
                "options": [
                    "It will stay the same.",
                    "It will increase by a factor of 2.",
                    "It will increase by a factor of 3.",
                    "It will increase by a factor of 4.",
                    "It will increase by a factor of 6."
                ],
                "answer": "D",
                "explanation": "(D) Recall that the force exerted by one wire on another parallel wire has a magnitude given by the formula force/length = \\mu0I1I2/2\\pir. Doubling I will double all the currents, so it will increase each of the forces by a factor of 4. Because each of the pairwise forces increases by a factor of 4, the net force (which is the sum of these forces) will also increase by a factor of 4.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q14",
                "global_num": 319,
                "section": "Practice Test 1 – E&M",
                "question": "A positive charge +Q is fixed at the origin. As a charge of +q moves along the x-axis from (d, 0) to (2d, 0), how much work does the electric force do on the +q charge?",
                "options": [
                    "Work = qQ/4\\pi\\epsilon0d",
                    "Work = qQ/8\\pi\\epsilon0d",
                    "Work = −qQ/4\\pi\\epsilon0d",
                    "Work = −qQ/8\\pi\\epsilon0d",
                    "Work = −Q/4\\pi\\epsilon0d"
                ],
                "answer": "B",
                "explanation": "(B) Choice (E) is incorrect as revealed by dimensional analysis. Work has the same units as energy, which has units of qV. However, comparison with the formula V = Q/4\\pi\\epsilon0r indicates that choice (E) has the units of voltage, not of qV. Because both the electrostatic force and the displacement point in the +x-direction, the dot product and the integral of work must be positive, ruling out choices (C) and (D). To actually solve the problem, note that the change in electric potential energy is Because of conservation of energy, it is equal to the net external work (because the kinetic energy is constant) so that work = qQ/8\\pi\\epsilon0d.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q15",
                "global_num": 320,
                "section": "Practice Test 1 – E&M",
                "question": "Which of the following statements is true about a discharging capacitor?",
                "options": [
                    "The energy stored and the charge on the capacitor both increase with time.",
                    "The energy stored and the charge on the capacitor both decrease with time.",
                    "The energy stored decreases while the charge increases with time.",
                    "The energy stored remains the same while the charge decreases with time.",
                    "The energy stored increases while the charge decreases with time."
                ],
                "answer": "B",
                "explanation": "(B) A discharging capacitor certainly loses charge as it discharges. The decrease in charge leads to a decrease in the electric field between the plates; thus, the energy stored decreases as well.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q16",
                "global_num": 321,
                "section": "Practice Test 1 – E&M",
                "question": "To calculate the resistance of an 80 W speaker, you measure the voltage across the speaker to be 20 V. Which of the following is the speaker’s resistance?",
                "options": [
                    "0.2 Ω",
                    "0.25 Ω",
                    "4 Ω",
                    "5 Ω",
                    "1,600 Ω"
                ],
                "answer": "D",
                "explanation": "(D) The most useful form of the formula for power here is P = V2/R. Rearranging this yields R = V2/P = (20 V)2/80 W = 5 Ω.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q17",
                "global_num": 322,
                "section": "Practice Test 1 – E&M",
                "question": "A battery of voltage V is connected to two capacitors in series with capacitance C1 and C2. How much energy is stored in capacitor 1?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "E",
                "explanation": "(E) One direct way to solve this problem is to start off by calculating the equivalent capacitance Then calculate the charge that flows through the circuit and plug this charge into the equation for the energy stored in a capacitor: Note: When compared with the equation , choices (A) and (B) do not have the correct units and can be immediately eliminated.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q18",
                "global_num": 323,
                "section": "Practice Test 1 – E&M",
                "question": "Consider a spherical shell with a uniform surface charge density \\sigma. If the radius of the shell is doubled while holding the charge density constant, what effect does this have on the magnitude of the electric field just outside the shell?",
                "options": [
                    "The electric field decreases by a factor of 4.",
                    "The electric field decreases by a factor of 2.",
                    "The electric field remains the same.",
                    "The electric field increases by a factor of 2.",
                    "The electric field increases by a factor of 4."
                ],
                "answer": "C",
                "explanation": "(C) Gauss’s law applied to a gaussian surface just outside the sphere indicates that \\PhiE = EA = Qenc/\\epsilon0. Doubling the radius increases the area of the shell, A = 4\\piR2 (and thus the charge of the shell), by a factor of 4, but it also increases the area of the gaussian sphere by a factor of 4. These effects cancel, and the electric field remains the same. Note: Very close to the surface of the sphere, the field is mainly due to the nearby charge on the surface of the sphere. Also, when very close to the sphere, the curvature can be ignored (just as we can ignore the curvature of Earth) so that the sphere can be approximated as a plane and the electric field approximated as E = \\sigma/2\\epsilon0. Therefore, it is not surprising that changing the radius doesn’t affect the field near the sphere if the charge density is held constant.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q19",
                "global_num": 324,
                "section": "Practice Test 1 – E&M",
                "question": "A very long rod containing a charge density of −\\lambda coulombs/meter is moving along the +x-axis in the +x-direction with velocity v. The length of the rod is along the x-axis. What is the magnitude of the current, and in what direction is the conventional current flowing?",
                "options": [
                    "I = v\\lambda along the +x-direction.",
                    "I = v\\lambda along the −x-direction.",
                    "I = v\\lambda2 along the +x-direction.",
                    "I = v\\lambda2 along the −x-direction.",
                    "I = v/\\lambda along the +x-direction."
                ],
                "answer": "B",
                "explanation": "(B) Carrying negative charge in the +x-direction causes the same net charge transport as carrying positive charge in the −x-direction. Therefore, the direction of the conventional current produced is in the −x-direction, which immediately eliminates choices (A), (C), and (E). What is the magnitude of the current? The magnitude of current is defined as the amount of charge that passes a certain point per time. In a time increment dt, a length of rod dx = vdt passes a certain point that carries a charge dQ = \\lambdadx = \\lambdav dt. The current is then I = dQ/dt = \\lambdav dt/dt = \\lambdav.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q20",
                "global_num": 325,
                "section": "Practice Test 1 – E&M",
                "question": "Which of the following is a sketch of the electric field along the yz-plane due to the charged rod after the rod stops moving?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "The field is zero."
                ],
                "answer": "D",
                "explanation": "(D) The electric field lines point perpendicularly toward the line of negative charge, with greater magnitudes closer to the line of charge.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q21",
                "global_num": 326,
                "section": "Practice Test 1 – E&M",
                "question": "Consider the charge distribution shown. The potential is zero at points in which of the following regions (not including \\pm \\infty)?",
                "options": [
                    "region I only",
                    "region II only",
                    "region III only",
                    "regions I and II",
                    "regions I and III"
                ],
                "answer": "B",
                "explanation": "(B) Recall that the potential due to point charges is V = ∑(Qi/4\\pi\\epsilon0r). For the net potential at a point to be zero, the magnitude of the positive potential due to +Q must equal the magnitude of the negative potential due to −Q. This requires that the point be equidistant from the two point charges, which occurs only at one place: exactly between the two charges in region II. Note: In two-dimensional or three-dimensional space, the region where the potential is zero is a line or a plane, respectively.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q22",
                "global_num": 327,
                "section": "Practice Test 1 – E&M",
                "question": "Given the plot of the current flowing through an inductor as a function of time, I(t), which of the graphs shows the magnitude of the voltage across the inductor as a function of time?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "D",
                "explanation": "(D) The magnitude of the voltage across an inductor is given by the equation V = L(dI/dt). Because the current is a sine curve, the magnitude of the voltage must be proportional to the absolute value of a cosine curve with the same period.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q23",
                "global_num": 328,
                "section": "Practice Test 1 – E&M",
                "question": "Which of the following is most closely related to the brightness of a lightbulb? (Assume that all the energy dissipated in a lightbulb is emitted as light energy rather than thermal energy.)",
                "options": [
                    "the current running through the lightbulb",
                    "the voltage across the lightbulb",
                    "the power dissipated by the lightbulb",
                    "the resistance of the lightbulb",
                    "the current density of the lightbulb"
                ],
                "answer": "C",
                "explanation": "(C) If all the energy dissipated in the lightbulb were emitted as light energy, the brightness of the lightbulb would directly reflect the amount of energy dissipated in the lightbulb per time, which is the power of the lightbulb.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q24",
                "global_num": 329,
                "section": "Practice Test 1 – E&M",
                "question": "The figure shows the equipotential lines within a parallel plate capacitor. Which of the circuits could produce this set of equipotential lines?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "E",
                "explanation": "(E) The key here is to remember that the value of potential at any point is meaningless—only differences in potential have significance. Therefore, sketching the capacitor with the left plate having a capacitor of +4 V and the right plate having a potential of 0 V would be physically equivalent to what is shown in the figure. Of all the battery arrays, the only one that produces a net potential difference of 4 V is choice (E). Choices (A) and (C) produce a net potential difference of +2 V with the positive terminal on the right, whereas choices (B) and (D) produce a net potential difference of +2 V with the positive terminal on the left. (To find the equivalent potential difference of any battery array, simply move from one end of the battery array to the other, summing potential jumps along the way.) Note that the equipotential lines are perpendicular to the electric field.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q25",
                "global_num": 330,
                "section": "Practice Test 1 – E&M",
                "question": "The electric field inside a sphere with uniform positive charge density has the following property:",
                "options": [
                    "It is zero.",
                    "It is a nonzero constant.",
                    "It decreases as a function of radial distance from the center of the sphere.",
                    "It increases as a function of radial distance from the center of the sphere.",
                    "It is infinite."
                ],
                "answer": "D",
                "explanation": "(D) Gauss’s law tells us that the electric field is proportional to the enclosed charge. Drawing a gaussian sphere inside the sphere of charge shows us that the field will increase with increasing radial distance.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q26",
                "global_num": 331,
                "section": "Practice Test 1 – E&M",
                "question": "A charged particle moving in the presence of both an electric and a magnetic field moves in a closed path (i.e., a path that begins and ends at the same point). If the energy of the particle at the end of the closed path is 2.0 J greater than its energy when it began the path, which of the following statements is correct?",
                "options": [
                    "The magnetic field performed 2.0 J of work on the particle.",
                    "The magnetic field performed −2.0 J of work on the particle.",
                    "The electric field is conservative.",
                    "The electric field is due to static charges.",
                    "none of the above"
                ],
                "answer": "E",
                "explanation": "(E) The magnetic force is always perpendicular to the particle’s displacement, so the magnetic force never can do any work on any particle. Therefore, choices (A) and (B) are incorrect. Because the magnetic field performs no work on the particle, the electric field must perform work on the particle. However, the fact that the electric field performs net work on the particle as it moves in a closed path indicates that the field is not conservative, ruling out choice (C). Because the electric fields due to static charges are always conservative, this eliminates choice (D). The solution therefore is (E).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q27",
                "global_num": 332,
                "section": "Practice Test 1 – E&M",
                "question": "Consider an electric dipole within a constant electric field as shown. (The dipole consists of two charges of equal magnitude and opposite sign rigidly connected to each other.) Describe the net force and net torque on the dipole.",
                "options": [
                    "The net force is zero, and the net torque is clockwise.",
                    "The net force is zero, and the net torque is counterclockwise.",
                    "The net force is to the right, and the net torque is clockwise.",
                    "The net force is to the right, and the net torque is counterclockwise.",
                    "The net force is to the left, and the net torque is counterclockwise."
                ],
                "answer": "A",
                "explanation": "(A) The force on +Q is equal in magnitude and opposite in direction to the force on −Q, so the net force is zero. However, both forces produce a clockwise torque about the center of the dipole, so the net torque is clockwise.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q28",
                "global_num": 333,
                "section": "Practice Test 1 – E&M",
                "question": "A circular loop of wire of radius r lies in a plane perpendicular to a uniform magnetic field that is changing at a rate of a teslas/second. Which of the following statements correctly describes the power dissipated in the loop as a function of the loop’s radius? (Recall that a wire’s resistance is proportional to its length.)",
                "options": [
                    "The power is independent of r.",
                    "The power is proportional to r.",
                    "The power is proportional to r2.",
                    "The power is proportional to r3.",
                    "The power is inversely proportional to r."
                ],
                "answer": "D",
                "explanation": "(D) The EMF is proportional to the area of the loop, so it is proportional to r2 (mathematically, V = c1r2). The resistance is proportional to the length of the loop, so it is proportional to r (mathematically, R = c2r). Because we know the resistance and the voltage, the most useful formula for power to use here is",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q29",
                "global_num": 334,
                "section": "Practice Test 1 – E&M",
                "question": "If a potential difference of 3 V across a wire that is 2 m long and 0.5 mm in radius yields a current of 10 A, what is the resistivity of the wire?",
                "options": [
                    "3.8 Ω ⋅ m",
                    "1.2 Ω ⋅ m",
                    "2.4 \\times  10−4 Ω ⋅ m",
                    "1.2 \\times  10−7 Ω ⋅ m",
                    "1.2 \\times  10−18 Ω ⋅ m"
                ],
                "answer": "D",
                "explanation": "(D) Resistivity is given by for a wire of radius r. We have also used Ohm’s law to write the resistance R in terms of the voltage and current.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q30",
                "global_num": 335,
                "section": "Practice Test 1 – E&M",
                "question": "Consider the inductor shown in the figure below. If the current I is decreasing in time, what can be said about the potential difference between points A and B?",
                "options": [
                    "Point A is at higher potential.",
                    "Point B is at higher potential.",
                    "The potential difference is zero.",
                    "Potential difference cannot be defined for an inductor.",
                    "Not enough information is given."
                ],
                "answer": "B",
                "explanation": "(B) The potential difference across an inductor is V_B - V_A = -L(dI/dt). Because the current I is decreasing in time, dI/dt < 0, which means V_B - V_A > 0. Therefore, Point B is at higher potential.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q31",
                "global_num": 336,
                "section": "Practice Test 1 – E&M",
                "question": "A dielectric material is inserted between the plates of an isolated charged capacitor. Which of the following is true?",
                "options": [
                    "The potential energy of the capacitor increases.",
                    "The charge of the capacitor decreases.",
                    "The capacitance of the capacitor decreases.",
                    "The voltage of the capacitor increases.",
                    "none of the above"
                ],
                "answer": "E",
                "explanation": "(E) Choice (C): When a dielectric is added to a capacitor, the capacitance increases by a factor of kD. Choice (B): Because the capacitor is isolated, there is nowhere for the charge to go and so it remains constant. Choice (D): Based on the equation Q = CV, the charge remains constant and the capacitance increases, so the voltage decreases. Choice (A): The potential energy can be expressed as Q2/2C. Because the charge remains constant while the capacitance increases, the potential energy decreases. (Note: As the dielectric is added, charges of opposite polarity are induced on the two surfaces of the dielectric adjacent to the capacitor plates. These induced charges attract the charge on the capacitor, drawing the dielectric toward it. As the dielectric is pulled into the capacitor, it can perform positive work on another object as it decreases the capacitor’s potential energy.) Therefore, by elimination the answer is (E).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q32",
                "global_num": 337,
                "section": "Practice Test 1 – E&M",
                "question": "Consider charging a battery with an internal resistance of R and an EMF of V0. (Charging a battery involves moving charge from the negative terminal to the positive terminal.) Which of the following is capable of charging a battery? I. a potential difference greater than V0 II. a potential difference equal to V0 III. a potential difference smaller than V0",
                "options": [
                    "I only",
                    "II only",
                    "III only",
                    "I and II only",
                    "I, II, and III"
                ],
                "answer": "A",
                "explanation": "(A) Consider the schematic in the figure, which shows a battery being charged. In order for the battery to be charged, the current must flow in the direction indicated. This requires the potential difference from A to B to be V0 + IR (with B at higher potential). Thus, to make current flow in the correct direction, a potential greater than V0 is required.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q33",
                "global_num": 338,
                "section": "Practice Test 1 – E&M",
                "question": "An electron is traveling through a region of space with electric and magnetic fields as shown (the velocity is in the plane of the E and B vectors). The force exerted on the electron has components in what directions?",
                "options": [
                    "the +y-direction and the +z-direction",
                    "the −y-direction and the −z-direction",
                    "the −y-direction and the +z-direction",
                    "the +y-direction and the −z-direction",
                    "none of the above"
                ],
                "answer": "C",
                "explanation": "(C) Because an electron has a negative charge, the electric force points antiparallel to the electric field, in the −y-direction. Similarly, because the particle is negative, the magnetic force points antiparallel to the direction indicated by the right-hand rule, in the +z-direction.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q34",
                "global_num": 339,
                "section": "Practice Test 1 – E&M",
                "question": "Consider an infinite line of positive charge that has a varying charge density. Very close to the line of charge, in which direction does the electric field approximately point?",
                "options": [
                    "directly toward the line of charge",
                    "directly away from the line of charge",
                    "parallel to the line of charge, pointing in the direction of increasing charge density",
                    "parallel to the line of charge, pointing in the direction of decreasing charge density",
                    "The field is zero."
                ],
                "answer": "B",
                "explanation": "(B) Very close to the line of charge, the variation in the charge density with position is not apparent because the field is dominated by the charge located very close to the field point. The distance from the line of charge to the field point is small compared to the rate at which the charge density is changing. This effectively constant charge density produces a field pointing away from the line of charge (as does any uniform line of positive charge). This is analogous to the way the electric field is perpendicular to a surface charge distribution very close to an infinite surface even if the surface charge density is not constant.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q35",
                "global_num": 340,
                "section": "Practice Test 1 – E&M",
                "question": "Consider a wire loop moving through a region of magnetic field pointing into the page as shown. Which is a graph of the magnetic flux through the loop as a function of position (designating inward flux as negative)?",
                "options": [
                    "Linear positive flux increase, plateau, linear return to zero",
                    "Abrupt step function jumping to negative flux and returning to zero",
                    "Positive-valued upward trapezoidal flux profile",
                    "Trapezoidal pulse with negative flux (steady decrease, plateau, steady return to zero)",
                    "Sinusoidal alternating flux oscillation"
                ],
                "answer": "D",
                "explanation": "(D) As the loop enters the field, the flux into the page (negative flux) steadily increases in magnitude, remains constant while the loop is completely within the magnetic field, and then steadily approaches zero as the loop exits the field. The discontinuities and plateaus featured in choices (A), (B), and (E) are similar to what the current or the EMF would look like as a function of position. Choice (C) is the same as choice (D) except that the sign is incorrect. (Flux out of the page is designated as positive, so the loop experiences negative flux.) Free-Response Electricity and Magnetism I (a) Using the relationship between voltage and electric field for a parallel plate capacitor, V = Ed, the minimum distance is (b) By the same equation, VBD = EBDd. (c) See the figure. The capacitor-charging stage is exactly the same as in an RC circuit, except that when the breakdown voltage is reached, the capacitor rapidly discharges (as if it were shorted through a small resistance) and then repeats the charging step. (d) Recall the equation for the charge on a charging capacitor: where Qf is the charge on the capacitor when it is fully charged. Using the relationship Q = CV, we can convert this to an equation expressing voltage as a function of time: The time T between discharges is given by the duration of a single charging step (if we assume the discharge is essentially instantaneous), which is the amount of time it takes for the charging capacitor to reach the breakdown voltage: Solving for T yields (e) The energy stored in the capacitor just before dielectric breakdown is given by the equation . (f) Because the battery is disconnected, the charge density on the plates is fixed (and thus, the charge density remains fixed). Since the electric field inside the capacitor depends only on the charge density of the plates, it is not affected and no dielectric breakdown occurs. Electricity and Magnetism II (a) Because the charge density is not uniform, we must integrate. Mirroring the spherical symmetry of the charge distribution, we use as our differential volume spherical shells: (b) (i) We apply Gauss’s law, noting that the enclosed charge is negative, which causes the electric field to point inward (antiparallel to the directed area vector) and yields a negative flux (note that E signifies the magnitude of the electric field) Units check: The constant c has units of C/m, so the units of the numerator in the field expression are coulombs. We then recognize the usual dimensions of electric field: charge/\\epsilon0(distance2). (b) (ii) At r < a, we have to integrate to obtain the enclosed charge: Again applying Gauss’s law, Units check: If we multiply the numerator and denominator by length, we recover the usual form of the electric field, charge/\\epsilon0(distance2), as in (b)(i). (b) (iii) Both expressions for r > a and r < a agree that the magnitude of the field at r = a is Recall that because there are no infinite charge densities (no point charges or surface charge densities), the electric field must be continuous, so the expressions for field in different regions must match up at the region’s border. (c) Taking the line integral of V = − \\int  E ⋅ dr along the x-axis from x = \\infty to x = a yields (because the electric field points to the left, Ex = −ca/\\epsilon0x2). Evaluating the integral, Sign check: Based on the equation V = \\int  dQ⁄4\\pi \\epsilon0 r, because the charge is negative, the potential should be negative. (d) Because the electric field outside the sphere is identical to that produced by a point charge located at the center of the sphere, the potential is also equal to that produced by a point charge: Using the expression for Q calculated in part (a), Electricity and Magnetism III (a) Electric potential energy in the capacitor is converted to kinetic energy: (b) B1 and B3 point into the page; B2 points out of the page (remember that the charge is negative!). (c) The magnetic force provides the centripetal force. (Here the sin \\theta term in the cross product is 1.) (d) Given that the particle manages to make it through the first region, its mass must satisfy the equation above. As a particle traverses the semicircles, its speed does not change. (The magnetic field does no work because it is perpendicular to the displacement.) Therefore, equations with the same form can be written for the other two semicircles, with the results Because the speed of the particle is constant throughout its trajectory, we can combine these equations: Therefore, r2 = r1(B1/B2) and r3 = r1(B1/B3). (e) From part (c), you find that . Thus, to obtain a linear relationship, you should plot V versus r2 or vice versa. (f) Plot V versus r2 (see the figure below). Fitting to a straight line gives the following slope: You expect the slope of the line to be given by . With B1 = 0.01 T, you find . The accepted value is .",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "full-em-1-q36",
                "global_num": 182,
                "section": "Ch10: Electrostatics",
                "question": "Two experiments are performed using a pair of solid metal spheres connected by a switch, as shown in Figure 10.9. Both spheres are grounded before each experiment so that they initially have no charge. Figure 10.9 Experiment I: A positively charged rod is brought near sphere A while the switch is closed, the switch is opened, and the rod is then removed. Experiment II: A positively charged rod is touched to sphere A while the switch is closed, the switch is opened, and the rod is then removed. Which of the following describes the charge on the spheres after the two experiments?",
                "options": [
                    "After experiment I both spheres have no charge; after experiment II both spheres are positively charged.",
                    "After experiment I sphere A is negatively charged and sphere B is positively charged; after experiment II sphere A is positively charged and sphere B is negatively charged.",
                    "After experiment I sphere A is negatively charged and sphere B is positively charged; after experiment II both spheres are positively charged.",
                    "After both experiments, both spheres are positively charged.",
                    "After both experiments, sphere A is positively charged and sphere B is negatively charged."
                ],
                "answer": "C",
                "explanation": "(C) Experiment I involves electrostatic induction. When the positively charged rod is brought near sphere A, it attracts electrons from both spheres, causing sphere A to have a slight negative charge and sphere B to have a slight positive charge. Because the switch is opened before the rod is removed, the charge never has a chance to redistribute itself, so after the experiment is over, sphere A is left negatively charged and sphere B is left positively charged. Experiment II involves conduction. The rod removes a large negative charge from the two-sphere system, leaving both spheres with a large net positive charge. Although induction effects cause the positive charge on sphere B to be slightly larger than the charge on sphere A, in general conduction imparts a much greater charge than induction, so the net charge of both spheres after the switch is opened is positive. Note that choice (D) can be immediately eliminated by conservation of charge. Because the rod never touches the sphere system in experiment I, the amount of charge on the two spheres together must remain constant; it is impossible for both to have a positive or a negative charge at any point during or after experiment I.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q37",
                "global_num": 183,
                "section": "Ch10: Electrostatics",
                "question": "Two positive charges +Q are located on the y-axis at (0, a) and (0, −a), and a third charge −q is on the positive x-axis at (x, 0). (a) Find the electric field along the x-axis as a function of position, E(x), due to the positive charges. (b) Find the force on −q as a function of its position, F(x). (c) Using V = ∑(Qi/4\\pi\\epsilon0ri), calculate the potential energy function, U(x).",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "C",
                "explanation": "(C) Experiment I involves electrostatic induction. When the positively charged rod is brought near sphere A, it attracts electrons from both spheres, causing sphere A to have a slight negative charge and sphere B to have a slight positive charge. Because the switch is opened before the rod is removed, the charge never has a chance to redistribute itself, so after the experiment is over, sphere A is left negatively charged and sphere B is left positively charged. Experiment II involves conduction. The rod removes a large negative charge from the two-sphere system, leaving both spheres with a large net positive charge. Although induction effects cause the positive charge on sphere B to be slightly larger than the charge on sphere A, in general conduction imparts a much greater charge than induction, so the net charge of both spheres after the switch is opened is positive. Note that choice (D) can be immediately eliminated by conservation of charge. Because the rod never touches the sphere system in experiment I, the amount of charge on the two spheres together must remain constant; it is impossible for both to have a positive or a negative charge at any point during or after experiment I.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q38",
                "global_num": 184,
                "section": "Ch10: Electrostatics",
                "question": "Which of the three distributions in Figure 10.10 has a point or points where the potential is zero (excluding \\pm \\infty but assuming that the potential equals zero at these latter points)? Figure 10.10",
                "options": [
                    "distribution I only",
                    "distribution II only",
                    "distribution III only",
                    "distributions I and II, only",
                    "distributions I, II, and III"
                ],
                "answer": "B",
                "explanation": "(B) For any distribution of two point charges, the charges must have opposite signs for there to be a location(s) where the potential is zero. (Otherwise, both charges will never be able to cancel out each other’s contribution.) In distribution II, the potential is zero in between the two charges, much closer to the −q charge because this charge has a smaller magnitude (which can be compensated for by having a greater 1/r term in its potential contribution), and also to the left of the −q charge. This behavior is illustrated in Figure 10.17, which shows the potential due to point charges. Figure 10.17",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q39",
                "global_num": 185,
                "section": "Ch10: Electrostatics",
                "question": "Two point charges +Q are located on the x-axis at (−d, 0) and (d, 0). (a) Sketch the potential along the x-axis as a function of position, V(x). (b) Sketch the electric field along the x-axis as a function of position, E(x). A charge of +q and mass m is then placed at the origin. (c) What is the force on +q due to the two +Q charges? (d) If the charge +q is given a nudge in the y-direction, it will move along the y-axis away from the origin out to infinity. What will its speed be when it reaches y = \\infty?",
                "options": [
                    "Directly upward toward the top of the page",
                    "Directly downward toward the bottom of the page",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "Zero net field / magnitude"
                ],
                "answer": "B",
                "explanation": "(B) For any distribution of two point charges, the charges must have opposite signs for there to be a location(s) where the potential is zero. (Otherwise, both charges will never be able to cancel out each other’s contribution.) In distribution II, the potential is zero in between the two charges, much closer to the −q charge because this charge has a smaller magnitude (which can be compensated for by having a greater 1/r term in its potential contribution), and also to the left of the −q charge. This behavior is illustrated in Figure 10.17, which shows the potential due to point charges. Figure 10.17",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q40",
                "global_num": 186,
                "section": "Ch10: Electrostatics",
                "question": "Consider the potential vs position function shown in Figure 10.11 (the potential asymptotically approaches zero as x goes to + infinity or − infinity). At which of the points—A, B, C, D, or E—does a positive charge feel the greatest force in the +x-direction? Figure 10.11",
                "options": [
                    "point A",
                    "point B",
                    "point C",
                    "point D",
                    "point E"
                ],
                "answer": "B",
                "explanation": "(B) The electric field is the negative slope of the potential curve, Ex = −dV/dx, so the place where the force to the right (the positive force) is maximized is the place where the slope of the potential curve has a negative value with the greatest magnitude, at point B.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q41",
                "global_num": 187,
                "section": "Ch10: Electrostatics",
                "question": "A point charge Q = 1.0 \\times  10−6 C is suspended by a vertical spring with spring constant k = 100 N/m as shown in Figure 10.15. The charge has mass 1.5 kg, and it hangs 10.0 cm above a table when in equilibrium. Suppose that at time t = 0, the charge is pulled down by 5.0 cm and then released from rest. Ignore any frictional forces. Figure 10.15 (a) To what maximum height above the table will the charge reach as it oscillates? (b) What is the angular frequency \\omega of the oscillatory motion? (c) Find the height of the charge above the table as a function of time. (d) Find the electric field (direction and magnitude) produced by the charge at point P on the table directly below the charge as a function of time. (e) Find the electric potential at point P as a function of time.",
                "options": [
                    "Directly upward toward the top of the page",
                    "Directly downward toward the bottom of the page",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "Zero net field / magnitude"
                ],
                "answer": "B",
                "explanation": "(B) The electric field is the negative slope of the potential curve, Ex = −dV/dx, so the place where the force to the right (the positive force) is maximized is the place where the slope of the potential curve has a negative value with the greatest magnitude, at point B.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q42",
                "global_num": 188,
                "section": "Ch10: Electrostatics",
                "question": "In the five charge distributions shown in Figure 10.12, all have identical square geometry and all charges have identical magnitudes q. In how many of the charge distributions is the electric field zero at the center of the square? Figure 10.12",
                "options": [
                    "one",
                    "two",
                    "three",
                    "four",
                    "five"
                ],
                "answer": "C",
                "explanation": "(C) Because of symmetry, distributions (b), (d), and (e) all have an electric field of zero at the center of the square. Said another way: If we pair charges along the diagonals of the square, we will see that in distributions (b), (d), and (e), each pair consists of two charges of the same sign and hence produce a net field of zero at the center of the square.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q43",
                "global_num": 189,
                "section": "Ch10: Electrostatics",
                "question": "A charge of −Q is located at the origin, and two charges of +Q are located along the y-axis at (0, −a) and (0, a). (a) Calculate the electric field along the x-axis, E(x). (b) Calculate the potential along the x-axis, V(x). (c) Calculate the approximate form of E(x) for very small x. What physical situation approximately similar to the present one would give the same expression for E(x)? (d) Calculate the approximate form of E(x) for very large x. What physical situation approximately similar to the present one would give the same expression for E(x)?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "C",
                "explanation": "(C) Because of symmetry, distributions (b), (d), and (e) all have an electric field of zero at the center of the square. Said another way: If we pair charges along the diagonals of the square, we will see that in distributions (b), (d), and (e), each pair consists of two charges of the same sign and hence produce a net field of zero at the center of the square.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q44",
                "global_num": 190,
                "section": "Ch10: Electrostatics",
                "question": "The axis of the cone in Figure 10.13 lies on the y-axis. The cone has a uniform charge density. Based on symmetry considerations alone, in what direction(s) can the electric field at the origin point? (The origin lies within the cone along its axis of symmetry.) Figure 10.13",
                "options": [
                    "the x-axis",
                    "the y-axis",
                    "the z-axis",
                    "anywhere along the xy-plane",
                    "anywhere along the yz-plane"
                ],
                "answer": "B",
                "explanation": "(B) Imagine describing to a friend what direction the electric field points; the only description you could give would be “toward the tip of the cone” or “away from the tip of the cone” (i.e., along the y-axis).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "full-em-1-q45",
                "global_num": 191,
                "section": "Ch10: Electrostatics",
                "question": "Consider a rod of length 2ℓ containing a uniformly distributed charge +Q. The rod lies on the x-axis with its center at the origin. (a) Calculate the potential everywhere along the y-axis. (b) What is the value of the potential as y approaches infinity? Does this make sense? (c) What is the value of the potential at the origin? Does this make sense? Was the same answer obtained in Example 10.1? Why or why not? (d) What is the direction of the electric field along the positive y-axis? What is the direction of the electric field along the negative y- axis? You should be able to answer this question without any performing any calculations.",
                "options": [
                    "Directly upward toward the top of the page",
                    "Directly downward toward the bottom of the page",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "Zero net field / magnitude"
                ],
                "answer": "B",
                "explanation": "(B) Imagine describing to a friend what direction the electric field points; the only description you could give would be “toward the tip of the cone” or “away from the tip of the cone” (i.e., along the y-axis).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            }
        ]
    }
};
