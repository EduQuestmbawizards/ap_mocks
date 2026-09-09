// Specific Question Bank for Test: ap-topic-csa-oop
const AP_TEST_DATA = {
    "ap-topic-csa-oop": {
        "id": "ap-topic-csa-oop",
        "title": "AP Computer Science A: OOP & Inheritance",
        "subject": "AP Computer Science A",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-csa-oop_q1",
                "topic": "OOP",
                "difficulty": "medium",
                "question": "Which keyword allows a subclass to invoke a constructor from its superclass?",
                "options": [
                    "this",
                    "super",
                    "extends",
                    "implements"
                ],
                "answer": "B",
                "explanation": "`super(...)` calls the superclass constructor."
            },
            {
                "id": "ap-topic-csa-oop_q2",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Consider classes:\n```java\nclass Vehicle { public void drive() { System.out.print(\"V\"); } }\nclass Car extends Vehicle { public void drive() { System.out.print(\"C\"); } }\n```\nWhat is printed by: `Vehicle myCar = new Car(); myCar.drive();`?",
                "options": [
                    "C",
                    "V",
                    "VC",
                    "Compilation error"
                ],
                "answer": "A",
                "explanation": "This illustrates polymorphism and dynamic method lookup (late binding). In Java, non-static method calls are resolved at runtime based on the actual object type (`Car`), not the declared reference type (`Vehicle`). Thus `Car`'s `drive()` method executes, printing \"C\".",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q3",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Which keyword is used in a subclass constructor to explicitly invoke a constructor of its superclass?",
                "options": [
                    "super",
                    "this",
                    "parent",
                    "base"
                ],
                "answer": "A",
                "explanation": "In Java, `super(...)` is used in a subclass constructor to call a superclass constructor. It must be the very first statement in the subclass constructor body.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q4",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Why should instance variables in a class typically be declared with the `private` access modifier?",
                "options": [
                    "To encapsulate data and prevent unauthorized external modification",
                    "To allow subclasses to access them directly without getter methods",
                    "To make the variables accessible to any class in any package",
                    "To enable garbage collection to delete them faster"
                ],
                "answer": "A",
                "explanation": "Declaring instance variables as `private` enforces encapsulation, hiding internal state and requiring external classes to interact through validated accessor (getter) and mutator (setter) methods.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q5",
                "topic": "OOP & Inheritance",
                "difficulty": "hard",
                "question": "Consider classes:\n```java\nclass Person { public String getName() { return \"Person\"; } }\nclass Student extends Person { public int getGrade() { return 12; } }\n```\nWhich statement will cause a compile-time error?",
                "options": [
                    "Person p = new Student(); p.getGrade();",
                    "Person p = new Student(); p.getName();",
                    "Student s = new Student(); s.getName();",
                    "Person p = new Person(); p.getName();"
                ],
                "answer": "A",
                "explanation": "The compiler checks method validity against the declared reference type. Here `p` has declared type `Person`, and `Person` does not declare a `getGrade()` method. Therefore `p.getGrade()` causes a compile-time error.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q6",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Which method signature correctly overrides the `equals` method inherited from `java.lang.Object`?",
                "options": [
                    "public boolean equals(Object obj)",
                    "public boolean equals(MyClass obj)",
                    "public void equals(Object obj)",
                    "public int equals(Object obj)"
                ],
                "answer": "A",
                "explanation": "To properly override `equals` from `Object`, the method signature must exactly match: `public boolean equals(Object obj)`. Using a specific class parameter overloads rather than overrides.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q7",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "What is true about a class that implements the `Comparable<T>` interface in Java?",
                "options": [
                    "It must provide an implementation for the `compareTo(T other)` method",
                    "It automatically inherits sorting without writing additional code",
                    "It cannot have any other interfaces or superclasses",
                    "It must declare all instance variables as static"
                ],
                "answer": "A",
                "explanation": "The `Comparable<T>` interface contains a single method: `int compareTo(T other)`. Any non-abstract class implementing it must implement `compareTo`.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q8",
                "topic": "OOP & Inheritance",
                "difficulty": "hard",
                "question": "Consider the classes:\n```java\nclass Base {\n    public Base() { System.out.print(\"B\"); }\n}\nclass Derived extends Base {\n    public Derived() { System.out.print(\"D\"); }\n}\n```\nWhat is printed by: `Derived d = new Derived();`?",
                "options": [
                    "BD",
                    "D",
                    "DB",
                    "Compilation error"
                ],
                "answer": "A",
                "explanation": "When a subclass constructor executes without an explicit `super(...)` call, the Java compiler automatically inserts `super();` as the first instruction. Therefore, the superclass `Base` constructor runs first, printing \"B\", followed by the `Derived` constructor body, printing \"D\". Output is \"BD\".",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q9",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "What is the key difference between method overloading and method overriding?",
                "options": [
                    "Overloading uses the same method name with different parameters in the same class; overriding provides a new implementation of an inherited method with the same signature in a subclass",
                    "Overloading occurs across subclasses; overriding occurs within a single class",
                    "Overloading requires the `super` keyword; overriding requires the `this` keyword",
                    "Overloading is decided at runtime; overriding is decided at compile time"
                ],
                "answer": "A",
                "explanation": "Overloading happens within the same class when methods share the same name but differ in parameter lists. Overriding happens when a subclass replaces an inherited superclass method with identical signature.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q10",
                "topic": "OOP & Inheritance",
                "difficulty": "hard",
                "question": "Consider the class definition:\n```java\npublic class Counter {\n    private static int count = 0;\n    public Counter() { count++; }\n    public static int getCount() { return count; }\n}\n```\nIf three `Counter` objects are created, what does `Counter.getCount()` return?",
                "options": [
                    "3",
                    "1",
                    "0",
                    "NullPointerException"
                ],
                "answer": "A",
                "explanation": "The `static` modifier means `count` is a class variable shared across all instances of `Counter`. Each constructor invocation increments the single shared `count`, so after 3 objects are instantiated, `count` is 3.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q11",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Which of the following is true regarding abstract classes in Java?",
                "options": [
                    "An abstract class cannot be instantiated using the `new` operator",
                    "An abstract class cannot contain any concrete methods with bodies",
                    "An abstract class cannot declare constructors",
                    "A class can extend multiple abstract classes simultaneously"
                ],
                "answer": "A",
                "explanation": "An abstract class cannot be instantiated directly using `new`; it serves as a base class designed to be extended by concrete subclasses that implement its abstract methods.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q12",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "What is the purpose of the `toString` method in Java?",
                "options": [
                    "To provide a human-readable String representation of an object's state",
                    "To convert primitive numbers to boolean values",
                    "To sort objects in lexicographical order",
                    "To compare whether two objects share the same memory location"
                ],
                "answer": "A",
                "explanation": "The `toString()` method, defined in `Object`, returns a string representation of the object. Overriding it allows developer-friendly inspection of the object's field values when printed.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q13",
                "topic": "OOP & Inheritance",
                "difficulty": "hard",
                "question": "Consider the class hierarchy: `Animal` -> `Mammal` -> `Dog`. Which of the following assignments is INVALID without an explicit type cast?",
                "options": [
                    "Dog d = new Mammal();",
                    "Animal a = new Dog();",
                    "Mammal m = new Dog();",
                    "Animal a = new Mammal();"
                ],
                "answer": "A",
                "explanation": "In Java, upcasting (assigning a subclass reference to a superclass variable) is implicit and automatic. Downcasting (assigning a superclass object to a subclass variable) requires an explicit cast and may throw a `ClassCastException`. Thus `Dog d = new Mammal();` is invalid.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q14",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "When is a default no-argument constructor automatically provided by the Java compiler?",
                "options": [
                    "Only when no constructors are explicitly declared in the class",
                    "Whenever an abstract class is declared",
                    "Even when parameterized constructors are explicitly defined",
                    "Only when the class implements the `Serializable` interface"
                ],
                "answer": "A",
                "explanation": "The Java compiler synthesizes a default no-argument constructor if and only if the programmer writes zero constructors in the class. As soon as any constructor is explicitly declared, the default constructor is suppressed.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q15",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Which statement accurately describes a relationship represented by inheritance versus composition?",
                "options": [
                    "Inheritance represents an \"is-a\" relationship, whereas composition represents a \"has-a\" relationship",
                    "Inheritance represents a \"has-a\" relationship, whereas composition represents an \"is-a\" relationship",
                    "Inheritance is achieved through instance variables; composition is achieved with the `extends` keyword",
                    "Both inheritance and composition require the `implements` keyword"
                ],
                "answer": "A",
                "explanation": "Inheritance models an \"is-a\" taxonomy (e.g., Dog is a Mammal). Composition models a \"has-a\" structure where an object holds references to other objects (e.g., Car has an Engine).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q16",
                "topic": "OOP & Inheritance",
                "difficulty": "hard",
                "question": "Consider:\n```java\npublic class Test {\n    private int val;\n    public Test(int val) { this.val = val; }\n    public boolean equals(Object other) {\n        if (other instanceof Test) {\n            return this.val == ((Test) other).val;\n        }\n        return false;\n    }\n}\n```\nWhat will `new Test(5).equals(new Test(5))` return?",
                "options": [
                    "true",
                    "false",
                    "Compilation error",
                    "ClassCastException"
                ],
                "answer": "A",
                "explanation": "The `equals` method checks `other instanceof Test` (which is true), safely casts `(Test) other`, and compares `this.val == ((Test) other).val`, which evaluates $5 == 5$ (true).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q17",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "What happens if a method declared in an interface is NOT implemented in a concrete class that implements that interface?",
                "options": [
                    "A compile-time error occurs",
                    "A runtime `NoSuchMethodError` occurs",
                    "The method defaults to returning null or 0",
                    "The interface method is ignored"
                ],
                "answer": "A",
                "explanation": "A concrete class must provide implementations for all abstract methods declared in implemented interfaces; failure to do so produces a compilation error.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q18",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Which of the following describes the purpose of the `final` keyword when applied to a class?",
                "options": [
                    "The class cannot be extended by any subclass",
                    "All methods in the class are automatically executed once",
                    "The class cannot declare any methods",
                    "The class variables can never be read"
                ],
                "answer": "A",
                "explanation": "Applying `final` to a class declaration prevents any other class from inheriting from it (e.g., `java.lang.String` is a final class).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q19",
                "topic": "OOP & Inheritance",
                "difficulty": "hard",
                "question": "Consider:\n```java\nclass Alpha { public void show() { System.out.print(\"A\"); } }\nclass Beta extends Alpha { public void show() { super.show(); System.out.print(\"B\"); } }\nclass Gamma extends Beta { public void show() { super.show(); System.out.print(\"G\"); } }\n```\nWhat is printed by: `Alpha obj = new Gamma(); obj.show();`?",
                "options": [
                    "ABG",
                    "G",
                    "GBA",
                    "BAG"
                ],
                "answer": "A",
                "explanation": "Dynamic binding calls `Gamma.show()`. Inside `Gamma.show()`, `super.show()` calls `Beta.show()`. Inside `Beta.show()`, `super.show()` calls `Alpha.show()`, which prints \"A\". Then `Beta.show()` resumes, printing \"B\". Finally `Gamma.show()` finishes by printing \"G\". Output is \"ABG\".",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csa-oop_q20",
                "topic": "OOP & Inheritance",
                "difficulty": "medium",
                "question": "Which method call represents legal auto-boxing in Java?",
                "options": [
                    "Integer x = 42;",
                    "int x = new Double(4.2);",
                    "String s = 100;",
                    "boolean b = \"true\";"
                ],
                "answer": "A",
                "explanation": "Autoboxing is the automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes (e.g., converting primitive `int 42` into `Integer.valueOf(42)`).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
