// Specific Question Bank for Test: ap-topic-physc-inductors
const AP_TEST_DATA = {
    "ap-topic-physc-inductors": {
        "title": "AP Physics C: Inductance, RL Circuits & LC Oscillations",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "Inductors & RL/LC",
        "timeLimitMinutes": 30,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-physc-inductors-q1",
                "global_num": 258,
                "section": "Ch16: Inductors",
                "question": "Consider the two concentric solenoids shown in Figure 16.5, one of which is attached to a battery, a resistor, and a switch and the other of which is attached to a lightbulb. (No current passes directly between the two circuits.) When the switch is turned on, what is expected to happen? Figure 16.5",
                "options": [
                    "No current passes through the lightbulb.",
                    "The intensity of the lightbulb increases and quickly reaches its maximum, final intensity.",
                    "The lightbulb flickers on and off with a regular frequency and constant intensity.",
                    "The lightbulb flickers on and off with a regular frequency and decreasing intensity.",
                    "The lightbulb flashes on once, and then no current passes through it."
                ],
                "answer": "E",
                "explanation": "(E) The instant after the switch is turned on, the flux through the inner solenoid increases sharply. This changing flux induces a current in the outer solenoid, which briefly causes the lightbulb to flash on. Very soon, the current in the left circuit reaches its final value, the flux through the inner solenoid ceases changing, and the induced current through the lightbulb drops to zero and remains zero.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q2",
                "global_num": 259,
                "section": "Ch16: Inductors",
                "question": "Consider the circuit shown in Figure 16.11 with a battery with voltage V, resistance R, a capacitor with capacitance C, and an inductor with inductance L. The switch is designed such that it can be used to connect any two of the three points (A, B, and C). Initially, no current flows through the inductor, and the capacitor is uncharged (the switch is open). At time t = 0, the switch is positioned such that A is connected to B, causing current to flow to the capacitor. Figure 16.11 (a) What are the initial and final currents through the circuit? (b) What are the initial and final voltages across the capacitor? After the circuit has reached equilibrium, at time t = t1 >> 0, the switch is instantaneously adjusted such that point A is connected to point C, connecting the battery and the resistor to the inductor. (c) What are the initial and final currents through the new circuit? (d) What are the initial and final voltages across the inductor? After the circuit has again reached equilibrium, at time t = t2 >> t1, the switch is adjusted such that point B is connected to point C. (e) What is the initial current through the circuit? (f) What is the initial voltage across the inductor?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "E",
                "explanation": "(E) The instant after the switch is turned on, the flux through the inner solenoid increases sharply. This changing flux induces a current in the outer solenoid, which briefly causes the lightbulb to flash on. Very soon, the current in the left circuit reaches its final value, the flux through the inner solenoid ceases changing, and the induced current through the lightbulb drops to zero and remains zero.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q3",
                "global_num": 260,
                "section": "Ch16: Inductors",
                "question": "An inductor is connected in series to a battery of voltage V and a resistor at t = 0. Which of the graphs in Figure 16.6 shows the voltage across the inductor as a function of time? Figure 16.6",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "B",
                "explanation": "(B) As the current exponentially approaches its final value, the change in current (which is proportional to the voltage) decreases exponentially, as discussed in the beginning of this chapter.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q4",
                "global_num": 261,
                "section": "Ch16: Inductors",
                "question": "Consider the coaxial cable shown in Figure 16.12. At one end of the cable, the inner wire has been connected to the outer sheath so that current coming out of the page through the inner wire equals the current going into the page through the outer sheath. If this current I has a uniform current density, Figure 16.12 (a) Calculate the magnitude of the magnetic field in the region a < r < b. Figure 16.13 shows a lengthwise cross section of the coaxial cable. Figure 16.13 (b) If the current is increasing at a rate of dI/dt, what is the induced EMF through the area shown in the figure? (c) How does this EMF affect the change in current? (d) What is the inductance of a coaxial cable of length l?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "B",
                "explanation": "(B) As the current exponentially approaches its final value, the change in current (which is proportional to the voltage) decreases exponentially, as discussed in the beginning of this chapter.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q5",
                "global_num": 262,
                "section": "Ch16: Inductors",
                "question": "What is the period of the circuit shown in Figure 16.7? Figure 16.7",
                "options": [
                    "f / 2",
                    "f / \\sqrt{2}",
                    "f",
                    "\\sqrt{2}f",
                    "2f"
                ],
                "answer": "E",
                "explanation": "(E) In general, the angular frequency of an LC circuit is , so the period is . (For a review of period and angular frequency, see Chapter 8.) In this case, the equivalent capacitance is C/2 and the equivalent inductance is 2L (because the voltage jumps across the inductors add), so the product , and the period is .",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q6",
                "global_num": 263,
                "section": "Ch16: Inductors",
                "question": "(a) What is the equivalent inductance of two inductors, L1 and L2, in series? (b) What is the equivalent inductance of two inductors, L1 and L2, in parallel? (Assume that the mutual inductance of the two inductors involved is negligible.)",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "E",
                "explanation": "(E) In general, the angular frequency of an LC circuit is , so the period is . (For a review of period and angular frequency, see Chapter 8.) In this case, the equivalent capacitance is C/2 and the equivalent inductance is 2L (because the voltage jumps across the inductors add), so the product , and the period is .",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q7",
                "global_num": 264,
                "section": "Ch16: Inductors",
                "question": "A fully charged capacitor is put in series with an inductor at time t = 0. The current through this LC circuit is shown in Figure 16.8. Which graph shows the energy stored in the capacitor as a function of time? Figure 16.8",
                "options": [
                    "E_0 / 4",
                    "E_0 / 2",
                    "E_0",
                    "2E_0",
                    "4E_0"
                ],
                "answer": "D",
                "explanation": "(D) Every time the current is zero, the energy in the inductor is zero and the energy in the capacitor is maximized. The only graph that has a peak every time the current of the inductor passes through zero is choice (D). Note that with the initial conditions given, I(0) = 0. Note: Without any knowledge of LC circuits, choice (B) can be eliminated because the energy stored in a capacitor, Q2/2C, is never negative.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q8",
                "global_num": 265,
                "section": "Ch16: Inductors",
                "question": "Consider the concentric coplanar loops of wire shown in Figure 16.14. Figure 16.14 (a) If current I(t) flows through the outer loop in the direction indicated, what is the magnetic field at the center of the loop? (b) Given that r << R, what is the approximate magnitude of the magnetic flux through the small loop due to the current in the larger loop? (c) If I(t) = I0e−t/\\tau, calculate the EMF through the smaller loop as a function of time.",
                "options": [
                    "Directly upward toward the top of the page",
                    "Directly downward toward the bottom of the page",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "Zero net field / magnitude"
                ],
                "answer": "D",
                "explanation": "(D) Every time the current is zero, the energy in the inductor is zero and the energy in the capacitor is maximized. The only graph that has a peak every time the current of the inductor passes through zero is choice (D). Note that with the initial conditions given, I(0) = 0. Note: Without any knowledge of LC circuits, choice (B) can be eliminated because the energy stored in a capacitor, Q2/2C, is never negative.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q9",
                "global_num": 266,
                "section": "Ch16: Inductors",
                "question": "Consider the circuit in Figure 16.9. The switch is closed at t = 0, when the capacitor is uncharged and no current is flowing through the inductor. What is the initial current that passes through the battery the instant after the switch is closed? Figure 16.9",
                "options": [
                    "I = 0",
                    "I = V/R1",
                    "I = V/R2",
                    "I = V/(R1 + R2)",
                    "I = V(R1 + R2)/R1R2"
                ],
                "answer": "C",
                "explanation": "(C) At t = 0, the capacitor acts like a short circuit and the inductor acts like an open circuit (opposing any sudden jump in the current). Therefore, zero current flows through the inductor, and a current equal to V/R2 flows through the capacitor and around the outer loop.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q10",
                "global_num": 267,
                "section": "Ch16: Inductors",
                "question": "In the circuit shown in Figure 16.15, the switch is closed at t = 0. Figure 16.15 (a) Just after the switch is closed, what is the potential difference across resistor R1? Which point, a or b, is at higher potential? (b) What is the potential difference across the inductor? Which point, c or d, is at higher potential? The switch is left closed for a long time and then opened. Just after the switch is opened, (c) What is the potential difference across resistor R1? Which point, a or b, is at higher potential? (d) What is the potential difference across the inductor? Which point, c or d, is at higher potential?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "V_0",
                    "2 V_0",
                    "4 V_0"
                ],
                "answer": "C",
                "explanation": "(C) At t = 0, the capacitor acts like a short circuit and the inductor acts like an open circuit (opposing any sudden jump in the current). Therefore, zero current flows through the inductor, and a current equal to V/R2 flows through the capacitor and around the outer loop.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q11",
                "global_num": 268,
                "section": "Ch16: Inductors",
                "question": "What is the final current in the circuit shown in question 5?",
                "options": [
                    "I = 0",
                    "I = V/R1",
                    "I = V/R2",
                    "I = V/(R1 + R2)",
                    "I = V(R1 + R2)/R1R2"
                ],
                "answer": "B",
                "explanation": "(B) At equilibrium, the capacitor acts like an open circuit and the inductor acts like a closed circuit so that zero current flows through the capacitor and a current of I = V/R1 flows around the inner loop. One caveat is in order here, however: The rule that a capacitor acts like an open circuit at equilibrium was based on RC circuits, so we must consider whether it still applies here. Because the potential across the capacitor and the resistor R2 is always V, the inductor branch of the circuit actually has absolutely no impact on the current flowing through the capacitor, so any generalizations we made for RC circuits apply here. Similarly, the voltage across the inductor and the resistor R1 is always V, so the inductor acts independently of the capacitor. The only place where we actually see the loops in the circuit interacting is where the current is flowing through the battery, which is a sum of the currents flowing through each loop.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q12",
                "global_num": 269,
                "section": "Ch16: Inductors",
                "question": "Consider the circuit shown in Figure 16.16. At time t = 0, the switch is closed. (Before the switch is closed, the capacitor is uncharged and there is no current flowing through the inductor.) Figure 16.16 (a) What is the current through the battery the instant after the switch is closed, at t = 0? (b) What is the current through the battery after the circuit has reached equilibrium, at t = \\infty? After the circuit has reached equilibrium, the switch is opened (for simplicity we will designate a new frame of reference so that this occurs at t′ = 0). (c) What is the period of oscillation of the LC circuit formed? (d) What is the maximum current?",
                "options": [
                    "f / 2",
                    "f / \\sqrt{2}",
                    "f",
                    "\\sqrt{2}f",
                    "2f"
                ],
                "answer": "B",
                "explanation": "(B) At equilibrium, the capacitor acts like an open circuit and the inductor acts like a closed circuit so that zero current flows through the capacitor and a current of I = V/R1 flows around the inner loop. One caveat is in order here, however: The rule that a capacitor acts like an open circuit at equilibrium was based on RC circuits, so we must consider whether it still applies here. Because the potential across the capacitor and the resistor R2 is always V, the inductor branch of the circuit actually has absolutely no impact on the current flowing through the capacitor, so any generalizations we made for RC circuits apply here. Similarly, the voltage across the inductor and the resistor R1 is always V, so the inductor acts independently of the capacitor. The only place where we actually see the loops in the circuit interacting is where the current is flowing through the battery, which is a sum of the currents flowing through each loop.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q13",
                "global_num": 270,
                "section": "Ch16: Inductors",
                "question": "All the capacitors in each of the networks shown in Figure 16.10 have a capacitance of C. Which statement is correct? Figure 16.10",
                "options": [
                    "When attached to a given battery, array A stores more energy.",
                    "Equal amounts of charge are required to charge each array to the same final voltage.",
                    "When attached to a fixed battery and resistor, array A has a lower time constant.",
                    "When attached to a fixed inductor, array A has a greater angular frequency.",
                    "When attached to a battery, all the capacitors in array A store the same amount of charge. Free-Response Questions"
                ],
                "answer": "A",
                "explanation": "(A) By applying the formulas for parallel and series capacitance, it is not hard to determine that networks A and B have equivalent capacitance of 2C and 0.5C, respectively. Choice (A): , so network A, which has a greater equivalent capacitance, indeed stores more energy. Choice (B): The amount of charge required to charge a network to a given voltage is Q = CV. Because the two networks have different equivalent capacitances, they require different amounts of charge, making this choice false. Choice (C): The formula for the time constant is \\tau = RC. Therefore, network A, which has a larger equivalent capacitance, produces a circuit with a greater time constant. Choice (D): The angular frequency of an LC circuit is given by the formula . Because network A has a greater equivalent capacitance, it has a smaller angular frequency. Choice (E): The voltage across the central capacitor in network A is twice the voltage across the other capacitors, so the capacitors do not store the same amount of charge. Free-Response 1. This problem drills you on determining initial and final conditions of circuits containing inductors and capacitors. The challenge here is figuring out which rule or equation to apply; once you have figured out how to correctly approach each section, the math is very simple. Some of the most useful equations and generalizations are listed here. Capacitors: 1. Initially, capacitors act as short circuits. 2. At equilibrium, capacitors act as open circuits. Inductors: 1. The initial condition of an inductor can generally be figured out using the rule that the current through an inductor is a continuous function of time. 2. At equilibrium, inductors act like short circuits. Kirchhoff’s loop rule: Once you have the voltage across one component of the circuit, you can use a loop rule to figure out the voltage across other parts of the circuit. (a) Initially, the capacitor acts like a short circuit so that the current is I = V/R. At equilibrium when the capacitor is fully charged, it acts like an open circuit so that the current is zero. (b) Initially, the capacitor is uncharged so that its voltage is V = Q/C = 0. At equilibrium, the voltage across the resistor is zero (the current is zero, so V = IR = 0), so according to Kirchhoff’s loop rule, the voltage across the capacitor must be V (in the opposite polarity as the battery). (c) Initially, the inductor acts like an open circuit so that the current is zero (as required by the fact that the current through an inductor must be continuous). At equilibrium, the inductor acts like a closed circuit so that the current is I = V/R. (d) Initially, the voltage across the resistor is zero because the current is zero (according to Ohm’s law, V = IR = 0). Therefore, Kirchhoff’s loop rule requires the voltage across the inductor to equal V (in the polarity opposite that of the battery). At equilibrium, the change in current, dI/dt, is zero, so the voltage across the inductor is zero. (e) The presence of an inductor requires the current to be continuous in time. (If the current were discontinuous, dI/dt would be infinite, generating an infinite voltage across the inductor and an infinite current and violating conservation of energy.) Therefore, the initial current through the inductor is the same as the current through the inductor before the switch is flipped, I = V/R. Because this current is to the right, it generates a counterclockwise current in the circuit containing the inductor and capacitor. This initial state of the circuit is shown in Figure 16.17. Figure 16.17 (f) The initial voltage across the capacitor is V. [The capacitor was left fully charged from its previous state, as calculated in part (b).] Kirchhoff’s loop rule then requires the voltage across the inductor to have magnitude V with opposite polarity. 2. (a) This is a classic Ampere’s law problem with cylindrical symmetry. The enclosed current is simply I, so the magnetic field is equal to the field due to a wire (recall that the field doesn’t depend on the distribution of the current as long as it is cylindrically symmetric): (b) We can use a standard Faraday’s law application. Because the magnetic field varies, we must integrate to calculate the magnetic flux. To mirror the cylindrical symmetry of the magnetic field, we divide the area into differential areas that are thin rectangular strips running parallel to the axis of the cable with differential area: The differential flux through each differential area is Integrating, Applying Faraday’s law, (c) We can apply Lenz’s law directly: Increasing current causes an increase in inward flux through the loop, which induces a counterclockwise EMF, which decreases the current. Or we can apply Lenz’s law indirectly: Because the change in current causes the change in flux, in order to oppose the change in flux, the induced EMF must oppose the change in current. (d) The inductance is defined as 3. Our general approach is the same as when we calculated equivalent resistance or equivalent capacitance. The goal is to find values of voltage and dI/dt to plug into the definition of inductance, Leq = V/(dI/dt). We do this by assigning either a voltage (V) or a change in current (dI/dt), then calculating the other value, and finally finding the ratio. Whether we begin by assigning V or dI/dt is simply a matter of convenience. (Parallel elements share a common voltage, so it’s easier to start with the voltage V and calculate dI/dt; series elements share a common current, so it’s easier to start with dI/dt and calculate the voltage.) (a) Elements in series share a common current, so let’s begin by considering what will happen if the current through both inductors is changing at a rate dI/dt. Each inductor produces a voltage of L(dI/dt) such that the net voltage is Then, according to the definition of inductance, the net inductance is Therefore, the equivalent inductance of inductors in series is the sum of their individual inductances. This makes sense: Adding two coils in series is quite similar to increasing the length of a single coil, and both cause increases in the net inductance. (b) Elements in parallel share a common voltage, so let’s begin by considering the situation where two inductors in parallel have a voltage V across them. The change in current through each inductor is then The change in the total current throughout the inductor array, Inet = I1 + I2, is then Therefore, applying the definition of inductance, Therefore, the net inductance of inductors in parallel is smaller than the inductance of either of the inductors alone. This makes sense if we consider an inductor as an element that resists changes in current. When more inductors are added in parallel, each allows a certain change in current for a given voltage; thus, the net effect of adding more inductors is to produce a greater change in current for the same voltage. (This is similar to the way adding more resistors in parallel produces a greater current for the same voltage, such that the equivalent resistance is smaller than the resistance of any of the individual resistors.) 4. (a) First apply Biot-Savart’s law (note that the magnitude of r is constant and that it is always perpendicular to dl). (b) Because r << R, we can assume that the field is approximately uniform within the smaller loop and equal to the value at the center, calculated above in part (a). Therefore, the flux (choosing A to point into the page) is (c) Using Faraday’s law, 5. (a) Just after the switch is closed, all of the current will pass through resistor R1 because the inductor prevents the current in its branch from jumping immediately to a nonzero value. Thus, the potential difference across R1 will be V, the EMF of the battery. Point a is connected to the positive terminal of the battery, so it will be at a higher potential than b. (b) Because there is no current through the branch with the inductor, the potential difference across resistor R2 will be zero. The potential difference across the inductor must then be V. The inductor is in parallel with resistor R1, and the potential at c will be higher than at d. (c) When the switch is closed for a long time and the currents reach steady-state values, the potential difference across the inductor will go to zero. When the switch is opened, the current through resistor R2 cannot immediately change; it will briefly maintain its value of flowing to the right. This current then flows through resistor R1 to the left. The potential difference across resistor R1 will be with b now at higher potential because the current flows to the left through resistor R1. (d) The potential difference between points c and d is given by with point d at higher potential because the current flows counterclockwise in the loop containing the two resistors and is decreasing in time. So the inductor acts like a battery that is trying to keep current flowing counterclockwise, meaning that d is at higher potential compared to c. 6. (a) The instant after the circuit is closed, the inductor acts like an open circuit and the capacitor acts like a short circuit (so that the capacitor begins to charge and the capacitor and the inductor together have zero net resistance). The current is then I = V/R = 10 V/50 Ω = 0.2 A. (b) At equilibrium, the inductor acts like a short circuit and the capacitor acts like an open circuit, so the capacitor and inductor together have zero net resistance and the current through the circuit is I = V/R = 10 V/50 Ω = 0.2 A. (c) The period is given by the equation (d) Since the current through an inductor must remain continuous, the initial current through the inductor is 0.2 A. The instant the switch is opened, the capacitor is still uncharged. Therefore, the instant the LC circuit begins to oscillate, energy is stored within the inductor alone. We calculate the maximum current using conservation of energy: Thus the maximum current equals the initial current, 0.2 A.",
                "difficulty": "medium",
                "topic": "Ch16: Inductors"
            },
            {
                "id": "ap-topic-physc-inductors-q14",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "Two metal spheres with radii r1 and r2 carrying positive charges Q1 and Q2 are separated by a very large distance. Suppose that a very thin wire connects the two spheres. Under what conditions will positive charge flow from sphere 1 to sphere 2?",
                "options": [
                    "Directly upward toward the top of the page",
                    "Directly downward toward the bottom of the page",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "Zero net field / magnitude"
                ],
                "answer": "C",
                "explanation": "(C) The potential of an isolated metal sphere with radius r and charge Q is V = Q/4\\pi\\epsilon0r. Why? According to Gauss’s law, the field outside the surface of the sphere depends only on the magnitude of the enclosed charge, so the field is the same as the field that would be produced if all of charge Q were concentrated at the center of the sphere. Therefore, the electric field outside the sphere is the same as the electric field due to a point charge Q, |E| = Q/4\\pi\\epsilon0r2. The magnitude of the potential at the surface of the sphere is then the integral of this electric field from infinity to the surface of the sphere, assuming the potential is zero at infinity. Because the electric field has the same form as the electric field of a point charge, the potential also has the same form as the potential of a point charge, V = Q/4\\pi\\epsilon0r. For more information on Gauss’s law and integrating an electric field to obtain potential, see Chapter 11. Positive charges move from higher potential to lower potential since the electric field points in the direction of decreasing potential, as discussed in Chapter 10.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-inductors-q15",
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
                "id": "ap-topic-physc-inductors-q16",
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
                "id": "ap-topic-physc-inductors-q17",
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
                "id": "ap-topic-physc-inductors-q18",
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
                "id": "ap-topic-physc-inductors-q19",
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
                "id": "ap-topic-physc-inductors-q20",
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
