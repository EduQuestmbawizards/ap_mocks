// Specific Question Bank for Test: ap-diag-physc-em
const AP_TEST_DATA = {
    "ap-diag-physc-em": {
        "title": "AP Physics C: Electricity & Magnetism Diagnostic Assessment",
        "testType": "Diagnostic Assessment",
        "subject": "ap-phys-c-em",
        "topic": "Comprehensive E&M Diagnostic",
        "timeLimitMinutes": 45,
        "totalQuestions": 35,
        "questions": [
            {
                "id": "diag-em-q1",
                "global_num": 36,
                "section": "Diagnostic Test – E&M",
                "question": "Two isolated metal spheres with radii r1 and r2 (with r1 != r2) carrying positive charges Q1 and Q2, respectively, are separated by a very large distance. A thin conducting wire is then connected between the two spheres. Under what condition will positive charge flow from sphere 1 to sphere 2?",
                "options": [
                    "Q1 > Q2",
                    "r1 > r2",
                    "Q1 / r1 > Q2 / r2",
                    "Q1 r1 > Q2 r2",
                    "Q1 / r1^2 > Q2 / r2^2"
                ],
                "answer": "C",
                "explanation": "Positive charge flows spontaneously from a region of higher electric potential to one of lower electric potential. The electric potential at the surface of an isolated conducting sphere of radius r carrying charge Q is V = (1 / (4 pi epsilon_0)) * (Q / r). Thus, positive charge flows from sphere 1 to sphere 2 if and only if V1 > V2, which requires Q1 / r1 > Q2 / r2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q2",
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
                "id": "diag-em-q3",
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
                "id": "diag-em-q4",
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
                "id": "diag-em-q5",
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
                "id": "diag-em-q6",
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
                "id": "diag-em-q7",
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
                "id": "diag-em-q8",
                "global_num": 43,
                "section": "Diagnostic Test – E&M",
                "question": "A long straight cylindrical wire of radius a carries a constant total current I uniformly distributed over its circular cross section. What is the magnetic field magnitude B(r) as a function of radial distance r from the central axis of the wire for both r <= a and r >= a?",
                "options": [
                    "B(r) is proportional to r for r <= a, and proportional to 1/r for r >= a",
                    "B(r) is zero for r <= a, and proportional to 1/r for r >= a",
                    "B(r) is proportional to 1/r for r <= a, and constant for r >= a",
                    "B(r) is proportional to r^2 for r <= a, and proportional to 1/r^2 for r >= a",
                    "B(r) is constant everywhere inside and outside the wire"
                ],
                "answer": "A",
                "explanation": "Apply Ampere's Law oint B * dl = mu_0 I_enc. Inside the wire (r <= a), the enclosed current is I_enc = I * (pi r^2) / (pi a^2) = I (r/a)^2, giving B(2 pi r) = mu_0 I (r/a)^2 ==> B(r) = (mu_0 I / (2 pi a^2)) * r (linear in r). Outside the wire (r >= a), the entire current I is enclosed, so B(2 pi r) = mu_0 I ==> B(r) = mu_0 I / (2 pi r) (inversely proportional to r).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q9",
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
            },
            {
                "id": "diag-em-q10",
                "global_num": 45,
                "section": "Diagnostic Test – E&M",
                "question": "If a battery requires an amount of time t to charge a capacitor to 60% of its final charge, what is the time constant of the circuit?",
                "options": [
                    "\\tau = −t/ln(0.6)",
                    "\\tau = −ln(0.6)/t",
                    "\\tau = −t/ln(0.4)",
                    "\\tau = −ln(0.4)/t",
                    "cannot be determined from the information given"
                ],
                "answer": "C",
                "explanation": "(C) Setting the equation for Q(t) equal to 60% of its final value yields Solving for \\tau then yields choice (C). Further information about RC circuits can be found in Chapter 13.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q11",
                "global_num": 46,
                "section": "Diagnostic Test – E&M",
                "question": "Which of the following statements is true of the integral",
                "options": [
                    "It is equal to the potential at point B minus the potential at point A.",
                    "It is always independent of the path taken from point A to point B.",
                    "It is the work per unit charge that the electric field performs as a charge moves from point A to point B.",
                    "It is the work per unit charge that an external force performs to move a charge from point A to point B.",
                    "It is the induced EMF."
                ],
                "answer": "C",
                "explanation": "(C) Choice (A) is false: The potential at point B minus the potential at point A is given by . Choice (B) is false: The integral is path independent only if there is no time-dependent magnetic field present. A time-dependent magnetic field produces a nonconservative electric force with no associated potential function. Choice (C) is true: The work per charge is the opposite of the change in potential energy per charge, which is equal to because of conservation of energy. Choice (D) is false: The work done by an arbitrary external force does not necessarily have any relationship with the electric field. Although choice (E) is true in the special case that the integral is a closed loop, that is, point A = point B, it is not true in general.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q12",
                "global_num": 47,
                "section": "Diagnostic Test – E&M",
                "question": "A wire loop lies partially in a region where the magnetic field points out of the page, as shown. If the magnetic field is increasing in magnitude, what is the direction of the force on the loop?",
                "options": [
                    "to the right",
                    "to the left",
                    "out of the page",
                    "toward the top of the page",
                    "The force is zero."
                ],
                "answer": "A",
                "explanation": "(A) The current induced in the loop moves in a clockwise direction to oppose the increasing outward flux through the loop according to Lenz’s law. The movement of this current through the top and bottom of the loop creates opposing forces that cancel each other, while the current flowing through the left side of the loop produces a force to the right, which equals the net force on the loop.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q13",
                "global_num": 48,
                "section": "Diagnostic Test – E&M",
                "question": "Suppose that, rather than an electron orbiting a proton as in atoms, an electron and a positron (a particle with the same mass as an electron and of opposite charge) orbit each other as shown. In terms of the magnitude of the charge on an electron e and the radius of the orbit r, what is the total kinetic energy of the system?",
                "options": [
                    "KE = e/4\\pi\\epsilon0r",
                    "KE = e 2/4\\pi\\epsilon0r 2",
                    "KE = −e 2/8\\pi\\epsilon0r 2",
                    "KE = −e 2/8\\pi\\epsilon0r",
                    "KE = e 2/16\\pi\\epsilon0r"
                ],
                "answer": "E",
                "explanation": "(E) Without doing a lot of work, we can eliminate most of the choices. First, kinetic energy is always positive, so choices (C) and (D) are incorrect. Second, recall the formula for the potential energy of two point charges separated by a distance r (ignoring signs for now): Comparing the form of this expression with our choices allows us to eliminate choices (A), (B), and (C) simply on the basis of dimensional analysis. This leaves us only choice (E), which a detailed calculation shows is the correct answer.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q14",
                "global_num": 49,
                "section": "Diagnostic Test – E&M",
                "question": "Which one of Maxwell’s equations states the experimental result that physicists have been unable to discover a magnetic monopole?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "C",
                "explanation": "(C) See Chapter 15 for a further explanation of Gauss’s law for magnetism.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q15",
                "global_num": 50,
                "section": "Diagnostic Test – E&M",
                "question": "Two resistors with different resistances are connected in parallel. Which of the following statements is correct about this resistor network?",
                "options": [
                    "The equivalent resistance is greater than the resistance of either of the resistors alone.",
                    "The equivalent resistance is in between the resistance of either of the resistors alone.",
                    "The equivalent resistance is smaller than the resistance of either of the resistors alone.",
                    "The same amount of current passes through both resistors.",
                    "The equivalent resistance depends on the potential difference across the resistor array."
                ],
                "answer": "C",
                "explanation": "(C) The equivalent resistance is given by Because the denominator is greater than 1/R1 or 1/R2 alone, the entire fraction must be smaller than R1 or R2 alone. Choice (D) is incorrect: The voltage across the resistors must be the same because they are arranged in parallel. Therefore, the current through either resistor is given by the equation I = V/R. Because the resistors have different resistances, different amounts of current flow through them. The equivalent resistance of a resistor array is a physical property of the array itself (just as the resistance of a resistor is a physical property of the resistor). So it is independent of the voltage across the array (assuming, of course, that the resistors obey Ohm’s law), eliminating choice (E).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q16",
                "global_num": 51,
                "section": "Diagnostic Test – E&M",
                "question": "The uniform electric field established between the parallel plates of a capacitor has magnitude E. A particle with a charge of magnitude q is released (initially at rest) somewhere between the plates and allowed to move a distance d under the influence of the capacitor’s electric field. What is the change in the particle’s electrostatic potential energy?",
                "options": [
                    "\\Delta U = q 2Ed",
                    "\\Delta U = −q 2Ed",
                    "\\Delta U = qEd",
                    "\\Delta U = −qEd",
                    "none of the above"
                ],
                "answer": "D",
                "explanation": "(D) First, what is the sign of the change in energy? This is a tricky question because the actual sign of the charge and the direction of the electric field are not given. Recall that Fx = −dU/dx. Thus, a particle always feels a force pushing it in a direction that decreases the particle’s potential energy. Therefore, whether the particle’s charge is positive or negative, it always moves in such a way as to decrease its potential energy, so \\Delta U < 0. This eliminates choices (A) and (C). What, then, is the magnitude of the decrease in potential energy? The key equation here is \\Delta U = q\\Delta V (based on the definition of potential). Because the particle moves parallel or antiparallel to the electric field (depending on the sign of its charge), |\\Delta V| = |−\\int E ⋅ dr| = Ed. Therefore, the magnitude of the change in potential energy is |\\Delta U| = |q\\Delta V| = qEd, so choice (D) is correct.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q17",
                "global_num": 52,
                "section": "Diagnostic Test – E&M",
                "question": "An isolated solid metal sphere contains a net charge of +Q. The magnitude of the electric field outside the sphere a distance d from the center of the sphere",
                "options": [
                    "cannot be calculated because there isn’t appropriate symmetry to apply Gauss’s law",
                    "is equal to Q/4\\pi\\epsilon0d 2",
                    "is equal to Q/2\\pi\\epsilon0d 2",
                    "is equal to",
                    "none of the above"
                ],
                "answer": "B",
                "explanation": "(B) Based on Gauss’s law, the enclosed charge term, qenclosed, depends only on the magnitude of the charge and the symmetry properties of its distribution. Therefore, the field produced outside a charged sphere is the same as the field that would be produced if all the charge of the sphere were concentrated at a point at the sphere’s center (which is easily calculated using Coulomb’s law). Note that a charge placed on an isolated conducting sphere distributes itself uniformly across the surface of the sphere. Further information about Gauss’s law and the distribution of a stationary charge along conductors is given in Chapter 11.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q18",
                "global_num": 53,
                "section": "Diagnostic Test – E&M",
                "question": "Point P is located within a cylindrical wire that carries current into the page with uniform current density as shown. What is the direction of the magnetic field at point P?",
                "options": [
                    "The magnetic field is zero because of symmetry.",
                    "toward the top of the page",
                    "toward the bottom of the page",
                    "into the page",
                    "out of the page"
                ],
                "answer": "C",
                "explanation": "(C) According to Ampere’s law and the symmetry of the situation, the only current that determines the magnetic field at point P is the current enclosed within the amperian path shown. (Thus, the current in region B has no effect on the magnetic field at point P.) The magnetic field produced at P due to the enclosed current is the same as the field produced by a thin wire along the axis of the cylinder, carrying the same current (since the magnetic field depends on only the enclosed current as long as it has cylindrical symmetry). The right-hand rule indicates that this imaginary current-carrying wire would produce a downward magnetic field at point P, so the same downward magnetic field must be produced by the entire cylinder of current featured in this problem. For further information about calculating magnetic fields using Ampere’s law, see Chapter 14.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q19",
                "global_num": 54,
                "section": "Diagnostic Test – E&M",
                "question": "A point charge +q lies at the origin. Which of the following charge distributions could yield a zero net electric field (due to the +q charge and the charge distribution) at the point (0, 1)? I. a single charge −Q with a smaller magnitude than +q, lying at some point along the x-axis II. a single charge −q with a magnitude equal to +q, lying at some point along the x-axis III. a single charge −Q with a larger magnitude than +q, lying at some point along the x-axis IV. two charges both with charge −Q and with larger magnitudes than +q, lying at points along the x-axis",
                "options": [
                    "II",
                    "III",
                    "IV",
                    "I and III",
                    "II and IV"
                ],
                "answer": "E",
                "explanation": "(E) Distribution I will not be able to cancel the electric field due to +q because it will never be able to achieve a high enough magnitude. Distribution II will work: Simply locate the charge −q at the origin, and it will exactly cancel out the field due to +q over all space. Distribution III will never be able to have an equal magnitude and opposite direction compared to the field due to +q; in order to have an opposite direction the negative charge must be located at the origin, but at this point it will produce a stronger magnitude field than the field due to +q. Distribution IV will definitely work. The charges must be located equal distances from the origin in order for the field due to both of the negative charges to be in the direction opposite the field due to +q. By moving the charges as far away from the origin as is necessary, the magnitude of the field can be adjusted so as to exactly equal the magnitude of the field due to +q.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q20",
                "global_num": 55,
                "section": "Diagnostic Test – E&M",
                "question": "After closing the switch in the figure, the current I passing through the inductor increases from zero. What is the Kirchhoff’s loop equation describing this situation?",
                "options": [
                    "V + IR + L(dI/dt) = 0",
                    "V + IR − L(dI/dt) = 0",
                    "V − IR + L(dI/dt) = 0",
                    "V − IR − L(dI/dt) = 0",
                    "none of the above"
                ],
                "answer": "D",
                "explanation": "(D) Tracing the loop in the counterclockwise direction: (1) The sign of the potential jump of the battery is positive because we are going from the negative terminal to the positive terminal. (2) The sign of the potential jump across the resistor is negative because we are going in the same direction as the current. (3) The sign of the potential jump across the inductor is negative. Why? The inductor opposes the increase in the current, so its potential jump must be of the opposite sign compared to that of the battery (which has a positive potential jump). Because current is increasing, dI/dt > 0, we must add a negative sign to the term −L(dI/dt) in order for it to have an overall negative value as required.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q21",
                "global_num": 56,
                "section": "Diagnostic Test – E&M",
                "question": "A battery has an EMF of 9 V and an internal resistance of 20 Ω. For what value of current will the terminal voltage across the battery be 7 V?",
                "options": [
                    "0.1 A",
                    "0.2 A",
                    "5 A",
                    "10 A",
                    "40 A"
                ],
                "answer": "A",
                "explanation": "(A) When the terminal voltage is 7 V, that means that there is a 2 V potential drop across the internal resistance. Applying Ohm’s law to the internal resistance yields I = V/R = 2 V/20 Ω = 0.1 A.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q22",
                "global_num": 57,
                "section": "Diagnostic Test – E&M",
                "question": "Consider a parallel plate vacuum capacitor. If the plate area and the separation distance are doubled and a dielectric with dielectric constant kD = 2 is inserted between the plates, completely filling the space, the capacitance will",
                "options": [
                    "increase by a factor of 4",
                    "increase by a factor of 2",
                    "remain the same",
                    "decrease by a factor of 2",
                    "decrease by a factor of 4"
                ],
                "answer": "B",
                "explanation": "(B) This problem relies on manipulation of the equation for the capacitance of a parallel plate capacitor with a dielectric, C = \\epsilon0AkD /d. Increasing A, d, and kD by factors of 2 results in a net increase of capacitance by a factor of 2.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q23",
                "global_num": 58,
                "section": "Diagnostic Test – E&M",
                "question": "How much work is done by the electric field on a point charge of magnitude q moved from infinity into the center of a hollow spherical shell of radius R that has a uniform charge density and a net charge of +Q? (Assume there is a very small hole in the shell that allows the point charge to enter but does not disturb the spherical symmetry of the charge distribution.)",
                "options": [
                    "W = qQ/4\\pi\\epsilon0R",
                    "W = qQ/4\\pi\\epsilon0R2",
                    "W = −qQ/4\\pi\\epsilon0R",
                    "The work is undefined.",
                    "The work is zero because of symmetry considerations."
                ],
                "answer": "C",
                "explanation": "(C) The potential at the surface of the sphere is the same as if all of the charge were concentrated at the center of the sphere, that is, V = (1/4\\pi\\epsilon0)(Q/R) as discussed in question 1. The electric field inside the sphere is zero, so the potential at the center is the same as its value at the surface. The work done by the electric field to move the charge from infinity to this point is the negative of the change in the charge’s potential energy: W = −\\Delta U = −q\\Delta V = −q(Q/4\\pi\\epsilon0R).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q24",
                "global_num": 59,
                "section": "Diagnostic Test – E&M",
                "question": "Which unit is equal to one ohm divided by one henry?",
                "options": [
                    "coulomb",
                    "joule",
                    "second",
                    "second−1",
                    "farad"
                ],
                "answer": "D",
                "explanation": "(D) The time constant of an RL circuit is \\tau = L/R. Because the time constant has units of time, R/L has the units of inverse time. Alternative solution: Recall that the voltage drop across an inductor is V = L(dI/dt) and the voltage drop across a resistor is V = IR. Equating the units of voltage in these two formulas, V = IR = L(dI/dt). Manipulating this formula in terms of units yields L/R = I(dt/dI) = t. (Note that dt has the units of time and dI has the units of current.)",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q25",
                "global_num": 60,
                "section": "Diagnostic Test – E&M",
                "question": "Suppose that when a charge is moved through a region of space with an electric field (which is produced by stationary charges), the field does no net work on the charge. Which of the following statements must be true?",
                "options": [
                    "The electric force is nonconservative.",
                    "The charge’s path begins and ends along the same electric field line.",
                    "The charge is moved along an equipotential line.",
                    "The charge’s path begins and ends on an equipotential line of the same value.",
                    "Electric fields never do work on charges."
                ],
                "answer": "D",
                "explanation": "(D) Choice (C) would indeed result in no net work being done (no work is required to move a charge along an equipotential line). However, this is not required for zero net work to be done: It is possible that the field might perform negative work along part of the charge’s path and positive work along the remainder of the path such that the net work is zero. The only condition that is required for zero net work to be done is for the charge to begin and end at the same voltage (so that the change in potential energy is zero, based on the definition of voltage), so choice (D) is correct. Choice (E) is true of magnetic fields, not electric fields, since the magnetic force is always perpendicular to the velocity. Choice (B) won’t generally satisfy the requirement that no net work be done, except in the special case that the path begins and ends at the same point on the field line. In fact, any path that begins and ends at different points along an electric field line must have involved the electric field performing net work because electric field lines are parallel to the electric field and such movement causes a change in voltage. Choice (A) is false: Stationary charges always produce conservative electric forces.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q26",
                "global_num": 61,
                "section": "Diagnostic Test – E&M",
                "question": "Consider a long solenoid with length l, radius r, and n turns per length. What effect will doubling the radius (while holding l and n constant) have on the inductance of the solenoid?",
                "options": [
                    "Inductance will decrease by a factor of 4.",
                    "Inductance will decrease by a factor of 2.",
                    "Inductance will not change.",
                    "Inductance will increase by a factor of 2.",
                    "Inductance will increase by a factor of 4."
                ],
                "answer": "E",
                "explanation": "(E) Based on the formula for the magnetic field within a solenoid (which can be quickly derived using Ampere’s law), B = \\mu0nI. Because the radius of the solenoid does not enter this equation, changing the radius will not affect the strength of the magnetic field within the solenoid. However, because increasing the radius will increase the area of each loop of the solenoid by a factor of 4 (because A = \\pir2), it will increase the magnetic flux through each loop by a factor of 4 and thus increase the inductance by a factor of 4.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q27",
                "global_num": 62,
                "section": "Diagnostic Test – E&M",
                "question": "In the circuit shown, if the potential at point A is chosen to be zero, what is the potential at point B?",
                "options": [
                    "4 V",
                    "2.5 V",
                    "−2.5 V",
                    "−4 V",
                    "none of the above"
                ],
                "answer": "C",
                "explanation": "(C) First, constructing and solving a Kirchhoff’s loop equation indicates that the current is 0.5 A flowing in a clockwise direction. More specifically, one valid loop equation is (choosing to designate positive current in the clockwise direction and traversing the loop in the clockwise direction): (Alternatively, you could realize that the circuit has an equivalent resistance of 4 Ω and an equivalent voltage of 2 V, so applying Ohm’s law indicates that the current is 0.5 A.) Then, to calculate the potential at point B, begin at point A and sum potential jumps as you move to point B. (Use either of the possible two pathways. If the current is solved correctly, you should obtain the same answer either way.) For example, moving along the bottom of the circuit yields",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q28",
                "global_num": 63,
                "section": "Diagnostic Test – E&M",
                "question": "What is the power dissipated in the resistors in the circuit introduced in question 27?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "2 W",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "16 W Questions 29–31 refer to the circuits shown in the figure, in which all the batteries are identical."
                ],
                "answer": "A",
                "explanation": "(A) The power dissipated by a resistor is P = I2R, and because the resistors are in series, they share a common current. Therefore, the power dissipated by all the resistors is . (Note that this is equivalent to realizing that the equivalent resistance of the circuit is 4 Ω and plugging this value into the formula P = I2R.)",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q29",
                "global_num": 64,
                "section": "Diagnostic Test – E&M",
                "question": "In which circuit is the equivalent resistance the greatest?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "B",
                "explanation": "(B) Application of the equivalent resistance formulas reveals that the equivalent resistance of circuits (A) through (E) are 3 Ω, 6 Ω, 4 Ω, 2 Ω, and 5 Ω.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q30",
                "global_num": 65,
                "section": "Diagnostic Test – E&M",
                "question": "In which of the five circuits is the total power dissipated by all the resistors the greatest?",
                "options": [
                    "Directly proportional to the parameter (linear scaling)",
                    "Inversely proportional to the square of the separation",
                    "Equal in magnitude with opposite orientation",
                    "Independent of the mass and charge distribution",
                    "Zero net change under static equilibrium conditions"
                ],
                "answer": "D",
                "explanation": "(D) The most useful formula to use here for power is P = V2/R. The circuit with the lowest equivalent resistance dissipates the greatest total power. (Remember, the voltage is the same for all circuits.)",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q31",
                "global_num": 66,
                "section": "Diagnostic Test – E&M",
                "question": "A real battery of EMF V0 and non-zero internal resistance r is connected across an external load resistor R. Under which of the following conditions is the potential difference across the load resistor R minimized?",
                "options": [
                    "When R is much greater than r (R >> r)",
                    "When R is much smaller than r (R << r)",
                    "When R equals r (R = r)",
                    "When R is disconnected (open circuit)",
                    "The potential difference is always equal to V0 regardless of R"
                ],
                "answer": "B",
                "explanation": "The current in the single loop circuit is I = V0 / (R + r). The potential difference across the load resistor R is V_R = I R = V0 * R / (R + r) = V0 / (1 + r/R). As R approaches 0 (R << r), V_R approaches 0. When R >> r, V_R approaches V0. Therefore, V_R is minimized when R << r.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q32",
                "global_num": 67,
                "section": "Diagnostic Test – E&M",
                "question": "Which of the following statements is a necessary condition for the electric flux through a gaussian surface to be zero?",
                "options": [
                    "The electric field is zero along the entire gaussian surface.",
                    "The component of the field perpendicular to the gaussian surface is zero along the entire gaussian surface.",
                    "There is no charge enclosed within the gaussian surface.",
                    "There is no net charge enclosed within the gaussian surface.",
                    "Although the above conditions would cause the flux to be zero, they are not required for the flux to be zero."
                ],
                "answer": "D",
                "explanation": "(D) According to Gauss’s law, the electric flux is proportional to the net enclosed charge, so if the flux is zero, the net enclosed charge must be zero. The conditions in choices (A) and (B) would cause the local flux at any point on the gaussian surface to be zero, which would indeed cause the net flux to be zero. However, these are not required for the net flux to be zero: It is possible that positive flux through part of the gaussian surface cancels negative flux through another part of the gaussian surface such that the net flux is zero. Like choices (A) and (B), choice (C) would indeed result in the flux through the gaussian surface being zero. However, again this is not required for the net flux to be zero. It would be possible for a surface to enclose equal amounts of positive and negative charge such that the net enclosed charge and flux are zero. Further discussion of Gauss’s law can be found in Chapter 11.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q33",
                "global_num": 68,
                "section": "Diagnostic Test – E&M",
                "question": "Two moving particles of equal mass enter a region of uniform magnetic field pointing out of the page, causing them to move as shown. Which of the following is true about the charges on these particles?",
                "options": [
                    "|QA| > |QB|, QA > 0",
                    "|QA| > |QB|, QA < 0",
                    "|QA| < |QB|, QA > 0",
                    "|QA| < |QB|, QA < 0",
                    "none of the above"
                ],
                "answer": "D",
                "explanation": "(D) The magnetic field provides the centripetal force for the circular motion shown, according to the equation qvB = mv2/r. Because v, m, and B are fixed and shared by both particles, q is inversely proportional to r. Therefore, particle B, which follows a path of smaller radius, must have a greater magnitude of charge. The sign of the charge on particle A can be determined by the right-hand rule to be negative. (Remember that the centripetal force must always point toward the center of the arc.)",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q34",
                "global_num": 69,
                "section": "Diagnostic Test – E&M",
                "question": "Given the electric field vector at a point in space, which of the following can be determined? I. the direction of the electric force on any charged particle (of unspecified charge) at that point II. the magnitude of the electric force on a particle with a charge of magnitude Q at that point III. the rate of change of the potential with respect to position in the direction parallel to the field IV. the rate of change of the potential with respect to position in the direction perpendicular to the field",
                "options": [
                    "I and II",
                    "III and IV",
                    "I, III, and IV",
                    "II, III, and IV",
                    "I, II, III, and IV"
                ],
                "answer": "D",
                "explanation": "(D) I is false: The direction of the force depends on the sign of the charge on the particle, so it cannot be known for any charged particle. II is true: The magnitude of the electric force is simply |F| = QE. III is true: The rate of change in voltage with respect to position in the direction parallel to the field is simply E, with potential decreasing in the direction of the field. IV is true: The rate of change in potential with respect to position in the direction perpendicular to the field is always equal to zero.",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            },
            {
                "id": "diag-em-q35",
                "global_num": 70,
                "section": "Diagnostic Test – E&M",
                "question": "A parallel-plate capacitor with plate area A and separation d is charged to a potential difference V0 by a battery. The battery is then disconnected. A slab of dielectric material with dielectric constant kappa > 1 is now inserted, completely filling the space between the plates. What are the new capacitance C and stored energy U compared to their initial values C0 and U0?",
                "options": [
                    "C = kappa C0, and U = kappa U0",
                    "C = C0 / kappa, and U = U0 / kappa",
                    "C = kappa C0, and U = U0 / kappa",
                    "C = C0, and U = U0",
                    "C = kappa C0, and U = U0"
                ],
                "answer": "C",
                "explanation": "When a dielectric of constant kappa is inserted, the capacitance increases by a factor of kappa: C = kappa C0. Because the capacitor is disconnected from the battery, the charge Q remains constant (Q = Q0). The stored energy is U = Q^2 / (2C) = Q0^2 / (2 kappa C0) = U0 / kappa. Thus, capacitance increases by kappa and stored energy decreases by a factor of kappa (the electrostatic field does work pulling the dielectric slab into the plates).",
                "difficulty": "medium",
                "topic": "Diagnostic Test – E&M"
            }
        ]
    }
};
