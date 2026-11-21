// Specific Question Bank for Test: ap-mock-macro-full-1
const AP_TEST_DATA = {
    "ap-mock-macro-full-1": {
        "id": "ap-mock-macro-full-1",
        "title": "AP Macroeconomics Full-Length Practice Exam 1",
        "subtitle": "Official 63-Question AP Simulation: 60 MCQs (70 min) + 3 FRQs (60 min) | Total 130 min",
        "timeLimitMinutes": 130,
        "duration": 130,
        "totalQuestions": 63,
        "questionsCount": 63,
        "testType": "Full Mock Exam",
        "subject": "AP Macroeconomics",
        "category": "History & Social",
        "level": "Full Mock",
        "sections": [
            {
                "id": "sec1",
                "title": "Section I: Multiple Choice Questions (60 MCQs)",
                "timeMinutes": 70
            },
            {
                "id": "sec2",
                "title": "Section II: Free Response Questions (3 FRQs, 20 marks)",
                "timeMinutes": 60
            }
        ],
        "questions": [
            {
                "id": "ap-mock-macro-full-1_q1",
                "topic": "GDP Calculation Expenditure Approach",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "In an economy, $C = 600$, $I = 150$, $G = 200$, $\\text{Exports} = 80$, and $\\text{Imports} = 100$. What is the Gross Domestic Product ($GDP$)?",
                "options": [
                    "900",
                    "930",
                    "1,030",
                    "1,130"
                ],
                "answer": "B",
                "explanation": "Under the expenditure approach: $$GDP = C + I + G + (X - M) = 600 + 150 + 200 + (80 - 100) = 950 - 20 = 930.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q2",
                "topic": "Net Domestic Product (NDP)",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Using the economy from Question 1 ($GDP = 930$), if depreciation (consumption of fixed capital) equals 50, Net Domestic Product ($NDP$) is:",
                "options": [
                    "880",
                    "900",
                    "930",
                    "980"
                ],
                "answer": "A",
                "explanation": "$$NDP = GDP - \\text{Depreciation} = 930 - 50 = 880.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q3",
                "topic": "Real GDP Growth & Deflator",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In Year 1, real GDP is 1,000 (base year). In Year 2, nominal GDP is 1,155 and the GDP deflator is 105. What is the real GDP growth rate from Year 1 to Year 2?",
                "options": [
                    "5.0%",
                    "10.0%",
                    "15.5%",
                    "5.5%"
                ],
                "answer": "B",
                "explanation": "Calculate Year 2 Real GDP: $$\\text{Real GDP}_{Y2} = \\frac{\\text{Nominal GDP}}{\\text{Deflator} / 100} = \\frac{1,155}{1.05} = 1,100.$$ $$\\text{Growth Rate} = \\frac{1,100 - 1,000}{1,000} \\times 100\\% = \\frac{100}{1,000} \\times 100\\% = 10.0\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q4",
                "topic": "CPI & Inflation Rate Calculation",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "The market basket cost was $400 in the base year. Last year it cost $440 (CPI = 110), and this year it costs $460. The inflation rate this year is approximately:",
                "options": [
                    "4.5%",
                    "5.0%",
                    "15.0%",
                    "4.0%"
                ],
                "answer": "A",
                "explanation": "This year's CPI: $$CPI_{this\\_year} = \\frac{460}{400} \\times 100 = 115.$$ Inflation rate: $$\\text{Inflation Rate} = \\frac{CPI_{this} - CPI_{last}}{CPI_{last}} \\times 100\\% = \\frac{115 - 110}{110} \\times 100\\% = \\frac{5}{110} \\times 100\\% \\approx 4.55\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q5",
                "topic": "Unemployment Rate & Discouraged Workers",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "Working-age population is 1,000; labor force is 700; employed is 644. If 20 unemployed workers become discouraged and abandon their job search, the new official unemployment rate is approximately:",
                "options": [
                    "8.0%",
                    "5.3%",
                    "3.0%",
                    "7.4%"
                ],
                "answer": "B",
                "explanation": "Initially, unemployed $= 700 - 644 = 56$. When 20 workers become discouraged, they leave the labor force. New unemployed $= 56 - 20 = 36$. New labor force $= 700 - 20 = 680$. $$\\text{New Unemployment Rate} = \\frac{36}{680} \\times 100\\% \\approx 5.29\\% \\approx 5.3\\%.$$ (The unemployment rate paradoxically falls even though no new jobs were created.)"
            },
            {
                "id": "ap-mock-macro-full-1_q6",
                "topic": "Types of Unemployment",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "An automotive assembly worker is laid off when advanced robotics permanently replace her assembly tasks, requiring her to undergo comprehensive technical retraining. This is an example of:",
                "options": [
                    "Frictional unemployment",
                    "Structural unemployment",
                    "Cyclical unemployment",
                    "Seasonal unemployment"
                ],
                "answer": "B",
                "explanation": "Structural unemployment occurs when a fundamental mismatch exists between the skills of job seekers and the requirements of available jobs, frequently caused by technological advancements."
            },
            {
                "id": "ap-mock-macro-full-1_q7",
                "topic": "Natural vs Cyclical Unemployment",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "If an economy's actual unemployment rate is 7% and its natural rate of unemployment ($NRU$) is 5%, what is the cyclical unemployment rate?",
                "options": [
                    "12%",
                    "7%",
                    "5%",
                    "2%"
                ],
                "answer": "D",
                "explanation": "$$\\text{Cyclical Unemployment} = \\text{Actual Unemployment} - \\text{Natural Rate} = 7\\% - 5\\% = 2\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q8",
                "topic": "Ex-Ante vs Ex-Post Real Interest Rates",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "The nominal interest rate is 8%. Expected inflation is 3%, but actual inflation turns out to be 5%. What are the ex-ante (expected) real interest rate and ex-post (actual) real interest rate?",
                "options": [
                    "5% and 3%",
                    "3% and 5%",
                    "11% and 13%",
                    "5% and 5%"
                ],
                "answer": "A",
                "explanation": "Fisher equation: $r = i - \\pi$. Expected (ex-ante) real rate $= 8\\% - 3\\% = 5\\%$. Actual (ex-post) real rate $= 8\\% - 5\\% = 3\\%$. Higher-than-expected inflation redistributes wealth from lenders to borrowers."
            },
            {
                "id": "ap-mock-macro-full-1_q9",
                "topic": "Balanced Budget Multiplier",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "The government simultaneously increases both government purchases ($G$) and lump-sum taxes ($T$) by $50. If the Marginal Propensity to Consume ($MPC$) is 0.8, real GDP will:",
                "options": [
                    "Fall by $50",
                    "Remain unchanged",
                    "Rise by $50",
                    "Rise by $250"
                ],
                "answer": "C",
                "explanation": "$\\text{Spending Multiplier} = \\frac{1}{1 - 0.8} = 5$. Impact of $G$: $+5 \\times 50 = +250$. $\\text{Tax Multiplier} = -\\frac{MPC}{MPS} = -\\frac{0.8}{0.2} = -4$. Impact of $T$: $-4 \\times 50 = -200$. Net change in real GDP $= +250 - 200 = +\\$50$. The balanced budget multiplier is always 1."
            },
            {
                "id": "ap-mock-macro-full-1_q10",
                "topic": "Closing Recessionary Gap with Spending",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Potential full-employment output is $2,000 billion; current equilibrium real output is $1,850 billion; and $MPC = 0.75$. To close this recessionary gap, government purchases ($G$) must increase by:",
                "options": [
                    "$37.5 billion",
                    "$50.0 billion",
                    "$112.5 billion",
                    "$150.0 billion"
                ],
                "answer": "A",
                "explanation": "Output gap $= 2,000 - 1,850 = \\$150$ billion. $\\text{Spending Multiplier} = \\frac{1}{1 - 0.75} = \\frac{1}{0.25} = 4$. $$\\Delta G = \\frac{\\text{Gap}}{\\text{Multiplier}} = \\frac{150}{4} = \\$37.5 \\text{ billion}.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q11",
                "topic": "Closing Inflationary Gap with Taxes",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Current output is $2,200 billion; potential output is $2,000 billion; and $MPC = 0.8$. To eliminate this inflationary gap using lump-sum taxes, the government should:",
                "options": [
                    "Increase taxes by $40 billion",
                    "Increase taxes by $50 billion",
                    "Decrease taxes by $50 billion",
                    "Increase taxes by $200 billion"
                ],
                "answer": "B",
                "explanation": "Inflationary gap $= 2,200 - 2,000 = +\\$200$ billion (requires $\\Delta Y = -200$). Tax multiplier $= -\\frac{MPC}{MPS} = -\\frac{0.8}{0.2} = -4$. $$\\Delta T = \\frac{\\Delta Y}{\\text{Tax Multiplier}} = \\frac{-200}{-4} = +\\$50 \\text{ billion}.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q12",
                "topic": "Automatic Stabilizers",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Which of the following functions as an automatic stabilizer in an economy during an economic downturn?",
                "options": [
                    "A new infrastructure stimulus package enacted by the legislature",
                    "A progressive income tax system, which automatically collects less revenue as national income falls",
                    "The Federal Reserve reducing the discount rate",
                    "A temporary one-time tax rebate check"
                ],
                "answer": "B",
                "explanation": "Automatic stabilizers operate continuously without discretionary legislative action. Progressive taxes cushion contractions because tax liabilities drop faster than personal income, mitigating reductions in disposable income."
            },
            {
                "id": "ap-mock-macro-full-1_q13",
                "topic": "Government Deficits & Crowding Out",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A government budget deficit financed by selling bonds in the loanable funds market will most likely:",
                "options": [
                    "Lower real interest rates and stimulate private investment",
                    "Raise real interest rates and reduce private capital investment (crowding out)",
                    "Shift the supply of loanable funds to the right",
                    "Leave market interest rates unaffected"
                ],
                "answer": "B",
                "explanation": "Government borrowing increases demand for loanable funds, shifting $D_{LF}$ rightward and raising the equilibrium real interest rate. The higher borrowing cost discourages private firms from investing in capital goods (crowding out)."
            },
            {
                "id": "ap-mock-macro-full-1_q14",
                "topic": "Long-Run Self-Correction Mechanism",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "An economy is in long-run equilibrium when Aggregate Demand ($AD$) decreases. Assuming nominal wages are flexible, in the long run compared with the original equilibrium:",
                "options": [
                    "Price level is lower, and real GDP is the same",
                    "Price level is lower, and real GDP is lower",
                    "Price level is the same, and real GDP is lower",
                    "Price level is higher, and real GDP is the same"
                ],
                "answer": "A",
                "explanation": "In the short run, lower AD decreases output and prices, causing a recessionary gap. In the long run, high unemployment drives nominal wages down. Falling input costs shift $SRAS$ to the right until output returns to potential GDP ($Y_f$) at a permanently lower price level."
            },
            {
                "id": "ap-mock-macro-full-1_q15",
                "topic": "Supply Shock & Stagflation",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "A sharp, unexpected increase in global crude oil prices will most likely:",
                "options": [
                    "Shift SRAS right, lowering the price level",
                    "Shift SRAS left, causing a higher price level and lower real GDP (stagflation)",
                    "Shift Aggregate Demand rightward",
                    "Shift Long-Run Aggregate Supply rightward"
                ],
                "answer": "B",
                "explanation": "Oil is a vital production input. An adverse supply shock raises production costs nationwide, shifting $SRAS$ leftward. This simultaneously raises the price level (cost-push inflation) and decreases real output, producing stagflation."
            },
            {
                "id": "ap-mock-macro-full-1_q16",
                "topic": "Interest-Rate Effect of AD",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Which statement best explains the downward slope of the Aggregate Demand curve via the interest-rate effect?",
                "options": [
                    "A higher price level increases transaction demand for money, raising interest rates and reducing investment and consumer spending",
                    "A lower price level reduces the real purchasing power of accumulated wealth",
                    "A higher price level makes domestic exports cheaper in foreign markets",
                    "A higher price level directly triggers automatic increases in federal government spending"
                ],
                "answer": "A",
                "explanation": "When the price level rises, households and firms require more money to execute daily transactions ($MD \\uparrow$). In the money market, this bids up the nominal interest rate, which in turn reduces interest-sensitive investment and consumption expenditures, lowering real quantity of output demanded."
            },
            {
                "id": "ap-mock-macro-full-1_q17",
                "topic": "Quantity Theory of Money",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In the equation of exchange ($MV = PY$), $M = 200$, $V = 5$, and real output $Y = 500$, so the price level $P = 2.0$. If the money supply ($M$) increases to 240 while velocity ($V$) and real output ($Y$) remain constant, the new price level is:",
                "options": [
                    "2.0",
                    "2.2",
                    "2.4",
                    "2.8"
                ],
                "answer": "C",
                "explanation": "$$MV = PY \\implies (240 \\times 5) = P \\times 500 \\implies 1,200 = 500P \\implies P = \\frac{1,200}{500} = 2.4.$$ A 20% increase in the money supply (from 200 to 240) produces an exact 20% increase in the price level (from 2.0 to 2.4)."
            },
            {
                "id": "ap-mock-macro-full-1_q18",
                "topic": "Fractional Reserve Banking Expansion",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A commercial bank holds deposits of $10,000, actual reserves of $2,500, and the required reserve ratio is 20%. Assuming no cash leakages into public currency, what is the maximum potential increase in checkable deposits for the banking system?",
                "options": [
                    "$500",
                    "$1,000",
                    "$2,500",
                    "$10,000"
                ],
                "answer": "C",
                "explanation": "Required reserves $= 0.20 \\times 10,000 = 2,000$. Excess reserves $= 2,500 - 2,000 = 500$. The simple money multiplier is $\\frac{1}{0.20} = 5$. $$\\text{Max Potential Increase} = \\text{Excess Reserves} \\times \\text{Multiplier} = 500 \\times 5 = \\$2,500.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q19",
                "topic": "Open Market Purchase & Money Supply",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "The Federal Reserve purchases $100 million in Treasury bonds directly from commercial banks. If the required reserve ratio is 10%, the maximum potential increase in the money supply is:",
                "options": [
                    "$100 million",
                    "$900 million",
                    "$1,000 million",
                    "$10 million"
                ],
                "answer": "C",
                "explanation": "When the central bank buys bonds from commercial banks, the entire $\\$100$ million becomes new excess reserves in the banking system. With a money multiplier of $\\frac{1}{0.10} = 10$, the maximum increase in the money supply is $100 \\times 10 = \\$1,000$ million."
            },
            {
                "id": "ap-mock-macro-full-1_q20",
                "topic": "Money Market Price Level Shift",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In the money market, an increase in the aggregate price level will:",
                "options": [
                    "Shift money supply to the left",
                    "Shift money demand to the right, raising the equilibrium nominal interest rate",
                    "Shift money demand to the left",
                    "Lower the equilibrium nominal interest rate"
                ],
                "answer": "B",
                "explanation": "A higher price level means goods and services cost more dollars, increasing consumer and firm demand for cash transactions ($MD$ shifts right). Given a fixed money supply curve, the equilibrium nominal interest rate rises."
            },
            {
                "id": "ap-mock-macro-full-1_q21",
                "topic": "Ample Reserves Monetary Policy",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "Under an ample-reserves monetary framework, if the central bank raises the interest rate on reserve balances (IORB), commercial banks will most likely:",
                "options": [
                    "Lend out reserves more aggressively to businesses",
                    "Require higher interest rates on loans, causing the federal funds rate and market interest rates to rise",
                    "Lower lending rates across all commercial consumer credit lines",
                    "Liquidate excess reserve deposits"
                ],
                "answer": "B",
                "explanation": "Because banks can earn a guaranteed risk-free return by leaving funds on deposit at the central bank, they will not lend reserves to borrowers at rates below the IORB. Thus, raising the IORB establishes a higher floor that pulls the federal funds rate and broader market interest rates up."
            },
            {
                "id": "ap-mock-macro-full-1_q22",
                "topic": "Expected Inflation & Phillips Curve",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Starting from long-run equilibrium at the natural rate of unemployment, workers and businesses revise their expected inflation rate upward. The Short-Run Phillips Curve ($SRPC$):",
                "options": [
                    "Shifts downward to the left",
                    "Shifts upward to the right, while the Long-Run Phillips Curve ($LRPC$) remains unchanged",
                    "Becomes completely vertical",
                    "Causes the Long-Run Phillips Curve ($LRPC$) to shift to the right"
                ],
                "answer": "B",
                "explanation": "When expected inflation rises, workers negotiate higher nominal wages, increasing production costs and shifting $SRAS$ leftward. This shifts the entire $SRPC$ upward/rightward (higher inflation for every unemployment rate). The vertical $LRPC$ remains fixed at the natural rate of unemployment."
            },
            {
                "id": "ap-mock-macro-full-1_q23",
                "topic": "Monetary Expansion on the Phillips Curve",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "An expansionary monetary policy implemented during a recession moves the economy:",
                "options": [
                    "Along a given SRPC toward lower unemployment and higher inflation",
                    "Along a given SRPC toward higher unemployment and lower inflation",
                    "Along the vertical LRPC",
                    "To a permanently lower natural rate of unemployment"
                ],
                "answer": "A",
                "explanation": "Expansionary monetary policy increases aggregate demand ($AD \\uparrow$), which increases real output, lowers unemployment, and raises the price level. This results in an upward-leftward movement along the existing Short-Run Phillips Curve."
            },
            {
                "id": "ap-mock-macro-full-1_q24",
                "topic": "Loanable Funds & Private Saving",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "An autonomous increase in private household saving will, in the market for loanable funds:",
                "options": [
                    "Raise real interest rates and reduce business borrowing",
                    "Lower real interest rates and increase the equilibrium quantity of investment spending",
                    "Lower real interest rates and decrease total capital accumulation",
                    "Shift the demand for loanable funds to the right"
                ],
                "answer": "B",
                "explanation": "Increased saving shifts the supply of loanable funds curve to the right ($S_{LF} \\uparrow$), driving down the equilibrium real interest rate. Lower borrowing costs incentivize businesses to fund more capital investment projects."
            },
            {
                "id": "ap-mock-macro-full-1_q25",
                "topic": "Rule of 70",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Using the Rule of 70, how many years will it take for a nation's real GDP to double if it maintains a constant annual growth rate of 3.5%?",
                "options": [
                    "7 years",
                    "14 years",
                    "20 years",
                    "35 years"
                ],
                "answer": "C",
                "explanation": "$$\\text{Years to Double} \\approx \\frac{70}{\\text{Growth Rate}} = \\frac{70}{3.5} = 20 \\text{ years}.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q26",
                "topic": "Interest Rates & Exchange Rates",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "If domestic real interest rates in the United States rise relative to foreign interest rates, what is the most likely outcome?",
                "options": [
                    "The U.S. dollar depreciates, and U.S. net exports rise",
                    "The U.S. dollar appreciates, and U.S. net exports fall",
                    "The U.S. dollar appreciates, and U.S. net exports rise",
                    "The U.S. dollar depreciates, and U.S. net exports fall"
                ],
                "answer": "B",
                "explanation": "Higher U.S. interest rates attract international financial capital. Foreign investors demand U.S. dollars to buy dollar-denominated assets ($D_{\\$} \\uparrow$), causing the dollar to appreciate. An appreciated dollar makes U.S. exports more expensive abroad and foreign imports cheaper domestically, decreasing Net Exports ($NX \\downarrow$)."
            },
            {
                "id": "ap-mock-macro-full-1_q27",
                "topic": "Balance of Payments Accounts",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A country has a Current Account balance of −$200 billion. Assuming the official reserve capital account is zero, its Financial Account balance must be:",
                "options": [
                    "−$200 billion",
                    "$0",
                    "+$200 billion (net capital inflow)",
                    "+$400 billion"
                ],
                "answer": "C",
                "explanation": "By the Balance of Payments accounting identity: $\\text{Current Account} + \\text{Financial Account} = 0$. A trade/current account deficit of $\\-\\$200$ billion must be offset by a surplus of $+\\$200$ billion in the Financial Account (foreigners purchasing more domestic financial assets than domestic residents purchase abroad)."
            },
            {
                "id": "ap-mock-macro-full-1_q28",
                "topic": "Fiscal Policy Implementation Lags",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Which of the following is a primary operational limitation specific to discretionary fiscal policy?",
                "options": [
                    "It has zero influence over Aggregate Demand",
                    "Legislative and administrative delays (implementation lags) may cause stimulus to arrive after the recession has already ended",
                    "It is purely automatic and requires no congressional approval",
                    "It exerts zero influence on market interest rates"
                ],
                "answer": "B",
                "explanation": "Discretionary fiscal policy requires political debate and legislative passage (legislative lag) followed by operational execution (implementation lag). By the time stimulus funds are disbursed, the economy may have already recovered, potentially causing pro-cyclical inflationary pressure."
            },
            {
                "id": "ap-mock-macro-full-1_q29",
                "topic": "Debt-to-GDP Ratio",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "If a government's national debt increases by 3% in a year while nominal GDP grows by 5%, the national debt-to-GDP ratio will:",
                "options": [
                    "Rise",
                    "Fall",
                    "Remain unchanged",
                    "Fluctuate unpredictably"
                ],
                "answer": "B",
                "explanation": "The debt-to-GDP ratio has debt in the numerator and nominal GDP in the denominator. Because nominal GDP grows faster (5%) than the debt (3%), the fraction decreases, reducing the debt-to-GDP ratio."
            },
            {
                "id": "ap-mock-macro-full-1_q30",
                "topic": "Supply-Side Economics",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Supply-side economists contend that a reduction in marginal tax rates on business income and capital gains will:",
                "options": [
                    "Shift Aggregate Demand to the left",
                    "Increase Long-Run Aggregate Supply (LRAS) over time by strengthening incentives to save, invest, and innovate",
                    "Shift Short-Run Aggregate Supply to the left",
                    "Permanently raise cyclical unemployment"
                ],
                "answer": "B",
                "explanation": "Lower marginal tax rates on capital and labor increase the after-tax return on working, saving, and investing. This capital accumulation and productivity growth expand the economy's productive capacity, shifting $LRAS$ to the right."
            },
            {
                "id": "ap-mock-macro-full-1_q31",
                "topic": "Consumption & Saving Function",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A consumption function is $C = 100 + 0.8Y_d$. If real GDP is 1,000 and taxes are 200, total personal saving ($S$) is:",
                "options": [
                    "40",
                    "60",
                    "160",
                    "200"
                ],
                "answer": "B",
                "explanation": "Disposable income $Y_d = Y - T = 1,000 - 200 = 800$. Consumption: $$C = 100 + 0.8(800) = 100 + 640 = 740.$$ Personal saving: $$S = Y_d - C = 800 - 740 = 60.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q32",
                "topic": "Investment Demand Curve Shifters",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Which of the following will shift the investment demand curve to the right?",
                "options": [
                    "A decline in the real interest rate",
                    "Improved business confidence and optimistic expectations regarding future profitability",
                    "An increase in the real interest rate",
                    "A decrease in private household saving"
                ],
                "answer": "B",
                "explanation": "A change in the real interest rate represents a movement along the investment demand curve. Autonomous factors such as improved technological opportunities or bullish profit expectations shift the entire curve to the right."
            },
            {
                "id": "ap-mock-macro-full-1_q33",
                "topic": "Money Aggregates M1 and M2",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A consumer transfers $1,000 from a demand checking account into a savings deposit account. What is the immediate effect on M1 and M2?",
                "options": [
                    "M1 falls, and M2 is unchanged",
                    "M1 falls, and M2 falls",
                    "M1 rises, and M2 rises",
                    "Neither M1 nor M2 changes"
                ],
                "answer": "A",
                "explanation": "Checkable deposits are in M1, while savings accounts are in M2 (and M2 includes all of M1). Transferring money out of checking reduces M1 by $\\$1,000$. Because both components are counted in M2, total M2 remains unchanged."
            },
            {
                "id": "ap-mock-macro-full-1_q34",
                "topic": "CPI Measurement Biases",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "The Consumer Price Index (CPI) tends to slightly overstate the true inflation rate primarily because:",
                "options": [
                    "It uses a frequently updated, flexible market basket",
                    "It completely ignores housing and rental expenditures",
                    "It uses a fixed market basket and fails to fully account for consumer substitution, new products, and quality improvements",
                    "It includes business capital expenditures"
                ],
                "answer": "C",
                "explanation": "Because the CPI measures price changes in a fixed basket of goods, it ignores the fact that consumers substitute toward relatively cheaper goods when prices rise (substitution bias), and it struggles to separate price increases due to quality enhancements from pure inflation."
            },
            {
                "id": "ap-mock-macro-full-1_q35",
                "topic": "Policy Mix Interaction",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "Congress passes an expansionary tax cut while the Federal Reserve implements a contractionary interest-rate hike. Market interest rates will:",
                "options": [
                    "Fall; real output will rise",
                    "Rise; the net effect on real output is ambiguous",
                    "Fall; the net effect on real output is ambiguous",
                    "Rise; real output will definitely increase"
                ],
                "answer": "B",
                "explanation": "Expansionary fiscal policy increases borrowing (loanable funds demand rises, interest rates $\\uparrow$). Contractionary monetary policy reduces bank reserves (money supply shifts left, interest rates $\\uparrow$). Both policies push interest rates up unambiguously. However, fiscal policy shifts AD right while monetary policy shifts AD left, making the net effect on real output ambiguous."
            },
            {
                "id": "ap-mock-macro-full-1_q36",
                "topic": "Unanticipated Inflation Redistribution",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Unanticipated inflation creates an arbitrary redistribution of wealth that benefits:",
                "options": [
                    "Commercial lenders holding fixed-rate mortgages",
                    "Borrowers with fixed-rate debt contracts",
                    "Pensioners living on fixed nominal annuities",
                    "Holders of substantial cash balances"
                ],
                "answer": "B",
                "explanation": "When inflation turns out higher than anticipated, the dollars that debtors repay have less purchasing power than expected when the loan was initiated. Debtors gain at the direct expense of creditors."
            },
            {
                "id": "ap-mock-macro-full-1_q37",
                "topic": "Shoe-Leather Costs of Inflation",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Which of the following represents a classic economic cost of fully anticipated high inflation?",
                "options": [
                    "Unintended redistribution of wealth from lenders to borrowers",
                    "Shoe-leather costs (resources expended making frequent trips to financial institutions to minimize cash holdings)",
                    "An increase in the natural rate of unemployment",
                    "A reduction in nominal GDP"
                ],
                "answer": "B",
                "explanation": "Even if inflation is fully anticipated, high inflation rates cause money to rapidly lose purchasing power. Individuals reduce cash holdings by keeping funds in interest-bearing accounts and making frequent trips to the bank, wasting time and resources (shoe-leather costs)."
            },
            {
                "id": "ap-mock-macro-full-1_q38",
                "topic": "Taylor Rule Calculation",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "According to the standard Taylor Rule: $i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(\\text{Output Gap})$. If equilibrium real rate $r^* = 2\\%$, current inflation $\\pi = 4\\%$, target inflation $\\pi^* = 2\\%$, and output gap $= +2\\%$, the recommended policy rate is:",
                "options": [
                    "6%",
                    "7%",
                    "8%",
                    "9%"
                ],
                "answer": "C",
                "explanation": "$$i = 2\\% + 4\\% + 0.5(4\\% - 2\\%) + 0.5(2\\%) = 6\\% + 0.5(2\\%) + 1.0\\% = 6\\% + 1\\% + 1\\% = 8\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q39",
                "topic": "Floating Exchange Rates & Monetary Policy",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In an open economy with floating exchange rates, expansionary monetary policy:",
                "options": [
                    "Appreciates the domestic currency and depresses net exports",
                    "Lowers domestic interest rates, depreciates the currency, and increases net exports, providing an extra boost to Aggregate Demand",
                    "Exerts zero influence on net exports or output",
                    "Lowers the domestic price level"
                ],
                "answer": "B",
                "explanation": "Lower interest rates lead to capital outflows as investors seek higher returns abroad. Selling domestic currency in FOREX causes the currency to depreciate. A weaker currency makes exports cheaper and imports costlier, increasing net exports ($NX \\uparrow$) and reinforcing the rightward shift in $AD$."
            },
            {
                "id": "ap-mock-macro-full-1_q40",
                "topic": "Growth Accounting",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "In a Cobb-Douglas production function $Y = A \\cdot F(K, L)$, Total Factor Productivity ($A$) grows at 2.0%, capital ($K$) grows at 3.0%, and labor ($L$) grows at 1.0%. If capital's share is 0.3 and labor's share is 0.7, the growth rate of real output is:",
                "options": [
                    "3.0%",
                    "3.6%",
                    "4.0%",
                    "6.0%"
                ],
                "answer": "B",
                "explanation": "$$\\frac{\\Delta Y}{Y} = \\frac{\\Delta A}{A} + \\alpha \\frac{\\Delta K}{K} + (1 - \\alpha) \\frac{\\Delta L}{L} = 2.0\\% + 0.3(3.0\\%) + 0.7(1.0\\%) = 2.0\\% + 0.9\\% + 0.7\\% = 3.6\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q41",
                "topic": "Structural vs Cyclical Budget Deficits",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "If a government's budget remains in deficit even when the national economy is operating at potential full-employment GDP, this deficit is classified as:",
                "options": [
                    "A cyclical deficit",
                    "A structural (full-employment) deficit",
                    "A zero-base deficit",
                    "An automatic stabilizer"
                ],
                "answer": "B",
                "explanation": "The structural deficit reflects underlying fiscal policy (statutory tax rates and spending commitments) evaluated at full-employment output. A cyclical deficit occurs solely because tax receipts decline and transfer payments rise during an economic downturn."
            },
            {
                "id": "ap-mock-macro-full-1_q42",
                "topic": "Sticky Wages & Upward Sloping SRAS",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "The Short-Run Aggregate Supply ($SRAS$) curve slopes upward because:",
                "options": [
                    "Nominal wages and input contracts are sticky in the short run while output prices adjust",
                    "The supply of productive resources is perfectly elastic",
                    "Real wages adjust instantaneously to macroeconomic fluctuations",
                    "Consumers suffer from permanent money illusion"
                ],
                "answer": "A",
                "explanation": "When the aggregate price level rises while nominal input costs (especially labor wages) remain fixed by contracts, profit margins per unit expand. Firms respond by expanding short-run output."
            },
            {
                "id": "ap-mock-macro-full-1_q43",
                "topic": "Perpetual Bond Valuation & Interest Rates",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A consol (perpetual bond) pays a fixed coupon of $50 per year forever. If the prevailing market interest rate doubles from 5% to 10%, the market price of the bond changes from:",
                "options": [
                    "$500 to $1,000",
                    "$1,000 to $500",
                    "$1,000 to $1,000",
                    "$500 to $250"
                ],
                "answer": "B",
                "explanation": "$$\\text{Bond Price} = \\frac{\\text{Coupon Payment}}{\\text{Interest Rate}}.$$ At 5%: $P = \\frac{50}{0.05} = \\$1,000$. At 10%: $P = \\frac{50}{0.10} = \\$500$. Bond prices are inversely related to interest rates."
            },
            {
                "id": "ap-mock-macro-full-1_q44",
                "topic": "Currency Depreciation & Trade",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "If the euro depreciates relative to the U.S. dollar, what is the effect on U.S. exports sold to European consumers?",
                "options": [
                    "U.S. exports will rise because they are cheaper",
                    "U.S. exports will fall because American goods become more expensive in terms of euros",
                    "U.S. exports will remain unaffected",
                    "U.S. exports will rise because European consumers have higher real income"
                ],
                "answer": "B",
                "explanation": "When the euro depreciates against the dollar, each euro buys fewer U.S. dollars. American products cost more in terms of local European currency, leading European consumers to reduce purchases of U.S. exports."
            },
            {
                "id": "ap-mock-macro-full-1_q45",
                "topic": "Government Spending Multiplier",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Government purchases increase by $100 billion in an economy with $MPC = 0.6$. Ignoring price-level feedback and crowding out, the maximum change in real GDP is:",
                "options": [
                    "+$150 billion",
                    "+$250 billion",
                    "+$400 billion",
                    "+$100 billion"
                ],
                "answer": "B",
                "explanation": "$$\\text{Multiplier} = \\frac{1}{1 - MPC} = \\frac{1}{1 - 0.6} = \\frac{1}{0.4} = 2.5.$$ $$\\Delta GDP = 100 \\times 2.5 = +\\$250 \\text{ billion}.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q46",
                "topic": "Tax Cut Multiplier",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A lump-sum tax reduction of $100 billion in an economy with $MPC = 0.8$ will raise equilibrium real GDP by up to:",
                "options": [
                    "$100 billion",
                    "$400 billion",
                    "$500 billion",
                    "$80 billion"
                ],
                "answer": "B",
                "explanation": "$$\\text{Tax Multiplier} = -\\frac{MPC}{1 - MPC} = -\\frac{0.8}{0.2} = -4.$$ $$\\Delta GDP = -4 \\times (-\\text{Tax Cut}) = -4 \\times (-100) = +\\$400 \\text{ billion}.$$ (A tax cut is less expansionary than direct government spending because a portion of the tax cut, $MPS \\times 100 = \\$20$ billion, is saved on the first round.)"
            },
            {
                "id": "ap-mock-macro-full-1_q47",
                "topic": "Per Capita Real GDP Growth",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "If real GDP grows at an annual rate of 4.0% while the national population grows at 1.5%, real GDP per capita grows at approximately:",
                "options": [
                    "5.5%",
                    "2.5%",
                    "4.0%",
                    "6.0%"
                ],
                "answer": "B",
                "explanation": "$$\\text{Per Capita Growth} \\approx \\% \\Delta \\text{Real GDP} - \\% \\Delta \\text{Population} = 4.0\\% - 1.5\\% = 2.5\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q48",
                "topic": "Foreign Income Shock & AD",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "National income in major foreign trading partner nations rises substantially. In the domestic economy, this will most likely cause:",
                "options": [
                    "Exports to rise, shifting domestic Aggregate Demand to the right",
                    "Imports to rise, shifting domestic Aggregate Demand to the left",
                    "Aggregate Demand to remain completely unaffected",
                    "Short-Run Aggregate Supply to shift to the right"
                ],
                "answer": "A",
                "explanation": "When foreign incomes rise, foreign consumers buy more goods and services, including exports from the domestic economy ($X \\uparrow$). Net exports increase, shifting domestic $AD$ to the right."
            },
            {
                "id": "ap-mock-macro-full-1_q49",
                "topic": "Unemployment Benefits & Natural Rate",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A significant increase in the duration and generosity of government unemployment compensation benefits will most likely:",
                "options": [
                    "Lower the natural rate of unemployment",
                    "Raise frictional search unemployment, thereby increasing the natural rate of unemployment",
                    "Reduce cyclical unemployment only",
                    "Shift the Long-Run Aggregate Supply curve to the right"
                ],
                "answer": "B",
                "explanation": "More generous unemployment benefits reduce the opportunity cost of unemployment, allowing workers to spend more time searching for ideal job matches. This increases frictional unemployment and raises the economy's natural rate of unemployment."
            },
            {
                "id": "ap-mock-macro-full-1_q50",
                "topic": "Decrease in Expected Inflation",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Expected inflation declines significantly. The immediate macroeconomic result is that:",
                "options": [
                    "SRAS shifts left, and SRPC shifts up",
                    "SRAS shifts right, and SRPC shifts down",
                    "LRAS shifts rightward",
                    "LRPC shifts leftward"
                ],
                "answer": "B",
                "explanation": "Lower expected inflation leads workers to accept smaller wage increases, decreasing production costs. This shifts the $SRAS$ curve to the right and shifts the Short-Run Phillips Curve ($SRPC$) downward."
            },
            {
                "id": "ap-mock-macro-full-1_q51",
                "topic": "Business Optimism & Loanable Funds",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Corporate executives become significantly more optimistic regarding future consumer demand and investment profitability. In the market for loanable funds:",
                "options": [
                    "Supply shifts right, and real interest rates fall",
                    "Demand shifts right, raising real interest rates and expanding the equilibrium quantity of loanable funds",
                    "Demand shifts left, lowering real interest rates",
                    "Supply shifts leftward"
                ],
                "answer": "B",
                "explanation": "Increased business optimism shifts the demand for loanable funds to the right as firms borrow more to finance capital expansions. This drives up the real interest rate and increases the equilibrium volume of funds traded."
            },
            {
                "id": "ap-mock-macro-full-1_q52",
                "topic": "Deflator vs Real GDP Inflation",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Nominal GDP increases by 6.0% while real GDP increases by 2.0%. The GDP deflator must have increased by approximately:",
                "options": [
                    "2.0%",
                    "4.0%",
                    "6.0%",
                    "8.0%"
                ],
                "answer": "B",
                "explanation": "$$\\Delta \\% \\text{Nominal GDP} \\approx \\Delta \\% \\text{Real GDP} + \\Delta \\% \\text{Price Level} \\implies \\Delta \\% \\text{Price Level} \\approx 6.0\\% - 2.0\\% = 4.0\\%.$$"
            },
            {
                "id": "ap-mock-macro-full-1_q53",
                "topic": "Foreign Purchases of Domestic Assets",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Foreign investors increase purchases of domestic corporate stocks and government bonds. The immediate macroeconomic effect is:",
                "options": [
                    "Domestic currency depreciation and a financial account deficit",
                    "Domestic currency appreciation and an increase in the financial account surplus (capital inflow)",
                    "Zero change in currency valuation",
                    "Domestic currency depreciation and an increased current account surplus"
                ],
                "answer": "B",
                "explanation": "Foreigners must purchase domestic currency in the foreign exchange market to buy domestic assets, increasing demand for the currency and causing it to appreciate. The capital inflow increases the financial account surplus."
            },
            {
                "id": "ap-mock-macro-full-1_q54",
                "topic": "Zero Lower Bound & Policy Room",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "When nominal policy interest rates are close to zero percent (the Zero Lower Bound) during a severe recession, which of the following statements is true?",
                "options": [
                    "Conventional monetary policy remains fully effective at cutting rates further",
                    "Conventional open-market rate reductions cannot ease monetary conditions further, making expansionary fiscal policy or unconventional monetary tools essential",
                    "Fiscal policy becomes ineffective",
                    "Interest rates must be raised immediately to avert deflation"
                ],
                "answer": "B",
                "explanation": "At the zero lower bound, the central bank cannot lower short-term nominal policy rates below zero without causing cash-hoarding disincentives. The economy is in a liquidity trap where traditional interest-rate cuts are exhausted, necessitating fiscal stimulus or quantitative easing."
            },
            {
                "id": "ap-mock-macro-full-1_q55",
                "topic": "Discount Rate Policy Mechanism",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "When the central bank lowers the discount rate, this action will:",
                "options": [
                    "Discourage commercial banks from borrowing reserves from the central bank",
                    "Make borrowing reserves from the central bank cheaper, encouraging banks to obtain reserves and expand lending",
                    "Directly contract the commercial money supply",
                    "Raise the target federal funds rate"
                ],
                "answer": "B",
                "explanation": "The discount rate is the interest rate charged to commercial banks borrowing from the central bank's discount window. Lowering it reduces borrowing costs, injecting reserves into the banking system and supporting credit expansion."
            },
            {
                "id": "ap-mock-macro-full-1_q56",
                "topic": "GDP vs GNP Accounting",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A factory owned by a United States corporation operates inside Mexico and produces $10 million worth of automotive parts. This production is counted in:",
                "options": [
                    "United States GDP and Mexican GNP",
                    "Mexican GDP and United States GNP",
                    "United States GDP only",
                    "Mexican GNP only"
                ],
                "answer": "B",
                "explanation": "Gross Domestic Product ($GDP$) measures production located physically inside a country's borders (Mexico). Gross National Product ($GNP$) measures production by resources/citizens owned by a nation (United States)."
            },
            {
                "id": "ap-mock-macro-full-1_q57",
                "topic": "GDP Inclusions and Exclusions",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Which of the following transactions is directly included in this year's calculation of GDP?",
                "options": [
                    "The private sale of a used automobile between two individuals",
                    "The purchase of 100 shares of tech company common stock on a securities exchange",
                    "A household's purchase of a newly manufactured kitchen refrigerator",
                    "A government monthly Social Security payment deposited into a retiree's account"
                ],
                "answer": "C",
                "explanation": "GDP measures current production of newly manufactured final goods and services. Used goods are past production; stock purchases are financial asset transfers; Social Security payments are non-productive government transfers."
            },
            {
                "id": "ap-mock-macro-full-1_q58",
                "topic": "Capital Outflow & Currency Depreciation",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "If domestic real interest rates fall significantly, triggering capital flight to foreign nations, the domestic currency will:",
                "options": [
                    "Appreciate, and net exports will rise",
                    "Depreciate, and net exports will rise",
                    "Depreciate, and net exports will fall",
                    "Appreciate, and net exports will fall"
                ],
                "answer": "B",
                "explanation": "Capital outflows mean investors sell domestic currency to acquire foreign assets. The increased supply of domestic currency in the FOREX market causes it to depreciate. A weaker currency makes domestic goods more competitive abroad, increasing exports and net exports ($NX \\uparrow$)."
            },
            {
                "id": "ap-mock-macro-full-1_q59",
                "topic": "Transfer Payments vs Direct Government Purchases",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Compare a $100 transfer payment with a $100 direct government purchase of goods in an economy with $MPC = 0.8$. The transfer payment has:",
                "options": [
                    "A larger total impact on GDP",
                    "A smaller total impact on GDP ($400 vs $500) because a portion of the transfer is initially saved",
                    "The exact same total impact on GDP",
                    "Zero effect on Aggregate Demand"
                ],
                "answer": "B",
                "explanation": "Direct government spending enters aggregate demand immediately: $\\Delta GDP = 100 \\times \\frac{1}{0.2} = \\$500$. A transfer payment first increases disposable income, of which consumers spend $MPC \\times 100 = \\$80$ and save $20$. That initial $\\$80$ is multiplied: $80 \\times 5 = \\$400$."
            },
            {
                "id": "ap-mock-macro-full-1_q60",
                "topic": "Long-Run and Short-Run Supply Shifts",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Which of the following developments will shift both the Short-Run Aggregate Supply ($SRAS$) and Long-Run Aggregate Supply ($LRAS$) curves to the right?",
                "options": [
                    "An autonomous increase in Aggregate Demand",
                    "An increase in labor force size or nationwide labor productivity",
                    "A general increase in nominal union wage rates",
                    "A spike in global crude oil prices"
                ],
                "answer": "B",
                "explanation": "An expansion in productive capacity (more workers, higher human capital, or technological progress) expands potential GDP (shifting $LRAS$ right) and also lowers per-unit production costs across firms (shifting $SRAS$ right)."
            },
            {
                "id": "ap-mock-macro-full-1_q61",
                "topic": "Fiscal and Monetary Policy in Recession & Open Economy",
                "difficulty": "hard",
                "type": "FRQ",
                "isFRQ": true,
                "maxMarks": 10,
                "question": "### FRQ 1 – LONG (10 marks, ~25 min)\n\nAn economy is experiencing a recession. Potential full-employment real GDP is **$3,000 billion**, and current equilibrium real GDP is **$2,700 billion**. The Marginal Propensity to Consume ($MPC$) is **0.75**. Assume the price level is stable in the short run and ignore crowding out unless explicitly requested.\n\n**(a)** (1 mark) Identify the type and size of the output gap.\n**(b)** (1 mark) By how much must government purchases ($G$) change to fully close the gap?\n**(c)** (1 mark) Alternatively, by how much must lump-sum taxes ($T$) change to fully close the gap?\n**(d)** (2 marks) If the government finances the increase in spending by borrowing in the loanable funds market, explain the effect on the real interest rate and on private business capital investment.\n**(e)** (2 marks) Suppose instead that the central bank conducts expansionary open-market operations. Explain step-by-step the effect on the money market, the nominal interest rate, and Aggregate Demand ($AD$).\n**(f)** (2 marks) Explain the effect of the central bank's expansionary monetary action in part (e) on the foreign exchange value of the domestic currency and on net exports.\n**(g)** (1 mark) If the government and central bank take zero stabilization action, explain what will happen to the economy in the long run.",
                "options": [
                    "Submit your detailed, step-by-step written response in the text area below."
                ],
                "answer": "See scoring rubric and model derivations below.",
                "explanation": "**Model Solution & Scoring Rubric (10 Marks Total):**\n\n**(a) [1 Mark]**\n- The economy is in a **recessionary gap of $300 billion** ($3,000 - 2,700 = \\$300$ billion) because actual output is below potential output. (1 mark)\n\n**(b) [1 Mark]**\n- $\\text{Spending Multiplier} = \\frac{1}{1 - MPC} = \\frac{1}{1 - 0.75} = \\frac{1}{0.25} = 4$.\n- $\\Delta G = \\frac{\\text{Gap}}{\\text{Multiplier}} = \\frac{300}{4} = \\mathbf{+\\$75 \\text{ billion}}$ (government purchases must increase by $75 billion). (1 mark)\n\n**(c) [1 Mark]**\n- $\\text{Tax Multiplier} = -\\frac{MPC}{MPS} = -\\frac{0.75}{0.25} = -3$.\n- $\\Delta T = \\frac{\\Delta Y}{\\text{Tax Multiplier}} = \\frac{300}{-3} = \\mathbf{-\\$100 \\text{ billion}}$ (cut taxes by $100 billion). (1 mark)\n\n**(d) [2 Marks]**\n- Government borrowing increases the demand for loanable funds, causing the **real interest rate to rise**. (1 mark)\n- Higher real borrowing costs discourage interest-sensitive **private business capital investment (crowding out)**, partially offsetting the expansionary stimulus. (1 mark)\n\n**(e) [2 Marks]**\n- The central bank **buys Treasury bonds** on the open market, injecting reserves into the banking system and shifting the **money supply to the right**. (1 mark)\n- In the money market, the increase in money supply **lowers the nominal interest rate**, which reduces borrowing costs and stimulates investment ($I$) and interest-sensitive consumption ($C$), shifting **Aggregate Demand ($AD$) to the right** toward potential output. (1 mark)\n\n**(f) [2 Marks]**\n- Lower domestic interest rates reduce the return on domestic financial assets, prompting capital outflows as investors convert currency to invest abroad. The supply of domestic currency in the FOREX market increases, causing the **currency to depreciate**. (1 mark)\n- A depreciated currency makes domestic exports cheaper to foreign buyers and foreign imports more expensive, causing **net exports ($NX$) to increase**, which further shifts $AD$ to the right. (1 mark)\n\n**(g) [1 Mark]**\n- With no intervention, persistent high unemployment puts downward pressure on nominal wages. As wage contracts expire and adjust downward, lower input costs shift the **Short-Run Aggregate Supply ($SRAS$) curve to the right**, returning real GDP to potential output ($Y_f$) at a **lower price level**. (1 mark)"
            },
            {
                "id": "ap-mock-macro-full-1_q62",
                "topic": "Banking System & Money Multiplier",
                "difficulty": "medium",
                "type": "FRQ",
                "isFRQ": true,
                "maxMarks": 5,
                "question": "### FRQ 2 – SHORT (5 marks, ~15 min)\n\nA commercial bank in a banking system holds **checkable demand deposits of $50,000** and **total reserves of $8,000**. The required reserve ratio is **10%**. Assume banks lend out all excess reserves and the public holds zero currency leakages.\n\n**(a)** (1 mark) Calculate the bank's required reserves.\n**(b)** (1 mark) Calculate the bank's excess reserves.\n**(c)** (1 mark) What is the maximum new loan this single bank can extend immediately?\n**(d)** (1 mark) What is the maximum total increase in the money supply that the banking system as a whole can create from these excess reserves?\n**(e)** (1 mark) Suppose instead that the Federal Reserve sells $10,000 in bonds to commercial banks. Explain the effect on the federal funds (nominal) interest rate.",
                "options": [
                    "Submit your detailed, step-by-step written response in the text area below."
                ],
                "answer": "See scoring rubric and model derivations below.",
                "explanation": "**Model Solution & Scoring Rubric (5 Marks Total):**\n\n**(a) [1 Mark]**\n- $\\text{Required Reserves} = \\text{Deposits} \\times \\text{Reserve Ratio} = 50,000 \\times 0.10 = \\mathbf{\\$5,000}$. (1 mark)\n\n**(b) [1 Mark]**\n- $\\text{Excess Reserves} = \\text{Total Reserves} - \\text{Required Reserves} = 8,000 - 5,000 = \\mathbf{\\$3,000}$. (1 mark)\n\n**(c) [1 Mark]**\n- The maximum new loan this single individual bank can make is equal to its excess reserves: **$3,000**. (1 mark)\n\n**(d) [1 Mark]**\n- The simple money multiplier is $\\frac{1}{0.10} = 10$.\n- $\\text{Maximum Increase in Money Supply} = \\text{Excess Reserves} \\times \\text{Multiplier} = 3,000 \\times 10 = \\mathbf{\\$30,000}$. (1 mark)\n\n**(e) [1 Mark]**\n- Selling bonds drains reserves from the banking system, shifting the supply of reserves (and money supply) to the left, which causes the **federal funds / nominal interest rate to rise**. (1 mark)"
            },
            {
                "id": "ap-mock-macro-full-1_q63",
                "topic": "Phillips Curve & Inflation Expectations",
                "difficulty": "medium",
                "type": "FRQ",
                "isFRQ": true,
                "maxMarks": 5,
                "question": "### FRQ 3 – SHORT (5 marks, ~15 min)\n\nAn economy is operating in long-run equilibrium at its natural rate of unemployment of **5%** with a steady inflation rate of **2%**.\n\n**(a)** (1 mark) Describe the location and shape of the Long-Run Phillips Curve ($LRPC$).\n**(b)** (1 mark) The central bank implements an unexpected expansionary monetary policy, driving unemployment down to 4% and inflation up to 4%. Is this represented by a movement along the Short-Run Phillips Curve ($SRPC$) or a shift of the $SRPC$? Explain.\n**(c)** (1 mark) What will happen to the $SRPC$ over time as workers and firms adjust their inflation expectations to the new actual rate?\n**(d)** (1 mark) Using the Aggregate Demand–Aggregate Supply ($AD$–$AS$) framework, explain the mechanism that causes the economy to return to 5% unemployment.\n**(e)** (1 mark) What will be the long-run values of the unemployment rate and the inflation rate after all adjustments have taken place?",
                "options": [
                    "Submit your detailed, step-by-step written response in the text area below."
                ],
                "answer": "See scoring rubric and model derivations below.",
                "explanation": "**Model Solution & Scoring Rubric (5 Marks Total):**\n\n**(a) [1 Mark]**\n- The **Long-Run Phillips Curve ($LRPC$) is a vertical line located at the natural rate of unemployment (5%)**, illustrating that in the long run there is no trade-off between inflation and unemployment. (1 mark)\n\n**(b) [1 Mark]**\n- This is a **movement along the existing SRPC** (up and to the left). The monetary expansion stimulated Aggregate Demand, increasing output and prices and temporarily lowering unemployment while expected inflation remained anchored at 2%. (1 mark)\n\n**(c) [1 Mark]**\n- Over time, workers recognize that actual inflation has risen to 4% and revise their expected inflation upward. They negotiate higher nominal wages, which shifts the **SRPC upward (to the right)**. (1 mark)\n\n**(d) [1 Mark]**\n- As higher nominal wages increase unit labor costs, the **Short-Run Aggregate Supply ($SRAS$) curve shifts to the left**, reducing real GDP back to potential output ($Y_f$) and returning unemployment to its natural rate of 5%. (1 mark)\n\n**(e) [1 Mark]**\n- In the long run, the **unemployment rate returns to 5%**, while the **inflation rate remains permanently higher at 4%**. (1 mark)"
            }
        ]
    }
};
