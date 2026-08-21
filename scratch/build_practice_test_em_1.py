import json
import re

raw_em_text = r"""Question 1
Question: A nonconducting sphere is given a nonzero net electric charge, $+Q$, and then brought close to a neutral conducting sphere of the same radius. Which of the following will be true?  
Options:(A) An electric field will be induced within the conducting sphere.  (B) The conducting sphere will develop a net electric charge of $-Q$.  (C) The spheres will experience an electrostatic attraction.  (D) The spheres will experience an electrostatic repulsion.  (E) The spheres will experience no electrostatic interaction.  
Correct Answer: (C)  
Explanation:
The positive charge $+Q$ on the nonconducting sphere induces negative mobile electrons to migrate toward the near side of the neutral conducting sphere, leaving equal positive bound charge on the far side. Because electrostatic force varies inversely with the square of distance ($F \propto 1/r^2$), the attractive force on the closer negative charges is strictly greater than the repulsive force on the farther positive charges, resulting in a net attractive electrostatic force.

Question 2
Question: If the total resistance of a circuit were doubled, the power dissipated by that same circuit would  
Options:(A) increase by a factor of 4  (B) increase by a factor of 2  (C) decrease by a factor of 2  (D) decrease by a factor of 4  (E) Cannot be determined  
Correct Answer: (E)  
Explanation:
Power dissipation can be expressed as $P = I^2 R$ or $P = V^2/R$. If the circuit is operated under a constant voltage source, doubling $R$ cuts power in half ($P \propto 1/R$). If operated under a constant current source, doubling $R$ doubles the power ($P \propto R$). Without specifying whether the voltage or current remains fixed, the change in power dissipation cannot be determined.

Question 3
Question: Each of the following ionized isotopes is projected with the same speed into a uniform magnetic field $B$ such that the isotope's initial velocity is perpendicular to $B$. Which combination of mass and charge would result in a circular path with the largest radius?  
Options:(A) $m = 16\text{ u},\ q = -5e$  (B) $m = 18\text{ u},\ q = -2e$  (C) $m = 19\text{ u},\ q = -2e$  (D) $m = 16\text{ u},\ q = +e$  (E) $m = 20\text{ u},\ q = +e$
Correct Answer: (E)  
Explanation:
The magnetic Lorentz force supplies the centripetal acceleration:
  $$|q|vB = \frac{mv^2}{r} \implies r = \frac{mv}{|q|B}$$
Since $v$ and $B$ are identical for all particles, the radius $r$ is directly proportional to the mass-to-charge magnitude ratio $m/|q|$. Evaluating $m/|q|$:
(A) $16/5 = 3.2$
(B) $18/2 = 9.0$
(C) $19/2 = 9.5$
(D) $16/1 = 16.0$
(E) $20/1 = 20.0$
Option (E) yields the largest ratio, producing the largest orbit radius.

Question 4
Question: The picture shows 4 charges of equal magnitude fixed at the corners of a rectangle ($2\text{ cm} \times 4\text{ cm}$). How many locations on either Line A (vertical bisector) or Line B (horizontal bisector) would be places with zero net electric field?  
Options:(A) 1  (B) 2  (C) All of Line A  (D) All of Line B  (E) All of both Line A and Line B  
Correct Answer: (A)  
Explanation:
By symmetry, only at the exact geometric center of the rectangle do the electric field vectors from all four symmetrically placed identical charges cancel out vectorially to yield $\vec{E}_{\text{net}} = 0$. Moving away from the center along Line A or Line B introduces asymmetric distances to the pairs of charges, creating a nonzero net electric field component along the perpendicular axis. Thus, there is only $1$ point of zero net electric field.

Question 5
Question: Four wires are each made of aluminum. Which wire will have the greatest electrical resistance?  
Options:(A) Wire A (short, thick)  (B) Wire B (longest, thinnest cross-section)  (C) Wire C (short, thin)  (D) Wire D (long, thick)  (E) All the wires have the same resistance.  
Correct Answer: (B)  
Explanation:
The resistance of a cylindrical conductor of resistivity $\rho$, length $L$, and cross-sectional area $A$ is given by $R = \frac{\rho L}{A}$. Because all wires have the same resistivity $\rho$, resistance is maximized by choosing the maximum length $L$ and minimum cross-sectional area $A$ (Wire B).

Question 6
Question: Which of the following is NOT equal to one tesla?  
Options:(A) $1\text{ J}/(\text{A}\cdot\text{m}^2)$  (B) $1\text{ kg}/(\text{C}\cdot\text{s})$  (C) $1\text{ N}/(\text{A}\cdot\text{m})$  (D) $1\text{ V}\cdot\text{s}/\text{m}^2$  (E) $1\text{ A}\cdot\text{N}/\text{V}$  
Correct Answer: (E)  
Explanation:
From $F = qvB = ILB$, $1\text{ T} = 1\frac{\text{N}}{\text{A}\cdot\text{m}}$.
$\frac{\text{J}}{\text{A}\cdot\text{m}^2} = \frac{\text{N}\cdot\text{m}}{\text{A}\cdot\text{m}^2} = \frac{\text{N}}{\text{A}\cdot\text{m}} = 1\text{ T}$
$\frac{\text{kg}}{\text{C}\cdot\text{s}} = \frac{\text{kg}\cdot\text{m/s}^2}{(\text{C/s})\cdot\text{m}} = \frac{\text{N}}{\text{A}\cdot\text{m}} = 1\text{ T}$
$1\text{ V}\cdot\text{s}/\text{m}^2 = \frac{\text{J/C}\cdot\text{s}}{\text{m}^2} = \frac{\text{N}\cdot\text{m}}{\text{A}\cdot\text{m}^2} = 1\text{ T}$
Option (E): $1\frac{\text{A}\cdot\text{N}}{\text{V}} = \frac{\text{A}\cdot\text{N}}{\text{J/C}} = \frac{\text{A}^2\text{s}\cdot\text{N}}{\text{N}\cdot\text{m}} = \frac{\text{A}^2\text{s}}{\text{m}} \ne 1\text{ T}$.

Question 7
Question: A cube with side length $d$ and a sphere with diameter $d$ each enclose the same net electric charge $+Q$. If $\Phi_C$ is the flux through the cube and $\Phi_S$ is the flux through the sphere, which of the following is true?  
Options:(A) $\Phi_C > \Phi_S$  (B) $\Phi_C < \Phi_S$  (C) $\Phi_C = \Phi_S$  (D) $\Phi_C = 0$  (E) $\Phi_S = 0$
Correct Answer: (C)  
Explanation:
By Gauss's Law, the total electric flux through any closed surface depends exclusively on the net enclosed charge: $\Phi_E = \oint \vec{E}\cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$. Because both closed surfaces enclose identical net charge $+Q$, their total electric fluxes are equal: $\Phi_C = \Phi_S = \frac{Q}{\varepsilon_0}$.

Question 8
Question: Two positive charges $Q_1$ and $Q_2$ of equal magnitude are fixed at $x = 0$ and $x = 100\text{ cm}$. A third positive charge $q$ is released from rest at $x = 70\text{ cm}$. At what position would it return to rest?  
Options:(A) $x = 30\text{ cm}$  (B) $x = 50\text{ cm}$  (C) $x = 70\text{ cm}$  (D) Cannot be determined without $q$  (E) It will not stop.  
Correct Answer: (E)  
Explanation:
In ideal electrostatic conditions without friction or radiation damping, energy is conserved. The symmetric potential energy well causes the charge to oscillate periodically between turning points $x = 70\text{ cm}$ and $x = 30\text{ cm}$, passing through $x = 50\text{ cm}$ at maximum speed. It continuously oscillates back and forth and does not come to a permanent stop.

Question 9
Question: An object carries a charge of $-1\text{ C}$. How many excess electrons does it contain?  
Options:(A) $6.25 \times 10^{18}$  (B) $8.00 \times 10^{18}$  (C) $1.60 \times 10^{19}$  (D) $3.20 \times 10^{19}$  (E) $6.25 \times 10^{19}$  
Correct Answer: (A)  
Explanation:
Using the elementary charge $e = 1.6 \times 10^{-19}\text{ C}$:
  $$N = \frac{|Q|}{e} = \frac{1.0\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = 6.25 \times 10^{18}\text{ electrons}$$

Question 10
Question: Four $200\ \Omega$ resistors are configured such that $R_2, R_3, R_4$ are in parallel with each other, and that entire parallel block is in series with $R_1$ across a $24\text{ V}$ ideal battery. How much total current is provided by the source?  
Options:(A) $30\text{ mA}$  (B) $48\text{ mA}$  (C) $64\text{ mA}$  (D) $72\text{ mA}$  (E) $90\text{ mA}$  
Correct Answer: (E)  
Explanation:
Equivalent resistance of three identical $200\ \Omega$ resistors in parallel:
  $$R_{234} = \frac{200\ \Omega}{3} \approx 66.67\ \Omega$$
Total series resistance:
  $$R_{\text{total}} = R_1 + R_{234} = 200 + \frac{200}{3} = \frac{800}{3}\ \Omega \approx 266.67\ \Omega$$
Total source current:
  $$I_{\text{total}} = \frac{V}{R_{\text{total}}} = \frac{24\text{ V}}{\frac{800}{3}\ \Omega} = \frac{72}{800}\text{ A} = 0.090\text{ A} = 90\text{ mA}$$

Question 11
Question: For the same circuit in Question 10, what is the ratio of the power dissipated by $R_1$ to the power dissipated by $R_4$?  
Options:(A) $1/9$  (B) $1/3$  (C) $1$  (D) $3$  (E) $9$
Correct Answer: (E)  
Explanation:
The entire current $I$ passes through $R_1$, whereas in the parallel bank of three identical resistors, the current through $R_4$ is $I_4 = \frac{1}{3}I$. Since $R_1 = R_4 = R$, the ratio of power dissipation is:
  $$\frac{P_1}{P_4} = \frac{I^2 R_1}{I_4^2 R_4} = \frac{I^2 R}{\left(\frac{1}{3}I\right)^2 R} = \frac{I^2}{\frac{1}{9}I^2} = 9$$

Question 12
Question: What is the value and unit of the product: $20\ \mu\text{F} \times 500\ \Omega$?  
Options:(A) $0.01\text{ henry}$  (B) $0.01\text{ ampere per coulomb}$  (C) $0.01\text{ weber}$  (D) $0.01\text{ second}$  (E) $0.01\text{ volt per ampere}$  
Correct Answer: (D)  
Explanation:
Numerical value: $(20 \times 10^{-6}\text{ F}) \times (500\ \Omega) = 0.010$.
Dimensional analysis of the $RC$ time constant ($\tau = RC$):
  $$[\text{Farad}] \times [\text{Ohm}] = \left(\frac{\text{Coulomb}}{\text{Volt}}\right) \times \left(\frac{\text{Volt}}{\text{Ampere}}\right) = \frac{\text{C}}{\text{C/s}} = \text{second}$$
Thus, the result is $0.01\text{ second}$.

Question 13
Question: A copper wire circle of radius $1\text{ m}$ is immersed in a magnetic field $B(t) = 2t(1-t) = 2t - 2t^2$ perpendicular into the page. What is the magnitude of the induced electric field in the wire at time $t = 1\text{ s}$?  
Options:(A) $(1/\pi)\text{ N/C}$  (B) $1\text{ N/C}$  (C) $2\text{ N/C}$  (D) $\pi\text{ N/C}$  (E) $2\pi\text{ N/C}$  
Correct Answer: (B)  
Explanation:
Faraday's Law in non-electrostatic form relating $\vec{E}$ and magnetic flux $\Phi_B$:
  $$\oint \vec{E}\cdot d\vec{l} = -\frac{d\Phi_B}{dt} = -A\frac{dB}{dt}$$
  $$E(2\pi r) = -\pi r^2 \frac{d}{dt}(2t - 2t^2) = -\pi r^2 (2 - 4t)$$
  $$E = \frac{r}{2}|2 - 4t|$$
At $t = 1\text{ s}$ with $r = 1\text{ m}$:
  $$E = \frac{1}{2}|2 - 4(1)| = \frac{1}{2}(2) = 1\text{ N/C} \text{ (or V/m)}$$

Question 14
Question: The top half of a rectangular loop of wire ($x\text{ m} \times y\text{ m}$) hangs vertically in a uniform magnetic field $B$ pointing into the page, supporting a mass $m$. Find the magnitude and direction of the loop current to balance the mass's weight.  
Options:(A) $I = \frac{mg}{xB}$, clockwise  (B) $I = \frac{mg}{xB}$, counterclockwise  (C) $I = \frac{mg}{(x + \frac{1}{2}y)B}$, clockwise  (D) $I = \frac{mg}{(x + \frac{1}{2}y)B}$, counterclockwise  (E) $I = \frac{mg}{(x + y)B}$, clockwise  
Correct Answer: (A)  
Explanation:
The magnetic forces on the vertical segments of length $y/2$ are equal and opposite, canceling each other out. The top horizontal wire of length $x$ must produce an upward magnetic force balancing gravity:
  $$F_B = I x B = mg \implies I = \frac{mg}{xB}$$
By the right-hand rule ($\vec{F}_B = I\vec{L}\times\vec{B}$), with $\vec{B}$ directed into the page, an upward force requires current pointing to the right along the top wire, which corresponds to a clockwise circulation.

Question 15
Question: Particle $q_1 = 10\text{ nC}$ is fixed in place. Particle $q_2 = -5\text{ nC}$ of mass $m = 5 \times 10^{-10}\text{ kg}$ is released from rest $2\text{ cm}$ away from $q_1$. How fast will it move when it is $1\text{ cm}$ away?  
Options:(A) $100\text{ m/s}$  (B) $200\text{ m/s}$  (C) $300\text{ m/s}$  (D) $400\text{ m/s}$  (E) $500\text{ m/s}$
Correct Answer: (C)  
Explanation:
Change in electric potential from $r_i = 0.02\text{ m}$ to $r_f = 0.01\text{ m}$:
  $$\Delta V = k q_1 \left(\frac{1}{r_f} - \frac{1}{r_i}\right) = (9 \times 10^9)(10 \times 10^{-9})\left(\frac{1}{0.01} - \frac{1}{0.02}\right) = 90(100 - 50) = +4500\text{ V}$$
Change in electric potential energy:
  $$\Delta U_E = q_2 \Delta V = (-5 \times 10^{-9}\text{ C})(4500\text{ V}) = -2.25 \times 10^{-5}\text{ J}$$
By Conservation of Energy ($\Delta K = -\Delta U_E$):
  $$\frac{1}{2}m v_f^2 = 2.25 \times 10^{-5}\text{ J} \implies v_f = \sqrt{\frac{2(2.25 \times 10^{-5}\text{ J})}{5 \times 10^{-10}\text{ kg}}} = \sqrt{9 \times 10^4} = 300\text{ m/s}$$

Question 16
Question: Two long straight parallel wires carry current: Wire 1 carries $I$ to the right, and Wire 2 carries $2I$ to the left. At which of the marked points is the net magnetic field zero?  
Options:(A) Point 1 only (above Wire 1)  (B) Points 1 and 2 only  (C) Point 2 only  (D) Points 3 and 4 only  (E) Point 3 only  
Correct Answer: (A)  
Explanation:
Between the wires, right-hand rule shows both currents produce magnetic fields pointing into the page, so they add constructively and cannot cancel.
Above Wire 1 (Point 1), Wire 1 produces a field pointing out of the page ($B_1 = \frac{\mu_0 I}{2\pi d}$), while Wire 2 produces a field pointing into the page ($B_2 = \frac{\mu_0 (2I)}{2\pi (2d)} = \frac{\mu_0 I}{2\pi d}$). Because the fields are equal in magnitude and opposite in direction, the net magnetic field at Point 1 is zero.

Question 17
Question: A charge $+q$ is released from rest near a fixed charge $+Q$. Which graph best depicts the acceleration $a$ of $+q$ as a function of its distance $r$ from $+Q$?  
Options:(A) Decreasing curve proportional to $1/r^2$  (B) Decreasing linear line  (C) Increasing curve  (D) Horizontal line (constant)  (E) Exponential increase
Correct Answer: (A)  
Explanation:
By Coulomb's Law and Newton's Second Law:
  $$a(r) = \frac{F_E}{m} = \frac{1}{4\pi\varepsilon_0}\frac{Qq}{m r^2} \propto \frac{1}{r^2}$$
The acceleration decreases monotonically following an inverse-square relationship with distance $r$, which is correctly illustrated in graph (A).

Question 18
Question: Capacitors $C_1 = 3\ \mu\text{F}$ (initially $Q_1 = 24\ \mu\text{C}$) and $C_2 = 6\ \mu\text{F}$ (initially $Q_2 = 12\ \mu\text{C}$) are connected in parallel when switch S is closed. How much charge will be stored on the positive plate of the $6\ \mu\text{F}$ capacitor at equilibrium?  
Options:(A) $18\ \mu\text{C}$  (B) $20\ \mu\text{C}$  (C) $24\ \mu\text{C}$  (D) $27\ \mu\text{C}$  (E) $36\ \mu\text{C}$  
Correct Answer: (C)  
Explanation:
Total initial charge on the plates:
  $$Q_{\text{total}} = 24\ \mu\text{C} + 12\ \mu\text{C} = 36\ \mu\text{C}$$
In parallel, both capacitors share the same potential difference $V = \frac{Q_{\text{total}}}{C_1 + C_2} = \frac{36\ \mu\text{C}}{3\ \mu\text{F} + 6\ \mu\text{F}} = 4\text{ V}$.
Final charge on the $6\ \mu\text{F}$ capacitor ($C_2$):
  $$Q_2' = C_2 V = (6\ \mu\text{F})(4\text{ V}) = 24\ \mu\text{C}$$

Question 19
Question: A metal bar of length $L$ is pulled with velocity $v$ through a uniform magnetic field $B$ pointing into the plane of the page. The velocity $v$ is parallel to the magnetic field. What is the voltage produced between the ends of the bar?
Options:(A) $vB$, with point X at a higher potential than point Y  (B) $vB$, with point Y at a higher potential than point X  (C) $vBL$, with point X at a higher potential than point Y  (D) $vBL$, with point Y at a higher potential than point X  (E) None of the above
Correct Answer: (E)
Explanation:
The magnetic force on mobile conduction electrons within the conductor is given by $\vec{F}_B = q(\vec{v} \times \vec{B})$. Because the velocity vector $\vec{v}$ is parallel to the magnetic field vector $\vec{B}$, the cross product is zero ($\vec{v} \times \vec{B} = 0$). No charge separation occurs along the bar, producing zero motional emf ($\mathcal{E} = 0\text{ V}$). Therefore, (E) is the correct choice.

Question 20
Question: An electric dipole consists of a pair of equal but opposite point charges of magnitude $4.0\text{ nC}$ separated by a distance of $2.0\text{ cm}$. What is the electric field strength at the point midway between the charges?
Options:(A) $9.0 \times 10^4\text{ V/m}$  (B) $1.8 \times 10^5\text{ V/m}$  (C) $3.6 \times 10^5\text{ V/m}$  (D) $7.2 \times 10^4\text{ V/m}$  (E) $7.2 \times 10^5\text{ V/m}$
Correct Answer: (E)
Explanation:
The midpoint is at distance $r = 1.0\text{ cm} = 0.01\text{ m}$ from each charge. Electric field lines point away from $+q$ and toward $-q$, so the electric field vectors from both charges point in the exact same direction and add constructively:
  $$E_{\text{net}} = E_+ + E_- = 2\left(\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\right) = 2(9.0 \times 10^9)\frac{4.0 \times 10^{-9}\text{ C}}{(0.01\text{ m})^2} = 18.0 \times \frac{4.0}{1.0 \times 10^{-4}} = 7.2 \times 10^5\text{ V/m}$$

Question 21
Question: Two concentric spherical metal shells have radii $R$ and $2R$, respectively. Find the capacitance of this spherical capacitor.
Options:(A) $\frac{1}{8\pi\varepsilon_0 R}$  (B) $\frac{1}{4\pi\varepsilon_0 R}$  (C) $2\pi\varepsilon_0 R$  (D) $4\pi\varepsilon_0 R$  (E) $8\pi\varepsilon_0 R$
Correct Answer: (E)
Explanation:
The potential difference between two concentric spherical conductors of radii $a = R$ and $b = 2R$ carrying charge $+Q$ and $-Q$ is:
  $$\Delta V = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{R} - \frac{1}{2R}\right) = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{2R}\right) = \frac{Q}{8\pi\varepsilon_0 R}$$
The capacitance is defined by $C = \frac{Q}{\Delta V}$:
  $$C = \frac{Q}{\frac{Q}{8\pi\varepsilon_0 R}} = 8\pi\varepsilon_0 R$$

Question 22
Question: Traveling at an initial speed of $1.5 \times 10^6\text{ m/s}$, a proton enters a region of constant magnetic field $B = 1.0\text{ T}$ at an angle of $30^\circ$ with $\vec{B}$. Compute the proton's speed $4\text{ s}$ after entering the magnetic field.
Options:(A) $5.0 \times 10^5\text{ m/s}$  (B) $7.5 \times 10^5\text{ m/s}$  (C) $1.5 \times 10^6\text{ m/s}$  (D) $3.0 \times 10^6\text{ m/s}$  (E) $6.0 \times 10^6\text{ m/s}$
Correct Answer: (C)
Explanation:
The magnetic force $\vec{F}_B = q(\vec{v} \times \vec{B})$ is strictly perpendicular to the velocity vector $\vec{v}$ at all times. Consequently, the magnetic work done on the charged particle is zero ($W = \int \vec{F}_B \cdot d\vec{r} = 0$), meaning the kinetic energy and orbital speed remain constant over time. Thus, the speed remains $1.5 \times 10^6\text{ m/s}$.

Question 23
Question: An $LR$ circuit consists of a battery $\mathcal{E}$, resistor $r$, and a parallel branch with resistor $R$ and inductor $L$ in series with another resistor $R$. What is the current through $r$ immediately after switch S is closed?
Options:(A) $0$  (B) $\frac{\mathcal{E}}{r + R}$  (C) $\frac{\mathcal{E}}{r + 2R}$  (D) $\frac{\mathcal{E}}{2r + R}$  (E) $\frac{2\mathcal{E}}{2r + R}$
Correct Answer: (B)
Explanation:
At $t = 0^+$, the inductor produces an infinite back-emf opposing any instantaneous change in current, acting as an open circuit ($I_L(0^+) = 0$). Therefore, current only flows through the loop consisting of resistor $r$ and the single parallel resistor $R$. The initial current is:
  $$I(0^+) = \frac{\mathcal{E}}{r + R}$$

Question 24
Question: After the switch has been kept closed for a long time in the circuit of Question 23, how much energy is stored in the inductor?
Options:(A) $\frac{L\mathcal{E}^2}{2(2r+R)^2}$  (B) $\frac{L\mathcal{E}^2}{2(2r+R)^2}$  (C) $\frac{L\mathcal{E}^2}{4(2r+R)^2}$  (D) $\frac{RL\mathcal{E}^2}{8(2r+R)^2}$  (E) $\frac{L\mathcal{E}^2}{8(2r+R)^2}$
Correct Answer: (B)
Explanation:
As $t \to \infty$, the inductor acts as a short circuit with zero resistance. The parallel combination of the two branches (each containing resistance $R$) is $R_{\text{parallel}} = R/2$.
Total equivalent resistance is $R_{\text{eq}} = r + R/2 = \frac{2r+R}{2}$.
Total current from the source: $I_{\text{total}} = \frac{\mathcal{E}}{r + R/2} = \frac{2\mathcal{E}}{2r + R}$.
Because both parallel branches have equal resistance $R$, the current splits evenly, so the inductor branch current is $I_L = \frac{1}{2}I_{\text{total}} = \frac{\mathcal{E}}{2r + R}$.
The magnetic energy stored is:
  $$U_L = \frac{1}{2}L I_L^2 = \frac{1}{2}L\left(\frac{\mathcal{E}}{2r+R}\right)^2 = \frac{L\mathcal{E}^2}{2(2r+R)^2}$$

Question 25
Question: After having been closed for a long time, the switch S is suddenly opened. What is the current through $r$ immediately after S is opened?
Options:(A) $0$  (B) $\frac{\mathcal{E}}{r+R}$  (C) $\frac{\mathcal{E}}{r+2R}$  (D) $\frac{\mathcal{E}}{2r+R}$  (E) $\frac{2\mathcal{E}}{2r+R}$
Correct Answer: (A)
Explanation:
Opening the switch mechanically isolates the branch containing resistor $r$ from the closed loop. The current through $r$ drops instantaneously to zero ($I_r = 0$). The inductor continues to drive current through the remaining closed loop containing the two $R$ resistors until its stored magnetic energy is dissipated.

Question 26
Question: A solid neutral metal sphere of radius $6a$ contains an off-center spherical cavity of radius $a$ enclosing a point charge $+q$. If $E_X$ and $E_Y$ denote the electric field strengths at exterior points X and Y located at the same distance $r > 6a$ from the center of the sphere, which of the following is true?
Options:(A) $E_X = 16E_Y$  (B) $E_X = \left(\frac{11}{5}\right)E_Y$  (C) $E_X = E_Y$  (D) $E_X = \left(\frac{11}{5}\right)^2 E_Y$  (E) $E_X = 0$
Correct Answer: (C)
Explanation:
By electrostatic shielding, charge $-q$ distributes on the inner cavity wall, leaving $+q$ distributed uniformly over the outer spherical conductor surface. Outside the conducting sphere ($r > 6a$), the external electric field is identical to that of a point charge $+q$ located at the sphere's geometric center:
  $$E(r) = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}$$
Because points X and Y are equidistant from the center of the sphere, $E_X = E_Y$.

Question 27
Question: Two charges $+Q$ are fixed at $(0, 4\text{ m})$ and $(0, -4\text{ m})$. Determine the work done by the electric field to move a charge $-Q$ from infinity to point P at $(3\text{ m}, 0)$.
Options:(A) $\frac{2kQ^2}{3}$  (B) $\frac{2kQ^2}{5}$  (C) $-\frac{2kQ^2}{5}$  (D) $\frac{kQ^2}{5}$  (E) $-\frac{3kQ^2}{5}$
Correct Answer: (B)
Explanation:
The distance from each $+Q$ charge to point P is $r = \sqrt{3^2 + 4^2} = 5\text{ m}$.
The electric potential at point P is:
  $$V_P = \frac{kQ}{5} + \frac{kQ}{5} = \frac{2kQ}{5}$$
The work done by the electric field is $W_E = -\Delta U = -q(V_P - V_\infty)$:
  $$W_E = -(-Q)\left(\frac{2kQ}{5} - 0\right) = +\frac{2kQ^2}{5}$$

Question 28
Question: A circuit connects a battery $\mathcal{E}$, switch, resistor $R$, and inductor $L$ in series. How long will it take for the current to reach $99\%$ of its maximum value?
Options:(A) $(\ln 0.99)\frac{L}{R}$  (B) $(\ln 99)RL$  (C) $\left(\ln\frac{1}{100}\right)\frac{L}{R}$  (D) $\left(\ln\frac{100}{99}\right)\frac{L}{R}$  (E) $(\ln 100)\frac{L}{R}$
Correct Answer: (E)
Explanation:
The current in a charging $RL$ circuit obeys $I(t) = I_{\max}(1 - e^{-t/\tau})$, where $\tau = L/R$. Setting $I(t) = 0.99 I_{\max}$:
  $$1 - e^{-t/\tau} = 0.99 \implies e^{-t/\tau} = 0.01 = \frac{1}{100}$$
  $$-\frac{t}{\tau} = \ln\left(\frac{1}{100}\right) = -\ln(100) \implies t = (\ln 100)\tau = (\ln 100)\frac{L}{R}$$

Question 29
Question: What is the maximum number of $40\text{ W}$ light bulbs that can be connected in parallel across a $120\text{ V}$ source without exceeding a $5\text{ A}$ fuse limit?
Options:(A) 6  (B) 9  (C) 12  (D) 15  (E) 15
Correct Answer: (E)
Explanation:
The maximum total electric power available without blowing the fuse is:
  $$P_{\max} = V I_{\max} = (120\text{ V})(5\text{ A}) = 600\text{ W}$$
The number of $40\text{ W}$ bulbs in parallel is:
  $$N = \frac{P_{\max}}{P_{\text{bulb}}} = \frac{600\text{ W}}{40\text{ W}} = 15 \text{ bulbs}$$

Question 30
Question: A loop of wire is situated in a magnetic field $\vec{B}$ pointing out of the page. If $B$ decreases uniformly in strength, the induced current in the loop is:
Options:(A) clockwise and decreasing  (B) clockwise and increasing  (C) counterclockwise and decreasing  (D) counterclockwise and constant  (E) counterclockwise and increasing
Correct Answer: (D)
Explanation:
As the out-of-page flux decreases, by Lenz's Law the induced current must create out-of-page magnetic flux to oppose this change, which requires a counterclockwise current. Because $B(t)$ decreases uniformly ($\frac{dB}{dt} = \text{constant}$), the induced electromotive force $\mathcal{E} = -A\frac{dB}{dt}$ and the resulting induced current $I = \mathcal{E}/R$ are nonzero and constant.

Question 31
Question: A dielectric of thickness $d/3$ and constant $K$ is inserted between the plates (separation $d$) of a parallel-plate capacitor. What is the total capacitance?
Options:(A) $\frac{\varepsilon_0 A(2+3K)}{d}$  (B) $\frac{3\varepsilon_0 A}{d(2K+1)}$  (C) $\frac{3K\varepsilon_0 A}{d(2K+1)}$  (D) $\frac{3K\varepsilon_0 A}{d(2K+1)}$  (E) $\frac{3K\varepsilon_0 A}{d(K+2)}$
Correct Answer: (D)
Explanation:
The system consists of three series capacitors: two vacuum gaps of thickness $d/3$ and one dielectric slab of thickness $d/3$.
  $$C_{\text{vac}} = \frac{\varepsilon_0 A}{d/3} = \frac{3\varepsilon_0 A}{d}, \quad C_{\text{diel}} = \frac{K\varepsilon_0 A}{d/3} = \frac{3K\varepsilon_0 A}{d}$$
  $$\frac{1}{C_{\text{eq}}} = \frac{1}{C_{\text{vac}}} + \frac{1}{C_{\text{diel}}} + \frac{1}{C_{\text{vac}}} = \frac{2d}{3\varepsilon_0 A} + \frac{d}{3K\varepsilon_0 A} = \frac{d(2K+1)}{3K\varepsilon_0 A}$$
  $$C_{\text{eq}} = \frac{3K\varepsilon_0 A}{d(2K+1)}$$

Question 32
Question: For two charges $+Q$ and $-Q$ separated by a finite distance, at how many points in the plane of the page are both the electric field and the electric potential equal to zero?
Options:(A) 0  (B) 1  (C) 2  (D) Infinite  (E) None of the above
Correct Answer: (A)
Explanation:
The electric potential $V = 0$ along the perpendicular bisector line. However, on this line, the electric fields from the two charges add constructively parallel to the dipole axis, meaning $\vec{E} \ne 0$ everywhere in the finite plane. Thus, there are $0$ points where both $\vec{E} = 0$ and $V = 0$ simultaneously (except at infinity).

Question 33
Question: Four wires pass perpendicularly through a square $WXYZ$, carrying currents $I, 2I, 3I, 4I$ with orientations as labeled (two in, two out). What is the absolute value of $\oint \vec{B}\cdot d\vec{\ell}$ around $WXYZ$?
Options:(A) $\frac{1}{2}\mu_0 I$  (B) $\mu_0 I$  (C) $\sqrt{5}\mu_0 I$  (D) $2\mu_0 I$  (E) $5\mu_0 I$
Correct Answer: (D)
Explanation:
By Ampere's Law: $\oint \vec{B}\cdot d\vec{\ell} = \mu_0 I_{\text{enc}}$.
The net enclosed current is the algebraic sum taking directions into account:
  $$I_{\text{enc}} = (2I + 4I) - (I + 3I) = 6I - 4I = 2I$$
  $$\left|\oint \vec{B}\cdot d\vec{\ell}\right| = 2\mu_0 I$$

Question 34
Question: A charge $+q$ is moved from point A to point B along Path 1. What would the change in potential energy be if the charge moved along Path 2 from point A to point B instead?
Options:(A) Double  (B) The same  (C) Negative of the original  (D) Zero  (E) Cannot be determined
Correct Answer: (B)
Explanation:
The electrostatic force is conservative, which means the electrostatic potential difference $\Delta V = V_B - V_A$ and the corresponding change in potential energy $\Delta U = q\Delta V$ depend entirely on the initial and final endpoints and are completely independent of the path taken.

Question 35
Question: Two point charges $+Q$ are fixed a distance $L$ apart. A particle of charge $-q$ and mass $m$ is placed symmetrically on the perpendicular bisector at distance $L/2$. What is its initial acceleration when released from rest?
Options:(A) $\frac{\sqrt{2}Qq}{2\pi\varepsilon_0 L^2 m}$  (B) $\frac{Qq}{\pi\varepsilon_0 L^2 m}$  (C) $\frac{2Qq}{\pi\varepsilon_0 L^2 m}$  (D) $\frac{2\sqrt{2}Qq}{\pi\varepsilon_0 L^2 m}$  (E) $\frac{4Qq}{\pi\varepsilon_0 L^2 m}$
Correct Answer: (A)
Explanation:
The distance from $-q$ to each $+Q$ is $r = \sqrt{(L/2)^2 + (L/2)^2} = \frac{L}{\sqrt{2}}$.
The force from each $+Q$ charge has magnitude:
  $$F_1 = \frac{1}{4\pi\varepsilon_0}\frac{Qq}{r^2} = \frac{1}{4\pi\varepsilon_0}\frac{Qq}{L^2/2} = \frac{2Qq}{4\pi\varepsilon_0 L^2}$$
The horizontal components cancel, and the vertical components add at an angle of $45^\circ$:
  $$F_{\text{net}} = 2 F_1 \cos 45^\circ = 2\left(\frac{2Qq}{4\pi\varepsilon_0 L^2}\right)\left(\frac{\sqrt{2}}{2}\right) = \frac{\sqrt{2}Qq}{2\pi\varepsilon_0 L^2}$$
Acceleration $a = \frac{F_{\text{net}}}{m} = \frac{\sqrt{2}Qq}{2\pi\varepsilon_0 L^2 m}$.
"""

