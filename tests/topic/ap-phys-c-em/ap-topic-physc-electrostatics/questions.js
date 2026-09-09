// Specific Question Bank for Test: ap-topic-physc-electrostatics
const AP_TEST_DATA = {
    "ap-topic-physc-electrostatics": {
        "title": "AP Physics C: Electrostatics, Coulomb's Law & Electric Potential",
        "testType": "Topic Test",
        "subject": "ap-phys-c-em",
        "topic": "Electrostatics",
        "timeLimitMinutes": 30,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-physc-electrostatics-q1",
                "global_num": 182,
                "section": "Ch10: Electrostatics",
                "question": "Two experiments are performed using a pair of solid metal spheres connected by a switch, as shown in Figure 10.9. Both spheres are grounded before each experiment so that they initially have no charge. Figure 10.9 Experiment I: A positively charged rod is brought near sphere A while the switch is closed, the switch is opened, and the rod is then removed. Experiment II: A positively charged rod is touched to sphere A while the switch is closed, the switch is opened, and the rod is then removed. Which of the following describes the charge on the spheres after the two experiments?",
                "options": [
                    "After experiment I both spheres have no charge; after experiment II both spheres are positively charged.",
                    "After experiment I sphere A is negatively charged and sphere B is positively charged; after experiment II sphere A is positively charged and sphere B is negatively charged.",
                    "After experiment I sphere A is negatively charged and sphere B is positively charged; after experiment II both spheres are positively charged.",
                    "After both experiments, both spheres are positively charged.",
                    "After both experiments, sphere A is positively charged and sphere B is negatively charged."
                ],
                "answer": "C",
                "explanation": "(C) Experiment I involves electrostatic induction. When the positively charged rod is brought near sphere A, it attracts electrons from both spheres, causing sphere A to have a slight negative charge and sphere B to have a slight positive charge. Because the switch is opened before the rod is removed, the charge never has a chance to redistribute itself, so after the experiment is over, sphere A is left negatively charged and sphere B is left positively charged. Experiment II involves conduction. The rod removes a large negative charge from the two-sphere system, leaving both spheres with a large net positive charge. Although induction effects cause the positive charge on sphere B to be slightly larger than the charge on sphere A, in general conduction imparts a much greater charge than induction, so the net charge of both spheres after the switch is opened is positive. Note that choice (D) can be immediately eliminated by conservation of charge. Because the rod never touches the sphere system in experiment I, the amount of charge on the two spheres together must remain constant; it is impossible for both to have a positive or a negative charge at any point during or after experiment I.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q2",
                "global_num": 183,
                "section": "Ch10: Electrostatics",
                "question": "Two identical conducting spheres A and B are mounted on insulating stands. Initially, sphere A carries positive charge +Q and sphere B is uncharged. The two spheres are brought into contact, allowed to reach equilibrium, and then separated. What is the final charge on sphere A?",
                "options": [
                    "Zero",
                    "+Q / 4",
                    "+Q / 2",
                    "+Q",
                    "+2Q"
                ],
                "answer": "C",
                "explanation": "When two identical conducting spheres touch, charge redistributes equally between them to equalize their electric potentials. The total initial charge is Q_total = +Q + 0 = +Q. By symmetry, the charge divides equally: Q_A = Q_B = Q_total / 2 = +Q/2.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q3",
                "global_num": 184,
                "section": "Ch10: Electrostatics",
                "question": "Which of the three distributions in Figure 10.10 has a point or points where the potential is zero (excluding \\pm \\infty but assuming that the potential equals zero at these latter points)? Figure 10.10",
                "options": [
                    "distribution I only",
                    "distribution II only",
                    "distribution III only",
                    "distributions I and II, only",
                    "distributions I, II, and III"
                ],
                "answer": "B",
                "explanation": "(B) For any distribution of two point charges, the charges must have opposite signs for there to be a location(s) where the potential is zero. (Otherwise, both charges will never be able to cancel out each other’s contribution.) In distribution II, the potential is zero in between the two charges, much closer to the −q charge because this charge has a smaller magnitude (which can be compensated for by having a greater 1/r term in its potential contribution), and also to the left of the −q charge. This behavior is illustrated in Figure 10.17, which shows the potential due to point charges. Figure 10.17",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q4",
                "global_num": 185,
                "section": "Ch10: Electrostatics",
                "question": "Two point charges +4q and -q are fixed on the x-axis at x = 0 and x = d, respectively. At what finite position on the x-axis is the net electric field equal to zero?",
                "options": [
                    "x = d / 2",
                    "x = 2d",
                    "x = -d",
                    "x = 3d",
                    "There is no point on the x-axis where the field is zero"
                ],
                "answer": "B",
                "explanation": "For the net field to be zero, the electric fields of the two opposite charges must point in opposite directions and have equal magnitudes. Between x = 0 and x = d, both fields point in the +x direction (no cancellation). To the left of x = 0 (x < 0), the larger charge +4q is always closer than -q, so its field always dominates. To the right of -q (x > d), the fields point in opposite directions. Setting magnitudes equal: k(4q)/x^2 = k(q)/(x - d)^2 ==> 2/x = 1/(x - d) ==> 2x - 2d = x ==> x = 2d.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q5",
                "global_num": 186,
                "section": "Ch10: Electrostatics",
                "question": "Consider the potential vs position function shown in Figure 10.11 (the potential asymptotically approaches zero as x goes to + infinity or − infinity). At which of the points—A, B, C, D, or E—does a positive charge feel the greatest force in the +x-direction? Figure 10.11",
                "options": [
                    "point A",
                    "point B",
                    "point C",
                    "point D",
                    "point E"
                ],
                "answer": "B",
                "explanation": "(B) The electric field is the negative slope of the potential curve, Ex = −dV/dx, so the place where the force to the right (the positive force) is maximized is the place where the slope of the potential curve has a negative value with the greatest magnitude, at point B.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q6",
                "global_num": 187,
                "section": "Ch10: Electrostatics",
                "question": "The electric potential V in a region of space depends only on the x-coordinate and is given by V(x) = 4x^2 - 3x + 2, where V is in volts and x is in meters. What is the x-component of the electric field at x = 2.0 m?",
                "options": [
                    "+13 N/C",
                    "-13 N/C",
                    "+16 N/C",
                    "-8 N/C",
                    "+8 N/C"
                ],
                "answer": "B",
                "explanation": "The relationship between electric field and electric potential in one dimension is E_x = -dV/dx. Differentiating V(x): dV/dx = d/dx (4x^2 - 3x + 2) = 8x - 3. At x = 2.0 m: dV/dx = 8(2.0) - 3 = 13 V/m. Therefore, E_x = -13 V/m (or -13 N/C).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q7",
                "global_num": 188,
                "section": "Ch10: Electrostatics",
                "question": "In the five charge distributions shown in Figure 10.12, all have identical square geometry and all charges have identical magnitudes q. In how many of the charge distributions is the electric field zero at the center of the square? Figure 10.12",
                "options": [
                    "one",
                    "two",
                    "three",
                    "four",
                    "five"
                ],
                "answer": "C",
                "explanation": "(C) Because of symmetry, distributions (b), (d), and (e) all have an electric field of zero at the center of the square. Said another way: If we pair charges along the diagonals of the square, we will see that in distributions (b), (d), and (e), each pair consists of two charges of the same sign and hence produce a net field of zero at the center of the square.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q8",
                "global_num": 189,
                "section": "Ch10: Electrostatics",
                "question": "Four point charges of equal magnitude Q are placed at the four corners of a square of side length a. Two opposite corners have positive charges +Q, and the other two opposite corners have negative charges -Q. What is the net electric potential V at the center of the square (taking V = 0 at infinity)?",
                "options": [
                    "4 k Q / a",
                    "2 sqrt(2) k Q / a",
                    "Zero",
                    "-2 sqrt(2) k Q / a",
                    "sqrt(2) k Q / a"
                ],
                "answer": "C",
                "explanation": "Electric potential is a scalar quantity given by V = sum (k q_i / r_i). The center of the square is equidistant from all four corners, at distance r = (a sqrt(2)) / 2 = a / sqrt(2). The total potential at the center is V = k/r * (+Q + Q - Q - Q) = k/r * (0) = 0.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q9",
                "global_num": 190,
                "section": "Ch10: Electrostatics",
                "question": "The axis of the cone in Figure 10.13 lies on the y-axis. The cone has a uniform charge density. Based on symmetry considerations alone, in what direction(s) can the electric field at the origin point? (The origin lies within the cone along its axis of symmetry.) Figure 10.13",
                "options": [
                    "the x-axis",
                    "the y-axis",
                    "the z-axis",
                    "anywhere along the xy-plane",
                    "anywhere along the yz-plane"
                ],
                "answer": "B",
                "explanation": "(B) Imagine describing to a friend what direction the electric field points; the only description you could give would be “toward the tip of the cone” or “away from the tip of the cone” (i.e., along the y-axis).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q10",
                "global_num": 191,
                "section": "Ch10: Electrostatics",
                "question": "A thin non-conducting rod of length L carries a uniformly distributed positive charge Q. Which of the following correctly expresses the electric potential V at a point P located on the perpendicular bisector of the rod at a distance y from its center (taking V = 0 at infinity)?",
                "options": [
                    "V is proportional to 1 / y^2",
                    "V = (k Q / L) * ln( (sqrt((L/2)^2 + y^2) + L/2) / (sqrt((L/2)^2 + y^2) - L/2) )",
                    "V = k Q / y",
                    "V is zero due to symmetry",
                    "V = k Q / (y^2 + (L/2)^2)"
                ],
                "answer": "B",
                "explanation": "Let the rod lie along the x-axis from x = -L/2 to x = +L/2 with linear charge density lambda = Q/L. An infinitesimal element dx at position x carries charge dq = lambda dx and is at distance r = sqrt(x^2 + y^2) from point (0, y). The potential is V = int k dq / r = (k Q / L) int_{-L/2}^{L/2} dx / sqrt(x^2 + y^2) = (k Q / L) * [ln(x + sqrt(x^2 + y^2))]_{-L/2}^{L/2} = (k Q / L) * ln( (sqrt((L/2)^2 + y^2) + L/2) / (sqrt((L/2)^2 + y^2) - L/2) ).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q11",
                "global_num": 192,
                "section": "Ch10: Electrostatics",
                "question": "Which of the following statements is true regarding the value of the electric field and the potential along a line passing perpendicularly through an infinite planar charge distribution (with uniform surface charge density)?",
                "options": [
                    "The potential and the electric field are discontinuous.",
                    "The potential and the electric field are continuous.",
                    "The potential is continuous, and the electric field is discontinuous.",
                    "The potential is discontinuous, and the electric field is continuous.",
                    "The continuity of the potential and electric fields depend on the sign of the charge."
                ],
                "answer": "C",
                "explanation": "(C) Figure 10.18 shows the behavior of the electric field and the potential along the x-axis due to a constant positive surface charge density along the yz-plane. The electric field due to an infinite planar charge distribution has magnitude E = \\sigma/2\\epsilon0 whose direction abruptly changes as the point passes through the planar charge distribution (making the electric field discontinuous at this point). Because the electric field is equal to the negative slope of the potential along the x- axis, this implies that the potential’s slope is discontinuous at x = 0 but the potential itself is continuous. Changing the sign of the charge switches the sign of the electric field and potential but does not affect whether they are continuous or discontinuous. Figure 10.18",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q12",
                "global_num": 193,
                "section": "Ch10: Electrostatics",
                "question": "A thin semicircular plastic rod of radius R carries a uniformly distributed positive charge +Q. What is the magnitude of the electric field at the center of curvature O of the semicircle?",
                "options": [
                    "Zero",
                    "k Q / R^2",
                    "2 k Q / (pi R^2)",
                    "k Q / (2 pi R^2)",
                    "4 k Q / (pi^2 R^2)"
                ],
                "answer": "C",
                "explanation": "By symmetry, the components of the electric field parallel to the diameter of the semicircle cancel out. The perpendicular components add up: dE_perp = (k dq / R^2) * cos(theta), where dq = lambda R dtheta = (Q / (pi R)) R dtheta = (Q / pi) dtheta. Integrating from theta = -pi/2 to +pi/2: E = int_{-pi/2}^{pi/2} (k (Q/pi) cos(theta) dtheta) / R^2 = (k Q / (pi R^2)) [sin(theta)]_{-pi/2}^{pi/2} = (k Q / (pi R^2)) * (1 - (-1)) = 2 k Q / (pi R^2).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q13",
                "global_num": 194,
                "section": "Ch10: Electrostatics",
                "question": "A point charge +q is placed at distance d from an infinite, grounded, planar conducting sheet. By the method of images, what is the magnitude and direction of the force exerted on the charge +q by the induced surface charges on the sheet?",
                "options": [
                    "Zero",
                    "k q^2 / (4 d^2) toward the sheet",
                    "k q^2 / (4 d^2) away from the sheet",
                    "k q^2 / (2 d^2) toward the sheet",
                    "k q^2 / d^2 toward the sheet"
                ],
                "answer": "B",
                "explanation": "By the method of images, the boundary condition V = 0 on the grounded conducting sheet is equivalent to placing an image charge of -q at distance d behind the plane (a total separation of 2d from the real charge +q). The electrostatic force on +q is attractive (toward the sheet) with magnitude F = k |q(-q)| / (2d)^2 = k q^2 / (4 d^2).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q14",
                "global_num": 195,
                "section": "Ch10: Electrostatics",
                "question": "Two concentric conducting spherical shells have radii a and b (with a < b). The inner shell carries net charge +Q and the outer shell carries net charge -Q. What is the electric potential difference Delta V = V(a) - V(b) between the two shells?",
                "options": [
                    "Zero",
                    "(k Q) * (1/a - 1/b)",
                    "(k Q) * (1/b - 1/a)",
                    "k Q / (b - a)",
                    "(k Q) / (a + b)"
                ],
                "answer": "B",
                "explanation": "In the region between the shells (a <= r <= b), Gauss's law gives the radial electric field E(r) = k Q / r^2. The potential difference is Delta V = V(a) - V(b) = - int_b^a E(r) dr = int_a^b (k Q / r^2) dr = k Q [-1/r]_a^b = k Q (1/a - 1/b).",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q15",
                "global_num": 196,
                "section": "Ch10: Electrostatics",
                "question": "Three nonconducting spheres all have the same net charge +Q and radius R. The charge is uniformly distributed throughout the volume of sphere A, uniformly distributed on the surface of sphere B, and distributed with a density proportional to the radial variable, \\rho = cr throughout the volume of sphere C (c = Q/\\piR4). Which of the following is a valid comparison of the potentials at the centers of each of the spheres?",
                "options": [
                    "VA > VB > VC",
                    "VA > VC > VB",
                    "VC > VA > VB",
                    "VC > VB > VA",
                    "VB = VC = VA Free-Response Questions"
                ],
                "answer": "B",
                "explanation": "(B) Although the field (and thus the potential) is identical outside the spheres, this is not the case inside the spheres. The spheres all have the same net charge. Therefore, based on the equation for potential, V = \\int dQ/4\\pir\\epsilon0, the closer the charge is to the center of the sphere, the greater the potential is at the center of the sphere. Sphere B, with all the charge on the surface of the sphere, has its charge located farthest away from the center of the sphere and therefore has the lowest potential [eliminating all choices except (B) and (C)]. Sphere C, with a charge density proportional to its distance from the sphere, tends to distribute more charge at a larger r, farther from the center of the sphere, compared to sphere A. Therefore, VC < VA and the correct answer is choice (B). Free-Response 1. (a) See Figure 10.19. Symmetry considerations dictate that the direction of the electric field for points on the x-axis is parallel to the x-axis. (You can also see this by noting that the y-components of the electric fields due to the two point charges exactly cancel each other at these points.) Both point charges +Q make equal contributions to Ex: Figure 10.19 This result makes sense. At x = 0, the electric field is zero (because of symmetry). As x \\to  \\infty, x >> a, so that x2 + a2 \\approx  x2 and the electric field is approximately given by , the same as the electric field due to a charge of +2Q at the origin. (As you move farther and farther along the x-axis, the separation between the two charges becomes negligible and all you can “see” is one effective charge equal to +2Q.) (b) Using the definition of electric field, the force is obtained by multiplying the electric field by the charge: (c) Calculating potential using the equation V = ∑(Qi/4\\pi\\epsilon0ri) yields 2. (a) and (b) Consider Figures 10.20 and 10.21. The key point here is to use superposition. Graph the field and potential due to one charge, graph the field and voltage due to the other charge, and then sum the graphs. Thus, superposition reduces the two-charge problem to two one-charge problems, allowing you to worry about only one charge at a time. (c) The force is zero; the forces due to each point charge cancel each other. (From the sketch of the electric field, you can see that the field at the origin is zero.) (d) Use conservation of energy: Electrical potential energy is converted to kinetic energy: Figure 10.20 Figure 10.21 3. (a) See Example 8.3. When a mass hangs vertically, gravity determines the equilibrium height of the mass. If the mass is pulled 5.0 cm below the equilibrium point and released from rest, it will oscillate as high as 5.0 cm above the equilibrium point, corresponding to a point 15.0 cm above the table. (b) As discussed in Example 8.3, the angular frequency of oscillation is given by the usual formula for a mass oscillating along a horizontal line. Thus, . (c) We choose +y downward and set y = 0 at the equilibrium position of the charge. Then from Chapter 8 we know that y = (5.0 cm) cos \\omegat for a mass released from rest 5.0 cm below (i.e., positive y) equilibrium. The equilibrium point is 10.0 cm above the table; thus, the height of the charge above the table is given by h = 10.0 cm − (5.0 cm) cos \\omegat. You can check the minus sign on the right-hand side by plugging in t = 0 s to obtain h = 5.0 cm, the initial height of the charge. (d) The magnitude of the electric field at point P is given by The field is directed away from the positive charge Q, i.e, it points downward at P. (e) The potential of the point charge Q at point P is given by: 4. (a) Along the +x-axis, symmetry dictates that the field must point in the x-direction. Summing the contributions of the x-components of the electric fields due to the three point charges yields the following (the vector geometry is the same as in question 1). (b) Applying the equation V = ∑(Qi/4\\pi\\epsilon0ri), (c) For very small x, we can make the following two approximations: (1) x2 + a2 \\approx  a2; therefore, (2) 1/x2 >> x; therefore, This is the electric field due to a point charge −Q at the origin. Thus, when x is very small, the fields due to the two positive charges nearly cancel, and the dominant effect is due to the −Q at the origin (which exerts a strong field because it is so close to point x). (d) For very large x, we can make the approximation x2 + a2 \\approx  x2. Therefore, This is the electric field due to a charge +Q at the origin. When you are very far from the origin, it’s impossible to see the separation of the three charges—it seems that they’re all at the origin. The resulting field is due to the sum of the three charges, Qeffective = Q + Q − Q = Q, at the origin. 5. (a) See Figure 10.22. We have a linear charge distribution and thus use differential line segments of length dx. The charge density is given by \\lambda = Q / (2ℓ) and is positive. A point on the y-axis located at (0, y) is a distance r from a differential line segment dx located at x where . Thus, the potential is given by the integral: where we did the integral using the substitution x = y tan \\theta. Figure 10.22 (b) As y approaches infinity, the argument of the logarithm approaches 1 and thus the potential goes to 0. This is to be expected as we chose, in general, to have the potential 0 at infinity. (c) As y approaches 0, the potential diverges, not surprisingly, as we are approaching the charge distribution. In Example 10.1, the rod did not overlap the origin, so we obtained a finite answer for the potential at the origin given by The rod would overlap the origin if a < 0 and b > 0, in which case V would diverge. (d) Because the rod has uniformly distributed charge and is centered at the origin, we know by symmetry that the electric field must be parallel to the y-axis. The rod has positive charge, and thus the field points away from the rod. If the y-axis is vertical, then the field points up for y > 0 and down for y < 0. 6. (a) All the charge is the same distance from the origin, so the potential is simply: The charge Q is obtained by multiplying the length by the linear charge density (recall that arc length = r\\theta). Substituting, (b) According to symmetry, the only uniquely defined direction at the origin is the horizontal direction, so any nonzero net field must point in this direction. We calculate the field by dividing the arc into differential arc legnths dl = ad\\theta and summing the x-component of the electric field due to each differential arc length as shown in Figure 10.23. Figure 10.23 As in part (a), the differential charge is obtained by multiplying the arc length by the linear charge density: Substituting for dQ, Integrating, and (c) From the potential calculated in part (a), Because the potential is proportional to ϕ, it is maximized when ϕ is maximized, at ϕ = \\pi (creating a complete circular ring of charge). (d) From the electric field calculated in part (b), The potential is maximized when sinϕ is maximized, at ϕ = \\pi/2 (creating an exact seimicircle of charge). Answer check for parts (c) and (d): Although the math immediately gave us the answers, we could have figured out the answers simply based on physics. As for the potential, the more charge there is nearby, the higher the potential. Therefore, the potential is maximized when the charge is maximum, which occurs when the entire ring contains charge. As for the electric field, symmetry always requires the net field to be in the x-direction. Therefore, the magnitude of the field is equal to the x- component. Now let’s consider a few extreme situations: (i) ϕ = 0, no charge, no electric field; (ii) ϕ = \\pi/2, semicircle of charge, electric field in the +x-direction; (iii) ϕ = \\pi, circle of charge, symmetry requires that electric field is zero. Clearly, the maximal charge lies somewhere between ϕ = 0 and ϕ = \\pi. Now let’s think about how the field changes as ϕ increases from zero to \\pi. As ϕ increases from 0 to \\pi/2, matching differential regions above and below the x-axis produces a net field in the positive x-direction, causing the electric field to increase. However, as ϕ increases beyond \\pi/2, matching differential regions above and below the x-axis causes a field in the negative x-direction, causing the total field to shrink back to zero. Thus, calculating extrema from the first derivative, the maximum must lie where the field is about to stop growing and start decreasing, at \\pi/2. (e) Again, all the charge is the same distance from the origin: (f) Same as in part (b), except that we must use the substitution \\lambda = Q/l = Q/2aϕ: (g) Potential doesn’t depend on ϕ, so it is maximized for any value of ϕ. (h) When ϕ is very small (ϕ \\approx  0), all the charge is concentrated at (−a, 0), and it acts like a point charge. In this situation, all the differential electric fields due to differential bits of charge point along the x-axis, and there is no cancellation. As ϕ increases, the charge is spread around the circle, causing the differential charges to produce differential electric fields with components in the y-direction that cancel each other. This cancellation “wastes” electric field, decreasing the field to the point where the field equals zero when ϕ = \\pi. Therefore, the field is maximized when ϕ = 0.",
                "difficulty": "medium",
                "topic": "Ch10: Electrostatics"
            },
            {
                "id": "ap-topic-physc-electrostatics-q16",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "A solid insulating sphere of radius R has a uniform volume charge density rho. Using Gauss's law, what is the electric field magnitude E(r) as a function of distance r from the center of the sphere for r < R?",
                "options": [
                    "rho r / (3 epsilon_0)",
                    "rho R / (3 epsilon_0)",
                    "rho r^2 / (3 epsilon_0 R)",
                    "rho / (3 epsilon_0 r^2)",
                    "Zero"
                ],
                "answer": "A",
                "explanation": "Consider a spherical Gaussian surface of radius r < R. The enclosed charge is q_enc = rho * (4/3 pi r^3). By Gauss's Law: oint E * dA = E * (4 pi r^2) = q_enc / epsilon_0 = (4/3 pi rho r^3) / epsilon_0 ==> E(r) = rho r / (3 epsilon_0). The field increases linearly with distance r from the center.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "ap-topic-physc-electrostatics-q17",
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
                "id": "ap-topic-physc-electrostatics-q18",
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
                "id": "ap-topic-physc-electrostatics-q19",
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
                "id": "ap-topic-physc-electrostatics-q20",
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
            }
        ]
    }
};
