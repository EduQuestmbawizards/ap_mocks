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
                "id": "cl_1",
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
                "explanation": "Factor $(x-2)(x+2)$, cancel $(x-2)$ to get $2+2 = 4$."
            },
            {
                "id": "cl_2",
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
                "id": "cl_3",
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
            }
        ]
    }
};
