// Specific Question Bank for Test: ap-topic-calc-ab-test2
const AP_TEST_DATA = {
    "ap-topic-calc-ab-test2": {
        "id": "ap-topic-calc-ab-test2",
        "title": "AP Calculus AB: Topic Practice Test 2",
        "subject": "AP Calculus AB",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 40,
        "questionsCount": 20,
        "questions": [
            {
                "id": "calc_t2_1",
                "topic": "Motion",
                "difficulty": "medium",
                "question": "A particle has velocity $v(t) = 3t^2 - 4$. At what positive time is the particle at rest?",
                "options": [
                    "$t = 1$",
                    "$t = \\sqrt{4/3}$",
                    "$t = 4/3$",
                    "$t = 2$"
                ],
                "answer": "B",
                "explanation": "Set $v(t) = 0 \\implies 3t^2 = 4 \\implies t^2 = 4/3 \\implies t = \\sqrt{4/3}$."
            },
            {
                "id": "calc_t2_2",
                "topic": "Acceleration",
                "difficulty": "medium",
                "question": "If position is $s(t) = t^3 - 6t^2 + 9t$, what is the acceleration at $t = 2$?",
                "options": [
                    "-6",
                    "0",
                    "6",
                    "12"
                ],
                "answer": "B",
                "explanation": "$v(t) = 3t^2 - 12t + 9$, $a(t) = 6t - 12$. At $t = 2$, $a(2) = 6(2) - 12 = 0$."
            },
            {
                "id": "calc_t2_3",
                "topic": "Distance vs Displacement",
                "difficulty": "easy",
                "question": "If velocity changes sign during a time interval, the total distance traveled is:",
                "options": [
                    "Always equal to displacement",
                    "Less than displacement",
                    "The integral of $|v(t)|$",
                    "The integral of $v'(t)$"
                ],
                "answer": "C",
                "explanation": "Total distance accounts for movement in all directions and equals $\\int |v(t)| dt$."
            },
            {
                "id": "calc_t2_4",
                "topic": "Riemann Sum",
                "difficulty": "medium",
                "question": "For a strictly increasing function, a left Riemann sum generally:",
                "options": [
                    "Overestimates",
                    "Underestimates",
                    "Equals the exact integral",
                    "Is always zero"
                ],
                "answer": "B",
                "explanation": "Since the function is increasing, the left endpoint of each subinterval gives the minimum function value, resulting in an underestimate."
            },
            {
                "id": "calc_t2_5",
                "topic": "Trapezoidal Rule",
                "difficulty": "easy",
                "question": "The trapezoidal rule approximates area using:",
                "options": [
                    "Rectangles",
                    "Triangles only",
                    "Trapezoids",
                    "Circles"
                ],
                "answer": "C",
                "explanation": "The trapezoidal rule approximates the definite integral by connecting subinterval endpoints with straight line segments to form trapezoids."
            },
            {
                "id": "calc_t2_6",
                "topic": "Differential Equation",
                "difficulty": "medium",
                "question": "Solve the differential equation $\\frac{dy}{dx} = 3x^2$ given initial condition $y(0) = 2$.",
                "options": [
                    "$y = x^3 + 2$",
                    "$y = 3x^3 + 2$",
                    "$y = x^2 + 2$",
                    "$y = x^3$"
                ],
                "answer": "A",
                "explanation": "$y = \\int 3x^2 dx = x^3 + C$. Using $y(0) = 2 \\implies C = $2$, so $y = x^3 + $2$."
            },
            {
                "id": "calc_t2_7",
                "topic": "Euler's Method",
                "difficulty": "hard",
                "question": "For $y' = x + y$ with $y(0) = 1$, using step size $h = 0.1$, the Euler approximation at $x = 0.1$ is:",
                "options": [
                    "1",
                    "1.05",
                    "1.1",
                    "1.2"
                ],
                "answer": "C",
                "explanation": "$y_1 = y_0 + h \\cdot f(x_0, y_0) = 1 + 0.1(0 + 1) = 1.1$."
            },
            {
                "id": "calc_t2_8",
                "topic": "Logarithmic Derivative",
                "difficulty": "easy",
                "question": "Evaluate: $\\frac{d}{dx} \\ln(x)$",
                "options": [
                    "$x$",
                    "$1/x$",
                    "$\\ln(x)$",
                    "$e^x$"
                ],
                "answer": "B",
                "explanation": "The derivative of $\\ln(x)$ for $x > 0$ is $\\frac{1}{x}$."
            },
            {
                "id": "calc_t2_9",
                "topic": "Exponential Derivative",
                "difficulty": "easy",
                "question": "Evaluate: $\\frac{d}{dx} e^{2x}$",
                "options": [
                    "$e^{2x}$",
                    "$2e^{2x}$",
                    "$x e^{2x}$",
                    "$2x e^x$"
                ],
                "answer": "B",
                "explanation": "By the chain rule: $\\frac{d}{dx}(e^{2x}) = e^{2x} \\cdot 2 = 2e^{2x}$."
            },
            {
                "id": "calc_t2_10",
                "topic": "Inverse Function Derivative",
                "difficulty": "hard",
                "question": "If $f(2) = 5$ and $f'(2) = 4$, then $(f^{-1})'(5) =$",
                "options": [
                    "4",
                    "5",
                    "$\\frac{1}{4}$",
                    "$\\frac{1}{5}$"
                ],
                "answer": "C",
                "explanation": "Using inverse derivative formula: $(f^{-1})'(5) = \\frac{1}{f'(f^{-1}(5))} = \\frac{1}{f'(2)} = \\frac{1}{4}$."
            },
            {
                "id": "calc_t2_11",
                "topic": "Optimization",
                "difficulty": "medium",
                "question": "A rectangle has a fixed perimeter of 20 units. Its maximum possible area is:",
                "options": [
                    "20",
                    "25",
                    "50",
                    "100"
                ],
                "answer": "B",
                "explanation": "Maximum area for a rectangle with fixed perimeter occurs when it is a square. Side = $20/4 = 5$, Area = $5^2 = 25$."
            },
            {
                "id": "calc_t2_12",
                "topic": "Trig Limit",
                "difficulty": "easy",
                "question": "Evaluate: $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$",
                "options": [
                    "0",
                    "1",
                    "$\\infty$",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "Standard limit identity: $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$."
            },
            {
                "id": "calc_t2_13",
                "topic": "L'Hôpital's Rule",
                "difficulty": "medium",
                "question": "Evaluate: $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$",
                "options": [
                    "0",
                    "1",
                    "$e$",
                    "Does not exist"
                ],
                "answer": "B",
                "explanation": "Indeterminate form $0/0$. Apply L'Hôpital's Rule: $\\lim_{x \\to 0} \\frac{e^x}{1} = 1$."
            },
            {
                "id": "calc_t2_14",
                "topic": "Related Rates",
                "difficulty": "hard",
                "question": "A 10 ft ladder slides down a wall. If the bottom moves away at 2 ft/s, how fast is the top moving down when the bottom is 6 ft from the wall?",
                "options": [
                    "-1.5 ft/s",
                    "-2 ft/s",
                    "-3/2 ft/s",
                    "-3 ft/s"
                ],
                "answer": "A",
                "explanation": "$x^2 + y^2 = 100$. At $x = 6$, $y = 8$. Differentiating: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies 2(6)(2) + 2(8)\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -1.5 \\text{ ft/s}$."
            },
            {
                "id": "calc_t2_15",
                "topic": "Accumulation Function",
                "difficulty": "medium",
                "question": "If $g(x) = \\int_0^x f(t) , dt$, then $g'(x)$ equals:",
                "options": [
                    "$f'(x)$",
                    "$f(x)$",
                    "$\\int f(x) dx$",
                    "0"
                ],
                "answer": "B",
                "explanation": "By FTC Part 1, the derivative of the accumulation function is the integrand evaluated at $x$, i.e., $g'(x) = f(x)$."
            },
            {
                "id": "calc_t2_16",
                "topic": "Washer Method",
                "difficulty": "medium",
                "question": "The volume obtained by rotating a region around the x-axis is commonly found using:",
                "options": [
                    "$2\\pi r h$",
                    "$\\pi(R^2 - r^2)$",
                    "$R +r$",
                    "$2\\pi r$"
                ],
                "answer": "B",
                "explanation": "The washer method integrates cross-sectional washer areas: $V = \\pi \\int (R^2 - r^2) dx$."
            },
            {
                "id": "calc_t2_17",
                "topic": "Shell Method",
                "difficulty": "medium",
                "question": "The volume element for cylindrical shell method is:",
                "options": [
                    "$\\pi r^2 h$",
                    "$2\\pi r h , dx$",
                    "$r^2 + h^2$",
                    "$\\pi r h^2$"
                ],
                "answer": "B",
                "explanation": "A thin cylindrical shell has surface area $2\\pi r h$ and thickness $dx$, giving volume element $2\\pi r h , dx$."
            },
            {
                "id": "calc_t2_18",
                "topic": "Continuity & Differentiability",
                "difficulty": "easy",
                "question": "If a function is differentiable at $x = a$, then it must be:",
                "options": [
                    "Discontinuous",
                    "Continuous",
                    "Constant",
                    "Increasing"
                ],
                "answer": "B",
                "explanation": "Differentiability implies continuity. If a function is differentiable at a point, it is guaranteed to be continuous there."
            },
            {
                "id": "calc_t2_19",
                "topic": "Extreme Value Theorem",
                "difficulty": "easy",
                "question": "A continuous function on a closed interval $[a, b]$:",
                "options": [
                    "Must have an absolute maximum and minimum",
                    "Must be differentiable",
                    "Must be increasing",
                    "Must have exactly one critical point"
                ],
                "answer": "A",
                "explanation": "The Extreme Value Theorem states that a continuous function on a closed, bounded interval attains both an absolute maximum and minimum."
            },
            {
                "id": "calc_t2_20",
                "topic": "Fundamental Theorem of Calculus",
                "difficulty": "medium",
                "question": "If $F(x) = \\int_a^x f(t) , dt$ and $f$ is continuous, then:",
                "options": [
                    "$F'(x) = f(x)$",
                    "$F'(x) = f'(x)$",
                    "$F(x) = f'(x)$",
                    "$F'(x) = 0$"
                ],
                "answer": "A",
                "explanation": "By the Fundamental Theorem of Calculus Part 1, $F'(x) = f(x)$."
            }
        ]
    }
};
