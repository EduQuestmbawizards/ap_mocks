// Specific Question Bank for Test: ap-topic-phys1-dynamics
const AP_TEST_DATA = {
    "ap-topic-phys1-dynamics": {
        "id": "ap-topic-phys1-dynamics",
        "title": "AP Physics 1: Forces & Newton's Laws of Motion",
        "subtitle": "Newton's 3 laws, free-body diagrams, static & kinetic friction, inclined planes and central forces",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Newton's Laws & Forces",
        "questions": [
            {
                "id": "tp_phys1_dyn_1",
                "topic": "Newton's Laws & Forces",
                "difficulty": "easy",
                "question": "In the situation shown below, what is the tension in string 1?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w51\" role=\"presentation\" src=\"images/f082-01.jpg\"/></p>",
                "options": [
                    "69.3 N",
                    "98 N",
                    "138.6 N",
                    "147.6 N"
                ],
                "answer": "A",
                "explanation": "We need to apply the second law for static equilibrium. This means that we must resolve the tensions into their $x$- and $y$-components. For $T_{1}$, we have $T_{1}$ cos 45 and $T_{1}$ sin 45. In equilibrium, the sum of all the $x$ forces must equal zero. This means that $T_{1}$ cos 45 = $T_{2}$ (since $T_{2}$ is entirely horizontal). The $y$-component of $T_{1}$ must balance the weight = <i>mg</i> = 49 N. Thus, $T_{1}$ sin 45 = 49 N and $T_{1}$ = 69.3 N.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w28\" role=\"presentation\" src=\"images/f085-01.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_2",
                "topic": "Newton's Laws & Forces",
                "difficulty": "easy",
                "question": "Two masses, $M$ and $m$, are hung over a massless, frictionless pulley as shown below. If $M$ &gt; $m$, what is the downward acceleration of mass $M$?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w51\" role=\"presentation\" src=\"images/f082-02.jpg\"/></p>",
                "options": [
                    "$g$",
                    "$ \\mu_s = 0.5 $",
                    "$ \\mu_s > 0.5 $",
                    "$ \\mu_s < 0.5 $"
                ],
                "answer": "B",
                "explanation": "The free-body diagrams for both masses, $M$ and $m$, look like this:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w43\" role=\"presentation\" src=\"images/f085-02.jpg\"/></p>\r\n<p class=\"exp\">The large mass is accelerating downward, while the small mass is accelerating upward. The tension in the string is directed upward, while gravity, given by the weight, is directed downward. Using the second law for accelerated motion, we must show that for each mass, ∑$F$<sub>$y$</sub> = <i>ma</i>. Thus, we have</p>\r\n<p class=\"center1\">$T - Mg = -Ma \\text{ and } T - mg = ma$</p>\r\n<p class=\"exp\">Eliminating the tension $T$ and solving for $a$ gives us ($M$ − $m$)$g$/($M +m$).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_3",
                "topic": "Newton's Laws & Forces",
                "difficulty": "easy",
                "question": "A 0.25-kg mass is attached to a string and swung in a vertical circle whose radius is 0.75 m. At the bottom of the circle, the mass is observed to have a speed of 10 m/s. What is the magnitude of the tension in the string at that point?</p>",
                "options": [
                    "2.45 N",
                    "5.78 N",
                    "22.6 N",
                    "35.7 N"
                ],
                "answer": "D",
                "explanation": "A sketch of the situation is shown below:</p>\r\n<p class=\"center1\">$\\text{[Diagram of vertical circle: radius } r = 0.5\\text{ m}, \\text{mass } m, \\text{tension } \\vec{T}, \\text{gravity } m\\vec{g}]$</p>\r\n<p class=\"exp\">At the lowest point, the downward force of gravity is opposed by the upward tension in the string. Note that doing a quick tip-to-tail graphical solution of the force vectors must result in an upward (inward) net force. Thus, we can write</p>\r\n<p class=\"center1\">$T - mg = \\frac{mv^2}{r}$</p>\r\n<p class=\"exp\">Substituting in the given values and solving for $T$ gives us 35.7 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_4",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A car and driver have a combined mass of 1,000 kg. The car passes over the top of a hill that has a radius of curvature equal to 10 m. The speed of the car at that instant is 5 m/s. What is the force of the hill on the car as it passes over the top?</p>",
                "options": [
                    "7,300 N up",
                    "7,300 N down",
                    "12,300 N up",
                    "12,300 N down"
                ],
                "answer": "A",
                "explanation": "As the car goes over the hill, the force that the hill exerts on the car is the normal force, \\vec{N}. This is opposed, however, by the downward force of gravity. The combination produces (as in question 3) the centripetal force \\vec{F}<i><sub>c</sub></i>. Using our circular motion convention of inward forces being positive, we can write</p>\r\n<p class=\"center1\">$mg - N = \\frac{mv^2}{r}$</p>\r\n<p class=\"exp\">A sketch is shown below. Note that doing a quick tip-to-tail graphical solution of the force vectors must result in a downward (inward) net force. Substituting in the given values and solving for $N$ gives 7,300 N upward.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w53\" role=\"presentation\" src=\"images/f085-07.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_5",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A hockey puck with a mass of 0.3 kg is sliding along ice that can be considered frictionless. The puck’s velocity is 20 m/s. The puck now crosses over onto a floor that has a coefficient of kinetic friction equal to 0.35. How far will the puck travel across the floor before it stops?</p>",
                "options": [
                    "3 m",
                    "87 m",
                    "48 m",
                    "58 m"
                ],
                "answer": "D",
                "explanation": "With horizontal motion, the normal force is equal to the force of gravity. When the puck is moving with constant velocity, no net force is acting on it. Thus, when friction acts to slow the puck down, the friction is the only net force. Therefore, we write</p>\r\n<p class=\"center1\">$f = \\mu N = \\mu mg = -ma$</p>\r\n<p class=\"exp\">(since the puck is decelerating). Substituting the known numbers gives a deceleration of −3.43 m/$s^{2}$. Now, the final velocity will be zero; and since the time to stop is unknown, we use the following kinematic expression to solve for the stopping distance:</p>\r\n<p class=\"center1\">$-v_i^2 = 2ax$</p>\r\n<p class=\"exp\">Substituting the known numbers, we obtain approximately 58 m as the distance the puck will travel before stopping.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_6",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A spring with a stiffness constant $k$ = 50 N/m has a natural length of 0.45 m. It is attached to the top of an incline that makes a 30° angle with the horizontal. The incline is 2.4 m long. A mass of 2 kg is attached to the spring, causing it to be stretched down the incline. How far down the incline does the end of the spring rest?</p>",
                "options": [
                    "0.196 m",
                    "0.45 m",
                    "0.646 m",
                    "0.835 m"
                ],
                "answer": "C",
                "explanation": "A sketch of the situation is given below. The spring constant is $k$ = 50 N/m.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w60\" role=\"presentation\" src=\"images/f086-03.jpg\"/></p>\r\n<p class=\"exp\">According to Hooke’s law, $F$<sub>$s$</sub> = <i>kx</i>, where $x$ is the elongation in excess of the spring’s natural length (here 0.45 m). The force, in this case, is provided by the component of weight parallel to the incline, which is given by <i>mg</i> sin θ. Substituting the known numbers gives us an elongation of $x$ = 0.196 m. Since this must be in excess of the spring’s natural length, the answer is 0.646 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_7",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A 20-N force is pushing two blocks horizontally along a frictionless floor as shown below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w62\" role=\"presentation\" src=\"images/f083-01.jpg\"/></p>\r\n<p class=\"exp\">What is the force that the 8-kg mass exerts on the 2-kg mass?</p>",
                "options": [
                    "4 N",
                    "8 N",
                    "16 N",
                    "20 N"
                ],
                "answer": "C",
                "explanation": "The 20-N force is pushing on a total mass of 10 kg. Thus, using \\vec{F} = $m$\\vec{a}, we have the acceleration of both blocks equal to 2 m/$s^{2}$. We draw a free-body diagram for the 2-kg mass as shown below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w71\" role=\"presentation\" src=\"images/f086-04.jpg\"/></p>\r\n<p class=\"exp\">Let $P$ represent the force that the 8-kg mass exerts on the 2-kg mass. Writing the second law of motion, we get \\vec{F} − $P = m$\\vec{a}. To find $P$, we substitute the known numbers: 20 − $P$ = (2)(2) = 4. Thus, $P$ = 16 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_8",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A force of 20 N acts horizontally on a mass of 10 kg being pushed along a frictionless incline that makes a 30° angle with the horizontal, as shown below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w48\" role=\"presentation\" src=\"images/f083-02.jpg\"/></p>\r\n<p class=\"exp\">The magnitude of the acceleration of the mass up the incline is equal to</p>",
                "options": [
                    "1.9 m/$s^{2}$",
                    "2.2 m/$s^{2}$",
                    "3.17 m/$s^{2}$",
                    "3.87 m/$s^{2}$"
                ],
                "answer": "C",
                "explanation": "From the given diagram, we see that the force necessary to move the mass up the incline must be in excess of the component force of gravity trying to pull the mass down the incline. The component of gravity down the incline is always given by <i>mg</i> sin θ. Resolving the given force into a component parallel to the incline and a component perpendicular to the incline, we find that the force up the incline is, at the same angle, $F$ cos θ. Thus, in general we would write:</p>\r\n<p class=\"center1\">$F\\cos\\theta - mg\\sin\\theta = ma$</p>\r\n<p class=\"exp\">Substituting the known numbers gives $a$ = 3.17 m/s<span><sup>2</sup></span>.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_9",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "According to the diagram below, what is the tension in the connecting string if the table is frictionless?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w66\" role=\"presentation\" src=\"images/f083-03.jpg\"/></p>",
                "options": [
                    "6.4 N",
                    "13 N",
                    "19.7 N",
                    "25 N"
                ],
                "answer": "C",
                "explanation": "From the given diagram, we see that the 4-kg mass is accelerating to the right and the 2-kg mass is accelerating up. Thus, we write that the sum of all forces, in each direction, equals <i>ma</i>. In the $x$-direction, we have (since the tension in the string will try to pull left) −$T$ + 20 = 4$a$. In the $y$-direction, the tension pulls up against gravity. We therefore write $T$ − 19.6 = 2$a$. Solving for $T$ by eliminating $a$, we get $T$ = 19.7 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_10",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "A mass, $M$, is released from rest on an incline that makes a 42° angle with the horizontal. In 3 s, the mass is observed to have gone a distance of 3 m. What is the coefficient of kinetic friction between the mass and the surface of the incline?</p>",
                "options": [
                    "0.8",
                    "0.7",
                    "0.6",
                    "0.5"
                ],
                "answer": "A",
                "explanation": "We know that the mass accelerates from rest uniformly in 3 s and goes a distance of 3 m. Thus, we can say that</p>\r\n<p class=\"center1\">$d = \\frac{1}{2}at^2$</p>\r\n<p class=\"exp\">Substituting the known number gives us an acceleration of 0.67 m/$s^{2}$. On an incline, the normal force is given by <i>mg</i> cos θ, and so friction can be expressed as $f$ = <i>μmg</i> cos θ. Once again, this force opposes the downward force of gravity parallel to the incline, given by −<i>mg</i> sin θ. In the downward direction, these two forces are added together and set equal to −<i>ma</i>. Thus, we write for this case</p>\r\n<p class=\"center1\">$\\mu (M)(9.8)\\cos 42^\\circ - (M)(9.8)\\sin 42^\\circ = -(M)(0.67)$</p>\r\n<p class=\"exp\">The masses all cancel out, and solving for $\\mu$ gives 0.8 as the coefficient of kinetic friction.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            },
            {
                "id": "ap-topic-phys1-dynamics-q11",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q11)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q12",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q12)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q13",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q13)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q14",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q14)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q15",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q15)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q16",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q16)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q17",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q17)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q18",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q18)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q19",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q19)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-dynamics-q20",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Newton's Laws & Forces in AP AP PHYSICS 1 (Concept Q20)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Newton's Laws & Forces",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Newton's Laws & Forces requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            }
        ],
        "totalQuestions": 20
    }
};
