// Specific Question Bank for Test: ap-diag-phys1
const AP_TEST_DATA = {
    "ap-diag-phys1": {
        "id": "ap-diag-phys1",
        "title": "AP Physics 1 Diagnostic Assessment",
        "subtitle": "Comprehensive baseline evaluation across Kinematics, Dynamics, Energy, Momentum, Rotation & Fluids",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Physics 1",
        "topic": "Comprehensive AP Physics 1",
        "questions": [
            {
                "id": "dphys1_1",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A mass is suspended from the ceiling by one rope at an angle as indicated. The mass is held in place by a second, horizontal rope. Without knowing the exact angle from the ceiling, except that it is greater than 45 degrees, which statement best represents the possible value for tension in the horizontal line?</p>",
                "options": [
                    "$T$ &gt; <i>mg</i>",
                    "$T$ = <i>mg</i>",
                    "$T$ &lt; <i>mg</i>",
                    "Cannot be determined without knowing the angle"
                ],
                "answer": "C",
                "explanation": "$T$ &lt; <i>mg.</i> Since the mass is stationary, we conclude that the net force is zero. The upward tension of the angled rope must be <i>mg</i> in order to cancel out gravity. The free-body diagram on the hanging mass is:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w35\" role=\"presentation\" src=\"images/f023-01.jpg\"/></p>\r\n<p class=\"exp\">Since the angle θ is greater than 45 degrees, the vertical component of tension $T_{2}$ must be bigger than the horizontal component. (To see this quickly, draw an extreme case, such as 85 degrees.) Therefore, the horizontal component of tension must be less than <i>mg</i>. The horizontal rope $T$ must cancel this horizontal component of $T_{2}$.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w23\" role=\"presentation\" src=\"images/f023-02.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "dphys1_2",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Pushing on a mass of 15 kg with a sideways force of 120 N is not enough to get the mass to start sliding across the floor. Which of the following best describes the coefficient of static friction between the floor and the mass?</p>",
                "options": [
                    "$\\mu$ = 0.8",
                    "$\\mu$ &gt; 0.8",
                    "$\\mu$ &lt; 0.8",
                    "$\\mu$ = 1.25"
                ],
                "answer": "B",
                "explanation": "$\\mu$ &gt; 0.8. The normal force between the mass and the floor is 150 N. The needed sideways push to overcome static friction is <b>greater than</b> 120 N. Dividing these two forces would give us:</p>\r\n<p class=\"center1\">$\\mu_s = 120/150 = 0.8$</p>\r\n<p class=\"exp\">Since a greater force is needed, the coefficient of static friction must be greater than this value.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_3",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "While standing on an elevator and experiencing a downward acceleration of 4.9 m/$s^{2}$, what is the force between the floor and your feet? The variable $m$ is your mass.</p>",
                "options": [
                    "<i>mg</i>",
                    "0.5<i>mg</i>",
                    "1.5<i>mg</i>",
                    "4.9<i>mg</i>"
                ],
                "answer": "B",
                "explanation": "0.5<i>mg</i>. The free-body diagram consists of only two forces.</p> N - mg = ma $$\r\n<p class=\"exp\">Newton’s second law gives us $+N$ − <i>mg</i> = <i>ma</i>. Let $a$ = −0.5$g$, which is half the value of $g$ and downward:</p> N - mg = m(-0.5g) \\implies N = 0.5mg $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_4",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "After throwing a ball at an upward angle, the reason the ball continues to go horizontally while falling due to gravity is that</p>",
                "options": [
                    "the ball’s inertia keeps it going",
                    "the force of the throw keeps it going",
                    "the energy from the gravitational potential keeps replenishing the lost energy",
                    "air pressure keeps the ball from falling too quickly"
                ],
                "answer": "A",
                "explanation": "The ball’s inertia keeps it going. Newton’s first law says that a body’s inertia maintains its current motion once in motion. After the force of the throw, the only force on the ball is the vertical force of gravity. This causes the ball to accelerate in the vertical direction while the ball’s sideways velocity is maintained due to its inertia.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_5",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Consider the situation in which your hand is pushing a book across a rough desktop with lots of friction. Of the many forces involved, consider only these two individual forces: the force on your hand from the book and the force the book is experiencing from your hand. While the book is accelerating from rest to its final velocity, which statement best compares the force experienced by your hand compared with that experienced by the book?</p>",
                "options": [
                    "Force on book &gt; force on hand",
                    "Force on hand &gt; force on book",
                    "Force on hand = force on book",
                    "The relationship between these two forces depends on the frictional force."
                ],
                "answer": "C",
                "explanation": "Force on hand = force on book. Newton’s third law of action-reaction states that the force pair of interaction between two objects is always equal and opposite. The acceleration of either object has no role in the third law. The acceleration comes about from the net force on a single object.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_6",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A puck comes to a stop on a level floor in 20 meters after an initial speed of 10 m/s. What is the coefficient of kinetic friction between the puck and the floor?</p>",
                "options": [
                    "The mass is required to calculate this answer.",
                    "0.25",
                    "0.5",
                    "0.025"
                ],
                "answer": "B",
                "explanation": "0.25. To find force, we must first find acceleration:</p> a = \\frac{v_f - v_i}{t} = \\frac{0 - 20}{8} = -2.5\\text{ m/s}^2 $$\r\n<p class=\"exp\">The net force horizontally is the friction. There are no other horizontal forces:</p> f_k = \\mu_k N  \r\n<p class=\"exp\">Newton’s second law gives us:</p> \\Sigma F_x = -f_k = ma  \r\n<p class=\"exp\">Our model for friction gives us:</p> -\\mu_k N = ma  \r\n<p class=\"exp\">This value is negative since it is to the left. Since the vertical forces cancel out, $N$ = <i>mg.</i> Substituting for friction from above and <i>mg</i> for $N$:</p> -\\mu_k mg = ma  \r\n<p class=\"exp\">Note that mass cancels:</p> \\mu_k = \\frac{|a|}{g} = \\frac{2.5}{10} = 0.25 $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_7",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A rock is dropped from an extremely high cliff and experiences free-fall conditions. Which of the following statements is NOT true about the rock’s velocity, acceleration, or displacement between the 3rd and 4th seconds of falling?</p>",
                "options": [
                    "The rock will fall an additional 4.9 meters.",
                    "The rock will speed up by 9.8 m/s.",
                    "The rock’s acceleration will remain 9.8 m/$s^{2}$.",
                    "The rock’s displacement, velocity, and acceleration vectors are all directed downward."
                ],
                "answer": "A",
                "explanation": "The rock will fall an additional 4.9 meters is NOT true. An object in free fall will accelerate by a constant 9.8 m/$s^{2}$. Since the rock is already moving downward, this leads to an increase in speed of 9.8 m/s in that 1-second interval. However, the rock will fall much farther than 4.9 m as it is already moving close to 30 m/s downward by the start of the 3rd second. It will fall an additional 35 meters in that 4th second. The rock does indeed fall 4.9 meters in the 1st second of the drop but falls an increasingly greater distance each second thereafter.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_8",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "When using the kinematics equation $x = x_{0} +v$<sub>$x$0</sub> $t$ + ½ $a$<sub>$x$</sub> $t^{2}$, which of the following is always assumed to be true?</p>",
                "options": [
                    "<i>a x</i> = zero",
                    "$x$ &gt; $x_{0}$",
                    "$V$<sub>$x$0</sub> is positive.",
                    "$a$<sub>$x$</sub> is constant."
                ],
                "answer": "D",
                "explanation": "$a$<sub>$x$</sub> is constant. All the equations of motion are predicated on the assumption of constant acceleration. Any permutation of signs or values will work in any of the equations of motion. If the acceleration is not constant, one must use graphical methods or approximate the acceleration as constant over a narrow interval of time.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_9",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Consider a projectile launched at 30 degrees above a flat surface. The projectile experiences no air resistance and lands at the same height from which it was launched. Compare the initial and final conditions of the following vector components:</p>\r\n<p class=\"center1\">$V_x \\quad V_y \\quad a_x \\quad a_y$</p>",
                "options": [
                    "They are all the same at both instances.",
                    "They are all different from their initial values.",
                    "$V$<sub>$x$</sub> and $V$<sub>$y$</sub> have changed, but $a$<sub>$x$</sub> <i>and a</i><sub>$y$</sub> are constant.",
                    "They are all the same except for $V$<sub>$y$</sub> <i>.</i>"
                ],
                "answer": "D",
                "explanation": "They are all the same except for $V$<sub>$y$</sub>. Projectile motion involves a constant vertical acceleration of −$g$ and no horizontal acceleration at all. Therefore, $a$<sub>$x$</sub> and $a$<sub>$y$</sub> are both constant throughout the flight. Since $a$<sub>$x$</sub> is zero, there is no change in $V$<sub>$x$</sub><i>.</i> So $V$<sub>$x$</sub> is also constant. $V$<sub>$y$</sub><i>,</i> however, is always changing. For a symmetric problem such as this one, the projectile lands with the same vertical speed as it had initially but in the opposite direction so that $V$<sub><i>yf</i></sub> = − $V$<sub><i>yi</i></sub>.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_10",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A physics teacher is swirling a bucket around in a vertical circle. If the bucket slips out of his hand when it is directly overhead, the bucket will</p>",
                "options": [
                    "fly upward initially",
                    "drop straight down",
                    "fly out horizontally initially",
                    "fly out up and at an angle initially"
                ],
                "answer": "C",
                "explanation": "The bucket will fly out horizontally initially. Objects executing circular motion have velocity vectors tangent to their motion while experiencing an inward acceleration. If the inward force is released, Newton’s first law dictates that the object follow its velocity vector. Note that gravity will cause the object to fall after it is released, but the initial motion is horizontal.</p> y = \\frac{1}{2}gt^2, \\quad x = v_x t $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_11",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If the Moon was twice as far from the center of Earth as it is currently, how would its orbital period change?</p>",
                "options": [
                    "The Moon’s orbital period would double.",
                    "The Moon’s orbital period would increase by a factor of 4.",
                    "$The Moon’s orbital period would increase by a factor of 2 \\sqrt{2}.$",
                    "The Moon’s orbital period would decrease by a factor of 2."
                ],
                "answer": "C",
                "explanation": "The Moon’s orbital period would increase by a factor of 2 \\sqrt{2}. Kepler’s third law of orbital bodies states that their orbital periods squared are proportional to their orbital radius cubed:</p> T^2 \\propto R^3 \\implies \\left(\\frac{T_{\\text{new}}}{T_{\\text{old}}}\\right)^2 = \\left(\\frac{R_{\\text{new}}}{R_{\\text{old}}}\\right)^3 $$\r\n<p class=\"exp\">Substituting $R_{new}$ = 2$R_{old}$:</p> \\left(\\frac{T_{\\text{new}}}{T_{\\text{old}}}\\right)^2 = 2^3 = 8  \r\n<p class=\"exp\">Cancel $R$ and solve for $T_{new}$:</p> T_{\\text{new}} = \\sqrt{8}\\,T_{\\text{old}} = 2\\sqrt{2}\\,T_{\\text{old}}  \r\n<p class=\"exp\">Note that you can also obtain this result by examining the equation for orbital speed from Newton ($v$ = (<i>Gm</i>/$r$)<sup>½</sup>). This shows that the orbital speed of the Moon must decrease by the square root of 2. Coupling this with the knowledge that the new orbit is now twice as large, it will take 2(2<sup>½</sup>) or 2 \\sqrt{2} times as long to orbit once around Earth as it used to.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_12",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If you went to another planet, which of the following would be true?</p>",
                "options": [
                    "Your mass would be the same, but your weight would change.",
                    "Your mass would change, but your weight would be the same.",
                    "Your mass would be the same, and your weight would be the same.",
                    "Your mass would change, and your weight would change."
                ],
                "answer": "A",
                "explanation": "Your mass would be the same, but your weight would change. Mass is a property of an object and measures the object’s inertia regardless of location. Weight is a force due to gravity and depends both on the object’s mass and on the planetary gravity the object is currently experiencing.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_13",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "You lift a heavy suitcase twice. Each time you lift it to the same height, but the second time you do it in half the time. Compare the work done to and power delivered to the suitcase.</p>",
                "options": [
                    "Same work, same power",
                    "Twice the work, twice the power",
                    "Twice the work, same power",
                    "Same work, twice the power"
                ],
                "answer": "D",
                "explanation": "Same work, twice the power.</p>\r\n<p class=\"center1\">Work = force × distance</p>\r\n<p class=\"exp\">For lifting operations, the force is assumed to be equal to the weight of the object for most of the lift. (Briefly, at the beginning of the lift, the lifting force must be greater than the weight in order to get the object moving. This brief force must be different in the second case in order to get the suitcase moving faster. However, this initial force is generally ignored in these calculations as it does not happen over an appreciable distance, just as the decrease in lifting force at the end of the lift is likewise ignored.) The same force over the same distance yields the same work. If the details of the forces contributing to the work are troublesome, you may prefer to think about the energy gained by the suitcase ($W$ = Δ$E$). Since the suitcase has gained the same amount of energy in both cases by being lifted, the work done must likewise be the same:</p>\r\n<p class=\"center1\">Power = work/time</p>\r\n<p class=\"exp\">If the same work is done in half the time, twice the power must be supplied.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_14",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A constant horizontal force of 12 N is applied for 5 meters to move an initially stationary mass of 5 kg. The friction between the floor and the mass does a total of −40 joules of work to the mass. The final speed (in m/s) of the object is</p>",
                "options": [
                    "2(6)<sup>½</sup>",
                    "2(2)<sup>½</sup>",
                    "2(10)<sup>½</sup>",
                    "4"
                ],
                "answer": "B",
                "explanation": "2(2)<sup>½</sup> m/s. From the work-energy theorem:</p> W_{\\text{net}} = \\Delta KE = F \\cdot d = (10\\text{ N})(2\\text{ m}) = 20\\text{ J} $$\r\n<p class=\"exp\">So the kinetic energy of the mass has gone up by 20 J. Initially, it had no <i>KE</i> since it was stationary. Therefore:</p> KE = \\frac{1}{2}mv^2 \\implies 20 = \\frac{1}{2}(5)v^2 \\implies v = \\sqrt{8} = 2\\sqrt{2}\\text{ m/s} $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_15",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A skier begins a downhill run at a height of 9 meters and a speed of 2 m/s. If you ignore friction, what will be her speed when she is 3 meters from the bottom of the slope?</p>",
                "options": [
                    "6.0 m/s",
                    "12.8 m/s",
                    "11.1 m/s",
                    "7.7 m/s"
                ],
                "answer": "C",
                "explanation": "11.1 m/s. Mechanical energy is conserved since there are no nonconservative forces involved:</p> mgh_i + \\frac{1}{2}mv_i^2 = mgh_f + \\frac{1}{2}mv_f^2 $$\r\n<p class=\"exp\">Canceling mass in every term and solving for <i>$v_{f}$</i> yields:</p> v_f = \\sqrt{v_i^2 + 2g(h_i - h_f)} $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_16",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A rubber ball ($m$ = 0.250 kg) strikes a wall horizontally at 3.50 m/s and rebounds elastically. What is the magnitude of impulse delivered to the wall in N ⋅ s?</p>",
                "options": [
                    "0.875",
                    "1.75",
                    "2.50",
                    "8.75"
                ],
                "answer": "B",
                "explanation": "1.75</p> \\Delta p = m(v_f - v_i) = (0.05\\text{ kg})(-20 - 15) = -1.75\\text{ kg}\\cdot\\text{m/s} $$\r\n<p class=\"exp\">Since the collision is elastic, no kinetic energy is lost. Assuming the wall remains stationary, the rubber ball must rebound with the same speed but in the opposite direction:</p> v_f = -v_i  \r\n<p class=\"exp\">Substituting for $v$<sub>$f$</sub> above:</p> J = \\Delta p = -1.75\\text{ N}\\cdot\\text{s} \\implies |J| = 1.75\\text{ N}\\cdot\\text{s}  \r\n<p class=\"exp\">Here the negative sign indicates that the impulse delivered to the ball is in the opposite direction from the ball’s initial velocity. Note the ball and the wall receive equal and opposite impulses (from Newton’s third law) and the problem asks for magnitude (absolute value).</p>\r\n<p class=\"expt\">Since $F$Δ$t$ is also an impulse, units of N ⋅ s must be the same as kg ⋅ m/s and is quickly shown:</p> 1\\text{ N}\\cdot\\text{s} = 1(\\text{kg}\\cdot\\text{m/s}^2)\\cdot\\text{s} = 1\\text{ kg}\\cdot\\text{m/s} $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_17",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A running back ($m$ = 85 kg) running at 1.5 m/s is tackled from the side by another player ($m$ = 75 kg) running perpendicularly to the running back’s original heading at 1.75 m/s. What is the resulting speed of the two entangled players just after the tackle?</p>",
                "options": [
                    "2.2 m/s",
                    "0.25 m/s",
                    "1.6 m/s",
                    "1.1 m/s"
                ],
                "answer": "D",
                "explanation": "1.1 m/s. Total momentum must be conserved through the collision. So we need to find only the magnitude of the initial momentum of the system. Each player is originally running perpendicularly to the other. Thus, their individual momentums are different components. Imagine one as an $x$-component and the other as a $y$-component. Therefore, the resulting magnitude is found using the Pythagorean theorem. Dividing by total mass yields the speed of the combined players after impact:</p> v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\frac{(80)(6) + (100)(-4)}{80 + 100} = \\frac{80}{180} = 0.44\\text{ m/s} $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_18",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Which of the following ranks the torques applied by the three equal forces <i>A, B,</i> and $C$ to the long thin rod about its fixed axis as indicated above?</p>",
                "options": [
                    "τ <sub>$C$</sub> &gt; τ <sub>$B$</sub> &gt; τ <sub>$A$</sub>",
                    "τ <sub>$A$</sub> = τ <sub>$B$</sub> &gt; τ <sub>$C$</sub>",
                    "τ <sub>$B$</sub> = τ <sub>$C$</sub> &gt; τ <sub>$A$</sub>",
                    "τ <sub>$B$</sub> &gt; τ <sub>$A$</sub> &gt; τ <sub>$C$</sub>"
                ],
                "answer": "D",
                "explanation": "$\\tau$<sub>$B$</sub> &gt; $\\tau$<sub>$A$</sub> &gt; $\\tau$ <sub>$C$</sub></p>\r\n<p class=\"center1\">Torque = (force) (distance from axis of rotation) sin θ</p>\r\n<p class=\"exp\">Force $C$ is applied along the lever arm. So force $C$ has an angle of 180°, resulting in no torque.</p> \\tau_C = r F \\sin(180^\\circ) = 0  \r\n<p class=\"exp\">Force $A$ has a much shorter lever arm than force $B$. Therefore, the torque supplied by $A$ is much less than the torque supplied by $B$.</p> \\tau_A = r_A F_A \\sin(90^\\circ) < \\tau_B = r_B F_B \\sin(90^\\circ) $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_19",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A large spherical cloud of dust in deep space that is spinning slowly collapses under its own gravitational force into a spherical cloud 10 times smaller in diameter. How does its rotational speed change?</p>",
                "options": [
                    "The rotational speed does not change.",
                    "The rotational speed increases by a factor of 10.",
                    "The rotational speed decreases by a factor of 10.",
                    "The rotational speed increases by a factor of 100."
                ],
                "answer": "D",
                "explanation": "The rotational speed increases by a factor of 100. The rotational inertia ($I$) for a sphere is proportional to $R^{2}$. Because the shape of the cloud is not changing, we can determine that the rotational inertia has decreased by a factor of 10<sup>2</sup>. Since angular momentum is conserved:</p> L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2  \r\n<p class=\"exp\">The new angular velocity ($ω_{2}$) must be 100 times bigger:</p> \\omega_2 = \\frac{I_1}{I_2}\\omega_1 = 100\\,\\omega_1 $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_20",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Two cars approach an intersection at right angles, as pictured above. What is their relative speed to each other?</p>",
                "options": [
                    "10 mph",
                    "45 mph",
                    "57 mph",
                    "80 mph"
                ],
                "answer": "C",
                "explanation": "57 mph. Relative velocity is the difference in the velocity vectors. When the vectors are subtracted, the resultant is the hypotenuse of a right triangle:</p> |\\Delta\\vec{v}| = \\sqrt{v_x^2 + v_y^2} = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ m/s} \\approx 14.1\\text{ m/s} $$</li>\r\n<li>"
            },
            {
                "id": "dphys1_21",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A container of water (pictured below) has two holes in its side allowing two streams of water to emerge as shown. Initially, the lower hole is twice as deep as the higher hole. Which statement best compares the initial velocities of these two streams of water?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w34\" role=\"presentation\" src=\"images/f020-02.jpg\"/></p>",
                "options": [
                    "They emerge at the same speed.",
                    "The lower stream emerges 2½ times as fast as the upper stream.",
                    "The lower stream emerges 2 times as fast as the upper stream.",
                    "The lower stream emerges 4 times as fast as the upper stream."
                ],
                "answer": "B",
                "explanation": "According to Bernoulli’s equation, the square of the velocity of fluid relates to the depth of the fluid, assuming the pressure is the same. (This occurs since the streams of water are released into equal atmospheric pressure and is also known as Torricelli’s theorem.) Comparing the surface of the water to one of the streams:</p> P_1 + \\rho g h_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\rho g h_2 + \\frac{1}{2}\\rho v_2^2 $$\r\n<p class=\"exp\">With $P_{1}$ and $P_{2}$ being equal and the surface being stationary ($v_{1}$ = 0), we are left with:</p> \\rho g h_1 = \\rho g h_2 + \\frac{1}{2}\\rho v_2^2  \r\n<p class=\"exp\">Eliminating and rearranging gives:</p> v_2 = \\sqrt{2g(h_1 - h_2)} $$\r\n<p class=\"exp\">Since the lower hole is twice as deep, the quantity in parentheses will be twice as great for the lower hole as compared with the first. To compare velocities, take the square root of both sides.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            },
            {
                "id": "phys_diag_22",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "A car accelerates from rest at 4 m/s^2 for 5 s. Final speed is:",
                "options": [
                    "10 m/s",
                    "15 m/s",
                    "20 m/s",
                    "25 m/s"
                ],
                "answer": "C",
                "explanation": "v = u + at = 0 + 4(5) = 20 m/s."
            },
            {
                "id": "phys_diag_23",
                "topic": "Newton's Laws",
                "difficulty": "medium",
                "question": "A 5 kg object experiences 20 N net force. Acceleration = ?",
                "options": [
                    "2 m/s^2",
                    "4 m/s^2",
                    "100 m/s^2",
                    "25 m/s^2"
                ],
                "answer": "B",
                "explanation": "F = ma => a = F/m = 20/5 = 4 m/s^2."
            },
            {
                "id": "phys_diag_24",
                "topic": "Work-Energy",
                "difficulty": "medium",
                "question": "A 2 kg ball is lifted 3 m. Gravitational PE gained (g=10 m/s^2):",
                "options": [
                    "30 J",
                    "60 J",
                    "6 J",
                    "20 J"
                ],
                "answer": "B",
                "explanation": "PE = mgh = 2 * 10 * 3 = 60 J."
            },
            {
                "id": "phys_diag_25",
                "topic": "Momentum",
                "difficulty": "medium",
                "question": "A 3 kg object at 4 m/s hits and sticks to a 1 kg stationary object. Combined speed:",
                "options": [
                    "4 m/s",
                    "3 m/s",
                    "2 m/s",
                    "1 m/s"
                ],
                "answer": "B",
                "explanation": "Conservation of momentum: 3(4) = 4*v => v = 3 m/s."
            },
            {
                "id": "phys_diag_26",
                "topic": "Circular Motion",
                "difficulty": "medium",
                "question": "Centripetal acceleration of speed $v$ in a circle of radius $r$:",
                "options": [
                    "vr",
                    "v/r",
                    "v^2/r",
                    "r/v^2"
                ],
                "answer": "C",
                "explanation": "Centripetal acceleration a_c = v^2/r."
            },
            {
                "id": "phys_diag_27",
                "topic": "Waves",
                "difficulty": "easy",
                "question": "A wave has frequency 5 Hz and wavelength 2 m. Speed is:",
                "options": [
                    "2.5 m/s",
                    "7 m/s",
                    "10 m/s",
                    "3 m/s"
                ],
                "answer": "C",
                "explanation": "v = f*lambda = 5 * 2 = 10 m/s."
            },
            {
                "id": "phys_diag_28",
                "topic": "Rotation",
                "difficulty": "hard",
                "question": "Disk with I = 2 kg*m^2, omega = 3 rad/s. Rotational KE = ?",
                "options": [
                    "3 J",
                    "6 J",
                    "9 J",
                    "18 J"
                ],
                "answer": "C",
                "explanation": "KE = (1/2)*I*omega^2 = (1/2)(2)(9) = 9 J."
            },
            {
                "id": "phys_diag_29",
                "topic": "Oscillations",
                "difficulty": "medium",
                "question": "A pendulum's period depends on:",
                "options": [
                    "Mass of the bob",
                    "Amplitude of swing",
                    "Length and g only",
                    "Air resistance only"
                ],
                "answer": "C",
                "explanation": "T = 2*pi*sqrt(L/g). Period depends only on length L and gravitational acceleration g."
            },
            {
                "id": "phys_diag_30",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "Archimedes' principle: buoyant force equals:",
                "options": [
                    "Weight of the object",
                    "Weight of fluid displaced",
                    "Density of the fluid",
                    "Pressure at the surface"
                ],
                "answer": "B",
                "explanation": "The buoyant force equals the weight of the fluid displaced by the submerged object."
            }
        ]
    }
};
