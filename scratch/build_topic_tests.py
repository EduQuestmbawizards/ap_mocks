import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

raw_topic_text = r"""Vectors and Kinematics Drills
Chapter 5 Drill: Question 1
Question: An object that's moving with constant speed travels once around a circular path. Which of the following is/are true concerning this motion?  I. The displacement is zero.  II. The average speed is zero.  III. The acceleration is zero.  
Options:(A) I only  (B) I and II only  (C) I and III only  (D) III only  (E) II and III only  
Correct Answer: (A)  
Explanation:
Because the particle starts and finishes at the exact same location, its net position displacement is zero ($\Delta \vec{r} = 0$), making statement I true. Average speed is total distance over time, which is strictly greater than zero (II is false). Uniform circular motion features a continuous change in velocity direction, requiring a nonzero centripetal acceleration directed toward the center ($a_c = v^2/r \ne 0$) (III is false).  

Chapter 5 Drill: Question 2
Question: At time $t = t_1$, an object's velocity is $\vec{v}_1$. A short time later, at $t = t_2$, its velocity is $\vec{v}_2$. If $|\vec{v}_1| = |\vec{v}_2|$, which vector best illustrates the average acceleration $\vec{a}_{\text{avg}}$ between $t_1$ and $t_2$?  
Options:(A) Vector pointing along $\vec{v}_1$  (B) Vector pointing along $\vec{v}_2$  (C) Vector pointing downward and to the left (along $\vec{v}_2 - \vec{v}_1$)  (D) Vector pointing upward  (E) Zero vector
Correct Answer: (C)  
Explanation:
Average acceleration is defined by $\vec{a}_{\text{avg}} = \frac{\Delta\vec{v}}{\Delta t} = \frac{\vec{v}_2 - \vec{v}_1}{\Delta t} = \frac{\vec{v}_2 + (-\vec{v}_1)}{\Delta t}$. Vector addition of $\vec{v}_2$ and the inverted vector $-\vec{v}_1$ yields a resultant vector directed downward and to the left.  

Chapter 5 Drill: Question 3
Question: A rock is thrown off a $30\text{-m}$ cliff at a $45^\circ$ angle above the horizontal. Which of the following is true regarding the acceleration of the rock? (Ignore air resistance)  
Options:(A) The acceleration will have both horizontal and vertical components.  (B) At the peak, acceleration is half of its initial launch value.  (C) The acceleration will be of magnitude $g$ and in a downward direction.  (D) The acceleration is downward on ascent and upward on descent.  (E) The acceleration increases throughout the flight.  
Correct Answer: (C)  
Explanation:
Once in free-fall ballistic flight under negligible air resistance, the only force acting on the projectile is gravity ($F_g = mg$, downward). The acceleration is uniformly constant everywhere along the trajectory: $\vec{a} = -g\hat{j}$.  

Chapter 5 Drill: Question 4
Question: A baseball is thrown straight upward. What is the ball's acceleration at its highest point?  
Options:(A) $0$  (B) $-g$, downward  (C) $g$, downward  (D) $-g$, upward  (E) $g$, upward  
Correct Answer: (C)  
Explanation:
Even though the instantaneous velocity of the ball is zero at the apex of its path, the gravitational force continues to act on the ball without interruption, producing a constant downward acceleration of magnitude $g$.  

Chapter 5 Drill: Question 5
Question: An object's position is given by $x(t) = -3t^3 + t^2 + 6t$. What is the maximum velocity of the object?  
Options:(A) $0.11\text{ m/s}$  (B) $2.73\text{ m/s}$  (C) $6.11\text{ m/s}$  (D) $7.39\text{ m/s}$  (E) $9.81\text{ m/s}$  
Correct Answer: (C)  
Explanation:
Velocity function:
  $$v(t) = \frac{dx}{dt} = -9t^2 + 2t + 6$$
To find the maximum velocity, set the derivative of velocity (acceleration) equal to zero:
  $$\frac{dv}{dt} = -18t + 2 = 0 \implies t = \frac{1}{9}\text{ s} \approx 0.111\text{ s}$$
Evaluate $v(t)$ at $t = 1/9\text{ s}$:
  $$v_{\max} = -9\left(\frac{1}{9}\right)^2 + 2\left(\frac{1}{9}\right) + 6 = -\frac{1}{9} + \frac{2}{9} + 6 = 6 + \frac{1}{9} \approx 6.11\text{ m/s}$$

Chapter 5 Drill: Question 6
Question: A rock dropped off a cliff strikes the ground with an impact speed of $30\text{ m/s}$. How high was the cliff? ($g = 10\text{ m/s}^2$)  
Options:(A) $15\text{ m}$  (B) $20\text{ m}$  (C) $30\text{ m}$  (D) $45\text{ m}$  (E) $60\text{ m}$  
Correct Answer: (D)  
Explanation:
Using the kinematic equation $v_f^2 = v_0^2 + 2g\Delta y$ with $v_0 = 0$:
  $$\Delta y = \frac{v_f^2}{2g} = \frac{(30\text{ m/s})^2}{2(10\text{ m/s}^2)} = \frac{900}{20} = 45\text{ m}$$

Chapter 5 Drill: Question 7
Question: A stone is thrown horizontally with an initial speed of $10\text{ m/s}$ from a bridge. How long would it take to strike the water $80\text{ m}$ below the bridge? ($g = 10\text{ m/s}^2$)  
Options:(A) $1\text{ s}$  (B) $2\text{ s}$  (C) $4\text{ s}$  (D) $8\text{ s}$  (E) $16\text{ s}$
Correct Answer: (C)  
Explanation:
Vertical and horizontal motions are independent. With $v_{0y} = 0$:
  $$h = \frac{1}{2}gt^2 \implies t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2(80\text{ m})}{10\text{ m/s}^2}} = \sqrt{16} = 4\text{ s}$$

Chapter 5 Drill: Question 8
Question: A soccer ball at rest is kicked with initial velocity $10\text{ m/s}$ at launch angle $30^\circ$. Calculate its total flight time over level ground ($g = 10\text{ m/s}^2$).  
Options:(A) $0.5\text{ s}$  (B) $1.0\text{ s}$  (C) $1.7\text{ s}$  (D) $2.0\text{ s}$  (E) $2.5\text{ s}$
Correct Answer: (B)  
Explanation:
$$v_{0y} = v_0\sin(30^\circ) = 10(0.5) = 5\text{ m/s}$$
$$T = \frac{2v_{0y}}{g} = \frac{2(5\text{ m/s})}{10\text{ m/s}^2} = 1.0\text{ s}$$

Chapter 5 Drill: Question 9
Question: A stone is thrown horizontally with initial speed $30\text{ m/s}$ from a bridge. Find the stone's total speed when it enters the water $4\text{ s}$ later ($g = 10\text{ m/s}^2$).  
Options:(A) $30\text{ m/s}$  (B) $40\text{ m/s}$  (C) $50\text{ m/s}$  (D) $60\text{ m/s}$  (E) $70\text{ m/s}$  
Correct Answer: (C)  
Explanation:
Horizontal velocity: $v_x = 30\text{ m/s}$ (constant).  
Vertical velocity: $v_y = gt = (10\text{ m/s}^2)(4\text{ s}) = 40\text{ m/s}$.  
Magnitude: $v = \sqrt{v_x^2 + v_y^2} = \sqrt{30^2 + 40^2} = 50\text{ m/s}$.  

Chapter 5 Drill: Question 10
Question: Which statement is true concerning the motion of an ideal projectile launched at $45^\circ$?  
Options:(A) The acceleration vector points opposite to velocity on ascent and along velocity on descent.  (B) The speed at the top of the trajectory is zero.  (C) Total speed remains constant throughout.  (D) Horizontal speed decreases ascending and increases descending.  (E) Vertical speed decreases on the way up and increases on the way down.  
Correct Answer: (E)  
Explanation:
Because the downward gravitational acceleration opposes upward vertical velocity during ascent, vertical speed $|v_y|$ decreases to zero at the apex, then increases continuously as the projectile falls. Horizontal speed remains strictly constant throughout.  

Chapter 5 Drill: Question 11
Question: An object is launched from the ground with speed $v$ at distance $d$ away from a wall of height $h$. Which equation gives the launch angle $\theta$ to just clear the wall?  
Options:(A) $h = d\tan\theta - \frac{gd^2}{2v^2\cos^2\theta}$  (B) $h = d^2\cos\theta - \frac{gd^2}{2v^2\cos^2\theta}$  (C) $h = d\tan\theta - \frac{gd^2}{2v\cos\theta}$  (D) $h = d\sin\theta - \frac{gd^2}{v^2\cos^2\theta}$  (E) $h = d\sin\theta - \frac{gd^2}{2v\cos\theta}$  
Correct Answer: (A)  
Explanation:
Horizontal time to reach the wall: $t = \frac{d}{v\cos\theta}$.
Substituting into vertical position $y(t) = (v\sin\theta)t - \frac{1}{2}gt^2$:
  $$h = (v\sin\theta)\left(\frac{d}{v\cos\theta}\right) - \frac{1}{2}g\left(\frac{d}{v\cos\theta}\right)^2 = d\tan\theta - \frac{gd^2}{2v^2\cos^2\theta}$$

Chapter 5 Drill: Question 12
Question: An object moves in a straight line with a given velocity-time graph. If $x = 3.0\text{ m}$ at $t = 0$, what is the position at $t = 3.0\text{ s}$ if the area under the $v\text{--}t$ curve from $0$ to $3\text{ s}$ is $8\text{ m}$?  
Options:(A) $5\text{ m}$  (B) $8\text{ m}$  (C) $10\text{ m}$  (D) $11\text{ m}$  (E) $14\text{ m}$
Correct Answer: (D)  
Explanation:
Displacement is the definite integral of velocity: $\Delta x = \int_0^3 v(t)\,dt = 8\text{ m}$.
  $$x(3) = x(0) + \Delta x = 3.0\text{ m} + 8\text{ m} = 11\text{ m}$$

Chapter 6: Newton's Laws of Motion Drill
Chapter 6 Drill: Question 1
Question: A box is dragged across a table at constant velocity by a string. Which of the following is a Newton's Third Law action-reaction pair?  I. Force of gravity on the box and normal force on the box  II. Force of friction on the box and tension force on the box  III. Force of the box pushing down on the table and normal force of the table pushing up on the box  
Options:(A) I only  (B) I and II only  (C) II only  (D) I and III only  (E) III only  
Correct Answer: (E)  
Explanation:
An action-reaction pair must involve mutual forces of the same physical type exerted between the same two objects in opposite directions. The table pushing up on the box ($F_{N,\text{table on box}}$) and the box pushing down on the table ($F_{N,\text{box on table}}$) act on each other, satisfying Newton's Third Law.  

Chapter 6 Drill: Question 2
Question: A person who weighs $800\text{ N}$ steps onto a scale in an elevator accelerating upward at $5\text{ m/s}^2$. What will the scale read? ($g = 10\text{ m/s}^2$)  
Options:(A) $400\text{ N}$  (B) $800\text{ N}$  (C) $1,000\text{ N}$  (D) $1,200\text{ N}$  (E) $1,600\text{ N}$  
Correct Answer: (D)  
Explanation:
Mass $m = \frac{W}{g} = \frac{800\text{ N}}{10\text{ m/s}^2} = 80\text{ kg}$.
Using Newton's Second Law with upward as positive:
  $$F_N - mg = ma \implies F_N = m(g + a) = (80\text{ kg})(10 + 5\text{ m/s}^2) = 1,200\text{ N}$$

Chapter 6 Drill: Question 3
Question: A horizontal force of $20\text{ N}$ pulls on a $1.0\text{ kg}$ block attached by a string to a $2.0\text{ kg}$ block on a frictionless surface. Find the tension $F_T$ in the connecting string and the acceleration $a$ of the system.  
Options:(A) $F_T = 13.3\text{ N},\ a = 10\text{ m/s}^2$  (B) $F_T = 13.3\text{ N},\ a = 20\text{ m/s}^2$  (C) $F_T = 15\text{ N},\ a = 6.7\text{ m/s}^2$  (D) $F_T = 13.3\text{ N},\ a = 6.7\text{ m/s}^2$  (E) $F_T = 20\text{ N},\ a = 6.7\text{ m/s}^2$
Correct Answer: (D)  
Explanation:
System acceleration:
  $$a = \frac{F_{\text{applied}}}{m_1 + m_2} = \frac{20\text{ N}}{1.0 + 2.0\text{ kg}} = \frac{20}{3}\text{ m/s}^2 \approx 6.7\text{ m/s}^2$$
Tension pulling the trailing $2.0\text{ kg}$ block:
  $$F_T = m_2 a = (2.0\text{ kg})\left(\frac{20}{3}\text{ m/s}^2\right) = \frac{40}{3}\text{ N} \approx 13.3\text{ N}$$

Chapter 6 Drill: Question 4
Question: A force of $20\text{ N}$ pulls a chain of three frictionless blocks: $3.0\text{ kg} - 2.0\text{ kg} - 1.0\text{ kg}$. Find $F_{T1}$ (between $1\text{ kg}$ and $2\text{ kg}$), $F_{T2}$ (between $2\text{ kg}$ and $3\text{ kg}$), and acceleration $a$.  
Options:(A) $F_{T1} = 1\text{ N},\ a = 1\text{ m/s}^2$  (B) $F_{T1} = 3.3\text{ N},\ F_{T2} = 3.3\text{ N},\ a = 3.3\text{ m/s}^2$  (C) $F_{T1} = 3.3\text{ N},\ F_{T2} = 10\text{ N},\ a = 3.3\text{ m/s}^2$  (D) $F_{T1} = 3.3\text{ N},\ F_{T2} = 10\text{ N},\ a = 6.7\text{ m/s}^2$  (E) $F_{T1} = 10\text{ N},\ a = 6.7\text{ m/s}^2$  
Correct Answer: (C)  
Explanation:
$$a = \frac{20\text{ N}}{1.0 + 2.0 + 3.0\text{ kg}} = \frac{20}{6}\text{ m/s}^2 = 3.33\text{ m/s}^2$$
$$F_{T1} = m_1 a = (1.0\text{ kg})(3.33\text{ m/s}^2) = 3.33\text{ N}$$
$$F_{T2} = (m_1 + m_2)a = (1.0 + 2.0\text{ kg})(3.33\text{ m/s}^2) = 10.0\text{ N}$$

Chapter 6 Drill: Question 5
Question: A box is placed at rest on a ramp ($\theta = 30^\circ, \mu_s = 0.5$). The box will:  
Options:(A) Accelerate down the ramp  (B) Accelerate briefly then stop  (C) Move with constant velocity  (D) Not move  (E) Cannot be determined  
Correct Answer: (A)  
Explanation:
Downhill gravitational component: $F_{g,\parallel} = mg\sin(30^\circ) = 0.50\,mg$.
Maximum static friction force:
  $$f_{s,\max} = \mu_s mg\cos(30^\circ) = (0.5)(0.866\,mg) \approx 0.433\,mg$$
Because $F_{g,\parallel} > f_{s,\max}$ ($0.50\,mg > 0.433\,mg$), the net force down the ramp is positive, and the box will accelerate down.  

Chapter 6 Drill: Question 6
Question: In an Atwood machine with hanging masses $m$ and $4m$, find the acceleration.  
Options:(A) $0.2g$  (B) $0.4g$  (C) $0.6g$  (D) $0.75g$  (E) $0.8g$
Correct Answer: (C)
Explanation:
$$a = \frac{m_2 - m_1}{m_1 + m_2}g = \frac{4m - m}{4m + m}g = \frac{3}{5}g = 0.6g$$

Chapter 6 Drill: Question 7
Question: A $20\text{ N}$ force pulls a $2.0\text{ kg}$ block connected to a $1.0\text{ kg}$ trailing block on a rough surface ($\mu_k = 0.2$). Find the tension $F_T$ and acceleration $a$ ($g = 10\text{ m/s}^2$).  
Options:(A) $F_T = 1\text{ N},\ a = 4.7\text{ m/s}^2$  (B) $F_T = 3.3\text{ N},\ a = 4.7\text{ m/s}^2$  (C) $F_T = 3.3\text{ N},\ a = 6.7\text{ m/s}^2$  (D) $F_T = 6.7\text{ N},\ a = 6.7\text{ m/s}^2$  (E) $F_T = 6.7\text{ N},\ a = 4.7\text{ m/s}^2$  
Correct Answer: (E)  
Explanation:
Total friction force: $f_{\text{total}} = \mu_k(m_1 + m_2)g = (0.2)(3.0\text{ kg})(10\text{ m/s}^2) = 6\text{ N}$.
Acceleration: $a = \frac{F - f_{\text{total}}}{m_1 + m_2} = \frac{20 - 6}{3} = \frac{14}{3} \approx 4.7\text{ m/s}^2$.
Tension on the $1.0\text{ kg}$ trailing block:
  $$F_T - f_1 = m_1 a \implies F_T = (0.2)(1.0)(10) + (1.0)(4.7) = 2.0 + 4.7 = 6.7\text{ N}$$

Chapter 6 Drill: Question 8
Question: An object slides down a frictionless incline of angle $\theta$ and reaches final speed $v$. On a planet with twice Earth's gravitational acceleration ($2g$), what will be its final speed?  
Options:(A) $v$  (B) $\sqrt{2}v$  (C) $2v$  (D) $4v$  (E) $v/2$
Correct Answer: (B)  
Explanation:
Using $v = \sqrt{2ad} = \sqrt{2(g\sin\theta)d} \propto \sqrt{g}$. Doubling $g$ scales the final velocity by a factor of $\sqrt{2}$, giving $v_{\text{new}} = \sqrt{2}v$.  

Chapter 6 Drill: Question 9
Question: A roller coaster completes a loop of radius $r = 25\text{ m}$. What is the minimum speed needed at the top of the loop for riders to remain safely in contact with the track? ($g = 10\text{ m/s}^2$)  
Options:(A) $12.7\text{ m/s}$  (B) $15.8\text{ m/s}$  (C) $21.2\text{ m/s}$  (D) $29.3\text{ m/s}$  (E) $33.3\text{ m/s}$  
Correct Answer: (B)  
Explanation:
At critical cut-off speed, normal force $F_N \to 0$, so gravity alone provides the centripetal acceleration:
  $$\frac{mv^2}{r} = mg \implies v = \sqrt{gr} = \sqrt{(10\text{ m/s}^2)(25\text{ m})} = \sqrt{250} \approx 15.8\text{ m/s}$$

Chapter 6 Drill: Question 10
Question: A bucket of mass $3\text{ kg}$ on a $0.6\text{-m}$ rope is whirled in a vertical circle. At the lowest point, the tension is $50\text{ N}$. What is the speed of the bucket? ($g = 10\text{ m/s}^2$)  
Options:(A) $1\text{ m/s}$  (B) $2\text{ m/s}$  (C) $3\text{ m/s}$  (D) $4\text{ m/s}$  (E) $5\text{ m/s}$
Correct Answer: (B)  
Explanation:
At the bottom of the circle: $F_T - mg = \frac{mv^2}{r}$.
  $$50\text{ N} - (3\text{ kg})(10\text{ m/s}^2) = \frac{3 v^2}{0.6} \implies 20 = 5v^2 \implies v^2 = 4 \implies v = 2\text{ m/s}$$

Chapter 6 Drill: Question 11
Question: What is the critical speed at the top of the vertical circle for the bucket in Question 10 so the rope does not become slack?  
Options:(A) $0.6\text{ m/s}$  (B) $1.8\text{ m/s}$  (C) $2.4\text{ m/s}$  (D) $3.2\text{ m/s}$  (E) $4.8\text{ m/s}$  
Correct Answer: (C)  
Explanation:
$$v_{\text{critical}} = \sqrt{gr} = \sqrt{(10\text{ m/s}^2)(0.60\text{ m})} = \sqrt{6.0} \approx 2.45\text{ m/s} \approx 2.4\text{ m/s}$$

Chapter 6 Drill: Question 12
Question: An object moves at constant speed in a circular path of radius $r$ at 1 revolution per second. What is its centripetal acceleration?  
Options:(A) $2\pi r$  (B) $2\pi^2 r$  (C) $2\pi^2 r^2$  (D) $4\pi^2 r$  (E) $4\pi^2 r^2$
Correct Answer: (D)  
Explanation:
With angular frequency $\omega = 2\pi f = 2\pi(1) = 2\pi\text{ rad/s}$:
  $$a_c = \omega^2 r = (2\pi)^2 r = 4\pi^2 r$$

Chapter 7: Work, Energy, and Power Drill
Chapter 7 Drill: Question 1
Question: A force $F = 20\text{ N}$ acts on a $3\text{ kg}$ object as it moves $4\text{ m}$. If $F$ is perpendicular to displacement, the work done is:  
Options:(A) $0\text{ J}$  (B) $60\text{ J}$  (C) $80\text{ J}$  (D) $600\text{ J}$  (E) $2,400\text{ J}$  
Correct Answer: (A)  
Explanation:
$W = \vec{F}\cdot\vec{d} = F d \cos(90^\circ) = 0\text{ J}$. Any force acting strictly perpendicular to displacement performs zero work.  

Chapter 7 Drill: Question 2
Question: An object of mass $4\text{ kg}$ accelerates from $3\text{ m/s}$ to $6\text{ m/s}$ in $8\text{ s}$. How much work was done on the object?  
Options:(A) $27\text{ J}$  (B) $54\text{ J}$  (C) $72\text{ J}$  (D) $96\text{ J}$  (E) Cannot be determined  
Correct Answer: (B)  
Explanation:
By the Work-Energy Theorem ($W = \Delta K$):
  $$W = \frac{1}{2}m(v_f^2 - v_i^2) = \frac{1}{2}(4\text{ kg})((6\text{ m/s})^2 - (3\text{ m/s})^2) = 2(36 - 9) = 2(27) = 54\text{ J}$$

Chapter 7 Drill: Question 3
Question: To lift a box of mass $m$ to height $h$, three options are considered: Option 1 (direct lift), Option 2 ($30^\circ$ incline), Option 3 (pulley system). Compare the work done under ideal conditions.  
Options:(A) Option 1 > Option 2 > Option 3  (B) Option 1 > Option 2 = Option 3  (C) Option 1 = Option 3 > Option 2  (D) Option 1 = Option 2 = Option 3  (E) Cannot be determined  
Correct Answer: (D)  
Explanation:
Under ideal conservative conditions, gravitational potential energy is path-independent. In all three methods, the minimum work required is identical: $W = mgh$.  

Chapter 7 Drill: Question 4
Question: A $4\text{ kg}$ box is pulled up a ramp ($\theta = 30^\circ$, height $= 5\text{ m}$) at constant velocity. How much work is done by the normal force?  
Options:(A) $160\text{ J}$  (B) $80\text{ J}$  (C) $40\text{ J}$  (D) $20\text{ J}$  (E) $0\text{ J}$
Correct Answer: (E)  
Explanation:
The normal force is perpendicular to the ramp surface and therefore perpendicular to the displacement vector of the box ($\theta = 90^\circ$). Thus $W_N = F_N d \cos(90^\circ) = 0\text{ J}$.  

Chapter 7 Drill: Question 5
Question: A man stands in an elevator as it begins to ascend. Does the normal force from the floor do work on the man?  
Options:(A) Yes, and the work done will be positive.  (B) Yes, and the work done will be negative.  (C) Yes, but the sign cannot be determined.  (D) No, the normal force does no work in any situation.  (E) No, normal force does no work here.  
Correct Answer: (A)  
Explanation:
The normal force pushes upward on the man's feet ($\vec{F}_N$ is upward) and the elevator displacement is upward ($\vec{d}$ is upward). Because $\vec{F}_N$ and $\vec{d}$ point in the same direction ($\theta = 0^\circ$), $W = F_N d \cos(0^\circ) > 0$ (positive work).  

Chapter 7 Drill: Question 6
Question: A $3.5\text{ kg}$ block slides from rest down a frictionless $30^\circ$ incline of length $6.4\text{ m}$. What is its speed at the bottom? ($g = 10\text{ m/s}^2$)  
Options:(A) $5.0\text{ m/s}$  (B) $5.7\text{ m/s}$  (C) $6.4\text{ m/s}$  (D) $8.0\text{ m/s}$  (E) $10\text{ m/s}$  
Correct Answer: (D)  
Explanation:
Vertical height of the incline: $h = L\sin(30^\circ) = 6.4(0.5) = 3.2\text{ m}$.
By Conservation of Energy:
  $$mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2(10)(3.2)} = \sqrt{64} = 8.0\text{ m/s}$$

Chapter 7 Drill: Question 7
Question: A block of mass $m$ slides from rest down an incline of length $s$ and height $h$ with kinetic friction force $F_f$. What is the kinetic energy at the bottom?  
Options:(A) $mgh$  (B) $mgh - F_f h$  (C) $mgs - F_f h$  (D) $mgh - F_f s$  (E) $mgs - F_f s$  
Correct Answer: (D)  
Explanation:
Applying the Work-Energy Theorem ($E_i + W_{\text{other}} = E_f$):
  $$mgh - F_f s = K_f \implies K_f = mgh - F_f s$$

Chapter 7 Drill: Question 8
Question: A $1,000\text{ kg}$ car accelerates at $4\text{ m/s}^2$ while experiencing $300\text{ N}$ of drag force. How much force must the engine produce?  
Options:(A) $16,300\text{ N}$  (B) $15,700\text{ N}$  (C) $4,300\text{ N}$  (D) $4,000\text{ N}$  (E) $3,700\text{ N}$  
Correct Answer: (C)  
Explanation:
$$F_{\text{engine}} - F_{\text{drag}} = ma \implies F_{\text{engine}} = ma + F_{\text{drag}} = (1,000\text{ kg})(4\text{ m/s}^2) + 300\text{ N} = 4,300\text{ N}$$

Chapter 7 Drill: Question 9
Question: An astronaut drops a rock from the top of a crater. When the rock is halfway down to the bottom, its speed is what fraction of its impact speed?  
Options:(A) $1/4$  (B) $1/2$  (C) $1/\sqrt{2}$  (D) $\sqrt{2}/3$  (E) $1/\sqrt{2}$  
Correct Answer: (E)  
Explanation:
At halfway point $h/2$, kinetic energy is half the final kinetic energy: $K_{\text{mid}} = \frac{1}{2}K_{\text{final}}$.
  $$\frac{1}{2}mv_{\text{mid}}^2 = \frac{1}{2}\left(\frac{1}{2}mv_{\text{final}}^2\right) \implies v_{\text{mid}} = \frac{1}{\sqrt{2}}v_{\text{final}}$$

Chapter 7 Drill: Question 10
Question: A block of mass $m$ is pulled up a ramp of length $d$, angle $\theta$, and friction coefficient $\mu$ by a motor at constant power in time $t$. What is the minimum power $P$?  
Options:(A) $\frac{2md^2}{t^3} + \frac{mgd\sin\theta}{t} + \frac{\mu mgd\cos\theta}{t}$  (B) $\frac{md^2}{t^2} + mgd\sin\theta + \mu mgd\cos\theta$  (C) $\frac{md^2}{t^3} + \frac{mgd\sin\theta}{t} + \frac{\mu mgd\cos\theta}{t}$  (D) $\frac{2md^2}{t^3} + \frac{mgd\sin\theta}{t} + \frac{\mu mgd\cos\theta}{t}$  (E) $\frac{md^2}{2t^3} + \frac{mgd\cos\theta}{t} + \frac{\mu mgd\sin\theta}{t}$  
Correct Answer: (D)  
Explanation:
Under constant acceleration to cover distance $d$ in time $t$, $d = \frac{1}{2}at^2 \implies a = \frac{2d}{t^2}$ and $v_f = \frac{2d}{t}$.
Total work done:
  $$W = \Delta K + \Delta U + W_{\text{friction}} = \frac{1}{2}m\left(\frac{2d}{t}\right)^2 + mg(d\sin\theta) + (\mu mg\cos\theta)d$$
Power $P = W/t$:
  $$P = \frac{2md^2}{t^3} + \frac{mgd\sin\theta}{t} + \frac{\mu mgd\cos\theta}{t}$$
"""

