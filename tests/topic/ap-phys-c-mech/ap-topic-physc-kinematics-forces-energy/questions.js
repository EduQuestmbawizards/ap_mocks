// Specific Question Bank for Test: ap-topic-physc-kinematics-forces-energy
const AP_TEST_DATA = {
    "ap-topic-physc-kinematics-forces-energy": {
        "id": "ap-topic-physc-kinematics-forces-energy",
        "title": "AP Physics C: Kinematics, Forces & Work-Energy Mastery",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Kinematics, Forces & Energy",
        "timeLimitMinutes": 45,
        "totalQuestions": 34,
        "questions": [
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q1",
                "global_num": 1,
                "section": "Kinematics & 1D/2D Motion",
                "question": "An object that's moving with constant speed travels once around a circular path. Which of the following is/are true concerning this motion?  I. The displacement is zero.  II. The average speed is zero.  III. The acceleration is zero.",
                "options": [
                    "I only",
                    "I and II only",
                    "I and III only",
                    "III only",
                    "II and III only"
                ],
                "answer": "A",
                "explanation": "(A) Because the particle starts and finishes at the exact same location, its net position displacement is zero ($\\Delta \\vec{r} = 0$), making statement I true. Average speed is total distance over time, which is strictly greater than zero (II is false). Uniform circular motion features a continuous change in velocity direction, requiring a nonzero centripetal acceleration directed toward the center ($a_c = v^2/r \\ne 0$) (III is false).",
                "difficulty": "easy",
                "topic": "Uniform Circular Motion & Kinematics"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q2",
                "global_num": 2,
                "section": "Kinematics & 1D/2D Motion",
                "question": "At time $t = t_1$, an object's velocity is $\\vec{v}_1$. A short time later, at $t = t_2$, its velocity is $\\vec{v}_2$. If $|\\vec{v}_1| = |\\vec{v}_2|$, which vector best illustrates the average acceleration $\\vec{a}_{\\text{avg}}$ between $t_1$ and $t_2$?",
                "options": [
                    "Vector pointing along $\\vec{v}_1$",
                    "Vector pointing along $\\vec{v}_2$",
                    "Vector pointing downward and to the left (along $\\vec{v}_2 - \\vec{v}_1$)",
                    "Vector pointing upward",
                    "Zero vector"
                ],
                "answer": "C",
                "explanation": "(C) Average acceleration is defined by $\\vec{a}_{\\text{avg}} = \\frac{\\Delta\\vec{v}}{\\Delta t} = \\frac{\\vec{v}_2 - \\vec{v}_1}{\\Delta t} = \\frac{\\vec{v}_2 + (-\\vec{v}_1)}{\\Delta t}$. Vector addition of $\\vec{v}_2$ and the inverted vector $-\\vec{v}_1$ yields a resultant vector directed downward and to the left.",
                "difficulty": "medium",
                "topic": "Average Acceleration Vector Sum"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q3",
                "global_num": 3,
                "section": "Kinematics & 1D/2D Motion",
                "question": "A rock is thrown off a $30\\text{-m}$ cliff at a $45^\\circ$ angle above the horizontal. Which of the following is true regarding the acceleration of the rock? (Ignore air resistance)",
                "options": [
                    "The acceleration will have both horizontal and vertical components.",
                    "At the peak, acceleration is half of its initial launch value.",
                    "The acceleration will be of magnitude $g$ and in a downward direction.",
                    "The acceleration is downward on ascent and upward on descent.",
                    "The acceleration increases throughout the flight."
                ],
                "answer": "C",
                "explanation": "(C) Once in free-fall ballistic flight under negligible air resistance, the only force acting on the projectile is gravity ($F_g = mg$, downward). The acceleration is uniformly constant everywhere along the trajectory: $\\vec{a} = -g\\hat{j}$.",
                "difficulty": "easy",
                "topic": "2D Projectile Acceleration"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q4",
                "global_num": 4,
                "section": "Kinematics & 1D/2D Motion",
                "question": "A baseball is thrown straight upward. What is the ball's acceleration at its highest point?",
                "options": [
                    "$0$",
                    "$-g$, downward",
                    "$g$, downward",
                    "$-g$, upward",
                    "$g$, upward"
                ],
                "answer": "C",
                "explanation": "(C) Even though the instantaneous velocity of the ball is zero at the apex of its path, the gravitational force continues to act on the ball without interruption, producing a constant downward acceleration of magnitude $g$.",
                "difficulty": "easy",
                "topic": "Vertical Free Fall Acceleration at Apex"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q5",
                "global_num": 5,
                "section": "Kinematics & 1D/2D Motion",
                "question": "An object's position is given by $x(t) = -3t^3 + t^2 + 6t$. What is the maximum velocity of the object?",
                "options": [
                    "$0.11\\text{ m/s}$",
                    "$2.73\\text{ m/s}$",
                    "$6.11\\text{ m/s}$",
                    "$7.39\\text{ m/s}$",
                    "$9.81\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "(C) Velocity function:\n  $$v(t) = \\frac{dx}{dt} = -9t^2 + 2t + 6$$\nTo find the maximum velocity, set the derivative of velocity (acceleration) equal to zero:\n  $$\\frac{dv}{dt} = -18t + 2 = 0 \\implies t = \\frac{1}{9}\\text{ s} \\approx 0.111\\text{ s}$$\nEvaluate $v(t)$ at $t = 1/9\\text{ s}$:\n  $$v_{\\max} = -9\\left(\\frac{1}{9}\\right)^2 + 2\\left(\\frac{1}{9}\\right) + 6 = -\\frac{1}{9} + \\frac{2}{9} + 6 = 6 + \\frac{1}{9} \\approx 6.11\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Calculus Kinematics & Max Velocity"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q6",
                "global_num": 6,
                "section": "Kinematics & 1D/2D Motion",
                "question": "A rock dropped off a cliff strikes the ground with an impact speed of $30\\text{ m/s}$. How high was the cliff? ($g = 10\\text{ m/s}^2$)",
                "options": [
                    "$15\\text{ m}$",
                    "$20\\text{ m}$",
                    "$30\\text{ m}$",
                    "$45\\text{ m}$",
                    "$60\\text{ m}$"
                ],
                "answer": "D",
                "explanation": "(D) Using the kinematic equation $v_f^2 = v_0^2 + 2g\\Delta y$ with $v_0 = 0$:\n  $$\\Delta y = \\frac{v_f^2}{2g} = \\frac{(30\\text{ m/s})^2}{2(10\\text{ m/s}^2)} = \\frac{900}{20} = 45\\text{ m}$$",
                "difficulty": "easy",
                "topic": "Free Fall Drop Height Calculation"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q7",
                "global_num": 7,
                "section": "Kinematics & 1D/2D Motion",
                "question": "A stone is thrown horizontally with an initial speed of $10\\text{ m/s}$ from a bridge. How long would it take to strike the water $80\\text{ m}$ below the bridge? ($g = 10\\text{ m/s}^2$)",
                "options": [
                    "$1\\text{ s}$",
                    "$2\\text{ s}$",
                    "$4\\text{ s}$",
                    "$8\\text{ s}$",
                    "$16\\text{ s}$"
                ],
                "answer": "C",
                "explanation": "(C) Vertical and horizontal motions are independent. With $v_{0y} = 0$:\n  $$h = \\frac{1}{2}gt^2 \\implies t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(80\\text{ m})}{10\\text{ m/s}^2}} = \\sqrt{16} = 4\\text{ s}$$",
                "difficulty": "easy",
                "topic": "Horizontal Projectile Flight Time"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q8",
                "global_num": 8,
                "section": "Kinematics & 1D/2D Motion",
                "question": "A soccer ball at rest is kicked with initial velocity $10\\text{ m/s}$ at launch angle $30^\\circ$. Calculate its total flight time over level ground ($g = 10\\text{ m/s}^2$).",
                "options": [
                    "$0.5\\text{ s}$",
                    "$1.0\\text{ s}$",
                    "$1.7\\text{ s}$",
                    "$2.0\\text{ s}$",
                    "$2.5\\text{ s}$"
                ],
                "answer": "B",
                "explanation": "(B) $$v_{0y} = v_0\\sin(30^\\circ) = 10(0.5) = 5\\text{ m/s}$$\n$$T = \\frac{2v_{0y}}{g} = \\frac{2(5\\text{ m/s})}{10\\text{ m/s}^2} = 1.0\\text{ s}$$",
                "difficulty": "easy",
                "topic": "Angled Projectile Total Hang Time"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q9",
                "global_num": 9,
                "section": "Kinematics & 1D/2D Motion",
                "question": "A stone is thrown horizontally with initial speed $30\\text{ m/s}$ from a bridge. Find the stone's total speed when it enters the water $4\\text{ s}$ later ($g = 10\\text{ m/s}^2$).",
                "options": [
                    "$30\\text{ m/s}$",
                    "$40\\text{ m/s}$",
                    "$50\\text{ m/s}$",
                    "$60\\text{ m/s}$",
                    "$70\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "(C) Horizontal velocity: $v_x = 30\\text{ m/s}$ (constant).  \nVertical velocity: $v_y = gt = (10\\text{ m/s}^2)(4\\text{ s}) = 40\\text{ m/s}$.  \nMagnitude: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{30^2 + 40^2} = 50\\text{ m/s}$.",
                "difficulty": "medium",
                "topic": "2D Projectile Impact Speed"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q10",
                "global_num": 10,
                "section": "Kinematics & 1D/2D Motion",
                "question": "Which statement is true concerning the motion of an ideal projectile launched at $45^\\circ$?",
                "options": [
                    "The acceleration vector points opposite to velocity on ascent and along velocity on descent.",
                    "The speed at the top of the trajectory is zero.",
                    "Total speed remains constant throughout.",
                    "Horizontal speed decreases ascending and increases descending.",
                    "Vertical speed decreases on the way up and increases on the way down."
                ],
                "answer": "E",
                "explanation": "(E) Because the downward gravitational acceleration opposes upward vertical velocity during ascent, vertical speed $|v_y|$ decreases to zero at the apex, then increases continuously as the projectile falls. Horizontal speed remains strictly constant throughout.",
                "difficulty": "easy",
                "topic": "Projectile Motion Vertical vs Horizontal Velocity"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q11",
                "global_num": 11,
                "section": "Kinematics & 1D/2D Motion",
                "question": "An object is launched from the ground with speed $v$ at distance $d$ away from a wall of height $h$. Which equation gives the launch angle $\\theta$ to just clear the wall?",
                "options": [
                    "$h = d\\tan\\theta - \\frac{gd^2}{2v^2\\cos^2\\theta}$",
                    "$h = d^2\\cos\\theta - \\frac{gd^2}{2v^2\\cos^2\\theta}$",
                    "$h = d\\tan\\theta - \\frac{gd^2}{2v\\cos\\theta}$",
                    "$h = d\\sin\\theta - \\frac{gd^2}{v^2\\cos^2\\theta}$",
                    "$h = d\\sin\\theta - \\frac{gd^2}{2v\\cos\\theta}$"
                ],
                "answer": "A",
                "explanation": "(A) Horizontal time to reach the wall: $t = \\frac{d}{v\\cos\\theta}$.\nSubstituting into vertical position $y(t) = (v\\sin\\theta)t - \\frac{1}{2}gt^2$:\n  $$h = (v\\sin\\theta)\\left(\\frac{d}{v\\cos\\theta}\\right) - \\frac{1}{2}g\\left(\\frac{d}{v\\cos\\theta}\\right)^2 = d\\tan\\theta - \\frac{gd^2}{2v^2\\cos^2\\theta}$$",
                "difficulty": "hard",
                "topic": "Trajectory Equation & Wall Clearance Angle"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q12",
                "global_num": 12,
                "section": "Kinematics & 1D/2D Motion",
                "question": "An object moves in a straight line with a given velocity-time graph. If $x = 3.0\\text{ m}$ at $t = 0$, what is the position at $t = 3.0\\text{ s}$ if the area under the $v\\text{--}t$ curve from $0$ to $3\\text{ s}$ is $8\\text{ m}$?",
                "options": [
                    "$5\\text{ m}$",
                    "$8\\text{ m}$",
                    "$10\\text{ m}$",
                    "$11\\text{ m}$",
                    "$14\\text{ m}$"
                ],
                "answer": "D",
                "explanation": "(D) Displacement is the definite integral of velocity: $\\Delta x = \\int_0^3 v(t)\\,dt = 8\\text{ m}$.\n  $$x(3) = x(0) + \\Delta x = 3.0\\text{ m} + 8\\text{ m} = 11\\text{ m}$$",
                "difficulty": "medium",
                "topic": "Velocity-Time Graph & Position Integral"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q13",
                "global_num": 13,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q14",
                "global_num": 14,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q15",
                "global_num": 15,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q16",
                "global_num": 16,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q17",
                "global_num": 17,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q18",
                "global_num": 18,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q19",
                "global_num": 19,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q20",
                "global_num": 20,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q21",
                "global_num": 21,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q22",
                "global_num": 22,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q23",
                "global_num": 23,
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
                "id": "ap-topic-physc-kinematics-forces-energy_q24",
                "global_num": 24,
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
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q25",
                "global_num": 25,
                "section": "Work, Energy & Power",
                "question": "A force $F = 20\\text{ N}$ acts on a $3\\text{ kg}$ object as it moves $4\\text{ m}$. If $F$ is perpendicular to displacement, the work done is:",
                "options": [
                    "$0\\text{ J}$",
                    "$60\\text{ J}$",
                    "$80\\text{ J}$",
                    "$600\\text{ J}$",
                    "$2,400\\text{ J}$"
                ],
                "answer": "A",
                "explanation": "(A) $W = \\vec{F}\\cdot\\vec{d} = F d \\cos(90^\\circ) = 0\\text{ J}$. Any force acting strictly perpendicular to displacement performs zero work.",
                "difficulty": "easy",
                "topic": "Perpendicular Force & Zero Work"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q26",
                "global_num": 26,
                "section": "Work, Energy & Power",
                "question": "An object of mass $4\\text{ kg}$ accelerates from $3\\text{ m/s}$ to $6\\text{ m/s}$ in $8\\text{ s}$. How much work was done on the object?",
                "options": [
                    "$27\\text{ J}$",
                    "$54\\text{ J}$",
                    "$72\\text{ J}$",
                    "$96\\text{ J}$",
                    "Cannot be determined"
                ],
                "answer": "B",
                "explanation": "(B) By the Work-Energy Theorem ($W = \\Delta K$):\n  $$W = \\frac{1}{2}m(v_f^2 - v_i^2) = \\frac{1}{2}(4\\text{ kg})((6\\text{ m/s})^2 - (3\\text{ m/s})^2) = 2(36 - 9) = 2(27) = 54\\text{ J}$$",
                "difficulty": "easy",
                "topic": "Work-Energy Theorem & Kinetic Energy Change"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q27",
                "global_num": 27,
                "section": "Work, Energy & Power",
                "question": "To lift a box of mass $m$ to height $h$, three options are considered: Option 1 (direct lift), Option 2 ($30^\\circ$ incline), Option 3 (pulley system). Compare the work done under ideal conditions.",
                "options": [
                    "Option 1 > Option 2 > Option 3",
                    "Option 1 > Option 2 = Option 3",
                    "Option 1 = Option 3 > Option 2",
                    "Option 1 = Option 2 = Option 3",
                    "Cannot be determined"
                ],
                "answer": "D",
                "explanation": "(D) Under ideal conservative conditions, gravitational potential energy is path-independent. In all three methods, the minimum work required is identical: $W = mgh$.",
                "difficulty": "easy",
                "topic": "Path Independence & Conservative Gravitational Work"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q28",
                "global_num": 28,
                "section": "Work, Energy & Power",
                "question": "A $4\\text{ kg}$ box is pulled up a ramp ($\\theta = 30^\\circ$, height $= 5\\text{ m}$) at constant velocity. How much work is done by the normal force?",
                "options": [
                    "$160\\text{ J}$",
                    "$80\\text{ J}$",
                    "$40\\text{ J}$",
                    "$20\\text{ J}$",
                    "$0\\text{ J}$"
                ],
                "answer": "E",
                "explanation": "(E) The normal force is perpendicular to the ramp surface and therefore perpendicular to the displacement vector of the box ($\\theta = 90^\\circ$). Thus $W_N = F_N d \\cos(90^\\circ) = 0\\text{ J}$.",
                "difficulty": "easy",
                "topic": "Normal Force Zero Work on Incline"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q29",
                "global_num": 29,
                "section": "Work, Energy & Power",
                "question": "A man stands in an elevator as it begins to ascend. Does the normal force from the floor do work on the man?",
                "options": [
                    "Yes, and the work done will be positive.",
                    "Yes, and the work done will be negative.",
                    "Yes, but the sign cannot be determined.",
                    "No, the normal force does no work in any situation.",
                    "No, normal force does no work here."
                ],
                "answer": "A",
                "explanation": "(A) The normal force pushes upward on the man's feet ($\\vec{F}_N$ is upward) and the elevator displacement is upward ($\\vec{d}$ is upward). Because $\\vec{F}_N$ and $\\vec{d}$ point in the same direction ($\\theta = 0^\\circ$), $W = F_N d \\cos(0^\\circ) > 0$ (positive work).",
                "difficulty": "easy",
                "topic": "Elevator Normal Force Positive Work"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q30",
                "global_num": 30,
                "section": "Work, Energy & Power",
                "question": "A $3.5\\text{ kg}$ block slides from rest down a frictionless $30^\\circ$ incline of length $6.4\\text{ m}$. What is its speed at the bottom? ($g = 10\\text{ m/s}^2$)",
                "options": [
                    "$5.0\\text{ m/s}$",
                    "$5.7\\text{ m/s}$",
                    "$6.4\\text{ m/s}$",
                    "$8.0\\text{ m/s}$",
                    "$10\\text{ m/s}$"
                ],
                "answer": "D",
                "explanation": "(D) Vertical height of the incline: $h = L\\sin(30^\\circ) = 6.4(0.5) = 3.2\\text{ m}$.\nBy Conservation of Energy:\n  $$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2(10)(3.2)} = \\sqrt{64} = 8.0\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Frictionless Incline Energy Conservation"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q31",
                "global_num": 31,
                "section": "Work, Energy & Power",
                "question": "A block of mass $m$ slides from rest down an incline of length $s$ and height $h$ with kinetic friction force $F_f$. What is the kinetic energy at the bottom?",
                "options": [
                    "$mgh$",
                    "$mgh - F_f h$",
                    "$mgs - F_f h$",
                    "$mgh - F_f s$",
                    "$mgs - F_f s$"
                ],
                "answer": "D",
                "explanation": "(D) Applying the Work-Energy Theorem ($E_i + W_{\\text{other}} = E_f$):\n  $$mgh - F_f s = K_f \\implies K_f = mgh - F_f s$$",
                "difficulty": "medium",
                "topic": "Incline Kinetic Energy with Friction Work"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q32",
                "global_num": 32,
                "section": "Work, Energy & Power",
                "question": "A $1,000\\text{ kg}$ car accelerates at $4\\text{ m/s}^2$ while experiencing $300\\text{ N}$ of drag force. How much force must the engine produce?",
                "options": [
                    "$16,300\\text{ N}$",
                    "$15,700\\text{ N}$",
                    "$4,300\\text{ N}$",
                    "$4,000\\text{ N}$",
                    "$3,700\\text{ N}$"
                ],
                "answer": "C",
                "explanation": "(C) $$F_{\\text{engine}} - F_{\\text{drag}} = ma \\implies F_{\\text{engine}} = ma + F_{\\text{drag}} = (1,000\\text{ kg})(4\\text{ m/s}^2) + 300\\text{ N} = 4,300\\text{ N}$$",
                "difficulty": "easy",
                "topic": "Newton's Second Law with Aerodynamic Drag"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q33",
                "global_num": 33,
                "section": "Work, Energy & Power",
                "question": "An astronaut drops a rock from the top of a crater. When the rock is halfway down to the bottom, its speed is what fraction of its impact speed?",
                "options": [
                    "$1/4$",
                    "$1/2$",
                    "$1/\\sqrt{3}$",
                    "$\\sqrt{2}/3$",
                    "$1/\\sqrt{2}$"
                ],
                "answer": "E",
                "explanation": "(E) At halfway point $h/2$, kinetic energy is half the final kinetic energy: $K_{\\text{mid}} = \\frac{1}{2}K_{\\text{final}}$.\n  $$\\frac{1}{2}mv_{\\text{mid}}^2 = \\frac{1}{2}\\left(\\frac{1}{2}mv_{\\text{final}}^2\\right) \\implies v_{\\text{mid}} = \\frac{1}{\\sqrt{2}}v_{\\text{final}}$$",
                "difficulty": "medium",
                "topic": "Gravitational Free Fall Midpoint Speed Fraction"
            },
            {
                "id": "ap-topic-physc-kinematics-forces-energy_q34",
                "global_num": 34,
                "section": "Work, Energy & Power",
                "question": "A block of mass $m$ is pulled up a ramp of length $d$, angle $\\theta$, and friction coefficient $\\mu$ by a motor at constant power in time $t$. What is the minimum power $P$?",
                "options": [
                    "$\\frac{md^2}{t^3} + \\frac{mgd\\sin\\theta}{t}$",
                    "$\\frac{md^2}{t^2} + mgd\\sin\\theta + \\mu mgd\\cos\\theta$",
                    "$\\frac{md^2}{t^3} + \\frac{mgd\\sin\\theta}{t} + \\frac{\\mu mgd\\cos\\theta}{t}$",
                    "$\\frac{2md^2}{t^3} + \\frac{mgd\\sin\\theta}{t} + \\frac{\\mu mgd\\cos\\theta}{t}$",
                    "$\\frac{md^2}{2t^3} + \\frac{mgd\\cos\\theta}{t} + \\frac{\\mu mgd\\sin\\theta}{t}$"
                ],
                "answer": "D",
                "explanation": "(D) Under constant acceleration to cover distance $d$ in time $t$, $d = \\frac{1}{2}at^2 \\implies a = \\frac{2d}{t^2}$ and $v_f = \\frac{2d}{t}$.\nTotal work done:\n  $$W = \\Delta K + \\Delta U + W_{\\text{friction}} = \\frac{1}{2}m\\left(\\frac{2d}{t}\\right)^2 + mg(d\\sin\\theta) + (\\mu mg\\cos\\theta)d$$\nPower $P = W/t$:\n  $$P = \\frac{2md^2}{t^3} + \\frac{mgd\\sin\\theta}{t} + \\frac{\\mu mgd\\cos\\theta}{t}$$",
                "difficulty": "hard",
                "topic": "Incline Constant Power Mechanical Derivation"
            }
        ]
    }
};
