// Specific Question Bank for Test: ap-topic-calcbc-test1
const AP_TEST_DATA = {
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
    }
};
