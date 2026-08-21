import json
import re
import os

# Read the raw 35 questions data
raw_questions_text = r"""Part 1: Practice Test 1 – Mechanics (Corrected Questions, Answers & Explanations)
Question 1
Question: A rock is dropped off a cliff and falls the first half of the distance to the ground in $t_1$ seconds. If it falls the second half of the distance in $t_2$ seconds, what is the value of $t_2/t_1$? (Ignore air resistance.)  
Options:(A) $\frac{1}{2\sqrt{2}}$(B) $\sqrt{2}$(C) $\frac{1}{2}$  (D) $1 - \frac{1}{\sqrt{2}}$(E) $\sqrt{2} - 1$
Correct Answer: (E)  
Explanation:
Let the total height fallen be $H$. The time to fall the first half of the distance ($H/2$) is:
  $$\frac{H}{2} = \frac{1}{2}gt_1^2 \implies t_1 = \sqrt{\frac{H}{g}}$$
The total time $T$ to fall the entire height $H$ is:
  $$H = \frac{1}{2}gT^2 \implies T = \sqrt{\frac{2H}{g}}$$
The time required to fall the second half is $t_2 = T - t_1$:
  $$t_2 = \sqrt{\frac{2H}{g}} - \sqrt{\frac{H}{g}} = \sqrt{\frac{H}{g}}(\sqrt{2} - 1)$$
Taking the ratio $t_2/t_1$:
  $$\frac{t_2}{t_1} = \frac{\sqrt{\frac{H}{g}}(\sqrt{2} - 1)}{\sqrt{\frac{H}{g}}} = \sqrt{2} - 1$$

Question 2  
Question: A bubble starting at the bottom of a soda bottle experiences constant acceleration, $a$, as it rises to the top of the bottle in some time, $t$. How much farther does it travel in the last second of its journey than in the first second? Assume that the journey takes longer than 2 seconds.  
Options:(A) $a(t + 1\text{ s})^2$  (B) $a(t - 1\text{ s})^2$  (C) $at^2$  (D) $a(t + 1\text{ s})(1\text{ s})$  (E) $a(t - 1\text{ s})(1\text{ s})$  
Correct Answer: (E)  
Explanation:
The distance traveled in the first second ($t = 0$ to $t = 1\text{ s}$) starting from rest is:
  $$d_1 = \frac{1}{2}a(1)^2 = \frac{1}{2}a$$
The velocity at time $t - 1\text{ s}$ is $v(t-1) = a(t-1)$. The distance traveled during the final second (from $t-1$ to $t$) is:
  $$d_{\text{last}} = v(t-1)(1) + \frac{1}{2}a(1)^2 = a(t - 1) + \frac{1}{2}a$$
The difference between the two distances is:
  $$\Delta d = d_{\text{last}} - d_1 = \left(a(t-1) + \frac{1}{2}a\right) - \frac{1}{2}a = a(t - 1\text{ s})(1\text{ s})$$

Question 3
Question: An object initially at rest experiences a time-varying acceleration given by $a = (2\text{ m/s}^3)t$ for $t \ge 0$. How far does the object travel in the first 3 seconds?  
Options:(A) $9\text{ m}$  (B) $12\text{ m}$  (C) $18\text{ m}$  (D) $24\text{ m}$  (E) $27\text{ m}$  
Correct Answer: (A)  
Explanation:
Integrate acceleration with respect to time to get velocity ($v_0 = 0$):
  $$v(t) = \int 2t\,dt = t^2$$
Integrate velocity to find the position displacement over the interval $t = 0$ to $t = 3\text{ s}$:
  $$\Delta x = \int_0^3 t^2\,dt = \left[\frac{t^3}{3}\right]_0^3 = \frac{27}{3} = 9\text{ m}$$

Question 4  
Question: What is the benefit of raising an object using an inclined plane instead of simply lifting the object? Assume ideal conditions.  
Options:  (A) The amount of force needed to move the object is reduced.  (B) The amount of time needed to move the object is reduced.  (C) The distance the object must be moved is reduced.  (D) The amount of work needed to move the object is reduced.  (E) The power that must be exerted will be reduced.  
Correct Answer: (A)  
Explanation:
Gravity is a conservative force, so the total work required to raise an object to height $h$ ($W = mgh$) is identical regardless of the path chosen. By increasing the displacement along the ramp, the required input force is reduced ($F = mg\sin\theta$).  

Question 5
Question: In the figure shown, a tension force $F_T$ causes a particle of mass $m$ to move with constant angular speed $\omega$ in a horizontal circular path of radius $R$. Which of the following expressions gives the magnitude of $F_T$? (Ignore air resistance.)  
Options:(A) $m\omega^2 R$  (B) $m\sqrt{\omega^4 R^2 - g^2}$  (C) $m\sqrt{g^2 + \omega^4 R^2}$  (D) $m(\omega^2 R - g)$  (E) $m(\omega^2 R + g)$  
Correct Answer: (C)  
Explanation:
The vertical component of tension balances gravity: $F_{T,y} = F_T \cos\theta = mg$. The horizontal component provides the centripetal force: $F_{T,x} = F_T \sin\theta = m\omega^2 R$. Applying the Pythagorean identity:
  $$F_T^2 = F_{T,x}^2 + F_{T,y}^2 = (m\omega^2 R)^2 + (mg)^2 \implies F_T = m\sqrt{g^2 + \omega^4 R^2}$$

Question 6
Question: An object (mass = $m$) above the surface of the Moon (mass = $M$) is dropped from an altitude $h$ equal to the Moon's radius ($R$). With what speed will the object strike the lunar surface?  
Options:(A) $\sqrt{\frac{GM}{R}}$  (B) $\sqrt{\frac{GM}{2R}}$  (C) $\sqrt{\frac{2GM}{R}}$  (D) $\sqrt{\frac{GMm}{R}}$  (E) $\sqrt{\frac{2GMm}{R}}$
Correct Answer: (A)  
Explanation:
The initial distance from the lunar center is $r_i = R + h = 2R$. The final distance at impact is $r_f = R$. Using Conservation of Mechanical Energy:
  $$E_i = E_f \implies -\frac{GMm}{2R} = \frac{1}{2}mv^2 - \frac{GMm}{R}$$
  $$\frac{1}{2}mv^2 = \frac{GMm}{R} - \frac{GMm}{2R} = \frac{GMm}{2R} \implies v = \sqrt{\frac{GM}{R}}$$

Question 7
Question: Two pendulums are constructed in such a way that they are identical except that one has a hanging mass of $m$ and the other has a hanging mass of $2m$. Both hanging masses are set into motion such that each system has the same total mechanical energy. Assume that the motion approximates simple harmonic motion. Comparatively, the system with the lesser mass will have greater  
Options:(A) maximum speed and maximum angle of displacement  (B) frequency and maximum angle of displacement  (C) period and maximum speed  (D) frequency only  (E) maximum angle of displacement only  
Correct Answer: (A)  
Explanation:
The period $T = 2\pi\sqrt{L/g}$ and frequency $f$ depend only on $L$ and $g$, making them identical for both pendulums. For equal total mechanical energy $E$:
Maximum kinetic energy: $E = \frac{1}{2}m v_{\max}^2 \implies v_{\max} = \sqrt{2E/m}$, so the smaller mass has the greater maximum speed.
Maximum potential energy: $E = mgh_{\max} \implies h_{\max} = E/(mg)$, so the smaller mass reaches a greater vertical height, which requires a larger maximum angular displacement.  

Question 8
Question: A uniform cylinder of mass $m$ and radius $r$ unrolls without slipping from two strings tied to a vertical support. If the rotational inertia of the cylinder is $\frac{1}{2}mr^2$, find the acceleration of its center of mass.  
Options:(A) $\frac{1}{3}g$  (B) $\frac{1}{2}g$  (C) $\frac{3}{5}g$  (D) $\frac{2}{3}g$  (E) $g$
Correct Answer: (D)  
Explanation:
Let $F_T$ be the tension in each of the two strings.
Translational motion: $mg - 2F_T = ma$
Rotational motion about CM: $\tau = (2F_T)r = I\alpha = \left(\frac{1}{2}mr^2\right)\left(\frac{a}{r}\right) \implies 2F_T = \frac{1}{2}ma$
Substituting into the translational equation:
  $$mg - \frac{1}{2}ma = ma \implies mg = \frac{3}{2}ma \implies a = \frac{2}{3}g$$

Question 9
Question: A space shuttle is launched from Earth. As it travels up, it moves at a constant velocity of $150\text{ m/s}$ straight up. If its engines provide $1.5 \times 10^8\text{ W}$ of power, what is the shuttle's mass? You may assume that the shuttle's mass and the acceleration due to gravity are constant ($g = 10\text{ m/s}^2$).  
Options:(A) $6.7 \times 10^2\text{ kg}$  (B) $1.0 \times 10^5\text{ kg}$  (C) $6.7 \times 10^5\text{ kg}$  (D) $1.0 \times 10^6\text{ kg}$  (E) $2.3 \times 10^6\text{ kg}$  
Correct Answer: (B)  
Explanation:
At constant velocity, engine thrust equals gravitational weight: $F = mg$.
  $$P = Fv = mgv \implies m = \frac{P}{gv} = \frac{1.5 \times 10^8\text{ W}}{(10\text{ m/s}^2)(150\text{ m/s})} = \frac{1.5 \times 10^8}{1500} = 1.0 \times 10^5\text{ kg}$$

Question 10
Question: A uniform cylinder, initially at rest on a frictionless, horizontal surface, is pulled by a constant force $F$ from time $t = 0$ to time $t = T$. From time $t = T$ on, this force is removed. Which graph best illustrates the speed, $v$, of the cylinder's center of mass from $t = 0$ onwards?  
Options:(A) Velocity increases linearly to $T$, then decreases linearly to zero  (B) Velocity increases linearly from $0$ to $T$, then remains constant  (C) Velocity increases parabolically from $0$ to $T$, then remains constant  (D) Velocity stays constant from $0$ to $T$, then drops to zero  (E) Velocity increases exponentially
Correct Answer: (B)  
Explanation:
For $0 \le t \le T$, the constant net force causes a constant acceleration $a = F/m$, meaning $v(t) = at$ increases linearly. For $t > T$, $F = 0 \implies a = 0$, so velocity remains at a constant horizontal value.  

Question 11
Question: A satellite is in circular orbit around Earth (radius = $R$). If the work required to lift the satellite to its orbital height is equal to the satellite's kinetic energy while in this orbit, how high above the surface of Earth is the satellite?  
Options:(A) $R/2$  (B) $R$  (C) $3R/2$  (D) $2R$  (E) $4R$
Correct Answer: (A)  
Explanation:
Work to lift the satellite to altitude $h$:
  $$W = \Delta U = -\frac{GMm}{R+h} - \left(-\frac{GMm}{R}\right) = \frac{GMmh}{R(R+h)}$$
For a circular orbit at radius $r = R+h$, the orbital speed satisfies $v^2 = \frac{GM}{R+h}$, so kinetic energy is:
  $$K = \frac{1}{2}mv^2 = \frac{GMm}{2(R+h)}$$
Equating $W = K$:
  $$\frac{GMmh}{R(R+h)} = \frac{GMm}{2(R+h)} \implies \frac{h}{R} = \frac{1}{2} \implies h = \frac{R}{2}$$

Question 12
Question: A block of length $l_1 = 10\text{ cm}$, mass $m_1 = 10\text{ kg}$, and $v_1 = 2\text{ m/s}$ moves toward a second block of length $l_2 = 20\text{ cm}$, $m_2 = 2\text{ kg}$, and $v_2 = 8\text{ m/s}$ moving toward the first. The blocks' closest edges are $1\text{ m}$ apart. The blocks experience a perfectly inelastic collision. How long after the collision does it take for the center of mass of the combined object to cross the point midway between the blocks' starting positions?  
Options:(A) $0.225\text{ s}$  (B) $0.325\text{ s}$  (C) $0.525\text{ s}$  (D) $0.900\text{ s}$  (E) $0.975\text{ s}$  
Correct Answer: (E)  
Explanation:
Time to collision: $t_{\text{coll}} = \frac{1.0\text{ m}}{2\text{ m/s} + 8\text{ m/s}} = 0.1\text{ s}$. The collision point is $0.2\text{ m}$ from block 1's starting position.  
Velocity of combined mass:
  $$v_f = \frac{(10\text{ kg})(2\text{ m/s}) + (2\text{ kg})(-8\text{ m/s})}{10\text{ kg} + 2\text{ kg}} = \frac{4}{12} = \frac{1}{3}\text{ m/s}$$
Midpoint of the initial separation is $0.5\text{ m}$ from block 1's starting position.  
The distance from the collision point to the midpoint is $0.5 - 0.2 = 0.3\text{ m}$. Taking the center of mass position offset within the combined block into account adds $0.025\text{ m}$, giving a total travel distance of $d = 0.325\text{ m}$.  
Time: $t = \frac{0.325\text{ m}}{1/3\text{ m/s}} = 0.975\text{ s}$.  

Question 13
Question: A rubber ball (mass = $0.08\text{ kg}$) is dropped from a height of $3.2\text{ m}$ and rebounds almost to its original height. If the impact time with the floor is $0.04\text{ s}$, what average force did the floor exert on the ball?  
Options:(A) $0.16\text{ N}$  (B) $16\text{ N}$  (C) $32\text{ N}$  (D) $36\text{ N}$  (E) $64\text{ N}$  
Correct Answer: (C)  
Explanation:
Impact speed: $v = \sqrt{2gh} = \sqrt{2(10)(3.2)} = 8\text{ m/s}$.
Change in momentum taking upward as positive:
  $$\Delta p = m(v_f - v_i) = 0.08(8 - (-8)) = 1.28\text{ kg}\cdot\text{m/s}$$
Average force:
  $$F_{\text{avg}} = \frac{\Delta p}{\Delta t} = \frac{1.28\text{ N}\cdot\text{s}}{0.04\text{ s}} = 32\text{ N}$$

Question 14
Question: A disk of radius $0.1\text{ m}$ initially at rest undergoes an angular acceleration of $2.0\text{ rad/s}^2$. If the disk only rotates, find the total distance traveled by a point on the rim in $4.0\text{ s}$.  
Options:(A) $0.4\text{ m}$  (B) $0.8\text{ m}$  (C) $1.2\text{ m}$  (D) $1.6\text{ m}$  (E) $2.0\text{ m}$
Correct Answer: (D)  
Explanation:
Angular displacement:
  $$\Delta\theta = \frac{1}{2}\alpha t^2 = \frac{1}{2}(2.0\text{ rad/s}^2)(4.0\text{ s})^2 = 16\text{ rad}$$
Arc distance on rim:
  $$s = r\Delta\theta = (0.1\text{ m})(16\text{ rad}) = 1.6\text{ m}$$

Question 15
Question: A small object slides down a frictionless quarter-circular slide of radius $R$ starting from rest at a height equal to $2R$ above a horizontal surface. Find its horizontal displacement, $x$, from the starting point at the moment it strikes the surface.  
Options:(A) $R$  (B) $2R$  (C) $3R$  (D) $4R$  (E) $5R$
Correct Answer: (C)  
Explanation:
The object leaves the slide horizontally at height $R$ with speed $v = \sqrt{2gR}$.
Time to fall the remaining height $R$: $t = \sqrt{2R/g}$.
Horizontal distance traveled in air:
  $$\Delta x_{\text{air}} = v t = \sqrt{2gR}\sqrt{\frac{2R}{g}} = 2R$$
Total horizontal displacement from the starting position: $x_{\text{total}} = R + 2R = 3R$.  

Question 16
Question: A particle executes uniform circular motion in a circle of radius $R$. When the shadow on Screen 1 is at position $x = -0.5R$ and moving in the $+x$ direction, what is true about the position and velocity of the shadow on Screen 2 at that same instant?  
Options:(A) $y = -0.866R$; velocity in $-y$ direction  (B) $y = -0.866R$; velocity in $+y$ direction  (C) $y = -0.5R$; velocity in $-y$ direction  (D) $y = +0.866R$; velocity in $-y$ direction  (E) $y = +0.866R$; velocity in $+y$ direction  
Correct Answer: (A)  
Explanation:
Position along $x$: $x = R\cos\theta = -0.5R \implies \theta = 120^\circ$ or $240^\circ$.
Because the shadow moves in $+x$ direction, $v_x = -\omega R\sin\theta > 0 \implies \sin\theta < 0$, placing the angle at $\theta = 240^\circ$.
Therefore:
  $$y = R\sin(240^\circ) = -R\frac{\sqrt{3}}{2} \approx -0.866R$$
  $$v_y = \omega R\cos(240^\circ) = -0.5\omega R < 0 \quad (\text{directed along }-y)$$

Question 17  
Question: Two objects of masses $m$ and $2m$ are attached to the ends of a rigid massless rod of length $L$ at rest on a frictionless table. When a force $F$ is applied perpendicularly at mass $2m$, the resulting rotational acceleration of the rod about its center of mass is $kF/(mL)$. What is $k$?  
Options:(A) $1/4$  (B) $1/3$  (C) $1/2$  (D) $2/3$  (E) $1$
Correct Answer: (C)  
Explanation:
Distance of CM from mass $m$: $y_{\text{cm}} = \frac{m(0) + 2m(L)}{3m} = \frac{2}{3}L$.
Distance from CM to mass $2m$: $L - \frac{2}{3}L = \frac{1}{3}L$.
Rotational inertia about CM:
  $$I_{\text{cm}} = m\left(\frac{2}{3}L\right)^2 + 2m\left(\frac{1}{3}L\right)^2 = \frac{4}{9}mL^2 + \frac{2}{9}mL^2 = \frac{2}{3}mL^2$$
Torque about CM: $\tau = F\left(\frac{1}{3}L\right)$.
Angular acceleration:
  $$\alpha = \frac{\tau}{I_{\text{cm}}} = \frac{F L / 3}{\frac{2}{3}mL^2} = \frac{1}{2}\frac{F}{mL} \implies k = \frac{1}{2}$$

Question 18
Question: Old cars were made with rigid frames; modern cars are made with frames that crumple in a collision. If each vehicle crashes into a wall and comes to a complete stop from the same initial mass and speed, which of the following would NOT be true?  
Options:(A) The modern vehicle would experience less force.  (B) The modern vehicle would experience less impulse.  (C) The modern vehicle's magnitude of acceleration would be less.  (D) The modern vehicle's collision would take less time.  (E) More than one of the above would not be true.  
Correct Answer: (E)  
Explanation:
Because both vehicles have the same mass and initial speed and both come to rest, $\Delta p$ is identical for both. Since Impulse $J = \Delta p$, both experience the same impulse (making B false). The crumpling frame extends the stopping distance and increases collision time, so it takes more time (making D false). Because both B and D are false, (E) is the correct choice.  

Question 19
Question: A homogeneous bar lying on a flat table is acted upon by exactly two external horizontal forces, $F_1$ and $F_2$. If the net force on the rod is zero, which of the following is true?  
Options:(A) The net torque on the bar must also be zero.  (B) The bar cannot accelerate translationally or rotationally.  (C) The bar can accelerate translationally if $F_1$ and $F_2$ are not applied at the same point.  (D) The net torque will be zero if $F_1$ and $F_2$ are applied at the same point.  (E) None of the above  
Correct Answer: (D)  
Explanation:
Since $\vec{F}_{\text{net}} = \vec{F}_1 + \vec{F}_2 = 0$, we have $\vec{F}_2 = -\vec{F}_1$. If both forces are applied at the same point, their position vectors $\vec{r}$ from any chosen pivot are identical, resulting in $\vec{\tau}_{\text{net}} = \vec{r}\times\vec{F}_1 + \vec{r}\times(-\vec{F}_1) = 0$.  

Question 20
Question: An astronaut lands on a planet whose mass and radius are each twice that of Earth. If the astronaut weighs $800\text{ N}$ on Earth, how much will he weigh on this planet?  
Options:(A) $200\text{ N}$  (B) $400\text{ N}$  (C) $800\text{ N}$  (D) $1,600\text{ N}$  (E) $3,200\text{ N}$  
Correct Answer: (B)  
Explanation:
$$g_{\text{planet}} = \frac{G(2M)}{(2R)^2} = \frac{2}{4}\frac{GM}{R^2} = \frac{1}{2}g_{\text{Earth}}$$
$$W_{\text{planet}} = m g_{\text{planet}} = \frac{1}{2}W_{\text{Earth}} = \frac{1}{2}(800\text{ N}) = 400\text{ N}$$

Question 21
Question: A particle of mass $m = 1.0\text{ kg}$ is acted upon by a variable force $F(x)$. The area under the $F(x)$ curve from $x = 0$ to $x = 10\text{ m}$ is $50\text{ N}\cdot\text{m}$. If the particle's speed was zero at $x = 0$, what is its speed at $x = 10\text{ m}$?  
Options:(A) $5.0\text{ m/s}$  (B) $8.7\text{ m/s}$  (C) $10\text{ m/s}$  (D) $14\text{ m/s}$  (E) $20\text{ m/s}$  
Correct Answer: (C)  
Explanation:
By the Work-Energy Theorem:
  $$W = \Delta K \implies 50\text{ J} = \frac{1}{2}mv^2 - 0 \implies v = \sqrt{\frac{2(50)}{1.0}} = 10\text{ m/s}$$

Question 22
Question: The radius of a collapsing spinning star decreases to $\frac{1}{4}$ of its initial value. What is the ratio of the final rotational kinetic energy to the initial rotational kinetic energy ($K_f / K_i$)?  
Options:(A) $4$  (B) $16$  (C) $64$  (D) $256$  (E) $1/16$
Correct Answer: (B)  
Explanation:
Angular momentum is conserved: $L = I_i\omega_i = I_f\omega_f \implies \omega_f = \omega_i(I_i/I_f)$.
For a sphere, $I \propto R^2$. Since $R_f = R_i/4$, $I_f = I_i/16$, which yields $\omega_f = 16\omega_i$.
The rotational kinetic energy ratio is:
  $$\frac{K_f}{K_i} = \frac{\frac{1}{2}I_f\omega_f^2}{\frac{1}{2}I_i\omega_i^2} = \left(\frac{1}{16}\right)(16)^2 = 16$$

Question 23
Question: A ball is projected with an initial velocity of magnitude $v_0 = 40\text{ m/s}$ at an angle of $60^\circ$ toward a vertical wall $20\text{ m}$ away. How long does the ball take to reach the wall?  
Options:(A) $0.25\text{ s}$  (B) $0.50\text{ s}$  (C) $1.0\text{ s}$  (D) $2.0\text{ s}$  (E) $3.0\text{ s}$  
Correct Answer: (C)  
Explanation:
The horizontal velocity is constant:
$$v_x = v_0 \cos 60^\circ = 40(0.5) = 20\text{ m/s}$$
$$t = \frac{x}{v_x} = \frac{20\text{ m}}{20\text{ m/s}} = 1.0\text{ s}$$

Question 24
Question: If $C, M, L,$ and $T$ represent the dimensions of charge, mass, length, and time respectively, what are the dimensions of the permittivity of free space ($\varepsilon_0$)?  
Options:(A) $T^2C^2 / (M^2L^2)$  (B) $T^2C^2 / (ML^3)$  (C) $ML^3 / (T^2C^2)$  (D) $C^2M / (T^2L^2)$  (E) $T^2L^2 / (C^2M)$  
Correct Answer: (B)  
Explanation:
From Coulomb's Law $F = \frac{1}{4\pi\varepsilon_0}\frac{q^2}{r^2} \implies \varepsilon_0 = \frac{q^2}{F r^2}$.
Using base dimensions $[q] = C$, $[r] = L$, and $[F] = MLT^{-2}$:
$$[\varepsilon_0] = \frac{C^2}{(MLT^{-2})(L^2)} = \frac{T^2C^2}{ML^3}$$

Question 25
Question: Two clay balls moving toward each other on a frictionless surface collide perfectly inelastically. Ball 1 has mass $m_1$ and moves at $45^\circ$; ball 2 has mass $m_2$ and moves at $60^\circ$. If $m_1 = 2m_2$ and the post-collision velocity is parallel to the negative $y$-axis, what is $v_2$?  
Options:(A) $v_1(\sin 60^\circ)$  (B) $v_1(\cos 60^\circ)$  (C) $v_1(2\cos 60^\circ)$  (D) $v_1(2\sin 45^\circ)/(\sin 60^\circ)$  (E) $v_1(\tan 60^\circ)$
Correct Answer: (D)  
Explanation:
Since the combined mass moves purely along the $-y$ axis, horizontal momentum must sum to zero:
  $$m_1 v_1 \sin 45^\circ - m_2 v_2 \sin 60^\circ = 0$$
Substituting $m_1 = 2m_2$:
  $$(2m_2)v_1 \sin 45^\circ = m_2 v_2 \sin 60^\circ \implies v_2 = \frac{2v_1 \sin 45^\circ}{\sin 60^\circ}$$

Question 26
Question: The coefficient of static friction between two blocks is $0.80$. If the blocks oscillate horizontally with a frequency of $2.0\text{ Hz}$, what is the maximum amplitude of the oscillations if the small block is not to slip on the large block?  
Options:(A) $3.1\text{ cm}$  (B) $5.0\text{ cm}$  (C) $6.2\text{ cm}$  (D) $7.5\text{ cm}$  (E) $9.4\text{ cm}$  
Correct Answer: (B)  
Explanation:
Maximum acceleration in SHM is $a_{\max} = \omega^2 A = (2\pi f)^2 A$. To prevent slipping, static friction must provide this acceleration:
  $$\mu_s g \ge (2\pi f)^2 A \implies A \le \frac{\mu_s g}{4\pi^2 f^2} = \frac{(0.80)(9.8)}{4\pi^2 (2.0)^2} \approx 0.050\text{ m} = 5.0\text{ cm}$$

Question 27
Question: When two objects collide, the coefficient of restitution is $e = v_{\text{rel,after}} / v_{\text{rel,before}}$. If a ball dropped from height $H_1$ rebounds to height $H_2$, what is $e$?  
Options:(A) $H_1/H_2$  (B) $H_2/H_1$  (C) $\sqrt{H_1/H_2}$  (D) $\sqrt{H_2/H_1}$  (E) $(H_1/H_2)^2$  
Correct Answer: (D)  
Explanation:
Impact speed is $v_1 = \sqrt{2gH_1}$ and rebound speed is $v_2 = \sqrt{2gH_2}$.
  $$e = \frac{v_2}{v_1} = \frac{\sqrt{2gH_2}}{\sqrt{2gH_1}} = \sqrt{\frac{H_2}{H_1}}$$

Question 28
Question: A square metal plate of side length $40\text{ cm}$ lies flat on a table. A force $F$ of magnitude $10\text{ N}$ is applied along one of the corners. Determine the torque produced by $F$ relative to the center of rotation (center of mass).  
Options:(A) $0\text{ N}\cdot\text{m}$  (B) $1.0\text{ N}\cdot\text{m}$  (C) $1.4\text{ N}\cdot\text{m}$  (D) $2.0\text{ N}\cdot\text{m}$  (E) $4.0\text{ N}\cdot\text{m}$  
Correct Answer: (D)  
Explanation:
The lever arm from the geometric center to the line of action along any side of the square is $r_\perp = s/2 = 0.40/2 = 0.20\text{ m}$.
  $$\tau = F r_\perp = (10\text{ N})(0.20\text{ m}) = 2.0\text{ N}\cdot\text{m}$$

Question 29
Question: A block of mass $m = 2.0\text{ kg}$ is pushed upward from $(0,0)$ to $(3\text{ m}, 3\text{ m})$. How much work is done by gravity during this displacement?  
Options:(A) $-60\text{ J}$  (B) $-80\text{ J}$  (C) $-90\text{ J}$  (D) $-100\text{ J}$  (E) $-120\text{ J}$  
Correct Answer: (A)  
Explanation:
Gravity is conservative and depends only on vertical displacement $\Delta z = 3\text{ m}$:
  $$W_g = -mg\Delta z = -(2.0\text{ kg})(10\text{ m/s}^2)(3\text{ m}) = -60\text{ J}$$

Question 30
Question: A horizontal spring with constant $k$ oscillates between $-A$ and $+A$ with mass $M$. A bullet of mass $m$ with speed $v$ collides inelastically with $M$ at $x = -A$. How far beyond $x = -A$ will the spring compress?  
Options:(A) $\frac{mv}{\sqrt{kM}}$  (B) $\frac{mv}{k(M+m)}$  (C) $\frac{mv}{\sqrt{k(M+m)}}$  (D) $\frac{Mv}{\sqrt{k(M+m)}}$  (E) $\frac{mv}{\sqrt{km}}$
Correct Answer: (C)  
Explanation:
At $x = -A$, the block was momentarily at rest. Immediately after the collision, the combined velocity is $v' = \frac{mv}{M+m}$. The additional kinetic energy is converted into extra compression $x_{\text{extra}}$:
  $$\frac{1}{2}k x_{\text{extra}}^2 = \frac{1}{2}(M+m)(v')^2 = \frac{1}{2}\frac{m^2v^2}{M+m} \implies x_{\text{extra}} = \frac{mv}{\sqrt{k(M+m)}}$$

Question 31
Question: A rod pivoting about $x = 0$ has linear density $\lambda(x) = kx$. Determine the rod's moment of inertia in terms of length $L$ and total mass $M$.  
Options:(A) $\frac{1}{3}ML^2$  (B) $\frac{1}{4}ML^2$  (C) $\frac{2}{5}ML^2$  (D) $\frac{1}{2}ML^2$  (E) $2ML^2$  
Correct Answer: (D)  
Explanation:
Total mass: $M = \int_0^L kx\,dx = \frac{1}{2}kL^2 \implies k = \frac{2M}{L^2}$.
Moment of inertia:
  $$I = \int_0^L x^2\,dm = \int_0^L x^2(kx\,dx) = \frac{1}{4}kL^4 = \frac{1}{4}\left(\frac{2M}{L^2}\right)L^4 = \frac{1}{2}ML^2$$

Question 32
Question: A conservative force has potential energy $U(x) = x^3 - 12x$. Which position represents a point of stable equilibrium?  
Options:(A) $x = -4\text{ m}$  (B) $x = -2\text{ m}$  (C) $x = 0\text{ m}$  (D) $x = 2\text{ m}$  (E) $x = 4\text{ m}$  
Correct Answer: (D)
Explanation:
Equilibrium requires $\frac{dU}{dx} = 3x^2 - 12 = 0 \implies x = \pm 2\text{ m}$.
Stable equilibrium requires a local minimum ($\frac{d^2U}{dx^2} > 0$):
  $$\frac{d^2U}{dx^2} = 6x \implies \text{At } x = 2\text{ m}, \frac{d^2U}{dx^2} = 12 > 0\text{ (Stable)}$$

Question 33
Question: A light frictionless pulley attached to an elevator ceiling supports masses $m$ and $M$ ($M > m$). The elevator car descends at a constant velocity. Determine the acceleration of the masses relative to the elevator.  
Options:(A) $(M - m)g$  (B) $(M + m)g$  (C) $\frac{M + m}{M - m}g$  (D) $\frac{M - m}{M + m}g$  (E) $\frac{2Mm}{M + m}g$
Correct Answer: (D)  
Explanation:
Because the elevator travels at constant velocity, it acts as an inertial frame of reference ($a_{\text{frame}} = 0$). The Atwood acceleration is:
  $$a = \frac{M - m}{M + m}g$$

Question 34
Question: A block ($m = 2\text{ kg}$) starts at rest on a ramp ($\sin\theta = 0.45, \cos\theta = 0.9$). The ramp consists of alternating frictionless sections of $1\text{ m}$ and rough sections ($\mu = 2/3$) of increasing length ($1\text{ m}, 2\text{ m}, 3\text{ m}, \dots$). How far along the ramp does the block travel before stopping?  
Options:(A) $4\text{ m}$  (B) $8\text{ m}$  (C) $12\text{ m}$  (D) $19\text{ m}$  (E) $24\text{ m}$  
Correct Answer: (E)  
Explanation:
$\Delta PE$ gained per meter: $mg\sin\theta = (2)(10)(0.45) = +9\text{ J/m}$.  
Friction work per rough meter: $-\mu mg\cos\theta = -(2/3)(2)(10)(0.9) = -12\text{ J/m}$.  
Net change on rough segments: $+9 - 12 = -3\text{ J/m}$.
Tracking energy across the sequence:
0–1 m (smooth): $+9\text{ J}$
1–2 m (rough 1m): $9 - 3 = 6\text{ J}$
2–3 m (smooth): $6 + 9 = 15\text{ J}$
3–5 m (rough 2m): $15 - 6 = 9\text{ J}$
5–6 m (smooth): $9 + 9 = 18\text{ J}$
6–9 m (rough 3m): $18 - 9 = 9\text{ J}$
9–10 m (smooth): $9 + 9 = 18\text{ J}$
10–14 m (rough 4m): $18 - 12 = 6\text{ J}$
14–15 m (smooth): $6 + 9 = 15\text{ J}$
15–20 m (rough 5m): $15 - 15 = 0\text{ J}$  
20–21 m (smooth): $+9\text{ J}$  
Next rough segment: travels $9/3 = 3\text{ m}$ before stopping.
Total distance = $21 + 3 = 24\text{ m}$.  

Question 35
Question: An object of mass $2\text{ kg}$ is acted upon by three external forces, each of magnitude $4\text{ N}$. Which of the following could NOT be the resulting acceleration of the object?  
Options:(A) $0\text{ m/s}^2$  (B) $2\text{ m/s}^2$  (C) $4\text{ m/s}^2$  (D) $6\text{ m/s}^2$  (E) $8\text{ m/s}^2$  
Correct Answer: (E)  
Explanation:
The maximum possible net force occurs when all three forces act in the same direction: $F_{\text{net,max}} = 4 + 4 + 4 = 12\text{ N}$.
  $$a_{\max} = \frac{12\text{ N}}{2\text{ kg}} = 6\text{ m/s}^2$$
An acceleration of $8\text{ m/s}^2$ is impossible.
"""

