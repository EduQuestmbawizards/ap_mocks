// Specific Question Bank for Test: ap-mock-physc-mech-1
const AP_TEST_DATA = {
    "ap-mock-physc-mech-1": {
        "title": "AP Physics C: Mechanics Practice Exam 1",
        "testType": "Practice Exam",
        "subject": "ap-phys-c-mech",
        "topic": "Mechanics Full Practice",
        "timeLimitMinutes": 45,
        "totalQuestions": 35,
        "questions": [
            {
                "id": "pt1-mech-q1",
                "global_num": 271,
                "section": "Practice Test 1 – Mechanics",
                "question": "A constant horizontal force F applied to a block on an incline causes the block to move a distance d along the incline, as shown. If the coefficient of friction between the block and the incline is \\muk, what is the work done by the applied force? (Do not assume that the block moves at constant velocity.)",
                "options": [
                    "W = Fd sin \\theta",
                    "W = Fd cos \\theta",
                    "W = mgd sin \\theta",
                    "W = mgd sin \\theta − \\muk mgd cos \\theta",
                    "W = mgd sin \\theta + \\mukd(mg cos \\theta + F sin \\theta)"
                ],
                "answer": "B",
                "explanation": "(B) Because the force is constant, the work is given by the dot product of the force and the displacement vectors: Choice (C) is the change in potential energy as the block is elevated. Choice (E) is the work that would have to be done by F to move the block up the incline at a constant speed; that is, the work done by F would be the negative of the work done by gravity and by friction (because the net work would have to be zero).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q2",
                "global_num": 272,
                "section": "Practice Test 1 – Mechanics",
                "question": "The restoring force that acts on a mass is shown. For small amplitudes, the mass moves in simple harmonic motion with a period T. Which of the following is true of oscillations with larger amplitudes?",
                "options": [
                    "The motion is SHM with a period of T.",
                    "The motion is SHM with a period smaller than T.",
                    "The motion is SHM with a period larger than T.",
                    "The motion is no longer SHM, and its period is smaller than T.",
                    "The motion is no longer SHM, and its period is larger than T."
                ],
                "answer": "E",
                "explanation": "(E) See the figure. For large-amplitude oscillations, the restoring force is not linear, so the motion is not simple harmonic motion. Because the restoring force is smaller than its linear approximation about the origin (which would produce a period of T), it produces motion with a larger period. (Because the force is smaller, the particle oscillates more slowly and more time is required for each cycle.)",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q3",
                "global_num": 273,
                "section": "Practice Test 1 – Mechanics",
                "question": "A simple pendulum of length ℓ is moved to Mars (where g = 3.71 m/s2). Its period on Earth is 2.0 s. Its period on Mars is",
                "options": [
                    "0.02 s",
                    "2.0 s",
                    "3.25 s",
                    "600 s",
                    "6,000 s"
                ],
                "answer": "C",
                "explanation": "(C) The period of a simple pendulum is given by . If the quantities on Mars are denoted by primes, then the period on Mars is given by , where the unprimed values are those on Earth (note that the length is unchanged). Thus, s.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q4",
                "global_num": 274,
                "section": "Practice Test 1 – Mechanics",
                "question": "At the instant that a mass in simple harmonic motion passes through its equilibrium position its acceleration is",
                "options": [
                    "maximum",
                    "zero",
                    "oppositely directed to its velocity",
                    "parallel to its velocity",
                    "cannot be determined without additional information"
                ],
                "answer": "B",
                "explanation": "(B) A simple harmonic oscillator is characterized by a = −\\omega2x (found by plugging Hooke’s law into Newtons’ second law). At equilibrium, x = 0 and thus the acceleration is also zero.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q5",
                "global_num": 275,
                "section": "Practice Test 1 – Mechanics",
                "question": "A solid sphere has a rotational inertia of when rotated about an axis tangent to its surface as shown. What is the rotational inertia of the sphere when it is rotated about a line passing through the center of the sphere?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) According to the parallel axis theorem, the rotational inertia about an axis that does not pass through the center of mass (in this problem, the one that passes along the surface of the sphere) is equal to the rotational inertia about a parallel axis passing through the center of mass (in this problem, the axis passing through the sphere’s center) plus MD2, where D is the distance between the two axes (in this case, r): Solving this equation for the rotational inertia about the axis that passes through the center of mass yields choice (B).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q6",
                "global_num": 276,
                "section": "Practice Test 1 – Mechanics",
                "question": "As shown in the figure, a pendulum is released with the string parallel to the ground at point I, resulting in its swinging through a 180° angle between points I and III. When the pendulum is at point II and moving downward, what is the direction of its acceleration?",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) Consider the figure. The pendulum is rotating in a circle, so it must experience a centripetal acceleration toward the center of the circle. The pendulum is also speeding up (because of conservation of energy, with gravitational potential energy being converted to kinetic energy), so it experiences a tangential acceleration parallel to its velocity. The sum of these accelerations produces a net acceleration that is neither purely radial nor purely tangential but rather points in the direction of choice (C).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q7",
                "global_num": 277,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass m moving to the right with speed v collides and sticks to a mass of 3m moving upward with a speed 2v as shown. What is the final velocity of the two masses?",
                "options": [
                    "Option A",
                    "(C)",
                    "Option C",
                    "(E) none of the above",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) This is an inelastic collision such that momentum is conserved and the final velocity of both masses is the same (because they stick together and move with a common velocity). Conservation of momentum yields Solving these equations yields choice (B).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q8",
                "global_num": 278,
                "section": "Practice Test 1 – Mechanics",
                "question": "If a force of 2 N does work at the rate of on an object moving with a speed of 2 m/s, the angle between the force and the velocity vector must be",
                "options": [
                    "45°",
                    "120°",
                    "135°",
                    "150°",
                    "It is impossible to deliver a negative power."
                ],
                "answer": "C",
                "explanation": "(C) P = F \\cdot  v. For the power to be negative, the force must have a component antiparallel to the velocity, as shown in the figure. Expressing the dot product as P = F \\cdot  v = vF|| and substituting in numbers indicates that the component of the force antiparallel to the velocity has a magnitude of directed as shown. Given that the magnitude of the force is 2 N, trigonometry indicates that the angle between the force and the velocity is equal to 135°.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q9",
                "global_num": 279,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass m is released from rest at t = 0 in a parabolic depression as shown. If there is no friction between the mass and the surface, which of the graphs shows the mass’s x-position as a function of time, assuming that the mass’s displacement from the origin is small?",
                "options": [
                    "Option A",
                    "(C)",
                    "Option C",
                    "(E)",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) Since the gravitational potential energy is proportional to the height, a plot of potential energy vs position is a parabola similar to the y(x)-parabola. As in the case of a mass attached to a spring, whenever the plot of potential energy vs position is parabolic, there is a linear restoring force that gives rise to simple harmonic motion. Therefore, the position function is sinusoidal, initially having a positive value.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q10",
                "global_num": 280,
                "section": "Practice Test 1 – Mechanics",
                "question": "Referring to the situation introduced in question 9, which of the graphs shows the x-component of the object’s acceleration as a function of time? Questions 11–13 refer to a projectile launched from Earth reaching a height equal to Earth’s radius before returning to land. (Neglect air resistance.)",
                "options": [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) As explained in the solution to question 9, the particle moves in simple harmonic motion. Therefore, the acceleration is sinusoidal, eliminating all choices except (A) and (B). Since the acceleration is initially negative (the object begins at rest and accelerates to the left), choice (A) is correct.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q11",
                "global_num": 281,
                "section": "Practice Test 1 – Mechanics",
                "question": "When is the power exerted by the gravitational force the greatest?",
                "options": [
                    "at the instant after the projectile is launched",
                    "at the peak of the trajectory",
                    "at the instant before the projectile hits Earth",
                    "The power is maximized at the points specified in both answer choices (A) and (B).",
                    "The power is constant."
                ],
                "answer": "C",
                "explanation": "(C) P = F \\cdot  v. Therefore, the power is negative as the projectile moves away from Earth (because the velocity is antiparallel to the gravitational force), zero at the peak of the trajectory (when the velocity is zero), and positive as the projectile returns to Earth (because the velocity is parallel to Earth). The power is greatest the instant before the projectile hits Earth, at which point the velocity parallel to the force is greatest and the gravitational force is greatest.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q12",
                "global_num": 282,
                "section": "Practice Test 1 – Mechanics",
                "question": "At which of the following points is the acceleration the greatest in magnitude?",
                "options": [
                    "at the instant after the projectile is launched",
                    "at the peak of the trajectory",
                    "at the instant before the projectile hits Earth",
                    "The acceleration is maximized at the points specified in both answer choices (A) and (C).",
                    "The acceleration is constant."
                ],
                "answer": "D",
                "explanation": "(D) The magnitude of the acceleration is proportional to the magnitude of the force. The magnitude of the force, in turn, is maximized when the projectile is closest to Earth, which occurs both when the particle is launched and when the particle hits the ground.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q13",
                "global_num": 283,
                "section": "Practice Test 1 – Mechanics",
                "question": "Compare the gravitational potential energy when the particle is launched to the potential energy when the particle is at the peak of its trajectory.",
                "options": [
                    "Upeak = Ulaunch because of conservation of energy.",
                    "|Upeak| > |Ulaunch| and Upeak > 0",
                    "|Upeak| < |Ulaunch| and Upeak < 0",
                    "|Upeak| < |Ulaunch| and Upeak > 0",
                    "|Upeak| > |Ulaunch| and Upeak < 0"
                ],
                "answer": "C",
                "explanation": "(C) Gravitational potential energies are always negative because they are a sum: which eliminates choices (B) and (D). Conservation of energy requires that the potential energy be larger at the peak of the trajectory (where the kinetic energy is minimized), so choice (C) is correct.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q14",
                "global_num": 284,
                "section": "Practice Test 1 – Mechanics",
                "question": "A wheel accelerates at uniform angular acceleration \\alpha from rest. If its speed after one full rotation is \\omega, what was its speed after half a rotation?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) Consider the equation . In this case, the initial angular velocity is zero, so this equation simplifies to . Therefore, if \\Delta \\theta decreases by a factor of 2, \\omega decreases by a factor of .",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q15",
                "global_num": 285,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass m is suspended in an elevator. In terms of the tension T of the string and the weight of the mass, what is the upward acceleration of the elevator?",
                "options": [
                    "T − mg",
                    "mg − T",
                    "(T/m) + g",
                    "(T/m) − g",
                    "g − T/m"
                ],
                "answer": "D",
                "explanation": "(D) There are two forces acting on the mass: tension pointing upward and gravity pointing downward. Therefore, Fnet = ma = T − mg (designating upward to be positive as indicated in the problem). Solving for the acceleration a yields choice (D). Note that the mass and the elevator have a common acceleration.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q16",
                "global_num": 286,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass initially at rest explodes into two fragments with masses m1 and m2. If m1 subsequently moves with a speed v1, how much kinetic energy was liberated in the explosion?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Not enough information is given."
                ],
                "answer": "B",
                "explanation": "(B) Conservation of momentum requires that the speeds of m1 and m2 be related according to the equation m1v1 = m2v2, so v2 = m1v1/m2. (The total momentum of the system is zero.) The change in kinetic energy during the explosion is (recalling that initial kinetic energy is zero). Substituting v2 = m1v1/m2 and simplifying yields choice (B).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q17",
                "global_num": 287,
                "section": "Practice Test 1 – Mechanics",
                "question": "A projectile is launched on level ground with an initial speed v0 and angle of elevation \\theta. All of the following statements concerning the projectile right before it lands are correct except",
                "options": [
                    "The acceleration is equal to g downward.",
                    "The power exerted by the gravitational force is maximized.",
                    "The time the projectile was in the air is equal to 2v0sin \\theta/g.",
                    "The projectile has the same kinetic energy as when it was launched.",
                    "The projectile has the same velocity as when it was launched."
                ],
                "answer": "E",
                "explanation": "(E) Choice (A): The acceleration of a projectile is always g pointing downward. Choice (B): The power exerted by the gravitational force is maximized when the projectile’s velocity parallel to the gravitational force (its downward velocity) is maximized, which occurs immediately before the projectile lands (based on the formula P = F \\cdot  v). Choice (C): The projectile’s initial y-component of velocity is v0sin \\theta, and its final y-component of velocity (due to the symmetry of the parabolic trajectory) is −v0sin \\theta. Applying the equation vf = v0 + at, with the acceleration of −g, shows that the total time in the air is equal to 2v0sin \\theta/g. Choice (D): Conservation of energy requires that the projectile has the same kinetic energy when it lands as when it was launched. Choice (E): The projectile has the same speed as when it was launched, but it is moving in a different direction (tilted downward rather than upward).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q18",
                "global_num": 288,
                "section": "Practice Test 1 – Mechanics",
                "question": "For a system in simple harmonic motion, which of the following statements is true? (The equilibrium point refers to the point in the middle of the particle’s oscillation, which could potentially be a static equilibrium point; the turning points are points where the particle reverses direction.)",
                "options": [
                    "The acceleration is maximized at the equilibrium point.",
                    "The velocity is maximized at the turning points.",
                    "The restoring force is maximized at the equilibrium point.",
                    "The displacement is maximized at the turning points.",
                    "None of the above are true; it depends on the particular situation."
                ],
                "answer": "D",
                "explanation": "(D) Choices (A) and (C): The restoring force and acceleration are maximized when the displacement is maximized, which occurs at the turning points. Choice (B): The velocity is maximized at the equilibrium point (where all the energy is kinetic energy). Choice (D): The particle reverses direction at the point where its displacement is maximized.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q19",
                "global_num": 289,
                "section": "Practice Test 1 – Mechanics",
                "question": "An object slides with horizontal velocity v0 off a cliff of height h. How far from the base of the cliff does the object hit the ground?",
                "options": [
                    "v0g/h",
                    "v0h/2g",
                    "2gv0/h",
                    "(E)",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) Setting y = 0 at the top of the cliff and t = 0 as the instant the mass slides off the cliff, the y-coordinate of the particle’s position is given by the equation . Because the mass hits the ground when y = −h, the time of impact can be obtained by solving the equation . The x-component of the velocity is a constant v0, so the horizontal displacement during the fall is given by .",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q20",
                "global_num": 290,
                "section": "Practice Test 1 – Mechanics",
                "question": "The angular position of a wheel is given by the equation \\theta(t) = 2t3 − 6t2, where \\theta is measured in radians and t in seconds. When is the torque on the wheel equal to zero?",
                "options": [
                    "t = 0.33 s",
                    "t = 0.5 s",
                    "t = 1 s",
                    "t = 2 s",
                    "t = 3 s"
                ],
                "answer": "C",
                "explanation": "(C) The torque is zero when the angular acceleration is zero. To calculate the angular acceleration from the angular position, we must take two derivatives: Therefore, \\alpha(t) = 0 when t = 1.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q21",
                "global_num": 291,
                "section": "Practice Test 1 – Mechanics",
                "question": "A small mass attached to a string rotates on a frictionless tabletop as shown. If the tension in the string is increased, causing the radius of the circular motion to decrease by a factor of 2, what effect will this have on the kinetic energy of the mass?",
                "options": [
                    "It will decrease by a factor of 2.",
                    "It will remain constant.",
                    "It will increase by a factor of 2.",
                    "It will increase by a factor of 4.",
                    "It will increase by a factor of 8."
                ],
                "answer": "D",
                "explanation": "(D) The tension force exerts no torque because it is parallel to the radial position vector. Therefore, the net torque is zero and angular momentum is conserved. When the radius decreases by a factor of 2, the rotational inertia, I = mr2, decreases by a factor of 4. In order for the angular momentum, L = I\\omega, to remain constant, the angular velocity must then increase by a factor of 4. Given these changes in the rotational inertia and the angular velocity, the kinetic energy, , increases by a factor of 4.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q22",
                "global_num": 292,
                "section": "Practice Test 1 – Mechanics",
                "question": "Three point masses of equal mass are located as shown in the figure. What is the x-coordinate of the center of mass of this system?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) Note that the y-coordinate of the top mass is irrelevant to answering this question. We could imagine that the top mass is also located at (a, 0). We can use the equation , choice (B). This answer makes sense because we have twice as much mass located at x = a compared to x = 0, so the center of mass is located twice as close to x = a.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q23",
                "global_num": 293,
                "section": "Practice Test 1 – Mechanics",
                "question": "When two springs are attached in parallel to a mass m as shown, what is the equivalent spring constant?",
                "options": [
                    "keq = k1 + k2",
                    "(C)",
                    "Option C",
                    "(E) none of the above",
                    "Option E"
                ],
                "answer": "A",
                "explanation": "(A) When the mass m is displaced by an amount \\Delta x, the net force on it is the sum of the two spring forces: Fnet = −k1\\Delta x − k2\\Delta x. Setting this force equal to the force that would result from a single equivalent spring with spring constant keq yields Solving for the equivalent spring constant gives choice (A). Note: Two springs in parallel have an equivalent spring constant of keq = k1 + k2. Two springs in series have an equivalent spring constant of This is the same type of pattern seen with equivalent capacitances and resistances.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q24",
                "global_num": 294,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass m is initially moving to the right with speed v toward a series of hills and valleys on a frictionless surface, as shown. What range of speeds must the mass have to become trapped in the valley between points A and B?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "It is impossible for the mass to become trapped."
                ],
                "answer": "E",
                "explanation": "(E) Because of conservation of energy, the mass’s speed is a function only of its height. Therefore, if the mass has enough energy to move over hill h1 when moving to the right, it will also have enough energy to move over the hill when moving to the left. Therefore, it is impossible for the mass to become trapped in the valley between points A and B without some other force being present (e.g., a frictional force).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q25",
                "global_num": 295,
                "section": "Practice Test 1 – Mechanics",
                "question": "If a constant net force F causes an object to accelerate from rest to a final velocity of v while moving a distance \\Delta x, what is the object’s mass?",
                "options": [
                    "(B) 2\\Delta xF/vf",
                    "Option B",
                    "(D) \\Delta xF/vf",
                    "Option D",
                    "Not enough information is given."
                ],
                "answer": "A",
                "explanation": "(A) The one-dimensional kinematics equation can be solved for the acceleration, yielding . Applying Newton’s second law, F = ma, indicates that",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q26",
                "global_num": 296,
                "section": "Practice Test 1 – Mechanics",
                "question": "Two concentric cylinders of radii R and 2R are fastened together and can rotate about their centers as in the figure. If two forces of magnitude F are exerted on the cylinders as shown, what must the magnitude of the third unknown force be if the cylinders are to rotate with constant angular speed?",
                "options": [
                    "F/2",
                    "(C) F",
                    "Option C",
                    "(E) 2F",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) In order for the cylinders to rotate with a constant speed, they must experience zero net torque. Holding to the convention that positive torque is counterclockwise, this mathematically yields Solving for the unknown force gives .",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q27",
                "global_num": 297,
                "section": "Practice Test 1 – Mechanics",
                "question": "A rod of uniform mass density and total mass M with a mass m attached to one end is pivoted as shown. What is the tension force FT needed to prevent the rod from moving?",
                "options": [
                    "FT = 2mg",
                    "(C)",
                    "Option C",
                    "(E)",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) Because the rod is fixed to a pivot (which can supply whatever force is necessary to make the net force zero), the only condition that must be satisfied for the rod to be in static equilibrium is that the net torque on the rod be zero. Calculating the torque about the pivot point (designating counterclockwise torques positive) yields (The center of the rod is located a distance 1/6 to the left of the pivot.) Solving for the tension force yields choice (B).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q28",
                "global_num": 298,
                "section": "Practice Test 1 – Mechanics",
                "question": "A child riding in a car along a flat road tosses a ball straight up with a speed v. To an observer standing on the ground outside the car, the ball appears to be thrown with an angle of elevation of \\theta. What is the speed of the car?",
                "options": [
                    "v sin \\theta",
                    "v cos \\theta",
                    "v sec \\theta",
                    "v tan \\theta",
                    "v cot \\theta"
                ],
                "answer": "E",
                "explanation": "(E) The velocity of the ball with respect to the ground is equal to the vector sum of the velocity of the ball with respect to the car plus the velocity of the car with respect to the ground, as shown. Based on the vector geometry of this triangle, tan \\theta = v/speed of car so that the speed of the car = v/tan \\theta = v cot \\theta.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q29",
                "global_num": 299,
                "section": "Practice Test 1 – Mechanics",
                "question": "A car of mass 400 kg is rounding a flat curve of radius 80 m. If the coefficient of static friction between the car’s tires and the ground is 0.5, the maximum speed at which the car can round the curve is closest to which of the following?",
                "options": [
                    "10 m/s",
                    "20 m/s",
                    "30 m/s",
                    "40 m/s",
                    "80 m/s"
                ],
                "answer": "B",
                "explanation": "(B) The frictional force provides as much centripetal force as is needed to keep the car moving in a circular path, up to the maximal static frictional force equal to Ffr = \\mukFn = \\mukmg. Therefore, at the maximum speed, mv2/r = \\mukmg. Solving for v yields . Approximating g as 10 m/s2,",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q30",
                "global_num": 300,
                "section": "Practice Test 1 – Mechanics",
                "question": "If the acceleration of an object of mass m starting from rest is given as a function of time by , then the kinetic energy of this object is proportional to",
                "options": [
                    "(B) mA2t",
                    "Option B",
                    "mA2t3",
                    "mA2t−3",
                    "mA2t3/2"
                ],
                "answer": "C",
                "explanation": "(C) Dimensional analysis gives the answer. A will have dimensions . In order for the kinetic energy to have the correct dimensions , the answer must be (C).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q31",
                "global_num": 301,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass m is thrown off the roof of a building of height h with an initial speed v0 and angle of elevation \\theta below the horizontal. What is the object’s speed when it reaches the ground? (Do not ignore air friction.)",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Option E"
                ],
                "answer": "C",
                "explanation": "(C) Ignoring air friction and applying conservation of energy yields . Solving for the final speed gives . Because the frictional force always performs negative work, it decreases the final speed so that the final velocity is less than this value.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q32",
                "global_num": 302,
                "section": "Practice Test 1 – Mechanics",
                "question": "A force F is exerted on the rightmost of three masses tied together by strings as shown, causing the masses to accelerate to the right over a frictionless horizontal surface. What is the magnitude of the indicated tension force?",
                "options": [
                    "(B)",
                    "Option B",
                    "F/3",
                    "(E)",
                    "Option E"
                ],
                "answer": "B",
                "explanation": "(B) Treating the three blocks as a single system, their common acceleration is The net force on the leftmost block, which is equal to FT, is then given by Newton’s second law:",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q33",
                "global_num": 303,
                "section": "Practice Test 1 – Mechanics",
                "question": "A simple pendulum of length l has period T. A second pendulum of length l/2 is located at twice the distance from the center of Earth compared to the first pendulum. What is the period of the second pendulum?",
                "options": [
                    "T/2",
                    "(C) T",
                    "Option C",
                    "(E) 2T",
                    "Option E"
                ],
                "answer": "D",
                "explanation": "(D) The formula for the period of a pendulum is . Based on the law of universal gravitation (F = Gm1m2/r2), doubling the distance from the center of Earth causes the force (and thus the acceleration g) to decrease by a factor of 4. Because l decreases by a factor of 2 and g decreases by a factor of 4, the fraction l/g increases by a factor of 2, so the period increases by a factor of .",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q34",
                "global_num": 304,
                "section": "Practice Test 1 – Mechanics",
                "question": "A mass m is attached to a rod with uniform mass density at point C as shown. The rotational inertia of this system is greatest when it is rotated about an axis perpendicular to the rod that passes through",
                "options": [
                    "point A",
                    "point B",
                    "point C",
                    "a point between points A and B",
                    "a point between points B and C"
                ],
                "answer": "A",
                "explanation": "(A) The rotational inertia of the system is equal to the rotational inertia of the rod plus the rotational inertia of the mass. The rotational inertia of the mass, mR2, is maximized if the axis passes through point A (in order to maximize R, where R is the radius of the circular arc followed by m). The rotational inertia of the rod is given by the parallel axis theorem Irod = ICM + MD2 and is maximized when the distance of the axis from the center of mass is maximized, at both points A and C. Therefore, the rotational inertia of the system is maximized at point A, where the rotational inertia due to both the rod and the mass are maximized.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            },
            {
                "id": "pt1-mech-q35",
                "global_num": 305,
                "section": "Practice Test 1 – Mechanics",
                "question": "A particle’s position and velocity vectors at two different times are shown. In what direction does the average acceleration vector point?",
                "options": [
                    "(B)",
                    "Option B",
                    "(D)",
                    "Option D",
                    "Free-Response Questions DIRECTIONS: Use separate sheets of paper to write down your answers to the free-response questions. You may refer to the formula sheet in the Appendix (pages 575–578). Mechanics Mechanics I A person (mass m) is flying to the left at a speed v0 when she manages to grab onto the rim of a cylinder of radius R, length l, mass m, and uniform mass density that can rotate without friction about its axis (see figure). (a) Using integration, calculate the rotational inertia of the cylinder. (b) What is the person’s linear speed the instant after she grabs the cylinder? (c) If the collision between the person and the cylinder lasts a time \\Delta t, what is the minimum force the person’s hands must be capable of sustaining? (Assume \\Delta t is very small so that the person’s height does not change significantly during this time interval.) Then the cylinder rotates 180° so that the person is at the top of the cylinder. (d) What is the angular velocity at that instant? (e) What force must the person’s hands sustain now? (Assume that the wheel exerts a downward force on the person in order to keep her from flying off the wheel.) Mechanics II A mass m slides down a frictionless incline and sticks to a spring (spring constant k), initiating simple harmonic motion (see figure). (a) Express the potential energy U of the oscillating mass and spring system in terms of x (given the axis as shown, where the origin lies at the spring’s initial unstretched length). (b) Graph this U(x) function, indicating the points where U(x) = 0. (c) Based solely on this U(x) curve, where do you expect the equilibrium position of the simple harmonic motion to lie? (d) Based solely on Newton’s second law, where does the equilibrium point lie? (e) What is the angular frequency of the SHM? Mechanics III An object of mass m is placed onto a dish that is attached to a spring (of spring constant k) hanging from the ceiling. Assume that the dish and the spring have negligible mass. (a) What is the equilibrium extension of the spring? (b) Suppose the dish (with the mass on it) is displaced from equilibrium by a small distance. What is the resulting frequency of oscillation? (c) An experiment is designed to test the validity of the answer to part (b). Different masses are placed onto the same dish, connected to the same spring, of spring constant 100 N/m. The frequency of oscillation is measured with the following results: What quantities could be graphed on horizontal and vertical axes to yield a straight line according to the answer to part (b)? (d) Using your answer to part (c), plot the data on the grid below. Scale and label the axes, including units. Draw a straight line that best represents the data. The origin of your plot need not be (0, 0). (e) Compare the slope of the line with the prediction of part (b)."
                ],
                "answer": "D",
                "explanation": "(D) a = (v2 − v1)/\\Delta t, so it is parallel to v2 − v1. To obtain v2 − v1, we negate v1 (by making it point in the opposite direction) and add it to v2, as shown. Free-Response Mechanics I (a) Rotational inertia is given by the integral . The cylinder must be divided into concentric cylindrical shells centered on the axle. The mass of each cylindrical shell is given by its volume multiplied by the density of the cylinder: Substituting this differential mass into the integral for the rotational inertia, dm, yields (b) This is an inelastic rotational collision: Energy is not conserved, but angular momentum is conserved (because any torques are exerted by internal forces). Multiplying by the radius to obtain the person’s linear speed (rather than angular speed), (c) The minimum required force occurs if the person exerts a constant force equal to the average force required. Any deviation below this minimum force for any length of time will require a larger than average force later. The average force can be calculated as follows (designating the +x-direction to point to the right). (d) Although energy is not conserved during the inelastic collision, energy is conserved as the person swings through the 180° rotation and rises a height 2r, converting rotational kinetic energy to gravitational potential energy. Setting potential energy to zero at the bottom of the cylinder, (e) The net force required for circular motion is equal to the centripetal force. The downward force F exerted on the person is given by Note: If the person’s initial velocity is below a certain value, the answer above will be negative. This makes sense: As the person’s initial speed decreases, her speed at the top decreases (according to the law of conservation of energy). Eventually, as the person’s speed at the top decreases below v2/r < g, the wheel actually has to exert an upward rather than a downward force on the person (rather than tending to fly off the wheel, she will tend to fall downward under the force of gravity). Mechanics II (a) The total potential energy is the sum of the elastic and gravitational potential energies. (b) U(x), the quadratic function above, is graphed in the figure. The graph is a parabola with zeroes at x = 0 and x = 2 mg sin \\theta/k. (c) The equilibrium point is located at the bottom of the U(x) curve which, because of the symmetry of parabolas, lies exactly between the two zeroes, that is, at x = mg sin \\theta/k. (Imagine a ball rolling back and forth on top of the potential energy curve; its equilibrium position is at the bottom of the potential energy valley.) (d) Based on Newton’s second law, the system is in static equilibrium when Solving for xequilibrium yields the same answer as in part (c). (e) −dF/dx = d2U/dx2 = k = keffective. Therefore, as in vertical spring systems, the constant gravitational force does not affect the restoring force or the frequency (only the equilibrium point). Thus, Mechanics III (a) At equilibrium, the net force must be zero. (The vertical direction is chosen to be x, with x = 0 corresponding to the unstretched spring.) (b) As discussed in Chapter 8, vertical spring systems behave exactly like horizontal spring systems, with the exception that the equilibrium position is shifted by a fixed amount, in this case: xequilibrium = mg/k. Therefore, (c) To obtain a straight line, you need to square the answer to part (b): Then, you can choose either f2 on the vertical axis and 1/m on the horizontal axis or vice versa. (d) See the figure below, where f2 is plotted on the vertical axis and 1/m is plotted on the horizontal axis. The axes are scaled so all of the data can",
                "difficulty": "medium",
                "topic": "Practice Test 1 – Mechanics"
            }
        ]
    }
};
