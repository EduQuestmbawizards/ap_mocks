// Specific Question Bank for Test: ap-topic-physc-induction
const AP_TEST_DATA = {
    "ap-topic-physc-induction": {
        "title": "AP Physics C: Electromagnetic Induction, Faraday's & Lenz's Law",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "Electromagnetic Induction",
        "timeLimitMinutes": 30,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-physc-induction-q1",
                "global_num": 246,
                "section": "Ch15: Electromagnetism",
                "question": "An external force pushes a square loop of wire through a region of constant magnetic field as shown in Figure 15.9. Which of the following is a plot of the magnetic flux as a function of the position of the loop? Figure 15.9",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) The magnetic flux is proportional to the portion of the loop’s area that is exposed to the magnetic field. This area increases linearly as the loop enters the field, remains constant while the loop is completely within the field, and decreases as the loop exits the field.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q2",
                "global_num": 247,
                "section": "Ch15: Electromagnetism",
                "question": "A planar loop of wire with area A and resistance R is positioned perpendicular to a uniform magnetic field directed into the page. If the magnitude of the magnetic field decreases at a constant rate dB/dt = -alpha, what is the direction and magnitude of the induced current in the loop?",
                "options": [
                    "Clockwise with magnitude alpha A / R",
                    "Counterclockwise with magnitude alpha A / R",
                    "Counterclockwise with magnitude alpha A R",
                    "Clockwise with magnitude alpha A R",
                    "Zero because the field is uniform"
                ],
                "answer": "A",
                "explanation": "By Faraday's Law, the induced EMF is EMF = -dPhi_B/dt = -A (dB/dt) = A alpha. By Lenz's Law, the induced current must oppose the change in flux. Because the inward magnetic flux is decreasing, the induced current must produce an inward magnetic field to support the flux. By the right-hand rule, a clockwise current produces an inward magnetic field. The current magnitude is I = EMF / R = alpha A / R.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q3",
                "global_num": 248,
                "section": "Ch15: Electromagnetism",
                "question": "A square conducting loop of side length L, mass m, and resistance R moves at constant speed v into a region of uniform magnetic field B directed perpendicular to the loop plane. What is the magnitude of the magnetic braking force exerted on the loop while it is entering the field?",
                "options": [
                    "B^2 L^2 v / R",
                    "B L v / R",
                    "B^2 L v^2 / R",
                    "B^2 L^2 v^2 / R",
                    "Zero"
                ],
                "answer": "A",
                "explanation": "While entering the field, the flux increases at rate dPhi_B/dt = B L v, inducing EMF = B L v. The induced current is I = EMF / R = B L v / R. The magnetic force on the leading edge is F = I L B = (B L v / R) L B = B^2 L^2 v / R. By Lenz's Law, this force opposes the motion (acts as a braking force).",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q4",
                "global_num": 249,
                "section": "Ch15: Electromagnetism",
                "question": "Referring to the situation in question 1, which of the plots in Figure 15.9 shows the force due to the field on the wire, now carrying induced current (designating rightward force as positive)?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "E",
                "explanation": "(E) As the loop both enters and leaves the magnetic field, the forces produced by the field on the top and bottom of the current-carrying loop cancel each other. The only vertical wire (on the right segment as the loop enters and on the left segment as it exits) exposed to the magnetic field carries current toward the bottom of the page, producing a net leftward force. Choice (E) is the only choice that is negative as the loop both enters and leaves the loop. Answer check: It makes sense that the force is constant, because the magnitude of the induced current is constant.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q5",
                "global_num": 250,
                "section": "Ch15: Electromagnetism",
                "question": "A conducting rod of length L and mass m slides down frictionless parallel conducting rails tilted at an angle theta to the horizontal in a uniform vertical magnetic field B. A resistor R connects the rails. What is the terminal speed v_t of the rod?",
                "options": [
                    "m g R sin(theta) / (B^2 L^2 cos^2(theta))",
                    "m g R tan(theta) / (B^2 L^2)",
                    "m g R / (B^2 L^2)",
                    "m g R cos(theta) / (B^2 L^2 sin(theta))",
                    "m g R sin^2(theta) / (B^2 L^2)"
                ],
                "answer": "A",
                "explanation": "The component of the magnetic field perpendicular to the rails is B cos(theta). The motional EMF is EMF = B cos(theta) L v, giving induced current I = B cos(theta) L v / R. The horizontal magnetic force is F_mag = I L B = B^2 L^2 v cos(theta) / R. The component of F_mag opposing motion along the incline is F_mag cos(theta) = B^2 L^2 v cos^2(theta) / R. At terminal speed, this balances the component of gravity down the incline: m g sin(theta) = B^2 L^2 v_t cos^2(theta) / R ==> v_t = m g R sin(theta) / (B^2 L^2 cos^2(theta)).",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q6",
                "global_num": 251,
                "section": "Ch15: Electromagnetism",
                "question": "Consider Figure 15.10. The current in the straight wire varies with time, inducing a current in the loop. Which of the following statements is true about the magnetic force exerted on the loop of wire due to the straight wire? Figure 15.10",
                "options": [
                    "The force is to the right if I is increasing and to the left if I is decreasing.",
                    "The force is to the left if I is increasing and to the right if I is decreasing.",
                    "The force is to the left regardless of whether I is increasing or decreasing.",
                    "The force is to the right regardless of whether I is increasing or decreasing.",
                    "The force is zero because the force on each side of the rectangular loop cancels the force on the opposite side of the loop."
                ],
                "answer": "A",
                "explanation": "(A) The force on the top of the loop cancels the force on the bottom of the loop, but the force on the left side of the loop dominates over the force on the right side of the loop because the left side is closer to the current-carrying wire and thus experiences a greater magnetic field. Therefore, whether I is increasing or decreasing, the net force on the loop is in the same direction as the force on the left side of the loop. The rest of the problem consists of applying Lenz’s law in each situation (to find the direction of the induced current on the loop) and then using the right-hand rule to determine the direction of the force on the left side of the loop (F = Il \\times  B). You should convince yourself that the following are true:",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q7",
                "global_num": 252,
                "section": "Ch15: Electromagnetism",
                "question": "A long solenoid with n turns per unit length and radius R carries a time-varying current I(t) = I0 sin(omega t). What is the magnitude of the induced electric field E(r) at a radial distance r < R from the central axis inside the solenoid?",
                "options": [
                    "1/2 mu_0 n I0 omega r cos(omega t)",
                    "mu_0 n I0 omega r cos(omega t)",
                    "1/2 mu_0 n I0 r sin(omega t)",
                    "mu_0 n I0 omega R^2 / r cos(omega t)",
                    "Zero"
                ],
                "answer": "A",
                "explanation": "Inside the solenoid, the magnetic field is B(t) = mu_0 n I(t) = mu_0 n I0 sin(omega t). Using Faraday's Law in integral form: oint E * dl = -dPhi_B/dt. For a circular path of radius r < R: E (2 pi r) = -pi r^2 (dB/dt) = -pi r^2 (mu_0 n I0 omega cos(omega t)). The magnitude of the induced electric field is E(r) = 1/2 mu_0 n I0 omega r cos(omega t).",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q8",
                "global_num": 253,
                "section": "Ch15: Electromagnetism",
                "question": "A uniform magnetic field points out of the page through a circular area as shown in Figure 15.11. If the magnetic field strength is decreasing, the electric field at point P Figure 15.11",
                "options": [
                    "points upward",
                    "points downward",
                    "points to the left",
                    "points to the right",
                    "is zero because of symmetry"
                ],
                "answer": "A",
                "explanation": "(A) Imagine a loop of wire concentric with the circular region of magnetic field but passing through point P. From Lenz’s law, current will flow counterclockwise through the loop. Because the flow of current is parallel to the electric field along the loop and because of the symmetry considerations discussed in Example 15.4 that establish that the radial component of the field is zero, the field will point up, so choice (A) is correct.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q9",
                "global_num": 254,
                "section": "Ch15: Electromagnetism",
                "question": "A metal rod of length L rotates with constant angular velocity omega about an axis through one end, perpendicular to a uniform magnetic field B. What is the induced potential difference (motional EMF) between the two ends of the rod?",
                "options": [
                    "1/2 B omega L^2",
                    "B omega L^2",
                    "1/2 B omega^2 L",
                    "2 B omega L^2",
                    "Zero"
                ],
                "answer": "A",
                "explanation": "An element of the rod of length dr at distance r from the pivot moves with linear speed v = omega r. The motional EMF across dr is d(EMF) = v B dr = B omega r dr. Integrating from r = 0 to r = L: EMF = int_0^L B omega r dr = 1/2 B omega L^2.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q10",
                "global_num": 255,
                "section": "Ch15: Electromagnetism",
                "question": "A circular loop of wire of diameter d moves with constant velocity across a region with a constant magnetic field as in Figure 15.12. Choosing counterclockwise current as positive, which of the graphs in Figure 15.13 is a plot of the induced current as a function of the x- coordinate of point P on the loop? Figure 15.12 Figure 15.13",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) From x = 0 to x = d, the flux into the page across the loop is increasing, so a counterclockwise current is produced to oppose this increase in flux. This eliminates choices (B), (D), and (E). The magnitude of the current depends on the change in flux per unit time, which depends on the additional amount of area that enters the magnetic field region per unit time. The rate at which area enters the magnetic field is proportional to the height of the portion of the loop in the field region. This height is a continuous nonlinear function of the location of P. Thus, of the two remaining choices, (A) is correct.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q11",
                "global_num": 256,
                "section": "Ch15: Electromagnetism",
                "question": "Consider the circuit shown in Figure 15.19, which has a mass m and is free to move up and down. Figure 15.19 (a) Assuming that the loop starts from rest and initially accelerates upward, what is the magnitude of the induced EMF as a function of the loop’s speed? (b) What is the current as a function of the loop’s speed? (c) What is the net force on the loop as a function of its speed? (Designate upward as positive.) (d) What is the loop’s terminal speed? (e) Considering the fact that the bottom of the loop eventually passes into region 1, qualitatively describe the motion of the loop when it is entirely in region 1. 1It may seem that there are a lot of Faraday’s law problems. There are good reasons for this: (1) Faraday’s law problems are very common on AP exams, rivaling Gauss’s law problems for popularity with about one per exam, and (2) although these problems are centered around Faraday’s law, they review other topics as well.",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "A",
                "explanation": "(A) From x = 0 to x = d, the flux into the page across the loop is increasing, so a counterclockwise current is produced to oppose this increase in flux. This eliminates choices (B), (D), and (E). The magnitude of the current depends on the change in flux per unit time, which depends on the additional amount of area that enters the magnetic field region per unit time. The rate at which area enters the magnetic field is proportional to the height of the portion of the loop in the field region. This height is a continuous nonlinear function of the location of P. Thus, of the two remaining choices, (A) is correct.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q12",
                "global_num": 257,
                "section": "Ch15: Electromagnetism",
                "question": "A loop of wire is moved toward a pole of a bar magnet as shown in Figure 15.14. The force on the loop is Figure 15.14",
                "options": [
                    "toward the magnet if the loop is closer to the north pole of the magnet and away from the magnet if the loop is closer to the south pole of the magnet",
                    "toward the magnet if the loop is closer to the south pole of the magnet and away from the magnet if the loop is closer to the north pole of the magnet",
                    "toward the magnet regardless of which pole of the magnet is closer to the loop",
                    "away from the magnet regardless of which pole of the magnet is closer to the loop",
                    "zero because of vector cancellation and symmetry considerations Free-Response Questions 1.1 A rectangular loop of wire (resistance R, mass m) levitates below an infinitely long current-carrying wire as shown in Figure 15.15. Figure 15.15 (a) If a current Iwire flows through the current-carrying wire, what is the magnitude of the magnetic flux in the loop? (b) If the current in the wire is decreasing at a rate of dIwire/dt, what is the magnitude and direction of the induced EMF in the loop? (c) What is the induced current in the loop? (d) What is the magnetic force on the loop? (Give magnitude and direction.)"
                ],
                "answer": "D",
                "explanation": "(D) First, let’s consider the situation where the north pole is closer to the loop, as shown in Figure 15.20. Recall that, outside the magnet, the field lines point away from the north pole and the magnitude of the field increases as we approach the poles. Therefore, as you move the loop closer to the north pole, the upward flux through the loop increases, inducing a current in the indicated direction (clockwise as viewed from above). Using the right-hand rule, the force on any differential length of wire points upward and toward the center of the loop. Because of symmetry, the horizontal components of these differential forces cancel, leaving a net force away from the magnet. Therefore, if the loop is closer to the north pole, the force is away from the magnet, eliminating choices (E), (A), and (C). Figure 15.20 Another way to realize that the loop repels the magnet is to sketch the magnetic field lines produced by the current induced in the loop, as shown in Figure 15.21. The current through the loop creates a magnetic dipole much like that created by a bar magnet, with the north end of the dipole on the bottom, closer to the north pole of the magnet. Because like magnetic poles repel, the loop is expected to repel the magnet. Figure 15.21 What if the loop is closer to the south pole of the magnet? The field lines, and therefore the direction of the current, will be reversed. However, because both the magnetic field and the current have reversed their directions, these opposite signs will cancel in the equation dF = Idl \\times  B and the same force will be produced. Therefore, the correct answer is (D). The most powerful and simple way to solve this problem, however, is to realize that currents are induced such that the force on the current- carrying wire caused by the external magnetic field always tries to oppose the change in magnetic flux. For example, when a loop is being pushed into a region of nonzero magnetic field, the magnetic force on the loop (now carrying induced current) always tries to oppose the motion of the loop into the region of nonzero magnetic field. This is a restatement of Lenz’s law at the force level. The justification of this statement is similar to the justification of Lenz’s law: If the opposite were true, one could imagine a situation where conservation of energy was violated (the loop would move with ever-increasing speed into the region of the magnetic field with kinetic energy produced from no identifiable source). Free-Response 1. (a) Because the magnetic field within the loop is not constant, we must integrate. To mirror the cylindrical symmetry of the magnetic field, we divide the loop into differential rectangles running parallel to the infinite wire, with dimensions dr by l and area dA = ldr. The differential flux through a given differential area is then (given that the magnetic field due to an infinite wire is . Integrating, (b) According to Faraday’s law, Decreasing current causes a decrease of flux into the page, and the current flows clockwise to counter this decrease in inward flux. (c) (d) Given the direction of the current, the direction of the magnetic field, and the equation F = lI \\times  B, the following are the directions of the force on all the wire segments: top segment, upward force; bottom segment, downward force; left segment, leftward force; right segment, rightward force. As a result of symmetry, the rightward and leftward forces have the same magnitude and cancel. However, since the top segment is closer to the wire than the bottom segment, it experiences a larger force, producing a net upward force on the loop. Quantitatively, this force (designating positive as upward) is 2. (a) As the loop enters the field, during a time interval dt, the area of the loop exposed to the field changes by a differential strip with height l and thickness dx (and thus, area dA = ldx). The change in flux during dt is thus (choosing flux out of the page as positive and the direction of dA as out of the page) Applying Faraday’s law, Alternative solution: Letting x be the horizontal length of the loop exposed to the magnetic field, As the loop exits the field, the rate at which the flux changes is the same, and thus the EMF has the same magnitude (the only difference is that the outward flux is decreasing rather than increasing). (b) (c) As the loop enters the field, the current is clockwise; as the loop exits the field, the current is counterclockwise (Lenz’s law). (d) The magnetic field exerts a force on current-carrying wires equal to F = Il \\times  B. The forces on the top and bottom segments of the loop always cancel, and the net force is due to the vertical segment within the magnetic field, with magnitude As the loop enters the region of the field, the induced current flows clockwise, and thus current flows downward through the segment exposed to the magnetic field (the right side of the square). As the loop exits the field, current flows counterclockwise, yet it also flows downward through the segment exposed to the magnetic field (the left side of the square). Thus, current is always flowing downward through the vertical segment exposed to the magnetic field, and the direction is thus always to the left (opposite the velocity). 3. (a) During a time increment dt, the area of the circuit increases by a differential strip of area, dA = A dx. The increase in flux during this time dt is equal to the flux through the new strip, which equals d\\Phi = B dA = Bl dx (setting dA pointing out of the page). Therefore, applying Faraday’s law: (b) According to Ohm’s law, (c) The bar experiences two forces: a gravitational force equal to mg, and the force exerted by a magnetic field on a current-carrying wire. Designating the downward direction as positive, What about the force exerted by the magnetic field? Lenz’s law requires the current to flow in a clockwise direction, making this force point upward. The acceleration is then simply the net force divided by the mass: (d) At the terminal velocity the acceleration is zero. Therefore, we can solve for the terminal velocity by setting the acceleration equal to zero: Answer check: Larger B and larger l or smaller R produce a greater magnetic force and thus a smaller terminal velocity. Greater mass and greater g produce a larger gravitational force and thus a larger terminal velocity. 4. (a) (i) Making a straightforward application of Faraday’s law, (ii) (iii) Because the magnetic field outside an infinite solenoid is zero, the flux and EMF are the same as in part (a)(ii). (b) (i) (For further explanation, see Example 15.4.) (ii) Similarly, (iii) Again, (c) If f(t) is increasing, flux into the page is increasing. To oppose this increase in flux, the induced current flows counterclockwise and the electric field (parallel to the current) points tangentially to the path in the counterclockwise direction (since the current flows in the direction of the electric field). (d) No. The induced electric field lines are circles, so the electric field has no radial component. Since there is no force capable of providing centripetal force, the charge cannot move in a circular path. 5. (a) As the bar begins to rotate, the positive current-carrying charges feel a magnetic force, F = qv \\times  B, pointing along the rod toward the pivot. The positive charges are driven toward the pivot, leaving negative charge at the opposite end. This uneven charge distribution creates an electric force that will eventually cancel out the magnetic force and cause the current to stop. (b) In Example 15.6 we saw that the induced EMF in a bar moving to the right at speed v is given by | | = Bℓv. In the present case, we must use this equation in a differential form, |d | = B(dr)v for a small segment dr of the rod (see Figure 15.22). The total EMF will be the integral over the differential EMFs. The velocity of the small segment is given by v = \\omegar. Thus, (c) The electric force induced by the uneven charge distribution points away from the pivot where the positive charge accumulates. Thus, the pivot is at higher potential compared to the other end of the rod. Figure 15.22 6. (a) During a time dt, the area exposed to the magnetic field increases by a differential strip of area dA = lvdt, where v is the speed of the loop and the magnetic flux increases by an amount d\\PhiB = B ⋅ dA = Blv dt. Therefore, the induced EMF is (b) From Lenz’s law, the EMF opposes the battery (and pushes current counterclockwise). Therefore, the voltage across the resistor is The current is then (c) The magnitude of the upward magnetic force is The gravitational force is −mg, so the net force is (d) At the terminal speed, the net force is zero. Therefore, (e) When the loop is entirely within region 1, there is no net magnetic force on the loop (because the force on each segment is canceled by the opposite segment). With no magnetic force, the net force is due to gravity alone, so the loop behaves as if in free fall (with an initial upward velocity given by its velocity as the bottom of the loop enters region 1) and the y(t) function is parabolic.",
                "difficulty": "medium",
                "topic": "Ch15: Electromagnetism"
            },
            {
                "id": "ap-topic-physc-induction-q13",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "Two metal spheres with radii r1 and r2 carrying positive charges Q1 and Q2 are separated by a very large distance. A thin wire connects the two spheres. Under what condition will positive charge flow from sphere 1 to sphere 2?",
                "options": [
                    "Q1 > Q2",
                    "r1 > r2",
                    "Q1 / r1 > Q2 / r2",
                    "Q1 r1 > Q2 r2",
                    "Q1 / r1^2 > Q2 / r2^2"
                ],
                "answer": "C",
                "explanation": "Charge flows from higher to lower electric potential: V = k Q / r. Positive charge flows from 1 to 2 if V1 > V2 ==> Q1 / r1 > Q2 / r2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-induction-q14",
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
                "id": "ap-topic-physc-induction-q15",
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
                "id": "ap-topic-physc-induction-q16",
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
                "id": "ap-topic-physc-induction-q17",
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
                "id": "ap-topic-physc-induction-q18",
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
                "id": "ap-topic-physc-induction-q19",
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
                "id": "ap-topic-physc-induction-q20",
                "global_num": 43,
                "section": "Diagnostic Test – E&M",
                "question": "A circular conducting loop of radius R and resistance r lies in the xy-plane in a uniform magnetic field B(t) = B0 (1 - alpha t) k. What is the induced current in the loop?",
                "options": [
                    "pi R^2 B0 alpha / r",
                    "2 pi R B0 alpha / r",
                    "pi R^2 B0 / (r alpha)",
                    "Zero",
                    "pi R^2 B0 (1 - alpha t) / r"
                ],
                "answer": "A",
                "explanation": "The magnetic flux through the loop is Phi_B(t) = B(t) A = B0 (1 - alpha t) (pi R^2). The induced EMF is EMF = |-dPhi_B/dt| = pi R^2 B0 alpha. The induced current is I = EMF / r = pi R^2 B0 alpha / r.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            }
        ]
    }
};
