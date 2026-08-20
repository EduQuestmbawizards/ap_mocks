// Specific Question Bank for Test: ap-diag-calc-bc
const AP_TEST_DATA = {
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
                "question": "Given $x=t^2, y=t^3$, find $\\frac{dy}{dx}$ at $t=2$.",
                "options": [
                    "2",
                    "3",
                    "4",
                    "6"
                ],
                "answer": "B",
                "explanation": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3}{2}t$. At $t=2$, $\\frac{3}{2}(2) = 3$."
            },
            {
                "id": "dbc_2",
                "topic": "Second Derivative Parametric",
                "difficulty": "medium",
                "question": "For $x=t^2, y=t^3$, what is $\\frac{d^2y}{dx^2}$ at $t=2$?",
                "options": [
                    "$\\frac{1}{4}$",
                    "$\\frac{3}{8}$",
                    "$\\frac{3}{4}$",
                    "1"
                ],
                "answer": "B",
                "explanation": "$\\frac{dy}{dx} = \\frac{3}{2}t$. Then $\\frac{d^2y}{dx^2} = \\frac{d/dt(3t/2)}{dx/dt} = \\frac{3/2}{2t} = \\frac{3}{4t}$. At $t=2$, $\\frac{3}{4(2)} = \\frac{3}{8}$."
            },
            {
                "id": "dbc_3",
                "topic": "Parametric Horizontal Tangent",
                "difficulty": "medium",
                "question": "For $x=t^2-1, y=t^3 -3t$, a horizontal tangent occurs when:",
                "options": [
                    "$t=0$ only",
                    "$t=\\pm 1$",
                    "$t=\\pm\\sqrt{3}$",
                    "$t=3$"
                ],
                "answer": "B",
                "explanation": "$\\frac{dy}{dt} = 3t^2 - 3 = 0 \\implies t = \\pm 1$."
            },
            {
                "id": "dbc_4",
                "topic": "Polar Coordinates",
                "difficulty": "easy",
                "question": "For $r=2$, what is the Cartesian point when $\\theta=\\pi/2$?",
                "options": [
                    "(2, 0)",
                    "(0, 2)",
                    "(-2, 0)",
                    "(0, -2)"
                ],
                "answer": "B",
                "explanation": "$x = 2\\cos(\\pi/2) = 0$, $y = 2\\sin(\\pi/2) = 2$."
            },
            {
                "id": "dbc_5",
                "topic": "Polar Area",
                "difficulty": "medium",
                "question": "The area enclosed by $r=2$ is:",
                "options": [
                    "$2\\pi$",
                    "$4\\pi$",
                    "$8\\pi$",
                    "$\\pi$"
                ],
                "answer": "B",
                "explanation": "$A = \\frac{1}{2}$\\int_{0}^{{2\\pi}} r^2 d$theta = \\frac{1}{2}(4)(2\\pi) = 4\\pi$."
            },
            {
                "id": "dbc_6",
                "topic": "Polar Derivative",
                "difficulty": "hard",
                "question": "For $r=1+\\cos\\theta$, $\\frac{dy}{dx}$ is given by:",
                "options": [
                    "$\\frac{\\cos\\theta}{\\sin\\theta}$",
                    "$\\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}$",
                    "$\\frac{d\\theta}{dr}$",
                    "$r\\cos\\theta$"
                ],
                "answer": "B",
                "explanation": "In polar coordinates, $\\frac{dy}{dx} = \\frac{r'(\\theta)\\sin\\theta + r\\cos\\theta}{r'(\\theta)\\cos\\theta - r\\sin\\theta}$."
            },
            {
                "id": "dbc_7",
                "topic": "Series Convergence",
                "difficulty": "easy",
                "question": "Determine whether $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ converges.",
                "options": [
                    "Converges",
                    "Diverges",
                    "Oscillates",
                    "Cannot determine"
                ],
                "answer": "A",
                "explanation": "It is a p-series with $p=2 > 1$, which converges."
            },
            {
                "id": "dbc_8",
                "topic": "Harmonic Series",
                "difficulty": "easy",
                "question": "The harmonic series $\\sum_{n=1}^\\infty \\frac{1}{n}$:",
                "options": [
                    "Converges",
                    "Diverges",
                    "Equals 1",
                    "Equals 0"
                ],
                "answer": "B",
                "explanation": "The harmonic series is a p-series with $p=1$, so it diverges."
            },
            {
                "id": "dbc_9",
                "topic": "Geometric Series",
                "difficulty": "medium",
                "question": "The series $\\sum_{n=0}^\\infty \\left(\\frac{1}{3}\\right)^n$ has sum:",
                "options": [
                    "1",
                    "$\\frac{3}{2}$",
                    "2",
                    "3"
                ],
                "answer": "B",
                "explanation": "$S = \\frac{a}{1-r} = \\frac{1}{1 - 1/3} = \\frac{3}{2}$."
            },
            {
                "id": "dbc_10",
                "topic": "Geometric Convergence",
                "difficulty": "easy",
                "question": "For what values of $x$ does $\\sum_{n=0}^\\infty x^n$ converge?",
                "options": [
                    "$x > 1$",
                    "$x < 1$",
                    "$|x| < 1$",
                    "$x > 0$"
                ],
                "answer": "C",
                "explanation": "A geometric series converges if and only if $|x| < 1$."
            },
            {
                "id": "dbc_11",
                "topic": "Ratio Test",
                "difficulty": "medium",
                "question": "For $\\sum_{n=1}^\\infty \\frac{2^n}{n!}$, the Ratio Test shows:",
                "options": [
                    "Divergence",
                    "Convergence",
                    "Oscillation",
                    "Test is inconclusive"
                ],
                "answer": "B",
                "explanation": "$\\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n\\to\\infty} \\frac{2}{n+1} = 0 < 1$, indicating convergence."
            },
            {
                "id": "dbc_12",
                "topic": "Alternating Series",
                "difficulty": "medium",
                "question": "The series $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$:",
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
                "question": "The series $\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}$:",
                "options": [
                    "Diverges",
                    "Converges conditionally",
                    "Converges absolutely",
                    "Oscillates"
                ],
                "answer": "C",
                "explanation": "The absolute series $\\sum \\frac{1}{n^2}$ converges, so the original series converges absolutely."
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
                "explanation": "Terms must correspond to a function that is positive, continuous, and decreasing for $x \\ge 1$."
            },
            {
                "id": "dbc_15",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "The radius of convergence of $\\sum_{n=0}^\\infty \\frac{x^n}{3^n}$ is:",
                "options": [
                    "1",
                    "2",
                    "3",
                    "9"
                ],
                "answer": "C",
                "explanation": "Using the Root/Ratio Test: $|x/3| < 1 \\implies |x| < 3$, so $R = 3$."
            },
            {
                "id": "dbc_16",
                "topic": "Power Series Interval",
                "difficulty": "medium",
                "question": "For $\\sum_{n=1}^\\infty \\frac{x^n}{n}$, the radius of convergence is:",
                "options": [
                    "0",
                    "1",
                    "2",
                    "$\\infty$"
                ],
                "answer": "B",
                "explanation": "$\\lim_{n\\to\\infty} \\frac{|x|^{n+1}/(n+1)}{|x|^n/n} = |x| < 1 \\implies R = 1$."
            },
            {
                "id": "dbc_17",
                "topic": "Taylor Polynomial",
                "difficulty": "easy",
                "question": "The second-degree Maclaurin polynomial for $e^x$ is:",
                "options": [
                    "$1 +x$",
                    "$1 + x + \\frac{x^2}{2}$",
                    "$x + x^2$",
                    "$1 + x^2$"
                ],
                "answer": "B",
                "explanation": "$P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 = 1 + x + \\frac{x^2}{2}$."
            },
            {
                "id": "dbc_18",
                "topic": "Maclaurin Series",
                "difficulty": "medium",
                "question": "The Maclaurin series for $\\sin x$ begins:",
                "options": [
                    "$1 + x + \\frac{x^2}{2}$",
                    "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$",
                    "$x + x^2 + x^3$",
                    "$1 - \\frac{x^2}{2} + \\cdots$"
                ],
                "answer": "B",
                "explanation": "The Maclaurin series for $\\sin x$ consists of odd powers with alternating signs."
            },
            {
                "id": "dbc_19",
                "topic": "Maclaurin Series for Cosine",
                "difficulty": "medium",
                "question": "The Maclaurin series for $\\cos x$ is:",
                "options": [
                    "$x - \\frac{x^3}{6} + \\cdots$",
                    "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$",
                    "$1 + x + \\frac{x^2}{2} + \\cdots$",
                    "$x + \\frac{x^3}{6} + \\cdots$"
                ],
                "answer": "B",
                "explanation": "The Maclaurin series for $\\cos x$ consists of even powers with alternating signs."
            },
            {
                "id": "dbc_20",
                "topic": "Taylor Approximation",
                "difficulty": "medium",
                "question": "Using $1 + x + \\frac{x^2}{2}$, approximate $e^{0.1}$.",
                "options": [
                    "1.01",
                    "1.05",
                    "1.105",
                    "1.5"
                ],
                "answer": "C",
                "explanation": "$1 + 0.1 + \\frac{(0.1)^2}{2} = 1 + 0.1 + 0.005 = 1.105$."
            },
            {
                "id": "dbc_21",
                "topic": "Alternating Series Error",
                "difficulty": "medium",
                "question": "For an alternating series satisfying the conditions of the Alternating Series Test, the error after $n$ terms is at most:",
                "options": [
                    "The first omitted term's absolute value",
                    "The last included term",
                    "Twice the first term",
                    "Always zero"
                ],
                "answer": "A",
                "explanation": "The error bound is given by $|R_n| \\le a_{n+1}$, the absolute value of the first omitted term."
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
                "question": "Evaluate: $\\int_{1}^{\\infty} \\frac{1}{x^2}\\,dx$.",
                "options": [
                    "Diverges",
                    "0",
                    "1",
                    "$\\infty$"
                ],
                "answer": "C",
                "explanation": "$\\lim_{b \\to \\infty} \\left[ -\\frac{1}{x} \\right]_1^b = 0 - (-1) = 1$."
            },
            {
                "id": "dbc_24",
                "topic": "Improper Integral",
                "difficulty": "medium",
                "question": "Evaluate: $\\int_{1}^{\\infty} \\frac{1}{x}\\,dx$.",
                "options": [
                    "Converges to 1",
                    "Converges to $\\pi$",
                    "Diverges",
                    "Equals 0"
                ],
                "answer": "C",
                "explanation": "$\\lim_{b \\to \\infty} \\ln(b) = \\infty$, so the integral diverges."
            },
            {
                "id": "dbc_25",
                "topic": "Logistic Differential Equation",
                "difficulty": "easy",
                "question": "For $\\frac{dP}{dt} = P(1 - P)$, the equilibrium solutions are:",
                "options": [
                    "$P = 0$ only",
                    "$P = 1$ only",
                    "$P = 0, 1$",
                    "$P = -1, 1$"
                ],
                "answer": "C",
                "explanation": "Setting $\\frac{dP}{dt} = 0 \\implies P(1-P) = 0 \\implies P=0$ or $P=1$."
            },
            {
                "id": "dbc_26",
                "topic": "Differential Equation",
                "difficulty": "easy",
                "question": "For $y' = y$, the general solution is:",
                "options": [
                    "$y = x + C$",
                    "$y = C e^x$",
                    "$y = C x$",
                    "$y = e^{x+C}$ only"
                ],
                "answer": "B",
                "explanation": "Separation of variables yields $\\ln|y| = x + C_1 \\implies y = C e^x$."
            },
            {
                "id": "dbc_27",
                "topic": "Slope Field",
                "difficulty": "easy",
                "question": "For $y' = x$, the slope of the solution curve at $(2, 5)$ is:",
                "options": [
                    "2",
                    "5",
                    "7",
                    "10"
                ],
                "answer": "A",
                "explanation": "$y' = x$, so at $(x,y) = (2,5)$, slope = 2."
            },
            {
                "id": "dbc_28",
                "topic": "Euler's Method",
                "difficulty": "medium",
                "question": "For $y' = x - y, y(0) = 1$, step size 0.1, the first Euler approximation $y_1$ is:",
                "options": [
                    "0.8",
                    "0.9",
                    "1.0",
                    "1.1"
                ],
                "answer": "B",
                "explanation": "$y_1 = y_0 + h f(x_0, y_0) = 1 + 0.1(0 - 1) = 0.9$."
            },
            {
                "id": "dbc_29",
                "topic": "Vector-Valued Function",
                "difficulty": "easy",
                "question": "If $\\mathbf{r}(t) = \\langle t^2, 3t \\rangle$, then velocity $\\mathbf{v}(t)$ is:",
                "options": [
                    "$\\langle t, 3 \\rangle$",
                    "$\\langle 2t, 3 \\rangle$",
                    "$\\langle t^2, 3 \\rangle$",
                    "$\\langle 2, 3t \\rangle$"
                ],
                "answer": "B",
                "explanation": "$\\mathbf{v}(t) = \\mathbf{r}'(t) = \\langle 2t, 3 \\rangle$."
            },
            {
                "id": "dbc_30",
                "topic": "Speed",
                "difficulty": "medium",
                "question": "For $\\mathbf{r}(t) = \\langle t, t^2 \\rangle$, the speed at $t = 1$ is:",
                "options": [
                    "1",
                    "2",
                    "$\\sqrt{5}$",
                    "3"
                ],
                "answer": "C",
                "explanation": "$\\mathbf{v}(1) = \\langle 1, 2 \\rangle$, so speed = $|\\mathbf{v}| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$."
            }
        ]
    }
};
