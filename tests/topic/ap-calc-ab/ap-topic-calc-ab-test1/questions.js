// Specific Question Bank for Test: ap-topic-calc-ab-test1
const AP_TEST_DATA = {
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
                "question": "Evaluate: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
                "options": [
                    "0",
                    "2",
                    "4",
                    "Does not exist"
                ],
                "answer": "C",
                "explanation": "Factor $x^2 - 4 = (x - 2)(x + 2)$. The expression simplifies to $x + 2$, so as $x \\to 2$, the limit is $2 + 2 = 4$."
            },
            {
                "id": "calc_t1_2",
                "topic": "Continuity",
                "difficulty": "medium",
                "question": "For which value of $k$ is $f(x)$ continuous at $x = 3$? <br>$f(x) = \\begin{cases} x^2 + k, & x < 3 \\\\ 12, & x \\ge 3 \\end{cases}$",
                "options": [
                    "2",
                    "3",
                    "4",
                    "6"
                ],
                "answer": "B",
                "explanation": "For continuity at $x = 3$, $\\lim_{x \\to 3^-} f(x) = f(3)$. Thus, $3^2 + k = 12 \\implies 9 + k = 12 \\implies k = 3$."
            },
            {
                "id": "calc_t1_3",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "If $f(x) = x^2$, then $f'(3)$ is:",
                "options": [
                    "3",
                    "6",
                    "9",
                    "12"
                ],
                "answer": "B",
                "explanation": "$f'(x) = 2x$, so $f'(3) = 2(3) = 6$."
            },
            {
                "id": "calc_t1_4",
                "topic": "Power Rule",
                "difficulty": "easy",
                "question": "If $f(x) = 5x^4 - 3x^2 + 7$, then $f'(x)$ is:",
                "options": [
                    "$20x^3 -6x$",
                    "$20x^4 -6x$",
                    "$5x^3 -3x$",
                    "$20x^3 -3x$"
                ],
                "answer": "A",
                "explanation": "Apply the power rule term-by-term: $\\frac{d}{dx}(5x^4) - \\frac{d}{dx}(3x^2) + \\frac{d}{dx}(7) = 20x^3 $-6x$."
            },
            {
                "id": "calc_t1_5",
                "topic": "Product Rule",
                "difficulty": "medium",
                "question": "Find the derivative of $f(x) = x^2 e^x$:",
                "options": [
                    "$2x e^x$",
                    "$x^2 e^x$",
                    "$e^x (x^2 + 2x)$",
                    "$2x + e^x$"
                ],
                "answer": "C",
                "explanation": "Using the product rule: $f'(x) = (2x)e^x + x^2 e^x = e^x(x^2 + 2x)$."
            },
            {
                "id": "calc_t1_6",
                "topic": "Chain Rule",
                "difficulty": "medium",
                "question": "Find $\\frac{d}{dx} \\sin(3x^2)$:",
                "options": [
                    "$\\cos(3x^2)$",
                    "$6x \\cos(3x^2)$",
                    "$3x \\cos(3x^2)$",
                    "$6x \\sin(3x^2)$"
                ],
                "answer": "B",
                "explanation": "Outer derivative is $\\cos(3x^2)$ and inner derivative is $6x$, so $f'(x) = 6x \\cos(3x^2)$."
            },
            {
                "id": "calc_t1_7",
                "topic": "Implicit Differentiation",
                "difficulty": "medium",
                "question": "Given $x^2 + y^2 = 25$, what is $\\frac{dy}{dx}$?",
                "options": [
                    "$\\frac{y}{x}$",
                    "$-\\frac{y}{x}$",
                    "$\\frac{x}{y}$",
                    "$-\\frac{x}{y}$"
                ],
                "answer": "D",
                "explanation": "Differentiating implicitly: $2x + 2y \\frac{dy}{dx} = 0 \\implies 2y \\frac{dy}{dx} = $-2x$ \\implies \\frac{dy}{dx} = -\\frac{x}{y}$."
            },
            {
                "id": "calc_t1_8",
                "topic": "Tangent Line",
                "difficulty": "medium",
                "question": "For $f(x) = x^2 + 1$, find the equation of the tangent line at $x = 2$.",
                "options": [
                    "$y = 4x - 3$",
                    "$y = 4x + 3$",
                    "$y = 2x + 1$",
                    "$y = 4x - 1$"
                ],
                "answer": "A",
                "explanation": "$f(2) = 5$, slope $m = f'(2) = 2(2) = 4$. Tangent equation: $y - 5 = 4(x - 2) \\implies y = 4x - 3$."
            },
            {
                "id": "calc_t1_9",
                "topic": "Related Rates",
                "difficulty": "hard",
                "question": "The radius of a circle increases at $2 \\text{ cm/s}$. How fast is its area increasing when $r = 3$?",
                "options": [
                    "$6\\pi$",
                    "$9\\pi$",
                    "$12\\pi$",
                    "$18\\pi$"
                ],
                "answer": "C",
                "explanation": "$A = \\pi r^2 \\implies \\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(3)(2) = 12\\pi$."
            },
            {
                "id": "calc_t1_10",
                "topic": "Critical Points",
                "difficulty": "medium",
                "question": "For $f(x) = x^3 - 3x^2$, the critical numbers are:",
                "options": [
                    "0, 2",
                    "1, 2",
                    "0, 3",
                    "2, 3"
                ],
                "answer": "A",
                "explanation": "$f'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0, 2$."
            },
            {
                "id": "calc_t1_11",
                "topic": "Increasing Function",
                "difficulty": "medium",
                "question": "For $f(x) = x^3 -3x$, on which interval(s) is $f$ increasing?",
                "options": [
                    "$(-1, 1)$",
                    "$(-\\infty, -1) \\cup (1, \\infty)$",
                    "$(-\\infty, 1)$",
                    "$(1, \\infty)$"
                ],
                "answer": "B",
                "explanation": "$f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$. The derivative is positive when $x < -1$ or $x > 1$."
            },
            {
                "id": "calc_t1_12",
                "topic": "Local Maximum",
                "difficulty": "medium",
                "question": "For $f(x) = x^3 -3x$, where does the local maximum occur?",
                "options": [
                    "$x = -1$",
                    "$x = 0$",
                    "$x = 1$",
                    "$x = 3$"
                ],
                "answer": "A",
                "explanation": "$f'(x) = 3(x+1)(x-1)$ changes sign from positive to negative at $x = -1$, giving a local maximum."
            },
            {
                "id": "calc_t1_13",
                "topic": "Concavity",
                "difficulty": "easy",
                "question": "For $f(x) = x^3$, where is the function concave down?",
                "options": [
                    "$x < 0$",
                    "$x > 0$",
                    "All real $x$",
                    "Nowhere"
                ],
                "answer": "A",
                "explanation": "$f''(x) = 6x$. Concave down means $f''(x) < 0$, which holds for $x < 0$."
            },
            {
                "id": "calc_t1_14",
                "topic": "Mean Value Theorem",
                "difficulty": "medium",
                "question": "For $f(x) = x^2$ on $[1, 3]$, what is the value of $c$ guaranteed by MVT?",
                "options": [
                    "1",
                    "1.5",
                    "2",
                    "2.5"
                ],
                "answer": "C",
                "explanation": "Average rate of change is $\\frac{f(3)$-f$(1)}{3-1} = \\frac{9-1}{2} = 4$. Set $f'(c) = 2c = 4 \\implies c = 2$."
            },
            {
                "id": "calc_t1_15",
                "topic": "Absolute Maximum",
                "difficulty": "medium",
                "question": "On $[0, 3]$, the maximum value of $f(x) = x^2 -2x$ occurs at:",
                "options": [
                    "$x = 0$",
                    "$x = 1$",
                    "$x = 2$",
                    "$x = 3$"
                ],
                "answer": "D",
                "explanation": "Check critical point $f'(x) = 2x-2=0 \\implies x=1$ and endpoints: $f(0)=0$, $f(1)=-1$, $f(3)=3$. Absolute max is at $x = 3$."
            },
            {
                "id": "calc_t1_16",
                "topic": "Indefinite Integral",
                "difficulty": "easy",
                "question": "Evaluate: $\\int 3x^2\\,dx$",
                "options": [
                    "$x^3 + C$",
                    "$3x^3 + C$",
                    "$x^2 + C$",
                    "$6x + C$"
                ],
                "answer": "A",
                "explanation": "Power rule for integrals: $\\int 3x^2 dx = 3 \\cdot \\frac{x^3}{3} + C = x^3  + C$."
            },
            {
                "id": "calc_t1_17",
                "topic": "Definite Integral",
                "difficulty": "easy",
                "question": "Evaluate: $\\int_0^2 x\\,dx$",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "B",
                "explanation": "$\\left[ \\frac{x^2}{2} \\right]_0^2 = \\frac{4}{2} - 0 = 2$."
            },
            {
                "id": "calc_t1_18",
                "topic": "Fundamental Theorem of Calculus",
                "difficulty": "medium",
                "question": "If $F(x) = \\int_1^x (t^3 + 2t) , dt$, then $F'(x)$ equals:",
                "options": [
                    "$x^2 + 2$",
                    "$x^3 +2x$",
                    "$3x^2 + 2$",
                    "$x^4 + 2x^2$"
                ],
                "answer": "B",
                "explanation": "By FTC Part 1, $F'(x) = \\frac{d}{dx} \\int_1^x (t^3 + 2t) dt = x^3 +2x$."
            },
            {
                "id": "calc_t1_19",
                "topic": "Area Between Curves",
                "difficulty": "medium",
                "question": "The area of the region bounded between $y = x$ and $y = x^2$ from $x = 0$ to $x = 1$ is:",
                "options": [
                    "$\\frac{1}{3}$",
                    "$\\frac{1}{4}$",
                    "$\\frac{1}{6}$",
                    "$\\frac{1}{2}$"
                ],
                "answer": "C",
                "explanation": "$$\\int_{0}^{1} (x - x^2) dx = $left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
            },
            {
                "id": "calc_t1_20",
                "topic": "Average Value",
                "difficulty": "medium",
                "question": "The average value of $f(x) = x^2$ on $[0, 2]$ is:",
                "options": [
                    "1",
                    "$\\frac{4}{3}$",
                    "2",
                    "$\\frac{8}{3}$"
                ],
                "answer": "B",
                "explanation": "$f_{avg} = \\frac{1}{2-0}$\\int_{0}^{2} x^2 dx = $frac{1}{2} \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{1}{2} \\cdot \\frac{8}{3} = \\frac{4}{3}$."
            }
        ]
    }
};
