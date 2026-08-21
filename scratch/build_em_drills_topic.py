import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

raw_em_drills_text = r"""Chapter 12: Electrostatics Drill
Chapter 12 Drill: Question 1
Question: What will happen to the magnitude of electric force between two particles if the distance between them is doubled and each charge is tripled?  
Options:(A) Multiplied by a factor of $9/4$  (B) Multiplied by a factor of $3/2$  (C) Multiplied by a factor of $3/4$  (D) Multiplied by a factor of $9/2$  (E) Multiplied by a factor of $6/4$  
Correct Answer: (A)  
Explanation:
From Coulomb's Law, $F = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r^2}$. Tripling both charges scales the numerator by $3 \times 3 = 9$. Doubling the separation distance scales the denominator by $2^2 = 4$. The resulting electrostatic force is multiplied by a factor of $9/4$.  

Chapter 12 Drill: Question 2
Question: A particle ($m = 10^{-10}\text{ kg}, q = -5 \times 10^{-13}\text{ C}$) starts at rest inside a uniform electric field $E = 50\text{ N/C}$ directed toward the left in a $1\text{-m}$ square region, positioned $70\text{ cm}$ from the left edge and $30\text{ cm}$ from the right edge. How long will it take to escape the field?  
Options:(A) $1.10\text{ s}$  (B) $1.23\text{ s}$  (C) $1.55\text{ s}$  (D) $2.31\text{ s}$  (E) $2.59\text{ s}$  
Correct Answer: (C)  
Explanation:
Because the charge is negative, the electric force acts to the right, opposite to $\vec{E}$. The distance to escape out the right side is $d = 30\text{ cm} = 0.30\text{ m}$.
  $$a = \frac{|q|E}{m} = \frac{(5 \times 10^{-13}\text{ C})(50\text{ N/C})}{10^{-10}\text{ kg}} = \frac{2.5 \times 10^{-11}}{10^{-10}} = 0.25\text{ m/s}^2$$
  $$d = \frac{1}{2}at^2 \implies t = \sqrt{\frac{2d}{a}} = \sqrt{\frac{2(0.30\text{ m})}{0.25\text{ m/s}^2}} = \sqrt{2.4} \approx 1.55\text{ s}$$

Chapter 12 Drill: Question 3
Question: Points A and B are equidistant from point P. At A, a charge $+Q$ creates field $\vec{E}$ pointing to the right at P. What charge placed at B will triple the net electric field at P?  
Options:(A) $+2Q$  (B) $+3Q$  (C) $-Q$  (D) $-2Q$  (E) $-3Q$  
Correct Answer: (D)  
Explanation:
To amplify the field at P to $3E$ in the same direction, the charge at B must contribute an electric field of magnitude $2E$ directed toward B (to the right). A negative charge attracts a positive test charge, so the charge must be negative with twice the magnitude: $q_B = -2Q$.  

Chapter 12 Drill: Question 4
Question: A fixed sphere $+Q$ repels a small movable sphere $+q$ released from rest. The small sphere moves away with:  
Options:(A) decreasing velocity and decreasing acceleration  (B) decreasing velocity and increasing acceleration  (C) decreasing velocity and constant acceleration  (D) increasing velocity and decreasing acceleration  (E) increasing velocity and increasing acceleration  
Correct Answer: (D)  
Explanation:
As $r$ increases, the repulsive force $F = \frac{kQq}{r^2}$ and acceleration $a = F/m$ decrease toward zero. Because acceleration remains strictly positive ($a > 0$), the speed and velocity continue to increase ($dv/dt > 0$).  

Chapter 12 Drill: Question 5
Question: A particle of charge $q = 1\ \mu\text{C}$ is fixed at the origin. An object ($m = 10^{-3}\text{ kg}, q = 1\ \mu\text{C}$) is released from rest $1\text{ m}$ directly above it. How far does the object fall before coming momentarily to rest ($g = 10\text{ m/s}^2$)?  
Options:(A) $0.1\text{ m}$  (B) $0.3\text{ m}$  (C) $0.5\text{ m}$  (D) $0.7\text{ m}$  (E) $0.9\text{ m}$
Correct Answer: (A)  
Explanation:
At the turnaround point (fall distance $x$), $\Delta K = 0$, so net work done by gravity and electrostatic repulsion is zero:
  $$W_g + W_E = 0 \implies mgx - k q^2 \left(\frac{1}{1-x} - 1\right) = 0 \implies mgx = \frac{k q^2 x}{1-x}$$
  $$1 - x = \frac{k q^2}{mg} = \frac{(9 \times 10^9)(10^{-6})^2}{(10^{-3})(10)} = \frac{9 \times 10^{-3}}{10^{-2}} = 0.9 \implies x = 1 - 0.9 = 0.1\text{ m}$$

Chapter 12 Drill: Question 6
Question: Charges $Q_2, Q_3$ are inside a Gaussian surface while $Q_1, Q_4$ are outside. Point P is on the surface. Which is true?  
Options:(A) Flux depends on all four; $\vec{E}$ at P depends on $Q_2, Q_3$.  (B) Flux depends only on $Q_2, Q_3$; $\vec{E}$ at P depends on all four.  (C) Flux depends on $Q_2, Q_3$; $\vec{E}$ at P depends on $Q_1, Q_2, Q_3$.  (D) Flux depends on $Q_1, Q_4$; $\vec{E}$ at P depends on $Q_2, Q_3$.  (E) Both flux and $\vec{E}$ depend on all four.  
Correct Answer: (B)  
Explanation:
By Gauss's Law, total enclosed flux $\Phi_E = \frac{Q_{\text{enc}}}{\varepsilon_0} = \frac{Q_2 + Q_3}{\varepsilon_0}$ depends only on internal charges. By the principle of linear superposition, the local electric field vector $\vec{E}$ at any spatial point P is the vector sum of fields produced by all charges present ($Q_1, Q_2, Q_3, Q_4$).  

Chapter 12 Drill: Question 7
Question: A nonconducting solid sphere of radius $R$ carries uniform charge $-Q$. What is the electric field magnitude at distance $r < R$ from the center?  
Options:(A) $\frac{Q r}{4\pi\varepsilon_0 R^3}$  (B) $\frac{Q}{4\pi\varepsilon_0 R^2}$  (C) $\frac{Q}{4\pi\varepsilon_0 R^3}$  (D) $\frac{Q}{4\pi\varepsilon_0 R^3 r}$  (E) $\frac{Q}{4\pi\varepsilon_0 r^2}$  
Correct Answer: (A)  
Explanation:
Enclosed charge at radius $r < R$: $Q_{\text{enc}} = -Q\left(\frac{r^3}{R^3}\right)$. Applying Gauss's Law:
  $$E(4\pi r^2) = \frac{Q(r^3/R^3)}{\varepsilon_0} \implies E(r) = \frac{Q r}{4\pi\varepsilon_0 R^3}$$

Chapter 12 Drill: Question 8
Question: Calculate the electric flux through a Gaussian surface enclosing an electric dipole of charge magnitude $q$.  
Options:(A) $0$  (B) $\frac{Aq}{4\pi\varepsilon_0}$  (C) $\frac{Aq^2}{4\pi\varepsilon_0}$  (D) $\frac{Aq}{4\pi\varepsilon_0 r}$  (E) $\frac{Aq}{4\pi\varepsilon_0 r^2}$  
Correct Answer: (A)
Explanation:
A dipole consists of equal and opposite charges $+q$ and $-q$. Total enclosed net charge $Q_{\text{enc}} = +q + (-q) = 0$. By Gauss's Law, $\Phi_E = \frac{Q_{\text{enc}}}{\varepsilon_0} = 0$.  

Chapter 12 Drill: Question 9
Question: An electron moves from point A ($-10\text{ V}$) to E ($-10\text{ V}$), then from E to C ($0\text{ V}$). Describe the work done by the electric field for each step.  
Options:(A) Negative; Positive  (B) Zero; Positive  (C) Zero; Negative  (D) Positive; Zero  (E) Positive; Positive  
Correct Answer: (C)
Explanation:
From A to E: $\Delta V = 0\text{ V}$ (equipotential line), so $W_E = -q\Delta V = 0\text{ J}$.  
From E to C: $\Delta V = 0 - (-10) = +10\text{ V}$. Work done by the electric field on the negative electron: $W_E = -q\Delta V = -(-e)(+10\text{ V}) = -10\text{ eV}$ (negative work).  

Chapter 12 Drill: Question 10
Question: How much work does the electric field do moving charge $q = -0.05\text{ C}$ from $V_A = 200\text{ V}$ to $V_B = 100\text{ V}$ along a curved path?  
Options:(A) $-5\text{ J}$  (B) $+5\text{ J}$  (C) $-10\text{ J}$  (D) $+10\text{ J}$  (E) $0\text{ J}$
Correct Answer: (B)
Explanation:
$$W_E = -q(V_B - V_A) = -(-0.05\text{ C})(100\text{ V} - 200\text{ V}) = +0.05(-100) \implies W_E = -\Delta U = +5\text{ J}$$

Chapter 13: Conductors, Capacitors, and Dielectrics Drill
Chapter 13 Drill: Question 1
Question: A capacitor is fully charged by a battery, disconnected, and then a dielectric is inserted. Which statements are true?  I. Voltage remains the same.  II. Potential energy increases.  III. Capacitance increases.  
Options:(A) I only  (B) I and II only  (C) I and III only  (D) II and III only  (E) III only  
Correct Answer: (E)  
Explanation:
With the battery disconnected, stored charge $Q$ is constant. Inserting a dielectric increases capacitance ($C = \kappa C_0$, III is true). Voltage decreases ($V = Q/C$, I is false), and stored energy decreases ($U = Q^2/(2C)$, II is false).  

Chapter 13 Drill: Question 2
Question: If the electric field does negative work on a negative charge moving from A to B, the electrical potential energy:  
Options:(A) is negative  (B) is positive  (C) increases  (D) decreases  (E) cannot be determined  
Correct Answer: (C)  
Explanation:
By definition, $\Delta U_E = -W_E$. If $W_E < 0$, then $\Delta U_E > 0$, meaning the potential energy increases.  

Chapter 13 Drill: Question 3
Question: Three $6\ \mu\text{F}$ capacitors are connected in parallel across a $9\text{ V}$ battery. Determine the energy stored in each individual capacitor.  
Options:(A) $2.43\text{ J}$  (B) $7.29 \times 10^{-4}\text{ J}$  (C) $8.10 \times 10^{-5}\text{ J}$  (D) $2.43 \times 10^{-4}\text{ J}$  (E) $27\text{ J}$  
Correct Answer: (D)
Explanation:
Each parallel capacitor receives the full $9\text{ V}$ potential difference:
  $$U = \frac{1}{2}C V^2 = \frac{1}{2}(6 \times 10^{-6}\text{ F})(9\text{ V})^2 = (3 \times 10^{-6})(81) = 2.43 \times 10^{-4}\text{ J}$$

Chapter 13 Drill: Question 4
Question: In a uniform electric field between parallel plates, which points lie on the same equipotential?  
Options:(A) 1 and 2 only  (B) 1 and 3 only  (C) 2 and 4 only  (D) 3 and 4 only  (E) All points lie on same equipotential  
Correct Answer: (C)
Explanation:
Equipotential surfaces in a uniform electric field are parallel planes perpendicular to the field lines. Points located at the same perpendicular distance from the plates share the identical electric potential.  

Chapter 13 Drill: Question 5
Question: Isolated conducting spheres of radius $a$ (Sphere 1) and $4a$ (Sphere 2) each carry charge $-Q$. Connected by a thin wire, what are the final charges?  
Options:(A) $-Q,\ -Q$  (B) $-2Q/3,\ -4Q/3$  (C) $-2Q/5,\ -8Q/5$  (D) $-4Q/5,\ -6Q/5$  (E) $-Q/2,\ -3Q/2$
Correct Answer: (C)  
Explanation:
Total charge $Q_{\text{tot}} = -2Q$. When connected, potential equalizes: $V_1 = V_2 \implies \frac{k q_1}{a} = \frac{k q_2}{4a} \implies q_2 = 4q_1$.
  $$q_1 + 4q_1 = -2Q \implies 5q_1 = -2Q \implies q_1 = -\frac{2}{5}Q,\quad q_2 = -\frac{8}{5}Q$$

Chapter 14: Electric Circuits Drill
Chapter 14 Drill: Question 1
Question: Brass wire has $4\times$ diameter and $5\times$ resistivity of silver wire of the same length. Compare resistances $R_B$ and $R_S$.  
Options:(A) $R_B = \frac{5}{16}R_S$  (B) $R_B = \frac{5}{4}R_S$  (C) $R_B = \frac{5}{64}R_S$  (D) $R_B = \frac{16}{5}R_S$  (E) $R_B = 20 R_S$
Correct Answer: (A)  
Explanation:
Area scales with diameter squared: $A_B = 4^2 A_S = 16 A_S$.
  $$R_B = \frac{\rho_B L}{A_B} = \frac{(5\rho_S)L}{16 A_S} = \frac{5}{16}R_S$$

Chapter 14 Drill: Question 2
Question: Doubling the voltage across an ohmic conductor without changing resistance causes current to:  
Options:(A) decrease by 4  (B) decrease by 2  (C) remain unchanged  (D) increase by a factor of 2  (E) increase by 4  
Correct Answer: (D)  
Explanation:
By Ohm's Law, $I = V/R$. For constant $R$, current is directly proportional to voltage, doubling when $V$ is doubled.  

Chapter 14 Drill: Question 3
Question: A circuit with total resistance $5\ \Omega$ dissipates $125\text{ W}$ of power. At what voltage is it operating?  
Options:(A) $5\text{ V}$  (B) $15\text{ V}$  (C) $25\text{ V}$  (D) $45\text{ V}$  (E) $625\text{ V}$  
Correct Answer: (C)  
Explanation:
$$P = \frac{V^2}{R} \implies V = \sqrt{P R} = \sqrt{(125\text{ W})(5\ \Omega)} = \sqrt{625} = 25\text{ V}$$

Chapter 14 Drill: Question 4
Question: A $120\text{ V}, 60\text{ W}$ bulb is connected to a $240\text{ V}$ outlet. How bright is the bulb compared to standard operation?  
Options:(A) 4 times as bright  (B) 2 times as bright  (C) Same brightness  (D) Half as bright  (E) One-quarter as bright  
Correct Answer: (A)  
Explanation:
$$P = \frac{V^2}{R} \propto V^2$$
Doubling the operating voltage quadruples the power dissipated ($2^2 = 4$), making the bulb 4 times as bright.  

Chapter 14 Drill: Question 5
Question: An ammeter arranged to measure circuit branch current should possess which characteristics?  
Options:(A) High resistance, in series  (B) Low resistance, in series  (C) High resistance, in parallel  (D) Low resistance, in parallel  (E) Same resistance, in series  
Correct Answer: (B)  
Explanation:
Ammeters must be placed in series so the entire branch current passes through them. Their internal resistance must approach zero ($R \approx 0$) so they do not add series resistance or alter the circuit current.  

Chapter 15: Magnetic Fields Drill
Chapter 15 Drill: Question 1
Question: Which statements are true regarding magnetic forces?  I. Magnetic force can never do work on a charged particle.  II. Magnetic force can never change the velocity of a charged particle.  III. A charged particle always experiences a force moving in a magnetic field.  
Options:(A) I only  (B) I and II only  (C) II and III only  (D) III only  (E) None of the above  
Correct Answer: (A)  
Explanation:
$\vec{F}_B = q(\vec{v}\times\vec{B})$ is always perpendicular to $\vec{v}$, so power $P = \vec{F}_B\cdot\vec{v} = 0$ and work is always zero (I is true). It alters direction, thus changing velocity vector $\vec{v}$ (II is false). Moving parallel to $\vec{B}$ produces zero force (III is false).  

Chapter 15 Drill: Question 2
Question: Particle ($q = 4.0\text{ nC}, m = 2 \times 10^{-4}\text{ kg}$) moves perpendicular to $B = 0.1\text{ T}$ at $3 \times 10^4\text{ m/s}$. What is its acceleration?  
Options:(A) $0.0006\text{ m/s}^2$  (B) $0.006\text{ m/s}^2$  (C) $0.06\text{ m/s}^2$  (D) $0.6\text{ m/s}^2$  (E) None of the above  
Correct Answer: (C)  
Explanation:
$$F_B = q v B = (4.0 \times 10^{-9}\text{ C})(3 \times 10^4\text{ m/s})(0.1\text{ T}) = 1.2 \times 10^{-5}\text{ N}$$
$$a = \frac{F_B}{m} = \frac{1.2 \times 10^{-5}\text{ N}}{2 \times 10^{-4}\text{ kg}} = 0.06\text{ m/s}^2$$

Chapter 15 Drill: Question 3
Question: Find the magnetic field $2\text{ cm}$ from a long straight wire carrying $10\text{ A}$.  
Options:(A) $1 \times 10^{-6}\text{ T}$  (B) $1 \times 10^{-5}\text{ T}$  (C) $2 \times 10^{-5}\text{ T}$  (D) $1 \times 10^{-4}\text{ T}$  (E) $2 \times 10^{-4}\text{ T}$  
Correct Answer: (D)  
Explanation:
$$B = \frac{\mu_0 I}{2\pi r} = \frac{(4\pi \times 10^{-7})(10)}{2\pi (0.02)} = \frac{4 \times 10^{-6}}{0.04} = 1.0 \times 10^{-4}\text{ T}$$

Chapter 16: Electromagnetism Drill
Chapter 16 Drill: Question 1
Question: A metal rod of length $L$ is pulled upward with speed $v$ through a uniform magnetic field $B$ pointing out of the page. What is the potential difference between endpoints $a$ (left) and $b$ (right)?  
Options:(A) $0$  (B) $\frac{1}{2}vBL$, $a$ higher  (C) $\frac{1}{2}vBL$, $b$ higher  (D) $vBL$, point $a$ at higher potential  (E) $vBL$, point $b$ at higher potential  
Correct Answer: (E)  
Explanation:
By the right-hand rule, $\vec{v}\times\vec{B}$ for upward velocity and out-of-page field points to the right. Mobile electrons are pushed left toward point $a$, leaving positive charge accumulation at point $b$. Point $b$ is at the higher electric potential by $\Delta V = vBL$.  

Chapter 16 Drill: Question 2
Question: A conducting rod of length $0.2\text{ m}$ and resistance $10\ \Omega$ slides at $3\text{ m/s}$ to the left along rails in $B = 0.5\text{ T}$ directed into the page. What is the magnitude and direction of the induced current?  
Options:(A) $0.03\text{ A}$, downward  (B) $0.03\text{ A}$, upward  (C) $0.3\text{ A}$, downward  (D) $0.3\text{ A}$, upward  (E) $0.015\text{ A}$, downward
Correct Answer: (A)  
Explanation:
$$\mathcal{E} = B L v = (0.5\text{ T})(0.2\text{ m})(3\text{ m/s}) = 0.3\text{ V}$$
$$I = \frac{\mathcal{E}}{R} = \frac{0.3\text{ V}}{10\ \Omega} = 0.03\text{ A}$$
Moving to the left decreases the loop area and inward flux. By Lenz's Law, the induced current circulates clockwise to produce inward flux, flowing downward through the moving rod.
"""