topic_mapping = {
    1: ("1D Kinematics & Free Fall", "medium"),
    2: ("1D Kinematics & Acceleration", "medium"),
    3: ("Calculus-Based Kinematics & Integration", "medium"),
    4: ("Work, Energy & Inclines", "easy"),
    5: ("Conical Pendulum & Circular Dynamics", "hard"),
    6: ("Planetary Gravitation & Escape Velocity", "medium"),
    7: ("Simple Harmonic Motion & Pendulums", "medium"),
    8: ("Rolling Motion & Rotational Dynamics", "hard"),
    9: ("Work, Power & Constant Velocity", "easy"),
    10: ("Newton's 2nd Law & Force Graphs", "easy"),
    11: ("Gravitational Potential & Orbital Energy", "hard"),
    12: ("Inelastic Collisions & Center of Mass", "hard"),
    13: ("Impulse-Momentum Theorem", "medium"),
    14: ("Rotational Kinematics & Arc Length", "easy"),
    15: ("Energy Conservation & Projectile Launch", "medium"),
    16: ("Uniform Circular Motion & Projections", "hard"),
    17: ("Rotational Inertia & Torque", "hard"),
    18: ("Impulse, Momentum & Collision Safety", "medium"),
    19: ("Static Equilibrium & Torque", "easy"),
    20: ("Universal Gravitation & Weight", "easy"),
    21: ("Work-Energy Theorem & Variable Forces", "medium"),
    22: ("Angular Momentum Conservation & Collapse", "medium"),
    23: ("2D Projectile Motion", "easy"),
    24: ("Dimensional Analysis", "easy"),
    25: ("2D Inelastic Collisions & Vectors", "hard"),
    26: ("SHM & Static Friction Threshold", "hard"),
    27: ("Coefficient of Restitution", "medium"),
    28: ("Torque & Lever Arm", "easy"),
    29: ("Conservative Gravitational Work", "easy"),
    30: ("SHM Spring-Block Collision", "hard"),
    31: ("Calculus Moment of Inertia Integration", "hard"),
    32: ("Potential Energy Curves & Stability", "medium"),
    33: ("Atwood Machine & Inertial Frames", "medium"),
    34: ("Variable Friction Ramp Energy Tracking", "hard"),
    35: ("Vector Force Sums & Newton's 2nd Law", "easy"),
}

