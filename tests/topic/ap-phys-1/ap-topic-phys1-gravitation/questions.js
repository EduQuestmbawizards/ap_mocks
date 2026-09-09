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
                "id": "ap-topic-phys1-gravitation_q1",
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
                "id": "ap-topic-phys1-gravitation_q2",
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
                "id": "ap-topic-phys1-gravitation_q3",
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
                "id": "ap-topic-phys1-gravitation_q4",
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
                "id": "ap-topic-phys1-gravitation_q5",
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
                "id": "ap-topic-phys1-gravitation_q6",
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
                "id": "ap-topic-phys1-gravitation_q7",
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
                "id": "ap-topic-phys1-gravitation_q8",
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
                "id": "ap-topic-phys1-gravitation_q9",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "easy",
                "question": "Two spherical satellites of mass $M$ orbit each other separated by distance $R$. If their separation is doubled to $2R$, how does the gravitational attraction between them change?",
                "options": [
                    "It decreases by a factor of 4",
                    "It decreases by a factor of 2",
                    "It remains unchanged",
                    "It decreases by a factor of 8"
                ],
                "answer": "A",
                "explanation": "Newton's law of universal gravitation: $F_g = \\frac{GM_1M_2}{R^2}$. If distance doubles, force scales as $1/2^2 = 1/4$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q10",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "medium",
                "question": "A satellite orbits Earth in a stable circular orbit of radius $r$ with orbital speed $v_0$. What is the orbital speed of a satellite in a circular orbit of radius $4r$?",
                "options": [
                    "$0.25 v_0$",
                    "$0.50 v_0$",
                    "$2.0 v_0$",
                    "$\\frac{1}{\\sqrt{2}} v_0$"
                ],
                "answer": "B",
                "explanation": "Centripetal force is gravity: $\\frac{mv^2}{r} = \\frac{GMm}{r^2} \\implies v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v_0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q11",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "easy",
                "question": "What is Kepler's Third Law relationship between orbital period $T$ and semi-major axis $a$ for planets orbiting the Sun?",
                "options": [
                    "$T^3 \\propto a^2$",
                    "$T \\propto a^2$",
                    "$T^2 \\propto a^3$",
                    "$T^2 \\propto a$"
                ],
                "answer": "C",
                "explanation": "Kepler's third law states that the square of the orbital period is proportional to the cube of the semi-major axis: $T^2 = \\frac{4\\pi^2}{GM}a^3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q12",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "medium",
                "question": "An astronaut weighs $600\\text{ N}$ on Earth's surface. What is the astronaut's weight in an orbit at an altitude equal to Earth's radius $R_E$ above the surface?",
                "options": [
                    "$300\\text{ N}$",
                    "$0\\text{ N}$",
                    "$75\\text{ N}$",
                    "$150\\text{ N}$"
                ],
                "answer": "D",
                "explanation": "At altitude $R_E$, the distance from Earth's center is $r = R_E + R_E = 2R_E$. Weight scales as $1/r^2 = 1/2^2 = 1/4$. $W = 600 / 4 = 150\\text{ N}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q13",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "easy",
                "question": "The escape velocity from the surface of a spherical planet of mass $M$ and radius $R$ is given by:",
                "options": [
                    "$v_{esc} = \\sqrt{\\dfrac{2GM}{R}}$",
                    "$v_{esc} = \\sqrt{\\dfrac{GM}{R}}$",
                    "$v_{esc} = \\sqrt{\\dfrac{GM}{2R}}$",
                    "$v_{esc} = \\dfrac{2GM}{R^2}$"
                ],
                "answer": "A",
                "explanation": "Setting total mechanical energy equal to zero at infinity: $\\frac{1}{2}mv_{esc}^2 - \\frac{GMm}{R} = 0 \\implies v_{esc} = \\sqrt{\\frac{2GM}{R}}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q14",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "medium",
                "question": "Planet X has twice the mass of Earth and twice the radius of Earth. How does the gravitational acceleration $g_X$ at Planet X's surface compare to Earth's surface gravity $g$?",
                "options": [
                    "$g_X = 1.0 g$",
                    "$g_X = 0.50 g$",
                    "$g_X = 2.0 g$",
                    "$g_X = 0.25 g$"
                ],
                "answer": "B",
                "explanation": "$g = \\frac{GM}{R^2}$. For Planet X: $g_X = \\frac{G(2M)}{(2R)^2} = \\frac{2}{4}\\frac{GM}{R^2} = 0.50 g$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q15",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "easy",
                "question": "In an elliptical orbit, at which point is the orbiting body traveling at its maximum orbital speed?",
                "options": [
                    "Apoapsis (farthest distance)",
                    "At the semi-minor axis intersection",
                    "Periapsis (closest approach)",
                    "Speed is constant at all points"
                ],
                "answer": "C",
                "explanation": "By conservation of angular momentum ($L = m r v_\\perp = \\text{const}$), speed is greatest when distance $r$ is smallest (periapsis).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q16",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "medium",
                "question": "What is the total mechanical energy $E$ of a satellite of mass $m$ in a bound circular orbit of radius $r$ around a planet of mass $M$?",
                "options": [
                    "$E = +\\dfrac{GMm}{2r}$",
                    "$E = -\\dfrac{GMm}{r}$",
                    "$E = 0$",
                    "$E = -\\dfrac{GMm}{2r}$"
                ],
                "answer": "D",
                "explanation": "$K = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$ and $U = -\\frac{GMm}{r}$. Total energy $E = K + U = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q17",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "medium",
                "question": "If Earth were to magically shrink to half its current radius while maintaining its total mass, how would the orbital period of the Moon change?",
                "options": [
                    "It would remain completely unchanged",
                    "It would decrease by half",
                    "It would double",
                    "It would decrease by a factor of 4"
                ],
                "answer": "A",
                "explanation": "The gravitational force on the Moon depends only on the Earth's mass and the center-to-center separation. Since neither changes, the Moon's orbit and period are unaffected.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q18",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "medium",
                "question": "According to Kepler's Second Law, the line connecting a planet to the Sun sweeps out equal areas in equal intervals of time. This law is a direct consequence of:",
                "options": [
                    "Conservation of linear momentum",
                    "Conservation of angular momentum under a central force",
                    "Newton's Third Law",
                    "Conservation of electric charge"
                ],
                "answer": "B",
                "explanation": "Because gravitational force is radial (central), the torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$, so orbital angular momentum $\\vec{L}$ is strictly conserved ($dA/dt = L/(2m) = \\text{const}$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q19",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "easy",
                "question": "A geosynchronous satellite has an orbital period equal to Earth's rotational period (24 hours). What determines its required orbital altitude?",
                "options": [
                    "The mass and solar panel area of the satellite",
                    "The launch vehicle thrust capacity",
                    "Kepler's Third Law based on Earth's mass and rotational period",
                    "Atmospheric density fluctuations"
                ],
                "answer": "C",
                "explanation": "Setting $T = 86400\\text{ s}$ in $T^2 = \\frac{4\\pi^2}{GM}r^3$ uniquely fixes the semi-major axis $r \\approx 42,164\\text{ km}$ regardless of satellite mass.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-gravitation_q20",
                "topic": "ap-topic-phys1-gravitation",
                "difficulty": "hard",
                "question": "The gravitational field inside a uniform spherical shell of mass $M$ and radius $R$ at any point $r < R$ is:",
                "options": [
                    "$\\dfrac{GM}{r^2}$ pointing toward the center",
                    "Constant and equal to $\\dfrac{GM}{R^2}$",
                    "Linearly increasing with radius $r$",
                    "Zero everywhere inside the shell"
                ],
                "answer": "D",
                "explanation": "Newton's shell theorem proves that the gravitational forces from all symmetric mass elements of a uniform spherical shell cancel identically at any interior point.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20
    }
};
