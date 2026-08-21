import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

raw_part2_text = r"""Chapter 8: Systems of Particles & Linear Momentum Drill
Chapter 8 Drill: Question 1
Question: An object of mass $2\text{ kg}$ has a linear momentum of magnitude $6\text{ kg}\cdot\text{m/s}$. What is this object's kinetic energy?  
Options:(A) $3\text{ J}$  (B) $6\text{ J}$  (C) $9\text{ J}$  (D) $12\text{ J}$  (E) $18\text{ J}$  
Correct Answer: (C)  
Explanation:
Using the relation between kinetic energy and momentum ($K = \frac{p^2}{2m}$):
  $$K = \frac{(6\text{ kg}\cdot\text{m/s})^2}{2(2\text{ kg})} = \frac{36}{4} = 9\text{ J}$$

Chapter 8 Drill: Question 2
Question: An object of mass $8\text{ kg}$ is moving in a straight line. If the impulse calculated from the force-time graph ($J = \int F\,dt$) is $80\text{ N}\cdot\text{s}$, what is its change in speed?  
Options:(A) $16\text{ m/s}$  (B) $14\text{ m/s}$  (C) $12\text{ m/s}$  (D) $10\text{ m/s}$  (E) $8\text{ m/s}$  
Correct Answer: (D)  
Explanation:
By the Impulse-Momentum Theorem ($J = \Delta p = m\Delta v$):
  $$\Delta v = \frac{J}{m} = \frac{80\text{ N}\cdot\text{s}}{8\text{ kg}} = 10\text{ m/s}$$

Chapter 8 Drill: Question 3
Question: A box of mass $2\text{ kg}$ accelerates in a straight line from $4\text{ m/s}$ to $8\text{ m/s}$ due to a force applied for $0.5\text{ s}$. Find the average strength of this force.  
Options:(A) $4\text{ N}$  (B) $8\text{ N}$  (C) $12\text{ N}$  (D) $14\text{ N}$  (E) $16\text{ N}$  
Correct Answer: (E)  
Explanation:
$$F_{\text{avg}} = \frac{m(v_f - v_i)}{\Delta t} = \frac{(2\text{ kg})(8\text{ m/s} - 4\text{ m/s})}{0.5\text{ s}} = \frac{8}{0.5} = 16\text{ N}$$

Chapter 8 Drill: Question 4
Question: A ball of mass $m$ traveling horizontally with velocity $v$ strikes a massive vertical wall and rebounds back along its original direction with no change in speed. What is the magnitude of the impulse delivered by the wall to the ball?  
Options:(A) $0$  (B) $\frac{1}{2}mv$  (C) $mv$  (D) $2mv$  (E) $4mv$  
Correct Answer: (D)  
Explanation:
Taking the rebound direction as positive:
$$J = |\Delta p| = |m(v) - m(-v)| = 2mv$$

Chapter 8 Drill: Question 5
Question: Two objects, one of mass $3\text{ kg}$ moving at $2\text{ m/s}$ and the other of mass $5\text{ kg}$ moving at $2\text{ m/s}$ toward each other, collide head-on in a perfectly inelastic collision. Find the speed of the objects after the collision.  
Options:(A) $0.25\text{ m/s}$  (B) $0.5\text{ m/s}$  (C) $0.75\text{ m/s}$  (D) $1.0\text{ m/s}$  (E) $2.0\text{ m/s}$  
Correct Answer: (B)  
Explanation:
Using conservation of linear momentum:
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f \implies (3)(2) + (5)(-2) = (3 + 5)v_f$$
$$6 - 10 = 8v_f \implies v_f = -\frac{4}{8} = -0.5\text{ m/s}$$
The resulting speed is $0.5\text{ m/s}$.

Chapter 8 Drill: Question 6
Question: A student balances a meter stick at its midpoint ($50\text{ cm}$). Given hanging masses $m_1 = 6\text{ kg}$ at $x = 0\text{ cm}$ and $m_2 = 2\text{ kg}$ at $x = 100\text{ cm}$, how far from the left edge should a third mass $m_3 = 10\text{ kg}$ be hung to balance the meter stick?  
Options:(A) $40\text{ cm}$  (B) $50\text{ cm}$  (C) $60\text{ cm}$  (D) $70\text{ cm}$  (E) $80\text{ cm}$  
Correct Answer: (D)  
Explanation:
For rotational static equilibrium about the midpoint ($50\text{ cm}$), the system center of mass must equal $50\text{ cm}$ ($0.50\text{ m}$):
  $$x_{\text{cm}} = \frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3} \implies 0.50 = \frac{6(0) + 2(1.0) + 10 x_3}{6 + 2 + 10}$$
  $$0.50(18) = 2.0 + 10 x_3 \implies 9.0 - 2.0 = 10 x_3 \implies x_3 = 0.70\text{ m} = 70\text{ cm}$$

Chapter 8 Drill: Question 7
Question: Two objects move toward each other, collide, and separate. If there was no net external force acting on the objects, but some kinetic energy was lost, then:  
Options:(A) the collision was elastic and momentum was conserved  (B) the collision was elastic and momentum was not conserved  (C) the collision was not elastic and total linear momentum was conserved  (D) the collision was not elastic and momentum was not conserved  (E) Cannot be determined  
Correct Answer: (C)  
Explanation:
With zero net external force ($F_{\text{net}} = 0$), linear momentum is strictly conserved in all collisions. Because mechanical kinetic energy is lost, the collision is by definition inelastic.

Chapter 8 Drill: Question 8
Question: Three thin, uniform rods each of length $L$ are arranged in an inverted U-shape. The two vertical arms each have mass $m$; the horizontal top rod has mass $2m$. How far below the midpoint of the horizontal rod is the center of mass of the assembly?  
Options:(A) $L/8$  (B) $L/4$  (C) $3L/8$  (D) $L/2$  (E) $3L/4$  
Correct Answer: (B)  
Explanation:
Set $y = 0$ at the horizontal rod. The center of mass of the top rod ($2m$) is at $y = 0$. Each vertical rod ($m$) has its center of mass at $y = -L/2$.
  $$y_{\text{cm}} = \frac{(2m)(0) + m(-L/2) + m(-L/2)}{2m + m + m} = \frac{-mL}{4m} = -\frac{1}{4}L$$
The assembly center of mass is located a distance of $L/4$ below the horizontal rod.

Chapter 8 Drill: Question 9
Question: A car of mass $1,000\text{ kg}$ collides head-on with a truck of mass $2,000\text{ kg}$, both initially moving at $21\text{ m/s}$. The collision is perfectly inelastic. After the crash, the combined wreckage skids to a halt. How much work is done by friction after the crash?  
Options:(A) $73,500\text{ J}$  (B) $-73,500\text{ J}$  (C) $147,000\text{ J}$  (D) $-147,000\text{ J}$  (E) $220,500\text{ J}$  
Correct Answer: (B)  
Explanation:
Post-collision velocity:
$$v_f = \frac{(2000)(21) + (1000)(-21)}{2000 + 1000} = \frac{21000}{3000} = 7\text{ m/s}$$
Kinetic energy immediately after collision:
$$K = \frac{1}{2}(3000\text{ kg})(7\text{ m/s})^2 = 1500(49) = 73,500\text{ J}$$
Work done by friction to stop the wreckage ($W_f = \Delta K = 0 - K$):
$$W_f = -73,500\text{ J}$$

Chapter 8 Drill: Question 10
Question: Block 1 ($m_1 = 2\text{ kg}$, $v_1 = 3\text{ m/s}$) and Block 2 ($m_2 = 5\text{ kg}$, $v_2 = 2\text{ m/s}$ towards block 1) start $1\text{ m}$ apart and collide perfectly inelastically. How long after collision does it take to return to one of the starting positions?  
Options:(A) $0.55\text{ s}$  (B) $0.75\text{ s}$  (C) $0.95\text{ s}$  (D) $1.05\text{ s}$  (E) $1.25\text{ s}$  
Correct Answer: (D)  
Explanation:
Time to collide: $t_{\text{coll}} = \frac{1\text{ m}}{3 + 2\text{ m/s}} = 0.2\text{ s}$. Collision point is $d_1 = (3)(0.2) = 0.6\text{ m}$ from Block 1's start.  
Post-collision velocity:
$$v_f = \frac{(2)(3) + (5)(-2)}{2 + 5} = \frac{-4}{7}\text{ m/s}$$
Distance back to Block 1's starting position is $0.6\text{ m}$.  
Time: $t = \frac{0.6\text{ m}}{4/7\text{ m/s}} = \frac{4.2}{4} = 1.05\text{ s}$.

Chapter 9: Rotation Drill
Chapter 9 Drill: Question 1
Question: A disc of radius $6\text{ cm}$ rotates at an angular speed of $5\text{ rev/s}$. What is the linear speed of a point on the rim?  
Options:(A) $0.3\text{ m/s}$  (B) $1.9\text{ m/s}$  (C) $7.4\text{ m/s}$  (D) $52\text{ m/s}$  (E) $83\text{ m/s}$  
Correct Answer: (B)  
Explanation:
$$\omega = 5\text{ rev/s} \times 2\pi\text{ rad/rev} = 10\pi\text{ rad/s} \approx 31.42\text{ rad/s}$$
$$v = r\omega = (0.06\text{ m})(10\pi\text{ rad/s}) = 0.6\pi \approx 1.88\text{ m/s} \approx 1.9\text{ m/s}$$

Chapter 9 Drill: Question 2
Question: For the same disc in Question 1, what is the total distance traveled by a point on the rim in $40\text{ min}$?  
Options:(A) $180\text{ m}$  (B) $360\text{ m}$  (C) $540\text{ m}$  (D) $720\text{ m}$  (E) $4.5\text{ km}$  
Correct Answer: (E)  
Explanation:
$$t = 40\text{ min} \times 60\text{ s/min} = 2,400\text{ s}$$
$$s = vt = (0.6\pi\text{ m/s})(2400\text{ s}) = 1440\pi\text{ m} \approx 4,524\text{ m} \approx 4.5\text{ km}$$

Chapter 9 Drill: Question 3
Question: A disc starts from rest and undergoes angular acceleration of $4\text{ rad/s}^2$. At an angular displacement of $50\text{ rad}$, what is its angular speed?  
Options:(A) $12\text{ rad/s}$  (B) $15\text{ rad/s}$  (C) $16\text{ rad/s}$  (D) $20\text{ rad/s}$  (E) $23\text{ rad/s}$  
Correct Answer: (D)  
Explanation:
$$\omega_f^2 = \omega_0^2 + 2\alpha\Delta\theta = 0 + 2(4\text{ rad/s}^2)(50\text{ rad}) = 400 \implies \omega_f = 20\text{ rad/s}$$

Chapter 9 Drill: Question 4
Question: A rope of length $0.75\text{ m}$ has a mass $m = 0.1\text{ kg}$ spun at $120\text{ rpm}$. What centripetal acceleration is the mass experiencing?  
Options:(A) $19,200\text{ m/s}^2$  (B) $10,800\text{ m/s}^2$  (C) $90\text{ m/s}^2$  (D) $12\pi^2\text{ m/s}^2$  (E) $3\pi\text{ m/s}^2$  
Correct Answer: (D)  
Explanation:
$$\omega = 120\text{ rpm} \times \frac{2\pi\text{ rad}}{60\text{ s}} = 4\pi\text{ rad/s}$$
$$a_c = \omega^2 r = (4\pi)^2 (0.75\text{ m}) = 16\pi^2(0.75) = 12\pi^2\text{ m/s}^2$$

Chapter 9 Drill: Question 5
Question: Joe ($60\text{ kg}$) and Alice ($30\text{ kg}$) sit on opposite ends of a level $4\text{-m}$ seesaw supported at its midpoint. What is the net torque magnitude ($g = 10\text{ m/s}^2$)?  
Options:(A) $300\text{ N}\cdot\text{m}$  (B) $600\text{ N}\cdot\text{m}$  (C) $900\text{ N}\cdot\text{m}$  (D) $1,200\text{ N}\cdot\text{m}$  (E) $1,500\text{ N}\cdot\text{m}$  
Correct Answer: (B)  
Explanation:
Lever arm from fulcrum to each end: $r = 2\text{ m}$.
  $$\tau_{\text{net}} = (m_{\text{Joe}} g)r - (m_{\text{Alice}} g)r = (60)(10)(2) - (30)(10)(2) = 1200 - 600 = 600\text{ N}\cdot\text{m}$$

Chapter 9 Drill: Question 6
Question: What is the torque about a pendulum suspension point produced by a bob ($m = 0.50\text{ kg}$) at length $L = 0.80\text{ m}$ at angle $\theta = 30^\circ$ ($g = 10\text{ m/s}^2$)?  
Options:(A) $0.5\text{ N}\cdot\text{m}$  (B) $1.0\text{ N}\cdot\text{m}$  (C) $1.7\text{ N}\cdot\text{m}$  (D) $2.0\text{ N}\cdot\text{m}$  (E) $3.4\text{ N}\cdot\text{m}$  
Correct Answer: (D)  
Explanation:
$$\tau = mg L \sin\theta = (0.50\text{ kg})(10\text{ m/s}^2)(0.80\text{ m})\sin(30^\circ) = 4.0(0.5) = 2.0\text{ N}\cdot\text{m}$$

Chapter 9 Drill: Question 7
Question: A uniform meter stick of mass $1\text{ kg}$ is supported at its $50\text{ cm}$ midpoint. A mass $m = 3\text{ kg}$ hangs at $x = 0\text{ cm}$. At what mass $M$ hanging at $x = 80\text{ cm}$ will the stick remain horizontal?  
Options:(A) $3\text{ kg}$  (B) $5\text{ kg}$  (C) $6\text{ kg}$  (D) $8\text{ kg}$  (E) $9\text{ kg}$  
Correct Answer: (B)  
Explanation:
Torque balance about the $50\text{ cm}$ fulcrum:
$$m(50\text{ cm} - 0\text{ cm}) = M(80\text{ cm} - 50\text{ cm}) \implies (3\text{ kg})(50\text{ cm}) = M(30\text{ cm})$$
$$M = \frac{150}{30} = 5\text{ kg}$$

Chapter 9 Drill: Question 8
Question: Four point masses $m$ are located at the vertices of a rectangle of side lengths $L$ and $3L$. What is the rotational inertia about an axis passing through the center perpendicular to the plane, where each mass is at distance $L$ from the axis?  
Options:(A) $4mL^2$  (B) $\frac{8}{3}mL^2$  (C) $\frac{5}{2}mL^2$  (D) $\frac{7}{3}mL^2$  (E) $\frac{10}{3}mL^2$  
Correct Answer: (A)  
Explanation:
$$I = \sum m_i r_i^2 = 4(m L^2) = 4mL^2$$

Chapter 9 Drill: Question 9
Question: A block of mass $m$ slides down a frictionless incline of height $h$. A solid cylinder of mass $m$ rolls down an incline of height $H$ without slipping. If both reach the bottom with equal kinetic energies, what is the relation between $h$ and $H$?  
Options:(A) $h = \frac{4}{3}H$  (B) $h = \frac{3}{4}H$  (C) $h = H$  (D) $h = \frac{1}{2}H$  (E) $h = 2H$
Correct Answer: (C)  
Explanation:
For the block, $K_{\text{bottom}} = mgh$. For the rolling cylinder, total kinetic energy (translational + rotational) equals potential energy lost: $K_{\text{bottom}} = mgH$. For equal kinetic energies, $mgh = mgH \implies h = H$.

Chapter 9 Drill: Question 10
Question: When a cylinder rolls down an incline without slipping, which force produces the torque causing angular rotation?  
Options:(A) Parallel component of gravity  (B) Perpendicular component of gravity  (C) Normal force  (D) Force of static friction  (E) Force of kinetic friction  
Correct Answer: (D)  
Explanation:
Gravity acts at the center of mass ($r = 0$), and the normal force passes directly through the center of mass ($\vec{r} \parallel \vec{F}_N \implies \tau = 0$). Static friction acts tangentially at the contact point without slipping, exerting torque $\tau = f_s R$.

Chapter 10: Oscillations Drill
Chapter 10 Drill: Question 1
Question: Which of the following are characteristics of simple harmonic motion?  I. Acceleration is constant.  II. Restoring force is proportional to displacement.  III. Frequency is independent of amplitude.  
Options:(A) II only  (B) I and II only  (C) I and III only  (D) II and III only  (E) I, II, and III  
Correct Answer: (D)  
Explanation:
In SHM, acceleration $a(x) = -\omega^2 x$ varies with displacement, so I is false. By Hooke's Law, $F = -kx$ (II is true), and angular frequency $\omega = \sqrt{k/m}$ does not depend on amplitude $A$ (III is true).

Chapter 10 Drill: Question 2
Question: What combination of parameters maximizes the oscillation frequency of a mass-spring oscillator?  
Options:(A) Large $m$, small $k$  (B) Small $m$, large $k$  (C) Large amplitude, large $m$  (D) Small amplitude, small $k$  (E) Large amplitude, small $k$
Correct Answer: (B)  
Explanation:
$$f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$
Frequency is maximized by choosing the largest spring constant $k$ and the smallest mass $m$, and is independent of amplitude.

Chapter 10 Drill: Question 3
Question: A simple pendulum of length $L$ is pulled to initial position and released from rest, dropping vertical height $h$ to equilibrium. What is its maximum speed at the bottom?  
Options:(A) $gh$  (B) $\sqrt{2gh}$  (C) $\sqrt{2gd}$  (D) $\sqrt{2gL}$  (E) $2gh$
Correct Answer: (B)  
Explanation:
By conservation of mechanical energy:
$$mgh = \frac{1}{2}mv_{\max}^2 \implies v_{\max} = \sqrt{2gh}$$

Chapter 10 Drill: Question 4
Question: In a spring-mass oscillator, if mass is doubled while keeping oscillation amplitude $A$ constant, the maximum speed will:  
Options:(A) decrease by a factor of 4  (B) decrease by a factor of 2  (C) decrease by a factor of $\sqrt{2}$  (D) remain the same  (E) increase by a factor of 2  
Correct Answer: (C)  
Explanation:
$$v_{\max} = \omega A = \sqrt{\frac{k}{m}}A \propto \frac{1}{\sqrt{m}}$$
Doubling the mass scales maximum speed by $\frac{1}{\sqrt{2}}$.

Chapter 10 Drill: Question 5
Question: A vertical spring ($L_0 = 40\text{ cm}, k = 400\text{ N/m}$) hangs with mass $m = 10\text{ kg}$. What is the total equilibrium length of the spring ($g = 10\text{ m/s}^2$)?  
Options:(A) $25\text{ cm}$  (B) $35\text{ cm}$  (C) $40\text{ cm}$  (D) $50\text{ cm}$  (E) $65\text{ cm}$  
Correct Answer: (E)  
Explanation:
Extension at equilibrium:
$$x = \frac{mg}{k} = \frac{(10\text{ kg})(10\text{ m/s}^2)}{400\text{ N/m}} = 0.25\text{ m} = 25\text{ cm}$$
Total length: $L = L_0 + x = 40\text{ cm} + 25\text{ cm} = 65\text{ cm}$.

Chapter 11: Gravitation Drill
Chapter 11 Drill: Question 1
Question: An object at altitude $2R_E$ above Earth's surface experiences gravitational force $F_0$. If its altitude is doubled ($4R_E$), what is the new gravitational force?  
Options:(A) $F_0/4$  (B) $F_0/25$  (C) $2F_0$  (D) $4F_0/9$  (E) $9F_0/25$  
Correct Answer: (E)  
Explanation:
Initial orbital radius from Earth's center: $r_1 = R_E + 2R_E = 3R_E$.  
Final orbital radius: $r_2 = R_E + 4R_E = 5R_E$.
  $$\frac{F_2}{F_1} = \frac{r_1^2}{r_2^2} = \frac{(3R_E)^2}{(5R_E)^2} = \frac{9}{25} \implies F_2 = \frac{9}{25}F_0$$

Chapter 11 Drill: Question 2
Question: An object has weight $w$ on Earth's surface. At a height $2R_E$ above the surface, its mass and weight are:  
Options:(A) mass $m/2$, weight $w/2$  (B) mass $m$, weight $w/2$  (C) mass $m/2$, weight $w/4$  (D) mass $m$, weight $w/4$  (E) mass $m$, weight $w/9$  
Correct Answer: (E)  
Explanation:
Mass is invariant ($m$). Distance from Earth's center is $r = R_E + 2R_E = 3R_E$.
  $$w_{\text{new}} = \frac{GMm}{(3R_E)^2} = \frac{1}{9}\left(\frac{GMm}{R_E^2}\right) = \frac{w}{9}$$

Chapter 11 Drill: Question 3
Question: A moon of mass $m$ orbits a planet of mass $100m$. If $F_1$ is the force of the planet on the moon and $F_2$ is the force of the moon on the planet, which is true?  
Options:(A) $F_1 = 100 F_2$  (B) $F_2 = 100 F_1$  (C) $F_1 = F_2$  (D) $F_1 = 10 F_2$  (E) $F_1 = F_2/100$  
Correct Answer: (C)  
Explanation:
By Newton's Third Law, gravitational interaction forces are mutual, equal in magnitude, and opposite in direction ($F_1 = F_2$).

Chapter 11 Drill: Question 4
Question: What is the minimum radius of a planet with Earth's mass so that surface gravity does not exceed $4g$?  
Options:(A) $R_E/4$  (B) $R_E/2$  (C) $R_E$  (D) $2R_E$  (E) $4R_E$  
Correct Answer: (B)  
Explanation:
$$g_{\text{planet}} = \frac{GM}{R^2} \le 4\frac{GM}{R_E^2} \implies \frac{1}{R^2} \le \frac{4}{R_E^2} \implies R \ge \frac{R_E}{2}$$

Chapter 11 Drill: Question 5
Question: How far above Earth's surface must an object be to feel the same gravity as when buried halfway to the center ($r = R_E/2$)?  
Options:(A) $R_E/2$  (B) $(\sqrt{2} - 1)R_E$  (C) $\sqrt{2}R_E$  (D) $2R_E$  (E) $(\sqrt{2} + 1)R_E$  
Correct Answer: (B)  
Explanation:
Gravity inside Earth at $r = R_E/2$: $g_{\text{inside}} = g_0\left(\frac{R_E/2}{R_E}\right) = \frac{1}{2}g_0$.  
Gravity outside Earth at altitude $h$: $g_{\text{outside}} = g_0\left(\frac{R_E}{R_E + h}\right)^2$.
  $$\left(\frac{R_E}{R_E + h}\right)^2 = \frac{1}{2} \implies \frac{R_E + h}{R_E} = \sqrt{2} \implies h = (\sqrt{2} - 1)R_E$$
"""

