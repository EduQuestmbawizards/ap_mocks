// Specific Question Bank for Test: ap-diag-chem
const AP_TEST_DATA = {
    "ap-diag-chem": {
        "id": "ap-diag-chem",
        "title": "AP Chemistry Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Atomic Structure & Bonding",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Chemistry",
        "questions": [
            {
                "id": "ap-diag-chem_q1",
                "topic": "Structure",
                "difficulty": "easy",
                "question": "Which subatomic particle defines the atomic number of an element?",
                "options": [
                    "Neutron",
                    "Electron",
                    "Proton",
                    "Positron"
                ],
                "answer": "C",
                "explanation": "Atomic number is the number of protons."
            },
            {
                "id": "ap-diag-chem_q2",
                "topic": "Atomic Structure",
                "difficulty": "easy",
                "question": "How many protons does Carbon have?",
                "options": [
                    "4",
                    "6",
                    "8",
                    "12"
                ],
                "answer": "B",
                "explanation": "Carbon's atomic number is 6, meaning it has 6 protons."
            },
            {
                "id": "ap-diag-chem_q3",
                "topic": "Periodic Trends",
                "difficulty": "easy",
                "question": "Electronegativity generally _____ across a period left to right.",
                "options": [
                    "Decreases",
                    "Stays the same",
                    "Increases",
                    "Fluctuates randomly"
                ],
                "answer": "C",
                "explanation": "Electronegativity increases across a period as nuclear charge increases with no new shells."
            },
            {
                "id": "ap-diag-chem_q4",
                "topic": "Periodic Trends",
                "difficulty": "easy",
                "question": "Atomic radius generally _____ going down a group.",
                "options": [
                    "Decreases",
                    "Increases",
                    "Stays constant",
                    "Cannot be predicted"
                ],
                "answer": "B",
                "explanation": "Atomic radius increases down a group as additional electron shells are added."
            },
            {
                "id": "ap-diag-chem_q5",
                "topic": "Bonding",
                "difficulty": "easy",
                "question": "NaCl is an example of:",
                "options": [
                    "Covalent bond",
                    "Metallic bond",
                    "Ionic bond",
                    "Hydrogen bond"
                ],
                "answer": "C",
                "explanation": "NaCl forms when Na+ and Cl- ions are electrostatically attracted — an ionic bond."
            },
            {
                "id": "ap-diag-chem_q6",
                "topic": "Bonding",
                "difficulty": "medium",
                "question": "H2O has bent molecular geometry because of:",
                "options": [
                    "2 bonding pairs only",
                    "2 lone pairs on oxygen",
                    "Linear arrangement of atoms",
                    "4 bonding pairs"
                ],
                "answer": "B",
                "explanation": "Two lone pairs on oxygen repel bonding pairs, creating a bent shape (~104.5 degree bond angle)."
            },
            {
                "id": "ap-diag-chem_q7",
                "topic": "Stoichiometry",
                "difficulty": "medium",
                "question": "How many moles are in 44 g of CO2? (Molar mass = 44 g/mol)",
                "options": [
                    "0.5",
                    "1",
                    "2",
                    "44"
                ],
                "answer": "B",
                "explanation": "moles = mass/molar mass = 44/44 = 1 mol."
            },
            {
                "id": "ap-diag-chem_q8",
                "topic": "Stoichiometry",
                "difficulty": "medium",
                "question": "In 2H2 + O2 -> 2H2O, moles of H2O from 4 mol H2?",
                "options": [
                    "2",
                    "4",
                    "6",
                    "8"
                ],
                "answer": "B",
                "explanation": "Mole ratio H2:H2O = 2:2 = 1:1. So 4 mol H2 produces 4 mol H2O."
            },
            {
                "id": "ap-diag-chem_q9",
                "topic": "Gas Laws",
                "difficulty": "medium",
                "question": "At constant temperature, if volume halves, pressure:",
                "options": [
                    "Halves",
                    "Doubles",
                    "Stays the same",
                    "Quadruples"
                ],
                "answer": "B",
                "explanation": "Boyle's Law: PV = constant. If V halves, P doubles."
            },
            {
                "id": "ap-diag-chem_q10",
                "topic": "Gas Laws",
                "difficulty": "medium",
                "question": "The Ideal Gas Law is:",
                "options": [
                    "PV = nRT",
                    "PV = RT",
                    "$P = nRT$",
                    "$V = nRT/R$"
                ],
                "answer": "A",
                "explanation": "PV = nRT where P=pressure, V=volume, n=moles, R=gas constant, T=temperature in Kelvin."
            },
            {
                "id": "ap-diag-chem_q11",
                "topic": "Thermodynamics",
                "difficulty": "medium",
                "question": "An exothermic reaction:",
                "options": [
                    "Absorbs heat from surroundings",
                    "Releases heat to surroundings",
                    "Has delta-H > 0",
                    "Requires very high activation energy"
                ],
                "answer": "B",
                "explanation": "Exothermic reactions release heat to surroundings; delta-H < 0."
            },
            {
                "id": "ap-diag-chem_q12",
                "topic": "Thermodynamics",
                "difficulty": "medium",
                "question": "A reaction is spontaneous when delta-G is:",
                "options": [
                    "Positive",
                    "Zero",
                    "Negative",
                    "Equal to delta-H"
                ],
                "answer": "C",
                "explanation": "Spontaneous processes have delta-G < 0 (Gibbs free energy decreases)."
            },
            {
                "id": "ap-diag-chem_q13",
                "topic": "Equilibrium",
                "difficulty": "medium",
                "question": "Le Chatelier's principle states a system at equilibrium will:",
                "options": [
                    "Always shift right",
                    "Shift to oppose any imposed stress",
                    "Shift to increase products",
                    "Stay completely unchanged"
                ],
                "answer": "B",
                "explanation": "Le Chatelier's principle: a system at equilibrium shifts to counteract any stress imposed on it."
            },
            {
                "id": "ap-diag-chem_q14",
                "topic": "Equilibrium",
                "difficulty": "medium",
                "question": "Increasing temperature shifts an endothermic equilibrium toward:",
                "options": [
                    "Reactants",
                    "Products",
                    "Neither direction",
                    "Equilibrium constant K only"
                ],
                "answer": "B",
                "explanation": "For endothermic reactions, heat is a reactant; adding heat shifts equilibrium toward products."
            },
            {
                "id": "ap-diag-chem_q15",
                "topic": "Acids and Bases",
                "difficulty": "easy",
                "question": "A solution with pH = 3 is:",
                "options": [
                    "Basic",
                    "Neutral",
                    "Acidic",
                    "Impossible"
                ],
                "answer": "C",
                "explanation": "pH < 7 is acidic; pH = 7 is neutral; pH > 7 is basic."
            },
            {
                "id": "ap-diag-chem_q16",
                "topic": "Acids and Bases",
                "difficulty": "medium",
                "question": "A strong acid like HCl:",
                "options": [
                    "Partially dissociates in water",
                    "Completely dissociates in water",
                    "Does not react with water",
                    "Forms a buffer with its conjugate"
                ],
                "answer": "B",
                "explanation": "Strong acids completely ionize in aqueous solution."
            },
            {
                "id": "ap-diag-chem_q17",
                "topic": "Kinetics",
                "difficulty": "medium",
                "question": "Increasing temperature increases reaction rate because:",
                "options": [
                    "Concentration increases",
                    "Activation energy barrier drops",
                    "More particles have sufficient energy to react",
                    "Equilibrium shifts right"
                ],
                "answer": "C",
                "explanation": "Higher temperature gives more particles enough kinetic energy to overcome the activation energy barrier."
            },
            {
                "id": "ap-diag-chem_q18",
                "topic": "Kinetics",
                "difficulty": "hard",
                "question": "For a first-order reaction, the rate law is:",
                "options": [
                    "Rate = k[A]^2",
                    "Rate = k",
                    "Rate = k[A]",
                    "Rate = k[A][B]"
                ],
                "answer": "C",
                "explanation": "A first-order reaction has rate proportional to the first power of the reactant concentration."
            },
            {
                "id": "ap-diag-chem_q19",
                "topic": "Electrochemistry",
                "difficulty": "medium",
                "question": "Oxidation occurs at the:",
                "options": [
                    "Cathode",
                    "Anode",
                    "Salt bridge",
                    "Membrane"
                ],
                "answer": "B",
                "explanation": "Oxidation (loss of electrons) occurs at the anode; reduction occurs at the cathode."
            },
            {
                "id": "ap-diag-chem_q20",
                "topic": "Electrochemistry",
                "difficulty": "medium",
                "question": "In an electrolytic cell, electrical energy converts to:",
                "options": [
                    "Mechanical energy",
                    "Chemical energy",
                    "Thermal energy only",
                    "Nuclear energy"
                ],
                "answer": "B",
                "explanation": "Electrolytic cells use electrical energy to drive non-spontaneous chemical reactions."
            },
            {
                "id": "ap-diag-chem_q21",
                "topic": "Solutions",
                "difficulty": "medium",
                "question": "Molarity is defined as:",
                "options": [
                    "Moles of solute per liter of solution",
                    "Grams of solute per liter",
                    "Moles per kilogram of solvent",
                    "Mass fraction of solute"
                ],
                "answer": "A",
                "explanation": "Molarity (M) = moles of solute divided by liters of solution."
            },
            {
                "id": "ap-diag-chem_q22",
                "topic": "Solutions",
                "difficulty": "medium",
                "question": "Adding a non-volatile solute to a solvent _____ the boiling point.",
                "options": [
                    "Decreases",
                    "Does not affect",
                    "Increases",
                    "Makes it exactly 100 C"
                ],
                "answer": "C",
                "explanation": "Boiling point elevation is a colligative property — adding solute raises the boiling point."
            },
            {
                "id": "ap-diag-chem_q23",
                "topic": "Nuclear Chemistry",
                "difficulty": "medium",
                "question": "Alpha decay emits:",
                "options": [
                    "An electron",
                    "A helium-4 nucleus",
                    "A gamma photon",
                    "A neutron"
                ],
                "answer": "B",
                "explanation": "Alpha particles are helium-4 nuclei (2 protons + 2 neutrons)."
            },
            {
                "id": "ap-diag-chem_q24",
                "topic": "Nuclear Chemistry",
                "difficulty": "medium",
                "question": "In beta-minus decay, the atomic number:",
                "options": [
                    "Decreases by 1",
                    "Increases by 1",
                    "Stays the same",
                    "Decreases by 2"
                ],
                "answer": "B",
                "explanation": "Beta-minus decay converts a neutron to a proton, increasing atomic number by 1."
            },
            {
                "id": "ap-diag-chem_q25",
                "topic": "Organic Chemistry",
                "difficulty": "easy",
                "question": "The functional group -OH indicates:",
                "options": [
                    "Aldehyde",
                    "Alcohol",
                    "Carboxylic acid",
                    "Ether"
                ],
                "answer": "B",
                "explanation": "-OH is the hydroxyl group, characteristic of alcohols."
            },
            {
                "id": "ap-diag-chem_q26",
                "topic": "Atomic Structure",
                "difficulty": "medium",
                "question": "The Heisenberg uncertainty principle states:",
                "options": [
                    "Energy is quantized",
                    "Position and momentum cannot both be precisely known simultaneously",
                    "Light behaves as a wave only",
                    "Electrons orbit in fixed circular paths"
                ],
                "answer": "B",
                "explanation": "It is fundamentally impossible to simultaneously know both the exact position and momentum of a particle."
            },
            {
                "id": "ap-diag-chem_q27",
                "topic": "Intermolecular Forces",
                "difficulty": "medium",
                "question": "Which intermolecular force is generally the strongest?",
                "options": [
                    "London dispersion",
                    "Dipole-dipole",
                    "Hydrogen bonding",
                    "Ion-dipole"
                ],
                "answer": "D",
                "explanation": "Ion-dipole forces are the strongest intermolecular forces, followed by hydrogen bonding."
            },
            {
                "id": "ap-diag-chem_q28",
                "topic": "Bonding",
                "difficulty": "hard",
                "question": "sp2 hybridization results in bond angles of approximately:",
                "options": [
                    "90 degrees",
                    "109.5 degrees",
                    "120 degrees",
                    "180 degrees"
                ],
                "answer": "C",
                "explanation": "sp2 hybridization results in trigonal planar geometry with 120 degree bond angles."
            },
            {
                "id": "ap-diag-chem_q29",
                "topic": "Stoichiometry",
                "difficulty": "hard",
                "question": "10 g of H2 reacts with excess O2 to form H2O. Grams of H2O formed? (H2=2 g/mol, H2O=18 g/mol)",
                "options": [
                    "18 g",
                    "90 g",
                    "10 g",
                    "45 g"
                ],
                "answer": "B",
                "explanation": "10 g H2 = 5 mol H2. Ratio H2:H2O = 1:1, so 5 mol H2O = 5 * 18 = 90 g."
            },
            {
                "id": "ap-diag-chem_q30",
                "topic": "Thermodynamics",
                "difficulty": "hard",
                "question": "A reaction with delta-H < 0 and delta-S > 0 is:",
                "options": [
                    "Always non-spontaneous",
                    "Spontaneous only at high T",
                    "Always spontaneous at all temperatures",
                    "Spontaneous only at low T"
                ],
                "answer": "C",
                "explanation": "When delta-H < 0 and delta-S > 0, delta-G = delta-H - T*delta-S < 0 at all temperatures — always spontaneous."
            }
        ],
        "totalQuestions": 30
    }
};
