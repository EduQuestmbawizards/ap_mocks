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
                "id": "ap-topic-phys1-energy_q1",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "Which of the following are the units for the spring constant, <span>$k$</span>?</p>",
                "options": [
                    "kg · $m^{2}$/$s^{2}$",
                    "kg · $s^{2}$",
                    "kg · m/s",
                    "kg/$s^{2}$"
                ],
                "answer": "D",
                "explanation": "The units for the spring or force constant are provided by Hooke’s law, $F$ = <i>kx</i>, and are newtons per meter. Recall that 1 N = 1 kg m/$s^{2}$, so dividing by $m$ gives kg/$s^{2}$.</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q2",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "Which of the following is an expression for mechanical power?</p>",
                "options": [
                    "<i>Ft</i>/$m$",
                    "$F$ <sup>2</sup>$m$/$a$",
                    "<i>Fm</i><sup>2</sup>/$t$",
                    "$F$ <sup>2</sup>$t$/$m$"
                ],
                "answer": "D",
                "explanation": "Power is equal to work done divided by time. Therefore,</p>\r\n<p class=\"center1\">$P = \\frac{W}{t} = \\frac{Fd}{t}$</p>\r\n<p class=\"exp\">Using some algebra and kinematics, we see that</p>\r\n<p class=\"center1\">$P = \\frac{Fd}{t} = Fv = Fat = F\\left(\\frac{F}{m}\\right)t = \\frac{F^2 t}{m}$</p>\r\n<p class=\"exp\">You could also get the answer by verifying which expression has units of joules per second.</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q3",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "A pendulum consisting of a mass $m$ attached to a light string of length <i>ℓ</i> is displaced from its rest position, making an angle θ with the vertical. It is then released and allowed to swing freely. Which of the following expressions represents the velocity of the mass when it reaches its lowest position?</p>",
                "options": [
                    "$ 0.5\\text{ J} $",
                    "$ 1.0\\text{ J} $",
                    "$ 2.0\\text{ J} $",
                    "$ 4.0\\text{ J} $"
                ],
                "answer": "A",
                "explanation": "Consider the sketch below of the situation:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w55\" role=\"presentation\" src=\"images/f104-03.jpg\"/></p>\r\n<p class=\"exp\">From the geometry of the sketch, note that</p>\r\n<p class=\"center1\">$h = \\ell - \\ell\\cos\\theta = \\ell(1 - \\cos\\theta)$</p>\r\n<p class=\"exp\">If it is assumed that there is no friction, gravity is the only conservative force acting to do work. Therefore,</p>\r\n<p class=\"center1\">$ME_{\\text{bottom}} = ME_{\\text{top}}, KE_{\\text{bottom}} = PE_{\\text{top}}, \\frac{1}{2}m v^2 = mgh$</p>\r\n<p class=\"exp\">and so, at the bottom,</p>\r\n<p class=\"center1\">$v = \\sqrt{2gh} = \\sqrt{2g\\ell(1 - \\cos\\theta)}$</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q4",
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
                "explanation": "Power is equal to the product of the average force applied times the velocity. If the velocity is doubled, and the power is constant, the average force must be halved. Since $F$ = <i>ma</i>, the average acceleration of the belt must be halved as well.</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q5",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A mass $m$ is moving horizontally along a nearly frictionless floor with velocity $v$. The mass now encounters a part of the floor that has a coefficient of kinetic friction given by $\\mu$. The total distance traveled by the mass before it is slowed by friction to a stop is given by</p>",
                "options": [
                    "2$v^{2}$/<i>μg</i>",
                    "$v^{2}$/2<i>μg</i>",
                    "2<i>μgv</i><sup>2</sup>",
                    "<i>μv</i><sup>2</sup>/2$g$"
                ],
                "answer": "B",
                "explanation": "The only applied force is friction, which is doing work to stop the mass. This work is being taken from the initial kinetic energy. For friction, we know that $f$ = <i>μN</i>, and since the motion is horizontal, $N$ = <i>mg</i>. Let $x$ be the distance traveled while stopping; therefore, we can write that $W$<sub>$f$</sub> = <i>KE</i> and:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w21\" role=\"presentation\" src=\"images/f104-05a.jpg\"/></p>\r\n<p class=\"exp\">Solving for $x$, we get:</p>\r\n<p class=\"center1\">$x = \\frac{v^2}{2\\mu g}$</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q6",
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
                "id": "ap-topic-phys1-energy_q7",
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
                "explanation": "Since we have a conservative system,</p>\r\n<p class=\"center1\">$KE_{\\text{bottom}} = PE_{\\text{top}} = mgh = (2)(9.8)(0.17)$</p>\r\n<p class=\"exp\">Remember to change 17 cm to 0.17 m!</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q8",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A 0.3-kg mass rests on top of a spring that has been compressed by 0.04 m. Neglect any frictional effects, and consider the spring to be massless. Then, if the spring has a constant $k$ equal to 2,000 N/m, to what height will the mass rise when the system is released?</p>",
                "options": [
                    "1.24 m",
                    "0.75 m",
                    "0.54 m",
                    "1.04 m"
                ],
                "answer": "C",
                "explanation": "We are dealing with a conservative system, so the initial starting energy is just the potential energy of the compressed spring. This energy supplies the work needed to raise the mass a height $h$, which is a gain in gravitational potential energy. Thus, we equate these two expressions and solve for the height:</p>\r\n<p class=\"center1\">$\\frac{1}{2}(2,000)(0.4)^2 = (0.3)(9.8)h$</p>\r\n<p class=\"exp\">Thus, $h$ = 0.54 m.</p></li>\r\n<li>"
            },
            {
                "id": "ap-topic-phys1-energy_q9",
                "topic": "Energy & Work",
                "difficulty": "hard",
                "question": "A box is pulled along a smooth floor by a force $F$, making an angle θ with the horizontal. As θ increases, the amount of work done to pull the box the same distance, <span>$d$</span>,</p>",
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
                "id": "ap-topic-phys1-energy_q10",
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
            },
            {
                "id": "ap-topic-phys1-energy_q11",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "medium",
                "question": "A spring with force constant $k = 200\\text{ N/m}$ is compressed by $0.10\\text{ m}$ and used to launch a $0.25\\text{ kg}$ ball horizontally across a frictionless table. What is the launch speed of the ball?",
                "options": [
                    "$2.8\\text{ m/s}$",
                    "$4.0\\text{ m/s}$",
                    "$1.4\\text{ m/s}$",
                    "$8.0\\text{ m/s}$"
                ],
                "answer": "A",
                "explanation": "Conservation of energy: $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 \\implies v = x\\sqrt{k/m} = 0.10\\sqrt{200/0.25} = 0.10\\sqrt{800} = 0.10(28.28) \\approx 2.83\\text{ m/s}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q12",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "medium",
                "question": "A conservative force acting on a particle is given by $F(x) = -4x^3$ (in Newtons). What is the potential energy function $U(x)$, assuming $U(0) = 0$?",
                "options": [
                    "$U(x) = -x^4$",
                    "$U(x) = x^4$",
                    "$U(x) = 12x^2$",
                    "$U(x) = -12x^2$"
                ],
                "answer": "B",
                "explanation": "$U(x) = -\\int_0^x F(x')dx' = -\\int_0^x (-4x'^3)dx' = [x'^4]_0^x = x^4$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q13",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "hard",
                "question": "A roller coaster car of mass $m$ starts from rest at height $h$ and descends along a frictionless track into a vertical loop of radius $R$. What is the minimum height $h$ required for the car to maintain contact with the track at the top of the loop?",
                "options": [
                    "$h = 2.0R$",
                    "$h = 3.0R$",
                    "$h = 2.5R$",
                    "$h = 1.5R$"
                ],
                "answer": "C",
                "explanation": "At the top of the loop, minimum speed to avoid losing contact satisfies $mg = mv^2/R \\implies v^2 = gR$. Conservation of energy from height $h$: $mgh = mg(2R) + \\frac{1}{2}mv^2 = 2mgR + \\frac{1}{2}mgR = 2.5mgR \\implies h = 2.5R$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q14",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "easy",
                "question": "A constant force $F = 50\\text{ N}$ pulls a sled a distance $d = 10\\text{ m}$ across snow at an angle of $60^\\circ$ above horizontal. How much work is done by this force?",
                "options": [
                    "$500\\text{ J}$",
                    "$433\\text{ J}$",
                    "$125\\text{ J}$",
                    "$250\\text{ J}$"
                ],
                "answer": "D",
                "explanation": "$W = F d \\cos\\theta = 50 \\times 10 \\times \\cos 60^\\circ = 500 \\times 0.50 = 250\\text{ J}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q15",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "medium",
                "question": "An electric motor delivers $2.0\\text{ kW}$ of mechanical power to hoist a $400\\text{ kg}$ crate at constant speed. What is the upward speed of the crate ($g = 10\\text{ m/s}^2$)?",
                "options": [
                    "$0.50\\text{ m/s}$",
                    "$2.0\\text{ m/s}$",
                    "$5.0\\text{ m/s}$",
                    "$0.20\\text{ m/s}$"
                ],
                "answer": "A",
                "explanation": "$P = F v = mg v \\implies v = \\frac{P}{mg} = \\frac{2000\\text{ W}}{400 \\times 10\\text{ N}} = \\frac{2000}{4000} = 0.50\\text{ m/s}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q16",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "easy",
                "question": "A block of mass $m$ slides across a rough horizontal patch of length $L$ with coefficient of kinetic friction $\\mu_k$. How much mechanical energy is dissipated as thermal energy?",
                "options": [
                    "$\\frac{1}{2}\\mu_k mg L$",
                    "$\\mu_k mg L$",
                    "$2\\mu_k mg L$",
                    "$\\mu_k m g / L$"
                ],
                "answer": "B",
                "explanation": "Thermal energy generated equals the work done by friction: $W_{nc} = -f_k L = -(\\mu_k mg)L$. The dissipated thermal energy is $\\Delta E_{th} = \\mu_k mg L$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q17",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "medium",
                "question": "A pendulum bob of mass $m$ is released from rest at an angle $\\theta_0$ with the vertical. What is its speed at the lowest point of the swing if the string has length $L$?",
                "options": [
                    "$\\sqrt{2gL\\cos\\theta_0}$",
                    "$\\sqrt{gL(1 - \\sin\\theta_0)}$",
                    "$\\sqrt{2gL(1 - \\cos\\theta_0)}$",
                    "$\\sqrt{2gL(1 + \\cos\\theta_0)}$"
                ],
                "answer": "C",
                "explanation": "Vertical drop: $\\Delta h = L - L\\cos\\theta_0 = L(1 - \\cos\\theta_0)$. By conservation of energy: $\\frac{1}{2}mv^2 = mg\\Delta h \\implies v = \\sqrt{2gL(1 - \\cos\\theta_0)}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q18",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "medium",
                "question": "A graph shows force $F(x)$ vs position $x$ as a trapezoid from $x = 0$ to $x = 6\\text{ m}$, with parallel bases of lengths $6\\text{ m}$ and $2\\text{ m}$, and maximum height $10\\text{ N}$. What is the total work done?",
                "options": [
                    "$60\\text{ J}$",
                    "$30\\text{ J}$",
                    "$80\\text{ J}$",
                    "$40\\text{ J}$"
                ],
                "answer": "D",
                "explanation": "Work is the area under $F-x$: $\\text{Area} = \\frac{b_1 + b_2}{2}h = \\frac{6 + 2}{2}(10) = 4 \\times 10 = 40\\text{ J}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q19",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "easy",
                "question": "If the kinetic energy of an object is quadrupled, by what factor does its linear momentum increase?",
                "options": [
                    "$2$",
                    "$4$",
                    "$\\sqrt{2}$",
                    "$16$"
                ],
                "answer": "A",
                "explanation": "$K = \\frac{p^2}{2m} \\implies p = \\sqrt{2mK}$. If $K$ is multiplied by 4, momentum $p$ increases by $\\sqrt{4} = 2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys1-energy_q20",
                "topic": "ap-topic-phys1-energy",
                "difficulty": "easy",
                "question": "A force is non-conservative if:",
                "options": [
                    "The work done depends solely on the initial and final positions",
                    "The total work done on a closed loop is non-zero and depends on the path taken",
                    "It can be derived from the negative gradient of a scalar potential energy",
                    "Mechanical energy of the system is strictly conserved"
                ],
                "answer": "B",
                "explanation": "Non-conservative forces (like friction and air resistance) dissipate mechanical energy into heat/sound; the work done along a closed path is non-zero and path-dependent.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20
    }
};
