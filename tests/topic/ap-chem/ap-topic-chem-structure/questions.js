// Specific Question Bank for Test: ap-topic-chem-structure
const AP_TEST_DATA = {
    "ap-topic-chem-structure": {
        "id": "ap-topic-chem-structure",
        "title": "AP Chemistry: Atomic Structure & Bonding",
        "subject": "AP Chemistry",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-chem-structure_q1",
                "topic": "Bonding",
                "difficulty": "medium",
                "question": "What is the hybridization of the central atom in $CH_4$?",
                "options": [
                    "sp",
                    "sp2",
                    "sp3",
                    "sp3d"
                ],
                "answer": "C",
                "explanation": "Methane has 4 electron domains, forming $sp^3$ hybrid orbitals."
            },
            {
                "id": "ap-topic-chem-structure_q2",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Which element has the electron configuration $[\\text{Ar}] 4s^2 3d^{10} 4p^3$?",
                "options": [
                    "Arsenic (As)",
                    "Phosphorus (P)",
                    "Selenium (Se)",
                    "Germanium (Ge)"
                ],
                "answer": "A",
                "explanation": "Argon has atomic number 18. Adding electrons: $18 + 2 (4s) + 10 (3d) + 3 (4p) = 33$ electrons. Element 33 is Arsenic (As).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q3",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "What is the molecular geometry and hybridization of the central atom in sulfur tetrafluoride ($SF_4$)?",
                "options": [
                    "See-saw geometry, $sp^3d$ hybridization",
                    "Tetrahedral geometry, $sp^3$ hybridization",
                    "Square planar geometry, $sp^3d^2$ hybridization",
                    "Trigonal bipyramidal geometry, $sp^3d$ hybridization"
                ],
                "answer": "A",
                "explanation": "Sulfur has 6 valence electrons; 4 form single bonds to fluorine and 2 remain as 1 lone pair. Steric number is $4 + 1 = 5$, giving $sp^3d$ hybridization and trigonal bipyramidal electron geometry. With 1 equatorial lone pair, the molecular shape is see-saw.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q4",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Which of the following atoms has the highest first ionization energy?",
                "options": [
                    "Fluorine (F)",
                    "Oxygen (O)",
                    "Nitrogen (N)",
                    "Carbon (C)"
                ],
                "answer": "A",
                "explanation": "First ionization energy increases across a period from left to right due to increasing effective nuclear charge ($Z_{\\text{eff}}$) pulling electrons closer to the nucleus. Among C, N, O, and F, Fluorine has the highest first ionization energy ($1681\\text{ kJ/mol}$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q5",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "hard",
                "question": "Why is the first ionization energy of oxygen ($1314\\text{ kJ/mol}$) slightly lower than that of nitrogen ($1402\\text{ kJ/mol}$)?",
                "options": [
                    "Oxygen has a paired electron in one of its $2p$ orbitals, and the resulting electron-electron repulsion makes it easier to remove",
                    "Nitrogen has a higher effective nuclear charge than oxygen",
                    "Oxygen has a smaller atomic radius, shielding its valence electrons",
                    "Nitrogen's valence electrons are in the $3s$ subshell"
                ],
                "answer": "A",
                "explanation": "Nitrogen has a half-filled $2p^3$ configuration with three unpaired electrons in separate orbitals. Oxygen ($2p^4$) has one doubly occupied $2p$ orbital. The electrostatic repulsion between the two paired electrons in that orbital raises the energy of the electron, making it easier to remove.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q6",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "What is the formal charge on the central sulfur atom in the sulfate ion ($SO_4^{2-}$) when drawn with an expanded octet having two $S=O$ double bonds and two $S-O^-$ single bonds?",
                "options": [
                    "0",
                    "+2",
                    "+1",
                    "-2"
                ],
                "answer": "A",
                "explanation": "Sulfur has 6 valence electrons. In this structure, sulfur has 6 bonding domains (2 double bonds = 4 bonds, 2 single bonds = 2 bonds, total 6 shared pairs) and 0 lone pairs. $\\text{Formal Charge} = V - N_{\\text{lone}} - \\frac{1}{2}N_{\\text{bonding}} = 6 - 0 - 6 = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q7",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Which of the following species is nonpolar despite containing polar covalent bonds?",
                "options": [
                    "$BF_3$ (boron trifluoride)",
                    "$NF_3$ (nitrogen trifluoride)",
                    "$H_2O$ (water)",
                    "$SO_2$ (sulfur dioxide)"
                ],
                "answer": "A",
                "explanation": "$BF_3$ has trigonal planar molecular geometry ($120^\\circ$ bond angles). The three equal B-F bond dipoles point symmetrically in a plane and vectorially sum to zero, resulting in a net molecular dipole moment of zero.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q8",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "hard",
                "question": "In photoelectron spectroscopy (PES), the spectrum of an unknown neutral atom shows five peaks with binding energies of $193\\text{ MJ/mol}$, $17.2\\text{ MJ/mol}$, $12.1\\text{ MJ/mol}$, $1.09\\text{ MJ/mol}$, and $0.59\\text{ MJ/mol}$, with relative peak heights of 2 : 2 : 6 : 2 : 1. Identify the element.",
                "options": [
                    "Aluminum (Al)",
                    "Sodium (Na)",
                    "Magnesium (Mg)",
                    "Silicon (Si)"
                ],
                "answer": "A",
                "explanation": "The peaks correspond to subshells ordered by decreasing binding energy: $1s^2 (193)$, $2s^2 (17.2)$, $2p^6 (12.1)$, $3s^2 (1.09)$, and $3p^1 (0.59)$. The electron configuration is $1s^2 2s^2 2p^6 3s^2 3p^1$, which corresponds to atomic number 13, Aluminum (Al).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q9",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Which of the following compounds has the highest lattice energy?",
                "options": [
                    "MgO",
                    "NaCl",
                    "NaF",
                    "CaO"
                ],
                "answer": "A",
                "explanation": "Lattice energy is governed by Coulomb's Law: $E_{\\text{lattice}} \\propto \\frac{|q_1 q_2|}{r_0}$. In MgO, charges are $+2$ and $-2$ (product $= 4$), compared to $+1/-1$ in NaCl and NaF. Between MgO and CaO, $Mg^{2+}$ has a smaller ionic radius than $Ca^{2+}$, resulting in a shorter internuclear distance and the highest lattice energy.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q10",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Which type of intermolecular force is primarily responsible for the unusually high boiling point of ethanol ($CH_3CH_2OH$, $78^\\circ\\text{C}$) compared to dimethyl ether ($CH_3OCH_3$, $-24^\\circ\\text{C}$)?",
                "options": [
                    "Hydrogen bonding",
                    "London dispersion forces",
                    "Ion-dipole forces",
                    "Covalent network bonding"
                ],
                "answer": "A",
                "explanation": "Both ethanol and dimethyl ether have identical chemical formulas ($C_2H_6O$) and molar masses ($46\\text{ g/mol}$). Ethanol possesses an -OH group capable of intermolecular hydrogen bonding, which requires significantly more thermal energy to break.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q11",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "How many sigma ($\\sigma$) and pi ($\\pi$) bonds are present in a molecule of ethyne (acetylene, $H-C\\equiv C-H$)?",
                "options": [
                    "3 $\\sigma$ bonds and 2 $\\pi$ bonds",
                    "2 $\\sigma$ bonds and 3 $\\pi$ bonds",
                    "1 $\\sigma$ bond and 2 $\\pi$ bonds",
                    "5 $\\sigma$ bonds and 0 $\\pi$ bonds"
                ],
                "answer": "A",
                "explanation": "Each single C-H bond is 1 $\\sigma$ bond (2 total). The triple bond $C\\equiv C$ consists of 1 $\\sigma$ bond and 2 $\\pi$ bonds. Total: $2 + 1 = 3$ $\\sigma$ bonds and 2 $\\pi$ bonds.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q12",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "hard",
                "question": "What is the molecular geometry of the triiodide ion ($I_3^-$)?",
                "options": [
                    "Linear",
                    "Bent",
                    "Trigonal planar",
                    "T-shaped"
                ],
                "answer": "A",
                "explanation": "The central iodine has 7 valence electrons, shares 2 single bonds with the outer iodines, and accommodates 1 extra negative charge: $7 + 2 + 1 = 10$ valence electrons, or 5 electron pairs (2 bonding pairs and 3 equatorial lone pairs). This trigonal bipyramidal electron domain geometry places lone pairs equatorially to minimize repulsion, yielding a linear molecular shape ($180^\\circ$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q13",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Arrange the following ions in order of decreasing ionic radius: $S^{2-}, Cl^-, K^+, Ca^{2+}$.",
                "options": [
                    "$S^{2-} > Cl^- > K^+ > Ca^{2+}$",
                    "$Ca^{2+} > K^+ > Cl^- > S^{2-}$",
                    "$Cl^- > S^{2-} > Ca^{2+} > K^+$",
                    "$K^+ > Ca^{2+} > S^{2-} > Cl^-$"
                ],
                "answer": "A",
                "explanation": "These ions are isoelectronic, each possessing 18 electrons ($[\\text{Ar}]$ configuration). As nuclear charge ($Z$) increases ($S: 16, Cl: 17, K: 19, Ca: 20$), the increasing positive charge pulls the electron cloud tighter, decreasing ionic radius: $S^{2-} > Cl^- > K^+ > Ca^{2+}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q14",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Why does silicon dioxide ($SiO_2$) have a very high melting point ($> 1600^\\circ\\text{C}$) while carbon dioxide ($CO_2$) is a gas at room temperature?",
                "options": [
                    "$SiO_2$ forms a 3-dimensional covalent network solid with strong Si-O bonds, whereas $CO_2$ consists of discrete small molecules held only by weak London dispersion forces",
                    "$SiO_2$ is an ionic lattice of $Si^{4+}$ and $O^{2-}$ ions",
                    "$CO_2$ contains only weak single bonds while $SiO_2$ contains quadruple bonds",
                    "Silicon has a much lower atomic mass than carbon"
                ],
                "answer": "A",
                "explanation": "$SiO_2$ forms a covalent network lattice where every silicon atom is bonded tetrahedrally to 4 oxygen atoms. Melting requires breaking strong covalent bonds throughout the macroscopic crystal. In contrast, $CO_2$ forms discrete linear molecules held together only by weak London dispersion forces.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q15",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "hard",
                "question": "According to Hund's rule and the Pauli exclusion principle, what is the number of unpaired electrons in a ground-state gaseous iron atom ($Fe$, $Z = 26$)?",
                "options": [
                    "4",
                    "2",
                    "6",
                    "0"
                ],
                "answer": "A",
                "explanation": "The electron configuration of Fe is $[\\text{Ar}] 4s^2 3d^6$. The five degenerate $3d$ orbitals are populated by 6 electrons: one orbital has a paired spin, and the other four orbitals contain a single unpaired electron each ($4 \\times 1 = 4$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q16",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Under which conditions does a real gas deviate most significantly from ideal behavior described by the Ideal Gas Law ($PV = nRT$)?",
                "options": [
                    "High pressure and low temperature",
                    "Low pressure and high temperature",
                    "Moderate pressure and room temperature",
                    "Low pressure and high molar mass"
                ],
                "answer": "A",
                "explanation": "At high pressures, the volume occupied by the gas molecules themselves becomes non-negligible compared to total volume. At low temperatures, molecules move slowly, allowing attractive intermolecular forces to reduce impact force against container walls.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q17",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "What is the bond order of the carbon-oxygen bonds in the carbonate ion ($CO_3^{2-}$)?",
                "options": [
                    "4/3 (or 1.33)",
                    "1",
                    "2",
                    "3/2 (or 1.50)"
                ],
                "answer": "A",
                "explanation": "The carbonate ion has 3 equivalent resonance structures, sharing 4 total pairs of bonding electrons (one double bond and two single bonds) across 3 C-O bond locations. Bond order $= \\frac{4}{3} \\approx 1.33$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q18",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "hard",
                "question": "A mixture contains $0.20\\text{ mol}$ of $He$ and $0.80\\text{ mol}$ of $Ar$ in a rigid container at total pressure $5.0\\text{ atm}$. What is the partial pressure of helium?",
                "options": [
                    "1.0 atm",
                    "0.2 atm",
                    "4.0 atm",
                    "2.5 atm"
                ],
                "answer": "A",
                "explanation": "Dalton's Law of Partial Pressures: $P_{\\text{He}} = X_{\\text{He}} P_{\\text{total}}$. Mole fraction $X_{\\text{He}} = \\frac{0.20}{0.20 + 0.80} = 0.20$. Thus $P_{\\text{He}} = (0.20)(5.0\\text{ atm}) = 1.0\\text{ atm}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q19",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "medium",
                "question": "Which of the following molecules has a square planar molecular geometry?",
                "options": [
                    "$XeF_4$",
                    "$CH_4$",
                    "$SF_4$",
                    "$BF_4^-$"
                ],
                "answer": "A",
                "explanation": "Xenon in $XeF_4$ has 8 valence electrons, forming 4 single bonds with fluorine and retaining 2 lone pairs ($4 + 2 = 6$ electron pairs, octahedral electron domain geometry). The two lone pairs position trans to each other, resulting in a square planar molecular geometry.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-chem-structure_q20",
                "topic": "Atomic Structure & Bonding",
                "difficulty": "hard",
                "question": "Why does boiling point increase systematically in the noble gas group from Helium ($-269^\\circ\\text{C}$) to Xenon ($-108^\\circ\\text{C}$)?",
                "options": [
                    "Heavier noble gases possess more electrons over a larger electron cloud, increasing polarizability and London dispersion forces",
                    "Heavier noble gases form stronger permanent dipole moments",
                    "Heavier noble gases participate in extensive hydrogen bonding",
                    "Heavier noble gases have smaller atomic radii"
                ],
                "answer": "A",
                "explanation": "Noble gases are nonpolar monatomic species held only by London dispersion forces. Down the group, the number of electrons and atomic radius increase, creating a more diffuse, highly polarizable electron cloud that generates stronger temporary dipole interactions.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