# Let's parse the 3 sections:
# 1. Kinematics & Vectors: 12 questions
# 2. Newton's Laws of Motion: 12 questions
# 3. Work, Energy, and Power: 10 questions

kinematics_topics = {
    1: ("Uniform Circular Motion & Kinematics", "easy"),
    2: ("Average Acceleration Vector Sum", "medium"),
    3: ("2D Projectile Acceleration", "easy"),
    4: ("Vertical Free Fall Acceleration at Apex", "easy"),
    5: ("Calculus Kinematics & Max Velocity", "medium"),
    6: ("Free Fall Drop Height Calculation", "easy"),
    7: ("Horizontal Projectile Flight Time", "easy"),
    8: ("Angled Projectile Total Hang Time", "easy"),
    9: ("2D Projectile Impact Speed", "medium"),
    10: ("Projectile Motion Vertical vs Horizontal Velocity", "easy"),
    11: ("Trajectory Equation & Wall Clearance Angle", "hard"),
    12: ("Velocity-Time Graph & Position Integral", "medium"),
}

newtons_laws_topics = {
    1: ("Newton's Third Law Action-Reaction Pairs", "easy"),
    2: ("Apparent Weight in Accelerating Elevator", "easy"),
    3: ("Two-Block System Tension & Acceleration", "medium"),
    4: ("Three-Block Frictionless Train Tensions", "medium"),
    5: ("Incline Static Friction Threshold", "medium"),
    6: ("Atwood Machine System Acceleration", "easy"),
    7: ("Two-Block System with Kinetic Friction", "medium"),
    8: ("Incline Gravitational Scaling", "easy"),
    9: ("Vertical Loop Minimum Cut-Off Speed", "medium"),
    10: ("Vertical Circular Motion Bottom Tension", "medium"),
    11: ("Vertical String Circle Critical Apex Speed", "medium"),
    12: ("Centripetal Acceleration & Angular Frequency", "easy"),
}

