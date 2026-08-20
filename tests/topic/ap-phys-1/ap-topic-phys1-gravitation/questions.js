// Specific Question Bank for Test: ap-topic-phys1-gravitation
const AP_TEST_DATA = {
    "ap-topic-phys1-gravitation": {
        "id": "ap-topic-phys1-gravitation",
        "title": "AP Physics 1: Universal Gravitation & Orbits",
        "subtitle": "Newton's law of universal gravitation, gravitational fields, circular orbits and satellite energy",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Gravitation",
        "questions": [
            {
                "id": "tp_phys1_grav_1",
                "topic": "Gravitation",
                "difficulty": "easy",
                "question": "What is the value of $g$ at a height above Earth’s surface that is equal to the radius of Earth?</p>",
                "options": [
                    "9.8 N/kg",
                    "4.9 N/kg",
                    "6.93 N/kg",
                    "2.45 N/kg"
                ],
                "answer": "D",
                "explanation": "The value of $g$ varies inversely with the square of the distance from the center of Earth; therefore, if we double the distance from the center (as in this case), the value of $g$ decreases by one-fourth: 1/4(9.8) = 2.45. Since $g = F$/$m$, alternative units are newtons per kilogram.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_2",
                "topic": "Gravitation",
                "difficulty": "easy",
                "question": "A planet has half the mass of Earth and half the radius. Compared to the acceleration due to gravity near the surface of Earth, the acceleration of gravity near the surface of this other planet is</p>",
                "options": [
                    "twice as much",
                    "one-fourth as much",
                    "half as much",
                    "the same"
                ],
                "answer": "A",
                "explanation": "If, using the formula for $g$, we take half the mass, the value decreases by one-half. If we decrease the radius by half, the value will increase by four times. Combining both effects results in an overall increase of two times.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_3",
                "topic": "Gravitation",
                "difficulty": "easy",
                "question": "Which of the following is an expression for the acceleration of gravity at the surface of a planet with uniform density ρ and radius <span>$r$</span>?</p>",
                "options": [
                    "$G$(4πρ/3$r^{2}$)",
                    "$G$(4πρ$r^{2}$/3)",
                    "$G$(4πρ/3$r$)",
                    "$G$(4π$r$ρ/3)"
                ],
                "answer": "D",
                "explanation": "The formula for $g$ is $g$ = <i>GM</i>/$r^{2}$. The planet is essentially a sphere of mass $M$, radius $r$, and density ρ (with $M = V$ρ, where $V$ is the volume). The volume of the planet is given by $V$ = 4/3<i>πr</i><sup>3</sup>. Making the substitutions yields:</p> g = \\frac{GM}{r^2} \\implies g' = \\frac{GM}{(2R)^2} = \\frac{g}{4} = \\frac{9.8}{4} = 2.45\\text{ N/kg} $$</li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_4",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "What is the orbital velocity of a satellite at a height of 300 km above the surface of Earth? (The mass of Earth is approximately 6 × 10<sup>24</sup> kg, and its radius is 6.4 × 10<span><sup>6</sup></span> m.)</p>",
                "options": [
                    "5.42 × 10<sup>1</sup> m/s",
                    "1.15 × 10<sup>6</sup> m/s",
                    "7.7 × 10<sup>3</sup> m/s",
                    "6 × 10<sup>6</sup> m/s"
                ],
                "answer": "C",
                "explanation": "The formula for orbital velocity is</p> v_{\\text{orbit}} = \\sqrt{\\frac{GM}{r}} $$\r\n<p class=\"nump\">where $r$ is the distance from the center of Earth. In this case, we must add 300 km = 300,000 m to the radius of Earth. Thus, $r$ = 6.7 × 10<sup>6</sup> m. Substituting the given values yields $v_{orbit}$ = 7,728 or 7.7 × 10<sup>3</sup> m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_5",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "What is the escape velocity from the Moon, given that the mass of the Moon is 7.2 × 10<sup>22</sup> kg and its radius is 1.778 <span>×</span> 10<span><sup>6</sup></span> m?</p>",
                "options": [
                    "1.64 × 10<sup>3</sup> m/s",
                    "2.32 × 10<sup>3</sup> m/s",
                    "2.69 × 10<sup>6</sup> m/s",
                    "5.38 × 10<sup>6</sup> m/s"
                ],
                "answer": "B",
                "explanation": "The formula for escape velocity is</p> T = 2\\pi\\sqrt{\\frac{r^3}{GM}} $$\r\n<p class=\"nump\">Substituting the given values yields $v_{esc}$ = 2,324 or 2.32 × 10<sup>3</sup> m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_6",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "A black hole theoretically has an escape velocity that is greater than or equal to the velocity of light (3 × 10<sup>8</sup> m/s). If the effective mass of the black hole is equal to the mass of the Sun (2 × 10<sup>30</sup> kg), what is the effective “radius” (called the “Schwarzschild radius”) of the black hole?</p>",
                "options": [
                    "3 × 10<sup>3</sup> m",
                    "1.5 × 10<sup>3</sup> m",
                    "8.9 × 10<sup>6</sup> m",
                    "4.45 × 10<sup>6</sup> m"
                ],
                "answer": "A",
                "explanation": "From question 6, we know that the escape velocity is given by $ g = G\\frac{M}{R^2} $ To find $r$, we need to square both sides, and then solve for the radius. This yields $r$ = 2<i>GM</i>/$v^{2}$. Substituting the given values yields $r$ = 3,000 or 3 × 10<sup>3</sup> m. (This is only a “theoretical” size for the black hole. As an interesting exercise, try calculating the value of $g$ on such an object!)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_7",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "What is the gravitational force of attraction between two trucks, each of mass 20,000 kg, separated by a distance of 2 m?</p>",
                "options": [
                    "0.057 N",
                    "0.013 N",
                    "0.0067 N",
                    "1.20 N"
                ],
                "answer": "C",
                "explanation": "We use the formula for gravitational force:</p>\r\n<p class=\"center1\">$F = \\frac{GM_1 M_2}{r^2}$</p>\r\n<p class=\"nump\">Substituting the given values (don’t forget to square the distance!) yields $F$ = 0.0067 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_8",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "The gravitational force between two masses is 36 N. If the distance between masses is tripled, the force of gravity will be</p>",
                "options": [
                    "the same",
                    "18 N",
                    "9 N",
                    "4 N"
                ],
                "answer": "D",
                "explanation": "The force of gravity is an inverse-square-law relationship. This means that, as the distance is tripled, the force is decreased by one-ninth. One-ninth of 36 N is 4 N.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            },
            {
                "id": "ap-topic-phys1-gravitation-q9",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q9)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q10",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q10)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q11",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q11)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q12",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q12)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q13",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q13)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q14",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q14)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q15",
                "topic": "Gravitation",
                "difficulty": "medium",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q15)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q16",
                "topic": "Gravitation",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q16)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q17",
                "topic": "Gravitation",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q17)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q18",
                "topic": "Gravitation",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q18)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q19",
                "topic": "Gravitation",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q19)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            },
            {
                "id": "ap-topic-phys1-gravitation-q20",
                "topic": "Gravitation",
                "difficulty": "hard",
                "question": "Which principle or conceptual analysis is fundamental to the study of Gravitation in AP AP PHYSICS 1 (Concept Q20)?",
                "options": [
                    "Rigorous analytical evaluation of core theoretical frameworks and empirical data for Gravitation",
                    "Superficial rote memorization without contextual application",
                    "Random guessing based on extraneous assumptions",
                    "Disregarding standard scientific, mathematical, or literary models"
                ],
                "answer": "A",
                "explanation": "In official AP coursework, Gravitation requires in-depth mastery of primary concepts, evidence-based reasoning, and quantitative/qualitative problem-solving."
            }
        ],
        "totalQuestions": 20
    }
};
