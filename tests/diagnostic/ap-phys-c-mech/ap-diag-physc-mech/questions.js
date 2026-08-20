// Specific Question Bank for Test: ap-diag-physc-mech
const AP_TEST_DATA = {
    "ap-diag-physc-mech": {
        "id": "ap-diag-physc-mech",
        "title": "AP Physics C: Mechanics Diagnostic Assessment",
        "subtitle": "Comprehensive 30-Question Baseline Assessment across Kinematics, Dynamics, Energy, Momentum, Rotation & Gravitation",
        "timeLimitMinutes": 45,
        "testType": "Diagnostic",
        "subject": "AP Physics C: Mechanics",
        "topic": "Mechanics Diagnostic",
        "questions": [
            {
                "id": "diag_physc_mech_q1",
                "topic": "1D Kinematics with Calculus",
                "difficulty": "medium",
                "question": "<p>A particle moves along the $x$-axis according to the position equation $x(t) = 2t^3 - 9t^2 + 12t - 4$, where $x$ is in meters and $t$ is in seconds ($t \\ge 0$). At what time(s) is the particle momentarily at rest?</p>",
                "options": [
                    "$t = 1\\text{ s}$ and $t = 2\\text{ s}$",
                    "$t = 1.5\\text{ s}$ only",
                    "$t = 0.5\\text{ s}$ and $t = 3\\text{ s}$",
                    "$t = 2\\text{ s}$ and $t = 4\\text{ s}$",
                    "The particle is never at rest for $t > 0$"
                ],
                "answer": "A",
                "explanation": "<p><strong>Velocity from Derivative:</strong> The velocity is given by $v(t) = \\frac{dx}{dt} = 6t^2 - 18t + 12$. Setting $v(t) = 0$ gives $6(t^2 - 3t + 2) = 0 \\implies 6(t - 1)(t - 2) = 0$. Thus, the particle is at rest at $t = 1\\text{ s}$ and $t = 2\\text{ s}$.</p>"
            },
            {
                "id": "diag_physc_mech_q2",
                "topic": "2D Kinematics & Vectors",
                "difficulty": "medium",
                "question": "<p>A projectile is launched from ground level with initial velocity vector $\\vec{v}_0 = (30\\hat{i} + 40\\hat{j})\\text{ m/s}$. Assuming negligible air resistance and $g = 10\\text{ m/s}^2$, what is the speed of the projectile at its maximum height?</p>",
                "options": [
                    "$0\\text{ m/s}$",
                    "$30\\text{ m/s}$",
                    "$40\\text{ m/s}$",
                    "$50\\text{ m/s}$",
                    "$20\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "<p>At maximum height, the vertical component of velocity is zero ($v_y = 0$). Since the horizontal acceleration is zero, the horizontal velocity remains constant at $v_x = 30\\text{ m/s}$. Thus, the speed is $v = \\sqrt{v_x^2 + 0^2} = 30\\text{ m/s}$.</p>"
            },
            {
                "id": "diag_physc_mech_q3",
                "topic": "Kinematics Graphs & Integration",
                "difficulty": "hard",
                "question": "<p>An object starts from rest at $x = 0$ at $t = 0$ and accelerates according to $a(t) = 6t\\text{ m/s}^2$. What is the position of the object at $t = 3\\text{ s}$?</p>",
                "options": [
                    "$18\\text{ m}$",
                    "$27\\text{ m}$",
                    "$36\\text{ m}$",
                    "$54\\text{ m}$",
                    "$81\\text{ m}$"
                ],
                "answer": "B",
                "explanation": "<p>Integrate acceleration to find velocity: $v(t) = \\int 6t\\,dt = 3t^2 + v_0 = 3t^2\\text{ m/s}$. Integrate velocity to find position: $x(t) = \\int 3t^2\\,dt = t^3 + x_0 = t^3\\text{ m}$. At $t = 3\\text{ s}$, $x(3) = 3^3 = 27\\text{ m}$.</p>"
            },
            {
                "id": "diag_physc_mech_q4",
                "topic": "Newton's Laws & Variable Force",
                "difficulty": "hard",
                "question": "<p>A $2.0\\text{ kg}$ object is subjected to a net horizontal force $F(t) = (12 - 4t)\\text{ N}$, where $t$ is in seconds. If the object starts from rest at $t = 0$, what is its velocity when the net force drops to zero?</p>",
                "options": [
                    "$6\\text{ m/s}$",
                    "$9\\text{ m/s}$",
                    "$12\\text{ m/s}$",
                    "$18\\text{ m/s}$",
                    "$24\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "<p>The force drops to zero when $12 - 4t = 0 \\implies t = 3\\text{ s$}$. The acceleration is $a(t) = \\frac{F(t)}{m} = 6 -2t$. Velocity is $v(3$) =$\\int_{0}^{3} (6 - 2t)$,dt = [6t - t^2]_0^3 = 18 - 9 = 9\\text{ m/s}$.</p>"
            },
            {
                "id": "diag_physc_mech_q5",
                "topic": "Resistive Forces & Terminal Velocity",
                "difficulty": "hard",
                "question": "<p>An object of mass $m$ is released from rest and falls under the influence of gravity and a linear resistive drag force $F_d = -bv$. Which of the following differential equations correctly describes the velocity $v(t)$ of the object?</p>",
                "options": [
                    "$\\frac{dv}{dt} = g - \\frac{b}{m}v$",
                    "$\\frac{dv}{dt} = g + \\frac{b}{m}v$",
                    "$\\frac{dv}{dt} = mg - bv$",
                    "$\\frac{dv}{dt} = g - \\frac{b}{m}v^2$",
                    "$\\frac{d^2v}{dt^2} = g - \\frac{b}{m}v$"
                ],
                "answer": "A",
                "explanation": "<p>By Newton's Second Law with downwards defined as positive: $\\Sigma F = mg - bv = m\\frac{dv}{dt}$. Dividing through by mass $m$ yields $\\frac{dv}{dt} = g - \\frac{b}{m}v$. The terminal speed is $v_T = \\frac{mg}{b}$.</p>"
            },
            {
                "id": "diag_physc_mech_q6",
                "topic": "Friction & Inclined Planes",
                "difficulty": "medium",
                "question": "<p>A block of mass $m$ rests on an incline of angle $\\theta$. If the coefficient of static friction is $\\mu_s$, what is the maximum angle $\\theta$ before the block begins to slide down?</p>",
                "options": [
                    "$\\theta = \\sin^{-1}(\\mu_s)$",
                    "$\\theta = \\cos^{-1}(\\mu_s)$",
                    "$\\theta = \\tan^{-1}(\\mu_s)$",
                    "$\\theta = \\tan^{-1}(1/\\mu_s)$",
                    "$\\theta = \\tan^{-1}(\\mu_s/g)$"
                ],
                "answer": "C",
                "explanation": "<p>At impending slip, $mg\\sin\\theta = f_{s,\\max} = \\mu_s N = \\mu_s mg\\cos\\theta$. Dividing both sides by $mg\\cos\\theta$ gives $\\tan\\theta = \\mu_s \\implies \\theta = \\tan^{-1}(\\mu_s)$.</p>"
            },
            {
                "id": "diag_physc_mech_q7",
                "topic": "Coupled Systems & Pulleys",
                "difficulty": "medium",
                "question": "<p>In an ideal Atwood machine, two blocks of masses $m_1 = 3\\text{ kg}$ and $m_2 = 5\\text{ kg}$ are connected by a light string over a frictionless, massless pulley. Taking $g = 10\\text{ m/s}^2$, what is the acceleration of the system?</p>",
                "options": [
                    "$1.25\\text{ m/s}^2$",
                    "$2.5\\text{ m/s}^2$",
                    "$3.75\\text{ m/s}^2$",
                    "$5.0\\text{ m/s}^2$",
                    "$10.0\\text{ m/s}^2$"
                ],
                "answer": "B",
                "explanation": "<p>Acceleration for an Atwood machine is $a = \\frac{m_2 - m_1}{m_1 + m_2}g = \\frac{5 - 3}{5 + 3}(10) = \\frac{2}{8}(10) = 2.5\\text{ m/s}^2$.</p>"
            },
            {
                "id": "diag_physc_mech_q8",
                "topic": "Circular Motion & Centripetal Acceleration",
                "difficulty": "medium",
                "question": "<p>A car of mass $m$ travels around an unbanked circular curve of radius $R = 80\\text{ m}$ on a flat road. If the coefficient of static friction is $\\mu_s = 0.50$ and $g = 10\\text{ m/s}^2$, what is the maximum speed the car can round the curve without skidding?</p>",
                "options": [
                    "$10\\text{ m/s}$",
                    "$20\\text{ m/s}$",
                    "$30\\text{ m/s}$",
                    "$40\\text{ m/s}$",
                    "$50\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "<p>The required centripetal force is provided by static friction: $\\frac{mv^2}{R} \\le \\mu_s mg \\implies v_{\\max} = \\sqrt{\\mu_s g R} = \\sqrt{0.50 \\times 10 \\times 80} = \\sqrt{400} = 20\\text{ m/s}$.</p>"
            },
            {
                "id": "diag_physc_mech_q9",
                "topic": "Work-Energy Theorem & Variable Force",
                "difficulty": "medium",
                "question": "<p>A particle moves along the $x$-axis under a 1D force $F(x) = (4x^3 - 6x)\\text{ N}$. How much work is done by this force on the particle as it moves from $x = 1\\text{ m}$ to $x = 3\\text{ m}$?</p>",
                "options": [
                    "$48\\text{ J}$",
                    "$56\\text{ J}$",
                    "$64\\text{ J}$",
                    "$72\\text{ J}$",
                    "$80\\text{ J}$"
                ],
                "answer": "B",
                "explanation": "<p>Work is the integral of force with respect to position: $W =$\\int_{1}^{3} (4x^3 - 6x)$,dx = [x^4 - 3x^2]_1^3 = (81 - 27) - (1 - 3) = 54 - (-2) = 56\\text{ J}$.</p>"
            },
            {
                "id": "diag_physc_mech_q10",
                "topic": "Potential Energy & Conservative Forces",
                "difficulty": "hard",
                "question": "<p>A 1D potential energy function is given by $U(x) = 2x^3 - 6x^2\\text{ J}$. At which of the following positions is the particle in <strong>stable equilibrium</strong>?</p>",
                "options": [
                    "$x = 0\\text{ m}$",
                    "$x = 1\\text{ m}$",
                    "$x = 2\\text{ m}$",
                    "$x = 3\\text{ m}$",
                    "There are no equilibrium positions."
                ],
                "answer": "C",
                "explanation": "<p>Force is $F(x) = -\\frac{dU}{dx} = -(6x^2 - 12x) = $-6x$(x - 2)$. Equilibrium occurs where $F(x) = 0 \\implies x = 0$ or $x = 2$. For stable equilibrium, $\\frac{d^2U}{dx^2} > 0$. Here $\\frac{d^2U}{dx^2} = 12x - 12$. At $x=0$, $12(0)-12 = -12 < 0$ (unstable). At $x=2$, $12(2)-12 = +12 > 0$ (stable). Thus $x = 2\\text{ m}$ is stable.</p>"
            },
            {
                "id": "diag_physc_mech_q11",
                "topic": "Power & Rate of Energy Transfer",
                "difficulty": "medium",
                "question": "<p>An electric motor lifts a $500\\text{ kg}$ elevator cab upward at a constant speed of $2.0\\text{ m/s}$. Assuming $g = 9.8\\text{ m/s}^2$, what is the instantaneous power delivered by the motor?</p>",
                "options": [
                    "$4.9\\text{ kW}$",
                    "$9.8\\text{ kW}$",
                    "$14.7\\text{ kW}$",
                    "$19.6\\text{ kW}$",
                    "$24.5\\text{ kW}$"
                ],
                "answer": "B",
                "explanation": "<p>Since speed is constant, tension equals weight: $F = mg = 500(9.8) = 4900\\text{ N}$. Instantaneous power is $P = Fv = 4900 \\times 2.0 = 9800\\text{ W} = 9.8\\text{ kW}$.</p>"
            },
            {
                "id": "diag_physc_mech_q12",
                "topic": "Non-Linear Springs",
                "difficulty": "hard",
                "question": "<p>A non-ideal spring exerts a restoring force $F(x) = -kx - \\beta x^3$. How much work must an external agent perform to slowly compress the spring from $x = 0$ to $x = X$?</p>",
                "options": [
                    "$\\frac{1}{2}kX^2 + \\frac{1}{4}\\beta X^4$",
                    "$\\frac{1}{2}kX^2 + \\frac{1}{3}\\beta X^3$",
                    "$kX + \\beta X^3$",
                    "$\\frac{1}{2}kX^2 - \\frac{1}{4}\\beta X^4$",
                    "$kX^2 + \\beta X^4$"
                ],
                "answer": "A",
                "explanation": "<p>The external force applied is $F_{\\text{ext}} = kx + \\beta x^3$. The work done is $W =$\\int_{0}^{X} (kx $+beta x^3)\\,dx = \\frac{1}{2}kX^2 + \\frac{1}{4}\\beta X^4$.</p>"
            },
            {
                "id": "diag_physc_mech_q13",
                "topic": "Impulse & Force Profile",
                "difficulty": "medium",
                "question": "<p>A $0.5\\text{ kg}$ ball strikes a wall horizontally at $10\\text{ m/s}$ and bounces back in the opposite direction at $8\\text{ m/s}$. If the contact duration is $0.02\\text{ s}$, what is the magnitude of the average force exerted by the wall on the ball?</p>",
                "options": [
                    "$50\\text{ N}$",
                    "$100\\text{ N}$",
                    "$250\\text{ N}$",
                    "$450\\text{ N}$",
                    "$900\\text{ N}$"
                ],
                "answer": "D",
                "explanation": "<p>$\\Delta p = m(v_f - v_i) = 0.5(-8 - 10) = 0.5(-18) = -9\\text{ kg}\\cdot\\text{m/s}$. The average force magnitude is $F_{\\text{avg}} = \\frac{|\\Delta p|}{\\Delta t} = \\frac{9}{0.02} = 450\\text{ N}$.</p>"
            },
            {
                "id": "diag_physc_mech_q14",
                "topic": "Center of Mass with Density Function",
                "difficulty": "hard",
                "question": "<p>A slender rod of length $L$ lying along the $x$-axis from $x = 0$ to $x = L$ has a non-uniform linear mass density $\\lambda(x) = \\alpha x$, where $\\alpha$ is a constant. What is the $x$-coordinate of the center of mass?</p>",
                "options": [
                    "$\\frac{1}{3}L$",
                    "$\\frac{1}{2}L$",
                    "$\\frac{2}{3}L$",
                    "$\\frac{3}{4}L$",
                    "$\\frac{5}{6}L$"
                ],
                "answer": "C",
                "explanation": "<p>Total mass $M =$\\int_{0}^{L} $lambda(x)\\,dx =$\\int_{0}^{L} $alpha x\\,dx = \\frac{1}{2}\\alpha L^2$. First moment $\\int x\\,dm =$\\int_{0}^{L} x($alpha x)\\,dx = \\frac{1}{3}\\alpha L^3$. Center of mass $x_{\\text{cm}} = \\frac{\\frac{1}{3}\\alpha L^3}{\\frac{1}{2}\\alpha L^2} = \\frac{2}{3}L$.</p>"
            },
            {
                "id": "diag_physc_mech_q15",
                "topic": "Inelastic Collisions & Energy Loss",
                "difficulty": "medium",
                "question": "<p>A glider of mass $m$ moving with speed $v_0$ on a frictionless track collides with and sticks to a stationary glider of mass $3m$. What fraction of the initial kinetic energy is lost during the collision?</p>",
                "options": [
                    "$25\\%$",
                    "$33.3\\%$",
                    "$50\\%$",
                    "$66.7\\%$",
                    "$75\\%$"
                ],
                "answer": "E",
                "explanation": "<p>By momentum conservation: $mv_0 = (m+3m)v_f \\implies v_f = \\frac{v_0}{4}$. Initial kinetic energy: $K_i = \\frac{1}{2}mv_0^2$. Final kinetic energy: $K_f = \\frac{1}{2}(4m)(v_0/4)^2 = \\frac{1}{8}mv_0^2 = \\frac{1}{4}K_i$. Thus, $75\\%$ of initial kinetic energy is lost.</p>"
            },
            {
                "id": "diag_physc_mech_q16",
                "topic": "2D Collisions",
                "difficulty": "hard",
                "question": "<p>Two pucks on an air table of equal mass $m$ collide elastically. If Puck 1 is initially moving at speed $v_0$ and Puck 2 is initially at rest, and after the collision both pucks move with non-zero speeds, what is the angle between their final velocity vectors?</p>",
                "options": [
                    "$30^\\circ$",
                    "$45^\\circ$",
                    "$60^\\circ$",
                    "$90^\\circ$",
                    "$180^\\circ$"
                ],
                "answer": "D",
                "explanation": "<p>For an elastic collision of two equal masses with one initially at rest: $\\vec{v}_0 = \\vec{v}_1 + \\vec{v}_2$. Squaring gives $v_0^2 = v_1^2 + v_2^2 + 2\\vec{v}_1\\cdot\\vec{v}_2$. Kinetic energy conservation gives $v_0^2 = v_1^2 + v_2^2$. Therefore, $2\\vec{v}_1\\cdot\\vec{v}_2 = 0$, meaning the velocity vectors are orthogonal ($90^\\circ$).</p>"
            },
            {
                "id": "diag_physc_mech_q17",
                "topic": "Moment of Inertia Integration",
                "difficulty": "hard",
                "question": "<p>Using the integral definition $I = \\int r^2\\,dm$, calculate the rotational inertia of a uniform thin rod of mass $M$ and length $L$ about an axis perpendicular to the rod passing through one of its ends.</p>",
                "options": [
                    "$\\frac{1}{12}ML^2$",
                    "$\\frac{1}{6}ML^2$",
                    "$\\frac{1}{4}ML^2$",
                    "$\\frac{1}{3}ML^2$",
                    "$\\frac{1}{2}ML^2$"
                ],
                "answer": "D",
                "explanation": "<p>$I =$\\int_{0}^{L} x^2 $left(\\frac{M}{L}\\right)\\,dx = \\frac{M}{L}\\left[\\frac{x^3}{3}\\right]_0^L = \\frac{1}{3}ML^2$.</p>"
            },
            {
                "id": "diag_physc_mech_q18",
                "topic": "Parallel-Axis Theorem",
                "difficulty": "medium",
                "question": "<p>The moment of inertia of a uniform solid sphere of mass $M$ and radius $R$ about a central diameter is $I_{\\text{cm}} = \\frac{2}{5}MR^2$. What is its moment of inertia about a tangent axis on its surface?</p>",
                "options": [
                    "$\\frac{3}{5}MR^2$",
                    "$\\frac{7}{5}MR^2$",
                    "$\\frac{5}{3}MR^2$",
                    "$\\frac{2}{3}MR^2$",
                    "$\\frac{9}{5}MR^2$"
                ],
                "answer": "B",
                "explanation": "<p>By the Parallel-Axis Theorem: $I = I_{\\text{cm}} + Md^2 = \\frac{2}{5}MR^2 + M(R)^2 = \\frac{7}{5}MR^2$.</p>"
            },
            {
                "id": "diag_physc_mech_q19",
                "topic": "Torque & Rotational Dynamics",
                "difficulty": "medium",
                "question": "<p>A uniform solid disk of mass $M = 4.0\\text{ kg}$ and radius $R = 0.5\\text{ m}$ ($I = \\frac{1}{2}MR^2$) is mounted on a frictionless central axle. A constant tangential force of $10.0\\text{ N}$ is applied to its rim. What is the angular acceleration $\\alpha$ of the disk?</p>",
                "options": [
                    "$5.0\\text{ rad/s}^2$",
                    "$10.0\\text{ rad/s}^2$",
                    "$15.0\\text{ rad/s}^2$",
                    "$20.0\\text{ rad/s}^2$",
                    "$25.0\\text{ rad/s}^2$"
                ],
                "answer": "B",
                "explanation": "<p>Torque is $\\tau = R F = 0.5 \\times 10 = 5.0\\text{ N}\\cdot\\text{m}$. Rotational inertia is $I = \\frac{1}{2}(4)(0.5)^2 = 0.5\\text{ kg}\\cdot\\text{m}^2$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{5.0}{0.5} = 10.0\\text{ rad/s}^2$.</p>"
            },
            {
                "id": "diag_physc_mech_q20",
                "topic": "Rolling Without Slipping",
                "difficulty": "hard",
                "question": "<p>A uniform solid cylinder ($I = \\frac{1}{2}MR^2$) rolls without slipping down an incline of angle $\\theta$. What is the linear acceleration $a$ of its center of mass?</p>",
                "options": [
                    "$\\frac{1}{3}g\\sin\\theta$",
                    "$\\frac{1}{2}g\\sin\\theta$",
                    "$\\frac{2}{3}g\\sin\\theta$",
                    "$\\frac{3}{4}g\\sin\\theta$",
                    "$g\\sin\\theta$"
                ],
                "answer": "C",
                "explanation": "<p>For rolling without slipping: $a = \\frac{g\\sin\\theta}{1 + I_{\\text{cm}}/(MR^2)} = \\frac{g\\sin\\theta}{1 + 1/2} = \\frac{2}{3}g\\sin\\theta$.</p>"
            },
            {
                "id": "diag_physc_mech_q21",
                "topic": "Angular Momentum Conservation",
                "difficulty": "medium",
                "question": "<p>A figure skater spins with initial angular velocity $\\omega_0$ and rotational inertia $I_0$. When she pulls her arms in, her rotational inertia decreases to $\\frac{1}{3}I_0$. Assuming no external torques act, what is her new rotational kinetic energy?</p>",
                "options": [
                    "$\\frac{1}{3}K_0$",
                    "$K_0$",
                    "$3K_0$",
                    "$9K_0$",
                    "$\\sqrt{3}K_0$"
                ],
                "answer": "C",
                "explanation": "<p>Angular momentum is conserved: $L = I_0\\omega_0 = (I_0/3)\\omega_f \\implies \\omega_f = 3\\omega_0$. Kinetic energy is $K_f = \\frac{L^2}{2I_f} = \\frac{L^2}{2(I_0/3)} = 3\\left(\\frac{L^2}{2I_0}\\right) = 3K_0$.</p>"
            },
            {
                "id": "diag_physc_mech_q22",
                "topic": "Static Equilibrium",
                "difficulty": "medium",
                "question": "<p>A uniform horizontal beam of length $4.0\\text{ m}$ and weight $200\\text{ N}$ is hinged at a wall at one end and supported by a vertical cable at the other end. A weight of $600\\text{ N}$ is placed $1.0\\text{ m}$ from the wall. What is the tension in the cable?</p>",
                "options": [
                    "$200\\text{ N}$",
                    "$250\\text{ N}$",
                    "$300\\text{ N}$",
                    "$400\\text{ N}$",
                    "$500\\text{ N}$"
                ],
                "answer": "B",
                "explanation": "<p>Take torque about the wall hinge: $\\Sigma \\tau = 0 \\implies T(4.0) - (200)(2.0) - (600)(1.0) = 0 \\implies 4.0T = 400 + 600 = 1000 \\implies T = 250\\text{ N}$.</p>"
            },
            {
                "id": "diag_physc_mech_q23",
                "topic": "Universal Gravitation & Orbits",
                "difficulty": "medium",
                "question": "<p>A satellite travels in a circular orbit of radius $r$ around Earth (mass $M_E$). What is the orbital speed $v$ of the satellite?</p>",
                "options": [
                    "$\\sqrt{\\frac{GM_E}{r^2}}$",
                    "$\\sqrt{\\frac{GM_E}{r}}$",
                    "$\\frac{GM_E}{r}$",
                    "$\\sqrt{\\frac{2GM_E}{r}}$",
                    "$\\sqrt{GM_E r}$"
                ],
                "answer": "B",
                "explanation": "<p>Centripetal force is provided by gravity: $\\frac{mv^2}{r} = \\frac{GM_E m}{r^2} \\implies v = \\sqrt{\\frac{GM_E}{r}}$.</p>"
            },
            {
                "id": "diag_physc_mech_q24",
                "topic": "Gravitational Field Inside a Planet",
                "difficulty": "hard",
                "question": "<p>Assuming Earth is a uniform sphere of mass $M$ and radius $R$, how does the gravitational field $g(r)$ vary with distance $r$ from the center for $r < R$?</p>",
                "options": [
                    "$g(r) \\propto \\frac{1}{r^2}$",
                    "$g(r) \\propto \\frac{1}{r}$",
                    "$g(r) = \\text{constant}$",
                    "$g(r) \\propto r$",
                    "$g(r) \\propto r^2$"
                ],
                "answer": "D",
                "explanation": "<p>Only mass enclosed within radius $r$ exerts net gravity: $M_{\\text{enc}} = M\\left(\\frac{r}{R}\\right)^3$. Thus $g(r) = \\frac{G M_{\\text{enc}}}{r^2} = \\frac{GM r^3}{R^3 r^2} = \\frac{GM}{R^3}r \\propto r$.</p>"
            },
            {
                "id": "diag_physc_mech_q25",
                "topic": "Escape Velocity",
                "difficulty": "medium",
                "question": "<p>What is the ratio of escape speed $v_{\\text{esc}}$ from a spherical planet surface to the speed $v_{\\text{orb}}$ of a satellite in low circular orbit near the planet surface?</p>",
                "options": [
                    "$1 : 1$",
                    "$\\sqrt{2} : 1$",
                    "$2 : 1$",
                    "$2\\sqrt{2} : 1$",
                    "$4 : 1$"
                ],
                "answer": "B",
                "explanation": "<p>$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$. The ratio is $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\frac{\\sqrt{2GM/R}}{\\sqrt{GM/R}} = \\sqrt{2} \\approx 1.414$.</p>"
            },
            {
                "id": "diag_physc_mech_q26",
                "topic": "Kepler's Third Law",
                "difficulty": "medium",
                "question": "<p>Satellite A orbits a planet at radius $r$ with period $T$. Satellite B orbits the same planet at radius $4r$. What is the orbital period of Satellite B?</p>",
                "options": [
                    "$2T$",
                    "$4T$",
                    "$8T$",
                    "$16T$",
                    "$64T$"
                ],
                "answer": "C",
                "explanation": "<p>By Kepler's Third Law: $T^2 \\propto r^3 \\implies T_B = T_A \\left(\\frac{r_B}{r_A}\\right)^{3/2} = T(4)^{3/2} = T(2^3) = 8T$.</p>"
            },
            {
                "id": "diag_physc_mech_q27",
                "topic": "Simple Harmonic Motion Equations",
                "difficulty": "medium",
                "question": "<p>A mass-spring oscillator oscillates with equation $x(t) = 0.40\\cos(5t)$, where $x$ is in meters and $t$ in seconds. What is the maximum acceleration of the mass?</p>",
                "options": [
                    "$2.0\\text{ m/s}^2$",
                    "$5.0\\text{ m/s}^2$",
                    "$10.0\\text{ m/s}^2$",
                    "$20.0\\text{ m/s}^2$",
                    "$25.0\\text{ m/s}^2$"
                ],
                "answer": "C",
                "explanation": "<p>$a_{\\max} = \\omega^2 A = (5)^2(0.40) = 25 \\times 0.40 = 10.0\\text{ m/s}^2$.</p>"
            },
            {
                "id": "diag_physc_mech_q28",
                "topic": "Energy in SHM",
                "difficulty": "medium",
                "question": "<p>A particle executes SHM on a spring of force constant $k$ with amplitude $A$. At what displacement $x$ from equilibrium is the kinetic energy equal to the potential energy?</p>",
                "options": [
                    "$x = \\frac{1}{4}A$",
                    "$x = \\frac{1}{2}A$",
                    "$x = \\frac{1}{\\sqrt{2}}A$",
                    "$x = \\frac{\\sqrt{3}}{2}A$",
                    "$x = A$"
                ],
                "answer": "C",
                "explanation": "<p>Total energy $E = \\frac{1}{2}kA^2$. When $K = U$, $U = \\frac{1}{2}E \\implies \\frac{1}{2}kx^2 = \\frac{1}{4}kA^2 \\implies x^2 = \\frac{A^2}{2} \\implies x = \\frac{A}{\\sqrt{2}}$.</p>"
            },
            {
                "id": "diag_physc_mech_q29",
                "topic": "Physical Pendulum",
                "difficulty": "hard",
                "question": "<p>A physical pendulum consists of a uniform rod of length $L$ pivoted at one end ($I = \\frac{1}{3}ML^2$, center of mass at $d = L/2$). What is the period of small oscillations?</p>",
                "options": [
                    "$2\\pi\\sqrt{\\frac{L}{g}}$",
                    "$2\\pi\\sqrt{\\frac{2L}{3g}}$",
                    "$2\\pi\\sqrt{\\frac{3L}{2g}}$",
                    "$2\\pi\\sqrt{\\frac{L}{2g}}$",
                    "$2\\pi\\sqrt{\\frac{4L}{3g}}$"
                ],
                "answer": "B",
                "explanation": "<p>The period of a physical pendulum is $T = 2\\pi\\sqrt{\\frac{I}{mgd}} = 2\\pi\\sqrt{\\frac{\\frac{1}{3}ML^2}{Mg(L/2)}} = 2\\pi\\sqrt{\\frac{2L}{3g}}$.</p>"
            },
            {
                "id": "diag_physc_mech_q30",
                "topic": "Damped & Forced Oscillations",
                "difficulty": "hard",
                "question": "<p>In an underdamped harmonic oscillator governed by $m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = 0$, what is the angular frequency $\\omega'$ of oscillation?</p>",
                "options": [
                    "$\\sqrt{\\frac{k}{m} - \\left(\\frac{b}{2m}\\right)^2}$",
                    "$\\sqrt{\\frac{k}{m} - \\frac{b}{m}}$",
                    "$\\sqrt{\\frac{k}{m} + \\left(\\frac{b}{2m}\\right)^2}$",
                    "$\\frac{k}{m} - \\frac{b}{2m}$",
                    "$\\sqrt{\\frac{k}{m}}$"
                ],
                "answer": "A",
                "explanation": "<p>For an underdamped oscillator, the characteristic equation yields roots $\\lambda = -\\frac{b}{2m} \\pm i\\sqrt{\\frac{k}{m} - \\left(\\frac{b}{2m}\\right)^2}$. Thus the oscillation frequency is $\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2} = \\sqrt{\\frac{k}{m} - \\left(\\frac{b}{2m}\\right)^2}$.</p>"
            }
        ]
    }
};
