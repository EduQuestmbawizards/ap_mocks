// Specific Question Bank for Test: ap-topic-phys1-energy
const AP_TEST_DATA = {
    "ap-topic-phys1-energy": {
        "id": "ap-topic-phys1-energy",
        "title": "AP Physics 1: Work, Energy & Power",
        "subtitle": "Work-energy theorem, kinetic and potential energy, conservation of mechanical energy, power",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Energy & Work",
        "questions": [
            {
                "id": "tp_phys1_ene_1",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "Which of the following are the units for the spring constant, <span><i>k</i></span>?</p>",
                "options": [
                    "kg · m<sup>2</sup>/s<sup>2</sup>",
                    "kg · s<sup>2</sup>",
                    "kg · m/s",
                    "kg/s<sup>2</sup>"
                ],
                "answer": "D",
                "explanation": "The units for the spring or force constant are provided by Hooke’s law, <i>F</i> = <i>kx</i>, and are newtons per meter. Recall that 1 N = 1 kg m/s<sup>2</sup>, so dividing by <i>m</i> gives kg/s<sup>2</sup>.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_2",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "Which of the following is an expression for mechanical power?</p>",
                "options": [
                    "<i>Ft</i>/<i>m</i>",
                    "<i>F</i> <sup>2</sup><i>m</i>/<i>a</i>",
                    "<i>Fm</i><sup>2</sup>/<i>t</i>",
                    "<i>F</i> <sup>2</sup><i>t</i>/<i>m</i>"
                ],
                "answer": "D",
                "explanation": "Power is equal to work done divided by time. Therefore,</p>\r\n<p class=\"center1\">\\(P = \\frac{W}{t} = \\frac{Fd}{t}\\)</p>\r\n<p class=\"exp\">Using some algebra and kinematics, we see that</p>\r\n<p class=\"center1\">\\(P = \\frac{Fd}{t} = Fv = Fat = F\\left(\\frac{F}{m}\\right)t = \\frac{F^2 t}{m}\\)</p>\r\n<p class=\"exp\">You could also get the answer by verifying which expression has units of joules per second.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_3",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "A pendulum consisting of a mass <i>m</i> attached to a light string of length <i>ℓ</i> is displaced from its rest position, making an angle θ with the vertical. It is then released and allowed to swing freely. Which of the following expressions represents the velocity of the mass when it reaches its lowest position?</p>",
                "options": [
                    "\\( 0.5\\text{ J} \\)",
                    "\\( 1.0\\text{ J} \\)",
                    "\\( 2.0\\text{ J} \\)",
                    "\\( 4.0\\text{ J} \\)"
                ],
                "answer": "A",
                "explanation": "Consider the sketch below of the situation:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w55\" role=\"presentation\" src=\"images/f104-03.jpg\"/></p>\r\n<p class=\"exp\">From the geometry of the sketch, note that</p>\r\n<p class=\"center1\">\\(h = \\ell - \\ell\\cos\\theta = \\ell(1 - \\cos\\theta)\\)</p>\r\n<p class=\"exp\">If it is assumed that there is no friction, gravity is the only conservative force acting to do work. Therefore,</p>\r\n<p class=\"center1\">\\(ME_{\\text{bottom}} = ME_{\\text{top}}, KE_{\\text{bottom}} = PE_{\\text{top}}, \\frac{1}{2}m v^2 = mgh\\)</p>\r\n<p class=\"exp\">and so, at the bottom,</p>\r\n<p class=\"center1\">\\(v = \\sqrt{2gh} = \\sqrt{2g\\ell(1 - \\cos\\theta)}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_4",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "An engine maintains constant power on a conveyor belt machine. If the belt’s velocity is doubled, the magnitude of its average acceleration</p>",
                "options": [
                    "is doubled",
                    "is quartered",
                    "is halved",
                    "is quadrupled"
                ],
                "answer": "C",
                "explanation": "Power is equal to the product of the average force applied times the velocity. If the velocity is doubled, and the power is constant, the average force must be halved. Since <i>F</i> = <i>ma</i>, the average acceleration of the belt must be halved as well.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_5",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A mass <i>m</i> is moving horizontally along a nearly frictionless floor with velocity <i>v</i>. The mass now encounters a part of the floor that has a coefficient of kinetic friction given by <i>μ</i>. The total distance traveled by the mass before it is slowed by friction to a stop is given by</p>",
                "options": [
                    "2<i>v</i><sup>2</sup>/<i>μg</i>",
                    "<i>v</i><sup>2</sup>/2<i>μg</i>",
                    "2<i>μgv</i><sup>2</sup>",
                    "<i>μv</i><sup>2</sup>/2<i>g</i>"
                ],
                "answer": "B",
                "explanation": "The only applied force is friction, which is doing work to stop the mass. This work is being taken from the initial kinetic energy. For friction, we know that <i>f</i> = <i>μN</i>, and since the motion is horizontal, <i>N</i> = <i>mg</i>. Let <i>x</i> be the distance traveled while stopping; therefore, we can write that <i>W</i><sub><i>f</i></sub> = <i>KE</i> and:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w21\" role=\"presentation\" src=\"images/f104-05a.jpg\"/></p>\r\n<p class=\"exp\">Solving for <i>x</i>, we get:</p>\r\n<p class=\"center1\">\\(x = \\frac{v^2}{2\\mu g}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_6",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "Two unequal masses are dropped simultaneously from the same height. The two masses will experience the same change in</p>",
                "options": [
                    "acceleration",
                    "kinetic energy",
                    "potential energy",
                    "velocity"
                ],
                "answer": "D",
                "explanation": "Objects dropped simultaneously from the same height have the same constant acceleration, which is the change in velocity. The unequal masses will provide for different energies, but the velocity changes will be the same.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_7",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A pendulum that consists of a 2-kg mass swings to a maximum vertical displacement of 17 cm above its rest position. At its lowest point, the kinetic energy of the mass is equal to</p>",
                "options": [
                    "0.33 J",
                    "3.33 J",
                    "33.3 J",
                    "333 J"
                ],
                "answer": "B",
                "explanation": "Since we have a conservative system,</p>\r\n<p class=\"center1\">\\(KE_{\\text{bottom}} = PE_{\\text{top}} = mgh = (2)(9.8)(0.17)\\)</p>\r\n<p class=\"exp\">Remember to change 17 cm to 0.17 m!</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_8",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A 0.3-kg mass rests on top of a spring that has been compressed by 0.04 m. Neglect any frictional effects, and consider the spring to be massless. Then, if the spring has a constant <i>k</i> equal to 2,000 N/m, to what height will the mass rise when the system is released?</p>",
                "options": [
                    "1.24 m",
                    "0.75 m",
                    "0.54 m",
                    "1.04 m"
                ],
                "answer": "C",
                "explanation": "We are dealing with a conservative system, so the initial starting energy is just the potential energy of the compressed spring. This energy supplies the work needed to raise the mass a height <i>h</i>, which is a gain in gravitational potential energy. Thus, we equate these two expressions and solve for the height:</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}(2,000)(0.4)^2 = (0.3)(9.8)h\\)</p>\r\n<p class=\"exp\">Thus, <i>h</i> = 0.54 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_9",
                "topic": "Energy & Work",
                "difficulty": "hard",
                "question": "A box is pulled along a smooth floor by a force <i>F</i>, making an angle θ with the horizontal. As θ increases, the amount of work done to pull the box the same distance, <span><i>d</i></span>,</p>",
                "options": [
                    "increases",
                    "increases and then decreases",
                    "remains the same",
                    "decreases"
                ],
                "answer": "D",
                "explanation": "The component of the applied force in the horizontal direction depends on the cosine of the angle. This value decreases with increasing angle. Thus, the work decreases as well.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_10",
                "topic": "Energy & Work",
                "difficulty": "hard",
                "question": "As the time needed to run up a flight of stairs decreases, the amount of work done against gravity</p>",
                "options": [
                    "increases",
                    "decreases",
                    "remains the same",
                    "increases and then decreases"
                ],
                "answer": "C",
                "explanation": "The work done is independent of the time or path taken because gravity is a conservative force. The power generated is affected by time, but the work done to run up the stairs remains the same as long as the same mass is raised to the same height.</p></li>\r\n</ol>\r\n</section>\r\n<section>"
            }
        ]
    }
};
