// Specific Question Bank for Test: ap-topic-calcbc-power-series
const AP_TEST_DATA = {
    "ap-topic-calcbc-power-series": {
        "title": "AP Calculus BC: Power Series & Taylor Polynomials",
        "subject": "AP Calculus BC",
        "testType": "Topic Test",
        "duration": 45,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-calcbc-power-series-q1",
                "topic": "Taylor Polynomials",
                "difficulty": "easy",
                "question": "What is the third-degree Maclaurin polynomial for f(x) = e^{2x}?",
                "options": [
                    "1 + 2x + 2x^2 + \\frac{4}{3}x^3",
                    "1 + 2x + 4x^2 + 8x^3",
                    "1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}",
                    "2x + 2x^2 + \\frac{4}{3}x^3",
                    "1 + 2x + x^2 + \\frac{1}{3}x^3"
                ],
                "answer": "A",
                "explanation": "e^u = 1 + u + u^2/2! + u^3/3! + ... Substituting u = 2x gives 1 + 2x + (2x)^2/2 + (2x)^3/6 = 1 + 2x + 2x^2 + (4/3)x^3."
            },
            {
                "id": "ap-topic-calcbc-power-series-q2",
                "topic": "Radius of Convergence",
                "difficulty": "medium",
                "question": "Find the radius of convergence R for the power series \\sum_{n=1}^{\\infty} \\frac{(x - 3)^n}{n \\cdot 5^n}.",
                "options": [
                    "1",
                    "3",
                    "5",
                    "\\infty",
                    "0"
                ],
                "answer": "C",
                "explanation": "Use Ratio Test: \\lim_{n \\to \\infty} |\\frac{(x-3)^{n+1}}{(n+1)5^{n+1}} \\cdot \\frac{n 5^n}{(x-3)^n}| = \\frac{|x-3|}{5} < 1 \\implies |x - 3| < 5. Thus, R = 5."
            },
            {
                "id": "ap-topic-calcbc-power-series-q3",
                "topic": "Taylor Series from Definition",
                "difficulty": "medium",
                "question": "If f(2) = 3, f'(2) = -1, f''(2) = 4, and f'''(2) = -12, what is the coefficient of (x - 2)^3 in the Taylor series for f centered at x = 2?",
                "options": [
                    "-12",
                    "-6",
                    "-2",
                    "4",
                    "2"
                ],
                "answer": "C",
                "explanation": "The coefficient of (x - a)^n is f^{(n)}(a)/n!. For n = 3: f'''(2)/3! = -12 / 6 = -2."
            },
            {
                "id": "ap-topic-calcbc-power-series-q4",
                "topic": "Maclaurin Series Manipulation",
                "difficulty": "medium",
                "question": "What is the Maclaurin series for f(x) = \\cos(x^2)?",
                "options": [
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{4n}}{(2n)!}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{4n+2}}{(2n+1)!}",
                    "\\sum_{n=0}^{\\infty} \\frac{x^{4n}}{(2n)!}",
                    "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+2}}{(2n)!}"
                ],
                "answer": "A",
                "explanation": "\\cos(u) = \\sum_{n=0}^{\\infty} (-1)^n u^{2n}/(2n)!. Substituting u = x^2 yields \\sum_{n=0}^{\\infty} (-1)^n (x^2)^{2n}/(2n)! = \\sum_{n=0}^{\\infty} (-1)^n x^{4n}/(2n)!."
            },
            {
                "id": "ap-topic-calcbc-power-series-q5",
                "topic": "Alternating Series Error Bound",
                "difficulty": "hard",
                "question": "The Maclaurin series for \\sin(x) is approximated at x = 0.5 using the first two nonzero terms: P_3(0.5) = 0.5 - \\frac{(0.5)^3}{6}. What is the maximum error guaranteed by the Alternating Series Error Bound?",
                "options": [
                    "\\frac{(0.5)^5}{120}",
                    "\\frac{(0.5)^4}{24}",
                    "\\frac{(0.5)^3}{6}",
                    "\\frac{(0.5)^6}{720}",
                    "\\frac{(0.5)^5}{24}"
                ],
                "answer": "A",
                "explanation": "By the Alternating Series Error Bound, |Error| \\le |next term| = (0.5)^5 / 5! = (0.5)^5 / 120."
            },
            {
                "id": "ap-topic-calcbc-power-series-q6",
                "topic": "Geometric Power Series",
                "difficulty": "easy",
                "question": "Represent f(x) = \\frac{1}{1 + 3x^2} as a power series centered at x = 0 for |x| < 1/\\sqrt{3}.",
                "options": [
                    "\\sum_{n=0}^{\\infty} (-1)^n 3^n x^{2n}",
                    "\\sum_{n=0}^{\\infty} 3^n x^{2n}",
                    "\\sum_{n=0}^{\\infty} (-1)^n 3x^{2n}",
                    "\\sum_{n=0}^{\\infty} (-3x)^{2n}",
                    "\\sum_{n=0}^{\\infty} (-1)^n x^{2n}"
                ],
                "answer": "A",
                "explanation": "\\frac{1}{1 - u} = \\sum_{n=0}^{\\infty} u^n. Substituting u = -3x^2 gives \\sum_{n=0}^{\\infty} (-3x^2)^n = \\sum_{n=0}^{\\infty} (-1)^n 3^n x^{2n}."
            },
            {
                "id": "ap-topic-calcbc-power-series-q7",
                "topic": "Interval of Convergence",
                "difficulty": "hard",
                "question": "What is the interval of convergence for \\sum_{n=1}^{\\infty} \\frac{(x - 1)^n}{n}?",
                "options": [
                    "[0, 2)",
                    "(0, 2]",
                    "[0, 2]",
                    "(0, 2)",
                    "[-1, 1)"
                ],
                "answer": "A",
                "explanation": "Radius is R = 1 centered at x = 1, so interior is (0, 2). At x = 0: \\sum (-1)^n / n converges by AST. At x = 2: \\sum 1/n diverges (harmonic). Thus, [0, 2)."
            },
            {
                "id": "ap-topic-calcbc-power-series-q8",
                "topic": "Integration of Power Series",
                "difficulty": "medium",
                "question": "Using the Maclaurin series for \\frac{1}{1 - t} = \\sum_{n=0}^{\\infty} t^n, find the Maclaurin series for -\\ln(1 - x) = \\int_{0}^{x} \\frac{1}{1 - t}\\,dt.",
                "options": [
                    "\\sum_{n=1}^{\\infty} \\frac{x^n}{n}",
                    "\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}",
                    "\\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{x^n}{n}",
                    "\\sum_{n=0}^{\\infty} n x^{n-1}",
                    "\\sum_{n=1}^{\\infty} \\frac{x^{2n}}{2n}"
                ],
                "answer": "A",
                "explanation": "Integrate term by term: \\int_{0}^{x} t^n dt = x^{n+1}/(n+1). Shifting index k = n+1 gives \\sum_{k=1}^{\\infty} x^k / k."
            },
            {
                "id": "ap-topic-calcbc-power-series-q9",
                "topic": "Lagrange Error Bound",
                "difficulty": "hard",
                "question": "A function f has |f^{(4)}(x)| \\le 12 for all x in [1, 1.5]. If f is approximated by its 3rd-degree Taylor polynomial at x = 1, what is the maximum possible error at x = 1.5?",
                "options": [
                    "0.03125",
                    "0.0625",
                    "0.125",
                    "0.25",
                    "0.5"
                ],
                "answer": "A",
                "explanation": "Lagrange bound: |R_3(1.5)| \\le \\frac{M}{4!} |1.5 - 1|^4 = \\frac{12}{24} (0.5)^4 = 0.5 \\times 0.0625 = 0.03125."
            },
            {
                "id": "ap-topic-calcbc-power-series-q10",
                "topic": "Evaluating Series via Known Maclaurin Expansions",
                "difficulty": "medium",
                "question": "What is the exact sum of the series \\sum_{n=0}^{\\infty} \\frac{(-1)^n (\\pi/3)^{2n+1}}{(2n+1)!}?",
                "options": [
                    "\\frac{\\sqrt{3}}{2}",
                    "\\frac{1}{2}",
                    "1",
                    "0",
                    "\\frac{\\sqrt{2}}{2}"
                ],
                "answer": "A",
                "explanation": "This is the Maclaurin series for \\sin(x) evaluated at x = \\pi/3. \\sin(\\pi/3) = \\sqrt{3}/2."
            },
            {
                "id": "ap-topic-calcbc-power-series-q11",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "hard",
                "question": "Find the value of the coefficient c_11 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{12} centered at x = 1.",
                "options": [
                    "12",
                    "132",
                    "1",
                    "11",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_11 = f^{(11)}(1)/11!. For f(x) = x^{12}, the 11-th derivative is (12)! x. Evaluated at x = 1: (12)! / 11! = 12."
            },
            {
                "id": "ap-topic-calcbc-power-series-q12",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "medium",
                "question": "Find the value of the coefficient c_12 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{13} centered at x = 1.",
                "options": [
                    "13",
                    "156",
                    "1",
                    "12",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_12 = f^{(12)}(1)/12!. For f(x) = x^{13}, the 12-th derivative is (13)! x. Evaluated at x = 1: (13)! / 12! = 13."
            },
            {
                "id": "ap-topic-calcbc-power-series-q13",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "hard",
                "question": "Find the value of the coefficient c_13 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{14} centered at x = 1.",
                "options": [
                    "14",
                    "182",
                    "1",
                    "13",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_13 = f^{(13)}(1)/13!. For f(x) = x^{14}, the 13-th derivative is (14)! x. Evaluated at x = 1: (14)! / 13! = 14."
            },
            {
                "id": "ap-topic-calcbc-power-series-q14",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "medium",
                "question": "Find the value of the coefficient c_14 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{15} centered at x = 1.",
                "options": [
                    "15",
                    "210",
                    "1",
                    "14",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_14 = f^{(14)}(1)/14!. For f(x) = x^{15}, the 14-th derivative is (15)! x. Evaluated at x = 1: (15)! / 14! = 15."
            },
            {
                "id": "ap-topic-calcbc-power-series-q15",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "hard",
                "question": "Find the value of the coefficient c_15 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{16} centered at x = 1.",
                "options": [
                    "16",
                    "240",
                    "1",
                    "15",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_15 = f^{(15)}(1)/15!. For f(x) = x^{16}, the 15-th derivative is (16)! x. Evaluated at x = 1: (16)! / 15! = 16."
            },
            {
                "id": "ap-topic-calcbc-power-series-q16",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "medium",
                "question": "Find the value of the coefficient c_16 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{17} centered at x = 1.",
                "options": [
                    "17",
                    "272",
                    "1",
                    "16",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_16 = f^{(16)}(1)/16!. For f(x) = x^{17}, the 16-th derivative is (17)! x. Evaluated at x = 1: (17)! / 16! = 17."
            },
            {
                "id": "ap-topic-calcbc-power-series-q17",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "hard",
                "question": "Find the value of the coefficient c_17 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{18} centered at x = 1.",
                "options": [
                    "18",
                    "306",
                    "1",
                    "17",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_17 = f^{(17)}(1)/17!. For f(x) = x^{18}, the 17-th derivative is (18)! x. Evaluated at x = 1: (18)! / 17! = 18."
            },
            {
                "id": "ap-topic-calcbc-power-series-q18",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "medium",
                "question": "Find the value of the coefficient c_18 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{19} centered at x = 1.",
                "options": [
                    "19",
                    "342",
                    "1",
                    "18",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_18 = f^{(18)}(1)/18!. For f(x) = x^{19}, the 18-th derivative is (19)! x. Evaluated at x = 1: (19)! / 18! = 19."
            },
            {
                "id": "ap-topic-calcbc-power-series-q19",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "hard",
                "question": "Find the value of the coefficient c_19 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{20} centered at x = 1.",
                "options": [
                    "20",
                    "380",
                    "1",
                    "19",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_19 = f^{(19)}(1)/19!. For f(x) = x^{20}, the 19-th derivative is (20)! x. Evaluated at x = 1: (20)! / 19! = 20."
            },
            {
                "id": "ap-topic-calcbc-power-series-q20",
                "topic": "Power Series & Taylor Polynomials",
                "difficulty": "medium",
                "question": "Find the value of the coefficient c_20 in the Taylor series expansion \\sum_{n=0}^{\\infty} c_n (x-1)^n for f(x) = x^{21} centered at x = 1.",
                "options": [
                    "21",
                    "420",
                    "1",
                    "20",
                    "0"
                ],
                "answer": "A",
                "explanation": "c_20 = f^{(20)}(1)/20!. For f(x) = x^{21}, the 20-th derivative is (21)! x. Evaluated at x = 1: (21)! / 20! = 21."
            }
        ]
    }
};
