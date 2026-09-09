// Specific Question Bank for Test: ap-topic-phys2-fluids
const AP_TEST_DATA = {
    "ap-topic-phys2-fluids": {
        "id": "ap-topic-phys2-fluids",
        "title": "AP Physics 2: Fluids & Thermodynamics",
        "subject": "AP Physics 2: Algebra-Based",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-phys2-fluids_q1",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "According to Bernoulli's principle, as the speed of a fluid increases, what happens to its internal pressure?",
                "options": [
                    "Increases",
                    "Decreases",
                    "Remains constant",
                    "Becomes zero"
                ],
                "answer": "B",
                "explanation": "Faster fluid motion reduces static internal pressure."
            },
            {
                "id": "ap-topic-phys2-fluids_q2",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "Water flows through a horizontal pipe with a constriction. At Point 1, the pipe diameter is $4\\text{ cm}$ and fluid speed is $1.0\\text{ m/s}$. At Point 2, the diameter narrows to $2\\text{ cm}$. What is the fluid speed at Point 2?",
                "options": [
                    "4.0 m/s",
                    "2.0 m/s",
                    "0.25 m/s",
                    "8.0 m/s"
                ],
                "answer": "A",
                "explanation": "By the continuity equation for incompressible fluids, $A_1 v_1 = A_2 v_2$. Since area $A \\propto d^2$, $\\frac{v_2}{v_1} = \\left(\\frac{d_1}{d_2}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = 4$. Thus $v_2 = 4(1.0\\text{ m/s}) = 4.0\\text{ m/s}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q3",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "A solid cube with side length $0.10\\text{ m}$ and density $600\\text{ kg/m}^3$ floats in water (density $1000\\text{ kg/m}^3$). What fraction of the cube's volume is submerged below the water surface?",
                "options": [
                    "60%",
                    "40%",
                    "100%",
                    "36%"
                ],
                "answer": "A",
                "explanation": "For a floating object in static equilibrium, buoyant force equals weight: $F_b = W \\implies \\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{obj}} V_{\\text{total}} g \\implies \\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}} = \\frac{600}{1000} = 0.60 = 60\\%$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q4",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "A large open water storage tank has a small hole $5.0\\text{ m}$ below the water surface. Assuming ideal fluid flow and $g = 10\\text{ m/s}^2$, what is the speed of water discharging from the hole?",
                "options": [
                    "10 m/s",
                    "5.0 m/s",
                    "7.1 m/s",
                    "14 m/s"
                ],
                "answer": "A",
                "explanation": "Torricelli's Law (derived from Bernoulli's equation with $P_1 = P_2 = P_{\\text{atm}}$ and $v_1 \\approx 0$): $v = \\sqrt{2gh} = \\sqrt{2(10\\text{ m/s}^2)(5.0\\text{ m})} = \\sqrt{100} = 10\\text{ m/s}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q5",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "In a hydraulic lift, an input piston of area $0.02\\text{ m}^2$ is pushed down with a force of $100\\text{ N}$. What force is exerted by the output piston of area $0.50\\text{ m}^2$ at the same elevation?",
                "options": [
                    "2,500 N",
                    "500 N",
                    "1,000 N",
                    "5,000 N"
                ],
                "answer": "A",
                "explanation": "By Pascal's Principle, pressure is transmitted undiminished: $P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right) = 100\\text{ N} \\left(\\frac{0.50}{0.02}\\right) = 100(25) = 2,500\\text{ N}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q6",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "What is the absolute hydrostatic pressure at a depth of $20\\text{ m}$ below the surface of a lake, assuming atmospheric pressure $P_0 = 1.0 \\times 10^5\\text{ Pa}$, water density $\\rho = 1000\\text{ kg/m}^3$, and $g = 10\\text{ m/s}^2$?",
                "options": [
                    "$3.0 \\times 10^5\\text{ Pa}$",
                    "$2.0 \\times 10^5\\text{ Pa}$",
                    "$1.0 \\times 10^5\\text{ Pa}$",
                    "$4.0 \\times 10^5\\text{ Pa}$"
                ],
                "answer": "A",
                "explanation": "Absolute pressure $P = P_0 + \\rho g h = 1.0 \\times 10^5 + (1000)(10)(20) = 1.0 \\times 10^5 + 2.0 \\times 10^5 = 3.0 \\times 10^5\\text{ Pa}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q7",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "A heat engine operates between a hot reservoir at $500\\text{ K}$ and a cold reservoir at $300\\text{ K}$. What is the maximum theoretical (Carnot) thermal efficiency of this engine?",
                "options": [
                    "40%",
                    "60%",
                    "20%",
                    "67%"
                ],
                "answer": "A",
                "explanation": "Carnot efficiency $e_C = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300\\text{ K}}{500\\text{ K}} = 1 - 0.60 = 0.40 = 40\\%$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q8",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "An ideal gas undergoes an isobaric expansion at constant pressure $P = 2.0 \\times 10^5\\text{ Pa}$, expanding from $0.010\\text{ m}^3$ to $0.030\\text{ m}^3$. How much work is done by the gas?",
                "options": [
                    "4,000 J",
                    "2,000 J",
                    "6,000 J",
                    "8,000 J"
                ],
                "answer": "A",
                "explanation": "For an isobaric process, work done by the gas is $W = P\\Delta V = (2.0 \\times 10^5\\text{ Pa})(0.030 - 0.010\\text{ m}^3) = (2.0 \\times 10^5)(0.020) = 4,000\\text{ J}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q9",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "In an adiabatic expansion of an ideal gas, $Q = 0$ and the gas does $500\\text{ J}$ of work on its surroundings. What is the change in internal energy $\\Delta U$ of the gas?",
                "options": [
                    "-500 J",
                    "+500 J",
                    "0 J",
                    "-1,000 J"
                ],
                "answer": "A",
                "explanation": "By the First Law of Thermodynamics, $\\Delta U = Q - W_{\\text{by}}$ (or $\\Delta U = Q + W_{\\text{on}}$). With $Q = 0$ and work done by the gas $W_{\\text{by}} = 500\\text{ J}$, $\\Delta U = 0 - 500 = -500\\text{ J}$. Internal energy decreases.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q10",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "How does the root-mean-square speed ($v_{\\text{rms}}$) of molecules in a monatomic ideal gas change if the absolute temperature in Kelvin is quadrupled?",
                "options": [
                    "It doubles (increases by a factor of 2)",
                    "It quadruples (increases by a factor of 4)",
                    "It increases by a factor of 16",
                    "It remains unchanged"
                ],
                "answer": "A",
                "explanation": "From the kinetic theory of gases, $v_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m}}$. Because $v_{\\text{rms}} \\propto \\sqrt{T}$, quadrupling $T$ ($4T$) scales speed by $\\sqrt{4} = 2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q11",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "According to Bernoulli's principle, what happens to the internal fluid pressure along a streamline in a horizontal pipe when the fluid speed increases?",
                "options": [
                    "The pressure decreases",
                    "The pressure increases",
                    "The pressure remains unchanged",
                    "The pressure drops to zero immediately"
                ],
                "answer": "A",
                "explanation": "Bernoulli's equation for horizontal flow ($y = \\text{const}$) states $P + \\frac{1}{2}\\rho v^2 = \\text{const}$. As velocity $v$ increases, kinetic energy density $\\frac{1}{2}\\rho v^2$ increases, which requires static pressure $P$ to decrease.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q12",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "What is true about the net change in internal energy $\\Delta U$ of an ideal gas over one complete thermodynamic cycle that returns to its initial state on a PV diagram?",
                "options": [
                    "$\\Delta U = 0$",
                    "$\\Delta U > 0$",
                    "$\\Delta U < 0$",
                    "$\\Delta U = Q_{\\text{in}}$"
                ],
                "answer": "A",
                "explanation": "Internal energy $U$ is a state function that depends solely on the current state (temperature) of the ideal gas. After completing a closed cycle, the gas returns to its initial temperature, so $\\Delta U = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q13",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "A container holds $2.0\\text{ moles}$ of an ideal gas at $300\\text{ K}$ and $1.0 \\times 10^5\\text{ Pa}$. Using $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$, what is the volume of the gas?",
                "options": [
                    "$0.050\\text{ m}^3$",
                    "$0.025\\text{ m}^3$",
                    "$0.10\\text{ m}^3$",
                    "$0.005\\text{ m}^3$"
                ],
                "answer": "A",
                "explanation": "From $PV = nRT$: $V = \\frac{nRT}{P} = \\frac{(2.0\\text{ mol})(8.31\\text{ J/(mol}\\cdot\\text{K)})(300\\text{ K})}{1.0 \\times 10^5\\text{ Pa}} = \\frac{4,986}{100,000} \\approx 0.04986\\text{ m}^3 \\approx 0.050\\text{ m}^3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q14",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "During an isochoric (constant volume) heating process, $800\\text{ J}$ of heat is transferred to an ideal gas. How much work is done by the gas?",
                "options": [
                    "0 J",
                    "800 J",
                    "-800 J",
                    "400 J"
                ],
                "answer": "A",
                "explanation": "Work is $W = \\int P\\,dV$. In an isochoric process, volume is strictly constant ($\\Delta V = 0$), so no boundary work is performed ($W = 0$). All $800\\text{ J}$ of heat goes into increasing internal energy.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q15",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "Two metal rods of identical length and cross-sectional area connect a heat source at $100^\\circ\\text{C}$ to an ice bath at $0^\\circ\\text{C}$. Rod A has thermal conductivity $k$, and Rod B has thermal conductivity $2k$. What is the ratio of the rate of heat conduction through Rod B compared to Rod A ($\\frac{H_B}{H_A}$)?",
                "options": [
                    "2",
                    "4",
                    "1/2",
                    "1"
                ],
                "answer": "A",
                "explanation": "Thermal conduction rate is $H = \\frac{kA\\Delta T}{L}$. With identical $A, L,$ and $\\Delta T$, $H \\propto k$. Since $k_B = 2k_A$, $\\frac{H_B}{H_A} = 2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q16",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "What does the Second Law of Thermodynamics state regarding the total entropy of an isolated system during an irreversible spontaneous process?",
                "options": [
                    "The total entropy of the system always increases ($\\Delta S_{\\text{total}} > 0$)",
                    "The total entropy remains exactly constant ($\\Delta S_{\\text{total}} = 0$)",
                    "The total entropy always decreases to zero",
                    "The total entropy fluctuates unpredictably"
                ],
                "answer": "A",
                "explanation": "The Second Law dictates that spontaneous irreversible processes in an isolated system always result in an increase in total entropy (disorder): $\\Delta S_{\\text{isolated}} > 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q17",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "A rectangular barge of width $4.0\\text{ m}$, length $10.0\\text{ m}$, and height $2.0\\text{ m}$ floats in freshwater ($\\rho = 1000\\text{ kg/m}^3$). If the barge sinks $0.50\\text{ m}$ deeper when loaded with cargo, what is the mass of the added cargo?",
                "options": [
                    "20,000 kg",
                    "10,000 kg",
                    "40,000 kg",
                    "80,000 kg"
                ],
                "answer": "A",
                "explanation": "The added buoyant force supports the added cargo weight: $\\Delta F_b = m_{\\text{cargo}} g \\implies \\rho_{\\text{water}} \\Delta V_{\\text{disp}} g = m_{\\text{cargo}} g$. The additional volume displaced is $\\Delta V = \\text{width} \\times \\text{length} \\times \\Delta h = (4.0)(10.0)(0.50) = 20.0\\text{ m}^3$. Mass $= \\rho \\Delta V = (1000\\text{ kg/m}^3)(20.0\\text{ m}^3) = 20,000\\text{ kg}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q18",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "Why does an open glass tube of very narrow radius cause water to climb upward against gravity (capillary action)?",
                "options": [
                    "Adhesive forces between water and glass molecules are stronger than cohesive forces between water molecules",
                    "Cohesive forces between water molecules pull water away from the glass surface",
                    "Atmospheric pressure inside the tube is significantly greater than outside",
                    "The density of water decreases inside narrow tubes"
                ],
                "answer": "A",
                "explanation": "Capillary rise occurs when adhesive forces between liquid molecules and the tube wall exceed the cohesive intermolecular forces of the liquid, creating a concave meniscus and drawing liquid upward.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q19",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "hard",
                "question": "A cyclic heat engine executes a clockwise cycle on a $P$-$V$ diagram. The area enclosed by the cycle is $1,200\\text{ J}$. If the engine absorbs $4,000\\text{ J}$ of heat from the high-temperature reservoir per cycle, what is its actual thermal efficiency?",
                "options": [
                    "30%",
                    "40%",
                    "25%",
                    "70%"
                ],
                "answer": "A",
                "explanation": "For a cyclic engine, the net work output $W_{\\text{net}}$ equals the area enclosed by the cycle on the $P$-$V$ diagram ($1,200\\text{ J}$). Efficiency is $e = \\frac{W_{\\text{net}}}{Q_H} = \\frac{1,200\\text{ J}}{4,000\\text{ J}} = 0.30 = 30\\%$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-phys2-fluids_q20",
                "topic": "Fluids & Thermodynamics",
                "difficulty": "medium",
                "question": "Which statement correctly summarizes the Zeroth Law of Thermodynamics?",
                "options": [
                    "If systems A and B are each in thermal equilibrium with system C, then A and B are in thermal equilibrium with each other, establishing temperature as a well-defined property",
                    "Energy cannot be created or destroyed, only transformed between heat and work",
                    "The entropy of a perfect crystal at absolute zero is zero",
                    "No heat engine can achieve 100% efficiency"
                ],
                "answer": "A",
                "explanation": "The Zeroth Law states that thermal equilibrium is a transitive relation, providing the physical foundation for the concept and measurement of temperature via thermometers.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
