// ============================================================
// EDUQUEST ALL-AP SUBJECT QUESTION BANK & CONFIGURATIONS
// ============================================================

const AP_TEST_DATA = {
    "ap-diag-1": {
        "id": "ap-diag-1",
        "title": "AP Calculus AB Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Limits, Derivatives, Integrals & Applications",
        "timeLimitMinutes": 45,
        "testType": "Diagnostic",
        "subject": "AP Calculus AB",
        "questions": [
            {
                "id": "diag_1",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "Evaluate \\(\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}\\).",
                "options": [
                    "0",
                    "3",
                    "6",
                    "Undefined"
                ],
                "answer": "C",
                "explanation": "Factor numerator: \\(x^2 - 9 = (x - 3)(x + 3)\\). Cancel \\((x - 3)\\) to get \\(\\lim_{x \\to 3} (x + 3) = 6\\)."
            },
            {
                "id": "diag_2",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "What is \\(\\lim_{x \\to 0} \\frac{\\sin(4x)}{x}\\)?",
                "options": [
                    "0",
                    "1",
                    "4",
                    "Does not exist"
                ],
                "answer": "C",
                "explanation": "Using \\(\\lim_{u \\to 0} \\frac{\\sin(k u)}{u} = k\\), we get 4."
            },
            {
                "id": "diag_3",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Find \\(\\lim_{x \\to \\infty} \\frac{5x^3 - 2x + 1}{2x^3 + 7x^2}\\).",
                "options": [
                    "0",
                    "2.5",
                    "5",
                    "\\(\\infty\\)"
                ],
                "answer": "B",
                "explanation": "Leading coefficients ratio: 5/2 = 2.5."
            },
            {
                "id": "diag_4",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "If \\(f(x) = 4x^3 - 5x^2 + 7x - 2\\), what is \\(f'(x)\\)?",
                "options": [
                    "\\(12x^2 - 10x + 7\\)",
                    "\\(12x^2 - 5x + 7\\)",
                    "\\(4x^2 - 10x\\)",
                    "\\(12x^3 - 10x^2\\)"
                ],
                "answer": "A",
                "explanation": "Apply power rule term by term: \\(12x^2 - 10x + 7\\)."
            },
            {
                "id": "diag_5",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Find the slope of the tangent line to \\(x^2 + y^2 = 25\\) at \\((3, 4)\\).",
                "options": [
                    "-3/4",
                    "3/4",
                    "-4/3",
                    "4/3"
                ],
                "answer": "A",
                "explanation": "\\(2x + 2y y' = 0 \\implies y' = -x/y = -3/4\\)."
            },
            {
                "id": "diag_6",
                "topic": "Integrals",
                "difficulty": "easy",
                "question": "Evaluate \\(\\int (3x^2 - 4x + 5) dx\\).",
                "options": [
                    "\\(x^3 - 2x^2 + 5x + C\\)",
                    "\\(6x - 4 + C\\)",
                    "\\(x^3 - 4x^2 + 5x + C\\)",
                    "\\(3x^3 - 2x^2 + C\\)"
                ],
                "answer": "A",
                "explanation": "Power rule for integration gives \\(x^3 - 2x^2 + 5x + C\\)."
            },
            {
                "id": "diag_7",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Find \\(\\int_0^{\\pi/2} \\sin(x) \\cos(x) , dx\\).",
                "options": [
                    "0",
                    "0.5",
                    "1",
                    "2"
                ],
                "answer": "B",
                "explanation": "Substitution \\(u = \\sin(x)\\) gives \\([u^2/2]_0^1 = 0.5\\)."
            },
            {
                "id": "diag_8",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "Find the average value of \\(f(x) = x^2\\) on \\([0, 3]\\).",
                "options": [
                    "3",
                    "4.5",
                    "9",
                    "27"
                ],
                "answer": "A",
                "explanation": "\\(\\frac{1}{3} \\int_0^3 x^2 dx = \\frac{1}{3} [x^3/3]_0^3 = 3\\)."
            },
            {
                "id": "diag_9",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Find \\\\(\\\\frac{d}{dx}[\\\\sin(x^2)]\\\\).",
                "options": [
                "\\(\\cos(x^2)\\)",
                "\\(2x\\cos(x^2)\\)",
                "\\(-\\sin(x^2)\\)",
                "\\(2\\cos(x^2)\\)"
                ],
                "answer": "B",
                "explanation": "Chain rule: \\\\(\\\\cos(x^2) \\\\cdot 2x = 2x\\\\cos(x^2)\\\\)."
            },
            {
                "id": "diag_10",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Use the product rule to differentiate \\\\(f(x) = x^2 e^x\\\\).",
                "options": [
                "\\(2xe^x\\)",
                "\\(x^2 e^x + 2xe^x\\)",
                "\\(2xe^x - x^2 e^x\\)",
                "\\(x^2 e^x\\)"
                ],
                "answer": "B",
                "explanation": "\\\\(f'(x) = x^2 e^x + 2x e^x\\\\) by product rule."
            },
            {
                "id": "diag_11",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Evaluate \\\\(\\\\lim_{x \\\\to 0} \\\\frac{1 - \\\\cos x}{x^2}\\\\).",
                "options": [
                "0",
                "1/2",
                "1",
                "Does not exist"
                ],
                "answer": "B",
                "explanation": "Using L'Hopital or Taylor series: limit equals 1/2."
            },
            {
                "id": "diag_12",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "What is the derivative of \\\\(\\\\ln(x)\\\\)?",
                "options": [
                "\\(x\\)",
                "\\(1/x\\)",
                "\\(e^x\\)",
                "\\(\\ln(x)/x\\)"
                ],
                "answer": "B",
                "explanation": "\\\\(\\\\frac{d}{dx}[\\\\ln x] = \\\\frac{1}{x}\\\\)."
            },
            {
                "id": "diag_13",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Evaluate \\\\(\\\\int e^{3x} dx\\\\).",
                "options": [
                "\\(e^{3x} + C\\)",
                "\\(3e^{3x} + C\\)",
                "\\(\\frac{1}{3}e^{3x} + C\\)",
                "\\(\\frac{e^{3x}}{x} + C\\)"
                ],
                "answer": "C",
                "explanation": "\\\\(\\\\int e^{3x} dx = \\\\frac{1}{3}e^{3x} + C\\\\)."
            },
            {
                "id": "diag_14",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "If \\\\(f'(x) > 0\\\\) on \\\\((a, b)\\\\), then \\\\(f\\\\) is:",
                "options": [
                "Decreasing on \\((a,b)\\)",
                "Increasing on \\((a,b)\\)",
                "Concave up",
                "Has a local max"
                ],
                "answer": "B",
                "explanation": "Positive first derivative means the function is increasing on that interval."
            },
            {
                "id": "diag_15",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "Find the critical points of \\\\(f(x) = x^3 - 3x\\\\).",
                "options": [
                "\\(x = 0\\)",
                "\\(x = \\pm 1\\)",
                "\\(x = \\pm 3\\)",
                "\\(x = 1\\) only"
                ],
                "answer": "B",
                "explanation": "\\\\(f'(x) = 3x^2 - 3 = 0 \\\\implies x = \\\\pm 1\\\\)."
            },
            {
                "id": "diag_16",
                "topic": "Integrals",
                "difficulty": "hard",
                "question": "Evaluate \\\\(\\\\int_1^e \\\\frac{\\\\ln x}{x} dx\\\\).",
                "options": [
                "0",
                "1/2",
                "1",
                "e"
                ],
                "answer": "B",
                "explanation": "Let \\\\(u = \\\\ln x\\\\), \\\\(du = dx/x\\\\). Integral becomes \\\\(\\\\int_0^1 u\\\\, du = 1/2\\\\)."
            },
            {
                "id": "diag_17",
                "topic": "Derivatives",
                "difficulty": "hard",
                "question": "Find \\\\(\\\\frac{d}{dx}[\\\\tan^{-1}(x)]\\\\).",
                "options": [
                "\\(\\frac{1}{1+x^2}\\)",
                "\\(\\frac{1}{\\sqrt{1-x^2}}\\)",
                "\\(-\\frac{1}{1+x^2}\\)",
                "\\(\\sec^2(x)\\)"
                ],
                "answer": "A",
                "explanation": "Standard derivative: \\\\(\\\\frac{d}{dx}[\\\\arctan x] = \\\\frac{1}{1+x^2}\\\\)."
            },
            {
                "id": "diag_18",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "The second derivative test: if \\\\(f'(c)=0\\\\) and \\\\(f''(c) > 0\\\\), then \\\\(f\\\\) has a:",
                "options": [
                "Local minimum at \\(x=c\\)",
                "Local maximum at \\(x=c\\)",
                "Inflection point",
                "No conclusion"
                ],
                "answer": "A",
                "explanation": "Positive second derivative at a critical point indicates a local minimum."
            },
            {
                "id": "diag_19",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Use substitution: \\\\(\\\\int 2x(x^2+1)^4 dx\\\\).",
                "options": [
                "\\(\\frac{(x^2+1)^5}{5} + C\\)",
                "\\(\\frac{(x^2+1)^5}{10} + C\\)",
                "\\(8x(x^2+1)^3 + C\\)",
                "\\((x^2+1)^5 + C\\)"
                ],
                "answer": "A",
                "explanation": "Let \\\\(u = x^2+1\\\\), \\\\(du = 2x\\\\,dx\\\\). Integral = \\\\(u^5/5 + C\\\\)."
            },
            {
                "id": "diag_20",
                "topic": "Limits",
                "difficulty": "hard",
                "question": "Apply L'Hopital's Rule: \\\\(\\\\lim_{x \\\\to 0} \\\\frac{e^x - 1}{x}\\\\).",
                "options": [
                "0",
                "1",
                "e",
                "Does not exist"
                ],
                "answer": "B",
                "explanation": "Both numerator and denominator are 0/0. Differentiate: \\\\(e^x/1 = 1\\\\) at \\\\(x=0\\\\)."
            },
            {
                "id": "diag_21",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "The area between \\\\(y = x^2\\\\) and \\\\(y = x\\\\) from \\\\(x=0\\\\) to \\\\(x=1\\\\) is:",
                "options": [
                "1/6",
                "1/3",
                "1/2",
                "1"
                ],
                "answer": "A",
                "explanation": "\\\\(\\\\int_0^1 (x - x^2) dx = 1/2 - 1/3 = 1/6\\\\)."
            },
            {
                "id": "diag_22",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "What is \\\\(\\\\frac{d}{dx}[x^x]\\\\)?",
                "options": [
                "\\(x \\cdot x^{x-1}\\)",
                "\\(x^x(1 + \\ln x)\\)",
                "\\(x^x \\ln x\\)",
                "\\(x^{x-1}\\)"
                ],
                "answer": "B",
                "explanation": "Take \\\\(\\\\ln y = x \\\\ln x\\\\). Then \\\\(y'/y = \\\\ln x + 1\\\\), so \\\\(y' = x^x(1+\\\\ln x)\\\\)."
            },
            {
                "id": "diag_23",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Evaluate \\\\(\\\\int \\\\cos^2(x) dx\\\\).",
                "options": [
                "\\(\\frac{\\sin(2x)}{4} + C\\)",
                "\\(\\frac{x}{2} + \\frac{\\sin(2x)}{4} + C\\)",
                "\\(-\\sin^2(x) + C\\)",
                "\\(\\cos(x)\\sin(x) + C\\)"
                ],
                "answer": "B",
                "explanation": "Use \\\\(\\\\cos^2 x = (1+\\\\cos 2x)/2\\\\): integral = \\\\(x/2 + \\\\sin(2x)/4 + C\\\\)."
            },
            {
                "id": "diag_24",
                "topic": "Applications",
                "difficulty": "hard",
                "question": "Volume from rotating \\\\(y=\\\\sqrt{x}\\\\) around x-axis, \\\\(x=0\\\\) to \\\\(x=4\\\\):",
                "options": [
                "\\(4\\pi\\)",
                "\\(8\\pi\\)",
                "\\(16\\pi\\)",
                "\\(32\\pi\\)"
                ],
                "answer": "B",
                "explanation": "\\\\(V = \\\\pi\\\\int_0^4 x\\\\,dx = \\\\pi[x^2/2]_0^4 = 8\\\\pi\\\\)."
            },
            {
                "id": "diag_25",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "Find \\\\(\\\\frac{d}{dx}[\\\\cos(3x)]\\\\).",
                "options": [
                "\\(-\\sin(3x)\\)",
                "\\(-3\\sin(3x)\\)",
                "\\(3\\cos(3x)\\)",
                "\\(\\sin(3x)\\)"
                ],
                "answer": "B",
                "explanation": "Chain rule: \\\\(-\\\\sin(3x) \\\\cdot 3 = -3\\\\sin(3x)\\\\)."
            },
            {
                "id": "diag_26",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "\\\\(\\\\lim_{x \\\\to 2} (3x^2 - 4) = \\\\)?",
                "options": [
                "2",
                "4",
                "8",
                "12"
                ],
                "answer": "C",
                "explanation": "Direct substitution: \\\\(3(4) - 4 = 8\\\\)."
            },
            {
                "id": "diag_27",
                "topic": "Integrals",
                "difficulty": "easy",
                "question": "Evaluate \\\\(\\\\int_0^2 3\\\\, dx\\\\).",
                "options": [
                "3",
                "6",
                "9",
                "0"
                ],
                "answer": "B",
                "explanation": "\\\\(\\\\int_0^2 3\\\\,dx = 3x\\\\Big|_0^2 = 6\\\\)."
            },
            {
                "id": "diag_28",
                "topic": "Applications",
                "difficulty": "hard",
                "question": "A particle moves with velocity \\\\(v(t) = t^2 - 4\\\\). Total distance on \\\\([0,3]\\\\) is:",
                "options": [
                "3",
                "11/3",
                "17/3",
                "9"
                ],
                "answer": "C",
                "explanation": "\\\\(v=0\\\\) at \\\\(t=2\\\\). Distance = \\\\(\\\\int_0^2(4-t^2)dt + \\\\int_2^3(t^2-4)dt = 16/3 + 1/3 = 17/3\\\\)."
            },
            {
                "id": "diag_29",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Using quotient rule, \\\\(\\\\frac{d}{dx}\\\\left[\\\\frac{x^2}{\\\\cos x}\\\\right]\\\\) =",
                "options": [
                "\\(\\frac{2x\\cos x + x^2\\sin x}{\\cos^2 x}\\)",
                "\\(\\frac{2x}{-\\sin x}\\)",
                "\\(2x\\cos x\\)",
                "\\(\\frac{2x\\cos x - x^2\\sin x}{\\cos^2 x}\\)"
                ],
                "answer": "A",
                "explanation": "Quotient rule: numerator = \\\\(2x\\\\cos x - x^2(-\\\\sin x) = 2x\\\\cos x + x^2\\\\sin x\\\\)."
            },
            {
                "id": "diag_30",
                "topic": "Applications",
                "difficulty": "hard",
                "question": "Linearization of \\\\(f(x)=\\\\sqrt{x}\\\\) at \\\\(x=9\\\\) approximates \\\\(\\\\sqrt{9.1}\\\\) as:",
                "options": [
                "3.0150",
                "3.0167",
                "3.0200",
                "3.0100"
                ],
                "answer": "B",
                "explanation": "\\\\(L(x) = 3 + \\\\frac{1}{6}(x-9)\\\\). \\\\(L(9.1) = 3 + 0.1/6 \\\\approx 3.0167\\\\)."
            }
        ]
    },
    "ap-diag-calc-bc": {
        "id": "ap-diag-calc-bc",
        "title": "AP Calculus BC Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Parametric, Polar, Vector Functions, Integrals & Series",
        "timeLimitMinutes": 60,
        "testType": "Diagnostic",
        "subject": "AP Calculus BC",
        "questions": [
            {
                "id": "dbc_1",
                "topic": "Parametric Derivative",
                "difficulty": "easy",
                "question": "Given \\(x=t^2, y=t^3\\), find \\(\\frac{dy}{dx}\\) at \\(t=2\\).",
                "options": [
                    "2",
                    "3",
                    "4",
                    "6"
                ],
                "answer": "B",
                "explanation": "\\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3}{2}t\\). At \\(t=2\\), \\(\\frac{3}{2}(2) = 3\\)."
            },
            {
                "id": "dbc_2",
                "topic": "Second Derivative Parametric",
                "difficulty": "medium",
                "question": "For \\(x=t^2, y=t^3\\), what is \\(\\frac{d^2y}{dx^2}\\) at \\(t=2\\)?",
                "options": [
                    "1/4",
                    "3/8",
                    "3/4",
                    "1"
                ],
                "answer": "B",
                "explanation": "\\(\\frac{dy}{dx} = \\frac{3}{2}t\\). Then \\(\\frac{d^2y}{dx^2} = \\frac{d/dt(3t/2)}{dx/dt} = \\frac{3/2}{2t} = \\frac{3}{4t}\\). At \\(t=2\\), \\(\\frac{3}{4(2)} = \\frac{3}{8}\\)."
            },
            {
                "id": "dbc_3",
                "topic": "Parametric Horizontal Tangent",
                "difficulty": "medium",
                "question": "For \\(x=t^2-1, y=t^3-3t\\), a horizontal tangent occurs when:",
                "options": [
                    "\\(t=0\\) only",
                    "\\(t=\\pm 1\\)",
                    "\\(t=\\pm\\sqrt{3}\\)",
                    "\\(t=3\\)"
                ],
                "answer": "B",
                "explanation": "\\(\\frac{dy}{dt} = 3t^2 - 3 = 0 \\implies t = \\pm 1\\)."
            },
            {
                "id": "dbc_4",
                "topic": "Polar Coordinates",
                "difficulty": "easy",
                "question": "For \\(r=2\\), what is the Cartesian point when \\(\\theta=\\pi/2\\)?",
                "options": [
                    "(2, 0)",
                    "(0, 2)",
                    "(-2, 0)",
                    "(0, -2)"
                ],
                "answer": "B",
                "explanation": "\\(x = 2\\cos(\\pi/2) = 0\\), \\(y = 2\\sin(\\pi/2) = 2\\)."
            },
            {
                "id": "dbc_5",
                "topic": "Polar Area",
                "difficulty": "medium",
                "question": "The area enclosed by \\(r=2\\) is:",
                "options": [
                    "\\(2\\pi\\)",
                    "\\(4\\pi\\)",
                    "\\(8\\pi\\)",
                    "\\(\\pi\\)"
                ],
                "answer": "B",
                "explanation": "\\(A = \\frac{1}{2} \\int_0^{2\\pi} r^2 d\\theta = \\frac{1}{2}(4)(2\\pi) = 4\\pi\\)."
            },
            {
                "id": "dbc_6",
                "topic": "Polar Derivative",
                "difficulty": "hard",
                "question": "For \\(r=1+\\cos\\theta\\), \\(\\frac{dy}{dx}\\) is given by:",
                "options": [
                    "\\(\\frac{\\cos\\theta}{\\sin\\theta}\\)",
                    "\\(\\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}\\)",
                    "\\(\\frac{d\\theta}{dr}\\)",
                    "\\(r\\cos\\theta\\)"
                ],
                "answer": "B",
                "explanation": "In polar coordinates, \\(\\frac{dy}{dx} = \\frac{r'(\\theta)\\sin\\theta + r\\cos\\theta}{r'(\\theta)\\cos\\theta - r\\sin\\theta}\\)."
            },
            {
                "id": "dbc_7",
                "topic": "Series Convergence",
                "difficulty": "easy",
                "question": "Determine whether \\(\\sum_{n=1}^\\infty \\frac{1}{n^2}\\) converges.",
                "options": [
                    "Converges",
                    "Diverges",
                    "Oscillates",
                    "Cannot determine"
                ],
                "answer": "A",
                "explanation": "It is a p-series with \\(p=2 > 1\\), which converges."
            },
            {
                "id": "dbc_8",
                "topic": "Harmonic Series",
                "difficulty": "easy",
                "question": "The harmonic series \\(\\sum_{n=1}^\\infty \\frac{1}{n}\\):",
                "options": [
                    "Converges",
                    "Diverges",
                    "Equals 1",
                    "Equals 0"
                ],
                "answer": "B",
                "explanation": "The harmonic series is a p-series with \\(p=1\\), so it diverges."
            },
            {
                "id": "dbc_9",
                "topic": "Geometric Series",
                "difficulty": "medium",
                "question": "The series \\(\\sum_{n=0}^\\infty \\left(\\frac{1}{3}\\right)^n\\) has sum:",
                "options": [
                    "1",
                    "3/2",
                    "2",
                    "3"
                ],
                "answer": "B",
                "explanation": "\\(S = \\frac{a}{1-r} = \\frac{1}{1 - 1/3} = \\frac{3}{2}\\)."
            },
            {
                "id": "dbc_10",
                "topic": "Geometric Convergence",
                "difficulty": "easy",
                "question": "For what values of \\(x\\) does \\(\\sum_{n=0}^\\infty x^n\\) converge?",
                "options": [
                    "\\(x > 1\\)",
                    "\\(x < 1\\)",
                    "\\(|x| < 1\\)",
                    "\\(x > 0\\)"
                ],
                "answer": "C",
                "explanation": "A geometric series converges if and only if \\(|x| < 1\\)."
            },
            {
                "id": "dbc_11",
                "topic": "Ratio Test",
                "difficulty": "medium",
                "question": "For \\(\\sum_{n=1}^\\infty \\frac{2^n}{n!}\\), the Ratio Test shows:",
                "options": [
                    "Divergence",
                    "Convergence",
                    "Oscillation",
                    "Test is inconclusive"
                ],
                "answer": "B",
                "explanation": "\\(\\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n\\to\\infty} \\frac{2}{n+1} = 0 < 1\\), indicating convergence."
            },
            {
                "id": "dbc_12",
                "topic": "Alternating Series",
                "difficulty": "medium",
                "question": "The series \\(\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}\\):",
                "options": [
                    "Converges absolutely",
                    "Converges conditionally",
                    "Diverges",
                    "Equals 1"
                ],
                "answer": "B",
                "explanation": "Alternating Series Test gives convergence, but the corresponding harmonic series diverges, so convergence is conditional."
            },
            {
                "id": "dbc_13",
                "topic": "Absolute Convergence",
                "difficulty": "easy",
                "question": "The series \\(\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\):",
                "options": [
                    "Diverges",
                    "Converges conditionally",
                    "Converges absolutely",
                    "Oscillates"
                ],
                "answer": "C",
                "explanation": "The absolute series \\(\\sum \\frac{1}{n^2}\\) converges, so the original series converges absolutely."
            },
            {
                "id": "dbc_14",
                "topic": "Integral Test",
                "difficulty": "easy",
                "question": "The Integral Test can be applied to:",
                "options": [
                    "Any sequence",
                    "Positive, continuous, decreasing functions",
                    "Only alternating series",
                    "Only geometric series"
                ],
                "answer": "B",
                "explanation": "Terms must correspond to a function that is positive, continuous, and decreasing for \\(x \\ge 1\\)."
            },
            {
                "id": "dbc_15",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "The radius of convergence of \\(\\sum_{n=0}^\\infty \\frac{x^n}{3^n}\\) is:",
                "options": [
                    "1",
                    "2",
                    "3",
                    "9"
                ],
                "answer": "C",
                "explanation": "Using the Root/Ratio Test: \\(|x/3| < 1 \\implies |x| < 3\\), so \\(R = 3\\)."
            },
            {
                "id": "dbc_16",
                "topic": "Power Series Interval",
                "difficulty": "medium",
                "question": "For \\(\\sum_{n=1}^\\infty \\frac{x^n}{n}\\), the radius of convergence is:",
                "options": [
                    "0",
                    "1",
                    "2",
                    "\\(\\infty\\)"
                ],
                "answer": "B",
                "explanation": "\\(\\lim_{n\\to\\infty} \\frac{|x|^{n+1}/(n+1)}{|x|^n/n} = |x| < 1 \\implies R = 1\\)."
            },
            {
                "id": "dbc_17",
                "topic": "Taylor Polynomial",
                "difficulty": "easy",
                "question": "The second-degree Maclaurin polynomial for \\(e^x\\) is:",
                "options": [
                    "\\(1 + x\\)",
                    "\\(1 + x + \\frac{x^2}{2}\\)",
                    "\\(x + x^2\\)",
                    "\\(1 + x^2\\)"
                ],
                "answer": "B",
                "explanation": "\\(P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 = 1 + x + \\frac{x^2}{2}\\)."
            },
            {
                "id": "dbc_18",
                "topic": "Maclaurin Series",
                "difficulty": "medium",
                "question": "The Maclaurin series for \\(\\sin x\\) begins:",
                "options": [
                    "\\(1 + x + \\frac{x^2}{2}\\)",
                    "\\(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\\)",
                    "\\(x + x^2 + x^3\\)",
                    "\\(1 - \\frac{x^2}{2} + \\cdots\\)"
                ],
                "answer": "B",
                "explanation": "The Maclaurin series for \\(\\sin x\\) consists of odd powers with alternating signs."
            },
            {
                "id": "dbc_19",
                "topic": "Maclaurin Series for Cosine",
                "difficulty": "medium",
                "question": "The Maclaurin series for \\(\\cos x\\) is:",
                "options": [
                    "\\(x - \\frac{x^3}{6} + \\cdots\\)",
                    "\\(1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots\\)",
                    "\\(1 + x + \\frac{x^2}{2} + \\cdots\\)",
                    "\\(x + \\frac{x^3}{6} + \\cdots\\)"
                ],
                "answer": "B",
                "explanation": "The Maclaurin series for \\(\\cos x\\) consists of even powers with alternating signs."
            },
            {
                "id": "dbc_20",
                "topic": "Taylor Approximation",
                "difficulty": "medium",
                "question": "Using \\(1 + x + \\frac{x^2}{2}\\), approximate \\(e^{0.1}\\).",
                "options": [
                    "1.01",
                    "1.05",
                    "1.105",
                    "1.5"
                ],
                "answer": "C",
                "explanation": "\\(1 + 0.1 + \\frac{(0.1)^2}{2} = 1 + 0.1 + 0.005 = 1.105\\)."
            },
            {
                "id": "dbc_21",
                "topic": "Alternating Series Error",
                "difficulty": "medium",
                "question": "For an alternating series satisfying the conditions of the Alternating Series Test, the error after \\(n\\) terms is at most:",
                "options": [
                    "The first omitted term's absolute value",
                    "The last included term",
                    "Twice the first term",
                    "Always zero"
                ],
                "answer": "A",
                "explanation": "The error bound is given by \\(|R_n| \\le a_{n+1}\\), the absolute value of the first omitted term."
            },
            {
                "id": "dbc_22",
                "topic": "Taylor Error",
                "difficulty": "easy",
                "question": "The Lagrange error bound is used to:",
                "options": [
                    "Find exact derivatives",
                    "Estimate approximation error",
                    "Determine only convergence",
                    "Find critical points"
                ],
                "answer": "B",
                "explanation": "Lagrange error bound estimates the maximum possible error when approximating a function with a Taylor polynomial."
            },
            {
                "id": "dbc_23",
                "topic": "Improper Integral",
                "difficulty": "medium",
                "question": "Evaluate: \\(\\int_1^\\infty \\frac{1}{x^2} dx\\).",
                "options": [
                    "Diverges",
                    "0",
                    "1",
                    "\\(\\infty\\)"
                ],
                "answer": "C",
                "explanation": "\\(\\lim_{b \\to \\infty} \\left[ -\\frac{1}{x} \\right]_1^b = 0 - (-1) = 1\\)."
            },
            {
                "id": "dbc_24",
                "topic": "Improper Integral",
                "difficulty": "medium",
                "question": "Evaluate: \\(\\int_1^\\infty \\frac{1}{x} dx\\).",
                "options": [
                    "Converges to 1",
                    "Converges to \\(\\pi\\)",
                    "Diverges",
                    "Equals 0"
                ],
                "answer": "C",
                "explanation": "\\(\\lim_{b \\to \\infty} \\ln(b) = \\infty\\), so the integral diverges."
            },
            {
                "id": "dbc_25",
                "topic": "Logistic Differential Equation",
                "difficulty": "easy",
                "question": "For \\(\\frac{dP}{dt} = P(1 - P)\\), the equilibrium solutions are:",
                "options": [
                    "\\(P = 0\\) only",
                    "\\(P = 1\\) only",
                    "\\(P = 0, 1\\)",
                    "\\(P = -1, 1\\)"
                ],
                "answer": "C",
                "explanation": "Setting \\(\\frac{dP}{dt} = 0 \\implies P(1-P) = 0 \\implies P=0\\) or \\(P=1\\)."
            },
            {
                "id": "dbc_26",
                "topic": "Differential Equation",
                "difficulty": "easy",
                "question": "For \\(y' = y\\), the general solution is:",
                "options": [
                    "\\(y = x + C\\)",
                    "\\(y = C e^x\\)",
                    "\\(y = C x\\)",
                    "\\(y = e^{x+C}\\) only"
                ],
                "answer": "B",
                "explanation": "Separation of variables yields \\(\\ln|y| = x + C_1 \\implies y = C e^x\\)."
            },
            {
                "id": "dbc_27",
                "topic": "Slope Field",
                "difficulty": "easy",
                "question": "For \\(y' = x\\), the slope of the solution curve at \\((2, 5)\\) is:",
                "options": [
                    "2",
                    "5",
                    "7",
                    "10"
                ],
                "answer": "A",
                "explanation": "\\(y' = x\\), so at \\((x,y) = (2,5)\\), slope = 2."
            },
            {
                "id": "dbc_28",
                "topic": "Euler's Method",
                "difficulty": "medium",
                "question": "For \\(y' = x - y, y(0) = 1\\), step size 0.1, the first Euler approximation \\(y_1\\) is:",
                "options": [
                    "0.8",
                    "0.9",
                    "1.0",
                    "1.1"
                ],
                "answer": "B",
                "explanation": "\\(y_1 = y_0 + h f(x_0, y_0) = 1 + 0.1(0 - 1) = 0.9\\)."
            },
            {
                "id": "dbc_29",
                "topic": "Vector-Valued Function",
                "difficulty": "easy",
                "question": "If \\(\\mathbf{r}(t) = \\langle t^2, 3t \\rangle\\), then velocity \\(\\mathbf{v}(t)\\) is:",
                "options": [
                    "\\(\\langle t, 3 \\rangle\\)",
                    "\\(\\langle 2t, 3 \\rangle\\)",
                    "\\(\\langle t^2, 3 \\rangle\\)",
                    "\\(\\langle 2, 3t \\rangle\\)"
                ],
                "answer": "B",
                "explanation": "\\(\\mathbf{v}(t) = \\mathbf{r}'(t) = \\langle 2t, 3 \\rangle\\)."
            },
            {
                "id": "dbc_30",
                "topic": "Speed",
                "difficulty": "medium",
                "question": "For \\(\\mathbf{r}(t) = \\langle t, t^2 \\rangle\\), the speed at \\(t = 1\\) is:",
                "options": [
                    "1",
                    "2",
                    "\\(\\sqrt{5}\\)",
                    "3"
                ],
                "answer": "C",
                "explanation": "\\(\\mathbf{v}(1) = \\langle 1, 2 \\rangle\\), so speed = \\(|\\mathbf{v}| = \\sqrt{1^2 + 2^2} = \\sqrt{5}\\)."
            }
        ]
    },
    "ap-diag-csa": {
        "id": "ap-diag-csa",
        "title": "AP Computer Science A Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Java Syntax, Control Flow & OOP",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Computer Science A",
        "questions": [
            {
                "id": "dcsa_1",
                "topic": "Java Syntax",
                "difficulty": "easy",
                "question": "What is `7 / 2` in Java?",
                "options": [
                    "3.5",
                    "3",
                    "3.0",
                    "Error"
                ],
                "answer": "B",
                "explanation": "Integer division truncates decimal."
            },
            {
                "id": "dcsa_2",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "Which keyword is used to inherit a class in Java?",
                "options": [
                    "implements",
                    "extends",
                    "super",
                    "this"
                ],
                "answer": "B",
                "explanation": "`extends` keyword is used for class inheritance."
            },
            {
                "id": "csa_3",
                "topic": "Primitives",
                "difficulty": "easy",
                "question": "Which of the following is a primitive type in Java?",
                "options": [
                "String",
                "Integer",
                "int",
                "Array"
                ],
                "answer": "C",
                "explanation": "'int' is a primitive; String, Integer, and Array are reference types."
            },
            {
                "id": "csa_4",
                "topic": "Operators",
                "difficulty": "easy",
                "question": "What is the result of 7 % 3 in Java?",
                "options": [
                "2",
                "1",
                "3",
                "0"
                ],
                "answer": "B",
                "explanation": "7 divided by 3 is 2 remainder 1, so 7 % 3 = 1."
            },
            {
                "id": "csa_5",
                "topic": "Conditionals",
                "difficulty": "easy",
                "question": "Which keyword chain is used for multiple conditions in Java?",
                "options": [
                "elif",
                "else if",
                "elseif",
                "otherwise"
                ],
                "answer": "B",
                "explanation": "Java uses 'else if' (two separate words) for chained conditions."
            },
            {
                "id": "csa_6",
                "topic": "Loops",
                "difficulty": "easy",
                "question": "How many times does this loop execute? for(int i=0; i<5; i++)",
                "options": [
                "4",
                "5",
                "6",
                "0"
                ],
                "answer": "B",
                "explanation": "i goes 0,1,2,3,4 — 5 iterations total."
            },
            {
                "id": "csa_7",
                "topic": "Arrays",
                "difficulty": "easy",
                "question": "What is the index of the first element in a Java array?",
                "options": [
                "1",
                "0",
                "-1",
                "Depends on declaration"
                ],
                "answer": "B",
                "explanation": "Java arrays are 0-indexed; the first element is at index 0."
            },
            {
                "id": "csa_8",
                "topic": "Arrays",
                "difficulty": "medium",
                "question": "What does arr.length return for: int[] arr = new int[10]?",
                "options": [
                "9",
                "10",
                "11",
                "Error"
                ],
                "answer": "B",
                "explanation": "arr.length returns the total number of elements, which is 10."
            },
            {
                "id": "csa_9",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "Which keyword creates an object from a class in Java?",
                "options": [
                "class",
                "object",
                "new",
                "create"
                ],
                "answer": "C",
                "explanation": "The 'new' keyword allocates memory and creates an instance of a class."
            },
            {
                "id": "csa_10",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "What is encapsulation in OOP?",
                "options": [
                "Inheriting methods from a parent",
                "Hiding data using private fields and public methods",
                "Creating multiple methods with the same name",
                "A class with no constructor"
                ],
                "answer": "B",
                "explanation": "Encapsulation bundles data and restricts direct access using private fields."
            },
            {
                "id": "csa_11",
                "topic": "Inheritance",
                "difficulty": "medium",
                "question": "In Java, a subclass can extend:",
                "options": [
                "Multiple classes",
                "Only one superclass",
                "Any number of interfaces only",
                "No class"
                ],
                "answer": "B",
                "explanation": "Java does not support multiple class inheritance; a class can only extend one superclass."
            },
            {
                "id": "csa_12",
                "topic": "Recursion",
                "difficulty": "medium",
                "question": "What is the base case of the factorial function?",
                "options": [
                "n == 1",
                "n == 0 returns 1",
                "n < 0",
                "n == n-1"
                ],
                "answer": "B",
                "explanation": "factorial(0) = 1 is the standard base case to stop recursion."
            },
            {
                "id": "csa_13",
                "topic": "Recursion",
                "difficulty": "hard",
                "question": "What does f(4) return? int f(int n){ if(n<=1) return 1; return n*f(n-1); }",
                "options": [
                "4",
                "12",
                "24",
                "16"
                ],
                "answer": "C",
                "explanation": "f(4) = 4*3*2*1 = 24 (factorial of 4)."
            },
            {
                "id": "csa_14",
                "topic": "ArrayList",
                "difficulty": "medium",
                "question": "Which method removes an element from an ArrayList by index?",
                "options": [
                ".delete(i)",
                ".remove(i)",
                ".pop(i)",
                ".erase(i)"
                ],
                "answer": "B",
                "explanation": "ArrayList.remove(int index) removes the element at the given index."
            },
            {
                "id": "csa_15",
                "topic": "Strings",
                "difficulty": "easy",
                "question": "What does str.length() return for str = \"hello\"?",
                "options": [
                "4",
                "5",
                "6",
                "Error"
                ],
                "answer": "B",
                "explanation": "'hello' has 5 characters, so length() returns 5."
            },
            {
                "id": "csa_16",
                "topic": "Strings",
                "difficulty": "medium",
                "question": "What does str.substring(1, 3) return for str = \"abcde\"?",
                "options": [
                "ab",
                "bc",
                "abc",
                "bcd"
                ],
                "answer": "B",
                "explanation": "substring(1,3) extracts characters at indices 1 and 2, giving 'bc'."
            },
            {
                "id": "csa_17",
                "topic": "Static",
                "difficulty": "medium",
                "question": "A static method in Java:",
                "options": [
                "Requires an object to call",
                "Can access instance variables freely",
                "Belongs to the class, not instances",
                "Cannot have parameters"
                ],
                "answer": "C",
                "explanation": "Static methods belong to the class and can be called without creating an instance."
            },
            {
                "id": "csa_18",
                "topic": "Exception Handling",
                "difficulty": "medium",
                "question": "Which block always executes after try/catch in Java?",
                "options": [
                "catch",
                "throw",
                "finally",
                "else"
                ],
                "answer": "C",
                "explanation": "The 'finally' block always executes regardless of whether an exception was thrown."
            },
            {
                "id": "csa_19",
                "topic": "2D Arrays",
                "difficulty": "medium",
                "question": "For int[][] grid = new int[3][4], how many total elements are there?",
                "options": [
                "7",
                "12",
                "3",
                "4"
                ],
                "answer": "B",
                "explanation": "3 rows x 4 columns = 12 total elements."
            },
            {
                "id": "csa_20",
                "topic": "Interfaces",
                "difficulty": "medium",
                "question": "A Java interface:",
                "options": [
                "Can be instantiated directly",
                "Contains only method implementations",
                "Defines abstract methods that implementing classes must provide",
                "Extends multiple classes"
                ],
                "answer": "C",
                "explanation": "An interface defines a contract of method signatures that implementing classes must fulfill."
            },
            {
                "id": "csa_21",
                "topic": "Polymorphism",
                "difficulty": "hard",
                "question": "Which term describes a method behaving differently based on the calling object?",
                "options": [
                "Encapsulation",
                "Polymorphism",
                "Abstraction",
                "Compilation"
                ],
                "answer": "B",
                "explanation": "Polymorphism allows one interface to be used for different underlying data types or classes."
            },
            {
                "id": "csa_22",
                "topic": "Boolean",
                "difficulty": "easy",
                "question": "What is the value of: true && false || true?",
                "options": [
                "false",
                "true",
                "null",
                "Error"
                ],
                "answer": "B",
                "explanation": "&& has higher precedence: (true && false) = false; false || true = true."
            },
            {
                "id": "csa_23",
                "topic": "Type Casting",
                "difficulty": "medium",
                "question": "What is the result of (int)(7.9) in Java?",
                "options": [
                "8",
                "7",
                "7.9",
                "Error"
                ],
                "answer": "B",
                "explanation": "Casting to int truncates (does not round): result is 7."
            },
            {
                "id": "csa_24",
                "topic": "For-each",
                "difficulty": "easy",
                "question": "Which loop iterates over each element in array arr?",
                "options": [
                "for(int i : arr)",
                "for(i in arr)",
                "foreach(int i, arr)",
                "for(arr -> i)"
                ],
                "answer": "A",
                "explanation": "Java's enhanced for-loop syntax is 'for(type variable : array)'."
            },
            {
                "id": "csa_25",
                "topic": "Math class",
                "difficulty": "easy",
                "question": "Which Math method returns the larger of two values?",
                "options": [
                "Math.large()",
                "Math.max()",
                "Math.top()",
                "Math.high()"
                ],
                "answer": "B",
                "explanation": "Math.max(a, b) returns the greater of a and b."
            },
            {
                "id": "csa_26",
                "topic": "Overloading",
                "difficulty": "medium",
                "question": "Method overloading means:",
                "options": [
                "A subclass redefines a parent method",
                "Multiple methods share the same name with different parameters",
                "A method calls itself",
                "Hiding instance variables"
                ],
                "answer": "B",
                "explanation": "Overloading allows multiple methods with the same name but different parameter signatures."
            },
            {
                "id": "csa_27",
                "topic": "Constructors",
                "difficulty": "medium",
                "question": "What is a default constructor?",
                "options": [
                "A constructor that takes parameters",
                "A no-arg constructor provided by Java if none is defined",
                "A static method",
                "A private method"
                ],
                "answer": "B",
                "explanation": "Java provides a no-argument default constructor automatically if no constructor is explicitly defined."
            },
            {
                "id": "csa_28",
                "topic": "Sorting",
                "difficulty": "hard",
                "question": "Worst-case time complexity of Selection Sort is:",
                "options": [
                "O(n)",
                "O(n log n)",
                "O(n squared)",
                "O(log n)"
                ],
                "answer": "C",
                "explanation": "Selection Sort always performs O(n^2) comparisons regardless of input order."
            },
            {
                "id": "csa_29",
                "topic": "Binary Search",
                "difficulty": "hard",
                "question": "Binary search requires the array to be:",
                "options": [
                "Unsorted",
                "Sorted",
                "Filled with unique values",
                "Of even length"
                ],
                "answer": "B",
                "explanation": "Binary search only works correctly on a sorted array."
            },
            {
                "id": "csa_30",
                "topic": "OOP",
                "difficulty": "hard",
                "question": "The 'super' keyword in Java is used to:",
                "options": [
                "Call a child class method",
                "Access the parent class constructor or methods",
                "Declare a static field",
                "Create an interface"
                ],
                "answer": "B",
                "explanation": "'super' refers to the parent class and can be used to call its constructor or methods."
            }
        ]
    },
    "ap-diag-stats": {
        "id": "ap-diag-stats",
        "title": "AP Statistics Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Data Analysis & Probability",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Statistics",
        "questions": [
            {
                "id": "dstats_1",
                "topic": "Data",
                "difficulty": "easy",
                "question": "Which measure of center is resistant to extreme outliers?",
                "options": [
                    "Mean",
                    "Median",
                    "Standard Deviation",
                    "Range"
                ],
                "answer": "B",
                "explanation": "The median is resistant to extreme values."
            },
            {
                "id": "stat_2",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "The mean of {2, 4, 6, 8, 10} is:",
                "options": [
                "5",
                "6",
                "7",
                "8"
                ],
                "answer": "B",
                "explanation": "Sum = 30, n = 5, mean = 30/5 = 6."
            },
            {
                "id": "stat_3",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "The median of {3, 7, 5, 1, 9} is:",
                "options": [
                "3",
                "5",
                "7",
                "1"
                ],
                "answer": "B",
                "explanation": "Sorted: {1, 3, 5, 7, 9}. Middle value = 5."
            },
            {
                "id": "stat_4",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "Which measure of spread is most resistant to outliers?",
                "options": [
                "Range",
                "Standard deviation",
                "IQR",
                "Variance"
                ],
                "answer": "C",
                "explanation": "IQR uses the middle 50% of data and is not affected by extreme values."
            },
            {
                "id": "stat_5",
                "topic": "Probability",
                "difficulty": "easy",
                "question": "If P(A) = 0.4 and P(B) = 0.3 and A, B are independent, P(A and B) = ?",
                "options": [
                "0.7",
                "0.12",
                "0.1",
                "0.5"
                ],
                "answer": "B",
                "explanation": "For independent events: P(A and B) = P(A) * P(B) = 0.4 * 0.3 = 0.12."
            },
            {
                "id": "stat_6",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "P(A or B) = 0.7, P(A) = 0.4, P(B) = 0.5. What is P(A and B)?",
                "options": [
                "0.2",
                "0.3",
                "0.1",
                "0.9"
                ],
                "answer": "A",
                "explanation": "P(A or B) = P(A)+P(B)-P(A and B) => 0.7 = 0.9 - P(A and B) => P(A and B) = 0.2."
            },
            {
                "id": "stat_7",
                "topic": "Normal Distribution",
                "difficulty": "medium",
                "question": "Approximately what percentage of data falls within 1 standard deviation in a normal distribution?",
                "options": [
                "68%",
                "95%",
                "99.7%",
                "50%"
                ],
                "answer": "A",
                "explanation": "The empirical rule: ~68% of data falls within +-1 sigma of the mean."
            },
            {
                "id": "stat_8",
                "topic": "Normal Distribution",
                "difficulty": "medium",
                "question": "z-score for a data point of 80, mean=70, SD=5?",
                "options": [
                "1",
                "2",
                "10",
                "-2"
                ],
                "answer": "B",
                "explanation": "z = (80 - 70)/5 = 2."
            },
            {
                "id": "stat_9",
                "topic": "Sampling",
                "difficulty": "medium",
                "question": "A simple random sample (SRS) ensures:",
                "options": [
                "Every individual has an equal chance of selection",
                "The sample is perfectly representative",
                "No bias exists",
                "Stratification by group"
                ],
                "answer": "A",
                "explanation": "In an SRS, every individual has an equal probability of being selected."
            },
            {
                "id": "stat_10",
                "topic": "Hypothesis Testing",
                "difficulty": "medium",
                "question": "The null hypothesis (H0) typically states:",
                "options": [
                "There is a significant effect",
                "There is no effect or no difference",
                "The alternative is true",
                "p < 0.05"
                ],
                "answer": "B",
                "explanation": "H0 is the claim of no effect or no difference that we test against."
            },
            {
                "id": "stat_11",
                "topic": "Hypothesis Testing",
                "difficulty": "medium",
                "question": "A p-value of 0.03 with alpha = 0.05 means:",
                "options": [
                "Fail to reject H0",
                "Reject H0",
                "Accept H1 definitively",
                "Repeat the test"
                ],
                "answer": "B",
                "explanation": "Since p-value (0.03) < alpha (0.05), we reject the null hypothesis."
            },
            {
                "id": "stat_12",
                "topic": "Confidence Intervals",
                "difficulty": "medium",
                "question": "A 95% confidence interval means:",
                "options": [
                "95% of data falls in the interval",
                "The true parameter is definitely in this interval",
                "If repeated many times, 95% of such intervals contain the true parameter",
                "The sample mean equals the population mean"
                ],
                "answer": "C",
                "explanation": "Confidence intervals are interpreted in terms of repeated sampling procedures."
            },
            {
                "id": "stat_13",
                "topic": "Regression",
                "difficulty": "medium",
                "question": "In y-hat = 3 + 2x, what does the slope 2 represent?",
                "options": [
                "The y-intercept",
                "For each 1-unit increase in x, y increases by 2 on average",
                "The correlation coefficient",
                "The predicted value when x = 0"
                ],
                "answer": "B",
                "explanation": "The slope represents the average change in the response variable for each 1-unit increase in the explanatory variable."
            },
            {
                "id": "stat_14",
                "topic": "Regression",
                "difficulty": "medium",
                "question": "Correlation coefficient r = -0.85 indicates:",
                "options": [
                "Weak positive relationship",
                "Strong positive relationship",
                "Strong negative relationship",
                "No relationship"
                ],
                "answer": "C",
                "explanation": "r close to -1 indicates a strong negative linear relationship between variables."
            },
            {
                "id": "stat_15",
                "topic": "Categorical Data",
                "difficulty": "easy",
                "question": "A chi-square test is used to analyze:",
                "options": [
                "Means of two groups",
                "Association between categorical variables",
                "Correlation of quantitative variables",
                "Differences in medians"
                ],
                "answer": "B",
                "explanation": "Chi-square tests analyze whether a significant association exists between categorical variables."
            },
            {
                "id": "stat_16",
                "topic": "Binomial",
                "difficulty": "medium",
                "question": "For a binomial distribution with n=10, p=0.5, what is the mean?",
                "options": [
                "5",
                "2.5",
                "10",
                "0.5"
                ],
                "answer": "A",
                "explanation": "Mean of binomial distribution = n*p = 10 * 0.5 = 5."
            },
            {
                "id": "stat_17",
                "topic": "Binomial",
                "difficulty": "medium",
                "question": "Which condition is NOT required for a binomial setting?",
                "options": [
                "Fixed number of trials",
                "Independent trials",
                "Same probability of success each trial",
                "Continuous outcomes"
                ],
                "answer": "D",
                "explanation": "Binomial requires discrete binary outcomes (success/failure), not continuous outcomes."
            },
            {
                "id": "stat_18",
                "topic": "Sampling Distributions",
                "difficulty": "hard",
                "question": "As sample size increases, the standard error of the mean:",
                "options": [
                "Increases",
                "Decreases",
                "Stays the same",
                "Doubles"
                ],
                "answer": "B",
                "explanation": "Standard error = sigma/sqrt(n). As n increases, standard error decreases."
            },
            {
                "id": "stat_19",
                "topic": "Two-sample Tests",
                "difficulty": "hard",
                "question": "A two-sample t-test compares:",
                "options": [
                "A sample mean to a known population mean",
                "Means of two independent groups",
                "A single proportion",
                "Normality of a distribution"
                ],
                "answer": "B",
                "explanation": "Two-sample t-test compares means from two separate, independent groups."
            },
            {
                "id": "stat_20",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "The complement of event A is:",
                "options": [
                "A and B",
                "Not A",
                "A or B",
                "A given B"
                ],
                "answer": "B",
                "explanation": "The complement of A is the event that A does NOT occur: P(A-complement) = 1 - P(A)."
            },
            {
                "id": "stat_21",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "Which plot best shows shape, center, and spread of a distribution?",
                "options": [
                "Bar chart",
                "Pie chart",
                "Boxplot",
                "Scatter plot"
                ],
                "answer": "C",
                "explanation": "A boxplot displays the five-number summary revealing shape and spread."
            },
            {
                "id": "stat_22",
                "topic": "Experimental Design",
                "difficulty": "medium",
                "question": "In a completely randomized experiment, subjects are assigned to groups:",
                "options": [
                "Based on their scores",
                "By stratification",
                "Randomly",
                "By researcher's choice"
                ],
                "answer": "C",
                "explanation": "Random assignment is the defining feature of a completely randomized experiment."
            },
            {
                "id": "stat_23",
                "topic": "Experimental Design",
                "difficulty": "medium",
                "question": "The purpose of a control group is:",
                "options": [
                "To receive the treatment",
                "To provide a baseline for comparison",
                "To maximize sample size",
                "To eliminate all variability"
                ],
                "answer": "B",
                "explanation": "A control group receives no treatment to serve as a baseline for comparison."
            },
            {
                "id": "stat_24",
                "topic": "Inference for Proportions",
                "difficulty": "hard",
                "question": "A one-proportion z-test is used when:",
                "options": [
                "Comparing two population means",
                "Testing whether a population proportion equals a specific value",
                "Testing independence of categorical variables",
                "Comparing two variances"
                ],
                "answer": "B",
                "explanation": "A one-proportion z-test tests whether a sample provides evidence that a population proportion differs from a claimed value."
            },
            {
                "id": "stat_25",
                "topic": "Normal Distribution",
                "difficulty": "hard",
                "question": "If X ~ N(100, 225), what is P(X > 130)?",
                "options": [
                "~0.023",
                "~0.159",
                "~0.5",
                "~0.977"
                ],
                "answer": "A",
                "explanation": "z = (130-100)/15 = 2. P(Z > 2) is approximately 0.023."
            },
            {
                "id": "stat_26",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "Two events are mutually exclusive if:",
                "options": [
                "They are independent",
                "They cannot occur simultaneously",
                "Their probabilities sum to 1",
                "One causes the other"
                ],
                "answer": "B",
                "explanation": "Mutually exclusive events cannot happen at the same time: P(A and B) = 0."
            },
            {
                "id": "stat_27",
                "topic": "Regression",
                "difficulty": "hard",
                "question": "R-squared = 0.81 means:",
                "options": [
                "The correlation is 0.81",
                "81% of variability in y is explained by x",
                "r = 0.81 squared",
                "The model predicts 81 data points correctly"
                ],
                "answer": "B",
                "explanation": "R-squared represents the proportion of variation in the response variable explained by the regression model."
            },
            {
                "id": "stat_28",
                "topic": "Sampling",
                "difficulty": "medium",
                "question": "Stratified random sampling:",
                "options": [
                "Uses random clusters",
                "Divides population into homogeneous groups then samples from each",
                "Uses self-selected volunteers",
                "Uses consecutive subjects"
                ],
                "answer": "B",
                "explanation": "Stratified sampling divides the population into subgroups (strata) and randomly samples from each stratum."
            },
            {
                "id": "stat_29",
                "topic": "Descriptive Statistics",
                "difficulty": "medium",
                "question": "Which statistic is most affected by extreme outliers?",
                "options": [
                "Median",
                "IQR",
                "Mean",
                "Mode"
                ],
                "answer": "C",
                "explanation": "The mean uses all data values in its calculation and is heavily influenced by extreme values."
            },
            {
                "id": "stat_30",
                "topic": "Type I Error",
                "difficulty": "hard",
                "question": "A Type I error occurs when you:",
                "options": [
                "Fail to reject a false H0",
                "Reject a true H0",
                "Accept H1 with certainty",
                "Set alpha too low"
                ],
                "answer": "B",
                "explanation": "Type I error: rejecting the null hypothesis when it is actually true (false positive)."
            }
        ]
    },
    "ap-diag-phys1": {
        "id": "ap-diag-phys1",
        "title": "AP Physics 1 Diagnostic Assessment",
        "subtitle": "Comprehensive baseline evaluation across Kinematics, Dynamics, Energy, Momentum, Rotation & Fluids",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Physics 1",
        "topic": "Comprehensive AP Physics 1",
        "questions": [
            {
                "id": "dphys1_1",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A mass is suspended from the ceiling by one rope at an angle as indicated. The mass is held in place by a second, horizontal rope. Without knowing the exact angle from the ceiling, except that it is greater than 45 degrees, which statement best represents the possible value for tension in the horizontal line?</p>",
                "options": [
                    "<i>T</i> &gt; <i>mg</i>",
                    "<i>T</i> = <i>mg</i>",
                    "<i>T</i> &lt; <i>mg</i>",
                    "Cannot be determined without knowing the angle"
                ],
                "answer": "C",
                "explanation": "<i>T</i> &lt; <i>mg.</i> Since the mass is stationary, we conclude that the net force is zero. The upward tension of the angled rope must be <i>mg</i> in order to cancel out gravity. The free-body diagram on the hanging mass is:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w35\" role=\"presentation\" src=\"images/f023-01.jpg\"/></p>\r\n<p class=\"exp\">Since the angle θ is greater than 45 degrees, the vertical component of tension <i>T</i><sub>2</sub> must be bigger than the horizontal component. (To see this quickly, draw an extreme case, such as 85 degrees.) Therefore, the horizontal component of tension must be less than <i>mg</i>. The horizontal rope <i>T</i> must cancel this horizontal component of <i>T</i><sub>2</sub>.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w23\" role=\"presentation\" src=\"images/f023-02.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "dphys1_2",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Pushing on a mass of 15 kg with a sideways force of 120 N is not enough to get the mass to start sliding across the floor. Which of the following best describes the coefficient of static friction between the floor and the mass?</p>",
                "options": [
                    "<i>μ</i> = 0.8",
                    "<i>μ</i> &gt; 0.8",
                    "<i>μ</i> &lt; 0.8",
                    "<i>μ</i> = 1.25"
                ],
                "answer": "B",
                "explanation": "<i>μ</i> &gt; 0.8. The normal force between the mass and the floor is 150 N. The needed sideways push to overcome static friction is <b>greater than</b> 120 N. Dividing these two forces would give us:</p>\r\n<p class=\"center1\">\\(\\mu_s = 120/150 = 0.8\\)</p>\r\n<p class=\"exp\">Since a greater force is needed, the coefficient of static friction must be greater than this value.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_3",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "While standing on an elevator and experiencing a downward acceleration of 4.9 m/s<sup>2</sup>, what is the force between the floor and your feet? The variable <i>m</i> is your mass.</p>",
                "options": [
                    "<i>mg</i>",
                    "0.5<i>mg</i>",
                    "1.5<i>mg</i>",
                    "4.9<i>mg</i>"
                ],
                "answer": "B",
                "explanation": "0.5<i>mg</i>. The free-body diagram consists of only two forces.</p>\r\n\\[ N - mg = ma \\]\r\n<p class=\"exp\">Newton’s second law gives us + <i>N</i> − <i>mg</i> = <i>ma</i>. Let <i>a</i> = −0.5<i>g</i>, which is half the value of <i>g</i> and downward:</p>\r\n\\[ N - mg = m(-0.5g) \\implies N = 0.5mg \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_4",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "After throwing a ball at an upward angle, the reason the ball continues to go horizontally while falling due to gravity is that</p>",
                "options": [
                    "the ball’s inertia keeps it going",
                    "the force of the throw keeps it going",
                    "the energy from the gravitational potential keeps replenishing the lost energy",
                    "air pressure keeps the ball from falling too quickly"
                ],
                "answer": "A",
                "explanation": "The ball’s inertia keeps it going. Newton’s first law says that a body’s inertia maintains its current motion once in motion. After the force of the throw, the only force on the ball is the vertical force of gravity. This causes the ball to accelerate in the vertical direction while the ball’s sideways velocity is maintained due to its inertia.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_5",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Consider the situation in which your hand is pushing a book across a rough desktop with lots of friction. Of the many forces involved, consider only these two individual forces: the force on your hand from the book and the force the book is experiencing from your hand. While the book is accelerating from rest to its final velocity, which statement best compares the force experienced by your hand compared with that experienced by the book?</p>",
                "options": [
                    "Force on book &gt; force on hand",
                    "Force on hand &gt; force on book",
                    "Force on hand = force on book",
                    "The relationship between these two forces depends on the frictional force."
                ],
                "answer": "C",
                "explanation": "Force on hand = force on book. Newton’s third law of action-reaction states that the force pair of interaction between two objects is always equal and opposite. The acceleration of either object has no role in the third law. The acceleration comes about from the net force on a single object.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_6",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A puck comes to a stop on a level floor in 20 meters after an initial speed of 10 m/s. What is the coefficient of kinetic friction between the puck and the floor?</p>",
                "options": [
                    "The mass is required to calculate this answer.",
                    "0.25",
                    "0.5",
                    "0.025"
                ],
                "answer": "B",
                "explanation": "0.25. To find force, we must first find acceleration:</p>\r\n\\[ a = \\frac{v_f - v_i}{t} = \\frac{0 - 20}{8} = -2.5\\text{ m/s}^2 \\]\r\n<p class=\"exp\">The net force horizontally is the friction. There are no other horizontal forces:</p>\r\n\\[ f_k = \\mu_k N \\]\r\n<p class=\"exp\">Newton’s second law gives us:</p>\r\n\\[ \\Sigma F_x = -f_k = ma \\]\r\n<p class=\"exp\">Our model for friction gives us:</p>\r\n\\[ -\\mu_k N = ma \\]\r\n<p class=\"exp\">This value is negative since it is to the left. Since the vertical forces cancel out, <i>N</i> = <i>mg.</i> Substituting for friction from above and <i>mg</i> for <i>N</i>:</p>\r\n\\[ -\\mu_k mg = ma \\]\r\n<p class=\"exp\">Note that mass cancels:</p>\r\n\\[ \\mu_k = \\frac{|a|}{g} = \\frac{2.5}{10} = 0.25 \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_7",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A rock is dropped from an extremely high cliff and experiences free-fall conditions. Which of the following statements is NOT true about the rock’s velocity, acceleration, or displacement between the 3rd and 4th seconds of falling?</p>",
                "options": [
                    "The rock will fall an additional 4.9 meters.",
                    "The rock will speed up by 9.8 m/s.",
                    "The rock’s acceleration will remain 9.8 m/s<sup>2</sup>.",
                    "The rock’s displacement, velocity, and acceleration vectors are all directed downward."
                ],
                "answer": "A",
                "explanation": "The rock will fall an additional 4.9 meters is NOT true. An object in free fall will accelerate by a constant 9.8 m/s<sup>2</sup>. Since the rock is already moving downward, this leads to an increase in speed of 9.8 m/s in that 1-second interval. However, the rock will fall much farther than 4.9 m as it is already moving close to 30 m/s downward by the start of the 3rd second. It will fall an additional 35 meters in that 4th second. The rock does indeed fall 4.9 meters in the 1st second of the drop but falls an increasingly greater distance each second thereafter.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_8",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "When using the kinematics equation <i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub><i>x</i>0</sub> <i>t</i> + ½ <i>a</i><sub><i>x</i></sub> <i>t</i><sup>2</sup>, which of the following is always assumed to be true?</p>",
                "options": [
                    "<i>a x</i> = zero",
                    "<i>x</i> &gt; <i>x</i><sub>0</sub>",
                    "<i>V</i><sub><i>x</i>0</sub> is positive.",
                    "<i>a</i><sub><i>x</i></sub> is constant."
                ],
                "answer": "D",
                "explanation": "<i>a</i><sub><i>x</i></sub> is constant. All the equations of motion are predicated on the assumption of constant acceleration. Any permutation of signs or values will work in any of the equations of motion. If the acceleration is not constant, one must use graphical methods or approximate the acceleration as constant over a narrow interval of time.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_9",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Consider a projectile launched at 30 degrees above a flat surface. The projectile experiences no air resistance and lands at the same height from which it was launched. Compare the initial and final conditions of the following vector components:</p>\r\n<p class=\"center1\">\\(V_x \\quad V_y \\quad a_x \\quad a_y\\)</p>",
                "options": [
                    "They are all the same at both instances.",
                    "They are all different from their initial values.",
                    "<i>V</i><sub><i>x</i></sub> and <i>V</i><sub><i>y</i></sub> have changed, but <i>a</i><sub><i>x</i></sub> <i>and a</i><sub><i>y</i></sub> are constant.",
                    "They are all the same except for <i>V</i><sub><i>y</i></sub> <i>.</i>"
                ],
                "answer": "D",
                "explanation": "They are all the same except for <i>V</i><sub><i>y</i></sub>. Projectile motion involves a constant vertical acceleration of −<i>g</i> and no horizontal acceleration at all. Therefore, <i>a</i><sub><i>x</i></sub> and <i>a</i><sub><i>y</i></sub> are both constant throughout the flight. Since <i>a</i><sub><i>x</i></sub> is zero, there is no change in <i>V</i><sub><i>x</i></sub><i>.</i> So <i>V</i><sub><i>x</i></sub> is also constant. <i>V</i><sub><i>y</i></sub><i>,</i> however, is always changing. For a symmetric problem such as this one, the projectile lands with the same vertical speed as it had initially but in the opposite direction so that <i>V</i><sub><i>yf</i></sub> = − <i>V</i><sub><i>yi</i></sub>.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_10",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A physics teacher is swirling a bucket around in a vertical circle. If the bucket slips out of his hand when it is directly overhead, the bucket will</p>",
                "options": [
                    "fly upward initially",
                    "drop straight down",
                    "fly out horizontally initially",
                    "fly out up and at an angle initially"
                ],
                "answer": "C",
                "explanation": "The bucket will fly out horizontally initially. Objects executing circular motion have velocity vectors tangent to their motion while experiencing an inward acceleration. If the inward force is released, Newton’s first law dictates that the object follow its velocity vector. Note that gravity will cause the object to fall after it is released, but the initial motion is horizontal.</p>\r\n\\[ y = \\frac{1}{2}gt^2, \\quad x = v_x t \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_11",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If the Moon was twice as far from the center of Earth as it is currently, how would its orbital period change?</p>",
                "options": [
                    "The Moon’s orbital period would double.",
                    "The Moon’s orbital period would increase by a factor of 4.",
                    "The Moon’s orbital period would increase by a factor of 2 \\sqrt{2}.",
                    "The Moon’s orbital period would decrease by a factor of 2."
                ],
                "answer": "C",
                "explanation": "The Moon’s orbital period would increase by a factor of 2 \\sqrt{2}. Kepler’s third law of orbital bodies states that their orbital periods squared are proportional to their orbital radius cubed:</p>\r\n\\[ T^2 \\propto R^3 \\implies \\left(\\frac{T_{\\text{new}}}{T_{\\text{old}}}\\right)^2 = \\left(\\frac{R_{\\text{new}}}{R_{\\text{old}}}\\right)^3 \\]\r\n<p class=\"exp\">Substituting <i>R</i><sub>new</sub> = 2<i>R</i><sub>old</sub>:</p>\r\n\\[ \\left(\\frac{T_{\\text{new}}}{T_{\\text{old}}}\\right)^2 = 2^3 = 8 \\]\r\n<p class=\"exp\">Cancel <i>R</i> and solve for <i>T</i><sub>new</sub>:</p>\r\n\\[ T_{\\text{new}} = \\sqrt{8}\\,T_{\\text{old}} = 2\\sqrt{2}\\,T_{\\text{old}} \\]\r\n<p class=\"exp\">Note that you can also obtain this result by examining the equation for orbital speed from Newton (<i>v</i> = (<i>Gm</i>/<i>r</i>)<sup>½</sup>). This shows that the orbital speed of the Moon must decrease by the square root of 2. Coupling this with the knowledge that the new orbit is now twice as large, it will take 2(2<sup>½</sup>) or 2 \\sqrt{2} times as long to orbit once around Earth as it used to.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_12",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If you went to another planet, which of the following would be true?</p>",
                "options": [
                    "Your mass would be the same, but your weight would change.",
                    "Your mass would change, but your weight would be the same.",
                    "Your mass would be the same, and your weight would be the same.",
                    "Your mass would change, and your weight would change."
                ],
                "answer": "A",
                "explanation": "Your mass would be the same, but your weight would change. Mass is a property of an object and measures the object’s inertia regardless of location. Weight is a force due to gravity and depends both on the object’s mass and on the planetary gravity the object is currently experiencing.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_13",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "You lift a heavy suitcase twice. Each time you lift it to the same height, but the second time you do it in half the time. Compare the work done to and power delivered to the suitcase.</p>",
                "options": [
                    "Same work, same power",
                    "Twice the work, twice the power",
                    "Twice the work, same power",
                    "Same work, twice the power"
                ],
                "answer": "D",
                "explanation": "Same work, twice the power.</p>\r\n<p class=\"center1\">Work = force × distance</p>\r\n<p class=\"exp\">For lifting operations, the force is assumed to be equal to the weight of the object for most of the lift. (Briefly, at the beginning of the lift, the lifting force must be greater than the weight in order to get the object moving. This brief force must be different in the second case in order to get the suitcase moving faster. However, this initial force is generally ignored in these calculations as it does not happen over an appreciable distance, just as the decrease in lifting force at the end of the lift is likewise ignored.) The same force over the same distance yields the same work. If the details of the forces contributing to the work are troublesome, you may prefer to think about the energy gained by the suitcase (<i>W</i> = Δ<i>E</i>). Since the suitcase has gained the same amount of energy in both cases by being lifted, the work done must likewise be the same:</p>\r\n<p class=\"center1\">Power = work/time</p>\r\n<p class=\"exp\">If the same work is done in half the time, twice the power must be supplied.</p></li>\r\n<li>"
            },
            {
                "id": "dphys1_14",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A constant horizontal force of 12 N is applied for 5 meters to move an initially stationary mass of 5 kg. The friction between the floor and the mass does a total of −40 joules of work to the mass. The final speed (in m/s) of the object is</p>",
                "options": [
                    "2(6)<sup>½</sup>",
                    "2(2)<sup>½</sup>",
                    "2(10)<sup>½</sup>",
                    "4"
                ],
                "answer": "B",
                "explanation": "2(2)<sup>½</sup> m/s. From the work-energy theorem:</p>\r\n\\[ W_{\\text{net}} = \\Delta KE = F \\cdot d = (10\\text{ N})(2\\text{ m}) = 20\\text{ J} \\]\r\n<p class=\"exp\">So the kinetic energy of the mass has gone up by 20 J. Initially, it had no <i>KE</i> since it was stationary. Therefore:</p>\r\n\\[ KE = \\frac{1}{2}mv^2 \\implies 20 = \\frac{1}{2}(5)v^2 \\implies v = \\sqrt{8} = 2\\sqrt{2}\\text{ m/s} \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_15",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A skier begins a downhill run at a height of 9 meters and a speed of 2 m/s. If you ignore friction, what will be her speed when she is 3 meters from the bottom of the slope?</p>",
                "options": [
                    "6.0 m/s",
                    "12.8 m/s",
                    "11.1 m/s",
                    "7.7 m/s"
                ],
                "answer": "C",
                "explanation": "11.1 m/s. Mechanical energy is conserved since there are no nonconservative forces involved:</p>\r\n\\[ mgh_i + \\frac{1}{2}mv_i^2 = mgh_f + \\frac{1}{2}mv_f^2 \\]\r\n<p class=\"exp\">Canceling mass in every term and solving for <i>v<sub>f</sub></i> yields:</p>\r\n\\[ v_f = \\sqrt{v_i^2 + 2g(h_i - h_f)} \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_16",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A rubber ball (<i>m</i> = 0.250 kg) strikes a wall horizontally at 3.50 m/s and rebounds elastically. What is the magnitude of impulse delivered to the wall in N ⋅ s?</p>",
                "options": [
                    "0.875",
                    "1.75",
                    "2.50",
                    "8.75"
                ],
                "answer": "B",
                "explanation": "1.75</p>\r\n\\[ \\Delta p = m(v_f - v_i) = (0.05\\text{ kg})(-20 - 15) = -1.75\\text{ kg}\\cdot\\text{m/s} \\]\r\n<p class=\"exp\">Since the collision is elastic, no kinetic energy is lost. Assuming the wall remains stationary, the rubber ball must rebound with the same speed but in the opposite direction:</p>\r\n\\[ v_f = -v_i \\]\r\n<p class=\"exp\">Substituting for <i>v</i><sub><i>f</i></sub> above:</p>\r\n\\[ J = \\Delta p = -1.75\\text{ N}\\cdot\\text{s} \\implies |J| = 1.75\\text{ N}\\cdot\\text{s} \\]\r\n<p class=\"exp\">Here the negative sign indicates that the impulse delivered to the ball is in the opposite direction from the ball’s initial velocity. Note the ball and the wall receive equal and opposite impulses (from Newton’s third law) and the problem asks for magnitude (absolute value).</p>\r\n<p class=\"expt\">Since <i>F</i>Δ<i>t</i> is also an impulse, units of N ⋅ s must be the same as kg ⋅ m/s and is quickly shown:</p>\r\n\\[ 1\\text{ N}\\cdot\\text{s} = 1(\\text{kg}\\cdot\\text{m/s}^2)\\cdot\\text{s} = 1\\text{ kg}\\cdot\\text{m/s} \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_17",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A running back (<i>m</i> = 85 kg) running at 1.5 m/s is tackled from the side by another player (<i>m</i> = 75 kg) running perpendicularly to the running back’s original heading at 1.75 m/s. What is the resulting speed of the two entangled players just after the tackle?</p>",
                "options": [
                    "2.2 m/s",
                    "0.25 m/s",
                    "1.6 m/s",
                    "1.1 m/s"
                ],
                "answer": "D",
                "explanation": "1.1 m/s. Total momentum must be conserved through the collision. So we need to find only the magnitude of the initial momentum of the system. Each player is originally running perpendicularly to the other. Thus, their individual momentums are different components. Imagine one as an <i>x</i>-component and the other as a <i>y</i>-component. Therefore, the resulting magnitude is found using the Pythagorean theorem. Dividing by total mass yields the speed of the combined players after impact:</p>\r\n\\[ v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\frac{(80)(6) + (100)(-4)}{80 + 100} = \\frac{80}{180} = 0.44\\text{ m/s} \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_18",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Which of the following ranks the torques applied by the three equal forces <i>A, B,</i> and <i>C</i> to the long thin rod about its fixed axis as indicated above?</p>",
                "options": [
                    "τ <sub><i>C</i></sub> &gt; τ <sub><i>B</i></sub> &gt; τ <sub><i>A</i></sub>",
                    "τ <sub><i>A</i></sub> = τ <sub><i>B</i></sub> &gt; τ <sub><i>C</i></sub>",
                    "τ <sub><i>B</i></sub> = τ <sub><i>C</i></sub> &gt; τ <sub><i>A</i></sub>",
                    "τ <sub><i>B</i></sub> &gt; τ <sub><i>A</i></sub> &gt; τ <sub><i>C</i></sub>"
                ],
                "answer": "D",
                "explanation": "<i>τ</i><sub><i>B</i></sub> &gt; <i>τ</i><sub><i>A</i></sub> &gt; <i>τ</i> <sub><i>C</i></sub></p>\r\n<p class=\"center1\">Torque = (force) (distance from axis of rotation) sin θ</p>\r\n<p class=\"exp\">Force <i>C</i> is applied along the lever arm. So force <i>C</i> has an angle of 180°, resulting in no torque.</p>\r\n\\[ \\tau_C = r F \\sin(180^\\circ) = 0 \\]\r\n<p class=\"exp\">Force <i>A</i> has a much shorter lever arm than force <i>B</i>. Therefore, the torque supplied by <i>A</i> is much less than the torque supplied by <i>B</i>.</p>\r\n\\[ \\tau_A = r_A F_A \\sin(90^\\circ) < \\tau_B = r_B F_B \\sin(90^\\circ) \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_19",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A large spherical cloud of dust in deep space that is spinning slowly collapses under its own gravitational force into a spherical cloud 10 times smaller in diameter. How does its rotational speed change?</p>",
                "options": [
                    "The rotational speed does not change.",
                    "The rotational speed increases by a factor of 10.",
                    "The rotational speed decreases by a factor of 10.",
                    "The rotational speed increases by a factor of 100."
                ],
                "answer": "D",
                "explanation": "The rotational speed increases by a factor of 100. The rotational inertia (<i>I</i>) for a sphere is proportional to <i>R</i><sup>2</sup>. Because the shape of the cloud is not changing, we can determine that the rotational inertia has decreased by a factor of 10<sup>2</sup>. Since angular momentum is conserved:</p>\r\n\\[ L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2 \\]\r\n<p class=\"exp\">The new angular velocity (<i>ω</i><sub>2</sub>) must be 100 times bigger:</p>\r\n\\[ \\omega_2 = \\frac{I_1}{I_2}\\omega_1 = 100\\,\\omega_1 \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_20",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Two cars approach an intersection at right angles, as pictured above. What is their relative speed to each other?</p>",
                "options": [
                    "10 mph",
                    "45 mph",
                    "57 mph",
                    "80 mph"
                ],
                "answer": "C",
                "explanation": "57 mph. Relative velocity is the difference in the velocity vectors. When the vectors are subtracted, the resultant is the hypotenuse of a right triangle:</p>\r\n\\[ |\\Delta\\vec{v}| = \\sqrt{v_x^2 + v_y^2} = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ m/s} \\approx 14.1\\text{ m/s} \\]</li>\r\n<li>"
            },
            {
                "id": "dphys1_21",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A container of water (pictured below) has two holes in its side allowing two streams of water to emerge as shown. Initially, the lower hole is twice as deep as the higher hole. Which statement best compares the initial velocities of these two streams of water?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w34\" role=\"presentation\" src=\"images/f020-02.jpg\"/></p>",
                "options": [
                    "They emerge at the same speed.",
                    "The lower stream emerges 2½ times as fast as the upper stream.",
                    "The lower stream emerges 2 times as fast as the upper stream.",
                    "The lower stream emerges 4 times as fast as the upper stream."
                ],
                "answer": "B",
                "explanation": "According to Bernoulli’s equation, the square of the velocity of fluid relates to the depth of the fluid, assuming the pressure is the same. (This occurs since the streams of water are released into equal atmospheric pressure and is also known as Torricelli’s theorem.) Comparing the surface of the water to one of the streams:</p>\r\n\\[ P_1 + \\rho g h_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\rho g h_2 + \\frac{1}{2}\\rho v_2^2 \\]\r\n<p class=\"exp\">With <i>P</i><sub>1</sub> and <i>P</i><sub>2</sub> being equal and the surface being stationary (<i>v</i><sub>1</sub> = 0), we are left with:</p>\r\n\\[ \\rho g h_1 = \\rho g h_2 + \\frac{1}{2}\\rho v_2^2 \\]\r\n<p class=\"exp\">Eliminating and rearranging gives:</p>\r\n\\[ v_2 = \\sqrt{2g(h_1 - h_2)} \\]\r\n<p class=\"exp\">Since the lower hole is twice as deep, the quantity in parentheses will be twice as great for the lower hole as compared with the first. To compare velocities, take the square root of both sides.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            },
            {
                "id": "phys_diag_22",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "A car accelerates from rest at 4 m/s^2 for 5 s. Final speed is:",
                "options": [
                "10 m/s",
                "15 m/s",
                "20 m/s",
                "25 m/s"
                ],
                "answer": "C",
                "explanation": "v = u + at = 0 + 4(5) = 20 m/s."
            },
            {
                "id": "phys_diag_23",
                "topic": "Newton's Laws",
                "difficulty": "medium",
                "question": "A 5 kg object experiences 20 N net force. Acceleration = ?",
                "options": [
                "2 m/s^2",
                "4 m/s^2",
                "100 m/s^2",
                "25 m/s^2"
                ],
                "answer": "B",
                "explanation": "F = ma => a = F/m = 20/5 = 4 m/s^2."
            },
            {
                "id": "phys_diag_24",
                "topic": "Work-Energy",
                "difficulty": "medium",
                "question": "A 2 kg ball is lifted 3 m. Gravitational PE gained (g=10 m/s^2):",
                "options": [
                "30 J",
                "60 J",
                "6 J",
                "20 J"
                ],
                "answer": "B",
                "explanation": "PE = mgh = 2 * 10 * 3 = 60 J."
            },
            {
                "id": "phys_diag_25",
                "topic": "Momentum",
                "difficulty": "medium",
                "question": "A 3 kg object at 4 m/s hits and sticks to a 1 kg stationary object. Combined speed:",
                "options": [
                "4 m/s",
                "3 m/s",
                "2 m/s",
                "1 m/s"
                ],
                "answer": "B",
                "explanation": "Conservation of momentum: 3(4) = 4*v => v = 3 m/s."
            },
            {
                "id": "phys_diag_26",
                "topic": "Circular Motion",
                "difficulty": "medium",
                "question": "Centripetal acceleration of speed v in a circle of radius r:",
                "options": [
                "vr",
                "v/r",
                "v^2/r",
                "r/v^2"
                ],
                "answer": "C",
                "explanation": "Centripetal acceleration a_c = v^2/r."
            },
            {
                "id": "phys_diag_27",
                "topic": "Waves",
                "difficulty": "easy",
                "question": "A wave has frequency 5 Hz and wavelength 2 m. Speed is:",
                "options": [
                "2.5 m/s",
                "7 m/s",
                "10 m/s",
                "3 m/s"
                ],
                "answer": "C",
                "explanation": "v = f*lambda = 5 * 2 = 10 m/s."
            },
            {
                "id": "phys_diag_28",
                "topic": "Rotation",
                "difficulty": "hard",
                "question": "Disk with I = 2 kg*m^2, omega = 3 rad/s. Rotational KE = ?",
                "options": [
                "3 J",
                "6 J",
                "9 J",
                "18 J"
                ],
                "answer": "C",
                "explanation": "KE = (1/2)*I*omega^2 = (1/2)(2)(9) = 9 J."
            },
            {
                "id": "phys_diag_29",
                "topic": "Oscillations",
                "difficulty": "medium",
                "question": "A pendulum's period depends on:",
                "options": [
                "Mass of the bob",
                "Amplitude of swing",
                "Length and g only",
                "Air resistance only"
                ],
                "answer": "C",
                "explanation": "T = 2*pi*sqrt(L/g). Period depends only on length L and gravitational acceleration g."
            },
            {
                "id": "phys_diag_30",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "Archimedes' principle: buoyant force equals:",
                "options": [
                "Weight of the object",
                "Weight of fluid displaced",
                "Density of the fluid",
                "Pressure at the surface"
                ],
                "answer": "B",
                "explanation": "The buoyant force equals the weight of the fluid displaced by the submerged object."
            }
        ]
    },
    "ap-diag-chem": {
        "id": "ap-diag-chem",
        "title": "AP Chemistry Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Atomic Structure & Bonding",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Chemistry",
        "questions": [
            {
                "id": "dchem_1",
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
                "id": "chem_2",
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
                "id": "chem_3",
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
                "id": "chem_4",
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
                "id": "chem_5",
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
                "id": "chem_6",
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
                "id": "chem_7",
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
                "id": "chem_8",
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
                "id": "chem_9",
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
                "id": "chem_10",
                "topic": "Gas Laws",
                "difficulty": "medium",
                "question": "The Ideal Gas Law is:",
                "options": [
                "PV = nRT",
                "PV = RT",
                "P = nRT",
                "V = nRT/R"
                ],
                "answer": "A",
                "explanation": "PV = nRT where P=pressure, V=volume, n=moles, R=gas constant, T=temperature in Kelvin."
            },
            {
                "id": "chem_11",
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
                "id": "chem_12",
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
                "id": "chem_13",
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
                "id": "chem_14",
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
                "id": "chem_15",
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
                "id": "chem_16",
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
                "id": "chem_17",
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
                "id": "chem_18",
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
                "id": "chem_19",
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
                "id": "chem_20",
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
                "id": "chem_21",
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
                "id": "chem_22",
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
                "id": "chem_23",
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
                "id": "chem_24",
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
                "id": "chem_25",
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
                "id": "chem_26",
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
                "id": "chem_27",
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
                "id": "chem_28",
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
                "id": "chem_29",
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
                "id": "chem_30",
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
        ]
    },
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
                "1/4",
                "1/2",
                "3/4",
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
    },
    "ap-topic-calc-limits": {
        "id": "ap-topic-calc-limits",
        "title": "AP Calculus AB: Limits & Continuity",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "cl_1",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "Evaluate \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\).",
                "options": [
                    "0",
                    "2",
                    "4",
                    "Undefined"
                ],
                "answer": "C",
                "explanation": "Factor \\((x-2)(x+2)\\), cancel \\((x-2)\\) to get \\(2+2 = 4\\)."
            },
            {
                "id": "cl_2",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Evaluate \\(\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}\\).",
                "options": [
                    "0",
                    "1/4",
                    "1/2",
                    "1"
                ],
                "answer": "B",
                "explanation": "Multiply conjugate: \\(\\frac{1}{\\sqrt{x+4}+2} \\to 1/4\\)."
            },
            {
                "id": "cl_3",
                "topic": "Limits",
                "difficulty": "hard",
                "question": "Evaluate \\(\\lim_{x \\to 0} \\frac{e^{3x} - 1 - 3x}{x^2}\\).",
                "options": [
                    "0",
                    "1.5",
                    "4.5",
                    "9"
                ],
                "answer": "C",
                "explanation": "L'Hôpital twice: \\(\\frac{9e^{3x}}{2} \\to 4.5\\)."
            }
        ]
    },
    "ap-topic-calc-deriv": {
        "id": "ap-topic-calc-deriv",
        "title": "AP Calculus AB: Derivatives & Chain Rule",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "cd_1",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "Find \\(\\frac{d}{dx}[x^3 e^x]\\).",
                "options": [
                    "\\(3x^2 e^x\\)",
                    "\\(x^2 e^x(x+3)\\)",
                    "\\(x^3 e^x\\)",
                    "\\(e^x(x^3+1)\\)"
                ],
                "answer": "B",
                "explanation": "Product rule: \\(3x^2 e^x + x^3 e^x = x^2 e^x(x+3)\\)."
            },
            {
                "id": "cd_2",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Find slope of tangent to \\(x^2 y + y^3 = 5\\) at \\((1,1)\\).",
                "options": [
                    "-1/2",
                    "1/2",
                    "-2",
                    "2"
                ],
                "answer": "A",
                "explanation": "Implicit diff gives \\(y' = -1/2\\)."
            }
        ]
    },
    "ap-topic-calc-integ": {
        "id": "ap-topic-calc-integ",
        "title": "AP Calculus AB: Definite & Indefinite Integrals",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ci_1",
                "topic": "Integrals",
                "difficulty": "easy",
                "question": "Evaluate \\(\\int_1^2 (3x^2 + 1) , dx\\).",
                "options": [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                "answer": "B",
                "explanation": "\\([x^3 + x]_1^2 = 10 - 2 = 8\\)."
            }
        ]
    },
    "ap-topic-calc-app": {
        "id": "ap-topic-calc-app",
        "title": "AP Calculus AB: Applications of Derivatives & Integrals",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ca_1",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "Find the area bounded by \\(y = x^2\\) and \\(y = 2x\\).",
                "options": [
                    "2/3",
                    "4/3",
                    "2",
                    "8/3"
                ],
                "answer": "B",
                "explanation": "\\(\\int_0^2 (2x - x^2) dx = 4/3\\)."
            }
        ]
    },
    "ap-topic-calc-ab-test1": {
        "id": "ap-topic-calc-ab-test1",
        "title": "AP Calculus AB: Topic Practice Test 1",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 40,
        "questionsCount": 20,
        "questions": [
            {
                "id": "calc_t1_1",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\)",
                "options": [
                    "0",
                    "2",
                    "4",
                    "Does not exist"
                ],
                "answer": "C",
                "explanation": "Factor \\(x^2 - 4 = (x - 2)(x + 2)\\). The expression simplifies to \\(x + 2\\), so as \\(x \\to 2\\), the limit is \\(2 + 2 = 4\\)."
            },
            {
                "id": "calc_t1_2",
                "topic": "Continuity",
                "difficulty": "medium",
                "question": "For which value of \\(k\\) is \\(f(x)\\) continuous at \\(x = 3\\)? <br>\\(f(x) = \\begin{cases} x^2 + k, & x < 3 \\\\ 12, & x \\ge 3 \\end{cases}\\)",
                "options": [
                    "2",
                    "3",
                    "4",
                    "6"
                ],
                "answer": "B",
                "explanation": "For continuity at \\(x = 3\\), \\(\\lim_{x \\to 3^-} f(x) = f(3)\\). Thus, \\(3^2 + k = 12 \\implies 9 + k = 12 \\implies k = 3\\)."
            },
            {
                "id": "calc_t1_3",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "If \\(f(x) = x^2\\), then \\(f'(3)\\) is:",
                "options": [
                    "3",
                    "6",
                    "9",
                    "12"
                ],
                "answer": "B",
                "explanation": "\\(f'(x) = 2x\\), so \\(f'(3) = 2(3) = 6\\)."
            },
            {
                "id": "calc_t1_4",
                "topic": "Power Rule",
                "difficulty": "easy",
                "question": "If \\(f(x) = 5x^4 - 3x^2 + 7\\), then \\(f'(x)\\) is:",
                "options": [
                    "\\(20x^3 - 6x\\)",
                    "\\(20x^4 - 6x\\)",
                    "\\(5x^3 - 3x\\)",
                    "\\(20x^3 - 3x\\)"
                ],
                "answer": "A",
                "explanation": "Apply the power rule term-by-term: \\(\\frac{d}{dx}(5x^4) - \\frac{d}{dx}(3x^2) + \\frac{d}{dx}(7) = 20x^3 - 6x\\)."
            },
            {
                "id": "calc_t1_5",
                "topic": "Product Rule",
                "difficulty": "medium",
                "question": "Find the derivative of \\(f(x) = x^2 e^x\\):",
                "options": [
                    "\\(2x e^x\\)",
                    "\\(x^2 e^x\\)",
                    "\\(e^x (x^2 + 2x)\\)",
                    "\\(2x + e^x\\)"
                ],
                "answer": "C",
                "explanation": "Using the product rule: \\(f'(x) = (2x)e^x + x^2 e^x = e^x(x^2 + 2x)\\)."
            },
            {
                "id": "calc_t1_6",
                "topic": "Chain Rule",
                "difficulty": "medium",
                "question": "Find \\(\\frac{d}{dx} \\sin(3x^2)\\):",
                "options": [
                    "\\(\\cos(3x^2)\\)",
                    "\\(6x \\cos(3x^2)\\)",
                    "\\(3x \\cos(3x^2)\\)",
                    "\\(6x \\sin(3x^2)\\)"
                ],
                "answer": "B",
                "explanation": "Outer derivative is \\(\\cos(3x^2)\\) and inner derivative is \\(6x\\), so \\(f'(x) = 6x \\cos(3x^2)\\)."
            },
            {
                "id": "calc_t1_7",
                "topic": "Implicit Differentiation",
                "difficulty": "medium",
                "question": "Given \\(x^2 + y^2 = 25\\), what is \\(\\frac{dy}{dx}\\)?",
                "options": [
                    "\\(\\frac{y}{x}\\)",
                    "\\(-\\frac{y}{x}\\)",
                    "\\(\\frac{x}{y}\\)",
                    "\\(-\\frac{x}{y}\\)"
                ],
                "answer": "D",
                "explanation": "Differentiating implicitly: \\(2x + 2y \\frac{dy}{dx} = 0 \\implies 2y \\frac{dy}{dx} = -2x \\implies \\frac{dy}{dx} = -\\frac{x}{y}\\)."
            },
            {
                "id": "calc_t1_8",
                "topic": "Tangent Line",
                "difficulty": "medium",
                "question": "For \\(f(x) = x^2 + 1\\), find the equation of the tangent line at \\(x = 2\\).",
                "options": [
                    "\\(y = 4x - 3\\)",
                    "\\(y = 4x + 3\\)",
                    "\\(y = 2x + 1\\)",
                    "\\(y = 4x - 1\\)"
                ],
                "answer": "A",
                "explanation": "\\(f(2) = 5\\), slope \\(m = f'(2) = 2(2) = 4\\). Tangent equation: \\(y - 5 = 4(x - 2) \\implies y = 4x - 3\\)."
            },
            {
                "id": "calc_t1_9",
                "topic": "Related Rates",
                "difficulty": "hard",
                "question": "The radius of a circle increases at \\(2 \\text{ cm/s}\\). How fast is its area increasing when \\(r = 3\\)?",
                "options": [
                    "\\(6\\pi\\)",
                    "\\(9\\pi\\)",
                    "\\(12\\pi\\)",
                    "\\(18\\pi\\)"
                ],
                "answer": "C",
                "explanation": "\\(A = \\pi r^2 \\implies \\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(3)(2) = 12\\pi\\)."
            },
            {
                "id": "calc_t1_10",
                "topic": "Critical Points",
                "difficulty": "medium",
                "question": "For \\(f(x) = x^3 - 3x^2\\), the critical numbers are:",
                "options": [
                    "0, 2",
                    "1, 2",
                    "0, 3",
                    "2, 3"
                ],
                "answer": "A",
                "explanation": "\\(f'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0, 2\\)."
            },
            {
                "id": "calc_t1_11",
                "topic": "Increasing Function",
                "difficulty": "medium",
                "question": "For \\(f(x) = x^3 - 3x\\), on which interval(s) is \\(f\\) increasing?",
                "options": [
                    "\\((-1, 1)\\)",
                    "\\((-\\infty, -1) \\cup (1, \\infty)\\)",
                    "\\((-\\infty, 1)\\)",
                    "\\((1, \\infty)\\)"
                ],
                "answer": "B",
                "explanation": "\\(f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)\\). The derivative is positive when \\(x < -1\\) or \\(x > 1\\)."
            },
            {
                "id": "calc_t1_12",
                "topic": "Local Maximum",
                "difficulty": "medium",
                "question": "For \\(f(x) = x^3 - 3x\\), where does the local maximum occur?",
                "options": [
                    "\\(x = -1\\)",
                    "\\(x = 0\\)",
                    "\\(x = 1\\)",
                    "\\(x = 3\\)"
                ],
                "answer": "A",
                "explanation": "\\(f'(x) = 3(x+1)(x-1)\\) changes sign from positive to negative at \\(x = -1\\), giving a local maximum."
            },
            {
                "id": "calc_t1_13",
                "topic": "Concavity",
                "difficulty": "easy",
                "question": "For \\(f(x) = x^3\\), where is the function concave down?",
                "options": [
                    "\\(x < 0\\)",
                    "\\(x > 0\\)",
                    "All real \\(x\\)",
                    "Nowhere"
                ],
                "answer": "A",
                "explanation": "\\(f''(x) = 6x\\). Concave down means \\(f''(x) < 0\\), which holds for \\(x < 0\\)."
            },
            {
                "id": "calc_t1_14",
                "topic": "Mean Value Theorem",
                "difficulty": "medium",
                "question": "For \\(f(x) = x^2\\) on \\([1, 3]\\), what is the value of \\(c\\) guaranteed by MVT?",
                "options": [
                    "1",
                    "1.5",
                    "2",
                    "2.5"
                ],
                "answer": "C",
                "explanation": "Average rate of change is \\(\\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4\\). Set \\(f'(c) = 2c = 4 \\implies c = 2\\)."
            },
            {
                "id": "calc_t1_15",
                "topic": "Absolute Maximum",
                "difficulty": "medium",
                "question": "On \\([0, 3]\\), the maximum value of \\(f(x) = x^2 - 2x\\) occurs at:",
                "options": [
                    "\\(x = 0\\)",
                    "\\(x = 1\\)",
                    "\\(x = 2\\)",
                    "\\(x = 3\\)"
                ],
                "answer": "D",
                "explanation": "Check critical point \\(f'(x) = 2x-2=0 \\implies x=1\\) and endpoints: \\(f(0)=0\\), \\(f(1)=-1\\), \\(f(3)=3\\). Absolute max is at \\(x = 3\\)."
            },
            {
                "id": "calc_t1_16",
                "topic": "Indefinite Integral",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\int 3x^2 , dx\\)",
                "options": [
                    "\\(x^3 + C\\)",
                    "\\(3x^3 + C\\)",
                    "\\(x^2 + C\\)",
                    "\\(6x + C\\)"
                ],
                "answer": "A",
                "explanation": "Power rule for integrals: \\(\\int 3x^2 dx = 3 \\cdot \\frac{x^3}{3} + C = x^3 + C\\)."
            },
            {
                "id": "calc_t1_17",
                "topic": "Definite Integral",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\int_0^2 x , dx\\)",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "B",
                "explanation": "\\(\\left[ \\frac{x^2}{2} \\right]_0^2 = \\frac{4}{2} - 0 = 2\\)."
            },
            {
                "id": "calc_t1_18",
                "topic": "Fundamental Theorem of Calculus",
                "difficulty": "medium",
                "question": "If \\(F(x) = \\int_1^x (t^3 + 2t) , dt\\), then \\(F'(x)\\) equals:",
                "options": [
                    "\\(x^2 + 2\\)",
                    "\\(x^3 + 2x\\)",
                    "\\(3x^2 + 2\\)",
                    "\\(x^4 + 2x^2\\)"
                ],
                "answer": "B",
                "explanation": "By FTC Part 1, \\(F'(x) = \\frac{d}{dx} \\int_1^x (t^3 + 2t) dt = x^3 + 2x\\)."
            },
            {
                "id": "calc_t1_19",
                "topic": "Area Between Curves",
                "difficulty": "medium",
                "question": "The area of the region bounded between \\(y = x\\) and \\(y = x^2\\) from \\(x = 0\\) to \\(x = 1\\) is:",
                "options": [
                    "1/3",
                    "1/4",
                    "1/6",
                    "1/2"
                ],
                "answer": "C",
                "explanation": "\\(\\int_0^1 (x - x^2) dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}\\)."
            },
            {
                "id": "calc_t1_20",
                "topic": "Average Value",
                "difficulty": "medium",
                "question": "The average value of \\(f(x) = x^2\\) on \\([0, 2]\\) is:",
                "options": [
                    "1",
                    "4/3",
                    "2",
                    "8/3"
                ],
                "answer": "B",
                "explanation": "\\(f_{avg} = \\frac{1}{2-0} \\int_0^2 x^2 dx = \\frac{1}{2} \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{1}{2} \\cdot \\frac{8}{3} = \\frac{4}{3}\\)."
            }
        ]
    },
    "ap-topic-calc-ab-test2": {
        "id": "ap-topic-calc-ab-test2",
        "title": "AP Calculus AB: Topic Practice Test 2",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 40,
        "questionsCount": 20,
        "questions": [
            {
                "id": "calc_t2_1",
                "topic": "Motion",
                "difficulty": "medium",
                "question": "A particle has velocity \\(v(t) = 3t^2 - 4\\). At what positive time is the particle at rest?",
                "options": [
                    "\\(t = 1\\)",
                    "\\(t = \\sqrt{4/3}\\)",
                    "\\(t = 4/3\\)",
                    "\\(t = 2\\)"
                ],
                "answer": "B",
                "explanation": "Set \\(v(t) = 0 \\implies 3t^2 = 4 \\implies t^2 = 4/3 \\implies t = \\sqrt{4/3}\\)."
            },
            {
                "id": "calc_t2_2",
                "topic": "Acceleration",
                "difficulty": "medium",
                "question": "If position is \\(s(t) = t^3 - 6t^2 + 9t\\), what is the acceleration at \\(t = 2\\)?",
                "options": [
                    "-6",
                    "0",
                    "6",
                    "12"
                ],
                "answer": "B",
                "explanation": "\\(v(t) = 3t^2 - 12t + 9\\), \\(a(t) = 6t - 12\\). At \\(t = 2\\), \\(a(2) = 6(2) - 12 = 0\\)."
            },
            {
                "id": "calc_t2_3",
                "topic": "Distance vs Displacement",
                "difficulty": "easy",
                "question": "If velocity changes sign during a time interval, the total distance traveled is:",
                "options": [
                    "Always equal to displacement",
                    "Less than displacement",
                    "The integral of \\(|v(t)|\\)",
                    "The integral of \\(v'(t)\\)"
                ],
                "answer": "C",
                "explanation": "Total distance accounts for movement in all directions and equals \\(\\int |v(t)| dt\\)."
            },
            {
                "id": "calc_t2_4",
                "topic": "Riemann Sum",
                "difficulty": "medium",
                "question": "For a strictly increasing function, a left Riemann sum generally:",
                "options": [
                    "Overestimates",
                    "Underestimates",
                    "Equals the exact integral",
                    "Is always zero"
                ],
                "answer": "B",
                "explanation": "Since the function is increasing, the left endpoint of each subinterval gives the minimum function value, resulting in an underestimate."
            },
            {
                "id": "calc_t2_5",
                "topic": "Trapezoidal Rule",
                "difficulty": "easy",
                "question": "The trapezoidal rule approximates area using:",
                "options": [
                    "Rectangles",
                    "Triangles only",
                    "Trapezoids",
                    "Circles"
                ],
                "answer": "C",
                "explanation": "The trapezoidal rule approximates the definite integral by connecting subinterval endpoints with straight line segments to form trapezoids."
            },
            {
                "id": "calc_t2_6",
                "topic": "Differential Equation",
                "difficulty": "medium",
                "question": "Solve the differential equation \\(\\frac{dy}{dx} = 3x^2\\) given initial condition \\(y(0) = 2\\).",
                "options": [
                    "\\(y = x^3 + 2\\)",
                    "\\(y = 3x^3 + 2\\)",
                    "\\(y = x^2 + 2\\)",
                    "\\(y = x^3\\)"
                ],
                "answer": "A",
                "explanation": "\\(y = \\int 3x^2 dx = x^3 + C\\). Using \\(y(0) = 2 \\implies C = 2\\), so \\(y = x^3 + 2\\)."
            },
            {
                "id": "calc_t2_7",
                "topic": "Euler's Method",
                "difficulty": "hard",
                "question": "For \\(y' = x + y\\) with \\(y(0) = 1\\), using step size \\(h = 0.1\\), the Euler approximation at \\(x = 0.1\\) is:",
                "options": [
                    "1",
                    "1.05",
                    "1.1",
                    "1.2"
                ],
                "answer": "C",
                "explanation": "\\(y_1 = y_0 + h \\cdot f(x_0, y_0) = 1 + 0.1(0 + 1) = 1.1\\)."
            },
            {
                "id": "calc_t2_8",
                "topic": "Logarithmic Derivative",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\frac{d}{dx} \\ln(x)\\)",
                "options": [
                    "\\(x\\)",
                    "\\(1/x\\)",
                    "\\(\\ln(x)\\)",
                    "\\(e^x\\)"
                ],
                "answer": "B",
                "explanation": "The derivative of \\(\\ln(x)\\) for \\(x > 0\\) is \\(\\frac{1}{x}\\)."
            },
            {
                "id": "calc_t2_9",
                "topic": "Exponential Derivative",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\frac{d}{dx} e^{2x}\\)",
                "options": [
                    "\\(e^{2x}\\)",
                    "\\(2e^{2x}\\)",
                    "\\(x e^{2x}\\)",
                    "\\(2x e^x\\)"
                ],
                "answer": "B",
                "explanation": "By the chain rule: \\(\\frac{d}{dx}(e^{2x}) = e^{2x} \\cdot 2 = 2e^{2x}\\)."
            },
            {
                "id": "calc_t2_10",
                "topic": "Inverse Function Derivative",
                "difficulty": "hard",
                "question": "If \\(f(2) = 5\\) and \\(f'(2) = 4\\), then \\((f^{-1})'(5) =\\)",
                "options": [
                    "4",
                    "5",
                    "1/4",
                    "1/5"
                ],
                "answer": "C",
                "explanation": "Using inverse derivative formula: \\((f^{-1})'(5) = \\frac{1}{f'(f^{-1}(5))} = \\frac{1}{f'(2)} = \\frac{1}{4}\\)."
            },
            {
                "id": "calc_t2_11",
                "topic": "Optimization",
                "difficulty": "medium",
                "question": "A rectangle has a fixed perimeter of 20 units. Its maximum possible area is:",
                "options": [
                    "20",
                    "25",
                    "50",
                    "100"
                ],
                "answer": "B",
                "explanation": "Maximum area for a rectangle with fixed perimeter occurs when it is a square. Side = \\(20/4 = 5\\), Area = \\(5^2 = 25\\)."
            },
            {
                "id": "calc_t2_12",
                "topic": "Trig Limit",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\)",
                "options": [
                    "0",
                    "1",
                    "\\(\\infty\\)",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "Standard limit identity: \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1\\)."
            },
            {
                "id": "calc_t2_13",
                "topic": "L'Hôpital's Rule",
                "difficulty": "medium",
                "question": "Evaluate: \\(\\lim_{x \\to 0} \\frac{e^x - 1}{x}\\)",
                "options": [
                    "0",
                    "1",
                    "\\(e\\)",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "Indeterminate form \\(0/0\\). Apply L'Hôpital's Rule: \\(\\lim_{x \\to 0} \\frac{e^x}{1} = 1\\)."
            },
            {
                "id": "calc_t2_14",
                "topic": "Related Rates",
                "difficulty": "hard",
                "question": "A 10 ft ladder slides down a wall. If the bottom moves away at 2 ft/s, how fast is the top moving down when the bottom is 6 ft from the wall?",
                "options": [
                    "-1.5 ft/s",
                    "-2 ft/s",
                    "-3/2 ft/s",
                    "-3 ft/s"
                ],
                "answer": "A",
                "explanation": "\\(x^2 + y^2 = 100\\). At \\(x = 6\\), \\(y = 8\\). Differentiating: \\(2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies 2(6)(2) + 2(8)\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -1.5 \\text{ ft/s}\\)."
            },
            {
                "id": "calc_t2_15",
                "topic": "Accumulation Function",
                "difficulty": "medium",
                "question": "If \\(g(x) = \\int_0^x f(t) , dt\\), then \\(g'(x)\\) equals:",
                "options": [
                    "\\(f'(x)\\)",
                    "\\(f(x)\\)",
                    "\\(\\int f(x) dx\\)",
                    "0"
                ],
                "answer": "B",
                "explanation": "By FTC Part 1, the derivative of the accumulation function is the integrand evaluated at \\(x\\), i.e., \\(g'(x) = f(x)\\)."
            },
            {
                "id": "calc_t2_16",
                "topic": "Washer Method",
                "difficulty": "medium",
                "question": "The volume obtained by rotating a region around the x-axis is commonly found using:",
                "options": [
                    "\\(2\\pi r h\\)",
                    "\\(\\pi(R^2 - r^2)\\)",
                    "\\(R + r\\)",
                    "\\(2\\pi r\\)"
                ],
                "answer": "B",
                "explanation": "The washer method integrates cross-sectional washer areas: \\(V = \\pi \\int (R^2 - r^2) dx\\)."
            },
            {
                "id": "calc_t2_17",
                "topic": "Shell Method",
                "difficulty": "medium",
                "question": "The volume element for cylindrical shell method is:",
                "options": [
                    "\\(\\pi r^2 h\\)",
                    "\\(2\\pi r h , dx\\)",
                    "\\(r^2 + h^2\\)",
                    "\\(\\pi r h^2\\)"
                ],
                "answer": "B",
                "explanation": "A thin cylindrical shell has surface area \\(2\\pi r h\\) and thickness \\(dx\\), giving volume element \\(2\\pi r h , dx\\)."
            },
            {
                "id": "calc_t2_18",
                "topic": "Continuity & Differentiability",
                "difficulty": "easy",
                "question": "If a function is differentiable at \\(x = a\\), then it must be:",
                "options": [
                    "Discontinuous",
                    "Continuous",
                    "Constant",
                    "Increasing"
                ],
                "answer": "B",
                "explanation": "Differentiability implies continuity. If a function is differentiable at a point, it is guaranteed to be continuous there."
            },
            {
                "id": "calc_t2_19",
                "topic": "Extreme Value Theorem",
                "difficulty": "easy",
                "question": "A continuous function on a closed interval \\([a, b]\\):",
                "options": [
                    "Must have an absolute maximum and minimum",
                    "Must be differentiable",
                    "Must be increasing",
                    "Must have exactly one critical point"
                ],
                "answer": "A",
                "explanation": "The Extreme Value Theorem states that a continuous function on a closed, bounded interval attains both an absolute maximum and minimum."
            },
            {
                "id": "calc_t2_20",
                "topic": "Fundamental Theorem of Calculus",
                "difficulty": "medium",
                "question": "If \\(F(x) = \\int_a^x f(t) , dt\\) and \\(f\\) is continuous, then:",
                "options": [
                    "\\(F'(x) = f(x)\\)",
                    "\\(F'(x) = f'(x)\\)",
                    "\\(F(x) = f'(x)\\)",
                    "\\(F'(x) = 0\\)"
                ],
                "answer": "A",
                "explanation": "By the Fundamental Theorem of Calculus Part 1, \\(F'(x) = f(x)\\)."
            }
        ]
    },
    "ap-topic-calcbc-series": {
        "id": "ap-topic-calcbc-series",
        "title": "AP Calculus BC: Taylor Series & Parametrics",
        "subject": "AP Calculus BC",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 30,
        "questionsCount": 10,
        "questions": [
            {
                "id": "cbc_1",
                "topic": "BC Topics",
                "difficulty": "hard",
                "question": "Find the Taylor series coefficient of \\(x^2\\) for \\(f(x) = e^{2x}\\) at \\(x=0\\).",
                "options": [
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                "answer": "B",
                "explanation": "\\(e^{2x} = 1 + 2x + \\frac{4x^2}{2!} \\implies 2x^2\\), coefficient is 2."
            }
        ]
    },
    "ap-topic-calcbc-test1": {
        "id": "ap-topic-calcbc-test1",
        "title": "AP Calculus BC: Topic Practice Test 1",
        "subject": "AP Calculus BC",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 40,
        "questionsCount": 20,
        "questions": [
            {
                "id": "calcbc_t1_1",
                "topic": "Parametric Derivative",
                "difficulty": "medium",
                "question": "Given \\(x = t^2\\) and \\(y = t^3\\), find \\(\\frac{dy}{dx}\\) at \\(t = 2\\).",
                "options": [
                    "2",
                    "3",
                    "4",
                    "6"
                ],
                "answer": "B",
                "explanation": "\\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3}{2}t\\). At \\(t = 2\\), \\(\\frac{dy}{dx} = \\frac{3}{2}(2) = 3\\)."
            },
            {
                "id": "calcbc_t1_2",
                "topic": "Second Derivative Parametric",
                "difficulty": "hard",
                "question": "For \\(x = t^2\\) and \\(y = t^3\\), what is \\(\\frac{d^2y}{dx^2}\\) at \\(t = 2\\)?",
                "options": [
                    "3/8",
                    "1/2",
                    "3/4",
                    "1"
                ],
                "answer": "A",
                "explanation": "\\(\\frac{dy}{dx} = \\frac{3}{2}t\\). Then \\(\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt} = \\frac{3/2}{2t} = \\frac{3}{4t}\\). At \\(t = 2\\), \\(\\frac{d^2y}{dx^2} = \\frac{3}{8}\\)."
            },
            {
                "id": "calcbc_t1_3",
                "topic": "Parametric Tangent",
                "difficulty": "medium",
                "question": "For \\(x = t^2 - 1\\) and \\(y = t^3 - 3t\\), a horizontal tangent occurs when:",
                "options": [
                    "\\(t = 0\\) only",
                    "\\(t = \\pm 1\\)",
                    "\\(t = \\pm \\sqrt{3}\\)",
                    "\\(t = 3\\)"
                ],
                "answer": "B",
                "explanation": "Horizontal tangent occurs when \\(\\frac{dy}{dt} = 3t^2 - 3 = 0 \\implies t = \\pm 1\\) (where \\(\\frac{dx}{dt} = 2t \\neq 0\\))."
            },
            {
                "id": "calcbc_t1_4",
                "topic": "Polar Coordinates",
                "difficulty": "easy",
                "question": "For \\(r = 2\\), what is the Cartesian point \\((x, y)\\) when \\(\\theta = \\pi/2\\)?",
                "options": [
                    "(2, 0)",
                    "(0, 2)",
                    "(-2, 0)",
                    "(0, -2)"
                ],
                "answer": "B",
                "explanation": "\\(x = r \\cos\\theta = 2 \\cos(\\pi/2) = 0\\), \\(y = r \\sin\\theta = 2 \\sin(\\pi/2) = 2\\). Point is \\((0, 2)\\)."
            },
            {
                "id": "calcbc_t1_5",
                "topic": "Polar Area",
                "difficulty": "medium",
                "question": "The area enclosed by the polar curve \\(r = 2\\) is:",
                "options": [
                    "\\(2\\pi\\)",
                    "\\(4\\pi\\)",
                    "\\(8\\pi\\)",
                    "\\(\\pi\\)"
                ],
                "answer": "B",
                "explanation": "\\(A = \\frac{1}{2} \\int_0^{2\\pi} r^2 d\\theta = \\frac{1}{2}(4)(2\\pi) = 4\\pi\\)."
            },
            {
                "id": "calcbc_t1_6",
                "topic": "Polar Derivative",
                "difficulty": "hard",
                "question": "For \\(r = 1 + \\cos\\theta\\), the derivative \\(\\frac{dy}{dx}\\) is given by:",
                "options": [
                    "\\(\\frac{\\cos\\theta}{\\sin\\theta}\\)",
                    "\\(\\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}\\)",
                    "\\(\\frac{d\\theta}{dr}\\)",
                    "\\(r \\cos\\theta\\)"
                ],
                "answer": "B",
                "explanation": "Since \\(y = r\\sin\\theta\\) and \\(x = r\\cos\\theta\\), \\(\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}\\)."
            },
            {
                "id": "calcbc_t1_7",
                "topic": "Series Convergence",
                "difficulty": "easy",
                "question": "Determine whether the series \\(\\sum_{n=1}^\\infty \\frac{1}{n^2}\\) converges or diverges.",
                "options": [
                    "Converges",
                    "Diverges",
                    "Oscillates",
                    "Cannot determine"
                ],
                "answer": "A",
                "explanation": "It is a \\(p\\)-series with \\(p = 2 > 1\\), which converges."
            },
            {
                "id": "calcbc_t1_8",
                "topic": "Harmonic Series",
                "difficulty": "easy",
                "question": "The harmonic series \\(\\sum_{n=1}^\\infty \\frac{1}{n}\\):",
                "options": [
                    "Converges",
                    "Diverges",
                    "Equals 1",
                    "Equals 0"
                ],
                "answer": "B",
                "explanation": "The harmonic series is a \\(p\\)-series with \\(p = 1\\), which diverges."
            },
            {
                "id": "calcbc_t1_9",
                "topic": "Geometric Series",
                "difficulty": "easy",
                "question": "The series \\(\\sum_{n=0}^\\infty \\left(\\frac{1}{3}\\right)^n\\) has sum:",
                "options": [
                    "1",
                    "3/2",
                    "2",
                    "3"
                ],
                "answer": "B",
                "explanation": "\\(S = \\frac{a}{1 - r} = \\frac{1}{1 - 1/3} = \\frac{3}{2}\\)."
            },
            {
                "id": "calcbc_t1_10",
                "topic": "Geometric Convergence",
                "difficulty": "easy",
                "question": "For what values of \\(x\\) does the series \\(\\sum_{n=0}^\\infty x^n\\) converge?",
                "options": [
                    "\\(x > 1\\)",
                    "\\(x < 1\\)",
                    "\\(|x| < 1\\)",
                    "\\(x > 0\\)"
                ],
                "answer": "C",
                "explanation": "A geometric series \\(\\sum x^n\\) converges if and only if the common ratio satisfies \\(|x| < 1\\)."
            },
            {
                "id": "calcbc_t1_11",
                "topic": "Ratio Test",
                "difficulty": "medium",
                "question": "For \\(\\sum_{n=1}^\\infty \\frac{2^n}{n!}\\), the Ratio Test shows:",
                "options": [
                    "Divergence",
                    "Convergence",
                    "Oscillation",
                    "Test is inconclusive"
                ],
                "answer": "B",
                "explanation": "\\(\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0 < 1\\), indicating absolute convergence."
            },
            {
                "id": "calcbc_t1_12",
                "topic": "Alternating Series",
                "difficulty": "medium",
                "question": "The series \\(\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}\\):",
                "options": [
                    "Converges absolutely",
                    "Converges conditionally",
                    "Diverges",
                    "Equals 1"
                ],
                "answer": "B",
                "explanation": "Converges by the Alternating Series Test, but its absolute series \\(\\sum \\frac{1}{n}\\) diverges. Thus it converges conditionally."
            },
            {
                "id": "calcbc_t1_13",
                "topic": "Absolute Convergence",
                "difficulty": "medium",
                "question": "The series \\(\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\):",
                "options": [
                    "Diverges",
                    "Converges conditionally",
                    "Converges absolutely",
                    "Oscillates"
                ],
                "answer": "C",
                "explanation": "The absolute series \\(\\sum \\frac{1}{n^2}\\) converges (\\(p = 2 > 1\\)), so the original series converges absolutely."
            },
            {
                "id": "calcbc_t1_14",
                "topic": "Integral Test",
                "difficulty": "easy",
                "question": "The Integral Test can be applied to a series \\(\\sum a_n\\) if the corresponding function \\(f(x)\\) is:",
                "options": [
                    "Any sequence",
                    "Positive, continuous, and decreasing",
                    "Only alternating functions",
                    "Only geometric functions"
                ],
                "answer": "B",
                "explanation": "The Integral Test requires \\(f(x)\\) to be positive, continuous, and decreasing for \\(x \\ge 1\\)."
            },
            {
                "id": "calcbc_t1_15",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "The radius of convergence of \\(\\sum_{n=0}^\\infty \\frac{x^n}{3^n}\\) is:",
                "options": [
                    "1",
                    "2",
                    "3",
                    "9"
                ],
                "answer": "C",
                "explanation": "Geometric ratio is \\(|x/3| < 1 \\implies |x| < 3\\), so radius of convergence \\(R = 3\\)."
            },
            {
                "id": "calcbc_t1_16",
                "topic": "Power Series Interval",
                "difficulty": "medium",
                "question": "For \\(\\sum_{n=1}^\\infty n x^n\\), the radius of convergence is:",
                "options": [
                    "0",
                    "1",
                    "2",
                    "\\(\\infty\\)"
                ],
                "answer": "B",
                "explanation": "Ratio test limit gives \\(|x| < 1\\), so the radius of convergence is \\(R = 1\\)."
            },
            {
                "id": "calcbc_t1_17",
                "topic": "Taylor Polynomial",
                "difficulty": "easy",
                "question": "The second-degree Maclaurin polynomial for \\(e^x\\) is:",
                "options": [
                    "\\(1 + x\\)",
                    "\\(1 + x + x^2/2\\)",
                    "\\(x + x^2\\)",
                    "\\(1 + x^2\\)"
                ],
                "answer": "B",
                "explanation": "\\(P_2(x) = 1 + x + \\frac{x^2}{2!}\\)."
            },
            {
                "id": "calcbc_t1_18",
                "topic": "Maclaurin Series",
                "difficulty": "easy",
                "question": "The Maclaurin series expansion for \\(\\sin(x)\\) begins:",
                "options": [
                    "\\(1 + x + x^2/2\\)",
                    "\\(x - x^3/3! + x^5/5! - \\dots\\)",
                    "\\(x + x^2 + x^3\\)",
                    "\\(1 - x^2/2 + \\dots\\)"
                ],
                "answer": "B",
                "explanation": "\\(\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots\\)."
            },
            {
                "id": "calcbc_t1_19",
                "topic": "Maclaurin Series for Cosine",
                "difficulty": "easy",
                "question": "The Maclaurin series expansion for \\(\\cos(x)\\) is:",
                "options": [
                    "\\(x - x^3/6 + \\dots\\)",
                    "\\(1 - x^2/2! + x^4/4! - \\dots\\)",
                    "\\(1 + x + x^2/2 + \\dots\\)",
                    "\\(x + x^3/6 + \\dots\\)"
                ],
                "answer": "B",
                "explanation": "\\(\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots\\)."
            },
            {
                "id": "calcbc_t1_20",
                "topic": "Taylor Approximation",
                "difficulty": "medium",
                "question": "Using \\(1 + x + \\frac{x^2}{2}\\), approximate \\(e^{0.1}\\):",
                "options": [
                    "1.01",
                    "1.05",
                    "1.105",
                    "1.5"
                ],
                "answer": "C",
                "explanation": "\\(1 + 0.1 + \\frac{(0.1)^2}{2} = 1 + 0.1 + 0.005 = 1.105\\)."
            }
        ]
    },
    "ap-topic-calcbc-test2": {
        "id": "ap-topic-calcbc-test2",
        "title": "AP Calculus BC: Topic Practice Test 2",
        "subject": "AP Calculus BC",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 40,
        "questionsCount": 20,
        "questions": [
            {
                "id": "calcbc_t2_1",
                "topic": "Alternating Series Error",
                "difficulty": "medium",
                "question": "For an alternating series satisfying the conditions of the Alternating Series Test, the error after \\(n\\) terms is bounded by:",
                "options": [
                    "The absolute value of the first omitted term",
                    "The last included term",
                    "Twice the first term",
                    "Always zero"
                ],
                "answer": "A",
                "explanation": "The Alternating Series Error Bound states that \\(|R_n| \\le a_{n+1}\\), which is the absolute value of the first omitted term."
            },
            {
                "id": "calcbc_t2_2",
                "topic": "Taylor Error Bound",
                "difficulty": "medium",
                "question": "The Lagrange error bound is primarily used to:",
                "options": [
                    "Find exact derivatives",
                    "Estimate the maximum error of a Taylor polynomial approximation",
                    "Determine only convergence of series",
                    "Find critical points of functions"
                ],
                "answer": "B",
                "explanation": "The Lagrange error bound gives a maximum bound on the remainder term \\(|R_n(x)|\\) of a Taylor polynomial."
            },
            {
                "id": "calcbc_t2_3",
                "topic": "Improper Integral",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\int_1^\\infty \\frac{1}{x^2} , dx\\)",
                "options": [
                    "Diverges",
                    "0",
                    "1",
                    "\\(\\infty\\)"
                ],
                "answer": "C",
                "explanation": "\\(\\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + 1\\right) = 1\\)."
            },
            {
                "id": "calcbc_t2_4",
                "topic": "Improper Integral Divergence",
                "difficulty": "easy",
                "question": "Evaluate: \\(\\int_1^\\infty \\frac{1}{x} , dx\\)",
                "options": [
                    "Converges to 1",
                    "Converges to \\(\\pi\\)",
                    "Diverges",
                    "Equals 0"
                ],
                "answer": "C",
                "explanation": "\\(\\lim_{b \\to \\infty} [\\ln|x|]_1^b = \\lim_{b \\to \\infty} \\ln(b) = \\infty\\), so the integral diverges."
            },
            {
                "id": "calcbc_t2_5",
                "topic": "Logistic Differential Equation",
                "difficulty": "medium",
                "question": "For \\(\\frac{dP}{dt} = P(1 - P)\\), the equilibrium solutions are:",
                "options": [
                    "\\(P = 0\\) only",
                    "\\(P = 1\\) only",
                    "\\(P = 0\\) and \\(P = 1\\)",
                    "\\(P = -1\\) and \\(P = 1\\)"
                ],
                "answer": "C",
                "explanation": "Equilibrium solutions occur when \\(\\frac{dP}{dt} = 0 \\implies P(1 - P) = 0 \\implies P = 0, 1\\)."
            },
            {
                "id": "calcbc_t2_6",
                "topic": "Differential Equation",
                "difficulty": "easy",
                "question": "For \\(y' = y\\), the general solution is:",
                "options": [
                    "\\(y = x + C\\)",
                    "\\(y = C e^x\\)",
                    "\\(y = C x\\)",
                    "\\(y = e^{x+C}\\) only"
                ],
                "answer": "B",
                "explanation": "Separating variables: \\(\\frac{dy}{y} = dx \\implies \\ln|y| = x + C_1 \\implies y = C e^x\\)."
            },
            {
                "id": "calcbc_t2_7",
                "topic": "Slope Field",
                "difficulty": "easy",
                "question": "For \\(y' = x\\), the slope of the solution curve at \\((2, 5)\\) is:",
                "options": [
                    "2",
                    "5",
                    "7",
                    "10"
                ],
                "answer": "A",
                "explanation": "The derivative \\(y'\\) depends only on \\(x\\). At \\((2, 5)\\), \\(x = 2\\), so slope \\(m = 2\\)."
            },
            {
                "id": "calcbc_t2_8",
                "topic": "Euler's Method",
                "difficulty": "medium",
                "question": "For \\(y' = x - y\\) with \\(y(0) = 1\\), step size \\(h = 0.1\\), the first Euler approximation \\(y_1\\) at \\(x = 0.1\\) is:",
                "options": [
                    "0.8",
                    "0.9",
                    "1.0",
                    "1.1"
                ],
                "answer": "B",
                "explanation": "\\(y_1 = y_0 + h f(x_0, y_0) = 1 + 0.1(0 - 1) = 0.9\\)."
            },
            {
                "id": "calcbc_t2_9",
                "topic": "Vector-Valued Function",
                "difficulty": "medium",
                "question": "If position is \\(\\vec{r}(t) = \\langle t^2, 3t \\rangle\\), then the velocity vector \\(\\vec{v}(t)\\) is:",
                "options": [
                    "\\(\\langle t, 3 \\rangle\\)",
                    "\\(\\langle 2t, 3 \\rangle\\)",
                    "\\(\\langle t^2, 3 \\rangle\\)",
                    "\\(\\langle 2, 3t \\rangle\\)"
                ],
                "answer": "B",
                "explanation": "\\(\\vec{v}(t) = \\vec{r}'(t) = \\left\\langle \\frac{d}{dt}(t^2), \\frac{d}{dt}(3t) \\right\\rangle = \\langle 2t, 3 \\rangle\\)."
            },
            {
                "id": "calcbc_t2_10",
                "topic": "Speed of Vector Motion",
                "difficulty": "medium",
                "question": "For position \\(\\vec{r}(t) = \\langle t, t^2 \\rangle\\), the speed at \\(t = 1\\) is:",
                "options": [
                    "1",
                    "2",
                    "\\(\\sqrt{5}\\)",
                    "3"
                ],
                "answer": "C",
                "explanation": "\\(\\vec{v}(t) = \\langle 1, 2t \\rangle\\). At \\(t = 1\\), \\(\\vec{v}(1) = \\langle 1, 2 \\rangle\\). Speed = \\(\\sqrt{1^2 + 2^2} = \\sqrt{5}\\)."
            },
            {
                "id": "calcbc_t2_11",
                "topic": "Parametric Arc Length",
                "difficulty": "easy",
                "question": "For a parametric curve \\(x = f(t), y = g(t)\\), the arc length formula is:",
                "options": [
                    "\\(\\int (x + y) dt\\)",
                    "\\(\\int \\sqrt{(dx/dt)^2 + (dy/dt)^2} dt\\)",
                    "\\(\\int (xy) dt\\)",
                    "\\(\\int f'(t)g'(t) dt\\)"
                ],
                "answer": "B",
                "explanation": "Parametric arc length formula: \\(L = \\int \\sqrt{(x'(t))^2 + (y'(t))^2} dt\\)."
            },
            {
                "id": "calcbc_t2_12",
                "topic": "Polar Area Formula",
                "difficulty": "easy",
                "question": "The area enclosed by a polar curve from \\(\\theta = \\alpha\\) to \\(\\theta = \\beta\\) is:",
                "options": [
                    "\\(\\int_\\alpha^\\beta r d\\theta\\)",
                    "\\(\\frac{1}{2} \\int_\\alpha^\\beta r^2 d\\theta\\)",
                    "\\(\\int_\\alpha^\\beta r^2 d\\theta\\)",
                    "\\(2\\pi r\\)"
                ],
                "answer": "B",
                "explanation": "Standard polar area formula: \\(A = \\frac{1}{2} \\int_\\alpha^\\beta r^2 d\\theta\\)."
            },
            {
                "id": "calcbc_t2_13",
                "topic": "Polar Arc Length",
                "difficulty": "medium",
                "question": "The polar arc-length formula integrand involves:",
                "options": [
                    "\\(\\sqrt{r^2 + (dr/d\\theta)^2}\\)",
                    "\\(r + dr/d\\theta\\)",
                    "\\(r^2\\) only",
                    "\\(dr/d\\theta\\) only"
                ],
                "answer": "A",
                "explanation": "Polar arc length formula: \\(L = \\int \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta\\)."
            },
            {
                "id": "calcbc_t2_14",
                "topic": "Ratio Test Definition",
                "difficulty": "easy",
                "question": "If \\(L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| < 1\\), then the series \\(\\sum a_n\\):",
                "options": [
                    "Diverges",
                    "Converges absolutely",
                    "Is always alternating",
                    "Yields no conclusion"
                ],
                "answer": "B",
                "explanation": "By the Ratio Test, if \\(L < 1\\), the series converges absolutely."
            },
            {
                "id": "calcbc_t2_15",
                "topic": "Root Test Definition",
                "difficulty": "easy",
                "question": "If \\(\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} < 1\\), then:",
                "options": [
                    "The series converges absolutely",
                    "The series diverges",
                    "The series is harmonic",
                    "The test fails"
                ],
                "answer": "A",
                "explanation": "By the Root Test, if the limit of \\(|a_n|^{1/n} < 1\\), the series converges absolutely."
            },
            {
                "id": "calcbc_t2_16",
                "topic": "Direct Comparison Test",
                "difficulty": "medium",
                "question": "Since \\(0 < \\frac{1}{n^2 + 1} < \\frac{1}{n^2}\\) and \\(\\sum \\frac{1}{n^2}\\) converges, then:",
                "options": [
                    "\\(\\sum \\frac{1}{n^2 + 1}\\) converges",
                    "It diverges",
                    "It oscillates",
                    "Cannot determine"
                ],
                "answer": "A",
                "explanation": "By the Direct Comparison Test, since the larger series converges, the smaller positive series also converges."
            },
            {
                "id": "calcbc_t2_17",
                "topic": "nth-Term Test for Divergence",
                "difficulty": "easy",
                "question": "If \\(\\lim_{n \\to \\infty} a_n = 5 \\neq 0\\), then the series \\(\\sum a_n\\):",
                "options": [
                    "Must converge",
                    "Must diverge",
                    "Is geometric",
                    "Is alternating"
                ],
                "answer": "B",
                "explanation": "By the \\(n\\)-th term test for divergence, if \\(\\lim_{n \\to \\infty} a_n \\neq 0\\), the series diverges."
            },
            {
                "id": "calcbc_t2_18",
                "topic": "Taylor Series Derivative",
                "difficulty": "medium",
                "question": "If \\(f(x) = \\sum_{n=0}^\\infty a_n x^n\\), then term-by-term differentiation gives \\(f'(x) =\\):",
                "options": [
                    "\\(\\sum a_n x^n\\)",
                    "\\(\\sum n a_n x^{n-1}\\)",
                    "\\(\\sum a_n x^{n+1}\\)",
                    "0"
                ],
                "answer": "B",
                "explanation": "\\(\\frac{d}{dx}(a_n x^n) = n a_n x^{n-1}\\), so \\(f'(x) = \\sum_{n=1}^\\infty n a_n x^{n-1}\\)."
            },
            {
                "id": "calcbc_t2_19",
                "topic": "Taylor Series Integration",
                "difficulty": "medium",
                "question": "If \\(f(x) = \\sum_{n=0}^\\infty a_n x^n\\), then an antiderivative is:",
                "options": [
                    "\\(\\sum n a_n x^{n-1}\\)",
                    "\\(\\sum \\frac{a_n}{n+1} x^{n+1} + C\\)",
                    "\\(\\sum a_n x^{n+1}\\)",
                    "\\(\\sum a_n / n\\)"
                ],
                "answer": "B",
                "explanation": "Term-by-term integration: \\(\\int a_n x^n dx = \\frac{a_n}{n+1} x^{n+1} + C\\)."
            },
            {
                "id": "calcbc_t2_20",
                "topic": "Radius of Convergence",
                "difficulty": "medium",
                "question": "For \\(\\sum_{n=1}^\\infty \\frac{(x - 2)^n}{5^n}\\), the radius of convergence is:",
                "options": [
                    "2",
                    "3",
                    "5",
                    "10"
                ],
                "answer": "C",
                "explanation": "The geometric condition \\(|(x - 2)/5| < 1 \\implies |x - 2| < 5\\), giving radius of convergence \\(R = 5\\)."
            }
        ]
    },
    "ap-topic-csa-java": {
        "id": "ap-topic-csa-java",
        "title": "AP Computer Science A: Java Fundamentals & Control Flow",
        "subject": "AP Computer Science A",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "csa_1",
                "topic": "Java Basics",
                "difficulty": "easy",
                "question": "What is the result of `7 / 2` in Java?",
                "options": [
                    "3.5",
                    "3",
                    "3.0",
                    "Error"
                ],
                "answer": "B",
                "explanation": "Integer division truncates decimal: 7 / 2 = 3."
            }
        ]
    },
    "ap-topic-csa-oop": {
        "id": "ap-topic-csa-oop",
        "title": "AP Computer Science A: OOP & Inheritance",
        "subject": "AP Computer Science A",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "csa_2",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "Which keyword allows a subclass to invoke a constructor from its superclass?",
                "options": [
                    "this",
                    "super",
                    "extends",
                    "implements"
                ],
                "answer": "B",
                "explanation": "`super(...)` calls the superclass constructor."
            }
        ]
    },
    "ap-topic-csp-cyber": {
        "id": "ap-topic-csp-cyber",
        "title": "AP Computer Science Principles: Cybersecurity & Networks",
        "subject": "AP Computer Science Principles",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "csp_1",
                "topic": "Networks",
                "difficulty": "easy",
                "question": "Which protocol ensures secure, encrypted communication over the internet?",
                "options": [
                    "HTTP",
                    "HTTPS",
                    "FTP",
                    "IP"
                ],
                "answer": "B",
                "explanation": "HTTPS encrypts communications using SSL/TLS."
            }
        ]
    },
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
                "id": "pre_1",
                "topic": "Trigonometry",
                "difficulty": "easy",
                "question": "Find the period of \\(f(x) = \\sin(3x)\\).",
                "options": [
                    "\\(\\pi/3\\)",
                    "\\(2\\pi/3\\)",
                    "\\(\\pi\\)",
                    "\\(2\\pi\\)"
                ],
                "answer": "B",
                "explanation": "Period formula \\(T = 2\\pi / b = 2\\pi/3\\)."
            }
        ]
    },
    "ap-topic-stats-data": {
        "id": "ap-topic-stats-data",
        "title": "AP Statistics: Exploring Data & Probability",
        "subject": "AP Statistics",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "stat_1",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "If events A and B are independent with P(A) = 0.4 and P(B) = 0.5, what is P(A and B)?",
                "options": [
                    "0.1",
                    "0.2",
                    "0.9",
                    "0.45"
                ],
                "answer": "B",
                "explanation": "For independent events: \\(P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2\\)."
            }
        ]
    },
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
                "id": "bio_1",
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
            }
        ]
    },
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
                "id": "chm_1",
                "topic": "Bonding",
                "difficulty": "medium",
                "question": "What is the hybridization of the central atom in \\(CH_4\\)?",
                "options": [
                    "sp",
                    "sp2",
                    "sp3",
                    "sp3d"
                ],
                "answer": "C",
                "explanation": "Methane has 4 electron domains, forming \\(sp^3\\) hybrid orbitals."
            }
        ]
    },
    "ap-topic-env-ecosys": {
        "id": "ap-topic-env-ecosys",
        "title": "AP Environmental Science: Ecosystems & Biodiversity",
        "subject": "AP Environmental Science",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "env_1",
                "topic": "Ecology",
                "difficulty": "easy",
                "question": "Which biome is characterized by permafrost and low-growing vegetation?",
                "options": [
                    "Taiga",
                    "Tundra",
                    "Savanna",
                    "Temperate Forest"
                ],
                "answer": "B",
                "explanation": "Tundra features permanently frozen subsoil (permafrost)."
            }
        ]
    },
    "ap-topic-phys1-kinematics": {
        "id": "ap-topic-phys1-kinematics",
        "title": "AP Physics 1: Kinematics & Projectile Motion",
        "subtitle": "1D/2D motion, motion graphs, free fall, projectile trajectories and uniform circular motion",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Kinematics",
        "questions": [
            {
                "id": "tp_phys1_kin_1",
                "topic": "Kinematics",
                "difficulty": "easy",
                "question": "A ball is thrown upward with an initial velocity of 20 m/s. How long will the ball take to reach its maximum height?</p>",
                "options": [
                    "19.6 s",
                    "9.8 s",
                    "6.3 s",
                    "2.04 s"
                ],
                "answer": "D",
                "explanation": "Given the initial velocity of 20 m/s, we know that the ball is decelerated by gravity at a rate of 9.8 m/s<sup>2</sup>. Therefore, we need to know how long gravity will take to decelerate the ball to zero velocity. Clearly, from the definition of acceleration, dividing 20 m/s by 9.8 m/s<sup>2</sup> gives the answer: 2.04 s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_2",
                "topic": "Kinematics",
                "difficulty": "easy",
                "question": "An airplane lands on a runway with a velocity of 150 m/s. How far will it travel until it stops if its rate of deceleration is constant at −3 m/s<sup>2</sup>?</p>",
                "options": [
                    "525 m",
                    "3,750 m",
                    "6,235 m",
                    "9,813 m"
                ],
                "answer": "B",
                "explanation": "We do not know the time needed to stop, but we do know that the final velocity is zero. If we use the formula</p>\r\n\\[ v_y = v_0\\sin\\theta - gt = 40\\sin(30^\\circ) - (9.8)(1) = 20 - 9.8 = 10.2\\text{ m/s} \\]\r\n<p class=\"expt\">and substitute 150 m/s for the initial velocity and −3 m/s<sup>2</sup> for the deceleration, we get the answer: 3,750 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_3",
                "topic": "Kinematics",
                "difficulty": "easy",
                "question": "A ball is thrown downward from the top of a roof with a speed of 25 m/s. After 2 s, its velocity will be</p>",
                "options": [
                    "19.6 m/s",
                    "−5.4 m/s",
                    "−44.6 m/s",
                    "44.6 m/s"
                ],
                "answer": "C",
                "explanation": "The initial velocity is −25 m/s downward, so <i>v</i> = −(25) − (9.8)(2) = −44.6 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_4",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "A rocket is propelled upward with an acceleration of 25 m/s<sup>2</sup> for 5 s. After that time, the engine is shut off, and the rocket continues to move upward. The maximum height, in meters, that the rocket will reach is</p>",
                "options": [
                    "900",
                    "1,000",
                    "1,100",
                    "1,200"
                ],
                "answer": "C",
                "explanation": "The rocket accelerates from rest, so the first distance traveled in 5 s is given by</p>\r\n\\[ v_x = v_0\\cos(30^\\circ) = 40(0.866) = 34.6\\text{ m/s} \\]\r\n<p class=\"expt\">Substituting the values for time (5 s) and acceleration (25 m/s<sup>2</sup>) gives <i>y</i><sub>1</sub> = 312.5 m. After 5 s of accelerating, the rocket has a velocity of 125 m/s. After this time, the engine stops and the rocket is decelerated by gravity as it continues to move upward. The time to decelerate to zero is found by dividing 125 m/s by the acceleration of gravity. Thus, 125/9.8 = 12.76 s.</p>\r\n<p class=\"expt\">The distance traveled during that time is added to the first accelerated distance. The second distance is given by</p>\r\n\\[ v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(34.6)^2 + (10.2)^2} = 36.1\\text{ m/s} \\]\r\n<p class=\"expt\">The total distance traveled is therefore equal to 1,108 m or, rounded off, 1,100 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_5",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "The total distance traveled by the object during the indicated 14 s is</p>",
                "options": [
                    "7.5 m",
                    "25 m",
                    "62.5 m",
                    "77.5 m"
                ],
                "answer": "C",
                "explanation": "The total distance traveled by the object in 14 s is equal to the total area under the graph. Breaking the figure up into triangles and rectangles, we find that their areas add up to 62.5 m (recall that distance is a scalar).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_6",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "The total displacement of the object during the 14 s indicated is</p>",
                "options": [
                    "7.5 m",
                    "25 m",
                    "62.5 m",
                    "77.5 m"
                ],
                "answer": "A",
                "explanation": "The total displacement for the object is the sum of the positive (forward) and negative (backward) areas, representing the fact that the object moves away from the origin and then back (as indicated by the velocity vs. time graph), going below the <i>x</i>-axis. Adding and subtracting the proper areas: 35 − 2.5 − 20 − 5 = 7.5 m for the final displacement.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_7",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "The average velocity over the whole time, in meters per second, of the object is</p>",
                "options": [
                    "0",
                    "0.5",
                    "2.5",
                    "4.5"
                ],
                "answer": "B",
                "explanation": "Average velocity is the change in displacement for the object over the change in time (not distance). Since from question 6 we know the displacement change to be 7.5 m in 14 s, the average velocity is therefore 0.53 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_8",
                "topic": "Kinematics",
                "difficulty": "medium",
                "question": "What is the total change in velocity for the object whose acceleration versus time graph is given below?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w53\" role=\"presentation\" src=\"images/f062-01.jpg\"/></p>",
                "options": [
                    "40 m/s",
                    "−40 m/s",
                    "80 m/s",
                    "−80 m/s"
                ],
                "answer": "A",
                "explanation": "The change in velocity for the object is equal to the area under the graph, which is equal to 1/2 (+8)(10) = +40 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_9",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "An object has an initial velocity of 15 m/s. How long must it accelerate at a constant rate of 3 m/s<sup>2</sup> before its average velocity is equal to twice its initial velocity?</p>",
                "options": [
                    "5 s",
                    "10 s",
                    "15 s",
                    "20 s"
                ],
                "answer": "B",
                "explanation": "For uniformly accelerated motion, the average velocity is</p>\r\n\\[ a_c = \\frac{v^2}{r} = \\frac{4^2}{2} = 8\\text{ m/s}^2 \\]\r\n<p class=\"expt\">The question requires that the average velocity be equal to twice the initial velocity; thus, if the average velocity is 30 m/s, the final velocity attained must be 45 m/s. Now the question is, how long must the object accelerate from 15 m/s to achieve a speed of 45 m/s? A change in velocity of 30 m/s at a rate of 3 m/s<sup>2</sup> for 10 s is implied.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_10",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "A projectile is launched at an angle of 45° with a velocity of 250 m/s. If air resistance is neglected, the magnitude of the horizontal velocity of the projectile at the time it reaches maximum altitude is equal to</p>",
                "options": [
                    "0 m/s",
                    "175 m/s",
                    "200 m/s",
                    "250 m/s"
                ],
                "answer": "B",
                "explanation": "The horizontal component of velocity remains constant in the absence of resistive forces and is equal to <i>v</i><sub><i>i</i></sub> cos θ. Substituting the known numbers, we get <i>v</i><sub><i>x</i></sub> = (250)(0.7) = 175 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_11",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "A projectile is launched horizontally with a velocity of 25 m/s from the top of a 75-m height. How many seconds will the projectile take to reach the bottom?</p>",
                "options": [
                    "15.5",
                    "9.75",
                    "6.31",
                    "3.91"
                ],
                "answer": "D",
                "explanation": "The time to fall is given by the free-fall formula:</p>\r\n<p class=\"center1\">\\(t = \\sqrt{\\frac{2y}{g}}\\)</p>\r\n<p class=\"expt\">If we substitute the known numbers, we get 3.91 s for the time.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_12",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "At a launch angle of 45°, the range of a launched projectile is given by</p>",
                "options": [
                    "\\( 0 \\)",
                    "\\( 2\\text{ m/s}^2 \\)",
                    "\\( 4\\text{ m/s}^2 \\)",
                    "\\( 8\\text{ m/s}^2 \\)"
                ],
                "answer": "A",
                "explanation": "From the formula for range, we see that, at 45°, sin 2θ = 1, and so</p>\r\n<p class=\"center1\">\\(R = \\frac{v_i^2}{g}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_13",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "A projectile is launched at a certain angle. After 4 s, it hits the top of a building 500 m away. The height of the building is 50 m. The projectile was launched at an angle of</p>",
                "options": [
                    "14°",
                    "21°",
                    "37°",
                    "76°"
                ],
                "answer": "A",
                "explanation": "We know that, after 4 s, the projectile has traveled horizontally 500 m. Therefore, the horizontal velocity was a constant 125 m/s and is equal to <i>v</i><sub><i>i</i></sub> cos θ. We also know that, after 4 s, the <i>y</i>-position of the projectile is 50 m. Thus, we can write:</p>\r\n<p class=\"center1\">\\(50 = 4 v_i \\sin\\theta - 4.9(4)^2 = 4 v_i \\sin\\theta - 78.4\\)</p>\r\n<p class=\"expt\">Therefore, <i>v</i><sub><i>i</i></sub> cos θ = 125, <i>v</i><sub><i>i</i></sub> sin θ = 32.1, and tan θ = 0.2568, so θ = 14.4°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_kin_14",
                "topic": "Kinematics",
                "difficulty": "hard",
                "question": "The operator of a boat wishes to cross a 5-km-wide river that is flowing to the east at 10 m/s. He wants to reach the exact point on the opposite shore 15 min after starting. With what speed and in what direction should the boat travel?</p>",
                "options": [
                    "11.2 m/s at 26.6° E of N",
                    "8.66 m/s at 63.4° W of N",
                    "11.4 m/s at 60.9° W of N",
                    "8.66 m/s at 26.6° E of N"
                ],
                "answer": "C",
                "explanation": "The river is flowing at 10 m/s to the right (east), and the resultant desired velocity is 5.55 m/s up (north). Therefore, the actual velocity, relative to the river, is heading W of N. By the Pythagorean theorem, the velocity of the boat must be 11.4 m/s. The angle is given by the tangent function. In the diagram below, not drawn to scale but correct for orientation, tan (θ) = \\( a_c = \\frac{v^2}{r} \\) = 1.8. Therefore, θ = 60.9° W of N.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w60\" role=\"presentation\" src=\"images/f065-02.jpg\"/></p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
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
                "id": "p2_1",
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
            }
        ]
    },
    "ap-topic-physc-mech": {
        "id": "ap-topic-physc-mech",
        "title": "AP Physics C: Newtonian Mechanics & Rotation",
        "subject": "AP Physics C: Mechanics",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "pcm_1",
                "topic": "Rotation",
                "difficulty": "hard",
                "question": "Find the rotational kinetic energy of a solid cylinder of mass M and radius R rotating at angular speed \\(\\omega\\).",
                "options": [
                    "\\(\\frac{1}{2} M R^2 \\omega^2\\)",
                    "\\(\\frac{1}{4} M R^2 \\omega^2\\)",
                    "\\(M R^2 \\omega^2\\)",
                    "\\(\\frac{1}{3} M R^2 \\omega^2\\)"
                ],
                "answer": "B",
                "explanation": "\\(I = \\frac{1}{2} M R^2 \\implies K_{rot} = \\frac{1}{2} I \\omega^2 = \\frac{1}{4} M R^2 \\omega^2\\)."
            }
        ]
    },
    "ap-topic-physc-em": {
        "id": "ap-topic-physc-em",
        "title": "AP Physics C: Electricity & Magnetism",
        "subject": "AP Physics C: Electricity and Magnetism",
        "category": "Sciences",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "pcem_1",
                "topic": "Gauss Law",
                "difficulty": "hard",
                "question": "What is the total electric flux through a closed spherical surface containing a point charge q?",
                "options": [
                    "0",
                    "\\(q/\\varepsilon_0\\)",
                    "\\(q \\varepsilon_0\\)",
                    "\\(4\\pi q\\)"
                ],
                "answer": "B",
                "explanation": "Gauss Law states total flux \\(\\Phi_E = Q_{enclosed} / \\varepsilon_0\\)."
            }
        ]
    },
    "ap-topic-englang-rhet": {
        "id": "ap-topic-englang-rhet",
        "title": "AP English Language: Rhetorical Analysis & Claims",
        "subject": "AP English Language and Composition",
        "category": "English",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "el_1",
                "topic": "Rhetoric",
                "difficulty": "easy",
                "question": "Which rhetorical appeal relies on establishing speaker credibility and moral authority?",
                "options": [
                    "Logos",
                    "Pathos",
                    "Ethos",
                    "Kairos"
                ],
                "answer": "C",
                "explanation": "Ethos appeals to character, credibility, and authority."
            }
        ]
    },
    "ap-topic-englit-poetry": {
        "id": "ap-topic-englit-poetry",
        "title": "AP English Literature: Poetry & Literary Devices",
        "subject": "AP English Literature and Composition",
        "category": "English",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "elit_1",
                "topic": "Poetry",
                "difficulty": "medium",
                "question": "A 14-line poem written in iambic pentameter with an ABAB CDCD EFEF GG rhyme scheme is a:",
                "options": [
                    "Petrarchan Sonnet",
                    "Shakespearean Sonnet",
                    "Villanelle",
                    "Ode"
                ],
                "answer": "B",
                "explanation": "This structure defines an English or Shakespearean sonnet."
            }
        ]
    },
    "ap-topic-ush-early": {
        "id": "ap-topic-ush-early",
        "title": "AP US History: Colonial Era to Reconstruction",
        "subject": "AP United States History",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ush_1",
                "topic": "US History",
                "difficulty": "easy",
                "question": "Which 1803 Supreme Court case established the principle of judicial review?",
                "options": [
                    "McCulloch v. Maryland",
                    "Marbury v. Madison",
                    "Dred Scott v. Sandford",
                    "Plessy v. Ferguson"
                ],
                "answer": "B",
                "explanation": "Chief Justice John Marshall established judicial review in Marbury v. Madison."
            }
        ]
    },
    "ap-topic-world-global": {
        "id": "ap-topic-world-global",
        "title": "AP World History: Global Tapestry & Trade Networks",
        "subject": "AP World History: Modern",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "wh_1",
                "topic": "World History",
                "difficulty": "easy",
                "question": "Which major trade route connected East Asia with the Mediterranean world during the post-classical era?",
                "options": [
                    "Trans-Saharan Route",
                    "Silk Roads",
                    "Hanseatic League",
                    "Amber Road"
                ],
                "answer": "B",
                "explanation": "The Silk Roads facilitated Eurasian trade and cultural exchange."
            }
        ]
    },
    "ap-topic-euro-ren": {
        "id": "ap-topic-euro-ren",
        "title": "AP European History: Renaissance & Reformation",
        "subject": "AP European History",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "eh_1",
                "topic": "European History",
                "difficulty": "medium",
                "question": "In 1517, Martin Luther nailed which document to the door of Wittenberg Castle Church?",
                "options": [
                    "Edict of Worms",
                    "95 Theses",
                    "Peace of Augsburg",
                    "Institutes of Christian Religion"
                ],
                "answer": "B",
                "explanation": "The 95 Theses criticized papal indulgences and sparked the Protestant Reformation."
            }
        ]
    },
    "ap-topic-macro-gdp": {
        "id": "ap-topic-macro-gdp",
        "title": "AP Macroeconomics: GDP, Inflation & AD/AS",
        "subject": "AP Macroeconomics",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "mac_1",
                "topic": "Macroeconomics",
                "difficulty": "easy",
                "question": "Unemployment caused by changes in the business cycle is called:",
                "options": [
                    "Frictional",
                    "Structural",
                    "Cyclical",
                    "Seasonal"
                ],
                "answer": "C",
                "explanation": "Cyclical unemployment rises during economic downturns and recessions."
            }
        ]
    },
    "ap-topic-micro-supply": {
        "id": "ap-topic-micro-supply",
        "title": "AP Microeconomics: Supply, Demand & Elasticity",
        "subject": "AP Microeconomics",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "mic_1",
                "topic": "Microeconomics",
                "difficulty": "medium",
                "question": "If price elasticity of demand is 1.8, demand for the product is considered:",
                "options": [
                    "Inelastic",
                    "Unit Elastic",
                    "Elastic",
                    "Perfectly Inelastic"
                ],
                "answer": "C",
                "explanation": "An elasticity value greater than 1 indicates price elastic demand."
            }
        ]
    },
    "ap-topic-psych-cog": {
        "id": "ap-topic-psych-cog",
        "title": "AP Psychology: Brain, Sensation & Cognition",
        "subject": "AP Psychology",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "psy_1",
                "topic": "Psychology",
                "difficulty": "easy",
                "question": "Which brain structure acts as the primary relay station for sensory information?",
                "options": [
                    "Hippocampus",
                    "Thalamus",
                    "Amygdala",
                    "Cerebellum"
                ],
                "answer": "B",
                "explanation": "The thalamus routes sensory inputs to appropriate cortical areas."
            }
        ]
    },
    "ap-topic-usgov-const": {
        "id": "ap-topic-usgov-const",
        "title": "AP US Government: Constitutional Foundations",
        "subject": "AP United States Government and Politics",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "gov_1",
                "topic": "US Government",
                "difficulty": "easy",
                "question": "Which Federalist paper argued that a large republic is the best defense against factions?",
                "options": [
                    "Federalist No. 10",
                    "Federalist No. 51",
                    "Federalist No. 70",
                    "Federalist No. 78"
                ],
                "answer": "A",
                "explanation": "James Madison authored Federalist No. 10 addressing faction control."
            }
        ]
    },
    "ap-topic-compgov-sys": {
        "id": "ap-topic-compgov-sys",
        "title": "AP Comparative Government: Political Systems",
        "subject": "AP Comparative Government and Politics",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "cg_1",
                "topic": "Comparative Gov",
                "difficulty": "medium",
                "question": "Which country in the AP Comparative Gov curriculum is classified as a federal republic?",
                "options": [
                    "United Kingdom",
                    "China",
                    "Nigeria",
                    "Iran"
                ],
                "answer": "C",
                "explanation": "Nigeria is organized as a federal republic with multi-state government."
            }
        ]
    },
    "ap-topic-humgeo-pop": {
        "id": "ap-topic-humgeo-pop",
        "title": "AP Human Geography: Population & Spatial Demographics",
        "subject": "AP Human Geography",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "hg_1",
                "topic": "Demographics",
                "difficulty": "medium",
                "question": "In the Demographic Transition Model, Stage 2 is characterized by:",
                "options": [
                    "High birth rate and rapid decline in death rate",
                    "Low birth and death rates",
                    "High death rate and low birth rate",
                    "Declining birth rate and rising death rate"
                ],
                "answer": "A",
                "explanation": "Stage 2 experiences rapid population growth due to declining death rates."
            }
        ]
    },
    "ap-topic-afam-hist": {
        "id": "ap-topic-afam-hist",
        "title": "AP African American Studies: Movements & Culture",
        "subject": "AP African American Studies",
        "category": "History & Social",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "af_1",
                "topic": "African American Studies",
                "difficulty": "medium",
                "question": "The Harlem Renaissance of the 1920s was primarily a flourishing of:",
                "options": [
                    "Industrial technology",
                    "African American literature, art, and music",
                    "Political party realignment",
                    "Agricultural expansion"
                ],
                "answer": "B",
                "explanation": "Harlem was a vibrant hub for Black creative and intellectual expression."
            }
        ]
    },
    "ap-topic-arthist-ancient": {
        "id": "ap-topic-arthist-ancient",
        "title": "AP Art History: Ancient Mediterranean & Global Prehistory",
        "subject": "AP Art History",
        "category": "Arts",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ah_1",
                "topic": "Art History",
                "difficulty": "easy",
                "question": "The Parthenon in Athens, Greece, was constructed in which architectural order?",
                "options": [
                    "Doric",
                    "Ionic",
                    "Corinthian",
                    "Composite"
                ],
                "answer": "A",
                "explanation": "The Parthenon is a premier example of Classical Doric architecture."
            }
        ]
    },
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
                "id": "mt_1",
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
            }
        ]
    },
    "ap-topic-2dart-portfolio": {
        "id": "ap-topic-2dart-portfolio",
        "title": "AP 2-D Art and Design: Composition & Design Elements",
        "subject": "AP 2-D Art and Design",
        "category": "Arts",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "art2d_1",
                "topic": "2-D Art",
                "difficulty": "easy",
                "question": "Which principle of design refers to the visual weight distribution in a 2-D artwork?",
                "options": [
                    "Balance",
                    "Proportion",
                    "Rhythm",
                    "Contrast"
                ],
                "answer": "A",
                "explanation": "Balance addresses symmetry, asymmetry, and weight distribution."
            }
        ]
    },
    "ap-topic-3dart-sculpture": {
        "id": "ap-topic-3dart-sculpture",
        "title": "AP 3-D Art and Design: Form, Space & Materials",
        "subject": "AP 3-D Art and Design",
        "category": "Arts",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "art3d_1",
                "topic": "3-D Art",
                "difficulty": "easy",
                "question": "Sculpting by removing material from a block of wood or stone is called:",
                "options": [
                    "Additive process",
                    "Subtractive process",
                    "Modeling",
                    "Assembling"
                ],
                "answer": "B",
                "explanation": "Carving is a subtractive process."
            }
        ]
    },
    "ap-topic-drawing-mark": {
        "id": "ap-topic-drawing-mark",
        "title": "AP Drawing: Mark-Making & Line Mechanics",
        "subject": "AP Drawing",
        "category": "Arts",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "drw_1",
                "topic": "Drawing",
                "difficulty": "easy",
                "question": "Using fine parallel lines drawn close together to create value and shading is called:",
                "options": [
                    "Hatching",
                    "Stippling",
                    "Blending",
                    "Sfumato"
                ],
                "answer": "A",
                "explanation": "Hatching uses parallel lines to build tonal value."
            }
        ]
    },
    "ap-topic-spanish-vocab": {
        "id": "ap-topic-spanish-vocab",
        "title": "AP Spanish Language: Communication & Cultural Themes",
        "subject": "AP Spanish Language and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "sp_1",
                "topic": "Spanish",
                "difficulty": "easy",
                "question": "Which tense is used to express habitual past actions in Spanish?",
                "options": [
                    "Preterite",
                    "Imperfect",
                    "Future",
                    "Conditional"
                ],
                "answer": "B",
                "explanation": "The imperfect tense expresses repeated or ongoing past actions."
            }
        ]
    },
    "ap-topic-spanishlit-reading": {
        "id": "ap-topic-spanishlit-reading",
        "title": "AP Spanish Literature: Peninsular & Hispanic Text Analysis",
        "subject": "AP Spanish Literature and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "split_1",
                "topic": "Spanish Lit",
                "difficulty": "medium",
                "question": "Don Quijote de la Mancha was written by which famous Spanish author?",
                "options": [
                    "Gabriel García Márquez",
                    "Miguel de Cervantes",
                    "Federico García Lorca",
                    "Pablo Neruda"
                ],
                "answer": "B",
                "explanation": "Cervantes published Don Quijote in 1605."
            }
        ]
    },
    "ap-topic-french-lang": {
        "id": "ap-topic-french-lang",
        "title": "AP French Language: Interpretive & Cultural Communication",
        "subject": "AP French Language and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "fr_1",
                "topic": "French",
                "difficulty": "easy",
                "question": "Which French subjunctive trigger requires the use of the subjonctif?",
                "options": [
                    "Il est cierto que",
                    "Il faut que",
                    "Il est vrai que",
                    "Je pense que"
                ],
                "answer": "B",
                "explanation": "'Il faut que' (necessity) requires the subjunctive mood."
            }
        ]
    },
    "ap-topic-german-lang": {
        "id": "ap-topic-german-lang",
        "title": "AP German Language: German Culture & Grammar",
        "subject": "AP German Language and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ger_1",
                "topic": "German",
                "difficulty": "medium",
                "question": "Which German preposition always takes the dative case?",
                "options": [
                    "durch",
                    "mit",
                    "für",
                    "gegen"
                ],
                "answer": "B",
                "explanation": "'Mit' strictly governs the dative case."
            }
        ]
    },
    "ap-topic-chinese-lang": {
        "id": "ap-topic-chinese-lang",
        "title": "AP Chinese Language: Chinese Culture & Characters",
        "subject": "AP Chinese Language and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "cn_1",
                "topic": "Chinese",
                "difficulty": "easy",
                "question": "The Spring Festival in China is also commonly known as:",
                "options": [
                    "Mid-Autumn Festival",
                    "Chinese New Year",
                    "Dragon Boat Festival",
                    "Lantern Festival"
                ],
                "answer": "B",
                "explanation": "Chunjie (Spring Festival) marks the Lunar New Year."
            }
        ]
    },
    "ap-topic-japanese-lang": {
        "id": "ap-topic-japanese-lang",
        "title": "AP Japanese Language: Communication & Culture",
        "subject": "AP Japanese Language and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "jp_1",
                "topic": "Japanese",
                "difficulty": "easy",
                "question": "Which Japanese writing system is primarily used for foreign loanwords?",
                "options": [
                    "Hiragana",
                    "Katakana",
                    "Kanji",
                    "Romaji"
                ],
                "answer": "B",
                "explanation": "Katakana transcribes loanwords and foreign names."
            }
        ]
    },
    "ap-topic-italian-lang": {
        "id": "ap-topic-italian-lang",
        "title": "AP Italian Language: Language Dynamics & Culture",
        "subject": "AP Italian Language and Culture",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "it_1",
                "topic": "Italian",
                "difficulty": "easy",
                "question": "The Italian past tense form 'passato prossimo' uses which auxiliary verbs?",
                "options": [
                    "avere or essere",
                    "dovere or potere",
                    "fare or stare",
                    "andare or venire"
                ],
                "answer": "A",
                "explanation": "Passato prossimo is formed using avere or essere."
            }
        ]
    },
    "ap-topic-latin-caesar": {
        "id": "ap-topic-latin-caesar",
        "title": "AP Latin: Vergil Aeneid & Caesar De Bello Gallico",
        "subject": "AP Latin",
        "category": "Languages",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "lat_1",
                "topic": "Latin",
                "difficulty": "hard",
                "question": "The meter of Vergil's Aeneid is:",
                "options": [
                    "Iambic Pentameter",
                    "Dactylic Hexameter",
                    "Hendecasyllabic",
                    "Elegiac Couplet"
                ],
                "answer": "B",
                "explanation": "Epic poetry like the Aeneid is composed in dactylic hexameter."
            }
        ]
    },
    "ap-topic-seminar-quest": {
        "id": "ap-topic-seminar-quest",
        "title": "AP Seminar: QUEST Framework & Argumentation",
        "subject": "AP Seminar",
        "category": "Capstone",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "sem_1",
                "topic": "Seminar",
                "difficulty": "easy",
                "question": "In the AP Seminar QUEST framework, what does the letter 'E' stand for?",
                "options": [
                    "Evaluate Line of Reasoning",
                    "Examine Evidence",
                    "Explore Options",
                    "Establish Context"
                ],
                "answer": "B",
                "explanation": "'E' stands for Evaluate Evidence in QUEST."
            }
        ]
    },
    "ap-topic-research-methods": {
        "id": "ap-topic-research-methods",
        "title": "AP Research: Methodology & Defense",
        "subject": "AP Research",
        "category": "Capstone",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "res_1",
                "topic": "Research",
                "difficulty": "medium",
                "question": "A detailed description of the tools, procedures, and data collection techniques in a research paper is the:",
                "options": [
                    "Literature Review",
                    "Methodology",
                    "Discussion",
                    "Abstract"
                ],
                "answer": "B",
                "explanation": "The Methodology section explains data collection and analytical methods."
            }
        ]
    },
    "ap-mock-full-1": {
        "id": "ap-mock-full-1",
        "title": "AP Calculus AB Full Practice Exam 1",
        "subtitle": "Official AP Exam Format - Section I: 20 MCQs | Section II: 3 Free Response Questions",
        "timeLimitMinutes": 90,
        "testType": "Full Mock",
        "subject": "AP Calculus AB",
        "sections": [
            {
                "id": "sec1",
                "title": "Section 1: Multiple Choice Questions (MCQ)",
                "timeMinutes": 60
            },
            {
                "id": "sec2",
                "title": "Section 2: Free Response Questions (FRQ)",
                "timeMinutes": 30
            }
        ],
        "questions": [
            {
                "id": "m_1",
                "section": "sec1",
                "type": "MCQ",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Evaluate \\(\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}\\).",
                "options": [
                    "0",
                    "0.5",
                    "1",
                    "Undefined"
                ],
                "answer": "B",
                "explanation": "L'Hôpital gives \\(\\frac{\\sin x}{2x} \\to 1/2 = 0.5\\)."
            },
            {
                "id": "m_2",
                "section": "sec1",
                "type": "MCQ",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "If \\(f(x) = \\arctan(3x)\\), find \\(f'(x)\\).",
                "options": [
                    "\\(\\frac{3}{1+9x^2}\\)",
                    "\\(\\frac{1}{1+9x^2}\\)",
                    "\\(\\frac{3}{1+3x^2}\\)",
                    "\\(\\frac{1}{\\sqrt{1-9x^2}}\\)"
                ],
                "answer": "A",
                "explanation": "\\(\\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}\\)."
            },
            {
                "id": "m_3",
                "section": "sec2",
                "type": "FRQ",
                "topic": "Particle Motion",
                "difficulty": "hard",
                "question": "A particle moves along x-axis with v(t) = 3t^2 - 12t + 9. Find total distance from t = 0 to t = 4.",
                "isFRQ": true,
                "rubric": "3 pts for splitting integral at t=1,3.",
                "options": [
                    "Submit text solution below"
                ],
                "answer": "FRQ_MANUAL_EVALUATION"
            }
        ]
    },
    "ap-topic-phys1-vectors": {
        "id": "ap-topic-phys1-vectors",
        "title": "AP Physics 1: Vectors & Trigonometry",
        "subtitle": "Coordinate systems, vector components, vector addition and trigonometry",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Vectors & Trigonometry",
        "questions": [
            {
                "id": "tp_phys1_vec_1",
                "topic": "Vectors & Trigonometry",
                "difficulty": "easy",
                "question": "A vector is given by its components, <i>A</i><sub><i>x</i></sub> = 2.5 and <i>A</i><sub><i>y</i></sub> = 7.5. What angle does vector \\vec{A} make with the positive <i>x</i>-axis?</p>",
                "options": [
                    "72°",
                    "18°",
                    "25°",
                    "50°"
                ],
                "answer": "A",
                "explanation": "The angle for the vector to the positive <i>x</i>-axis is given by</p>\r\n\\[ \\tan\\theta = \\frac{A_y}{A_x} = \\frac{7.5}{2.5} = 3 \\implies \\theta = 71.5^\\circ \\approx 72^\\circ \\]\r\n<p class=\"exp\">Thus, tan θ = 3 and θ = 71.5° or, rounded off, 72°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_2",
                "topic": "Vectors & Trigonometry",
                "difficulty": "easy",
                "question": "Which pair of vectors could produce a resultant of 35?</p>",
                "options": [
                    "15 and 15",
                    "20 and 20",
                    "30 and 70",
                    "20 and 60"
                ],
                "answer": "B",
                "explanation": "Two vectors have a maximum resultant, whose magnitude is equal to the numerical sum of the vector magnitudes, when the angle between vectors is 0°. The resultant is a minimum at 180°, and the magnitude is equal to the numerical difference between the magnitudes. When this logic is used, only pair (20, 20) produces a maximum and minimum set that could include the given value of 35 if the angle were specified. All the others have maximum and minimum resultants that do not include 35 in their range.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_3",
                "topic": "Vectors & Trigonometry",
                "difficulty": "easy",
                "question": "A vector has a magnitude of 17 units and makes an angle of 20° with the positive <i>x</i>-axis. The magnitude of the horizontal component of this vector is</p>",
                "options": [
                    "16 units",
                    "4.1 units",
                    "5.8 units",
                    "50 units"
                ],
                "answer": "A",
                "explanation": "The formula for the horizontal component of a vector \\vec{A} is <i>A</i><sub><i>x</i></sub> = |\\vec{A} | cos θ, where |\\vec{A} | is the magnitude of \\vec{A}. When the known values are used, values <i>A</i><sub><i>x</i></sub> = 17 cos 20 = 15.9 units.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_4",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "As the angle between a given vector and the horizontal axis increases from 0° to 90°, the magnitude of the vertical component of this vector</p>",
                "options": [
                    "decreases",
                    "increases and then decreases",
                    "decreases and then increases",
                    "increases"
                ],
                "answer": "D",
                "explanation": "The vertical component of a vector is proportional to the sine of the angle, which increases to a maximum at 90°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_5",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Vector \\vec{A} has a magnitude of 10 units and makes an angle of 30° with the horizontal <i>x</i>-axis. Vector \\vec{B} has a magnitude of 25 units and makes an angle of 50° with the negative <i>x</i>-axis. What is the magnitude of the resultant of these two vectors?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w31\" role=\"presentation\" src=\"images/f040-01.jpg\"/></p>",
                "options": [
                    "20",
                    "35",
                    "15",
                    "25"
                ],
                "answer": "D",
                "explanation": "Form the components of each vector and then add these components, remembering the sign conventions; right and up are positive values. Thus, we have <i>A</i><sub><i>x</i></sub> = 10 cos 30 = 8.66 and <i>A</i><sub><i>y</i></sub> = 10 sin 30 = 5, <i>B</i><sub><i>x</i></sub> = −25 cos 50 = −16.06 and <i>B</i><sub><i>y</i></sub> = 25 sin 50 = 19.15.</p>\r\n<p class=\"exp\">The components of the resultant are <i>C</i><sub><i>x</i></sub> = <i>A</i><sub><i>x</i></sub> + <i>B</i><sub><i>x</i></sub> = 8.66 − 16.06, so <i>C</i><sub><i>x</i></sub> = −7.4 units and <i>C</i><sub><i>y</i></sub> = <i>A</i><sub><i>y</i></sub> + <i>B</i><sub><i>y</i></sub> = 5 + 19.15 = 24.15. The magnitude of this resultant vector is given by</p>\r\n\\[ A_x = A\\cos\\theta = 10\\cos(30^\\circ) = 8.66, \\quad B_x = -25\\cos(50^\\circ) = -16.07 \\]\r\n<p class=\"exp\">which rounds to |\\vec{C}| = 25 units.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_6",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Two concurrent vectors have magnitudes of 3 units and 8 units. The difference between these vectors is 8 units. The angle between these two vectors is</p>",
                "options": [
                    "34°",
                    "56°",
                    "79°",
                    "113°"
                ],
                "answer": "C",
                "explanation": "Use the law of cosines where <i>a</i> = 3, <i>b</i> = 8, and <i>c</i> = 8, and solve for cos θ:</p>\r\n\\[ A_y = A\\sin\\theta = 10\\sin(30^\\circ) = 5.0, \\quad B_y = 25\\sin(50^\\circ) = 19.15 \\]\r\n<p class=\"exp\">Solving gives cos θ = 0.1875 and θ = 79°.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_7",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Which of the following sets of displacements have equal resultants when performed in the order given?</p>",
                "options": [
                    "I.6 m east, 9 m north, 12 m west",
                    "II.6 m north, 9 m west, 12 m east",
                    "III.6 m east, 12 m west, 9 m north",
                    "IV.9 m north, 6 m east, 12 m west"
                ],
                "answer": "C",
                "explanation": "Vectors can be added in any order. The only requirement is that the vectors have the same magnitude and direction as they are shuffled. A look at the four sets of displacements indicates that I, III, and IV consist of the same vectors listed in different orders. These three sets will produce the same resultant.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_8",
                "topic": "Vectors & Trigonometry",
                "difficulty": "medium",
                "question": "Which vector represents the direction of the two concurrent vectors shown below?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w36\" role=\"presentation\" src=\"images/f041-01.jpg\"/></p>",
                "options": [
                    "\\( 0^\\circ \\)",
                    "\\( 30^\\circ \\)",
                    "\\( 45^\\circ \\)",
                    "\\( 60^\\circ \\)"
                ],
                "answer": "C",
                "explanation": "Sketch the vectors head to tail as if forming a vector triangle in construction. The resultant is drawn from the tail of the first vector to the head of the second. Choose the horizontal vector as the first one; then choice (C) is the general direction of the resultant.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_9",
                "topic": "Vectors & Trigonometry",
                "difficulty": "hard",
                "question": "Three forces act concurrently on a point <i>P</i> as shown below. Which vector represents the direction of the resultant force on point <i>P</i>?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w35\" role=\"presentation\" src=\"images/f041-02.jpg\"/></p>",
                "options": [
                    "\\( 0^\\circ \\)",
                    "\\( 30^\\circ \\)",
                    "\\( 60^\\circ \\)",
                    "\\( 90^\\circ \\)"
                ],
                "answer": "B",
                "explanation": "Sketch the vectors in any order, as shown below. Draw the resultant from the tail of the first vector to the head of the last.</p>\r\n\\[ R = \\sqrt{R_x^2 + R_y^2} = \\sqrt{(-7.41)^2 + (24.15)^2} \\approx 25.3 \\]</li>\r\n<li>"
            },
            {
                "id": "tp_phys1_vec_10",
                "topic": "Vectors & Trigonometry",
                "difficulty": "hard",
                "question": "On a baseball field, first base is about 30 m away from home plate. A batter gets a hit and runs toward first base. She runs 3 m past the base and then runs back to stand on it. The magnitude of her final displacement from home plate is</p>",
                "options": [
                    "27 m",
                    "30 m",
                    "33 m",
                    "36 m"
                ],
                "answer": "B",
                "explanation": "The displacement is in the direction of first base and is equal in magnitude to the straight-line distance between home plate and first base (30 m).</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
    "ap-topic-phys1-dynamics": {
        "id": "ap-topic-phys1-dynamics",
        "title": "AP Physics 1: Forces & Newton's Laws of Motion",
        "subtitle": "Newton's 3 laws, free-body diagrams, static & kinetic friction, inclined planes and central forces",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Newton's Laws & Forces",
        "questions": [
            {
                "id": "tp_phys1_dyn_1",
                "topic": "Newton's Laws & Forces",
                "difficulty": "easy",
                "question": "In the situation shown below, what is the tension in string 1?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w51\" role=\"presentation\" src=\"images/f082-01.jpg\"/></p>",
                "options": [
                    "69.3 N",
                    "98 N",
                    "138.6 N",
                    "147.6 N"
                ],
                "answer": "A",
                "explanation": "We need to apply the second law for static equilibrium. This means that we must resolve the tensions into their <i>x</i>- and <i>y</i>-components. For <i>T</i><sub>1</sub>, we have <i>T</i><sub>1</sub> cos 45 and <i>T</i><sub>1</sub> sin 45. In equilibrium, the sum of all the <i>x</i> forces must equal zero. This means that <i>T</i><sub>1</sub> cos 45 = <i>T</i><sub>2</sub> (since <i>T</i><sub>2</sub> is entirely horizontal). The <i>y</i>-component of <i>T</i><sub>1</sub> must balance the weight = <i>mg</i> = 49 N. Thus, <i>T</i><sub>1</sub> sin 45 = 49 N and <i>T</i><sub>1</sub> = 69.3 N.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w28\" role=\"presentation\" src=\"images/f085-01.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_2",
                "topic": "Newton's Laws & Forces",
                "difficulty": "easy",
                "question": "Two masses, <i>M</i> and <i>m</i>, are hung over a massless, frictionless pulley as shown below. If <i>M</i> &gt; <i>m</i>, what is the downward acceleration of mass <i>M</i>?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w51\" role=\"presentation\" src=\"images/f082-02.jpg\"/></p>",
                "options": [
                    "<i>g</i>",
                    "\\( \\mu_s = 0.5 \\)",
                    "\\( \\mu_s > 0.5 \\)",
                    "\\( \\mu_s < 0.5 \\)"
                ],
                "answer": "B",
                "explanation": "The free-body diagrams for both masses, <i>M</i> and <i>m</i>, look like this:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w43\" role=\"presentation\" src=\"images/f085-02.jpg\"/></p>\r\n<p class=\"exp\">The large mass is accelerating downward, while the small mass is accelerating upward. The tension in the string is directed upward, while gravity, given by the weight, is directed downward. Using the second law for accelerated motion, we must show that for each mass, ∑<i>F</i><sub><i>y</i></sub> = <i>ma</i>. Thus, we have</p>\r\n<p class=\"center1\">\\(T - Mg = -Ma \\text{ and } T - mg = ma\\)</p>\r\n<p class=\"exp\">Eliminating the tension <i>T</i> and solving for <i>a</i> gives us (<i>M</i> − <i>m</i>)<i>g</i>/(<i>M</i> + <i>m</i>).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_3",
                "topic": "Newton's Laws & Forces",
                "difficulty": "easy",
                "question": "A 0.25-kg mass is attached to a string and swung in a vertical circle whose radius is 0.75 m. At the bottom of the circle, the mass is observed to have a speed of 10 m/s. What is the magnitude of the tension in the string at that point?</p>",
                "options": [
                    "2.45 N",
                    "5.78 N",
                    "22.6 N",
                    "35.7 N"
                ],
                "answer": "D",
                "explanation": "A sketch of the situation is shown below:</p>\r\n<p class=\"center1\">\\(\\text{[Diagram of vertical circle: radius } r = 0.5\\text{ m}, \\text{mass } m, \\text{tension } \\vec{T}, \\text{gravity } m\\vec{g}]\\)</p>\r\n<p class=\"exp\">At the lowest point, the downward force of gravity is opposed by the upward tension in the string. Note that doing a quick tip-to-tail graphical solution of the force vectors must result in an upward (inward) net force. Thus, we can write</p>\r\n<p class=\"center1\">\\(T - mg = \\frac{mv^2}{r}\\)</p>\r\n<p class=\"exp\">Substituting in the given values and solving for <i>T</i> gives us 35.7 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_4",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A car and driver have a combined mass of 1,000 kg. The car passes over the top of a hill that has a radius of curvature equal to 10 m. The speed of the car at that instant is 5 m/s. What is the force of the hill on the car as it passes over the top?</p>",
                "options": [
                    "7,300 N up",
                    "7,300 N down",
                    "12,300 N up",
                    "12,300 N down"
                ],
                "answer": "A",
                "explanation": "As the car goes over the hill, the force that the hill exerts on the car is the normal force, \\vec{N}. This is opposed, however, by the downward force of gravity. The combination produces (as in question 3) the centripetal force \\vec{F}<i><sub>c</sub></i>. Using our circular motion convention of inward forces being positive, we can write</p>\r\n<p class=\"center1\">\\(mg - N = \\frac{mv^2}{r}\\)</p>\r\n<p class=\"exp\">A sketch is shown below. Note that doing a quick tip-to-tail graphical solution of the force vectors must result in a downward (inward) net force. Substituting in the given values and solving for <i>N</i> gives 7,300 N upward.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w53\" role=\"presentation\" src=\"images/f085-07.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_5",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A hockey puck with a mass of 0.3 kg is sliding along ice that can be considered frictionless. The puck’s velocity is 20 m/s. The puck now crosses over onto a floor that has a coefficient of kinetic friction equal to 0.35. How far will the puck travel across the floor before it stops?</p>",
                "options": [
                    "3 m",
                    "87 m",
                    "48 m",
                    "58 m"
                ],
                "answer": "D",
                "explanation": "With horizontal motion, the normal force is equal to the force of gravity. When the puck is moving with constant velocity, no net force is acting on it. Thus, when friction acts to slow the puck down, the friction is the only net force. Therefore, we write</p>\r\n<p class=\"center1\">\\(f = \\mu N = \\mu mg = -ma\\)</p>\r\n<p class=\"exp\">(since the puck is decelerating). Substituting the known numbers gives a deceleration of −3.43 m/s<sup>2</sup>. Now, the final velocity will be zero; and since the time to stop is unknown, we use the following kinematic expression to solve for the stopping distance:</p>\r\n<p class=\"center1\">\\(-v_i^2 = 2ax\\)</p>\r\n<p class=\"exp\">Substituting the known numbers, we obtain approximately 58 m as the distance the puck will travel before stopping.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_6",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A spring with a stiffness constant <i>k</i> = 50 N/m has a natural length of 0.45 m. It is attached to the top of an incline that makes a 30° angle with the horizontal. The incline is 2.4 m long. A mass of 2 kg is attached to the spring, causing it to be stretched down the incline. How far down the incline does the end of the spring rest?</p>",
                "options": [
                    "0.196 m",
                    "0.45 m",
                    "0.646 m",
                    "0.835 m"
                ],
                "answer": "C",
                "explanation": "A sketch of the situation is given below. The spring constant is <i>k</i> = 50 N/m.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w60\" role=\"presentation\" src=\"images/f086-03.jpg\"/></p>\r\n<p class=\"exp\">According to Hooke’s law, <i>F</i><sub><i>s</i></sub> = <i>kx</i>, where <i>x</i> is the elongation in excess of the spring’s natural length (here 0.45 m). The force, in this case, is provided by the component of weight parallel to the incline, which is given by <i>mg</i> sin θ. Substituting the known numbers gives us an elongation of <i>x</i> = 0.196 m. Since this must be in excess of the spring’s natural length, the answer is 0.646 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_7",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A 20-N force is pushing two blocks horizontally along a frictionless floor as shown below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w62\" role=\"presentation\" src=\"images/f083-01.jpg\"/></p>\r\n<p class=\"exp\">What is the force that the 8-kg mass exerts on the 2-kg mass?</p>",
                "options": [
                    "4 N",
                    "8 N",
                    "16 N",
                    "20 N"
                ],
                "answer": "C",
                "explanation": "The 20-N force is pushing on a total mass of 10 kg. Thus, using \\vec{F} = <i>m</i>\\vec{a}, we have the acceleration of both blocks equal to 2 m/s<sup>2</sup>. We draw a free-body diagram for the 2-kg mass as shown below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w71\" role=\"presentation\" src=\"images/f086-04.jpg\"/></p>\r\n<p class=\"exp\">Let <i>P</i> represent the force that the 8-kg mass exerts on the 2-kg mass. Writing the second law of motion, we get \\vec{F} − <i>P</i> = <i>m</i>\\vec{a}. To find <i>P</i>, we substitute the known numbers: 20 − <i>P</i> = (2)(2) = 4. Thus, <i>P</i> = 16 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_8",
                "topic": "Newton's Laws & Forces",
                "difficulty": "medium",
                "question": "A force of 20 N acts horizontally on a mass of 10 kg being pushed along a frictionless incline that makes a 30° angle with the horizontal, as shown below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w48\" role=\"presentation\" src=\"images/f083-02.jpg\"/></p>\r\n<p class=\"exp\">The magnitude of the acceleration of the mass up the incline is equal to</p>",
                "options": [
                    "1.9 m/s<sup>2</sup>",
                    "2.2 m/s<sup>2</sup>",
                    "3.17 m/s<sup>2</sup>",
                    "3.87 m/s<sup>2</sup>"
                ],
                "answer": "C",
                "explanation": "From the given diagram, we see that the force necessary to move the mass up the incline must be in excess of the component force of gravity trying to pull the mass down the incline. The component of gravity down the incline is always given by <i>mg</i> sin θ. Resolving the given force into a component parallel to the incline and a component perpendicular to the incline, we find that the force up the incline is, at the same angle, <i>F</i> cos θ. Thus, in general we would write:</p>\r\n<p class=\"center1\">\\(F\\cos\\theta - mg\\sin\\theta = ma\\)</p>\r\n<p class=\"exp\">Substituting the known numbers gives <i>a</i> = 3.17 m/s<span><sup>2</sup></span>.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_9",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "According to the diagram below, what is the tension in the connecting string if the table is frictionless?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w66\" role=\"presentation\" src=\"images/f083-03.jpg\"/></p>",
                "options": [
                    "6.4 N",
                    "13 N",
                    "19.7 N",
                    "25 N"
                ],
                "answer": "C",
                "explanation": "From the given diagram, we see that the 4-kg mass is accelerating to the right and the 2-kg mass is accelerating up. Thus, we write that the sum of all forces, in each direction, equals <i>ma</i>. In the <i>x</i>-direction, we have (since the tension in the string will try to pull left) −<i>T</i> + 20 = 4<i>a</i>. In the <i>y</i>-direction, the tension pulls up against gravity. We therefore write <i>T</i> − 19.6 = 2<i>a</i>. Solving for <i>T</i> by eliminating <i>a</i>, we get <i>T</i> = 19.7 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_dyn_10",
                "topic": "Newton's Laws & Forces",
                "difficulty": "hard",
                "question": "A mass, <i>M</i>, is released from rest on an incline that makes a 42° angle with the horizontal. In 3 s, the mass is observed to have gone a distance of 3 m. What is the coefficient of kinetic friction between the mass and the surface of the incline?</p>",
                "options": [
                    "0.8",
                    "0.7",
                    "0.6",
                    "0.5"
                ],
                "answer": "A",
                "explanation": "We know that the mass accelerates from rest uniformly in 3 s and goes a distance of 3 m. Thus, we can say that</p>\r\n<p class=\"center1\">\\(d = \\frac{1}{2}at^2\\)</p>\r\n<p class=\"exp\">Substituting the known number gives us an acceleration of 0.67 m/s<sup>2</sup>. On an incline, the normal force is given by <i>mg</i> cos θ, and so friction can be expressed as <i>f</i> = <i>μmg</i> cos θ. Once again, this force opposes the downward force of gravity parallel to the incline, given by −<i>mg</i> sin θ. In the downward direction, these two forces are added together and set equal to −<i>ma</i>. Thus, we write for this case</p>\r\n<p class=\"center1\">\\(\\mu (M)(9.8)\\cos 42^\\circ - (M)(9.8)\\sin 42^\\circ = -(M)(0.67)\\)</p>\r\n<p class=\"exp\">The masses all cancel out, and solving for <i>μ</i> gives 0.8 as the coefficient of kinetic friction.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
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
                "id": "tp_phys1_ene_1",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "Which of the following are the units for the spring constant, <span><i>k</i></span>?</p>",
                "options": [
                    "kg · m<sup>2</sup>/s<sup>2</sup>",
                    "kg · s<sup>2</sup>",
                    "kg · m/s",
                    "kg/s<sup>2</sup>"
                ],
                "answer": "D",
                "explanation": "The units for the spring or force constant are provided by Hooke’s law, <i>F</i> = <i>kx</i>, and are newtons per meter. Recall that 1 N = 1 kg m/s<sup>2</sup>, so dividing by <i>m</i> gives kg/s<sup>2</sup>.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_2",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "Which of the following is an expression for mechanical power?</p>",
                "options": [
                    "<i>Ft</i>/<i>m</i>",
                    "<i>F</i> <sup>2</sup><i>m</i>/<i>a</i>",
                    "<i>Fm</i><sup>2</sup>/<i>t</i>",
                    "<i>F</i> <sup>2</sup><i>t</i>/<i>m</i>"
                ],
                "answer": "D",
                "explanation": "Power is equal to work done divided by time. Therefore,</p>\r\n<p class=\"center1\">\\(P = \\frac{W}{t} = \\frac{Fd}{t}\\)</p>\r\n<p class=\"exp\">Using some algebra and kinematics, we see that</p>\r\n<p class=\"center1\">\\(P = \\frac{Fd}{t} = Fv = Fat = F\\left(\\frac{F}{m}\\right)t = \\frac{F^2 t}{m}\\)</p>\r\n<p class=\"exp\">You could also get the answer by verifying which expression has units of joules per second.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_3",
                "topic": "Energy & Work",
                "difficulty": "easy",
                "question": "A pendulum consisting of a mass <i>m</i> attached to a light string of length <i>ℓ</i> is displaced from its rest position, making an angle θ with the vertical. It is then released and allowed to swing freely. Which of the following expressions represents the velocity of the mass when it reaches its lowest position?</p>",
                "options": [
                    "\\( 0.5\\text{ J} \\)",
                    "\\( 1.0\\text{ J} \\)",
                    "\\( 2.0\\text{ J} \\)",
                    "\\( 4.0\\text{ J} \\)"
                ],
                "answer": "A",
                "explanation": "Consider the sketch below of the situation:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w55\" role=\"presentation\" src=\"images/f104-03.jpg\"/></p>\r\n<p class=\"exp\">From the geometry of the sketch, note that</p>\r\n<p class=\"center1\">\\(h = \\ell - \\ell\\cos\\theta = \\ell(1 - \\cos\\theta)\\)</p>\r\n<p class=\"exp\">If it is assumed that there is no friction, gravity is the only conservative force acting to do work. Therefore,</p>\r\n<p class=\"center1\">\\(ME_{\\text{bottom}} = ME_{\\text{top}}, KE_{\\text{bottom}} = PE_{\\text{top}}, \\frac{1}{2}m v^2 = mgh\\)</p>\r\n<p class=\"exp\">and so, at the bottom,</p>\r\n<p class=\"center1\">\\(v = \\sqrt{2gh} = \\sqrt{2g\\ell(1 - \\cos\\theta)}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_4",
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
                "explanation": "Power is equal to the product of the average force applied times the velocity. If the velocity is doubled, and the power is constant, the average force must be halved. Since <i>F</i> = <i>ma</i>, the average acceleration of the belt must be halved as well.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_5",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A mass <i>m</i> is moving horizontally along a nearly frictionless floor with velocity <i>v</i>. The mass now encounters a part of the floor that has a coefficient of kinetic friction given by <i>μ</i>. The total distance traveled by the mass before it is slowed by friction to a stop is given by</p>",
                "options": [
                    "2<i>v</i><sup>2</sup>/<i>μg</i>",
                    "<i>v</i><sup>2</sup>/2<i>μg</i>",
                    "2<i>μgv</i><sup>2</sup>",
                    "<i>μv</i><sup>2</sup>/2<i>g</i>"
                ],
                "answer": "B",
                "explanation": "The only applied force is friction, which is doing work to stop the mass. This work is being taken from the initial kinetic energy. For friction, we know that <i>f</i> = <i>μN</i>, and since the motion is horizontal, <i>N</i> = <i>mg</i>. Let <i>x</i> be the distance traveled while stopping; therefore, we can write that <i>W</i><sub><i>f</i></sub> = <i>KE</i> and:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w21\" role=\"presentation\" src=\"images/f104-05a.jpg\"/></p>\r\n<p class=\"exp\">Solving for <i>x</i>, we get:</p>\r\n<p class=\"center1\">\\(x = \\frac{v^2}{2\\mu g}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_6",
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
                "id": "tp_phys1_ene_7",
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
                "explanation": "Since we have a conservative system,</p>\r\n<p class=\"center1\">\\(KE_{\\text{bottom}} = PE_{\\text{top}} = mgh = (2)(9.8)(0.17)\\)</p>\r\n<p class=\"exp\">Remember to change 17 cm to 0.17 m!</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_8",
                "topic": "Energy & Work",
                "difficulty": "medium",
                "question": "A 0.3-kg mass rests on top of a spring that has been compressed by 0.04 m. Neglect any frictional effects, and consider the spring to be massless. Then, if the spring has a constant <i>k</i> equal to 2,000 N/m, to what height will the mass rise when the system is released?</p>",
                "options": [
                    "1.24 m",
                    "0.75 m",
                    "0.54 m",
                    "1.04 m"
                ],
                "answer": "C",
                "explanation": "We are dealing with a conservative system, so the initial starting energy is just the potential energy of the compressed spring. This energy supplies the work needed to raise the mass a height <i>h</i>, which is a gain in gravitational potential energy. Thus, we equate these two expressions and solve for the height:</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}(2,000)(0.4)^2 = (0.3)(9.8)h\\)</p>\r\n<p class=\"exp\">Thus, <i>h</i> = 0.54 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_ene_9",
                "topic": "Energy & Work",
                "difficulty": "hard",
                "question": "A box is pulled along a smooth floor by a force <i>F</i>, making an angle θ with the horizontal. As θ increases, the amount of work done to pull the box the same distance, <span><i>d</i></span>,</p>",
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
                "id": "tp_phys1_ene_10",
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
            }
        ]
    },
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
                "id": "tp_phys1_grav_1",
                "topic": "Gravitation",
                "difficulty": "easy",
                "question": "What is the value of <i>g</i> at a height above Earth’s surface that is equal to the radius of Earth?</p>",
                "options": [
                    "9.8 N/kg",
                    "4.9 N/kg",
                    "6.93 N/kg",
                    "2.45 N/kg"
                ],
                "answer": "D",
                "explanation": "The value of <i>g</i> varies inversely with the square of the distance from the center of Earth; therefore, if we double the distance from the center (as in this case), the value of <i>g</i> decreases by one-fourth: 1/4(9.8) = 2.45. Since <i>g</i> = <i>F</i>/<i>m</i>, alternative units are newtons per kilogram.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_2",
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
                "explanation": "If, using the formula for <i>g</i>, we take half the mass, the value decreases by one-half. If we decrease the radius by half, the value will increase by four times. Combining both effects results in an overall increase of two times.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_3",
                "topic": "Gravitation",
                "difficulty": "easy",
                "question": "Which of the following is an expression for the acceleration of gravity at the surface of a planet with uniform density ρ and radius <span><i>r</i></span>?</p>",
                "options": [
                    "<i>G</i>(4πρ/3<i>r</i><sup>2</sup>)",
                    "<i>G</i>(4πρ<i>r</i><sup>2</sup>/3)",
                    "<i>G</i>(4πρ/3<i>r</i>)",
                    "<i>G</i>(4π<i>r</i>ρ/3)"
                ],
                "answer": "D",
                "explanation": "The formula for <i>g</i> is <i>g</i> = <i>GM</i>/<i>r</i><sup>2</sup>. The planet is essentially a sphere of mass <i>M</i>, radius <i>r</i>, and density ρ (with <i>M</i> = <i>V</i>ρ, where <i>V</i> is the volume). The volume of the planet is given by <i>V</i> = 4/3<i>πr</i><sup>3</sup>. Making the substitutions yields:</p>\r\n\\[ g = \\frac{GM}{r^2} \\implies g' = \\frac{GM}{(2R)^2} = \\frac{g}{4} = \\frac{9.8}{4} = 2.45\\text{ N/kg} \\]</li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_4",
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
                "explanation": "The formula for orbital velocity is</p>\r\n\\[ v_{\\text{orbit}} = \\sqrt{\\frac{GM}{r}} \\]\r\n<p class=\"nump\">where <i>r</i> is the distance from the center of Earth. In this case, we must add 300 km = 300,000 m to the radius of Earth. Thus, <i>r</i> = 6.7 × 10<sup>6</sup> m. Substituting the given values yields <i>v</i><sub>orbit</sub> = 7,728 or 7.7 × 10<sup>3</sup> m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_5",
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
                "explanation": "The formula for escape velocity is</p>\r\n\\[ T = 2\\pi\\sqrt{\\frac{r^3}{GM}} \\]\r\n<p class=\"nump\">Substituting the given values yields <i>v</i><sub>esc</sub> = 2,324 or 2.32 × 10<sup>3</sup> m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_6",
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
                "explanation": "From question 6, we know that the escape velocity is given by \\( g = G\\frac{M}{R^2} \\) To find <i>r</i>, we need to square both sides, and then solve for the radius. This yields <i>r</i> = 2<i>GM</i>/<i>v</i><sup>2</sup>. Substituting the given values yields <i>r</i> = 3,000 or 3 × 10<sup>3</sup> m. (This is only a “theoretical” size for the black hole. As an interesting exercise, try calculating the value of <i>g</i> on such an object!)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_7",
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
                "explanation": "We use the formula for gravitational force:</p>\r\n<p class=\"center1\">\\(F = \\frac{GM_1 M_2}{r^2}\\)</p>\r\n<p class=\"nump\">Substituting the given values (don’t forget to square the distance!) yields <i>F</i> = 0.0067 N.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_grav_8",
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
            }
        ]
    },
    "ap-topic-phys1-momentum": {
        "id": "ap-topic-phys1-momentum",
        "title": "AP Physics 1: Impacts & Linear Momentum",
        "subtitle": "Impulse, momentum-impulse theorem, elastic and inelastic collisions, center of mass",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Linear Momentum",
        "questions": [
            {
                "id": "tp_phys1_mom_1",
                "topic": "Linear Momentum",
                "difficulty": "easy",
                "question": "Which of the following expressions, where <i>p</i> represents the linear momentum of the particle, is equivalent to the kinetic energy of a moving particle?</p>",
                "options": [
                    "<i>mp</i><sup>2</sup>",
                    "<i>m</i><sup>2</sup>/2<i>p</i>",
                    "2<i>p</i>/<i>m</i>",
                    "<i>p</i><sup>2</sup>/2<i>m</i>"
                ],
                "answer": "D",
                "explanation": "If we multiply the formula for kinetic energy by the ratio <i>m</i>/<i>m</i>, we see that the formula for kinetic energy becomes</p>\r\n<p class=\"center1\">\\(KE = \\left(\\frac{1}{2m}\\right)(m^2)(v^2) = \\frac{p^2}{2m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_2",
                "topic": "Linear Momentum",
                "difficulty": "easy",
                "question": "Two carts having masses 1.5 kg and 0.7 kg, respectively, are initially at rest and are held together by a compressed massless spring. When released, the 1.5-kg cart moves to the left with a velocity of 7 m/s. What is the velocity and direction of the 0.7-kg cart?</p>",
                "options": [
                    "15 m/s right",
                    "15 m/s left",
                    "7 m/s left",
                    "7 m/s right"
                ],
                "answer": "A",
                "explanation": "Momentum is conserved, so (1.5)(7) = 0.7<i>v</i>. Thus, <i>v</i> = 15 m/s. The direction is to the right since in a recoil the masses go in opposite directions.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_3",
                "topic": "Linear Momentum",
                "difficulty": "easy",
                "question": "The product of an object’s instantaneous momentum and its acceleration is equal to its</p>",
                "options": [
                    "applied force",
                    "kinetic energy",
                    "power output",
                    "net force"
                ],
                "answer": "C",
                "explanation": "An object’s instantaneous momentum times its acceleration will equal its power output in units of joules per second or watts.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_4",
                "topic": "Linear Momentum",
                "difficulty": "medium",
                "question": "A ball with a mass of 0.15 kg has a velocity of 5 m/s. It strikes a wall perpendicularly and bounces off straight back with a velocity of 3 m/s. The ball underwent a change in momentum equal to</p>",
                "options": [
                    "0.30 kg · m/s",
                    "1.20 kg · m/s",
                    "0.15 kg · m/s",
                    "5 kg · m/s"
                ],
                "answer": "B",
                "explanation": "The change in momentum is a vector quantity. The rebound velocity is in the opposite direction, so Δ<i>v</i> = 5 − (−3) = 8 m/s. The change in momentum is</p>\r\n<p class=\"center1\">\\(\\Delta p = (0.15)(8) = 1.20\\text{ kg}\\cdot\\text{m/s}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_5",
                "topic": "Linear Momentum",
                "difficulty": "medium",
                "question": "What braking force is supplied to a 3,000-kg car traveling with a velocity of 35 m/s that is stopped in 12 s?</p>",
                "options": [
                    "29,400 N",
                    "3,000 N",
                    "8,750 N",
                    "105,000 N"
                ],
                "answer": "C",
                "explanation": "The formula is <i>F</i>Δ<i>t</i> = <i>m</i>Δ<i>v</i>. Solving for the force, we get</p>\r\n<p class=\"center1\">\\(F = \\frac{(3,000)(35)}{12} = 8,750\\text{ N}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_6",
                "topic": "Linear Momentum",
                "difficulty": "medium",
                "question": "A 0.1-kg baseball is thrown with a velocity of 35 m/s. The batter hits it straight back with a velocity of 60 m/s. What is the magnitude of the average impulse exerted on the ball by the bat?</p>",
                "options": [
                    "3.5 N · s",
                    "2.5 N · s",
                    "7.5 N · s",
                    "9.5 N · s"
                ],
                "answer": "D",
                "explanation": "Impulse is equal to the change in momentum, which is</p>\r\n<p class=\"center1\">\\(\\Delta p = |0.1[-60 - 35]| = 9.5\\text{ N}\\cdot\\text{s}\\)</p>\r\n<p class=\"nump\">because of the change in direction of the ball.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_7",
                "topic": "Linear Momentum",
                "difficulty": "medium",
                "question": "A 1-kg object is moving with a velocity of 6 m/s to the right. It collides and sticks to a 2-kg object moving with a velocity of 3 m/s in the same direction. How much kinetic energy was lost in the collision?</p>",
                "options": [
                    "1.5 J",
                    "2 J",
                    "2.5 J",
                    "3 J"
                ],
                "answer": "D",
                "explanation": "First, we find the final velocity of this inelastic collision. Momentum is conserved, so we can write (1)(6) + (2)(3) = (3)<i>v</i>′ since both objects are moving in the same direction. Thus, <i>v</i>′ = 4 m/s. The initial kinetic energy of the 1-kg object is 18 J, while the initial kinetic energy of the 2-kg mass is 9 J. Thus, the total initial kinetic energy is 27 J. After the collision, the combined 3-kg object has a velocity of 4 m/s and a final kinetic energy of 24 J. Thus, 3 J of kinetic energy has been lost.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_8",
                "topic": "Linear Momentum",
                "difficulty": "medium",
                "question": "A 2-kg mass moving with a velocity of 7 m/s collides elastically with a 4-kg mass moving in the opposite direction at 4 m/s. The 2-kg mass reverses direction after the collision and has a new velocity of 3 m/s. What is the new velocity of the 4-kg mass?</p>",
                "options": [
                    "−1 m/s",
                    "1 m/s",
                    "6 m/s",
                    "4 m/s"
                ],
                "answer": "B",
                "explanation": "Momentum is conserved in this elastic collision but the directions are opposite, so we must be careful with negative signs. We therefore write (2)(7) − (4)(4) = −(2)(3) + 4<i>v</i>′ and get <i>v</i>′ = 1 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_9",
                "topic": "Linear Momentum",
                "difficulty": "hard",
                "question": "A mass <i>m</i> is attached to a massless spring with a force constant <i>k</i>. The mass rests on a horizontal, frictionless surface. The system is compressed a distance <i>x</i> from the spring’s initial position and then released. The momentum of the mass when the spring passes its equilibrium position is given by</p>",
                "options": [
                    "\\( -v \\)",
                    "\\( 0 \\)",
                    "\\( v \\)",
                    "\\( 2v \\)"
                ],
                "answer": "A",
                "explanation": "We set the two energy equations equal to solve for the velocity at the equilibrium position. Thus</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2\\)</p>\r\n<p class=\"nump\">since no gravitational potential energy is involved, and we write that the velocity is \\( p_i = mv \\). Now momentum <i>p</i> = <i>mv</i>, so we multiply by <i>m</i> and factor the “mass” back under the radical sign, where it is squared so that we get \\( p_f = -mv \\).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_mom_10",
                "topic": "Linear Momentum",
                "difficulty": "hard",
                "question": "During an inelastic collision between two balls, which of the following statements is correct?</p>",
                "options": [
                    "Both momentum and kinetic energy are conserved.",
                    "Momentum is conserved, but kinetic energy is not conserved.",
                    "Momentum is not conserved, but kinetic energy is conserved.",
                    "Neither momentum nor kinetic energy is conserved."
                ],
                "answer": "B",
                "explanation": "Momentum is always conserved in an inelastic collision, and kinetic energy is not conserved because the objects stick together.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
    "ap-topic-phys1-rotation": {
        "id": "ap-topic-phys1-rotation",
        "title": "AP Physics 1: Rotational Motion & Torque",
        "subtitle": "Torque, static equilibrium, rotational inertia, rotational kinematics, rolling objects, angular momentum",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Rotational Motion",
        "questions": [
            {
                "id": "tp_phys1_rot_1",
                "topic": "Rotational Motion",
                "difficulty": "easy",
                "question": "A 45-kg girl is sitting on a seesaw 0.6 m from the balance point, as shown below. How far, on the other side, should a 60-kg boy sit so that the seesaw will remain in balance?</p>\r\n\\[ \\tau = r F \\sin\\theta = (0.5)(20)\\sin(90^\\circ) = 10\\text{ N}\\cdot\\text{m} \\]",
                "options": [
                    "0.30 m",
                    "0.35 m",
                    "0.40 m",
                    "0.45 m"
                ],
                "answer": "D",
                "explanation": "To remain in balance, the two torques must be equal. The force on each side is given by the weight, <i>mg</i>. The moment arm distances are 0.6 m and <i>x</i>. Since the factor <i>g</i> will appear on both sides of the torque balance equation, we can eliminate it and write</p>\r\n<p class=\"center1\">\\((45)(0.6) = (60)x \\text{ implies } x = 0.45\\text{ m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_2",
                "topic": "Rotational Motion",
                "difficulty": "easy",
                "question": "A balanced stick is shown below. The distance from the fulcrum is shown for each mass except the 10-g mass. What is the approximate position of the 10-g mass, based on the diagram?</p>\r\n\\[ I = \\frac{1}{2}MR^2 \\]",
                "options": [
                    "7 cm",
                    "9 cm",
                    "10 cm",
                    "15 cm"
                ],
                "answer": "C",
                "explanation": "In this problem, again, the sum of the torques on the left must equal the sum of the torques on the right. We could convert all masses to kilograms and all distances to meters, but in the balance equation the same factors appear on both sides. Therefore, for simplicity and time efficiency, we can simply write</p>\r\n<p class=\"center1\">\\((30)(40) + (40)(20) + (20)(5) = 10x + (50)(40), x = 10\\text{ cm}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_3",
                "topic": "Rotational Motion",
                "difficulty": "easy",
                "question": "A solid cylinder consisting of an outer radius <i>r</i><sub>1</sub> and an inner radius <i>r</i><sub>2</sub> is pivoted on a frictionless axle as shown below. A string is wound around the outer radius and is pulled to the right with a force <i>F</i><sub>1</sub> = 3 N. A second string is wound around the inner radius and is pulled down with a force <i>F</i><sub>2</sub> = 5 N. If <i>r</i><sub>1</sub> = 0.75 m and <i>r</i><sub>2</sub> = 0.35 m, what is the net torque acting on the cylinder?</p>\r\n\\[ \\alpha = \\frac{\\tau}{I} = \\frac{10}{2} = 5\\text{ rad/s}^2 \\]",
                "options": [
                    "2.25 N · m",
                    "−2.25 N · m",
                    "0.5 N · m",
                    "−0.5 N · m"
                ],
                "answer": "D",
                "explanation": "The net torque is given by the vector sum of all torques. \\vec{F}<sub>2</sub> provides a counterclockwise positive torque, while \\vec{F}<sub>1</sub> provides a clockwise negative torque. Each radius is the necessary moment arm distance. Thus, we have</p>\r\n<p class=\"center1\">\\(\\tau_{\\text{net}} = (5)(0.35) - (3)(0.75) = -0.5\\text{ N}\\cdot\\text{m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_4",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "What is the net torque about an axis through point <span><i>A</i></span>?</p>",
                "options": [
                    "16.8 N · m",
                    "15.2 N · m",
                    "−5.5 N · m",
                    "−7.8 N · m"
                ],
                "answer": "A",
                "explanation": "In this problem, the net torque about point <i>A</i> implies that the force passing through point <i>A</i> does not contribute to the net torque. Also, we need the components of the remaining forces perpendicular to the beam. From the diagram, we see that the 30-N force acts counterclockwise (positive), while the 10-N force acts clockwise (negative). Thus:</p>\r\n<p class=\"center1\">\\(\\tau_{\\text{net}} = (30)(\\cos 45^\\circ)(1.5) - (10)(\\sin 30^\\circ)(3) = 16.8\\text{ N}\\cdot\\text{m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_5",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "What is the net torque about an axis through point <span><i>C</i></span>?</p>",
                "options": [
                    "3.5 N · m",
                    "7.5 N · m",
                    "−15.2 N · m",
                    "5.9 N · m"
                ],
                "answer": "B",
                "explanation": "In this problem, since the pivot is now set at point <i>C</i>, we can eliminate the 30-N force passing through point <i>C</i> as a contributor to the torque. Again, we see that the 20-N force will act in a counterclockwise direction, while the 10-N force will act clockwise. Each force is 1.5 m from the pivot. We also need the component of each force perpendicular to the beam. Thus:</p>\r\n<p class=\"center1\">\\(\\tau_{\\text{net}} = (20)(\\sin 30^\\circ)(1.5) - (10)(\\sin 30^\\circ)(1.5) = 7.5\\text{ N}\\cdot\\text{m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_6",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "Compute the average angular acceleration and the angular displacement during the 2 seconds a rotating object speeds up from 0.5 rad/s to 0.7 rad/s.</p>",
                "options": [
                    "α = 0.1 rad/s<sup>2</sup>    Δθ = 0.3 radians",
                    "α = 0.2 rad/s<sup>2</sup>    Δθ = 0.5 radians",
                    "α = 0.1 rad/s<sup>2</sup>    Δθ = 1.2 radians",
                    "α = 0.2 rad/s<sup>2</sup>    Δθ = 1.2 radians"
                ],
                "answer": "C",
                "explanation": "\\( \\tau_{\\text{net}} = I\\alpha \\)</p>\r\n<p class=\"center1\">\\(\\Delta\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0.5(2) + \\frac{1}{2}(0.1)(2)^2 = 1 + 0.2 = 1.2\\text{ radians}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_7",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "An object with a rotational inertia <i>I</i> experiences a net torque of <i>T</i>. If the object is initially at rest, what is its angular speed after 3 seconds of this torque?</p>",
                "options": [
                    "3<i>I T</i>",
                    "9<i>I T</i>",
                    "3<i>I</i> /<i>T</i>",
                    "3<i>T</i>/<i>I</i>"
                ],
                "answer": "D",
                "explanation": "Since τ = <i>I</i>α and \\( L = I\\omega \\) we can combine and solve for Δω:</p>\r\n<p class=\"center1\">\\(\\Delta\\omega = (T/I)\\Delta t = 3T/I\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_rot_8",
                "topic": "Rotational Motion",
                "difficulty": "medium",
                "question": "If a spinning ball of clay on top of a freely turning frictionless tabletop increases its rotational inertia by 50 percent by bulging outward, what will happen to the rotational speed of the clay and tabletop?</p>",
                "options": [
                    "It will be half as fast.",
                    "It will be 1.5 times faster.",
                    "It will be 4 times slower.",
                    "It will be slower by a factor of 2/3."
                ],
                "answer": "D",
                "explanation": "Angular momentum is conserved:</p>\r\n<p class=\"center1\">\\(I_i \\omega_i = I_f \\omega_f, I_f = (3/2)I_i, I_i \\omega_i = ((3/2)I_i)\\omega_f, \\omega_f = 2/3\\omega_i\\)</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
    "ap-topic-phys1-shm": {
        "id": "ap-topic-phys1-shm",
        "title": "AP Physics 1: Oscillatory Motion & SHM",
        "subtitle": "Simple harmonic motion, mass on a spring, simple pendulum, restoring force dynamics and frequency",
        "timeLimitMinutes": 20,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Oscillatory Motion",
        "questions": [
            {
                "id": "tp_phys1_shm_1",
                "topic": "Oscillatory Motion",
                "difficulty": "easy",
                "question": "What is the length of a pendulum whose period, at the equator, is 1 s?</p>",
                "options": [
                    "0.15 m",
                    "0.25 m",
                    "0.30 m",
                    "0.45 m"
                ],
                "answer": "B",
                "explanation": "If we use the formula for the period of a pendulum, \\( T = 2\\pi\\sqrt{\\frac{L}{g}} \\), and square both sides, we can solve for the length:</p>\r\n<p class=\"center1\">\\(\\ell = T^2 \\frac{g}{4\\pi^2}\\)</p>\r\n<p class=\"exp\">Using the values given in the question, we find that <i>ℓ</i> = 0.25 m.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_2",
                "topic": "Oscillatory Motion",
                "difficulty": "easy",
                "question": "On a planet, an astronaut determines the acceleration of gravity by means of a pendulum. She observes that the 1-m-long pendulum has a period of 1.5 s. The acceleration of gravity, in meters per second squared, on the planet is</p>",
                "options": [
                    "7.5",
                    "15.2",
                    "10.2",
                    "17.5"
                ],
                "answer": "D",
                "explanation": "Again using the formula for the period of a pendulum, this time we solve for the magnitude of the acceleration of gravity:</p>\r\n<p class=\"center1\">\\(g = 4\\frac{\\pi\\ell}{T^2}\\)</p>\r\n<p class=\"exp\">Using the values given in the question, we find that <i>g</i> = 17.5 m/s<sup>2</sup>.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_3",
                "topic": "Oscillatory Motion",
                "difficulty": "easy",
                "question": "When a 0.05-kg mass is attached to a vertical spring, it is observed that the spring stretches 0.03 m. The system is then placed horizontally on a frictionless surface and set into simple harmonic motion. What is the period of the oscillations?</p>",
                "options": [
                    "0.75 s",
                    "0.12 s",
                    "0.35 s",
                    "1.3 s"
                ],
                "answer": "C",
                "explanation": "We first find the spring constant. From <i>F</i> = <i>kx</i>, we see that</p>\r\n<p class=\"center1\">\\(F = mg = (0.05)(9.8) = 0.49\\text{ N}\\)</p>\r\n<p class=\"exp\">Thus,</p>\r\n<p class=\"center1\">\\(k = \\frac{F}{x} = \\frac{0.49}{0.03} = 16.3\\text{ N/m}\\)</p>\r\n<p class=\"exp\">Now the period is given by the formula <i>T</i> = \\( T = 2\\pi\\sqrt{\\frac{m}{k}} \\). Using the values given in the question, we find that <i>T</i> = 0.35 s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_4",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "A mass of 0.5 kg is connected to a massless spring with a force constant <i>k</i> of 50 N/m. The system is oscillating on a frictionless, horizontal surface. If the amplitude of the oscillations is 2 cm, the total energy of the system is</p>",
                "options": [
                    "0.01 J",
                    "0.1 J",
                    "0.5 J",
                    "0.3 J"
                ],
                "answer": "A",
                "explanation": "The formula for total energy is <i>E</i> = (1/2)<i>kA</i><sup>2</sup>. Using the values given in the question, we get <i>E</i> = 0.01 J.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_5",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "A mass of 0.3 kg is connected to a massless spring with a force constant <i>k</i> of 20 N/m. The system oscillates horizontally on a frictionless surface with an amplitude of 4 cm. What is the velocity of the mass when it is 2 cm from its equilibrium position?</p>",
                "options": [
                    "0.28 m/s",
                    "0.08 m/s",
                    "0.52 m/s",
                    "0.15 m/s"
                ],
                "answer": "A",
                "explanation": "The formula for any intermediary velocity is <i>v</i> = \\( f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} \\). Before substituting the known values, we must change centimeters to meters: 4 cm = 0.04 m and 2 cm = 0.02 m. Then, using these values for amplitude and position, we find that <i>v</i> = 0.28 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_6",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "If the length of a simple pendulum is doubled, its period will</p>",
                "options": [
                    "decrease by 2",
                    "increase by 2",
                    "decrease by \\sqrt{2}",
                    "increase by \\sqrt{2}"
                ],
                "answer": "D",
                "explanation": "Since the period of a pendulum varies directly as the square root of the length, if the length is doubled, the period increases by \\sqrt{2}.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_shm_7",
                "topic": "Oscillatory Motion",
                "difficulty": "medium",
                "question": "A 2-kg mass is oscillating horizontally on a frictionless surface when attached to a spring. The total energy of the system is observed to be 10 J. If the mass is replaced by a 4-kg mass, but the amplitude of oscillations and the spring remain the same, the total energy of the system will be</p>",
                "options": [
                    "10 J",
                    "5 J",
                    "20 J",
                    "3.3 J"
                ],
                "answer": "A",
                "explanation": "The maximum energy in the mass-spring system can be expressed independently of the mass; it depends on the force constant and the square of the amplitude. Thus, if the spring and the amplitude of oscillations remain the same, so will the total energy of the system (10 J).</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
    "ap-topic-phys1-fluids": {
        "id": "ap-topic-phys1-fluids",
        "title": "AP Physics 1: Fluids & Bernoulli's Principle",
        "subtitle": "Fluid statics, Pascal's principle, buoyant force, Archimedes principle, fluid dynamics and Bernoulli's equation",
        "timeLimitMinutes": 25,
        "testType": "Topic Test",
        "subject": "AP Physics 1",
        "topic": "Fluids",
        "questions": [
            {
                "id": "tp_phys1_flu_1",
                "topic": "Fluids",
                "difficulty": "easy",
                "question": "The rate of flow of a liquid from a hole in a container depends on all of the following except</p>",
                "options": [
                    "the density of the liquid",
                    "the height of the liquid above the hole",
                    "the area of the hole",
                    "the acceleration of gravity"
                ],
                "answer": "A",
                "explanation": "The flow rate of a liquid from a hole does not depend on the density of the liquid.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_2",
                "topic": "Fluids",
                "difficulty": "easy",
                "question": "A person is standing on a railroad station platform when a high-speed train passes by. The person will tend to be</p>",
                "options": [
                    "pushed away from the train",
                    "pulled in toward the train",
                    "pushed upward into the air",
                    "pulled down into the ground"
                ],
                "answer": "B",
                "explanation": "Because of the Bernoulli effect, the speeding train reduces the air pressure between the person and the train. This pressure difference creates a force tending to pull the person into the train. Be very careful when standing on a train platform!</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_3",
                "topic": "Fluids",
                "difficulty": "easy",
                "question": "Bernoulli’s equation is based on which law of physics?</p>",
                "options": [
                    "Conservation of linear momentum",
                    "Conservation of angular momentum",
                    "Newton’s first law of motion",
                    "Conservation of energy"
                ],
                "answer": "D",
                "explanation": "Bernoulli’s principle was developed as an application of conservation of energy.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_4",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "Which of the following expressions represents the power generated by a liquid flowing out of a hole of area <i>A</i> with a velocity <span><i>v</i></span>?</p>",
                "options": [
                    "(pressure) × (rate of flow)",
                    "(pressure)/(rate of flow)",
                    "(rate of flow)/(pressure)",
                    "(pressure) × (velocity)/(area)"
                ],
                "answer": "A",
                "explanation": "Power is expressed in J/s. The product of pressure (force divided by area) and flow rate (m<sup>3</sup>/s) leads to newtons times meters over seconds (J/s).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_5",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "Which of the following statements is an expression of the equation of continuity?</p>",
                "options": [
                    "Rate of flow equals the product of velocity and cross-sectional area.",
                    "Rate of flow depends on the height of the fluid above the hole.",
                    "Pressure in a static fluid is transmitted uniformly throughout.",
                    "Fluid flows faster through a narrower pipe."
                ],
                "answer": "D",
                "explanation": "The equation of continuity states that the product of velocity and area is a constant for a given fluid. A consequence of this is that a fluid moves faster through a narrower pipe.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_6",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "A moving fluid has an average pressure of 600 Pa as it exits a circular hole with a radius of 2 cm at a velocity of 60 m/s. What is the approximate power generated by the fluid?</p>",
                "options": [
                    "32 W",
                    "62 W",
                    "1,200 W",
                    "45 W"
                ],
                "answer": "D",
                "explanation": "The power is equal to the product of the pressure and the flow rate. The flow rate is equal to the product of the velocity and the cross-sectional area (which is a circle of radius 0.02 m). The area is given by π<i>r</i><sup>2</sup> = 1.256 × 10<sup>−3</sup> m<sup>2</sup>. When we multiply this area by the velocity and the pressure, we get 45.2 W as a measure of the generated power.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_7",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "Alcohol has a specific gravity of 0.79. If a barometer consisting of an open-ended tube placed in a dish of alcohol is used at sea level, to what height in the tube will the alcohol rise?</p>",
                "options": [
                    "8.1 m",
                    "7.9 m",
                    "15.2 m",
                    "13.1 m"
                ],
                "answer": "D",
                "explanation": "The pressure exerted by the air is balanced by the column of liquid alcohol in equilibrium:</p>\r\n<p class=\"center1\">\\(h = \\frac{P}{\\rho g} = \\frac{1.01 \\times 10^5\\text{ N/m}^2}{(790\\text{ kg/m}^3)(9.8\\text{ m/s}^2)} = 13.1\\text{ m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_8",
                "topic": "Fluids",
                "difficulty": "medium",
                "question": "An ice cube is dropped into a mixed drink containing alcohol and water. The ice cube sinks to the bottom. From this, you can conclude</p>",
                "options": [
                    "that the drink is mostly alcohol",
                    "that the drink is mostly water",
                    "that the drink is equally mixed with water and alcohol",
                    "nothing, unless you know how much liquid is present"
                ],
                "answer": "A",
                "explanation": "Since the density of alcohol is less than that of water, ice floats “lower” in alcohol than in water. From the given information, the drink appears to be mostly alcohol.</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_9",
                "topic": "Fluids",
                "difficulty": "hard",
                "question": "A 2-N force is used to push a small piston 10 cm downward in a simple hydraulic machine. If the opposite large piston rises by 0.5 cm, what is the maximum weight the large piston can lift?</p>",
                "options": [
                    "2 N",
                    "40 N",
                    "20 N",
                    "4 N"
                ],
                "answer": "B",
                "explanation": "We need to use the conservation of work-energy in this problem. The work done on the small piston must equal the work done by the large piston. Since the ratio of displacements is 20:1, the large piston will be able to support a maximum load of 40 N (since 2 N × 20 = 40 N).</p></li>\r\n<li>"
            },
            {
                "id": "tp_phys1_flu_10",
                "topic": "Fluids",
                "difficulty": "hard",
                "question": "Balsa wood with an average density of 130 kg/m<sup>3</sup> is floating in pure water. What percentage of the wood is submerged?</p>",
                "options": [
                    "87%",
                    "13%",
                    "50%",
                    "25%"
                ],
                "answer": "B",
                "explanation": "The percentage submerged is given by the ratio of its density to that of pure water (1,000 kg/m<sup>3</sup>). Thus, 130/1,000 = 0.13 = 13%.</p></li>\r\n</ol>\r\n</section>\r\n</section>\r\n<section>"
            }
        ]
    },
    "ap-mock-phys1-full-1": {
        "id": "ap-mock-phys1-full-1",
        "title": "AP Physics 1 Full Practice Exam 1",
        "subtitle": "Complete official practice exam 1 simulating Section I Multiple-Choice Questions with in-depth solutions",
        "timeLimitMinutes": 80,
        "testType": "Full Mock",
        "subject": "AP Physics 1",
        "topic": "Comprehensive AP Physics 1",
        "questions": [
            {
                "id": "mock_phys1_1_1",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Two objects are thrown vertically upward from the same initial height. One object has twice the initial velocity of the other. Neglecting any air resistance, the object with the greater initial velocity will rise to a maximum height that is</p>",
                "options": [
                    "twice that of the other object, assuming they have the same mass",
                    "twice that of the other object, independent of their masses",
                    "four times that of the other object, assuming they have the same mass",
                    "four times that of the other object, independent of their masses"
                ],
                "answer": "D",
                "explanation": "Twice the initial vertical velocity will give twice the time in flight. Average vertical velocity will also be doubled. Displacement is the product of these two: 2 × 2 = 4.</p>\r\n<p class=\"numpt\">Alternatively, one could use \\( v^2 = v_0^2 + 2ad \\), since <i>v</i> at the maximum height is zero. Since <i>v</i><sub>0</sub> is doubled and then squared, the vertical displacement <i>d</i> must be 4 times bigger.</p>\r\n<p class=\"numpt\">Free-fall problems are independent of mass.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_2",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 2-kilogram cart has a velocity of 4 meters per second to the right. It collides with a 5-kilogram cart moving to the left at 1 meter per second. After the collision, the two carts stick together. Can the magnitude and the direction of the velocity of the two carts after the collision be determined from the given information?</p>",
                "options": [
                    "No, since the collision is inelastic, we must know the energy lost.",
                    "Yes, the collision is elastic: 3/7 m/s left.",
                    "Yes, the collision is inelastic: 3/7 m/s right.",
                    "Yes, the speed is not 3/7 m/s."
                ],
                "answer": "C",
                "explanation": "Conservation of momentum:</p>\r\n\\[ m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f \\implies (2)(4) + (5)(-1) = 7 v_f \\implies v_f = \\frac{3}{7}\\text{ m/s (to the right)} \\]\r\n<p class=\"numpt\">The collision is inelastic since the carts stick together.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_3",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Projectile <i>X</i> is launched at a 30-degree angle above the horizon with a speed of 100 m/s. Projectile <i>Y</i> is launched at a 60-degree angle with the same speed. Which of the following correctly compares the horizontal range and maximum altitude obtained by these two projectiles?</p>\r\n<p><img alt=\"\" class=\"w71\" role=\"presentation\" src=\"images/f179-01.jpg\"/></p>",
                "options": [
                    "Choice (A)",
                    "Choice (B)",
                    "Choice (C)",
                    "Choice (D)"
                ],
                "answer": "D",
                "explanation": "Higher altitude is strictly a function of <i>V</i><sub><i>Y</i></sub> (Projectile <i>Y</i>). Range is a function of both <i>V</i><sub><i>X</i></sub> and <i>V</i><sub><i>Y</i></sub> such that the angles equally above and below 45 degrees (the max angle for range) will result in equal horizontal displacement. Note that 30 degrees and 60 degrees are both 15 degrees off from 45 degrees.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_4",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 5-kg mass is sitting at rest on a horizontal surface. A horizontal force of 10 N will start the mass moving. What is the best statement about the coefficient and type of friction between the mass and the surface?</p>",
                "options": [
                    "&gt;0.20 static",
                    "&lt;0.20 static",
                    "&lt;0.20 kinetic",
                    "&gt;0.20 kinetic"
                ],
                "answer": "B",
                "explanation": "Since the 10 N force will start the mass moving, this must be greater than the static friction force holding the mass in place. The maximum <i>static</i> friction must be 10 N or less.</p>\r\n\\[ \\mu_s \\ge \\frac{F}{mg} = \\frac{10}{(5)(9.8)} = 0.204 \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_5",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following graphs represents an object <i>moving</i> with no net force acting on it?</p>",
                "options": [
                    "<img alt=\"\" class=\"w29 inline\" role=\"presentation\" src=\"images/f180-01.jpg\"/>",
                    "<img alt=\"\" class=\"w29 inline\" role=\"presentation\" src=\"images/f180-02.jpg\"/>",
                    "<img alt=\"\" class=\"w34 inline\" role=\"presentation\" src=\"images/f180-03.jpg\"/>",
                    "<img alt=\"\" class=\"w29 inline\" role=\"presentation\" src=\"images/f180-04.jpg\"/>"
                ],
                "answer": "B",
                "explanation": "The object is moving, so the velocity is not zero. The object is not accelerating, so velocity is constant.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_6",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A projectile is launched horizontally with an initial velocity <i>v</i><sub>0</sub> from a height <i>h</i>. If it is assumed that there is no air resistance, which of the following expressions represents the vertical position of the projectile? In other words, <i>y</i>(<i>x</i>) = ?</p>",
                "options": [
                    "\(h - gv_0^2/2x^2\)",
                    "\(h - gv/2v_0^2\)",
                    "\(h - gx^2/2v_0^2\)",
                    "\(h - gx^2/v_0^2\)"
                ],
                "answer": "C",
                "explanation": "In general:</p>\r\n\\[ a = \\frac{F}{m_1 + m_2} = \\frac{10}{4 + 1} = 2\\text{ m/s}^2 \\]\r\n<p class=\"numpt\">Solve for <i>t</i> in the last equation. Then plug back into the first equation and substitute in <i>y</i><sub>0</sub> = <i>h</i>, <i>v</i><sub><i>y</i></sub><sub>0</sub> = 0, and <i>v</i><sub><i>x</i></sub><sub>0</sub> = <i>v</i><sub>0</sub>:</p>\r\n\\[ F_{4\\text{ on }1} = m_1 a = (1\\text{ kg})(2\\text{ m/s}^2) = 2\\text{ N} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_7",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following measurements would allow you to determine the maximum velocity experienced by the mass?</p>",
                "options": [
                    "No additional information is required.",
                    "Minimum velocity",
                    "Maximum acceleration",
                    "None of these would allow you to determine maximum velocity."
                ],
                "answer": "C",
                "explanation": "Maximum acceleration allows you to determine maximum displacement:</p>\r\n<p class=\"center1\">\\(ma = kA\\)</p>\r\n<p class=\"numpt\">Knowing the amplitude allows you to determine easily the maximum speed via energy conservation:</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}kA^2 = \\frac{1}{2}mv^2\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_8",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following statements concerning the oscillatory motion described above is correct? (All statements refer to magnitudes.)</p>",
                "options": [
                    "The maximum velocity and maximum acceleration occur at the same time.",
                    "The maximum velocity occurs when the acceleration is a minimum.",
                    "The velocity is always directly proportional to the displacement.",
                    "The maximum velocity occurs when the displacement is a maximum."
                ],
                "answer": "B",
                "explanation": "Maximum velocities happen when going through the equilibrium point (zero acceleration and zero displacement): all kinetic energy (<i>KE</i>) and no potential energy (<i>PE</i>).</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_9",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A bullet of known mass (<i>m</i><sub>1</sub>) is fired vertically into an initially stationary wood block of known mass (<i>m</i><sub>2</sub>). The resulting wood + bullet combined system is then measured to rise to a maximum height of <i>h</i>. Can the initial speed of the bullet be calculated from this information?</p>",
                "options": [
                    "Yes. Solve \((m_1 + m_2)gh = \frac{1}{2}(m_1)v^2\)",
                    "Yes. Solve the momentum conservation of collision first and the energy conservation of the rising combination second.",
                    "No. We don’t know if momentum is conserved during this collision.",
                    "No. We don’t know enough details about the mechanical energy lost during the collision."
                ],
                "answer": "B",
                "explanation": "Momentum is conserved during the collision, which enables us to solve for an initial upward velocity of the combination. Then energy conservation can be used to relate the height to that initial upward velocity. Choice (A) cannot be used because some unknown amount of mechanical energy will be lost by the bullet embedding itself in the wood.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_10",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 10-kg mass is being pushed horizontally by a constant force along a rough surface (<i>μ</i><sub><i>k</i></sub> = 0.1) at constant velocity. Which of the following is the best statement regarding the constant force (<i>f</i>)?</p>",
                "options": [
                    "<i>f</i> = 10 N",
                    "<i>f</i> &gt; 10 N",
                    "<i>f</i> &lt; 10 N",
                    "<i>f</i> &gt; 1 N"
                ],
                "answer": "A",
                "explanation": "Constant velocity means no acceleration, so \\( F = ma \\).</p>\r\n<p class=\"center1\">\\(F_{\\text{push}} - F_{\\text{friction}} = 0, F_{\\text{push}} - \\mu_k N = F_{\\text{push}} - \\mu_k mg = 0, F_{\\text{push}} = \\mu_k mg = (0.1)(10\\text{ kg})(10\\text{ m/s}^2) = 10\\text{ N}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_11",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 10-newton force is applied to two masses, 4 kilograms and 1 kilogram, respectively, that are in contact as shown below. The horizontal motion is along a frictionless plane. What is the magnitude of the contact force between the two masses?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w68\" role=\"presentation\" src=\"images/f181-01.jpg\"/></p>",
                "options": [
                    "10 N",
                    "8 N",
                    "6 N",
                    "2 N"
                ],
                "answer": "D",
                "explanation": "First find the acceleration of the system:</p>\r\n\\[ W = \\Delta KE \\implies F d = \\frac{1}{2}m v_f^2 \\]\r\n<p class=\"numpt\">The contact force, <i>P</i>, is the only force felt by the 1-kg mass:</p>\r\n\\[ \\frac{1}{2}k x^2 = mgh \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_12",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object with mass <i>m</i> is dropped from height <i>h</i> above the ground. While neglecting air resistance, which formula best describes the power generated if the object takes time <i>t</i> to fall?</p>",
                "options": [
                    "<i>mgh</i>",
                    "<i>mght</i>",
                    "<i>mg</i><sup>2</sup><i>t</i>/2",
                    "<i>mgh</i>/<i>t</i>"
                ],
                "answer": "D",
                "explanation": "<i>P</i> = work/<i>t</i> = <i>Fd</i>/<i>t</i> = <i>mgh</i>/<i>t</i></p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_13",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 1,500-kilogram car has a velocity of 25 meters per second. If it is brought to a stop by a nonconstant force in 10 to 15 seconds, can the magnitude of the impulse applied be determined?</p>",
                "options": [
                    "Yes, it is 37,500 N · s.",
                    "No, you need to know the details about the nonconstant force.",
                    "No, you must know the exact duration of the impulse.",
                    "No, you must know the average force during and the duration of the impulse."
                ],
                "answer": "A",
                "explanation": "Impulse can be found by <i>Ft</i> if the details of the force are known or, alternatively, by:</p>\r\n\\[ h = \\frac{k x^2}{2mg} \\]\r\n<p class=\"numpt\">Ignore the minus sign as the question asks about magnitude.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_14",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A block of mass <i>M</i> rests on a rough incline, as shown below. The angle of elevation of the incline is increased until an angle of <i>θ</i> is reached. At that angle, the mass begins to slide down the incline. Which of the following is an expression for the coefficient of static friction <i>μ</i>?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w47\" role=\"presentation\" src=\"images/f181-02.jpg\"/></p>",
                "options": [
                    "tan <i>θ</i>",
                    "sin <i>θ</i>",
                    "cos <i>θ</i>",
                    "1/(cos <i>θ</i>)"
                ],
                "answer": "A",
                "explanation": "When the block is at the maximum height, static friction is obtained:</p>\r\n\\[ J = \\int F dt = \\text{Area under } F\\text{-}t \\text{ graph} = \\Delta p \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_15",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A pendulum of a given length swings back and forth a certain number of times per second. If the pendulum now swings back and forth the same number of times but in twice the time, the length of the pendulum should be</p>",
                "options": [
                    "doubled",
                    "quartered",
                    "quadrupled",
                    "halved"
                ],
                "answer": "C",
                "explanation": "Doubling the period requires a quadrupling of length:</p>\r\n\\[ v_f = \\frac{\\Delta p}{m} = \\frac{\\text{Area}}{9} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_16",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "This graph of force versus time shows how the force acts on an object of mass <i>m</i> for a total time of <i>T</i> seconds. If the mass begins at rest, which is the correct method to find the final speed of the mass?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w60\" role=\"presentation\" src=\"images/f182-01.jpg\"/></p>",
                "options": [
                    "Average value of this graph times total time divided by mass",
                    "Area under this graph divided by mass",
                    "Since the final force is zero, the object is at rest after time <i>T</i>",
                    "Average slope of this graph divided by mass"
                ],
                "answer": "B",
                "explanation": "Impulse = area of <i>F</i> vs. <i>T</i> graph = Δ<i>p</i> = <i>mv</i><sub><i>f</i></sub> − 0</p>\r\n<p class=\"numpt\">Solving for <i>v</i><sub><i>f</i></sub> = (area under graph)/<i>m</i></p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_17",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A child of unknown mass is on a swing of unknown length that varies in height from 75 cm at its lowest height above the ground to a maximum height of 225 cm above the ground. Is there enough information to find the speed of the swing at its lowest point?</p>",
                "options": [
                    "No, the child’s mass must be known.",
                    "No, the length of the swing must be known to determine the centripetal acceleration.",
                    "Yes, it is 5.5 m/s.",
                    "Yes, it is 4 m/s."
                ],
                "answer": "C",
                "explanation": "Conservation of energy:</p>\r\n\\[ T = 2\\pi\\sqrt{\\frac{m}{k}} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_18",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "The gravitational force of attraction between two identical masses is 36 N when the masses are separated by a distance of 3 m. If the distance between them is reduced to 1 m, which of the following is true about the net gravitational field strength due to both masses being at the halfway point?</p>",
                "options": [
                    "It is 9 times stronger total.",
                    "Not enough information is given to determine net gravitational field strength.",
                    "Each mass’s gravitation is 9 times stronger, so the net gravitational field strength is 18 times stronger.",
                    "It is zero."
                ],
                "answer": "D",
                "explanation": "Gravitational field strength halfway between any two equal masses is always zero as each contributes oppositely directed gravitational fields.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_19",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 200-kilogram cart rests on top of a frictionless hill as shown below. Can the impulse required to stop the cart when it is at the top of the 10-meter hill be calculated?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w72\" role=\"presentation\" src=\"images/f182-02.jpg\"/></p>",
                "options": [
                    "No, more information about friction is required.",
                    "No, more information about the impulse is required.",
                    "Yes, calculate the velocity from free-fall kinematics and use this velocity in the change in momentum equation.",
                    "Yes, calculate the speed from energy conservation and use this speed in the change in momentum equation."
                ],
                "answer": "D",
                "explanation": "Conservation of energy while on the frictionless hill can give the speed at the top of the 10-m hill:</p>\r\n\\[ a_c = \\omega^2 r = (2\\pi f)^2 r \\]\r\n<p class=\"numpt\">Then impulse equals change in momentum can be used since the final momentum must be zero.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_20",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object of mass <i>m</i> starts at a height of <i>H</i><sub>1</sub> with a speed of <i>v</i><sub>1</sub>. A few minutes later, it is at a height of <i>H</i><sub>2</sub> and a speed <i>v</i><sub>2</sub>. Which of the following expressions best represents the work done to the mass by nongravitational forces to the object during this time?</p>",
                "options": [
                    "\(mg(H_2 - H_1) + \frac{1}{2}m(v_2^2 - v_1^2)\)",
                    "\(mg(H_2 - H_1) - \frac{1}{2}m(v_2^2 - v_1^2)\)",
                    "\(\frac{1}{2}m(v_2^2 - v_1^2)\)",
                    "\(\frac{1}{2}m(v_1^2 - v_2^2)\)"
                ],
                "answer": "A",
                "explanation": "\\[ L = I\\omega \\implies I_1\\omega_1 = I_2\\omega_2 \\]\r\n<p class=\"numpt\">Work by forces other than gravity = change in energy</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_21",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object with 0.2-kg mass is pushed down vertically onto an elastic spring (<i>k</i> = 20 N/m). The spring is compressed by 20 cm and then released such that the object will fly off. Which of the following will have the largest effect on increasing the maximum height the object will fly? (Assume no air resistance.)</p>",
                "options": [
                    "Halving the mass",
                    "Doubling the compression distance",
                    "Using a spring with a spring constant twice as big",
                    "Doing the same experiment on a different planet with half the gravitational field strength"
                ],
                "answer": "B",
                "explanation": "Energy conservation:</p>\r\n\\[ \\omega_2 = \\frac{I_1}{I_1/3}\\omega_1 = 3\\omega_1 \\]\r\n<p class=\"numpt\">Solving for <i>h</i>:</p>\r\n\\[ KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}\\left(\\frac{I_1}{3}\\right)(3\\omega_1)^2 = 3\\left(\\frac{1}{2}I_1\\omega_1^2\\right) \\]\r\n<p class=\"numpt\">Doubling <i>x</i> will quadruple the height, whereas all other factors will only double the height.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_22",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A cart with a mass of <i>m</i> needs to complete a loop-the-loop of radius <i>r</i>, as shown above. What is the approximate minimum velocity required to achieve this goal?</p>",
                "options": [
                    "(<i>gr</i>)<sup>½</sup>",
                    "(5<i>gr</i>)<sup>½</sup>",
                    "2(<i>gr</i>)<sup>½</sup>",
                    "(2<i>gr</i>)<sup>½</sup>"
                ],
                "answer": "B",
                "explanation": "Circular motion at the top:</p>\r\n\\[ \\alpha = \\frac{\\omega_f - \\omega_i}{t} = \\frac{0 - 150(2\\pi/60)}{2} = \\frac{-5\\pi}{2} = -2.5\\pi\\text{ rad/s}^2 \\]\r\n<p class=\"numpt\">The lowest speed will be when there is no normal force (<i>N</i> = 0):</p>\r\n<p class=\"center1\">\\(mg = m v^2/r, v_{\\text{top}} = (gr)^{1/2}\\)</p>\r\n<p class=\"numpt\">Kinetic energy at the bottom must give both this speed and potential energy to gain 2<i>r</i> in height:</p>\r\n<p class=\"center1\">\\(E_{\\text{bottom}} = E_{\\text{top}}, \\frac{1}{2}m v^2 = g m (2r) + \\frac{1}{2} m v_{\\text{top}}^2\\)</p>\r\n<p class=\"numpt\">Solving for <i>v</i>:</p>\r\n<p class=\"center1\">\\(v = (5gr)^{1/2}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_23",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A particle traveling in the direction shown below experiences the force shown. In this situation, the particle will</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w67\" role=\"presentation\" src=\"images/f183-02.jpg\"/></p>",
                "options": [
                    "slow down only",
                    "speed up only",
                    "turn and speed up",
                    "neither turn nor change speed"
                ],
                "answer": "C",
                "explanation": "Since the force shown has components both in the same direction as the velocity (causing it to speed up) and at right angles to the velocity (causing it to turn toward the bottom of the page), the particle will both speed up and turn.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_24",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following velocity component versus time graphs match a person riding an elevator steadily downward on a cruise boat that is accelerating out of port (assume <i>y</i> is vertical and <i>x</i> is horizontal)?</p>",
                "options": [
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"images/f183-04.jpg\"/>",
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"images/f183-05.jpg\"/>",
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"images/f183-06.jpg\"/>",
                    "<img alt=\"\" class=\"w58 inlinet\" role=\"presentation\" src=\"images/f183-07.jpg\"/>"
                ],
                "answer": "C",
                "explanation": "Since the elevator is moving downward at constant speed, the <i>y</i>-component of velocity should be a constant negative value. On the other hand, the horizontal acceleration of the boat will cause an increasingly positive <i>x</i>-component of velocity.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_25",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "If a mass of 9 kg begins at rest and experiences the following net force, what is its speed after 3 seconds?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w67\" role=\"presentation\" src=\"images/f183-08.jpg\"/></p>",
                "options": [
                    "0 m/s",
                    "1 m/s",
                    "2 m/s",
                    "4 m/s"
                ],
                "answer": "B",
                "explanation": "Impulse is the area under the curve. For the first three seconds, this amounts to</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}(6)(3) = 9\\text{ N}\\cdot\\text{s}\\)</p>\r\n<p class=\"numpt\">This impulse will increase the momentum by 9 kg m/s. Since the object has a mass of 9 kg, this indicates an increase in speed of 1 m/s.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_26",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Two blocks are sliding to the right as shown below. If they are brought to a stop by a force <i>F</i> applied from the right, what is the net work done to the two blocks as they are brought to a stop?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w25\" role=\"presentation\" src=\"images/f184-01.jpg\"/></p>",
                "options": [
                    "−1.5 <i>mv</i><sup>2</sup>",
                    "−0.5 <i>mv</i><sup>2</sup>",
                    "−<i>Fv</i>",
                    "−<i>mv</i><sup>2</sup>"
                ],
                "answer": "A",
                "explanation": "Work done is equal to the change in kinetic energy:</p>\r\n<p class=\"center1\">\\(K_f - K_i = 0 - \\frac{1}{2}(3m)v^2 = -1.5 m v^2\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_27",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A satellite is launched to twice the orbital radius of a similar satellite (both are in stable circular Earth orbits). Compare the kinetic energies of the two satellites.</p>",
                "options": [
                    "They have the same kinetic energy.",
                    "The lower satellite has half the kinetic energy of the higher satellite.",
                    "The higher satellite has half the kinetic energy of the lower satellite.",
                    "The ratio of the kinetic energies of the two satellites is a factor of four."
                ],
                "answer": "C",
                "explanation": "Circular orbits have universal gravity acting as the centripetal force, which causes the centripetal acceleration of <i>v</i><sup>2</sup>/<i>r</i>:</p>\r\n<p class=\"center1\">\\(F_c = m a_c, \\frac{G M_e M}{r^2} = \\frac{m v^2}{r}\\)</p></li>\r\n<li><p class=\"numpt\">Since all other values are constant, we see here <i>v</i><sup>2</sup> is proportional to 1/<i>r</i>.</p></li>\r\n<li><p class=\"nump\">So an orbit that has twice the radius will have half the <i>v</i><sup>2</sup>.</p></li>\r\n<li><p class=\"nump\">Kinetic energy varies a <i>v</i><sup>2</sup>:</p>\r\n<p class=\"center1\">\\(K = \\frac{1}{2} m v^2\\)</p>\r\n<p class=\"numpt\">Thus, the higher orbital will have half the kinetic energy of the lower orbit.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_28",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "It has been documented that a major earthquake on Earth can change the time it takes the planet to rotate fully. From this, one can conclude that</p>",
                "options": [
                    "the Earth is not an isolated system",
                    "a net torque was applied to the planet",
                    "the rotational inertia of the planet was changed",
                    "work was done to the planet somehow"
                ],
                "answer": "C",
                "explanation": "A change in rotational speed can either be accomplished via an interaction with an external torque or by a change in rotational inertia, which keeps angular momentum conserved in an isolated system by adjusting the angular speed:</p>\r\n<p class=\"center1\">\\(I\\omega = \\text{constant}\\)</p>\r\n<p class=\"numpt\">Since the earthquake is not an external force to the Earth, the shifting of mass to different radial values must have changed the rotational inertia of the planet. This is similar to a diver adjusting their spin rate by extending or tucking their body in as they drop into the water.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_29",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Compare the two columns of water pictured below. They have the same height. Which of the following statements compares the total weight and the pressure at the bottom of the columns?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w38\" role=\"presentation\" src=\"images/f184-02.jpg\"/></p>",
                "options": [
                    "Weight and pressure are greater for the wider column.",
                    "Weight and pressure are the same for both.",
                    "Weight is greater for the wider column, while pressure is the same.",
                    "Weight is the same, while pressure is greater for the wider column."
                ],
                "answer": "C",
                "explanation": "Weight is greater for the wider column, while pressure is the same. Although the wider column has a greater volume of water and therefore more mass, the fact that the height remains constant means any unit area on the bottom of the column will experience the same force/area (pressure).</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_30",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An otherwise similar boat will ride higher in a fluid (i.e., have less submerged volume) if</p>",
                "options": [
                    "the fluid’s density is raised",
                    "the fluid’s temperature is raised",
                    "the boat’s density is raised",
                    "the boat shifts its cargo to a lower deck"
                ],
                "answer": "A",
                "explanation": "The fluid’s density is raised. The buoyancy force that lifts the boat upward is proportional to the weight of the fluid displaced. The boat will rise or sink until the buoyant force and the boat’s weight cancel. Raising the fluid’s temperature will usually make the fluid less dense, requiring a greater displacement of water (i.e., the boat will ride lower). Raising the boat’s density will increase its weight, requiring a greater displacement of water. Finally, shifting the cargo around will have no effect as the weight and shape of the boat remain unaffected.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_31",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Fluid is poured into an open U-shaped tube as shown below. If a person blows across the top of the right-hand side’s opening, what will happen to the fluid in the tube?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w38\" role=\"presentation\" src=\"images/f184-03.jpg\"/></p>",
                "options": [
                    "It will remain the same.",
                    "It will rise on the right-hand side and lower on the left-hand side.",
                    "It will rise on both sides.",
                    "It will rise on the left-hand side and lower on the right-hand side."
                ],
                "answer": "B",
                "explanation": "It will rise on the right-hand side and lower on the left-hand side. Blowing over the right-hand side will lower the pressure at that height:</p>\r\n<p class=\"center1\">\\(\\frac{1}{2}\\rho v^2 + \\rho gh + P = \\text{constant}\\)</p>\r\n<p class=\"numpt\">Remember that <i>h</i> remains the same while <i>v</i> is raised, forcing <i>P</i> lower. This causes an imbalance in pressure between the right-hand side (lower pressure) and left-hand side (higher pressure). This difference in pressure causes a net force pushing the fluid upward on the right and downward on the left.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_32",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A boat moving due north crosses a river 240 meters wide with a velocity of 8 meters per second relative to the water. The river flows east with a velocity of 6 meters per second. How far downstream will the boat be when it has crossed the river?</p>",
                "options": [
                    "240 m",
                    "180 m",
                    "420 m",
                    "300 m"
                ],
                "answer": "B",
                "explanation": "Find time to cross the river using only perpendicular components:</p>\r\n<p class=\"center1\">\\(D = V_y t, 240 = 8t, t = 30\\text{ s}\\)</p>\r\n<p class=\"numpt\">Next find the downstream distance using the parallel component:</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w37\" role=\"presentation\" src=\"images/f193-08.jpg\"/></p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_33",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A variable force acts on a 2-kilogram mass according to the graph below.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w67\" role=\"presentation\" src=\"images/f185-01.jpg\"/></p>\r\n<p class=\"exp\">How much work was done while displacing the mass 10 meters?</p>",
                "options": [
                    "40 J",
                    "38 J",
                    "32 J",
                    "30 J"
                ],
                "answer": "C",
                "explanation": "Work is the area under the curve:</p>\r\n<p class=\"center1\">\\((4\\text{ N})(6\\text{ m}) + (2\\text{ N})(4\\text{ m}) = 24\\text{ J} + 8\\text{ J} = 32\\text{ J}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_34",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A man weighing himself is standing on a bathroom scale in an elevator that is accelerating upward at a rate of 0.5 meter per second squared. By what percentage is the reading of the scale off from the person’s true weight?</p>",
                "options": [
                    "0% (accurate)",
                    "5% too high",
                    "5% too low",
                    "0.5% too high"
                ],
                "answer": "B",
                "explanation": "The bathroom scale reads the normal force:</p>\r\n<p class=\"center1\">\\(F_{\\text{net}} = N - mg = ma, 0.5\\text{ m/s}^2 = 0.05g, N - mg = m(0.05g), N = m(1.05g)\\)</p>\r\n<p class=\"numpt\">The reading will be 5% too high.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_35",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A 50-kilogram person is sitting on a seesaw 1.2 meters from the balance point. On the other side, a 70-kilogram person is balanced. How far from the balance point is the second person sitting?</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w70\" role=\"presentation\" src=\"images/f185-02.jpg\"/></p>",
                "options": [
                    "0.57 m",
                    "0.75 m",
                    "0.63 m",
                    "0.86 m"
                ],
                "answer": "D",
                "explanation": "Balanced means the torques are equal and opposite:</p>\r\n<p class=\"center1\">\\(50\\text{ kg} \\cdot g \\cdot 1.2 = 70\\text{ kg} \\cdot g \\cdot x, x = 6/7 = 0.86\\text{ m}\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_36",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "An object rolls down a steep incline with very little friction. At the same time, an object of equal mass slides down a similar but frictionless incline. Which one takes less time to get to the bottom?</p>",
                "options": [
                    "They take the same time.",
                    "The rolling object takes less time.",
                    "The sliding object takes less time.",
                    "The answer depends on the rolling object’s rotational inertia."
                ],
                "answer": "C",
                "explanation": "Both objects start with the same potential energy. However, the rolling object must use some of that potential energy for rotational energy, leaving less for linear kinetic energy. Therefore, the rolling object moves more slowly down the hill.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_37",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "What is the value of <i>g</i> at a position above Earth’s surface equal to Earth’s radius?</p>",
                "options": [
                    "9.8 N/kg",
                    "4.9 N/kg",
                    "2.45 N/kg",
                    "1.6 N/kg"
                ],
                "answer": "C",
                "explanation": "Universal gravity (and the gravitational field) are 1/<i>r</i><sup>2</sup> laws; doubling <i>r</i> will quarter the field.</p>\r\n<p class=\"center1\">\\(\\frac{1}{4}g = \\frac{1}{4}(9.8\\text{ N/kg})\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_38",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If an object is spinning at 150 RPM (revolutions per minute) and comes to a stop in 2 seconds, what is its average acceleration in radians/s<sup>2</sup>?</p>",
                "options": [
                    "−2.5π",
                    "−2π",
                    "−5π",
                    "−10π"
                ],
                "answer": "A",
                "explanation": "First, convert RPMs to rad/s:</p>\r\n<p class=\"center1\">\\(150\\text{ rev/min} \\times (2\\pi/1\\text{ rev}) \\times (1\\text{ min}/60\\text{ s}) = 5\\pi\\text{ rad/s}, \\text{acceleration} = \\frac{0 - 5\\pi\\text{ rad/s}}{2\\text{ s}} = -2.5\\pi\\text{ rad/s}^2\\)</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_39",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "What is the work done by a horizontal spring (spring constant <i>k</i>) expanding from a compression distance <i>x</i> to an extension distance <i>x</i> to an attached mass?</p>",
                "options": [
                    "2<i>kx</i><sup>2</sup>",
                    "½<i>kx</i><sup>2</sup>",
                    "<i>kx</i><sup>2</sup>",
                    "0"
                ],
                "answer": "D",
                "explanation": "\\( \\omega \\) of work is delivered to the mass while uncompressing, followed by − \\( \\omega \\) done while the mass extends the spring outward, totaling to 0 net work for the entire expansion. Alternatively, think about the velocity being zero at the beginning and end of that single oscillation. No change in kinetic energy occurs; therefore, no net work is done.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_1_40",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If an isolated spinning object’s rotational inertia is reduced by a factor of 3 by internal forces, how will its angular momentum change?</p>",
                "options": [
                    "Angular momentum will be 3 times its previous value.",
                    "Angular momentum will be reduced to 1/3 its previous value.",
                    "Angular momentum will be reduced to 1/9 its previous value.",
                    "Angular momentum will remain unchanged."
                ],
                "answer": "D",
                "explanation": "No external torque means momentum must be conserved.</p></li>\r\n</ol>"
            }
        ]
    },
    "ap-mock-phys1-full-2": {
        "id": "ap-mock-phys1-full-2",
        "title": "AP Physics 1 Full Practice Exam 2",
        "subtitle": "Complete official practice exam 2 simulating Section I Multiple-Choice Questions with in-depth solutions",
        "timeLimitMinutes": 80,
        "testType": "Full Mock",
        "subject": "AP Physics 1",
        "topic": "Comprehensive AP Physics 1",
        "questions": [
            {
                "id": "mock_phys1_2_1",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A block (<i>m</i> = 1.5 kg) is pushed along a frictionless surface for a distance of 2.5 meters, as shown above. How much work has been done if a force of 10 newtons makes an angle of 60 degrees with the horizontal?</p>",
                "options": [
                    "Zero",
                    "12.5 J",
                    "21.6 J",
                    "25 J"
                ],
                "answer": "B",
                "explanation": "Work = <i>fd</i> cos 60° = (10 N)(2.5)(0.5) = 12.5 J</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_2",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "What is the instantaneous power due to the gravitational force acting on a 3-kilogram projectile the instant the projectile is traveling with a velocity of 10 meters per second at an angle of 30 degrees above the horizontal?</p>",
                "options": [
                    "300 W",
                    "150 W",
                    "−150 W",
                    "−300 W"
                ],
                "answer": "C",
                "explanation": "\\[ W = F d \\cos(60^\\circ) = (10\\text{ N})(2.5\\text{ m})(0.5) = 12.5\\text{ J} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_3",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A hockey puck of an unknown mass is sliding along ice that can be considered frictionless with a velocity of 10 meters per second. The puck then crosses over onto a rough floor that has a coefficient of kinetic friction equal to 0.2. How far will the puck travel before friction stops it?</p>",
                "options": [
                    "2.5 m",
                    "5 m",
                    "25 m",
                    "Depends on the mass"
                ],
                "answer": "C",
                "explanation": "\\[ P = F v = (50\\text{ N})(10\\text{ m/s}) = 500\\text{ W} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_4",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A dart is placed onto a spring. The spring is stretched a distance <i>x</i>. By what factor must the spring’s elongation be changed so that the maximum kinetic energy given to the dart is doubled?</p>",
                "options": [
                    "1/2",
                    "2",
                    "4",
                    "\\sqrt{2}"
                ],
                "answer": "D",
                "explanation": "Conservation of energy:</p>\r\n\\[ PE_s = \\frac{1}{2}kx^2 \\implies \\text{doubling } PE \\implies x_{\\text{new}} = \\sqrt{2}\\,x \\]\r\n<p class=\"exp\">Since we need <i>x</i><sup>2</sup> to double, increase <i>x</i> by (2)<sup>½</sup> = \\sqrt{2}.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_5",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 10-kilogram projectile is launched at a 60° angle to the ground, with a velocity of 200 m/s. Neglect air resistance. The ground is level.</p>\r\n<p class=\"exp\">Compare this projectile with a 5-kilogram projectile launched under the same conditions but at a 30° angle. The 5-kilogram projectile will</p>",
                "options": [
                    "go higher up and farther along the ground",
                    "go equally high and equally far along the ground",
                    "neither go as high nor as far along the ground",
                    "not go as high but go equally far along the ground"
                ],
                "answer": "D",
                "explanation": "The 30° and 60° angles will have equal ranges but with the roles of <i>V</i><sub><i>x</i></sub> and <i>V</i><sub><i>y</i></sub> reversed. Therefore, the projectile launched at a 30° angle will not go as high. Note that mass does not enter into projectile motion problems.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_6",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A uniform rod of mass <i>M</i> and length <i>L</i> is rotated about its center as shown below. Given that the rotational inertia of a rod about its center is (1/12)<i>ML</i><sup>2</sup>, determine the net torque experience by the rod as it rotates from an angular speed of <i>w</i><sub>1</sub> to <i>w</i><sub>2</sub> in 0.5 seconds.</p>\r\n<p class=\"center1\"><img alt=\"\" class=\"w31\" role=\"presentation\" src=\"images/f204-01.jpg\"/></p>",
                "options": [
                    "\((\omega_2 - \omega_1) M L^2 / 12\)",
                    "\((\omega_2 - \omega_1) M L^2 / 6\)",
                    "\(\omega_2 \omega_1 M L^2\)",
                    "\((\omega_2 / \omega_1) M L^2 / 12\)"
                ],
                "answer": "B",
                "explanation": "First determine an expression for the angular acceleration:</p>\r\n\\[ \\alpha = \\frac{\\Delta\\omega}{\\Delta t} = \\frac{20 - 0}{4} = 5\\text{ rad/s}^2 \\]\r\n<p class=\"exp\">Now use this in the expression for net torque:</p>\r\n\\[ \\tau = I\\alpha = (2\\text{ kg}\\cdot\\text{m}^2)(5\\text{ rad/s}^2) = 10\\text{ N}\\cdot\\text{m} \\]\r\n<p class=\"exp\">Finally, substitute in the given expression for the rotational inertia:</p>\r\n\\[ \\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(5)(4^2) = 40\\text{ rad} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_7",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "An object of mass <i>m</i> rests on top of a spring that has been compressed by <i>x</i> meters. The force constant for this spring is <i>k.</i> The mass is not attached to the spring and will shoot upward when the spring is uncompressed. When released, how high will the mass rise?</p>",
                "options": [
                    "<i>mg</i> − <i>kx</i>",
                    "<i>kx</i><sup>2</sup>/<i>mg</i>",
                    "(<i>kx</i><sup>2</sup>/2<i>mg</i>) − <i>x</i>",
                    "(<i>k</i>/<i>m</i>)<sup>1/2</sup> <i>x</i>"
                ],
                "answer": "C",
                "explanation": "\\[ a_c = \\frac{v^2}{r} = \\frac{10^2}{5} = 20\\text{ m/s}^2 \\]\r\n<p class=\"exp\"><i>h</i> = <i>kx</i><sup><i>2</i></sup>/2<i>mg</i> above the starting point. Since the release point is a distance <i>x</i> above the starting point, we must subtract <i>x</i> from the answer.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_8",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "Which of the following is the best method for finding a spring’s force constant <i>k</i>?</p>",
                "options": [
                    "Hanging a known mass on the spring and dividing the weight by the length of the spring",
                    "Hanging several known masses on the spring, taking the average value of the mass, and dividing by the average length of the spring",
                    "Hanging several known masses on the spring and finding the area under the curve after plotting force versus extension",
                    "Hanging several known masses on the spring and finding the slope of the graph after plotting force versus extension"
                ],
                "answer": "D",
                "explanation": "<i>F</i> = <i>kx</i>. So when graphing <i>f</i> versus <i>x</i>, <i>k</i> will be the slope. The extension of the spring is <i>x</i> when <i>F</i> is the force applied to the spring.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_9",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "How much of a braking force is applied to a 2,500-kilogram car on the Moon (<i>g</i> = 1.6 m/s<sup>2</sup>) that has an initial velocity of 30 meters per second if the car is brought to a stop in 15 seconds?</p>",
                "options": [
                    "5,000 N",
                    "6,000 N",
                    "8,000 N",
                    "25,000 N"
                ],
                "answer": "A",
                "explanation": "\\[ F_{\\text{brake}} = ma = (2500\\text{ kg})\\left(\\frac{30\\text{ m/s}}{15\\text{ s}}\\right) = 5000\\text{ N} \\]\r\n<p class=\"exp\">The negative sign indicates an opposing force. Note that weight is not needed in this calculation, so the value of <i>g</i> is irrelevant.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_10",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "easy",
                "question": "A 1-kilogram object is moving to the right with a velocity of 6 meters per second. It collides with and sticks to a 2-kilogram mass, which is also moving to the right, with a velocity of 3 meters per second. What happens to the total kinetic energy during this collision?</p>",
                "options": [
                    "The kinetic energy is conserved because the collision is elastic.",
                    "The kinetic energy is conserved even though the collision is not elastic.",
                    "Some kinetic energy is lost during the collision even though total momentum is conserved.",
                    "Some kinetic energy is lost during the collision because of the elastic nature of the collision."
                ],
                "answer": "C",
                "explanation": "Momentum is always conserved. However, kinetic energy is lost unless the collision is elastic, in which case the kinetic energy is also conserved:</p>\r\n\\[ p_i = (1)(6) + (2)(0) = 6\\text{ kg}\\cdot\\text{m/s} \\]\r\n<p class=\"exp\">Initial <i>KE</i>:</p>\r\n\\[ KE_i = \\frac{1}{2}(1)(6^2) = 18\\text{ J}, \\quad KE_f = \\frac{1}{2}(1)(0) + \\frac{1}{2}(2)(3.87^2) = 15\\text{ J} \\]\r\n<p class=\"exp\">Final <i>KE</i>:</p>\r\n\\[ \\Delta KE = 18\\text{ J} - 15\\text{ J} = 3\\text{ J (lost)} \\]\r\n<p class=\"exp\">3 joules are lost.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_11",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A ball with a mass of 0.2 kilogram strikes a wall with a velocity of 3 meters per second. It bounces straight back with a velocity of 1 meter per second. What was the magnitude of the impulse delivered to this ball?</p>",
                "options": [
                    "0.2 kg · m/s",
                    "0.4 kg · m/s",
                    "0.6 kg · m/s",
                    "0.8 kg · m/s"
                ],
                "answer": "D",
                "explanation": "Impulse = Δ<i>p</i> = <i>p</i><sub><i>f</i></sub> − <i>p</i><sub><i>i</i></sub> = 0.2(−1) − (0.2)(3) = −0.8 kg · m/s</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_12",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following is an equivalent expression for the maximum velocity attained by a mass <i>m</i> oscillating horizontally along a frictionless surface? The mass is attached to a spring with a force constant <i>k</i> and has an amplitude of <i>A</i>.</p>",
                "options": [
                    "<i>Ak</i>/<i>m</i>",
                    "<i>A</i>(<i>k</i>/<i>m</i>)½",
                    "<i>mg</i>/<i>kA</i>",
                    "<i>A</i><sup>2</sup><i>k</i>/<i>m</i>"
                ],
                "answer": "B",
                "explanation": "\\[ mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} \\]\r\n<p class=\"exp\">Conservation of energy:</p>\r\n\\[ \\frac{v_A}{v_B} = \\sqrt{\\frac{h_A}{h_B}} = \\sqrt{\\frac{4}{1}} = 2 \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_13",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A 0.5-kilogram mass is attached to a spring with a force constant of 50 newtons per meter. What is the total energy stored in the mass-spring system if the mass travels a distance of 8 cm in one cycle?</p>",
                "options": [
                    "0.5 J",
                    "0.01 J",
                    "0.04 J",
                    "0.08 J"
                ],
                "answer": "B",
                "explanation": "In one cycle, the mass travels 4 amplitudes:</p>\r\n\\[ a = \\frac{F - f_k}{m} = \\frac{50 - 10}{10} = 4\\text{ m/s}^2 \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_14",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following expressions is equivalent to the magnitude of the escape velocity in terms of the magnitude of the orbital velocity <i>v</i> for a spacecraft?</p>",
                "options": [
                    "2<i>v</i>",
                    "<i>v</i>",
                    "4<i>v</i>",
                    "\\sqrt{2}<i>v</i>"
                ],
                "answer": "D",
                "explanation": "Orbital velocity:</p>\r\n\\[ v_{\\text{orbit}} = \\sqrt{\\frac{GM}{R}} \\]\r\n<p class=\"exp\">Escape velocity:</p>\r\n\\[ v_{\\text{escape}} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2}\\,v_{\\text{orbit}} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_15",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following graphs correctly shows the relationship between magnitude of gravitational force and distance between two masses?</p>",
                "options": [
                    "\\( 10\\text{ N} \\)",
                    "\\( 20\\text{ N} \\)",
                    "\\( 30\\text{ N} \\)",
                    "\\( 40\\text{ N} \\)"
                ],
                "answer": "B",
                "explanation": "The gravitational force between two masses has a 1/<i>r</i><sup>2</sup> relationship (where <i>r</i> is the distance from center to center). Graph B shows the correct inverse relationship.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_16",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following statements is true regarding why the net work done in lifting a book from the ground to the top of a shelf is zero?</p>",
                "options": [
                    "Air resistance (friction) took away any increase in kinetic energy.",
                    "Gravitational potential energies are always negative.",
                    "The force used to lift the book is a conservative force.",
                    "The change in kinetic energy of the book is zero."
                ],
                "answer": "D",
                "explanation": "Net work done to an object results in a change in kinetic energy. In this case the book has no kinetic energy at the beginning and at the end of its trip:</p>\r\n\\[ a_c = \\omega^2 R \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_17",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following best describes the forces present as a brick is sliding along the horizontal ground and coming to a halt?</p>",
                "options": [
                    "The net force is equal to the force of friction.",
                    "The inertia of the brick is supplied by the original push that got the brick moving.",
                    "The forces on the brick are in equilibrium.",
                    "The brick is pushing on the air in front of it harder than the air is pushing back on the brick."
                ],
                "answer": "A",
                "explanation": "The brick is experiencing three forces: a vertical normal and weight force that cancel out as well as a horizontal force of friction opposing the motion. This force is unopposed and is the cause of the deceleration of the brick. The inertia of the brick is provided by the fact that it is a mass in motion and would continue to move at constant velocity if there were no friction present. The pushing force is no longer active on the brick and plays no role in the analysis.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_18",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A projectile is launched at a 30° angle to the ground with a velocity of 200 m/s. What is its speed at its maximum height?</p>",
                "options": [
                    "9.8 m/s",
                    "100 m/s",
                    "173 m/s",
                    "200 m/s"
                ],
                "answer": "C",
                "explanation": "At maximum height, all speed is from <i>V</i><sub><i>x</i></sub>:</p>\r\n\\[ T = 2\\pi\\sqrt{\\frac{L}{g}} \\implies g = L\\left(\\frac{2\\pi}{T}\\right)^2 \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_19",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A conical pendulum consists of a mass <i>m</i> attached to a light string of length <i>L</i>. The mass swings around in a horizontal circle, making an angle θ with the vertical as shown above. What is the magnitude of tension, <i>T</i>, in the string?</p>",
                "options": [
                    "<i>mg</i>/cos θ",
                    "<i>mg</i> cos θ",
                    "<i>mg</i>/sin θ",
                    "<i>mg</i> sin θ"
                ],
                "answer": "A",
                "explanation": "Vertical forces must cancel:</p>\r\n\\[ F = -kx \\implies k = \\frac{F}{x} = \\frac{40\\text{ N}}{0.1\\text{ m}} = 400\\text{ N/m} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_20",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "The magnitude of the one-dimensional momentum of a 2-kilogram particle obeys the relationship <i>p</i> = 2<i>t</i> + 3. What was the velocity of the particle at <i>t</i> = 1 second?</p>",
                "options": [
                    "5 m/s",
                    "2 m/s",
                    "1 m/s",
                    "2.5 m/s"
                ],
                "answer": "D",
                "explanation": "<i>v</i> = <i>p</i>/<i>m</i> = (2 × 1 + 3)/2 = 2.5 m/s</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_21",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An object is experiencing a nonzero net force. Which of the following statements is most accurate?</p>",
                "options": [
                    "The linear and angular momentums of the object are both definitely changing.",
                    "Although the linear momentum of the object is definitely changing, the angular momentum may not be.",
                    "Although the angular momentum of the object is definitely changing, the linear momentum may not be.",
                    "Neither the linear momentum nor the angular momentum is definitely changing."
                ],
                "answer": "B",
                "explanation": "Since \\( \\vec{F}_{\\text{net}} = \\frac{\\Delta\\vec{p}}{\\Delta t} \\), a net force will change the linear momentum. However, torque also involves the lever arm (τ = <i>RF</i> sin θ). So despite having a nonzero net force, the net torque might still be zero.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_22",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "A car with a 500-newton driver goes over a hill that has a radius of 50 meters as shown above. The velocity of the car is 20 meters per second. What are the approximate force and the direction that the car exerts on the driver?</p>",
                "options": [
                    "900 N, up",
                    "400 N, down",
                    "100 N, up",
                    "500 N, up"
                ],
                "answer": "C",
                "explanation": "Circular motion:</p>\r\n\\[ N - mg = m\\left(\\frac{v^2}{R}\\right) \\]\r\n<p class=\"exp\"><i>N</i> is the force the car exerts on the driver:</p>\r\n\\[ N = m\\left(g + \\frac{v^2}{R}\\right) \\]\r\n<p class=\"exp\">Note that the correct answer can be found by simply knowing that the net force must be down and that the car must be pushing upward on the passenger.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_23",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "What is the net torque acting on the pivot supporting a uniform stationary 10-kilogram beam 2 meters long as shown above?</p>",
                "options": [
                    "198 N · m",
                    "−198 N · m",
                    "−102 N · m",
                    "102 N · m"
                ],
                "answer": "D",
                "explanation": "Take the center of mass to be 1 meter from the pivot:</p>\r\n\\[ P = \\rho g h \\implies h = \\frac{P}{\\rho g} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_24",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "Which of the following statements best describes the acceleration over the 55 seconds of time graphed above?</p>",
                "options": [
                    "Increasing, constant, decreasing, increasing",
                    "Positive, zero, negative, positive",
                    "Positive until the 30 second mark, then negative for the rest of the trip",
                    "The net acceleration is approximately 500 m/s/s for the entire trip."
                ],
                "answer": "B",
                "explanation": "Acceleration is the slope on velocity versus time graphs. Since there are four separate intervals of straight lines, there are four intervals of constant acceleration: positive for the first 10 seconds, zero for the subsequent 5 seconds, a negative acceleration from the 15th to the 40th second, and positive for the last 15 seconds.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_25",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "What is the average acceleration for the 55 seconds of the graph?</p>",
                "options": [
                    "Approximately 500/55 m/s/s",
                    "Approximately 5/4 m/s/s",
                    "Approximately −100/25 m/s/s",
                    "Approximately 0 m/s/s"
                ],
                "answer": "D",
                "explanation": "To find the average acceleration for any interval on a velocity vs. time graph, connect the beginning of the interval to the end of the interval and find the slope of that line. In this case, the graph begins and ends on the axis and therefore the connecting line is horizontal: slope = 0.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_26",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "How far does the car travel over the 55 seconds of the graph?</p>",
                "options": [
                    "1,550 m",
                    "550 m",
                    "0 m",
                    "Cannot be determined"
                ],
                "answer": "B",
                "explanation": "Displacement is area under the curve: +1,050 - 500 = 550 m</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_27",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "What is the instantaneous acceleration at the 40 second mark?</p>",
                "options": [
                    "0 m/s/s",
                    "−4/3 m/s/s",
                    "−10/3 m/s/s",
                    "−4 m/s/s"
                ],
                "answer": "D",
                "explanation": "What is the instantaneous acceleration is the slope at that point: −100/25 = −4 m/s/s</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_28",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "An old record player could bring a disk up to its 45 RPM speed in less than a second. If the same size disk can also be brought up to a speed of 75 RPM in about the same amount of time on another player, compare the two torques.</p>",
                "options": [
                    "The torques would be the same as the rotational inertia of the two disks is the same.",
                    "The torques would be the same because of the conservation of angular momentum.",
                    "The torque would be larger in the second case as it requires a greater angular acceleration.",
                    "The torque would be larger in the second case as it entails both a larger force and a larger lever arm."
                ],
                "answer": "C",
                "explanation": "\\[ \\alpha = \\frac{\\tau}{I} = \\frac{F r}{I} \\]\r\n<p class=\"exp\">Our only data provided are that the angular acceleration must be larger for the 75 RPM record and that the rotational inertia has not changed (same disk). Therefore, the torque supplied must be larger.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_29",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "How does the speed of the vertically launched sphere compare to the speed of the horizontally launched sphere as they each hit the floor?</p>",
                "options": [
                    "It is the same.",
                    "It is twice as great.",
                    "It is greater but not necessarily twice as great.",
                    "It is less."
                ],
                "answer": "A",
                "explanation": "Remember conservation of energy. Since both start at the same height (same potential energy) with the same kinetic energy, they will both hit the ground with the same joules of energy (all kinetic energy). The same kinetic energy means the same speed since their masses are the same. Note that this does not imply that both components of velocity are the same. They are not. This implies that only the magnitudes of the final velocity vectors are the same.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_30",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "medium",
                "question": "How does the time required for the vertically projected sphere to hit the floor compare with that for the horizontally projected sphere?</p>",
                "options": [
                    "It is the same.",
                    "It is twice as great.",
                    "It is greater but not necessarily twice as great.",
                    "It is less."
                ],
                "answer": "C",
                "explanation": "The vertically projected sphere will spend much more time in the air as it goes much higher. Without knowing the exact speed of the launch, it is not possible to say by what factor the time in flight is extended.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_31",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "How does the work done by gravity to the vertically launched sphere compare to the work done by gravity to the horizontally launched sphere?</p>",
                "options": [
                    "It is the same.",
                    "It is twice as great.",
                    "It is greater but not necessarily twice as great.",
                    "It is less."
                ],
                "answer": "A",
                "explanation": "The change in gravitational potential energy is the same for both. Therefore, the work done by gravity is the same.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_32",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If the density of the liquid is <i>ρ</i><sub><i>L</i></sub> and the density of the cube if <i>ρ</i><sub><i>c</i></sub>, which of the following is the correction expression of the mass of the cube? The cube is half submerged in the liquid.</p>",
                "options": [
                    "\\( m \\)",
                    "\\( 2m \\)",
                    "\\( 3m \\)",
                    "\\( 4m \\)"
                ],
                "answer": "C",
                "explanation": "First use the definition of density to find an expression for the mass of the cube:</p>\r\n\\[ T_1 = 2\\pi\\sqrt{\\frac{m}{k}} \\]\r\n<p class=\"exp\">Since this is not one of the answers, find an expression for equilibrium using Archimedes’ principle of buoyancy:</p>\r\n\\[ T_2 = 2\\pi\\sqrt{\\frac{m + \\Delta m}{k}} = 2 T_1 \\implies m + \\Delta m = 4m \\]\r\n<p class=\"exp\">Solve for mass:</p>\r\n\\[ \\Delta m = 3m \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_33",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "If the cube is submerged just under the surface of the liquid and then released, what will be the initial upward acceleration experienced by the cube?</p>",
                "options": [
                    "\\( a = 0 \\)",
                    "\\( a = g/3 \\)",
                    "\\( a = g/2 \\)",
                    "\\( a = g \\)"
                ],
                "answer": "D",
                "explanation": "The net force is the difference between the buoyancy force and the weight of the cube:</p>\r\n\\[ F_{\\text{net}} = mg - T = ma \\]\r\n<p class=\"exp\">Since this is the net force, to find the resulting acceleration, divide by the mass of the cube:</p>\r\n\\[ a = \\frac{mg - T}{m} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_34",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "How many radians of rotation did the disk experience during these 3 seconds?</p>",
                "options": [
                    "60",
                    "55",
                    "45",
                    "15"
                ],
                "answer": "B",
                "explanation": "The angular displacement is the area under the given graph:</p>\r\n\\[ \\rho_{\\text{obj}} V_{\\text{obj}} g = \\rho_{\\text{fluid}} V_{\\text{sub}} g \\implies \\frac{V_{\\text{sub}}}{V_{\\text{obj}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_35",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "What is the change in angular momentum experienced by the disk during each of the 3 seconds of rotation?</p>\r\n<p><b>Columns:</b> 0–1 seconds &bull; 1–2 seconds &bull; 2–3 seconds</p>",
                "options": [
                    "0 | 0 | -10 I",
                    "20 I | 20 I | -15 I",
                    "0 | 0 | -10 I /3",
                    "-10 I /3 | -10 I /3 | -10 I /3"
                ],
                "answer": "A",
                "explanation": "The change in angular momentum is the torque multiplied by the time:</p>\r\n\\[ \\Delta L = \\tau \\Delta t \\]\r\n<p class=\"exp\">Since each time interval is only 1 second:</p>\r\n\\[ \\tau = I\\alpha \\implies \\Delta L = I\\alpha \\Delta t \\]\r\n<p class=\"exp\">where <i>α</i> is the slope of the line in each interval.</p>\r\n<div class=\"top\">\r\n<table class=\"table0\">\r\n<colgroup>\r\n<col class=\"w10\"/>\r\n<col class=\"w30\"/>\r\n<col class=\"w30\"/>\r\n<col class=\"w30\"/>\r\n</colgroup>\r\n<thead>\r\n<tr>\r\n<td class=\"th-1\"/>\r\n<th class=\"th-2\" scope=\"col\"><p class=\"tabhc sans\"><b>0–1 seconds</b></p></th>\r\n<th class=\"th-2\" scope=\"col\"><p class=\"tabhc sans\"><b>1–2 seconds</b></p></th>\r\n<th class=\"th-3\" scope=\"col\"><p class=\"tabhc sans\"><b>2–3 seconds</b></p></th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n<tr>\r\n<td class=\"td-4\">\r\n<p class=\"tab\">Slope</p>\r\n</td>\r\n<td class=\"td-4\">\r\n<p class=\"tabc\">0</p>\r\n</td>\r\n<td class=\"td-4\">\r\n<p class=\"tabc\">0</p>\r\n</td>\r\n<td class=\"td-4\">\r\n<p class=\"tabc\">−10<i>I</i></p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_36",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A mass <i>M</i> at the end of a string is spun in a circle of radius <i>R</i> and a constant speed <i>V</i>. Compare the tension in the line when the circle is in a horizontal plane to that of the tensions at the top and bottom of a vertical plane.</p>\r\n<p><b>Columns:</b> Horizontal &bull; Vertical-top &bull; Vertical-bottom</p>",
                "options": [
                    "MV 2 / R | MV 2 / R | MV 2 / R",
                    "MV 2 / R | MV 2 / R - Mg | MV 2 / R - Mg",
                    "MV 2 / R | MV 2 / R + Mg | MV 2 / R - Mg",
                    "MV 2 / R | MV 2 / R - Mg | MV 2 / R + Mg"
                ],
                "answer": "D",
                "explanation": "In a horizontal plane, the tension is the only centripetal force. However, in a vertical plane, the tension and the force due to gravity are both along the radial line. At the top, gravity is working downward along with the tension so <i>F</i><sub>net</sub> = <i>T</i> + <i>mg</i> whereas, at the bottom, gravity is still downward while the tension is still directed inward <i>F</i><sub>net</sub> = <i>T</i> − <i>mg</i>. In all cases <i>F</i><sub>net</sub> = <i>MV</i><sup>2</sup>/<i>R</i>.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_37",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "An astronaut wakes up inside an accelerating rocket ship in deep space. Using her rubber band of unknown spring constant with attached (unknown) mass, she holds it up against the acceleration and notices the mass stretches the band downward by <i>X</i> meters. She then pulls it down an additional 5 cm and times the oscillation up and down to be <i>T</i> seconds. The acceleration of her rocket ship in terms of her measurements is</p>",
                "options": [
                    "<i>X</i>/<i>T</i><sup>2</sup>",
                    "<i>KX</i>/<i>m</i>",
                    "<i>X</i>(2π/<i>T</i>)<sup>2</sup>",
                    "0.2/<i>T</i><sup>2</sup>"
                ],
                "answer": "C",
                "explanation": "From her first experiment:</p>\r\n\\[ T = 2\\pi\\sqrt{\\frac{m}{k}} \\]\r\n<p class=\"exp\">From her second experiment:</p>\r\n\\[ k = \\frac{4\\pi^2 m}{T^2} \\]</li>\r\n<li><p class=\"exp\">The only two measurement values she has are <i>T</i> and <i>X</i>, so eliminating <i>K</i> and <i>m</i> from these two equations and solving for <i>a</i>:</p>\r\n\\[ \\Delta x = \\frac{mg}{k} \\]\r\n<p class=\"exp\">and</p>\r\n\\[ g = \\frac{k \\Delta x}{m} \\]\r\n<p class=\"exp\">Combining:</p>\r\n\\[ g = \\frac{4\\pi^2 \\Delta x}{T^2} \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_38",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A woman standing on a scale in an elevator notices that the scale reads her true weight. From this, she may conclude that</p>",
                "options": [
                    "the elevator must be at rest",
                    "the elevator must be accelerating precisely at 9.8 m/s<sup>2</sup>",
                    "the elevator must be moving upward",
                    "the elevator must not be accelerating"
                ],
                "answer": "D",
                "explanation": "The elevator must be traveling at constant velocity to insure the normal force (reading on the scale) is the same as her true weight. However, this velocity value can be any number: positive, zero, or negative.</p></li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_39",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "A planet has half the mass of Earth and half the radius. Compared with the acceleration due to gravity at the surface of Earth, the acceleration due to gravity at the surface of this planet is</p>",
                "options": [
                    "the same",
                    "halved",
                    "doubled",
                    "quadrupled"
                ],
                "answer": "C",
                "explanation": "Remember that <i>g</i> = <i>Gm</i>/<i>r</i><sup><i>2</i></sup>. Half the mass means half the <i>g</i>. Half the <i>r</i> means 4 × <i>g</i>. Collect the changes:</p>\r\n\\[ P = \\frac{F}{A} = \\rho g h \\]</li>\r\n<li>"
            },
            {
                "id": "mock_phys1_2_40",
                "topic": "Comprehensive AP Physics 1",
                "difficulty": "hard",
                "question": "Which of the following materials will exert the highest pressure on its bottom surface?</p>",
                "options": [
                    "1 liter of water in a puddle on the ground",
                    "1 liter of water, frozen into a cube on the ground",
                    "1 liter of water in a tall, thin, vertical tube",
                    "1 liter of water, frozen into a cube, floating in liquid water"
                ],
                "answer": "C",
                "explanation": "Pressure equals density times height times <i>g</i>. The tall tube of water will have the most height and thus the greatest pressure at its bottom surface.</p></li>\r\n</ol>"
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AP_TEST_DATA };
}
