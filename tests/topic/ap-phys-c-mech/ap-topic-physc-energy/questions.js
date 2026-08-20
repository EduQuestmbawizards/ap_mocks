// Specific Question Bank for Test: ap-topic-physc-energy
const AP_TEST_DATA = {
    "ap-topic-physc-energy": {
        "id": "ap-topic-physc-energy",
        "title": "AP Physics C: Work-Energy Theorem, Potential & Power",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Work & Energy",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics C: Mechanics",
        "topic": "Work & Energy",
        "questions": [
            {
                "id": "ap-topic-physc-energy_q1",
                "topic": "Work & Energy",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> How much work is done on the block by gravity?</p>",
                "options": [
                    "<p>500 J</p>",
                    "<p>430 J</p>",
                    "<p>100 J</p>",
                    "<p>50 J</p>",
                    "<p>250 J</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong>1.</strong> <strong>E—</strong>The force of gravity is straight down and equal to 100 N. The displacement parallel to this force is the <em>vertical</em> displacement, 2.5 m. Work equals force times parallel displacement, 250 J.</p>"
            },
            {
                "id": "ap-topic-physc-energy_q2",
                "topic": "Work & Energy",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> If the block experiences a constant friction force of 10 N, how much work is done by the friction force?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0122-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>−43 J</p>",
                    "<p>−25 J</p>",
                    "<p>−500 J</p>",
                    "<p>−100 J</p>",
                    "<p>−50 J</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>E—</strong>The force of friction acts up the plane, and displacement is down the plane, so just multiply force times distance to get 50 J. The negative sign indicates that force is opposite displacement.</p>"
            },
            {
                "id": "ap-topic-physc-energy_q3",
                "topic": "Work & Energy",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> A mass experiences a potential energy $U$ that varies with distance $x$ as shown in the graph above. The mass is released from position $x$ = 0 with 10 J of kinetic energy. Which of the following describes the long-term motion of the mass?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0122-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>The mass eventually comes to rest at $x$ = 0.</p>",
                    "<p>The mass slows down with constant acceleration, stopping at $x$ = 5 cm.</p>",
                    "<p>The mass speeds up with constant acceleration.</p>",
                    "<p>The mass oscillates, never getting farther than 5 cm from $x$ = 0.</p>",
                    "<p>The mass oscillates, never getting farther than 10 cm from $x$ = 0.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>D—</strong>Think of Chris on a skateboard—on this graph, he will oscillate back and forth about $x$ = 0. Because he starts with a KE of 10 J, he can, at most, have a potential energy of 10 J, which corresponds on the graph to a maximum displacement of 5 cm. (The mass cannot have constant acceleration because constant acceleration only occurs for a constant force; a constant force produces an energy graph that is linear. The mass will not come to rest because we are assuming a conservative force, for which KE can be converted to and from PE freely.)</p>"
            },
            {
                "id": "ap-topic-physc-energy_q4",
                "topic": "Work & Energy",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> Two identical balls of mass $m$ = 1.0 kg are moving toward each other, as shown above. What is the initial kinetic energy of the system consisting of the two balls?</p><h4 class=\"h4\">Free Response:</h4><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0123-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>0 joules</p>",
                    "<p>1 joules</p>",
                    "<p>12 joules</p>",
                    "<p>18 joules</p>",
                    "<p>36 joules</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong>4.</strong> <strong>E—</strong>Kinetic energy is a scalar, so even though the balls move in opposite directions, the KEs cannot cancel. Instead, kinetic energy <img alt=\"Images\" class=\"q-img\" src=\"images/1by2.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>(1 kg)(6 m/s)<sup>2</sup> attributable to different objects adds together algebraically, giving 36 J total.</p>"
            },
            {
                "id": "ap-topic-physc-energy_q5",
                "topic": "Work & Energy",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> A 1500-kg car moves north according to the velocity– time graph shown.</p>",
                "options": [
                    "<p>Determine the change in the car’s kinetic energy during the first 7 s.</p>",
                    "<p>To determine how far the car traveled in these 7 s, the three basic kinematics equations cannot be used. Explain why not.</p>",
                    "<p>Use the velocity–time graph to estimate the distance the car traveled in 7 s.</p>",
                    "<p>What was the net work done on the car in these 7 s?</p>",
                    "<p>Determine the average power necessary for the car to perform this motion.</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"quesal\"><strong>5.</strong> (a) The car started from rest, or zero KE. The car ended up with <img alt=\"Images\" class=\"q-img\" src=\"images/1by2.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>(1500 kg)(40 m/s)<sup>2</sup> = 1.2 × 10<sup>6</sup> J of kinetic energy. So its change in KE is 1.2 × 10<sup>6</sup> J.</p><p class=\"alphabr1\">(b) The acceleration is not constant. We know that because the velocity–time graph is not linear.</p><p class=\"alphabr1\">(c) The distance traveled is found from the area under the graph. It is easiest to approximate by counting boxes, where one of the big boxes is 10 m. There are, give-or-take, 19 boxes underneath the curve, so the car went 190 m.</p><p class=\"alphabr1\">(d) We cannot use work = force × distance here, because the net force is continually changing (because acceleration is changing). But W<em>net</em> = <em>∆</em>KE is always valid. In part (a) the car’s change in KE was found to be 1.2 × 10<sup>6</sup> J; so the net work done on the car is also 1.2 × 10<sup>6</sup> J.</p><p class=\"alphabr1\">(e) Power is work divided by time, or 1.2 × 10<sup>6</sup> J/7 s = 170 kW. This can be compared to the power of a car, 220 horsepower.</p>"
            },
            {
                "id": "physc_ene_q6",
                "topic": "Work Integral on 3D Path",
                "difficulty": "hard",
                "question": "<p>A force $\\vec{F}(x,y) = (3x^2\\hat{i} + 2y\\hat{j})\\text{ N}$ acts on a particle. How much work is done moving the particle from $(0,0)$ to $(2,3)\\text{ m}$ along any smooth path?</p>",
                "options": [
                    "$13\\text{ J}$",
                    "$17\\text{ J}$",
                    "$21\\text{ J}$",
                    "$25\\text{ J}$",
                    "$29\\text{ J}$"
                ],
                "answer": "B",
                "explanation": "<p>Work is $W = [x^3 + y^2]_{(0,0)}^{(2,3)} = (8 + 9) - 0 = 17\\text{ J}$.</p>"
            },
            {
                "id": "physc_ene_q7",
                "topic": "Spring Potential Energy & Compression",
                "difficulty": "medium",
                "question": "<p>A $2.0\\text{ kg}$ block is dropped from a height $h = 0.80\\text{ m}$ above a vertical spring of force constant $k = 400\\text{ N/m}$. Taking $g = 10\\text{ m/s}^2$, what is the maximum compression $x$ of the spring?</p>",
                "options": [
                    "$0.20\\text{ m}$",
                    "$0.30\\text{ m}$",
                    "$0.35\\text{ m}$",
                    "$0.40\\text{ m}$",
                    "$0.50\\text{ m}$"
                ],
                "answer": "C",
                "explanation": "<p>$mg(h+x) = \\frac{1}{2}kx^2 \\implies x \\approx 0.34\\text{ m}$.</p>"
            },
            {
                "id": "physc_ene_q8",
                "topic": "Variable Friction Dissipation",
                "difficulty": "hard",
                "question": "<p>A block slides along a rough surface where the friction coefficient increases with distance: $\\mu_k(x) = \\alpha x$. If the block starts at $x = 0$ with initial kinetic energy $K_0$, how far does it travel before stopping?</p>",
                "options": [
                    "$\\sqrt{\\frac{2K_0}{\\alpha mg}}$",
                    "$\\frac{K_0}{\\alpha mg}$",
                    "$\\sqrt{\\frac{K_0}{2\\alpha mg}}$",
                    "$\\frac{2K_0}{\\alpha mg}$",
                    "$\\frac{K_0^2}{\\alpha mg}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\frac{1}{2}\\alpha mg X^2 = K_0 \\implies X = \\sqrt{\\frac{2K_0}{\\alpha mg}}$.</p>"
            },
            {
                "id": "physc_ene_q9",
                "topic": "Power Required for Acceleration",
                "difficulty": "medium",
                "question": "<p>An electric car of mass $m$ accelerates uniformly from rest to speed $v$ in time $T$. What is the average power delivered by the motor during this time?</p>",
                "options": [
                    "$\\frac{m v^2}{T}$",
                    "$\\frac{m v^2}{2T}$",
                    "$\\frac{m v^2}{4T}$",
                    "$\\frac{2m v^2}{T}$",
                    "$\\frac{m v}{T}$"
                ],
                "answer": "B",
                "explanation": "<p>$P_{\\text{avg}} = \\frac{\\Delta K}{\\Delta t} = \\frac{mv^2}{2T}$.</p>"
            },
            {
                "id": "physc_ene_q10",
                "topic": "Escape Energy Threshold",
                "difficulty": "medium",
                "question": "<p>For an object of mass $m$ in orbit of radius $r$ around Earth (mass $M_E$), what is the total mechanical energy $E$?</p>",
                "options": [
                    "$-\\frac{GM_E m}{r}$",
                    "$-\\frac{GM_E m}{2r}$",
                    "$+\\frac{GM_E m}{2r}$",
                    "$0$",
                    "$-\\frac{2GM_E m}{r}$"
                ],
                "answer": "B",
                "explanation": "<p>$E = K + U = \\frac{GM_E m}{2r} - \\frac{GM_E m}{r} = -\\frac{GM_E m}{2r}$.</p>"
            },
            {
                "id": "physc_ene_q11",
                "topic": "Turning Points on Potential Curve",
                "difficulty": "medium",
                "question": "<p>A particle with total mechanical energy $E = 8.0\\text{ J}$ moves in a potential $U(x) = 2x^2\\text{ J}$. What are the positions of the turning points?</p>",
                "options": [
                    "$x = \\pm 1.0\\text{ m}$",
                    "$x = \\pm 2.0\\text{ m}$",
                    "$x = \\pm 4.0\\text{ m}$",
                    "$x = \\pm 8.0\\text{ m}$",
                    "$x = 0\\text{ m}$"
                ],
                "answer": "B",
                "explanation": "<p>$2x^2 = 8.0 \\implies x = \\pm 2.0\\text{ m}$.</p>"
            },
            {
                "id": "physc_ene_q12",
                "topic": "Hooke's Law Work vs Displacement",
                "difficulty": "easy",
                "question": "<p>If $10\\text{ J}$ of work is required to stretch a spring by $2\\text{ cm}$, how much TOTAL work is required to stretch it by $4\\text{ cm}$ from its unstretched length?</p>",
                "options": [
                    "$20\\text{ J}$",
                    "$30\\text{ J}$",
                    "$40\\text{ J}$",
                    "$50\\text{ J}$",
                    "$80\\text{ J}$"
                ],
                "answer": "C",
                "explanation": "<p>$W \\propto x^2 \\implies W = 4 \\times 10 = 40\\text{ J}$.</p>"
            },
            {
                "id": "physc_ene_q13",
                "topic": "Conservative Force Definition",
                "difficulty": "medium",
                "question": "<p>Which of the following mathematical statements is TRUE for any conservative force field $\\vec{F}$?</p>",
                "options": [
                    "$\\oint \\vec{F}\\cdot d\\vec{r} = 0$ along any closed loop",
                    "$\\nabla \\times \\vec{F} = \\vec{0}$",
                    "$\\vec{F} = -\\nabla U$",
                    "The work done between two points is independent of the path",
                    "All of the above"
                ],
                "answer": "E",
                "explanation": "<p>All listed statements are equivalent definitions and properties of a conservative force.</p>"
            },
            {
                "id": "physc_ene_q14",
                "topic": "Power in Viscous Medium",
                "difficulty": "hard",
                "question": "<p>An object moves through water at constant terminal speed $v$ where drag is $F_d = cv^2$. What is the rate at which energy is dissipated as heat in terms of speed?</p>",
                "options": [
                    "$P \\propto v$",
                    "$P \\propto v^2$",
                    "$P \\propto v^3$",
                    "$P \\propto v^4$",
                    "$P = \\text{constant}$"
                ],
                "answer": "C",
                "explanation": "<p>$P = F v = c v^3 \\propto v^3$.</p>"
            },
            {
                "id": "physc_ene_q15",
                "topic": "Energy in Loop-the-Loop",
                "difficulty": "medium",
                "question": "<p>A small bead of mass $m$ slides down a frictionless track and enters a vertical circular loop of radius $R$. What is the minimum release height $h$ above the bottom of the loop so that the bead stays on the track at the top?</p>",
                "options": [
                    "$2.0R$",
                    "$2.5R$",
                    "$3.0R$",
                    "$3.5R$",
                    "$5.0R$"
                ],
                "answer": "B",
                "explanation": "<p>$h_{\\min} = 2.5R$.</p>"
            }
        ]
    }
};
