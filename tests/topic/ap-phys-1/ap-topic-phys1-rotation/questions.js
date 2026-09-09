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
                "id": "ap-topic-phys1-rotation_q1",
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
                "id": "ap-topic-phys1-rotation_q2",
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
                "id": "ap-topic-phys1-rotation_q3",
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
                "id": "ap-topic-phys1-rotation_q4",
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
                "id": "ap-topic-phys1-rotation_q5",
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
                "id": "ap-topic-phys1-rotation_q6",
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
                "id": "ap-topic-phys1-rotation_q7",
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
                "id": "ap-topic-phys1-rotation_q8",
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
                "id": "ap-topic-phys1-rotation_q9",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "medium",
                "question": "A solid cylinder of mass $M$ and radius $R$ rolls without slipping down an incline of height $h$. What is its linear speed at the bottom ($I_{cyl} = \\frac{1}{2}MR^2$)?",
                "options": [
                    "$\\sqrt{\\dfrac{4}{3}gh}$",
                    "$\\sqrt{2gh}$",
                    "$\\sqrt{gh}$",
                    "$\\sqrt{\\dfrac{3}{4}gh}$"
                ],
                "answer": "A",
                "explanation": "$Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{1}{2}MR^2)(v/R)^2 = \\frac{3}{4}Mv^2 \\implies v = \\sqrt{\\frac{4}{3}gh}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q10",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "easy",
                "question": "A uniform rod of length $L$ and mass $M$ is pivoted at one end. What is its moment of inertia about the pivot?",
                "options": [
                    "$\\frac{1}{12}ML^2$",
                    "$\\frac{1}{3}ML^2$",
                    "$\\frac{1}{2}ML^2$",
                    "$ML^2$"
                ],
                "answer": "B",
                "explanation": "By the parallel axis theorem: $I = I_{cm} + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q11",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "hard",
                "question": "A figure skater spins with arms outstretched at angular velocity $\\omega_0$. When she pulls her arms inward, her rotational inertia decreases to half its original value. What is her new rotational kinetic energy?",
                "options": [
                    "$K_0$",
                    "$4K_0$",
                    "$2K_0$",
                    "$0.5K_0$"
                ],
                "answer": "C",
                "explanation": "Angular momentum is conserved: $I_0\\omega_0 = (I_0/2)\\omega \\implies \\omega = 2\\omega_0$. Kinetic energy $K = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(I_0/2)(2\\omega_0)^2 = 2(\\frac{1}{2}I_0\\omega_0^2) = 2K_0$ (work is done by her muscles).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q12",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "easy",
                "question": "A torque $\\tau = 12\\text{ N}\\cdot\\text{m}$ acts on a flywheel with moment of inertia $I = 3.0\\text{ kg}\\cdot\\text{m}^2$. What is the angular acceleration of the flywheel?",
                "options": [
                    "$36\\text{ rad/s}^2$",
                    "$0.25\\text{ rad/s}^2$",
                    "$6.0\\text{ rad/s}^2$",
                    "$4.0\\text{ rad/s}^2$"
                ],
                "answer": "D",
                "explanation": "Newton's second law for rotation: $\\tau = I\\alpha \\implies \\alpha = \\tau / I = 12 / 3.0 = 4.0\\text{ rad/s}^2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q13",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "medium",
                "question": "A solid sphere, a solid cylinder, and a thin hoop of identical mass $M$ and radius $R$ are released simultaneously from rest at the top of an incline. Which object reaches the bottom first?",
                "options": [
                    "The solid sphere",
                    "The solid cylinder",
                    "The thin hoop",
                    "They all arrive at the same time"
                ],
                "answer": "A",
                "explanation": "Acceleration $a = \\frac{g\\sin\\theta}{1 + I/(MR^2)}$. The object with the smallest fraction $I/(MR^2)$ has the greatest acceleration. Sphere ($2/5=0.4$) < cylinder ($1/2=0.5$) < hoop ($1.0$), so the solid sphere wins.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q14",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "easy",
                "question": "A horizontal disk of radius $R = 0.50\\text{ m}$ rotates at constant angular speed $\\omega = 4.0\\text{ rad/s}$. What is the centripetal acceleration of a point on its outer rim?",
                "options": [
                    "$2.0\\text{ m/s}^2$",
                    "$8.0\\text{ m/s}^2$",
                    "$16\\text{ m/s}^2$",
                    "$4.0\\text{ m/s}^2$"
                ],
                "answer": "B",
                "explanation": "$a_c = \\omega^2 R = (4.0)^2 \\times 0.50 = 16 \\times 0.50 = 8.0\\text{ m/s}^2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q15",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "medium",
                "question": "A particle of mass $m$ moves with constant velocity $\\vec{v} = v\\hat{i}$ along the line $y = b$. What is its angular momentum with respect to the origin?",
                "options": [
                    "$+m v b\\hat{i}$",
                    "Zero",
                    "$-m v b\\hat{k}$",
                    "$+m v b^2\\hat{k}$"
                ],
                "answer": "C",
                "explanation": "$\\vec{L} = \\vec{r} \\times \\vec{p} = (x\\hat{i} + b\\hat{j}) \\times (mv\\hat{i}) = -mv b(\\hat{j} \\times \\hat{i}) = -mv b\\hat{k}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q16",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "easy",
                "question": "What is the condition for static equilibrium of a rigid body?",
                "options": [
                    "Net external force must be zero only",
                    "Net external torque must be zero only",
                    "Mechanical energy must be minimized to zero",
                    "Both net external force and net external torque must equal zero: $\\sum\\vec{F} = \\vec{0}$ and $\\sum\\vec{\\tau} = \\vec{0}$"
                ],
                "answer": "D",
                "explanation": "Complete static equilibrium requires translational equilibrium ($\\sum\\vec{F} = \\vec{0}$) and rotational equilibrium ($\\sum\\vec{\\tau} = \\vec{0}$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q17",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "medium",
                "question": "A uniform meter stick of mass $0.20\\text{ kg}$ is balanced at its center ($50\\text{ cm}$). If a $0.30\\text{ kg}$ mass is placed at $20\\text{ cm}$, where must a $0.45\\text{ kg}$ mass be placed to restore balance?",
                "options": [
                    "$70\\text{ cm}$",
                    "$65\\text{ cm}$",
                    "$80\\text{ cm}$",
                    "$75\\text{ cm}$"
                ],
                "answer": "A",
                "explanation": "Torque about center ($50\\text{ cm}$): $(0.30)(50 - 20) = (0.45)(x - 50) \\implies 0.30(30) = 0.45(x - 50) \\implies 9.0 = 0.45(x - 50) \\implies x - 50 = 20 \\implies x = 70\\text{ cm}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q18",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "medium",
                "question": "A wheel accelerates from rest with constant angular acceleration $\\alpha = 2.0\\text{ rad/s}^2$. Through how many revolutions does it turn in $10\\text{ s}$?",
                "options": [
                    "Approximately $31.8\\text{ rev}$",
                    "Approximately $15.9\\text{ rev}$",
                    "$100\\text{ rev}$",
                    "$50\\text{ rev}$"
                ],
                "answer": "B",
                "explanation": "$\\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(2.0)(10^2) = 100\\text{ radians}$. In revolutions: $N = 100 / (2\\pi) \\approx 15.92\\text{ rev}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q19",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "easy",
                "question": "A rolling wheel has forward velocity $v_{cm}$. What is the instantaneous velocity of the contact point where the wheel touches the ground?",
                "options": [
                    "$v_{cm}$ forward",
                    "$2v_{cm}$ forward",
                    "Zero",
                    "$v_{cm}$ backward"
                ],
                "answer": "C",
                "explanation": "In pure rolling without slipping, the bottom contact point is instantaneously at rest relative to the surface ($v = v_{cm} - \\omega R = 0$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-rotation_q20",
                "topic": "ap-topic-phys1-rotation",
                "difficulty": "easy",
                "question": "How does the work-energy theorem apply to rotating rigid bodies?",
                "options": [
                    "Torque does no work on a rotating body",
                    "Work is always conserved as linear kinetic energy",
                    "Rotational work equals $\\tau / \\theta$",
                    "The net work done by external torques equals the change in rotational kinetic energy: $W_{net} = \\Delta\\left(\\frac{1}{2}I\\omega^2\\right)$"
                ],
                "answer": "D",
                "explanation": "Rotational work $W = \\int \\tau d\\theta = \\Delta K_{rot} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20
    }
};
