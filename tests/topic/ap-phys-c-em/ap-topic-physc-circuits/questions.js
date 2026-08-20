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
                    "R",
                    "R"
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
                "question": "(a) In the circuit shown in Figure 13.22, calculate the current through each branch of the circuit. (b) Determine the direction of current through resistor R3. (c) Calculate the potential difference Va − Vb. (d) Calculate the equivalent resistance of this circuit. Figure 13.22",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) The parallel combination of the two resistors with resistances R and 2R has an equivalent resistance of Adding the resistor R, which is in series with this parallel combination, yields an equivalent resistance of R.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q3",
                "global_num": 223,
                "section": "Ch13: Circuits",
                "question": "If a battery with EMF V0 and internal resistance rinternal is connected to a resistor with resistance R, what is the terminal voltage of the battery (the voltage across the two terminals of the actual battery)?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) The current flowing through the circuit is the EMF of the battery divided by the total resistance of the circuit (including the resistance within the battery itself): The terminal voltage across the battery is then Alternative solution: If you understand the principle of internal resistance, you can get the correct answer without doing any algebra. The terminal voltage is never greater than the EMF, so choice (E) is incorrect. Also, the terminal voltage cannot be negative in this situation (although the internal resistance can decrease the battery’s terminal voltage, it can never change the polarity of the battery), so choice (D) is incorrect. The expression inside the parentheses in choice (C) has mixed units (the 1 has no units, and the ratio has units of resistance); the complete expression also has mixed units, and so choice (C) is incorrect. To distinguish between the remaining choices, (A) and (B), consider what happens when the external resistance R approaches zero. When this happens, the only resistance in the circuit is internal to the battery. The two terminals of the battery are connected by a resistanceless wire, and thus the two terminals must be at the same potential; that is, the terminal voltage is zero. This eliminates choice (A), which approaches V0 as R approaches zero. Therefore, choice (B) is the correct answer.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q4",
                "global_num": 224,
                "section": "Ch13: Circuits",
                "question": "(a) A battery is connected to the two ends of the resistor network shown in Figure 13.23. What is the current flowing through the 5 Ω resistor? (b) Find the equivalent resistance of the network. (c) If the battery has a voltage of 9 V, how much current will flow through the network? Figure 13.23",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) The current flowing through the circuit is the EMF of the battery divided by the total resistance of the circuit (including the resistance within the battery itself): The terminal voltage across the battery is then Alternative solution: If you understand the principle of internal resistance, you can get the correct answer without doing any algebra. The terminal voltage is never greater than the EMF, so choice (E) is incorrect. Also, the terminal voltage cannot be negative in this situation (although the internal resistance can decrease the battery’s terminal voltage, it can never change the polarity of the battery), so choice (D) is incorrect. The expression inside the parentheses in choice (C) has mixed units (the 1 has no units, and the ratio has units of resistance); the complete expression also has mixed units, and so choice (C) is incorrect. To distinguish between the remaining choices, (A) and (B), consider what happens when the external resistance R approaches zero. When this happens, the only resistance in the circuit is internal to the battery. The two terminals of the battery are connected by a resistanceless wire, and thus the two terminals must be at the same potential; that is, the terminal voltage is zero. This eliminates choice (A), which approaches V0 as R approaches zero. Therefore, choice (B) is the correct answer.",
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
                "question": "A battery of voltage V is attached to a resistor and an uncharged capacitor at t = 0. The current is given by the function I(t) = I0e−t/\\tau. Express all answers in terms of I0, V, and \\tau. (a) What is the resistance of the resistor? (b) What is the capacitance of the capacitor? (c) Calculate the magnitude of charge on the capacitor as a function of time, Q(t), by integration. (d) Which quantities should be plotted on the grid below to yield a straight line whose slope equals −1/\\tau? (e) Assuming that V = 10 V, R = 50,000 Ω, and C = 200 \\muF, plot the straight line whose slope equals −1/\\tau for the time range 0 < t < 3\\tau. Scale and label the axes, including units.",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) This problem involves Kirchhoff’s loop rule. First, Kirchhoff’s node equation indicates that the current flowing down the 1 Ω resistor is 2 A. Then, writing a Kirchhoff’s loop equation containing points A and B in either possible loop yields the correct answer. For example, we will use the outer loop and move clockwise. Starting at point A and summing potential jumps as we move from point A to point B yields Therefore,",
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
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
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
                "question": "A capacitor that stores energy for a camera flash is charged slowly and then discharged very rapidly. Which of the graphs in Figure 13.19 represents the current through the capacitor as a function of time? (Current is defined here as the rate of change in the amount of charge on the positive terminal of the capacitor.) Figure 13.19",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) The charge on the positive plate of the capacitor increases while the capacitor is being charged and decreases while the capacitor is being discharged; therefore, the current is first positive and then negative, eliminating choices (B) and (D). Choice (E) can be eliminated because the discharging current decays very slowly, which indicates that the capacitor is discharging slowly rather than rapidly. Because charging is slower than discharging, the time constant (\\tau = RC) must be greater while charging. The capacitor is the same in both cases, so this requires that the resistance experienced while charging must be greater than the resistance experienced while discharging (Rcharging > Rdischarging). Now, if V0 is the voltage of the battery used to charge the capacitor, the initial charging current is V0/Rcharging and the initial discharging current is V0/Rdischarging. Because Rcharging > Rdischarging, the initial current magnitude while charging is smaller than the initial current magnitude while discharging, eliminating choice (A).",
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
                    "the energy stored in the capacitor and the energy dissipated in the resistor, equal to CV2",
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
                "question": "For the circuit shown in Figure 13.20, which of the graphs in Figure 13.21 shows the current through the battery as a function of time? Figure 13.21 Free-Response Questions",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "E",
                "explanation": "(E) Because the battery imposes a voltage of V across each branch of the circuit, the current through the branch consisting of the resistor and capacitor is independent of the current through the 2R resistor. Therefore, the current through the RC branch decreases exponentially while the current through the 2R resistor remains constant. The current through the battery is equal to the current through the 2R resistor plus the current through the RC segment of the circuit (because of Kirchhoff’s node rule). Therefore, the graphs of the currents through the two wires add together (superpose) to yield a net current that exponentially decreases to approach a positive value equal to the current through the 2R resistor, as shown in Figure 13.24. Figure 13.24 Initial current values allow selection between choices (C) and (E). The initial current through the battery is . The final current is equal to the current flowing through the 2R resistor, V/2R. Therefore, the initial current is three times the final current, which is true only of choice (E). Free-Response 1. (a) We label the six unknown currents as shown in Figure 13.25. You can choose either direction for the current through resistor R3; once we calculate the value of that current, its sign will tell us whether we happened to choose the right direction (positive = right choice; negative = wrong choice). Figure 13.25 There is a shortcut based on symmetry that can be used to simplify the analysis, but we will come back to that “trick” after first taking an approach that would work no matter what the numerical values of the resistors happen to be. There are three independent node equations: The fourth node equation you might think of writing, I = I4 + I5, is not independent of the above three equations. We need three loop equations in order to find the six unknown currents. The leftmost loop (traversed clockwise) yields: 10 − I1 R1 − I4 R4 = 0. The top righthand loop yields: − I2 R2 + I3 R3 + I1 R1 = 0, and the bottom loop yields: − I3 R3 − I5 R5 + I4 R4 = 0. You could use your calculator at this point to solve these six equations. If you did so you would find: . Note the pairs of equal currents: I1 = I5, I2 = I4. Now look again at the circuit (Figure 13.16), and note the symmetry above and below the branch with resistor R3 with a pair of resistors with values 2 Ω and 4 Ω. This symmetry leads to the equality of currents that we found. Had we noted this symmetry at the outset, we would have only four currents to solve. One of the node equations would be superfluous as would one of the loop equations. (b) We happened to choose I3 flowing to the right, and we found a positive answer for that current. Thus, the current does indeed flow to the right in that branch. (c) Ohm’s law tells us that . (d) We find the equivalent resistance using the loop rule 10 . 2. (a) Given the symmetry of the network, there will be no current flowing through the 5 Ω resistor. The current splits equally at the first node, which means that there will be no potential difference across the 5 Ω resistor. (b) From the answer to part (a), we see that the branch with the 5 Ω resistor has no current flowing through it and no potential difference. It is as if we collapsed the two middle nodes together, leaving us with a parallel combination of two 1 Ω resistors on the left and a similar parallel combination on the right. Each of these parallel combinations has an equivalent resistance of . These parallel combinations are in series with each other; thus, the equivalent resistance of the entire network is 2(0.5) = 1 Ω. (c) With an equivalent resistance of 1 Ω, the current delivered by a 9 V battery will be 9 A. 3. (a) At time t = 0, the voltage across the capacitor is zero, so the capacitor acts like a piece of wire (a short circuit). Therefore, at time t = 0, current is equal to I0 and we can use Ohm’s law to calculate the resistance of the resistor: R = V/I0. (b) The time constant \\tau = RC. Therefore, C = \\tau/R = I0\\tau/V. (c) The magnitude of the current is equal to the time derivative of the charge on the capacitor: |I(t)| = |dQ/dt|. Because the capacitor is being charged, current increases the charge on the capacitor, so the sign of this relationship is positive: I(t) = +dQ/dt. Therefore, we can integrate charge as follows. Therefore, Answer check: Given the relationships R = V/I0 and \\tau = RC, it is not difficult to see that the final charge will be Q = CV, as expected. We also observe that, as always, the difference between the charge at any instant and the final charge decreases exponentially with a time constant \\tau. (d) Given that I(t) = I0e−t/\\tau, plot ln (I(t)/I0) versus t. (e) You have and \\tau = RC = (50,000 Ω) (200 \\muF) = 10 s. The plot is shown in Figure 13.26. Figure 13.26 1Of course, charge doesn’t actually flow through the capacitor. Rather, a charge imbalance between the two capacitor plates develops with a buildup of positive charge on one plate and negative charge on the opposite plate.",
                "difficulty": "medium",
                "topic": "Ch13: Circuits"
            },
            {
                "id": "ap-topic-physc-circuits-q14",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "Two metal spheres with radii r1 and r2 carrying positive charges Q1 and Q2 are separated by a very large distance. Suppose that a very thin wire connects the two spheres. Under what conditions will positive charge flow from sphere 1 to sphere 2?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) The potential of an isolated metal sphere with radius r and charge Q is V = Q/4\\pi\\epsilon0r. Why? According to Gauss’s law, the field outside the surface of the sphere depends only on the magnitude of the enclosed charge, so the field is the same as the field that would be produced if all of charge Q were concentrated at the center of the sphere. Therefore, the electric field outside the sphere is the same as the electric field due to a point charge Q, |E| = Q/4\\pi\\epsilon0r2. The magnitude of the potential at the surface of the sphere is then the integral of this electric field from infinity to the surface of the sphere, assuming the potential is zero at infinity. Because the electric field has the same form as the electric field of a point charge, the potential also has the same form as the potential of a point charge, V = Q/4\\pi\\epsilon0r. For more information on Gauss’s law and integrating an electric field to obtain potential, see Chapter 11. Positive charges move from higher potential to lower potential since the electric field points in the direction of decreasing potential, as discussed in Chapter 10.",
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
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
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
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) The current is given by I = V/R. The resistance is proportional to the circumference of the loop, 2\\pir. Therefore, for r < a, V is proportional to r2 (as discussed in question 6), and 1/R is proportional to 1/r, so the product I = V/R is proportional to r (and thus its graph is a line passing through the origin). For r > a, V is constant and 1/R is proportional to 1/r, so the product I = V/R is inversely proportional to r. The only graph that satisfies these conditions is choice (A).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            }
        ]
    }
};
