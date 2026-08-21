// Specific Question Bank for Test: ap-topic-physc-momentum-rotation-shm-grav
const AP_TEST_DATA = {
    "ap-topic-physc-momentum-rotation-shm-grav": {
        "id": "ap-topic-physc-momentum-rotation-shm-grav",
        "title": "AP Physics C: Momentum, Rotation, Oscillations & Gravitation",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Momentum, Rotation, Oscillations & Gravitation",
        "timeLimitMinutes": 45,
        "totalQuestions": 30,
        "questions": [
            {
                "id": "mrsg-q1",
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
                "id": "mrsg-q2",
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
                "id": "mrsg-q3",
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
                "id": "mrsg-q4",
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
                "id": "mrsg-q5",
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
                "id": "mrsg-q6",
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
                "id": "mrsg-q7",
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
                "id": "mrsg-q8",
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
                "id": "mrsg-q9",
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
                "id": "mrsg-q10",
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
            },
            {
                "id": "mrsg-q11",
                "global_num": 11,
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
                "id": "mrsg-q12",
                "global_num": 12,
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
                "id": "mrsg-q13",
                "global_num": 13,
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
                "id": "mrsg-q14",
                "global_num": 14,
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
                "id": "mrsg-q15",
                "global_num": 15,
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
                "id": "mrsg-q16",
                "global_num": 16,
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
                "id": "mrsg-q17",
                "global_num": 17,
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
                "id": "mrsg-q18",
                "global_num": 18,
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
                "id": "mrsg-q19",
                "global_num": 19,
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
                "id": "mrsg-q20",
                "global_num": 20,
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
            },
            {
                "id": "mrsg-q21",
                "global_num": 21,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "Which of the following are characteristics of simple harmonic motion?  I. Acceleration is constant.  II. Restoring force is proportional to displacement.  III. Frequency is independent of amplitude.",
                "options": [
                    "II only",
                    "I and II only",
                    "I and III only",
                    "II and III only",
                    "I, II, and III"
                ],
                "answer": "D",
                "explanation": "(D) In SHM, acceleration $a(x) = -\\omega^2 x$ varies with displacement, so I is false. By Hooke's Law, $F = -kx$ (II is true), and angular frequency $\\omega = \\sqrt{k/m}$ does not depend on amplitude $A$ (III is true).",
                "difficulty": "easy",
                "topic": "Simple Harmonic Motion Characteristics"
            },
            {
                "id": "mrsg-q22",
                "global_num": 22,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "What combination of parameters maximizes the oscillation frequency of a mass-spring oscillator?",
                "options": [
                    "Large $m$, small $k$",
                    "Small $m$, large $k$",
                    "Large amplitude, large $m$",
                    "Small amplitude, small $k$",
                    "Large amplitude, small $k$"
                ],
                "answer": "B",
                "explanation": "(B) $$f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$$\nFrequency is maximized by choosing the largest spring constant $k$ and the smallest mass $m$, and is independent of amplitude.",
                "difficulty": "easy",
                "topic": "Mass-Spring Oscillator Frequency Maximization"
            },
            {
                "id": "mrsg-q23",
                "global_num": 23,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "A simple pendulum of length $L$ is pulled to initial position and released from rest, dropping vertical height $h$ to equilibrium. What is its maximum speed at the bottom?",
                "options": [
                    "$gh$",
                    "$\\sqrt{2gh}$",
                    "$\\sqrt{2gd}$",
                    "$\\sqrt{2gL}$",
                    "$2gh$"
                ],
                "answer": "B",
                "explanation": "(B) By conservation of mechanical energy:\n$$mgh = \\frac{1}{2}mv_{\\max}^2 \\implies v_{\\max} = \\sqrt{2gh}$$",
                "difficulty": "easy",
                "topic": "Simple Pendulum Maximum Speed"
            },
            {
                "id": "mrsg-q24",
                "global_num": 24,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "In a spring-mass oscillator, if mass is doubled while keeping oscillation amplitude $A$ constant, the maximum speed will:",
                "options": [
                    "decrease by a factor of 4",
                    "decrease by a factor of 2",
                    "decrease by a factor of $\\sqrt{2}$",
                    "remain the same",
                    "increase by a factor of 2"
                ],
                "answer": "C",
                "explanation": "(C) $$v_{\\max} = \\omega A = \\sqrt{\\frac{k}{m}}A \\propto \\frac{1}{\\sqrt{m}}$$\nDoubling the mass scales maximum speed by $\\frac{1}{\\sqrt{2}}$.",
                "difficulty": "medium",
                "topic": "Oscillator Mass Scaling & Max Speed"
            },
            {
                "id": "mrsg-q25",
                "global_num": 25,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "A vertical spring ($L_0 = 40\\text{ cm}, k = 400\\text{ N/m}$) hangs with mass $m = 10\\text{ kg}$. What is the total equilibrium length of the spring ($g = 10\\text{ m/s}^2$)?",
                "options": [
                    "$25\\text{ cm}$",
                    "$35\\text{ cm}$",
                    "$40\\text{ cm}$",
                    "$50\\text{ cm}$",
                    "$65\\text{ cm}$"
                ],
                "answer": "E",
                "explanation": "(E) Extension at equilibrium:\n$$x = \\frac{mg}{k} = \\frac{(10\\text{ kg})(10\\text{ m/s}^2)}{400\\text{ N/m}} = 0.25\\text{ m} = 25\\text{ cm}$$\nTotal length: $L = L_0 + x = 40\\text{ cm} + 25\\text{ cm} = 65\\text{ cm}$.",
                "difficulty": "medium",
                "topic": "Vertical Hanging Spring Total Length"
            },
            {
                "id": "mrsg-q26",
                "global_num": 26,
                "section": "Planetary Gravitation & Orbits",
                "question": "An object at altitude $2R_E$ above Earth's surface experiences gravitational force $F_0$. If its altitude is doubled ($4R_E$), what is the new gravitational force?",
                "options": [
                    "$F_0/4$",
                    "$F_0/25$",
                    "$2F_0$",
                    "$4F_0/9$",
                    "$9F_0/25$"
                ],
                "answer": "E",
                "explanation": "(E) Initial orbital radius from Earth's center: $r_1 = R_E + 2R_E = 3R_E$.  \nFinal orbital radius: $r_2 = R_E + 4R_E = 5R_E$.\n  $$\\frac{F_2}{F_1} = \\frac{r_1^2}{r_2^2} = \\frac{(3R_E)^2}{(5R_E)^2} = \\frac{9}{25} \\implies F_2 = \\frac{9}{25}F_0$$",
                "difficulty": "medium",
                "topic": "Inverse-Square Gravitational Force Scaling"
            },
            {
                "id": "mrsg-q27",
                "global_num": 27,
                "section": "Planetary Gravitation & Orbits",
                "question": "An object has weight $w$ on Earth's surface. At a height $2R_E$ above the surface, its mass and weight are:",
                "options": [
                    "mass $m/2$, weight $w/2$",
                    "mass $m$, weight $w/2$",
                    "mass $m/2$, weight $w/4$",
                    "mass $m$, weight $w/4$",
                    "mass $m$, weight $w/9$"
                ],
                "answer": "E",
                "explanation": "(E) Mass is invariant ($m$). Distance from Earth's center is $r = R_E + 2R_E = 3R_E$.\n  $$w_{\\text{new}} = \\frac{GMm}{(3R_E)^2} = \\frac{1}{9}\\left(\\frac{GMm}{R_E^2}\\right) = \\frac{w}{9}$$",
                "difficulty": "easy",
                "topic": "Invariance of Mass & Altitude Weight"
            },
            {
                "id": "mrsg-q28",
                "global_num": 28,
                "section": "Planetary Gravitation & Orbits",
                "question": "A moon of mass $m$ orbits a planet of mass $100m$. If $F_1$ is the force of the planet on the moon and $F_2$ is the force of the moon on the planet, which is true?",
                "options": [
                    "$F_1 = 100 F_2$",
                    "$F_2 = 100 F_1$",
                    "$F_1 = F_2$",
                    "$F_1 = 10 F_2$",
                    "$F_1 = F_2/100$"
                ],
                "answer": "C",
                "explanation": "(C) By Newton's Third Law, gravitational interaction forces are mutual, equal in magnitude, and opposite in direction ($F_1 = F_2$).",
                "difficulty": "easy",
                "topic": "Newton's Third Law Mutual Gravity"
            },
            {
                "id": "mrsg-q29",
                "global_num": 29,
                "section": "Planetary Gravitation & Orbits",
                "question": "What is the minimum radius of a planet with Earth's mass so that surface gravity does not exceed $4g$?",
                "options": [
                    "$R_E/4$",
                    "$R_E/2$",
                    "$R_E$",
                    "$2R_E$",
                    "$4R_E$"
                ],
                "answer": "B",
                "explanation": "(B) $$g_{\\text{planet}} = \\frac{GM}{R^2} \\le 4\\frac{GM}{R_E^2} \\implies \\frac{1}{R^2} \\le \\frac{4}{R_E^2} \\implies R \\ge \\frac{R_E}{2}$$",
                "difficulty": "medium",
                "topic": "Planet Surface Gravity & Minimum Radius"
            },
            {
                "id": "mrsg-q30",
                "global_num": 30,
                "section": "Planetary Gravitation & Orbits",
                "question": "How far above Earth's surface must an object be to feel the same gravity as when buried halfway to the center ($r = R_E/2$)?",
                "options": [
                    "$R_E/2$",
                    "$(\\sqrt{2} - 1)R_E$",
                    "$\\sqrt{2}R_E$",
                    "$2R_E$",
                    "$(\\sqrt{2} + 1)R_E$"
                ],
                "answer": "B",
                "explanation": "(B) Gravity inside Earth at $r = R_E/2$: $g_{\\text{inside}} = g_0\\left(\\frac{R_E/2}{R_E}\\right) = \\frac{1}{2}g_0$.  \nGravity outside Earth at altitude $h$: $g_{\\text{outside}} = g_0\\left(\\frac{R_E}{R_E + h}\\right)^2$.\n  $$\\left(\\frac{R_E}{R_E + h}\\right)^2 = \\frac{1}{2} \\implies \\frac{R_E + h}{R_E} = \\sqrt{2} \\implies h = (\\sqrt{2} - 1)R_E$$",
                "difficulty": "hard",
                "topic": "Interior vs Exterior Earth Gravitational Comparison"
            }
        ]
    }
};
