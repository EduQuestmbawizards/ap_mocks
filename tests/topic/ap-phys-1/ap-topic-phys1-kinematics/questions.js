// Specific Question Bank for Test: ap-topic-phys1-kinematics
const AP_TEST_DATA = {
    "ap-topic-phys1-kinematics": {
        "id": "ap-topic-phys1-kinematics",
        "title": "AP Physics 1: Kinematics & Projectile Motion",
        "subtitle": "1D/2D motion, motion graphs, free fall, projectile trajectories and uniform circular motion",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Kinematics",
        "questions": [
            {
                "id": "tp_phys1_kin_1",
                "topic": "Kinematics",
                "difficulty": "easy",
                "question": "A ball is thrown upward with an initial velocity of 20 m/s. How long will the ball take to reach its maximum height?</p>",
                "options": [
                    "19.6 s",
                    "9.8 s",
                    "6.3 s",
                    "2.04 s"
                ],
                "answer": "D",
                "explanation": "Given the initial velocity of 20 m/s, we know that the ball is decelerated by gravity at a rate of 9.8 m/s<sup>2</sup>. Therefore, we need to know how long gravity will take to decelerate the ball to zero velocity. Clearly, from the definition of acceleration, dividing 20 m/s by 9.8 m/s<sup>2</sup> gives the answer: 2.04 s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_2",
                "topic": "Kinematics",
                "difficulty": "easy",
                "question": "An airplane lands on a runway with a velocity of 150 m/s. How far will it travel until it stops if its rate of deceleration is constant at −3 m/s<sup>2</sup>?</p>",
                "options": [
                    "525 m",
                    "3,750 m",
                    "6,235 m",
                    "9,813 m"
                ],
                "answer": "B",
                "explanation": "We do not know the time needed to stop, but we do know that the final velocity is zero. If we use the formula</p>\r\n\\[ v_y = v_0\\sin\\theta - gt = 40\\sin(30^\\circ) - (9.8)(1) = 20 - 9.8 = 10.2\\text{ m/s} \\]\r\n<p class=\"expt\">and substitute 150 m/s for the initial velocity and −3 m/s<sup>2</sup> for the deceleration, we get the answer: 3,750 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_3",
                "topic": "Kinematics",
                "difficulty": "easy",
                "question": "A ball is thrown downward from the top of a roof with a speed of 25 m/s. After 2 s, its velocity will be</p>",
                "options": [
                    "19.6 m/s",
                    "−5.4 m/s",
                    "−44.6 m/s",
                    "44.6 m/s"
                ],
                "answer": "C",
                "explanation": "The initial velocity is −25 m/s downward, so <i>v</i> = −(25) − (9.8)(2) = −44.6 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_4",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "A rocket is propelled upward with an acceleration of 25 m/s<sup>2</sup> for 5 s. After that time, the engine is shut off, and the rocket continues to move upward. The maximum height, in meters, that the rocket will reach is</p>",
                "options": [
                    "900",
                    "1,000",
                    "1,100",
                    "1,200"
                ],
                "answer": "C",
                "explanation": "The rocket accelerates from rest, so the first distance traveled in 5 s is given by</p>\r\n\\[ v_x = v_0\\cos(30^\\circ) = 40(0.866) = 34.6\\text{ m/s} \\]\r\n<p class=\"expt\">Substituting the values for time (5 s) and acceleration (25 m/s<sup>2</sup>) gives <i>y</i><sub>1</sub> = 312.5 m. After 5 s of accelerating, the rocket has a velocity of 125 m/s. After this time, the engine stops and the rocket is decelerated by gravity as it continues to move upward. The time to decelerate to zero is found by dividing 125 m/s by the acceleration of gravity. Thus, 125/9.8 = 12.76 s.</p>\r\n<p class=\"expt\">The distance traveled during that time is added to the first accelerated distance. The second distance is given by</p>\r\n\\[ v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(34.6)^2 + (10.2)^2} = 36.1\\text{ m/s} \\]\r\n<p class=\"expt\">The total distance traveled is therefore equal to 1,108 m or, rounded off, 1,100 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_5",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "The total distance traveled by the object during the indicated 14 s is</p>",
                "options": [
                    "7.5 m",
                    "25 m",
                    "62.5 m",
                    "77.5 m"
                ],
                "answer": "C",
                "explanation": "The total distance traveled by the object in 14 s is equal to the total area under the graph. Breaking the figure up into triangles and rectangles, we find that their areas add up to 62.5 m (recall that distance is a scalar).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_6",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "The total displacement of the object during the 14 s indicated is</p>",
                "options": [
                    "7.5 m",
                    "25 m",
                    "62.5 m",
                    "77.5 m"
                ],
                "answer": "A",
                "explanation": "The total displacement for the object is the sum of the positive (forward) and negative (backward) areas, representing the fact that the object moves away from the origin and then back (as indicated by the velocity vs. time graph), going below the <i>x</i>-axis. Adding and subtracting the proper areas: 35 − 2.5 − 20 − 5 = 7.5 m for the final displacement.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_7",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "The average velocity over the whole time, in meters per second, of the object is</p>",
                "options": [
                    "0",
                    "0.5",
                    "2.5",
                    "4.5"
                ],
                "answer": "B",
                "explanation": "Average velocity is the change in displacement for the object over the change in time (not distance). Since from question 6 we know the displacement change to be 7.5 m in 14 s, the average velocity is therefore 0.53 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_8",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "What is the total change in velocity for the object whose acceleration versus time graph is given below?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w53\" role=\"presentation\" src=\"images/f062-01.jpg\"/></p>",
                "options": [
                    "40 m/s",
                    "−40 m/s",
                    "80 m/s",
                    "−80 m/s"
                ],
                "answer": "A",
                "explanation": "The change in velocity for the object is equal to the area under the graph, which is equal to 1/2 (+8)(10) = +40 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_9",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "An object has an initial velocity of 15 m/s. How long must it accelerate at a constant rate of 3 m/s<sup>2</sup> before its average velocity is equal to twice its initial velocity?</p>",
                "options": [
                    "5 s",
                    "10 s",
                    "15 s",
                    "20 s"
                ],
                "answer": "B",
                "explanation": "For uniformly accelerated motion, the average velocity is</p>\r\n\\[ a_c = \\frac{v^2}{r} = \\frac{4^2}{2} = 8\\text{ m/s}^2 \\]\r\n<p class=\"expt\">The question requires that the average velocity be equal to twice the initial velocity; thus, if the average velocity is 30 m/s, the final velocity attained must be 45 m/s. Now the question is, how long must the object accelerate from 15 m/s to achieve a speed of 45 m/s? A change in velocity of 30 m/s at a rate of 3 m/s<sup>2</sup> for 10 s is implied.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_10",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "A projectile is launched at an angle of 45° with a velocity of 250 m/s. If air resistance is neglected, the magnitude of the horizontal velocity of the projectile at the time it reaches maximum altitude is equal to</p>",
                "options": [
                    "0 m/s",
                    "175 m/s",
                    "200 m/s",
                    "250 m/s"
                ],
                "answer": "B",
                "explanation": "The horizontal component of velocity remains constant in the absence of resistive forces and is equal to <i>v</i><sub><i>i</i></sub> cos θ. Substituting the known numbers, we get <i>v</i><sub><i>x</i></sub> = (250)(0.7) = 175 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_11",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "A projectile is launched horizontally with a velocity of 25 m/s from the top of a 75-m height. How many seconds will the projectile take to reach the bottom?</p>",
                "options": [
                    "15.5",
                    "9.75",
                    "6.31",
                    "3.91"
                ],
                "answer": "D",
                "explanation": "The time to fall is given by the free-fall formula:</p>\r\n<p class=\"center1\">\\(t = \\sqrt{\\frac{2y}{g}}\\)</p>\r\n<p class=\"expt\">If we substitute the known numbers, we get 3.91 s for the time.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_12",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "At a launch angle of 45°, the range of a launched projectile is given by</p>",
                "options": [
                    "\\( 0 \\)",
                    "\\( 2\\text{ m/s}^2 \\)",
                    "\\( 4\\text{ m/s}^2 \\)",
                    "\\( 8\\text{ m/s}^2 \\)"
                ],
                "answer": "A",
                "explanation": "From the formula for range, we see that, at 45°, sin 2θ = 1, and so</p>\r\n<p class=\"center1\">\\(R = \\frac{v_i^2}{g}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_13",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "A projectile is launched at a certain angle. After 4 s, it hits the top of a building 500 m away. The height of the building is 50 m. The projectile was launched at an angle of</p>",
                "options": [
                    "14°",
                    "21°",
                    "37°",
                    "76°"
                ],
                "answer": "A",
                "explanation": "We know that, after 4 s, the projectile has traveled horizontally 500 m. Therefore, the horizontal velocity was a constant 125 m/s and is equal to <i>v</i><sub><i>i</i></sub> cos θ. We also know that, after 4 s, the <i>y</i>-position of the projectile is 50 m. Thus, we can write:</p>\r\n<p class=\"center1\">\\(50 = 4 v_i \\sin\\theta - 4.9(4)^2 = 4 v_i \\sin\\theta - 78.4\\)</p>\r\n<p class=\"expt\">Therefore, <i>v</i><sub><i>i</i></sub> cos θ = 125, <i>v</i><sub><i>i</i></sub> sin θ = 32.1, and tan θ = 0.2568, so θ = 14.4°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_14",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "The operator of a boat wishes to cross a 5-km-wide river that is flowing to the east at 10 m/s. He wants to reach the exact point on the opposite shore 15 min after starting. With what speed and in what direction should the boat travel?</p>",
                "options": [
                    "11.2 m/s at 26.6° E of N",
                    "8.66 m/s at 63.4° W of N",
                    "11.4 m/s at 60.9° W of N",
                    "8.66 m/s at 26.6° E of N"
                ],
                "answer": "C",
                "explanation": "The river is flowing at 10 m/s to the right (east), and the resultant desired velocity is 5.55 m/s up (north). Therefore, the actual velocity, relative to the river, is heading W of N. By the Pythagorean theorem, the velocity of the boat must be 11.4 m/s. The angle is given by the tangent function. In the diagram below, not drawn to scale but correct for orientation, tan (θ) = \\( a_c = \\frac{v^2}{r} \\) = 1.8. Therefore, θ = 60.9° W of N.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w60\" role=\"presentation\" src=\"images/f065-02.jpg\"/></p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    }
};
