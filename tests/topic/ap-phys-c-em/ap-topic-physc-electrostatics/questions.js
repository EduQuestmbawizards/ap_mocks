// Specific Question Bank for Test: ap-topic-physc-electrostatics
const AP_TEST_DATA = {
    "ap-topic-physc-electrostatics": {
        "id": "ap-topic-physc-electrostatics",
        "title": "AP Physics C: Electrostatics, Potential & Gauss's Law",
        "subtitle": "In-depth practice problems with calculus derivations and scoring rubrics for Electrostatics",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics C: Electricity & Magnetism",
        "topic": "Electrostatics",
        "questions": [
            {
                "id": "ap-topic-physc-electrostatics_q1",
                "topic": "Electrostatics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>1.</strong> What is the electric field at a point halfway between the two charges?</p>",
                "options": [
                    "<p><em>kQ</em>/$a^{2}$</p>",
                    "<p>2<em>kQ</em>/$a^{2}$</p>",
                    "<p>zero</p>",
                    "<p><em>kQQ</em>/$a^{2}$</p>",
                    "<p>2<em>kQ</em>/$a$</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>1.</strong> <strong>C—</strong>Electric field is a <em>vector.</em> Look at the field at the center due to each charge. The field due to the left-hand charge points away from the positive charge; i.e., to the right; the field due to the right-hand charge points to the left. Because the charges are equal and are the same distance from the center point, the fields due to each charge have equal magnitudes. So the electric field vectors cancel! $E$ = 0.</p>"
            },
            {
                "id": "ap-topic-physc-electrostatics_q2",
                "topic": "Electrostatics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>2.</strong> What is the electric potential at a point halfway between the two charges?</p><p class=\"noindentt1\">Questions 3 and 4:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0171-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"quesn\">The diagram above shows two parallel metal plates that are separated by distance $d$. The potential difference between the plates is $V$. Point $A$ is twice as far from the negative plate as is point $B$.</p>",
                "options": [
                    "<p><em>kQ</em>/$a$</p>",
                    "<p>2<em>kQ</em>/$a$</p>",
                    "<p>zero</p>",
                    "<p>4<em>kQ</em>/$a$</p>",
                    "<p>8<em>kQ</em>/$a$</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong>2.</strong> <strong>D—</strong>Electric potential is a <em>scalar.</em> Look at the potential at the center due to each charge: Each charge is distance $a$/2 from the center point, so the potential due to each is <em>kQ</em>/($a$/2), which works out to 2<em>kQ</em>/<em>a.</em> The potentials due to both charges are positive, so add these potentials to get 4<em>kQ</em>/<em>a.</em></p>"
            },
            {
                "id": "ap-topic-physc-electrostatics_q3",
                "topic": "Electrostatics",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong>3.</strong> Which of the following statements about the electric potential between the plates is correct?</p>",
                "options": [
                    "<p>The electric potential is the same at points $A$ and <em>B.</em></p>",
                    "<p>The electric potential is two times larger at $A$ than at <em>B.</em></p>",
                    "<p>The electric potential is two times larger at $B$ than at <em>A.</em></p>",
                    "<p>The electric potential is four times larger at $A$ than at <em>B.</em></p>",
                    "<p>The electric potential is four times larger at $B$ than at <em>A.</em></p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong>3.</strong> <strong>B—</strong>If the potential difference between plates is, say, 100 V, then we could say that one plate is at +100 V and the other is at 0 V. So, the potential <em>must</em> change at points in between the plates. The electric field is uniform and equal to $V$/$d$ ($d$ is the distance between plates). Thus, the potential increases linearly between the plates, and A must have twice the potential as B.</p>"
            },
            {
                "id": "ap-topic-physc-electrostatics_q4",
                "topic": "Electrostatics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>4.</strong> Which of the following statements about the electric field between the plates is correct?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0172-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>The electric field is the same at points $A$ and <em>B.</em></p>",
                    "<p>The electric field is two times larger at $A$ than at <em>B.</em></p>",
                    "<p>The electric field is two times larger at $B$ than at <em>A.</em></p>",
                    "<p>The electric field is four times larger at $A$ than at <em>B.</em></p>",
                    "<p>The electric field is four times larger at $B$ than at <em>A.</em></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong>4.</strong> <strong>A—</strong>The electric field by definition is <em>uniform</em> between parallel plates. This means the field must be the same everywhere inside the plates.</p>"
            },
            {
                "id": "ap-topic-physc-electrostatics_q5",
                "topic": "Electrostatics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>5.</strong> A very long cylindrical conductor is surrounded by a very long cylindrical conducting shell, as shown above. A length $L$ of the inner conductor carries positive charge <em>Q.</em> The same length $L$ of the outer shell carries total charge −3<em>Q.</em> How much charge is distributed on a length $L$ of the outside surface of the outer shell?</p><h4 class=\"h4\">Free Response:</h4>",
                "options": [
                    "<p>none</p>",
                    "<p>−$Q$</p>",
                    "<p>−2$Q$</p>",
                    "<p>−3$Q$</p>",
                    "<p>−4$Q$</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong>5.</strong> <strong>C—</strong>We have cylindrical symmetry, so use Gauss’s law. Consider a Gaussian surface drawn within the outer shell. Inside a conducting shell, the electric field must be zero, as discussed in the chapter. By Gauss’s law, this means the Gaussian surface we drew must enclose zero net charge. Because the inner cylinder carries charge $+Q$, the inside surface of the shell must carry charge −$Q$ to get zero net charge enclosed by the Gaussian surface. What happens to the −2$Q$ that is left over on the conducting shell? It goes to the outer surface.</p>"
            },
            {
                "id": "ap-topic-physc-electrostatics_q6",
                "topic": "Electrostatics",
                "difficulty": "hard",
                "question": "<p class=\"ques\"><strong>6.</strong> Two conducting metal spheres of different radii, as shown below, each have charge −<em>Q.</em></p><p class=\"roman3r\"> i. If the two spheres are connected by a metal wire, charge will stop flowing when the electric field at the surface of each sphere is the same.</p><p class=\"roman3r\">ii. If the two spheres are connected by a metal wire, charge will stop flowing when the electric potential at the surface of each sphere is the same.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0172-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "<p>Consider one of the spheres. Is the charge on that sphere likely to clump together or to spread out? Explain briefly.</p>",
                    "<p>Is charge more likely to stay inside the metal spheres or on the surface of the metal spheres? Explain briefly.</p>",
                    "<p>If the two spheres are connected by a metal wire, will charge flow from the big sphere to the little sphere, or from the little sphere to the big sphere? Explain briefly.</p>",
                    "<p>Which of the following two statements is correct? Explain briefly.</p>",
                    "<p>Explain how the correct statement you chose from part (d) is consistent with your answer to (c).</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"quesal\"><strong>6.</strong> (a) Like charges repel, so the charges are more likely to spread out from each other as far as possible.</p><p class=\"alphabr1\">(b) “Conducting spheres” mean that the charges are free to move anywhere within or onto the surface of the spheres. But because the charges try to get as far away from each other as possible, the charge will end up on the surface of the spheres. This is actually a property of conductors—charge will always reside on the surface of the conductor, not inside.</p><p class=\"alphabr1\">(c) Charge will flow from the smaller sphere to the larger sphere. Following the reasoning from parts (a) and (b), the charges try to get as far away from each other as possible. Because both spheres initially carry the same charge, the charge is more concentrated on the smaller sphere; so the charge will flow to the bigger sphere to spread out. (The explanation that negative charge flows from low to high potential, and that potential is less negative at the surface of the bigger sphere, is also acceptable here.)</p><p class=\"alphabr1\">(d) The charge will flow until the potential is equal on each sphere. By definition, negative charges flow from low to high potential. So, if the potentials of the spheres are equal, no more charge will flow.</p><p class=\"alphabr1\">(e) The potential at the surface of each sphere is −<em>kQ</em>/<em>r,</em> where $r$ is the radius of the sphere. Thus, the potential at the surface of the smaller sphere is initially more negative, and the charge will initially flow low-to-high potential to the larger sphere.</p>"
            },
            {
                "id": "physc_elec_q7",
                "topic": "Field of Infinite Uniform Sheet of Charge",
                "difficulty": "medium",
                "question": "<p>Using Gauss's Law with a pillbox, what is the electric field magnitude $E$ near an infinite non-conducting sheet of uniform surface charge density $\\sigma$?</p>",
                "options": [
                    "$\\frac{\\sigma}{\\epsilon_0}$",
                    "$\\frac{\\sigma}{2\\epsilon_0}$",
                    "$\\frac{2\\sigma}{\\epsilon_0}$",
                    "$\\frac{\\sigma}{4\\pi\\epsilon_0}$",
                    "$\\frac{\\sigma}{2\\pi\\epsilon_0}$"
                ],
                "answer": "B",
                "explanation": "<p>$2EA = \\frac{\\sigma A}{\\epsilon_0} \\implies E = \\frac{\\sigma}{2\\epsilon_0}$.</p>"
            },
            {
                "id": "physc_elec_q8",
                "topic": "Electric Potential of Point Charge System",
                "difficulty": "easy",
                "question": "<p>Two point charges $+2\\,\\mu\\text{C}$ and $-2\\,\\mu\\text{C}$ are separated by $0.10\\text{ m}$. What is the electric potential at the midpoint between them?</p>",
                "options": [
                    "$-720\\text{ kV}$",
                    "$-360\\text{ kV}$",
                    "$0\\text{ V}$",
                    "$+360\\text{ kV}$",
                    "$+720\\text{ kV}$"
                ],
                "answer": "C",
                "explanation": "<p>$V = \\frac{k$( $+q$)}{d/2} + \\frac{k($-q$)}{d/2} = 0\\text{ V}$.</p>"
            },
            {
                "id": "physc_elec_q9",
                "topic": "Electric Dipole in Uniform Field",
                "difficulty": "medium",
                "question": "<p>An electric dipole with dipole moment $\\vec{p}$ is placed in a uniform electric field $\\vec{E}$. What is the potential energy $U$ of the dipole?</p>",
                "options": [
                    "$U = \\vec{p}\\cdot\\vec{E}$",
                    "$U = -\\vec{p}\\cdot\\vec{E}$",
                    "$U = |\\vec{p}\\times\\vec{E}|$",
                    "$U = -|\\vec{p}\\times\\vec{E}|$",
                    "$U = \\frac{1}{2}pE^2$"
                ],
                "answer": "B",
                "explanation": "<p>$U = -\\vec{p}\\cdot\\vec{E} = $-p$ E\\cos\\theta$.</p>"
            },
            {
                "id": "physc_elec_q10",
                "topic": "Field Inside a Cavity in a Conductor",
                "difficulty": "medium",
                "question": "<p>An uncharged solid conductor has an empty hollow cavity of arbitrary shape inside. If an external electric field $\\vec{E}_0$ is applied, what is the electric field inside the empty cavity?</p>",
                "options": [
                    "$\\vec{E}_0$",
                    "$\\vec{E}_0 / 2$",
                    "$\\vec{0}$",
                    "$\\infty$",
                    "Non-zero and non-uniform"
                ],
                "answer": "C",
                "explanation": "<p>By electrostatic shielding, charge rearranges on the outer surface of the conductor to cancel the external field completely inside the conductor and cavity: $\\vec{E} = \\vec{0}$.</p>"
            },
            {
                "id": "physc_elec_q11",
                "topic": "Energy Stored in Spherical Charge Distribution",
                "difficulty": "hard",
                "question": "<p>What is the total electrostatic self-energy stored in the electric field of a conducting sphere of radius $R$ carrying charge $Q$?</p>",
                "options": [
                    "$\\frac{kQ^2}{R}$",
                    "$\\frac{kQ^2}{2R}$",
                    "$\\frac{3kQ^2}{5R}$",
                    "$\\frac{kQ^2}{4R}$",
                    "$\\frac{2kQ^2}{R}$"
                ],
                "answer": "B",
                "explanation": "<p>$U =$\\int_{R}^{\\infty} $frac{1}{2}\\epsilon_0 E^2 (4\\pi r^2\\,dr) = \\frac{kQ^2}{2R}$.</p>"
            },
            {
                "id": "physc_elec_q12",
                "topic": "Equipotential Surfaces",
                "difficulty": "easy",
                "question": "<p>What is the angle between electric field lines and equipotential surfaces at any point in space?</p>",
                "options": [
                    "$0^\\circ$ (parallel)",
                    "$30^\\circ$",
                    "$45^\\circ$",
                    "$90^\\circ$ (perpendicular)",
                    "The angle varies randomly"
                ],
                "answer": "D",
                "explanation": "<p>Since no work is done moving along an equipotential surface ($dW = $-q$\\vec{E}\\cdot d\\vec{r} = 0$), $\\vec{E}$ is always perpendicular ($90^\\circ$) to equipotential surfaces.</p>"
            },
            {
                "id": "physc_elec_q13",
                "topic": "Gauss's Law for Non-Uniform Volume Density",
                "difficulty": "hard",
                "question": "<p>A sphere of radius $R$ has non-uniform volume charge density $\\rho(r) = Cr$. What is the electric field $E(r)$ inside the sphere ($r < R$)?</p>",
                "options": [
                    "$\\frac{C r^2}{4\\epsilon_0}$",
                    "$\\frac{C r^2}{3\\epsilon_0}$",
                    "$\\frac{C r}{2\\epsilon_0}$",
                    "$\\frac{C r^3}{4\\epsilon_0 R}$",
                    "$\\frac{C R^2}{4\\epsilon_0}$"
                ],
                "answer": "A",
                "explanation": "<p>$q_{\\text{enc}} =$\\int_{0}^{r} (Cr')(4$pi r'^2\\,dr') = 4\\pi C\\left[\\frac{r^4}{4}\\right] = \\pi C r^4$. $E(4\\pi r^2) = \\frac{\\pi C r^4}{\\epsilon_0} \\implies E = \\frac{C r^2}{4\\epsilon_0}$.</p>"
            },
            {
                "id": "physc_elec_q14",
                "topic": "Capacitance of Isolated Conducting Sphere",
                "difficulty": "medium",
                "question": "<p>What is the capacitance $C$ of an isolated conducting sphere of radius $R$ in a vacuum?</p>",
                "options": [
                    "$4\\pi\\epsilon_0 R$",
                    "$2\\pi\\epsilon_0 R$",
                    "$\\epsilon_0 R$",
                    "$\\frac{4\\pi\\epsilon_0}{R}$",
                    "$4\\pi\\epsilon_0 R^2$"
                ],
                "answer": "A",
                "explanation": "<p>$V = \\frac{Q}{4\\pi\\epsilon_0 R} \\implies C = \\frac{Q}{V} = 4\\pi\\epsilon_0 R$.</p>"
            },
            {
                "id": "physc_elec_q15",
                "topic": "Acceleration of Charged Particle in Electric Field",
                "difficulty": "easy",
                "question": "<p>An electron of charge $-e$ and mass $m_e$ is placed in a uniform electric field $\\vec{E} = E_0\\hat{i}$. What is its acceleration vector?</p>",
                "options": [
                    "$\\frac{eE_0}{m_e}\\hat{i}$",
                    "$-\\frac{eE_0}{m_e}\\hat{i}$",
                    "$\\frac{m_e}{eE_0}\\hat{i}$",
                    "$-\\frac{m_e}{eE_0}\\hat{i}$",
                    "$\\vec{0}$"
                ],
                "answer": "B",
                "explanation": "<p>$\\vec{a} = \\frac{\\vec{F}}{m_e} = \\frac{$-e$(E_0\\hat{i})}{m_e} = -\\frac{eE_0}{m_e}\\hat{i}$.</p>"
            }
        ]
    }
};
