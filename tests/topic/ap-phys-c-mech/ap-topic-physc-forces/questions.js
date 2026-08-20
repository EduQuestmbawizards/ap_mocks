// Specific Question Bank for Test: ap-topic-physc-forces
const AP_TEST_DATA = {
    "ap-topic-physc-forces": {
        "id": "ap-topic-physc-forces",
        "title": "AP Physics C: Newton's Laws & Friction Dynamics",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Forces & Dynamics",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics C: Mechanics",
        "topic": "Forces & Dynamics",
        "questions": [
            {
                "id": "ap-topic-physc-forces_q1",
                "topic": "Forces & Dynamics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> A 2.0-kg cart is given a shove up a long, smooth 30° incline. If the cart is traveling 8.0 m/s after the shove, how much time elapses until the cart returns to its initial position?</p>",
                "options": [
                    "<p>1.6 s</p>",
                    "<p>3.2 s</p>",
                    "<p>4.0 s</p>",
                    "<p>6.0 s</p>",
                    "<p>8.0 s</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"quesn\"><strong>1.</strong> <strong>B—</strong>“Smooth” usually means “ignore friction.” So the only force acting along the plane is a component of gravity, <em>mg</em>(sin 30°). The $F_{net}$ equation becomes <em>mg</em>(sin 30°) – 0 = <em>ma</em>. The mass cancels, leaving the acceleration as 5 m/$s^{2}$. What’s left is a kinematics problem. Set up a chart, calling the direction down the plane as positive:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0104-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Use <img alt=\"Images\" class=\"q-img\" src=\"images/e0104-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> to find that the time is 3.2 s.</p>"
            },
            {
                "id": "ap-topic-physc-forces_q2",
                "topic": "Forces & Dynamics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> A car slides up a frictionless inclined plane. How does the normal force of the incline on the car compare with the weight of the car?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0102-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>The normal force must be equal to the car’s weight.</p>",
                    "<p>The normal force must be less than the car’s weight.</p>",
                    "<p>The normal force must be greater than the car’s weight.</p>",
                    "<p>The normal force must be zero.</p>",
                    "<p>The normal force could have any value relative to the car’s weight.</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>B—</strong>The normal force exerted on an object on an inclined plane equals <em>mg</em>(cos $\\theta$), where $\\theta$ is the angle of the incline. If $\\theta$ is greater than 0, then cos $\\theta$ is less than 1, so the normal force is less than the object’s weight.</p>"
            },
            {
                "id": "ap-topic-physc-forces_q3",
                "topic": "Forces & Dynamics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> In the diagram above, a 1.0-kg cart and a 2.0-kg cart are connected by a rope. The spring scale reads 10 N. What is the tension in the rope connecting the two carts? Neglect any friction.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0103-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>30 N</p>",
                    "<p>10 N</p>",
                    "<p>6.7 N</p>",
                    "<p>5.0 N</p>",
                    "<p>3.3 N</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>E—</strong>Consider the forces acting on each block separately. On the 1.0-kg block, only the tension acts, so $T$ = (1.0 kg)$a$. On the 2.0-kg block, the tension acts left, but the 10 N force acts right, so 10 N – $T$ = (2.0 kg)$a$. Add these equations together (noting that the tension in the rope is the same in both equations), getting 10 N = (3.0 <em>kg</em>)$a$; acceleration is 3.3 m/$s^{2}$. To finish, $T$ = (1.0 kg)$a$, so tension is 3.3 N.</p>"
            },
            {
                "id": "ap-topic-physc-forces_q4",
                "topic": "Forces & Dynamics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> The velocity–time graph above represents the motion of a 5-kg box. The only force applied to this box is a person pushing. Assuming that the box is moving to the right, what is the magnitude and direction of the force applied by the person pushing?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0103-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>2.0 N, right</p>",
                    "<p>2.0 N, left</p>",
                    "<p>0.4 N, right</p>",
                    "<p>0.4 N, left</p>",
                    "<p>12.5 N, left</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong>4.</strong> <strong>B—</strong> The acceleration is given by the slope of the $v$–$t$ graph, which has magnitude 0.4 m/$s^{2}$. $F_{net}$ = <em>ma</em>, so 5 kg × 0.4 m/$s^{2}$ = 2.0 N. This force is to the left because acceleration is negative (the slope is negative), and negative was defined as left.</p>"
            },
            {
                "id": "ap-topic-physc-forces_q5",
                "topic": "Forces & Dynamics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> A 50-g meterstick is to be suspended by a single string. A 100-g ball hangs from the left-hand edge of the meterstick. Where should the string be attached so that the meterstick hangs in equilibrium?</p><h4 class=\"h4\">Free Response:</h4><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0103-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>at the left-hand edge</p>",
                    "<p>40 cm from left-hand edge</p>",
                    "<p>30 cm from right-hand edge</p>",
                    "<p>17 cm from left-hand edge</p>",
                    "<p>at the midpoint of the meterstick</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong>5.</strong> <strong>D—</strong>This is a torque problem, and the fulcrum is wherever the meterstick is attached to the string. We know that the meterstick’s center of mass is at the 50-cm mark, so we can draw the following picture.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0104-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\"><strong>Because</strong> the stick is in equilibrium, the clockwise torques equal the counterclockwise torques: (1 N)($x$) = (0.5 N)(50 – $x$). So $x$ = something in the neighborhood of 25/1.5 ~ 17 cm. This answer is less than 50 cm, and is closer to the edge with the heavy mass, so it makes sense.</p>"
            },
            {
                "id": "ap-topic-physc-forces_q6",
                "topic": "Forces & Dynamics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>6.</strong> A 2-kg block and a 5-kg block are connected as shown above. The coefficient of friction between the 5-kg block and the flat surface is $\\mu$ = 0.2.</p>",
                "options": [
                    "<p>Calculate the magnitude of the acceleration of the 5-kg block.</p>",
                    "<p>Calculate the tension in the rope connecting the two blocks.</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>6.</strong> The setup is the same as in the chapter’s example problem, except this time there is a force of friction acting to the left on the 5-kg block. Because this block is in equilibrium vertically, the normal force is equal to the block’s weight, 50 N. The friction force is <em>μ$F_{N}$</em>, or 10 N.</p><p class=\"quesi\"><strong>Calling</strong> the down-and-right direction positive, we can write two equations, one for each block:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0104-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabr\"><strong>(a)</strong> To solve for acceleration, just add the two equations together. The tensions cancel. We find the acceleration to be 1.4 m/$s^{2}$.</p><p class=\"alphabr\"><strong>(b)</strong> Plug back into either equation to find the final answer, that the tension is 17 N. This is more than the 14 N we found for the frictionless situation, and so makes sense. We expect that it will take more force in the rope to overcome friction on the table.</p>"
            },
            {
                "id": "ap-topic-physc-forces_frq7",
                "topic": "Forces & Dynamics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>7.</strong> Bert, Ernie, and Oscar are discussing the gas mileage of cars. Specifically, they are wondering whether a car gets better mileage on a city street or on a freeway. All agree (correctly) that the gas mileage of a car depends on the force that is produced by the car’s engine—the car gets fewer miles per gallon if the engine must produce more force. Whose explanation is completely correct?</p><p class=\"quesn\"><strong>Bert says:</strong> Gas mileage is better on the freeway. In town the car is always speeding up and slowing down because of the traffic lights, so because $F_{net}$ = <em>ma</em> and acceleration is large, the engine must produce a lot of force. However, on the freeway, the car moves with constant velocity, and acceleration is zero. So the engine produces no force, allowing for better gas mileage.</p><p class=\"quesn\"><strong>Ernie says:</strong> Gas mileage is better in town. In town, the speed of the car is slower than the speed on the freeway. Acceleration is velocity divided by time, so the acceleration in town is smaller. Because $F_{net}$ = <em>ma</em>, then, the force of the engine is smaller in town giving better gas mileage.</p><p class=\"quesn\"><strong>Oscar says:</strong> Gas mileage is better on the freeway. The force of the engine only has to be enough to equal the force of air resistance—the engine doesn’t have to accelerate the car because the car maintains a constant speed. Whereas in town, the force of the engine must often be greater than the force of friction and air resistance in order to let the car speed up.</p>",
                "isFRQ": true,
                "rubric": "<p class=\"ques\"><strong>7.</strong> Although Bert is right that acceleration is zero on the freeway, this means that the NET force is zero; the engine still must produce a force to counteract air resistance. This is what Oscar says, so his answer is correct. Ernie’s answer is way off—acceleration is not velocity/time, acceleration is a CHANGE in velocity over time.</p>",
                "options": [
                    "Submit step-by-step mathematical derivation in the workspace below."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<p class=\"ques\"><strong>7.</strong> Although Bert is right that acceleration is zero on the freeway, this means that the NET force is zero; the engine still must produce a force to counteract air resistance. This is what Oscar says, so his answer is correct. Ernie’s answer is way off—acceleration is not velocity/time, acceleration is a CHANGE in velocity over time.</p>"
            },
            {
                "id": "physc_force_q8",
                "topic": "Static vs Kinetic Friction",
                "difficulty": "medium",
                "question": "<p>A $10\\text{ kg}$ crate rests on a horizontal floor where $\\mu_s = 0.40$ and $\\mu_k = 0.30$. A horizontal push of $35\\text{ N}$ is applied. Taking $g = 10\\text{ m/s}^2$, what is the magnitude of the friction force acting on the crate?</p>",
                "options": [
                    "$0\\text{ N}$",
                    "$30\\text{ N}$",
                    "$35\\text{ N}$",
                    "$40\\text{ N}$",
                    "$100\\text{ N}$"
                ],
                "answer": "C",
                "explanation": "<p>The maximum static friction is $f_{s,\\max} = \\mu_s mg = 0.40(10)(10) = 40\\text{ N}$. Since the applied force $35\\text{ N} < 40\\text{ N}$, the crate does not move, and the static friction matches the applied force exactly: $f_s = 35\\text{ N}$.</p>"
            },
            {
                "id": "physc_force_q9",
                "topic": "Drag Force & Separation of Variables",
                "difficulty": "hard",
                "question": "<p>A boat of mass $m$ cuts its engine at speed $v_0$. The resistive force is $F_d = $-c$\\sqrt{v}$. How long does it take for the boat to come to rest?</p>",
                "options": [
                    "$\\frac{2m\\sqrt{v_0}}{c}$",
                    "$\\frac{m v_0}{c}$",
                    "$\\frac{m\\sqrt{v_0}}{2c}$",
                    "$\\frac{2m v_0}{c}$",
                    "It takes infinite time."
                ],
                "answer": "A",
                "explanation": "<p>$m\\frac{dv}{dt} = $-c$ v^{1/2} \\implies$\\int_{{v_0}}^{0} v^{-1/2}$,dv = -\\frac{c}{m}$\\int_{0}^{T} dt $implies [2v^{1/2}]_{v_0}^0 = -2\\sqrt{v_0} = -\\frac{c}{m}T \\implies T = \\frac{2m\\sqrt{v_0}}{c}$.</p>"
            },
            {
                "id": "physc_force_q10",
                "topic": "Elevator Apparent Weight",
                "difficulty": "medium",
                "question": "<p>A $70\\text{ kg}$ passenger stands on a bathroom scale in an elevator. The scale reads $840\\text{ N}$. Taking $g = 10\\text{ m/s}^2$, what is the acceleration of the elevator?</p>",
                "options": [
                    "$2.0\\text{ m/s}^2$ downward",
                    "$2.0\\text{ m/s}^2$ upward",
                    "$1.2\\text{ m/s}^2$ upward",
                    "$12.0\\text{ m/s}^2$ upward",
                    "$0\\text{ m/s}^2$"
                ],
                "answer": "B",
                "explanation": "<p>$N - mg = ma \\implies 840 - 70(10) = 70a \\implies 840 - 700 = 140 = 70a \\implies a = +2.0\\text{ m/s}^2$ (upward).</p>"
            },
            {
                "id": "physc_force_q11",
                "topic": "Inclined Plane with Friction",
                "difficulty": "medium",
                "question": "<p>A block slides down a $30^\\circ$ ramp at constant velocity. What is the coefficient of kinetic friction $\\mu_k$ between the block and the ramp?</p>",
                "options": [
                    "$\\sin 30^\\circ = 0.50$",
                    "$\\cos 30^\\circ \\approx 0.87$",
                    "$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$",
                    "$0.25$",
                    "$1.0$"
                ],
                "answer": "C",
                "explanation": "<p>At constant velocity, acceleration is zero: $mg\\sin\\theta - f_k = 0 \\implies mg\\sin\\theta = \\mu_k mg\\cos\\theta \\implies \\mu_k = \\tan\\theta = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$.</p>"
            },
            {
                "id": "physc_force_q12",
                "topic": "Accelerating Frame of Reference",
                "difficulty": "hard",
                "question": "<p>A simple pendulum of mass $m$ hangs from the ceiling of a train accelerating horizontally with constant acceleration $a$. At what equilibrium angle $\\theta$ does the string hang relative to the vertical?</p>",
                "options": [
                    "$\\sin^{-1}(a/g)$",
                    "$\\cos^{-1}(a/g)$",
                    "$\\tan^{-1}(a/g)$",
                    "$\\tan^{-1}(g/a)$",
                    "$\\tan^{-1}(a/\\sqrt{g^2+a^2})$"
                ],
                "answer": "C",
                "explanation": "<p>In the accelerated frame, a fictitious inertial force $-ma$ acts horizontally. $T\\sin\\theta = ma$ and $T\\cos\\theta = mg$. Dividing gives $\\tan\\theta = \\frac{a}{g} \\implies \\theta = \\tan^{-1}(a/g)$.</p>"
            },
            {
                "id": "physc_force_q13",
                "topic": "Connected Blocks on Horizontal Plane",
                "difficulty": "medium",
                "question": "<p>Three blocks $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, and $m_3 = 3\\text{ kg}$ are in contact on a frictionless table. A force $F = 18\\text{ N}$ pushes horizontally on $m_1$. What is the contact force between $m_2$ and $m_3$?</p>",
                "options": [
                    "$3\\text{ N}$",
                    "$6\\text{ N}$",
                    "$9\\text{ N}$",
                    "$12\\text{ N}$",
                    "$15\\text{ N}$"
                ],
                "answer": "C",
                "explanation": "<p>Total acceleration $a = \\frac{F}{m_1+m_2+m_3} = \\frac{18}{1+2+3} = 3\\text{ m/s}^2$. The force accelerating $m_3$ alone is $F_{23} = m_3 a = 3(3) = 9\\text{ N}$.</p>"
            },
            {
                "id": "physc_force_q14",
                "topic": "Centripetal Tension on String",
                "difficulty": "medium",
                "question": "<p>A $0.5\\text{ kg}$ stone is whirled in a vertical circle of radius $R = 1.0\\text{ m}$ on a string. If the speed at the top of the circle is $v = 4.0\\text{ m/s}$ and $g = 10\\text{ m/s}^2$, what is the tension in the string at the top?</p>",
                "options": [
                    "$3.0\\text{ N}$",
                    "$5.0\\text{ N}$",
                    "$8.0\\text{ N}$",
                    "$13.0\\text{ N}$",
                    "$18.0\\text{ N}$"
                ],
                "answer": "A",
                "explanation": "<p>At the top: $T + mg = \\frac{mv^2}{R} \\implies T = \\frac{mv^2}{R} - mg = \\frac{0.5(16)}{1.0} - 0.5(10) = 8.0 - 5.0 = 3.0\\text{ N}$.</p>"
            },
            {
                "id": "physc_force_q15",
                "topic": "Banked Highway Curve",
                "difficulty": "hard",
                "question": "<p>A highway curve of radius $R = 200\\text{ m}$ is banked at an angle $\\theta = 45^\\circ$. Taking $g = 10\\text{ m/s}^2$, at what speed can a car navigate the curve without relying on friction?</p>",
                "options": [
                    "$\\sqrt{200}\\text{ m/s}$",
                    "$20\\text{ m/s}$",
                    "$\\sqrt{2000}\\text{ m/s} \\approx 44.7\\text{ m/s}$",
                    "$50\\text{ m/s}$",
                    "$100\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "<p>$v = \\sqrt{R g \\tan\\theta} = \\sqrt{200 \\times 10 \\times \\tan 45^\\circ} = \\sqrt{2000 \\times 1} = \\sqrt{2000} \\approx 44.7\\text{ m/s}$.</p>"
            }
        ]
    }
};
