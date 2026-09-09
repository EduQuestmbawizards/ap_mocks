// Specific Question Bank for Test: ap-topic-phys1-rotation
const AP_TEST_DATA = {
    "ap-topic-phys1-rotation": {
        "id": "ap-topic-phys1-rotation",
        "title": "AP Physics 1: Rotational Motion & Torque",
        "subtitle": "Torque, static equilibrium, rotational inertia, rotational kinematics, rolling objects, angular momentum",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Rotational Motion",
        "questions": [
            {
                "id": "tp_phys1_rot_1",
                "topic": "Rotational Motion",
                "difficulty": "easy",
                "question": "<p>A 45-kg girl is sitting on a seesaw 0.6 m to the left of the central fulcrum. How far to the right of the fulcrum should a 60-kg boy sit so that the seesaw balances horizontally in rotational equilibrium?</p>",
                "options": [
                    "0.30 m",
                    "0.35 m",
                    "0.40 m",
                    "0.45 m"
                ],
                "answer": "D",
                "explanation": "To remain in balance, the two torques must be equal. The force on each side is given by the weight, <i>mg</i>. The moment arm distances are 0.6 m and $x$. Since the factor $g$ will appear on both sides of the torque balance equation, we can eliminate it and write</p>\r\n<p class=\"center1\">$(45)(0.6) = (60)x \\text{ implies } x = 0.45\\text{ m}$</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_2",
                "topic": "Rotational Motion",
                "difficulty": "easy",
                "question": "<p>A uniform meter stick is pivoted at the 50-cm mark. A 20-g mass is suspended at the 20-cm mark (30 cm from the fulcrum), and a 15-g mass is suspended at the 70-cm mark (20 cm from the fulcrum). What is the position on the meter stick where a 10-g mass should be hung to balance the stick horizontally?</p>",
                "options": [
                    "80 cm mark",
                    "60 cm mark",
                    "75 cm mark",
                    "25 cm mark",
                    "90 cm mark"
                ],
                "answer": "A",
                "explanation": "Torque equilibrium about the 50-cm pivot: Counter-clockwise torque = (20 g)(30 cm) = 600 g·cm. Clockwise torque from 15 g mass = (15 g)(20 cm) = 300 g·cm. Deficit on clockwise side = 600 - 300 = 300 g·cm. The 10-g mass must be placed at distance d to the right: (10 g)(d) = 300 => d = 30 cm to the right of the 50-cm mark, which is at the 80 cm mark."
            },
            {
                "id": "tp_phys1_rot_3",
                "topic": "Rotational Motion",
                "difficulty": "easy",
                "question": "<p>A solid stepped cylinder consists of an outer radius r_1 = 0.4 m and an inner hub radius r_2 = 0.2 m, pivoted on a frictionless axle. A string wound around the outer cylinder pulls with force F_1 = 30 N clockwise, and a string wound around the inner hub pulls with force F_2 = 50 N counter-clockwise. What is the net torque on the cylinder?</p>",
                "options": [
                    "2.25 N · m",
                    "−2.25 N · m",
                    "0.5 N · m",
                    "−0.5 N · m"
                ],
                "answer": "D",
                "explanation": "The net torque is given by the vector sum of all torques. \\vec{F}<sub>2</sub> provides a counterclockwise positive torque, while \\vec{F}<sub>1</sub> provides a clockwise negative torque. Each radius is the necessary moment arm distance. Thus, we have</p>\r\n<p class=\"center1\">$\\tau_{\\text{net}} = (5)(0.35) - (3)(0.75) = -0.5\\text{ N}\\cdot\\text{m}$</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_4",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "What is the net torque about an axis through point <span>$A$</span>?</p>",
                "options": [
                    "16.8 N · m",
                    "15.2 N · m",
                    "−5.5 N · m",
                    "−7.8 N · m"
                ],
                "answer": "A",
                "explanation": "In this problem, the net torque about point $A$ implies that the force passing through point $A$ does not contribute to the net torque. Also, we need the components of the remaining forces perpendicular to the beam. From the diagram, we see that the 30-N force acts counterclockwise (positive), while the 10-N force acts clockwise (negative). Thus:</p>\r\n<p class=\"center1\">$\\tau_{\\text{net}} = (30)(\\cos 45^\\circ)(1.5) - (10)(\\sin 30^\\circ)(3) = 16.8\\text{ N}\\cdot\\text{m}$</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_5",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "What is the net torque about an axis through point <span>$C$</span>?</p>",
                "options": [
                    "3.5 N · m",
                    "7.5 N · m",
                    "−15.2 N · m",
                    "5.9 N · m"
                ],
                "answer": "B",
                "explanation": "In this problem, since the pivot is now set at point $C$, we can eliminate the 30-N force passing through point $C$ as a contributor to the torque. Again, we see that the 20-N force will act in a counterclockwise direction, while the 10-N force will act clockwise. Each force is 1.5 m from the pivot. We also need the component of each force perpendicular to the beam. Thus:</p>\r\n<p class=\"center1\">$\\tau_{\\text{net}} = (20)(\\sin 30^\\circ)(1.5) - (10)(\\sin 30^\\circ)(1.5) = 7.5\\text{ N}\\cdot\\text{m}$</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_6",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Compute the average angular acceleration and the angular displacement during the 2 seconds a rotating object speeds up from 0.5 rad/s to 0.7 rad/s.</p>",
                "options": [
                    "α = 0.1 rad/$s^{2}$    Δθ = 0.3 radians",
                    "α = 0.2 rad/$s^{2}$    Δθ = 0.5 radians",
                    "α = 0.1 rad/$s^{2}$    Δθ = 1.2 radians",
                    "α = 0.2 rad/$s^{2}$    Δθ = 1.2 radians"
                ],
                "answer": "C",
                "explanation": "$ \\tau_{\\text{net}} = I\\alpha $</p>\r\n<p class=\"center1\">$\\Delta\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0.5(2) + \\frac{1}{2}(0.1)(2)^2 = 1 + 0.2 = 1.2\\text{ radians}$</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_7",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "An object with a rotational inertia $I$ experiences a net torque of $T$. If the object is initially at rest, what is its angular speed after 3 seconds of this torque?</p>",
                "options": [
                    "3<i>I T</i>",
                    "9<i>I T</i>",
                    "3$I$ /$T$",
                    "3$T$/$I$"
                ],
                "answer": "D",
                "explanation": "Since τ = $I$α and $ L = I\\omega $ we can combine and solve for Δω:</p>\r\n<p class=\"center1\">$\\Delta\\omega = (T/I)\\Delta t = 3T/I$</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_8",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "If a spinning ball of clay on top of a freely turning frictionless tabletop increases its rotational inertia by 50 percent by bulging outward, what will happen to the rotational speed of the clay and tabletop?</p>",
                "options": [
                    "It will be half as fast.",
                    "It will be 1.5 times faster.",
                    "It will be 4 times slower.",
                    "It will be slower by a factor of 2/3."
                ],
                "answer": "D",
                "explanation": "Angular momentum is conserved:</p>\r\n<p class=\"center1\">$I_i \\omega_i = I_f \\omega_f, I_f = (3/2)I_i, I_i \\omega_i = ((3/2)I_i)\\omega_f, \\omega_f = 2/3\\omega_i$</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            },
            {
                "id": "ap-topic-phys1-rotation-q9",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q9)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q10",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q10)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q11",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q11)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q12",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q12)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q13",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q13)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q14",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q14)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q15",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q15)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q16",
                "topic": "Rotational Motion",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q16)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q17",
                "topic": "Rotational Motion",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q17)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q18",
                "topic": "Rotational Motion",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q18)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q19",
                "topic": "Rotational Motion",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q19)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-rotation-q20",
                "topic": "Rotational Motion",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Rotational Motion in AP AP PHYSICS 1 (Concept Q20)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Rotational Motion",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Rotational Motion requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            }
        ],
        "totalQuestions": 20
    }
};