topic_mapping_em = {
    1: ("Electrostatic Induction & Polarization", "easy"),
    2: ("Electric Power & Resistance Relationships", "easy"),
    3: ("Magnetic Lorentz Force & Orbital Radius", "medium"),
    4: ("Electric Field Symmetry & Superposition", "medium"),
    5: ("Resistivity & Conductor Geometry", "easy"),
    6: ("Magnetic Units & Dimensional Analysis", "easy"),
    7: ("Gauss's Law & Enclosed Electric Flux", "easy"),
    8: ("Electrostatic Potential Wells & Oscillations", "medium"),
    9: ("Elementary Charge Quantization", "easy"),
    10: ("DC Resistor Networks & Kirchhoff's Rules", "medium"),
    11: ("Power Dissipation in Resistor Networks", "medium"),
    12: ("RC Time Constant & Dimensional Analysis", "easy"),
    13: ("Faraday's Law & Induced Electric Fields", "hard"),
    14: ("Magnetic Force on Current Loops & Equilibrium", "medium"),
    15: ("Electrostatic Potential Energy & Energy Conservation", "medium"),
    16: ("Magnetic Fields of Parallel Current Wires", "medium"),
    17: ("Coulomb's Law & Variable Acceleration", "easy"),
    18: ("Parallel Capacitors & Charge Redistribution", "medium"),
    19: ("Motional EMF & Cross Product Geometry", "medium"),
    20: ("Electric Dipole Field at Midpoint", "medium"),
    21: ("Spherical Capacitor Capacitance Derivation", "hard"),
    22: ("Magnetic Force Work & Constant Speed", "easy"),
    23: ("LR Circuit Initial Response ($t = 0^+$)", "medium"),
    24: ("LR Circuit Steady-State Inductor Energy", "hard"),
    25: ("LR Circuit Switch Opening Dynamics", "medium"),
    26: ("Electrostatic Shielding & Cavity Fields", "hard"),
    27: ("Electric Potential & Work by Electric Field", "medium"),
    28: ("RL Circuit Exponential Rise Time Constant", "medium"),
    29: ("Parallel Appliance Circuits & Fuse Limits", "easy"),
    30: ("Faraday's Law, Lenz's Law & Induced Current", "easy"),
    31: ("Composite Dielectric Parallel-Plate Capacitor", "hard"),
    32: ("Dipole Electric Field vs. Potential Zeros", "medium"),
    33: ("Ampere's Law Line Integrals", "medium"),
    34: ("Conservative Electric Fields & Path Independence", "easy"),
    35: ("2D Electrostatic Vector Forces & Acceleration", "hard"),
}

