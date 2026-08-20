// Specific Question Bank for Test: ap-topic-calcbc-power-series
const AP_TEST_DATA = {
    "ap-topic-calcbc-power-series": {
        "title": "AP Calculus BC: Power Series & Taylor Polynomials",
        "subject": "AP Calculus BC",
        "testType": "Topic Test",
        "duration": 45,
        "totalQuestions": 20,
        "questions": [
            {
                "id": "ap-topic-calcbc-power-series-q1",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Suppose\r                             that the function <em>f</em> satisfies <em>f</em>(<em>x</em>) = 3<em>x</em><sup> 2</sup> – sin\r                             <em>$\\pi$</em><em>x </em>. Then the slope of the line tangent to\r                             the graph of <em>f</em> at the point <em>x</em> =\r                             2 is</p>",
                "options": [
                    "<img src=\"images/e9a2e40f3b9c415aa6754c6b1842f159.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "12 – <em>$\\pi$</em>",
                    "12",
                    "24"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong>  <p>The slope of a tangent\r                                 to the graph at a point is the derivative of the function at that\r                                 point, so take the derivative of the given function and plug in 2\r                                 for each <em>x</em>. Don’t forget to use the chain rule when taking\r                                 the derivative of the second term:</p> <p><img src=\"images/30fd954c4fbd497497b6c1a0f9d50f6d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (B) is\r                                 correct.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q2",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Which of\r                             the following is a necessary and sufficient condition for a\r                             function <em>f</em> to be continuous at <em>x</em> = 4 ?</p>",
                "options": [
                    "<img src=\"images/00daa9230ea04a52971f3f439f912fd6.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             exists.",
                    "<em>f</em> is differentiable\r                             at <em>x</em> = 4.",
                    "<em>f</em>(4) exists.",
                    "<img src=\"images/d2680258285841eaba0b61a0669fc0e2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">."
                ],
                "answer": "D",
                "explanation": "<strong>D</strong> \r                             This question is testing your understanding of what it means for a\r                             function to be continuous at a point, in terms of limits. The words\r                             “necessary and sufficient” mean that the correct answer has to both\r                             imply and be implied by the continuity of <em>f</em> at <em>x</em> = 4. In other words, the correct\r                             answer is equivalent to the continuity of <em>f</em> at <em>x</em> = 4. Because differentiability at a\r                             point is a stronger condition than continuity at a point, (B) can be\r                             eliminated. (C) is certainly implied by the continuity of <em>f</em> at\r                                 <em>x</em> = 4, but it is not enough to\r                             imply continuity, so it may also be eliminated. Of the remaining two\r                             choices, you might recognize (D) as the definition of continuity of a\r                             function at <em>x</em> = 4. Hence, the\r                             correct answer is (D)."
            },
            {
                "id": "ap-topic-calcbc-power-series-q3",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Consider a\r                             continuous function <em>f</em> with the properties that <em>f</em> is\r                             concave up on the closed interval [–1, 3] and concave down on the closed\r                             interval [3, 5] . Which of the following statements is true?</p>",
                "options": [
                    "<em>f″</em>(2) > 0 and\r                             <em>f″</em>(4) < 0",
                    "<em>f″</em>(2) < 0 and\r                             <em>f″</em>(4) > 0",
                    "<em>f″</em>(3) > 0 and\r                             <em>x</em> = 3 is a point of inflection of <em>f</em>",
                    "<em>f″</em>(3) < 0 and\r                             <em>x</em> = 3 is a point of inflection of <em>f</em>"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong> \r                             A positive second derivative (<em>f\"</em> >\r                                 0) on an interval corresponds to the function being concave\r                             up on that interval, while a negative second derivative (<em>f\"</em> < 0) on an interval\r                             corresponds to the function being concave down on that interval.\r                             Careful—don’t choose (A) just yet because (D) could still be the answer.\r                             You can, however, eliminate (B). To finish answering the question,\r                             consider what is happening at the point <em>x</em>\r                                 = 3. Based on the information given, the concavity of the\r                             function changes at that point, which means <em>x</em> = 3 is a point\r                             of inflection. The second derivative at a point of inflection is either\r                             equal to 0 or does not exist, so (C) is not correct. This means you can\r                             also eliminate (D), leaving (A) as the correct answer."
            },
            {
                "id": "ap-topic-calcbc-power-series-q4",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><p><img src=\"images/chapter24_pg618_01.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></div><p>The graph\r                             of a function <em>f</em> is given above. Based on the graph, which of the\r                             following statements is true?</p>",
                "options": [
                    "<em>f</em> is continuous and\r                             differentiable everywhere and <em>f′</em>(2) =\r                             0.",
                    "<em>f</em> is continuous\r                             everywhere and differentiable everywhere except at <em>x</em> = 2.",
                    "<em>f</em> is discontinuous\r                             at <em>x</em> = 2 and\r                             <em>f</em> is differentiable everywhere except at\r                             <em>x</em> = 2.",
                    "<em>f</em> is discontinuous\r                             at\r                             <em>x</em> = 2, <em>f</em>\r                             is differentiable everywhere, and <em>f′</em>(2) =\r                             0."
                ],
                "answer": "B",
                "explanation": "<strong>B</strong> \r                             This question is testing your knowledge of what continuity and\r                             differentiability mean graphically. Continuity is the more intuitive\r                             concept: You don’t need to take your pencil off the page to trace the\r                             graph where it is continuous. This means you can immediately eliminate\r                             (C) and (D). Next, recall that the derivative of a function at a point\r                             corresponds to the slope of the tangent line to the graph at that point.\r                             There is no tangent line to the function at the point where <em>x</em> = 2 (because there is a sharp\r                                 corner), but there is a tangent line at every other point.\r                             From this, you can eliminate (A), leaving (B) as the correct answer.\r                             Careful—don’t be fooled into thinking that <em>f′</em>(2) = 0 just because the graph has a minimum\r                             there. It would have to be differentiable there too, and it is\r                             not."
            },
            {
                "id": "ap-topic-calcbc-power-series-q5",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>The position vector for a\r                             particle moving in the <em>xy</em>-plane is given by\r                             <img src=\"images/9b98d7ed46974076bb8d84bba0b21f22.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. What is the velocity vector of the particle at time <em>t</em> =\r                             4 ?</p>",
                "options": [
                    "<img src=\"images/1e8b63298b274938a4c2e6496047619c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/4aefdeab8f824acf9becf5a4ffc00187.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/02cdcfc222684aa88131791d491c6b64.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/b52b732c3b5848d9b9a9a4893c10b068.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong>  <p>Velocity is the\r                                 derivative of position, so you differentiate each part of\r                                     <em>p</em>(<em>t</em>) and evaluate each of them at <em>t</em> = 4.</p> <p><img src=\"images/fe93369653d7462dabb424b6ae2a3bea.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Hence,\r                                 (A) is the correct answer.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q6",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>The\r                             derivative of\r                             <img src=\"images/ff1667e8f28c4723a0f59d2622e6ed6f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">  is given by which of the following?</p>",
                "options": [
                    "<img src=\"images/0c573824eaa34f6899c0148f564f2b15.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/bc1a140cb62b4605b1890fe452e586b9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/809d746cd1544638ad6bb93e7b345e3c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/1201e4996643479e9b693623ba367a9c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong>  <p>The function is a\r                                 quotient that can’t be simplified, so use the quotient rule: <img src=\"images/b1055777d7d34a0ea54bf49aac6aedda.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> (<em>t</em> stands for \"top\" and\r                                 <em>b</em> stands for \"bottom\"). The top is a product, so you’ll\r                                 also need to use the product rule. For <img src=\"images/ca737ef32fa840d08ede98e06805e2e4.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, the derivative is:</p> <p><img src=\"images/676b7eadf97c4d08be6329e525af163f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s a perfect match\r                                 for (B).</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q7",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Which of the following\r                             series are convergent only for –1 ≤ <em>x</em> <\r                             1 ?</p>",
                "options": [
                    "I only",
                    "II only",
                    "I and II only",
                    "I and III only"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong>  <p>Using the ratio test,\r                                 you can find that all three series converge for –1 < <em>x</em> < 1. Test the\r                                 endpoints of the interval on each series:</p>   <p><em>x</em> = 1:   <img src=\"images/320e43fa6e024a8bba60dbade1fd03a7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> diverges because it is a <em>p</em>-series,\r                                                   <img src=\"images/112ecf899e1f41efa224ed735737f8bc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">    <em>x</em> = –1:   <img src=\"images/ff34e8716a6449f28abc71f502153c36.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges because of the alternating\r                                                   series test.   Therefore, –1 ≤\r                                                   <em>x</em> < 1.</p>   <p><em>x</em> = 1:   <img src=\"images/c10dfae056da459f83d1c429f2322ff7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> diverges because it is the harmonic\r                                                   series.   <em>x</em> = –1:   <img src=\"images/30ee3995d1fc4e978f3f8c872578e714.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges because it is the alternating\r                                                   harmonic series.   Therefore, –1 ≤\r                                                   <em>x</em> < 1.</p>   <p><em>x</em> = 1:   <img src=\"images/7127489988d348b9aa63e709512613fe.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges because it is a <em>p</em>-series,\r                                                   <em>p</em> = 2 >\r                                                   1.   <em>x</em> = –1:   <img src=\"images/27dbd627b29f48b49a795cc4953f46bb.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges because it is absolutely\r                                                   convergent.   Therefore, –1 ≤\r                                                   <em>x</em> ≤ 1. Because the series\r                                                   converges at the endpoint <em>x</em> = 1 , III\r                                                   exceeds the range given in the problem and cannot\r                                                   be included as a correct answer. Hence, (C) is the\r                                                   correct answer.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q8",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>If\r                             <img src=\"images/2c65310aa2cd46aa8722a485b71e6e9d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             converges and 0 < <em>a<sub>k</sub></em>\r                             < <em>b<sub>k</sub></em> for all <em>k</em>, then which of the\r                             following statements is false?</p>",
                "options": [
                    "<img src=\"images/8a6831e572a74184b30bac15128ecf1e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/51cd66fd851c4825869f9c777e123145.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             converges",
                    "<img src=\"images/d882a45445624b72a32de3d1edea1ff9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             converges",
                    "<img src=\"images/983b4bcb5156424792e7ac78d9707157.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             diverges"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong>  <p><img src=\"images/dcca4093ed674d718ec097ee1bfa638d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> must converge by the basic comparison test. All the other\r                                 statements are true. Hence, (D) is the correct answer.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q9",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><p><img src=\"images/chapter31_bc_pt2_25.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></div><p>Which of the differential\r                             equations below could be used to model the logistic growth shown in the\r                             graph?</p>",
                "options": [
                    "<img src=\"images/52a22f21bf584f74bb2b5b3b69d9f3f1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/691eddbf206e4e56b8d3bbca29f41e42.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/475b6efcdd0c42b5bf4bca3d61b2d97a.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/b7f01db3320b40eeac6f9c281c3c8a1a.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong>  <p>Factoring each of the\r                                 choices, the only one that results in a logistic differential\r                                 equation with horizontal asymptotes at <em>P</em> = 0 and <em>P</em> =\r                                     20 is</p> <p><img src=\"images/f88e1f0f348148218d14e3d833c24252.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.</p> <p>Remember, your zeros\r                                 here correspond to regions where the slope of the given curve is\r                                 zero, or flat. Thus, (D) is correct.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q10",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>If <em>x</em><sup>2</sup> – <em>xy</em> +\r                             <em>y</em><sup>3</sup> = 8, then\r                             <img src=\"images/1a0f2011795e407ebdbb9f0fbf86381e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "<img src=\"images/6edc4f7e0dab418e8b638d178869be4b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/2a29b66441ff440f8f3e1f2bcf523ff9.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/4476e25eb0684678987d423e0eaa5031.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/e60dceeebbcd4f8f9982f234ed9a11dd.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong>  <p>Because the equation is\r                                 not already written in terms of <em>y</em> (or easily solvable\r                                 for <em>y</em>), use implicit differentiation. Don’t forget to\r                                 multiply by <img src=\"images/35b24886817a43868b687aca3b785eba.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> when you take the derivative of <em>y</em>. Also, use the\r                                 product rule when differentiating the second term. The derivative\r                                 is:</p> <p><img src=\"images/d899678c1ec04ad488e841ab54193165.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Next, separate the terms\r                                 that include <img src=\"images/fcc2834c0735476291cfce2db97bdc4c.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> from those that don’t and then solve for <img src=\"images/649578c5a4144cdf9fab8ba67590dba8.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">:</p> <p><img src=\"images/08b29de73f6a4fb389120fcc9cbcd118.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s (D).</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q11",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Consider\r                             the function <em>f</em>(<em>x</em>) =\r                             <em>x</em><sup> 2</sup> sin <em>$\\pi$</em><em>x</em> – 3<em>x.</em>\r                             Which of the following is a linear approximation to <em>f</em> at <em>x</em> = 1 ?</p>",
                "options": [
                    "<em>f</em>(<em>x</em>) = (2<em>x</em> sin <em>$\\pi$</em><em>x</em> +\r                             <em>x</em><sup>2</sup><em>$\\pi$</em> cos <em>$\\pi$</em><em>x</em> – 3)<em>x</em> –\r                             1",
                    "<em>f</em>(<em>x</em>) = –<em>x</em> – 1",
                    "<em>f</em>(<em>x</em>) = –<em>$\\pi$</em><em>x</em> + <em>$\\pi$</em>",
                    "<em>f</em>(<em>x</em>) = (–<em>$\\pi$</em> – 3)<em>x</em> + <em>$\\pi$</em>"
                ],
                "answer": "D",
                "explanation": "<strong>D</strong>  <p>The tangent line to the\r                                 function at the given point provides a linear approximation to the\r                                 function at that point, so start by finding the first derivative and\r                                 evaluating it at <em>x</em> = 1. This gives you the slope of the\r                                 tangent line:</p> <p><img src=\"images/f76bd067666745f0b1ec18ad9067b751.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Now, don’t do more work\r                                 than is needed to obtain the correct solution—because the answer\r                                 choices all have different slopes (the coefficient of <em>x</em>), it\r                                 suffices to know the slope of the tangent line at <em>x</em> = 1. In other words, finding\r                                     <em>f′</em>(1) = –<em>$\\pi$</em> – 3\r                                 allows you to find the correct answer, which is (D).</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q12",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>The\r                             function <img src=\"images/a5c3805a3b75422e81ad275d1d1b4265.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> has asymptotes at which of the following?</p>",
                "options": [
                    "A horizontal asymptote at\r                             <em>y</em> = 3 and a vertical asymptote at <em>x</em> = 0",
                    "A horizontal asymptote at\r                             <em>y</em> = 0 and a vertical asymptote\r                             at <em>x</em> = 3",
                    "A horizontal asymptote at\r                             <em>y</em> = 0 and a vertical asymptote\r                             at <em>x</em> = 0",
                    "A horizontal asymptote at\r                             <em>x</em> = 3 and a vertical asymptote\r                             at <em>y</em> = 0"
                ],
                "answer": "A",
                "explanation": "<strong>A</strong>  <p>Vertical asymptotes are\r                                 typically easier to find, so start with those. Vertical asymptotes\r                                 occur when the denominator of a rational function is zero: <img src=\"images/ce457121ed8b4918a589129767b97a24.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> is a vertical asymptote; eliminate (B) and (D). The\r                                 horizontal asymptote, by definition, is the limit of the function as\r                                     <em>x</em> tends to infinity, so imagine plugging in a huge value:\r                                     <img src=\"images/963ca4d541994a7fa00bd5d1c9aa24a3.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, so <em>y</em> = 3 is the horizontal asymptote. Thus, (A)\r                                 is correct.</p> <p>Note that if this\r                                 question were in the calculator section of the test, you could graph\r                                 the function to find the asymptotes:</p> <p><img src=\"images/chapter28_ch28_figure_text_un550.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q13",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Which of the following\r                             series converge?</p>",
                "options": [
                    "II only",
                    "III only",
                    "I and II only",
                    "I and III only"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong>    <p><img src=\"images/882b65f047124f34a9871f19fb72edfc.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p><img src=\"images/9f7a466f59404b289f0cd6342add3e04.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges: <em>p</em>-series, <em>p</em> = 2 > 1. Therefore <img src=\"images/d7294572e94c47c8b20fec701a551476.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> converges by the basic comparison test.</p>   <p><img src=\"images/083765a167eb404b83698d9fe46d6136.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>is a convergent\r                                         geometric series because <img src=\"images/58bf06380c2546fe9750ff152b986107.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.</p>   <p><img src=\"images/ad2cb5c62d2641988f42187b585aabe7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> Let <img src=\"images/2aefad7f5127493ea6c7a68d3ed1c9c4.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> and let <img src=\"images/a2877175447946c9bfb8f4ecab8e40eb.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> <img src=\"images/1b0baf66207245f98642c1da9d6af7e2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> is the harmonic series and therefore diverges.</p> <p><img src=\"images/d81b47f6139a41c5ba3141ccff50779f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.</p> <p>Therefore <img src=\"images/ae2dbe6d54224ba0bd246de260a6b717.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> diverges by the limit comparison test. Hence, (C) is\r                                         the correct answer.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q14",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><p><img src=\"images/724e14d9c6c54c93b7565761c5009008.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></div><p>Given the function\r                             <em>f</em> above, which of the following statements is a conclusion of the\r                             mean value theorem?</p>",
                "options": [
                    "There exists <em>c</em> in\r                             (1, 4) such that\r                             <img src=\"images/630400e859ee4cbf927936cec62edc87.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.",
                    "There exists <em>c</em> in\r                             (0, 1) such that\r                             <img src=\"images/d243638872834bb686265bbb37b39b4e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">.",
                    "There exists <em>c</em> in\r                             (0, 1) such that <em>f′</em>(<em>c</em>) =\r                             3.",
                    "There exists <em>c</em> in\r                             (1, 4) such that <em>f′</em>(<em>c</em>) =\r                             3."
                ],
                "answer": "A",
                "explanation": "<strong>A</strong>  <p>The mean value theorem\r                                 says, in essence, that in a given interval, there is some point such\r                                 that the derivative of the function at that point equals the slope\r                                 of the secant whose endpoints correspond to the endpoints of the\r                                 interval. So you don’t actually need to find the derivative of\r                                     <em>f</em>. Rather, just start going down the list of answer\r                                 choices. The slope of the secant in (A) and (D) is:</p> <p><img src=\"images/a5ed0556633d43b19c30295c4c1cdbb1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (D) can be\r                                 eliminated and (A) looks like the right choice. For (B) and (C), the\r                                 slope of the secant is:</p> <p><img src=\"images/d42466c8dcce44e088d2b723475ec5b5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Neither (B) nor (C)\r                                 gives 1 as a possible value of <em>f′</em>(<em>c</em>), so you can\r                                 eliminate them. The only viable answer is (A).</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q15",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>If <img src=\"images/ebff40ff81ef464d85228151105d199e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">, then <img src=\"images/66d84c4322f4410d9ba8346ade08cd17.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "<img src=\"images/49f87f544f1f4241a132986c5180e3ea.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/040247a075624e2384158cf726416fa4.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/81b4ee7dc7f34586914aa849edfe2cf1.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/f25d5fcc17574c389e4b0addf0d4c7f7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong>  <p>Rather than having to\r                                 use both the chain rule and the quotient rule, simplify the function\r                                 using rules of logs first:</p> <p><img src=\"images/87f9fd8fdb3d470896a77b078fd90954.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Here, the function can\r                                 be written as:</p> <p><img src=\"images/8bd3881232494672a9eb07cbabe70040.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Now use rules of\r                                 derivatives (don’t forget the chain rule if it applies) to\r                                 differentiate the function: <img src=\"images/635f298688ed42d6a787690cc98436f2.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">. The result is:</p> <p><img src=\"images/36e5c86b9948440d800c668bbdb5932f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (B) is\r                                 correct.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q16",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>A\r                             self-storage company wants to construct a rectangular storage unit\r                             with a base length\r                             3 times the base width. The material used to build the\r                             top and bottom of the unit costs \\$10 per square meter and\r                             the material used to build the sides costs \\$6 per square meter. If the\r                             storage unit must have a volume of 50 cubic meters, what width will\r                             minimize the cost to build the unit?</p>",
                "options": [
                    "<img src=\"images/7a323e5c56fa454cb4b12c3b91f128ed.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/d4e50eabb8624a4dafbb09bebea58e2b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/57359e90bffc450c9e206654d8d796f7.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/c714e041c1864bf68998d2d79ded2c66.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong>  <p>Start with a quick\r                                 sketch:</p> <p><img src=\"images/chapter24_pt2_q16_a_e.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>You want to minimize the\r                                 cost of the materials subject to the constraint that the volume must\r                                 be 50 cubic meters. The cost for each side is just the area of that\r                                 side times the corresponding cost. The two functions are\r                                 therefore:</p> <p><p><img src=\"images/d700add87a6e4191b7ad48c574c8887b.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></p> <p>Next, solve the\r                                 constraint for one of the variables and plug this into the cost. It\r                                 is easier to solve the constraint\r                                     for <em>h</em>, so do that\r                                 (besides, you’re looking for the width, so it would be ideal if you\r                                 can keep the <em>w</em>):</p> <p><img src=\"images/846f5eb14af24714904a32dbfcf05849.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>To\r                                     minimize <em>C</em>, you need to find the values of\r                                 <em>w</em> for which <em>C'</em> is either 0 or does not\r                                 exist. Find <em>C'</em>:</p> <p><img src=\"images/4515dd4f2458470da8d220aa842c405d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p><em>C'</em> is\r                                 undefined at <em>w</em> = 0, but this answer doesn’t make sense\r                                 in the given context, so set <em>C'</em> equal to 0 and solve for\r                                     <em>w</em>:</p> <p><img src=\"images/bd26e8a6ed0e4b89b8e2cbbb22fb3087.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>That’s (B).</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q17",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<div class=\"passage-box\" style=\"background:rgba(124,58,237,0.06); border-left:4px solid #7c3aed; padding:12px 16px; border-radius:8px; margin-bottom:14px;\"><p><img src=\"images/9f6535ff3c6c458aa2faa8f47d68b186.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p></div><p>For the\r                             piecewise function <em>f</em> defined above, what is the value of <img src=\"images/d22eec6db52e4d05af216d878557e54d.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> ?</p>",
                "options": [
                    "10",
                    "42",
                    "47",
                    "60"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong>  <p>To evaluate a definite\r                                 integral for a piecewise function, split the integral into parts\r                                 using the “for <em>x</em> = …” pieces of the function’s\r                                 definition. Here, split the integral at 3 to get:</p> <p><img src=\"images/7b231c9b76bc469abaf33609aa741efa.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Next, evaluate each of\r                                 the definite integrals and add the results:</p> <img src=\"images/55f80ad8f33b4d1fa61381a43e7db524.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"> <p>Thus, (B) is\r                                 correct.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q18",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>An\r                             equivalent representation of the definite integral\r                             <img src=\"images/6898c3d49e3c46b6b11d43edbd520f52.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">\r                             is</p>",
                "options": [
                    "<img src=\"images/c7bb25dcfab1494687773e908b8f8205.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/dc8f2f66393047f6b61e2f1d8da45f2a.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/ae13ce65ca534e919010fe9561c47665.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/05e5765cfc8f44ca92077e0d523af695.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong> \r                             This is an exercise in the correct application of <em>u</em>-substitution\r                             in a definite integral. When doing a <em>u</em>-substitution, the most\r                             important thing is that the <em>du</em> part can be found within the\r                             integrand. Here, if <em>u</em> =\r                                     <em>x</em><sup>2</sup>, then <em>du</em> = 2<em>x dx</em>, which is indeed part of the\r                             integrand. This means the integral can be written as <img src=\"images/e83234c3e890499bbda610809fea91c5.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"><em></em>, and you can eliminate (D). Next, find the new limits of\r                             integration: The original limits are in terms of <em>x</em>. Now you are\r                             differentiating with respect to <em>u</em>, so the new limits should\r                             reflect this. Plug the original limits for <em>x</em> into the expression\r                                 <em>u</em> = <em>x </em><sup>2</sup> to\r                             get the new limits, 1 and 9, and the correct answer follows, which is\r                             (C)."
            },
            {
                "id": "ap-topic-calcbc-power-series-q19",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p>Let\r                             <img src=\"images/a22135257b5247d794ab8628189f4ba0.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Let <em>P</em>(<em>x</em>) be a\r                             second degree Taylor polynomial for <em>f</em> centered at <em>x</em><sub>0</sub> = –1 . Find a formula\r                             for <em>P</em>(<em>x</em>) .</p>",
                "options": [
                    "<em>P</em>(<em>x</em>) = 5(<em>x</em> + 1) + 5(<em>x</em> +\r                             1)<sup>2</sup>",
                    "<em>P</em>(<em>x</em>) = –10(<em>x</em> + 1) + 7(<em>x</em> +\r                             1)<sup>2</sup>",
                    "<em>P</em>(<em>x</em>) = –10(<em>x</em> + 1) + 14(<em>x</em> +\r                             1)<sup>2</sup>",
                    "<em>P</em>(<em>x</em>) = –11(<em>x</em> + 1) + 14(<em>x</em> +\r                             1)<sup>2</sup>"
                ],
                "answer": "B",
                "explanation": "<strong>B</strong>  <p>Because</p> <p><img src=\"images/76630d0144b14d67a6b867f860f7b347.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">,</p> <p>then <em>f</em>(–1) = 0.</p> <p><em>f′</em>(<em>x</em>) = (3<em>x</em><sup>4</sup> –\r                                         5<em>x</em><sup>2</sup> + 7)·2<em>x</em> =\r                                         6<em>x</em><sup>5</sup> – 10<em>x</em><sup>3</sup> +\r                                         14<em>x</em>, and <em>f</em>(–1) =\r                                     –10.</p> <p><em>f″</em>(<em>x</em>) = 30<em>x</em><sup>4</sup> –\r                                         30<em>x</em><sup>2</sup> + 14, and <em>f″</em>(–1) = 14.</p> <p>Therefore,</p> <p><img src=\"images/d56f7de0a57a4f36a3a318515b18a0ca.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Therefore, (B) is the\r                                 correct answer.</p>"
            },
            {
                "id": "ap-topic-calcbc-power-series-q20",
                "topic": "Power Series",
                "difficulty": "medium",
                "question": "<p><img src=\"images/af511e1d2baf4e8298482c5129d65627.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p>",
                "options": [
                    "<img src=\"images/17a939aae98b46c699a5878007b81b21.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/f7f885ee2c304e7d8d1ef66529231449.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "<img src=\"images/cda9c7db4dbe41e9bbea32995c9e093f.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\">",
                    "8"
                ],
                "answer": "C",
                "explanation": "<strong>C</strong>  <p>Look for a way to write\r                                 both the numerator and denominator as a power of <em>k</em>, then use\r                                 the formula for the sum of an infinite geometric series to\r                                 evaluate.</p> <p><img src=\"images/a21cbb06f1e74be18a02006e615cfa45.png\" class=\"exam-img\" style=\"max-width:100%; vertical-align:middle; margin:4px 0;\"></p> <p>Thus, (C) is the correct\r                                 answer.</p>"
            }
        ]
    }
};
