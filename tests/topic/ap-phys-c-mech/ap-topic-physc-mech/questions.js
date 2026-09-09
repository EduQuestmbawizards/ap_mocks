// Specific Question Bank for Test: ap-topic-physc-mech
const AP_TEST_DATA = {
    "ap-topic-physc-mech": {
        "id": "ap-topic-physc-mech",
        "title": "AP Physics C: Newtonian Mechanics & Rotation",
        "subject": "AP Physics C: Mechanics",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-physc-mech_q1",
                "topic": "Rotation",
                "difficulty": "hard",
                "question": "Find the rotational kinetic energy of a solid cylinder of mass $M$ and radius $R$ rotating at angular speed $\\omega$.",
                "options": [
                    "$\\frac{1}{2} M R^2 \\omega^2$",
                    "$\\frac{1}{4} M R^2 \\omega^2$",
                    "$M R^2 \\omega^2$",
                    "$\\frac{1}{3} M R^2 \\omega^2$"
                ],
                "answer": "B",
                "explanation": "$I = \\frac{1}{2} M R^2 \\implies K_{rot} = \\frac{1}{2} I \\omega^2 = \\frac{1}{4} M R^2 \\omega^2$."
            },
            {
                "id": "ap-topic-physc-mech_q2",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A particle of mass $m = 2.0\\text{ kg}$ moves along the $x$-axis subject to a net position-dependent force $F(x) = 6x^2 - 4x$ (in Newtons). If the particle starts from rest at $x = 0$, what is its speed when it reaches $x = 2.0\\text{ m}$?",
                "options": [
                    "2.8 m/s",
                    "4.0 m/s",
                    "8.0 m/s",
                    "2.0 m/s"
                ],
                "answer": "A",
                "explanation": "By the Work-Energy Theorem, $W_{\\text{net}} = \\Delta K = \\frac{1}{2}m v_f^2 - 0$. Calculate work: $W = \\int_0^2 (6x^2 - 4x)\\,dx = \\left[ 2x^3 - 2x^2 \\right]_0^2 = 2(8) - 2(4) = 16 - 8 = 8.0\\text{ J}$. Then $\\frac{1}{2}(2.0) v_f^2 = 8.0 \\implies v_f^2 = 8.0 \\implies v_f = \\sqrt{8} \\approx 2.83\\text{ m/s} \\approx 2.8\\text{ m/s}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q3",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A thin non-uniform rod of length $L$ and total mass $M$ has a linear mass density given by $\\lambda(x) = cx$, where $x$ is measured from one end ($x = 0$). What is the distance from $x = 0$ to the rod's center of mass $x_{\\text{cm}}$?",
                "options": [
                    "$\\frac{2}{3}L$",
                    "$\\frac{1}{2}L$",
                    "$\\frac{3}{4}L$",
                    "$\\frac{1}{3}L$"
                ],
                "answer": "A",
                "explanation": "Total mass $M = \\int_0^L \\lambda(x)\\,dx = \\int_0^L cx\\,dx = \\frac{1}{2}cL^2$. The first moment is $\\int_0^L x \\lambda(x)\\,dx = \\int_0^L c x^2\\,dx = \\frac{1}{3}cL^3$. Therefore $x_{\\text{cm}} = \\frac{\\int x\\,dm}{M} = \\frac{\\frac{1}{3}cL^3}{\\frac{1}{2}cL^2} = \\frac{2}{3}L$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q4",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A uniform solid sphere (mass $M$, radius $R$, $I = \\frac{2}{5}MR^2$) rolls without slipping down a ramp inclined at angle $\\theta$ to the horizontal. What is the linear acceleration $a$ of its center of mass?",
                "options": [
                    "$\\frac{5}{7}g\\sin\\theta$",
                    "$\\frac{2}{7}g\\sin\\theta$",
                    "$\\frac{1}{2}g\\sin\\theta$",
                    "$\\frac{5}{9}g\\sin\\theta$"
                ],
                "answer": "A",
                "explanation": "Forces along incline: $Mg\\sin\\theta - f_s = Ma$. Torque about center of mass: $\\tau = f_s R = I\\alpha = \\left(\\frac{2}{5}MR^2\\right)\\left(\\frac{a}{R}\\right) \\implies f_s = \\frac{2}{5}Ma$. Substituting into Newton's 2nd Law: $Mg\\sin\\theta - \\frac{2}{5}Ma = Ma \\implies Mg\\sin\\theta = \\frac{7}{5}Ma \\implies a = \\frac{5}{7}g\\sin\\theta$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q5",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "An object of mass $m$ is dropped from rest in a medium where it experiences a linear drag force $F_d = -bv$. Which expression gives its velocity as a function of time $t$?",
                "options": [
                    "$v(t) = \\frac{mg}{b}\\left(1 - e^{-bt/m}\\right)$",
                    "$v(t) = \\frac{mg}{b} e^{-bt/m}$",
                    "$v(t) = gt - \\frac{b}{m}t^2$",
                    "$v(t) = \\frac{mg}{b}\\left(1 - e^{-gt/b}\\right)$"
                ],
                "answer": "A",
                "explanation": "Equation of motion: $m\\frac{dv}{dt} = mg - bv \\implies \\frac{dv}{g - (b/m)v} = dt$. Integrating from $v(0) = 0$ yields $-\\frac{m}{b}\\ln\\left(1 - \\frac{b}{mg}v\\right) = t \\implies 1 - \\frac{bv}{mg} = e^{-bt/m} \\implies v(t) = \\frac{mg}{b}\\left(1 - e^{-bt/m}\\right)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q6",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A thin uniform rod of mass $M$ and length $L$ has moment of inertia $I_{\\text{cm}} = \\frac{1}{12}ML^2$. Using the parallel-axis theorem, what is its moment of inertia about an axis perpendicular to the rod passing through a point $\\frac{L}{4}$ from one end?",
                "options": [
                    "$\\frac{7}{48}ML^2$",
                    "$\\frac{1}{16}ML^2$",
                    "$\\frac{1}{3}ML^2$",
                    "$\\frac{5}{24}ML^2$"
                ],
                "answer": "A",
                "explanation": "The center of mass is at $\\frac{L}{2}$ from the end. The distance from the center of mass to the pivot axis at $\\frac{L}{4}$ is $d = \\left|\\frac{L}{2} - \\frac{L}{4}\\right| = \\frac{L}{4}$. By the parallel-axis theorem: $I = I_{\\text{cm}} + Md^2 = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{4}\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{16}ML^2 = \\left(\\frac{4}{48} + \\frac{3}{48}\\right)ML^2 = \\frac{7}{48}ML^2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q7",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A uniform rod of length $L$ and mass $M$ pivots frictionlessly about a horizontal axis through its top end. What is the period of small-angle oscillations for this physical pendulum?",
                "options": [
                    "$T = 2\\pi \\sqrt{\\frac{2L}{3g}}$",
                    "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
                    "$T = 2\\pi \\sqrt{\\frac{L}{2g}}$",
                    "$T = 2\\pi \\sqrt{\\frac{3L}{2g}}$"
                ],
                "answer": "A",
                "explanation": "For a physical pendulum, period is $T = 2\\pi\\sqrt{\\frac{I}{mgd}}$, where $I = \\frac{1}{3}ML^2$ about the end pivot and $d = \\frac{L}{2}$ is the distance from the pivot to the center of mass. $T = 2\\pi \\sqrt{\\frac{\\frac{1}{3}ML^2}{Mg(L/2)}} = 2\\pi \\sqrt{\\frac{2ML^2}{3MgL}} = 2\\pi \\sqrt{\\frac{2L}{3g}}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q8",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A satellite of mass $m$ moves in a circular orbit of radius $r$ around a planet of mass $M$. What is the total mechanical energy $E$ of the satellite?",
                "options": [
                    "$E = -\\frac{GMm}{2r}$",
                    "$E = -\\frac{GMm}{r}$",
                    "$E = +\\frac{GMm}{2r}$",
                    "$E = 0$"
                ],
                "answer": "A",
                "explanation": "Orbital velocity satisfies $\\frac{mv^2}{r} = \\frac{GMm}{r^2} \\implies mv^2 = \\frac{GMm}{r}$. Kinetic energy is $K = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$. Gravitational potential energy is $U = -\\frac{GMm}{r}$. Total mechanical energy is $E = K + U = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q9",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A particle moves in a conservative force field where the potential energy function is $U(x) = 4x^3 - 9x^2 + 6x$. At which point is the particle in stable equilibrium?",
                "options": [
                    "$x = 1.0$",
                    "$x = 0.5$",
                    "$x = 0$",
                    "$x = 1.5$"
                ],
                "answer": "A",
                "explanation": "Equilibrium occurs where force $F = -\\frac{dU}{dx} = 0$. $\\frac{dU}{dx} = 12x^2 - 18x + 6 = 6(2x^2 - 3x + 1) = 6(2x - 1)(x - 1) = 0 \\implies x = 0.5$ or $x = 1.0$. Second derivative test for stability: $\\frac{d^2U}{dx^2} = 24x - 18$. At $x = 0.5$, $\\frac{d^2U}{dx^2} = 12 - 18 = -6 < 0$ (unstable). At $x = 1.0$, $\\frac{d^2U}{dx^2} = 24(1) - 18 = +6 > 0$ (local minimum of $U$, stable equilibrium).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q10",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A uniform solid disk of mass $M$ and radius $R$ is rotating freely with angular velocity $\\omega_0$ about a central frictionless axle. A small lump of clay of mass $m$ is dropped vertically onto the outer rim ($r = R$) and sticks. What is the final angular velocity $\\omega_f$?",
                "options": [
                    "$\\frac{M}{M + 2m}\\omega_0$",
                    "$\\frac{M}{M + m}\\omega_0$",
                    "$\\frac{M + 2m}{M}\\omega_0$",
                    "$\\frac{2M}{2M + m}\\omega_0$"
                ],
                "answer": "A",
                "explanation": "Angular momentum is conserved about the central axle ($L_i = L_f$). Initial: $L_i = I_{\\text{disk}}\\omega_0 = \\left(\\frac{1}{2}MR^2\\right)\\omega_0$. Final: $L_f = (I_{\\text{disk}} + I_{\\text{clay}})\\omega_f = \\left(\\frac{1}{2}MR^2 + mR^2\\right)\\omega_f = R^2\\left(\\frac{1}{2}M + m\\right)\\omega_f$. Equating: $\\frac{1}{2}MR^2\\omega_0 = R^2\\left(\\frac{M + 2m}{2}\\right)\\omega_f \\implies \\omega_f = \\frac{M}{M + 2m}\\omega_0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q11",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "medium",
                "question": "An object of mass $m = 0.5\\text{ kg}$ is attached to an ideal spring with spring constant $k = 50\\text{ N/m}$ on a frictionless horizontal surface. If the object is displaced $0.10\\text{ m}$ from equilibrium and released, what is its maximum acceleration?",
                "options": [
                    "10 m/s^2",
                    "5.0 m/s^2",
                    "1.0 m/s^2",
                    "20 m/s^2"
                ],
                "answer": "A",
                "explanation": "Hooke's Law gives maximum restoring force at maximum displacement $A$: $F_{\\max} = kA = (50\\text{ N/m})(0.10\\text{ m}) = 5.0\\text{ N}$. By Newton's 2nd Law: $a_{\\max} = \\frac{F_{\\max}}{m} = \\frac{5.0\\text{ N}}{0.5\\text{ kg}} = 10\\text{ m/s}^2$. Alternatively, $\\omega = \\sqrt{k/m} = \\sqrt{100} = 10\\text{ rad/s}$, and $a_{\\max} = \\omega^2 A = (100)(0.10) = 10\\text{ m/s}^2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q12",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A rocket of initial mass $m_0$ burns fuel at a constant rate $R = -\\frac{dm}{dt}$ with constant exhaust speed $u$ relative to the rocket in deep space. What is the rocket's speed after its mass has decreased to $\\frac{m_0}{e}$?",
                "options": [
                    "$u$",
                    "$2u$",
                    "$e \\cdot u$",
                    "$\\frac{u}{e}$"
                ],
                "answer": "A",
                "explanation": "By Tsiolkovsky's rocket equation: $\\Delta v = u \\ln\\left(\\frac{m_0}{m_f}\\right)$. Given $m_f = \\frac{m_0}{e}$, the mass ratio is $\\frac{m_0}{m_0/e} = e$. Thus $\\Delta v = u \\ln(e) = u(1) = u$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q13",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A force $\\vec{F} = 4y\\hat{i} + 3x\\hat{j}$ (in Newtons) acts on a particle as it moves along a path from $(0, 0)$ to $(2, 2)$. Is this force conservative?",
                "options": [
                    "No, because $\\frac{\\partial F_y}{\\partial x} \\neq \\frac{\\partial F_x}{\\partial y}$",
                    "Yes, because the curl of the force is zero everywhere",
                    "Yes, because both components are linear functions of coordinates",
                    "No, because the work along any path is always zero"
                ],
                "answer": "A",
                "explanation": "A 2D force is conservative if and only if $\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial F_x}{\\partial y}$. Here $F_x = 4y \\implies \\frac{\\partial F_x}{\\partial y} = 4$, and $F_y = 3x \\implies \\frac{\\partial F_y}{\\partial x} = 3$. Since $3 \\neq 4$, the curl $(\\nabla \\times \\vec{F})_z = 3 - 4 = -1 \\neq 0$, proving the force is non-conservative.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q14",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A particle of mass $m$ moves in the $xy$-plane with position vector $\\vec{r}(t) = 3t^2\\hat{i} + 2t^3\\hat{j}$. What is the angular momentum $\\vec{L}$ of the particle about the origin as a function of time?",
                "options": [
                    "$6mt^4\\hat{k}$",
                    "$-6mt^4\\hat{k}$",
                    "$12mt^4\\hat{k}$",
                    "$0$"
                ],
                "answer": "A",
                "explanation": "Velocity $\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = 6t\\hat{i} + 6t^2\\hat{j}$. Momentum $\\vec{p} = m\\vec{v} = 6mt\\hat{i} + 6mt^2\\hat{j}$. Angular momentum is $\\vec{L} = \\vec{r} \\times \\vec{p} = (3t^2)(6mt^2)\\hat{k} - (2t^3)(6mt)\\hat{k} = 18mt^4\\hat{k} - 12mt^4\\hat{k} = 6mt^4\\hat{k}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q15",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "medium",
                "question": "What is the escape speed from the surface of a spherical planet of mass $M$ and radius $R$?",
                "options": [
                    "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$",
                    "$v_{\\text{esc}} = \\sqrt{\\frac{GM}{R}}$",
                    "$v_{\\text{esc}} = \\frac{2GM}{R}$",
                    "$v_{\\text{esc}} = \\sqrt{\\frac{GM}{2R}}$"
                ],
                "answer": "A",
                "explanation": "Conservation of mechanical energy from the surface to infinity ($E_f = 0$): $E_i = \\frac{1}{2}m v_{\\text{esc}}^2 - \\frac{GMm}{R} = 0 \\implies \\frac{1}{2}v_{\\text{esc}}^2 = \\frac{GM}{R} \\implies v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q16",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A mass $m$ undergoes damped harmonic motion described by $\\frac{d^2x}{dt^2} + 2\\beta\\frac{dx}{dt} + \\omega_0^2 x = 0$. What is the condition on $\\beta$ and $\\omega_0$ for critical damping?",
                "options": [
                    "$\\beta = \\omega_0$",
                    "$\\beta > \\omega_0$",
                    "$\\beta < \\omega_0$",
                    "$\\beta = 0$"
                ],
                "answer": "A",
                "explanation": "The characteristic equation is $r^2 + 2\\beta r + \\omega_0^2 = 0$, with roots $r = -\\beta \\pm \\sqrt{\\beta^2 - \\omega_0^2}$. Critical damping occurs when the discriminant vanishes, yielding repeated real roots without oscillation: $\\beta^2 - \\omega_0^2 = 0 \\implies \\beta = \\omega_0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q17",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "medium",
                "question": "A constant torque of $20\\text{ N}\\cdot\\text{m}$ is applied to a flywheel with rotational inertia $I = 4.0\\text{ kg}\\cdot\\text{m}^2$ initially at rest. What is the flywheel's rotational kinetic energy after $3.0\\text{ seconds}$?",
                "options": [
                    "450 J",
                    "150 J",
                    "900 J",
                    "300 J"
                ],
                "answer": "A",
                "explanation": "Angular acceleration $\\alpha = \\frac{\\tau}{I} = \\frac{20}{4.0} = 5.0\\text{ rad/s}^2$. Angular speed after $3.0\\text{ s}$: $\\omega = \\alpha t = (5.0)(3.0) = 15\\text{ rad/s}$. Rotational kinetic energy $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(4.0)(15^2) = 2(225) = 450\\text{ J}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q18",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A block of mass $m$ is pushed against a spring with constant $k$, compressing it by distance $x$. The block is released and slides up a frictionless incline of angle $\\theta$. What maximum distance $d$ along the ramp does the block travel before coming to rest?",
                "options": [
                    "$d = \\frac{kx^2}{2mg\\sin\\theta}$",
                    "$d = \\frac{kx^2}{mg\\sin\\theta}$",
                    "$d = \\frac{kx^2}{2mg\\cos\\theta}$",
                    "$d = \\frac{kx}{mg\\sin\\theta}$"
                ],
                "answer": "A",
                "explanation": "Conservation of mechanical energy: initial elastic potential energy converts to gravitational potential energy at height $h = d\\sin\\theta$: $\\frac{1}{2}kx^2 = mgh = mg(d\\sin\\theta) \\implies d = \\frac{kx^2}{2mg\\sin\\theta}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q19",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "hard",
                "question": "A particle of mass $m$ moves in a circular path of radius $R$ with tangential speed increasing according to $v(t) = ct^2$. What is the magnitude of the net acceleration vector of the particle at time $t$?",
                "options": [
                    "$\\sqrt{(2ct)^2 + \\left(\\frac{c^2t^4}{R}\\right)^2}$",
                    "$\\frac{c^2t^4}{R}$",
                    "$2ct$",
                    "$2ct + \\frac{c^2t^4}{R}$"
                ],
                "answer": "A",
                "explanation": "Tangential acceleration is $a_t = \\frac{dv}{dt} = 2ct$. Centripetal (radial) acceleration is $a_c = \\frac{v^2}{R} = \\frac{(ct^2)^2}{R} = \\frac{c^2t^4}{R}$. Because these components are mutually perpendicular, total acceleration magnitude is $a = \\sqrt{a_t^2 + a_c^2} = \\sqrt{(2ct)^2 + \\left(\\frac{c^2t^4}{R}\\right)^2}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-physc-mech_q20",
                "topic": "Newtonian Mechanics & Rotation",
                "difficulty": "medium",
                "question": "How is impulse related to momentum in calculus notation?",
                "options": [
                    "$\\vec{J} = \\int_{t_1}^{t_2} \\vec{F}\\,dt = \\Delta\\vec{p}$",
                    "$\\vec{J} = \\frac{d\\vec{F}}{dt} = \\vec{p}$",
                    "$\\vec{J} = \\int \\vec{p}\\,dt = \\vec{F}$",
                    "$\\vec{J} = \\vec{F} \\times \\vec{v} = \\Delta\\vec{p}$"
                ],
                "answer": "A",
                "explanation": "By Newton's 2nd Law in momentum form, $\\vec{F} = \\frac{d\\vec{p}}{dt}$. Integrating with respect to time yields the Impulse-Momentum Theorem: $\\vec{J} = \\int_{t_1}^{t_2} \\vec{F}\\,dt = \\Delta\\vec{p}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