momentum_topics = {
    1: ("Momentum-Kinetic Energy Relationship", "easy"),
    2: ("Impulse-Momentum Theorem & Velocity Change", "easy"),
    3: ("Average Impact Force Calculation", "easy"),
    4: ("Elastic Wall Rebound Impulse", "easy"),
    5: ("1D Perfectly Inelastic Collision Velocity", "medium"),
    6: ("Static Equilibrium & Center of Mass", "medium"),
    7: ("Collision Elasticity & Momentum Conservation", "easy"),
    8: ("U-Shaped Rod Assembly Center of Mass", "medium"),
    9: ("Inelastic Collision & Post-Crash Friction Work", "medium"),
    10: ("Inelastic Collision Rebound Return Time", "hard"),
}

rotation_topics = {
    1: ("Angular to Linear Speed on Rim", "easy"),
    2: ("Rotational Arc Distance over Time", "easy"),
    3: ("Constant Angular Acceleration Speed", "easy"),
    4: ("Centripetal Acceleration in Circular Motion", "medium"),
    5: ("Seesaw Torque Balance & Net Torque", "easy"),
    6: ("Pendulum Gravitational Torque", "medium"),
    7: ("Meter Stick Fulcrum Static Equilibrium", "medium"),
    8: ("Discrete Point Mass Rotational Inertia", "easy"),
    9: ("Rolling vs Sliding Kinetic Energy Comparison", "medium"),
    10: ("Static Friction Torque in Rolling Motion", "easy"),
}

