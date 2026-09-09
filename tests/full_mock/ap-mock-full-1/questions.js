// Specific Question Bank for Test: ap-mock-full-1
const AP_TEST_DATA = {
    "ap-mock-full-1": {
        "id": "ap-mock-full-1",
        "title": "AP Calculus AB Full Practice Exam 1",
        "subtitle": "Official AP Exam Format - Section I: 20 MCQs | Section II: 3 Free Response Questions",
        "timeLimitMinutes": 90,
        "testType": "Full Mock Exam",
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
                "question": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.",
                "options": [
                    "0",
                    "0.5",
                    "1",
                    "Undefined"
                ],
                "answer": "B",
                "explanation": "L'Hôpital gives $\\frac{\\sin x}{2x} \\to 1/2 = 0.5$."
            },
            {
                "id": "m_2",
                "section": "sec1",
                "type": "MCQ",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "If $f(x) = \\arctan(3x)$, find $f'(x)$.",
                "options": [
                    "$\\frac{3}{1+9x^2}$",
                    "$\\frac{1}{1+9x^2}$",
                    "$\\frac{3}{1+3x^2}$",
                    "$\\frac{1}{\\sqrt{1-9x^2}}$"
                ],
                "answer": "A",
                "explanation": "$\\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$."
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
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "Velocity v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3). The particle changes direction at t = 1 and t = 3. Total distance is \\int_{0}^{1} v(t)dt - \\int_{1}^{3} v(t)dt + \\int_{3}^{4} v(t)dt. [t^3 - 6t^2 + 9t]_{0}^{1} = 4; -[t^3 - 6t^2 + 9t]_{1}^{3} = 4; [t^3 - 6t^2 + 9t]_{3}^{4} = 4. Total distance = 4 + 4 + 4 = 12."
            },
            {
                "id": "ap-mock-full-1-q4",
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
                "id": "ap-mock-full-1-q5",
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
                "id": "ap-mock-full-1-q6",
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
                "id": "ap-mock-full-1-q7",
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
                "id": "ap-mock-full-1-q8",
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
                "id": "ap-mock-full-1-q9",
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
                "id": "ap-mock-full-1-q10",
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
                "id": "ap-mock-full-1-q11",
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
                "id": "ap-mock-full-1-q12",
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
                "id": "ap-mock-full-1-q13",
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
                "id": "ap-mock-full-1-q14",
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
                "id": "ap-mock-full-1-q15",
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
                "id": "ap-mock-full-1-q16",
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
                "id": "ap-mock-full-1-q17",
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
                "id": "ap-mock-full-1-q18",
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
                "id": "ap-mock-full-1-q19",
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
                "id": "ap-mock-full-1-q20",
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
                "id": "ap-mock-full-1-q21",
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
                "id": "ap-mock-full-1-q22",
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
                "id": "ap-mock-full-1-q23",
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
                "id": "ap-mock-full-1-q24",
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
                "id": "ap-mock-full-1-q25",
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
                "id": "ap-mock-full-1-q26",
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
                "id": "ap-mock-full-1-q27",
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
                "id": "ap-mock-full-1-q28",
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
                "id": "ap-mock-full-1-q29",
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
                "id": "ap-mock-full-1-q30",
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
                "id": "ap-mock-full-1-q31",
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
                "id": "ap-mock-full-1-q32",
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
            },
            {
                "id": "ap-mock-full-1-q33",
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
                "explanation": "Factor $x^2 - 4 = (x - 2)(x + 2)$. The expression simplifies to $x + 2$, so as $x \\to 2$, the limit is \\$2 + 2 = 4$."
            },
            {
                "id": "ap-mock-full-1-q34",
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
                "explanation": "For continuity at $x = 3$, $\\lim_{x \\to 3^-} f(x) = f(3)$. Thus, \\$3^2 + k = 12 \\implies 9 + k = 12 \\implies k = 3$."
            },
            {
                "id": "ap-mock-full-1-q35",
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
                "id": "ap-mock-full-1-q36",
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
                "id": "ap-mock-full-1-q37",
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
                "id": "ap-mock-full-1-q38",
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
                "id": "ap-mock-full-1-q39",
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
                "id": "ap-mock-full-1-q40",
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
                "id": "ap-mock-full-1-q41",
                "topic": "Related Rates",
                "difficulty": "hard",
                "question": "The radius of a circle increases at \\$2 \\text{ cm/s}$. How fast is its area increasing when $r = 3$?",
                "options": [
                    "\\$6\\pi$",
                    "\\$9\\pi$",
                    "\\$12\\pi$",
                    "\\$18\\pi$"
                ],
                "answer": "C",
                "explanation": "$A = \\pi r^2 \\implies \\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(3)(2) = 12\\pi$."
            },
            {
                "id": "ap-mock-full-1-q42",
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
                "id": "ap-mock-full-1-q43",
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
                "id": "ap-mock-full-1-q44",
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
                "id": "ap-mock-full-1-q45",
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
            }
        ],
        "totalQuestions": 45
    }
};
