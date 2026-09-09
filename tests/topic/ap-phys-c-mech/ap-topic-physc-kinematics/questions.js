// Specific Question Bank for Test: ap-topic-physc-kinematics
const AP_TEST_DATA = {
    "ap-topic-physc-kinematics": {
        "id": "ap-topic-physc-kinematics",
        "title": "AP Physics C: Kinematics & 1D/2D Motion",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Kinematics & 1D/2D Motion",
        "timeLimitMinutes": 20,
        "totalQuestions": 12,
        "questions": [
            {
                "id": "ap-topic-physc-kinematics_q1",
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
                "id": "ap-topic-physc-kinematics_q2",
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
                "id": "ap-topic-physc-kinematics_q3",
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
                "id": "ap-topic-physc-kinematics_q4",
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
                "id": "ap-topic-physc-kinematics_q5",
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
                "id": "ap-topic-physc-kinematics_q6",
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
                "id": "ap-topic-physc-kinematics_q7",
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
                "id": "ap-topic-physc-kinematics_q8",
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
                "id": "ap-topic-physc-kinematics_q9",
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
                "id": "ap-topic-physc-kinematics_q10",
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
                "id": "ap-topic-physc-kinematics_q11",
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
                "id": "ap-topic-physc-kinematics_q12",
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
            }
        ]
    }
};
