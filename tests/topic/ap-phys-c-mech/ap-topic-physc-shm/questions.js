// Specific Question Bank for Test: ap-topic-physc-shm
const AP_TEST_DATA = {
    "ap-topic-physc-shm": {
        "id": "ap-topic-physc-shm",
        "title": "AP Physics C: Simple Harmonic Motion & Restoring Forces",
        "testType": "Topic Test",
        "subject": "ap-phys-c-mech",
        "topic": "Simple Harmonic Motion & Restoring Forces",
        "timeLimitMinutes": 12,
        "totalQuestions": 5,
        "questions": [
            {
                "id": "ap-topic-physc-shm_q1",
                "global_num": 1,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "Which of the following are characteristics of simple harmonic motion?  I. Acceleration is constant.  II. Restoring force is proportional to displacement.  III. Frequency is independent of amplitude.",
                "options": [
                    "II only",
                    "I and II only",
                    "I and III only",
                    "II and III only",
                    "I, II, and III"
                ],
                "answer": "D",
                "explanation": "(D) In SHM, acceleration $a(x) = -\\omega^2 x$ varies with displacement, so I is false. By Hooke's Law, $F = -kx$ (II is true), and angular frequency $\\omega = \\sqrt{k/m}$ does not depend on amplitude $A$ (III is true).",
                "difficulty": "easy",
                "topic": "Simple Harmonic Motion Characteristics"
            },
            {
                "id": "ap-topic-physc-shm_q2",
                "global_num": 2,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "What combination of parameters maximizes the oscillation frequency of a mass-spring oscillator?",
                "options": [
                    "Large $m$, small $k$",
                    "Small $m$, large $k$",
                    "Large amplitude, large $m$",
                    "Small amplitude, small $k$",
                    "Large amplitude, small $k$"
                ],
                "answer": "B",
                "explanation": "(B) $$f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$$\nFrequency is maximized by choosing the largest spring constant $k$ and the smallest mass $m$, and is independent of amplitude.",
                "difficulty": "easy",
                "topic": "Mass-Spring Oscillator Frequency Maximization"
            },
            {
                "id": "ap-topic-physc-shm_q3",
                "global_num": 3,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "A simple pendulum of length $L$ is pulled to initial position and released from rest, dropping vertical height $h$ to equilibrium. What is its maximum speed at the bottom?",
                "options": [
                    "$gh$",
                    "$\\sqrt{2gh}$",
                    "$\\sqrt{2gd}$",
                    "$\\sqrt{2gL}$",
                    "$2gh$"
                ],
                "answer": "B",
                "explanation": "(B) By conservation of mechanical energy:\n$$mgh = \\frac{1}{2}mv_{\\max}^2 \\implies v_{\\max} = \\sqrt{2gh}$$",
                "difficulty": "easy",
                "topic": "Simple Pendulum Maximum Speed"
            },
            {
                "id": "ap-topic-physc-shm_q4",
                "global_num": 4,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "In a spring-mass oscillator, if mass is doubled while keeping oscillation amplitude $A$ constant, the maximum speed will:",
                "options": [
                    "decrease by a factor of 4",
                    "decrease by a factor of 2",
                    "decrease by a factor of $\\sqrt{2}$",
                    "remain the same",
                    "increase by a factor of 2"
                ],
                "answer": "C",
                "explanation": "(C) $$v_{\\max} = \\omega A = \\sqrt{\\frac{k}{m}}A \\propto \\frac{1}{\\sqrt{m}}$$\nDoubling the mass scales maximum speed by $\\frac{1}{\\sqrt{2}}$.",
                "difficulty": "medium",
                "topic": "Oscillator Mass Scaling & Max Speed"
            },
            {
                "id": "ap-topic-physc-shm_q5",
                "global_num": 5,
                "section": "Simple Harmonic Motion & Oscillations",
                "question": "A vertical spring ($L_0 = 40\\text{ cm}, k = 400\\text{ N/m}$) hangs with mass $m = 10\\text{ kg}$. What is the total equilibrium length of the spring ($g = 10\\text{ m/s}^2$)?",
                "options": [
                    "$25\\text{ cm}$",
                    "$35\\text{ cm}$",
                    "$40\\text{ cm}$",
                    "$50\\text{ cm}$",
                    "$65\\text{ cm}$"
                ],
                "answer": "E",
                "explanation": "(E) Extension at equilibrium:\n$$x = \\frac{mg}{k} = \\frac{(10\\text{ kg})(10\\text{ m/s}^2)}{400\\text{ N/m}} = 0.25\\text{ m} = 25\\text{ cm}$$\nTotal length: $L = L_0 + x = 40\\text{ cm} + 25\\text{ cm} = 65\\text{ cm}$.",
                "difficulty": "medium",
                "topic": "Vertical Hanging Spring Total Length"
            }
        ]
    }
};
