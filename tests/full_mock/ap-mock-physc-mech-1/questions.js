// Specific Question Bank for Test: ap-mock-physc-mech-1
const AP_TEST_DATA = {
    "ap-mock-physc-mech-1": {
        "id": "ap-mock-physc-mech-1",
        "title": "AP Physics C: Mechanics Practice Exam 1",
        "testType": "Practice Exam",
        "subject": "ap-phys-c-mech",
        "topic": "Mechanics Full Practice",
        "timeLimitMinutes": 45,
        "totalQuestions": 35,
        "questions": [
            {
                "id": "pt1-mech-q1",
                "global_num": 1,
                "section": "Practice Test 1 – Mechanics",
                "question": "A rock is dropped off a cliff and falls the first half of the distance to the ground in $t_1$ seconds. If it falls the second half of the distance in $t_2$ seconds, what is the value of $t_2/t_1$? (Ignore air resistance.)",
                "options": [
                    "$\\frac{1}{2\\sqrt{2}}$",
                    "$\\sqrt{2}$",
                    "$\\frac{1}{2}$",
                    "$1 - \\frac{1}{\\sqrt{2}}$",
                    "$\\sqrt{2} - 1$"
                ],
                "answer": "E",
                "explanation": "(E) Let the total height fallen be $H$. The time to fall the first half of the distance ($H/2$) is:\n  $$\\frac{H}{2} = \\frac{1}{2}gt_1^2 \\implies t_1 = \\sqrt{\\frac{H}{g}}$$\nThe total time $T$ to fall the entire height $H$ is:\n  $$H = \\frac{1}{2}gT^2 \\implies T = \\sqrt{\\frac{2H}{g}}$$\nThe time required to fall the second half is $t_2 = T - t_1$:\n  $$t_2 = \\sqrt{\\frac{2H}{g}} - \\sqrt{\\frac{H}{g}} = \\sqrt{\\frac{H}{g}}(\\sqrt{2} - 1)$$\nTaking the ratio $t_2/t_1$:\n  $$\\frac{t_2}{t_1} = \\frac{\\sqrt{\\frac{H}{g}}(\\sqrt{2} - 1)}{\\sqrt{\\frac{H}{g}}} = \\sqrt{2} - 1$$",
                "difficulty": "medium",
                "topic": "1D Kinematics & Free Fall"
            },
            {
                "id": "pt1-mech-q2",
                "global_num": 2,
                "section": "Practice Test 1 – Mechanics",
                "question": "A bubble starting at the bottom of a soda bottle experiences constant acceleration, $a$, as it rises to the top of the bottle in some time, $t$. How much farther does it travel in the last second of its journey than in the first second? Assume that the journey takes longer than 2 seconds.",
                "options": [
                    "$a(t + 1\\text{ s})^2$",
                    "$a(t - 1\\text{ s})^2$",
                    "$at^2$",
                    "$a(t + 1\\text{ s})(1\\text{ s})$",
                    "$a(t - 1\\text{ s})(1\\text{ s})$"
                ],
                "answer": "E",
                "explanation": "(E) The distance traveled in the first second ($t = 0$ to $t = 1\\text{ s}$) starting from rest is:\n  $$d_1 = \\frac{1}{2}a(1)^2 = \\frac{1}{2}a$$\nThe velocity at time $t - 1\\text{ s}$ is $v(t-1) = a(t-1)$. The distance traveled during the final second (from $t-1$ to $t$) is:\n  $$d_{\\text{last}} = v(t-1)(1) + \\frac{1}{2}a(1)^2 = a(t - 1) + \\frac{1}{2}a$$\nThe difference between the two distances is:\n  $$\\Delta d = d_{\\text{last}} - d_1 = \\left(a(t-1) + \\frac{1}{2}a\\right) - \\frac{1}{2}a = a(t - 1\\text{ s})(1\\text{ s})$$",
                "difficulty": "medium",
                "topic": "1D Kinematics & Acceleration"
            },
            {
                "id": "pt1-mech-q3",
                "global_num": 3,
                "section": "Practice Test 1 – Mechanics",
                "question": "An object initially at rest experiences a time-varying acceleration given by $a = (2\\text{ m/s}^3)t$ for $t \\ge 0$. How far does the object travel in the first 3 seconds?",
                "options": [
                    "$9\\text{ m}$",
                    "$12\\text{ m}$",
                    "$18\\text{ m}$",
                    "$24\\text{ m}$",
                    "$27\\text{ m}$"
                ],
                "answer": "A",
                "explanation": "(A) Integrate acceleration with respect to time to get velocity ($v_0 = 0$):\n  $$v(t) = \\int 2t\\,dt = t^2$$\nIntegrate velocity to find the position displacement over the interval $t = 0$ to $t = 3\\text{ s}$:\n  $$\\Delta x = \\int_0^3 t^2\\,dt = \\left[\\frac{t^3}{3}\\right]_0^3 = \\frac{27}{3} = 9\\text{ m}$$",
                "difficulty": "medium",
                "topic": "Calculus-Based Kinematics & Integration"
            },
            {
                "id": "pt1-mech-q4",
                "global_num": 4,
                "section": "Practice Test 1 – Mechanics",
                "question": "What is the benefit of raising an object using an inclined plane instead of simply lifting the object? Assume ideal conditions.",
                "options": [
                    "The amount of force needed to move the object is reduced.",
                    "The amount of time needed to move the object is reduced.",
                    "The distance the object must be moved is reduced.",
                    "The amount of work needed to move the object is reduced.",
                    "The power that must be exerted will be reduced."
                ],
                "answer": "A",
                "explanation": "(A) Gravity is a conservative force, so the total work required to raise an object to height $h$ ($W = mgh$) is identical regardless of the path chosen. By increasing the displacement along the ramp, the required input force is reduced ($F = mg\\sin\\theta$).",
                "difficulty": "easy",
                "topic": "Work, Energy & Inclines"
            },
            {
                "id": "pt1-mech-q5",
                "global_num": 5,
                "section": "Practice Test 1 – Mechanics",
                "question": "In the figure shown, a tension force $F_T$ causes a particle of mass $m$ to move with constant angular speed $\\omega$ in a horizontal circular path of radius $R$. Which of the following expressions gives the magnitude of $F_T$? (Ignore air resistance.)",
                "options": [
                    "$m\\omega^2 R$",
                    "$m\\sqrt{\\omega^4 R^2 - g^2}$",
                    "$m\\sqrt{g^2 + \\omega^4 R^2}$",
                    "$m(\\omega^2 R - g)$",
                    "$m(\\omega^2 R + g)$"
                ],
                "answer": "C",
                "explanation": "(C) The vertical component of tension balances gravity: $F_{T,y} = F_T \\cos\\theta = mg$. The horizontal component provides the centripetal force: $F_{T,x} = F_T \\sin\\theta = m\\omega^2 R$. Applying the Pythagorean identity:\n  $$F_T^2 = F_{T,x}^2 + F_{T,y}^2 = (m\\omega^2 R)^2 + (mg)^2 \\implies F_T = m\\sqrt{g^2 + \\omega^4 R^2}$$",
                "difficulty": "hard",
                "topic": "Conical Pendulum & Circular Dynamics"
            },
            {
                "id": "pt1-mech-q6",
                "global_num": 6,
                "section": "Practice Test 1 – Mechanics",
                "question": "An object (mass = $m$) above the surface of the Moon (mass = $M$) is dropped from an altitude $h$ equal to the Moon's radius ($R$). With what speed will the object strike the lunar surface?",
                "options": [
                    "$\\sqrt{\\frac{GM}{R}}$",
                    "$\\sqrt{\\frac{GM}{2R}}$",
                    "$\\sqrt{\\frac{2GM}{R}}$",
                    "$\\sqrt{\\frac{GMm}{R}}$",
                    "$\\sqrt{\\frac{2GMm}{R}}$"
                ],
                "answer": "A",
                "explanation": "(A) The initial distance from the lunar center is $r_i = R + h = 2R$. The final distance at impact is $r_f = R$. Using Conservation of Mechanical Energy:\n  $$E_i = E_f \\implies -\\frac{GMm}{2R} = \\frac{1}{2}mv^2 - \\frac{GMm}{R}$$\n  $$\\frac{1}{2}mv^2 = \\frac{GMm}{R} - \\frac{GMm}{2R} = \\frac{GMm}{2R} \\implies v = \\sqrt{\\frac{GM}{R}}$$",
                "difficulty": "medium",
                "topic": "Planetary Gravitation & Escape Velocity"
            },
            {
                "id": "pt1-mech-q7",
                "global_num": 7,
                "section": "Practice Test 1 – Mechanics",
                "question": "Two pendulums are constructed in such a way that they are identical except that one has a hanging mass of $m$ and the other has a hanging mass of $2m$. Both hanging masses are set into motion such that each system has the same total mechanical energy. Assume that the motion approximates simple harmonic motion. Comparatively, the system with the lesser mass will have greater",
                "options": [
                    "maximum speed and maximum angle of displacement",
                    "frequency and maximum angle of displacement",
                    "period and maximum speed",
                    "frequency only",
                    "maximum angle of displacement only"
                ],
                "answer": "A",
                "explanation": "(A) The period $T = 2\\pi\\sqrt{L/g}$ and frequency $f$ depend only on $L$ and $g$, making them identical for both pendulums. For equal total mechanical energy $E$:\nMaximum kinetic energy: $E = \\frac{1}{2}m v_{\\max}^2 \\implies v_{\\max} = \\sqrt{2E/m}$, so the smaller mass has the greater maximum speed.\nMaximum potential energy: $E = mgh_{\\max} \\implies h_{\\max} = E/(mg)$, so the smaller mass reaches a greater vertical height, which requires a larger maximum angular displacement.",
                "difficulty": "medium",
                "topic": "Simple Harmonic Motion & Pendulums"
            },
            {
                "id": "pt1-mech-q8",
                "global_num": 8,
                "section": "Practice Test 1 – Mechanics",
                "question": "A uniform cylinder of mass $m$ and radius $r$ unrolls without slipping from two strings tied to a vertical support. If the rotational inertia of the cylinder is $\\frac{1}{2}mr^2$, find the acceleration of its center of mass.",
                "options": [
                    "$\\frac{1}{3}g$",
                    "$\\frac{1}{2}g$",
                    "$\\frac{3}{5}g$",
                    "$\\frac{2}{3}g$",
                    "$g$"
                ],
                "answer": "D",
                "explanation": "(D) Let $F_T$ be the tension in each of the two strings.\nTranslational motion: $mg - 2F_T = ma$\nRotational motion about CM: $\\tau = (2F_T)r = I\\alpha = \\left(\\frac{1}{2}mr^2\\right)\\left(\\frac{a}{r}\\right) \\implies 2F_T = \\frac{1}{2}ma$\nSubstituting into the translational equation:\n  $$mg - \\frac{1}{2}ma = ma \\implies mg = \\frac{3}{2}ma \\implies a = \\frac{2}{3}g$$",
                "difficulty": "hard",
                "topic": "Rolling Motion & Rotational Dynamics"
            },
            {
                "id": "pt1-mech-q9",
                "global_num": 9,
                "section": "Practice Test 1 – Mechanics",
                "question": "A space shuttle is launched from Earth. As it travels up, it moves at a constant velocity of $150\\text{ m/s}$ straight up. If its engines provide $1.5 \\times 10^8\\text{ W}$ of power, what is the shuttle's mass? You may assume that the shuttle's mass and the acceleration due to gravity are constant ($g = 10\\text{ m/s}^2$).",
                "options": [
                    "$6.7 \\times 10^2\\text{ kg}$",
                    "$1.0 \\times 10^5\\text{ kg}$",
                    "$6.7 \\times 10^5\\text{ kg}$",
                    "$1.0 \\times 10^6\\text{ kg}$",
                    "$2.3 \\times 10^6\\text{ kg}$"
                ],
                "answer": "B",
                "explanation": "(B) At constant velocity, engine thrust equals gravitational weight: $F = mg$.\n  $$P = Fv = mgv \\implies m = \\frac{P}{gv} = \\frac{1.5 \\times 10^8\\text{ W}}{(10\\text{ m/s}^2)(150\\text{ m/s})} = \\frac{1.5 \\times 10^8}{1500} = 1.0 \\times 10^5\\text{ kg}$$",
                "difficulty": "easy",
                "topic": "Work, Power & Constant Velocity"
            },
            {
                "id": "pt1-mech-q10",
                "global_num": 10,
                "section": "Practice Test 1 – Mechanics",
                "question": "A uniform cylinder, initially at rest on a frictionless, horizontal surface, is pulled by a constant force $F$ from time $t = 0$ to time $t = T$. From time $t = T$ on, this force is removed. Which graph best illustrates the speed, $v$, of the cylinder's center of mass from $t = 0$ onwards?",
                "options": [
                    "Velocity increases linearly to $T$, then decreases linearly to zero",
                    "Velocity increases linearly from $0$ to $T$, then remains constant",
                    "Velocity increases parabolically from $0$ to $T$, then remains constant",
                    "Velocity stays constant from $0$ to $T$, then drops to zero",
                    "Velocity increases exponentially"
                ],
                "answer": "B",
                "explanation": "(B) For $0 \\le t \\le T$, the constant net force causes a constant acceleration $a = F/m$, meaning $v(t) = at$ increases linearly. For $t > T$, $F = 0 \\implies a = 0$, so velocity remains at a constant horizontal value.",
                "difficulty": "easy",
                "topic": "Newton's 2nd Law & Force Graphs"
            },
            {
                "id": "pt1-mech-q11",
                "global_num": 11,
                "section": "Practice Test 1 – Mechanics",
                "question": "A satellite is in circular orbit around Earth (radius = $R$). If the work required to lift the satellite to its orbital height is equal to the satellite's kinetic energy while in this orbit, how high above the surface of Earth is the satellite?",
                "options": [
                    "$R/2$",
                    "$R$",
                    "$3R/2$",
                    "$2R$",
                    "$4R$"
                ],
                "answer": "A",
                "explanation": "(A) Work to lift the satellite to altitude $h$:\n  $$W = \\Delta U = -\\frac{GMm}{R+h} - \\left(-\\frac{GMm}{R}\\right) = \\frac{GMmh}{R(R+h)}$$\nFor a circular orbit at radius $r = R+h$, the orbital speed satisfies $v^2 = \\frac{GM}{R+h}$, so kinetic energy is:\n  $$K = \\frac{1}{2}mv^2 = \\frac{GMm}{2(R+h)}$$\nEquating $W = K$:\n  $$\\frac{GMmh}{R(R+h)} = \\frac{GMm}{2(R+h)} \\implies \\frac{h}{R} = \\frac{1}{2} \\implies h = \\frac{R}{2}$$",
                "difficulty": "hard",
                "topic": "Gravitational Potential & Orbital Energy"
            },
            {
                "id": "pt1-mech-q12",
                "global_num": 12,
                "section": "Practice Test 1 – Mechanics",
                "question": "A block of length $l_1 = 10\\text{ cm}$, mass $m_1 = 10\\text{ kg}$, and $v_1 = 2\\text{ m/s}$ moves toward a second block of length $l_2 = 20\\text{ cm}$, $m_2 = 2\\text{ kg}$, and $v_2 = 8\\text{ m/s}$ moving toward the first. The blocks' closest edges are $1\\text{ m}$ apart. The blocks experience a perfectly inelastic collision. How long after the collision does it take for the center of mass of the combined object to cross the point midway between the blocks' starting positions?",
                "options": [
                    "$0.225\\text{ s}$",
                    "$0.325\\text{ s}$",
                    "$0.525\\text{ s}$",
                    "$0.900\\text{ s}$",
                    "$0.975\\text{ s}$"
                ],
                "answer": "E",
                "explanation": "(E) Time to collision: $t_{\\text{coll}} = \\frac{1.0\\text{ m}}{2\\text{ m/s} + 8\\text{ m/s}} = 0.1\\text{ s}$. The collision point is $0.2\\text{ m}$ from block 1's starting position.  \nVelocity of combined mass:\n  $$v_f = \\frac{(10\\text{ kg})(2\\text{ m/s}) + (2\\text{ kg})(-8\\text{ m/s})}{10\\text{ kg} + 2\\text{ kg}} = \\frac{4}{12} = \\frac{1}{3}\\text{ m/s}$$\nMidpoint of the initial separation is $0.5\\text{ m}$ from block 1's starting position.  \nThe distance from the collision point to the midpoint is $0.5 - 0.2 = 0.3\\text{ m}$. Taking the center of mass position offset within the combined block into account adds $0.025\\text{ m}$, giving a total travel distance of $d = 0.325\\text{ m}$.  \nTime: $t = \\frac{0.325\\text{ m}}{1/3\\text{ m/s}} = 0.975\\text{ s}$.",
                "difficulty": "hard",
                "topic": "Inelastic Collisions & Center of Mass"
            },
            {
                "id": "pt1-mech-q13",
                "global_num": 13,
                "section": "Practice Test 1 – Mechanics",
                "question": "A rubber ball (mass = $0.08\\text{ kg}$) is dropped from a height of $3.2\\text{ m}$ and rebounds almost to its original height. If the impact time with the floor is $0.04\\text{ s}$, what average force did the floor exert on the ball?",
                "options": [
                    "$0.16\\text{ N}$",
                    "$16\\text{ N}$",
                    "$32\\text{ N}$",
                    "$36\\text{ N}$",
                    "$64\\text{ N}$"
                ],
                "answer": "C",
                "explanation": "(C) Impact speed: $v = \\sqrt{2gh} = \\sqrt{2(10)(3.2)} = 8\\text{ m/s}$.\nChange in momentum taking upward as positive:\n  $$\\Delta p = m(v_f - v_i) = 0.08(8 - (-8)) = 1.28\\text{ kg}\\cdot\\text{m/s}$$\nAverage force:\n  $$F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t} = \\frac{1.28\\text{ N}\\cdot\\text{s}}{0.04\\text{ s}} = 32\\text{ N}$$",
                "difficulty": "medium",
                "topic": "Impulse-Momentum Theorem"
            },
            {
                "id": "pt1-mech-q14",
                "global_num": 14,
                "section": "Practice Test 1 – Mechanics",
                "question": "A disk of radius $0.1\\text{ m}$ initially at rest undergoes an angular acceleration of $2.0\\text{ rad/s}^2$. If the disk only rotates, find the total distance traveled by a point on the rim in $4.0\\text{ s}$.",
                "options": [
                    "$0.4\\text{ m}$",
                    "$0.8\\text{ m}$",
                    "$1.2\\text{ m}$",
                    "$1.6\\text{ m}$",
                    "$2.0\\text{ m}$"
                ],
                "answer": "D",
                "explanation": "(D) Angular displacement:\n  $$\\Delta\\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(2.0\\text{ rad/s}^2)(4.0\\text{ s})^2 = 16\\text{ rad}$$\nArc distance on rim:\n  $$s = r\\Delta\\theta = (0.1\\text{ m})(16\\text{ rad}) = 1.6\\text{ m}$$",
                "difficulty": "easy",
                "topic": "Rotational Kinematics & Arc Length"
            },
            {
                "id": "pt1-mech-q15",
                "global_num": 15,
                "section": "Practice Test 1 – Mechanics",
                "question": "A small object slides down a frictionless quarter-circular slide of radius $R$ starting from rest at a height equal to $2R$ above a horizontal surface. Find its horizontal displacement, $x$, from the starting point at the moment it strikes the surface.",
                "options": [
                    "$R$",
                    "$2R$",
                    "$3R$",
                    "$4R$",
                    "$5R$"
                ],
                "answer": "C",
                "explanation": "(C) The object leaves the slide horizontally at height $R$ with speed $v = \\sqrt{2gR}$.\nTime to fall the remaining height $R$: $t = \\sqrt{2R/g}$.\nHorizontal distance traveled in air:\n  $$\\Delta x_{\\text{air}} = v t = \\sqrt{2gR}\\sqrt{\\frac{2R}{g}} = 2R$$\nTotal horizontal displacement from the starting position: $x_{\\text{total}} = R + 2R = 3R$.",
                "difficulty": "medium",
                "topic": "Energy Conservation & Projectile Launch"
            },
            {
                "id": "pt1-mech-q16",
                "global_num": 16,
                "section": "Practice Test 1 – Mechanics",
                "question": "A particle executes uniform circular motion in a circle of radius $R$. When the shadow on Screen 1 is at position $x = -0.5R$ and moving in the $+x$ direction, what is true about the position and velocity of the shadow on Screen 2 at that same instant?",
                "options": [
                    "$y = -0.866R$; velocity in $-y$ direction",
                    "$y = -0.866R$; velocity in $+y$ direction",
                    "$y = -0.5R$; velocity in $-y$ direction",
                    "$y = +0.866R$; velocity in $-y$ direction",
                    "$y = +0.866R$; velocity in $+y$ direction"
                ],
                "answer": "A",
                "explanation": "(A) Position along $x$: $x = R\\cos\\theta = -0.5R \\implies \\theta = 120^\\circ$ or $240^\\circ$.\nBecause the shadow moves in $+x$ direction, $v_x = -\\omega R\\sin\\theta > 0 \\implies \\sin\\theta < 0$, placing the angle at $\\theta = 240^\\circ$.\nTherefore:\n  $$y = R\\sin(240^\\circ) = -R\\frac{\\sqrt{3}}{2} \\approx -0.866R$$\n  $$v_y = \\omega R\\cos(240^\\circ) = -0.5\\omega R < 0 \\quad (\\text{directed along }-y)$$",
                "difficulty": "hard",
                "topic": "Uniform Circular Motion & Projections"
            },
            {
                "id": "pt1-mech-q17",
                "global_num": 17,
                "section": "Practice Test 1 – Mechanics",
                "question": "Two objects of masses $m$ and $2m$ are attached to the ends of a rigid massless rod of length $L$ at rest on a frictionless table. When a force $F$ is applied perpendicularly at mass $2m$, the resulting rotational acceleration of the rod about its center of mass is $kF/(mL)$. What is $k$?",
                "options": [
                    "$1/4$",
                    "$1/3$",
                    "$1/2$",
                    "$2/3$",
                    "$1$"
                ],
                "answer": "C",
                "explanation": "(C) Distance of CM from mass $m$: $y_{\\text{cm}} = \\frac{m(0) + 2m(L)}{3m} = \\frac{2}{3}L$.\nDistance from CM to mass $2m$: $L - \\frac{2}{3}L = \\frac{1}{3}L$.\nRotational inertia about CM:\n  $$I_{\\text{cm}} = m\\left(\\frac{2}{3}L\\right)^2 + 2m\\left(\\frac{1}{3}L\\right)^2 = \\frac{4}{9}mL^2 + \\frac{2}{9}mL^2 = \\frac{2}{3}mL^2$$\nTorque about CM: $\\tau = F\\left(\\frac{1}{3}L\\right)$.\nAngular acceleration:\n  $$\\alpha = \\frac{\\tau}{I_{\\text{cm}}} = \\frac{F L / 3}{\\frac{2}{3}mL^2} = \\frac{1}{2}\\frac{F}{mL} \\implies k = \\frac{1}{2}$$",
                "difficulty": "hard",
                "topic": "Rotational Inertia & Torque"
            },
            {
                "id": "pt1-mech-q18",
                "global_num": 18,
                "section": "Practice Test 1 – Mechanics",
                "question": "Old cars were made with rigid frames; modern cars are made with frames that crumple in a collision. If each vehicle crashes into a wall and comes to a complete stop from the same initial mass and speed, which of the following would NOT be true?",
                "options": [
                    "The modern vehicle would experience less force.",
                    "The modern vehicle would experience less impulse.",
                    "The modern vehicle's magnitude of acceleration would be less.",
                    "The modern vehicle's collision would take less time.",
                    "More than one of the above would not be true."
                ],
                "answer": "E",
                "explanation": "(E) Because both vehicles have the same mass and initial speed and both come to rest, $\\Delta p$ is identical for both. Since Impulse $J = \\Delta p$, both experience the same impulse (making B false). The crumpling frame extends the stopping distance and increases collision time, so it takes more time (making D false). Because both B and D are false, (E) is the correct choice.",
                "difficulty": "medium",
                "topic": "Impulse, Momentum & Collision Safety"
            },
            {
                "id": "pt1-mech-q19",
                "global_num": 19,
                "section": "Practice Test 1 – Mechanics",
                "question": "A homogeneous bar lying on a flat table is acted upon by exactly two external horizontal forces, $F_1$ and $F_2$. If the net force on the rod is zero, which of the following is true?",
                "options": [
                    "The net torque on the bar must also be zero.",
                    "The bar cannot accelerate translationally or rotationally.",
                    "The bar can accelerate translationally if $F_1$ and $F_2$ are not applied at the same point.",
                    "The net torque will be zero if $F_1$ and $F_2$ are applied at the same point.",
                    "None of the above"
                ],
                "answer": "D",
                "explanation": "(D) Since $\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2 = 0$, we have $\\vec{F}_2 = -\\vec{F}_1$. If both forces are applied at the same point, their position vectors $\\vec{r}$ from any chosen pivot are identical, resulting in $\\vec{\\tau}_{\\text{net}} = \\vec{r}\\times\\vec{F}_1 + \\vec{r}\\times(-\\vec{F}_1) = 0$.",
                "difficulty": "easy",
                "topic": "Static Equilibrium & Torque"
            },
            {
                "id": "pt1-mech-q20",
                "global_num": 20,
                "section": "Practice Test 1 – Mechanics",
                "question": "An astronaut lands on a planet whose mass and radius are each twice that of Earth. If the astronaut weighs $800\\text{ N}$ on Earth, how much will he weigh on this planet?",
                "options": [
                    "$200\\text{ N}$",
                    "$400\\text{ N}$",
                    "$800\\text{ N}$",
                    "$1,600\\text{ N}$",
                    "$3,200\\text{ N}$"
                ],
                "answer": "B",
                "explanation": "(B) $$g_{\\text{planet}} = \\frac{G(2M)}{(2R)^2} = \\frac{2}{4}\\frac{GM}{R^2} = \\frac{1}{2}g_{\\text{Earth}}$$\n$$W_{\\text{planet}} = m g_{\\text{planet}} = \\frac{1}{2}W_{\\text{Earth}} = \\frac{1}{2}(800\\text{ N}) = 400\\text{ N}$$",
                "difficulty": "easy",
                "topic": "Universal Gravitation & Weight"
            },
            {
                "id": "pt1-mech-q21",
                "global_num": 21,
                "section": "Practice Test 1 – Mechanics",
                "question": "A particle of mass $m = 1.0\\text{ kg}$ is acted upon by a variable force $F(x)$. The area under the $F(x)$ curve from $x = 0$ to $x = 10\\text{ m}$ is $50\\text{ N}\\cdot\\text{m}$. If the particle's speed was zero at $x = 0$, what is its speed at $x = 10\\text{ m}$?",
                "options": [
                    "$5.0\\text{ m/s}$",
                    "$8.7\\text{ m/s}$",
                    "$10\\text{ m/s}$",
                    "$14\\text{ m/s}$",
                    "$20\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "(C) By the Work-Energy Theorem:\n  $$W = \\Delta K \\implies 50\\text{ J} = \\frac{1}{2}mv^2 - 0 \\implies v = \\sqrt{\\frac{2(50)}{1.0}} = 10\\text{ m/s}$$",
                "difficulty": "medium",
                "topic": "Work-Energy Theorem & Variable Forces"
            },
            {
                "id": "pt1-mech-q22",
                "global_num": 22,
                "section": "Practice Test 1 – Mechanics",
                "question": "The radius of a collapsing spinning star decreases to $\\frac{1}{4}$ of its initial value. What is the ratio of the final rotational kinetic energy to the initial rotational kinetic energy ($K_f / K_i$)?",
                "options": [
                    "$4$",
                    "$16$",
                    "$64$",
                    "$256$",
                    "$1/16$"
                ],
                "answer": "B",
                "explanation": "(B) Angular momentum is conserved: $L = I_i\\omega_i = I_f\\omega_f \\implies \\omega_f = \\omega_i(I_i/I_f)$.\nFor a sphere, $I \\propto R^2$. Since $R_f = R_i/4$, $I_f = I_i/16$, which yields $\\omega_f = 16\\omega_i$.\nThe rotational kinetic energy ratio is:\n  $$\\frac{K_f}{K_i} = \\frac{\\frac{1}{2}I_f\\omega_f^2}{\\frac{1}{2}I_i\\omega_i^2} = \\left(\\frac{1}{16}\\right)(16)^2 = 16$$",
                "difficulty": "medium",
                "topic": "Angular Momentum Conservation & Collapse"
            },
            {
                "id": "pt1-mech-q23",
                "global_num": 23,
                "section": "Practice Test 1 – Mechanics",
                "question": "A ball is projected with an initial velocity of magnitude $v_0 = 40\\text{ m/s}$ at an angle of $60^\\circ$ toward a vertical wall $20\\text{ m}$ away. How long does the ball take to reach the wall?",
                "options": [
                    "$0.25\\text{ s}$",
                    "$0.50\\text{ s}$",
                    "$1.0\\text{ s}$",
                    "$2.0\\text{ s}$",
                    "$3.0\\text{ s}$"
                ],
                "answer": "C",
                "explanation": "(C) The horizontal velocity is constant:\n$$v_x = v_0 \\cos 60^\\circ = 40(0.5) = 20\\text{ m/s}$$\n$$t = \\frac{x}{v_x} = \\frac{20\\text{ m}}{20\\text{ m/s}} = 1.0\\text{ s}$$",
                "difficulty": "easy",
                "topic": "2D Projectile Motion"
            },
            {
                "id": "pt1-mech-q24",
                "global_num": 24,
                "section": "Practice Test 1 – Mechanics",
                "question": "If $C, M, L,$ and $T$ represent the dimensions of charge, mass, length, and time respectively, what are the dimensions of the permittivity of free space ($\\varepsilon_0$)?",
                "options": [
                    "$T^2C^2 / (M^2L^2)$",
                    "$T^2C^2 / (ML^3)$",
                    "$ML^3 / (T^2C^2)$",
                    "$C^2M / (T^2L^2)$",
                    "$T^2L^2 / (C^2M)$"
                ],
                "answer": "B",
                "explanation": "(B) From Coulomb's Law $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q^2}{r^2} \\implies \\varepsilon_0 = \\frac{q^2}{F r^2}$.\nUsing base dimensions $[q] = C$, $[r] = L$, and $[F] = MLT^{-2}$:\n$$[\\varepsilon_0] = \\frac{C^2}{(MLT^{-2})(L^2)} = \\frac{T^2C^2}{ML^3}$$",
                "difficulty": "easy",
                "topic": "Dimensional Analysis"
            },
            {
                "id": "pt1-mech-q25",
                "global_num": 25,
                "section": "Practice Test 1 – Mechanics",
                "question": "Two clay balls moving toward each other on a frictionless surface collide perfectly inelastically. Ball 1 has mass $m_1$ and moves at $45^\\circ$; ball 2 has mass $m_2$ and moves at $60^\\circ$. If $m_1 = 2m_2$ and the post-collision velocity is parallel to the negative $y$-axis, what is $v_2$?",
                "options": [
                    "$v_1(\\sin 60^\\circ)$",
                    "$v_1(\\cos 60^\\circ)$",
                    "$v_1(2\\cos 60^\\circ)$",
                    "$v_1(2\\sin 45^\\circ)/(\\sin 60^\\circ)$",
                    "$v_1(\\tan 60^\\circ)$"
                ],
                "answer": "D",
                "explanation": "(D) Since the combined mass moves purely along the $-y$ axis, horizontal momentum must sum to zero:\n  $$m_1 v_1 \\sin 45^\\circ - m_2 v_2 \\sin 60^\\circ = 0$$\nSubstituting $m_1 = 2m_2$:\n  $$(2m_2)v_1 \\sin 45^\\circ = m_2 v_2 \\sin 60^\\circ \\implies v_2 = \\frac{2v_1 \\sin 45^\\circ}{\\sin 60^\\circ}$$",
                "difficulty": "hard",
                "topic": "2D Inelastic Collisions & Vectors"
            },
            {
                "id": "pt1-mech-q26",
                "global_num": 26,
                "section": "Practice Test 1 – Mechanics",
                "question": "The coefficient of static friction between two blocks is $0.80$. If the blocks oscillate horizontally with a frequency of $2.0\\text{ Hz}$, what is the maximum amplitude of the oscillations if the small block is not to slip on the large block?",
                "options": [
                    "$3.1\\text{ cm}$",
                    "$5.0\\text{ cm}$",
                    "$6.2\\text{ cm}$",
                    "$7.5\\text{ cm}$",
                    "$9.4\\text{ cm}$"
                ],
                "answer": "B",
                "explanation": "(B) Maximum acceleration in SHM is $a_{\\max} = \\omega^2 A = (2\\pi f)^2 A$. To prevent slipping, static friction must provide this acceleration:\n  $$\\mu_s g \\ge (2\\pi f)^2 A \\implies A \\le \\frac{\\mu_s g}{4\\pi^2 f^2} = \\frac{(0.80)(9.8)}{4\\pi^2 (2.0)^2} \\approx 0.050\\text{ m} = 5.0\\text{ cm}$$",
                "difficulty": "hard",
                "topic": "SHM & Static Friction Threshold"
            },
            {
                "id": "pt1-mech-q27",
                "global_num": 27,
                "section": "Practice Test 1 – Mechanics",
                "question": "When two objects collide, the coefficient of restitution is $e = v_{\\text{rel,after}} / v_{\\text{rel,before}}$. If a ball dropped from height $H_1$ rebounds to height $H_2$, what is $e$?",
                "options": [
                    "$H_1/H_2$",
                    "$H_2/H_1$",
                    "$\\sqrt{H_1/H_2}$",
                    "$\\sqrt{H_2/H_1}$",
                    "$(H_1/H_2)^2$"
                ],
                "answer": "D",
                "explanation": "(D) Impact speed is $v_1 = \\sqrt{2gH_1}$ and rebound speed is $v_2 = \\sqrt{2gH_2}$.\n  $$e = \\frac{v_2}{v_1} = \\frac{\\sqrt{2gH_2}}{\\sqrt{2gH_1}} = \\sqrt{\\frac{H_2}{H_1}}$$",
                "difficulty": "medium",
                "topic": "Coefficient of Restitution"
            },
            {
                "id": "pt1-mech-q28",
                "global_num": 28,
                "section": "Practice Test 1 – Mechanics",
                "question": "A square metal plate of side length $40\\text{ cm}$ lies flat on a table. A force $F$ of magnitude $10\\text{ N}$ is applied along one of the corners. Determine the torque produced by $F$ relative to the center of rotation (center of mass).",
                "options": [
                    "$0\\text{ N}\\cdot\\text{m}$",
                    "$1.0\\text{ N}\\cdot\\text{m}$",
                    "$1.4\\text{ N}\\cdot\\text{m}$",
                    "$2.0\\text{ N}\\cdot\\text{m}$",
                    "$4.0\\text{ N}\\cdot\\text{m}$"
                ],
                "answer": "D",
                "explanation": "(D) The lever arm from the geometric center to the line of action along any side of the square is $r_\\perp = s/2 = 0.40/2 = 0.20\\text{ m}$.\n  $$\\tau = F r_\\perp = (10\\text{ N})(0.20\\text{ m}) = 2.0\\text{ N}\\cdot\\text{m}$$",
                "difficulty": "easy",
                "topic": "Torque & Lever Arm"
            },
            {
                "id": "pt1-mech-q29",
                "global_num": 29,
                "section": "Practice Test 1 – Mechanics",
                "question": "A block of mass $m = 2.0\\text{ kg}$ is pushed upward from $(0,0)$ to $(3\\text{ m}, 3\\text{ m})$. How much work is done by gravity during this displacement?",
                "options": [
                    "$-60\\text{ J}$",
                    "$-80\\text{ J}$",
                    "$-90\\text{ J}$",
                    "$-100\\text{ J}$",
                    "$-120\\text{ J}$"
                ],
                "answer": "A",
                "explanation": "(A) Gravity is conservative and depends only on vertical displacement $\\Delta z = 3\\text{ m}$:\n  $$W_g = -mg\\Delta z = -(2.0\\text{ kg})(10\\text{ m/s}^2)(3\\text{ m}) = -60\\text{ J}$$",
                "difficulty": "easy",
                "topic": "Conservative Gravitational Work"
            },
            {
                "id": "pt1-mech-q30",
                "global_num": 30,
                "section": "Practice Test 1 – Mechanics",
                "question": "A horizontal spring with constant $k$ oscillates between $-A$ and $+A$ with mass $M$. A bullet of mass $m$ with speed $v$ collides inelastically with $M$ at $x = -A$. How far beyond $x = -A$ will the spring compress?",
                "options": [
                    "$\\frac{mv}{\\sqrt{kM}}$",
                    "$\\frac{mv}{k(M+m)}$",
                    "$\\frac{mv}{\\sqrt{k(M+m)}}$",
                    "$\\frac{Mv}{\\sqrt{k(M+m)}}$",
                    "$\\frac{mv}{\\sqrt{km}}$"
                ],
                "answer": "C",
                "explanation": "(C) At $x = -A$, the block was momentarily at rest. Immediately after the collision, the combined velocity is $v' = \\frac{mv}{M+m}$. The additional kinetic energy is converted into extra compression $x_{\\text{extra}}$:\n  $$\\frac{1}{2}k x_{\\text{extra}}^2 = \\frac{1}{2}(M+m)(v')^2 = \\frac{1}{2}\\frac{m^2v^2}{M+m} \\implies x_{\\text{extra}} = \\frac{mv}{\\sqrt{k(M+m)}}$$",
                "difficulty": "hard",
                "topic": "SHM Spring-Block Collision"
            },
            {
                "id": "pt1-mech-q31",
                "global_num": 31,
                "section": "Practice Test 1 – Mechanics",
                "question": "A rod pivoting about $x = 0$ has linear density $\\lambda(x) = kx$. Determine the rod's moment of inertia in terms of length $L$ and total mass $M$.",
                "options": [
                    "$\\frac{1}{3}ML^2$",
                    "$\\frac{1}{4}ML^2$",
                    "$\\frac{2}{5}ML^2$",
                    "$\\frac{1}{2}ML^2$",
                    "$2ML^2$"
                ],
                "answer": "D",
                "explanation": "(D) Total mass: $M = \\int_0^L kx\\,dx = \\frac{1}{2}kL^2 \\implies k = \\frac{2M}{L^2}$.\nMoment of inertia:\n  $$I = \\int_0^L x^2\\,dm = \\int_0^L x^2(kx\\,dx) = \\frac{1}{4}kL^4 = \\frac{1}{4}\\left(\\frac{2M}{L^2}\\right)L^4 = \\frac{1}{2}ML^2$$",
                "difficulty": "hard",
                "topic": "Calculus Moment of Inertia Integration"
            },
            {
                "id": "pt1-mech-q32",
                "global_num": 32,
                "section": "Practice Test 1 – Mechanics",
                "question": "A conservative force has potential energy $U(x) = x^3 - 12x$. Which position represents a point of stable equilibrium?",
                "options": [
                    "$x = -4\\text{ m}$",
                    "$x = -2\\text{ m}$",
                    "$x = 0\\text{ m}$",
                    "$x = 2\\text{ m}$",
                    "$x = 4\\text{ m}$"
                ],
                "answer": "D",
                "explanation": "(D) Equilibrium requires $\\frac{dU}{dx} = 3x^2 - 12 = 0 \\implies x = \\pm 2\\text{ m}$.\nStable equilibrium requires a local minimum ($\\frac{d^2U}{dx^2} > 0$):\n  $$\\frac{d^2U}{dx^2} = 6x \\implies \\text{At } x = 2\\text{ m}, \\frac{d^2U}{dx^2} = 12 > 0\\text{ (Stable)}$$",
                "difficulty": "medium",
                "topic": "Potential Energy Curves & Stability"
            },
            {
                "id": "pt1-mech-q33",
                "global_num": 33,
                "section": "Practice Test 1 – Mechanics",
                "question": "A light frictionless pulley attached to an elevator ceiling supports masses $m$ and $M$ ($M > m$). The elevator car descends at a constant velocity. Determine the acceleration of the masses relative to the elevator.",
                "options": [
                    "$(M - m)g$",
                    "$(M + m)g$",
                    "$\\frac{M + m}{M - m}g$",
                    "$\\frac{M - m}{M + m}g$",
                    "$\\frac{2Mm}{M + m}g$"
                ],
                "answer": "D",
                "explanation": "(D) Because the elevator travels at constant velocity, it acts as an inertial frame of reference ($a_{\\text{frame}} = 0$). The Atwood acceleration is:\n  $$a = \\frac{M - m}{M + m}g$$",
                "difficulty": "medium",
                "topic": "Atwood Machine & Inertial Frames"
            },
            {
                "id": "pt1-mech-q34",
                "global_num": 34,
                "section": "Practice Test 1 – Mechanics",
                "question": "A block ($m = 2\\text{ kg}$) starts at rest on a ramp ($\\sin\\theta = 0.45, \\cos\\theta = 0.9$). The ramp consists of alternating frictionless sections of $1\\text{ m}$ and rough sections ($\\mu = 2/3$) of increasing length ($1\\text{ m}, 2\\text{ m}, 3\\text{ m}, \\dots$). How far along the ramp does the block travel before stopping?",
                "options": [
                    "$4\\text{ m}$",
                    "$8\\text{ m}$",
                    "$12\\text{ m}$",
                    "$19\\text{ m}$",
                    "$24\\text{ m}$"
                ],
                "answer": "E",
                "explanation": "(E) $\\Delta PE$ gained per meter: $mg\\sin\\theta = (2)(10)(0.45) = +9\\text{ J/m}$.  \nFriction work per rough meter: $-\\mu mg\\cos\\theta = -(2/3)(2)(10)(0.9) = -12\\text{ J/m}$.  \nNet change on rough segments: $+9 - 12 = -3\\text{ J/m}$.\nTracking energy across the sequence:\n0–1 m (smooth): $+9\\text{ J}$\n1–2 m (rough 1m): $9 - 3 = 6\\text{ J}$\n2–3 m (smooth): $6 + 9 = 15\\text{ J}$\n3–5 m (rough 2m): $15 - 6 = 9\\text{ J}$\n5–6 m (smooth): $9 + 9 = 18\\text{ J}$\n6–9 m (rough 3m): $18 - 9 = 9\\text{ J}$\n9–10 m (smooth): $9 + 9 = 18\\text{ J}$\n10–14 m (rough 4m): $18 - 12 = 6\\text{ J}$\n14–15 m (smooth): $6 + 9 = 15\\text{ J}$\n15–20 m (rough 5m): $15 - 15 = 0\\text{ J}$  \n20–21 m (smooth): $+9\\text{ J}$  \nNext rough segment: travels $9/3 = 3\\text{ m}$ before stopping.\nTotal distance = $21 + 3 = 24\\text{ m}$.",
                "difficulty": "hard",
                "topic": "Variable Friction Ramp Energy Tracking"
            },
            {
                "id": "pt1-mech-q35",
                "global_num": 35,
                "section": "Practice Test 1 – Mechanics",
                "question": "An object of mass $2\\text{ kg}$ is acted upon by three external forces, each of magnitude $4\\text{ N}$. Which of the following could NOT be the resulting acceleration of the object?",
                "options": [
                    "$0\\text{ m/s}^2$",
                    "$2\\text{ m/s}^2$",
                    "$4\\text{ m/s}^2$",
                    "$6\\text{ m/s}^2$",
                    "$8\\text{ m/s}^2$"
                ],
                "answer": "E",
                "explanation": "(E) The maximum possible net force occurs when all three forces act in the same direction: $F_{\\text{net,max}} = 4 + 4 + 4 = 12\\text{ N}$.\n  $$a_{\\max} = \\frac{12\\text{ N}}{2\\text{ kg}} = 6\\text{ m/s}^2$$\nAn acceleration of $8\\text{ m/s}^2$ is impossible.",
                "difficulty": "easy",
                "topic": "Vector Force Sums & Newton's 2nd Law"
            }
        ]
    }
};
