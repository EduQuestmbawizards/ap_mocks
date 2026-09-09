// Specific Question Bank for Test: ap-topic-music-harmony
const AP_TEST_DATA = {
    "ap-topic-music-harmony": {
        "id": "ap-topic-music-harmony",
        "title": "AP Music Theory: Harmony & Voice Leading",
        "subject": "AP Music Theory",
        "category": "Arts",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-music-harmony_q1",
                "topic": "Music Theory",
                "difficulty": "medium",
                "question": "In tonal harmony, a V - I chord cadence is called a:",
                "options": [
                    "Plagal Cadence",
                    "Authentic Cadence",
                    "Deceptive Cadence",
                    "Half Cadence"
                ],
                "answer": "B",
                "explanation": "V to I creates a strong Authentic Cadence."
            },
            {
                "id": "ap-topic-music-harmony_q2",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "In four-part chorale voice leading (SATB), why are parallel perfect fifths and parallel perfect octaves strictly forbidden between any two voices?",
                "options": [
                    "They destroy the contrapuntal independence of the individual voices by merging them into an acoustic acoustic blend",
                    "They produce unacceptable dissonance that clashes with the tonic triad",
                    "They are physically unplayable on the pipe organ",
                    "They prevent the soprano from singing the melody"
                ],
                "answer": "A",
                "explanation": "Parallel perfect consonances (5ths and 8ves) undermine polyphony because the human auditory system perceives the two moving voices as a single blended voice, destroying voice independence.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q3",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What chord sequence and melodic soprano condition define a Perfect Authentic Cadence (PAC)?",
                "options": [
                    "A $V$ (or $V^7$) to $I$ root-position progression, with the tonic scale degree ($\\hat{1}$) in the soprano of the final $I$ chord",
                    "A $IV$ to $I$ progression with $\\hat{3}$ in the soprano",
                    "A $V$ to $vi$ progression where the bass moves up by step",
                    "Any progression that ends on an inverted dominant $V^6$"
                ],
                "answer": "A",
                "explanation": "A Perfect Authentic Cadence requires: both $V$ and $I$ in root position, and the soprano must resolve to the tonic pitch $\\hat{1}$ on the final $I$ chord. (If either chord is inverted or soprano ends on $\\hat{3}$ or $\\hat{5}$, it is an Imperfect Authentic Cadence, IAC).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q4",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What cadence occurs when a phrase concludes on a dominant triad ($V$), creating an open, unresolved harmonic pause?",
                "options": [
                    "Half Cadence (HC)",
                    "Plagal Cadence (PC)",
                    "Deceptive Cadence (DC)",
                    "Phrygian Half Cadence exclusively in major"
                ],
                "answer": "A",
                "explanation": "A Half Cadence ends on the dominant harmony ($V$), functioning like a comma in musical punctuation, requiring a subsequent phrase to provide harmonic resolution.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q5",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "What is the figured bass inversion symbol for a second-inversion seventh chord?",
                "options": [
                    "$\\text{V}^{4}_{3}$",
                    "$\\text{V}^{6}_{5}$",
                    "$\\text{V}^{4}_{2}$",
                    "$\\text{V}^7$"
                ],
                "answer": "A",
                "explanation": "Seventh chord inversions: Root position $= 7$; First inversion (third in bass) $= 6/5$; Second inversion (fifth in bass) $= 4/3$; Third inversion (seventh in bass) $= 4/2$ (or 2).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q6",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "When resolving a dominant seventh chord ($V^7$) to tonic ($I$), what is the mandatory voice-leading resolution for the chordal seventh and the leading tone in an outer voice?",
                "options": [
                    "The chordal seventh must resolve step-wise downward by step ($\\hat{4} \\to \\hat{3}$), and the leading tone must resolve upward by half-step ($\\hat{7} \\to \\hat{1}$)",
                    "Both the seventh and leading tone must leap downward by a third",
                    "The seventh resolves upward to $\\hat{5}$, and the leading tone moves to $\\hat{2}$",
                    "The seventh remains static as a common tone"
                ],
                "answer": "A",
                "explanation": "In $V^7$, the tritone between the leading tone ($\\hat{7}$) and chordal seventh ($\\hat{4}$) demands resolution: $\\hat{7}$ resolves up to $\\hat{1}$, while $\\hat{4}$ resolves down to $\\hat{3}$ in the tonic triad.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q7",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "In a 4-3 suspension, what are the three successive metric phases of the non-chord tone?",
                "options": [
                    "Preparation (consonance on weak beat), Suspension (dissonance held on strong beat), Resolution (stepwise downward resolution to consonance on weak beat)",
                    "Attack on strong beat, leap upward by fifth, resolution to tonic",
                    "Consonance on strong beat, dissonance on weak beat, leap downward",
                    "Chromatic step upward, common tone held, octave leap"
                ],
                "answer": "A",
                "explanation": "A suspension unfolds in three stages: Preparation (a note is sounded as a consonance), Suspension (the note is sustained as the bass moves, creating a metric accent dissonance), and Resolution (falls step-wise to a consonance).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q8",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What is a \"Deceptive Cadence\"?",
                "options": [
                    "A dominant chord ($V$) resolving unexpectedly to a submediant chord ($vi$ in major, $VI$ in minor) instead of the expected tonic ($I$)",
                    "A subdominant chord ($IV$) resolving directly to tonic ($I$)",
                    "A tonic chord resolving to an augmented sixth chord",
                    "A dominant seventh resolving to a diminished seventh"
                ],
                "answer": "A",
                "explanation": "A Deceptive Cadence deceives the ear's expectation of tonic resolution by substituting the submediant ($vi$) for $I$ following a dominant $V$, allowing phrase expansion.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q9",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "What chord is a secondary dominant ($V^7/V$) in the key of C Major?",
                "options": [
                    "$D^7$ (D - F# - A - C)",
                    "$G^7$ (G - B - D - F)",
                    "$A^7$ (A - C# - E - G)",
                    "$C^7$ (C - E - G - Bb)"
                ],
                "answer": "A",
                "explanation": "In C Major, the dominant is G Major ($V$). The dominant seventh of G Major is built on D ($D - F\\sharp - A - C$), which is $D^7$. Thus, $V^7/V$ in C Major is $D^7$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q10",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What is a \"Plagal Cadence\"?",
                "options": [
                    "A $IV \\to I$ (subdominant to tonic) progression, often called the \"Amen\" cadence",
                    "A $V \\to I$ progression in root position",
                    "A $ii^6 \\to V$ progression preceding a half cadence",
                    "A $vii^{\\circ 6} \\to I$ progression"
                ],
                "answer": "A",
                "explanation": "A Plagal Cadence moves from subdominant ($IV$) to tonic ($I$), historically familiar as the concluding \"Amen\" in sacred choral hymns.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q11",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "Which non-chord tone is approached by leap and resolved by stepwise motion in the opposite direction?",
                "options": [
                    "Appoggiatura",
                    "Passing tone",
                    "Neighbor tone",
                    "Suspension"
                ],
                "answer": "A",
                "explanation": "An appoggiatura is an accented non-chord tone that is approached by an upward (or downward) leap and resolved step-wise in the contrary direction.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q12",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "When doubling notes in a root-position major or minor triad in four-part SATB harmony, what note is the primary and most acoustically stable choice to double?",
                "options": [
                    "The root of the triad",
                    "The third of the triad",
                    "The fifth of the triad",
                    "The seventh of the triad"
                ],
                "answer": "A",
                "explanation": "In root-position triads, doubling the root reinforces the fundamental acoustic harmonic series and provides stability. Doubling the third is generally avoided (especially if it is a tendency tone like the leading tone).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q13",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What is a \"passing tone\"?",
                "options": [
                    "A non-chord tone that fills the melodic interval of a third between two chord tones by stepwise motion in the same direction",
                    "A non-chord tone that steps away from a chord tone and returns to the same chord tone",
                    "A note held as a pedal point in the lowest bass voice",
                    "A chromatic inflection used to modulate to a foreign key"
                ],
                "answer": "A",
                "explanation": "A passing tone connects two distinct chord tones a third apart by moving in scalar stepwise fashion in a consistent direction.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q14",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "In harmonic minor keys, why must the seventh scale degree be raised by an accidental when writing dominant harmonies ($V$ or $V^7$)?",
                "options": [
                    "To create a leading tone a half-step below the tonic, ensuring a pull that drives authentic cadential resolution",
                    "To avoid augmented fourth intervals with the subdominant",
                    "To convert the minor key into a parallel major key permanently",
                    "Because minor keys cannot contain minor triads"
                ],
                "answer": "A",
                "explanation": "Natural minor possesses a subtonic (whole step below tonic). Raising $\\hat{7}$ by a half step creates the leading tone, transforming minor $v$ into a major dominant $V$ with a resolving leading tone to $\\hat{1}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q15",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What constitutes a \"neighbor tone\" (auxiliary tone)?",
                "options": [
                    "A non-chord tone that steps away from a chord tone (up or down) and immediately steps back to the original chord tone",
                    "A non-chord tone that leaps to another chord tone",
                    "A chord tone sustained across two full bars",
                    "A chromatic alteration of the root note"
                ],
                "answer": "A",
                "explanation": "A neighbor tone departs from a chord tone by step (upper or lower neighbor) and returns to the same pitch.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q16",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "What is a \"pivot chord\" in common-practice diatonic modulation?",
                "options": [
                    "A chord that serves a dual diatonic harmonic function in both the initial home key and the destination new key",
                    "An augmented sixth chord resolving outward to an octave",
                    "A chord played exclusively by the brass section during a key change",
                    "A dissonant non-functional chord that halts the progression"
                ],
                "answer": "A",
                "explanation": "A pivot chord (common chord) belongs naturally to both the departing key and arriving key (e.g., $vi$ in C major is $ii$ in G major), providing a smooth harmonic bridge for modulation.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q17",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "In first inversion triads (figured as 6), what note is located in the lowest (bass) voice?",
                "options": [
                    "The third of the triad",
                    "The root of the triad",
                    "The fifth of the triad",
                    "The seventh of the triad"
                ],
                "answer": "A",
                "explanation": "In first inversion, the chordal third is in the bass, creating an interval of a 6th and a 3rd above the bass, indicated in figured bass as 6 (short for 6/3).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q18",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "What voice-leading error occurs if two voices leap in the same direction into a perfect fifth or octave, and the highest voice leaps?",
                "options": [
                    "Direct (hidden) fifths or octaves",
                    "Parallel fifths",
                    "Voice crossing",
                    "Voice overlap"
                ],
                "answer": "A",
                "explanation": "Direct (hidden) octaves or fifths occur when the soprano and bass move by similar motion into a perfect consonance and the soprano leaps, which can sound like parallel fifths/octaves.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q19",
                "topic": "Harmony & Voice Leading",
                "difficulty": "medium",
                "question": "What is a \"pedal point\" in harmonic analysis?",
                "options": [
                    "A sustained or repeated pitch (usually in the bass) that persists while harmonies in the upper voices shift around it, creating alternating consonance and dissonance",
                    "A rapid pedal alternation on the harp",
                    "The highest note achievable on a piccolo",
                    "A dynamic marking instructing the player to play softly"
                ],
                "answer": "A",
                "explanation": "Named after organ foot pedals, a pedal point sustains a single pitch (most often the tonic or dominant in the bass) while shifting chord progressions move above it.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-music-harmony_q20",
                "topic": "Harmony & Voice Leading",
                "difficulty": "hard",
                "question": "What is the standard functional progression of harmonic syntax in common-practice Western art music?",
                "options": [
                    "Tonic ($I$) $\\to$ Predominant ($ii$ or $IV$) $\\to$ Dominant ($V$ or $vii^\\circ$) $\\to$ Tonic ($I$)",
                    "Dominant $\\to$ Predominant $\\to$ Tonic $\\to$ Submediant",
                    "Tonic $\\to$ Dominant $\\to$ Predominant $\\to$ Subdominant",
                    "Predominant $\\to$ Tonic $\\to$ Dominant $\\to$ Subdominant"
                ],
                "answer": "A",
                "explanation": "Tonal functional harmony follows the syntactical cycle: Tonic establishes stability $\\to$ Predominant prepares dominant tension $\\to$ Dominant creates instability $\\to$ Tonic resolves the cycle ($T \\to PD \\to D \\to T$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
