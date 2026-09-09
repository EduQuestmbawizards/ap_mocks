// Specific Question Bank for Test: ap-diag-calc-bc
const AP_TEST_DATA = {
    "ap-diag-calc-bc": {
        "title": "AP Calculus BC Diagnostic Assessment",
        "subject": "AP Calculus BC",
        "testType": "Diagnostic Assessment",
        "duration": 60,
        "totalQuestions": 30,
        "questions": [
            {
                "id": "ap-mock-calcbc-full-1-q1",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p><img src=\"images/d079f03319444e91bab602ef08f782cc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "0",
                    "<img src=\"images/058aa9cbb6c3415dbfb16b8820e7e0bf.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "5",
                    "nonexistent"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>Plugging 0 in for\r                                     <em>x</em> yields <img src=\"images/a24283fd91e74c0987058654664eb469.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, so manipulate the limit in some way. You could break it\r                                 into pieces and use a special trig rule, but it’s much easier here\r                                 to use L’Hôpital’s rule.</p> <p><p><img src=\"images/104833221e7a440d9b6714f9059faa48.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></p> <p>(A) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q2",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>For what values of<em> </em><em>p</em> does the series\r                             <img src=\"images/1ad0e95c9a364d6faff12186189308a0.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             converge?</p>",
                "options": [
                    "<em>p</em> > 0",
                    "<em>p</em> ≥ 1",
                    "<img src=\"images/df0f0c408ed64918a7786f046876681d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "The series converges for all <em>p.</em>"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> In general, the\r                             <em>p</em>-series <img src=\"images/fcfe1c5752094fc9a4f81c1d0a71e098.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges for <em>p</em> > 1.\r                             (Remember, <img src=\"images/1335b8a1f39140ed8aa0833430566fa2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> does <em>not</em> converge, but <img src=\"images/add2da5d0edf4385a58e55106d47d515.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> does.) You can use this to determine when <img src=\"images/91fa152040a34918b54ecf4ea78da6c5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges. In other words, you know that <img src=\"images/ed9e9e6d16d54cb9adf6ee30c1742eac.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges for 2<em>p</em> > 1\r                                 or  <img src=\"images/b1370f8cb9e748a590c5ced68c44045d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. <p>Thus,\r                                 (C) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q3",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>The Taylor series for sin <em>x</em> centered at <em>x</em> = 0 begins</p> <p><img src=\"images/ac69febf8d5f4909a1fb4231e7c93788.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>What is the coefficient of <em>x</em><sup>3</sup> in the Taylor series for <em>x</em> sin <em>x</em><sup>2</sup> centered at <em>x</em> = 0 ?</p>",
                "options": [
                    "1",
                    "<img src=\"images/2c220dad3e274c989702d2f1e1594f46.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/7e7365bd75424172bda117ab27e95829.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/0136d11771aa4897b39d6eeb6059aca3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>Though the function\r                                     <em>x</em> sin(<em>x</em><sup>2</sup>) is itself fairly complicated,\r                                 you don’t need to compute all the derivatives in order to determine\r                                 the power series. You know that a power series for sin <em>x</em> is\r                                 given by:</p> <p><img src=\"images/3b1ac5647f8d4f4ab36a72777420f1d1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>This will give you a\r                                 power series for sin(<em>x</em><sup>2</sup>) by composition:</p> <p><img src=\"images/873221b5480045a4943e42d31e76808c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Finally, to get a power\r                                 series for <em>x</em> sin(<em>x</em><sup>2</sup>), you just multiply the\r                                 power series for <em>x</em> (which is just the series<img src=\"images/660ca904e8bc45cb895f89c6ccc53436.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> and sin(<em>x</em><sup>2</sup>), namely:</p> <p><img src=\"images/7e9dfb7292b5431ea64af887f2ed7c4d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>The coefficient of\r                                     <em>x</em><sup>3</sup> is 1, which matches (A).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q4",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><p><img src=\"images/chapter23_pg562_01.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></div><p>The graph of a function <em>f</em> is shown above. Which of the following statements about <em>f </em>is true?</p>",
                "options": [
                    "An infinite discontinuity occurs at <em>x</em> = 4.",
                    "A jump discontinuity occurs at <em>x</em> = 3.",
                    "A removable discontinuity occurs at <em>x</em> = 2.",
                    "A jump discontinuity occurs at <em>x</em> = 1."
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> Examine the discontinuity\r                             at each value of <em>x</em>. The graph is continuous at <em>x</em> = 4,\r                             so (A) is not correct. The discontinuity at <em>x</em> = 3 is a\r                             removable discontinuity (a hole), so (B) is not correct. The\r                             discontinuity at  <em>x</em> = 2 is an\r                             infinite discontinuity (a vertical asymptote), so (C) is not correct.\r                             That leaves (D) as the correct choice. The discontinuity at <em>x</em> = 1 is a jump discontinuity because\r                             there is a gap in the graph there."
            },
            {
                "id": "ap-mock-calcbc-full-1-q5",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>The cost of producing <em>x</em> units of a certain item is <em>C</em>(<em>x</em>) = 2000 + 8.6<em>x</em> + 0.5<em>x</em><sup> 2 </sup>. What is the instantaneous rate of change of <em>C</em> with respect to <em>x</em> when <em>x</em> = 300 ?</p>",
                "options": [
                    "297.2",
                    "300.0",
                    "308.6",
                    "313.6"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>One interpretation of\r                                 the first derivative of a function is that it represents the\r                                 instantaneous rate of change, so calculate the derivative of the\r                                 function and find the rate of change at the point specified. Because\r                                 this question is in the no-calculator section of the test, the\r                                 calculations should be fairly straightforward.</p> <p><img src=\"images/f16993fc424c4528a6b10d4bed550e51.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s (C).</p> <p>Note: The word “rate” in\r                                 calculus nearly always means the derivative.  The only time\r                                 that it doesn’t is when you are asked for “average rate.”</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q6",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><img src=\"images/chapter23_pg563_01.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></div><p>Which of the following integrals gives the area of the shaded region?</p>",
                "options": [
                    "<img src=\"images/1702b2a60c4f4ae78bff75c2c3f7073b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/d8510720a3614f4faaf9e88d19d6848e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/af536a0d98f74e87971158a1506bf853.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/733def3e290347faac638dde9d4fa3ab.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>To start with, how would\r                                 you compute the total area enclosed by the outer curve?</p> <p><img src=\"images/chapter29_ch29_figure_text_un585.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Here’s a graph of <img src=\"images/0823042f6b3d436c940d27a4fac9d5f8.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. Notice that it’s positive except on the interval <img src=\"images/424f309a9ffe4e24aa756956c4b1ed82.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. Plotting a few points if necessary, you see that the outer\r                                 curve is given by <img src=\"images/7a7c70afe2e14b5b9faaadc52f5f0bde.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> on the interval <img src=\"images/7f8666c3a0ee43c382a7f153fbc5c1db.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">; i.e., exactly where the radius is positive. (Note: you can\r                                 see by inspecting the graph that because the positive values of\r                                     <img src=\"images/6571aa988d414c988367c7ed35f66c23.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> are much larger than the negative values, the points on the\r                                 graph with positive radius correspond to the <em>outer curve</em>.) To\r                                 compute the area of this region you need to compute</p> <p><img src=\"images/e05d4041516b4689843d8f376a0a8cfb.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Just as above, the area\r                                 of the inner shell is given by the integral</p> <p><img src=\"images/093d72cb09cb436a9c474bdaa81feebf.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Finally, to compute the\r                                 area you just take the difference. You need the polar integral over\r                                     <img src=\"images/7642ba7df3254552a4c278d024406896.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> minus the polar integral over <img src=\"images/022a6800f16541d282e27851633a1dba.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.</p> <p><img src=\"images/4efa32234c7344f6a251b50cacca7936.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (C) is\r                                 correct.</p> <p>Note: If you are in a\r                                 hurry you might think to compute the area in a polar equation just\r                                 as you would for a standard function. That is, you might want to\r                                 just integrate <img src=\"images/343b72a08a34480b893a09ca9546d13b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. Remember, the area formula in polar coordinates is:</p> <p><img src=\"images/2e6b6e2da5464334b179a4a12fe7e9d1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q7",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Which of the following gives the derivative of the function <em>f</em>(<em>x</em>) = <em>x</em><sup> 2</sup> at the point (2, 4) ?</p>",
                "options": [
                    "<img src=\"images/2b4f868014624cf48e6dd3730f6fdb5a.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/309fcb1960a34acbad49f95036d733b8.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/8de455df3c944c918416341b17be1357.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/793a2b5075ee4adaa3deeb64ffb581fe.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> The derivative at a point\r                             is defined as <img src=\"images/9aebd62155da4888828c7c11052594d7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. You can eliminate (B) right away because <em>h </em>is not\r                             approaching 0. The point (2, 4) tells you\r                             that <em>x</em> is 2, so replace each <em>x</em> in the definition\r                             with a 2. This makes (C) the correct answer."
            },
            {
                "id": "ap-mock-calcbc-full-1-q8",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>If <img src=\"images/475e4db22fa84abba359ee0732768777.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, then <em>f'</em>(<em>x</em>) is which of the following?</p>",
                "options": [
                    "5 sec <em>x</em> tan <em>x</em> − 3<em>x</em><sup>2</sup> sin <em>x</em>",
                    "5 sec <em>x</em> tan <em>x</em> + 3<em>x</em><sup>2</sup> cos <em>x</em> + 17<em>$\\pi$ </em><em></em>",
                    "5 sec <em>x</em> + 5<em>x </em>sec <em>x</em> tan <em>x</em> + 3<em>x</em><sup>2</sup> cos <em>x</em> − <em>x</em><sup>3</sup> sin <em>x</em>",
                    "5 sec <em>x</em> + 5<em>x </em>sec <em>x</em> tan <em>x</em> − 3<em>x</em><sup>2</sup> cos <em>x</em> + <em>x</em><sup>3</sup> sin <em>x</em> + 17<em>$\\pi$</em>"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>The derivative of a\r                                 constant term (such as 17<em>$\\pi$</em>) is 0, so you can eliminate (B)\r                                 and (D) right away. For the other two terms, use the product rule,\r                                 which states that (<em>fg</em>)<em>' </em>=\r                                         <em>f'g + fg'</em>:</p> <p><img src=\"images/ad74653f20294460800e40d82580df19.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s a perfect match\r                                 for (C).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q9",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><p><img src=\"images/57ab7796abdf4aa8a71b02b669e2b7f3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></div><p>Let <em>g</em> be the function given above. If <em>g</em> is continuous for all real numbers, what is the value of <em>k</em> ?</p>",
                "options": [
                    "–6",
                    "–3",
                    "0",
                    "2"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>You are given a\r                                 piecewise function <em>g</em> and told that it is continuous for\r                                 all real numbers. Both individual functions, or “pieces,” are\r                                 continuous on their own, so all you need to check is where the\r                                 function potentially splits, which is at <em>x</em> = 2.</p> <p>To be continuous at <em>x\r                                 </em>= 2<em>, </em><img src=\"images/286a8054549e49a492a6109d34629fec.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> must equal <img src=\"images/f49b21b013d14fdeb79c48cf223216ee.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, so substitute 2 for the variable in each piece of the\r                                 function, set them equal, and solve for <em>k</em>. This gives\r                                     –(2)<sup>2</sup> + 4 = 3(2) + <em>k</em>, or 0 = 6 + <em>k</em>.\r                                 Solving this equation yields <em>k</em> = –6, so (A) is\r                                 correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q10",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><img src=\"images/chapter23_pg565_01.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></div><p>The graph of <em>f</em>(<em>x</em>) appears above. Which of the following could be the zeros of the derivative function <em>f</em><em>′</em>(<em>x</em>) ?</p>",
                "options": [
                    "<em>x</em> = −2, 2.5",
                    "<em>x</em> = −3, 1, 4",
                    "<em>x</em> = −2, −1, 2.5",
                    "<em>x</em> = −4, −1, 3, 5"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> The zeros of the\r                             derivative function <em>f′</em>(<em>x</em>) are the values of <em>x</em> at\r                             which <em>f</em>(<em>x</em>) has a horizontal tangent, in this case at the\r                             relative minimums and maximums. Here, this occurs at <em>x</em> = −3 (a relative minimum),\r                                 <em>x</em> = 1 (a relative maximum), and\r                                 <em>x</em> = 4 (a relative minimum).\r                             That’s (B)."
            },
            {
                "id": "ap-mock-calcbc-full-1-q11",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Ford is water-skiing around Cartesian Lake, towed by a motorboat that is following a path parameterized by the equations:</p> <p><img src=\"images/f48368f2c75843d580ea920062f91c96.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "3",
                    "2",
                    "<img src=\"images/78910e77dde5454fa646b98c3d4f2577.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/377d2ef548ec40efbaac419457280f2d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>At the heart of this\r                                 word problem is a question about tangent lines to parametric curves.\r                                 You are given a parametric curve in the <em>xy</em>-plane and asked to\r                                 compute the slope of the tangent line at <em>t</em> = 2. In general, the trajectory of a point\r                                 traveling along a curve given by a parametric equation is the vector\r                                     (<em>x′</em>(<em>t</em>),\r                                     <em>y′</em>(<em>t</em>)), which points along a line with\r                                 slope <img src=\"images/9b2ba6572337463993cb851366ade50b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> .</p> <p>The equations for the\r                                 curve are <img src=\"images/84019e7d635545bd806b07a3bec64a2f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. The general formula for the slope of the tangent line to a\r                                 parametric curve is <img src=\"images/9107a7c860394307ad1ba34111539102.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> (this is just the infinitesimal version of “rise over run”).\r                                 First you compute derivatives <img src=\"images/e6dd6dbaf87a48719c54b1624aa4fbbe.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. Now, you want the slope at <em>t</em> = 2:</p> <p><img src=\"images/8d9b71ec01a849158be6b9e2bc178da3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (A) is\r                                 correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q12",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><img src=\"images/chapter23_pg566_01.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></div><p>The graph of <em>f</em>(<em>x</em>) is given above. Which of the following is true about <em>f\"</em>(<em>x</em>) ?</p>",
                "options": [
                    "<em>f\"</em>(<em>x</em>) < 0 for all values of <em>x</em>",
                    "<em>f\"</em>(<em>x</em>) > 0 for all values of <em>x</em>",
                    "<em>f\"</em>(<em>x</em>) > 0 for  <em>x</em> < 1 and <em>f\"</em>(<em>x</em>) < 0  for <em>x</em> > 1",
                    "<em>f\"</em>(<em>x</em>) > 0 for <em>x</em> > 1 and <em>f\"</em>(<em>x</em>) < 0 for −1 < <em>x</em> < 1"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> Think about what the\r                             second derivative tells you about a graph: A graph is concave up (a cup\r                             that \"holds water\") if <em>f\"</em>(<em>x</em>) > 0 (the second\r                             derivative is positive). A graph is concave down (a cup that \"spills\r                             water\") if <em>f\"</em>(<em>x</em>) < 0. Start by identifying where\r                             the graph is concave up and where it is concave down. Put the\r                             <em>x</em>-values where it changes in a chart or on a number line like the\r                             one shown below. Then write down where <em>f</em><em>\"</em> is positive and\r                             where it is negative:  <p><img src=\"images/chapter23_pt1_q12_a_e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>The graph is concave up\r                                     (<em>f\"</em> > 0) to the left of <em> x</em> = –1 and to the\r                                 right of <em>x</em> = 1, and concave down (<em>f\"</em> < 0)\r                                 between –1 and 1. (D) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q13",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>What is the slope of the curve <img src=\"images/b4439d6e38494442bf3d6e0f3b26e936.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> when <em>x</em> = 2 ?</p>",
                "options": [
                    "–1",
                    "1",
                    "<img src=\"images/e4376e6bd917476db8e49fbeb5df4a8a.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "6"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> <p>The slope of a curve at\r                                 a given point means the slope of the tangent at that point. To find\r                                 the slope of the tangent at <em>x </em>= 2, take the first derivative\r                                 of the equation and plug in 2 for each <em>x</em>:</p> <p><img src=\"images/18d90f2dbbc24cf78fbf8f97858ebddd.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>(B) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q14",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Compute\r                             <img src=\"images/ff9952ef20a5426c866389ee032f3727.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> <em>dx .</em></p>",
                "options": [
                    "−2 ln |<em>x</em> + 1| + 3 ln |<em>x</em>| + <em>C</em>",
                    "<img src=\"images/c0e6dd7d68dc4198816e7e3a833f0d6c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "−2 ln |x + 1| − 3 ln |x| + C",
                    "3 ln |<em>x</em> + 1| + ln |<em>x</em>| + <em>C</em>"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>In order to integrate\r                                 this rational function you need to first compute the partial\r                                 fraction decomposition. You start with your function <img src=\"images/8dab90b94a254b0fa93183c60e93ff04.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> and try to write it as a sum: <img src=\"images/eba8c3d4621a49c9926c3e573dcf9d9c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. To solve this you add the two fractions by first forming\r                                 their common denominator and then comparing that with your original\r                                 equation.</p> <p><img src=\"images/46074edc6be249e8b7905a41b05ad7c5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>By comparing the\r                                 coefficients of the numerator of both sides you have <img src=\"images/8a348d8bed89494aa3b52a75609d1306.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, and so <em>A</em> = −2.\r                                 Finally you see that <img src=\"images/e5a871fe6daa4f9683fcb42a98c2dcd7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.</p> <p>Now integrate:</p> <p><img src=\"images/4ebf8e1eefa24f0aa01e3b42b0f753f6.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (C) is\r                                 correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q15",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>A 13-foot ladder is leaning against a 20-foot vertical wall when it begins to slide down the wall. During this sliding process, the bottom of the ladder is sliding away from the bottom of the wall at a rate of\r                             <img src=\"images/be33419526da49c5bf2c75e98ef45d68.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             foot per second. At what rate is the top of the ladder sliding down the vertical wall when the top of the ladder is exactly 5 feet above the ground?</p>",
                "options": [
                    "−2 feet per second",
                    "<img src=\"images/dd08c6dfde144ef5b7e35f0690057b98.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             feet per second",
                    "<img src=\"images/241ed053e40240a982e3699b88f087e9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             feet per second",
                    "<img src=\"images/ca6db7b5d418451c970dfe7951d1f0ae.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             feet per second"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> <p>Let the horizontal\r                                 distance from the bottom of the wall to the bottom of the ladder be\r                                     <em>x</em> and let the vertical distance from the top of the\r                                 ladder to the ground be <em>y</em>. Then, by the Pythagorean theorem,\r                                      <em>x</em><sup>2</sup> +\r                                         <em>y</em><sup>2</sup> = 13<sup>2</sup>. You’re\r                                 given that <img src=\"images/ad7faee46d9742c8a4671e077abb586d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> (because the horizontal slide is <img src=\"images/060889c36add40f8bdab57b325d4b2fd.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> foot per second), and you’re looking for <img src=\"images/fcdf8a95178840df88a4bb820b1767d3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> (the vertical slide). Use implicit differentiation to\r                                 get:</p> <p><img src=\"images/3d6b0d2ed1124f71928e975d3a01512d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>At the time when <em>y</em> = 5, you know that <em>x</em> = 12 (again thanks to the\r                                 Pythagorean theorem and the fact that the ladder is always 13 feet\r                                 long). Substitute all this information into the derivative equation\r                                 and solve for <img src=\"images/a6260419ebac415c900bb1543609cbea.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">:</p> <p><img src=\"images/d858be386d33486f8dc24b4c99efb30b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>(B) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q16",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>What is the solution to the differential equation \r                             <img src=\"images/1f48860b381b4e1f90d47d96fe21cca1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, where <img src=\"images/8e8bd648b6494ca98b5a412c36aff864.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> ?</p>",
                "options": [
                    "<img src=\"images/551995200ed042a78c06d1c6dadd45b2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/d0558c437e274b7fbfb87c38996cfc57.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/16d7628096a649c78a6637a67a30da2a.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/dc73c259eca54944b99279bedf9042e5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> <p>Cross-multiply so that\r                                 all the <em>x</em>'s are on one side and all the <em>y</em><em>'</em>s are\r                                 on the other: <em>e</em><sup><em>y </em></sup><em>dy</em> =\r                                         sin <em>x </em><em>dx</em>. Next,\r                                 integrate both sides:</p> <p><img src=\"images/24ade3144b8a43479e219a3d1051ff19.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Plug\r                                 in <em>y</em> = 0 and <em>x</em> = <img src=\"images/1cd8a289ed5c4b2cad3f5e56817db188.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> (because that was the other given information) to\r                                 get:</p> <p><img src=\"images/458ec344f81d40bb975296e53424242b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Now plug the value of\r                                     <em>C</em> into the function. Then you need to write the\r                                 equation in terms of <em>y</em> (not\r                                 <em>e</em><em><sup>y</sup></em>),  so take the natural log of both\r                                 sides.</p> <p><img src=\"images/47451e5c76934431b04e429e873373fc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s (B).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q17",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p><img src=\"images/6b998201cf0c4205b22069c30d2073fc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "−4",
                    "2",
                    "6",
                    "12"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> <p>You could try to split\r                                 the given equation into a piecewise function (because there is an\r                                 absolute value involved), but it’s quicker to draw the graph of the\r                                 integrand function, <em>y</em> = 2\r                                     − | 4 − <em>x</em> |, then calculate\r                                 areas. Transform the graph of <em>y</em> = | <em>x</em> | by\r                                 shifting right 4 units, flipping over the <em>x</em>-axis, and moving\r                                 the graph up 2 units. The graph is shown below.</p> <p><img src=\"images/chapter23_pt1_q17_a_e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>A definite integral is\r                                 the sum of the areas bounded by the curve and the\r                                 <em>x</em>-axis. Areas above the <em>x</em>-axis are given a positive\r                                 sign, and areas below the <em>x</em>-axis are given a negative sign.\r                                 Note that the triangle between <em>x</em> = 0 and <em>x</em> =\r                                 2 has an area of <img src=\"images/59a17685f05e4af8bf39f726b4597386.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, but its contribution to the integral is −2 because\r                                 the graph is below the <em>x</em>-axis. The area of the other triangle\r                                 is <img src=\"images/e16eb01c61f6446e992993fb45578c02.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, so the value of the definite integral is −2 + 4 = 2. (B) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q18",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Which of the following sequences converge?</p>",
                "options": [
                    "I only",
                    "II only",
                    "I and II",
                    "I, II, and III"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>First notice that <img src=\"images/80fab9adddb448ce97f30df7645b5794.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> diverges. To see this, observe that</p> <p><img src=\"images/bed83240b3d0431b953c0d297257c85f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>and so the series cannot\r                                 converge (always remember that the first condition to check for\r                                 series convergence is whether the limit of the summands is\r                                     0. <img src=\"images/0969969087654a1cb2f450f14b04cc29.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> in order for <img src=\"images/8c15cae33d2f49e087e8ddd5010ea6a6.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> to converge). Notice that this immediately rules out (D).\r                                 For statement I, you need to remember the order of growth of\r                                 functions. Because you’re comparing polynomials and exponential\r                                 functions, this is relatively simple; exponentials dominate <em>any\r                                     polynomial</em>, so <img src=\"images/2cbf02a7fd6145f2a9283293c5375e23.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges. For statement II, notice that <img src=\"images/a5b874dd42644938872f5c82a99ceec2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, so this is a geometric series with base <img src=\"images/7d444d5bf37447abba234ebff1a2168e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> . Because <em>e</em> ≈\r                                     2.71, <img src=\"images/8d0f0273d8654960881298ed0a53288c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> and the series converges. (Remember, a geometric series\r                                 converges if and only if the base has absolute value less than\r                                 1.)</p> <p>Thus, (C) is\r                                 correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q19",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p></p>",
                "options": [
                    "<img src=\"images/0bc0493ec51c4508ae8d9ee5f8854e28.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/85365c7a648544279b5183c1491096d9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/6d6282ead35649b081bac330e5391093.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/9635545c0eaf4f06b8f4ce3c1c2521c3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>When you see a\r                                 complicated expression raised to a power,\r                                 think <em>u</em>-substitution. Here, let <img src=\"images/1e1aebbbc27848e59717ad4f8541446b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, which means <img src=\"images/e76b19ab918243a7908c195be04aba66.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. To compensate for the extra <img src=\"images/809572b804924f5eb6be7469cff8d048.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> that you need to multiply the <em>dx</em> portion of\r                                 the integrand by, multiply the entire integral by <img src=\"images/c999080930f2468ca0df8ce23b263b0f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> and rearrange to get:</p> <p><img src=\"images/0e37003825e0460084d5582dea3acc2f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Written in terms of\r                                     <em>u</em>, this is:</p> <p><img src=\"images/9bdb2b5b925947fe9a478a4ae5ac9546.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Converted back in terms\r                                 of <em>x</em>, your final answer is <img src=\"images/3fdd552cc57249dc90b602336426fcb2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, which is (C).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q20",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Compute\r                             <img src=\"images/7cd4b014fe2447d08e02cb3f1bb856a3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             .</p>",
                "options": [
                    "–1",
                    "1",
                    "3",
                    "undefined"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>This question asks you\r                                 to compute an improper integral, which means that you will\r                                 eventually need to compute more limits. To start, though, just find\r                                 an antiderivative:</p> <p><img src=\"images/da0caba7c8f5454daa70c229835eef8b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>In order to evaluate,\r                                 take the limit of the antiderivative as <em>x</em> goes to infinity\r                                 (in place of evaluating the function at infinity), as above.</p> <p>Thus, (C) is\r                                 correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q21",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p><img src=\"images/0ebc2cbcec75478cbc0c63155fbf8601.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "<img src=\"images/4f7d1b071f0b4597b2894b458dc07cb1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/126b73b59f0d4af3a8ecedd2365a3fc5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<em> <img src=\"images/17872c5652744de99b304409d112accd.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> </em>",
                    "<img src=\"images/b087eb36467445959530a80daea0e8ff.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> <p>When you see the\r                                 derivative of an integral, use the second fundamental theorem of\r                                 calculus to evaluate the integral. Remember to use the chain\r                                 rule and to take the derivative of both limits of integration. The\r                                 derivative of 2 is 0 since it is a constant.</p> <p><img src=\"images/61c5c0e18c054ca09153d3a7f8f5758f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Simplify and\r                                 rearrange to arrive at the correct answer, which is (D).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q22",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Let <em>g</em>(<em>x</em>) = (arccos(<em>x</em><sup>2</sup>))<sup>5</sup>. Then <em>g′</em>(<em>x</em>) =</p>",
                "options": [
                    "<img src=\"images/fb0a8322105a4aff8f3c071953c4a38c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/854002d63fc741e58881405a1aa65f74.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/ed3b68effd7f48669babb349a7c1bd88.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/d209c3bc27cb4176b8471577a62a7f5b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>This problem involves a\r                                 repeated chain rule. The derivative of (something)<sup>5</sup> =\r                                     5(something)<sup>4</sup> (derivative of something). So in this\r                                 case, the first step is:</p> <p><img src=\"images/5717177283b54a2d814dc41cf53d8e95.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>The derivative of arccos\r                                     <em>x</em> is <img src=\"images/3195607171d745ecbf1a8a6febdf011f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> So:</p> <p><img src=\"images/bfcc539ee5bf4c1eac9d695623ddbfd8.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Apply the chain rule one\r                                 more time and differentiate <em>x</em><sup>2</sup> to get\r                                     2<em>x </em> (***). Combine all\r                                 of the starred parts and simplify to get (C).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q23",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p><img src=\"images/49e1b4df0c264c00a3e1a14bf8cb86d2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "<img src=\"images/7e70b277c3fa423482a87cfc6f5badfe.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/40a8874adfb649d5ae547bdb66b6a754.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/9c68548d580e4454baf0b0451213eab0.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/436acc67117f4fb48547386499bc107e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>Use the product rule\r                                 along with the chain rule (in two places):</p> <p><img src=\"images/701a169a66d14171885ceab03f80e07b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Factor out\r                                         5<sup>2</sup><em><sup>x</sup></em> to make your final answer\r                                 look just like (A).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q24",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>What is the slope of the normal line to the curve <em>x</em><sup>3</sup> + <em>xy</em><sup>2</sup> = 10<em>y</em> at the point (2, 1) ?</p>",
                "options": [
                    "<img src=\"images/443dda51d17a412f8f31da2d7aa5693b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/4273d9a48d394c13abcc6019c00caf8c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/9d102808531249ecb289b94e1cd4cf68.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "2"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> <p>The normal line to a\r                                 curve is perpendicular to the tangent line. This means the slope of\r                                 the normal line is the negative reciprocal of the slope of the line\r                                 tangent at the given point. To find the slope of the tangent, use\r                                 implicit differentiation. Don’t forget to multiply by <img src=\"images/40a618943c6f44ac8cc617c0fade4a47.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> when you take the derivative of <em>y</em>. Also, use the\r                                 product rule when differentiating the second term. The derivative\r                                 is:</p> <p><img src=\"images/0f45a99f6c784267bc96974c8f33cd80.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>You could solve\r                                     for <img src=\"images/f926007ac8614aa29e7f4bf50eebc2e7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> now, but because you are given values for <em>x</em> and\r                                     <em>y,</em> plug those in first and then get <img src=\"images/547ae26518fa41e99acff3f648bc11d9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> by itself:</p> <p><img src=\"images/c1a68efe380a4274a55812586caac02e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, the slope of the\r                                 tangent line at the point (2, 1) is <img src=\"images/5b3f67f647524d49a8b2f49f5a9304cc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. The negative reciprocal of this is <img src=\"images/16e9ac54480e42c6a4e65c74ed60963f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, which is (B).</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q25",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Compute\r                             <img src=\"images/073d782de76449ab8590b9a247141914.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "<img src=\"images/6a097289989f4906a0c938ffc4f872dc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/8905117f489348a7ad8739b4604160b0.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/703e8903b5fa4af6ba68cb0bcf954bfe.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/057b530a8bef4035987664627c07d407.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> <p>Here you are given a\r                                 relatively straightforward indefinite integral to compute. First\r                                 look for a possible <em>u</em>-substitution. However, in this case no\r                                 such substitution exists. That leads you next to integration by\r                                 parts. (This is usually the next step for functions involving\r                                     <em>e</em><sup><em>x</em></sup>, a popular element in\r                                 integration-by-parts questions.)</p> <p>First, recall:</p> <p><img src=\"images/0f3ef834ae204eee84df38ef5ec9625d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>The tactic involves\r                                 simplifying one part of the function, <em>u</em>, (by differentiating)\r                                 at the expense of complicating the other, <em>dv</em>, (by\r                                 integrating). Because <em>e</em><sup><em>x</em></sup> integrated\r                                 relatively easily, try <img src=\"images/638e2116d57a4a7f9162ef8500218ecb.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> , which then makes:</p> <p><img src=\"images/3883f00024c94789ae0f02f98f20dbe6.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Plugging this into the\r                                 formula above gives</p> <p><img src=\"images/ae8386a0f1954e4c8ec52e6b234c9864.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (C) is\r                                 correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q26",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>What is the volume of the solid of revolution determined by rotating the region bounded by the graphs of <em>f</em>(<em>x</em>) = <em>x</em><sup> 2</sup> and <em>g</em>(<em>x</em>) = 3<em>x</em> about the <em>x</em>-axis?</p>",
                "options": [
                    "9$\\pi$",
                    "<img src=\"images/7d1f0932e45f4511965e88003a81d0a3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "28$\\pi$",
                    "<img src=\"images/917c50f8097449dcb0311d830cccb057.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> <p>First, draw the region.\r                                 The graph of <em>f</em>(<em>x</em>) is a parabola in standard position.\r                                 It is below the graph of <em>g</em>(<em>x</em>), which is a line through\r                                 the origin with a slope of 3. The graphs intersect at <em>x</em> = 0 and <em>x</em> = 3 (set the equations equal to\r                                 each other to find where they intersect). The graph looks like the\r                                 following:</p> <p><img src=\"images/chapter23_calc_graph_post-fix.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Use the washer method to\r                                 find the volume. The vertical line between the curves represents the\r                                 radius, 3<em>x</em> –\r                                     <em>x</em><sup>2</sup>. Each washer will have an area\r                                     of <em>$\\pi$</em>((3<em>x</em>)<sup>2</sup> –\r                                         (<em>x</em><sup>2</sup>)<sup>2</sup>). Therefore,\r                                 the volume can be found using:</p> <p><img src=\"images/96d007f7295345dba8178e8dc8507a6d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Simplify, then integrate\r                                 to arrive at:</p> <p><img src=\"images/4c307efd86b24793b72aba70efd2441f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Now, evaluate from <em>x</em> = 0 to <em>x</em> = 3 to get <img src=\"images/699969f7c7d94808b8a0037e08b3c889.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. (D) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q27",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Which of the following slope fields describes the differential equation\r                             <img src=\"images/3a1eea233b524be5bef88bd6f4ebb298.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             ?</p>",
                "options": [
                    "<img src=\"images/chapter23_pt1_q27_choicea.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/chapter23_pt1_q27_choiceb.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/chapter23_pt1_q27_choicec.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/chapter23_pt1_q27_choiced.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> <p>There are at least two\r                                 different approaches to this problem. The quickest way to determine\r                                 which graph is the slope field is to plug in some \"easy\" numbers for\r                                     <em>x</em> and/or <em>y</em> to find the slope. Then look\r                                 at the graphs to see which ones have approximately that slope at\r                                 those (<em>x</em>, <em>y</em>) points. First, notice that\r                                 <em>y</em> cannot equal 0 (because it is in the denominator of\r                                 the right side of the equation), so there cannot be any slopes drawn\r                                 along the <em>x</em>-axis.  Eliminate (A) and (C). At\r                                 <em>x</em> = 0, the derivative is 0, so you must have short\r                                 horizontal segments up the entire <em>y</em>-axis. This makes (D)\r                                 correct. Also, the line segments corresponding to the points (1, 1),\r                                 (2, 2), (3, 3), and so on must all have a slope of 1.</p> <p>Another way is to solve\r                                 the differential equation given in the question. Because it is a\r                                 first order, separable differential equation, this is\r                                 straightforward. First, rewrite the original differential equation\r                                     as: <em>y </em><em>dy</em> =\r                                         <em>x </em><em>dx</em>. Then integrate both sides to\r                                 obtain <img src=\"images/ceb6d8d5891b44769cea8d809e21b99b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> or <img src=\"images/af12a5d535924cba81f5eb5de000db30.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> for some constant <em>C</em>. Next, consider what the\r                                 graph of such an equation looks like—it is a hyperbola. (D) most\r                                 closely resembles a family of hyperbolas.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q28",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p><img src=\"images/082895641542434f8be997e2f3f300a9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             is equivalent to:</p>",
                "options": [
                    "<img src=\"images/453bbfbaf4bc4c6c864f986cea726e6e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/91cff249dd244cd1aa92f3eae6cfa6b7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/59bcdd8cc280432eb539dc241d732223.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/50a1dfe8bc4a4c988a658b2c63917a26.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>The problem requires you\r                                 to change the variables from <em>x</em> to <em>u</em>. Make sure\r                                 you change all the <em>x</em>'s, including the <em>dx</em> and the\r                                 limits of integration. Let:</p> <p><img src=\"images/34f25103dffb48e49ab0a470a0c8a756.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>The limits of\r                                 integration become <em>u</em> = 3(–1) – 1 =\r                                     –4 and <em>u</em> = 3(4) – 1 =\r                                     11.</p> <p>So:</p> <p><img src=\"images/78261a83eca64e8abe6e82e3fc7f3e56.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>(A) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q29",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>A population of voles is described by the differential equation</p> <p><img src=\"images/ec5b0d7a5375440bbf912d6cba3586c0.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             with initial condition <em>P</em>(0) = <em>a </em>. For which values of <em>a</em> will\r                             <img src=\"images/058e015b819049ab93cad16eb1849cd9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             ?</p>",
                "options": [
                    "<em>a</em> = 0",
                    "<em>a</em> ≥ 400",
                    "0 ≤ <em>a</em> ≤ 400",
                    "<em>a</em> > 0"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> <p>First off, you need to\r                                 recognize that you are modeling a population and <em>P</em>(0) = <em>a</em> is the number of\r                                 creatures you are starting with. Common sense should tell you that\r                                 if you start with a population of 0, it will always stay 0.</p> <p>Looking at the model\r                                     <img src=\"images/7bc6d88369c74e189f995b230dae4afb.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> , if <em>P</em> = 0, then <img src=\"images/0dccb9ec07c645f895ee23fa7c18f597.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">  = 0, and so, as you’d expect, there is no population\r                                 change and the population stays at 0. This should immediately rule\r                                 out (A). Looking closer, <img src=\"images/5c06de36148b4d309931362ab957c625.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> is well behaved everywhere, and if <em>P</em> > 400, then\r                                 the population is decreasing, because  <img src=\"images/662efdc671854d1f9934aec25aaceccf.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> . If <em>P</em> < 400, then\r                                 the population is increasing because  <img src=\"images/8e1d591d506d4882b35dd92fc180c173.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> . Finally, if <em>P</em> = 400,\r                                 then <img src=\"images/69eadefde9c14094953fb337e30d8340.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> , and again you have another constant solution. These clues\r                                 all point to (D).</p> <p>In fact, the\r                                 differential equation given is a <em>logistic differential\r                                     equation</em> and limits to 400 for <em>every</em> nonzero initial\r                                 condition. Below is a graph of the slope field given by <img src=\"images/88a931f3cc6a42ac9c896f10befce6e5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> .</p> <p><img src=\"images/chapter29_ch29_figure_text_un590.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus,\r                                 (D) is correct.</p>"
            },
            {
                "id": "ap-mock-calcbc-full-1-q30",
                "topic": "Section I: Part A (No Calculator)",
                "difficulty": "medium",
                "question": "<p>Suppose <em>f</em>(<em>x</em>) = <em>x </em>sec <em>x</em> for <img src=\"images/afdcea68a06e4c58901bfe763cb2df52.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> and <em>g</em>(<em>x</em>) = <em>f <sup>–</sup></em><sup>1</sup>(<em>x</em>) . Given that the point\r                             <img src=\"images/7a54ee6e6a6d4e0b9e8371251ffee9e5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> is on the graph of <em>f</em>(<em>x</em>), what is the value of <img src=\"images/4f043676f162463e89f54a7200c875bf.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> ?</p>",
                "options": [
                    "<img src=\"images/ab032fada4c340dcbb4faa592a3362bc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/2e941f6997d2439ca134aa9fc37414c3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/be5db06a41754e90a04387fb25dccc2e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/0ef6315da0154f4094edb1d64d2d6e07.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> <p>The function\r                                     <em>g</em>(<em>x</em>) is the inverse of <em>y\r                                     </em>= <em>f</em>(<em>x</em>). To find the inverse of a\r                                 function, switch all the <em>x'</em>s and <em>y'</em>s, including\r                                 the ones in the given point. The equation becomes <img src=\"images/d3c410640ab9412ea416feb5d917783e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">and the point becomes <img src=\"images/04a783133462481b81b282bf20ece864.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.</p> <p>Since <em>x</em> is now by\r                                 itself, take the derivative of <em>x</em> with respect to\r                                 <em>y</em> to make differentiating easier. Then flip both sides\r                                 of the equation so that <img src=\"images/124bb77bdb224085b89291b88be8fe39.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> becomes <img src=\"images/cbd920b0176443ceba3a01f9f50a3859.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">:</p> <p><img src=\"images/4beb9871a29f45d2b49ebb8026b251ba.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Plug in the value of\r                                     <em>y</em> from the new point and simplify. In the last step,\r                                 multiply the numerator and the whole denominator by 3 to get rid of\r                                 the fraction inside of the fraction:</p> <p><img src=\"images/08097f4445a84639a8c2ff022e697d89.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s (A).</p>"
            }
        ]
    }
};
