// Specific Question Bank for Test: ap-mock-physc-mech-2
const AP_TEST_DATA = {
    "ap-mock-physc-mech-2": {
        "id": "ap-mock-physc-mech-2",
        "title": "AP Physics C: Mechanics Full Practice Exam 2",
        "subtitle": "Official 38-Question Simulation: 35 Multiple-Choice + 3 Free-Response with Analytical Scoring Rubrics",
        "timeLimitMinutes": 90,
        "testType": "Full Mock",
        "subject": "AP Physics C: Mechanics",
        "topic": "Mechanics Practice Exam 2",
        "questions": [
            {
                "id": "ap-mock-physc-mech-2_mc_1",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0257-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindentt\"><strong>Time:</strong> 45 minutes. You may refer to the constants sheet and the equation sheet, both of which are found in the appendix. You may use a calculator.</p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_1\" id=\"ch19qa5_1\">1.</a></strong> A jet airplane has mass 300,000 kg. In order to take off, it accelerates uniformly over a horizontal distance of 3000 m, reaching a top speed of 80 m/s. Neglecting drag forces, which of the following is closest to the average horizontal force provided by the airplane’s engines?</p>",
                "options": [
                    "<p>10<sup>6</sup> N</p>",
                    "<p>10<sup>4</sup> N</p>",
                    "<p>10<sup>3</sup> N</p>",
                    "<p>10<sup>5</sup> N</p>",
                    "<p>10<sup>0</sup> N</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_1\" id=\"rch19qa5_1\">1.</a></strong> <strong>D</strong>—The airplane’s acceleration can be found from kinematics, using <img alt=\"Images\" class=\"q-img\" src=\"images/e0281-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> with $v_{0}$ = 0. This gives $a$ = (80 m/s)<sup>2</sup>/2(3000 m) = 1.1 m/s/s. The net force is <em>ma</em>, so multiply by the 300,000-kg mass to get about 310,000 N. That’s 3 × 10<sup>5</sup> N.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_2",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_2\" id=\"ch19qa5_2\">2.</a></strong> On a one-dimensional track, a large cart in motion collides with a small cart at rest. The carts bounce off each other. Which of the following is true about linear momentum and kinetic energy?</p>",
                "options": [
                    "<p>Momentum may or may not be conserved; kinetic energy may or may not be conserved.</p>",
                    "<p>Momentum must be conserved; kinetic energy must be conserved.</p>",
                    "<p>Momentum may or may not be conserved; kinetic energy must be conserved.</p>",
                    "<p>Momentum must be conserved; kinetic energy may or may not be conserved.</p>",
                    "<p>Momentum must be conserved; kinetic energy must not be conserved.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_2\" id=\"rch19qa5_2\">2.</a></strong> <strong>D—</strong>In collisions, momentum generally must be conserved because no net external force acts. But kinetic energy could be converted into internal energy in the collision. Without data to check or an explicit statement of an elastic collision, kinetic energy may or may not be conserved.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_3",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_3\" id=\"ch19qa5_3\">3.</a></strong> The escape velocity for a rocket from Earth’s surface is 11 km/s. What is the escape velocity for a rocket on the surface of a planet whose mass is the same as Earth’s but whose radius is half that of Earth?</p>",
                "options": [
                    "<p>2.8 km/s</p>",
                    "<p>6.5 km/s</p>",
                    "<p>7.8 km/s</p>",
                    "<p>11 km/s</p>",
                    "<p>15.4 km/s</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_3\" id=\"rch19qa5_3\">3.</a></strong> <strong>E</strong>—For an object of mass $m$ launched with escape velocity, its total mechanical energy at the surface of the planet is kinetic plus potential, or <img alt=\"Images\" class=\"q-img\" src=\"images/e0281-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. When the object gets very far from the planet, its kinetic energy is zero (because escape velocity is the <em>minimum</em> speed necessary to leave the planet) and its potential energy is also zero (by definition, any position a long way from the planet has zero potential energy). So set the previous expression equal to zero and solve for $v$ to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0281-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Now apply semi-quantitative reasoning—the numerator does not change, but the planet’s radius gets cut in half. The radius is in the denominator and under the square root, meaning the speed is multiplied by <img alt=\"Images\" class=\"q-img\" src=\"images/e0281-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Or, you can intuit that the gravitational field at the surface of the planet will be stronger because the planet’s radius is smaller. That would increase, not decrease, the escape velocity. Probably it’s easier the conceptual way.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_4",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0259-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_4\" id=\"ch19qa5_4\">4.</a></strong> A 1-kg block hangs from a string at rest. A person holds a spring scale attached vertically to the string, pulling upward so that the scale reads 10 N. What is the tension in the string?</p>",
                "options": [
                    "<p>19 N</p>",
                    "<p>9 N</p>",
                    "<p>0 N</p>",
                    "<p>10 N</p>",
                    "<p>20 N</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_4\" id=\"rch19qa5_4\">4.</a></strong> <strong>D</strong>—The block is in equilibrium, at rest. Thus the weight equals the tension, which is 10 N. The scale simply reads this tension. (If you wanted to do a free body diagram of the scale, it would include a 10-N tension pulling down, and the 10-N force of the hand pulling up.)</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_5",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0259-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_5\" id=\"ch19qa5_5\">5.</a></strong> Three blocks $A$, $B$, and $C$ are connected by taut light strings on a frictionless surface, as shown above. A rightward force $F$ = 24 N is applied to block $C$. Which of the following correctly ranks the accelerations $a_{A}$, $a_{B}$, and $a_{C}$ of each block?</p>",
                "options": [
                    "<p>$a_{A}$ &gt; $a_{B}$ &gt; $a_{C}$</p>",
                    "<p>$a_{C}$ &gt; $a_{B}$ &gt; $a_{A}$</p>",
                    "<p>$a_{A} = a_{B}$ &gt; $a_{C}$</p>",
                    "<p>$a_{A} = a_{B}$ = $a_{C}$</p>",
                    "<p>$a_{C}$ &gt; $a_{B} = a_{A}$</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_5\" id=\"rch19qa5_5\">5.</a></strong> <strong>D</strong>—The blocks are attached together. Acceleration is the change in speed every second. In 1 second, all the blocks must change speed by the same amount; if they didn’t, one of the blocks would become unattached. The objects experience different net forces because they are of different mass, but the accelerations must be the same.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_6",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_6\" id=\"ch19qa5_6\">6.</a></strong> A 250-g cart rolls to the right at 100 cm/s and collides with a 500-g cart, which is initially rolling left at 75 cm/s. The carts stick together. What is the speed of the carts right after they collide?</p>",
                "options": [
                    "<p>75 cm/s</p>",
                    "<p>83 cm/s</p>",
                    "<p>25 cm/s</p>",
                    "<p>17 cm/s</p>",
                    "<p>50 cm/s</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_6\" id=\"rch19qa5_6\">6.</a></strong> <strong>D</strong>—The total momentum before collision is (250 g)(100 m/s) = 25,000 g·cm/s to the right and (500 g)(75 cm) = 37,500 g·cm/s to the left. Subtracting, this gives 12,500 g·cm/s total momentum to the left. That’s the same momentum as after collision, by conservation. After collision, because the carts stick, the total momentum of 12,500 g·cm/s is the total mass of 750 g times the speed. Dividing, the speed is 17 cm/s.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_7",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_7\" id=\"ch19qa5_7\">7.</a></strong> An object of mass $m$ is constrained to move along the <em>x-</em>axis only. It experiences a potential energy function <img alt=\"Images\" class=\"q-img\" src=\"images/e0260-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> where $U$ is in joules and $x$ is in meters. Which of the following represents the net force $F$ on the object?</p>",
                "options": [
                    "<p>$b$ – <em>kx</em></p>",
                    "<p><em>kx</em> – $b$</p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0260-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0260-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><em>kx</em> $+b$</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_7\" id=\"rch19qa5_7\">7.</a></strong> <strong>A—</strong>Take the negative derivative of a potential energy function to get force. Here, the force is –<em>kx</em> $+b$.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_8",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0260-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_8\" id=\"ch19qa5_8\">8.</a></strong> Three objects, of mass 2 kg, 2 kg, and 4 kg, are arranged as shown in the diagram. Which of the following is closest to the <em>y-</em>coordinate of the three objects’ center of mass?</p>",
                "options": [
                    "<p>2.0 cm</p>",
                    "<p>3.5 cm</p>",
                    "<p>1.5 cm</p>",
                    "<p>0.5 cm</p>",
                    "<p>1.0 cm</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_8\" id=\"rch19qa5_8\">8.</a></strong> <strong>E—</strong>Ignore the $x$ direction entirely. In the $y$ direction, there’s 4 kg at $y$ = 0 and 4 kg at $y$ = 2 cm. These equal masses have a center of mass directly in between, at $y$ = 1 cm.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_9",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0260-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_9\" id=\"ch19qa5_9\">9.</a></strong> A block is released from rest at the top of a ramp on which friction is negligible. At the bottom of the ramp, the block encounters a rough, level surface on which the coefficient of kinetic friction with the block is 0.20. The block slides to rest after traveling 45 cm on the rough surface, as shown in the diagram. From what height vertically above the rough surface was the block released?</p>",
                "options": [
                    "<p>9 cm</p>",
                    "<p>22.5 cm</p>",
                    "<p>The answer cannot be determined without knowing the mass of the block.</p>",
                    "<p>225 cm</p>",
                    "<p>90 cm</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_9\" id=\"rch19qa5_9\">9.</a></strong> <strong>A—</strong>The energy conversion here is gravitational potential energy (<em>mgh</em>) to work done by friction (equal to friction force times distance, where friction force is mu times the normal force): <em>mgh</em> = <em>μmgd</em>. Solving, $h$ = <em>μd</em>. Here $\\mu$ is 0.20 and $d$ = 0.45 m. That’s 0.09 m, or 9 cm.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_10",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0260-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindentt\">Questions 10 and 11: A 0.20-kg object is attached to a spring, which hangs vertically. A motion detector placed underneath the object records the position-time data shown above.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_10\" id=\"ch19qa5_10\">10.</a></strong> At which of the following times is the object’s acceleration downward and at its maximum magnitude?</p>",
                "options": [
                    "<p>1.5 s</p>",
                    "<p>2.0 s</p>",
                    "<p>0.0 s</p>",
                    "<p>1.0 s</p>",
                    "<p>0.5 s</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_10\" id=\"rch19qa5_10\">10.</a></strong> <strong>D—</strong>The vertical axis of the graph indicates that up is the positive direction. The slope of this graph is velocity. When an object slows down, its acceleration is in the opposite direction of its motion; when an object speeds up, its acceleration is in the same direction as its motion. So we want a negative slope that gets steeper (meaning downward, increasing velocity) or a positive slope that gets shallower (meaning upward, decreasing velocity). That’s near the top of the peaks of the graph, like at $t$ = 1.0 s.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_11",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0260-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindentt\">Questions 10 and 11: A 0.20-kg object is attached to a spring, which hangs vertically. A motion detector placed underneath the object records the position-time data shown above.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_11\" id=\"ch19qa5_11\">11.</a></strong> What is the spring constant of the spring?</p>",
                "options": [
                    "<p>0.9 N/m</p>",
                    "<p>5.0 N/m</p>",
                    "<p>2.5 N/m</p>",
                    "<p>2.0 N/m</p>",
                    "<p>3.9 N/m</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_11\" id=\"rch19qa5_11\">11.</a></strong> <strong>D—</strong>The period of an object oscillating on a spring is <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. The graph shows the period of oscillation—the time for one complete cycle—to be 2.0 s. The mass is given as 0.20 kg. Plug into the equation earlier to get $k$ = 2.0 N/m.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_12",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_12\" id=\"ch19qa5_12\">12.</a></strong> Which of the following quantities, if any, is a scalar quantity?</p>",
                "options": [
                    "<p>A velocity of <em>−</em>2.0 m/s</p>",
                    "<p>A potential energy of <em>−</em>2.0 J</p>",
                    "<p>A momentum of <em>−</em>2.0 N∙s</p>",
                    "<p>A displacement of <em>−</em>2.0 m</p>",
                    "<p>None of the above is a scalar quantity.</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_12\" id=\"rch19qa5_12\">12.</a></strong> <strong>C—</strong>Displacement, velocity, and momentum are vector quantities because their direction matters. When using a negative sign with these, the negative indicates a direction. However, all forms of energy are scalar quantities, just amounts with no direction. The negative sign on potential energy simply means an amount of potential energy less than zero.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_13",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0261-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_13\" id=\"ch19qa5_13\">13.</a></strong> A ball of mass $m$ is attached to a light string, as shown above. The ball is whirled counterclockwise in a vertical circle at constant speed. At which labeled position is the tension in the string largest?</p>",
                "options": [
                    "<p>$A$</p>",
                    "<p>$B$</p>",
                    "<p>$C$</p>",
                    "<p>$D$</p>",
                    "<p>None of the above; the tension is constant throughout.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_13\" id=\"rch19qa5_13\">13.</a></strong> <strong>D—</strong>The net force is <em>ma</em>, which in circular motion is <em>mv</em><sup>2</sup>/$r$. Because speed, radius, and mass don’t change throughout the motion, the net force is constant. To find the net force, add or subtract the individual forces on the ball. At the peak, both the tension in the string and the weight pull down: $F_{net} = T$ + <em>mg</em>. At the bottom, though, the tension pulls up while the weight pulls down: $F_{net} = T$ – <em>mg</em>. With $F_{net}$ and <em>mg</em> constants, the tension at the bottom must be greater—at the bottom, tension is $F_{net}$ + <em>mg</em>, whereas at the top, tension is $F_{net}$ – <em>mg</em>.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_14",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_14\" id=\"ch19qa5_14\">14.</a></strong> An object moves along the $x$-axis according to the potential energy function $U$($x$) = <em>ax</em><sup>2</sup> – $b$, where $a$ and $b$ are positive constants. Which of the following lists all of the positions in which the particle is in stable equilibrium?</p>",
                "options": [
                    "<p>$x$ = 0 only</p>",
                    "<p><em>x =</em> 0, $x = b$, and <em>x =</em> −$b$</p>",
                    "<p>$x = b$ and <em>x =</em> −$b$</p>",
                    "<p><em>x =</em> 0, <em>x = a/b,</em> and <em>x =</em> −<em>a/b</em></p>",
                    "<p><em>x = a/b</em> and <em>x =</em> −<em>a/b</em></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_14\" id=\"rch19qa5_14\">14.</a></strong> <strong>A—</strong>Stable equilibrium is where the $U$ vs. $x$ graph has a local minimum. This function is an upward-opening parabola, so anywhere where the derivative is zero is a local minimum. Set the derivative 2<em>ax</em> = 0; solving, $x$ = 0.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_15",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_15\" id=\"ch19qa5_15\">15.</a></strong> A 200-W motor lifts an object at a constant speed of 0.5 m/s. The object ends up 100 m east of where it started and elevated 100 m vertically from its starting point after 20 seconds of elapsed time. What is the mass of the object?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0261-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0261-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p>0.2 kg</p>",
                    "<p>4 kg</p>",
                    "<p>8 kg</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_15\" id=\"rch19qa5_15\">15.</a></strong> <strong>D—</strong>Power $P$ is work done per time. The motor must do work to change the object’s potential energy by <em>mgh</em>, where $h$ is 100 m. (Not <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>, because the $h$ in this formula represents vertical height only. No work is done to carry the object horizontally.) The relevant equation becomes <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>, where $t$ is the 20-s time interval. Solving, <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. That’s (200 W)(20 s) / (10 m/s/s) (100 m) = 4 kg.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_16",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_16\" id=\"ch19qa5_16\">16.</a></strong> The velocity of a particle moving along the $x$-axis is given as a function of time by the expression <em>ν</em>($t$) = 4$t^{2}$ – 3$t$ + 2, where <em>ν</em> is in units of m/s and $t$ in s. About how far did the particle move between $t$ = 0 and $t$ = 2 s?</p>",
                "options": [
                    "<p>9 m</p>",
                    "<p>12 m</p>",
                    "<p>24 m</p>",
                    "<p>19 m</p>",
                    "<p>13 m</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_16\" id=\"rch19qa5_16\">16.</a></strong> <strong>A—</strong>To get displacement, integrate the velocity function. The limits of the definite integral should be 0 to 2 s. The integral gives <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. This evaluates to 8.7 m, closest to A.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_17",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindentt\">Questions 17–19: A moon executes an elliptical orbit about its planet. Point $P$ is where the moon is closest to the planet; point $A$ is where the moon is farthest from the planet.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_17\" id=\"ch19qa5_17\">17.</a></strong> As the moon moves from point $P$ to point $A$ and then back to its original position, what happens to its angular momentum about the central planet?</p>",
                "options": [
                    "<p>It increases, then decreases.</p>",
                    "<p>It decreases, then increases.</p>",
                    "<p>It decreases the entire way.</p>",
                    "<p>It remains constant.</p>",
                    "<p>It increases the entire way.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_17\" id=\"rch19qa5_17\">17.</a></strong> <strong>D</strong>—The only force on the moon is the force of the planet. This force acts on a line directly through the planet’s center; thus, this force provides no torque about the planet. Because no torque acts on the moon, the moon’s angular momentum is conserved.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_18",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindentt\">Questions 17–19: A moon executes an elliptical orbit about its planet. Point $P$ is where the moon is closest to the planet; point $A$ is where the moon is farthest from the planet.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_18\" id=\"ch19qa5_18\">18.</a></strong> As the moon moves from point $P$ to point $A$ and then back to its original position, what happens to the potential energy of the moon-planet system?</p>",
                "options": [
                    "<p>It increases, then decreases</p>",
                    "<p>It decreases, then increases</p>",
                    "<p>It decreases the entire way.</p>",
                    "<p>It remains constant.</p>",
                    "<p>It increases the entire way.</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_18\" id=\"rch19qa5_18\">18.</a></strong> <strong>A</strong>—The formula for the moon-planet potential energy is <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>, where $M$ is the planet’s mass, $m$ is the moon’s mass, and $d$ is the distance between them. The zero of potential energy is taken by convention to be when the moon is a very long way from the planet. As the moon gets closer to the planet, the $d$ term in the denominator decreases. This increases the absolute value of the <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> term. But that term is negative, that is, below zero; a smaller $d$ means a smaller potential energy.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_19",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindentt\">Questions 17–19: A moon executes an elliptical orbit about its planet. Point $P$ is where the moon is closest to the planet; point $A$ is where the moon is farthest from the planet.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_19\" id=\"ch19qa5_19\">19.</a></strong> As the planet moves from point $P$ to point $A$ and then back to its original position, what happens to the magnitude of the force of the moon on the planet?</p>",
                "options": [
                    "<p>It increases, then decreases</p>",
                    "<p>It decreases, then increases</p>",
                    "<p>It decreases the entire way.</p>",
                    "<p>It remains constant.</p>",
                    "<p>It increases the entire way.</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_19\" id=\"rch19qa5_19\">19.</a></strong> <strong>B—</strong>The magnitude of the force of the planet on the moon is <img alt=\"Images\" class=\"q-img\" src=\"images/e0282-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. As the moon gets closer to the planet, the $d$ term in the denominator decreases, increasing the amount of the force.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_20",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_20\" id=\"ch19qa5_20\">20.</a></strong> Block A has mass 4 kg; block B has mass 2 kg. Each block experiences an identical but unknown net force for a time of 3 s. Which of the following correctly compares block A’s change in linear momentum <em>∆p</em><sub>A</sub> to block B’s change in linear momentum <em>∆p</em><sub>B</sub>?</p>",
                "options": [
                    "<p><em>∆p</em><sub>A</sub> = <em>∆p</em><sub>B</sub> ≠ 0</p>",
                    "<p><em>∆p</em><sub>A</sub> = (1/12)<em>∆p</em><sub>B</sub></p>",
                    "<p><em>∆p</em><sub>A</sub> = <em>∆p</em><sub>B</sub> = 0</p>",
                    "<p><em>∆p</em><sub>A</sub> = (1/2)<em>∆p</em><sub>B</sub></p>",
                    "<p><em>∆p</em><sub>A</sub> = (1/6)<em>∆p</em><sub>B</sub></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_20\" id=\"rch19qa5_20\">20.</a></strong> <strong>A—</strong>Force times time is impulse. Both objects experienced the same nonzero force for the same time, so experience the same impulse. Impulse is change in momentum.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_21",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0262-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_21\" id=\"ch19qa5_21\">21.</a></strong> A meterstick of nonnegligible mass $m$ is pivoted at its center, as shown. Two blocks, block 1 and block 2, are placed on top of the meterstick. When the meterstick is released from the rest at the position shown, it begins to rotate clockwise. Which of the following statements about the masses of the two blocks is correct?</p>",
                "options": [
                    "<p>It cannot be determined which block has greater mass, because the lever arms associated with the torques provided by each block are different.</p>",
                    "<p>The blocks are of equal mass, because the magnitude of the angular acceleration of each block is the same.</p>",
                    "<p>Block 1 has greater mass, because the lever arm associated with the torque it provides is larger than that of block 2.</p>",
                    "<p>Block 2 has greater mass, because more torque is provided by block 2 with a smaller lever arm.</p>",
                    "<p>The blocks are of equal mass, because the meterstick’s mass is not negligible.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_21\" id=\"rch19qa5_21\">21.</a></strong> <strong>D—</strong>Because the pivot is at the meterstick’s center of mass, the meterstick’s weight provides no torque. The angular acceleration is clockwise; thus, clockwise torques are greater than counterclockwise torques. These torques are equal to the weight of each object times the object’s distance from the pivot. Object 2 provides a greater torque, yet its lever arm (the distance from the pivot) is smaller. Thus, object 2 must be more massive.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_22",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_22\" id=\"ch19qa5_22\">22.</a></strong> In an amusement park ride, people of mass $m$ stand with their backs to the inside of a large cylinder of radius $R$. The maximum coefficient of static friction between a person’s clothes and the cylinder wall is $\\mu$. The cylinder rotates fast enough that the floor can drop away and the riders remain “stuck” to the wall without falling. What is the minimum period of rotation for which the riders will “stick” to the wall?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0262-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><em>μmg</em></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0262-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0262-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p>2<em>pμ mg</em></p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_22\" id=\"rch19qa5_22\">22.</a></strong> <strong>D—</strong>The centripetal force <em>mv</em><sup>2</sup>/$r$ is the normal force $F_{n}$. The friction force, also equal to <em>μF</em><sub>n</sub>, balances the weight. The leads to the equation <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. The speed of an object in circular motion is the circumference over the period $T$, so replace $v$ with <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Now manipulate algebraically to solve for $T$.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_23",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0262-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_23\" id=\"ch19qa5_23\">23.</a></strong> The solid disk shown has mass $M$ and radius $R$. The rotational inertia of the disk about axis 1, which passes through the disk’s center, is (1/2)<em>MR</em><sup>2</sup>. What is the rotational inertia of the disk about axis 2, which is tangential to the disk’s edge?</p>",
                "options": [
                    "<p>(3/2)<em>MR</em><sup>2</sup></p>",
                    "<p>(2/5)<em>MR</em><sup>2</sup></p>",
                    "<p><em>MR</em><sup>2</sup></p>",
                    "<p>(1/3)<em>MR</em><sup>2</sup></p>",
                    "<p>(2/3)<em>MR</em><sup>2</sup></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_23\" id=\"rch19qa5_23\">23.</a></strong> <strong>A—</strong>Use the parallel axis theorem: <em>I = I</em><sub>cm</sub> + <em>Mh</em><sup>2</sup>, where $h$ is the distance between parallel axes. The rotational inertia through the object’s center of mass is (1/2)<em>MR</em><sup>2</sup>. The distance between the two axes is $R$. So $I$ = (1/2)<em>MR</em><sup>2</sup> + <em>MR</em><sup>2</sup> = (3/2)<em>MR</em><sup>2</sup>.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_24",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_24\" id=\"ch19qa5_24\">24.</a></strong> A 0.50-kg lab cart on a frictionless surface is attached to a spring, as shown in the figure. The rightward direction is considered positive. The spring is neither compressed nor stretched at position $x$ = 0. The cart is released from rest at position $x$ = +0.25 m at time $t$ = 0. Which of the following graphs represents the force applied by the spring as a function of $x$?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0263-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_24\" id=\"rch19qa5_24\">24.</a></strong> <strong>D—</strong>When the displacement is positive—that is, to the right—the force of the spring is negative, that is, to the left. The magnitude of the force of a spring is <em>kx</em> and so is linear in $x$. Only choice <strong>D</strong> is linear, with negative force for positive displacement.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_25",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindentt\">Questions 25 and 26: A ball is thrown off a cliff, with an initial velocity directed at an angle $\\theta$ downward and to the right.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_25\" id=\"ch19qa5_25\">25.</a></strong> Which of the following is correct about the ball’s acceleration from when the ball is released until it hits the ground?</p>",
                "options": [
                    "<p>It remains constant and is directed at the angle <em>θ.</em></p>",
                    "<p>It remains constant and is directed downward.</p>",
                    "<p>It increases and its direction changes.</p>",
                    "<p>It increases and is directed downward.</p>",
                    "<p>It increases and is directed at the angle <em>θ.</em></p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_25\" id=\"rch19qa5_25\">25.</a></strong> <strong>B—</strong>Regardless of how it’s thrown, once released, the ball is in free-fall: no forces except gravity act on the ball. All objects in free-fall experience a constant acceleration of 10 m/s/s downward.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_26",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindentt\">Questions 25 and 26: A ball is thrown off a cliff, with an initial velocity directed at an angle $\\theta$ downward and to the right.</p></div><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_26\" id=\"ch19qa5_26\">26.</a></strong> Which of the following graphs represents the vertical position $y$ of the ball as a function of time, where upward is the positive direction?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0263-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_26\" id=\"rch19qa5_26\">26.</a></strong> <strong>B—</strong>The slope of the position-time graph is the velocity. Initially, the slope must be nonzero and negative because the ball moves down. And then the graph curves; the slope gets steeper because the ball’s speed increases.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_27",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_27\" id=\"ch19qa5_27\">27.</a></strong> A double-pulley consists of pulleys of two different radii attached together such that they rotate together. The radius $r_{1}$ of the inner pulley is 1 cm, and the radius $r_{2}$ of the outer pulley is 3 cm. A 1-kg object and a 2-kg object are hung from the pulley as shown in the diagram. How much torque must be applied in order to hold the pulley at rest?</p>",
                "options": [
                    "<p>50 N∙cm</p>",
                    "<p>7 N∙cm</p>",
                    "<p>70 N∙cm</p>",
                    "<p>5 N∙cm</p>",
                    "<p>30 N∙cm</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_27\" id=\"rch19qa5_27\">27.</a></strong> <strong>A—</strong>The torque provided by each string is force times lever arm. The lever arm in this case is the radius of the pulley. So clockwise torque is (20 N) (3 cm) = 60 N·cm. The counterclockwise torque is (10 N)(1 cm) = 10 N·cm. The net torque is thus (60 <em>−</em> 10) = 50 N·cm.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_28",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_28\" id=\"ch19qa5_28\">28.</a></strong> Identical balls A and B are thrown straight upward with initial speeds $v_{A}$ and $v_{B}$, respectively. Ball A goes three times higher than ball B. What is the relationship between $v_{A}$ and $v_{B}$?</p>",
                "options": [
                    "<p>$v_{A}$ = 6$v_{B}$</p>",
                    "<p>$v_{A}$ = 9$v_{B}$</p>",
                    "<p>$v_{A}$ = 1.7$v_{B}$</p>",
                    "<p>$v_{A}$ = 2.4$v_{B}$</p>",
                    "<p>$v_{A}$ = 3$v_{B}$</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_28\" id=\"rch19qa5_28\">28.</a></strong> <strong>C</strong>—Use kinematics equation <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> The ball comes to rest at its peak, $v_{f}$ = 0. So <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Here the maximum height Δ$x$ is under a square root. So three times higher means <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>times bigger speed, and the square root of 3 is 1.7.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_29",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_29\" id=\"ch19qa5_29\">29.</a></strong> Two identical balls, A and B, fall vertically and hit the floor with speed $v_{1}$. Ball A rebounds with speed $v_{2}$; ball B does not rebound. Consider the impulse exerted on the floor and the impulse exerted on the ball during these collisions. Which case(s) cause greater magnitude of impulse?</p>",
                "options": [
                    "<p class=\"alphabrt\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0264-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_29\" id=\"rch19qa5_29\">29.</a></strong> <strong>B—</strong>Impulse is change in momentum. Both balls lose the same amount of momentum in hitting the floor and coming to rest; however, ball A changes its momentum even more in order to rebound. So ball A changes its momentum by a larger amount, therefore experiencing the greater impulse. Impulse is also force times time of collision. By Newton’s third law, the force of the ball on the floor is equal to the force of the floor on the ball, and the same collision takes the same amount of time. So if ball A experiences more impulse in its collision, so does the floor.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_30",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_30\" id=\"ch19qa5_30\">30.</a></strong> A cart of mass $m$ moves to the right on a level surface along the <em>x-</em>axis. The only horizontal force on the cart is that of air resistance, which can be modeled as being linearly proportional to the cart’s speed $v$. Which of the following differential equations could describe Newton’s second law for this cart?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0264-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0264-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0264-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0264-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/e0264-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_30\" id=\"rch19qa5_30\">30.</a></strong> <strong>A—</strong>Translated to equations, the problem says $F$ = −<em>bv</em>, where $b$ is some positive constant. (The term <em>bv</em> is negative, because the force of air resistance must act opposite the direction of velocity.) We know net force $F$ = <em>ma</em>, and $a$ is the time derivative of velocity. So rewrite: <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Rearrange algebraically to get.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_31",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_31\" id=\"ch19qa5_31\">31.</a></strong> Train A is initially traveling east with speed 10 m/s, slowing down with acceleration 5 m/$s^{2}$. Train B is initially at rest a distance of 200 m from train $A$’s starting location. Train B speeds up to the west with identical acceleration 5 m/$s^{2}$. How long does it take for the trains to pass each other?</p>",
                "options": [
                    "<p>80 s</p>",
                    "<p>5 s</p>",
                    "<p>40 s</p>",
                    "<p>10 s</p>",
                    "<p>20 s</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_31\" id=\"rch19qa5_31\">31.</a></strong> <strong>E</strong>—The equation for train A’s position is derived from <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>, with $x$ = 0 at its original location and calling positive $x$ to the east. That makes train A’s initial velocity positive and its acceleration negative. Train B’s position is given by $x$ = 200 - 2.5$t^{2}$. This works because at time $t$ = 0 $x$ = 200; then after 1 s, $x$ = 197.5 m, so is moving west as expected. Now set both expressions for $x$ equal to each other: 10<em>t -</em> 2.5$t^{2}$ = 200 - 2.5$t^{2}$. This solves to give $t$ = 20 s.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_32",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0264-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_32\" id=\"ch19qa5_32\">32.</a></strong> An object moves along the $x$-axis with a velocity $v$ given as a function of time $t$ as shown in the graph. During which section(s) of the graph is the object’s acceleration constant, but not zero?</p>",
                "options": [
                    "<p>AB and BC only</p>",
                    "<p>AB, BC, and DE only</p>",
                    "<p>CD only</p>",
                    "<p>DE only</p>",
                    "<p>AB only</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_32\" id=\"rch19qa5_32\">32.</a></strong> <strong>A—</strong>Acceleration is the slope of a velocity-time graph. The acceleration is constant when the graph is a line: AB, BC, and CD. But CD’s section is horizontal, indicating zero acceleration.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_33",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_33\" id=\"ch19qa5_33\">33.</a></strong> A particle of mass $m$ is released from rest at position $x$ = 0 at time $t$ = 0. The velocity $v$ of the particle is given by the equation <img alt=\"Images\" class=\"q-img\" src=\"images/e0264-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Which of the following functions could represent the net force on the particle?</p>",
                "options": [
                    "<p>6$t^{3}$</p>",
                    "<p>$t^{3}$</p>",
                    "<p>3$t$</p>",
                    "<p>6$t$</p>",
                    "<p>(3/2)$t$</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_33\" id=\"rch19qa5_33\">33.</a></strong> <strong>D</strong>—Net force is <em>ma</em>, where $a$ is the time derivative of the velocity function. This derivative gives <img alt=\"Images\" class=\"q-img\" src=\"images/e0283-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. So <em>ma</em> is 6$t$.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_34",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0265-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_34\" id=\"ch19qa5_34\">34.</a></strong> A ball can move to the left or right along a track, where right is considered positive. A graph of the ball’s velocity as a function of time is shown. Which of the following describes the ball’s motion?</p>",
                "options": [
                    "<p>The ball slows down to the right, then speeds up to the right.</p>",
                    "<p>The ball slows down to the right, then speeds up to the left.</p>",
                    "<p>The ball speeds up and then slows down.</p>",
                    "<p>The ball slows down to the left, then speeds up to the left.</p>",
                    "<p>The ball slows down to the left, then speeds up to the right.</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_34\" id=\"rch19qa5_34\">34.</a></strong> <strong>A—</strong>Here the graph is always above the horizontal axis; this means the motion is always in the positive direction (i.e., right). The vertical axis values get closer to zero, reach zero, and then get farther from zero. Thus, the speed gets closer then farther from zero: the car slows down and speeds up.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_mc_35",
                "topic": "AP Physics C: Mechanics",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0265-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19l.xhtml#rch19qa5_35\" id=\"ch19qa5_35\">35.</a></strong> A block of mass $m$ experiences a force $F$, which pushes down and to the right at an angle $\\theta$, as shown. The block encounters a rough surface of coefficient of kinetic friction $\\mu$. As the block moves a distance $d$, how much work is done by the net force on the block?</p>",
                "options": [
                    "<p><em>(F</em> cos<em>θ − μmg)d</em></p>",
                    "<p><em>(F</em> − <em>μmg)d</em></p>",
                    "<p><em>Fd</em></p>",
                    "<p><em>Fd</em> cos$\\theta$</p>",
                    "<p><em>(F</em> cos<em>θ − μ[mg + F</em> sin<em>θ])d</em></p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19h.xhtml#ch19qa5_35\" id=\"rch19qa5_35\">35.</a></strong> <strong>E—</strong>The net force on the block includes the horizontal component of $F$ to the right and the friction force to the left. That’s $F$cos$\\theta$ to the right. To the left, the force of friction is <em>μF</em><sub>n</sub>, where the normal force $F_{n}$ in this case is the weight <em>mg</em> plus the vertical component of $F$ in order to maintain vertical equilibrium. So the friction force to the left is <em>μ(mg + F</em>sin<em>θ)</em>. The net force is now $F$cos$\\theta$ – <em>μ(mg + F</em>sin<em>θ)</em>. And this net force is parallel to the displacement $d$, so multiply these to get the net work: [$F$cos$\\theta$ – <em>μ(mg + F</em>sin<em>θ)</em>]$d$.</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_frq_1",
                "topic": "AP Physics C: Mechanics Free Response",
                "difficulty": "hard",
                "question": "<div class='frq-prompt'><h3>CM 1</h3><p class=\"ques\"><strong><a href=\"ch19m.xhtml#rch19qa6_1\" id=\"ch19qa6_1\">1.</a></strong> An end of a uniform rod of length $d$ and mass $M$ is attached to a frictionless horizontal surface by a frictionless pivot, as shown. Point $C$ marks the midpoint of the rod. The rod is initially motionless, but is free to rotate about the pivot.</p><p class=\"alphabrt\">(a) Derive an expression for the rotational inertia of the rod about the pivot in terms of given variables and fundamental constants.</p><p class=\"alphabr\">(b) Student 1 slides a clay disk of mass $m_{1}$ perpendicular to the rod with speed $v_{1}$, as shown. The disk sticks to the rod a distance $x$ from the pivot. Derive an expression for the angular speed $\\omega$ of the rod-disk system immediately after the collision.</p><p class=\"alphabr\">(c) Student 2 slides a rubber disk of mass $m_{1}$ perpendicular to the rod, also with speed $v_{1}$. However, this rubber disk bounces off the rod. After which collision, if either, does the rod rotate with greater angular speed?</p><p class=\"sublist\">____ after colliding with the clay disk</p><p class=\"sublist\">____ after colliding with the rubber disk</p><p class=\"sublist\">____ both collisions result in the same angular speed for the rod</p><p class=\"sublist\">____ which collision produces greater angular speed for the rod cannot be determined</p><p class=\"sublistt\"><em>Justify your answer.</em></p><p class=\"quesna\">For the following two questions, consider collisions involving the clay disk and assume $M$ &gt;&gt; $m_{1}$.</p><p class=\"alphabr\">(d) In order to maximize the angular speed of the rod-disk system after collision, should the disk hit the rod left of, right of, or at point $C$? Briefly justify your answer.</p><p class=\"alphabr\">(e) How, if at all, would your answer to (d) change if the rod’s mass distribution were nonuniform, with linear mass density getting larger farther from the pivot? Justify your answer.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0267-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p></div>",
                "isFRQ": true,
                "rubric": "<h4 class=\"h4\"><a href=\"ch19i.xhtml#ch19qa6_1\" id=\"rch19qa6_1\">1.</a></h4><p class=\"alphabrt\">(a)</p><p class=\"quesna\">The rotational inertia is given by <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"quesna\">To evaluate the integral, set <em>λ</em> as the constant mass per unit length. Replace <em>dm</em> with <em>λdx</em>, giving <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. This evaluates to <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Here, <em>λ</em> is <em>m/d</em>, making the final result <em>I</em> = (1/3)<em>md</em><sup>2</sup>.</p><p class=\"hangp1\"><strong>1 pt</strong> for using the correct general calculus expression for <em>I</em></p><p class=\"hangp\"><strong>1 pt</strong> for replacing <em>dm</em> with <em>λdx</em></p><p class=\"hangp\"><strong>1 pt</strong> for setting up an integral with an <em>x</em><sup>2</sup><em>dx</em> term and limits from 0 to <em>d</em></p><p class=\"hangp\"><strong>1 pt</strong> for correctly evaluating a correct integral</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing that <em>λ</em> is <em>m/d</em></p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"alphabrt\">(b)</p><p class=\"quesn\">Angular momentum is conserved. Before, the total angular momentum is just that of the disk, <em>m</em><sub>1</sub><em>v</em><sub>1</sub><em>x</em>. Afterward, the total angular momentum is the sum of the disk and rod’s <em>Iω</em>, which is <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Set the expressions equal and solve to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for a correct expression for total momentum before collision</p><p class=\"hangp\"><strong>1 pt</strong> for a correct expression for <em>I</em> of the rod-disk system</p><p class=\"hangp\"><strong>1 pt</strong> for setting expressions for total momentum before collision equal to total momentum after.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct expression for <em>w</em></p><p class=\"alphabrt\">(c)</p><p class=\"quesn\">The rubber disk provides greater angular speed after collision. In both cases the angular momentum before the collision is the same. However, the rubber disk rebounds, which means it has negative momentum after the collision. That means that the rod must have even more positive momentum after the collision in order to subtract the rubber disk’s momentum and still get the same total momentum.</p><p class=\"hangp1\"><strong>1 pt</strong> for correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for correct justification</p><p class=\"alphabrt\">(d)</p><p class=\"quesn\">To the left of point C. Angular momentum for the disk is <em>m</em><sub>1</sub><em>v</em><sub>1</sub><em>x</em>, and the bigger <em>x</em>, the bigger the total angular momentum that can be transferred into the rod-disk after the collision.</p><p class=\"hangp1\"><strong>1 pt</strong> for correct answer and justification</p><p class=\"alphabrt\">(e)</p><p class=\"quesn\">The answer wouldn’t change. The total angular momentum of the system before collision is still <em>m</em><sub>1</sub><em>v</em><sub>1</sub><em>x</em>. That angular momentum is still transferred to the system after the collision. Because this angular momentum depends on <em>x</em> but not on properties of the rod, the rod’s linear density is irrelevant.</p><p class=\"hangp1\"><strong>1 pt</strong> for correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for correct justification</p>",
                "options": [
                    "Submit analytical derivation in workspace."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<h4 class=\"h4\"><a href=\"ch19i.xhtml#ch19qa6_1\" id=\"rch19qa6_1\">1.</a></h4><p class=\"alphabrt\">(a)</p><p class=\"quesna\">The rotational inertia is given by <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"quesna\">To evaluate the integral, set $\\lambda$ as the constant mass per unit length. Replace <em>dm</em> with <em>λdx</em>, giving <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. This evaluates to <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Here, $\\lambda$ is <em>m/d</em>, making the final result $I$ = (1/3)<em>md</em><sup>2</sup>.</p><p class=\"hangp1\"><strong>1 pt</strong> for using the correct general calculus expression for $I$</p><p class=\"hangp\"><strong>1 pt</strong> for replacing <em>dm</em> with <em>λdx</em></p><p class=\"hangp\"><strong>1 pt</strong> for setting up an integral with an $x^{2}$<em>dx</em> term and limits from 0 to $d$</p><p class=\"hangp\"><strong>1 pt</strong> for correctly evaluating a correct integral</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing that $\\lambda$ is <em>m/d</em></p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"alphabrt\">(b)</p><p class=\"quesn\">Angular momentum is conserved. Before, the total angular momentum is just that of the disk, $m_{1} v_{1} x$. Afterward, the total angular momentum is the sum of the disk and rod’s <em>Iω</em>, which is <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Set the expressions equal and solve to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0285-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for a correct expression for total momentum before collision</p><p class=\"hangp\"><strong>1 pt</strong> for a correct expression for $I$ of the rod-disk system</p><p class=\"hangp\"><strong>1 pt</strong> for setting expressions for total momentum before collision equal to total momentum after.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct expression for $w$</p><p class=\"alphabrt\">(c)</p><p class=\"quesn\">The rubber disk provides greater angular speed after collision. In both cases the angular momentum before the collision is the same. However, the rubber disk rebounds, which means it has negative momentum after the collision. That means that the rod must have even more positive momentum after the collision in order to subtract the rubber disk’s momentum and still get the same total momentum.</p><p class=\"hangp1\"><strong>1 pt</strong> for correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for correct justification</p><p class=\"alphabrt\">(d)</p><p class=\"quesn\">To the left of point C. Angular momentum for the disk is $m_{1} v_{1} x$, and the bigger $x$, the bigger the total angular momentum that can be transferred into the rod-disk after the collision.</p><p class=\"hangp1\"><strong>1 pt</strong> for correct answer and justification</p><p class=\"alphabrt\">(e)</p><p class=\"quesn\">The answer wouldn’t change. The total angular momentum of the system before collision is still $m_{1} v_{1} x$. That angular momentum is still transferred to the system after the collision. Because this angular momentum depends on $x$ but not on properties of the rod, the rod’s linear density is irrelevant.</p><p class=\"hangp1\"><strong>1 pt</strong> for correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for correct justification</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_frq_2",
                "topic": "AP Physics C: Mechanics Free Response",
                "difficulty": "hard",
                "question": "<div class='frq-prompt'><h3>CM 2</h3><p class=\"ques\"><strong><a href=\"ch19m.xhtml#rch19qa6_2\" id=\"ch19qa6_2\">2.</a></strong> An object of mass $m$ is attached to a spring of spring constant $k$, as shown in the diagram. The object rests on a horizontal frictionless surface. The spring is compressed a distance $d$ from the equilibrium position, where $x$ = 0. The object is then released from rest to oscillate in simple harmonic motion.</p><p class=\"alphabr\">(a) Derive a differential equation that can be used to solve for the block’s position $x$ as a function of time $t$.</p><p class=\"alphabr\">(b) Write an expression for the block’s position $x$ as a function of time that satisfies the differential equation in (a) and the conditions in the problem statement.</p><p class=\"alphabr\">(c) The block loses its attachment to the spring when it is at the equilibrium position while moving to the right in its oscillation. The block falls off the table a height $y$ above the ground. Derive an expression for the horizontal distance $R$ that the block lands from the table.</p><p class=\"alphabrb\">(d) Instead consider that the block lost its attachment to the spring when it was moving to the right in its oscillation, but a distance ½$d$ to the right of the equilibrium position. How, if at all, does the distance $R$ change?</p><p class=\"sublist\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0267-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"sublistt\"><em>Justify your answer</em>.</p><p class=\"alphabrt\">(e) On the axes provided, sketch a graph of horizontal position $x$ versus time $t$ for the block that loses attachment a distance ½$d$ to the right of the equilibrium position. Let $t$ = 0 be the moment when the spring is fully compressed; continue the graph until the block hits the floor.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0267-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabr\">(<strong>f</strong>) On the axes provided, sketch a graph of speed $v$ versus time $t$ for the block that loses attachment a distance ½$d$ to the right of the equilibrium position. Let $t$ = 0 be the moment when the spring is fully compressed; continue the graph until the block hits the floor.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0268-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p></div>",
                "isFRQ": true,
                "rubric": "<h4 class=\"h4\"><a href=\"ch19i.xhtml#ch19qa6_2\" id=\"rch19qa6_2\">2.</a></h4><p class=\"alphabrt\">(a)</p><p class=\"quesn\">The net force is <em>ma</em>, and also is equal to –<em>kx</em> because it’s provided by a spring. Acceleration is <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Combine to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for setting <em>ma</em> equal to the force of the spring</p><p class=\"hangp\"><strong>1 pt</strong> for substituting <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> for <em>a</em></p><p class=\"alphabrt\">(b)</p><p class=\"quesn\">The solution to a second-order differential equation is a cosine function. Initially, the compression is maximum and equal to <em>d</em>. So write <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-01a.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. But <em>ω</em> isn’t given in the problem statement. Take two derivatives to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. In order for this expression to match the one in (a), <em>ω</em> must be equal to <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. The final answer is thus <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for writing an expression with a cosine or sine term</p><p class=\"hangp\"><strong>1 pt</strong> for a correct answer</p><p class=\"alphabrt\">(c)</p><p class=\"quesn\">First, find the speed of the block when it loses contact with the spring. This requires energy conservation, because the block’s acceleration while attached to the spring is not constant. Spring potential energy is converted to kinetic energy: ½<em>kd</em><sup>2</sup> = ½<em>mv</em><sup>2</sup>. The speed of the block is <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Then when the block leaves the table, it falls for a time given by vertical kinematics with <em>v</em><sub>0</sub> = 0: <em>y</em> = ½<em>gt</em><sup>2</sup>. Solve to get the time <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Horizontally, the block’s speed doesn’t change; so multiply speed by time to get distance traveled in the air, <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-09.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for using energy to get the block’s speed</p><p class=\"hangp\"><strong>1 pt</strong> for using vertical kinematics to get time</p><p class=\"hangp\"><strong>1 pt</strong> for the correct expression in terms of given variables</p><p class=\"alphabrt\">(d)</p><p class=\"quesn\"><em>R</em> becomes smaller. In the first case, all of the spring energy was transferred to the block’s kinetic energy. In the new case, the spring stores some energy at release. So the block has less kinetic energy, moves at a slower speed, and covers less horizontal distance in the same time of flight.</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct justification</p><p class=\"alphabrt\">(e)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0287-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Initially the positon-time graph is sinusoidal, because the block was in simple harmonic motion. When the block is released, it moves at constant speed, represented by an unchanging slope (i.e., a straight line). That slope doesn’t change, even after the block leaves the table, because no further horizontal forces act on the block.</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct sinusoidal shape before release from the spring</p><p class=\"hangp\"><strong>1 pt</strong> for a straight line, tangent to the sinusoid, immediately after release</p><p class=\"hangp\"><strong>1 pt</strong> for continuing the straight line until the end</p><p class=\"alphabrt\">(f)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0287-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Initially the speed is zero; the velocity-time graph is sinusoidal, because the block was in simple harmonic motion. When the block is released, its speed doesn’t change until the block leaves the table. Then, the block gains speed—the vertical velocity increases, so the Pythagorean sum of vertical and horizontal velocities must also increase even though horizontal velocity doesn’t change.</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct sinusoidal shape before release from the spring</p><p class=\"hangp\"><strong>1 pt</strong> for a horizontal line continuous with the sinusoid after release</p><p class=\"hangp\"><strong>1 pt</strong> for increasing speed when the block leaves the table</p>",
                "options": [
                    "Submit analytical derivation in workspace."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<h4 class=\"h4\"><a href=\"ch19i.xhtml#ch19qa6_2\" id=\"rch19qa6_2\">2.</a></h4><p class=\"alphabrt\">(a)</p><p class=\"quesn\">The net force is <em>ma</em>, and also is equal to –<em>kx</em> because it’s provided by a spring. Acceleration is <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Combine to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for setting <em>ma</em> equal to the force of the spring</p><p class=\"hangp\"><strong>1 pt</strong> for substituting <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> for $a$</p><p class=\"alphabrt\">(b)</p><p class=\"quesn\">The solution to a second-order differential equation is a cosine function. Initially, the compression is maximum and equal to $d$. So write <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-01a.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. But $\\omega$ isn’t given in the problem statement. Take two derivatives to get <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. In order for this expression to match the one in (a), $\\omega$ must be equal to <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. The final answer is thus <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for writing an expression with a cosine or sine term</p><p class=\"hangp\"><strong>1 pt</strong> for a correct answer</p><p class=\"alphabrt\">(c)</p><p class=\"quesn\">First, find the speed of the block when it loses contact with the spring. This requires energy conservation, because the block’s acceleration while attached to the spring is not constant. Spring potential energy is converted to kinetic energy: ½<em>kd</em><sup>2</sup> = ½<em>mv</em><sup>2</sup>. The speed of the block is <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Then when the block leaves the table, it falls for a time given by vertical kinematics with $v_{0}$ = 0: $y$ = ½<em>gt</em><sup>2</sup>. Solve to get the time <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Horizontally, the block’s speed doesn’t change; so multiply speed by time to get distance traveled in the air, <img alt=\"Images\" class=\"q-img\" src=\"images/e0286-09.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp1\"><strong>1 pt</strong> for using energy to get the block’s speed</p><p class=\"hangp\"><strong>1 pt</strong> for using vertical kinematics to get time</p><p class=\"hangp\"><strong>1 pt</strong> for the correct expression in terms of given variables</p><p class=\"alphabrt\">(d)</p><p class=\"quesn\">$R$ becomes smaller. In the first case, all of the spring energy was transferred to the block’s kinetic energy. In the new case, the spring stores some energy at release. So the block has less kinetic energy, moves at a slower speed, and covers less horizontal distance in the same time of flight.</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct justification</p><p class=\"alphabrt\">(e)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0287-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Initially the positon-time graph is sinusoidal, because the block was in simple harmonic motion. When the block is released, it moves at constant speed, represented by an unchanging slope (i.e., a straight line). That slope doesn’t change, even after the block leaves the table, because no further horizontal forces act on the block.</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct sinusoidal shape before release from the spring</p><p class=\"hangp\"><strong>1 pt</strong> for a straight line, tangent to the sinusoid, immediately after release</p><p class=\"hangp\"><strong>1 pt</strong> for continuing the straight line until the end</p><p class=\"alphabrt\">(f)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0287-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">Initially the speed is zero; the velocity-time graph is sinusoidal, because the block was in simple harmonic motion. When the block is released, its speed doesn’t change until the block leaves the table. Then, the block gains speed—the vertical velocity increases, so the Pythagorean sum of vertical and horizontal velocities must also increase even though horizontal velocity doesn’t change.</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct sinusoidal shape before release from the spring</p><p class=\"hangp\"><strong>1 pt</strong> for a horizontal line continuous with the sinusoid after release</p><p class=\"hangp\"><strong>1 pt</strong> for increasing speed when the block leaves the table</p>"
            },
            {
                "id": "ap-mock-physc-mech-2_frq_3",
                "topic": "AP Physics C: Mechanics Free Response",
                "difficulty": "hard",
                "question": "<div class='frq-prompt'><h3>CM 3</h3><p class=\"ques\"><strong><a href=\"ch19m.xhtml#rch19qa6_3\" id=\"ch19qa6_3\">3.</a></strong> In the laboratory, a block of unknown mass $m_{1}$ is attached via a light rope and pulleys to a hanger of known mass $m_{2}$. The pulleys are of negligible mass and turn with negligible friction. The block and hanger are released from rest in the configuration shown.</p><p class=\"alphabrt\">(a) Describe a procedure for measuring the acceleration of the hanger. You should use equipment usually found in a high school laboratory.</p><p class=\"alphabr\">(b) Is the magnitude of the acceleration of the block greater than, less than, or equal to the magnitude of the acceleration of the hanger? Justify your answer.</p><p class=\"quesna\">Now $m_{2}$ is varied by placing disks of different masses on the hanger. For each value of $m_{2}$, the acceleration $a$ of the hanger is measured. A graph is produced with $m_{2} g$ on the vertical axis and $a$ on the horizontal axis.</p><p class=\"alphabrt\">(c) Is this graph linear?</p><p class=\"sublistt\">___ yes</p><p class=\"sublist\">___ no</p><p class=\"bullet3a\">• If yes, explain how you know and then explain how you would use a line of best fit to determine the mass $m_{1}$.</p><p class=\"bullet3\">• If no, explain why not and then explain whether the graph would be concave-up or concave-down.</p><p class=\"alphabrt\">(d) In a final experiment, the disks are removed from the hanger, and the pulleys are replaced with pulleys that do experience significant friction as they turn. Will the acceleration of the hanger in this final experiment be measured to be greater than, less than, or equal to the acceleration of the hanger in the original experiment? Justify your answer.</p><p class=\"center1\"><strong>STOP. End of Physics C—Mechanics Practice Exam 2—Free-Response Questions</strong></p></div>",
                "isFRQ": true,
                "rubric": "<h4 class=\"h4\"><a href=\"ch19i.xhtml#ch19qa6_3\" id=\"rch19qa6_3\">3.</a></h4><p class=\"alphabrt\">(a)</p><p class=\"quesn\">Many approaches. My favorite: Place a sonic motion detector beneath the hanger. Use the detector to make a velocity-time graph while the hanger is in motion. The slope of that graph is the hanger’s acceleration.</p><p class=\"hangp1\"><strong>1 pt</strong> for measuring quantities that could lead to a determination of acceleration</p><p class=\"hangp\"><strong>1 pt</strong> for a plausible procedure</p><p class=\"hangp\"><strong>1 pt</strong> for a detailed procedure</p><p class=\"hangp\"><strong>1 pt</strong> for explaining how to get acceleration from measured quantities</p><p class=\"hangp\"><strong>1 pt</strong> for multiple data points (note that any use of a graph satisfies this requirement)</p><p class=\"alphabrt\">(b)</p><p class=\"quesn\">Equal. Acceleration is the change in an object’s speed in some about of time. The objects are connected; if one speeds up, so does the other by the same amount. (Otherwise, they would become disconnected or the rope would go slack.)</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct justification</p><p class=\"alphabrt\">(c)</p><p class=\"quesn\">The relevant equation here comes from applying Newton’s second law to the two-object system. The net force is <em>m</em><sub>2</sub><em>g</em> – <em>m</em><sub>1</sub><em>g</em>; the system mass is <em>m</em><sub>1</sub> + <em>m</em><sub>2</sub>. Because the graph has <em>m</em><sub>2</sub><em>g</em> on the vertical axis, solve for <img alt=\"Images\" class=\"q-img\" src=\"images/e0287-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Because <em>a</em> appears linearly (i.e., not squared or square rooted) in the numerator, the graph is linear: <strong>yes</strong>. Identify each term with a term in the equation for a line, <em>y = mx + b</em>. The <em>y</em> variable is <em>m</em><sub>2</sub><em>g</em>. The <em>x</em> variable is <em>a</em>. This leaves the slope of the graph as (<em>m</em><sub>1</sub> + <em>m</em><sub>2</sub>). The <em>b</em> term is the <em>y</em>-intercept and is <em>m</em><sub>1</sub><em>g</em>. To get <em>m</em><sub>1</sub>, find the vertical intercept of the best-fit line and divide by <em>g</em>.</p><p class=\"hangp1\"><strong>1 pt</strong> for recognizing that the graph is linear</p><p class=\"hangp\"><strong>1 pt</strong> for explaining why the graph is linear</p><p class=\"hangp\"><strong>1 pt</strong> for using Newton’s second law correctly to get an expression relating <em>m</em><sub>2</sub><em>g</em> and <em>a</em></p><p class=\"hangp\"><strong>1 pt</strong> for using the vertical intercept to get <em>m</em><sub>1</sub></p><p class=\"hangp\"><strong>1 pt</strong> for explaining in words or mathematics why the vertical intercept is used to get <em>m</em><sub>1</sub></p><p class=\"alphabrt\">(d)</p><p class=\"quesn\">The newly measured acceleration would be <strong>less</strong>. Now the net force on the system isn’t just <em>m</em><sub>2</sub><em>g</em> – <em>m</em><sub>1</sub><em>g</em>; there’s another force, the friction force, that acts opposite the direction of motion. Because the objects are released from rest, that’s also opposite the direction of acceleration. So the net force would be smaller than before. Because <em>a</em> = <em>F</em><sub>net</sub> / <em>m</em> and the system mass hasn’t changed, the acceleration would be smaller.</p><p class=\"hangp1\"><strong>1 pt</strong> for choosing “less”</p><p class=\"hangp\"><strong>1 pt</strong> for explicitly explaining why the net force would be less</p><p class=\"hangp\"><strong>1 pt</strong> for relating less net force to less acceleration using Newton’s second law</p><h4 class=\"h4c\">AP Physics C—Mechanics</h4><p class=\"centera\">Full Exam Scoring</p><p class=\"noindentt1\">Multiple-Choice: Number Correct______(35 max)</p><p class=\"noindentt1\">Free-Response: Question 1______(15 max)</p><p class=\"noindentq\">Question 2______(15 max)</p><p class=\"noindentq\">Question 3______(15 max)</p><p class=\"noindentt1\">Total Free-Response______(45 max)</p><p class=\"noindentt1\">1.286 × Multiple-Choice + Free-Response = Raw Score______(90 max)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0289-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Submit analytical derivation in workspace."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<h4 class=\"h4\"><a href=\"ch19i.xhtml#ch19qa6_3\" id=\"rch19qa6_3\">3.</a></h4><p class=\"alphabrt\">(a)</p><p class=\"quesn\">Many approaches. My favorite: Place a sonic motion detector beneath the hanger. Use the detector to make a velocity-time graph while the hanger is in motion. The slope of that graph is the hanger’s acceleration.</p><p class=\"hangp1\"><strong>1 pt</strong> for measuring quantities that could lead to a determination of acceleration</p><p class=\"hangp\"><strong>1 pt</strong> for a plausible procedure</p><p class=\"hangp\"><strong>1 pt</strong> for a detailed procedure</p><p class=\"hangp\"><strong>1 pt</strong> for explaining how to get acceleration from measured quantities</p><p class=\"hangp\"><strong>1 pt</strong> for multiple data points (note that any use of a graph satisfies this requirement)</p><p class=\"alphabrt\">(b)</p><p class=\"quesn\">Equal. Acceleration is the change in an object’s speed in some about of time. The objects are connected; if one speeds up, so does the other by the same amount. (Otherwise, they would become disconnected or the rope would go slack.)</p><p class=\"hangp1\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct justification</p><p class=\"alphabrt\">(c)</p><p class=\"quesn\">The relevant equation here comes from applying Newton’s second law to the two-object system. The net force is $m_{2} g$ – $m_{1} g$; the system mass is $m_{1} +m_{2}$. Because the graph has $m_{2} g$ on the vertical axis, solve for <img alt=\"Images\" class=\"q-img\" src=\"images/e0287-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. Because $a$ appears linearly (i.e., not squared or square rooted) in the numerator, the graph is linear: <strong>yes</strong>. Identify each term with a term in the equation for a line, <em>y = mx + b</em>. The $y$ variable is $m_{2} g$. The $x$ variable is $a$. This leaves the slope of the graph as ($m_{1} +m_{2}$). The $b$ term is the $y$-intercept and is $m_{1} g$. To get $m_{1}$, find the vertical intercept of the best-fit line and divide by $g$.</p><p class=\"hangp1\"><strong>1 pt</strong> for recognizing that the graph is linear</p><p class=\"hangp\"><strong>1 pt</strong> for explaining why the graph is linear</p><p class=\"hangp\"><strong>1 pt</strong> for using Newton’s second law correctly to get an expression relating $m_{2} g$ and $a$</p><p class=\"hangp\"><strong>1 pt</strong> for using the vertical intercept to get $m_{1}$</p><p class=\"hangp\"><strong>1 pt</strong> for explaining in words or mathematics why the vertical intercept is used to get $m_{1}$</p><p class=\"alphabrt\">(d)</p><p class=\"quesn\">The newly measured acceleration would be <strong>less</strong>. Now the net force on the system isn’t just $m_{2} g$ – $m_{1} g$; there’s another force, the friction force, that acts opposite the direction of motion. Because the objects are released from rest, that’s also opposite the direction of acceleration. So the net force would be smaller than before. Because $a = F_{net}$ / $m$ and the system mass hasn’t changed, the acceleration would be smaller.</p><p class=\"hangp1\"><strong>1 pt</strong> for choosing “less”</p><p class=\"hangp\"><strong>1 pt</strong> for explicitly explaining why the net force would be less</p><p class=\"hangp\"><strong>1 pt</strong> for relating less net force to less acceleration using Newton’s second law</p><h4 class=\"h4c\">AP Physics C—Mechanics</h4><p class=\"centera\">Full Exam Scoring</p><p class=\"noindentt1\">Multiple-Choice: Number Correct______(35 max)</p><p class=\"noindentt1\">Free-Response: Question 1______(15 max)</p><p class=\"noindentq\">Question 2______(15 max)</p><p class=\"noindentq\">Question 3______(15 max)</p><p class=\"noindentt1\">Total Free-Response______(45 max)</p><p class=\"noindentt1\">1.286 × Multiple-Choice + Free-Response = Raw Score______(90 max)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0289-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
            }
        ]
    }
};
