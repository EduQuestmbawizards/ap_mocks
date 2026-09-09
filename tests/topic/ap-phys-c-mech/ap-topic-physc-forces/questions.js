// Specific Question Bank for Test: ap-topic-physc-forces
const AP_TEST_DATA = {
    "ap-topic-physc-forces": {
        "id": "ap-topic-physc-forces",
        "title": "AP Physics C: Newton's Laws & Friction Dynamics",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Newton's Laws & Friction Dynamics",
        "timeLimitMinutes": 20,
        "totalQuestions": 12,
        "questions": [
            {
                "id": "ap-topic-physc-forces_q1",
                "global_num": 1,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A box is dragged across a table at constant velocity by a string. Which of the following is a Newton's Third Law action-reaction pair?  I. Force of gravity on the box and normal force on the box  II. Force of friction on the box and tension force on the box  III. Force of the box pushing down on the table and normal force of the table pushing up on the box",
                "options": [
                    "I only",
                    "I and II only",
                    "II only",
                    "I and III only",
                    "III only"
                ],
                "answer": "E",
                "explanation": "(E) An action-reaction pair must involve mutual forces of the same physical type exerted between the same two objects in opposite directions. The table pushing up on the box ($F_{N,\\text{table on box}}$) and the box pushing down on the table ($F_{N,\\text{box on table}}$) act on each other, satisfying Newton's Third Law.",
                "difficulty": "easy",
                "topic": "Newton's Third Law Action-Reaction Pairs"
            },
            {
                "id": "ap-topic-physc-forces_q2",
                "global_num": 2,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A person who weighs $800\\text{ N}$ steps onto a scale in an elevator accelerating upward at $5\\text{ m/s}^2$. What will the scale read? ($g = 10\\text{ m/s}^2$)",
                "options": [
                    "$400\\text{ N}$",
                    "$800\\text{ N}$",
                    "$1,000\\text{ N}$",
                    "$1,200\\text{ N}$",
                    "$1,600\\text{ N}$"
                ],
                "answer": "D",
                "explanation": "(D) Mass $m = \\frac{W}{g} = \\frac{800\\text{ N}}{10\\text{ m/s}^2} = 80\\text{ kg}$.\nUsing Newton's Second Law with upward as positive:\n  $$F_N - mg = ma \\implies F_N = m(g + a) = (80\\text{ kg})(10 + 5\\text{ m/s}^2) = 1,200\\text{ N}$$",
                "difficulty": "easy",
                "topic": "Apparent Weight in Accelerating Elevator"
            },
            {
                "id": "ap-topic-physc-forces_q3",
                "global_num": 3,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A horizontal force of $20\\text{ N}$ pulls on a $1.0\\text{ kg}$ block attached by a string to a $2.0\\text{ kg}$ block on a frictionless surface. Find the tension $F_T$ in the connecting string and the acceleration $a$ of the system.",
                "options": [
                    "$F_T = 13.3\\text{ N},\\ a = 10\\text{ m/s}^2$",
                    "$F_T = 13.3\\text{ N},\\ a = 20\\text{ m/s}^2$",
                    "$F_T = 15\\text{ N},\\ a = 6.7\\text{ m/s}^2$",
                    "$F_T = 13.3\\text{ N},\\ a = 6.7\\text{ m/s}^2$",
                    "$F_T = 20\\text{ N},\\ a = 6.7\\text{ m/s}^2$"
                ],
                "answer": "D",
                "explanation": "(D) System acceleration:\n  $$a = \\frac{F_{\\text{applied}}}{m_1 + m_2} = \\frac{20\\text{ N}}{1.0 + 2.0\\text{ kg}} = \\frac{20}{3}\\text{ m/s}^2 \\approx 6.7\\text{ m/s}^2$$\nTension pulling the trailing $2.0\\text{ kg}$ block:\n  $$F_T = m_2 a = (2.0\\text{ kg})\\left(\\frac{20}{3}\\text{ m/s}^2\\right) = \\frac{40}{3}\\text{ N} \\approx 13.3\\text{ N}$$",
                "difficulty": "medium",
                "topic": "Two-Block System Tension & Acceleration"
            },
            {
                "id": "ap-topic-physc-forces_q4",
                "global_num": 4,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A force of $20\\text{ N}$ pulls a chain of three frictionless blocks: $3.0\\text{ kg} - 2.0\\text{ kg} - 1.0\\text{ kg}$. Find $F_{T1}$ (between $1\\text{ kg}$ and $2\\text{ kg}$), $F_{T2}$ (between $2\\text{ kg}$ and $3\\text{ kg}$), and acceleration $a$.",
                "options": [
                    "$F_{T1} = 1\\text{ N},\\ a = 1\\text{ m/s}^2$",
                    "$F_{T1} = 3.3\\text{ N},\\ F_{T2} = 3.3\\text{ N},\\ a = 3.3\\text{ m/s}^2$",
                    "$F_{T1} = 3.3\\text{ N},\\ F_{T2} = 10\\text{ N},\\ a = 3.3\\text{ m/s}^2$",
                    "$F_{T1} = 3.3\\text{ N},\\ F_{T2} = 10\\text{ N},\\ a = 6.7\\text{ m/s}^2$",
                    "$F_{T1} = 10\\text{ N},\\ a = 6.7\\text{ m/s}^2$"
                ],
                "answer": "C",
                "explanation": "(C) $$a = \\frac{20\\text{ N}}{1.0 + 2.0 + 3.0\\text{ kg}} = \\frac{20}{6}\\text{ m/s}^2 = 3.33\\text{ m/s}^2$$\n$$F_{T1} = m_1 a = (1.0\\text{ kg})(3.33\\text{ m/s}^2) = 3.33\\text{ N}$$\n$$F_{T2} = (m_1 + m_2)a = (1.0 + 2.0\\text{ kg})(3.33\\text{ m/s}^2) = 10.0\\text{ N}$$",
                "difficulty": "medium",
                "topic": "Three-Block Frictionless Train Tensions"
            },
            {
                "id": "ap-topic-physc-forces_q5",
                "global_num": 5,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A box is placed at rest on a ramp ($\\theta = 30^\\circ, \\mu_s = 0.5$). The box will:",
                "options": [
                    "Accelerate down the ramp",
                    "Accelerate briefly then stop",
                    "Move with constant velocity",
                    "Not move",
                    "Cannot be determined"
                ],
                "answer": "A",
                "explanation": "(A) Downhill gravitational component: $F_{g,\\parallel} = mg\\sin(30^\\circ) = 0.50\\,mg$.\nMaximum static friction force:\n  $$f_{s,\\max} = \\mu_s mg\\cos(30^\\circ) = (0.5)(0.866\\,mg) \\approx 0.433\\,mg$$\nBecause $F_{g,\\parallel} > f_{s,\\max}$ ($0.50\\,mg > 0.433\\,mg$), the net force down the ramp is positive, and the box will accelerate down.",
                "difficulty": "medium",
                "topic": "Incline Static Friction Threshold"
            },
            {
                "id": "ap-topic-physc-forces_q6",
                "global_num": 6,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "In an Atwood machine with hanging masses $m$ and $4m$, find the acceleration.",
                "options": [
                    "$0.2g$",
                    "$0.4g$",
                    "$0.6g$",
                    "$0.75g$",
                    "$0.8g$"
                ],
                "answer": "C",
                "explanation": "(C) $$a = \\frac{m_2 - m_1}{m_1 + m_2}g = \\frac{4m - m}{4m + m}g = \\frac{3}{5}g = 0.6g$$",
                "difficulty": "easy",
                "topic": "Atwood Machine System Acceleration"
            },
            {
                "id": "ap-topic-physc-forces_q7",
                "global_num": 7,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A $20\\text{ N}$ force pulls a $2.0\\text{ kg}$ block connected to a $1.0\\text{ kg}$ trailing block on a rough surface ($\\mu_k = 0.2$). Find the tension $F_T$ and acceleration $a$ ($g = 10\\text{ m/s}^2$).",
                "options": [
                    "$F_T = 1\\text{ N},\\ a = 4.7\\text{ m/s}^2$",
                    "$F_T = 3.3\\text{ N},\\ a = 4.7\\text{ m/s}^2$",
                    "$F_T = 3.3\\text{ N},\\ a = 6.7\\text{ m/s}^2$",
                    "$F_T = 6.7\\text{ N},\\ a = 6.7\\text{ m/s}^2$",
                    "$F_T = 6.7\\text{ N},\\ a = 4.7\\text{ m/s}^2$"
                ],
                "answer": "E",
                "explanation": "(E) Total friction force: $f_{\\text{total}} = \\mu_k(m_1 + m_2)g = (0.2)(3.0\\text{ kg})(10\\text{ m/s}^2) = 6\\text{ N}$.\nAcceleration: $a = \\frac{F - f_{\\text{total}}}{m_1 + m_2} = \\frac{20 - 6}{3} = \\frac{14}{3} \\approx 4.7\\text{ m/s}^2$.\nTension on the $1.0\\text{ kg}$ trailing block:\n  $$F_T - f_1 = m_1 a \\implies F_T = (0.2)(1.0)(10) + (1.0)(4.7) = 2.0 + 4.7 = 6.7\\text{ N}$$",
                "difficulty": "medium",
                "topic": "Two-Block System with Kinetic Friction"
            },
            {
                "id": "ap-topic-physc-forces_q8",
                "global_num": 8,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "An object slides down a frictionless incline of angle $\\theta$ and reaches final speed $v$. On a planet with twice Earth's gravitational acceleration ($2g$), what will be its final speed?",
                "options": [
                    "$v$",
                    "$\\sqrt{2}v$",
                    "$2v$",
                    "$4v$",
                    "$v/2$"
                ],
                "answer": "B",
                "explanation": "(B) Using $v = \\sqrt{2ad} = \\sqrt{2(g\\sin\\theta)d} \\propto \\sqrt{g}$. Doubling $g$ scales the final velocity by a factor of $\\sqrt{2}$, giving $v_{\\text{new}} = \\sqrt{2}v$.",
                "difficulty": "easy",
                "topic": "Incline Gravitational Scaling"
            },
            {
                "id": "ap-topic-physc-forces_q9",
                "global_num": 9,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A roller coaster completes a loop of radius $r = 25\\text{ m}$. What is the minimum speed needed at the top of the loop for riders to remain safely in contact with the track? ($g = 10\\text{ m/s}^2$)",
                "options": [
                    "$12.7\\text{ m/s}$",
                    "$15.8\\text{ m/s}$",
                    "$21.2\\text{ m/s}$",
                    "$29.3\\text{ m/s}$",
                    "$33.3\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "(B) At critical cut-off speed, normal force $F_N \\to 0$, so gravity alone provides the centripetal acceleration:\n  $$\\frac{mv^2}{r} = mg \\implies v = \\sqrt{gr} = \\sqrt{(10\\text{ m/s}^2)(25\\text{ m})} = \\sqrt{250} \\approx 15.8\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Vertical Loop Minimum Cut-Off Speed"
            },
            {
                "id": "ap-topic-physc-forces_q10",
                "global_num": 10,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "A bucket of mass $3\\text{ kg}$ on a $0.6\\text{-m}$ rope is whirled in a vertical circle. At the lowest point, the tension is $50\\text{ N}$. What is the speed of the bucket? ($g = 10\\text{ m/s}^2$)",
                "options": [
                    "$1\\text{ m/s}$",
                    "$2\\text{ m/s}$",
                    "$3\\text{ m/s}$",
                    "$4\\text{ m/s}$",
                    "$5\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "(B) At the bottom of the circle: $F_T - mg = \\frac{mv^2}{r}$.\n  $$50\\text{ N} - (3\\text{ kg})(10\\text{ m/s}^2) = \\frac{3 v^2}{0.6} \\implies 20 = 5v^2 \\implies v^2 = 4 \\implies v = 2\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Vertical Circular Motion Bottom Tension"
            },
            {
                "id": "ap-topic-physc-forces_q11",
                "global_num": 11,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "What is the critical speed at the top of the vertical circle for the bucket in Question 10 so the rope does not become slack?",
                "options": [
                    "$0.6\\text{ m/s}$",
                    "$1.8\\text{ m/s}$",
                    "$2.4\\text{ m/s}$",
                    "$3.2\\text{ m/s}$",
                    "$4.8\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "(C) $$v_{\\text{critical}} = \\sqrt{gr} = \\sqrt{(10\\text{ m/s}^2)(0.60\\text{ m})} = \\sqrt{6.0} \\approx 2.45\\text{ m/s} \\approx 2.4\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Vertical String Circle Critical Apex Speed"
            },
            {
                "id": "ap-topic-physc-forces_q12",
                "global_num": 12,
                "section": "Newton's Laws & Friction Dynamics",
                "question": "An object moves at constant speed in a circular path of radius $r$ at 1 revolution per second. What is its centripetal acceleration?",
                "options": [
                    "$2\\pi r$",
                    "$2\\pi^2 r$",
                    "$2\\pi^2 r^2$",
                    "$4\\pi^2 r$",
                    "$4\\pi^2 r^2$"
                ],
                "answer": "D",
                "explanation": "(D) With angular frequency $\\omega = 2\\pi f = 2\\pi(1) = 2\\pi\\text{ rad/s}$:\n  $$a_c = \\omega^2 r = (2\\pi)^2 r = 4\\pi^2 r$$",
                "difficulty": "easy",
                "topic": "Centripetal Acceleration & Angular Frequency"
            }
        ]
    }
};
