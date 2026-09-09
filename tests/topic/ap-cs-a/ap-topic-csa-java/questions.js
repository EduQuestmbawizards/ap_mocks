// Specific Question Bank for Test: ap-topic-csa-java
const AP_TEST_DATA = {
    "ap-topic-csa-java": {
        "id": "ap-topic-csa-java",
        "title": "AP Computer Science A: Java Fundamentals & Control Flow",
        "subject": "AP Computer Science A",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-csa-java_q1",
                "topic": "Java Basics",
                "difficulty": "easy",
                "question": "What is the result of `7 / 2` in Java?",
                "options": [
                    "3.5",
                    "3",
                    "3.0",
                    "Error"
                ],
                "answer": "B",
                "explanation": "Integer division truncates decimal: 7 / 2 = 3."
            },
            {
                "id": "ap-topic-csa-java_q2",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "easy",
                "question": "What is the value of `result` after executing: `int a = 7; int b = 2; double result = a / b;`?",
                "options": [
                    "3.0",
                    "3.5",
                    "3",
                    "4.0"
                ],
                "answer": "A",
                "explanation": "Both `a` and `b` are integer variables, so `a / b` performs integer division yielding `3`. Then, assigning integer `3` to `double result` performs widening conversion to `3.0`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q3",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Consider the code snippet:\n```java\nString s = \"AP Computer Science\";\nString sub = s.substring(3, 11);\n```\nWhat is the value of `sub`?",
                "options": [
                    "\"Computer\"",
                    "\"Compute\"",
                    "\" Computer\"",
                    "\"Computer \""
                ],
                "answer": "A",
                "explanation": "In Java, `substring(beginIndex, endIndex)` extracts characters from `beginIndex` (inclusive) up to `endIndex` (exclusive). Index 3 is 'C', index 10 is 'r', and index 11 is ' '. Thus, the characters from index 3 to 10 form `\"Computer\"`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q4",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Consider the loop:\n```java\nint count = 0;\nfor (int i = 1; i <= 5; i++) {\n    for (int j = i; j <= 5; j++) {\n        count++;\n    }\n}\n```\nWhat is the final value of `count`?",
                "options": [
                    "15",
                    "25",
                    "10",
                    "20"
                ],
                "answer": "A",
                "explanation": "When $i = 1$, the inner loop runs 5 times ($j = 1..5$). When $i = 2$, 4 times. When $i = 3$, 3 times. When $i = 4$, 2 times. When $i = 5$, 1 time. Total executions = $5 + 4 + 3 + 2 + 1 = 15$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q5",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "By De Morgan's Laws, the boolean expression `!(a && (b || !c))` is equivalent to:",
                "options": [
                    "!a || (!b && c)",
                    "!a && (!b || c)",
                    "!a || !b || c",
                    "!a && !b && c"
                ],
                "answer": "A",
                "explanation": "Applying De Morgan's Law to the outer AND: `!(a && X) == !a || !X`. Here $X = (b \\;||\\; !c)$. Applying De Morgan's Law to $!X$: `!(b || !c) == !b && !(!c) == !b && c`. Combining gives `!a || (!b && c)`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q6",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "hard",
                "question": "Consider the recursive method:\n```java\npublic static int mystery(int n) {\n    if (n <= 1) return 1;\n    return n + mystery(n - 2);\n}\n```\nWhat is the return value of `mystery(7)`?",
                "options": [
                    "16",
                    "15",
                    "28",
                    "12"
                ],
                "answer": "A",
                "explanation": "Trace the recursive calls: `mystery(7) = 7 + mystery(5)`. `mystery(5) = 5 + mystery(3)`. `mystery(3) = 3 + mystery(1)`. Base case: `mystery(1) = 1`. Back-substituting: $3 + 1 = 4$; $5 + 4 = 9$; $7 + 9 = 16$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q7",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "What is printed by the following code?\n```java\nint[] arr = {10, 20, 30, 40, 50};\nfor (int i = 0; i < arr.length - 1; i++) {\n    arr[i] = arr[i + 1];\n}\nSystem.out.println(arr[0] + \" \" + arr[4]);\n```",
                "options": [
                    "20 50",
                    "20 40",
                    "10 50",
                    "20 20"
                ],
                "answer": "A",
                "explanation": "The loop shifts each element one index to the left: `arr[0]` becomes `arr[1]` (20), `arr[1]` becomes `arr[2]` (30), `arr[2]` becomes 40, `arr[3]` becomes 50. The loop terminates before modifying `arr[4]`, so `arr[4]` remains 50. Output is `20 50`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q8",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Consider the `ArrayList<Integer>` operations:\n```java\nArrayList<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nlist.add(1, 30);\nlist.remove(0);\nSystem.out.println(list);\n```\nWhat is printed?",
                "options": [
                    "[30, 20]",
                    "[10, 30]",
                    "[20, 30]",
                    "[30, 10]"
                ],
                "answer": "A",
                "explanation": "Initially `list` is empty. `add(10)` -> `[10]`. `add(20)` -> `[10, 20]`. `add(1, 30)` inserts 30 at index 1 -> `[10, 30, 20]`. `remove(0)` removes element at index 0 (10) -> `[30, 20]`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q9",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "hard",
                "question": "Consider the binary search method on a sorted array of 64 elements. In the worst case, what is the maximum number of comparisons needed to locate a target element or confirm it is absent?",
                "options": [
                    "7",
                    "6",
                    "32",
                    "64"
                ],
                "answer": "A",
                "explanation": "Binary search halves the search space at each iteration. For $N = 64$ elements, the maximum number of comparisons is $\\lfloor \\log_2(64) \\rfloor + 1 = 6 + 1 = 7$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q10",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "What is the output of the following loop?\n```java\nint x = 1;\nwhile (x < 16) {\n    x *= 2;\n}\nSystem.out.println(x);\n```",
                "options": [
                    "16",
                    "32",
                    "8",
                    "15"
                ],
                "answer": "A",
                "explanation": "Trace $x$: starts at 1. $1 < 16 \\implies x = 2$. $2 < 16 \\implies x = 4$. $4 < 16 \\implies x = 8$. $8 < 16 \\implies x = 16$. Now $16 < 16$ is false, so loop terminates. `System.out.println(x)` prints 16.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q11",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Which of the following correctly generates a random integer between 10 and 50 inclusive using `Math.random()`?",
                "options": [
                    "(int)(Math.random() * 41) + 10",
                    "(int)(Math.random() * 50) + 10",
                    "(int)(Math.random() * 40) + 10",
                    "(int)(Math.random() * 51)"
                ],
                "answer": "A",
                "explanation": "The standard formula for a random integer in $[\\text{min}, \\text{max}]$ inclusive is `(int)(Math.random() * (max - min + 1)) + min`. Here $\\text{max} - \\text{min} + 1 = 50 - 10 + 1 = 41$. Thus `(int)(Math.random() * 41) + 10` produces numbers from 10 to 50.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q12",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "hard",
                "question": "Consider the 2D array:\n```java\nint[][] mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint sum = 0;\nfor (int r = 0; r < mat.length; r++) {\n    sum += mat[r][mat.length - 1 - r];\n}\n```\nWhat is the value of `sum`?",
                "options": [
                    "15",
                    "12",
                    "18",
                    "21"
                ],
                "answer": "A",
                "explanation": "The expression accesses the secondary diagonal of the 3x3 matrix: when $r=0$, `mat[0][2]` = 3; when $r=1$, `mat[1][1]` = 5; when $r=2$, `mat[2][0]` = 7. Sum = $3 + 5 + 7 = 15$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q13",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Consider `String s1 = \"apple\"; String s2 = new String(\"apple\");`. Which comparison evaluates to `true`?",
                "options": [
                    "s1.equals(s2) only",
                    "s1 == s2 only",
                    "Both s1 == s2 and s1.equals(s2)",
                    "Neither s1 == s2 nor s1.equals(s2)"
                ],
                "answer": "A",
                "explanation": "`==` compares memory references. Because `s2` is created with the `new` operator, it refers to a distinct object in heap memory, so `s1 == s2` is `false`. `.equals()` compares the character contents, which are identical, so `s1.equals(s2)` is `true`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q14",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Which sorting algorithm repeatedly finds the minimum element from the unsorted portion of an array and places it at the beginning?",
                "options": [
                    "Selection Sort",
                    "Insertion Sort",
                    "Merge Sort",
                    "Quick Sort"
                ],
                "answer": "A",
                "explanation": "Selection Sort divides the list into sorted and unsorted portions, finding the smallest element in the unsorted section in each pass and swapping it into the next position.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q15",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "hard",
                "question": "What happens when executing:\n```java\nArrayList<String> words = new ArrayList<>();\nwords.add(\"A\");\nwords.add(\"B\");\nfor (String w : words) {\n    if (w.equals(\"A\")) words.remove(w);\n}\n```",
                "options": [
                    "ConcurrentModificationException is thrown",
                    "The element \"A\" is cleanly removed",
                    "An IndexOutOfBoundsException is thrown",
                    "The loop executes infinitely"
                ],
                "answer": "A",
                "explanation": "Modifying an `ArrayList` directly (calling `.remove()`) while iterating over it with an enhanced for loop invalidates the underlying iterator, causing a `ConcurrentModificationException`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q16",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "What is the return value of `\"banana\".indexOf(\"an\")`?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "-1"
                ],
                "answer": "A",
                "explanation": "`indexOf` returns the index of the first occurrence of the substring. In `\"banana\"`, index 0 is 'b', index 1 is 'a', index 2 is 'n'. The substring `\"an\"` starts at index 1.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q17",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "What is the value of `x` after the following code?\n```java\nint x = 5;\nx += x * 2 + 3;\n```",
                "options": [
                    "18",
                    "13",
                    "25",
                    "15"
                ],
                "answer": "A",
                "explanation": "Due to operator precedence, multiplication occurs first: `x * 2` is $5 \\times 2 = 10$. Then $+ 3$ gives 13. Finally, `x += 13` means $x = 5 + 13 = 18$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q18",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "hard",
                "question": "Consider the method:\n```java\npublic static void alter(int[] nums) {\n    nums[0] = 99;\n    nums = new int[]{1, 2, 3};\n}\n```\nIf `int[] a = {10, 20}; alter(a);`, what is `a[0]` after the method call?",
                "options": [
                    "99",
                    "10",
                    "1",
                    "20"
                ],
                "answer": "A",
                "explanation": "Java passes object references by value. `nums[0] = 99;` modifies the contents of the array referred to by `a`. Reassigning `nums = new int[]{...}` merely alters the local parameter copy `nums` to point to a new array, leaving caller's reference `a` still pointing to the original modified array.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q19",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "medium",
                "question": "Which condition determines if integer `year` is a leap year (divisible by 4 and not by 100, or divisible by 400)?",
                "options": [
                    "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
                    "year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)",
                    "year % 4 == 0 && year % 400 == 0",
                    "year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)"
                ],
                "answer": "A",
                "explanation": "A leap year occurs if the year is divisible by 4 but not by 100, OR if it is divisible by 400. In Java boolean expressions: `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-java_q20",
                "topic": "Java Fundamentals & Control Flow",
                "difficulty": "hard",
                "question": "How many times is `\"AP\"` printed?\n```java\nfor (int k = 1; k < 100; k *= 2) {\n    System.out.println(\"AP\");\n}\n```",
                "options": [
                    "7",
                    "6",
                    "8",
                    "100"
                ],
                "answer": "A",
                "explanation": "Trace $k$: 1, 2, 4, 8, 16, 32, 64 ($2^0, 2^1, \\dots, 2^6$). Next value is 128, which is $\\ge 100$. Thus there are 7 iterations (powers of 2 from $2^0$ to $2^6$).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
