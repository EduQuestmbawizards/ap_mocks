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
                "id": "cd_1",
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
                "id": "cd_2",
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
            }
        ]
    }
};
