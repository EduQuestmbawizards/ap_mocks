// Specific Question Bank for Test: ap-topic-phys1-vectors
const AP_TEST_DATA = {
    "ap-topic-phys1-vectors": {
        "id": "ap-topic-phys1-vectors",
        "title": "AP Physics 1: Vectors & Trigonometry",
        "subtitle": "Coordinate systems, vector components, vector addition and trigonometry",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Vectors & Trigonometry",
        "questions": [
            {
                "id": "tp_phys1_vec_1",
                "topic": "Vectors & Trigonometry",
                "difficulty": "easy",
                "question": "A vector is given by its components, <i>A</i><sub><i>x</i></sub> = 2.5 and <i>A</i><sub><i>y</i></sub> = 7.5. What angle does vector \\vec{A} make with the positive <i>x</i>-axis?</p>",
                "options": [
                    "72°",
                    "18°",
                    "25°",
                    "50°"
                ],
                "answer": "A",
                "explanation": "The angle for the vector to the positive <i>x</i>-axis is given by</p>\r\n\\[ \\tan\\theta = \\frac{A_y}{A_x} = \\frac{7.5}{2.5} = 3 \\implies \\theta = 71.5^\\circ \\approx 72^\\circ \\]\r\n<p class=\"exp\">Thus, tan θ = 3 and θ = 71.5° or, rounded off, 72°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_2",
                "topic": "Vectors & Trigonometry",
                "difficulty": "easy",
                "question": "Which pair of vectors could produce a resultant of 35?</p>",
                "options": [
                    "15 and 15",
                    "20 and 20",
                    "30 and 70",
                    "20 and 60"
                ],
                "answer": "B",
                "explanation": "Two vectors have a maximum resultant, whose magnitude is equal to the numerical sum of the vector magnitudes, when the angle between vectors is 0°. The resultant is a minimum at 180°, and the magnitude is equal to the numerical difference between the magnitudes. When this logic is used, only pair (20, 20) produces a maximum and minimum set that could include the given value of 35 if the angle were specified. All the others have maximum and minimum resultants that do not include 35 in their range.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_3",
                "topic": "Vectors & Trigonometry",
                "difficulty": "easy",
                "question": "A vector has a magnitude of 17 units and makes an angle of 20° with the positive <i>x</i>-axis. The magnitude of the horizontal component of this vector is</p>",
                "options": [
                    "16 units",
                    "4.1 units",
                    "5.8 units",
                    "50 units"
                ],
                "answer": "A",
                "explanation": "The formula for the horizontal component of a vector \\vec{A} is <i>A</i><sub><i>x</i></sub> = |\\vec{A} | cos θ, where |\\vec{A} | is the magnitude of \\vec{A}. When the known values are used, values <i>A</i><sub><i>x</i></sub> = 17 cos 20 = 15.9 units.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_4",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "As the angle between a given vector and the horizontal axis increases from 0° to 90°, the magnitude of the vertical component of this vector</p>",
                "options": [
                    "decreases",
                    "increases and then decreases",
                    "decreases and then increases",
                    "increases"
                ],
                "answer": "D",
                "explanation": "The vertical component of a vector is proportional to the sine of the angle, which increases to a maximum at 90°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_5",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Vector \\vec{A} has a magnitude of 10 units and makes an angle of 30° with the horizontal <i>x</i>-axis. Vector \\vec{B} has a magnitude of 25 units and makes an angle of 50° with the negative <i>x</i>-axis. What is the magnitude of the resultant of these two vectors?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w31\" role=\"presentation\" src=\"images/f040-01.jpg\"/></p>",
                "options": [
                    "20",
                    "35",
                    "15",
                    "25"
                ],
                "answer": "D",
                "explanation": "Form the components of each vector and then add these components, remembering the sign conventions; right and up are positive values. Thus, we have <i>A</i><sub><i>x</i></sub> = 10 cos 30 = 8.66 and <i>A</i><sub><i>y</i></sub> = 10 sin 30 = 5, <i>B</i><sub><i>x</i></sub> = −25 cos 50 = −16.06 and <i>B</i><sub><i>y</i></sub> = 25 sin 50 = 19.15.</p>\r\n<p class=\"exp\">The components of the resultant are <i>C</i><sub><i>x</i></sub> = <i>A</i><sub><i>x</i></sub> + <i>B</i><sub><i>x</i></sub> = 8.66 − 16.06, so <i>C</i><sub><i>x</i></sub> = −7.4 units and <i>C</i><sub><i>y</i></sub> = <i>A</i><sub><i>y</i></sub> + <i>B</i><sub><i>y</i></sub> = 5 + 19.15 = 24.15. The magnitude of this resultant vector is given by</p>\r\n\\[ A_x = A\\cos\\theta = 10\\cos(30^\\circ) = 8.66, \\quad B_x = -25\\cos(50^\\circ) = -16.07 \\]\r\n<p class=\"exp\">which rounds to |\\vec{C}| = 25 units.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_6",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Two concurrent vectors have magnitudes of 3 units and 8 units. The difference between these vectors is 8 units. The angle between these two vectors is</p>",
                "options": [
                    "34°",
                    "56°",
                    "79°",
                    "113°"
                ],
                "answer": "C",
                "explanation": "Use the law of cosines where <i>a</i> = 3, <i>b</i> = 8, and <i>c</i> = 8, and solve for cos θ:</p>\r\n\\[ A_y = A\\sin\\theta = 10\\sin(30^\\circ) = 5.0, \\quad B_y = 25\\sin(50^\\circ) = 19.15 \\]\r\n<p class=\"exp\">Solving gives cos θ = 0.1875 and θ = 79°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_7",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Which of the following sets of displacements have equal resultants when performed in the order given?</p>",
                "options": [
                    "I.6 m east, 9 m north, 12 m west",
                    "II.6 m north, 9 m west, 12 m east",
                    "III.6 m east, 12 m west, 9 m north",
                    "IV.9 m north, 6 m east, 12 m west"
                ],
                "answer": "C",
                "explanation": "Vectors can be added in any order. The only requirement is that the vectors have the same magnitude and direction as they are shuffled. A look at the four sets of displacements indicates that I, III, and IV consist of the same vectors listed in different orders. These three sets will produce the same resultant.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_8",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Which vector represents the direction of the two concurrent vectors shown below?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w36\" role=\"presentation\" src=\"images/f041-01.jpg\"/></p>",
                "options": [
                    "\\( 0^\\circ \\)",
                    "\\( 30^\\circ \\)",
                    "\\( 45^\\circ \\)",
                    "\\( 60^\\circ \\)"
                ],
                "answer": "C",
                "explanation": "Sketch the vectors head to tail as if forming a vector triangle in construction. The resultant is drawn from the tail of the first vector to the head of the second. Choose the horizontal vector as the first one; then choice (C) is the general direction of the resultant.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_9",
                "topic": "Vectors & Trigonometry",
                "difficulty": "hard",
                "question": "Three forces act concurrently on a point <i>P</i> as shown below. Which vector represents the direction of the resultant force on point <i>P</i>?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w35\" role=\"presentation\" src=\"images/f041-02.jpg\"/></p>",
                "options": [
                    "\\( 0^\\circ \\)",
                    "\\( 30^\\circ \\)",
                    "\\( 60^\\circ \\)",
                    "\\( 90^\\circ \\)"
                ],
                "answer": "B",
                "explanation": "Sketch the vectors in any order, as shown below. Draw the resultant from the tail of the first vector to the head of the last.</p>\r\n\\[ R = \\sqrt{R_x^2 + R_y^2} = \\sqrt{(-7.41)^2 + (24.15)^2} \\approx 25.3 \\]</li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_10",
                "topic": "Vectors & Trigonometry",
                "difficulty": "hard",
                "question": "On a baseball field, first base is about 30 m away from home plate. A batter gets a hit and runs toward first base. She runs 3 m past the base and then runs back to stand on it. The magnitude of her final displacement from home plate is</p>",
                "options": [
                    "27 m",
                    "30 m",
                    "33 m",
                    "36 m"
                ],
                "answer": "B",
                "explanation": "The displacement is in the direction of first base and is equal in magnitude to the straight-line distance between home plate and first base (30 m).</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    }
};
