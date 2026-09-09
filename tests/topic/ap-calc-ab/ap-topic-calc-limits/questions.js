// Specific Question Bank for Test: ap-topic-calc-limits
const AP_TEST_DATA = {
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
                "id": "ap-topic-calc-limits_q1",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
                "options": [
                    "0",
                    "2",
                    "4",
                    "Undefined"
                ],
                "answer": "C",
                "explanation": "Factor $(x-2)(x+2)$, cancel $(x-2)$ to get \\$2+2 = 4$."
            },
            {
                "id": "ap-topic-calc-limits_q2",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$.",
                "options": [
                    "0",
                    "$\\frac{1}{4}$",
                    "$\\frac{1}{2}$",
                    "1"
                ],
                "answer": "B",
                "explanation": "Multiply conjugate: $\\frac{1}{\\sqrt{x+4}+2} \\to 1/4$."
            },
            {
                "id": "ap-topic-calc-limits_q3",
                "topic": "Limits",
                "difficulty": "hard",
                "question": "Evaluate $\\lim_{x \\to 0} \\frac{e^{3x} - 1 - 3x}{x^2}$.",
                "options": [
                    "0",
                    "1.5",
                    "4.5",
                    "9"
                ],
                "answer": "C",
                "explanation": "L'Hôpital twice: $\\frac{9e^{3x}}{2} \\to 4.5$."
            },
            {
                "id": "ap-topic-calc-limits_q4",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(5x)}{3x}$.",
                "options": [
                    "0",
                    "5/3",
                    "3/5",
                    "1"
                ],
                "answer": "B",
                "explanation": "Using the fundamental trigonometric limit $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$, rewrite as $\\frac{5}{3} \\lim_{5x \\to 0} \\frac{\\sin(5x)}{5x} = \\frac{5}{3}(1) = \\frac{5}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q5",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$.",
                "options": [
                    "1/4",
                    "1/2",
                    "0",
                    "Does not exist"
                ],
                "answer": "A",
                "explanation": "Rationalize the numerator by multiplying numerator and denominator by $\\sqrt{x} + 2$: $\\frac{(\\sqrt{x}-2)(\\sqrt{x}+2)}{(x-4)(\\sqrt{x}+2)} = \\frac{x-4}{(x-4)(\\sqrt{x}+2)} = \\frac{1}{\\sqrt{x}+2}$. As $x \\to 4$, this evaluates to $\\frac{1}{2+2} = \\frac{1}{4}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q6",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "For what value of $k$ is the function $f(x) = \\begin{cases} \\frac{x^2 - 16}{x - 4}, & x \\neq 4 \\\\ k, & x = 4 \\end{cases}$ continuous at $x = 4$?",
                "options": [
                    "4",
                    "8",
                    "16",
                    "0"
                ],
                "answer": "B",
                "explanation": "For continuity at $x = 4$, $f(4) = \\lim_{x \\to 4} f(x)$. Here $\\lim_{x \\to 4} \\frac{(x-4)(x+4)}{x-4} = \\lim_{x \\to 4} (x+4) = 8$. Thus, $k = 8$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q7",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to \\infty} \\frac{3x^3 - 5x + 2}{7x^3 + 4x^2 - 9}$.",
                "options": [
                    "0",
                    "3/7",
                    "$\\infty$",
                    "-2/9"
                ],
                "answer": "B",
                "explanation": "Divide both numerator and denominator by the highest power of $x$, which is $x^3$: $\\lim_{x \\to \\infty} \\frac{3 - 5/x^2 + 2/x^3}{7 + 4/x - 9/x^3} = \\frac{3}{7}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q8",
                "topic": "Limits & Continuity",
                "difficulty": "hard",
                "question": "Evaluate $\\lim_{x \\to -\\infty} \\frac{\\sqrt{4x^2 + 1}}{3x - 2}$.",
                "options": [
                    "2/3",
                    "-2/3",
                    "4/3",
                    "-4/3"
                ],
                "answer": "B",
                "explanation": "For $x < 0$, $\\sqrt{x^2} = |x| = -x$. Factoring $x^2$ from the square root yields $\\sqrt{x^2(4 + 1/x^2)} = -x\\sqrt{4 + 1/x^2}$. Dividing numerator and denominator by $x$ gives $\\frac{-\\sqrt{4 + 1/x^2}}{3 - 2/x} \\to \\frac{-2}{3} = -\\frac{2}{3}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q9",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.",
                "options": [
                    "0",
                    "1/2",
                    "1",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "Multiply numerator and denominator by $1 + \\cos x$: $\\frac{1 - \\cos^2 x}{x^2(1 + \\cos x)} = \\frac{\\sin^2 x}{x^2} \\cdot \\frac{1}{1 + \\cos x}$. Since $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ and $\\lim_{x \\to 0} \\frac{1}{1+\\cos x} = \\frac{1}{2}$, the product limit is $1^2 \\cdot \\frac{1}{2} = \\frac{1}{2}$. Alternatively, apply L'Hopital's rule twice: $\\lim \\frac{\\sin x}{2x} = \\lim \\frac{\\cos x}{2} = \\frac{1}{2}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q10",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Let $f(x) = \\begin{cases} x^2 + 2, & x \\le 1 \\\\ 2x + 1, & x > 1 \\end{cases}$. Is $f$ continuous at $x = 1$?",
                "options": [
                    "Yes, because $\\lim_{x \\to 1} f(x) = f(1) = 3$",
                    "No, because the left-hand and right-hand limits are not equal",
                    "No, because $f(1)$ is undefined",
                    "No, because the derivative does not exist at $x = 1$"
                ],
                "answer": "A",
                "explanation": "Left-hand limit: $\\lim_{x \\to 1^-} (x^2 + 2) = 3$. Right-hand limit: $\\lim_{x \\to 1^+} (2x + 1) = 3$. Value at $x=1$: $f(1) = 1^2 + 2 = 3$. Since $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^+} f(x) = f(1) = 3$, $f$ is continuous at $x = 1$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q11",
                "topic": "Limits & Continuity",
                "difficulty": "hard",
                "question": "If $\\lim_{x \\to 2} \\frac{f(x) - 5}{x - 2} = 3$, which of the following statements must be true?",
                "options": [
                    "$\\lim_{x \\to 2} f(x) = 5$",
                    "$f(2) = 3$",
                    "$f'(2) = 5$",
                    "$\\lim_{x \\to 2} f(x) = 3$"
                ],
                "answer": "A",
                "explanation": "Since the limit exists and the denominator approaches 0 as $x \\to 2$, the numerator must also approach 0. Therefore, $\\lim_{x \\to 2} [f(x) - 5] = 0$, which implies $\\lim_{x \\to 2} f(x) = 5$. (Note: $f(2)$ does not necessarily equal 5 unless $f$ is given to be continuous).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q12",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "The Intermediate Value Theorem guarantees that the function $g(x) = x^3 - 3x - 1$ has a zero in which interval?",
                "options": [
                    "[0, 1]",
                    "[1, 2]",
                    "[2, 3]",
                    "[-1, 0]"
                ],
                "answer": "B",
                "explanation": "Evaluate $g(x)$ at endpoints: $g(1) = 1^3 - 3(1) - 1 = -3 < 0$; $g(2) = 2^3 - 3(2) - 1 = 8 - 6 - 1 = 1 > 0$. Since $g$ is a polynomial, it is continuous everywhere. By IVT, since $g(1) < 0 < g(2)$, there must exist $c \\in (1, 2)$ such that $g(c) = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q13",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$.",
                "options": [
                    "1",
                    "3/2",
                    "2/3",
                    "Undefined"
                ],
                "answer": "B",
                "explanation": "Factor numerator and denominator: $x^3 - 1 = (x - 1)(x^2 + x + 1)$ and $x^2 - 1 = (x - 1)(x + 1)$. Cancel $(x - 1)$: $\\lim_{x \\to 1} \\frac{x^2 + x + 1}{x + 1} = \\frac{1 + 1 + 1}{1 + 1} = \\frac{3}{2}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q14",
                "topic": "Limits & Continuity",
                "difficulty": "hard",
                "question": "Evaluate $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$.",
                "options": [
                    "0",
                    "1",
                    "-1",
                    "Does not exist"
                ],
                "answer": "A",
                "explanation": "Since $-1 \\le \\cos(1/x) \\le 1$ for all $x \\neq 0$, multiply by $x^2 \\ge 0$: $-x^2 \\le x^2 \\cos(1/x) \\le x^2$. Since $\\lim_{x \\to 0} (-x^2) = 0$ and $\\lim_{x \\to 0} (x^2) = 0$, by the Squeeze Theorem, $\\lim_{x \\to 0} x^2 \\cos(1/x) = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q15",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "What type of discontinuity does $f(x) = \\frac{x - 3}{x^2 - 9}$ have at $x = 3$ and $x = -3$?",
                "options": [
                    "Removable at $x = 3$, vertical asymptote at $x = -3$",
                    "Vertical asymptote at $x = 3$, removable at $x = -3$",
                    "Removable at both $x = 3$ and $x = -3$",
                    "Jump discontinuity at $x = 3$, vertical asymptote at $x = -3$"
                ],
                "answer": "A",
                "explanation": "Simplify $f(x) = \\frac{x - 3}{(x - 3)(x + 3)} = \\frac{1}{x + 3}$ for $x \\neq 3$. At $x = 3$, the factor cancels, $\\lim_{x \\to 3} f(x) = 1/6$ exists, so it is a removable discontinuity. At $x = -3$, the denominator is 0 while numerator is non-zero, giving a vertical asymptote (infinite discontinuity).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q16",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{h \\to 0} \\frac{(2 + h)^4 - 16}{h}$.",
                "options": [
                    "8",
                    "16",
                    "32",
                    "64"
                ],
                "answer": "C",
                "explanation": "Recognize this limit as the definition of the derivative $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$ for $f(x) = x^4$ at $a = 2$. Here $f'(x) = 4x^3$, so $f'(2) = 4(2)^3 = 4(8) = 32$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q17",
                "topic": "Limits & Continuity",
                "difficulty": "hard",
                "question": "Evaluate $\\lim_{x \\to 0^+} x \\ln x$.",
                "options": [
                    "$-\\infty$",
                    "0",
                    "1",
                    "$-1$"
                ],
                "answer": "B",
                "explanation": "Rewrite as an indeterminate form $\\frac{\\infty}{\\infty}$: $\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}$. Apply L'Hopital's Rule: differentiate numerator ($1/x$) and denominator ($-1/x^2$): $\\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q18",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Find all horizontal asymptotes of $f(x) = \\frac{5e^x + 2}{e^x - 3}$.",
                "options": [
                    "$y = 5$ only",
                    "$y = 5$ and $y = -2/3$",
                    "$y = -2/3$ only",
                    "$y = 0$ and $y = 5$"
                ],
                "answer": "B",
                "explanation": "As $x \\to \\infty$, $e^x \\to \\infty$, so $\\lim_{x \\to \\infty} \\frac{5e^x + 2}{e^x - 3} = \\lim_{x \\to \\infty} \\frac{5 + 2e^{-x}}{1 - 3e^{-x}} = 5$, giving $y = 5$. As $x \\to -\\infty$, $e^x \\to 0$, so $\\lim_{x \\to -\\infty} \\frac{5e^x + 2}{e^x - 3} = \\frac{0 + 2}{0 - 3} = -\\frac{2}{3}$, giving $y = -2/3$. Thus, $y = 5$ and $y = -2/3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q19",
                "topic": "Limits & Continuity",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 3^-} \\frac{|x - 3|}{x - 3}$.",
                "options": [
                    "1",
                    "-1",
                    "0",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "For $x < 3$, $x - 3 < 0$, so $|x - 3| = -(x - 3)$. Thus, $\\frac{|x - 3|}{x - 3} = \\frac{-(x - 3)}{x - 3} = -1$. The left-hand limit is $-1$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-calc-limits_q20",
                "topic": "Limits & Continuity",
                "difficulty": "hard",
                "question": "Evaluate $\\lim_{x \\to 0} (1 + 3x)^{2/x}$.",
                "options": [
                    "$e^3$",
                    "$e^6$",
                    "$e^2$",
                    "1"
                ],
                "answer": "B",
                "explanation": "This is of the form $1^\\infty$. Let $y = (1 + 3x)^{2/x}$. Then $\\ln y = \\frac{2}{x} \\ln(1 + 3x) = 2 \\cdot \\frac{\\ln(1 + 3x)}{x}$. As $x \\to 0$, $\\lim_{x \\to 0} \\frac{\\ln(1 + 3x)}{x} = 3$ (by L'Hopital's rule or standard limit). Thus $\\lim_{x \\to 0} \\ln y = 2(3) = 6$, which implies $\\lim_{x \\to 0} y = e^6$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