pattern = r'Question\s+(\d+)\s*\nQuestion:\s*(.*?)\s*Options:\s*(.*?)\s*Correct Answer:\s*\(([A-E])\)\s*\nExplanation:\s*(.*?)(?=(?:Question\s+\d+|$))'
matches = list(re.finditer(pattern, raw_questions_text, re.DOTALL))
print(f'Matched: {len(matches)} questions')

parsed_list = []
for m in matches:
    q_num = int(m.group(1))
    q_text = m.group(2).strip()
    opts_raw = m.group(3).strip()
    ans = m.group(4).strip()
    expl = m.group(5).strip()

    # Parse options (A), (B), (C), (D), (E)
    opt_matches = list(re.finditer(r'\(([A-E])\)\s*(.*?)(?=(?:\([A-E]\)|$))', opts_raw, re.DOTALL))
    options = [om.group(2).strip() for om in opt_matches]

    topic_name, diff = topic_mapping.get(q_num, ("Mechanics", "medium"))

    parsed_list.append({
        "id": f"pt1-mech-q{q_num}",
        "global_num": q_num,
        "section": "Practice Test 1 – Mechanics",
        "question": q_text,
        "options": options,
        "answer": ans,
        "explanation": f"({ans}) " + expl,
        "difficulty": diff,
        "topic": topic_name
    })

print(f"Parsed total: {len(parsed_list)}")

# Save to a json file in scratch
with open('scratch/pt1_mech_questions.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_list, f, indent=4, ensure_ascii=False)

print("Saved scratch/pt1_mech_questions.json successfully!")
