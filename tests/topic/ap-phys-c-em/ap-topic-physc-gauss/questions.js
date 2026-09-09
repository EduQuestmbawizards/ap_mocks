// Specific Question Bank for Test: ap-topic-physc-gauss
const AP_TEST_DATA = {
    "ap-topic-physc-gauss": {
        "title": "AP Physics C: Gauss's Law & Electric Flux Symmetry",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "Gauss's Law",
        "timeLimitMinutes": 30,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-physc-gauss_q1",
                "global_num": 197,
                "section": "Ch11: Gauss's Law",
                "question": "Which of the following statements is correct?",
                "options": [
                    "If a gaussian surface contains zero net charge, the electric field at every location on the surface must be zero.",
                    "If net flux through a gaussian surface is zero, the surface must enclose no charge.",
                    "If the electric field at every location on a gaussian surface is zero, the surface must contain no net charge.",
                    "The electric field on a gaussian surface is generally not influenced by charge that is not enclosed by the surface.",
                    "Charges outside the gaussian surface affect the electric field on the surface and therefore affect the net flux through the surface."
                ],
                "answer": "C",
                "explanation": "(C) Choice (A) is correct if the charge distribution has appropriate symmetry but is not true in general. If the enclosed charge is zero, the net flux must be zero. However, this does not require the field at every point along the surface to be zero: It is possible for the flux to be positive in some locations along the gaussian surface and negative along others such that the net flux is zero (even if the field is not zero throughout the surface). Choice (B) is almost true. If the electric flux is zero, the net charge must be zero. However, it is possible that the surface contains charge as long as it contains equal amounts of positive and negative charge. Choice (C) is true. [The addition of the word net fixes the flaw in choice (B).] Choice (D) is completely false. Charge outside the gaussian surface does not affect the net electric flux through the surface, but it does affect the field along the gaussian surface. Choice (E) is also false. Although charges outside the gaussian surface affect the electric field on the surface, they do not affect the net flux through the surface.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q2",
                "global_num": 198,
                "section": "Ch11: Gauss's Law",
                "question": "A point charge +q is located at the center of an imaginary spherical Gaussian surface of radius R. If the radius of the Gaussian surface is doubled to 2R, what happens to the total electric flux Phi_E passing through the surface?",
                "options": [
                    "Phi_E is quadrupled",
                    "Phi_E is doubled",
                    "Phi_E remains unchanged",
                    "Phi_E is halved",
                    "Phi_E is reduced to one-fourth"
                ],
                "answer": "C",
                "explanation": "According to Gauss's Law, the total electric flux through any closed surface is Phi_E = q_enc / epsilon_0. The enclosed charge q_enc is +q regardless of the radius of the Gaussian surface. Therefore, doubling the radius does not change the total electric flux.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q3",
                "global_num": 199,
                "section": "Ch11: Gauss's Law",
                "question": "A spherical metal shell with zero net charge encloses a point charge. The magnitude of the surface charge density",
                "options": [
                    "is greater on the outside surface of the shell than on the inside surface of the shell",
                    "is greater on the inside surface of the shell than on the outside surface of the shell",
                    "is zero because the net charge is zero",
                    "is zero because the surface charge density of a metal must be zero",
                    "Not enough information is given."
                ],
                "answer": "B",
                "explanation": "(B) Because the electric field within a metal must be zero, any surface passing through a metal must enclose zero net charge. Imagine a surface passing through the metal shell. To enclose zero net charge, a charge opposite in magnitude to the enclosed charge must lie on the inner surface of the metal shell. Conservation of charge then requires that an equal and opposite charge lie on the outside surface of the shell. Therefore, both surfaces have nonzero charge density, and both surfaces have the same magnitude of charge. However, because the area of the outside surface is larger than the area of the inside surface, the magnitude of its charge density must be lower.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q4",
                "global_num": 200,
                "section": "Ch11: Gauss's Law",
                "question": "Two thin insulating sheets of charge flank a thick conducting sheet as shown in Figure 11.8. The charge densities on the insulating sheets are given by \\sigma1 = 10.0 \\times  10−6 C/m2, \\sigma2 = − 10.0 \\times  10−6 C/m2, while the conductor has zero net charge.",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "B",
                "explanation": "(B) Because the electric field within a metal must be zero, any surface passing through a metal must enclose zero net charge. Imagine a surface passing through the metal shell. To enclose zero net charge, a charge opposite in magnitude to the enclosed charge must lie on the inner surface of the metal shell. Conservation of charge then requires that an equal and opposite charge lie on the outside surface of the shell. Therefore, both surfaces have nonzero charge density, and both surfaces have the same magnitude of charge. However, because the area of the outside surface is larger than the area of the inside surface, the magnitude of its charge density must be lower.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q5",
                "global_num": 201,
                "section": "Ch11: Gauss's Law",
                "question": "Two metal spherical shells, with radii r1 > r2, each contain a charge +Q distributed on their metal surfaces. The two shells are located far apart from each other compared to their radii. When a wire connects the two shells, what happens?",
                "options": [
                    "Negative charge flows from sphere 1 to sphere 2.",
                    "Negative charge flows from sphere 2 to sphere 1.",
                    "No charge flows between the spheres.",
                    "An electric field builds with time within the wire.",
                    "No magnetic fields are produced."
                ],
                "answer": "B",
                "explanation": "(B) The potentials of spheres 1 and 2 are approximately Q/4\\pi\\epsilon0r1 and Q/4\\pi\\epsilon0r2, respectively, because the spheres are far apart and thus essentially isolated. Because r1 > r2, V1 < V2 and charge flows from the higher to the lower potential. The fact that a sphere of charge +Q with radius r has the same potential as a point a distance r from a point charge +Q is discussed in Example 11.7, part (b).",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q6",
                "global_num": 202,
                "section": "Ch11: Gauss's Law",
                "question": "Referring to the situation described in question 3 after the two spheres reach equilibrium, what is the ratio of their charges (assuming negligible charge accumulates on the wire)?",
                "options": [
                    "Q1/Q2 = r1/r2",
                    "Q1/Q2 = r2/r1",
                    "Q1/Q2 = (r1/r2)2",
                    "Q1/Q2 = (r2/r1)2",
                    "none of the above"
                ],
                "answer": "A",
                "explanation": "(A) In equilibrium, a conductor is an equipotential. The two spheres connected by a wire form a single conductor. Therefore, This equation can be rearranged into choice (A).",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q7",
                "global_num": 203,
                "section": "Ch11: Gauss's Law",
                "question": "A point charge −Q is inserted inside a cubic uncharged metal box. Which of the following statements is true?",
                "options": [
                    "A net charge of +Q is distributed on the inner surface of the box.",
                    "The electric field outside the box is unaffected by the box and is determined solely by the point charge.",
                    "The potential within the walls of the metal box is zero.",
                    "There is a net charge of +Q on the box.",
                    "The electric field inside the region bounded by the metal box is zero."
                ],
                "answer": "A",
                "explanation": "(A) Choice (A): Since the electric field within the metal is zero, a gaussian surface lying within the metal of the box experiences zero flux and thus must enclose zero net charge. Therefore, the charge on the inner surface of the metal must be the opposite of the point charge, +Q. Choice (B): Based on the above discussion, the net electric field outside the box arises from the charge −Q induced on the outer surface of the box. The distribution of this charge is not spherically symmetric (it has the symmetry of the box), and thus the field outside the box is not that of a point charge except at very large distances. Choice (C): The electric field is zero within the metal so that the potential is constant but not equal to zero. The electric field outside the box arises from the induced negative charge on the surface of the box, so the potential is negative. Choice (D): Conservation of charge requires the net charge on the box remain zero. Choice (E): Within the box, electric field lines begin on the inner surface of the box at the positive charge +Q and end on the point charge −Q. The electric field is not zero.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q8",
                "global_num": 204,
                "section": "Ch11: Gauss's Law",
                "question": "Two concentric thin spherical conducting shells have radii R1 and R2 (with R1 < R2). The inner shell carries net charge -Q and the outer shell carries net charge +2Q. What is the electric field magnitude E(r) in the region outside both shells (r > R2)?",
                "options": [
                    "Zero",
                    "k Q / r^2",
                    "2 k Q / r^2",
                    "3 k Q / r^2",
                    "k Q / (R2^2 - R1^2)"
                ],
                "answer": "B",
                "explanation": "For r > R2, a spherical Gaussian surface of radius r encloses both shells. The net enclosed charge is q_enc = (-Q) + (+2Q) = +Q. By Gauss's Law, oint E * dA = E * (4 pi r^2) = q_enc / epsilon_0 = Q / epsilon_0 ==> E(r) = k Q / r^2 directed radially outward.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q9",
                "global_num": 205,
                "section": "Ch11: Gauss's Law",
                "question": "Three nonconducting spheres all have the same net charge +Q and radius R. The charge is uniformly distributed throughout the volume of sphere A, uniformly distributed on the surface of sphere B, and distributed with a density proportional to the radial variable \\rho = cr throughout the volume of sphere C (c = Q/\\piR4). Which is a valid comparison of the electric fields at a distance r from the center of these spheres, assuming that r > R?",
                "options": [
                    "EA < EB < EC",
                    "EA < EC < EB",
                    "EC < EA < EB",
                    "EC < EB < EA",
                    "EB = EC = EA"
                ],
                "answer": "E",
                "explanation": "(E) Because the enclosed charge is the same in every case (for a gaussian sphere passing through the point of interest), the electric fields are the same.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q10",
                "global_num": 206,
                "section": "Ch11: Gauss's Law",
                "question": "Consider the three spheres introduced in question 7. Which of the following is a valid comparison of the potentials at the surface of each of the spheres?",
                "options": [
                    "VA < VB < VC",
                    "VA < VC < VB",
                    "VC < VA < VB",
                    "VC < VB < VA",
                    "VB = VC = VA"
                ],
                "answer": "E",
                "explanation": "(E) Because the electric field is the same outside each of the spheres, the potential at the surface of each of the spheres, which is an integral of this electric field, is also the same.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q11",
                "global_num": 207,
                "section": "Ch11: Gauss's Law",
                "question": "Three charged sheets lie parallel to the yz-plane as shown in Figure 11.5. Which graph shows the electric field as a function of position? Figure 11.5",
                "options": [
                    "graph (A)",
                    "graph (B)",
                    "graph (C)",
                    "graph (D)",
                    "graph (E) Free-Response Questions"
                ],
                "answer": "A",
                "explanation": "(A) Recall that the formula for the magnitude of an electric field due to a sheet of charge is E = \\sigma/2\\epsilon0. The magnitude of the electric field does not depend on the distance from the charged sheets (only on which side of the sheets the point is), so the field must remain constant within any region not divided by the plates, eliminating all the choices except (A). To find the electric field, compute the vector sum of the fields caused by each of the three sheets. Free-Response 1. (a) Applying Gauss’s law, As for the direction of the field, if the flux is positive, the electric field must be parallel to the directed area vector (pointing away from the surface), whereas if the flux is negative, the electric field will point toward the center of the surface. (b) The enclosed charge is related to the flux: (c) The flux through the two surfaces is equal (because they both contain the same enclosed charge). (d) Making a straightforward application of Gauss’s law: Again, if the flux is positive, the electric field will point away from the surface, whereas if the flux is negative, the electric field will point toward the center of the surface. (e) At r = b, the electric field is zero because the point is located inside a metal. Therefore, the net flux must be zero and the enclosed charge must also be zero. This implies that a charge −\\epsilon0\\Phi must exist on the inside surface of the metal shell. Charge conservation then requires a charge of Q + \\epsilon0\\Phi to reside on the outside surface of the metal shell. The flux through surface a and the field at r = a is unchanged because the surrounding charge is spherically symmetric and the enclosed charge is unchanged. 2. (a) The electric field inside a metal is zero in static equilibrium. (b) Each insulating sheet produces a field of magnitude |\\sigma|/2\\epsilon0, as shown in Example 11.1. In the region between the left sheet and the conductor, the field produced by the left sheet points to the right (away from the positive charge) as does the field produced by the right sheet (toward the negative charge). These two fields superpose to yield a net field of directed to the right. (c) As in part (b), the field between the conductor and the right insulating sheet is a superposition of the fields produced by the two sheets. The directions of these fields is identical to part (b), and thus the answer to this part is Eright = Eleft. (d) To find the charge densities on the surfaces of the conductor, we need to use Gauss’s law. We draw a box as in Example 11.1 that is bisected by the surface of the conductor; see Figure 11.9. We know that the electric field is horizontal, and thus there is no flux through the top and bottom of the box. We also know that the flux through the right side is zero because the field inside the conductor is zero. Thus, the only flux is through the left face and is given by \\Phi = Eleft A cos 180° = − Eleft A, where A is the area of the left face. Gauss’s law tells us that It makes sense that the charge density is negative. The field to the left of the conductor is pointing to the right and must terminate on negative charges so that there’s no field inside the conductor. Figure 11.9 (e) We solve this part in a similar fashion to part (d). If we draw a box that straddles the right face of the conductor, the only flux through the box will be through the right face and will be given by \\Phi = Eright A = Eright A. Because Eright = Eleft, in magnitude the charge density on the right surface of the conductor will be \\sigmaright = − \\sigmaleft = 1.0 \\times  10−5 C/m2. The charge density is positive because the field on the right side of the conductor points to the right, away from the conductor. Note that these equal and opposite charge densities will produce zero net field to the left and to the right of the conductor when they are superposed. Thus, they make no contribution to the superposition of fields in parts (b) and (c). 1After reading this chapter, you should be able to easily derive Coulomb’s law from Gauss’s law. Alternatively, deriving Gauss’s law from Coulomb’s law requires math beyond BC calculus. 2However, Gauss’s law has a greater range of validity, as it correctly describes the electric fields of moving charges, whereas Coulomb’s law is valid only for static charge distributions.",
                "difficulty": "medium",
                "topic": "Ch11: Gauss's Law"
            },
            {
                "id": "ap-topic-physc-gauss_q12",
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
                "explanation": "Positive charge flows from higher to lower electric potential. The surface potential of an isolated sphere is V = k Q / r. Charge flows from sphere 1 to sphere 2 if and only if V1 > V2 ==> Q1 / r1 > Q2 / r2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-gauss_q13",
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
                "id": "ap-topic-physc-gauss_q14",
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
                "id": "ap-topic-physc-gauss_q15",
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
                "id": "ap-topic-physc-gauss_q16",
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
                "id": "ap-topic-physc-gauss_q17",
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
                "id": "ap-topic-physc-gauss_q18",
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
                "id": "ap-topic-physc-gauss_q19",
                "global_num": 43,
                "section": "Diagnostic Test – E&M",
                "question": "A uniform electric field E is directed parallel to the axis of a right circular cylinder of radius R and length L. What is the net electric flux through the entire closed surface of the cylinder?",
                "options": [
                    "Zero",
                    "pi R^2 E",
                    "2 pi R^2 E",
                    "2 pi R L E",
                    "(pi R^2 + 2 pi R L) E"
                ],
                "answer": "A",
                "explanation": "The field lines enter through one flat circular face (flux = -E * pi R^2), pass parallel to the curved sides (flux = 0 because E is parallel to the surface), and exit through the opposite flat circular face (flux = +E * pi R^2). The net electric flux is -pi R^2 E + 0 + pi R^2 E = 0. Alternatively, by Gauss's Law, since no charge is enclosed, Phi_net = 0.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-gauss_q20",
                "global_num": 44,
                "section": "Diagnostic Test – E&M",
                "question": "The magnitude of the electric field inside a uniformly charged spherical shell",
                "options": [
                    "depends on the charge of the shell",
                    "depends on the radius of the shell",
                    "depends on the distance from the center of the sphere, r",
                    "depends on the permittivity of free space, \\epsilon0",
                    "is equal to the integral , where is a unit vector pointing from the differential charge dQ to the point in space (within the sphere) where the electric field is being measured"
                ],
                "answer": "E",
                "explanation": "(E) According to Gauss’s law (Chapter 11), the electric field inside a hollow sphere is zero because there is no enclosed charge. Therefore, the electric field is independent of the charge of the shell, the radius of the shell, the radial coordinate, and the permittivity of free space; it is zero inside the sphere independent of any of these factors. Note that the electric field is always given by the equation in choice (E).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            }
        ],
        "id": "ap-topic-physc-gauss"
    }
};
