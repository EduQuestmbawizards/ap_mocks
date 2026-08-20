// Specific Question Bank for Test: ap-topic-physc-rotation
const AP_TEST_DATA = {
    "ap-topic-physc-rotation": {
        "id": "ap-topic-physc-rotation",
        "title": "AP Physics C: Rotational Inertia, Torque & Angular Momentum",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Rotational Dynamics",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics C: Mechanics",
        "topic": "Rotational Dynamics",
        "questions": [
            {
                "id": "ap-topic-physc-rotation_q1",
                "topic": "Rotational Dynamics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> All of the objects mentioned in the choices below have the same total mass and length. Which has the greatest rotational inertia about its midpoint?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0145-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>a very light rod with heavy balls attached at either end</p>",
                    "<p>a uniform rod</p>",
                    "<p>a nonuniform rod, with the linear density increasing from one end to the other</p>",
                    "<p>a nonuniform rod, with the linear density increasing from the middle to the ends</p>",
                    "<p>a very light rod with heavy balls attached near the midpoint</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>1.</strong> <strong>A—</strong>The farther the mass from the midpoint, the larger its contribution to the rotational inertia. In choice A the mass is as far as possible from the midpoint; because all items have the same mass, A must have the largest <em>I.</em></p>"
            },
            {
                "id": "ap-topic-physc-rotation_q2",
                "topic": "Rotational Dynamics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> A pool ball is struck at one end of the table; it moves at constant speed to the far end of the table. A camera is mounted at the side pocket at the table’s midpoint, as shown. From the camera’s point of view, the pool ball travels from right to left. At which point in its motion does the ball have the greatest angular momentum about the camera’s position?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0145-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>when the ball was first struck</p>",
                    "<p>at the midpoint of the table</p>",
                    "<p>the angular momentum is the same throughout the motion</p>",
                    "<p>at the far end of the table</p>",
                    "<p>one-quarter of the way across the table, and then again three-quarters of the way across the table</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>C—</strong>The angular momentum of a point particle moving in a straight line about a position near the particle is <em>mvr,</em> where $r$ is the distance of closest approach. This value is constant as long as the particle keeps going in a straight line, which our pool ball does.</p>"
            },
            {
                "id": "ap-topic-physc-rotation_q3",
                "topic": "Rotational Dynamics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> A ladder of length $L$ leans against a wall at an angle of $\\theta$ from the horizontal, as shown earlier. The normal force <em>$F_{N}$</em> applied from the ground on the ladder applies what torque about the ladder’s center of mass?</p>",
                "options": [
                    "<p><em>$F_{N}$</em>·($L$/2)</p>",
                    "<p><em>$F_{N}$</em>·$L$ cos $\\theta$</p>",
                    "<p><em>$F_{N}$</em>·$L$ sin $\\theta$</p>",
                    "<p><em>$F_{N}$</em>·($L$/2) cos $\\theta$</p>",
                    "<p><em>$F_{N}$</em>·($L$/2) sin $\\theta$</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>D—</strong>Torque is force times the distance to the fulcrum. The force in question is <em>$F_{N}$</em>, and acts straight up at the base of the ladder. The distance used is the distance <em>perpendicular</em> to the normal force; this must be ($L$/2) cos $\\theta$, as shown below:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0147-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
            },
            {
                "id": "ap-topic-physc-rotation_q4",
                "topic": "Rotational Dynamics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> The front wheel on an ancient bicycle has a radius of 0.5 m. It moves with angular velocity given by the function $\\omega$($t$) = 2 + 4$t^{2}$, where $t$ is in seconds. About how far does the bicycle move between $t$ = 2 and $t$ = 3 seconds?</p><h4 class=\"h4\">Free Response:</h4><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0146-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>36 m</p>",
                    "<p>27 m</p>",
                    "<p>21 m</p>",
                    "<p>14 m</p>",
                    "<p>7 m</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong>4.</strong> <strong>D—</strong>The angular position function is given by the integral of the angular velocity function with respect to time. The limits on the integral are 2 and 3 seconds:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0147-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">this evaluates to approximately 27 radians. Using $x$ = <em>rθ</em>, the distance traveled is closest to 14 m.</p>"
            },
            {
                "id": "ap-topic-physc-rotation_q5",
                "topic": "Rotational Dynamics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> A stick of mass $M$ and length $L$ is pivoted at one end. A small mass <em>m &lt;&lt; M</em> is attached to the right-hand end of the stick. The stick is held horizontally and released from rest.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0146-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>Given that the rotational inertia of a uniform rod pivoted around one end is (1/3)<em>ML</em><sup>2</sup>, determine the rotational inertia of the described contraption.</p>",
                    "<p>Calculate the angular velocity of the contraption when it reaches a vertical position.</p>",
                    "<p>Calculate the linear velocity of the small mass $m$ when it is at its lowest position.</p>",
                    "<p>The figure below represents the stick at its lowest position. On this figure, draw a vector to represent the net force on the rod’s center of mass at this point. Justify your answer.</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>5.</strong> (a) The rotational inertia of the entire contraption is the sum of the moments of inertia for each part. $I$ for the rod is given; $I$ for a point mass a distance $L$ from the pivot is <em>mL</em><sup>2</sup>. So, $I_{total}$ = (1/3)<em>ML</em><sup>2</sup> + <em>mL</em><sup>2</sup>. Be sure to differentiate between $M$ and $m$.</p><p class=\"alphabr\">(b) Rotational kinematics won’t work here because angular acceleration isn’t constant. We must use energy.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0147-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Define $U$ = 0 at the bottom of the contraption when it hangs vertically. Then, $U_{2}$ is only caused by the rod’s mass, which is concentrated $L$/2 above the zero point, so $U_{2}$ = <em>MgL</em>/2. $U_{1}$ is due to all of the mass, concentrated $L$ above the zero point: $U_{1}$ = ($M +m$)<em>gL</em>. $K_{1}$ = 0, and $K_{2}$ is unknown.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0147-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Plug in $I$ from part ($a$) and solve for $\\omega$ to get</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0147-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabr\">(c) Just use $v$ = <em>rω</em>. Here, $r = L$ because the center of rotation is $L$ away from the mass.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/e0147-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabr\">(d) At this position, the mass is instantaneously in uniform circular motion. So, acceleration (and therefore net force) must be centripetal. Net force is straight up, toward the center of rotation.</p>"
            },
            {
                "id": "physc_rot_q6",
                "topic": "Rotational Work-Energy Theorem",
                "difficulty": "medium",
                "question": "<p>A flywheel with moment of inertia $I = 2.0\\text{ kg}\\cdot\\text{m}^2$ is accelerated from rest by a constant torque $\\tau = 6.0\\text{ N}\\cdot\\text{m}$ through $4.0\\text{ radians}$. What is the final angular speed $\\omega$?</p>",
                "options": [
                    "$\\sqrt{12}\\text{ rad/s}$",
                    "$4.9\\text{ rad/s}$",
                    "$\\sqrt{24}\\text{ rad/s} \\approx 4.9\\text{ rad/s}$",
                    "$6.0\\text{ rad/s}$",
                    "$12.0\\text{ rad/s}$"
                ],
                "answer": "C",
                "explanation": "<p>$W = \\tau \\Delta\\theta = 6.0(4.0) = 24.0\\text{ J}$. $\\frac{1}{2}I\\omega^2 = W \\implies \\frac{1}{2}(2.0)\\omega^2 = 24.0 \\implies \\omega = \\sqrt{24} \\approx 4.9\\text{ rad/s}$.</p>"
            },
            {
                "id": "physc_rot_q7",
                "topic": "Angular Momentum Vector Cross Product",
                "difficulty": "medium",
                "question": "<p>A particle of mass $m = 2.0\\text{ kg}$ is at position $\\vec{r} = (3\\hat{i} + 4\\hat{j})\\text{ m}$ with velocity $\\vec{v} = (5\\hat{i})\\text{ m/s}$. What is the angular momentum $\\vec{L}$ of the particle about the origin?</p>",
                "options": [
                    "$(40\\hat{k})\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
                    "$(-40\\hat{k})\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
                    "$(30\\hat{k})\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
                    "$(-30\\hat{k})\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
                    "$\\vec{0}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\vec{L} = \\vec{r} \\times \\vec{p} = (3\\hat{i} + 4\\hat{j}) \\times 2(5\\hat{i}) = (3\\hat{i} + 4\\hat{j}) \\times (10\\hat{i}) = -40\\hat{k}\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.</p>"
            },
            {
                "id": "physc_rot_q8",
                "topic": "Rolling Cylinder vs Hoop Race",
                "difficulty": "easy",
                "question": "<p>A solid cylinder ($I = \\frac{1}{2}MR^2$) and a thin cylindrical hoop ($I = MR^2$) of identical mass and radius are released from rest at the top of an incline. Which reaches the bottom first?</p>",
                "options": [
                    "The solid cylinder",
                    "The hoop",
                    "Both reach the bottom at the exact same time",
                    "Depends on the mass",
                    "Depends on the radius"
                ],
                "answer": "A",
                "explanation": "<p>The solid cylinder has smaller rotational inertia ($c = 1/2 < 1$), so a greater fraction of potential energy becomes translational kinetic energy, giving greater acceleration $a = \\frac{g\\sin\\theta}{1+c}$.</p>"
            },
            {
                "id": "physc_rot_q9",
                "topic": "Torque and Angular Acceleration Integration",
                "difficulty": "hard",
                "question": "<p>A disk of moment of inertia $I$ experiences a time-dependent torque $\\tau(t) = \\gamma t$. If it starts from rest at $t = 0$, what is its angular displacement $\\theta(t)$ at time $t$?</p>",
                "options": [
                    "$\\frac{\\gamma t^2}{2I}$",
                    "$\\frac{\\gamma t^3}{6I}$",
                    "$\\frac{\\gamma t^3}{3I}$",
                    "$\\frac{\\gamma t^2}{I}$",
                    "$\\frac{\\gamma t}{I}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\alpha(t) = \\frac{\\gamma t}{I} \\implies \\omega(t) = \\frac{\\gamma t^2}{2I} \\implies \\theta(t) = \\frac{\\gamma t^3}{6I}$.</p>"
            },
            {
                "id": "physc_rot_q10",
                "topic": "Collision with Pivoted Rod",
                "difficulty": "hard",
                "question": "<p>A clay ball of mass $m$ moving horizontally at speed $v$ strikes and sticks to the bottom tip of a stationary uniform vertical rod of mass $M$ and length $L$ pivoted at the top ($I_{\\text{rod}} = \\frac{1}{3}ML^2$). What is the angular speed $\\omega$ of the system immediately after collision?</p>",
                "options": [
                    "$\\frac{mv}{(M/3 + m)L}$",
                    "$\\frac{mv}{(M + m)L}$",
                    "$\\frac{3mv}{(M + 3m)L}$",
                    "$\\frac{mv}{ML}$",
                    "$\\frac{2mv}{(M + m)L}$"
                ],
                "answer": "A",
                "explanation": "<p>Conservation of angular momentum about pivot: $L_i = m v L$. Total inertia: $I_{\\text{tot}} = \\frac{1}{3}ML^2 + mL^2 = (M/3 + m)L^2$. Therefore $\\omega = \\frac{mvL}{(M/3 + m)L^2} = \\frac{mv}{(M/3 + m)L}$.</p>"
            },
            {
                "id": "physc_rot_q11",
                "topic": "Precession of a Gyroscope",
                "difficulty": "hard",
                "question": "<p>A gyroscope spinning with angular momentum $L$ about its axis is supported at distance $d$ from its center of mass ($Mg$). What is the angular precession frequency $\\Omega_p$?</p>",
                "options": [
                    "$\\Omega_p = \\frac{Mgd}{L}$",
                    "$\\Omega_p = \\frac{L}{Mgd}$",
                    "$\\Omega_p = \\frac{Mg}{L d}$",
                    "$\\Omega_p = \\sqrt{\\frac{Mgd}{L}}$",
                    "$\\Omega_p = \\frac{Mgd^2}{L}$"
                ],
                "answer": "A",
                "explanation": "<p>Torque is $\\tau = Mgd$. Precession frequency is $\\Omega_p = \\frac{\\tau}{L} = \\frac{Mgd}{L}$.</p>"
            },
            {
                "id": "physc_rot_q12",
                "topic": "Rotational Kinetic Energy",
                "difficulty": "easy",
                "question": "<p>A solid sphere of mass $M$ and radius $R$ rolls without slipping with center of mass speed $v$. What percentage of its total kinetic energy is rotational?</p>",
                "options": [
                    "$20\\%$",
                    "$28.6\\%$",
                    "$50\\%$",
                    "$71.4\\%$",
                    "$100\\%$"
                ],
                "answer": "B",
                "explanation": "<p>$K_{\\text{trans}} = \\frac{1}{2}Mv^2$, $K_{\\text{rot}} = \\frac{1}{2}\\left(\\frac{2}{5}MR^2\\right)(v/R)^2 = \\frac{1}{5}Mv^2$. Total $K = \\frac{7}{10}Mv^2$. Fraction = $\\frac{1/5}{7/10} = \\frac{2}{7} \\approx 28.57\\%$.</p>"
            },
            {
                "id": "physc_rot_q13",
                "topic": "Moment of Inertia of Flat Plate",
                "difficulty": "medium",
                "question": "<p>What is the moment of inertia of a uniform rectangular plate of mass $M$, width $a$, and length $b$ about an axis perpendicular to the plate through its center of mass?</p>",
                "options": [
                    "$\\frac{1}{12}M(a^2 + b^2)$",
                    "$\\frac{1}{6}M(a^2 + b^2)$",
                    "$\\frac{1}{3}M(a^2 + b^2)$",
                    "$\\frac{1}{4}M(a^2 + b^2)$",
                    "$\\frac{1}{12}M ab$"
                ],
                "answer": "A",
                "explanation": "<p>By perpendicular axis theorem: $I_z = I_x + I_y = \\frac{1}{12}Mb^2 + \\frac{1}{12}Ma^2 = \\frac{1}{12}M(a^2 + b^2)$.</p>"
            },
            {
                "id": "physc_rot_q14",
                "topic": "Tension Difference Across Massive Pulley",
                "difficulty": "medium",
                "question": "<p>Why is the tension in a string on two sides of a pulley NOT equal when the pulley accelerates angularly?</p>",
                "options": [
                    "Because friction between string and pulley is zero",
                    "Because a net torque $\\tau_{\\text{net}} = (T_1 - T_2)R = I\\alpha$ is required to accelerate the pulley's rotational inertia",
                    "Because gravity pulls down on the string",
                    "Because the string stretches elastically",
                    "The tension is always equal on both sides"
                ],
                "answer": "B",
                "explanation": "<p>A massive pulley with rotational inertia $I$ requires a net torque $(T_1 - T_2)R = I\\alpha$ to have angular acceleration.</p>"
            },
            {
                "id": "physc_rot_q15",
                "topic": "Angular Momentum Conservation for Point Particle",
                "difficulty": "medium",
                "question": "<p>A puck on a frictionless table is attached to a string passing through a hole in the center. When the puck orbits at radius $r_0$ with speed $v_0$, the string is pulled down to reduce the radius to $r_0/2$. What is the new speed of the puck?</p>",
                "options": [
                    "$v_0/2$",
                    "$v_0$",
                    "$\\sqrt{2}v_0$",
                    "$2v_0$",
                    "$4v_0$"
                ],
                "answer": "D",
                "explanation": "<p>Tension exerts no torque about the hole, so angular momentum is conserved: $m v_0 r_0 = m v_f (r_0/2) \\implies v_f = 2v_0$.</p>"
            }
        ]
    }
};
