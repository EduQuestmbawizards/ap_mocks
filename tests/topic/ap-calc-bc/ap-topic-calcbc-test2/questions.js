// Specific Question Bank for Test: ap-topic-calcbc-test2
const AP_TEST_DATA = {
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
                "id": "ap-topic-calcbc-test2_q1",
                "topic": "Alternating Series Error",
                "difficulty": "medium",
                "question": "For an alternating series satisfying the conditions of the Alternating Series Test, the error after $n$ terms is bounded by:",
                "options": [
                    "The absolute value of the first omitted term",
                    "The last included term",
                    "Twice the first term",
                    "Always zero"
                ],
                "answer": "A",
                "explanation": "The Alternating Series Error Bound states that $|R_n| \\le a_{n+1}$, which is the absolute value of the first omitted term."
            },
            {
                "id": "ap-topic-calcbc-test2_q2",
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
                "explanation": "The Lagrange error bound gives a maximum bound on the remainder term $|R_n(x)|$ of a Taylor polynomial."
            },
            {
                "id": "ap-topic-calcbc-test2_q3",
                "topic": "Improper Integral",
                "difficulty": "easy",
                "question": "Evaluate: $\\int_{1}^{\\infty} \\frac{1}{x^2}\\,dx$",
                "options": [
                    "Diverges",
                    "0",
                    "1",
                    "$\\infty$"
                ],
                "answer": "C",
                "explanation": "$\\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + 1\\right) = 1$."
            },
            {
                "id": "ap-topic-calcbc-test2_q4",
                "topic": "Improper Integral Divergence",
                "difficulty": "easy",
                "question": "Evaluate: $\\int_{1}^{\\infty} \\frac{1}{x}\\,dx$",
                "options": [
                    "Converges to 1",
                    "Converges to $\\pi$",
                    "Diverges",
                    "Equals 0"
                ],
                "answer": "C",
                "explanation": "$\\lim_{b \\to \\infty} [\\ln|x|]_1^b = \\lim_{b \\to \\infty} \\ln(b) = \\infty$, so the integral diverges."
            },
            {
                "id": "ap-topic-calcbc-test2_q5",
                "topic": "Logistic Differential Equation",
                "difficulty": "medium",
                "question": "For $\\frac{dP}{dt} = P(1 - P)$, the equilibrium solutions are:",
                "options": [
                    "$P = 0$ only",
                    "$P = 1$ only",
                    "$P = 0$ and $P = 1$",
                    "$P = -1$ and $P = 1$"
                ],
                "answer": "C",
                "explanation": "Equilibrium solutions occur when $\\frac{dP}{dt} = 0 \\implies P(1 - P) = 0 \\implies P = 0, 1$."
            },
            {
                "id": "ap-topic-calcbc-test2_q6",
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
                "explanation": "Separating variables: $\\frac{dy}{y} = dx \\implies \\ln|y| = x + C_1 \\implies y = C e^x$."
            },
            {
                "id": "ap-topic-calcbc-test2_q7",
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
                "explanation": "The derivative $y'$ depends only on $x$. At $(2, 5)$, $x = 2$, so slope $m = 2$."
            },
            {
                "id": "ap-topic-calcbc-test2_q8",
                "topic": "Euler's Method",
                "difficulty": "medium",
                "question": "For $y' = x - y$ with $y(0) = 1$, step size $h = 0.1$, the first Euler approximation $y_1$ at $x = 0.1$ is:",
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
                "id": "ap-topic-calcbc-test2_q9",
                "topic": "Vector-Valued Function",
                "difficulty": "medium",
                "question": "If position is $\\vec{r}(t) = \\langle t^2, 3t \\rangle$, then the velocity vector $\\vec{v}(t)$ is:",
                "options": [
                    "$\\langle t, 3 \\rangle$",
                    "$\\langle 2t, 3 \\rangle$",
                    "$\\langle t^2, 3 \\rangle$",
                    "$\\langle 2, 3t \\rangle$"
                ],
                "answer": "B",
                "explanation": "$\\vec{v}(t) = \\vec{r}'(t) = \\left\\langle \\frac{d}{dt}(t^2), \\frac{d}{dt}(3t) \\right\\rangle = \\langle 2t, 3 \\rangle$."
            },
            {
                "id": "ap-topic-calcbc-test2_q10",
                "topic": "Speed of Vector Motion",
                "difficulty": "medium",
                "question": "For position $\\vec{r}(t) = \\langle t, t^2 \\rangle$, the speed at $t = 1$ is:",
                "options": [
                    "1",
                    "2",
                    "$\\sqrt{5}$",
                    "3"
                ],
                "answer": "C",
                "explanation": "$\\vec{v}(t) = \\langle 1, 2t \\rangle$. At $t = 1$, $\\vec{v}(1) = \\langle 1, 2 \\rangle$. Speed = $\\sqrt{1^2 + 2^2} = \\sqrt{5}$."
            },
            {
                "id": "ap-topic-calcbc-test2_q11",
                "topic": "Parametric Arc Length",
                "difficulty": "easy",
                "question": "For a parametric curve $x = f(t), y = g(t)$, the arc length formula is:",
                "options": [
                    "$\\int (x + y) dt$",
                    "$\\int \\sqrt{(dx/dt)^2 + (dy/dt)^2} dt$",
                    "$\\int (xy) dt$",
                    "$\\int f'(t)g'(t) dt$"
                ],
                "answer": "B",
                "explanation": "Parametric arc length formula: $L = \\int \\sqrt{(x'(t))^2 + (y'(t))^2} dt$."
            },
            {
                "id": "ap-topic-calcbc-test2_q12",
                "topic": "Polar Area Formula",
                "difficulty": "easy",
                "question": "The area enclosed by a polar curve from $\\theta = \\alpha$ to $\\theta = \\beta$ is:",
                "options": [
                    "$\\int_{\\alpha}^{\\beta} r\\,d\\theta$",
                    "$\\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$",
                    "$\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$",
                    "\\$2\\pi r$"
                ],
                "answer": "B",
                "explanation": "Standard polar area formula: $A = \\frac{1}{2}$\\int_{\\alpha}^{\\beta} r^2 d$theta$."
            },
            {
                "id": "ap-topic-calcbc-test2_q13",
                "topic": "Polar Arc Length",
                "difficulty": "medium",
                "question": "The polar arc-length formula integrand involves:",
                "options": [
                    "$\\sqrt{r^2 + (dr/d\\theta)^2}$",
                    "$r + dr/d\\theta$",
                    "$r^2$ only",
                    "$dr/d\\theta$ only"
                ],
                "answer": "A",
                "explanation": "Polar arc length formula: $L = \\int \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta$."
            },
            {
                "id": "ap-topic-calcbc-test2_q14",
                "topic": "Ratio Test Definition",
                "difficulty": "easy",
                "question": "If $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| < 1$, then the series $\\sum a_n$:",
                "options": [
                    "Diverges",
                    "Converges absolutely",
                    "Is always alternating",
                    "Yields no conclusion"
                ],
                "answer": "B",
                "explanation": "By the Ratio Test, if $L < 1$, the series converges absolutely."
            },
            {
                "id": "ap-topic-calcbc-test2_q15",
                "topic": "Root Test Definition",
                "difficulty": "easy",
                "question": "If $\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} < 1$, then:",
                "options": [
                    "The series converges absolutely",
                    "The series diverges",
                    "The series is harmonic",
                    "The test fails"
                ],
                "answer": "A",
                "explanation": "By the Root Test, if the limit of $|a_n|^{1/n} < 1$, the series converges absolutely."
            },
            {
                "id": "ap-topic-calcbc-test2_q16",
                "topic": "Direct Comparison Test",
                "difficulty": "medium",
                "question": "Since \\$0 < \\frac{1}{n^2 + 1} < \\frac{1}{n^2}$ and $\\sum \\frac{1}{n^2}$ converges, then:",
                "options": [
                    "$\\sum \\frac{1}{n^2 + 1}$ converges",
                    "It diverges",
                    "It oscillates",
                    "Cannot determine"
                ],
                "answer": "A",
                "explanation": "By the Direct Comparison Test, since the larger series converges, the smaller positive series also converges."
            },
            {
                "id": "ap-topic-calcbc-test2_q17",
                "topic": "nth-Term Test for Divergence",
                "difficulty": "easy",
                "question": "If $\\lim_{n \\to \\infty} a_n = 5 \\neq 0$, then the series $\\sum a_n$:",
                "options": [
                    "Must converge",
                    "Must diverge",
                    "Is geometric",
                    "Is alternating"
                ],
                "answer": "B",
                "explanation": "By the $n$-th term test for divergence, if $\\lim_{n \\to \\infty} a_n \\neq 0$, the series diverges."
            },
            {
                "id": "ap-topic-calcbc-test2_q18",
                "topic": "Taylor Series Derivative",
                "difficulty": "medium",
                "question": "If $f(x) = \\sum_{n=0}^\\infty a_n x^n$, then term-by-term differentiation gives $f'(x) =$:",
                "options": [
                    "$\\sum a_n x^n$",
                    "$\\sum n a_n x^{n-1}$",
                    "$\\sum a_n x^{n+1}$",
                    "0"
                ],
                "answer": "B",
                "explanation": "$\\frac{d}{dx}(a_n x^n) = n a_n x^{n-1}$, so $f'(x) = \\sum_{n=1}^\\infty n a_n x^{n-1}$."
            },
            {
                "id": "ap-topic-calcbc-test2_q19",
                "topic": "Taylor Series Integration",
                "difficulty": "medium",
                "question": "If $f(x) = \\sum_{n=0}^\\infty a_n x^n$, then an antiderivative is:",
                "options": [
                    "$\\sum n a_n x^{n-1}$",
                    "$\\sum \\frac{a_n}{n+1} x^{n+1}  + C$",
                    "$\\sum a_n x^{n+1}$",
                    "$\\sum a_n / n$"
                ],
                "answer": "B",
                "explanation": "Term-by-term integration: $\\int a_n x^n dx = \\frac{a_n}{n+1} x^{n+1}  + C$."
            },
            {
                "id": "ap-topic-calcbc-test2_q20",
                "topic": "Radius of Convergence",
                "difficulty": "medium",
                "question": "For $\\sum_{n=1}^\\infty \\frac{(x - 2)^n}{5^n}$, the radius of convergence is:",
                "options": [
                    "2",
                    "3",
                    "5",
                    "10"
                ],
                "answer": "C",
                "explanation": "The geometric condition $|(x - 2)/5| < 1 \\implies |x - 2| < 5$, giving radius of convergence $R = 5$."
            }
        ],
        "testType": "Topic Test",
        "totalQuestions": 20
    }
};
