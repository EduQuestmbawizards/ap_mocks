// Specific Question Bank for Test: ap-mock-phys1-full-1
const AP_TEST_DATA = {
    "ap-mock-phys1-full-1": {
        "id": "ap-mock-phys1-full-1",
        "title": "AP Physics 1 Full Practice Exam 1",
        "subtitle": "Complete official practice exam 1 simulating Section I Multiple-Choice Questions with in-depth solutions",
        "timeLimitMinutes": 80,
        "testType": "Full Mock",
        "subject": "AP Physics 1",
        "topic": "Comprehensive AP Physics 1",
        "questions": [
            {
                "id": "mock_phys1_1_1",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Two objects are thrown vertically upward from the same initial height. One object has twice the initial velocity of the other. Neglecting any air resistance, the object with the greater initial velocity will rise to a maximum height that is</p>",
                "options": [
                    "twice that of the other object, assuming they have the same mass",
                    "twice that of the other object, independent of their masses",
                    "four times that of the other object, assuming they have the same mass",
                    "four times that of the other object, independent of their masses"
                ],
                "answer": "D",
                "explanation": "Twice the initial vertical velocity will give twice the time in flight. Average vertical velocity will also be doubled. Displacement is the product of these two: 2 × 2 = 4.</p>\r\n<p class=\"numpt\">Alternatively, one could use \\( v^2 = v_0^2 + 2ad \\), since <i>v</i> at the maximum height is zero. Since <i>v</i><sub>0</sub> is doubled and then squared, the vertical displacement <i>d</i> must be 4 times bigger.</p>\r\n<p class=\"numpt\">Free-fall problems are independent of mass.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_2",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 2-kilogram cart has a velocity of 4 meters per second to the right. It collides with a 5-kilogram cart moving to the left at 1 meter per second. After the collision, the two carts stick together. Can the magnitude and the direction of the velocity of the two carts after the collision be determined from the given information?</p>",
                "options": [
                    "No, since the collision is inelastic, we must know the energy lost.",
                    "Yes, the collision is elastic: 3/7 m/s left.",
                    "Yes, the collision is inelastic: 3/7 m/s right.",
                    "Yes, the speed is not 3/7 m/s."
                ],
                "answer": "C",
                "explanation": "Conservation of momentum:</p>\r\n\\[ m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f \\implies (2)(4) + (5)(-1) = 7 v_f \\implies v_f = \\frac{3}{7}\\text{ m/s (to the right)} \\]\r\n<p class=\"numpt\">The collision is inelastic since the carts stick together.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_3",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Projectile <i>X</i> is launched at a 30-degree angle above the horizon with a speed of 100 m/s. Projectile <i>Y</i> is launched at a 60-degree angle with the same speed. Which of the following correctly compares the horizontal range and maximum altitude obtained by these two projectiles?</p>\r\n<p><img alt=\"\" class=\"w71\" role=\"presentation\" src=\"/images/f179-01.jpg\"/></p>",
                "options": [
                    "Choice (A)",
                    "Choice (B)",
                    "Choice (C)",
                    "Choice (D)"
                ],
                "answer": "D",
                "explanation": "Higher altitude is strictly a function of <i>V</i><sub><i>Y</i></sub> (Projectile <i>Y</i>). Range is a function of both <i>V</i><sub><i>X</i></sub> and <i>V</i><sub><i>Y</i></sub> such that the angles equally above and below 45 degrees (the max angle for range) will result in equal horizontal displacement. Note that 30 degrees and 60 degrees are both 15 degrees off from 45 degrees.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_4",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 5-kg mass is sitting at rest on a horizontal surface. A horizontal force of 10 N will start the mass moving. What is the best statement about the coefficient and type of friction between the mass and the surface?</p>",
                "options": [
                    "&gt;0.20 static",
                    "&lt;0.20 static",
                    "&lt;0.20 kinetic",
                    "&gt;0.20 kinetic"
                ],
                "answer": "B",
                "explanation": "Since the 10 N force will start the mass moving, this must be greater than the static friction force holding the mass in place. The maximum <i>static</i> friction must be 10 N or less.</p>\r\n\\[ \\mu_s \\ge \\frac{F}{mg} = \\frac{10}{(5)(9.8)} = 0.204 \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_5",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following graphs represents an object <i>moving</i> with no net force acting on it?</p>",
                "options": [
                    "<img alt=\"\" class=\"w29 inline\" role=\"presentation\" src=\"/images/f180-01.jpg\"/>",
                    "<img alt=\"\" class=\"w29 inline\" role=\"presentation\" src=\"/images/f180-02.jpg\"/>",
                    "<img alt=\"\" class=\"w34 inline\" role=\"presentation\" src=\"/images/f180-03.jpg\"/>",
                    "<img alt=\"\" class=\"w29 inline\" role=\"presentation\" src=\"/images/f180-04.jpg\"/>"
                ],
                "answer": "B",
                "explanation": "The object is moving, so the velocity is not zero. The object is not accelerating, so velocity is constant.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_6",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A projectile is launched horizontally with an initial velocity <i>v</i><sub>0</sub> from a height <i>h</i>. If it is assumed that there is no air resistance, which of the following expressions represents the vertical position of the projectile? In other words, <i>y</i>(<i>x</i>) = ?</p>",
                "options": [
                    "\(h - gv_0^2/2x^2\)",
                    "\(h - gv/2v_0^2\)",
                    "\(h - gx^2/2v_0^2\)",
                    "\(h - gx^2/v_0^2\)"
                ],
                "answer": "C",
                "explanation": "In general:</p>\r\n\\[ a = \\frac{F}{m_1 + m_2} = \\frac{10}{4 + 1} = 2\\text{ m/s}^2 \\]\r\n<p class=\"numpt\">Solve for <i>t</i> in the last equation. Then plug back into the first equation and substitute in <i>y</i><sub>0</sub> = <i>h</i>, <i>v</i><sub><i>y</i></sub><sub>0</sub> = 0, and <i>v</i><sub><i>x</i></sub><sub>0</sub> = <i>v</i><sub>0</sub>:</p>\r\n\\[ F_{4\\text{ on }1} = m_1 a = (1\\text{ kg})(2\\text{ m/s}^2) = 2\\text{ N} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_7",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following measurements would allow you to determine the maximum velocity experienced by the mass?</p>",
                "options": [
                    "No additional information is required.",
                    "Minimum velocity",
                    "Maximum acceleration",
                    "None of these would allow you to determine maximum velocity."
                ],
                "answer": "C",
                "explanation": "Maximum acceleration allows you to determine maximum displacement:</p>\r\n<p class=\"center1\">\\(ma = kA\\)</p>\r\n<p class=\"numpt\">Knowing the amplitude allows you to determine easily the maximum speed via energy conservation:</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}kA^2 = \\frac{1}{2}mv^2\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_8",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following statements concerning the oscillatory motion described above is correct? (All statements refer to magnitudes.)</p>",
                "options": [
                    "The maximum velocity and maximum acceleration occur at the same time.",
                    "The maximum velocity occurs when the acceleration is a minimum.",
                    "The velocity is always directly proportional to the displacement.",
                    "The maximum velocity occurs when the displacement is a maximum."
                ],
                "answer": "B",
                "explanation": "Maximum velocities happen when going through the equilibrium point (zero acceleration and zero displacement): all kinetic energy (<i>KE</i>) and no potential energy (<i>PE</i>).</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_9",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A bullet of known mass (<i>m</i><sub>1</sub>) is fired vertically into an initially stationary wood block of known mass (<i>m</i><sub>2</sub>). The resulting wood + bullet combined system is then measured to rise to a maximum height of <i>h</i>. Can the initial speed of the bullet be calculated from this information?</p>",
                "options": [
                    "Yes. Solve \((m_1 + m_2)gh = \frac{1}{2}(m_1)v^2\)",
                    "Yes. Solve the momentum conservation of collision first and the energy conservation of the rising combination second.",
                    "No. We don’t know if momentum is conserved during this collision.",
                    "No. We don’t know enough details about the mechanical energy lost during the collision."
                ],
                "answer": "B",
                "explanation": "Momentum is conserved during the collision, which enables us to solve for an initial upward velocity of the combination. Then energy conservation can be used to relate the height to that initial upward velocity. Choice (A) cannot be used because some unknown amount of mechanical energy will be lost by the bullet embedding itself in the wood.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_10",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 10-kg mass is being pushed horizontally by a constant force along a rough surface (<i>μ</i><sub><i>k</i></sub> = 0.1) at constant velocity. Which of the following is the best statement regarding the constant force (<i>f</i>)?</p>",
                "options": [
                    "<i>f</i> = 10 N",
                    "<i>f</i> &gt; 10 N",
                    "<i>f</i> &lt; 10 N",
                    "<i>f</i> &gt; 1 N"
                ],
                "answer": "A",
                "explanation": "Constant velocity means no acceleration, so \\( F = ma \\).</p>\r\n<p class=\"center1\">\\(F_{\\text{push}} - F_{\\text{friction}} = 0, F_{\\text{push}} - \\mu_k N = F_{\\text{push}} - \\mu_k mg = 0, F_{\\text{push}} = \\mu_k mg = (0.1)(10\\text{ kg})(10\\text{ m/s}^2) = 10\\text{ N}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_11",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 10-newton force is applied to two masses, 4 kilograms and 1 kilogram, respectively, that are in contact as shown below. The horizontal motion is along a frictionless plane. What is the magnitude of the contact force between the two masses?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w68\" role=\"presentation\" src=\"/images/f181-01.jpg\"/></p>",
                "options": [
                    "10 N",
                    "8 N",
                    "6 N",
                    "2 N"
                ],
                "answer": "D",
                "explanation": "First find the acceleration of the system:</p>\r\n\\[ W = \\Delta KE \\implies F d = \\frac{1}{2}m v_f^2 \\]\r\n<p class=\"numpt\">The contact force, <i>P</i>, is the only force felt by the 1-kg mass:</p>\r\n\\[ \\frac{1}{2}k x^2 = mgh \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_12",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object with mass <i>m</i> is dropped from height <i>h</i> above the ground. While neglecting air resistance, which formula best describes the power generated if the object takes time <i>t</i> to fall?</p>",
                "options": [
                    "<i>mgh</i>",
                    "<i>mght</i>",
                    "<i>mg</i><sup>2</sup><i>t</i>/2",
                    "<i>mgh</i>/<i>t</i>"
                ],
                "answer": "D",
                "explanation": "<i>P</i> = work/<i>t</i> = <i>Fd</i>/<i>t</i> = <i>mgh</i>/<i>t</i></p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_13",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 1,500-kilogram car has a velocity of 25 meters per second. If it is brought to a stop by a nonconstant force in 10 to 15 seconds, can the magnitude of the impulse applied be determined?</p>",
                "options": [
                    "Yes, it is 37,500 N · s.",
                    "No, you need to know the details about the nonconstant force.",
                    "No, you must know the exact duration of the impulse.",
                    "No, you must know the average force during and the duration of the impulse."
                ],
                "answer": "A",
                "explanation": "Impulse can be found by <i>Ft</i> if the details of the force are known or, alternatively, by:</p>\r\n\\[ h = \\frac{k x^2}{2mg} \\]\r\n<p class=\"numpt\">Ignore the minus sign as the question asks about magnitude.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_14",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A block of mass <i>M</i> rests on a rough incline, as shown below. The angle of elevation of the incline is increased until an angle of <i>θ</i> is reached. At that angle, the mass begins to slide down the incline. Which of the following is an expression for the coefficient of static friction <i>μ</i>?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w47\" role=\"presentation\" src=\"/images/f181-02.jpg\"/></p>",
                "options": [
                    "tan <i>θ</i>",
                    "sin <i>θ</i>",
                    "cos <i>θ</i>",
                    "1/(cos <i>θ</i>)"
                ],
                "answer": "A",
                "explanation": "When the block is at the maximum height, static friction is obtained:</p>\r\n\\[ J = \\int F dt = \\text{Area under } F\\text{-}t \\text{ graph} = \\Delta p \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_15",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A pendulum of a given length swings back and forth a certain number of times per second. If the pendulum now swings back and forth the same number of times but in twice the time, the length of the pendulum should be</p>",
                "options": [
                    "doubled",
                    "quartered",
                    "quadrupled",
                    "halved"
                ],
                "answer": "C",
                "explanation": "Doubling the period requires a quadrupling of length:</p>\r\n\\[ v_f = \\frac{\\Delta p}{m} = \\frac{\\text{Area}}{9} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_16",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "This graph of force versus time shows how the force acts on an object of mass <i>m</i> for a total time of <i>T</i> seconds. If the mass begins at rest, which is the correct method to find the final speed of the mass?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w60\" role=\"presentation\" src=\"/images/f182-01.jpg\"/></p>",
                "options": [
                    "Average value of this graph times total time divided by mass",
                    "Area under this graph divided by mass",
                    "Since the final force is zero, the object is at rest after time <i>T</i>",
                    "Average slope of this graph divided by mass"
                ],
                "answer": "B",
                "explanation": "Impulse = area of <i>F</i> vs. <i>T</i> graph = Δ<i>p</i> = <i>mv</i><sub><i>f</i></sub> − 0</p>\r\n<p class=\"numpt\">Solving for <i>v</i><sub><i>f</i></sub> = (area under graph)/<i>m</i></p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_17",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A child of unknown mass is on a swing of unknown length that varies in height from 75 cm at its lowest height above the ground to a maximum height of 225 cm above the ground. Is there enough information to find the speed of the swing at its lowest point?</p>",
                "options": [
                    "No, the child’s mass must be known.",
                    "No, the length of the swing must be known to determine the centripetal acceleration.",
                    "Yes, it is 5.5 m/s.",
                    "Yes, it is 4 m/s."
                ],
                "answer": "C",
                "explanation": "Conservation of energy:</p>\r\n\\[ T = 2\\pi\\sqrt{\\frac{m}{k}} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_18",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "The gravitational force of attraction between two identical masses is 36 N when the masses are separated by a distance of 3 m. If the distance between them is reduced to 1 m, which of the following is true about the net gravitational field strength due to both masses being at the halfway point?</p>",
                "options": [
                    "It is 9 times stronger total.",
                    "Not enough information is given to determine net gravitational field strength.",
                    "Each mass’s gravitation is 9 times stronger, so the net gravitational field strength is 18 times stronger.",
                    "It is zero."
                ],
                "answer": "D",
                "explanation": "Gravitational field strength halfway between any two equal masses is always zero as each contributes oppositely directed gravitational fields.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_19",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 200-kilogram cart rests on top of a frictionless hill as shown below. Can the impulse required to stop the cart when it is at the top of the 10-meter hill be calculated?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w72\" role=\"presentation\" src=\"/images/f182-02.jpg\"/></p>",
                "options": [
                    "No, more information about friction is required.",
                    "No, more information about the impulse is required.",
                    "Yes, calculate the velocity from free-fall kinematics and use this velocity in the change in momentum equation.",
                    "Yes, calculate the speed from energy conservation and use this speed in the change in momentum equation."
                ],
                "answer": "D",
                "explanation": "Conservation of energy while on the frictionless hill can give the speed at the top of the 10-m hill:</p>\r\n\\[ a_c = \\omega^2 r = (2\\pi f)^2 r \\]\r\n<p class=\"numpt\">Then impulse equals change in momentum can be used since the final momentum must be zero.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_20",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object of mass <i>m</i> starts at a height of <i>H</i><sub>1</sub> with a speed of <i>v</i><sub>1</sub>. A few minutes later, it is at a height of <i>H</i><sub>2</sub> and a speed <i>v</i><sub>2</sub>. Which of the following expressions best represents the work done to the mass by nongravitational forces to the object during this time?</p>",
                "options": [
                    "\(mg(H_2 - H_1) + \frac{1}{2}m(v_2^2 - v_1^2)\)",
                    "\(mg(H_2 - H_1) - \frac{1}{2}m(v_2^2 - v_1^2)\)",
                    "\(\frac{1}{2}m(v_2^2 - v_1^2)\)",
                    "\(\frac{1}{2}m(v_1^2 - v_2^2)\)"
                ],
                "answer": "A",
                "explanation": "\\[ L = I\\omega \\implies I_1\\omega_1 = I_2\\omega_2 \\]\r\n<p class=\"numpt\">Work by forces other than gravity = change in energy</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_21",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object with 0.2-kg mass is pushed down vertically onto an elastic spring (<i>k</i> = 20 N/m). The spring is compressed by 20 cm and then released such that the object will fly off. Which of the following will have the largest effect on increasing the maximum height the object will fly? (Assume no air resistance.)</p>",
                "options": [
                    "Halving the mass",
                    "Doubling the compression distance",
                    "Using a spring with a spring constant twice as big",
                    "Doing the same experiment on a different planet with half the gravitational field strength"
                ],
                "answer": "B",
                "explanation": "Energy conservation:</p>\r\n\\[ \\omega_2 = \\frac{I_1}{I_1/3}\\omega_1 = 3\\omega_1 \\]\r\n<p class=\"numpt\">Solving for <i>h</i>:</p>\r\n\\[ KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}\\left(\\frac{I_1}{3}\\right)(3\\omega_1)^2 = 3\\left(\\frac{1}{2}I_1\\omega_1^2\\right) \\]\r\n<p class=\"numpt\">Doubling <i>x</i> will quadruple the height, whereas all other factors will only double the height.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_22",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A cart with a mass of <i>m</i> needs to complete a loop-the-loop of radius <i>r</i>, as shown above. What is the approximate minimum velocity required to achieve this goal?</p>",
                "options": [
                    "(<i>gr</i>)<sup>½</sup>",
                    "(5<i>gr</i>)<sup>½</sup>",
                    "2(<i>gr</i>)<sup>½</sup>",
                    "(2<i>gr</i>)<sup>½</sup>"
                ],
                "answer": "B",
                "explanation": "Circular motion at the top:</p>\r\n\\[ \\alpha = \\frac{\\omega_f - \\omega_i}{t} = \\frac{0 - 150(2\\pi/60)}{2} = \\frac{-5\\pi}{2} = -2.5\\pi\\text{ rad/s}^2 \\]\r\n<p class=\"numpt\">The lowest speed will be when there is no normal force (<i>N</i> = 0):</p>\r\n<p class=\"center1\">\\(mg = m v^2/r, v_{\\text{top}} = (gr)^{1/2}\\)</p>\r\n<p class=\"numpt\">Kinetic energy at the bottom must give both this speed and potential energy to gain 2<i>r</i> in height:</p>\r\n<p class=\"center1\">\\(E_{\\text{bottom}} = E_{\\text{top}}, \\frac{1}{2}m v^2 = g m (2r) + \\frac{1}{2} m v_{\\text{top}}^2\\)</p>\r\n<p class=\"numpt\">Solving for <i>v</i>:</p>\r\n<p class=\"center1\">\\(v = (5gr)^{1/2}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_23",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A particle traveling in the direction shown below experiences the force shown. In this situation, the particle will</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w67\" role=\"presentation\" src=\"/images/f183-02.jpg\"/></p>",
                "options": [
                    "slow down only",
                    "speed up only",
                    "turn and speed up",
                    "neither turn nor change speed"
                ],
                "answer": "C",
                "explanation": "Since the force shown has components both in the same direction as the velocity (causing it to speed up) and at right angles to the velocity (causing it to turn toward the bottom of the page), the particle will both speed up and turn.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_24",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following velocity component versus time graphs match a person riding an elevator steadily downward on a cruise boat that is accelerating out of port (assume <i>y</i> is vertical and <i>x</i> is horizontal)?</p>",
                "options": [
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"/images/f183-04.jpg\"/>",
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"/images/f183-05.jpg\"/>",
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"/images/f183-06.jpg\"/>",
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"/images/f183-07.jpg\"/>"
                ],
                "answer": "C",
                "explanation": "Since the elevator is moving downward at constant speed, the <i>y</i>-component of velocity should be a constant negative value. On the other hand, the horizontal acceleration of the boat will cause an increasingly positive <i>x</i>-component of velocity.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_25",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "If a mass of 9 kg begins at rest and experiences the following net force, what is its speed after 3 seconds?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w67\" role=\"presentation\" src=\"/images/f183-08.jpg\"/></p>",
                "options": [
                    "0 m/s",
                    "1 m/s",
                    "2 m/s",
                    "4 m/s"
                ],
                "answer": "B",
                "explanation": "Impulse is the area under the curve. For the first three seconds, this amounts to</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}(6)(3) = 9\\text{ N}\\cdot\\text{s}\\)</p>\r\n<p class=\"numpt\">This impulse will increase the momentum by 9 kg m/s. Since the object has a mass of 9 kg, this indicates an increase in speed of 1 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_26",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Two blocks are sliding to the right as shown below. If they are brought to a stop by a force <i>F</i> applied from the right, what is the net work done to the two blocks as they are brought to a stop?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w25\" role=\"presentation\" src=\"/images/f184-01.jpg\"/></p>",
                "options": [
                    "−1.5 <i>mv</i><sup>2</sup>",
                    "−0.5 <i>mv</i><sup>2</sup>",
                    "−<i>Fv</i>",
                    "−<i>mv</i><sup>2</sup>"
                ],
                "answer": "A",
                "explanation": "Work done is equal to the change in kinetic energy:</p>\r\n<p class=\"center1\">\\(K_f - K_i = 0 - \\frac{1}{2}(3m)v^2 = -1.5 m v^2\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_27",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A satellite is launched to twice the orbital radius of a similar satellite (both are in stable circular Earth orbits). Compare the kinetic energies of the two satellites.</p>",
                "options": [
                    "They have the same kinetic energy.",
                    "The lower satellite has half the kinetic energy of the higher satellite.",
                    "The higher satellite has half the kinetic energy of the lower satellite.",
                    "The ratio of the kinetic energies of the two satellites is a factor of four."
                ],
                "answer": "C",
                "explanation": "Circular orbits have universal gravity acting as the centripetal force, which causes the centripetal acceleration of <i>v</i><sup>2</sup>/<i>r</i>:</p>\r\n<p class=\"center1\">\\(F_c = m a_c, \\frac{G M_e M}{r^2} = \\frac{m v^2}{r}\\)</p></li>\r\n<li><p class=\"numpt\">Since all other values are constant, we see here <i>v</i><sup>2</sup> is proportional to 1/<i>r</i>.</p></li>\r\n<li><p class=\"nump\">So an orbit that has twice the radius will have half the <i>v</i><sup>2</sup>.</p></li>\r\n<li><p class=\"nump\">Kinetic energy varies a <i>v</i><sup>2</sup>:</p>\r\n<p class=\"center1\">\\(K = \\frac{1}{2} m v^2\\)</p>\r\n<p class=\"numpt\">Thus, the higher orbital will have half the kinetic energy of the lower orbit.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_28",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "It has been documented that a major earthquake on Earth can change the time it takes the planet to rotate fully. From this, one can conclude that</p>",
                "options": [
                    "the Earth is not an isolated system",
                    "a net torque was applied to the planet",
                    "the rotational inertia of the planet was changed",
                    "work was done to the planet somehow"
                ],
                "answer": "C",
                "explanation": "A change in rotational speed can either be accomplished via an interaction with an external torque or by a change in rotational inertia, which keeps angular momentum conserved in an isolated system by adjusting the angular speed:</p>\r\n<p class=\"center1\">\\(I\\omega = \\text{constant}\\)</p>\r\n<p class=\"numpt\">Since the earthquake is not an external force to the Earth, the shifting of mass to different radial values must have changed the rotational inertia of the planet. This is similar to a diver adjusting their spin rate by extending or tucking their body in as they drop into the water.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_29",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Compare the two columns of water pictured below. They have the same height. Which of the following statements compares the total weight and the pressure at the bottom of the columns?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w38\" role=\"presentation\" src=\"/images/f184-02.jpg\"/></p>",
                "options": [
                    "Weight and pressure are greater for the wider column.",
                    "Weight and pressure are the same for both.",
                    "Weight is greater for the wider column, while pressure is the same.",
                    "Weight is the same, while pressure is greater for the wider column."
                ],
                "answer": "C",
                "explanation": "Weight is greater for the wider column, while pressure is the same. Although the wider column has a greater volume of water and therefore more mass, the fact that the height remains constant means any unit area on the bottom of the column will experience the same force/area (pressure).</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_30",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An otherwise similar boat will ride higher in a fluid (i.e., have less submerged volume) if</p>",
                "options": [
                    "the fluid’s density is raised",
                    "the fluid’s temperature is raised",
                    "the boat’s density is raised",
                    "the boat shifts its cargo to a lower deck"
                ],
                "answer": "A",
                "explanation": "The fluid’s density is raised. The buoyancy force that lifts the boat upward is proportional to the weight of the fluid displaced. The boat will rise or sink until the buoyant force and the boat’s weight cancel. Raising the fluid’s temperature will usually make the fluid less dense, requiring a greater displacement of water (i.e., the boat will ride lower). Raising the boat’s density will increase its weight, requiring a greater displacement of water. Finally, shifting the cargo around will have no effect as the weight and shape of the boat remain unaffected.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_31",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Fluid is poured into an open U-shaped tube as shown below. If a person blows across the top of the right-hand side’s opening, what will happen to the fluid in the tube?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w38\" role=\"presentation\" src=\"/images/f184-03.jpg\"/></p>",
                "options": [
                    "It will remain the same.",
                    "It will rise on the right-hand side and lower on the left-hand side.",
                    "It will rise on both sides.",
                    "It will rise on the left-hand side and lower on the right-hand side."
                ],
                "answer": "B",
                "explanation": "It will rise on the right-hand side and lower on the left-hand side. Blowing over the right-hand side will lower the pressure at that height:</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}\\rho v^2 + \\rho gh + P = \\text{constant}\\)</p>\r\n<p class=\"numpt\">Remember that <i>h</i> remains the same while <i>v</i> is raised, forcing <i>P</i> lower. This causes an imbalance in pressure between the right-hand side (lower pressure) and left-hand side (higher pressure). This difference in pressure causes a net force pushing the fluid upward on the right and downward on the left.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_32",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A boat moving due north crosses a river 240 meters wide with a velocity of 8 meters per second relative to the water. The river flows east with a velocity of 6 meters per second. How far downstream will the boat be when it has crossed the river?</p>",
                "options": [
                    "240 m",
                    "180 m",
                    "420 m",
                    "300 m"
                ],
                "answer": "B",
                "explanation": "Find time to cross the river using only perpendicular components:</p>\r\n<p class=\"center1\">\\(D = V_y t, 240 = 8t, t = 30\\text{ s}\\)</p>\r\n<p class=\"numpt\">Next find the downstream distance using the parallel component:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w37\" role=\"presentation\" src=\"/images/f193-08.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_33",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A variable force acts on a 2-kilogram mass according to the graph below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w67\" role=\"presentation\" src=\"/images/f185-01.jpg\"/></p>\r\n<p class=\"exp\">How much work was done while displacing the mass 10 meters?</p>",
                "options": [
                    "40 J",
                    "38 J",
                    "32 J",
                    "30 J"
                ],
                "answer": "C",
                "explanation": "Work is the area under the curve:</p>\r\n<p class=\"center1\">\\((4\\text{ N})(6\\text{ m}) + (2\\text{ N})(4\\text{ m}) = 24\\text{ J} + 8\\text{ J} = 32\\text{ J}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_34",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A man weighing himself is standing on a bathroom scale in an elevator that is accelerating upward at a rate of 0.5 meter per second squared. By what percentage is the reading of the scale off from the person’s true weight?</p>",
                "options": [
                    "0% (accurate)",
                    "5% too high",
                    "5% too low",
                    "0.5% too high"
                ],
                "answer": "B",
                "explanation": "The bathroom scale reads the normal force:</p>\r\n<p class=\"center1\">\\(F_{\\text{net}} = N - mg = ma, 0.5\\text{ m/s}^2 = 0.05g, N - mg = m(0.05g), N = m(1.05g)\\)</p>\r\n<p class=\"numpt\">The reading will be 5% too high.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_35",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A 50-kilogram person is sitting on a seesaw 1.2 meters from the balance point. On the other side, a 70-kilogram person is balanced. How far from the balance point is the second person sitting?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w70\" role=\"presentation\" src=\"/images/f185-02.jpg\"/></p>",
                "options": [
                    "0.57 m",
                    "0.75 m",
                    "0.63 m",
                    "0.86 m"
                ],
                "answer": "D",
                "explanation": "Balanced means the torques are equal and opposite:</p>\r\n<p class=\"center1\">\\(50\\text{ kg} \\cdot g \\cdot 1.2 = 70\\text{ kg} \\cdot g \\cdot x, x = 6/7 = 0.86\\text{ m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_36",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "An object rolls down a steep incline with very little friction. At the same time, an object of equal mass slides down a similar but frictionless incline. Which one takes less time to get to the bottom?</p>",
                "options": [
                    "They take the same time.",
                    "The rolling object takes less time.",
                    "The sliding object takes less time.",
                    "The answer depends on the rolling object’s rotational inertia."
                ],
                "answer": "C",
                "explanation": "Both objects start with the same potential energy. However, the rolling object must use some of that potential energy for rotational energy, leaving less for linear kinetic energy. Therefore, the rolling object moves more slowly down the hill.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_37",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "What is the value of <i>g</i> at a position above Earth’s surface equal to Earth’s radius?</p>",
                "options": [
                    "9.8 N/kg",
                    "4.9 N/kg",
                    "2.45 N/kg",
                    "1.6 N/kg"
                ],
                "answer": "C",
                "explanation": "Universal gravity (and the gravitational field) are 1/<i>r</i><sup>2</sup> laws; doubling <i>r</i> will quarter the field.</p>\r\n<p class=\"center1\">\\(\\frac{1}{4}g = \\frac{1}{4}(9.8\\text{ N/kg})\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_38",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If an object is spinning at 150 RPM (revolutions per minute) and comes to a stop in 2 seconds, what is its average acceleration in radians/s<sup>2</sup>?</p>",
                "options": [
                    "−2.5π",
                    "−2π",
                    "−5π",
                    "−10π"
                ],
                "answer": "A",
                "explanation": "First, convert RPMs to rad/s:</p>\r\n<p class=\"center1\">\\(150\\text{ rev/min} \\times (2\\pi/1\\text{ rev}) \\times (1\\text{ min}/60\\text{ s}) = 5\\pi\\text{ rad/s}, \\text{acceleration} = \\frac{0 - 5\\pi\\text{ rad/s}}{2\\text{ s}} = -2.5\\pi\\text{ rad/s}^2\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_39",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "What is the work done by a horizontal spring (spring constant <i>k</i>) expanding from a compression distance <i>x</i> to an extension distance <i>x</i> to an attached mass?</p>",
                "options": [
                    "2<i>kx</i><sup>2</sup>",
                    "½<i>kx</i><sup>2</sup>",
                    "<i>kx</i><sup>2</sup>",
                    "0"
                ],
                "answer": "D",
                "explanation": "\\( \\omega \\) of work is delivered to the mass while uncompressing, followed by − \\( \\omega \\) done while the mass extends the spring outward, totaling to 0 net work for the entire expansion. Alternatively, think about the velocity being zero at the beginning and end of that single oscillation. No change in kinetic energy occurs; therefore, no net work is done.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_40",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If an isolated spinning object’s rotational inertia is reduced by a factor of 3 by internal forces, how will its angular momentum change?</p>",
                "options": [
                    "Angular momentum will be 3 times its previous value.",
                    "Angular momentum will be reduced to 1/3 its previous value.",
                    "Angular momentum will be reduced to 1/9 its previous value.",
                    "Angular momentum will remain unchanged."
                ],
                "answer": "D",
                "explanation": "No external torque means momentum must be conserved.</p></li>\r\n</ol>"
            }
        ]
    }
};