energy_topics = {
    1: ("Perpendicular Force & Zero Work", "easy"),
    2: ("Work-Energy Theorem & Kinetic Energy Change", "easy"),
    3: ("Path Independence & Conservative Gravitational Work", "easy"),
    4: ("Normal Force Zero Work on Incline", "easy"),
    5: ("Elevator Normal Force Positive Work", "easy"),
    6: ("Frictionless Incline Energy Conservation", "medium"),
    7: ("Incline Kinetic Energy with Friction Work", "medium"),
    8: ("Newton's Second Law with Aerodynamic Drag", "easy"),
    9: ("Gravitational Free Fall Midpoint Speed Fraction", "medium"),
    10: ("Incline Constant Power Mechanical Derivation", "hard"),
}

# Parse all questions
pattern = r'Question:\s*(.*?)\s*Options:\s*(.*?)\s*Correct Answer:\s*\(([A-E])\)\s*\nExplanation:\s*(.*?)(?=(?:Chapter|\Z))'
matches = list(re.finditer(pattern, raw_topic_text, re.DOTALL))
print(f'Matched {len(matches)} questions total')

kinematics_qs = []
forces_qs = []
energy_qs = []

for idx, m in enumerate(matches):
    q_text = m.group(1).strip()
    opts_raw = m.group(2).strip()
    ans = m.group(3).strip()
    expl = m.group(4).strip()

    # Clean any [cite: 1]
    q_text = re.sub(r'\s*\[cite:\s*\d+\]', '', q_text)
    expl = re.sub(r'\s*\[cite:\s*\d+\]', '', expl)

    opt_matches = list(re.finditer(r'\(([A-E])\)\s*(.*?)(?=(?:\([A-E]\)|$))', opts_raw, re.DOTALL))
    options = [re.sub(r'\s*\[cite:\s*\d+\]', '', om.group(2).strip()) for om in opt_matches]

    if idx < 12:
        # Kinematics
        q_num = idx + 1
        top_name, diff = kinematics_topics.get(q_num, ("Kinematics", "medium"))
        kinematics_qs.append({
            "id": f"ap-topic-physc-kinematics-q{q_num}",
            "global_num": q_num,
            "section": "Kinematics & 1D/2D Motion",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        })
    elif idx < 24:
        # Newton's Laws
        q_num = idx - 12 + 1
        top_name, diff = newtons_laws_topics.get(q_num, ("Newton's Laws of Motion", "medium"))
        forces_qs.append({
            "id": f"ap-topic-physc-forces-q{q_num}",
            "global_num": q_num,
            "section": "Newton's Laws & Friction Dynamics",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        })
    else:
        # Energy
        q_num = idx - 24 + 1
        top_name, diff = energy_topics.get(q_num, ("Work, Energy & Power", "medium"))

        # Fix Q9 duplicate options if any: in prompt Q9 had (C) 1/\sqrt{2}, (E) 1/\sqrt{2}. Fix (C) to \sqrt{2}/2 or \sqrt{3}/2 or 1/\sqrt{3}
        if q_num == 9:
            options = [
                r'$1/4$',
                r'$1/2$',
                r'$1/\sqrt{3}$',
                r'$\sqrt{2}/3$',
                r'$1/\sqrt{2}$'
            ]
        # Fix Q10 duplicate options if any: in prompt Q10 had (A) and (D) duplicate. Fix (A) to missing a term or without friction
        if q_num == 10:
            options = [
                r'$\frac{md^2}{t^3} + \frac{mgd\sin\theta}{t}$',
                r'$\frac{md^2}{t^2} + mgd\sin\theta + \mu mgd\cos\theta$',
                r'$\frac{md^2}{t^3} + \frac{mgd\sin\theta}{t} + \frac{\mu mgd\cos\theta}{t}$',
                r'$\frac{2md^2}{t^3} + \frac{mgd\sin\theta}{t} + \frac{\mu mgd\cos\theta}{t}$',
                r'$\frac{md^2}{2t^3} + \frac{mgd\cos\theta}{t} + \frac{\mu mgd\sin\theta}{t}$'
            ]

        energy_qs.append({
            "id": f"ap-topic-physc-energy-q{q_num}",
            "global_num": q_num,
            "section": "Work, Energy & Power",
            "question": q_text,
            "options": options,
            "answer": ans,
            "explanation": f"({ans}) " + expl,
            "difficulty": diff,
            "topic": top_name
        })

print(f"Kinematics questions: {len(kinematics_qs)}")
print(f"Forces questions: {len(forces_qs)}")
print(f"Energy questions: {len(energy_qs)}")

# Combined High-Yield Skill Drills
combined_drills = []
for i, q in enumerate(kinematics_qs + forces_qs + energy_qs):
    cq = dict(q)
    cq['id'] = f"drill_mech_q{i+1}"
    cq['global_num'] = i + 1
    combined_drills.append(cq)

with open('scratch/topic_kinematics.json', 'w', encoding='utf-8') as f:
    json.dump(kinematics_qs, f, indent=4, ensure_ascii=False)

with open('scratch/topic_forces.json', 'w', encoding='utf-8') as f:
    json.dump(forces_qs, f, indent=4, ensure_ascii=False)

with open('scratch/topic_energy.json', 'w', encoding='utf-8') as f:
    json.dump(energy_qs, f, indent=4, ensure_ascii=False)

with open('scratch/topic_mech_drills.json', 'w', encoding='utf-8') as f:
    json.dump(combined_drills, f, indent=4, ensure_ascii=False)

print("Saved all topic test JSON files successfully!")
