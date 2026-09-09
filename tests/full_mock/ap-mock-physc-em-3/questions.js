// Specific Question Bank for Test: ap-mock-physc-em-3
const AP_TEST_DATA = {
    "ap-mock-physc-em-3": {
        "id": "ap-mock-physc-em-3",
        "title": "AP Physics C: Electricity & Magnetism Full Practice Exam 3",
        "subtitle": "Official 38-Question Simulation: 35 Multiple-Choice + 3 Free-Response with Analytical Scoring Rubrics",
        "timeLimitMinutes": 90,
        "testType": "Full Mock Exam",
        "subject": "AP Physics C: Electricity & Magnetism",
        "topic": "E&M Practice Exam 3",
        "questions": [
            {
                "id": "ap-mock-physc-em-3_mc_1",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0317-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\"><strong>Time:</strong> 45 minutes. You may refer to the constants sheet and the equation sheet, both of which are found in the appendix. You may use a calculator.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 1 and 2: The circuit above consists of three capacitors and a battery, which has been connected for a long time.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_1\" id=\"ch19r_1\">1.</a></strong> What is the charge stored on the 6 nF capacitor?</p>",
                "options": [
                    "<p>96 nC</p>",
                    "<p>48 nC</p>",
                    "<p>432 nC</p>",
                    "<p>4 nC</p>",
                    "<p>144 nC</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_1\" id=\"rch19r_1\">1.</a></strong> <strong>A—</strong>First, reduce the circuit to its simplest form. The parallel capacitors add algebraically to get an equivalent capacitance of 12 nF. Then the series capacitors add inversely by 1/$C_{eq}$ = 1/$C_{1}$ + 1/$C_{2}$. Add 1/12 and 1/6 to get 1/4 . . . that means the equivalent capacitance of the circuit is 4 nF. Now by $Q$ = <em>CV</em>, the whole circuit stores (4 nF) × (24 V) = 96 nC. Series capacitors each take the same charge as each other; that is ALSO equal to the total charge across the combination. So the 6 nF capacitor takes all 96 nC.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_2",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/t0317-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\"><strong>Time:</strong> 45 minutes. You may refer to the constants sheet and the equation sheet, both of which are found in the appendix. You may use a calculator.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 1 and 2: The circuit above consists of three capacitors and a battery, which has been connected for a long time.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_2\" id=\"ch19r_2\">2.</a></strong> What is the voltage across the 8 nF capacitor?</p>",
                "options": [
                    "<p>2 V</p>",
                    "<p>12 V</p>",
                    "<p>16 V</p>",
                    "<p>8 V</p>",
                    "<p>3 V</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_2\" id=\"rch19r_2\">2.</a></strong> <strong>D—</strong>The parallel capacitors take the same voltage as each other. Their equivalent capacitance is 12 nF. Both the voltage across this 12 nF equivalent capacitance and the voltage across the 6 nF capacitor must add to 24 V by Kirchhoff’s loop rule. And series capacitors take the same charge in $Q$ = <em>CV</em>. Solving for voltage, the voltage across each capacitor is <em>Q/C</em>, where $Q$ is the same for each. Even if you got the total charge wrong in question 1, you’ll still see that the bigger capacitor takes the smaller voltage, and by a factor of 2 here since 12 nF is twice 6 nF. The 12 nF equivalent capacitor takes 8 V across it (96 nC/12 nF). This means both of the parallel capacitors also take 8 V.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_3",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 3 and 4: Two long, straight wires are separated by a distance $d$. The left-hand wire carries a current $I$ directed into the page; the right-hand wire carries a current $I$ directed out of the page. Points R and P are positions in space, located as shown in the diagram.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_3\" id=\"ch19r_3\">3.</a></strong> What is the magnitude of the net magnetic field produced at point P?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_3\" id=\"rch19r_3\">3.</a></strong> <strong>C—</strong>The magnetic field due to a long straight wire is $μ_{0}$<em>I/</em>2<em>πr,</em> where $r$ is the distance from the wire to the point being considered. So for the right-hand wire, $r = d$, and for the left-hand wire, $r$ = 2$d$. The direction of the magnetic field is given by the second right-hand rule: point the thumb with the current, curl the fingers to show the field direction. That’s down the page due to the right-hand wire, up the page due to the left-hand wire. So the magnitudes of the two magnetic fields subtract to the total: $μ_{0}$<em>I/</em>2<em>πd</em> − $μ_{0}$<em>I/</em>2$\\pi$(2$d$) gives choice C.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_4",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0319-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 3 and 4: Two long, straight wires are separated by a distance $d$. The left-hand wire carries a current $I$ directed into the page; the right-hand wire carries a current $I$ directed out of the page. Points R and P are positions in space, located as shown in the diagram.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_4\" id=\"ch19r_4\">4.</a></strong> What is the direction of the net magnetic field produced at point R?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/larrow.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p>Zero</p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/2arrow.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/rarrow.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/4arrow.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_4\" id=\"rch19r_4\">4.</a></strong> <strong>B—</strong>Use the second right-hand rule: point the thumb with the current, and the fingers show the magnetic field direction. The left-hand wire produces a field down and to the right. The right-hand wire produces a field up and to the left. These fields are of equal magnitude, because the currents are the same and the distances from the wires are the same. So the magnetic fields subtract to a net of zero.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_5",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0320-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 5 and 6: A proton initially moving right with speed $v$ enters a region in which the magnetic field is uniform. The proton is deflected along the path shown, exiting the magnetic field at position X. Next, an electron initially moving right with identical speed $v$ enters the magnetic field from the same position.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_5\" id=\"ch19r_5\">5.</a></strong> Which of the labeled positions is closest to where the electron will exit the magnetic field?</p>",
                "options": [
                    "<p>A</p>",
                    "<p>B</p>",
                    "<p>C</p>",
                    "<p>D</p>",
                    "<p>X</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_5\" id=\"rch19r_5\">5.</a></strong> <strong>C—</strong>Apply net$F$ = <em>ma</em> in circular motion. Here the net force on the object is <em>qvB</em>, and the acceleration in a circular path is $v^{2}$/$r$. Solve for $r$ to get $r$ = <em>mv/qB</em>. The electron and proton experience the same magnetic field $B$, the same speed $v$, and have the same amount of charge $q$. The difference is, the mass of a proton is something like 2000 times that of the electron. So the radius of the proton’s circular motion will be 2000 times bigger. The only position close to showing an orbital radius 2000 times smaller for the electron is C.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_6",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0320-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 5 and 6: A proton initially moving right with speed $v$ enters a region in which the magnetic field is uniform. The proton is deflected along the path shown, exiting the magnetic field at position X. Next, an electron initially moving right with identical speed $v$ enters the magnetic field from the same position.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_6\" id=\"ch19r_6\">6.</a></strong> The speed of the proton a very short time $t$ after entering the magnetic field is $v_{p}$; the speed of the electron the same time $t$ after entering the magnetic field is $v_{e}$. Which of the following correctly compares $v_{p}$ and $v_{e}$?</p>",
                "options": [
                    "<p>$v_{p}$ is smaller than $v_{e}$ by more than a factor of 10</p>",
                    "<p>$v_{p}$ is equal to $v_{e}$</p>",
                    "<p>$v_{p}$ is larger than $v_{e}$ by less than a factor of 10</p>",
                    "<p>$v_{p}$ is larger than $v_{e}$ by more than a factor of 10</p>",
                    "<p>$v_{p}$ is smaller than $v_{e}$ by less than a factor of 10</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_6\" id=\"rch19r_6\">6.</a></strong> <strong>B—</strong>The direction of a magnetic force is always perpendicular to the velocity vector. This means that the magnetic force causes circular motion, but not a change in speed, for an object in the field. The magnetic field won’t change the speed of “any” particle.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_7",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0320-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 7 and 8: A capacitor $C_{1}$ is initially connected to a 12 V battery for a long time, as in diagram 1. Next, in diagram 2 the battery is disconnected, and in diagram 3 $C_{1}$ is connected instead to capacitor $C_{2}$, which has an initial charge.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_7\" id=\"ch19r_7\">7.</a></strong> Which of the following must be identical quantities in diagram 3?</p><p class=\"roman1t\">I. The charge on each capacitor</p><p class=\"roman2\">II. The voltage across each capacitor</p><p class=\"roman3\">III. The capacitance of each capacitor</p>",
                "options": [
                    "<p>I only</p>",
                    "<p>II only</p>",
                    "<p>III only</p>",
                    "<p>I and II only</p>",
                    "<p>I, II, and III</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_7\" id=\"rch19r_7\">7.</a></strong> <strong>B—</strong>Kirchoff’s loop rule indicates that since this a closed circuit loop, the voltage across each must be the same. Capacitance is a property of a capacitor, so the capacitances can be different regardless of what circuit they’re hooked up to. Then by $Q$ = <em>CV</em> the charge can be different if the capacitances are different, even with the same voltages.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_8",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0320-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 7 and 8: A capacitor $C_{1}$ is initially connected to a 12 V battery for a long time, as in diagram 1. Next, in diagram 2 the battery is disconnected, and in diagram 3 $C_{1}$ is connected instead to capacitor $C_{2}$, which has an initial charge.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_8\" id=\"ch19r_8\">8.</a></strong> Which of the following must be identical quantities for capacitor $C_{1}$ in circuits 1 and 3?</p><p class=\"roman1t\">I. The voltage across $C_{1}$</p><p class=\"roman2\">II. The charge on $C_{1}$</p><p class=\"roman3\">III. The capacitance of $C_{1}$</p>",
                "options": [
                    "<p>I only</p>",
                    "<p>II only</p>",
                    "<p>III only</p>",
                    "<p>I and II only</p>",
                    "<p>I, II, and III</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_8\" id=\"rch19r_8\">8.</a></strong> <strong>C—</strong>Capacitance is a property of a capacitor. It’s the same capacitor in both diagrams, so it has the same capacitance. Charge is free to flow between capacitors in diagram 3, so the charge on $C_{1}$ will change. And while the voltage across each capacitor in diagram 3 must be the same for each, that doesn’t have to be 12 V and probably will not be.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_9",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0321-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 9 and 10 refer to the circuit above.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_9\" id=\"ch19r_9\">9.</a></strong> What is the resistance of $R_{2}$?</p>",
                "options": [
                    "<p>33 Ω</p>",
                    "<p>3 Ω</p>",
                    "<p>150 Ω</p>",
                    "<p>100 Ω</p>",
                    "<p>20 Ω</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_9\" id=\"rch19r_9\">9.</a></strong> <strong>A—</strong>The voltage across the middle branch of the circuit is <em>IR</em> = (2 A)(50 Ω) = 100 V. That’s the same as the voltage across $R_{2}$, because parallel resistors take the same voltage as each other. The current through $R_{2}$ is 3 A by Kirchoff’s junction rule (5 A enters the junction, 2 A goes down the middle, so the remaining 3 A goes through $R_{2}$). Set 100 V = (3 A)($R_{2}$) and solve for $R_{2}$ = 33 Ω.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_10",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0321-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 9 and 10 refer to the circuit above.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_10\" id=\"ch19r_10\">10.</a></strong> What is the voltage measured by the voltmeter?</p>",
                "options": [
                    "<p>200 V</p>",
                    "<p>20 V</p>",
                    "<p>60 V</p>",
                    "<p>100 V</p>",
                    "<p>250 V</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_10\" id=\"rch19r_10\">10.</a></strong> <strong>A—</strong>Use Kirchoff’s loop rule. The battery provides 300 V. So the voltage drop across $R_{1}$ and the 50 Ω resistor must also be 300 V. The voltage across the 50 Ω resistor is (2 A)(50 Ω) = 100 V. So the remaining 200 V must be across $R_{1}$, which is what the voltmeter measures.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_11",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0321-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_11\" id=\"ch19r_11\">11.</a></strong> Four parallel-plate capacitors had different plate diameters $d$ and distances $x$ between the plates, as shown above. Which of the following ranks the capacitors according to their capacitance?</p>",
                "options": [
                    "<p>C = B &gt; A &gt; D</p>",
                    "<p>C &gt; A &gt; D &gt; B</p>",
                    "<p>C &gt; D &gt; A &gt; B</p>",
                    "<p>D &gt; C = B &gt; A</p>",
                    "<p>D &gt; C &gt; B &gt; A</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_11\" id=\"rch19r_11\">11.</a></strong> <strong>C—</strong>The capacitance of a parallel plate capacitor is <em>ɛ</em><sub>0</sub>$A$/$d$, where $A$ is the plate area and $d$ is the distance between plates. Here that means the capacitance is proportional to $d^{2}$/$x$. Evaluating each capacitor according to $d^{2}$/$x$, capacitor C has largest capacitance of (2$d$ )<sup>2</sup><em>/x</em> = 4($d^{2}$/$x$). Capacitor D works out to 2($d^{2}$/$x$), capacitor A to 1($d^{2}$/$x$), and capacitor B to (1/2)($d^{2}$/$x$).</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_12",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_12\" id=\"ch19r_12\">12.</a></strong> A parallel plate capacitor has capacitance $C$. Each plate of the capacitor holds a charge of magnitude $Q$. Which of the following expressions gives the energy stored in this capacitor?</p>",
                "options": [
                    "<p>½$Q^{2}$/$C$</p>",
                    "<p>$Q^{2}$/$C$</p>",
                    "<p><em>QC</em></p>",
                    "<p>½<em>QC</em><sup>2</sup></p>",
                    "<p>½<em>Q/C</em></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_12\" id=\"rch19r_12\">12.</a></strong> <strong>A—</strong>The standard expression for energy stored on a capacitor is ½<em>CV</em><sup>2</sup>. But the fundamental equation for capacitors says that $Q$ = <em>CV</em>. So, substitute $V$ = <em>Q/C</em> into the standard expression. You’re left with ½$Q^{2}$/$C$.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_13",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_13\" id=\"ch19r_13\">13.</a></strong> In region 1, a uniform electric field of magnitude $E_{1}$ points right. In region 2, another uniform electric field of smaller magnitude $E_{2}$ points to the left, as shown above. A positive charge $+q$ is released from rest at the position indicated, at the far left of region 1. Which of the following graphs shows the speed $v$ of the charge as a function of time?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_13\" id=\"rch19r_13\">13.</a></strong> <strong>A—</strong>The force on the charge is <em>qE</em> and thus is uniform within each region. A uniform force produces a uniform acceleration, and thus a uniform slope on a velocity-time graph. The graph must be straight in each region. In region 1, $E$ is larger, so the force, the acceleration, and the slope of the velocity-time graph will be larger as well.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_14",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_14\" id=\"ch19r_14\">14.</a></strong> Consider a long, straight wire of circular cross section. The current through the wire has uniform current density across its cross-sectional area. Let the distance from the center of the wire along a cross-sectional slice be $r$. The magnetic field inside the wire is proportional to which of the following?</p>",
                "options": [
                    "<p>$r^{2}$</p>",
                    "<p>$r$<sup>1/2</sup></p>",
                    "<p>$r$</p>",
                    "<p>$r^{-}\\$2</p>",
                    "<p>$r^{-}\\$1</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_14\" id=\"rch19r_14\">14.</a></strong> <strong>C—</strong>The symmetry is appropriate for Ampere’s law. Never evaluate the integral in Ampere’s law—it always simplifies to <em>BL</em> = $μ_{0} I_{enclosed}$. Here $L$ is the circumference of an amperian loop, 2<em>πr</em>. The current enclosed by this loop is a fraction of the total current. What fraction? A fraction equal to the area enclosed by the amperian loop over the total cross-sectional area of the wire. That’s <em>πr</em><sup>2</sup> over the total area of the wire. Point is, Ampere’s law looks like $B$(2<em>πr</em>) = $μ_{0}$(<em>πr</em><sup>2</sup>/total area)(total $I$ ). Solving for $B$, you’re left with an expression with $r$ by itself in the numerator. So the magnetic field is proportional to $r$. (You’ve memorized the equation $B = μ_{0} I$/2<em>πr</em>, but that’s for the magnetic field <em>outside</em> a long straight wire. This question is asking about $B$ inside the wire.)</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_15",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0322-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_15\" id=\"ch19r_15\">15.</a></strong> The diagram above shows a cross section of a three-dimensional closed surface. While no electric charges are inside the surface, several point charges outside the surface produce the nonuniform electric field $E$ shown above. Consider the vector <em>dA</em> to have a magnitude equal to a small element of surface area, and direction pointed normal to the surface as shown. Which of the following is true about <img alt=\"Images\" class=\"q-img\" src=\"images/f0322-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> evaluated for the entire surface?</p>",
                "options": [
                    "<p>It is positive, because the net charge of the objects producing this electric field must have been positive.</p>",
                    "<p>It is zero, because no charge is enclosed within the surface</p>",
                    "<p>It is negative, because the smaller electric field intersects more surface area than the larger electric field.</p>",
                    "<p>It is undefined, because the $E$ is not always parallel to <em>dA</em>.</p>",
                    "<p>It is positive, because the larger electric field intersects more surface area than the smaller electric field.</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_15\" id=\"rch19r_15\">15.</a></strong> <strong>B—</strong>Gauss’s law says that for a closed surface, <img alt=\"Images\" class=\"q-img\" src=\"images/f0339-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/> is proportional to the charge enclosed by the surface. While the mathematics of Gauss’s law becomes difficult when the charge distribution and the surface are asymmetric, the law still holds. Since zero charge is enclosed, the integral becomes zero as well.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_16",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0323-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_16\" id=\"ch19r_16\">16.</a></strong> A uniform electric field of magnitude 400 N/C points to the right. Positions 1 and 2 are located in the electric field as shown. An object of charge +1.0 mC moves from position 1 to position 2. How much work is done on the object by the field?</p>",
                "options": [
                    "<p>−0.84 J</p>",
                    "<p>+0.84 J</p>",
                    "<p>+1.2 J</p>",
                    "<p>−1.2 J</p>",
                    "<p>0 J</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_16\" id=\"rch19r_16\">16.</a></strong> <strong>B—</strong>The force on the object is uniform and equal to <em>qE</em> = (0.001 C)(400 N/C) = 0.40 N. The work done by a uniform force is equal to force times distance, where that distance must be parallel (or antiparallel) to the direction of the force. The electric force is to the right; the force on a positive charge is likewise to the right. So the necessary distance is horizontal only . . . that’s (3 m) (cos 45<sup>o</sup>) = 2.1 m. The work done is (0.40 N) × (2.1 m) = 0.84 J. That work is positive because the electric force is parallel, not antiparallel, to the component of displacement along the direction of force.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_17",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0323-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_17\" id=\"ch19r_17\">17.</a></strong> Two objects carry opposite charges of the same magnitude. Both objects move up the page with speed $v$, as shown above. Which of the following indicates the direction of the instantaneous electric and magnetic fields, if any, at point P directly between the objects?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0323-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0323-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Electric Field: To the left; Magnetic Field: Out of the page",
                    "Electric Field: To the left; Magnetic Field: Into the page",
                    "Electric Field: Zero; Magnetic Field: Zero",
                    "Electric Field: To the right; Magnetic Field: Out of the page",
                    "Electric Field: To the right; Magnetic Field: Into the page"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_17\" id=\"rch19r_17\">17.</a></strong> <strong>E—</strong>For the magnetic field, think of the moving charges as current-carrying wires. Use the second right-hand rule. The left charge carries a current—a flow of positive charge—up the page. Point the thumb with the current and curl the fingers. The fingers point into the page at point P. Similarly, the right charge can be thought of as a flow of negative charge up the page, and so is equivalent to a flow of positive charge down the page. The magnetic field at point P due to the right charge is also into the page. So the net magnetic field is into the page. Then the electric field due to a charge points away from a positive, toward a negative charge. At point P that’s to the right due to the left-hand charge, and also to the right due to the right-hand charge, making the net electric field to the right.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_18",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_18\" id=\"ch19r_18\">18.</a></strong> Four isolated charge arrangements are shown above. Which of the following correctly ranks the magnitude of the electric force $F$ exerted by each charge on the other in its arrangement?</p>",
                "options": [
                    "<p>$F_{1}$ &gt; $F_{3}$ &gt; $F_{2}$ &gt; $F_{4}$</p>",
                    "<p>$F_{1}$ &gt; $F_{2}$ &gt; $F_{3}$ &gt; $F_{4}$</p>",
                    "<p>$F_{1} = F_{3}$ &gt; $F_{2} = F_{4}$</p>",
                    "<p>$F_{3}$ &gt; $F_{4}$ &gt; $F_{1} = F_{2}$</p>",
                    "<p>$F_{1} = F_{2}$ &gt; $F_{3} = F_{4}$</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_18\" id=\"rch19r_18\">18.</a></strong> <strong>E—</strong>The magnitude of the electric force is given by $F$ = <em>kqq/d</em><sup>2</sup>. The magnitude of a force is just an amount—the + or − sign is not plugged into the equation. (The signs of the charges indicate directions of force—like charge signs repel, opposite charge signs repel.) So with the same amount of charge in each arrangement, the force will depend on the distance between charges—larger distance, smaller force.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_19",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_19\" id=\"ch19r_19\">19.</a></strong> A parallel plate capacitor is connected to a battery and charged fully. While still connected to the battery, a dielectric slab is inserted between the plates of the capacitor. Which of the following quantities will change when the slab is inserted?</p><p class=\"roman1t\">I. The magnitude of the electric field between the plates</p><p class=\"roman2\">II. The charge stored on the capacitor</p><p class=\"roman3\">III. The potential difference between the plates</p>",
                "options": [
                    "<p>I only</p>",
                    "<p>II only</p>",
                    "<p>III only</p>",
                    "<p>I and III only</p>",
                    "<p>I, II, and III</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_19\" id=\"rch19r_19\">19.</a></strong> <strong>B—</strong>Voltage—that is, potential difference—is provided by a battery. Since the battery remains connected, the potential difference across the plates does not change. Electric field between two parallel plates is equal to <em>V/d</em>, the potential difference between the plates divided by the distance between the plates. Neither $V$ nor $d$ changes, so electric field doesn’t change. A dielectric material changes the capacitance of the capacitor (the formula for the capacitance of a parallel-plate capacitor is $C$ = <em>kɛ</em><sub>0</sub><em>A/d</em>—the effect of the dielectric slab is to increase the $k$ term). By $Q$ = <em>CV</em>, a bigger $C$ with an unchanged $V$ gives larger charge $Q$.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_20",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_20\" id=\"ch19r_20\">20.</a></strong> A metal sphere is attached to an insulating stand. Conducting wire 1 is connected between the sphere and a very large metal desk in electrical contact with the ground. A negatively charged glass rod is brought very close to the sphere without touching it, as shown. Next, wire 1 is cut. Finally, the glass rod is moved far away from the sphere. Which of the pictures of the sphere models the sign and distribution of charge on the surface of the sphere at the end of this process?</p>",
                "options": [
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_20\" id=\"rch19r_20\">20.</a></strong> <strong>D—</strong>Initially, the negative rod attracts positive charges in the conducting sphere and repels negative charges from the sphere into the ground. This makes the sphere have a net positive charge when the wire is cut. When the rod is moved far away, nothing is nearby to cause polarization. So the positive charges will distribute uniformly on the surface of the conductor, as in choice D.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_21",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_21\" id=\"ch19r_21\">21.</a></strong> A circular wire of radius $r$ is completely inside a magnetic field $B$, which increases with time $t$ according to the function $B$ = 3$t^{2}$. Which of the following is a correct expression for the EMF induced in the wire?</p>",
                "options": [
                    "<p>12<em>πr</em><sup>2</sup>$t$</p>",
                    "<p>6<em>πr</em><sup>2</sup>$t$</p>",
                    "<p>6<em>πrt</em><sup>2</sup></p>",
                    "<p>12<em>πrt</em></p>",
                    "<p>3<em>πr</em><sup>2</sup>$t^{2}$</p>"
                ],
                "answer": "B",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_21\" id=\"rch19r_21\">21.</a></strong> <strong>B—</strong>The EMF is given by the time derivative of the magnetic flux, which is $B$ times the area of the loop. The area of the loop is <em>πr</em><sup>2</sup><sub>,</sub> so the expression for flux is 3<em>πr</em><sup>2</sup>$t^{2}$<sub>.</sub> The time derivative of this expression is 6<em>πr</em><sup>2</sup>$t$.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_22",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_22\" id=\"ch19r_22\">22.</a></strong> Two parallel plates—the positive plate on the right—produce a uniform electric field of 80 N/C. The plates are separated by 16 cm. Point A is next to the positive plate, while point P is directly between the plates. How much kinetic energy is gained by a proton that is released from rest at point A when it reaches point P ?</p>",
                "options": [
                    "<p>1.0 × 10<sup>−18</sup> J</p>",
                    "<p>1.4 × 10<sup>−6</sup> J</p>",
                    "<p>2.1 × 10<sup>−6</sup> J</p>",
                    "<p>0 J</p>",
                    "<p>2.0 × 10<sup>−18</sup> J</p>"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_22\" id=\"rch19r_22\">22.</a></strong> <strong>A—</strong>The kinetic energy gained by the proton is equal to the potential energy lost from A to B. The potential energy lost by the proton is $q$Δ$V$, where the change in electric potential Δ$V$ is <em>Ed</em> (derived from the equation for a uniform electric field, $E$ = Δ$V$/Δ$x$). The charge $q$ here is the charge of a proton; the distance $d$ is the distance from point A to point P, 0.08 m. Not the distance between plates, but the distance the proton moves! So the change in potential energy is (1.6 × 10<sup>-</sup>19 C)(80 N/C)(0.08 m) = 1.0 × 10<sup>-</sup>18 J.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_23",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 23 and 24: Two metal spheres, labeled 1 and 2, have different radii, as shown above. The spheres initially each carried positive charge +<em>Q,</em> but have been in electrical contact by means of a long metal wire for a long time.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_23\" id=\"ch19r_23\">23.</a></strong> A rectangular wire loop is located above a wire carrying a current $I$, which increases with time $t$ according to the equation $I$ = 3$t$. Which of the following is correct about the current induced in the wire loop?</p>",
                "options": [
                    "<p>It is counterclockwise and increasing.</p>",
                    "<p>It is clockwise and increasing.</p>",
                    "<p>It remains zero.</p>",
                    "<p>It is counterclockwise and constant.</p>",
                    "<p>It is clockwise and constant.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_23\" id=\"rch19r_23\">23.</a></strong> <strong>D—</strong>Induced current in the loop is, by Ohm’s law, the induced voltage (EMF) divided by the constant resistance of the loop. So whether induced current is constant depends on the EMF. Induced EMF is <em>dB/dt</em>. The magnetic field produced by a current-carrying wire depends linearly on $I$. The time derivative of $I$ is a constant value. Thus, the EMF is constant, and so is the induced current. Now, the direction of the magnetic field inside the wire is into the page by the second right-hand rule—point the thumb left with the current producing the field, the fingers curl into the page. This magnetic field is increasing because the current is increasing. So by Lenz’s law, increasing flux is into the page, making decreasing flux out of the page . . . and the induced current is found by pointing the right thumb with decreasing flux and curling the fingers. That’d be counterclockwise.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_24",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-08.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 23 and 24: Two metal spheres, labeled 1 and 2, have different radii, as shown above. The spheres initially each carried positive charge +<em>Q,</em> but have been in electrical contact by means of a long metal wire for a long time.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_24\" id=\"ch19r_24\">24.</a></strong> Which of the following statements is true about the electric potential at the center of each sphere?</p>",
                "options": [
                    "<p>It is greater for sphere 1.</p>",
                    "<p>It is zero for both spheres.</p>",
                    "<p>It is the same positive value for both spheres.</p>",
                    "<p>It is the same negative value for both spheres.</p>",
                    "<p>It is greater for sphere 2.</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_24\" id=\"rch19r_24\">24.</a></strong> <strong>C—</strong>The electric field inside a conductor is zero everywhere—and these two spheres are a single conductor, so they have electric field zero everywhere. The equation $E$ = <em>−dV/dx</em> indicates that electric field tells how electric potential changes. Since electric field is zero, that means electric potential can’t change within the two spheres. But that potential isn’t zero! The electric potential is considered zero a long way away from any charges. Since these spheres have positive charge, they create positive potential outside of the spheres, and so they must have a uniform but positive potential everywhere inside.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_25",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "medium",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0324-09.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_25\" id=\"ch19r_25\">25.</a></strong> Which of the following is true about the charge on each sphere after a long time?</p>",
                "options": [
                    "<p>Both spheres are positively charged, but sphere 1 holds a greater magnitude of charge.</p>",
                    "<p>Both spheres hold zero charge.</p>",
                    "<p>Sphere 2 holds positive charge, while sphere 1 holds negative charge.</p>",
                    "<p>Both spheres are positively charged, but sphere 2 holds a greater magnitude of charge.</p>",
                    "<p>Both spheres hold equal positive charge.</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_25\" id=\"rch19r_25\">25.</a></strong> <strong>D—</strong>The positive charge initially on the conducting spheres must redistribute at the surface (because no charge can remain inside a conductor). We know the electric potential is the same everywhere in and on each sphere. And electric potential at the surface is given by <em>kQ/r</em>. The sphere with the bigger radius must likewise hold the bigger charge.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_26",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0325-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_26\" id=\"ch19r_26\">26.</a></strong> Circuit 1 above shows three identical resistors labeled X, Y, and Z. In circuit 2, resistor Z is removed. Which of the following correctly compares the current through and voltage across resistor Y in circuit 2 compared to circuit 1?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0325-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0325-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Current through Y: Greater; Voltage across Y: Greater",
                    "Current through Y: Smaller; Voltage across Y: Smaller",
                    "Current through Y: Greater; Voltage across Y: Smaller",
                    "Current through Y: Smaller; Voltage across Y: Greater",
                    "Current through Y: Unchanged; Voltage across Y: Unchanged"
                ],
                "answer": "A",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_26\" id=\"rch19r_26\">26.</a></strong> <strong>A—</strong>First, consider the whole circuit: the battery is the same, so the total voltage is unchanged. The equivalent resistance increases because we removed a parallel branch. By $V$ = <em>IR</em>, the total current must decrease. Now apply Ohm’s law to resistor X only: The reduced total current all runs through resistor X, but resistor X can’t change its own resistance. So by $V$ = <em>IR</em>, the voltage across bulb X is smaller than before. Kirchoff’s loop rule says that the voltage across X and Y must sum to V. . . so with smaller voltage across X, there must be greater voltage across Y. Now apply Ohm’s law to bulb Y: greater voltage with unchanged resistance means greater current, too.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_27",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindent\">Questions 27 and 28: The diagram above shows two concentric spherical conducting shells. The net charge on the inner sphere is −2$Q$. The net charge on the outer sphere is +3$Q$.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_27\" id=\"ch19r_27\">27.</a></strong> What is the charge that resides on the outer surface of the outer shell?</p>",
                "options": [
                    "<p>+2$Q$</p>",
                    "<p>zero</p>",
                    "<p>$+Q$</p>",
                    "<p>+3$Q$</p>",
                    "<p>+5$Q$</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_27\" id=\"rch19r_27\">27.</a></strong> <strong>C—</strong>The electric field inside a conductor is zero; charge can only sit on the surface of a conductor. Consider a Gaussian surface drawn inside the outer shell, going through point C. Since the shell is conducting, there must be zero electric field inside. Therefore, this Gaussian surface must enclose zero total charge. The inner shell contains charge −2$Q$, so the inner surface of the outer shell—the part inside this Gaussian surface—contains +2$Q$ to make the total charge inside the Gaussian surface zero. Then the remaining +1$Q$ of charge on the outer shell must be on the outer surface.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_28",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindent\">Questions 27 and 28: The diagram above shows two concentric spherical conducting shells. The net charge on the inner sphere is −2$Q$. The net charge on the outer sphere is +3$Q$.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_28\" id=\"ch19r_28\">28.</a></strong> Four positions are labeled in the diagram. Which of the following correctly ranks those positions by the magnitude of the electric field at each position?</p>",
                "options": [
                    "<p>A &gt; B &gt; D &gt; C</p>",
                    "<p>D &gt; C &gt; B &gt; A</p>",
                    "<p>A &gt; B &gt; C &gt; D</p>",
                    "<p>D = B &gt; A = C</p>",
                    "<p>B &gt; D &gt; A = C</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_28\" id=\"rch19r_28\">28.</a></strong> <strong>E—</strong>The electric field inside a conductor is zero, so C is the smallest. A Gaussian sphere through A encloses no charge, so the electric field at A is also zero. A Gaussian sphere at position B encloses −2$Q$; a Gaussian sphere at position D encloses $+Q$. So the sphere at D encloses a smaller magnitude of charge AND has a larger distance from the center, meaning D has a smaller electric field than B.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_29",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_29\" id=\"ch19r_29\">29.</a></strong> A uniform magnetic field of magnitude $B$ points at a 60<sup>o</sup> angle above the plane of a rectangular wire loop of dimensions $x$ by $y$ as shown above. What is the magnetic flux through the loop?</p>",
                "options": [
                    "<p><em>Bxy</em></p>",
                    "<p><em>Bx</em></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                    "<p><em>By</em></p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_29\" id=\"rch19r_29\">29.</a></strong> <strong>D—</strong>Magnetic flux is <em>BA</em>, where $A$ is the area of the loop that is directly penetrated by the magnetic field. Here the magnetic field is penetrating the loop at an angle, so we need to look at the component of the magnetic field that penetrates directly, that is, at a 90<sup>o</sup> angle to the plane of the loop. That’s $B$ sin 60<sup>o</sup>, or <img alt=\"Images\" class=\"q-img\" src=\"images/f0341-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. (Not cosine of 60 degrees . . . if you’re not sure, note that the magnetic field is closer to straight-through the loop than to along the loop, so we want the bigger component, and sin 60<sup>o</sup> is bigger than cos 60<sup>o</sup>.) And the area of the loop is <em>xy</em>.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_30",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_30\" id=\"ch19r_30\">30.</a></strong> A 50 V battery is connected to a 70 W resistor and a 0.50 mF capacitor in the circuit shown above. The capacitor is uncharged when the switch is closed. Sometime later when the current through the resistor is 0.43 A, how much charge is stored on the capacitor?</p>",
                "options": [
                    "<p>0 μC</p>",
                    "<p>35 μC</p>",
                    "<p>25 μC</p>",
                    "<p>15 μC</p>",
                    "<p>10 μC</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_30\" id=\"rch19r_30\">30.</a></strong> <strong>E—</strong>When the current is 0.43 A, the voltage across the resistor is (70 Ω)(0.43 A) = 30 V. That means the voltage across the capacitor is 20 V by Kirchoff’s loop rule, to add to the total 50 V in the battery. For a capacitor, the charge stored is given by $Q$ = <em>CV</em>. Here that’s (0.50 μF)(20 V) = 10 μC.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_31",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 31 and 32: In the circuit above, the switch S has initially been closed for a very long time. Then the switch is opened.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_31\" id=\"ch19r_31\">31.</a></strong> Immediately before the switch is opened, what is the current through $R_{1}$?</p>",
                "options": [
                    "<p>1.5 A</p>",
                    "<p>0.33 A</p>",
                    "<p>1.0 A</p>",
                    "<p>0.5 A</p>",
                    "<p>0 A</p>"
                ],
                "answer": "C",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_31\" id=\"rch19r_31\">31.</a></strong> <strong>C—</strong>Inductors resist changes in current. Since the current has been flowing for a long time and thus is steady, the inductor has no effect on the circuit. It just acts as a bare wire. So the two resistors are both in parallel with the battery, taking the voltage of the battery. The current through $R_{1}$ is 12 V / 12 Ω = 1.0 A.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_32",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-05.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"noindent\">Questions 31 and 32: In the circuit above, the switch S has initially been closed for a very long time. Then the switch is opened.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_32\" id=\"ch19r_32\">32.</a></strong> Immediately after the switch is opened, what is the current through $R_{1}$?</p>",
                "options": [
                    "<p>1.5 A</p>",
                    "<p>0.33 A</p>",
                    "<p>1.0 A</p>",
                    "<p>0.5 A</p>",
                    "<p>0 A</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_32\" id=\"rch19r_32\">32.</a></strong> <strong>D—</strong>Inductors resist changes in current. So the current through the inductor now is the same as the current through the inductor before the switch was closed. The inductor was in series with the 24 Ω resistor, which carried 12 V/24 Ω = 0.5 A of current. With the battery removed, the resistor $R_{1}$ is in series with $R_{2}$, so it must carry the 0.5 A of current.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_33",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-06.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_33\" id=\"ch19r_33\">33.</a></strong> An electron is initially moving to the left with speed $v$ parallel to a wire carrying a constant rightward current $I$ as shown above. Which of the following indicates the direction of the magnetic force on the electron at the instant shown, and whether the long-term path of the electron is circular or not circular?</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0326-07.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Direction of Force: Upward (away from wire); Path: Circular",
                    "Direction of Force: Upward (away from wire); Path: Not circular",
                    "Direction of Force: Zero; Path: Straight line",
                    "Direction of Force: Downward (toward wire); Path: Circular",
                    "Direction of Force: Downward (toward wire); Path: Not circular"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_33\" id=\"rch19r_33\">33.</a></strong> <strong>E—</strong>The magnetic field produced by a current-carrying wire is given by the second right-hand rule: Point the thumb to the right and curl. The fingers point out of the page above the wire, so that’s the direction of the magnetic field. Now the force on the electron is given by the first right-hand rule: Point with the velocity, curl the fingers out of the page with the magnetic field, and the thumb gives the upward force on a positive charge. An electron has a negative charge, though, so the force is downward. Because the magnetic force is perpendicular to the velocity, the path is initially circular. But because the magnetic field isn’t uniform (it drops off the farther you get from the current-carrying wire), the magnetic force isn’t always of the same magnitude, and so the path becomes not circular.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_34",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindent\">Questions 34 and 35: Two small objects, each carrying negative electric charge of magnitude 2.0 μC, are placed on the $x$-axis at positions $x_{a}$ = +4.0 cm and $x_{b}$ = -4.0 cm.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_34\" id=\"ch19r_34\">34.</a></strong> What is the electric potential at position $x$ = 0?</p>",
                "options": [
                    "<p>+900,000 V</p>",
                    "<p>+450,000 V</p>",
                    "<p>0 V</p>",
                    "<p>-450,000 V</p>",
                    "<p>-900,000 V</p>"
                ],
                "answer": "E",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_34\" id=\"rch19r_34\">34.</a></strong> <strong>E—</strong>Each charge contributes a potential of <em>kQ/d</em> to the total potential at the origin. That’s (9 × 10<sup>9</sup> N/$m^{2}$/$C^{2}$)(−2 × 10<sup>−6</sup> C)/(0.04 m) = −450,000 V per charge. Both charges are negative and so produce negative electric potentials, and electric potentials add as scalars, making the total potential −900,000 V.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_mc_35",
                "topic": "AP Physics C: Electricity & Magnetism",
                "difficulty": "hard",
                "question": "<div class=\"passage-box\" style=\"background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; margin-bottom: 14px; border-left: 3px solid #7c3aed;\"><p class=\"noindent\">Questions 34 and 35: Two small objects, each carrying negative electric charge of magnitude 2.0 μC, are placed on the $x$-axis at positions $x_{a}$ = +4.0 cm and $x_{b}$ = -4.0 cm.</p></div><p class=\"ques\"><strong><a href=\"ch19v.xhtml#rch19r_35\" id=\"ch19r_35\">35.</a></strong> What is the magnitude of the electric field at position $x$ = 0?</p>",
                "options": [
                    "<p>44 N/C</p>",
                    "<p>2.2 million N/C</p>",
                    "<p>1.1 million N/C</p>",
                    "<p>0 N/C</p>",
                    "<p>22 N/C</p>"
                ],
                "answer": "D",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19r.xhtml#ch19r_35\" id=\"rch19r_35\">35.</a></strong> <strong>D—</strong>By $E$ = <em>kQ/$d^{2}$</em>, each charge creates an electric field of the same magnitude (because both are of the same amount of charge, located the same distance from the origin). A negative charge produces an electric field toward that charge. So the fields produced by each charge are pointed in opposite directions. Electric fields add as vectors; equal magnitude vectors pointing in opposite directions subtract to zero.</p>"
            },
            {
                "id": "ap-mock-physc-em-3_frq_1",
                "topic": "AP Physics C: Electricity & Magnetism Free Response",
                "difficulty": "hard",
                "question": "<div class='frq-prompt'><h3>E&M 1</h3><p class=\"ques\"><strong><a href=\"ch19w.xhtml#rch19s_1\" id=\"ch19s_1\">1.</a></strong> A rod of length $L$ carrying positive charge has uniform linear charge density <em>ℓ</em>. Points A and B are located distances $d$ and 2$d$, respectively, from the center of the line.</p><p class=\"alphabrt\">(a) Consider the situation when $L$ is much, much greater than $d$.</p><p class=\"roman4r\">i. Derive an expression for the magnitude of the electric field at point A. Express your answer in terms of given variables and fundamental constants.</p><p class=\"roman4r\">ii. On the dot below, draw the direction of the electric field at point A.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0328-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4r\">iii. Let the magnitude of the electric field at point A be $E_{A1}$. Is the magnitude of the electric field at point B greater than, less than, or equal to ½$E_{A1}$? Justify your answer.</p><p class=\"roman4r\">iv. Derive an expression for the electric potential difference between points A and B. Express your answer in terms of given variables and fundamental constants.</p><p class=\"alphabr\">(B) Now consider the situation when $L$ is NOT much greater than $d$.</p><p class=\"roman4r\">i. In terms of given variables and fundamental constants, derive an integral with limits that could be evaluated to determine the magnitude of the electric field at point A.</p><p class=\"roman4r\">ii. On the dot below, draw the direction of the electric field at point A.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0328-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4r\">iii. Let the magnitude of the electric field in this case at point A be $E_{A2}$. Is $E_{A2}$ greater than, less than, or equal to $E_{A1}$? Justify your answer.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0328-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p></div>",
                "isFRQ": true,
                "rubric": "<p class=\"ques\"><strong><a href=\"ch19s.xhtml#ch19s_1\" id=\"rch19s_1\">1.</a></strong> (15 points)</p><p class=\"alphabrt\">(a)</p><p class=\"roman4r\"> i. Use Gauss’s law with a cylindrical Gaussian surface. Because the length of the rod is big now compared to <em>d</em>, the electric field will always point straight away from the rod—so straight through the surface. Then Gauss’s law says <em>EA</em> = <em>Q</em>/<em>ɛ</em><sub>0</sub>. Here the area A of the cylindrical Gaussian surface <em>A</em> is 2<em>πrL</em>; we’re looking for the electric field a distance <em>d</em> from the rod, so replace <em>r</em> with <em>d</em>. The charge <em>Q</em> enclosed by the surface is <em>λL</em>. Solve for <em>E</em> to get <em>E</em> = <em>λ/</em>(2<em>πdɛ</em><sub>0</sub>).</p><p class=\"hangp\"><strong>1 pt</strong> for attempting to use Gauss’s law reasonably</p><p class=\"hangp\"><strong>1 pt</strong> for the correct area term</p><p class=\"hangp\"><strong>1 pt</strong> for the correct expression for the charge enclosed</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for an arrow straight up the page</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0342-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4r\">iii. The electric field expression is inversely related to the first power of <em>r</em>, the distance from the rod. That means doubling <em>r</em> cuts the electric field in half. (If you stated an incorrect expression in part (i) that has a clear <em>r</em> dependence, then award credit here for an answer and justification consistent with that incorrect equation.)</p><p class=\"hangp\"><strong>1 pt</strong> for the answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct justification</p><p class=\"roman4rtb\">iv.</p><p class=\"hangp\"><strong>1 pt</strong> for substituting an electric field expression from part (i) into <img alt=\"Images\" class=\"q-img\" src=\"images/f0342-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp\"><strong>1 pt</strong> for correct limits and an attempt to evaluate the integral with respect to <em>r</em></p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer in any form that has correctly evaluated the correct integral</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0342-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabrt\">(b)</p><p class=\"roman4r\"> i.</p><p class=\"hangp\"><strong>1 pt</strong> for using (not just writing) the expression <img alt=\"Images\" class=\"q-img\" src=\"images/f0343-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"hangp\"><strong>1 pt</strong> for substituting <em>dq</em> = <em>λdx</em></p><p class=\"hangp\"><strong>1 pt</strong> for using geometry to write <em>r</em>, the distance from a position on the rod to point A, in terms of <em>x</em> and <em>d</em> as shown in the diagram below</p><p class=\"hangp\"><strong>1 pt</strong> for correct limits</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0343-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for an upward pointing arrow</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0343-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Submit analytical derivation in workspace."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19s.xhtml#ch19s_1\" id=\"rch19s_1\">1.</a></strong> (15 points)</p><p class=\"alphabrt\">(a)</p><p class=\"roman4r\"> i. Use Gauss’s law with a cylindrical Gaussian surface. Because the length of the rod is big now compared to $d$, the electric field will always point straight away from the rod—so straight through the surface. Then Gauss’s law says <em>EA</em> = $Q$/<em>ɛ</em><sub>0</sub>. Here the area A of the cylindrical Gaussian surface $A$ is 2<em>πrL</em>; we’re looking for the electric field a distance $d$ from the rod, so replace $r$ with $d$. The charge $Q$ enclosed by the surface is <em>λL</em>. Solve for $E$ to get $E$ = <em>λ/</em>(2<em>πdɛ</em><sub>0</sub>).</p><p class=\"hangp\"><strong>1 pt</strong> for attempting to use Gauss’s law reasonably</p><p class=\"hangp\"><strong>1 pt</strong> for the correct area term</p><p class=\"hangp\"><strong>1 pt</strong> for the correct expression for the charge enclosed</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for an arrow straight up the page</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0342-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4r\">iii. The electric field expression is inversely related to the first power of $r$, the distance from the rod. That means doubling $r$ cuts the electric field in half. (If you stated an incorrect expression in part (i) that has a clear $r$ dependence, then award credit here for an answer and justification consistent with that incorrect equation.)</p><p class=\"hangp\"><strong>1 pt</strong> for the answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct justification</p><p class=\"roman4rtb\">iv.</p><p class=\"hangp\"><strong>1 pt</strong> for substituting an electric field expression from part (i) into <img alt=\"Images\" class=\"q-img\" src=\"images/f0342-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp\"><strong>1 pt</strong> for correct limits and an attempt to evaluate the integral with respect to $r$</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer in any form that has correctly evaluated the correct integral</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0342-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabrt\">(b)</p><p class=\"roman4r\"> i.</p><p class=\"hangp\"><strong>1 pt</strong> for using (not just writing) the expression <img alt=\"Images\" class=\"q-img\" src=\"images/f0343-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"hangp\"><strong>1 pt</strong> for substituting <em>dq</em> = <em>λdx</em></p><p class=\"hangp\"><strong>1 pt</strong> for using geometry to write $r$, the distance from a position on the rod to point A, in terms of $x$ and $d$ as shown in the diagram below</p><p class=\"hangp\"><strong>1 pt</strong> for correct limits</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0343-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for an upward pointing arrow</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0343-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
            },
            {
                "id": "ap-mock-physc-em-3_frq_2",
                "topic": "AP Physics C: Electricity & Magnetism Free Response",
                "difficulty": "hard",
                "question": "<div class='frq-prompt'><h3>E&M 2</h3><p class=\"ques\"><strong><a href=\"ch19w.xhtml#rch19s_2\" id=\"ch19s_2\">2.</a></strong> A single rectangular copper coil of dimensions $s$ by <em>ℓ</em> is moving to the right with speed $v$. Let position $x$ = 0 be where the right-hand edge of the coil enters a uniform magnetic field of magnitude $B$ pointing into the page. Let position $x = D$ be where the left-hand edge of the coil exits the field.</p><p class=\"alphar1\">(a) i. On the axes below, sketch the shape of a graph of the current induced in the coil as a function of position, from $x$ = 0 to $x = D$ + <em>ℓ</em>. Represent clockwise current as positive.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0329-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4r\">ii. Justify the shape of your graph for the region $x$ = 0 to $x$ = <em>ℓ</em>.</p><p class=\"roman4r\">iii. In terms of given variables and fundamental constants, write an expression for the maximum induced EMF in the coil.</p><p class=\"alphabr\">(b) Describe any changes to your graph if instead a copper coil of the same rectangular dimensions but consisting of two loops of wire moved with speed $v$ through the magnetic field. Justify your response.</p><p class=\"alphabr\">(c) Now the original single coil enters the field as before, but the coil speeds up with acceleration $a$ starting from rest at position $x$ = 0.</p><p class=\"roman4r\">i. Consider only the time during which the coil is entering the magnetic field. Derive an expression for the induced EMF in the coil as a function of position $x$. Express your answer in terms of given variables and fundamental constants.</p><p class=\"roman4r\">ii. Sketch the shape of a graph of the current induced in this coil as a function of position, from $x$ = 0 to $x = D$ + <em>ℓ</em>.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0329-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p></div>",
                "isFRQ": true,
                "rubric": "<p class=\"ques\"><strong><a href=\"ch19s.xhtml#ch19s_2\" id=\"rch19s_2\">2.</a></strong> (15 points)</p><p class=\"alphabrt\">(a)</p><p class=\"roman4r\"> i.</p><p class=\"hangp\"><strong>1 pt</strong> for zero current between <em>ℓ</em> and <em>D</em></p><p class=\"hangp\"><strong>1 pt</strong> for a horizontal line between 0 and <em>ℓ</em></p><p class=\"hangp\"><strong>1 pt</strong> for a horizontal line on the opposite side of the axis between <em>D</em> and <em>D</em> + <em>ℓ</em></p><p class=\"hangp\"><strong>1 pt</strong> for a graph entirely below the horizontal axis between 0 and <em>ℓ</em></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> For explaining that in general equation <em>ɛ</em> = <em>Bℓv</em>, here each term is unchanging, so the EMF and hence the current isn’t changing either</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0343-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer, <em>Bsv.</em> (Not <em>Bℓv</em>, because <em>s</em> is the side of the rectangle that is not changing how much is inside the field.)</p><p class=\"alphabrc\">(b)</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing that the magnetic flux or the induced EMF is doubled</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing that the coil’s resistance is also doubled</p><p class=\"hangp\"><strong>1 pt</strong> for using Ohm’s law (<em>I</em> = EMF/resistance) to determine that the induced current is unchanged</p><p class=\"alphabrt\">(c)</p><p class=\"roman4r\"> i. Answer is <img alt=\"Images\" class=\"q-img\" src=\"images/f0344-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp\"><strong>1 pt</strong> for using the definition of induced EMF, <em>ɛ</em> = <em>d</em>Φ<em>/dt</em> or <em>ɛ</em> = <em>Bsv</em> (full credit whether or not negative sign is included)</p><p class=\"hangp\"><strong>1 pt</strong> for substituting <img alt=\"Images\" class=\"q-img\" src=\"images/f0344-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for the first segment starting at zero and concave toward the horizontal axis (This point is awarded if the shape is correct, even if drawn above the axis.)</p><p class=\"hangp\"><strong>1 pt</strong> for a curved segment between <em>D</em> and <em>D</em> + <em>ℓ</em></p><p class=\"hangp\"><strong>1 pt</strong> for this last segment starting at a greater vertical value than the first segment ended</p><p class=\"hangp\"><strong>1 pt</strong> for this last segment being concave toward the horizontal axis (Based on the answer to part (i), the square root function indicates the concave-down shape of the graph. The faster the coil moves, the more induced EMF/current by <em>ɛ</em> = <em>Bsv</em>. And the coil moves faster farther along the track because of the acceleration.)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0344-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Submit analytical derivation in workspace."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19s.xhtml#ch19s_2\" id=\"rch19s_2\">2.</a></strong> (15 points)</p><p class=\"alphabrt\">(a)</p><p class=\"roman4r\"> i.</p><p class=\"hangp\"><strong>1 pt</strong> for zero current between <em>ℓ</em> and $D$</p><p class=\"hangp\"><strong>1 pt</strong> for a horizontal line between 0 and <em>ℓ</em></p><p class=\"hangp\"><strong>1 pt</strong> for a horizontal line on the opposite side of the axis between $D$ and $D$ + <em>ℓ</em></p><p class=\"hangp\"><strong>1 pt</strong> for a graph entirely below the horizontal axis between 0 and <em>ℓ</em></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> For explaining that in general equation <em>ɛ</em> = <em>Bℓv</em>, here each term is unchanging, so the EMF and hence the current isn’t changing either</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0343-04.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer, <em>Bsv.</em> (Not <em>Bℓv</em>, because $s$ is the side of the rectangle that is not changing how much is inside the field.)</p><p class=\"alphabrc\">(b)</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing that the magnetic flux or the induced EMF is doubled</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing that the coil’s resistance is also doubled</p><p class=\"hangp\"><strong>1 pt</strong> for using Ohm’s law ($I$ = EMF/resistance) to determine that the induced current is unchanged</p><p class=\"alphabrt\">(c)</p><p class=\"roman4r\"> i. Answer is <img alt=\"Images\" class=\"q-img\" src=\"images/f0344-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>.</p><p class=\"hangp\"><strong>1 pt</strong> for using the definition of induced EMF, <em>ɛ</em> = $d$Φ<em>/dt</em> or <em>ɛ</em> = <em>Bsv</em> (full credit whether or not negative sign is included)</p><p class=\"hangp\"><strong>1 pt</strong> for substituting <img alt=\"Images\" class=\"q-img\" src=\"images/f0344-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"roman4rtb\"> ii.</p><p class=\"hangp\"><strong>1 pt</strong> for the first segment starting at zero and concave toward the horizontal axis (This point is awarded if the shape is correct, even if drawn above the axis.)</p><p class=\"hangp\"><strong>1 pt</strong> for a curved segment between $D$ and $D$ + <em>ℓ</em></p><p class=\"hangp\"><strong>1 pt</strong> for this last segment starting at a greater vertical value than the first segment ended</p><p class=\"hangp\"><strong>1 pt</strong> for this last segment being concave toward the horizontal axis (Based on the answer to part (i), the square root function indicates the concave-down shape of the graph. The faster the coil moves, the more induced EMF/current by <em>ɛ</em> = <em>Bsv</em>. And the coil moves faster farther along the track because of the acceleration.)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0344-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
            },
            {
                "id": "ap-mock-physc-em-3_frq_3",
                "topic": "AP Physics C: Electricity & Magnetism Free Response",
                "difficulty": "hard",
                "question": "<div class='frq-prompt'><h3>E&M 3</h3><p class=\"ques\"><strong><a href=\"ch19w.xhtml#rch19s_3\" id=\"ch19s_3\">3.</a></strong> In the laboratory, you are given a wire coil of unknown inductance. You have available digital ammeters, digital voltmeters, and a variety of known resistors and capacitors.</p><p class=\"alphabrt\">(a) Using the available equipment, describe an experimental procedure that could determine the inductance of the wire coil. Give enough detail that another student could reproduce your method.</p><p class=\"alphabr\">(b) Draw a labeled diagram showing how the inductor is connected to the other equipment in your procedure.</p><p class=\"alphabr\">(c) Explain how the inductance of the coil will be determined from the measurements made.</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0329-03.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"alphabr\">(d) The coil is determined to have an inductance of 25 mH. It is connected to a 15 V battery, a 100 W resistor, and a 50 W resistor in the circuit shown. The circuit has been connected for a long time with the switch in position A. Next, the switch is thrown to position B.</p><p class=\"roman4r\">i. Determine the current through the inductor immediately before the switch is thrown. Briefly justify your answer.</p><p class=\"roman4r\">ii. Determine the current through the inductor immediately after the switch is thrown. Briefly justify your answer.</p><p class=\"roman4r\">iii. Determine the current through the inductor after the switch has been in position B for a long time. Briefly justify your answer.</p><p class=\"center1\"><strong>STOP. End of Physics C—Electricity and Magnetism Practice Exam 3—Free-Response Questions</strong></p></div>",
                "isFRQ": true,
                "rubric": "<p class=\"ques\"><strong><a href=\"ch19s.xhtml#ch19s_3\" id=\"rch19s_3\">3.</a></strong> (15 points)</p><p class=\"quesna\">Parts (a), (b), and (c) are graded all together. As long as the elements that earn points are there somewhere, award credit.</p><p class=\"alphabrt\">(a) Connect the inductor to a charged capacitor. Use a digital voltmeter to measure the voltage across the inductor as a function of time. Determine the period of the oscillating voltage from the voltmeter’s output.</p><p class=\"quesna\">This example uses a circuit with a capacitor and inductor; something similar can be done with a resistor-inductor circuit and its time constant, or with other circuits.</p><p class=\"hangp\"><strong>1 pt</strong> for a conceptually plausible plan to collect data that could lead to a calculation of <em>L</em></p><p class=\"hangp\"><strong>1 pt</strong> for a well-specified procedure that indicates correct use of appropriate equipment to measure the required quantities</p><p class=\"hangp\"><strong>1 pt</strong> for using more than a single measurement, that is, a graph or multiple trials to reduce error</p><p class=\"alphabrt\">(b) An example consistent with the method above:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0345-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"hangp\"><strong>1 pt</strong> for drawing a diagram of a circuit that would function, that is, a complete circuit</p><p class=\"hangp\"><strong>1 pt</strong> for correctly placing an ammeter or voltmeter (an ammeter must be connected in series, a voltmeter in parallel)</p><p class=\"hangp\"><strong>1 pt</strong> for correct placement of all other equipment specified in part (a)</p><p class=\"quesna\">(c) An example continued from above:</p><p class=\"quesna\">The reading on the voltmeter will oscillate with a period given by <img alt=\"Images\" class=\"q-img\" src=\"images/f0345-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. On the voltmeter output, look at the time from one maximum voltage to the next—that’s the period. Plug in that period and the capacitance <em>C</em>, and you can solve for the inductance <em>L</em>.</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing the existence of a period for an <em>LC</em> circuit, or a time constant for an <em>LR</em> circuit</p><p class=\"hangp\"><strong>1 pt</strong> for correctly relating the period/time constant to other circuit properties</p><p class=\"hangp\"><strong>1 pt</strong> for explaining how to find the period or time constant from the collected data</p><p class=\"roman4rtb\"> i. The battery has been connected for a long time, so the inductor acts as a bare wire. The resistance of the active branch is 100 Ω, the battery is 15 V, so the current is <em>I</em> = <em>V/R</em> = 15 V/100 Ω = 0.15 A.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct verbal justification</p><p class=\"roman4rtb\"> ii. The inductor resists changes in current. Since the current was 0.15 A right before the switch was closed, the initial current after the switch is closed is also 0.15 A.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct verbal justification</p><p class=\"roman4rtb\">iii. After a long time, the current again reaches a steady state with the inductor acting as a bare wire. The total resistance this time is 150 Ω, so the current is 15 V/150 Ω = 0.10 A.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct verbal justification</p><h4 class=\"h4c\">AP Physics C—Electricity and Magnetism</h4><p class=\"centera\"><strong>Full Exam Scoring</strong></p><p class=\"noindentt1\">Multiple-Choice: Number Correct______(35 max)</p><p class=\"noindentt1\">Free-Response: Question 1______(15 max)</p><p class=\"noindentq\">Question 2______(15 max)</p><p class=\"noindentq\">Question 3______(15 max)</p><p class=\"noindentt1\">Total Free-Response______(45 max)</p><p class=\"noindentt1\">1.286 × Multiple-Choice + Free-Response = Raw Score______(90 max)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0346-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>",
                "options": [
                    "Submit analytical derivation in workspace."
                ],
                "answer": "FRQ_MANUAL_EVALUATION",
                "explanation": "<p class=\"ques\"><strong><a href=\"ch19s.xhtml#ch19s_3\" id=\"rch19s_3\">3.</a></strong> (15 points)</p><p class=\"quesna\">Parts (a), (b), and (c) are graded all together. As long as the elements that earn points are there somewhere, award credit.</p><p class=\"alphabrt\">(a) Connect the inductor to a charged capacitor. Use a digital voltmeter to measure the voltage across the inductor as a function of time. Determine the period of the oscillating voltage from the voltmeter’s output.</p><p class=\"quesna\">This example uses a circuit with a capacitor and inductor; something similar can be done with a resistor-inductor circuit and its time constant, or with other circuits.</p><p class=\"hangp\"><strong>1 pt</strong> for a conceptually plausible plan to collect data that could lead to a calculation of $L$</p><p class=\"hangp\"><strong>1 pt</strong> for a well-specified procedure that indicates correct use of appropriate equipment to measure the required quantities</p><p class=\"hangp\"><strong>1 pt</strong> for using more than a single measurement, that is, a graph or multiple trials to reduce error</p><p class=\"alphabrt\">(b) An example consistent with the method above:</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0345-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p><p class=\"hangp\"><strong>1 pt</strong> for drawing a diagram of a circuit that would function, that is, a complete circuit</p><p class=\"hangp\"><strong>1 pt</strong> for correctly placing an ammeter or voltmeter (an ammeter must be connected in series, a voltmeter in parallel)</p><p class=\"hangp\"><strong>1 pt</strong> for correct placement of all other equipment specified in part (a)</p><p class=\"quesna\">(c) An example continued from above:</p><p class=\"quesna\">The reading on the voltmeter will oscillate with a period given by <img alt=\"Images\" class=\"q-img\" src=\"images/f0345-02.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/>. On the voltmeter output, look at the time from one maximum voltage to the next—that’s the period. Plug in that period and the capacitance $C$, and you can solve for the inductance $L$.</p><p class=\"hangp\"><strong>1 pt</strong> for recognizing the existence of a period for an <em>LC</em> circuit, or a time constant for an <em>LR</em> circuit</p><p class=\"hangp\"><strong>1 pt</strong> for correctly relating the period/time constant to other circuit properties</p><p class=\"hangp\"><strong>1 pt</strong> for explaining how to find the period or time constant from the collected data</p><p class=\"roman4rtb\"> i. The battery has been connected for a long time, so the inductor acts as a bare wire. The resistance of the active branch is 100 Ω, the battery is 15 V, so the current is $I$ = <em>V/R</em> = 15 V/100 Ω = 0.15 A.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct verbal justification</p><p class=\"roman4rtb\"> ii. The inductor resists changes in current. Since the current was 0.15 A right before the switch was closed, the initial current after the switch is closed is also 0.15 A.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct verbal justification</p><p class=\"roman4rtb\">iii. After a long time, the current again reaches a steady state with the inductor acting as a bare wire. The total resistance this time is 150 Ω, so the current is 15 V/150 Ω = 0.10 A.</p><p class=\"hangp\"><strong>1 pt</strong> for the correct answer</p><p class=\"hangp\"><strong>1 pt</strong> for a correct verbal justification</p><h4 class=\"h4c\">AP Physics C—Electricity and Magnetism</h4><p class=\"centera\"><strong>Full Exam Scoring</strong></p><p class=\"noindentt1\">Multiple-Choice: Number Correct______(35 max)</p><p class=\"noindentt1\">Free-Response: Question 1______(15 max)</p><p class=\"noindentq\">Question 2______(15 max)</p><p class=\"noindentq\">Question 3______(15 max)</p><p class=\"noindentt1\">Total Free-Response______(45 max)</p><p class=\"noindentt1\">1.286 × Multiple-Choice + Free-Response = Raw Score______(90 max)</p><p class=\"image\"><img alt=\"Images\" class=\"q-img\" src=\"images/f0346-01.jpg\" style=\"max-width: 100%; height: auto; margin: 10px 0; display: block;\"/></p>"
            },
            {
                "id": "ap-mock-physc-em-3-q39",
                "global_num": 306,
                "section": "Practice Test 1 – E&M",
                "question": "Consider the circuit shown, which contains two identical lightbulbs connected to a battery. The top bulb’s intensity will",
                "options": [
                    "decrease slightly if either of the two switches is closed.",
                    "decrease slightly if S1 is closed but not if S2 is closed.",
                    "decrease slightly if S2 is closed but not if S1 is closed.",
                    "remain unchanged if S2 is closed but go out completely if S1 is closed.",
                    "remain unchanged if S1 is closed but go out completely if S2 is closed."
                ],
                "answer": "E",
                "explanation": "(E) If S1 is closed, a parallel circuit with an equivalent resistance of R/2 will be created. Thus the current drawn from the battery will double and half that current will go through the top bulb, yielding the same current that flowed before the switch S1 was closed. If S2 is closed, creating a path of zero resistance, no current will pass through either bulb.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "ap-mock-physc-em-3-q40",
                "global_num": 307,
                "section": "Practice Test 1 – E&M",
                "question": "What is the voltage V in the circuit shown in the figure?",
                "options": [
                    "1 V",
                    "2 V",
                    "4 V",
                    "6 V",
                    "8 V"
                ],
                "answer": "D",
                "explanation": "(D) A Kirchhoff’s loop equation for the right loop [clockwise: 8 V − (1 A)(4 Ω) − (I)(2 Ω) = 0] reveals that the current i moving from point A to point B must be 2.0 A (upward). A node equation at point A then shows the current through the left 2 Ω resistor must be 1.0 A flowing to the right. Finally, a Kirchhoff’s loop equation for the left loop [clockwise: V − (1 A)(2 Ω) − (2 A)(2 Ω) = 0] allows us to calculate the voltage of the battery as 6 V.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "ap-mock-physc-em-3-q41",
                "global_num": 308,
                "section": "Practice Test 1 – E&M",
                "question": "A battery of voltage V is connected in series to a resistor of resistance R and an uncharged capacitor of capacitance C. What is the magnitude of the maximum charge on the capacitor?",
                "options": [
                    "V_0 / 4",
                    "V_0 / 2",
                    "Q = CV2",
                    "Q = CV",
                    "Q grows without limit"
                ],
                "answer": "D",
                "explanation": "(D) Capacitance is defined by the relationship C = Q/V. The battery’s voltage determines the maximum potential difference across the capacitor plates.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "ap-mock-physc-em-3-q42",
                "global_num": 309,
                "section": "Practice Test 1 – E&M",
                "question": "A sphere of radius R contains a negative charge with a charge density given by the function \\rho = −cr4, where r equals the distance from the center of the sphere. Where does the electric field have the smallest magnitude?",
                "options": [
                    "at the center of the sphere",
                    "at some point between the center of the sphere and the surface of the sphere",
                    "at the surface of the sphere",
                    "outside the sphere",
                    "The electric field is constant in space."
                ],
                "answer": "A",
                "explanation": "(A) At the center of the sphere, as a result of symmetry, the electric field is zero. At every other point in space, the electric field is nonzero.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "ap-mock-physc-em-3-q43",
                "global_num": 310,
                "section": "Practice Test 1 – E&M",
                "question": "Referring to the charge distribution described in question 4, where is the potential smallest in magnitude?",
                "options": [
                    "at the center of the sphere",
                    "at some point between the center of the sphere and the surface of the sphere",
                    "at the surface of the sphere",
                    "outside the sphere",
                    "at infinity"
                ],
                "answer": "E",
                "explanation": "(E) The electric field at all points in space is directed toward the center of the sphere because the sphere is negatively charged. Electric fields always point in the direction of decreasing potential. With the conventional choice of zero potential at infinity, the potential will be negative everywhere else and thus smallest in magnitude at infinity.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "ap-mock-physc-em-3-q44",
                "global_num": 311,
                "section": "Practice Test 1 – E&M",
                "question": "A loop is moved out of a magnetic field at constant velocity as shown. Which of the following statements about the induced current in the loop and the applied force on the loop is correct? (The magnetic field points into the page.)",
                "options": [
                    "The current is clockwise, and the applied force is to the right.",
                    "The current is clockwise, and the applied force is to the left.",
                    "The current is counterclockwise, and the applied force is to the right.",
                    "The current is counterclockwise, and the applied force is to the left.",
                    "The current is counterclockwise, and the applied force is into the page."
                ],
                "answer": "A",
                "explanation": "(A) To oppose the decrease in flux going into the page, the current flows clockwise. What magnetic force does this produce on the loop? The magnetic forces on the top and bottom of the loop, which point up and down, respectively, cancel each other out. The force on the left side of the loop points to the left, and there is zero force on the right side of the loop (because the magnetic field is zero in this region), so the net magnetic force points to the left. Because the applied force must cancel out this magnetic force in order for the loop to move at constant velocity, it then points to the right.",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            },
            {
                "id": "ap-mock-physc-em-3-q45",
                "global_num": 312,
                "section": "Practice Test 1 – E&M",
                "question": "Which of the following statements about electric field lines and equipotential curves is false?",
                "options": [
                    "Equipotential lines are always perpendicular to electric field lines.",
                    "The electric field magnitude is greater in regions where the density of electric field lines is greater.",
                    "Electric field lines begin and end only at the locations of negative and positive charges, respectively.",
                    "The work required to move a charge along an equipotential line is zero.",
                    "Electric field lines never penetrate metals."
                ],
                "answer": "C",
                "explanation": "(C) Electric field lines begin and end at locations of positive and negative charges, respectively (not the other way around).",
                "difficulty": "medium",
                "topic": "Practice Test 1 – E&M"
            }
        ],
        "totalQuestions": 45
    }
};