pattern = r'Question\s+(\d+)\s*\nQuestion:\s*(.*?)\s*Options:\s*(.*?)\s*Correct Answer:\s*\(([A-E])\)\s*\nExplanation:\s*(.*?)(?=(?:Question\s+\d+|$))'
matches = list(re.finditer(pattern, raw_em_text, re.DOTALL))
print(f'Matched: {len(matches)} questions')

parsed_list = []
for m in matches:
    q_num = int(m.group(1))
    q_text = m.group(2).strip()
    opts_raw = m.group(3).strip()
    ans = m.group(4).strip()
    expl = m.group(5).strip()

    # Clean [cite: 1] if any
    q_text = re.sub(r'\s*\[cite:\s*\d+\]', '', q_text)
    expl = re.sub(r'\s*\[cite:\s*\d+\]', '', expl)

    # Parse options (A), (B), (C), (D), (E)
    opt_matches = list(re.finditer(r'\(([A-E])\)\s*(.*?)(?=(?:\([A-E]\)|$))', opts_raw, re.DOTALL))
    options = [re.sub(r'\s*\[cite:\s*\d+\]', '', om.group(2).strip()) for om in opt_matches]

    topic_name, diff = topic_mapping_em.get(q_num, ("Electricity & Magnetism", "medium"))

    parsed_list.append({
        "id": f"pt1-em-q{q_num}",
        "global_num": q_num,
        "section": "Practice Test 1 – Electricity & Magnetism",
        "question": q_text,
        "options": options,
        "answer": ans,
        "explanation": f"({ans}) " + expl,
        "difficulty": diff,
        "topic": topic_name
    })

print(f"Parsed total: {len(parsed_list)}")

with open('scratch/pt1_em_questions.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_list, f, indent=4, ensure_ascii=False)

print("Saved scratch/pt1_em_questions.json successfully!")