topic_em_drills = {
    1: ("Coulomb's Law Scaling Factor", "easy", "Electrostatics"),
    2: ("Negative Charge Kinematics in Electric Field", "medium", "Electrostatics"),
    3: ("Electric Field Superposition & Tripling", "medium", "Electrostatics"),
    4: ("Repulsive Coulomb Force Kinematics", "easy", "Electrostatics"),
    5: ("Electrostatic Potential Energy Turnaround", "hard", "Electrostatics"),
    6: ("Gauss's Law Flux vs. Point Field Superposition", "medium", "Electrostatics"),
    7: ("Uniformly Charged Sphere Interior Field", "hard", "Electrostatics"),
    8: ("Gaussian Surface Enclosing Electric Dipole", "easy", "Electrostatics"),
    9: ("Equipotential Work & Potential Difference", "medium", "Electrostatics"),
    10: ("Work by Conservative Electric Field", "easy", "Electrostatics"),
    11: ("Capacitor Dielectric Insertion & Stored Energy", "easy", "Capacitors & Dielectrics"),
    12: ("Electric Potential Energy Sign Definition", "easy", "Capacitors & Dielectrics"),
    13: ("Parallel Capacitors Individual Stored Energy", "easy", "Capacitors & Dielectrics"),
    14: ("Equipotential Surfaces in Uniform Field", "easy", "Capacitors & Dielectrics"),
    15: ("Connected Conducting Spheres Charge Equilibrium", "medium", "Capacitors & Dielectrics"),
    16: ("Resistivity & Conductor Cross-Section Ratio", "easy", "Electric Circuits"),
    17: ("Ohm's Law Proportionality", "easy", "Electric Circuits"),
    18: ("Circuit Power & Operating Voltage", "easy", "Electric Circuits"),
    19: ("Incandescent Bulb Overvoltage Power", "easy", "Electric Circuits"),
    20: ("Ammeter Construction & Series Resistance", "easy", "Electric Circuits"),
    21: ("Magnetic Force Work & Trajectory Properties", "easy", "Magnetic Fields"),
    22: ("Magnetic Lorentz Force & Particle Acceleration", "medium", "Magnetic Fields"),
    23: ("Biot-Savart Law Straight Wire Magnetic Field", "easy", "Magnetic Fields"),
    24: ("Motional EMF & Endpoint Potential Polarity", "medium", "Electromagnetic Induction"),
    25: ("Motional EMF on Rails & Lenz's Law Current", "medium", "Electromagnetic Induction"),
}

