// Specific Question Bank for Test: ap-topic-physc-circuits
const AP_TEST_DATA = {
    "ap-topic-physc-circuits": {
        "id": "ap-topic-physc-circuits",
        "title": "AP Physics C: DC Circuits, Capacitors & Inductors (RC/LR)",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Circuits",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics C: Electricity & Magnetism",
        "topic": "Circuits",
        "questions": [
            {
                "id": "ap-topic-physc-circuits_q1",
                "topic": "Circuits",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> A 100 Ω, 120 Ω, and 150 Ω resistor are connected to a 9-V battery in the circuit shown above. Which of the three resistors dissipates the most power?</p>",
                "options": [
                    "<p>the 100 Ω resistor</p>",
                    "<p>the 120 Ω resistor</p>",
                    "<p>the 150 Ω resistor</p>",
                    "<p>both the 120 Ω and 150 Ω</p>",
                    "<p>all dissipate the same power</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>1.</strong> <strong>A</strong>—On one hand, you could use a $V -I -R$ chart to calculate the voltage or current for each resistor, then use $P$ = <em>IV, I</em><sup>2</sup><em>R,</em> or $V^{2}$/$R$ to find power. On the other hand, there’s a quick way to reason through this one. Voltage changes across the 100 Ω resistor, then again across the parallel combination. Because the 100 Ω resistor has a bigger resistance than the parallel combination, the voltage across it is larger as well. Now consider each resistor individually. By power = $V^{2}$/<em>R,</em> the 100 Ω resistor has both the biggest voltage and the smallest resistance, giving it the most power.</p>"
            },
            {
                "id": "ap-topic-physc-circuits_q2",
                "topic": "Circuits",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> A 1.0-F capacitor is connected to a 12-V power supply until it is fully charged. The capacitor is then disconnected from the power supply, and used to power a toy car. The average drag force on this car is 2 N. About how far will the car go?</p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0191-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>36 m</p>",
                    "<p>72 m</p>",
                    "<p>144 m</p>",
                    "<p>24 m</p>",
                    "<p>12 m</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>A—</strong>The energy stored by a capacitor is ½<em>CV</em><sup>2</sup>. By powering a car, this electrical energy is converted into mechanical work, equal to force times parallel displacement. Solve for displacement, you get 36 m.</p>"
            },
            {
                "id": "ap-topic-physc-circuits_q3",
                "topic": "Circuits",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> Three resistors are connected to a 10-V battery as shown in the diagram above. What is the current through the 2.0 Ω resistor?</p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0191-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>0.25 A</p>",
                    "<p>0.50 A</p>",
                    "<p>1.0 A</p>",
                    "<p>2.0 A</p>",
                    "<p>4.0 A</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>C</strong>—To use Ohm’s law here, simplify the circuit to a 10-V battery with the 10 Ω equivalent resistance. We can use Ohm’s law for the entire circuit to find that 1.0 A is the total current. Because all the resistors are in series, this 1.0 A flows through each resistor, including the 2 Ω resistor.</p>"
            },
            {
                "id": "ap-topic-physc-circuits_q4",
                "topic": "Circuits",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> Three capacitors are connected as shown in the diagram above. $C^{1}$ = 2 μF; $C^{2}$ = 4 μF; $C^{3}$ = 6 μF. If the battery provides a potential of 9 V, how much charge is stored by this system of capacitors?</p>",
                "options": [
                    "<p>3.0 μC</p>",
                    "<p>30 μC</p>",
                    "<p>2.7 μC</p>",
                    "<p>27 μC</p>",
                    "<p>10 μC</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong>4.</strong> <strong>D</strong>—First, simplify the circuit to find the equivalent capacitance. The parallel capacitors add to 6 μF. Then the two series capacitors combine to 3 μF. So we end up with 9 V across a 3 μF equivalent capacitance. By the basic equation for capacitors, $Q$ = <em>CV,</em> the charge stored on these capacitors is 27 μC.</p>"
            },
            {
                "id": "ap-topic-physc-circuits_q5",
                "topic": "Circuits",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> What is the resistance of an ideal ammeter and an ideal voltmeter?</p><h4 class=\"h4\">Free Response:</h4>",
                "options": [
                    "<p class=\"alphabrt\"><img alt=\"image\" class=\"q-img\" src=\"images/t0191-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>5.</strong> <strong>A</strong>—An ammeter is placed in series with other circuit components. In order for the ammeter not to itself resist current and change the total current in the circuit, you want the ammeter to have as little resistance as possible—in the ideal case, zero resistance. But a voltmeter is placed in parallel with other circuit components. If the voltmeter has a low resistance, then current will flow through the voltmeter instead of through the rest of the circuit. Therefore, you want it to have as high a resistance as possible, so the voltmeter won’t affect the circuit being measured.</p>"
            },
            {
                "id": "ap-topic-physc-circuits_q6",
                "topic": "Circuits",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>6.</strong> </p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0192-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>Simplify the above circuit so that it consists of one equivalent resistor and the battery.</p>",
                    "<p>What is the total current through this circuit?</p>",
                    "<p>Find the voltage across each resistor. Record your answers in the spaces below.</p>",
                    "<p class=\"alphabrn1\">Voltage across 200 Ω resistor: ______</p>",
                    "<p class=\"alphabrn1\">Voltage across 300 Ω resistor: ______</p>",
                    "<p class=\"alphabrn1\">Voltage across 400 Ω resistor: ______</p>",
                    "<p class=\"alphabrn1\">Voltage across 500 Ω resistor: ______</p>",
                    "<p>Find the current through each resistor. Record your answers in the spaces below.</p>",
                    "<p class=\"alphabrn1\">Current through 200 Ω resistor: ______</p>",
                    "<p class=\"alphabrn1\">Current through 300 Ω resistor: ______</p>",
                    "<p class=\"alphabrn1\">Current through 400 Ω resistor: ______</p>",
                    "<p class=\"alphabrn1\">Current through 500 Ω resistor: ______</p>",
                    "<p>The 500 Ω resistor is now removed from the circuit. State whether the current through the 200 Ω resistor would increase, decrease, or remain the same. Justify your answer.</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"quesal\"><strong>6.</strong> (a) Combine each of the sets of parallel resistors first. You get 120 Ω for the first set, 222 Ω for the second set, as shown in the diagram below. These two equivalent resistances add as series resistors to get a total resistance of 342 Ω.</p><p class=\"image\"><img alt=\"image\" class=\"q-img\" src=\"images/f0193-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabr\">(b) Now that we’ve found the total resistance and we were given the total voltage, just use Ohm’s law to find the total current to be 0.026 A (also known as 26 mA).</p><p class=\"alphabr\">(c) and (d) should be solved together using a <em>V-I-R</em> chart. Start by going back one step to when we began to simplify the circuit: a 9-V battery, a 120 Ω combination, and a 222 Ω combination, shown above. The 26-mA current flows through each of these . . . so use $V$ = <em>IR</em> to get the voltage of each: 3.1 V and 5.8 V, respectively. Now go back to the original circuit. We know that voltage is the same across parallel resistors. So both the 200 Ω and 300 Ω resistors have a 3.1-V voltage across them. Use Ohm’s law to find that 16 mA goes through the 200Ω resistor, and 10 mA through the 300Ω. Similarly, both the 400Ω and 500 Ω resistors must have 5.8 V across them. We get 15 mA and 12 mA, respectively.</p><p class=\"alphabr1n\">Checking these answers for reasonability: the total voltage adds to 8.9 V, or close enough to 9.0 V with rounding. The current through each set of parallel resistors adds to just about 26 mA, as we expect.</p><p class=\"alphabr\">(e) Start by looking at the circuit as a whole. When we remove the 500 Ω resistor, we actually <em>increase</em> the overall resistance of the circuit because we have made it more difficult for current to flow by removing a parallel path. The total voltage of the circuit is provided by the battery, which provides 9.0 V no matter what it’s hooked up to. So by Ohm’s law, if total voltage stays the same while total resistance increases, total current must <em>decrease</em> from 26 mA.</p><p class=\"alphabr1n\">Okay, now look at the first set of parallel resistors. Their equivalent resistance doesn’t change, yet the total current running through them decreases, as discussed above. Therefore, the voltage across each resistor decreases, and the current through each decreases as well.</p>"
            },
            {
                "id": "physc_circ_q7",
                "topic": "Equivalent Resistance in Bridge",
                "difficulty": "hard",
                "question": "<p>In a balanced Wheatstone bridge with four equal resistors $R$, what is the equivalent resistance between input terminals?</p>",
                "options": [
                    "$R/4$",
                    "$R/2$",
                    "$R$",
                    "$2R$",
                    "$4R$"
                ],
                "answer": "C",
                "explanation": "<p>With bridge balanced, the central branch carries zero current. Two parallel branches each have resistance $2R$. $R_{\\text{eq}} = \\frac{2R \\times 2R}{2R + 2R} = R$.</p>"
            },
            {
                "id": "physc_circ_q8",
                "topic": "Internal Resistance of Battery",
                "difficulty": "medium",
                "question": "<p>A battery with EMF $\\mathcal{E} = 12\\text{ V}$ and internal resistance $r = 1.0\\,\\Omega$ is connected to a load resistor $R = 5.0\\,\\Omega$. What is the terminal voltage $V_{\\text{term}}$ of the battery?</p>",
                "options": [
                    "$2.0\\text{ V}$",
                    "$6.0\\text{ V}$",
                    "$10.0\\text{ V}$",
                    "$12.0\\text{ V}$",
                    "$14.0\\text{ V}$"
                ],
                "answer": "C",
                "explanation": "<p>$I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{5 + 1} = 2.0\\text{ A}$. $V_{\\text{term}} = \\mathcal{E} - Ir = 12 - (2.0)(1.0) = 10.0\\text{ V}$.</p>"
            },
            {
                "id": "physc_circ_q9",
                "topic": "Maximum Power Transfer Theorem",
                "difficulty": "hard",
                "question": "<p>For a source with fixed EMF $\\mathcal{E}$ and internal resistance $r$, what load resistance $R_L$ maximizes the power delivered to the load?</p>",
                "options": [
                    "$R_L = 0$",
                    "$R_L = r/2$",
                    "$R_L = r$",
                    "$R_L = 2r$",
                    "$R_L = \\infty$"
                ],
                "answer": "C",
                "explanation": "<p>$P_L = I^2 R_L = \\frac{\\mathcal{E}^2 R_L}{(R_L + r)^2}$. Differentiating with respect to $R_L$ and setting to zero yields $R_L = r$.</p>"
            },
            {
                "id": "physc_circ_q10",
                "topic": "Energy in RC Circuit Charging",
                "difficulty": "hard",
                "question": "<p>A battery of EMF $\\mathcal{E}$ fully charges a capacitor $C$ through a resistor $R$. What fraction of the total energy supplied by the battery is dissipated as heat in the resistor?</p>",
                "options": [
                    "$0\\%$",
                    "$25\\%$",
                    "$50\\%$",
                    "$75\\%$",
                    "$100\\%$"
                ],
                "answer": "C",
                "explanation": "<p>Total energy supplied by battery = $Q\\mathcal{E} = C\\mathcal{E}^2$. Energy stored in capacitor = $\\frac{1}{2}C\\mathcal{E}^2$. By conservation of energy, the remaining $50\\%$ ($\\frac{1}{2}C\\mathcal{E}^2$) is dissipated as heat in the resistor, regardless of the value of $R$.</p>"
            },
            {
                "id": "physc_circ_q11",
                "topic": "Capacitors in Series vs Parallel",
                "difficulty": "easy",
                "question": "<p>Two capacitors $C_1 = 3\\,\\mu\\text{F}$ and $C_2 = 6\\,\\mu\\text{F}$ are connected in <strong>series</strong>. What is the equivalent capacitance?</p>",
                "options": [
                    "$2\\,\\mu\\text{F}$",
                    "$4.5\\,\\mu\\text{F}$",
                    "$9\\,\\mu\\text{F}$",
                    "$18\\,\\mu\\text{F}$",
                    "$0.5\\,\\mu\\text{F}$"
                ],
                "answer": "A",
                "explanation": "<p>$C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{18}{9} = 2\\,\\mu\\text{F}$.</p>"
            },
            {
                "id": "physc_circ_q12",
                "topic": "Joule Heating Rate",
                "difficulty": "easy",
                "question": "<p>If the current through a resistor of constant resistance $R$ is doubled, the rate of electrical power dissipation increases by a factor of:</p>",
                "options": [
                    "$\\sqrt{2}$",
                    "$2$",
                    "$4$",
                    "$8$",
                    "$16$"
                ],
                "answer": "C",
                "explanation": "<p>$P = I^2 R$. Doubling current quadruples power dissipation ($2^2 = 4$).</p>"
            },
            {
                "id": "physc_circ_q13",
                "topic": "Kirchhoff Loop Equation",
                "difficulty": "medium",
                "question": "<p>A single-loop circuit contains a $10\\text{ V}$ battery, a $4\\text{ V}$ opposing battery, and two resistors $2\\,\\Omega$ and $1\\,\\Omega$. What is the current in the circuit?</p>",
                "options": [
                    "$1.0\\text{ A}$",
                    "$2.0\\text{ A}$",
                    "$3.0\\text{ A}$",
                    "$4.0\\text{ A}$",
                    "$5.0\\text{ A}$"
                ],
                "answer": "B",
                "explanation": "<p>$I = \\frac{\\Sigma \\mathcal{E}}{\\Sigma R} = \\frac{10 - 4}{2 + 1} = \\frac{6}{3} = 2.0\\text{ A}$.</p>"
            },
            {
                "id": "physc_circ_q14",
                "topic": "RC Discharging Time Constant",
                "difficulty": "medium",
                "question": "<p>A $10\\,\\mu\\text{F}$ capacitor is charged to $100\\text{ V}$ and then discharged through a $200\\text{ k}\\Omega$ resistor. What is the time constant $\\tau$?</p>",
                "options": [
                    "$0.2\\text{ s}$",
                    "$2.0\\text{ s}$",
                    "$20\\text{ s}$",
                    "$200\\text{ s}$",
                    "$2000\\text{ s}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\tau = RC = (200 \\times 10^3)(10 \\times 10^{-6}) = 2.0\\text{ s}$.</p>"
            },
            {
                "id": "physc_circ_q15",
                "topic": "Real vs Ideal Voltmeter",
                "difficulty": "medium",
                "question": "<p>To measure the potential difference across a circuit element without altering the circuit currents, an ideal voltmeter should have:</p>",
                "options": [
                    "Zero resistance",
                    "Infinite resistance",
                    "Resistance equal to $1\\,\\Omega$",
                    "Resistance equal to the load",
                    "Inductance only"
                ],
                "answer": "B",
                "explanation": "<p>An ideal voltmeter is connected in parallel and must draw zero current, requiring infinite internal resistance.</p>"
            }
        ]
    }
};
