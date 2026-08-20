// Specific Question Bank for Test: ap-topic-physc-kinematics
const AP_TEST_DATA = {
    "ap-topic-physc-kinematics": {
        "id": "ap-topic-physc-kinematics",
        "title": "AP Physics C: Kinematics & 1D/2D Motion",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Kinematics",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics C: Mechanics",
        "topic": "Kinematics",
        "questions": [
            {
                "id": "ap-topic-physc-kinematics_q1",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> A firework is shot straight up in the air with an initial speed of 50 m/s. What is the maximum height it reaches?</p>",
                "options": [
                    "<p>12.5 m</p>",
                    "<p>25 m</p>",
                    "<p>125 m</p>",
                    "<p>250 m</p>",
                    "<p>1250 m</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>1.</strong> Call “up” the positive direction, and set up a chart. We know that <em>$v_{f}$</em> = 0 because, at its maximum height, the firework stops for an instant.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0092-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Solve for Δ$x$ using equation: <img alt=\"Images\" class=\"q-img\" src=\"images/e0092-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. The answer is (C) 125 m, or about skyscraper height.</p>"
            },
            {
                "id": "ap-topic-physc-kinematics_q2",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> On a strange, airless planet, a ball is thrown downward from a height of 17 m. The ball initially travels at 15 m/s. If the ball hits the ground in 1 s, what is this planet’s gravitational acceleration?</p>",
                "options": [
                    "<p>2 m/$s^{2}$</p>",
                    "<p>4 m/$s^{2}$</p>",
                    "<p>6 m/$s^{2}$</p>",
                    "<p>8 m/$s^{2}$</p>",
                    "<p>10 m/$s^{2}$</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>2.</strong> Call “down” positive, and set up a chart:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0092-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Plug straight into <img alt=\"Images\" class=\"q-img\" src=\"images/e0092-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> and you have the answer. This is NOT a quadratic, because this time $t$ is a known quantity. The answer is (B) 4 m/$s^{2}$, less than half of Earth’s gravitational field, but close to Mars’s gravitational field.</p>"
            },
            {
                "id": "ap-topic-physc-kinematics_q3",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> An object moves such that its position is given by the function $x$($t$) = 3$t^{2}$ − 4$t$ + 1. The units of $t$ are seconds, and the units of $x$ are meters. After 6 s, how fast and in what direction is this object moving?</p><h4 class=\"h4\">Free Response:</h4>",
                "options": [
                    "<p>32 m/s in the original direction of motion</p>",
                    "<p>16 m/s in the original direction of motion</p>",
                    "<p>0 m/s</p>",
                    "<p>16 m/s opposite the original direction of motion</p>",
                    "<p>32 m/s opposite the original direction of motion</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>3.</strong> First find the velocity function by taking the derivative of the position function: $v$($t$) = 6$t$ − 4. Now plug in $t$ = 6 to get the velocity after 6 s; you get 32 m/s. Note that this velocity is positive. Was the object originally moving in the positive direction? Plug in $t$ = 0 to the velocity formula to find out . . . you find the initial velocity to be −4 m/s, so the object was originally moving in the negative direction, and has reversed direction after 6 s. The answer is (E).</p>"
            },
            {
                "id": "ap-topic-physc-kinematics_q4",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> An airplane attempts to drop a bomb on a target. When the bomb is released, the plane is flying upward at an angle of 30° above the horizontal at a speed of 200 m/s, as shown below. At the point of release, the plane’s altitude is 2.0 km. The bomb hits the target.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0091-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>Determine the magnitude and direction of the vertical component of the bomb’s velocity at the point of release.</p>",
                    "<p>Determine the magnitude and direction of the horizontal component of the bomb’s velocity at the point when the bomb contacts the target.</p>",
                    "<p>Determine how much time it takes for the bomb to hit the target after it is released.</p>",
                    "<p>At the point of release, what angle below the horizontal does the pilot have to look in order to see the target?</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"quesal\"><strong>4.</strong> (a) Because the angle 30° is measured to the horizontal, the magnitude of the vertical component of the velocity vector is just (200 m/s) (sin 30°), which is 100 m/s. The direction is “up,” because the plane is flying up.</p><p class=\"alphabr1\">(b) The horizontal velocity of a projectile is constant. Thus, the horizontal velocity when the bomb hits the target is the same as the horizontal velocity at release, or (200 m/s)(cos 30°) = 170 m/s, to the right.</p><p class=\"alphabr1\">(c) Let’s call “up” the positive direction. We can solve this projectile motion problem by our table method.</p><p class=\"alphabrnt\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0092-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabrn\">Don’t forget to convert to meters, and be careful about directions in the vertical chart.</p><p class=\"alphabrni\">The horizontal chart cannot be solved for time; however, the vertical chart can. Though you could use the quadratic formula or your fancy calculator to solve <img alt=\"Images\" class=\"q-img\" src=\"images/e0092-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>, it’s much easier to start with, <img alt=\"Images\" class=\"q-img\" src=\"images/e0092-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> ($x$ − $x_{0}$), to find that <em>$v_{f}$</em> vertically is −220 m/s (this velocity must have a negative sign because the bomb is moving down when it hits the ground). Then, plug in to (<em>$v_{f}$</em> = $v_{0}$ + <em>at</em>) to find that the bomb took 32 s to hit the ground.</p><p class=\"alphabr1\">(d) Start by finding how far the bomb went horizontally. Because horizontal velocity is constant, we can say distance = velocity × time. Plugging in values from the table, distance = (170 m/s)(32 s) = 5400 m. Okay, now look at a triangle:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0092-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabrn\">By geometry, tan $\\theta$ = 2000 m/5400 m.</p><p class=\"alphabrn\">The pilot has to look down at an angle of 20°.</p>"
            },
            {
                "id": "physc_kin_q5",
                "topic": "1D Kinematics with Derivatives",
                "difficulty": "medium",
                "question": "<p>A particle moves along the $x$-axis with acceleration $a(t) = 12t - 4\\text{ m/s}^2$. If $v(0) = 5\\text{ m/s}$ and $x(0) = 2\\text{ m}$, what is the position of the particle at $t = 2\\text{ s}$?</p>",
                "options": [
                    "$16\\text{ m}$",
                    "$20\\text{ m}$",
                    "$24\\text{ m}$",
                    "$28\\text{ m}$",
                    "$32\\text{ m}$"
                ],
                "answer": "B",
                "explanation": "<p>$v(t) = \\int (12t - 4)\\,dt = 6t^2 - 4t + 5\\text{ m/s}$. Position $x(t) = \\int (6t^2 - 4t + 5)\\,dt = 2t^3 - 2t^2 + 5t + 2$. At $t = 2\\text{ s}$: $x(2) = 2(8) - 2(4) + 5(2) + 2 = 16 - 8 + 10 + 2 = 20\\text{ m}$.</p>"
            },
            {
                "id": "physc_kin_q6",
                "topic": "2D Projectile Calculus",
                "difficulty": "medium",
                "question": "<p>A ball is launched from a cliff of height $H = 45\\text{ m}$ with initial horizontal velocity $v_{0x} = 20\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, what is the speed of the ball just before impact with the ground?</p>",
                "options": [
                    "$20\\text{ m/s}$",
                    "$30\\text{ m/s}$",
                    "$\\sqrt{1300}\\text{ m/s} \\approx 36.1\\text{ m/s}$",
                    "$40\\text{ m/s}$",
                    "$50\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "<p>Time to fall: $t = \\sqrt{2H/g} = \\sqrt{90/10} = 3\\text{ s}$. Vertical velocity: $v_y = -gt = -30\\text{ m/s}$. Total speed $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{20^2 + (-30)^2} = \\sqrt{400 + 900} = \\sqrt{1300} \\approx 36.1\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_kin_q7",
                "topic": "Velocity-Dependent Acceleration",
                "difficulty": "hard",
                "question": "<p>An object moves along a straight line with acceleration $a(v) = $-k$ v^2$, where $k$ is a positive constant and $v > 0$. If the initial velocity is $v_0$ at $t = 0$, what is the velocity $v(t)$ as a function of time?</p>",
                "options": [
                    "$v(t) = v_0 e^{-kt}$",
                    "$v(t) = \\frac{v_0}{1 + k v_0 t}$",
                    "$v(t) = v_0 - kt^2$",
                    "$v(t) = \\frac{v_0}{\\sqrt{1 + 2kt}}$",
                    "$v(t) = v_0(1 - kt)$"
                ],
                "answer": "B",
                "explanation": "<p>$\\frac{dv}{dt} = $-k$ v^2 \\implies$\\int_{{v_0}}^{v} v^{-2}$,dv = $-k \\int_{0}^{t} dt $implies -\\left[\\frac{1}{v}\\right]_{v_0}^v = -kt \\implies \\frac{1}{v} - \\frac{1}{v_0} = kt \\implies v(t) = \\frac{v_0}{1 + k v_0 t}$.</p>"
            },
            {
                "id": "physc_kin_q8",
                "topic": "Relative Motion & Vectors",
                "difficulty": "medium",
                "question": "<p>A boat moves relative to water with speed $5.0\\text{ m/s}$ directly across a river flowing east at $3.0\\text{ m/s}$. What is the magnitude of the boat's velocity relative to the riverbank?</p>",
                "options": [
                    "$2.0\\text{ m/s}$",
                    "$4.0\\text{ m/s}$",
                    "$5.8\\text{ m/s}$",
                    "$8.0\\text{ m/s}$",
                    "$15.0\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "<p>$\\vec{v}_{b/g} = \\vec{v}_{b/w} + \\vec{v}_{w/g}$. Since they are perpendicular, $v_{b/g} = \\sqrt{5.0^2 + 3.0^2} = \\sqrt{25 + 9} = \\sqrt{34} \\approx 5.83\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_kin_q9",
                "topic": "Tangential & Centripetal Acceleration",
                "difficulty": "medium",
                "question": "<p>A race car travels around a circular track of radius $R = 100\\text{ m}$. At a certain instant, its speed is $20\\text{ m/s}$ and increasing at a rate of $3.0\\text{ m/s}^2$. What is the magnitude of the total acceleration vector?</p>",
                "options": [
                    "$3.0\\text{ m/s}^2$",
                    "$4.0\\text{ m/s}^2$",
                    "$5.0\\text{ m/s}^2$",
                    "$7.0\\text{ m/s}^2$",
                    "$25.0\\text{ m/s}^2$"
                ],
                "answer": "C",
                "explanation": "<p>Centripetal acceleration $a_c = \\frac{v^2}{R} = \\frac{400}{100} = 4.0\\text{ m/s}^2$. Tangential acceleration $a_t = 3.0\\text{ m/s}^2$. Total acceleration $a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{4^2 + 3^2} = 5.0\\text{ m/s}^2$.</p>"
            },
            {
                "id": "physc_kin_q10",
                "topic": "Non-Uniform 2D Trajectory",
                "difficulty": "hard",
                "question": "<p>A particle's position vector is given by $\\vec{r}(t) = (3t^2)\\hat{i} + (2t^3)\\hat{j}\\text{ m}$. What is the magnitude of the acceleration vector at $t = 1\\text{ s}$?</p>",
                "options": [
                    "$6\\text{ m/s}^2$",
                    "$12\\text{ m/s}^2$",
                    "$\\sqrt{180}\\text{ m/s}^2 \\approx 13.4\\text{ m/s}^2$",
                    "$18\\text{ m/s}^2$",
                    "$24\\text{ m/s}^2$"
                ],
                "answer": "C",
                "explanation": "<p>$\\vec{v}(t) = (6t)\\hat{i} + (6t^2)\\hat{j}$. Acceleration $\\vec{a}(t) = (6)\\hat{i} + (12t)\\hat{j}$. At $t = 1\\text{ s}$, $\\vec{a}(1) = 6\\hat{i} + 12\\hat{j}$. Magnitude $a = \\sqrt{6^2 + 12^2} = \\sqrt{36 + 144} = \\sqrt{180} \\approx 13.42\\text{ m/s}^2$.</p>"
            },
            {
                "id": "physc_kin_q11",
                "topic": "Average vs Instantaneous Speed",
                "difficulty": "easy",
                "question": "<p>A vehicle travels the first half of a distance $D$ at constant speed $v_1 = 40\\text{ km/h}$ and the second half at constant speed $v_2 = 60\\text{ km/h}$. What is the average speed of the vehicle over the entire journey?</p>",
                "options": [
                    "$48\\text{ km/h}$",
                    "$50\\text{ km/h}$",
                    "$52\\text{ km/h}$",
                    "$54\\text{ km/h}$",
                    "$56\\text{ km/h}$"
                ],
                "answer": "A",
                "explanation": "<p>Average speed is $v_{\\text{avg}} = \\frac{D}{t_1 + t_2} = \\frac{D}{\\frac{D/2}{v_1} + \\frac{D/2}{v_2}} = \\frac{2v_1 v_2}{v_1 + v_2} = \\frac{2(40)(60)}{40 + 60} = \\frac{4800}{100} = 48\\text{ km/h}$.</p>"
            },
            {
                "id": "physc_kin_q12",
                "topic": "Projectile Angle for Maximum Range",
                "difficulty": "medium",
                "question": "<p>On level ground, a projectile launched at angle $\\theta_1 = 30^\\circ$ travels horizontal range $R_1$. Which other launch angle $\\theta_2$ yields the exact same horizontal range for the same initial speed?</p>",
                "options": [
                    "$15^\\circ$",
                    "$45^\\circ$",
                    "$60^\\circ$",
                    "$75^\\circ$",
                    "No other angle"
                ],
                "answer": "C",
                "explanation": "<p>Range on level ground is $R = \\frac{v_0^2\\sin(2\\theta)}{g}$. Complementary angles $\\theta$ and $90^\\circ - \\theta$ produce identical ranges. For $30^\\circ$, $90^\\circ - 30^\\circ = 60^\\circ$.</p>"
            },
            {
                "id": "physc_kin_q13",
                "topic": "Jerk (Time Derivative of Acceleration)",
                "difficulty": "hard",
                "question": "<p>The jerk $j(t) = \\frac{da}{dt}$ of a moving robot arm is a constant $j_0 = 4.0\\text{ m/s}^3$. If the arm starts from rest with zero acceleration at $t = 0$, what is its velocity at $t = 3.0\\text{ s}$?</p>",
                "options": [
                    "$6.0\\text{ m/s}$",
                    "$12.0\\text{ m/s}$",
                    "$18.0\\text{ m/s}$",
                    "$24.0\\text{ m/s}$",
                    "$36.0\\text{ m/s}$"
                ],
                "answer": "C",
                "explanation": "<p>$a(t) = \\int j_0\\,dt = j_0 t = 4.0t\\text{ m/s}^2$. Velocity $v(t) = \\int 4.0t\\,dt = 2.0t^2\\text{ m/s}$. At $t = 3.0\\text{ s}$, $v(3) = 2.0(3^2) = 18.0\\text{ m/s}$.</p>"
            },
            {
                "id": "physc_kin_q14",
                "topic": "Stopping Distance vs Speed",
                "difficulty": "medium",
                "question": "<p>A car traveling at speed $v$ skids to a complete stop over a distance $d$ under constant braking deceleration. If the car's initial speed is tripled to $3v$, what is the new stopping distance?</p>",
                "options": [
                    "$\\sqrt{3}d$",
                    "$3d$",
                    "$6d$",
                    "$9d$",
                    "$27d$"
                ],
                "answer": "D",
                "explanation": "<p>From $v_f^2 = v_i^2 + 2ad \\implies d = \\frac{v_i^2}{2|a|}$. Stopping distance is proportional to speed squared ($d \\propto v^2$). Tripling speed increases stopping distance by $3^2 = 9$ times ($9d$).</p>"
            },
            {
                "id": "physc_kin_q15",
                "topic": "Curvilinear Motion Radius of Curvature",
                "difficulty": "hard",
                "question": "<p>A projectile is launched with speed $v_0$ at angle $\\theta$ above the horizontal. At the top of its trajectory, what is the radius of curvature $\\rho$ of the path?</p>",
                "options": [
                    "$\\frac{v_0^2}{g}$",
                    "$\\frac{v_0^2\\cos^2\\theta}{g}$",
                    "$\\frac{v_0^2\\sin^2\\theta}{g}$",
                    "$\\frac{v_0^2\\cos\\theta}{g}$",
                    "$\\frac{v_0^2}{g\\cos^2\\theta}$"
                ],
                "answer": "B",
                "explanation": "<p>At maximum height, the velocity is entirely horizontal with magnitude $v = v_0\\cos\\theta$, and the perpendicular acceleration is the downward gravity $a_n = g$. Using $a_n = \\frac{v^2}{\\rho} \\implies \\rho = \\frac{(v_0\\cos\\theta)^2}{g} = \\frac{v_0^2\\cos^2\\theta}{g}$.</p>"
            }
        ]
    }
};
