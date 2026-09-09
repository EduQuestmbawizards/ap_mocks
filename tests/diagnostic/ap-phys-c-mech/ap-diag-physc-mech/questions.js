// Specific Question Bank for Test: ap-diag-physc-mech
const AP_TEST_DATA = {
    "ap-diag-physc-mech": {
        "title": "AP Physics C: Mechanics Diagnostic Assessment",
        "testType": "Diagnostic Assessment",
        "subject": "ap-phys-c-mech",
        "topic": "Comprehensive Mechanics Diagnostic",
        "timeLimitMinutes": 45,
        "totalQuestions": 35,
        "questions": [
            {
                "id": "diag-mech-q1",
                "global_num": 1,
                "section": "Diagnostic Test – Mechanics",
                "question": "A block lies on an inclined plane with angle of elevation \\theta, as shown in the figure. The inclined plane is frictionless, and the plane is accelerated to the left such that the block’s height remains constant. What is the net force on the block?",
                "options": [
                    "mg cot\\theta",
                    "mg tan\\theta",
                    "mg cos\\theta",
                    "mg sin\\theta",
                    "zero"
                ],
                "answer": "B",
                "explanation": "(B) Consider the figure. Because the block accelerates horizontally, we choose horizontal (x) and vertical (y) coordinates rather than the usual tilted coordinates of inclined plane problems. The y-component of the normal force must balance gravity for the block’s height to remain constant: Because the force in the y-direction is zero, the force in the x-direction is equal to the net force. Based on the diagram, this force is For more practice with this type of problem, see Chapter 3.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q2",
                "global_num": 2,
                "section": "Diagnostic Test – Mechanics",
                "question": "Consider an Atwood machine consisting of two unequal masses m1 and m2 (with m1 > m2) connected by a light string that passes over a cylindrical pulley. If the pulley has non-negligible mass M and radius R (rotational inertia I = 1/2 M R^2), which of the following is true of the linear acceleration a of the masses compared to the acceleration a_0 when the pulley is ideal and massless?",
                "options": [
                    "a = g",
                    "a = a_0",
                    "a > a_0",
                    "a = (m1 + m2)g / (m1 - m2)",
                    "a < a_0 because rotational inertia of the pulley reduces linear acceleration"
                ],
                "answer": "E",
                "explanation": "For a massless pulley, linear acceleration is a_0 = (m1 - m2)g / (m1 + m2). When the pulley has non-negligible mass M and rotational inertia I = 1/2 M R^2, torque equation tau = (T1 - T2)R = I alpha = I (a/R) requires different tensions on either side of the pulley. Summing Newton's second law for the system yields (m1 - m2)g = (m1 + m2 + I/R^2)a = (m1 + m2 + 1/2 M)a, so a = (m1 - m2)g / (m1 + m2 + 1/2 M) < a_0. Thus, the acceleration is strictly less than in the massless pulley case.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q3",
                "global_num": 3,
                "section": "Diagnostic Test – Mechanics",
                "question": "An object moves in the xy-plane with instantaneous velocity vector v directed along the positive x-axis. Five different constant acceleration vectors a are tested over a short time interval Delta t. In which case does the object experience the greatest increase in speed?",
                "options": [
                    "a is perpendicular to v (directed along the positive y-axis)",
                    "a is directed at an angle of 135 degrees relative to v",
                    "a is directed opposite to v (along the negative x-axis)",
                    "a is directed parallel to and in the same direction as v",
                    "a has zero magnitude"
                ],
                "answer": "D",
                "explanation": "The rate of change of speed is given by d|v|/dt = a_parallel = a * cos(theta), the component of acceleration parallel to velocity. When acceleration is parallel and in the same direction as velocity (theta = 0 degrees), cos(0) = 1, giving the maximum possible rate of increase in speed. Perpendicular acceleration changes direction only, while antiparallel acceleration decreases speed.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q4",
                "global_num": 4,
                "section": "Diagnostic Test – Mechanics",
                "question": "The moment of inertia (rotational inertia), \\int r2 dm, is the rotational analog of",
                "options": [
                    "displacement",
                    "center of mass",
                    "velocity",
                    "mass",
                    "force"
                ],
                "answer": "D",
                "explanation": "(D) Mass is a measure of linear inertia. (For more information, see the definition of rotational inertia and the table comparing linear and angular quantities in Chapter 7.)",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q5",
                "global_num": 5,
                "section": "Diagnostic Test – Mechanics",
                "question": "A mass m connected to a spring with spring constant k oscillates at a frequency f. If the mass is increased by a factor of 4 and the spring constant is increased by a factor of 2, the new frequency will be",
                "options": [
                    "2f",
                    "8f",
                    "1",
                    "2",
                    "none of the above Questions 6–8 refer to the figure below, which shows two masses connected by a massless pulley. Assume the incline is frictionless."
                ],
                "answer": "D",
                "explanation": "(D) According to the equation , quadrupling the mass and doubling the spring constant causes the frequency to decrease by a factor of . For more information about oscillating spring systems, see Chapter 8.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q6",
                "global_num": 6,
                "section": "Diagnostic Test – Mechanics",
                "question": "A mass m1 moves horizontally to the right with speed v along the positive x-axis, while a mass m2 moves vertically downward with speed v along the negative y-axis. What is the total momentum vector p_total of the two-mass system?",
                "options": [
                    "(m1 + m2)v i",
                    "m1 v i - m2 v j",
                    "m1 v i + m2 v j",
                    "(m1 - m2)v j",
                    "Zero"
                ],
                "answer": "B",
                "explanation": "Linear momentum is a vector quantity given by p = m v. The momentum of mass m1 is p1 = m1 v i (directed to the right). The momentum of mass m2 is p2 = -m2 v j (directed downward). The total momentum of the system is the vector sum p_total = p1 + p2 = m1 v i - m2 v j.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q7",
                "global_num": 7,
                "section": "Diagnostic Test – Mechanics",
                "question": "When m2 has fallen a distance d, what is the change in the total kinetic energy of the system?",
                "options": [
                    "g(m2d + m1d sin \\theta)",
                    "g(m2d − m1d sin \\theta)",
                    "g(m2d + m1d cos \\theta)",
                    "g(m2d − m1d cos \\theta)",
                    "Total kinetic energy is conserved."
                ],
                "answer": "B",
                "explanation": "(B) The change in the potential energy is Because of conservation of energy, the change in the kinetic energy must have the opposite sign of this change in the potential energy. More information about kinetic energy can be found in Chapter 4.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q8",
                "global_num": 8,
                "section": "Diagnostic Test – Mechanics",
                "question": "Now consider that the inclined plane, which has mass M and rests on a frictionless surface, can move as well. When both small masses start from rest, which of the following quantities evaluated for the system of the three masses is conserved?",
                "options": [
                    "gravitational potential energy",
                    "kinetic energy",
                    "x-momentum",
                    "y-momentum",
                    "None of the above are conserved for this system."
                ],
                "answer": "C",
                "explanation": "(C) As shown in question 6, the potential and kinetic energy both change, so choices (A) and (B) are not correct. There are no external forces acting in the x-direction, so the momentum in this direction must be conserved. There are external forces acting in the y-direction (gravity and the normal force exerted on the incline by the horizontal surface), so y-momentum is not conserved. Conservation of momentum is discussed in Chapter 5.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q9",
                "global_num": 9,
                "section": "Diagnostic Test – Mechanics",
                "question": "Two objects with equal masses and speeds as shown collide and stick together. What is the final speed of the combined mass?",
                "options": [
                    "v/2",
                    "v/",
                    "v",
                    "(E) 2v",
                    "Zero net field / magnitude"
                ],
                "answer": "B",
                "explanation": "(B) This is an inelastic collision in two dimensions such that momentum (but not energy) is conserved. Thus, in the horizontal (x) direction we have the equation mv + m(0) = (2m)v; similarly, in the vertical (y) direction we have m(0) + mv = (2m)v. Therefore, the final velocity has components in both directions that are equal to v/2, so that the final velocity has a magnitude of Collision problems are discussed in Chapter 5.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q10",
                "global_num": 10,
                "section": "Diagnostic Test – Mechanics",
                "question": "An object moving with constant acceleration can have how many of the following path types? I. a linear path II. a circular path III. a parabolic path IV. an elliptical path V. a spiral path",
                "options": [
                    "none",
                    "one",
                    "two",
                    "three",
                    "four"
                ],
                "answer": "C",
                "explanation": "(C) An object with constant acceleration can have a linear path (e.g., a projectile thrown directly upward) or a parabolic path (e.g., a projectile launched at an angle). Moving in circular, elliptical, or spiral paths all require centripetal forces that change in direction. Motion in multiple dimensions with a constant acceleration is essentially identical to projectile motion, which is discussed in Chapter 2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q11",
                "global_num": 11,
                "section": "Diagnostic Test – Mechanics",
                "question": "A mass is pulled up a frictionless incline by a force applied parallel to the incline. The change in the object’s kinetic energy is equal to which of the following?",
                "options": [
                    "the negative of the change in potential energy",
                    "the work done by gravity",
                    "the work done by the applied force",
                    "the work done by the applied force minus the work done by gravity",
                    "the work done by the applied force plus the work done by gravity"
                ],
                "answer": "E",
                "explanation": "(E) The kinetic energy is not equal to the negative of the change in the potential energy due to the presence of the external force. (Imagine, for example, that the force F accelerates the mass as it moves up the incline; certainly energy is not being conserved in this situation.) The change in kinetic energy is equal to the net work done on the object, which in turn is equal to the sum of the work done by each of the forces, as stated in the work-energy theorem. (The normal force of the incline does zero work.) Choice (D) is incorrect because although gravity does do negative work, this negative sign is contained within the phrase “the work done by gravity.” The work-energy theorem is derived and discussed in Chapter 4.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q12",
                "global_num": 12,
                "section": "Diagnostic Test – Mechanics",
                "question": "Which of the following changes does not affect the period of a horizontal mass-spring system undergoing simple harmonic motion?",
                "options": [
                    "doubling the mass",
                    "attaching an identical spring in parallel (as in the figure)",
                    "attaching an identical spring in series (as in the figure)",
                    "the presence of friction between the block and the horizontal surface",
                    "any manipulation of the masses and springs that does not affect the ratio of the maximum amplitude to the maximum velocity"
                ],
                "answer": "E",
                "explanation": "(E) The period is given by the equation . Therefore, doubling the mass, adding a spring in parallel (which doubles the effective spring constant), or adding a spring in series (which halves the effective spring constant) all affect the period. Adding friction complicates the motion such that it is no longer simple harmonic motion, and the period changes. Based on conservation of energy, , so that . Therefore, any change in the parameters of the system that does not affect the ratio A/vmax does not affect the ratio m/k and thus does not affect the period. For further information on mass-spring systems, see Chapter 8.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q13",
                "global_num": 13,
                "section": "Diagnostic Test – Mechanics",
                "question": "As a block moves up an incline at constant speed, the frictional force performs −5 J of work on the block. As the block moves down the same incline at constant speed over the same distance, how much work does the frictional force perform on the block?",
                "options": [
                    "−5 J",
                    "0 J",
                    "+5 J",
                    "It depends on the angle of elevation of the incline.",
                    "It depends on whether the applied force is the same in both situations."
                ],
                "answer": "E",
                "explanation": "(E) The fact that the net force is zero does not constrain the frictional force to a single value. Instead, the frictional force depends on the nature of the applied force and the resulting normal force. Consider, for example, the two cases in the figure that show two different ways to push a mass up an incline. In case 1, assume that the applied force exactly cancels the gravitational force; thus, both the normal and frictional forces are zero. In case 2, on the other hand, there are nonzero normal and frictional forces. (The component of the applied force parallel to the direction of motion cancels the frictional force such that the net force is zero.) Note: If the normal force were the same on the way up and on the way down, the frictional force would perform −5 J of work on the way down. The kinetic frictional force always opposes the motion and always performs negative work. The friction force is discussed further in Chapter 3; work is discussed in Chapter 4.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q14",
                "global_num": 14,
                "section": "Diagnostic Test – Mechanics",
                "question": "An object of mass m undergoes simple harmonic motion with position x(t) = A cos(omega t) and velocity v(t) = -A omega sin(omega t). Which of the following correctly describes the potential energy U(t) of the oscillator as a function of time?",
                "options": [
                    "U(t) is constant and independent of time",
                    "U(t) reaches its maximum whenever the speed of the object is maximum",
                    "U(t) oscillates with angular frequency omega/2",
                    "U(t) is zero at the turning points x = +A and x = -A",
                    "U(t) oscillates between 0 and 1/2 k A^2, reaching its maxima whenever the velocity is zero"
                ],
                "answer": "E",
                "explanation": "Total mechanical energy in simple harmonic motion is conserved: E = K + U = 1/2 k A^2. When velocity is zero (at the turning points x = +/- A), kinetic energy K = 1/2 m v^2 = 0, so potential energy U reaches its maximum value of 1/2 k A^2. When velocity is maximum (at equilibrium x = 0), potential energy is zero. Thus U(t) reaches its maximum whenever velocity is zero.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q15",
                "global_num": 15,
                "section": "Diagnostic Test – Mechanics",
                "question": "Consider the two concentric cylinders in the figure, which are fastened to each other and suspended by a pin through their center, which exerts a force of F1. Two additional forces, F2 and F3, act on the cylinders as shown. Which of the following equations is a necessary condition for the two-cylinder system to remain in static equilibrium?",
                "options": [
                    "F1 − F3 sin − F2 sin \\theta = 0",
                    "F1 − F3 cos + F2 cos \\theta = 0",
                    "F2 cos\\theta − F3 cos = 0",
                    "F2(cos\\theta)r2 − F3(cos )r1 = 0",
                    "F2(cos\\theta)r1 − F3(cos )r2 = 0 Questions 16–18 refer to the figure below, which shows a mass m connected to a spring (of spring constant k) rotating in a circle on a frictionless table at constant speed."
                ],
                "answer": "D",
                "explanation": "(D) The following equations are required for static equilibrium. The net force in the x-direction must be zero: The net force in the y-direction must be zero: The net torque about their centers must be zero: Inspection reveals that the only valid choice is (D), which is the negative of the torque condition above. For further information about the static equilibrium of extended objects (objects that can rotate), see Chapter 7.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q16",
                "global_num": 16,
                "section": "Diagnostic Test – Mechanics",
                "question": "If x is the extension of the spring from its unstretched length, v is the speed of the mass, and r is the radius of the circular path, which of the following equations is valid?",
                "options": [
                    "kx = mv 2/2",
                    "kx 2/2 = mv 2/2",
                    "kx 2/2 = mv 2/r",
                    "kx = mv 2/r",
                    "None of the above equations are valid."
                ],
                "answer": "D",
                "explanation": "(D) The spring force provides the centripetal force, so it must equal the centripetal force. The centripetal force is discussed in the section on uniform circular motion in Chapter 2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q17",
                "global_num": 17,
                "section": "Diagnostic Test – Mechanics",
                "question": "A block of mass m is attached to one end of a light horizontal spring with spring constant k. The other end of the spring is pivoted at a fixed point on a frictionless horizontal table. The block is set into uniform circular motion of radius r with constant speed v, maintaining a constant spring stretch x. What is the rate at which the spring does work on the block (the instantaneous power delivered by the spring)?",
                "options": [
                    "kx v",
                    "1/2 k x^2 (v / r)",
                    "k x^2 v / m",
                    "k x r sqrt(k/m)",
                    "Zero"
                ],
                "answer": "E",
                "explanation": "Instantaneous power is defined as P = F * v. For uniform circular motion, the spring force acts as the centripetal force and is directed radially inward toward the pivot, while the instantaneous velocity is directed tangentially along the circle. Because F and v are perpendicular at all times, F * v = |F||v| cos(90 deg) = 0. Therefore, the spring does zero work and delivers zero power to the block.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q18",
                "global_num": 18,
                "section": "Diagnostic Test – Mechanics",
                "question": "Consider the block in the previous problem moving in a circle of radius r with the spring stretched by an extension x. If the spring is suddenly cut, what is the change in the elastic potential energy stored in the spring as it returns to its unstretched equilibrium length?",
                "options": [
                    "A decrease of 1/2 k x^2",
                    "An increase of 1/2 k x^2",
                    "A decrease of k x^2",
                    "A decrease of 1/2 m v^2",
                    "No change in energy"
                ],
                "answer": "A",
                "explanation": "Before being cut, the spring is stretched by x and stores elastic potential energy U_initial = 1/2 k x^2. After being cut, the spring is free of tension and relaxes to its unstretched equilibrium length where x = 0 and U_final = 0. The change in the spring's potential energy is Delta U = U_final - U_initial = 0 - 1/2 k x^2 = -1/2 k x^2 (a decrease of 1/2 k x^2).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q19",
                "global_num": 19,
                "section": "Diagnostic Test – Mechanics",
                "question": "Consider a disk that has uniform density and a hole as shown. Where is the center of mass of this disk located?",
                "options": [
                    "point A",
                    "point B",
                    "point C",
                    "point D",
                    "point E"
                ],
                "answer": "B",
                "explanation": "(B) There is more mass to the left of point C than to the right of point C, so the center of mass must lie to the left of point C. Because all the mass lies to the right of point A, point A cannot be the center of mass. Thus, by elimination, the center of mass must be point B. Note that the center of mass must lie on the horizontal line AE because of symmetry. Further information about calculating the center of mass of this object can be found in Example 5.10.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q20",
                "global_num": 20,
                "section": "Diagnostic Test – Mechanics",
                "question": "A mass m is suspended by two ropes as shown. What is the tension in each of the ropes?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "D",
                "explanation": "(D) Because of symmetry, the two tension forces will be equal in magnitude. Therefore, to keep the mass in static equilibrium requires . Solving this equation for the tension force gives choice (D). More information about the static equilibrium of point masses can be found in Chapter 3 (particularly Example 3.3).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q21",
                "global_num": 21,
                "section": "Diagnostic Test – Mechanics",
                "question": "What is the maximum speed of a simple pendulum with length l whose maximum angle of displacement from the vertical is \\theta?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Not enough information given."
                ],
                "answer": "D",
                "explanation": "(D) At the maximum height of the pendulum, all the energy is gravitational potential energy. At the minimum height of the pendulum, all this potential energy has been converted to kinetic energy. Energy conservation between these extreme points yields (y is set equal to zero at the bottom of the pendulum’s arc; see Example 8.1 for the geometry of the height difference.) Solving for velocity yields choice (D). Further information about the conservation of energy can be found in Chapter 4.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q22",
                "global_num": 22,
                "section": "Diagnostic Test – Mechanics",
                "question": "A ball released from rest at height h rolls down a curved incline without slipping, as shown. What fraction of its final angular speed \\omegaf does the ball have at point P?",
                "options": [
                    "\\omegap = \\omegaf / 4",
                    "(C) \\omegap = \\omegaf / 2",
                    "1",
                    "(E) \\omegap = \\omegaf",
                    "4"
                ],
                "answer": "D",
                "explanation": "(D) Because the ball rolls without slipping, the relationship between the velocity of its center of mass and its angular velocity is v = r\\omega. Therefore, the total kinetic energy of the ball is equal to so that the kinetic energy is proportional to \\omega2. The kinetic energy at the bottom of the incline is twice the kinetic energy at point P (because half of the gravitational potential energy has been converted to kinetic energy at point P). Therefore, the angular velocity is smaller by a factor of at point P. Gravitational potential energy is discussed in Chapter 4, while rotational kinetic energy is covered in Chapter 6.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q23",
                "global_num": 23,
                "section": "Diagnostic Test – Mechanics",
                "question": "Which of the following is true of the potential and kinetic energies in a system undergoing SHM?",
                "options": [
                    "The total energy is maximized at the equilibrium point.",
                    "The total energy is maximized at the turning points.",
                    "The sum of the potential and kinetic energies varies sinusoidally.",
                    "The kinetic energy is maximized when the acceleration is maximized.",
                    "The maximum potential energy equals the maximum kinetic energy."
                ],
                "answer": "E",
                "explanation": "(E) Choices (A), (B), and (C) are false because the total energy is constant. Choice (D) is false because the kinetic energy is maximized at the equilibrium point, where the acceleration is zero. Choice (E) is correct because the maximum potential energy equals the maximum kinetic energy, which equals the total energy.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q24",
                "global_num": 24,
                "section": "Diagnostic Test – Mechanics",
                "question": "Consider a planet in an elliptical orbit around the sun as shown. Which of the following is the correct ratio of the magnitudes of the planet’s acceleration at points A and B?",
                "options": [
                    "aA/aB = rA/rB",
                    "aA/aB = rB/rA",
                    "1",
                    "2",
                    "4"
                ],
                "answer": "D",
                "explanation": "(D) The acceleration is equal to the net force divided by the mass, and the net force at either of the points is equal to the gravitational force due to the sun. Therefore, and . Finding the ratio of these two accelerations yields choice (D). Further information about universal gravitation can be found in Chapter 9.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q25",
                "global_num": 25,
                "section": "Diagnostic Test – Mechanics",
                "question": "If an object of mass m moves along a straight line such that its position as a function of time is given by x(t) = v0 t, where v0 is a constant velocity, what is the object's kinetic energy?",
                "options": [
                    "Zero",
                    "1/2 m v0 t",
                    "1/2 m v0^2 (a constant independent of time)",
                    "m v0^2 t^2",
                    "1/2 m (v0 t)^2"
                ],
                "answer": "C",
                "explanation": "The velocity of the object is v(t) = dx/dt = d(v0 t)/dt = v0, which is constant over time. The kinetic energy is K = 1/2 m v^2 = 1/2 m v0^2, which is constant and independent of time.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q26",
                "global_num": 26,
                "section": "Diagnostic Test – Mechanics",
                "question": "In order to swim directly across a stream with water moving with speed vstream with respect to the ground as shown, which of the following is required of the magnitude of the swimmer’s speed with respect to the water, vswimmer?",
                "options": [
                    "vswimmer = vstream",
                    "vswimmer > vstream",
                    "Perpendicular into the page",
                    "Perpendicular out of the page",
                    "vswimmer > 0"
                ],
                "answer": "B",
                "explanation": "(B) The relative velocity vectors are shown in the figure accompanying the question. The velocity of the swimmer with respect to the ground is equal to the velocity of the swimmer with respect to the water (vswimmer) plus the velocity of the water with respect to the ground (vstream). In order for the sum of these velocities to point directly across the stream, the swimmer’s velocity vswimmer must (1) cancel the velocity of the current vstream and (2) provide a perpendicular component across the stream. For vswimmer to have a y-component equal in magnitude to vstream and a nonzero x-component, its magnitude must be greater than vstream. Imagine what would happen if vswimmer = vstream. If the swimmer swam in the direction opposite the current, the swimmer would remain stationary with respect to the shore. If the swimmer tried to cross the stream, the y-component of vswimmer would be less than vstream, and the swimmer would be swept downstream. Although it would be possible to cross the stream, it would be impossible to cross the stream along a path perpendicular to the banks of the stream. Further information about relative velocity can be found in Chapter 2 (in particular, see Example 2.9).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q27",
                "global_num": 27,
                "section": "Diagnostic Test – Mechanics",
                "question": "What is the effective spring constant of two identical springs (each of spring constant k) attached in series (end-to-end—see question 12)?",
                "options": [
                    "k/2",
                    "Inversely proportional to the square of the separation",
                    "k",
                    "(E) 2k",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) Because the springs are identical, they are stretched the same amount. (This is required in order for the tension force to be constant throughout the two springs. If the tension in the springs were not equal, there would be a net force on the point where the springs were connected together, causing the extension of the springs to change until the two tension forces were equal.) Therefore, when a mass attached to the two springs is moved a distance \\Delta x, each spring is displaced by an amount \\Delta x/2 such that the tension force within each spring is F = −k(\\Delta x/2). This tension force is equal to the force the springs exert on the mass so that the effective spring constant is keffective = −F/\\Delta x = k/2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q28",
                "global_num": 28,
                "section": "Diagnostic Test – Mechanics",
                "question": "If the angular velocity of a disk is given in rads by the equation \\omega(t) = 9 + 3t, what is the disk’s angular displacement between t = 0 and t = 1 s?",
                "options": [
                    "0.75 rad",
                    "8.25 rad",
                    "9 rad",
                    "10.5 rad",
                    "18 rad"
                ],
                "answer": "D",
                "explanation": "(D) The angular velocity is proportional to t, thus the angular acceleration is constant. The angular displacement then obeys (see Chapter 6) with \\omega0 = 9 and \\alpha = 3. Thus, the angular displacement is (9)(1 − 0) + 0.5(3)(1) = 10.5 rad.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q29",
                "global_num": 29,
                "section": "Diagnostic Test – Mechanics",
                "question": "You open a 1.0 m-wide door by pushing on the edge farthest from the hinge. You apply a force of 2.0 N at right angles to the front of the door. If you rotate the door 0.5 radians in 0.5 s, at what rate have you done work on the door?",
                "options": [
                    "−2.0 J/s",
                    "0.25 J/s",
                    "0.5 J/s",
                    "2.0 J/s",
                    "4.0 J/s"
                ],
                "answer": "D",
                "explanation": "(D) You exert a constant torque of (1.0 m)(2.0 N) sin 90° on the door. The rate at which you do work is given (for constant torque) by choice (D).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q30",
                "global_num": 30,
                "section": "Diagnostic Test – Mechanics",
                "question": "A projectile is launched vertically upward into the air. When is the rate of work done by gravity on the projectile maximized?",
                "options": [
                    "at the top of the trajectory",
                    "right after the particle is launched",
                    "right before the particle hits the ground",
                    "The rate is constant.",
                    "The rate is zero."
                ],
                "answer": "C",
                "explanation": "(C) P = F \\cdot  v. The force is the constant downward gravitational force, so the power is maximized when the downward velocity is maximized. This occurs just before the particle hits the ground, when it is moving with its maximum speed in the downward direction. Projectile motion is discussed in Chapter 2, and power is discussed in Chapter 4.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q31",
                "global_num": 31,
                "section": "Diagnostic Test – Mechanics",
                "question": "A planet moves in an elliptical orbit around the sun (which is assumed to be stationary) as shown. What is the planet’s speed v2 at the point of closest approach to the sun?",
                "options": [
                    "v2 = v1",
                    "v2 = v1r2/r1",
                    "v2 = (v1r1 sin \\theta)/r2",
                    "v2 = (v1r1 cos \\theta)/v2",
                    "v2 = (v1r1 tan \\theta)/v2"
                ],
                "answer": "C",
                "explanation": "(C) The angular momentum around the sun is constant. Therefore, using the equation . Solving for v2 yields choice (C).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q32",
                "global_num": 32,
                "section": "Diagnostic Test – Mechanics",
                "question": "The potential function for an object in a region of space where there are no nonconservative forces is U(x) = −ax2 + bx − c. What is the force on the object in this region?",
                "options": [
                    "F(x) = 2ax − b",
                    "F(x) = −2ax + b",
                    "F(x) = m(2ax − b)",
                    "F(x) = m(−2ax + b)",
                    "F(x) = (ax3/3) − (bx2/2) + cx"
                ],
                "answer": "A",
                "explanation": "(A) Using F (x) = −dU/dx, we see that choice (A) is correct.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q33",
                "global_num": 33,
                "section": "Diagnostic Test – Mechanics",
                "question": "If an object’s position is given by the equation (where position is in meters and time is in seconds), what is the magnitude of the object’s velocity at time t = 1?",
                "options": [
                    "1 m/s",
                    "2 m/s",
                    "3 m/s",
                    "4 m/s",
                    "6 m/s"
                ],
                "answer": "C",
                "explanation": "(C) Velocity is the time derivative of position, and taking the derivative yields v(t) = 4 − t. Substituting t = 1 yields choice (C).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q34",
                "global_num": 34,
                "section": "Diagnostic Test – Mechanics",
                "question": "Two particles are launched from the top of a building at the same time with the same initial speed. One particle is launched with an initial velocity pointing \\theta degrees above the horizontal, while the other particle is launched with an initial velocity pointing \\theta degrees below the horizontal, as shown. Discounting air resistance, which of the following is true?",
                "options": [
                    "Both particles spend the same amount of time in the air.",
                    "Both particles hit the ground the same distance from the building.",
                    "At any particular instant in time, both particles have the same potential energy.",
                    "Both particles hit the ground at the same angle of impact (i.e., when they hit the ground, their velocities are parallel).",
                    "none of the above"
                ],
                "answer": "D",
                "explanation": "(D) Conservation of energy requires that both particles have the same kinetic energy when they strike the ground. Because (on impact) they have the same x-component of velocity (their x-components of velocity are initially equal and remain unchanged) and the same initial speeds, they must have the same y-components of velocity (recall that . Therefore, they have the same velocity vector on impact and must also share the same angle of impact.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            },
            {
                "id": "diag-mech-q35",
                "global_num": 35,
                "section": "Diagnostic Test – Mechanics",
                "question": "A figure skater is spinning without friction when he extends his arms, moving his hands farther from his axis of rotation and decreasing his angular velocity by a factor of 2. Which of the following statements is true?",
                "options": [
                    "Both his angular momentum and kinetic energy are constant.",
                    "His angular momentum decreases by a factor of 2, while his kinetic energy remains constant.",
                    "His angular momentum remains constant, while his kinetic energy decreases by a factor of 4.",
                    "His angular momentum remains constant, while his kinetic energy decreases by a factor of 2.",
                    "His angular momentum remains constant, while his kinetic energy increases by a factor of 2. Free-Response Questions DIRECTIONS: Use separate sheets of paper to write down your answers to the free-response questions. You may refer to the formula sheet in the Appendix (pages 575–578). Mechanics Mechanics I A pulley consists of two cylinders of radii r and 2r (see figure) with a total rotational inertia of I. Mass m2 is sliding along a frictionless incline with an angle of elevation of \\theta. Assume that both m1 and m2 have the same mass m. (a) Given that the angular acceleration of the pulley is zero (and assuming that the rope rolls without slipping over the pulley), what is the angle of elevation of the inclined plane? (b) If the mass on the inclined plane is sliding down the ramp with a speed of v2, what is the speed of the hanging mass? Then the rope attaching m2 to the pulley is cut, causing the hanging mass to accelerate. (c) What is the acceleration of the hanging mass, m1, under these conditions? (d) What is the rate at which the kinetic energy of the pulley and m1 is changing? (Your answer can include the angular speed of the pulley, \\omega.) Mechanics II A roller coaster (mass m), starting from rest at a height h, goes around a circular loop of radius r as shown. (a) If the normal force exerted on the roller coaster by the track at the top of the loop is zero, what is the roller coaster’s speed at this point? (b) Assuming that the track is frictionless, at what height h must the roller coaster have started? (c) Draw a free-body diagram for the roller coaster as it passes point A. (d) What is the object’s speed as it passes through point A? Mechanics III A horizontal force F acts on a mass m sliding along an inclined plane with a coefficient of kinetic friction \\muk, as shown."
                ],
                "answer": "D",
                "explanation": "(D) The ice exerts no torque on the skater. (The normal force acts essentially at the axis of rotation and exerts zero torque.) Therefore, the skater’s angular momentum, L = I\\omega, must remain constant (such that if the angular velocity decreases by a factor of 2, the moment of inertia must increase by a factor of 2). Given these changes, the kinetic energy, , decreases by a factor of 2. Free-Response Mechanics I (a) If the angular acceleration is zero, the acceleration of the two masses m1 and m2 must be zero (assuming that there’s no slippage of the rope so that the masses cannot accelerate while the pulley rotates at a constant angular speed). This means that the net forces on these objects must be zero, which requires that T1 = mg and T2 = mg sin \\theta. Note that m1 = m2 =m. Because the angular acceleration is zero, the net torque must also be zero. Designating counterclockwise torque as positive (and using the tension forces just calculated), we find that the net torque on the pulley is given by This part involves Newton’s laws (Chapter 3) and their application to rotational motion. (b) For both m1 and m2, the equation v = r\\omega (i.e., rolling without slipping of the rope) holds: (c) Applying Newton’s second law to the hanging mass (and designating downward acceleration as positive) yields Applying Newton’s second law to the pulley (and designating counterclockwise acceleration as positive such that both the linear and angular accelerations are positive), The final equation relates the linear acceleration of m1 and the angular acceleration of the pulley (expressing the fact that the pulley rolls without slipping on the rope connecting it to m1): a = r\\alpha. Solving these three equations with three unknown variables for a yields (d) Because of conservation of energy, the rate at which the kinetic energy is changing is equal to the rate at which the potential energy is decreasing. Because the gravitational force is converting potential energy to kinetic energy, this rate is equal to the power exerted by gravity, given by the formula P = F \\cdot  v. When the pulley is rotating with a speed of \\omega, the speed of the falling mass is v = r\\omega (downward, parallel to gravity), so the power is P = F \\cdot  v = gmr\\omega. For further discussion of work, power, and translational KE, see Chapter 4. Mechanics II (a) The normal force at the top of the loop is zero, so the radial force is equal to the gravitational force, which must equal the centripetal force: Solving for the speed, (b) Applying conservation of energy between the initial position of the roller coaster and the top of the loop (and using the previous result for the speed at the top of the loop), (c) The forces are shown in the figure (the construction of free-body diagrams is discussed in Chapter 3). (d) Using energy conservation again [comparing the initial position of the roller coaster at height 2.5r with point A at height r(1 − sin \\theta)], Mechanics III (a) The free-body diagram is shown. (b) Because the block remains on the incline, the acceleration and the net force in the y-direction are zero: The acceleration is parallel to the x-direction: This yields two equations with three variables. The final equation is Ffr = \\mukFN. Solving these equations for the acceleration yields (c) The block leaves the incline when it has a net force in the y-direction (and thus a net acceleration in the y-direction). Recall the equation for the net force in the y-direction: Imagine increasing F from zero. As the applied force F increases, the normal force decreases such that the net force in the y-direction is zero and the block remains on the incline. However, the normal force cannot decrease indefinitely because it can never be negative. The maximum force that can be applied without causing the block to leave the incline occurs when the normal force is equal to zero: Solving for F yields F = mg cot\\theta. Any force greater than this would produce a positive acceleration in the y-direction, causing the block to accelerate away from the incline. For further information on the construction of free-body diagrams and solutions to inclined plane problems, see Chapter 3. (d) According to part (c), the maximum force is given by F = mg cot\\theta. Thus, plot F on one axis and cot\\theta on the other. (e) The figure shows the plot and the straight-line fit. The slope of the line is given approximately by: The answer to part (c) predicts that this value should be mg = (1)(9.8) N = 9.8 N.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – Mechanics"
            }
        ]
    }
};
