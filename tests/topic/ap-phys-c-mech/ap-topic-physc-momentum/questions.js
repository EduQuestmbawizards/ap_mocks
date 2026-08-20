// Specific Question Bank for Test: ap-topic-physc-momentum
const AP_TEST_DATA = {
    "ap-topic-physc-momentum": {
        "id": "ap-topic-physc-momentum",
        "title": "AP Physics C: Momentum, Impulse & Collisions",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Momentum",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics C: Mechanics",
        "topic": "Momentum",
        "questions": [
            {
                "id": "ap-topic-physc-momentum_q1",
                "topic": "Momentum",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> If the time of the ball’s collision with the glove is doubled, what happens to the force necessary to catch the ball?</p>",
                "options": [
                    "<p>It doesn’t change.</p>",
                    "<p>It is cut in half.</p>",
                    "<p>It is cut to one-fourth of the original force.</p>",
                    "<p>It quadruples.</p>",
                    "<p>It doubles.</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong>1.</strong> <strong>B—</strong>Impulse is force times the time interval of collision, and is also equal to an object’s change in momentum. Solving for force, $F$ = Δ$p$/Δ$t$. Because the ball still has the same mass, and still changes from speed $v_{0}$ to speed zero, the ball’s momentum change is the same, regardless of the collision time. The collision time, in the denominator, doubled; so the entire expression for force was cut in half.</p>"
            },
            {
                "id": "ap-topic-physc-momentum_q2",
                "topic": "Momentum",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> If the time of collision remains $t$, but the initial velocity is doubled, what happens to the force necessary to catch the ball?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0112-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>It doesn’t change.</p>",
                    "<p>It is cut in half.</p>",
                    "<p>It is cut to one-fourth of the original force.</p>",
                    "<p>It quadruples.</p>",
                    "<p>It doubles.</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>E—</strong>Still use $F$ = Δ$p$/Δ$t$, but this time it is the numerator that changes. The ball still is brought to rest by the glove, and the mass of the ball is still the same; but the doubled velocity upon reaching the glove doubles the momentum change. Thus, the force doubles.</p>"
            },
            {
                "id": "ap-topic-physc-momentum_q3",
                "topic": "Momentum",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> Two balls, of mass $m$ and 2$m$, collide and stick together. The combined balls are at rest after the collision. If the ball of mass $m$ was moving 5 m/s to the right before the collision, what was the velocity of the ball of mass 2$m$ before the collision?</p>",
                "options": [
                    "<p>2.5 m/s to the right</p>",
                    "<p>2.5 m/s to the left</p>",
                    "<p>10 m/s to the right</p>",
                    "<p>10 m/s to the left</p>",
                    "<p>1.7 m/s to the left</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>B—</strong>The total momentum after collision is zero. So the total momentum before collision must be zero as well. The mass $m$ moved 5 m/s to the right, giving it a momentum of 5$m$ units; the right-hand mass must have the same momentum to the left. It must be moving half as fast, 2.5 m/s, because its mass it twice as big; then its momentum is (2$m$)(2.5) = 5$m$ units to the left.</p>"
            },
            {
                "id": "ap-topic-physc-momentum_q4",
                "topic": "Momentum",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> Two identical balls have initial velocities $v_{1}$ = 4 m/s to the right and $v_{2}$ = 3 m/s to the left, respectively. The balls collide head-on and stick together. What is the velocity of the combined balls after the collision?</p><h4 class=\"h4\">Free Response:</h4><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0112-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/1by7.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> m/s to the right</p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/3by7.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> m/s to the right</p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/1by2.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> m/s to the right</p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/4by7.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> m/s to the right</p>",
                    "<p>1 m/s to the right</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>4.</strong> <strong>C—</strong>Because the balls are identical, just pretend they each have mass 1 kg. Then the momentum conservation tells us that</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0113-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">The combined mass, on the right of the equation above, is 2 kg; $v$′ represents the speed of the combined mass. Note the negative sign indicating the direction of the second ball’s velocity. Solving, $v$′ = +0.5 m/s, or 0.5 m/s to the right.</p>"
            },
            {
                "id": "ap-topic-physc-momentum_q5",
                "topic": "Momentum",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> A 75-kg skier skis down a hill. The skier collides with a 40-kg child who is at rest on the flat surface near the base of the hill, 100 m from the skier’s starting point, as shown above. The skier and the child become entangled. Assume all surfaces are frictionless.</p>",
                "options": [
                    "<p>How fast will the skier be moving when he reaches the bottom of the hill? Assume the skier is at rest when he begins his descent.</p>",
                    "<p>What will be the speed of the skier and child just after they collide?</p>",
                    "<p>If the collision occurs in half a second, how much force will be experienced by each person?</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"quesal\"><strong>5.</strong> (a) This part is not a momentum problem, it’s a Newton’s second law and kinematics problem. (Or it’s an energy problem, if you’ve studied energy.) Break up forces on the skier into parallel and perpendicular axes—the net force down the plane is <em>mg</em>(sin 45°). So by Newton’s second law, the acceleration down the plane is $g$ (sin 45°) = 7.1 m/$s^{2}$. Using kinematics with intitial velocity zero and distance 100 m, the skier is going 38 m/s(!).</p><p class=\"alphabr1\">(b) Now use momentum conservation. The total momentum before collision is (75 kg)(38 m/s) = 2850 kg.m/s. This must equal the total momentum after collision. The people stick together, with combined mass 115 kg. So after collision, the velocity is 2850 kg.m/s divided by 115 kg, or about 25 m/s.</p><p class=\"alphabr1\">(c) Change in momentum is force multiplied by time interval . . . the child goes from zero momentum to (40 kg)(25 m/s) = 1000 kg·m/s of momentum. Divide this change in momentum by 0.5 seconds, and you get 2000 N, or a bit less than a quarter ton of force. Ouch!</p>"
            },
            {
                "id": "physc_mom_q6",
                "topic": "Impulse from Time-Varying Force",
                "difficulty": "medium",
                "question": "<p>A force $F(t) = (30t - 6t^2)\\text{ N}$ acts on a $2\\text{ kg}$ object from $t = 0$ to $t = 5\\text{ s}$. What is the total change in momentum $\\Delta p$ of the object?</p>",
                "options": [
                    "$75\\text{ kg}\\cdot\\text{m/s}$",
                    "$100\\text{ kg}\\cdot\\text{m/s}$",
                    "$125\\text{ kg}\\cdot\\text{m/s}$",
                    "$150\\text{ kg}\\cdot\\text{m/s}$",
                    "$250\\text{ kg}\\cdot\\text{m/s}$"
                ],
                "answer": "C",
                "explanation": "<p>$J =$\\int_{0}^{5} (30t - 6t^2)$,dt = [15t^2 - 2t^3]_0^5 = 15(25) - 2(125) = 375 - 250 = 125\\text{ kg}\\cdot\\text{m/s}$.</p>"
            },
            {
                "id": "physc_mom_q7",
                "topic": "Ballistic Pendulum",
                "difficulty": "hard",
                "question": "<p>A bullet of mass $m = 0.01\\text{ kg}$ is fired with speed $v$ into a wooden block of mass $M = 0.99\\text{ kg}$ hanging as a pendulum of length $L = 1.0\\text{ m}$. The block and embedded bullet swing up to a height $h = 0.20\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, what was the initial speed $v$ of the bullet?</p>",
                "options": [
                    "$100\\text{ m/s}$",
                    "$200\\text{ m/s}$",
                    "$300\\text{ m/s}$",
                    "$400\\text{ m/s}$",
                    "$500\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "<p>Speed after collision: $V = \\sqrt{2gh} = \\sqrt{2(10)(0.20)} = 2.0\\text{ m/s}$. Momentum conservation: $mv = (m+M)V \\implies 0.01v = (1.0)(2.0) \\implies v = 200\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_mom_q8",
                "topic": "Rocket Thrust & Tsiolkovsky Equation",
                "difficulty": "hard",
                "question": "<p>A rocket of initial mass $M_0$ exhausts fuel at constant relative speed $u_{\\text{ex}}$ at a constant mass burn rate $R = |dm/dt|$. In gravity-free space, what is the thrust force on the rocket?</p>",
                "options": [
                    "$F = u_{\\text{ex}} \\frac{dm}{dt}$",
                    "$F = M_0 u_{\\text{ex}}$",
                    "$F = \\frac{1}{2}R u_{\\text{ex}}^2$",
                    "$F = R u_{\\text{ex}}$",
                    "$F = \\frac{u_{\\text{ex}}}{R}$"
                ],
                "answer": "D",
                "explanation": "<p>Thrust force is $F_{\\text{thrust}} = u_{\\text{ex}} \\left|\\frac{dm}{dt}\\right| = R u_{\\text{ex}}$.</p>"
            },
            {
                "id": "physc_mom_q9",
                "topic": "Center of Mass Velocity",
                "difficulty": "medium",
                "question": "<p>Two particles $m_1 = 2\\text{ kg}$ with velocity $\\vec{v}_1 = (4\\hat{i})\\text{ m/s}$ and $m_2 = 3\\text{ kg}$ with velocity $\\vec{v}_2 = (6\\hat{j})\\text{ m/s}$ form a system. What is the velocity of the center of mass $\\vec{v}_{\\text{cm}}$?</p>",
                "options": [
                    "$(1.6\\hat{i} + 3.6\\hat{j})\\text{ m/s}$",
                    "$(4.0\\hat{i} + 6.0\\hat{j})\\text{ m/s}$",
                    "$(2.0\\hat{i} + 3.0\\hat{j})\\text{ m/s}$",
                    "$(8.0\\hat{i} + 18.0\\hat{j})\\text{ m/s}$",
                    "$(0.8\\hat{i} + 1.8\\hat{j})\\text{ m/s}$"
                ],
                "answer": "A",
                "explanation": "<p>$\\vec{v}_{\\text{cm}} = \\frac{m_1\\vec{v}_1 + m_2\\vec{v}_2}{m_1+m_2} = \\frac{2(4\\hat{i}) + 3(6\\hat{j})}{5} = 1.6\\hat{i} + 3.6\\hat{j}\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_mom_q10",
                "topic": "1D Elastic Collision Velocity Exchange",
                "difficulty": "medium",
                "question": "<p>A moving sphere of mass $M$ collides elastically head-on with an identical stationary sphere of mass $M$. What are the velocities of the two spheres immediately after the collision?</p>",
                "options": [
                    "Both move forward at half the initial speed",
                    "The incoming sphere stops completely; the stationary sphere moves forward with initial speed $v_0$",
                    "Both bounce backward with speed $v_0/2$",
                    "The incoming sphere bounces back with speed $v_0$",
                    "Both spheres stick together"
                ],
                "answer": "B",
                "explanation": "<p>In an elastic 1D collision of identical masses, velocities are completely exchanged: $v_{1f} = 0$, $v_{2f} = v_0$.</p>"
            },
            {
                "id": "physc_mom_q11",
                "topic": "Impulse on Force-Time Graph",
                "difficulty": "easy",
                "question": "<p>A triangular force pulse with base duration $\\Delta t = 0.04\\text{ s}$ and peak force $F_{\\max} = 500\\text{ N}$ acts on an object. What is the impulse delivered?</p>",
                "options": [
                    "$5\\text{ N}\\cdot\\text{s}$",
                    "$10\\text{ N}\\cdot\\text{s}$",
                    "$15\\text{ N}\\cdot\\text{s}$",
                    "$20\\text{ N}\\cdot\\text{s}$",
                    "$25\\text{ N}\\cdot\\text{s}$"
                ],
                "answer": "B",
                "explanation": "<p>Area = $\\frac{1}{2}(0.04)(500) = 10\\text{ N}\\cdot\\text{s}$.</p>"
            },
            {
                "id": "physc_mom_q12",
                "topic": "2D Inelastic Collision",
                "difficulty": "medium",
                "question": "<p>A $1000\\text{ kg}$ car moving north at $15\\text{ m/s}$ collides and entangles with a $1500\\text{ kg}$ truck moving east at $10\\text{ m/s}$. What is the magnitude of their combined velocity right after collision?</p>",
                "options": [
                    "$6.0\\text{ m/s}$",
                    "$8.5\\text{ m/s}$",
                    "$10.0\\text{ m/s}$",
                    "$12.5\\text{ m/s}$",
                    "$15.0\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "<p>$P_x = 15000$, $P_y = 15000$. Total momentum $P = 15000\\sqrt{2} \\approx 21213\\text{ kg}\\cdot\\text{m/s}$. Combined velocity $v = \\frac{21213}{2500} \\approx 8.49\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_mom_q13",
                "topic": "Explosion / Recoil",
                "difficulty": "easy",
                "question": "<p>A stationary cannon of mass $1000\\text{ kg}$ fires a $20\\text{ kg}$ cannonball horizontally at $300\\text{ m/s}$. What is the recoil speed of the cannon?</p>",
                "options": [
                    "$3.0\\text{ m/s}$",
                    "$6.0\\text{ m/s}$",
                    "$9.0\\text{ m/s}$",
                    "$12.0\\text{ m/s}$",
                    "$15.0\\text{ m/s}$"
                ],
                "answer": "B",
                "explanation": "<p>$v_c = -\\frac{20 \\times 300}{1000} = -6.0\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_mom_q14",
                "topic": "Continuously Flowing Mass",
                "difficulty": "hard",
                "question": "<p>Sand falls vertically onto a conveyor belt at a steady rate of $\\frac{dm}{dt} = 5.0\\text{ kg/s}$. To keep the belt moving at a constant horizontal speed $v = 2.0\\text{ m/s}$, what horizontal force must the motor apply?</p>",
                "options": [
                    "$2.5\\text{ N}$",
                    "$5.0\\text{ N}$",
                    "$10.0\\text{ N}$",
                    "$20.0\\text{ N}$",
                    "$25.0\\text{ N}$"
                ],
                "answer": "C",
                "explanation": "<p>$F = v \\frac{dm}{dt} = 2.0 \\times 5.0 = 10.0\\text{ N}$.</p>"
            },
            {
                "id": "physc_mom_q15",
                "topic": "Kinetic Energy & Momentum Relation",
                "difficulty": "easy",
                "question": "<p>If the kinetic energy of a particle of mass $m$ is increased by a factor of 4, by what factor does its linear momentum magnitude increase?</p>",
                "options": [
                    "$\\sqrt{2}$",
                    "$2$",
                    "$4$",
                    "$8$",
                    "$16$"
                ],
                "answer": "B",
                "explanation": "<p>$p = \\sqrt{2mK}$. If $K \\to 4K$, $p \\to 2p$.</p>"
            }
        ]
    }
};
