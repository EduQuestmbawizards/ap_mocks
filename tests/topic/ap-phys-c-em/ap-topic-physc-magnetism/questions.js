// Specific Question Bank for Test: ap-topic-physc-magnetism
const AP_TEST_DATA = {
    "ap-topic-physc-magnetism": {
        "title": "AP Physics C: Magnetic Fields, Biot-Savart Law & Ampere's Law",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "Magnetic Fields",
        "timeLimitMinutes": 30,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-physc-magnetism-q1",
                "global_num": 234,
                "section": "Ch14: Magnetic Fields",
                "question": "Two circular loops of wire of equal radius R carry equal currents I. One loop lies in the xy-plane carrying current counterclockwise as seen from the positive z-axis, producing a magnetic field B_z k at the origin. The second loop lies in the xz-plane carrying current that produces a magnetic field -B_y j at the origin. What is the direction of the net magnetic field at the origin?",
                "options": [
                    "Along the positive x-axis",
                    "In the xy-plane at 45 degrees to the axes",
                    "In the yz-plane along the direction -j + k",
                    "Along the negative z-axis",
                    "Zero net magnetic field"
                ],
                "answer": "C",
                "explanation": "By the principle of superposition, the net magnetic field at the origin is B_net = B1 + B2 = -B_y j + B_z k. Because the loops have equal radii and carry equal currents, |B_y| = |B_z| = mu_0 I / (2R). The net field lies in the yz-plane and is parallel to the vector -j + k.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q2",
                "global_num": 235,
                "section": "Ch14: Magnetic Fields",
                "question": "A long coaxial cable consists of an inner solid cylindrical conductor of radius a and an outer thin cylindrical shell of radius b (with a < b). Equal currents I flow in opposite directions through the inner and outer conductors. What is the magnetic field magnitude B(r) in the space between the conductors (a < r < b)?",
                "options": [
                    "Zero",
                    "mu_0 I r / (2 pi a^2)",
                    "mu_0 I / (2 pi r)",
                    "mu_0 I / (2 pi b)",
                    "mu_0 I / (4 pi r^2)"
                ],
                "answer": "C",
                "explanation": "Apply Ampere's law oint B * dl = mu_0 I_enc around a circular path of radius r (with a < r < b). The path encloses only the inner conductor carrying total current I. Thus, B(2 pi r) = mu_0 I ==> B(r) = mu_0 I / (2 pi r).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q3",
                "global_num": 236,
                "section": "Ch14: Magnetic Fields",
                "question": "A uniform magnetic field of magnitude B points out of the page in the region x > 0, and a uniform magnetic field of equal magnitude points into the page in the region x < 0, as shown in Figure 14.15. A particle with charge +q and mass m initially at the origin moves to the right with speed v. At which of the following points does the particle cross the y- axis? Figure 14.15",
                "options": [
                    "6 mv/qB",
                    "3 mv/qB",
                    "−3 mv/qB",
                    "−6 mv/qB",
                    "The particle will never cross the y-axis."
                ],
                "answer": "D",
                "explanation": "(D) The particle’s velocity is perpendicular to the magnetic field, so it moves in a circular path. The radius of the path can be calculated by equating the magnetic force to the centripetal force, qvB = mv2/r, to obtain r = mv/qB. Careful examination of the particle’s path reveals that it moves in the path shown in Figure 14.25. Therefore, it passes through the y-axis at multiples of −2r = −2 mv/qB. Figure 14.25",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q4",
                "global_num": 237,
                "section": "Ch14: Magnetic Fields",
                "question": "Two infinitely long wires carry equal currents of I into the page, as shown in Figure 14.24.",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "D",
                "explanation": "(D) The particle’s velocity is perpendicular to the magnetic field, so it moves in a circular path. The radius of the path can be calculated by equating the magnetic force to the centripetal force, qvB = mv2/r, to obtain r = mv/qB. Careful examination of the particle’s path reveals that it moves in the path shown in Figure 14.25. Therefore, it passes through the y-axis at multiples of −2r = −2 mv/qB. Figure 14.25",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q5",
                "global_num": 238,
                "section": "Ch14: Magnetic Fields",
                "question": "An electron moves in a magnetic field along a certain path at a constant speed. The magnetic field does no work on the electron if",
                "options": [
                    "the path is parallel to the magnetic field so that the magnetic force is zero",
                    "the path is perpendicular to the field so that the electron moves in uniform circular motion",
                    "the magnetic field is constant in space so that there is no induced electric field",
                    "the electron must move along a magnetic field line",
                    "None of the above conditions are necessary."
                ],
                "answer": "E",
                "explanation": "(E) The magnetic force is always perpendicular to velocity, so it can never do work (recall that dW = F \\cdot  d r).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q6",
                "global_num": 239,
                "section": "Ch14: Magnetic Fields",
                "question": "Figure 14.16 shows a cross section of a coaxial cable. A current of 1.0 A passes through the center of the cable, while a uniform current density of 1.0 A/m2 comes out of the page through the outer sheath of the cable. At what distance from the center of the cable is the magnetic field equal to zero? Figure 14.16",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "(D) The magnetic field is zero but not at the radii listed above.",
                    "Independent of the mass and charge distribution",
                    "The magnetic field is never zero except at infinity."
                ],
                "answer": "C",
                "explanation": "(C) According to Ampere’s law, the magnetic field is zero when the enclosed current is zero. For the inward current to balance the outward current, the outward current enclosed must equal 1.0 A. The enclosed outward current is 1.0 A when the Amperian path encloses an area of 1.0 m2 of the sheath (because the current density is 1.0 A/m2). Geometrically, 1 = \\pir2 − \\pi(1.0)2. Solving this equation for r yields choice (C).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q7",
                "global_num": 240,
                "section": "Ch14: Magnetic Fields",
                "question": "A charged particle moves in uniform circular motion due to a magnetic field perpendicular to the plane of its motion. Which of the graphs in Figure 14.17 illustrates the relationship between the charge’s velocity and the radius of its motion? (Assume that other variables, such as the magnetic field strength and the mass of the particle, are held constant.) Figure 14.17",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic force provides the centripetal force: Thus, v is a linear function of r that passes through the origin.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q8",
                "global_num": 241,
                "section": "Ch14: Magnetic Fields",
                "question": "A particle with a charge −q and mass m is moving with speed v through a mass spectrometer that contains a uniform outward magnetic field as shown in Figure 14.18. What is the magnitude and direction of the electric field required so that the net force on this particle is zero? Figure 14.18",
                "options": [
                    "E = vB, with a direction upward",
                    "E = vB, with a direction downward",
                    "E = B/v, with a direction upward",
                    "E = B/v, with a direction downward",
                    "E = B/v, with a direction into the page"
                ],
                "answer": "B",
                "explanation": "(B) For the magnetic force to cancel the electric force, |qv \\times  B| = qvB = qE, which simplifies to E = vB. The direction of the magnetic force on the charge is downward (opposite the direction indicated by the right- hand rule because the charge is negative). The electric force must point in the opposite direction, upward. However, since the charge is negative, in order to produce an upward electric force the field must point downward.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q9",
                "global_num": 242,
                "section": "Ch14: Magnetic Fields",
                "question": "Consider current passing through a short segment of a circular loop of wire as shown in Figure 14.19. The current passing through the rest of the circular wire produces a magnetic field at the location of the short segment, resulting in a magnetic force on the current-carrying segment of wire. Which of the following statements about this force is true? Figure 14.19",
                "options": [
                    "The force is to the right.",
                    "The force is to the left.",
                    "The magnetic field is zero because of symmetry, so there is no force.",
                    "The force is pointing out of the page.",
                    "The force is pointing into the page."
                ],
                "answer": "A",
                "explanation": "(A) First, imagine dividing the loop into little segments and considering the magnetic field due to each segment (using the right- hand rule for the direction of a magnetic field produced by a current- carrying wire or using the right-hand rule embedded in Biot-Savart’s law). Because each segment produces a magnetic field pointing out of the page at the segment of wire, the net magnetic field points out of the page. Using the right-hand rule again, the force this field exerts on the segment of wire is to the right. In general, each segment of the loop feels a force directed radially outward due to the rest of the loop.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q10",
                "global_num": 243,
                "section": "Ch14: Magnetic Fields",
                "question": "Two wires located along the x-axis carry equal currents into the page as shown in Figure 14.20. Which of the graphs shows the y-component of the magnetic field along the x-axis? Figure 14.20",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "D",
                "explanation": "(D) At the origin, the fields due to the two wires cancel and the net field is zero, eliminating choices (A) and (B). As each wire is approached from the right, the field decreases to negative infinity, and as each wire is approached from the left, the field increases to positive infinity. This is consistent only with choice (D).",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q11",
                "global_num": 244,
                "section": "Ch14: Magnetic Fields",
                "question": "A particle moves through an electric field as shown in Figure 14.21. What is the direction of the magnetic field needed to ensure that the particle experiences zero net force? Figure 14.21",
                "options": [
                    "into the page if the particle is positively charged, out of the page if the particle is negatively charged",
                    "into the page if the particle is negatively charged, out of the page if the particle is positively charged",
                    "into the page, irrespective of the particle’s charge",
                    "out of the page, irrespective of the particle’s charge",
                    "to the left, irrespective of the particle’s charge"
                ],
                "answer": "C",
                "explanation": "(C) Changing the sign of the charge of the particle changes the direction of both the electric and the magnetic forces, two changes that cancel each other out, so that in either case the magnetic field must point into the page in order to cancel out the electric field. (If the magnetic field is into the page, a positive charge will feel an electric force to the right and a magnetic force to the left. Alternatively, a negative charge will feel forces in the opposite directions.)",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q12",
                "global_num": 245,
                "section": "Ch14: Magnetic Fields",
                "question": "Three loops of equal radii carrying equal currents lie on planes parallel to the yz-plane as shown in Figure 14.22. Two of the loops are located equal distances d from the yz-plane as shown, while the third loop lies on the yz-plane. In what direction is the net magnetic field at the origin? Figure 14.22",
                "options": [
                    "The magnetic field is zero because of symmetry.",
                    "The magnetic field is in the +x-direction.",
                    "The magnetic field is in the −x-direction.",
                    "The magnetic field lies in the xz-plane.",
                    "The magnetic field lies in the xy-plane. Free-Response Questions"
                ],
                "answer": "B",
                "explanation": "(B) The two loops lying off the yz-plane produce equal and opposite fields which cancel each other. (The loop at x = −d produces a magnetic field in the −x-direction, while the loop at x = d produces a magnetic field in the +x-direction.) The net field is therefore equal to the field produced by the middle loop, which produces a field in the +x- direction. Free-Response 1. Given the cylindrical symmetry of this problem, Ampere’s Law is the way to go. As in Examples 14.4 and 14.5, the field lines will be concentric circles centered on the center of the inner conductor. The Amperian path will be a circle of radius r. The left-hand side of Ampere’s law for this path will be ∮B \\cdot  dl = B(2\\pir). All we need to do is to figure out the direction and magnitude of the enclosed current to solve each part of the problem. (a) The current density in the inner conductor is , positive because the current is flowing out of the page. Thus, the enclosed current is , and Ampere’s law says: The field is counterclockwise because the current is positive, pointing out of the page. (b) Now the enclosed current is the full value I, pointing out of the page, i.e., positive. Ampere’s law yields , just like a thin current- carrying wire. The field is counterclockwise. (c) This is the trickiest part of this problem as we are enclosing the entire inner conductor but only a portion of the outer conductor. First, we need to find the current density in the outer conductor. The cross- sectional area of the outer conductor is and the current density is , negative because the current flows into the page. The enclosed current is then given by I enclosed . Applying Ampere’s law we find: The field is positive, i.e., counterclockwise because the enclosed current is positive. (d) The enclosed current is now zero so the field is zero. 2. (a) The magnetic field due to an infinitely long wire is equal in magnitude to B = \\mu0I/2\\pir and has a direction indicated by the right-hand rule. The magnetic field along the x-axis is a superposition of the magnetic fields due to both of the wires, as shown in Figure 14.26. Figure 14.26 Adding the two vectors yields (b) This expression is given in Figure 14.27. In sketching the curve, first we note that the function has odd symmetry; mathematically, B(−x) = −B(x). Because x is raised to a greater power in the denominator than in the numerator, the function asymptotically approaches zero as x approaches positive or negative infinity. Finally, we note that the function is zero at the origin and that it passes through the origin with a negative slope. Figure 14.27 Note: A graphing calculator can also be used to sketch this curve: Simply graphing the function f(x) = −x/(1 + x2) is sufficient to get an idea of how this curve looks. (c) The magnetic force is always perpendicular to the velocity, so it never does any work. (Thus, the magnetic force can change only an object’s direction, not its speed.) Therefore, no work need be done by an external force to move the charge from infinity to the origin.",
                "difficulty": "medium",
                "topic": "Ch14: Magnetic Fields"
            },
            {
                "id": "ap-topic-physc-magnetism-q13",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "A charged particle with charge q and mass m enters a region of uniform magnetic field B with velocity v perpendicular to the field. The particle travels in a circle of radius R. What is the kinetic energy of the particle in terms of q, m, B, and R?",
                "options": [
                    "q^2 B^2 R^2 / (2 m)",
                    "q B R / (2 m)",
                    "q^2 B R^2 / m",
                    "1/2 q B v R",
                    "q B^2 R / (2 m)"
                ],
                "answer": "A",
                "explanation": "The magnetic force provides the centripetal acceleration: q v B = m v^2 / R ==> m v = q B R. Linear momentum is p = q B R. The kinetic energy is K = p^2 / (2 m) = (q B R)^2 / (2 m) = q^2 B^2 R^2 / (2 m).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q14",
                "global_num": 37,
                "section": "Diagnostic Test – E&M",
                "question": "A charged particle is launched into a region of uniform magnetic field. Given that the particle’s initial velocity has components parallel and perpendicular to the magnetic field, describe the particle’s path qualitatively.",
                "options": [
                    "a straight line",
                    "a circle",
                    "a helical (corkscrew) path",
                    "a parabolic path",
                    "none of the above"
                ],
                "answer": "C",
                "explanation": "(C) See the discussion of the motion of particles within magnetic fields in Chapter 14.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q15",
                "global_num": 38,
                "section": "Diagnostic Test – E&M",
                "question": "A point charge +Q is located at a fixed distance from a sphere. Compare the magnitude of the attractive force on the sphere if the sphere is (1) metal with net charge −Q, (2) metal with no net charge, (3) an insulator with net charge −Q, or (4) an insulator with no net charge.",
                "options": [
                    "charged metal = charged insulator > uncharged metal = uncharged insulator",
                    "charged metal > charged insulator > uncharged metal > uncharged insulator",
                    "charged insulator > charged metal > uncharged insulator > uncharged metal",
                    "charged insulator > charged metal > uncharged metal = uncharged insulator",
                    "charged insulator = charged metal > uncharged metal > uncharged insulator"
                ],
                "answer": "B",
                "explanation": "(B) This is a question about electrostatic induction. When a positive point charge is placed near a metal sphere (charged or uncharged), it attracts mobile electrons in the metal, causing the metal to become polarized such that more negative charge is on the side closer to the positive point charge and more positive charge is on the side farther away from the positive point charge. Because this charge redistribution results in moving negative charge closer to the positive point charge and moving positive charge farther away from the positive point charge, it increases the attractive force between the metal sphere and the positive point charge. Therefore, compared to an insulating sphere with the same net charge, a metal sphere always experiences a greater attractive force (such that charged metal > charged insulator and uncharged metal > uncharged insulator). Because this inductive effect is small compared to the effect of actually putting net charge −Q on the sphere, charged insulator > uncharged metal.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q16",
                "global_num": 39,
                "section": "Diagnostic Test – E&M",
                "question": "A bar moves to the right through a magnetic field as shown (the magnetic field points into the page). What is the potential difference between points A and B after equilibrium is established in the bar?",
                "options": [
                    "The difference is v2Bd, with A at higher potential.",
                    "The difference is v2Bd, with B at higher potential.",
                    "The difference is vBd, with A at higher potential.",
                    "The difference is vBd, with B at higher potential.",
                    "Because there is no loop, there is no flux, so there is no potential difference."
                ],
                "answer": "C",
                "explanation": "(C) The charges within the bar are moving in a magnetic field, so they feel a magnetic force. Using the conventional-current description, positive charges feel an upward force, causing positive charge to accumulate at the top end of the bar (leaving negative charge on the bottom end of the bar). This charge continues to accumulate until the electric force created by the charge imbalance cancels the magnetic force, mathematically qE = qvB. The magnitude of the potential difference between points A and B is then |V | = |−\\int E \\cdot  dr| = |vBd|. The electric field points down (producing a force that opposes the magnetic force), and recalling that electric fields point from high to low potential, we see that point A is at the higher potential. Further information about motional EMF can be found in Example 15.6.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q17",
                "global_num": 40,
                "section": "Diagnostic Test – E&M",
                "question": "Suppose that the electric potential in a region of space is a constant. What can you conclude about the magnitude of the electric field in this region?",
                "options": [
                    "It is a nonzero constant.",
                    "It is zero.",
                    "It is proportional to the distance from the origin.",
                    "It is given by",
                    "Not enough information is given. Questions 6–8 refer to a circular region of radius a with a uniform magnetic field pointing into the page that is increasing at a constant rate as shown. A circular loop of wire of radius r is centered on the middle of the region."
                ],
                "answer": "B",
                "explanation": "(B) The electric field is the negative derivative (with respect to the spatial coordinate) of the potential. Thus, with a constant potential the electric field must be zero.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q18",
                "global_num": 41,
                "section": "Diagnostic Test – E&M",
                "question": "Which of the graphs plots the induced EMF in the circular loop of wire shown as a function of its radius r?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "C",
                "explanation": "(C) The induced EMF depends on the change in the enclosed flux. Because the magnetic field is uniform, and changing at a constant rate, Therefore, the induced EMF depends only on the area of the loop through which magnetic field lines pass. For r < a, the area within the loop exposed to the magnetic field is simply the entire area of the loop, which is a quadratic function, A(r) = \\pir2. For r > a, increasing r does not increase the area exposed to the magnetic field (because the magnetic field through the additional area is zero). Therefore, for r > a the induced EMF is constant. The only graph that is quadratic for small r and then constant is choice (C). Calculating the induced EMF due to a magnetic field via Faraday’s law is discussed in Chapter 15.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q19",
                "global_num": 42,
                "section": "Diagnostic Test – E&M",
                "question": "Given that the resistance of the loop is proportional to the loop’s circumference, which of the graphs seen in question 6 shows the induced current as a function of the radius of the loop?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) The current is given by I = V/R. The resistance is proportional to the circumference of the loop, 2\\pir. Therefore, for r < a, V is proportional to r2 (as discussed in question 6), and 1/R is proportional to 1/r, so the product I = V/R is proportional to r (and thus its graph is a line passing through the origin). For r > a, V is constant and 1/R is proportional to 1/r, so the product I = V/R is inversely proportional to r. The only graph that satisfies these conditions is choice (A).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-magnetism-q20",
                "global_num": 43,
                "section": "Diagnostic Test – E&M",
                "question": "Two long, straight, parallel wires separated by distance d carry currents I1 and I2 in opposite directions (antiparallel). What is the nature and magnitude per unit length of the magnetic force between the two wires?",
                "options": [
                    "Attractive with magnitude mu_0 I1 I2 / (2 pi d)",
                    "Repulsive with magnitude mu_0 I1 I2 / (2 pi d)",
                    "Repulsive with magnitude mu_0 I1 I2 / (4 pi d^2)",
                    "Attractive with magnitude mu_0 I1 I2 / (2 pi d^2)",
                    "Zero because the currents are in opposite directions"
                ],
                "answer": "B",
                "explanation": "Using the right-hand rule, antiparallel currents produce a repulsive force between the wires. The magnetic field produced by wire 1 at the location of wire 2 is B1 = mu_0 I1 / (2 pi d). The magnetic force on a segment of length L of wire 2 is F = I2 L B1 = mu_0 I1 I2 L / (2 pi d). Therefore, the force per unit length is F/L = mu_0 I1 I2 / (2 pi d), and it is repulsive.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            }
        ]
    }
};