shm_topics = {
    1: ("Simple Harmonic Motion Characteristics", "easy"),
    2: ("Mass-Spring Oscillator Frequency Maximization", "easy"),
    3: ("Simple Pendulum Maximum Speed", "easy"),
    4: ("Oscillator Mass Scaling & Max Speed", "medium"),
    5: ("Vertical Hanging Spring Total Length", "medium"),
}

gravitation_topics = {
    1: ("Inverse-Square Gravitational Force Scaling", "medium"),
    2: ("Invariance of Mass & Altitude Weight", "easy"),
    3: ("Newton's Third Law Mutual Gravity", "easy"),
    4: ("Planet Surface Gravity & Minimum Radius", "medium"),
    5: ("Interior vs Exterior Earth Gravitational Comparison", "hard"),
}

pattern = r'Question:\s*(.*?)\s*Options:\s*(.*?)\s*Correct Answer:\s*\(([A-E])\)\s*\nExplanation:\s*(.*?)(?=(?:Chapter|\Z))'
matches = list(re.finditer(pattern, raw_part2_text, re.DOTALL))
print(f"Matched {len(matches)} questions total")

momentum_qs = []
rotation_qs = []
shm_qs = []
gravitation_qs = []
combined_qs = []

for idx, m in enumerate(matches):
    q_text = m.group(1).strip()
    opts_raw = m.group(2).strip()
    ans = m.group(3).strip()
    expl = m.group(4).strip()

    q_text = re.sub(r'\s*\[cite:\s*\d+\]', '', q_text)
    expl = re.sub(r'\s*\[cite:\s*\d+\]', '', expl)

    opt_matches = list(re.finditer(r'\(([A-E])\)\s*(.*?)(?=(?:\([A-E]\)|$))', opts_raw, re.DOTALL))
    options = [re.sub(r'\s*\[cite:\s*\d+\]', '', om.group(2).strip()) for om in opt_matches]

    global_idx = idx + 1

    if idx < 10:
        # Momentum (1-10)
        q_num = idx + 1
        top_name, diff = momentum_topics.get(q_num, ("Momentum", "medium"))
        q_obj = {
            "id": f"ap-topic-physc-momentum-q{q_num}",
            "global_num": q_num,
            "section": "Linear Momentum, Impulse & Center of Mass",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        }
        momentum_qs.append(q_obj)
    elif idx < 20:
        # Rotation (11-20)
        q_num = idx - 10 + 1
        top_name, diff = rotation_topics.get(q_num, ("Rotation", "medium"))
        q_obj = {
            "id": f"ap-topic-physc-rotation-q{q_num}",
            "global_num": q_num,
            "section": "Rotational Inertia, Torque & Angular Motion",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        }
        rotation_qs.append(q_obj)
    elif idx < 25:
        # SHM (21-25)
        q_num = idx - 20 + 1
        top_name, diff = shm_topics.get(q_num, ("SHM", "medium"))
        q_obj = {
            "id": f"ap-topic-physc-shm-q{q_num}",
            "global_num": q_num,
            "section": "Simple Harmonic Motion & Oscillations",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        }
        shm_qs.append(q_obj)
    else:
        # Gravitation (26-30)
        q_num = idx - 25 + 1
        top_name, diff = gravitation_topics.get(q_num, ("Gravitation", "medium"))
        q_obj = {
            "id": f"ap-topic-physc-gravitation-q{q_num}",
            "global_num": q_num,
            "section": "Planetary Gravitation & Orbits",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        }
        gravitation_qs.append(q_obj)

    # Combined object
    c_obj = {
        "id": f"mrsg-q{global_idx}",
        "global_num": global_idx,
        "section": q_obj["section"],
        "question": q_text,
        "options": options,
        "answer": ans,
        "explanation": f"({ans}) " + expl,
        "difficulty": diff,
        "topic": top_name
    }
    combined_qs.append(c_obj)

print(f"Momentum questions: {len(momentum_qs)}")
print(f"Rotation questions: {len(rotation_qs)}")
print(f"SHM questions: {len(shm_qs)}")
print(f"Gravitation questions: {len(gravitation_qs)}")
print(f"Combined Part 2 questions: {len(combined_qs)}")

with open('scratch/topic_momentum.json', 'w', encoding='utf-8') as f:
    json.dump(momentum_qs, f, indent=4, ensure_ascii=False)

with open('scratch/topic_rotation.json', 'w', encoding='utf-8') as f:
    json.dump(rotation_qs, f, indent=4, ensure_ascii=False)

with open('scratch/topic_shm.json', 'w', encoding='utf-8') as f:
    json.dump(shm_qs, f, indent=4, ensure_ascii=False)

with open('scratch/topic_gravitation.json', 'w', encoding='utf-8') as f:
    json.dump(gravitation_qs, f, indent=4, ensure_ascii=False)

with open('scratch/combined_mrsg_questions.json', 'w', encoding='utf-8') as f:
    json.dump(combined_qs, f, indent=4, ensure_ascii=False)

print("Saved all Part 2 topic test JSON files successfully!")
