// Specific Question Bank for Test: ap-topic-physc-momentum
const AP_TEST_DATA = {
    "ap-topic-physc-momentum": {
        "id": "ap-topic-physc-momentum",
        "title": "AP Physics C: Linear Momentum, Impulse & Center of Mass",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Linear Momentum, Impulse & Center of Mass",
        "timeLimitMinutes": 18,
        "totalQuestions": 10,
        "questions": [
            {
                "id": "ap-topic-physc-momentum-q1",
                "global_num": 1,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "An object of mass $2\\text{ kg}$ has a linear momentum of magnitude $6\\text{ kg}\\cdot\\text{m/s}$. What is this object's kinetic energy?",
                "options": [
                    "$3\\text{ J}$",
                    "$6\\text{ J}$",
                    "$9\\text{ J}$",
                    "$12\\text{ J}$",
                    "$18\\text{ J}$"
                ],
                "answer": "C",
                "explanation": "(C) Using the relation between kinetic energy and momentum ($K = \\frac{p^2}{2m}$):\n  $$K = \\frac{(6\\text{ kg}\\cdot\\text{m/s})^2}{2(2\\text{ kg})} = \\frac{36}{4} = 9\\text{ J}$$",
                "difficulty": "easy",
                "topic": "Momentum-Kinetic Energy Relationship"
            },
            {
                "id": "ap-topic-physc-momentum-q2",
                "global_num": 2,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "An object of mass $8\\text{ kg}$ is moving in a straight line. If the impulse calculated from the force-time graph ($J = \\int F\\,dt$) is $80\\text{ N}\\cdot\\text{s}$, what is its change in speed?",
                "options": [
                    "$16\\text{ m/s}$",
                    "$14\\text{ m/s}$",
                    "$12\\text{ m/s}$",
                    "$10\\text{ m/s}$",
                    "$8\\text{ m/s}$"
                ],
                "answer": "D",
                "explanation": "(D) By the Impulse-Momentum Theorem ($J = \\Delta p = m\\Delta v$):\n  $$\\Delta v = \\frac{J}{m} = \\frac{80\\text{ N}\\cdot\\text{s}}{8\\text{ kg}} = 10\\text{ m/s}$$",
                "difficulty": "easy",
                "topic": "Impulse-Momentum Theorem & Velocity Change"
            },
            {
                "id": "ap-topic-physc-momentum-q3",
                "global_num": 3,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "A box of mass $2\\text{ kg}$ accelerates in a straight line from $4\\text{ m/s}$ to $8\\text{ m/s}$ due to a force applied for $0.5\\text{ s}$. Find the average strength of this force.",
                "options": [
                    "$4\\text{ N}$",
                    "$8\\text{ N}$",
                    "$12\\text{ N}$",
                    "$14\\text{ N}$",
                    "$16\\text{ N}$"
                ],
                "answer": "E",
                "explanation": "(E) $$F_{\\text{avg}} = \\frac{m(v_f - v_i)}{\\Delta t} = \\frac{(2\\text{ kg})(8\\text{ m/s} - 4\\text{ m/s})}{0.5\\text{ s}} = \\frac{8}{0.5} = 16\\text{ N}$$",
                "difficulty": "easy",
                "topic": "Average Impact Force Calculation"
            },
            {
                "id": "ap-topic-physc-momentum-q4",
                "global_num": 4,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "A ball of mass $m$ traveling horizontally with velocity $v$ strikes a massive vertical wall and rebounds back along its original direction with no change in speed. What is the magnitude of the impulse delivered by the wall to the ball?",
                "options": [
                    "$0$",
                    "$\\frac{1}{2}mv$",
                    "$mv$",
                    "$2mv$",
                    "$4mv$"
                ],
                "answer": "D",
                "explanation": "(D) Taking the rebound direction as positive:\n$$J = |\\Delta p| = |m(v) - m(-v)| = 2mv$$",
                "difficulty": "easy",
                "topic": "Elastic Wall Rebound Impulse"
            },
            {
                "id": "ap-topic-physc-momentum-q5",
                "global_num": 5,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "Two objects, one of mass $3\\text{ kg}$ moving at $2\\text{ m/s}$ and the other of mass $5\\text{ kg}$ moving at $2\\text{ m/s}$ toward each other, collide head-on in a perfectly inelastic collision. Find the speed of the objects after the collision.",
                "options": [
                    "$0.25\\text{ m/s}$",
                    "$0.5\\text{ m/s}$",
                    "$0.75\\text{ m/s}$",
                    "$1.0\\text{ m/s}$",
                    "$2.0\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "(B) Using conservation of linear momentum:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f \\implies (3)(2) + (5)(-2) = (3 + 5)v_f$$\n$$6 - 10 = 8v_f \\implies v_f = -\\frac{4}{8} = -0.5\\text{ m/s}$$\nThe resulting speed is $0.5\\text{ m/s}$.",
                "difficulty": "medium",
                "topic": "1D Perfectly Inelastic Collision Velocity"
            },
            {
                "id": "ap-topic-physc-momentum-q6",
                "global_num": 6,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "A student balances a meter stick at its midpoint ($50\\text{ cm}$). Given hanging masses $m_1 = 6\\text{ kg}$ at $x = 0\\text{ cm}$ and $m_2 = 2\\text{ kg}$ at $x = 100\\text{ cm}$, how far from the left edge should a third mass $m_3 = 10\\text{ kg}$ be hung to balance the meter stick?",
                "options": [
                    "$40\\text{ cm}$",
                    "$50\\text{ cm}$",
                    "$60\\text{ cm}$",
                    "$70\\text{ cm}$",
                    "$80\\text{ cm}$"
                ],
                "answer": "D",
                "explanation": "(D) For rotational static equilibrium about the midpoint ($50\\text{ cm}$), the system center of mass must equal $50\\text{ cm}$ ($0.50\\text{ m}$):\n  $$x_{\\text{cm}} = \\frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3} \\implies 0.50 = \\frac{6(0) + 2(1.0) + 10 x_3}{6 + 2 + 10}$$\n  $$0.50(18) = 2.0 + 10 x_3 \\implies 9.0 - 2.0 = 10 x_3 \\implies x_3 = 0.70\\text{ m} = 70\\text{ cm}$$",
                "difficulty": "medium",
                "topic": "Static Equilibrium & Center of Mass"
            },
            {
                "id": "ap-topic-physc-momentum-q7",
                "global_num": 7,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "Two objects move toward each other, collide, and separate. If there was no net external force acting on the objects, but some kinetic energy was lost, then:",
                "options": [
                    "the collision was elastic and momentum was conserved",
                    "the collision was elastic and momentum was not conserved",
                    "the collision was not elastic and total linear momentum was conserved",
                    "the collision was not elastic and momentum was not conserved",
                    "Cannot be determined"
                ],
                "answer": "C",
                "explanation": "(C) With zero net external force ($F_{\\text{net}} = 0$), linear momentum is strictly conserved in all collisions. Because mechanical kinetic energy is lost, the collision is by definition inelastic.",
                "difficulty": "easy",
                "topic": "Collision Elasticity & Momentum Conservation"
            },
            {
                "id": "ap-topic-physc-momentum-q8",
                "global_num": 8,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "Three thin, uniform rods each of length $L$ are arranged in an inverted U-shape. The two vertical arms each have mass $m$; the horizontal top rod has mass $2m$. How far below the midpoint of the horizontal rod is the center of mass of the assembly?",
                "options": [
                    "$L/8$",
                    "$L/4$",
                    "$3L/8$",
                    "$L/2$",
                    "$3L/4$"
                ],
                "answer": "B",
                "explanation": "(B) Set $y = 0$ at the horizontal rod. The center of mass of the top rod ($2m$) is at $y = 0$. Each vertical rod ($m$) has its center of mass at $y = -L/2$.\n  $$y_{\\text{cm}} = \\frac{(2m)(0) + m(-L/2) + m(-L/2)}{2m + m + m} = \\frac{-mL}{4m} = -\\frac{1}{4}L$$\nThe assembly center of mass is located a distance of $L/4$ below the horizontal rod.",
                "difficulty": "medium",
                "topic": "U-Shaped Rod Assembly Center of Mass"
            },
            {
                "id": "ap-topic-physc-momentum-q9",
                "global_num": 9,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "A car of mass $1,000\\text{ kg}$ collides head-on with a truck of mass $2,000\\text{ kg}$, both initially moving at $21\\text{ m/s}$. The collision is perfectly inelastic. After the crash, the combined wreckage skids to a halt. How much work is done by friction after the crash?",
                "options": [
                    "$73,500\\text{ J}$",
                    "$-73,500\\text{ J}$",
                    "$147,000\\text{ J}$",
                    "$-147,000\\text{ J}$",
                    "$220,500\\text{ J}$"
                ],
                "answer": "B",
                "explanation": "(B) Post-collision velocity:\n$$v_f = \\frac{(2000)(21) + (1000)(-21)}{2000 + 1000} = \\frac{21000}{3000} = 7\\text{ m/s}$$\nKinetic energy immediately after collision:\n$$K = \\frac{1}{2}(3000\\text{ kg})(7\\text{ m/s})^2 = 1500(49) = 73,500\\text{ J}$$\nWork done by friction to stop the wreckage ($W_f = \\Delta K = 0 - K$):\n$$W_f = -73,500\\text{ J}$$",
                "difficulty": "medium",
                "topic": "Inelastic Collision & Post-Crash Friction Work"
            },
            {
                "id": "ap-topic-physc-momentum-q10",
                "global_num": 10,
                "section": "Linear Momentum, Impulse & Center of Mass",
                "question": "Block 1 ($m_1 = 2\\text{ kg}$, $v_1 = 3\\text{ m/s}$) and Block 2 ($m_2 = 5\\text{ kg}$, $v_2 = 2\\text{ m/s}$ towards block 1) start $1\\text{ m}$ apart and collide perfectly inelastically. How long after collision does it take to return to one of the starting positions?",
                "options": [
                    "$0.55\\text{ s}$",
                    "$0.75\\text{ s}$",
                    "$0.95\\text{ s}$",
                    "$1.05\\text{ s}$",
                    "$1.25\\text{ s}$"
                ],
                "answer": "D",
                "explanation": "(D) Time to collide: $t_{\\text{coll}} = \\frac{1\\text{ m}}{3 + 2\\text{ m/s}} = 0.2\\text{ s}$. Collision point is $d_1 = (3)(0.2) = 0.6\\text{ m}$ from Block 1's start.  \nPost-collision velocity:\n$$v_f = \\frac{(2)(3) + (5)(-2)}{2 + 5} = \\frac{-4}{7}\\text{ m/s}$$\nDistance back to Block 1's starting position is $0.6\\text{ m}$.  \nTime: $t = \\frac{0.6\\text{ m}}{4/7\\text{ m/s}} = \\frac{4.2}{4} = 1.05\\text{ s}$.",
                "difficulty": "hard",
                "topic": "Inelastic Collision Rebound Return Time"
            }
        ]
    }
};