pattern = r'Question:\s*(.*?)\s*Options:\s*(.*?)\s*Correct Answer:\s*\(([A-E])\)\s*\nExplanation:\s*(.*?)(?=(?:Chapter|\Z))'
matches = list(re.finditer(pattern, raw_em_drills_text, re.DOTALL))
print(f"Matched {len(matches)} questions total")

parsed_em_drills = []
for idx, m in enumerate(matches):
    q_text = m.group(1).strip()
    opts_raw = m.group(2).strip()
    ans = m.group(3).strip()
    expl = m.group(4).strip()

    q_text = re.sub(r'\s*\[cite:\s*\d+\]', '', q_text)
    expl = re.sub(r'\s*\[cite:\s*\d+\]', '', expl)

    opt_matches = list(re.finditer(r'\(([A-E])\)\s*(.*?)(?=(?:\([A-E]\)|$))', opts_raw, re.DOTALL))
    options = [re.sub(r'\s*\[cite:\s*\d+\]', '', om.group(2).strip()) for om in opt_matches]

    q_num = idx + 1
    top_name, diff, sec_name = topic_em_drills.get(q_num, ("E&M Drills", "medium", "Electricity & Magnetism"))

    parsed_em_drills.append({
        "id": f"em-drill-q{q_num}",
        "global_num": q_num,
        "section": sec_name,
        "question": q_text,
        "options": options,
        "answer": ans,
        "explanation": f"({ans}) " + expl,
        "difficulty": diff,
        "topic": top_name
    })

print(f"Parsed total: {len(parsed_em_drills)} E&M Drill Questions")

with open('scratch/topic_em_drills.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_em_drills, f, indent=4, ensure_ascii=False)

print("Saved scratch/topic_em_drills.json successfully!")
