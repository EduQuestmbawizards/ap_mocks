// Specific Question Bank for Test: ap-topic-precalc-trig
const AP_TEST_DATA = {
    "ap-topic-precalc-trig": {
        "id": "ap-topic-precalc-trig",
        "title": "AP Precalculus: Polynomial & Trigonometric Models",
        "subject": "AP Precalculus",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-precalc-trig_q1",
                "topic": "Trigonometry",
                "difficulty": "easy",
                "question": "Find the period of $f(x) = \\sin(3x)$.",
                "options": [
                    "$\\pi/3$",
                    "\\$2\\pi/3$",
                    "$\\pi$",
                    "\\$2\\pi$"
                ],
                "answer": "B",
                "explanation": "Period formula $T = 2\\pi / b = 2\\pi/3$."
            },
            {
                "id": "ap-topic-precalc-trig_q2",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "What is the period and amplitude of the sinusoidal function $f(x) = -4 \\cos\\left(\\frac{\\pi}{3} x + \\frac{\\pi}{2}\\right) + 7$?",
                "options": [
                    "Period: 6, Amplitude: 4",
                    "Period: $2\\pi/3$, Amplitude: -4",
                    "Period: 6, Amplitude: 7",
                    "Period: 3, Amplitude: 4"
                ],
                "answer": "A",
                "explanation": "For $f(x) = A \\cos(Bx + C) + D$: Amplitude is $|A| = |-4| = 4$. The coefficient $B = \\frac{\\pi}{3}$, so the period is $T = \\frac{2\\pi}{B} = \\frac{2\\pi}{\\pi/3} = 6$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q3",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Find the exact value of $\\sin\\left(\\frac{11\\pi}{6}\\right)$.",
                "options": [
                    "-1/2",
                    "1/2",
                    "$-\\sqrt{3}/2$",
                    "$\\sqrt{3}/2$"
                ],
                "answer": "A",
                "explanation": "$\\frac{11\\pi}{6}$ is in Quadrant IV with reference angle $\\frac{\\pi}{6}$. Since sine is negative in Quadrant IV, $\\sin(11\\pi/6) = -\\sin(\\pi/6) = -\\frac{1}{2}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q4",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Convert the rectangular coordinates $(-3, 3\\sqrt{3})$ to polar coordinates $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$.",
                "options": [
                    "$(6, 2\\pi/3)$",
                    "$(6, 5\\pi/6)$",
                    "$(6, \\pi/3)$",
                    "$(12, 2\\pi/3)$"
                ],
                "answer": "A",
                "explanation": "$r = \\sqrt{(-3)^2 + (3\\sqrt{3})^2} = \\sqrt{9 + 27} = \\sqrt{36} = 6$. Since $x = -3 < 0$ and $y = 3\\sqrt{3} > 0$, the point lies in Quadrant II. $\\tan\\theta = \\frac{y}{x} = \\frac{3\\sqrt{3}}{-3} = -\\sqrt{3}$. Thus $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. The polar coordinate is $(6, 2\\pi/3)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q5",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "hard",
                "question": "Solve the equation $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ for $0 \\le \\theta < 2\\pi$.",
                "options": [
                    "$0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$",
                    "$\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$",
                    "$\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\pi$",
                    "$0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$"
                ],
                "answer": "A",
                "explanation": "Factor as quadratic in $\\cos\\theta$: $(2\\cos\\theta + 1)(\\cos\\theta - 1) = 0$. Case 1: $\\cos\\theta = 1 \\implies \\theta = 0$. Case 2: $\\cos\\theta = -\\frac{1}{2} \\implies \\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$. Solutions: $0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q6",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Evaluate $\\cos(\\alpha + \\beta)$ given that $\\sin\\alpha = \\frac{3}{5}$ with $\\alpha$ in Quadrant I, and $\\cos\\beta = -\\frac{5}{13}$ with $\\beta$ in Quadrant II.",
                "options": [
                    "-56/65",
                    "-16/65",
                    "56/65",
                    "16/65"
                ],
                "answer": "A",
                "explanation": "For $\\alpha$ in Q1: $\\cos\\alpha = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$. For $\\beta$ in Q2: $\\sin\\beta = \\sqrt{1 - (-5/13)^2} = \\frac{12}{13}$. Using cosine sum formula $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$: $\\cos(\\alpha + \\beta) = \\left(\\frac{4}{5}\\right)\\left(-\\frac{5}{13}\\right) - \\left(\\frac{3}{5}\\right)\\left(\\frac{12}{13}\\right) = -\\frac{20}{65} - \\frac{36}{65} = -\\frac{56}{65}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q7",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Find all vertical asymptotes of the rational function $R(x) = \\frac{x^2 - 4}{x^2 - 5x + 6}$.",
                "options": [
                    "$x = 3$ only",
                    "$x = 2$ and $x = 3$",
                    "$x = 2$ only",
                    "$x = -2$ and $x = 3$"
                ],
                "answer": "A",
                "explanation": "Factor numerator and denominator: $R(x) = \\frac{(x - 2)(x + 2)}{(x - 2)(x - 3)}$. The factor $(x - 2)$ cancels, creating a removable discontinuity (hole) at $x = 2$. The remaining denominator factor $(x - 3)$ creates a vertical asymptote at $x = 3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q8",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "hard",
                "question": "Solve for $x$: $\\log_2(x + 3) + \\log_2(x - 1) = 5$.",
                "options": [
                    "5",
                    "5 and -7",
                    "7",
                    "4"
                ],
                "answer": "A",
                "explanation": "Use log product property: $\\log_2((x + 3)(x - 1)) = 5 \\implies (x + 3)(x - 1) = 2^5 = 32$. Expanding: $x^2 + 2x - 3 = 32 \\implies x^2 + 2x - 35 = 0 \\implies (x + 7)(x - 5) = 0$. Since logarithms require positive arguments ($x > 1$), $x = -7$ is extraneous. Thus, $x = 5$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q9",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Evaluate $\\arcsin\\left(\\sin\\left(\\frac{5\\pi}{6}\\right)\\right)$.",
                "options": [
                    "$\\pi/6$",
                    "$5\\pi/6$",
                    "$-\\pi/6$",
                    "$7\\pi/6$"
                ],
                "answer": "A",
                "explanation": "First evaluate inside: $\\sin(5\\pi/6) = \\frac{1}{2}$. The range of the principal $\\arcsin$ function is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. The unique angle in this range whose sine is $\\frac{1}{2}$ is $\\frac{\\pi}{6}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q10",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "What is the end behavior of the polynomial $P(x) = -2x^5 + 7x^3 - 4x + 9$?",
                "options": [
                    "As $x \\to \\infty$, $P(x) \\to -\\infty$; as $x \\to -\\infty$, $P(x) \\to \\infty$",
                    "As $x \\to \\infty$, $P(x) \\to \\infty$; as $x \\to -\\infty$, $P(x) \\to -\\infty$",
                    "As $x \\to \\pm\\infty$, $P(x) \\to -\\infty$",
                    "As $x \\to \\pm\\infty$, $P(x) \\to \\infty$"
                ],
                "answer": "A",
                "explanation": "Leading term is $-2x^5$. The degree is odd (5) and the leading coefficient is negative (-2). As $x \\to \\infty$, $(-2)(+\\infty) \\to -\\infty$. As $x \\to -\\infty$, $(-2)(-\\infty) \\to \\infty$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q11",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Which expression is identical to $\\frac{1}{1 - \\cos x} + \\frac{1}{1 + \\cos x}$?",
                "options": [
                    "$2\\csc^2 x$",
                    "$2\\sec^2 x$",
                    "$2\\sin^2 x$",
                    "$\\cot^2 x$"
                ],
                "answer": "A",
                "explanation": "Combine fractions with common denominator: $\\frac{(1 + \\cos x) + (1 - \\cos x)}{(1 - \\cos x)(1 + \\cos x)} = \\frac{2}{1 - \\cos^2 x} = \\frac{2}{\\sin^2 x} = 2\\csc^2 x$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q12",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "hard",
                "question": "A Ferris wheel with diameter 60 feet rotates at a constant rate, completing one revolution every 40 seconds. Passengers board at the lowest point, 4 feet above the ground, at $t = 0$. Which function models passenger height $h(t)$ in feet?",
                "options": [
                    "$h(t) = -30\\cos\\left(\\frac{\\pi}{20} t\\right) + 34$",
                    "$h(t) = 30\\cos\\left(\\frac{\\pi}{20} t\\right) + 34$",
                    "$h(t) = -60\\cos\\left(\\frac{\\pi}{40} t\\right) + 4$",
                    "$h(t) = -30\\sin\\left(\\frac{\\pi}{20} t\\right) + 34$"
                ],
                "answer": "A",
                "explanation": "Radius (amplitude) is $60/2 = 30\\text{ ft}$. Lowest height is 4 ft, highest is $4 + 60 = 64\\text{ ft}$. Midline is $\\frac{64 + 4}{2} = 34\\text{ ft}$. Period is $40\\text{ s}$, so $B = \\frac{2\\pi}{40} = \\frac{\\pi}{20}$. Starting at the minimum at $t = 0$ corresponds to a negative cosine curve: $h(t) = -30\\cos\\left(\\frac{\\pi}{20} t\\right) + 34$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q13",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Solve for all solutions of $e^{2x} - 5e^x + 6 = 0$.",
                "options": [
                    "$x = \\ln 2$ and $x = \\ln 3$",
                    "$x = 2$ and $x = 3$",
                    "$x = e^2$ and $x = e^3$",
                    "$x = \\ln 5$ and $x = \\ln 6$"
                ],
                "answer": "A",
                "explanation": "Let $u = e^x$. The equation becomes $u^2 - 5u + 6 = 0 \\implies (u - 2)(u - 3) = 0 \\implies u = 2$ or $u = 3$. Back-substituting $e^x$: $e^x = 2 \\implies x = \\ln 2$; $e^x = 3 \\implies x = \\ln 3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q14",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "hard",
                "question": "What is the exact value of $\\tan(2\\theta)$ if $\\sin\\theta = \\frac{4}{5}$ and $\\theta$ is in Quadrant II?",
                "options": [
                    "24/7",
                    "-24/7",
                    "7/24",
                    "-7/24"
                ],
                "answer": "A",
                "explanation": "In Q2, $\\cos\\theta = -\\sqrt{1 - (4/5)^2} = -\\frac{3}{5}$. Thus $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$. Use double-angle identity: $\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{2(-4/3)}{1 - (-4/3)^2} = \\frac{-8/3}{1 - 16/9} = \\frac{-8/3}{-7/9} = \\left(-\\frac{8}{3}\\right)\\left(-\\frac{9}{7}\\right) = \\frac{24}{7}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q15",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Find the slant (oblique) asymptote of $f(x) = \\frac{2x^2 + 5x - 1}{x + 2}$.",
                "options": [
                    "$y = 2x + 1$",
                    "$y = 2x - 1$",
                    "$y = 2x + 5$",
                    "$y = x + 2$"
                ],
                "answer": "A",
                "explanation": "Perform polynomial long division: $(2x^2 + 5x - 1) \\div (x + 2) = 2x + 1 + \\frac{-3}{x + 2}$. As $x \\to \\pm\\infty$, $\\frac{-3}{x + 2} \\to 0$, so the slant asymptote is $y = 2x + 1$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q16",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "What is the sum of the zeros of $f(x) = 3x^3 - 9x^2 + 4x - 12$?",
                "options": [
                    "3",
                    "-3",
                    "4/3",
                    "12"
                ],
                "answer": "A",
                "explanation": "By Vieta's formulas, for a cubic $ax^3 + bx^2 + cx + d = 0$, the sum of the zeros is $-\\frac{b}{a}$. Here $a = 3$ and $b = -9$, so sum $= -\\frac{-9}{3} = 3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q17",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "hard",
                "question": "Convert the polar equation $r = 4\\cos\\theta$ into an equivalent Cartesian equation.",
                "options": [
                    "$(x - 2)^2 + y^2 = 4$",
                    "$x^2 + (y - 2)^2 = 4$",
                    "$x^2 + y^2 = 16$",
                    "$(x - 4)^2 + y^2 = 16$"
                ],
                "answer": "A",
                "explanation": "Multiply both sides by $r$: $r^2 = 4r\\cos\\theta$. Substitute $r^2 = x^2 + y^2$ and $r\\cos\\theta = x$: $x^2 + y^2 = 4x$. Rearrange and complete the square: $x^2 - 4x + 4 + y^2 = 4 \\implies (x - 2)^2 + y^2 = 4$. This is a circle of radius 2 centered at $(2, 0)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q18",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Find the domain of the function $f(x) = \\sqrt{\\ln(x - 2)}$.",
                "options": [
                    "$[3, \\infty)$",
                    "$(2, \\infty)$",
                    "$[2, \\infty)$",
                    "$(3, \\infty)$"
                ],
                "answer": "A",
                "explanation": "For the square root, the argument must be non-negative: $\\ln(x - 2) \\ge 0 \\implies x - 2 \\ge e^0 = 1 \\implies x \\ge 3$. This also automatically satisfies the log domain restriction $x - 2 > 0$. Thus the domain is $[3, \\infty)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q19",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "hard",
                "question": "What is the exact value of $\\sin(15^\\circ)$?",
                "options": [
                    "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
                    "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
                    "$\\frac{\\sqrt{3} - 1}{2}$",
                    "$\\frac{\\sqrt{2} - 1}{2}$"
                ],
                "answer": "A",
                "explanation": "Use the difference formula $\\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ - \\cos 45^\\circ\\sin 30^\\circ = \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) - \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-precalc-trig_q20",
                "topic": "Polynomial & Trigonometric Models",
                "difficulty": "medium",
                "question": "Which function is strictly increasing on its entire natural domain?",
                "options": [
                    "$f(x) = 2^x$",
                    "$g(x) = \\cos x$",
                    "$h(x) = x^2$",
                    "$k(x) = \\frac{1}{x}$"
                ],
                "answer": "A",
                "explanation": "An exponential function $b^x$ with base $b > 1$ has positive derivative $\\frac{d}{dx}[2^x] = 2^x \\ln 2 > 0$ for all $x \\in \\mathbb{R}$, so it is strictly increasing everywhere.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
