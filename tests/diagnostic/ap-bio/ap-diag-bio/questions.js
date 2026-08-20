// Specific Question Bank for Test: ap-diag-bio
const AP_TEST_DATA = {
    "ap-diag-bio": {
        "id": "ap-diag-bio",
        "title": "AP Biology Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Chemistry of Life & Cell Structure",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Biology",
        "questions": [
            {
                "id": "dbio_1",
                "topic": "Cells",
                "difficulty": "easy",
                "question": "Which organelle is responsible for cellular respiration and ATP production?",
                "options": [
                    "Ribosome",
                    "Mitochondria",
                    "Golgi apparatus",
                    "Lysosome"
                ],
                "answer": "B",
                "explanation": "Mitochondria generates ATP through cellular respiration."
            },
            {
                "id": "bio_2",
                "topic": "Cell Structure",
                "difficulty": "easy",
                "question": "Which organelle is the powerhouse of the cell?",
                "options": [
                    "Nucleus",
                    "Ribosome",
                    "Mitochondria",
                    "Golgi apparatus"
                ],
                "answer": "C",
                "explanation": "Mitochondria produce ATP through cellular respiration."
            },
            {
                "id": "bio_3",
                "topic": "Cell Structure",
                "difficulty": "easy",
                "question": "The cell membrane is primarily composed of:",
                "options": [
                    "Proteins only",
                    "DNA",
                    "Phospholipid bilayer",
                    "Carbohydrates"
                ],
                "answer": "C",
                "explanation": "The cell membrane consists of a phospholipid bilayer with embedded proteins."
            },
            {
                "id": "bio_4",
                "topic": "DNA",
                "difficulty": "easy",
                "question": "DNA replication follows which model?",
                "options": [
                    "Conservative",
                    "Dispersive",
                    "Semi-conservative",
                    "Random"
                ],
                "answer": "C",
                "explanation": "Semi-conservative replication: each new DNA molecule has one original and one new strand."
            },
            {
                "id": "bio_5",
                "topic": "Transcription",
                "difficulty": "medium",
                "question": "During transcription, DNA is used as a template to produce:",
                "options": [
                    "Proteins",
                    "mRNA",
                    "A DNA copy",
                    "Ribosomes"
                ],
                "answer": "B",
                "explanation": "Transcription produces messenger RNA (mRNA) from a DNA template."
            },
            {
                "id": "bio_6",
                "topic": "Central Dogma",
                "difficulty": "medium",
                "question": "The central dogma of molecular biology states:",
                "options": [
                    "RNA -> DNA -> Protein",
                    "DNA -> RNA -> Protein",
                    "Protein -> DNA -> RNA",
                    "DNA -> Protein directly"
                ],
                "answer": "B",
                "explanation": "The central dogma: DNA is transcribed to RNA, which is translated to protein."
            },
            {
                "id": "bio_7",
                "topic": "Evolution",
                "difficulty": "easy",
                "question": "Natural selection acts on:",
                "options": [
                    "Genotypes only",
                    "Phenotypes",
                    "Random mutations only",
                    "Gene pools uniformly"
                ],
                "answer": "B",
                "explanation": "Natural selection acts on phenotypes (observable traits), not directly on genotypes."
            },
            {
                "id": "bio_8",
                "topic": "Evolution",
                "difficulty": "medium",
                "question": "Which of the following provides evidence for evolution?",
                "options": [
                    "Only fossil records",
                    "Only DNA comparisons",
                    "Fossils, comparative anatomy, embryology, and DNA",
                    "Only observed mutations"
                ],
                "answer": "C",
                "explanation": "Multiple lines of evidence support evolution: fossils, comparative anatomy, embryology, and molecular data."
            },
            {
                "id": "bio_9",
                "topic": "Ecology",
                "difficulty": "easy",
                "question": "Producers in an ecosystem are:",
                "options": [
                    "Herbivores",
                    "Carnivores",
                    "Photosynthetic organisms",
                    "Decomposers"
                ],
                "answer": "C",
                "explanation": "Producers (autotrophs) make their own food via photosynthesis, forming the base of food webs."
            },
            {
                "id": "bio_10",
                "topic": "Ecology",
                "difficulty": "medium",
                "question": "The 10% rule in energy transfer means:",
                "options": [
                    "10% of species survive",
                    "Only 10% of energy moves to the next trophic level",
                    "10% of producers are consumed",
                    "10% of sunlight reaches earth"
                ],
                "answer": "B",
                "explanation": "Only ~10% of energy transfers from one trophic level to the next; 90% is lost as heat."
            },
            {
                "id": "bio_11",
                "topic": "Photosynthesis",
                "difficulty": "medium",
                "question": "In which organelle does photosynthesis occur?",
                "options": [
                    "Mitochondria",
                    "Nucleus",
                    "Chloroplast",
                    "Ribosome"
                ],
                "answer": "C",
                "explanation": "Photosynthesis takes place in the chloroplasts of plant and algal cells."
            },
            {
                "id": "bio_12",
                "topic": "Photosynthesis",
                "difficulty": "medium",
                "question": "The light-dependent reactions produce:",
                "options": [
                    "Glucose only",
                    "ATP and NADPH",
                    "CO2 and H2O",
                    "Only water"
                ],
                "answer": "B",
                "explanation": "Light-dependent reactions produce ATP, NADPH, and O2 using light energy and water."
            },
            {
                "id": "bio_13",
                "topic": "Cell Respiration",
                "difficulty": "medium",
                "question": "Aerobic respiration produces approximately how many ATP from one glucose?",
                "options": [
                    "2",
                    "10",
                    "38",
                    "100"
                ],
                "answer": "C",
                "explanation": "Complete aerobic respiration yields approximately 36-38 ATP per glucose molecule."
            },
            {
                "id": "bio_14",
                "topic": "Cell Respiration",
                "difficulty": "medium",
                "question": "Glycolysis takes place in the:",
                "options": [
                    "Mitochondrial matrix",
                    "Chloroplast",
                    "Cytoplasm",
                    "Nucleus"
                ],
                "answer": "C",
                "explanation": "Glycolysis, the first step of cellular respiration, occurs in the cytoplasm."
            },
            {
                "id": "bio_15",
                "topic": "Genetics",
                "difficulty": "medium",
                "question": "If both parents are Aa, what fraction of offspring will be aa?",
                "options": [
                    "$\\frac{1}{4}$",
                    "$\\frac{1}{2}$",
                    "$\\frac{3}{4}$",
                    "0"
                ],
                "answer": "A",
                "explanation": "Punnett square: AA (1/4), Aa (2/4), aa (1/4). So 25% are homozygous recessive."
            },
            {
                "id": "bio_16",
                "topic": "Genetics",
                "difficulty": "medium",
                "question": "A dominant allele is expressed:",
                "options": [
                    "Only when two copies are present",
                    "Even when only one copy is present",
                    "Only in females",
                    "Only when recessive alleles are absent entirely"
                ],
                "answer": "B",
                "explanation": "Dominant alleles are expressed in both heterozygous and homozygous dominant conditions."
            },
            {
                "id": "bio_17",
                "topic": "Cell Division",
                "difficulty": "medium",
                "question": "During which phase of mitosis do chromosomes line up at the equator?",
                "options": [
                    "Prophase",
                    "Metaphase",
                    "Anaphase",
                    "Telophase"
                ],
                "answer": "B",
                "explanation": "During metaphase, chromosomes align at the metaphase plate (cell's equator)."
            },
            {
                "id": "bio_18",
                "topic": "Cell Division",
                "difficulty": "medium",
                "question": "Meiosis produces:",
                "options": [
                    "2 identical diploid cells",
                    "4 genetically diverse haploid cells",
                    "2 haploid cells",
                    "4 identical diploid cells"
                ],
                "answer": "B",
                "explanation": "Meiosis produces 4 haploid gametes that are genetically unique due to crossing over and independent assortment."
            },
            {
                "id": "bio_19",
                "topic": "Animal Physiology",
                "difficulty": "medium",
                "question": "Which blood vessel carries oxygenated blood away from the heart to the body?",
                "options": [
                    "Veins",
                    "Capillaries",
                    "Pulmonary artery",
                    "Aorta"
                ],
                "answer": "D",
                "explanation": "The aorta carries oxygenated blood from the left ventricle to the rest of the body."
            },
            {
                "id": "bio_20",
                "topic": "Animal Physiology",
                "difficulty": "medium",
                "question": "The main function of the kidneys is:",
                "options": [
                    "Gas exchange",
                    "Blood filtration and waste excretion",
                    "Hormone production only",
                    "Digestion of nutrients"
                ],
                "answer": "B",
                "explanation": "Kidneys filter blood, regulate water balance, and excrete metabolic wastes as urine."
            },
            {
                "id": "bio_21",
                "topic": "Plant Biology",
                "difficulty": "medium",
                "question": "Water moves up a plant stem primarily via:",
                "options": [
                    "Active transport by roots",
                    "Osmosis only",
                    "Transpiration-cohesion-tension mechanism",
                    "Gravity"
                ],
                "answer": "C",
                "explanation": "Water is pulled up through xylem by the cohesion-tension mechanism driven by transpiration from leaves."
            },
            {
                "id": "bio_22",
                "topic": "Ecology",
                "difficulty": "hard",
                "question": "Commensalism describes the relationship where:",
                "options": [
                    "Both species benefit",
                    "One benefits, one harmed",
                    "One benefits, other unaffected",
                    "Both are harmed"
                ],
                "answer": "C",
                "explanation": "Commensalism: one organism benefits (+) and the other is unaffected (0)."
            },
            {
                "id": "bio_23",
                "topic": "Biochemistry",
                "difficulty": "medium",
                "question": "Enzymes speed up reactions by:",
                "options": [
                    "Increasing temperature",
                    "Lowering activation energy",
                    "Providing additional energy",
                    "Increasing substrate concentration"
                ],
                "answer": "B",
                "explanation": "Enzymes are biological catalysts that lower the activation energy needed for a reaction to proceed."
            },
            {
                "id": "bio_24",
                "topic": "Biochemistry",
                "difficulty": "medium",
                "question": "Which macromolecule is the primary immediate energy source for cells?",
                "options": [
                    "Proteins",
                    "Nucleic acids",
                    "Lipids",
                    "Carbohydrates"
                ],
                "answer": "D",
                "explanation": "Carbohydrates (especially glucose) are the primary immediate energy source for cellular processes."
            },
            {
                "id": "bio_25",
                "topic": "Immune System",
                "difficulty": "medium",
                "question": "B cells in the immune system produce:",
                "options": [
                    "T cells",
                    "Antibodies",
                    "Antigens",
                    "Phagocytes"
                ],
                "answer": "B",
                "explanation": "B lymphocytes differentiate into plasma cells that secrete antibodies targeting specific antigens."
            },
            {
                "id": "bio_26",
                "topic": "Nervous System",
                "difficulty": "medium",
                "question": "An action potential fires when the membrane reaches:",
                "options": [
                    "Resting potential",
                    "Threshold potential",
                    "Hyperpolarization peak",
                    "Repolarization point"
                ],
                "answer": "B",
                "explanation": "When threshold potential (~-55 mV) is reached, voltage-gated Na+ channels open triggering the action potential."
            },
            {
                "id": "bio_27",
                "topic": "Evolution",
                "difficulty": "hard",
                "question": "Hardy-Weinberg equilibrium requires all EXCEPT:",
                "options": [
                    "Random mating",
                    "No natural selection",
                    "No genetic drift",
                    "No migration"
                ],
                "answer": "C",
                "explanation": "Hardy-Weinberg equilibrium assumes large populations with NO genetic drift — drift violates the equilibrium."
            },
            {
                "id": "bio_28",
                "topic": "Cell Signaling",
                "difficulty": "hard",
                "question": "Signal transduction pathways convert:",
                "options": [
                    "DNA to RNA",
                    "Extracellular signals to intracellular responses",
                    "mRNA to proteins",
                    "Nutrients to ATP"
                ],
                "answer": "B",
                "explanation": "Signal transduction pathways relay and amplify extracellular signals into appropriate cellular responses."
            },
            {
                "id": "bio_29",
                "topic": "Genetics",
                "difficulty": "hard",
                "question": "Crossing over during meiosis increases:",
                "options": [
                    "Chromosome number",
                    "Genetic diversity",
                    "Mutation rate",
                    "Cell cycle speed"
                ],
                "answer": "B",
                "explanation": "Crossing over (recombination) between homologous chromosomes creates new allele combinations, increasing genetic diversity."
            },
            {
                "id": "bio_30",
                "topic": "Ecology",
                "difficulty": "hard",
                "question": "Primary succession begins on:",
                "options": [
                    "Disturbed ecosystems with remaining soil",
                    "Bare rock with no existing soil",
                    "Flooded grasslands",
                    "Burned forests with some soil"
                ],
                "answer": "B",
                "explanation": "Primary succession starts on bare substrate (like bare rock after a glacier retreats) with no existing soil."
            }
        ]
    }
};
