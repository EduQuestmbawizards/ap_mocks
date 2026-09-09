// Specific Question Bank for Test: ap-topic-bio-chem
const AP_TEST_DATA = {
    "ap-topic-bio-chem": {
        "id": "ap-topic-bio-chem",
        "title": "AP Biology: Chemistry of Life & Cellular Energetics",
        "subject": "AP Biology",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-bio-chem_q1",
                "topic": "Cell Energetics",
                "difficulty": "easy",
                "question": "Which organelle is the primary site of ATP synthesis during aerobic cellular respiration?",
                "options": [
                    "Ribosome",
                    "Mitochondrion",
                    "Chloroplast",
                    "Golgi Apparatus"
                ],
                "answer": "B",
                "explanation": "Mitochondria generate ATP via oxidative phosphorylation."
            },
            {
                "id": "ap-topic-bio-chem_q2",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "How do hydrogen bonds contribute to the unique emergent properties of liquid water essential for living organisms?",
                "options": [
                    "They produce high cohesion, surface tension, and high specific heat capacity that moderates temperature fluctuations",
                    "They cause water to become more dense as a solid than as a liquid",
                    "They prevent water from acting as a biological solvent for polar solutes",
                    "They form permanent covalent bonds between separate water molecules"
                ],
                "answer": "A",
                "explanation": "Polarity allows water molecules to form transient hydrogen bonds, conferring high specific heat, high heat of vaporization, strong cohesion/adhesion, and expansion upon freezing (ice floats).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q3",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "Which functional group is primarily responsible for forming disulfide bridges that stabilize the tertiary structure of proteins?",
                "options": [
                    "Sulfhydryl group (-SH) in cysteine",
                    "Carboxyl group (-COOH) in aspartic acid",
                    "Amino group (-NH2) in lysine",
                    "Hydroxyl group (-OH) in serine"
                ],
                "answer": "A",
                "explanation": "Covalent disulfide bridges form through the oxidation of two sulfhydryl (-SH) groups on adjacent cysteine amino acid residues, stabilizing tertiary and quaternary protein conformations.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q4",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "hard",
                "question": "In enzyme kinetics, how does a competitive inhibitor affect $V_{\\max}$ and $K_m$?",
                "options": [
                    "$V_{\\max}$ remains unchanged; $K_m$ increases",
                    "$V_{\\max}$ decreases; $K_m$ remains unchanged",
                    "Both $V_{\\max}$ and $K_m$ decrease",
                    "Both $V_{\\max}$ and $K_m$ increase"
                ],
                "answer": "A",
                "explanation": "A competitive inhibitor binds reversibly to the active site. Increasing substrate concentration outcompetes the inhibitor, so the maximum velocity $V_{\\max}$ is unchanged, but higher substrate concentration is needed to reach $\\frac{1}{2}V_{\\max}$, increasing apparent $K_m$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q5",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "During oxidative phosphorylation in mitochondria, what immediately drives the synthesis of ATP by ATP synthase?",
                "options": [
                    "The flow of protons down an electrochemical gradient from the intermembrane space into the mitochondrial matrix",
                    "The direct transfer of phosphate groups from glucose intermediates to ADP",
                    "The oxidation of molecular oxygen into water in the cytosol",
                    "The active pumping of sodium ions across the outer mitochondrial membrane"
                ],
                "answer": "A",
                "explanation": "Chemiosmosis utilizes the proton-motive force: protons ($H^+$) accumulated in the intermembrane space flow down their electrochemical gradient through the $F_0$ rotor of ATP synthase into the matrix, driving ATP phosphorylation.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q6",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "What is the immediate source of electrons that replace those excited and ejected from chlorophyll P680 in Photosystem II during oxygenic photosynthesis?",
                "options": [
                    "Water ($H_2O$)",
                    "NADPH",
                    "Carbon dioxide ($CO_2$)",
                    "Glucose"
                ],
                "answer": "A",
                "explanation": "The oxygen-evolving complex of Photosystem II photolyzes water ($2H_2O \\to 4H^+ + 4e^- + O_2$), supplying replacement electrons to the P680 reaction center and releasing $O_2$ as a byproduct.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q7",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "A red blood cell with an internal osmolarity of 300 mOsm is placed in a beaker containing a 100 mOsm NaCl solution. What will happen to the cell?",
                "options": [
                    "Water will enter the cell by osmosis, causing it to swell and potentially lyse",
                    "Water will leave the cell, causing it to shrivel (crenate)",
                    "NaCl will actively exit the cell until equilibrium is reached",
                    "There will be no net movement of water because the membrane is impermeable"
                ],
                "answer": "A",
                "explanation": "The external 100 mOsm solution is hypotonic relative to the 300 mOsm cytoplasm. Water diffuses down its water potential gradient into the cell, swelling and potentially lysing the red blood cell.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q8",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "hard",
                "question": "What occurs during the Calvin cycle in the chloroplast stroma?",
                "options": [
                    "$CO_2$ is fixed by RuBisCO to ribulose-1,5-bisphosphate (RuBP), then reduced using ATP and NADPH to produce G3P",
                    "Photons excite electrons to generate ATP and NADPH",
                    "Pyruvate is decarboxylated to form acetyl-CoA",
                    "Water molecules are split into oxygen and protons"
                ],
                "answer": "A",
                "explanation": "The Calvin cycle consists of carbon fixation (catalyzed by RuBisCO binding $CO_2$ to RuBP), reduction (using ATP and NADPH to form G3P), and regeneration of RuBP.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q9",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "Which polymer is formed by $\\beta$-1,4-glycosidic linkages that human digestive enzymes cannot hydrolyze?",
                "options": [
                    "Cellulose",
                    "Starch (amylose)",
                    "Glycogen",
                    "Amylopectin"
                ],
                "answer": "A",
                "explanation": "Cellulose consists of glucose monomers joined by $\\beta$-1,4-glycosidic linkages. Humans lack cellulase enzymes capable of cleaving $\\beta$-linkages, unlike the $\\alpha$-1,4-linkages in starch and glycogen.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q10",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "Why does an extreme increase in temperature above an enzyme's optimum lead to a dramatic decline in reaction rate?",
                "options": [
                    "Thermal agitation disrupts non-covalent bonds (hydrogen and ionic bonds), causing denaturation of the active site",
                    "The activation energy of the chemical reaction is permanently lowered",
                    "Substrate molecules are converted into non-competitive inhibitors",
                    "Peptide bonds are immediately cleaved into individual amino acids"
                ],
                "answer": "A",
                "explanation": "Excess thermal energy disrupts weak intermolecular interactions (hydrogen bonds, ionic interactions, hydrophobic interactions) holding the tertiary structure, causing active site denaturation.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q11",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "hard",
                "question": "Under anaerobic conditions in human muscle tissue, what is the primary biochemical purpose of converting pyruvate to lactate via fermentation?",
                "options": [
                    "To regenerate $NAD^+$ from $NADH$ so that glycolysis can continue producing ATP",
                    "To directly generate 2 additional ATP molecules per glucose",
                    "To transport oxygen into the mitochondria",
                    "To lower intracellular pH to prevent fatigue"
                ],
                "answer": "A",
                "explanation": "Glycolysis requires oxidized $NAD^+$ to oxidize glyceraldehyde-3-phosphate. In the absence of oxygen as a terminal electron acceptor, lactate dehydrogenase oxidizes $NADH$ back to $NAD^+$, allowing substrate-level phosphorylation in glycolysis to persist.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q12",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "Which biological molecule is amphipathic, possessing both a hydrophilic head and two hydrophobic tails?",
                "options": [
                    "Phospholipid",
                    "Triglyceride",
                    "Cholesterol",
                    "Nucleotide"
                ],
                "answer": "A",
                "explanation": "A phospholipid consists of a hydrophilic glycerol-phosphate head group and two hydrophobic fatty acid hydrocarbon tails, forming the bilayer foundation of biological membranes.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q13",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "What type of chemical reaction joins two amino acids together with the removal of a water molecule?",
                "options": [
                    "Dehydration synthesis (condensation)",
                    "Hydrolysis",
                    "Decarboxylation",
                    "Hydrogenation"
                ],
                "answer": "A",
                "explanation": "A peptide bond forms between the carboxyl group of one amino acid and the amino group of another via dehydration synthesis (condensation reaction), releasing a molecule of $H_2O$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q14",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "hard",
                "question": "How do uncoupling agents (such as 2,4-dinitrophenol, DNP) affect mitochondrial respiration and ATP synthesis?",
                "options": [
                    "They dissipate the proton gradient across the inner mitochondrial membrane, allowing oxygen consumption to continue while halting ATP production and releasing energy as heat",
                    "They directly inhibit Complex I, halting all electron transport and oxygen consumption",
                    "They block the binding of pyruvate to the Krebs cycle enzymes",
                    "They bind irreversibly to the active site of ATP synthase"
                ],
                "answer": "A",
                "explanation": "DNP is a lipid-soluble proton ionophore that shuttles $H^+$ across the inner membrane, collapsing the proton-motive force. The electron transport chain runs rapidly, consuming oxygen and releasing free energy as heat without producing ATP.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q15",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "Which nucleic acid base is found exclusively in RNA and pairs with adenine?",
                "options": [
                    "Uracil",
                    "Thymine",
                    "Cytosine",
                    "Guanine"
                ],
                "answer": "A",
                "explanation": "Uracil replaces thymine in RNA molecules, pairing with adenine via two hydrogen bonds.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q16",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "What is the net yield of ATP, NADH, and pyruvate per glucose molecule during glycolysis?",
                "options": [
                    "2 ATP, 2 NADH, 2 Pyruvate",
                    "4 ATP, 2 NADH, 2 Pyruvate",
                    "2 ATP, 4 NADH, 1 Pyruvate",
                    "36 ATP, 10 NADH, 2 Pyruvate"
                ],
                "answer": "A",
                "explanation": "Glycolysis consumes 2 ATP in the investment phase and produces 4 ATP and 2 NADH in the payoff phase, resulting in a net yield of 2 ATP, 2 NADH, and 2 pyruvate molecules per glucose.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q17",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "hard",
                "question": "How does allosteric feedback inhibition regulate metabolic pathways efficiently?",
                "options": [
                    "The end product of the pathway binds to an allosteric site on an early regulatory enzyme, inhibiting its activity when product concentration is high",
                    "The starting substrate permanently destroys the final enzyme in the pathway",
                    "The end product competitively blocks the active site of all enzymes in the cell",
                    "The pathway reverses direction to consume excess ATP"
                ],
                "answer": "A",
                "explanation": "Feedback inhibition occurs when the ultimate end product binds allosterically (non-competitively) to the pathway's committed enzyme, causing a conformational change that shuts down unnecessary synthesis.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q18",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "What structural feature allows saturated fatty acids to pack closely together, making them solid at room temperature?",
                "options": [
                    "The absence of carbon-carbon double bonds, yielding straight hydrocarbon chains",
                    "The presence of multiple cis-double bonds creating kinks in the chain",
                    "The presence of ionic phosphate heads linking adjacent tails",
                    "Their cyclic aromatic ring structures"
                ],
                "answer": "A",
                "explanation": "Saturated fatty acids contain only single C-C bonds, resulting in straight conformations that maximize van der Waals contacts, raising melting temperatures so they are solid at room temperature.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q19",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "medium",
                "question": "What primary role does cholesterol play in mammalian cell membranes?",
                "options": [
                    "It acts as a fluidity buffer, stabilizing fluidity at high temperatures and preventing tight packing at low temperatures",
                    "It actively pumps glucose into the cell against its gradient",
                    "It forms channels for rapid water diffusion",
                    "It functions as the primary receptor for peptide hormones"
                ],
                "answer": "A",
                "explanation": "Cholesterol intercalates between phospholipids. At elevated temperatures, its rigid steroid rings restrain phospholipid movement; at low temperatures, it prevents close packing, maintaining membrane fluidity.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-bio-chem_q20",
                "topic": "Chemistry of Life & Cellular Energetics",
                "difficulty": "hard",
                "question": "During the light reactions of photosynthesis, what is the source of energy that directly drives the active transport of protons into the thylakoid lumen?",
                "options": [
                    "The stepwise exergonic transfer of electrons through the cytochrome $b_6f$ electron transport chain",
                    "The direct hydrolysis of ATP in the stroma",
                    "The spontaneous diffusion of $CO_2$ gas through stomata",
                    "The breakdown of glucose in the cytoplasm"
                ],
                "answer": "A",
                "explanation": "As electrons move down the photosynthetic electron transport chain from PSII through plastoquinone to the cytochrome $b_6f$ complex, the released free energy pumps protons ($H^+$) into the thylakoid lumen, generating the proton gradient for ATP synthase.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
