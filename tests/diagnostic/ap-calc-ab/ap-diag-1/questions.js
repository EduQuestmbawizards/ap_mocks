// Specific Question Bank for Test: ap-diag-1
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
                "question": "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
                "options": [
                    "0",
                    "3",
                    "6",
                    "Undefined"
                ],
                "answer": "C",
                "explanation": "Factor numerator: $x^2 - 9 = (x - 3)(x + 3)$. Cancel $(x - 3)$ to get $\\lim_{x \\to 3} (x + 3) = 6$."
            },
            {
                "id": "diag_2",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "What is $\\lim_{x \\to 0} \\frac{\\sin(4x)}{x}$?",
                "options": [
                    "0",
                    "1",
                    "4",
                    "Does not exist"
                ],
                "answer": "C",
                "explanation": "Using $\\lim_{u \\to 0} \\frac{\\sin(k u)}{u} = k$, we get 4."
            },
            {
                "id": "diag_3",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Find $\\lim_{x \\to \\infty} \\frac{5x^3 - 2x + 1}{2x^3 + 7x^2}$.",
                "options": [
                    "0",
                    "2.5",
                    "5",
                    "$\\infty$"
                ],
                "answer": "B",
                "explanation": "Leading coefficients ratio: 5/2 = 2.5."
            },
            {
                "id": "diag_4",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "If $f(x) = 4x^3 - 5x^2 + 7x - 2$, what is $f'(x)$?",
                "options": [
                    "$12x^2 - 10x + 7$",
                    "$12x^2 - 5x + 7$",
                    "$4x^2 -10x$",
                    "$12x^3 - 10x^2$"
                ],
                "answer": "A",
                "explanation": "Apply power rule term by term: $12x^2 - 10x + 7$."
            },
            {
                "id": "diag_5",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Find the slope of the tangent line to $x^2 + y^2 = 25$ at $(3, 4)$.",
                "options": [
                    "$\\frac{-3}{4}$",
                    "$\\frac{3}{4}$",
                    "$\\frac{-4}{3}$",
                    "$\\frac{4}{3}$"
                ],
                "answer": "A",
                "explanation": "$2x + 2y y' = 0 \\implies y' = $-x$/y = -3/4$."
            },
            {
                "id": "diag_6",
                "topic": "Integrals",
                "difficulty": "easy",
                "question": "Evaluate $\\int (3x^2 - 4x + 5) dx$.",
                "options": [
                    "$x^3 - 2x^2 + 5x + C$",
                    "$6x - 4 + C$",
                    "$x^3 - 4x^2 + 5x + C$",
                    "$3x^3 - 2x^2 + C$"
                ],
                "answer": "A",
                "explanation": "Power rule for integration gives $x^3 - 2x^2 + 5x + C$."
            },
            {
                "id": "diag_7",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Find $\\int_{0}^{\\pi/2} \\sin(x) \\cos(x)\\,dx$.",
                "options": [
                    "0",
                    "0.5",
                    "1",
                    "2"
                ],
                "answer": "B",
                "explanation": "Substitution $u = \\sin(x)$ gives $[u^2/2]_0^1 = 0.5$."
            },
            {
                "id": "diag_8",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "Find the average value of $f(x) = x^2$ on $[0, 3]$.",
                "options": [
                    "3",
                    "4.5",
                    "9",
                    "27"
                ],
                "answer": "A",
                "explanation": "$\\frac{1}{3}$\\int_{0}^{3} x^2 dx = $frac{1}{3} [x^3/3]_0^3 = 3$."
            },
            {
                "id": "diag_9",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Find $\\frac{d}{dx}[\\sin(x^2)]$.",
                "options": [
                    "$\\cos(x^2)$",
                    "$2x\\cos(x^2)$",
                    "$-\\sin(x^2)$",
                    "\\$2\\cos(x^2)$"
                ],
                "answer": "B",
                "explanation": "Chain rule: $\\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$."
            },
            {
                "id": "diag_10",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Use the product rule to differentiate $f(x) = x^2 e^x$.",
                "options": [
                    "$2xe^x$",
                    "$x^2 e^x + 2xe^x$",
                    "$2xe^x - x^2 e^x$",
                    "$x^2 e^x$"
                ],
                "answer": "B",
                "explanation": "$f'(x) = x^2 e^x + 2x e^x$ by product rule."
            },
            {
                "id": "diag_11",
                "topic": "Limits",
                "difficulty": "medium",
                "question": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.",
                "options": [
                    "0",
                    "$\\frac{1}{2}$",
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
                "question": "What is the derivative of $\\ln(x)$?",
                "options": [
                    "$x$",
                    "\\$1/x$",
                    "$e^x$",
                    "$\\ln(x)/x$"
                ],
                "answer": "B",
                "explanation": "$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$."
            },
            {
                "id": "diag_13",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int e^{3x} dx$.",
                "options": [
                    "$e^{3x} + C$",
                    "$3e^{3x} + C$",
                    "$\\frac{1}{3}e^{3x} + C$",
                    "$\\frac{e^{3x}}{x} + C$"
                ],
                "answer": "C",
                "explanation": "$\\int e^{3x} dx = \\frac{1}{3}e^{3x}  + C$."
            },
            {
                "id": "diag_14",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "If $f'(x) > 0$ on $(a, b)$, then $f$ is:",
                "options": [
                    "Decreasing on $(a,b)$",
                    "Increasing on $(a,b)$",
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
                "question": "Find the critical points of $f(x) = x^3 -3x$.",
                "options": [
                    "$x = 0$",
                    "$x = \\pm 1$",
                    "$x = \\pm 3$",
                    "$x = 1$ only"
                ],
                "answer": "B",
                "explanation": "$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$."
            },
            {
                "id": "diag_16",
                "topic": "Integrals",
                "difficulty": "hard",
                "question": "Evaluate $\\int_1^e \\frac{\\ln(x)}{x}\\,dx$.",
                "options": [
                    "0",
                    "$\\frac{1}{2}$",
                    "1",
                    "e"
                ],
                "answer": "B",
                "explanation": "Let $u = \\ln x$, $du = dx/x$. Integral becomes  \\int_{0}^{1} u$\\, du = 1/2$."
            },
            {
                "id": "diag_17",
                "topic": "Derivatives",
                "difficulty": "hard",
                "question": "Find $\\frac{d}{dx}[\\tan^{-1}(x)]$.",
                "options": [
                    "$\\frac{1}{1+x^2}$",
                    "$\\frac{1}{\\sqrt{1-x^2}}$",
                    "$-\\frac{1}{1+x^2}$",
                    "$\\sec^2(x)$"
                ],
                "answer": "A",
                "explanation": "Standard derivative: $\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$."
            },
            {
                "id": "diag_18",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "The second derivative test: if $f'(c)=0$ and $f''(c) > 0$, then $f$ has a:",
                "options": [
                    "Local minimum at $x=c$",
                    "Local maximum at $x=c$",
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
                "question": "Use substitution: $\\int 2x(x^2+1)^4 dx$.",
                "options": [
                    "$\\frac{(x^2+1)^5}{5}  + C$",
                    "$\\frac{(x^2+1)^5}{10}  + C$",
                    "$8x(x^2+1)^3 + C$",
                    "$(x^2+1)^5  + C$"
                ],
                "answer": "A",
                "explanation": "Let $u = x^2+\\$1$, $du = 2x\\\\,$dx$. Integral = $u^5/5 + C$."
            },
            {
                "id": "diag_20",
                "topic": "Limits",
                "difficulty": "hard",
                "question": "Apply L'Hopital's Rule: $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.",
                "options": [
                    "0",
                    "1",
                    "e",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "Both numerator and denominator are 0/0. Differentiate: $e^x/1 = 1$ at $x=0$."
            },
            {
                "id": "diag_21",
                "topic": "Applications",
                "difficulty": "medium",
                "question": "The area between $y = x^2$ and $y = x$ from $x=0$ to $x=1$ is:",
                "options": [
                    "$\\frac{1}{6}$",
                    "$\\frac{1}{3}$",
                    "$\\frac{1}{2}$",
                    "1"
                ],
                "answer": "A",
                "explanation": "$\\int_0^1 (x - x^2) dx = 1/2 - 1/3 = 1/6$."
            },
            {
                "id": "diag_22",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "What is $\\frac{d}{dx}[x^x]$?",
                "options": [
                    "$x \\cdot x^{x-1}$",
                    "$x^x(1 + \\ln x)$",
                    "$x^x \\ln x$",
                    "$x^{x-1}$"
                ],
                "answer": "B",
                "explanation": "Take $\\ln y = x \\ln x$. Then $y'/y = \\ln x + 1$, so $y' = x^x(1+\\ln x)$."
            },
            {
                "id": "diag_23",
                "topic": "Integrals",
                "difficulty": "medium",
                "question": "Evaluate $\\int \\cos^2(x) dx$.",
                "options": [
                    "$\\frac{\\sin(2x)}{4}  + C$",
                    "$\\frac{x}{2} + \\frac{\\sin(2x)}{4}  + C$",
                    "$-\\sin^2(x)  + C$",
                    "$\\cos(x)\\sin(x)  + C$"
                ],
                "answer": "B",
                "explanation": "Use $\\cos^2 x = (1+\\cos 2x)/2$: integral = $x/2 + \\sin(2x)/4 + C$."
            },
            {
                "id": "diag_24",
                "topic": "Applications",
                "difficulty": "hard",
                "question": "Volume from rotating $y=\\sqrt{x}$ around x-axis, $x=0$ to $x=4$:",
                "options": [
                    "\\$4\\pi$",
                    "\\$8\\pi$",
                    "\\$16\\pi$",
                    "\\$32\\pi$"
                ],
                "answer": "B",
                "explanation": "$V = \\pi$\\int_{0}^{4} x$\\,dx = \\pi[x^2/2]_0^4 = 8\\pi$."
            },
            {
                "id": "diag_25",
                "topic": "Derivatives",
                "difficulty": "easy",
                "question": "Find $\\frac{d}{dx}[\\cos(3x)]$.",
                "options": [
                    "$-\\sin(3x)$",
                    "$-3\\sin(3x)$",
                    "\\$3\\cos(3x)$",
                    "$\\sin(3x)$"
                ],
                "answer": "B",
                "explanation": "Chain rule: $-\\sin(3x) \\cdot 3 = -3\\sin(3x)$."
            },
            {
                "id": "diag_26",
                "topic": "Limits",
                "difficulty": "easy",
                "question": "$\\lim_{x \\to 2} (3x^2 - 4) = $?",
                "options": [
                    "2",
                    "4",
                    "8",
                    "12"
                ],
                "answer": "C",
                "explanation": "Direct substitution: \\$3(4) - 4 = 8$."
            },
            {
                "id": "diag_27",
                "topic": "Integrals",
                "difficulty": "easy",
                "question": "Evaluate $\\int_{0}^{2} 3\\,dx$.",
                "options": [
                    "3",
                    "6",
                    "9",
                    "0"
                ],
                "answer": "B",
                "explanation": "$$\\int_{0}^{2} 3$\\,dx = 3x\\\\Big|_0^2 = 6$."
            },
            {
                "id": "diag_28",
                "topic": "Applications",
                "difficulty": "hard",
                "question": "A particle moves with velocity $v(t) = t^2 - 4$. Total distance on $[0,3]$ is:",
                "options": [
                    "3",
                    "$\\frac{11}{3}$",
                    "$\\frac{17}{3}$",
                    "9"
                ],
                "answer": "C",
                "explanation": "$v=0$ at $t=2$. Distance =  \\int_{0^2(4-t}^{2)dt} $+\\int_2^3(t^2-4)dt = 16/3 + 1/3 = 17/3$."
            },
            {
                "id": "diag_29",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "Using quotient rule, $\\frac{d}{dx}\\left[\\frac{x^2}{\\cos x}\\right]$ =",
                "options": [
                    "$\\frac{2x\\cos x + x^2\\sin x}{\\cos^2 x}$",
                    "$\\frac{2x}{-\\sin x}$",
                    "$2x\\cos x$",
                    "$\\frac{2x\\cos x - x^2\\sin x}{\\cos^2 x}$"
                ],
                "answer": "A",
                "explanation": "Quotient rule: numerator = $2x\\cos x - x^2(-\\sin x) = 2x\\cos x + x^2\\sin x$."
            },
            {
                "id": "diag_30",
                "topic": "Applications",
                "difficulty": "hard",
                "question": "Linearization of $f(x)=\\sqrt{x}$ at $x=9$ approximates $\\sqrt{9.1}$ as:",
                "options": [
                    "3.0150",
                    "3.0167",
                    "3.0200",
                    "3.0100"
                ],
                "answer": "B",
                "explanation": "$L(x) = 3 + \\frac{1}{6}(x-9)$. $L(9.1) = 3 + 0.1/6 \\approx 3.0167$."
            }
        ]
    }
};
