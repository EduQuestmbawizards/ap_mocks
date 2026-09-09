// Specific Question Bank for Test: ap-topic-calc-deriv
const AP_TEST_DATA = {
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
                "id": "ap-topic-calc-deriv_q1",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "Find $\\frac{d}{dx}[x^3 e^x]$.",
                "options": [
                    "$3x^2 e^x$",
                    "$x^2 e^x(x+3)$",
                    "$x^3 e^x$",
                    "$e^x(x^3+1)$"
                ],
                "answer": "B",
                "explanation": "Product rule: $3x^2 e^x + x^3 e^x = x^2 e^x(x+3)$."
            },
            {
                "id": "ap-topic-calc-deriv_q2",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Find slope of tangent to $x^2 y + y^3 = 5$ at $(1,1)$.",
                "options": [
                    "$\\frac{-1}{2}$",
                    "$\\frac{1}{2}$",
                    "-2",
                    "2"
                ],
                "answer": "A",
                "explanation": "Implicit diff gives $y' = -1/2$."
            },
            {
                "id": "ap-topic-calc-deriv_q3",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "If $f(x) = (3x^2 - 5x + 1)^4$, find $f'(1)$.",
                "options": [
                    "-4",
                    "4",
                    "-8",
                    "8"
                ],
                "answer": "A",
                "explanation": "By the Chain Rule, $f'(x) = 4(3x^2 - 5x + 1)^3 \\cdot (6x - 5)$. At $x = 1$, $3(1)^2 - 5(1) + 1 = -1$, and $6(1) - 5 = 1$. So $f'(1) = 4(-1)^3(1) = 4(-1)(1) = -4$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q4",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find the derivative of $g(x) = x^2 \\sin(3x)$.",
                "options": [
                    "$2x \\sin(3x) + 3x^2 \\cos(3x)$",
                    "$2x \\cos(3x)$",
                    "$6x \\cos(3x)$",
                    "$2x \\sin(3x) - 3x^2 \\cos(3x)$"
                ],
                "answer": "A",
                "explanation": "Apply the Product Rule $(uv)' = u'v + uv'$: $u = x^2 \\implies u' = 2x$; $v = \\sin(3x) \\implies v' = 3\\cos(3x)$. Thus $g'(x) = 2x\\sin(3x) + x^2 \\cdot 3\\cos(3x) = 2x\\sin(3x) + 3x^2\\cos(3x)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q5",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "If $y = \\frac{2x - 1}{x + 3}$, find $\\frac{dy}{dx}$.",
                "options": [
                    "$\\frac{7}{(x+3)^2}$",
                    "$\\frac{5}{(x+3)^2}$",
                    "$\\frac{2}{(x+3)^2}$",
                    "$\\frac{-7}{(x+3)^2}$"
                ],
                "answer": "A",
                "explanation": "Apply Quotient Rule $\\frac{u'v - uv'}{v^2}$: $\\frac{d}{dx}\\left(\\frac{2x-1}{x+3}\\right) = \\frac{2(x+3) - (2x-1)(1)}{(x+3)^2} = \\frac{2x + 6 - 2x + 1}{(x+3)^2} = \\frac{7}{(x+3)^2}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q6",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find $\\frac{dy}{dx}$ at $(1, 2)$ if $x^2 + y^2 - 2xy = 1$.",
                "options": [
                    "1",
                    "-1",
                    "0",
                    "2"
                ],
                "answer": "A",
                "explanation": "Notice that $x^2 - 2xy + y^2 = (x - y)^2 = 1$. Differentiating implicitly: $2x + 2y\\frac{dy}{dx} - 2y - 2x\\frac{dy}{dx} = 0 \\implies (2y - 2x)\\frac{dy}{dx} = 2y - 2x$. For $x \\neq y$, $\\frac{dy}{dx} = 1$. At $(1, 2)$, $2(2) - 2(1) = 2 \\neq 0$, so $\\frac{dy}{dx} = \\frac{4 - 2}{4 - 2} = 1$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q7",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "hard",
                "question": "If $f(x) = x^{\\ln x}$ for $x > 0$, find $f'(e)$.",
                "options": [
                    "1",
                    "2",
                    "$e$",
                    "$2/e$"
                ],
                "answer": "B",
                "explanation": "Use logarithmic differentiation: $y = x^{\\ln x} \\implies \\ln y = (\\ln x)(\\ln x) = (\\ln x)^2$. Differentiating: $\\frac{1}{y} y' = 2(\\ln x) \\cdot \\frac{1}{x} \\implies y' = x^{\\ln x} \\cdot \\frac{2\\ln x}{x}$. At $x = e$: $\\ln e = 1$, $e^{\\ln e} = e^1 = e$, so $y'(e) = e \\cdot \\frac{2(1)}{e} = 2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q8",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "If $g$ is the inverse function of $f$, where $f(x) = x^3 + 2x - 1$, what is $g'(2)$?",
                "options": [
                    "1/5",
                    "1/14",
                    "5",
                    "14"
                ],
                "answer": "A",
                "explanation": "By the inverse function derivative rule, $g'(b) = \\frac{1}{f'(a)}$ where $f(a) = b$. We want $f(a) = 2 \\implies a^3 + 2a - 1 = 2 \\implies a^3 + 2a - 3 = 0$. By inspection, $a = 1$. Compute $f'(x) = 3x^2 + 2$, so $f'(1) = 3(1)^2 + 2 = 5$. Therefore $g'(2) = \\frac{1}{f'(1)} = \\frac{1}{5}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q9",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find $\\frac{d}{dx}[\\arctan(2x)]$ at $x = 1/2$.",
                "options": [
                    "1",
                    "2",
                    "1/2",
                    "4"
                ],
                "answer": "A",
                "explanation": "By the chain rule, $\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. With $u = 2x$ and $u' = 2$, $\\frac{d}{dx}[\\arctan(2x)] = \\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$. At $x = 1/2$, $4x^2 = 4(1/4) = 1$, so the derivative is $\\frac{2}{1 + 1} = 1$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q10",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find the slope of the tangent line to the curve $y = e^{3x} \\cos(2x)$ at $x = 0$.",
                "options": [
                    "1",
                    "2",
                    "3",
                    "5"
                ],
                "answer": "C",
                "explanation": "Product rule: $y' = 3e^{3x}\\cos(2x) + e^{3x}(-2\\sin(2x)) = e^{3x}[3\\cos(2x) - 2\\sin(2x)]$. At $x = 0$: $e^0[3\\cos(0) - 2\\sin(0)] = 1[3(1) - 0] = 3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q11",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "hard",
                "question": "If $y = \\ln(\\sec x + \\tan x)$, what is $\\frac{dy}{dx}$?",
                "options": [
                    "$\\sec x$",
                    "$\\tan x$",
                    "$\\sec x \\tan x$",
                    "$\\sec^2 x$"
                ],
                "answer": "A",
                "explanation": "Chain rule: $\\frac{dy}{dx} = \\frac{1}{\\sec x + \\tan x} \\cdot (\\sec x \\tan x + \\sec^2 x) = \\frac{\\sec x (\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q12",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find the second derivative $y''$ of $y = \\ln(x^2 + 1)$ at $x = 1$.",
                "options": [
                    "0",
                    "1",
                    "1/2",
                    "-1/2"
                ],
                "answer": "A",
                "explanation": "First derivative: $y' = \\frac{2x}{x^2 + 1}$. Second derivative by quotient rule: $y'' = \\frac{2(x^2 + 1) - 2x(2x)}{(x^2 + 1)^2} = \\frac{2x^2 + 2 - 4x^2}{(x^2 + 1)^2} = \\frac{2 - 2x^2}{(x^2 + 1)^2}$. At $x = 1$, the numerator is $2 - 2(1)^2 = 0$, so $y''(1) = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q13",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "If $h(x) = f(g(x))$, $g(2) = 3$, $g'(2) = -4$, and $f'(3) = 5$, what is $h'(2)$?",
                "options": [
                    "-20",
                    "20",
                    "-12",
                    "15"
                ],
                "answer": "A",
                "explanation": "By the Chain Rule, $h'(x) = f'(g(x)) \\cdot g'(x)$. For $x = 2$: $h'(2) = f'(g(2)) \\cdot g'(2) = f'(3) \\cdot (-4) = 5 \\cdot (-4) = -20$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q14",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "hard",
                "question": "Find $\\frac{d}{dx}[\\arcsin(3x^2)]$ for $|x| < \\frac{1}{\\sqrt{3}}$.",
                "options": [
                    "$\\frac{6x}{\\sqrt{1 - 9x^4}}$",
                    "$\\frac{3x}{\\sqrt{1 - 9x^4}}$",
                    "$\\frac{6x}{1 + 9x^4}$",
                    "$\\frac{1}{\\sqrt{1 - 9x^4}}$"
                ],
                "answer": "A",
                "explanation": "Using $\\frac{d}{dx}[\\arcsin u] = \\frac{u'}{\\sqrt{1 - u^2}}$ with $u = 3x^2$ and $u' = 6x$: $\\frac{d}{dx}[\\arcsin(3x^2)] = \\frac{6x}{\\sqrt{1 - (3x^2)^2}} = \\frac{6x}{\\sqrt{1 - 9x^4}}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q15",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "The position of a particle along the $x$-axis is given by $s(t) = 2t^3 - 9t^2 + 12t - 4$. At what times is the particle at rest?",
                "options": [
                    "$t = 1$ and $t = 2$",
                    "$t = 2$ and $t = 3$",
                    "$t = 1/2$ and $t = 2$",
                    "$t = 0$ only"
                ],
                "answer": "A",
                "explanation": "The particle is at rest when velocity $v(t) = s'(t) = 0$. $s'(t) = 6t^2 - 18t + 12 = 6(t^2 - 3t + 2) = 6(t - 1)(t - 2) = 0$. Thus, $t = 1$ and $t = 2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q16",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find the value of $\\lim_{x \\to 0} \\frac{e^{2x} - 1 - 2x}{x^2}$.",
                "options": [
                    "0",
                    "1",
                    "2",
                    "4"
                ],
                "answer": "C",
                "explanation": "Form $0/0$: apply L'Hopital's Rule once: $\\lim_{x \\to 0} \\frac{2e^{2x} - 2}{2x}$. Still $0/0$: apply L'Hopital's Rule a second time: $\\lim_{x \\to 0} \\frac{4e^{2x}}{2} = \\frac{4(1)}{2} = 2$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q17",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "hard",
                "question": "If $x^3 + y^3 = 6xy$, find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
                "options": [
                    "$\\frac{2y - x^2}{y^2 - 2x}$",
                    "$\\frac{x^2 - 2y}{y^2 - 2x}$",
                    "$\\frac{2x - y^2}{x^2 - 2y}$",
                    "$\\frac{y^2 - 2x}{2y - x^2}$"
                ],
                "answer": "A",
                "explanation": "Differentiate implicitly: $3x^2 + 3y^2 y' = 6(y + x y') = 6y + 6x y'$. Divide by 3: $x^2 + y^2 y' = 2y + 2x y'$. Group $y'$ terms: $(y^2 - 2x)y' = 2y - x^2 \\implies y' = \\frac{2y - x^2}{y^2 - 2x}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q18",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "Find the tangent line approximation $L(x)$ to $f(x) = \\sqrt{x}$ at $a = 25$, and use it to approximate $\\sqrt{26}$.",
                "options": [
                    "5.1",
                    "5.05",
                    "5.2",
                    "5.01"
                ],
                "answer": "A",
                "explanation": "$f(25) = 5$. $f'(x) = \\frac{1}{2\\sqrt{x}}$, so $f'(25) = \\frac{1}{10} = 0.1$. The linear approximation is $L(x) = 5 + 0.1(x - 25)$. For $x = 26$, $L(26) = 5 + 0.1(1) = 5.1$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q19",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "medium",
                "question": "If $f(x) = \\cos^3(4x)$, find $f'(x)$.",
                "options": [
                    "$-12 \\cos^2(4x) \\sin(4x)$",
                    "$-3 \\cos^2(4x) \\sin(4x)$",
                    "$12 \\cos^2(4x) \\sin(4x)$",
                    "$-12 \\sin^2(4x) \\cos(4x)$"
                ],
                "answer": "A",
                "explanation": "By the chain rule: $\\frac{d}{dx}[u^3] = 3u^2 u'$. Here $u = \\cos(4x)$, so $u' = -4\\sin(4x)$. Therefore $f'(x) = 3\\cos^2(4x) \\cdot [-4\\sin(4x)] = -12\\cos^2(4x)\\sin(4x)$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-deriv_q20",
                "topic": "Derivatives & Chain Rule",
                "difficulty": "hard",
                "question": "A curve has equation $y = 3^{2x}$. What is the value of $\\frac{dy}{dx}$ at $x = 1$?",
                "options": [
                    "$18 \\ln 3$",
                    "$9 \\ln 3$",
                    "$18$",
                    "$9$"
                ],
                "answer": "A",
                "explanation": "Recall $\\frac{d}{dx}[a^u] = a^u (\\ln a) \\frac{du}{dx}$. For $y = 3^{2x}$, $\\frac{dy}{dx} = 3^{2x} (\\ln 3)(2) = 2 \\cdot 3^{2x} \\ln 3$. At $x = 1$, $3^2 = 9$, so $2(9)\\ln 3 = 18 \\ln 3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
