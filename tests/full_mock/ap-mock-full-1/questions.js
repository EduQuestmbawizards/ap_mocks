// Specific Question Bank for Test: ap-mock-full-1
const AP_TEST_DATA = {
    "ap-mock-full-1": {
        "id": "ap-mock-full-1",
        "title": "AP Calculus AB Full Practice Exam 1",
        "subtitle": "Official AP Exam Format - Section I: 20 MCQs | Section II: 3 Free Response Questions",
        "timeLimitMinutes": 90,
        "testType": "Full Mock",
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
                "question": "Evaluate \\(\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}\\).",
                "options": [
                    "0",
                    "0.5",
                    "1",
                    "Undefined"
                ],
                "answer": "B",
                "explanation": "L'Hôpital gives \\(\\frac{\\sin x}{2x} \\to 1/2 = 0.5\\)."
            },
            {
                "id": "m_2",
                "section": "sec1",
                "type": "MCQ",
                "topic": "Derivatives",
                "difficulty": "medium",
                "question": "If \\(f(x) = \\arctan(3x)\\), find \\(f'(x)\\).",
                "options": [
                    "\\(\\frac{3}{1+9x^2}\\)",
                    "\\(\\frac{1}{1+9x^2}\\)",
                    "\\(\\frac{3}{1+3x^2}\\)",
                    "\\(\\frac{1}{\\sqrt{1-9x^2}}\\)"
                ],
                "answer": "A",
                "explanation": "\\(\\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}\\)."
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
                "answer": "FRQ_MANUAL_EVALUATION"
            }
        ]
    }
};
