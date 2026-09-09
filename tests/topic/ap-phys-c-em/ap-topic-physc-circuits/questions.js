// Specific Question Bank for Test: ap-topic-physc-circuits
const AP_TEST_DATA = {
    "ap-topic-physc-circuits": {
        "title": "AP Physics C: DC Circuits, Resistor Networks & Kirchhoff's Rules",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "DC Circuits",
        "timeLimitMinutes": 30,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-physc-circuits-q1",
                "global_num": 221,
                "section": "Ch13: Circuits",
                "question": "The equivalent resistance of the circuit in Figure 13.14 is Figure 13.14",
                "options": [
                    "4R",
                    "2R",
                    "R",
                    "R/2",
                    "R/4"
                ],
                "answer": "C",
                "explanation": "(C) The parallel combination of the two resistors with resistances R and 2R has an equivalent resistance of Adding the resistor R, which is in series with this parallel combination, yields an equivalent resistance of R.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q2",
                "global_num": 222,
                "section": "Ch13: Circuits",
                "question": "In an RC series circuit connected to a constant DC voltage source V0, an initially uncharged capacitor C is charged through a resistor R. At time t = 0 the switch is closed. What is the current I(t) through the circuit as a function of time t?",
                "options": [
                    "I(t) = (V0 / R) * (1 - e^{-t / (RC)})",
                    "I(t) = (V0 / R) * e^{-t / (RC)}",
                    "I(t) = (V0 / R) * e^{-t / (2RC)}",
                    "I(t) = V0 C * e^{-t / (RC)}",
                    "I(t) is constant and equal to V0 / R"
                ],
                "answer": "B",
                "explanation": "By Kirchhoff's loop rule: V0 - I R - q/C = 0. Differentiating with respect to t (since dq/dt = I): -R (dI/dt) - I/C = 0 ==> dI/dt = -I / (RC). Integrating from t = 0 where the uncharged capacitor has q(0) = 0 and initial current I(0) = V0/R: I(t) = (V0 / R) e^{-t / (RC)}.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q3",
                "global_num": 223,
                "section": "Ch13: Circuits",
                "question": "A battery with EMF V0 and internal resistance r is connected across an external variable load resistor R. For what value of R is the power delivered to the external load maximized?",
                "options": [
                    "R = 0",
                    "R = r / 2",
                    "R = r",
                    "R = 2r",
                    "R approaches infinity"
                ],
                "answer": "C",
                "explanation": "The current is I = V0 / (R + r). The power dissipated in the load is P(R) = I^2 R = V0^2 R / (R + r)^2. To find the maximum, set dP/dR = 0: dP/dR = V0^2 [ (R+r)^2 - 2R(R+r) ] / (R+r)^4 = V0^2 (r - R) / (R+r)^3 = 0 ==> R = r. This is the Maximum Power Transfer Theorem.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q4",
                "global_num": 224,
                "section": "Ch13: Circuits",
                "question": "Twelve identical resistors, each of resistance R, are connected along the twelve edges of a cube. What is the equivalent resistance R_eq between two diametrically opposite corners of the cube?",
                "options": [
                    "R / 2",
                    "5/6 R",
                    "3/4 R",
                    "7/12 R",
                    "R"
                ],
                "answer": "B",
                "explanation": "By symmetry, when a current I enters one corner and exits the diametrically opposite corner: At the entry corner, current splits equally into 3 edges, each carrying I/3. At each of the next vertices, current splits into 2 edges, each carrying (I/3)/2 = I/6 (6 edges total). At the exit corner, 3 edges recombine, each carrying I/3. The total voltage drop across opposite corners is Delta V = (I/3)R + (I/6)R + (I/3)R = (2/6 + 1/6 + 2/6) I R = (5/6) I R. Therefore, R_eq = Delta V / I = 5/6 R.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q5",
                "global_num": 225,
                "section": "Ch13: Circuits",
                "question": "For the circuit in Figure 13.15, which of the following is true? Figure 13.15",
                "options": [
                    "VB − VA = +5 V",
                    "VB − VA = +3 V",
                    "VB − VA = −2 V",
                    "VB − VA = −3 V",
                    "VB − VA = −5 V"
                ],
                "answer": "B",
                "explanation": "(B) This problem involves Kirchhoff’s loop rule. First, Kirchhoff’s node equation indicates that the current flowing down the 1 Ω resistor is 2 A. Then, writing a Kirchhoff’s loop equation containing points A and B in either possible loop yields the correct answer. For example, we will use the outer loop and move clockwise. Starting at point A and summing potential jumps as we move from point A to point B yields Therefore,",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q6",
                "global_num": 226,
                "section": "Ch13: Circuits",
                "question": "In a series RC circuit, an uncharged capacitor of capacitance C is charged through a resistor R by a battery of voltage V. After a very long time (t >> RC), what is the total energy supplied by the battery, and how much of that energy is stored in the capacitor?",
                "options": [
                    "Battery supplies 1/2 C V^2, and capacitor stores 1/2 C V^2",
                    "Battery supplies C V^2, and capacitor stores 1/2 C V^2 (with 1/2 C V^2 dissipated as heat in R)",
                    "Battery supplies C V^2, and capacitor stores C V^2",
                    "Battery supplies 2 C V^2, and capacitor stores C V^2",
                    "Battery supplies C V^2, and capacitor stores 1/4 C V^2"
                ],
                "answer": "B",
                "explanation": "When fully charged, the capacitor carries charge Q = C V. The total work done by the battery is W = Q V = (C V) V = C V^2. The energy stored in the electric field of the capacitor is U_C = 1/2 C V^2. By conservation of energy, the remaining energy W - U_C = 1/2 C V^2 is dissipated as thermal energy in the resistor regardless of the value of R.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q7",
                "global_num": 227,
                "section": "Ch13: Circuits",
                "question": "What is the equivalent voltage of the two batteries arranged in series in Figure 13.16? Figure 13.16",
                "options": [
                    "2 V, with point A at higher potential",
                    "2 V, with point B at higher potential",
                    "4 V, with point A at higher potential",
                    "4 V, with point B at higher potential",
                    "It is not valid to treat the two batteries as a single equivalent battery."
                ],
                "answer": "B",
                "explanation": "(B) Summing the potential jumps indicates that point B always has a potential 2 V higher than point A. Therefore, the two batteries together have the same effect as one 2 V battery with its positive terminal at point B and its negative terminal at point A.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q8",
                "global_num": 228,
                "section": "Ch13: Circuits",
                "question": "How much power is dissipated in the circuit discussed in question 4?",
                "options": [
                    "P = 20/3R",
                    "P = 12/5R",
                    "P = 6/5R",
                    "P = 3/5R",
                    "none of the above Figure 13.17"
                ],
                "answer": "B",
                "explanation": "(B) . This problem illustrates how simplifying a circuit and calculating equivalent voltages and resistances simplifies calculating quantities such as power.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q9",
                "global_num": 229,
                "section": "Ch13: Circuits",
                "question": "In the circuit shown in Figure 13.17, capacitor C1 is initially charged and capacitor C2 is initially uncharged when the switch is closed at t =",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) Initially the current is equal to I = V/R = Q/C1R (because C2 acts as a short circuit and C1 initially has voltage V = Q/C1). The current at equilibrium is zero. Therefore, the current exponentially decays from a finite value to zero, as described by graph (A).",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q10",
                "global_num": 230,
                "section": "Ch13: Circuits",
                "question": "Which of the following is Kirchhoff’s loop equation for the circuit shown in Figure 13.17? (I is designated as the counterclockwise current.)",
                "options": [
                    "−Q1/C1 − IR + Q2/C2 = 0",
                    "Q1/C1 − IR + Q2/C2 = 0",
                    "−Q1/C1 + IR − Q2/C2 = 0",
                    "Q1/C1 − IR − Q2/C2 = 0",
                    "Q1/C1 + IR + Q2/C2 = 0 Figure 13.18"
                ],
                "answer": "D",
                "explanation": "(D) Beginning at the top right corner of the circuit and moving counterclockwise: 1. The potential jump across C1 is positive because we are going from the negative plate to the positive plate (which is at a higher potential). 2. The potential jump across the resistor is negative because we are going in the same direction as the current (which flows counterclockwise). 3. The potential jump across C2 is negative because we are going from the positive plate to the negative plate. Note: Of course, if you choose to go in the opposite direction, all the signs will be reversed and an equivalent equation will be obtained (which can be converted to the equation in choice (D) by multiplying both sides by −1).",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q11",
                "global_num": 231,
                "section": "Ch13: Circuits",
                "question": "A capacitor is discharged through a resistor. If the energy stored in the capacitor decreases to 1/4 of its initial value in 10 seconds, what is the time constant tau = RC of the circuit?",
                "options": [
                    "10 s",
                    "10 / ln(2) s",
                    "10 / ln(4) s",
                    "5 s",
                    "20 s"
                ],
                "answer": "B",
                "explanation": "The charge on the discharging capacitor is q(t) = Q0 e^{-t / tau}. The stored energy is U(t) = q(t)^2 / (2C) = U0 e^{-2t / tau}. Given U(10) / U0 = 1/4: e^{-20 / tau} = 1/4 ==> e^{20 / tau} = 4 ==> 20 / tau = ln(4) = 2 ln(2) ==> tau = 20 / (2 ln(2)) = 10 / ln(2) s.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q12",
                "global_num": 232,
                "section": "Ch13: Circuits",
                "question": "The capacitor in the circuit in Figure 13.20 is uncharged when the switch is closed at t = 0. Figure 13.20 How much energy is dissipated in the circuit from t = 0 to t = \\infty?",
                "options": [
                    "the energy stored in the capacitor, CV2",
                    "the energy stored in the capacitor and the energy dissipated in the resistor, equal to CV2",
                    "the energy stored in the capacitor, \\frac{1}{2}CV^2",
                    "the energy stored in the capacitor and the energy dissipated in the resistor, equal to 2CV2",
                    "none of the above"
                ],
                "answer": "E",
                "explanation": "(E) Although the rate at which energy is dissipated by the RC loop of the circuit is finite, energy continues to be dissipated by the 2R resistor forever, so the energy dissipated from t = 0 to t = \\infty is undefined (infinite).",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q13",
                "global_num": 233,
                "section": "Ch13: Circuits",
                "question": "An inductor of inductance L and a resistor of resistance R are connected in series with a switch and a battery of EMF V0. The switch is closed at t = 0. What is the rate of change of current dI/dt at the instant t = 0?",
                "options": [
                    "Zero",
                    "V0 / L",
                    "V0 / R",
                    "V0 / (R L)",
                    "Infinity"
                ],
                "answer": "B",
                "explanation": "Kirchhoff's loop rule for the RL circuit is V0 - I R - L (dI/dt) = 0. At t = 0, the current through the inductor cannot change instantaneously from zero, so I(0) = 0. The equation becomes V0 - 0 - L (dI/dt) = 0 ==> dI/dt = V0 / L.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q14",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "In an LC circuit consisting of an ideal inductor L and an ideal capacitor C with no resistance, the charge on the capacitor oscillates with time. What is the period T of the electromagnetic oscillations?",
                "options": [
                    "2 pi sqrt(L C)",
                    "1 / (2 pi sqrt(L C))",
                    "2 pi L / C",
                    "2 pi sqrt(L / C)",
                    "pi sqrt(L C)"
                ],
                "answer": "A",
                "explanation": "The differential equation governing the LC circuit is L (d^2 q / dt^2) + q/C = 0 ==> d^2 q / dt^2 + (1 / (L C)) q = 0. This is simple harmonic motion with angular frequency omega = 1 / sqrt(L C). The oscillation period is T = 2 pi / omega = 2 pi sqrt(L C).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-circuits-q15",
                "global_num": 37,
                "section": "Diagnostic Test – E&M",
                "question": "A charged particle is launched into a region of uniform magnetic field. Given that the particle’s initial velocity has components parallel and perpendicular to the magnetic field, describe the particle’s path qualitatively.",
                "options": [
                    "a straight line",
                    "a circle",
                    "a helical (corkscrew) path",
                    "a parabolic path",
                    "none of the above"
                ],
                "answer": "C",
                "explanation": "(C) See the discussion of the motion of particles within magnetic fields in Chapter 14.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-circuits-q16",
                "global_num": 38,
                "section": "Diagnostic Test – E&M",
                "question": "A point charge +Q is located at a fixed distance from a sphere. Compare the magnitude of the attractive force on the sphere if the sphere is (1) metal with net charge −Q, (2) metal with no net charge, (3) an insulator with net charge −Q, or (4) an insulator with no net charge.",
                "options": [
                    "charged metal = charged insulator > uncharged metal = uncharged insulator",
                    "charged metal > charged insulator > uncharged metal > uncharged insulator",
                    "charged insulator > charged metal > uncharged insulator > uncharged metal",
                    "charged insulator > charged metal > uncharged metal = uncharged insulator",
                    "charged insulator = charged metal > uncharged metal > uncharged insulator"
                ],
                "answer": "B",
                "explanation": "(B) This is a question about electrostatic induction. When a positive point charge is placed near a metal sphere (charged or uncharged), it attracts mobile electrons in the metal, causing the metal to become polarized such that more negative charge is on the side closer to the positive point charge and more positive charge is on the side farther away from the positive point charge. Because this charge redistribution results in moving negative charge closer to the positive point charge and moving positive charge farther away from the positive point charge, it increases the attractive force between the metal sphere and the positive point charge. Therefore, compared to an insulating sphere with the same net charge, a metal sphere always experiences a greater attractive force (such that charged metal > charged insulator and uncharged metal > uncharged insulator). Because this inductive effect is small compared to the effect of actually putting net charge −Q on the sphere, charged insulator > uncharged metal.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-circuits-q17",
                "global_num": 39,
                "section": "Diagnostic Test – E&M",
                "question": "A bar moves to the right through a magnetic field as shown (the magnetic field points into the page). What is the potential difference between points A and B after equilibrium is established in the bar?",
                "options": [
                    "The difference is v2Bd, with A at higher potential.",
                    "The difference is v2Bd, with B at higher potential.",
                    "The difference is vBd, with A at higher potential.",
                    "The difference is vBd, with B at higher potential.",
                    "Because there is no loop, there is no flux, so there is no potential difference."
                ],
                "answer": "C",
                "explanation": "(C) The charges within the bar are moving in a magnetic field, so they feel a magnetic force. Using the conventional-current description, positive charges feel an upward force, causing positive charge to accumulate at the top end of the bar (leaving negative charge on the bottom end of the bar). This charge continues to accumulate until the electric force created by the charge imbalance cancels the magnetic force, mathematically qE = qvB. The magnitude of the potential difference between points A and B is then |V | = |−\\int E \\cdot  dr| = |vBd|. The electric field points down (producing a force that opposes the magnetic force), and recalling that electric fields point from high to low potential, we see that point A is at the higher potential. Further information about motional EMF can be found in Example 15.6.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-circuits-q18",
                "global_num": 40,
                "section": "Diagnostic Test – E&M",
                "question": "Suppose that the electric potential in a region of space is a constant. What can you conclude about the magnitude of the electric field in this region?",
                "options": [
                    "It is a nonzero constant.",
                    "It is zero.",
                    "It is proportional to the distance from the origin.",
                    "It is given by",
                    "Not enough information is given. Questions 6–8 refer to a circular region of radius a with a uniform magnetic field pointing into the page that is increasing at a constant rate as shown. A circular loop of wire of radius r is centered on the middle of the region."
                ],
                "answer": "B",
                "explanation": "(B) The electric field is the negative derivative (with respect to the spatial coordinate) of the potential. Thus, with a constant potential the electric field must be zero.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-circuits-q19",
                "global_num": 41,
                "section": "Diagnostic Test – E&M",
                "question": "Which of the graphs plots the induced EMF in the circular loop of wire shown as a function of its radius r?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "C",
                "explanation": "(C) The induced EMF depends on the change in the enclosed flux. Because the magnetic field is uniform, and changing at a constant rate, Therefore, the induced EMF depends only on the area of the loop through which magnetic field lines pass. For r < a, the area within the loop exposed to the magnetic field is simply the entire area of the loop, which is a quadratic function, A(r) = \\pir2. For r > a, increasing r does not increase the area exposed to the magnetic field (because the magnetic field through the additional area is zero). Therefore, for r > a the induced EMF is constant. The only graph that is quadratic for small r and then constant is choice (C). Calculating the induced EMF due to a magnetic field via Faraday’s law is discussed in Chapter 15.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-circuits-q20",
                "global_num": 42,
                "section": "Diagnostic Test – E&M",
                "question": "Given that the resistance of the loop is proportional to the loop’s circumference, which of the graphs seen in question 6 shows the induced current as a function of the radius of the loop?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) The current is given by I = V/R. The resistance is proportional to the circumference of the loop, 2\\pir. Therefore, for r < a, V is proportional to r2 (as discussed in question 6), and 1/R is proportional to 1/r, so the product I = V/R is proportional to r (and thus its graph is a line passing through the origin). For r > a, V is constant and 1/R is proportional to 1/r, so the product I = V/R is inversely proportional to r. The only graph that satisfies these conditions is choice (A).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            }
        ]
    }
};
