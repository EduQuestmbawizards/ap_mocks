// Specific Question Bank for Test: ap-topic-physc-rotation
const AP_TEST_DATA = {
    "ap-topic-physc-rotation": {
        "id": "ap-topic-physc-rotation",
        "title": "AP Physics C: Rotational Inertia, Torque & Angular Momentum",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Rotational Inertia, Torque & Angular Momentum",
        "timeLimitMinutes": 18,
        "totalQuestions": 10,
        "questions": [
            {
                "id": "ap-topic-physc-rotation-q1",
                "global_num": 1,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "A disc of radius $6\\text{ cm}$ rotates at an angular speed of $5\\text{ rev/s}$. What is the linear speed of a point on the rim?",
                "options": [
                    "$0.3\\text{ m/s}$",
                    "$1.9\\text{ m/s}$",
                    "$7.4\\text{ m/s}$",
                    "$52\\text{ m/s}$",
                    "$83\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "(B) $$\\omega = 5\\text{ rev/s} \\times 2\\pi\\text{ rad/rev} = 10\\pi\\text{ rad/s} \\approx 31.42\\text{ rad/s}$$\n$$v = r\\omega = (0.06\\text{ m})(10\\pi\\text{ rad/s}) = 0.6\\pi \\approx 1.88\\text{ m/s} \\approx 1.9\\text{ m/s}$$",
                "difficulty": "easy",
                "topic": "Angular to Linear Speed on Rim"
            },
            {
                "id": "ap-topic-physc-rotation-q2",
                "global_num": 2,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "For the same disc in Question 1, what is the total distance traveled by a point on the rim in $40\\text{ min}$?",
                "options": [
                    "$180\\text{ m}$",
                    "$360\\text{ m}$",
                    "$540\\text{ m}$",
                    "$720\\text{ m}$",
                    "$4.5\\text{ km}$"
                ],
                "answer": "E",
                "explanation": "(E) $$t = 40\\text{ min} \\times 60\\text{ s/min} = 2,400\\text{ s}$$\n$$s = vt = (0.6\\pi\\text{ m/s})(2400\\text{ s}) = 1440\\pi\\text{ m} \\approx 4,524\\text{ m} \\approx 4.5\\text{ km}$$",
                "difficulty": "easy",
                "topic": "Rotational Arc Distance over Time"
            },
            {
                "id": "ap-topic-physc-rotation-q3",
                "global_num": 3,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "A disc starts from rest and undergoes angular acceleration of $4\\text{ rad/s}^2$. At an angular displacement of $50\\text{ rad}$, what is its angular speed?",
                "options": [
                    "$12\\text{ rad/s}$",
                    "$15\\text{ rad/s}$",
                    "$16\\text{ rad/s}$",
                    "$20\\text{ rad/s}$",
                    "$23\\text{ rad/s}$"
                ],
                "answer": "D",
                "explanation": "(D) $$\\omega_f^2 = \\omega_0^2 + 2\\alpha\\Delta\\theta = 0 + 2(4\\text{ rad/s}^2)(50\\text{ rad}) = 400 \\implies \\omega_f = 20\\text{ rad/s}$$",
                "difficulty": "easy",
                "topic": "Constant Angular Acceleration Speed"
            },
            {
                "id": "ap-topic-physc-rotation-q4",
                "global_num": 4,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "A rope of length $0.75\\text{ m}$ has a mass $m = 0.1\\text{ kg}$ spun at $120\\text{ rpm}$. What centripetal acceleration is the mass experiencing?",
                "options": [
                    "$19,200\\text{ m/s}^2$",
                    "$10,800\\text{ m/s}^2$",
                    "$90\\text{ m/s}^2$",
                    "$12\\pi^2\\text{ m/s}^2$",
                    "$3\\pi\\text{ m/s}^2$"
                ],
                "answer": "D",
                "explanation": "(D) $$\\omega = 120\\text{ rpm} \\times \\frac{2\\pi\\text{ rad}}{60\\text{ s}} = 4\\pi\\text{ rad/s}$$\n$$a_c = \\omega^2 r = (4\\pi)^2 (0.75\\text{ m}) = 16\\pi^2(0.75) = 12\\pi^2\\text{ m/s}^2$$",
                "difficulty": "medium",
                "topic": "Centripetal Acceleration in Circular Motion"
            },
            {
                "id": "ap-topic-physc-rotation-q5",
                "global_num": 5,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "Joe ($60\\text{ kg}$) and Alice ($30\\text{ kg}$) sit on opposite ends of a level $4\\text{-m}$ seesaw supported at its midpoint. What is the net torque magnitude ($g = 10\\text{ m/s}^2$)?",
                "options": [
                    "$300\\text{ N}\\cdot\\text{m}$",
                    "$600\\text{ N}\\cdot\\text{m}$",
                    "$900\\text{ N}\\cdot\\text{m}$",
                    "$1,200\\text{ N}\\cdot\\text{m}$",
                    "$1,500\\text{ N}\\cdot\\text{m}$"
                ],
                "answer": "B",
                "explanation": "(B) Lever arm from fulcrum to each end: $r = 2\\text{ m}$.\n  $$\\tau_{\\text{net}} = (m_{\\text{Joe}} g)r - (m_{\\text{Alice}} g)r = (60)(10)(2) - (30)(10)(2) = 1200 - 600 = 600\\text{ N}\\cdot\\text{m}$$",
                "difficulty": "easy",
                "topic": "Seesaw Torque Balance & Net Torque"
            },
            {
                "id": "ap-topic-physc-rotation-q6",
                "global_num": 6,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "What is the torque about a pendulum suspension point produced by a bob ($m = 0.50\\text{ kg}$) at length $L = 0.80\\text{ m}$ at angle $\\theta = 30^\\circ$ ($g = 10\\text{ m/s}^2$)?",
                "options": [
                    "$0.5\\text{ N}\\cdot\\text{m}$",
                    "$1.0\\text{ N}\\cdot\\text{m}$",
                    "$1.7\\text{ N}\\cdot\\text{m}$",
                    "$2.0\\text{ N}\\cdot\\text{m}$",
                    "$3.4\\text{ N}\\cdot\\text{m}$"
                ],
                "answer": "D",
                "explanation": "(D) $$\\tau = mg L \\sin\\theta = (0.50\\text{ kg})(10\\text{ m/s}^2)(0.80\\text{ m})\\sin(30^\\circ) = 4.0(0.5) = 2.0\\text{ N}\\cdot\\text{m}$$",
                "difficulty": "medium",
                "topic": "Pendulum Gravitational Torque"
            },
            {
                "id": "ap-topic-physc-rotation-q7",
                "global_num": 7,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "A uniform meter stick of mass $1\\text{ kg}$ is supported at its $50\\text{ cm}$ midpoint. A mass $m = 3\\text{ kg}$ hangs at $x = 0\\text{ cm}$. At what mass $M$ hanging at $x = 80\\text{ cm}$ will the stick remain horizontal?",
                "options": [
                    "$3\\text{ kg}$",
                    "$5\\text{ kg}$",
                    "$6\\text{ kg}$",
                    "$8\\text{ kg}$",
                    "$9\\text{ kg}$"
                ],
                "answer": "B",
                "explanation": "(B) Torque balance about the $50\\text{ cm}$ fulcrum:\n$$m(50\\text{ cm} - 0\\text{ cm}) = M(80\\text{ cm} - 50\\text{ cm}) \\implies (3\\text{ kg})(50\\text{ cm}) = M(30\\text{ cm})$$\n$$M = \\frac{150}{30} = 5\\text{ kg}$$",
                "difficulty": "medium",
                "topic": "Meter Stick Fulcrum Static Equilibrium"
            },
            {
                "id": "ap-topic-physc-rotation-q8",
                "global_num": 8,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "Four point masses $m$ are located at the vertices of a rectangle of side lengths $L$ and $3L$. What is the rotational inertia about an axis passing through the center perpendicular to the plane, where each mass is at distance $L$ from the axis?",
                "options": [
                    "$4mL^2$",
                    "$\\frac{8}{3}mL^2$",
                    "$\\frac{5}{2}mL^2$",
                    "$\\frac{7}{3}mL^2$",
                    "$\\frac{10}{3}mL^2$"
                ],
                "answer": "A",
                "explanation": "(A) $$I = \\sum m_i r_i^2 = 4(m L^2) = 4mL^2$$",
                "difficulty": "easy",
                "topic": "Discrete Point Mass Rotational Inertia"
            },
            {
                "id": "ap-topic-physc-rotation-q9",
                "global_num": 9,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "A block of mass $m$ slides down a frictionless incline of height $h$. A solid cylinder of mass $m$ rolls down an incline of height $H$ without slipping. If both reach the bottom with equal kinetic energies, what is the relation between $h$ and $H$?",
                "options": [
                    "$h = \\frac{4}{3}H$",
                    "$h = \\frac{3}{4}H$",
                    "$h = H$",
                    "$h = \\frac{1}{2}H$",
                    "$h = 2H$"
                ],
                "answer": "C",
                "explanation": "(C) For the block, $K_{\\text{bottom}} = mgh$. For the rolling cylinder, total kinetic energy (translational + rotational) equals potential energy lost: $K_{\\text{bottom}} = mgH$. For equal kinetic energies, $mgh = mgH \\implies h = H$.",
                "difficulty": "medium",
                "topic": "Rolling vs Sliding Kinetic Energy Comparison"
            },
            {
                "id": "ap-topic-physc-rotation-q10",
                "global_num": 10,
                "section": "Rotational Inertia, Torque & Angular Motion",
                "question": "When a cylinder rolls down an incline without slipping, which force produces the torque causing angular rotation?",
                "options": [
                    "Parallel component of gravity",
                    "Perpendicular component of gravity",
                    "Normal force",
                    "Force of static friction",
                    "Force of kinetic friction"
                ],
                "answer": "D",
                "explanation": "(D) Gravity acts at the center of mass ($r = 0$), and the normal force passes directly through the center of mass ($\\vec{r} \\parallel \\vec{F}_N \\implies \\tau = 0$). Static friction acts tangentially at the contact point without slipping, exerting torque $\\tau = f_s R$.",
                "difficulty": "easy",
                "topic": "Static Friction Torque in Rolling Motion"
            }
        ]
    }
};
