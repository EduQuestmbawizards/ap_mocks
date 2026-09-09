// Specific Question Bank for Test: ap-topic-calcbc-power-series
const AP_TEST_DATA = {
    "ap-topic-calcbc-power-series": {
        "title": "AP Calculus BC: Power Series & Taylor Polynomials",
        "subject": "AP Calculus BC",
        "testType": "Topic Test",
        "duration": 45,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-calcbc-power-series_q1",
                "topic": "Taylor Polynomials",
                "difficulty": "easy",
                "question": "What is the third-degree Maclaurin polynomial for f(x) = e^{2x}?",
                "options": [
                    "1 + 2x + 2x^2 + \\frac{4}{3}x^3",
                    "1 + 2x + 4x^2 + 8x^3",
                    "1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}",
                    "2x + 2x^2 + \\frac{4}{3}x^3",
                    "1 + 2x + x^2 + \\frac{1}{3}x^3"
                ],
                "answer": "A",
                "explanation": "e^u = 1 + u + u^2/2! + u^3/3! + ... Substituting u = 2x gives 1 + 2x + (2x)^2/2 + (2x)^3/6 = 1 + 2x + 2x^2 + (4/3)x^3."
            },
            {
                "id": "ap-topic-calcbc-power-series_q2",
                "topic": "Radius of Convergence",
                "difficulty": "medium",
                "question": "Find the radius of convergence R for the power series \\sum_{n=1}^{\\infty} \\frac{(x - 3)^n}{n \\cdot 5^n}.",
                "options": [
                    "1",
                    "3",
                    "5",
                    "\\infty",
                    "0"
                ],
                "answer": "C",
                "explanation": "Use Ratio Test: \\lim_{n \\to \\infty} |\\frac{(x-3)^{n+1}}{(n+1)5^{n+1}} \\cdot \\frac{n 5^n}{(x-3)^n}| = \\frac{|x-3|}{5} < 1 \\implies |x - 3| < 5. Thus, R = 5."
            },
            {
                "id": "ap-topic-calcbc-power-series_q3",
                "topic": "Taylor Series from Definition",
                "difficulty": "medium",
                "question": "If f(2) = 3, f'(2) = -1, f''(2) = 4, and f'''(2) = -12, what is the coefficient of (x - 2)^3 in the Taylor series for f centered at x = 2?",
                "options": [
                    "-12",
                    "-6",
                    "-2",
                    "4",
                    "2"
                ],
                "answer": "C",
                "explanation": "The coefficient of (x - a)^n is f^{(n)}(a)/n!. For n = 3: f'''(2)/3! = -12 / 6 = -2."
            },
            {
                "id": "ap-topic-calcbc-power-series_q4",
                "topic": "Maclaurin Series Manipulation",
                "difficulty": "medium",
                "question": "What is the Maclaurin series for f(x) = \\cos(x^2)?",
                "options": [
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{4n}}{(2n)!}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{4n+2}}{(2n+1)!}",
                    "\\sum_{n=0}^{\\infty} \\frac{x^{4n}}{(2n)!}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+2}}{(2n)!}"
                ],
                "answer": "A",
                "explanation": "\\cos(u) = \\sum_{n=0}^{\\infty} (-1)^n u^{2n}/(2n)!. Substituting u = x^2 yields \\sum_{n=0}^{\\infty} (-1)^n (x^2)^{2n}/(2n)! = \\sum_{n=0}^{\\infty} (-1)^n x^{4n}/(2n)!."
            },
            {
                "id": "ap-topic-calcbc-power-series_q5",
                "topic": "Alternating Series Error Bound",
                "difficulty": "hard",
                "question": "The Maclaurin series for \\sin(x) is approximated at x = 0.5 using the first two nonzero terms: P_3(0.5) = 0.5 - \\frac{(0.5)^3}{6}. What is the maximum error guaranteed by the Alternating Series Error Bound?",
                "options": [
                    "\\frac{(0.5)^5}{120}",
                    "\\frac{(0.5)^4}{24}",
                    "\\frac{(0.5)^3}{6}",
                    "\\frac{(0.5)^6}{720}",
                    "\\frac{(0.5)^5}{24}"
                ],
                "answer": "A",
                "explanation": "By the Alternating Series Error Bound, |Error| \\le |next term| = (0.5)^5 / 5! = (0.5)^5 / 120."
            },
            {
                "id": "ap-topic-calcbc-power-series_q6",
                "topic": "Geometric Power Series",
                "difficulty": "easy",
                "question": "Represent f(x) = \\frac{1}{1 + 3x^2} as a power series centered at x = 0 for |x| < 1/\\sqrt{3}.",
                "options": [
                    "\\sum_{n=0}^{\\infty} (-1)^n 3^n x^{2n}",
                    "\\sum_{n=0}^{\\infty} 3^n x^{2n}",
                    "\\sum_{n=0}^{\\infty} (-1)^n 3x^{2n}",
                    "\\sum_{n=0}^{\\infty} (-3x)^{2n}",
                    "\\sum_{n=0}^{\\infty} (-1)^n x^{2n}"
                ],
                "answer": "A",
                "explanation": "\\frac{1}{1 - u} = \\sum_{n=0}^{\\infty} u^n. Substituting u = -3x^2 gives \\sum_{n=0}^{\\infty} (-3x^2)^n = \\sum_{n=0}^{\\infty} (-1)^n 3^n x^{2n}."
            },
            {
                "id": "ap-topic-calcbc-power-series_q7",
                "topic": "Interval of Convergence",
                "difficulty": "hard",
                "question": "What is the interval of convergence for \\sum_{n=1}^{\\infty} \\frac{(x - 1)^n}{n}?",
                "options": [
                    "[0, 2)",
                    "(0, 2]",
                    "[0, 2]",
                    "(0, 2)",
                    "[-1, 1)"
                ],
                "answer": "A",
                "explanation": "Radius is R = 1 centered at x = 1, so interior is (0, 2). At x = 0: \\sum (-1)^n / n converges by AST. At x = 2: \\sum 1/n diverges (harmonic). Thus, [0, 2)."
            },
            {
                "id": "ap-topic-calcbc-power-series_q8",
                "topic": "Integration of Power Series",
                "difficulty": "medium",
                "question": "Using the Maclaurin series for \\frac{1}{1 - t} = \\sum_{n=0}^{\\infty} t^n, find the Maclaurin series for -\\ln(1 - x) = \\int_{0}^{x} \\frac{1}{1 - t}\\,dt.",
                "options": [
                    "\\sum_{n=1}^{\\infty} \\frac{x^n}{n}",
                    "\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}",
                    "\\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{x^n}{n}",
                    "\\sum_{n=0}^{\\infty} n x^{n-1}",
                    "\\sum_{n=1}^{\\infty} \\frac{x^{2n}}{2n}"
                ],
                "answer": "A",
                "explanation": "Integrate term by term: \\int_{0}^{x} t^n dt = x^{n+1}/(n+1). Shifting index k = n+1 gives \\sum_{k=1}^{\\infty} x^k / k."
            },
            {
                "id": "ap-topic-calcbc-power-series_q9",
                "topic": "Lagrange Error Bound",
                "difficulty": "hard",
                "question": "A function f has |f^{(4)}(x)| \\le 12 for all x in [1, 1.5]. If f is approximated by its 3rd-degree Taylor polynomial at x = 1, what is the maximum possible error at x = 1.5?",
                "options": [
                    "0.03125",
                    "0.0625",
                    "0.125",
                    "0.25",
                    "0.5"
                ],
                "answer": "A",
                "explanation": "Lagrange bound: |R_3(1.5)| \\le \\frac{M}{4!} |1.5 - 1|^4 = \\frac{12}{24} (0.5)^4 = 0.5 \\times 0.0625 = 0.03125."
            },
            {
                "id": "ap-topic-calcbc-power-series_q10",
                "topic": "Evaluating Series via Known Maclaurin Expansions",
                "difficulty": "medium",
                "question": "What is the exact sum of the series \\sum_{n=0}^{\\infty} \\frac{(-1)^n (\\pi/3)^{2n+1}}{(2n+1)!}?",
                "options": [
                    "\\frac{\\sqrt{3}}{2}",
                    "\\frac{1}{2}",
                    "1",
                    "0",
                    "\\frac{\\sqrt{2}}{2}"
                ],
                "answer": "A",
                "explanation": "This is the Maclaurin series for \\sin(x) evaluated at x = \\pi/3. \\sin(\\pi/3) = \\sqrt{3}/2."
            },
            {
                "id": "ap-topic-calcbc-power-series_q11",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "Find the interval of convergence for the power series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x + 2)^n}{n \\cdot 4^n}$.",
                "options": [
                    "(-6, 2]",
                    "[-6, 2)",
                    "[-6, 2]",
                    "(-6, 2)",
                    "(-4, 4)"
                ],
                "answer": "A",
                "explanation": "Apply the Ratio Test: $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{n}{n+1} \\frac{|x+2|}{4} = \\frac{|x+2|}{4} < 1$, giving $|x+2| < 4 \\implies -6 < x < 2$. At $x = 2$, the series becomes $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$, which converges by the Alternating Series Test. At $x = -6$, the series becomes $\\sum_{n=1}^{\\infty} \\frac{(-1)^n (-4)^n}{n 4^n} = \\sum_{n=1}^{\\infty} \\frac{1}{n}$, the divergent harmonic series. Hence, the interval of convergence is $(-6, 2]$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q12",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "Which of the following is the Taylor series for $f(x) = \\ln(x)$ centered at $x = 1$?",
                "options": [
                    "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} (x - 1)^n}{n}",
                    "\\sum_{n=0}^{\\infty} \\frac{(-1)^n (x - 1)^n}{n!}",
                    "\\sum_{n=1}^{\\infty} \\frac{(x - 1)^n}{n}",
                    "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n} (x - 1)^n}{n^2}",
                    "\\sum_{n=0}^{\\infty} (-1)^n (x - 1)^n"
                ],
                "answer": "A",
                "explanation": "The derivatives of $f(x) = \\ln(x)$ are $f'(x) = x^{-1}$, $f''(x) = -x^{-2}$, $f'''(x) = 2x^{-3}$, and in general $f^{(n)}(1) = (-1)^{n-1}(n-1)!$. The Taylor coefficient is $c_n = \\frac{f^{(n)}(1)}{n!} = \\frac{(-1)^{n-1}(n-1)!}{n!} = \\frac{(-1)^{n-1}}{n}$ for $n \\ge 1$, with $f(1) = 0$. Thus, $\\ln(x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}(x - 1)^n}{n}$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q13",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "What is the first three non-zero terms of the Maclaurin series for $g(x) = \\int_0^x \\cos(t^2) \\, dt$?",
                "options": [
                    "x - \\frac{x^5}{10} + \\frac{x^9}{216}",
                    "x - \\frac{x^3}{6} + \\frac{x^5}{120}",
                    "1 - \\frac{x^4}{2} + \\frac{x^8}{24}",
                    "x - \\frac{x^5}{5} + \\frac{x^9}{9}",
                    "\\frac{x^3}{3} - \\frac{x^7}{14} + \\frac{x^{11}}{264}"
                ],
                "answer": "A",
                "explanation": "The Maclaurin series for $\\cos(u)$ is $1 - \\frac{u^2}{2} + \\frac{u^4}{24} - \\dots$. Substituting $u = t^2$ gives $\\cos(t^2) = 1 - \\frac{t^4}{2} + \\frac{t^8}{24} - \\dots$. Integrating term by term from $0$ to $x$: $\\int_0^x (1 - \\frac{t^4}{2} + \\frac{t^8}{24}) \\, dt = \\left[ t - \\frac{t^5}{10} + \\frac{t^9}{216} \\right]_0^x = x - \\frac{x^5}{10} + \\frac{x^9}{216}$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q14",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "The function $f$ has a Maclaurin series given by $\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{3^n (n+1)}$. What is the value of $f^{(6)}(0)$?",
                "options": [
                    "-\\frac{20}{3}",
                    "-\\frac{1}{108}",
                    "\\frac{20}{3}",
                    "-\\frac{5}{27}",
                    "-120"
                ],
                "answer": "A",
                "explanation": "In a Maclaurin series $\\sum c_k x^k$, the coefficient of $x^k$ is $c_k = \\frac{f^{(k)}(0)}{k!}$. The $x^6$ term corresponds to $2n = 6 \\implies n = 3$. For $n = 3$, the coefficient is $c_6 = \\frac{(-1)^3}{3^3(3+1)} = -\\frac{1}{108}$. Thus, $f^{(6)}(0) = 6! \\cdot c_6 = 720 \\cdot \\left(-\\frac{1}{108}\\right) = -\\frac{720}{108} = -\\frac{20}{3}$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q15",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "Which of the following is the Maclaurin series for $h(x) = x \\arctan(2x)$ for $|x| < \\frac{1}{2}$?",
                "options": [
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{2^{2n+1} x^{2n+2}}{2n+1}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{2^n x^{2n+2}}{2n+1}",
                    "\\sum_{n=0}^{\\infty} \\frac{2^{2n+1} x^{2n+1}}{2n+1}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{2^{2n} x^{2n+2}}{(2n)!}",
                    "\\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{2^n x^{2n}}{n}"
                ],
                "answer": "A",
                "explanation": "The standard Maclaurin series for $\\arctan(u)$ is $\\sum_{n=0}^{\\infty} (-1)^n \\frac{u^{2n+1}}{2n+1}$. Substituting $u = 2x$ yields $\\arctan(2x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{(2x)^{2n+1}}{2n+1} = \\sum_{n=0}^{\\infty} (-1)^n \\frac{2^{2n+1} x^{2n+1}}{2n+1}$. Multiplying by $x$ gives $\\sum_{n=0}^{\\infty} (-1)^n \\frac{2^{2n+1} x^{2n+2}}{2n+1}$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q16",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "The function $f(x) = \\cos(x)$ is approximated by its second-degree Maclaurin polynomial $P_2(x) = 1 - \\frac{x^2}{2}$ on the interval $[-0.4, 0.4]$. By the Alternating Series Estimation Theorem, what is the maximum error in this approximation?",
                "options": [
                    "\\frac{(0.4)^4}{24}",
                    "\\frac{(0.4)^3}{6}",
                    "\\frac{(0.4)^2}{2}",
                    "\\frac{(0.4)^6}{720}",
                    "\\frac{(0.4)^5}{120}"
                ],
                "answer": "A",
                "explanation": "The Maclaurin series for $\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$ is alternating with terms strictly decreasing in magnitude for $|x| \\le 0.4$. By the Alternating Series Estimation Theorem, the error when truncating after the $x^2$ term is bounded by the magnitude of the first omitted term: $|R_2(x)| \\le \\frac{|x|^4}{4!} = \\frac{|x|^4}{24}$. On $[-0.4, 0.4]$, the maximum error occurs at $|x| = 0.4$, which is $\\frac{(0.4)^4}{24}$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q17",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "What is the radius of convergence of the power series $\\sum_{n=1}^{\\infty} \\frac{n! (x - 5)^n}{(2n)!}$?",
                "options": [
                    "\\infty",
                    "0",
                    "1",
                    "2",
                    "5"
                ],
                "answer": "A",
                "explanation": "Apply the Ratio Test: $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\left|\\frac{(n+1)! (x-5)^{n+1}}{(2n+2)!} \\frac{(2n)!}{n!(x-5)^n}\\right| = \\lim_{n \\to \\infty} \\frac{(n+1)|x-5|}{(2n+2)(2n+1)} = \\lim_{n \\to \\infty} \\frac{|x-5|}{2(2n+1)} = 0$. Because this limit is $0 < 1$ for all values of $x$, the series converges for all real $x$, and its radius of convergence is $R = \\infty$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q18",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "The function $g(x) = \\frac{x^3}{1 + 4x^2}$ can be represented as a power series $\\sum_{n=0}^{\\infty} c_n x^{2n+3}$ for $|x| < \\frac{1}{2}$. What is the general expression for the coefficient of $x^{2n+3}$?",
                "options": [
                    "(-1)^n 4^n",
                    "4^n",
                    "(-1)^n 4^{2n}",
                    "(-4)^{n+1}",
                    "\\frac{(-1)^n 4^n}{n!}"
                ],
                "answer": "A",
                "explanation": "Recall the geometric series $\\frac{1}{1 - u} = \\sum_{n=0}^{\\infty} u^n$ for $|u| < 1$. Setting $u = -4x^2$ gives $\\frac{1}{1 + 4x^2} = \\sum_{n=0}^{\\infty} (-4x^2)^n = \\sum_{n=0}^{\\infty} (-1)^n 4^n x^{2n}$. Multiplying by $x^3$ yields $g(x) = \\sum_{n=0}^{\\infty} (-1)^n 4^n x^{2n+3}$. Hence, the coefficient of $x^{2n+3}$ is $(-1)^n 4^n$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q19",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "Let $P_3(x)$ be the third-degree Taylor polynomial for $f(x) = e^{-x}$ centered at $x = 0$. What is the maximum error guaranteed by Taylor's Theorem (Lagrange Error Bound) when $P_3(x)$ is used to approximate $e^{-0.5}$?",
                "options": [
                    "\\frac{1}{384}",
                    "\\frac{1}{24}",
                    "\\frac{1}{192}",
                    "\\frac{1}{48}",
                    "\\frac{1}{768}"
                ],
                "answer": "A",
                "explanation": "According to the Lagrange Error Bound, $|R_n(x)| \\le \\frac{M}{(n+1)!}|x - a|^{n+1}$ where $M = \\max_{c \\in [a, x]} |f^{(n+1)}(c)|$. Here $n = 3$, $a = 0$, $x = 0.5$, and $f^{(4)}(c) = e^{-c}$. On the interval $[0, 0.5]$, $e^{-c} \\le e^0 = 1$, so we take $M = 1$. Then $|R_3(0.5)| \\le \\frac{1}{4!} (0.5)^4 = \\frac{1}{24} \\cdot \\frac{1}{16} = \\frac{1}{384}$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            },
            {
                "id": "ap-topic-calcbc-power-series_q20",
                "topic": "Power Series & Taylor Series",
                "difficulty": "hard",
                "question": "The function $f(x) = e^x \\sin(x)$ has Maclaurin series $\\sum_{n=0}^{\\infty} a_n x^n$. What is the coefficient $a_3$ of $x^3$?",
                "options": [
                    "\\frac{1}{3}",
                    "\\frac{1}{6}",
                    "-\\frac{1}{6}",
                    "\\frac{2}{3}",
                    "0"
                ],
                "answer": "A",
                "explanation": "We can find $a_3 = \\frac{f'''(0)}{3!}$. Differentiating $f(x) = e^x \\sin(x)$: $f'(x) = e^x(\\sin x + \\cos x)$, $f''(x) = 2e^x \\cos x$, and $f'''(x) = 2e^x(\\cos x - \\sin x)$. At $x = 0$, $f'''(0) = 2(1 - 0) = 2$. Therefore, $a_3 = \\frac{f'''(0)}{3!} = \\frac{2}{6} = \\frac{1}{3}$. Alternatively, multiplying the series $(1 + x + \\frac{x^2}{2} + \\dots)(x - \\frac{x^3}{6} + \\dots)$ gives the $x^3$ term as $(-\\frac{1}{6} + \\frac{1}{2})x^3 = \\frac{1}{3}x^3$. [ORIGINAL AP CALCULUS BC-ALIGNED QUESTION]"
            }
        ],
        "id": "ap-topic-calcbc-power-series"
    }
};
