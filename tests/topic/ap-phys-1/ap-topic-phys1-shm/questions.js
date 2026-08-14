// Specific Question Bank for Test: ap-topic-phys1-shm
const AP_TEST_DATA = {
    "ap-topic-phys1-shm": {
        "id": "ap-topic-phys1-shm",
        "title": "AP Physics 1: Oscillatory Motion & SHM",
        "subtitle": "Simple harmonic motion, mass on a spring, simple pendulum, restoring force dynamics and frequency",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Oscillatory Motion",
        "questions": [
            {
                "id": "tp_phys1_shm_1",
                "topic": "Oscillatory Motion",
                "difficulty": "easy",
                "question": "What is the length of a pendulum whose period, at the equator, is 1 s?</p>",
                "options": [
                    "0.15 m",
                    "0.25 m",
                    "0.30 m",
                    "0.45 m"
                ],
                "answer": "B",
                "explanation": "If we use the formula for the period of a pendulum, \\( T = 2\\pi\\sqrt{\\frac{L}{g}} \\), and square both sides, we can solve for the length:</p>\r\n<p class=\"center1\">\\(\\ell = T^2 \\frac{g}{4\\pi^2}\\)</p>\r\n<p class=\"exp\">Using the values given in the question, we find that <i>ℓ</i> = 0.25 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_2",
                "topic": "Oscillatory Motion",
                "difficulty": "easy",
                "question": "On a planet, an astronaut determines the acceleration of gravity by means of a pendulum. She observes that the 1-m-long pendulum has a period of 1.5 s. The acceleration of gravity, in meters per second squared, on the planet is</p>",
                "options": [
                    "7.5",
                    "15.2",
                    "10.2",
                    "17.5"
                ],
                "answer": "D",
                "explanation": "Again using the formula for the period of a pendulum, this time we solve for the magnitude of the acceleration of gravity:</p>\r\n<p class=\"center1\">\\(g = 4\\frac{\\pi\\ell}{T^2}\\)</p>\r\n<p class=\"exp\">Using the values given in the question, we find that <i>g</i> = 17.5 m/s<sup>2</sup>.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_3",
                "topic": "Oscillatory Motion",
                "difficulty": "easy",
                "question": "When a 0.05-kg mass is attached to a vertical spring, it is observed that the spring stretches 0.03 m. The system is then placed horizontally on a frictionless surface and set into simple harmonic motion. What is the period of the oscillations?</p>",
                "options": [
                    "0.75 s",
                    "0.12 s",
                    "0.35 s",
                    "1.3 s"
                ],
                "answer": "C",
                "explanation": "We first find the spring constant. From <i>F</i> = <i>kx</i>, we see that</p>\r\n<p class=\"center1\">\\(F = mg = (0.05)(9.8) = 0.49\\text{ N}\\)</p>\r\n<p class=\"exp\">Thus,</p>\r\n<p class=\"center1\">\\(k = \\frac{F}{x} = \\frac{0.49}{0.03} = 16.3\\text{ N/m}\\)</p>\r\n<p class=\"exp\">Now the period is given by the formula <i>T</i> = \\( T = 2\\pi\\sqrt{\\frac{m}{k}} \\). Using the values given in the question, we find that <i>T</i> = 0.35 s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_4",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "A mass of 0.5 kg is connected to a massless spring with a force constant <i>k</i> of 50 N/m. The system is oscillating on a frictionless, horizontal surface. If the amplitude of the oscillations is 2 cm, the total energy of the system is</p>",
                "options": [
                    "0.01 J",
                    "0.1 J",
                    "0.5 J",
                    "0.3 J"
                ],
                "answer": "A",
                "explanation": "The formula for total energy is <i>E</i> = (1/2)<i>kA</i><sup>2</sup>. Using the values given in the question, we get <i>E</i> = 0.01 J.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_5",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "A mass of 0.3 kg is connected to a massless spring with a force constant <i>k</i> of 20 N/m. The system oscillates horizontally on a frictionless surface with an amplitude of 4 cm. What is the velocity of the mass when it is 2 cm from its equilibrium position?</p>",
                "options": [
                    "0.28 m/s",
                    "0.08 m/s",
                    "0.52 m/s",
                    "0.15 m/s"
                ],
                "answer": "A",
                "explanation": "The formula for any intermediary velocity is <i>v</i> = \\( f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} \\). Before substituting the known values, we must change centimeters to meters: 4 cm = 0.04 m and 2 cm = 0.02 m. Then, using these values for amplitude and position, we find that <i>v</i> = 0.28 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_6",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "If the length of a simple pendulum is doubled, its period will</p>",
                "options": [
                    "decrease by 2",
                    "increase by 2",
                    "decrease by \\sqrt{2}",
                    "increase by \\sqrt{2}"
                ],
                "answer": "D",
                "explanation": "Since the period of a pendulum varies directly as the square root of the length, if the length is doubled, the period increases by \\sqrt{2}.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_7",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "A 2-kg mass is oscillating horizontally on a frictionless surface when attached to a spring. The total energy of the system is observed to be 10 J. If the mass is replaced by a 4-kg mass, but the amplitude of oscillations and the spring remain the same, the total energy of the system will be</p>",
                "options": [
                    "10 J",
                    "5 J",
                    "20 J",
                    "3.3 J"
                ],
                "answer": "A",
                "explanation": "The maximum energy in the mass-spring system can be expressed independently of the mass; it depends on the force constant and the square of the amplitude. Thus, if the spring and the amplitude of oscillations remain the same, so will the total energy of the system (10 J).</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    }
};
