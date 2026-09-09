// Specific Question Bank for Test: ap-topic-calc-integ
const AP_TEST_DATA = {
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
                "id": "ap-topic-calc-integ_q1",
                "topic": "Integrals",
                "difficulty": "easy",
                "question": "Evaluate $\\int_1^2 (3x^2 + 1)\\,dx$.",
                "options": [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                "answer": "B",
                "explanation": "$[x^3 + x]_1^2 = 10 - 2 = 8$."
            },
            {
                "id": "ap-topic-calc-integ_q2",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int x \\sqrt{x^2 + 9} \\, dx$.",
                "options": [
                    "$\\frac{1}{3}(x^2 + 9)^{3/2} + C$",
                    "$\\frac{2}{3}(x^2 + 9)^{3/2} + C$",
                    "$\\frac{1}{2}(x^2 + 9)^{3/2} + C$",
                    "$(x^2 + 9)^{3/2} + C$"
                ],
                "answer": "A",
                "explanation": "Let $u = x^2 + 9$, so $du = 2x\\,dx$, or $x\\,dx = \\frac{1}{2}\\,du$. The integral becomes $\\frac{1}{2} \\int u^{1/2} \\, du = \\frac{1}{2} \\cdot \\frac{2}{3} u^{3/2} + C = \\frac{1}{3}(x^2 + 9)^{3/2} + C$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q3",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int_0^{\\pi/2} \\sin^2 x \\cos x \\, dx$.",
                "options": [
                    "1/3",
                    "1/2",
                    "1",
                    "2/3"
                ],
                "answer": "A",
                "explanation": "Let $u = \\sin x$, so $du = \\cos x\\,dx$. When $x = 0$, $u = 0$; when $x = \\pi/2$, $u = 1$. The integral becomes $\\int_0^1 u^2 \\, du = \\left[ \\frac{u^3}{3} \\right]_0^1 = \\frac{1}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q4",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int \\frac{2x + 3}{x^2 + 3x + 5} \\, dx$.",
                "options": [
                    "$\\ln|x^2 + 3x + 5| + C$",
                    "$\\frac{1}{2} \\ln|x^2 + 3x + 5| + C$",
                    "$\\frac{1}{x^2 + 3x + 5} + C$",
                    "$(2x+3)^2 + C$"
                ],
                "answer": "A",
                "explanation": "Notice the numerator $2x + 3$ is exactly the derivative of the denominator $x^2 + 3x + 5$. Let $u = x^2 + 3x + 5$, $du = (2x+3)\\,dx$. Then $\\int \\frac{1}{u}\\,du = \\ln|u| + C = \\ln|x^2 + 3x + 5| + C$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q5",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "If $F(x) = \\int_1^{x^2} \\sqrt{t^3 + 1} \\, dt$, find $F'(2)$.",
                "options": [
                    "4\\sqrt{65}",
                    "2\\sqrt{65}",
                    "\\sqrt{65}",
                    "16\\sqrt{65}"
                ],
                "answer": "A",
                "explanation": "By the Fundamental Theorem of Calculus Part 1 and Chain Rule: $F'(x) = \\sqrt{(x^2)^3 + 1} \\cdot \\frac{d}{dx}(x^2) = 2x\\sqrt{x^6 + 1}$. At $x = 2$, $F'(2) = 2(2)\\sqrt{2^6 + 1} = 4\\sqrt{64 + 1} = 4\\sqrt{65}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q6",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int_1^e \\frac{(\\ln x)^2}{x} \\, dx$.",
                "options": [
                    "1/3",
                    "1/2",
                    "1",
                    "2/3"
                ],
                "answer": "A",
                "explanation": "Let $u = \\ln x$, $du = \\frac{1}{x}\\,dx$. When $x = 1$, $u = 0$; when $x = e$, $u = 1$. The integral becomes $\\int_0^1 u^2 \\, du = \\left[ \\frac{u^3}{3} \\right]_0^1 = \\frac{1}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q7",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int_0^3 |x - 1| \\, dx$.",
                "options": [
                    "5/2",
                    "3/2",
                    "2",
                    "9/2"
                ],
                "answer": "A",
                "explanation": "Split at $x = 1$: $\\int_0^1 (1 - x)\\,dx + \\int_1^3 (x - 1)\\,dx$. The first integral is $\\left[ x - \\frac{x^2}{2} \\right]_0^1 = 1 - \\frac{1}{2} = \\frac{1}{2}$. The second is $\\left[ \\frac{x^2}{2} - x \\right]_1^3 = \\left(\\frac{9}{2} - 3\\right) - \\left(\\frac{1}{2} - 1\\right) = \\frac{3}{2} - \\left(-\\frac{1}{2}\\right) = 2$. Total area = $\\frac{1}{2} + 2 = \\frac{5}{2}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q8",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int \\frac{1}{x^2 + 4} \\, dx$.",
                "options": [
                    "$\\frac{1}{2} \\arctan\\left(\\frac{x}{2}\\right) + C$",
                    "$\\arctan\\left(\\frac{x}{2}\\right) + C$",
                    "$\\frac{1}{4} \\arctan\\left(\\frac{x}{2}\\right) + C$",
                    "$\\frac{1}{2} \\ln(x^2 + 4) + C$"
                ],
                "answer": "A",
                "explanation": "Use the standard formula $\\int \\frac{1}{x^2 + a^2} \\, dx = \\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right) + C$. Here $a = 2$, so the result is $\\frac{1}{2} \\arctan(x/2) + C$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q9",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "What is the average value of $f(x) = 3x^2 - 2x + 1$ on the interval $[0, 2]$?",
                "options": [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                "answer": "A",
                "explanation": "$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx = \\frac{1}{2 - 0} \\int_0^2 (3x^2 - 2x + 1)\\,dx = \\frac{1}{2} \\left[ x^3 - x^2 + x \\right]_0^2 = \\frac{1}{2} (8 - 4 + 2) = \\frac{1}{2}(6) = 3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q10",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "hard",
                "question": "Evaluate $\\int_0^1 \\frac{x}{x^4 + 1} \\, dx$.",
                "options": [
                    "$\\pi/8$",
                    "$\\pi/4$",
                    "$\\pi/2$",
                    "1/2"
                ],
                "answer": "A",
                "explanation": "Let $u = x^2$, so $du = 2x\\,dx$ or $x\\,dx = \\frac{1}{2}\\,du$. When $x = 0$, $u = 0$; when $x = 1$, $u = 1$. The integral becomes $\\frac{1}{2} \\int_0^1 \\frac{1}{u^2 + 1} \\, du = \\frac{1}{2} [\\arctan(u)]_0^1 = \\frac{1}{2}\\left(\\frac{\\pi}{4} - 0\\right) = \\frac{\\pi}{8}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q11",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int e^{3x + 1} \\, dx$.",
                "options": [
                    "$\\frac{1}{3} e^{3x + 1} + C$",
                    "$3 e^{3x + 1} + C$",
                    "$e^{3x + 1} + C$",
                    "$\\frac{1}{3} e^{3x} + C$"
                ],
                "answer": "A",
                "explanation": "Let $u = 3x + 1$, so $du = 3\\,dx \\implies dx = \\frac{1}{3}\\,du$. $\\int e^u \\frac{1}{3}\\,du = \\frac{1}{3} e^u + C = \\frac{1}{3} e^{3x + 1} + C$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q12",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "If $\\int_0^5 f(x)\\,dx = 10$ and $\\int_2^5 f(x)\\,dx = 4$, what is $\\int_0^2 [3f(x) + 2]\\,dx$?",
                "options": [
                    "22",
                    "18",
                    "20",
                    "24"
                ],
                "answer": "A",
                "explanation": "First, $\\int_0^2 f(x)\\,dx = \\int_0^5 f(x)\\,dx - \\int_2^5 f(x)\\,dx = 10 - 4 = 6$. Then $\\int_0^2 [3f(x) + 2]\\,dx = 3\\int_0^2 f(x)\\,dx + \\int_0^2 2\\,dx = 3(6) + 2(2 - 0) = 18 + 4 = 22$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q13",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "hard",
                "question": "Evaluate $\\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{2}{n} \\left(1 + \\frac{2i}{n}\\right)^3$.",
                "options": [
                    "20",
                    "15",
                    "16",
                    "32"
                ],
                "answer": "A",
                "explanation": "Recognize this as a Riemann sum for $\\int_1^3 x^3 \\, dx$, where $\\Delta x = \\frac{2}{n}$, $x_i = 1 + \\frac{2i}{n}$. The integral is $\\left[ \\frac{x^4}{4} \\right]_1^3 = \\frac{81 - 1}{4} = \\frac{80}{4} = 20$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q14",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int \\sec^2(5x) \\, dx$.",
                "options": [
                    "$\\frac{1}{5} \\tan(5x) + C$",
                    "$5 \\tan(5x) + C$",
                    "$\\tan(5x) + C$",
                    "$\\frac{1}{5} \\sec(5x) + C$"
                ],
                "answer": "A",
                "explanation": "Since $\\frac{d}{dx}[\\tan u] = \\sec^2 u \\cdot u'$, let $u = 5x$ so $du = 5\\,dx$. Thus $\\int \\sec^2(5x)\\,dx = \\frac{1}{5} \\tan(5x) + C$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q15",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "hard",
                "question": "Evaluate $\\int_0^1 \\frac{1}{\\sqrt{4 - x^2}} \\, dx$.",
                "options": [
                    "$\\pi/6$",
                    "$\\pi/3$",
                    "$\\pi/4$",
                    "$\\pi/12$"
                ],
                "answer": "A",
                "explanation": "Use the standard formula $\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\,dx = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Here $a = 2$, so $[\\arcsin(x/2)]_0^1 = \\arcsin(1/2) - \\arcsin(0) = \\frac{\\pi}{6} - 0 = \\frac{\\pi}{6}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q16",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "A continuous function $f$ has values given by $f(0) = 2$, $f(1) = 5$, $f(2) = 7$, $f(3) = 8$. Using a Trapezoidal sum with the three subintervals, what is the approximation of $\\int_0^3 f(x)\\,dx$?",
                "options": [
                    "17",
                    "16",
                    "18.5",
                    "19"
                ],
                "answer": "A",
                "explanation": "Trapezoidal sum with uniform subinterval $\\Delta x = 1$: $T = \\frac{\\Delta x}{2} [f(0) + 2f(1) + 2f(2) + f(3)] = \\frac{1}{2} [2 + 2(5) + 2(7) + 8] = \\frac{1}{2} [2 + 10 + 14 + 8] = \\frac{1}{2} [34] = 17$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q17",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "hard",
                "question": "Evaluate $\\int_0^{\\pi} x \\sin x \\, dx$.",
                "options": [
                    "$\\pi$",
                    "$2\\pi$",
                    "0",
                    "1"
                ],
                "answer": "A",
                "explanation": "Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$. Let $u = x \\implies du = dx$; $dv = \\sin x\\,dx \\implies v = -\\cos x$. $[-x \\cos x]_0^{\\pi} - \\int_0^{\\pi} (-\\cos x)\\,dx = -(\\pi \\cos\\pi - 0) + [\\sin x]_0^{\\pi} = -\\pi(-1) + 0 = \\pi$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q18",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int_1^4 \\frac{x - 1}{\\sqrt{x}} \\, dx$.",
                "options": [
                    "8/3",
                    "7/3",
                    "10/3",
                    "4"
                ],
                "answer": "A",
                "explanation": "Split into power terms: $\\int_1^4 (x^{1/2} - x^{-1/2})\\,dx = \\left[ \\frac{2}{3}x^{3/2} - 2x^{1/2} \\right]_1^4$. At $x = 4$: $\\frac{2}{3}(8) - 2(2) = \\frac{16}{3} - 4 = \\frac{4}{3}$. At $x = 1$: $\\frac{2}{3}(1) - 2(1) = -\\frac{4}{3}$. Difference: $\\frac{4}{3} - \\left(-\\frac{4}{3}\\right) = \\frac{8}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q19",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "medium",
                "question": "Find the total area of the region enclosed between $y = x^2$ and $y = 2x$.",
                "options": [
                    "4/3",
                    "2/3",
                    "1/3",
                    "2"
                ],
                "answer": "A",
                "explanation": "Intersection points: $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0$ and $x = 2$. On $[0, 2]$, $2x \\ge x^2$. Area = $\\int_0^2 (2x - x^2)\\,dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-integ_q20",
                "topic": "Definite & Indefinite Integrals",
                "difficulty": "hard",
                "question": "Evaluate $\\int_0^2 \\frac{x^3}{x^2 + 1} \\, dx$.",
                "options": [
                    "$2 - \\frac{1}{2}\\ln 5$",
                    "$2 + \\frac{1}{2}\\ln 5$",
                    "$1 - \\ln 5$",
                    "$\\frac{1}{2}\\ln 5$"
                ],
                "answer": "A",
                "explanation": "Perform polynomial long division: $\\frac{x^3}{x^2 + 1} = x - \\frac{x}{x^2 + 1}$. The integral is $\\int_0^2 \\left(x - \\frac{x}{x^2 + 1}\\right) dx = \\left[ \\frac{x^2}{2} - \\frac{1}{2}\\ln(x^2 + 1) \\right]_0^2 = \\left(2 - \\frac{1}{2}\\ln 5\\right) - (0 - 0) = 2 - \\frac{1}{2}\\ln 5$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
