// Specific Question Bank for Test: ap-diag-csa
const AP_TEST_DATA = {
    "ap-diag-csa": {
        "id": "ap-diag-csa",
        "title": "AP Computer Science A Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Java Syntax, Control Flow & OOP",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Computer Science A",
        "questions": [
            {
                "id": "dcsa_1",
                "topic": "Java Syntax",
                "difficulty": "easy",
                "question": "What is `7 / 2` in Java?",
                "options": [
                    "3.5",
                    "3",
                    "3.0",
                    "Error"
                ],
                "answer": "B",
                "explanation": "Integer division truncates decimal."
            },
            {
                "id": "dcsa_2",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "Which keyword is used to inherit a class in Java?",
                "options": [
                    "implements",
                    "extends",
                    "super",
                    "this"
                ],
                "answer": "B",
                "explanation": "`extends` keyword is used for class inheritance."
            },
            {
                "id": "csa_3",
                "topic": "Primitives",
                "difficulty": "easy",
                "question": "Which of the following is a primitive type in Java?",
                "options": [
                    "String",
                    "Integer",
                    "int",
                    "Array"
                ],
                "answer": "C",
                "explanation": "'int' is a primitive; String, Integer, and Array are reference types."
            },
            {
                "id": "csa_4",
                "topic": "Operators",
                "difficulty": "easy",
                "question": "What is the result of 7 % 3 in Java?",
                "options": [
                    "2",
                    "1",
                    "3",
                    "0"
                ],
                "answer": "B",
                "explanation": "7 divided by 3 is 2 remainder 1, so 7 % 3 = 1."
            },
            {
                "id": "csa_5",
                "topic": "Conditionals",
                "difficulty": "easy",
                "question": "Which keyword chain is used for multiple conditions in Java?",
                "options": [
                    "elif",
                    "else if",
                    "elseif",
                    "otherwise"
                ],
                "answer": "B",
                "explanation": "Java uses 'else if' (two separate words) for chained conditions."
            },
            {
                "id": "csa_6",
                "topic": "Loops",
                "difficulty": "easy",
                "question": "How many times does this loop execute? for(int i=0; i<5; i++)",
                "options": [
                    "4",
                    "5",
                    "6",
                    "0"
                ],
                "answer": "B",
                "explanation": "i goes 0,1,2,3,4 — 5 iterations total."
            },
            {
                "id": "csa_7",
                "topic": "Arrays",
                "difficulty": "easy",
                "question": "What is the index of the first element in a Java array?",
                "options": [
                    "1",
                    "0",
                    "-1",
                    "Depends on declaration"
                ],
                "answer": "B",
                "explanation": "Java arrays are 0-indexed; the first element is at index 0."
            },
            {
                "id": "csa_8",
                "topic": "Arrays",
                "difficulty": "medium",
                "question": "What does arr.length return for: int[] arr = new int[10]?",
                "options": [
                    "9",
                    "10",
                    "11",
                    "Error"
                ],
                "answer": "B",
                "explanation": "arr.length returns the total number of elements, which is 10."
            },
            {
                "id": "csa_9",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "Which keyword creates an object from a class in Java?",
                "options": [
                    "class",
                    "object",
                    "new",
                    "create"
                ],
                "answer": "C",
                "explanation": "The 'new' keyword allocates memory and creates an instance of a class."
            },
            {
                "id": "csa_10",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "What is encapsulation in OOP?",
                "options": [
                    "Inheriting methods from a parent",
                    "Hiding data using private fields and public methods",
                    "Creating multiple methods with the same name",
                    "A class with no constructor"
                ],
                "answer": "B",
                "explanation": "Encapsulation bundles data and restricts direct access using private fields."
            },
            {
                "id": "csa_11",
                "topic": "Inheritance",
                "difficulty": "medium",
                "question": "In Java, a subclass can extend:",
                "options": [
                    "Multiple classes",
                    "Only one superclass",
                    "Any number of interfaces only",
                    "No class"
                ],
                "answer": "B",
                "explanation": "Java does not support multiple class inheritance; a class can only extend one superclass."
            },
            {
                "id": "csa_12",
                "topic": "Recursion",
                "difficulty": "medium",
                "question": "What is the base case of the factorial function?",
                "options": [
                    "$n = = 1$",
                    "$n = = 0 returns 1$",
                    "n < 0",
                    "$n = = n-1$"
                ],
                "answer": "B",
                "explanation": "factorial(0) = 1 is the standard base case to stop recursion."
            },
            {
                "id": "csa_13",
                "topic": "Recursion",
                "difficulty": "hard",
                "question": "What does f(4) return? int f(int n){ if(n<=1) return 1; return n*f(n-1); }",
                "options": [
                    "4",
                    "12",
                    "24",
                    "16"
                ],
                "answer": "C",
                "explanation": "f(4) = 4*3*2*1 = 24 (factorial of 4)."
            },
            {
                "id": "csa_14",
                "topic": "ArrayList",
                "difficulty": "medium",
                "question": "Which method removes an element from an ArrayList by index?",
                "options": [
                    ".delete(i)",
                    ".remove(i)",
                    ".pop(i)",
                    ".erase(i)"
                ],
                "answer": "B",
                "explanation": "ArrayList.remove(int index) removes the element at the given index."
            },
            {
                "id": "csa_15",
                "topic": "Strings",
                "difficulty": "easy",
                "question": "What does str.length() return for str = \"hello\"?",
                "options": [
                    "4",
                    "5",
                    "6",
                    "Error"
                ],
                "answer": "B",
                "explanation": "'hello' has 5 characters, so length() returns 5."
            },
            {
                "id": "csa_16",
                "topic": "Strings",
                "difficulty": "medium",
                "question": "What does str.substring(1, 3) return for str = \"abcde\"?",
                "options": [
                    "ab",
                    "bc",
                    "abc",
                    "bcd"
                ],
                "answer": "B",
                "explanation": "substring(1,3) extracts characters at indices 1 and 2, giving 'bc'."
            },
            {
                "id": "csa_17",
                "topic": "Static",
                "difficulty": "medium",
                "question": "A static method in Java:",
                "options": [
                    "Requires an object to call",
                    "Can access instance variables freely",
                    "Belongs to the class, not instances",
                    "Cannot have parameters"
                ],
                "answer": "C",
                "explanation": "Static methods belong to the class and can be called without creating an instance."
            },
            {
                "id": "csa_18",
                "topic": "Exception Handling",
                "difficulty": "medium",
                "question": "Which block always executes after try/catch in Java?",
                "options": [
                    "catch",
                    "throw",
                    "finally",
                    "else"
                ],
                "answer": "C",
                "explanation": "The 'finally' block always executes regardless of whether an exception was thrown."
            },
            {
                "id": "csa_19",
                "topic": "2D Arrays",
                "difficulty": "medium",
                "question": "For int[][] grid = new int[3][4], how many total elements are there?",
                "options": [
                    "7",
                    "12",
                    "3",
                    "4"
                ],
                "answer": "B",
                "explanation": "3 rows x 4 columns = 12 total elements."
            },
            {
                "id": "csa_20",
                "topic": "Interfaces",
                "difficulty": "medium",
                "question": "A Java interface:",
                "options": [
                    "Can be instantiated directly",
                    "Contains only method implementations",
                    "Defines abstract methods that implementing classes must provide",
                    "Extends multiple classes"
                ],
                "answer": "C",
                "explanation": "An interface defines a contract of method signatures that implementing classes must fulfill."
            },
            {
                "id": "csa_21",
                "topic": "Polymorphism",
                "difficulty": "hard",
                "question": "Which term describes a method behaving differently based on the calling object?",
                "options": [
                    "Encapsulation",
                    "Polymorphism",
                    "Abstraction",
                    "Compilation"
                ],
                "answer": "B",
                "explanation": "Polymorphism allows one interface to be used for different underlying data types or classes."
            },
            {
                "id": "csa_22",
                "topic": "Boolean",
                "difficulty": "easy",
                "question": "What is the value of: true && false || true?",
                "options": [
                    "false",
                    "true",
                    "null",
                    "Error"
                ],
                "answer": "B",
                "explanation": "&& has higher precedence: (true && false) = false; false || true = true."
            },
            {
                "id": "csa_23",
                "topic": "Type Casting",
                "difficulty": "medium",
                "question": "What is the result of (int)(7.9) in Java?",
                "options": [
                    "8",
                    "7",
                    "7.9",
                    "Error"
                ],
                "answer": "B",
                "explanation": "Casting to int truncates (does not round): result is 7."
            },
            {
                "id": "csa_24",
                "topic": "For-each",
                "difficulty": "easy",
                "question": "Which loop iterates over each element in array arr?",
                "options": [
                    "for(int i : arr)",
                    "for(i in arr)",
                    "foreach(int i, arr)",
                    "for(arr -> i)"
                ],
                "answer": "A",
                "explanation": "Java's enhanced for-loop syntax is 'for(type variable : array)'."
            },
            {
                "id": "csa_25",
                "topic": "Math class",
                "difficulty": "easy",
                "question": "Which Math method returns the larger of two values?",
                "options": [
                    "Math.large()",
                    "Math.max()",
                    "Math.top()",
                    "Math.high()"
                ],
                "answer": "B",
                "explanation": "Math.max(a, b) returns the greater of a and b."
            },
            {
                "id": "csa_26",
                "topic": "Overloading",
                "difficulty": "medium",
                "question": "Method overloading means:",
                "options": [
                    "A subclass redefines a parent method",
                    "Multiple methods share the same name with different parameters",
                    "A method calls itself",
                    "Hiding instance variables"
                ],
                "answer": "B",
                "explanation": "Overloading allows multiple methods with the same name but different parameter signatures."
            },
            {
                "id": "csa_27",
                "topic": "Constructors",
                "difficulty": "medium",
                "question": "What is a default constructor?",
                "options": [
                    "A constructor that takes parameters",
                    "A no-arg constructor provided by Java if none is defined",
                    "A static method",
                    "A private method"
                ],
                "answer": "B",
                "explanation": "Java provides a no-argument default constructor automatically if no constructor is explicitly defined."
            },
            {
                "id": "csa_28",
                "topic": "Sorting",
                "difficulty": "hard",
                "question": "Worst-case time complexity of Selection Sort is:",
                "options": [
                    "O(n)",
                    "O(n log n)",
                    "O(n squared)",
                    "O(log n)"
                ],
                "answer": "C",
                "explanation": "Selection Sort always performs O(n^2) comparisons regardless of input order."
            },
            {
                "id": "csa_29",
                "topic": "Binary Search",
                "difficulty": "hard",
                "question": "Binary search requires the array to be:",
                "options": [
                    "Unsorted",
                    "Sorted",
                    "Filled with unique values",
                    "Of even length"
                ],
                "answer": "B",
                "explanation": "Binary search only works correctly on a sorted array."
            },
            {
                "id": "csa_30",
                "topic": "OOP",
                "difficulty": "hard",
                "question": "The 'super' keyword in Java is used to:",
                "options": [
                    "Call a child class method",
                    "Access the parent class constructor or methods",
                    "Declare a static field",
                    "Create an interface"
                ],
                "answer": "B",
                "explanation": "'super' refers to the parent class and can be used to call its constructor or methods."
            }
        ]
    }
};
