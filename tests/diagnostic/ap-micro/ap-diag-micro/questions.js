// Specific Question Bank for Test: ap-diag-micro
const AP_TEST_DATA = {
    "ap-diag-micro": {
        "id": "ap-diag-micro",
        "title": "AP Microeconomics Diagnostic & Full Exam (Hard Level)",
        "subtitle": "Official 63-Question AP Prep: 60 MCQs (70 min) + 3 FRQs (60 min) | Total 130 min",
        "timeLimitMinutes": 130,
        "duration": 130,
        "totalQuestions": 63,
        "questionsCount": 63,
        "testType": "Diagnostic",
        "subject": "AP Microeconomics",
        "category": "History & Social",
        "level": "Diagnostic",
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
                "id": "ap-diag-micro_q1",
                "topic": "Market Equilibrium",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In a market, $Q_d = 120 - 2P$ and $Q_s = 20 + 3P$. What are the equilibrium price ($P$) and equilibrium quantity ($Q$)?",
                "options": [
                    "P = $16, Q = 88",
                    "P = $20, Q = 80",
                    "P = $24, Q = 72",
                    "P = $25, Q = 70"
                ],
                "answer": "B",
                "explanation": "Set quantity demanded equal to quantity supplied: $$120 - 2P = 20 + 3P \\implies 100 = 5P \\implies P = 20.$$ Substitute $P = 20$ into either function: $$Q = 120 - 2(20) = 80.$$"
            },
            {
                "id": "ap-diag-micro_q2",
                "topic": "Tax Incidence & Price",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "Using the market from Question 1 ($Q_d = 120 - 2P$ and $Q_s = 20 + 3P$), a $10 per-unit excise tax is imposed on sellers. How much more per unit do buyers pay after the tax?",
                "options": [
                    "$4",
                    "$5",
                    "$6",
                    "$10"
                ],
                "answer": "C",
                "explanation": "With the tax on sellers, the new supply curve becomes: $$Q_s = 20 + 3(P - 10) = 3P - 10.$$ Equate new supply with original demand: $$120 - 2P = 3P - 10 \\implies 130 = 5P \\implies P_{buyer} = 26.$$ Buyers previously paid $20, so they now pay $26 - $20 = $6 more per unit. Sellers receive $26 - $10 = $16 (down $4). The buyer tax incidence ratio is: $$\\frac{E_s}{E_s + E_d} = \\frac{3}{3 + 2} = \\frac{3}{5} = 60\\% \\text{ of } \\$10 = \\$6.$$"
            },
            {
                "id": "ap-diag-micro_q3",
                "topic": "Deadweight Loss of Taxation",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "For the market and tax described in Question 2 ($10 per-unit tax), what is the resulting deadweight loss (DWL)?",
                "options": [
                    "$40",
                    "$60",
                    "$120",
                    "$680"
                ],
                "answer": "B",
                "explanation": "At the post-tax price $P = 26$, equilibrium quantity is $Q_1 = 120 - 2(26) = 68$. The pre-tax quantity was $Q_0 = 80$. Thus, $\\Delta Q = 80 - 68 = 12$. The deadweight loss triangle is: $$DWL = \\frac{1}{2} \\times \\text{Tax} \\times \\Delta Q = \\frac{1}{2} \\times 10 \\times 12 = 60.$$ (Note: Total tax revenue is $\\$10 \\times 68 = \\$680$.)"
            },
            {
                "id": "ap-diag-micro_q4",
                "topic": "Cross-Price Elasticity of Demand",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "When the price of good Y rises by 10%, the quantity demanded of good X falls by 5%. Goods X and Y are:",
                "options": [
                    "Substitutes, with cross-price elasticity = +0.5",
                    "Substitutes, with cross-price elasticity = −0.5",
                    "Complements, with cross-price elasticity = −0.5",
                    "Complements, with cross-price elasticity = +0.5"
                ],
                "answer": "C",
                "explanation": "Cross-price elasticity of demand is given by: $$E_{XY} = \\frac{\\% \\Delta Q_X}{\\% \\Delta P_Y} = \\frac{-5\\%}{+10\\%} = -0.5.$$ A negative cross-price elasticity indicates that goods X and Y are complements."
            },
            {
                "id": "ap-diag-micro_q5",
                "topic": "Midpoint Elasticity & Total Revenue",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Price rises from $8 to $12 and quantity demanded falls from 60 to 40. Using the midpoint method, demand is:",
                "options": [
                    "Inelastic, and total revenue rises",
                    "Unit elastic, and total revenue is unchanged",
                    "Elastic, and total revenue falls",
                    "Perfectively elastic"
                ],
                "answer": "B",
                "explanation": "Using the midpoint formula: $$\\Delta Q = 40 - 60 = -20, \\quad Q_{mid} = \\frac{60 + 40}{2} = 50 \\implies \\% \\Delta Q = \\frac{-20}{50} = -40\\%.$$ $$\\Delta P = 12 - 8 = 4, \\quad P_{mid} = \\frac{8 + 12}{2} = 10 \\implies \\% \\Delta P = \\frac{4}{10} = 40\\%.$$ $$E_d = \\left| \\frac{-40\\%}{40\\%} \\right| = 1.0 \\quad (\\text{unit elastic}).$$ $TR_{initial} = 8 \\times 60 = 480$; $TR_{final} = 12 \\times 40 = 480$. Total revenue remains unchanged."
            },
            {
                "id": "ap-diag-micro_q6",
                "topic": "Price Ceilings & Elasticity",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A binding price ceiling is imposed in a market where supply is perfectly inelastic. Which of the following is TRUE?",
                "options": [
                    "Quantity traded falls and there is a deadweight loss",
                    "Quantity traded stays the same, there is no deadweight loss, and surplus is transferred from producers to consumers",
                    "Quantity traded rises and producer surplus increases",
                    "Producer surplus rises while consumer surplus falls"
                ],
                "answer": "B",
                "explanation": "Because the supply curve is vertical (perfectly inelastic), the quantity supplied cannot decrease even at a lower price. Therefore, the quantity traded remains identical to the competitive level, causing no lost transactions and zero deadweight loss. The only effect is pure surplus transfer from producers to consumers."
            },
            {
                "id": "ap-diag-micro_q7",
                "topic": "Consumer Utility Maximization",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A consumer buys goods X and Y. $MU_X = 20$, $P_X = \\$4$, $MU_Y = 15$, and $P_Y = \\$5$. To maximize total utility subject to a budget constraint, the consumer should:",
                "options": [
                    "Buy more Y and less X",
                    "Buy more X and less Y",
                    "Change nothing; the consumer is already in equilibrium",
                    "Buy more of both goods simultaneously"
                ],
                "answer": "B",
                "explanation": "Calculate marginal utility per dollar: $$\\frac{MU_X}{P_X} = \\frac{20}{4} = 5 \\text{ utils/\\$}, \\qquad \\frac{MU_Y}{P_Y} = \\frac{15}{5} = 3 \\text{ utils/\\$}.$$ Since $\\frac{MU_X}{P_X} > \\frac{MU_Y}{P_Y}$, each additional dollar spent on X yields more satisfaction than on Y. The consumer should reallocate spending toward X and away from Y."
            },
            {
                "id": "ap-diag-micro_q8",
                "topic": "Income and Substitution Effects",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "The price of an inferior good (which is not a Giffen good) falls. Which statement is correct?",
                "options": [
                    "The substitution effect raises quantity demanded; the income effect lowers it, but the net effect is an increase in quantity demanded",
                    "Both the income and substitution effects lower quantity demanded",
                    "The income effect dominates the substitution effect, causing quantity demanded to fall",
                    "Both the income and substitution effects raise quantity demanded"
                ],
                "answer": "A",
                "explanation": "A price drop makes the good relatively cheaper, so the substitution effect always increases quantity demanded. For an inferior good, the increase in real purchasing power reduces demand (negative income effect). For normal inferior goods, the substitution effect exceeds the income effect, resulting in a net increase in quantity demanded."
            },
            {
                "id": "ap-diag-micro_q9",
                "topic": "Diminishing Marginal Returns",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "Total product for 1 to 5 workers is 10, 24, 36, 44, and 48 units. Diminishing marginal returns begin with the addition of the:",
                "options": [
                    "2nd worker",
                    "3rd worker",
                    "4th worker",
                    "5th worker"
                ],
                "answer": "B",
                "explanation": "Calculate Marginal Product ($MP = \\Delta TP$): $$MP_1 = 10, \\quad MP_2 = 24 - 10 = 14, \\quad MP_3 = 36 - 24 = 12, \\quad MP_4 = 44 - 36 = 8, \\quad MP_5 = 48 - 44 = 4.$$ Marginal product peaks at worker 2 ($MP=14$) and first declines with worker 3 ($MP=12$)."
            },
            {
                "id": "ap-diag-micro_q10",
                "topic": "Cost Functions & Min ATC",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A firm has Total Cost $TC = 100 + 5Q + Q^2$. At which output quantity is Average Total Cost ($ATC$) minimized, and what is Average Variable Cost ($AVC$) at that level?",
                "options": [
                    "Q = 5, AVC = $10",
                    "Q = 10, AVC = $15",
                    "Q = 10, AVC = $25",
                    "Q = 20, AVC = $25"
                ],
                "answer": "B",
                "explanation": "$$ATC = \\frac{TC}{Q} = \\frac{100}{Q} + 5 + Q. \\qquad MC = \\frac{d(TC)}{dQ} = 5 + 2Q.$$ Minimum $ATC$ occurs where $ATC = MC$: $$\\frac{100}{Q} + 5 + Q = 5 + 2Q \\implies \\frac{100}{Q} = Q \\implies Q^2 = 100 \\implies Q = 10.$$ Variable Cost $VC = 5Q + Q^2$, so $AVC = 5 + Q$. At $Q = 10$, $AVC = 5 + 10 = 15$. (At this point $ATC = MC = 25$.)"
            },
            {
                "id": "ap-diag-micro_q11",
                "topic": "Short-Run Shutdown Decision",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A perfectly competitive firm faces a market price $P = \\$12$. At its profit-maximizing quantity $Q = 50$, $ATC = \\$14$ and $AVC = \\$10$. In the short run, the firm should:",
                "options": [
                    "Shut down immediately, incurring a loss of $200",
                    "Continue producing, with an economic loss of $100",
                    "Continue producing, with an economic profit of $100",
                    "Produce, with an economic loss of $200"
                ],
                "answer": "B",
                "explanation": "Because $P (\\$12) > AVC (\\$10)$, the firm covers all variable costs and contributes $\\$2$ per unit toward fixed costs. Per unit loss $= ATC - P = 14 - 12 = \\$2$. Total loss $= 2 \\times 50 = \\$100$. Shutting down would result in losing all fixed costs: $(14 - 10) \\times 50 = \\$200$."
            },
            {
                "id": "ap-diag-micro_q12",
                "topic": "Constant-Cost Industry Long-Run Equilibrium",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A constant-cost perfectly competitive industry in long-run equilibrium experiences an increase in market demand. In the new long-run equilibrium:",
                "options": [
                    "Price is higher and industry quantity is higher",
                    "Price is the same as originally, industry quantity is higher, and the number of firms is higher",
                    "Price is the same and industry quantity is unchanged",
                    "Price is lower and the number of firms is lower"
                ],
                "answer": "B",
                "explanation": "In a constant-cost industry, input costs do not change when the industry expands. Increased demand leads to short-run economic profits, attracting new firms. Entry shifts industry supply rightward until price returns to minimum $ATC$. Thus, long-run price remains unchanged, while total output and the number of firms increase."
            },
            {
                "id": "ap-diag-micro_q13",
                "topic": "Lump-Sum Tax on Competitive Firm",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A lump-sum tax is imposed on a perfectly competitive firm in the short run. The firm will:",
                "options": [
                    "Reduce output because Marginal Cost ($MC$) rises",
                    "Keep output unchanged, and economic profit falls",
                    "Increase output to cover the tax",
                    "Shut down immediately"
                ],
                "answer": "B",
                "explanation": "A lump-sum tax acts as an increase in fixed cost. It raises Average Fixed Cost and Average Total Cost ($ATC$), but leaves Marginal Cost ($MC$), Average Variable Cost ($AVC$), and Marginal Revenue ($MR$) unchanged. Because $MR = MC$ is unaffected, the profit-maximizing output remains identical while profits decrease."
            },
            {
                "id": "ap-diag-micro_q14",
                "topic": "Monopoly Profit Maximization",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A monopolist faces demand $P = 100 - 2Q$ and has constant Marginal Cost $MC = 20$. The profit-maximizing price and quantity are:",
                "options": [
                    "P = $60, Q = 20",
                    "P = $20, Q = 40",
                    "P = $50, Q = 25",
                    "P = $60, Q = 40"
                ],
                "answer": "A",
                "explanation": "Marginal revenue has twice the slope of linear inverse demand: $MR = 100 - 4Q$. Set $MR = MC$: $$100 - 4Q = 20 \\implies 4Q = 80 \\implies Q = 20.$$ Price is obtained from the demand curve: $$P = 100 - 2(20) = 100 - 40 = \\$60.$$"
            },
            {
                "id": "ap-diag-micro_q15",
                "topic": "Monopoly Deadweight Loss",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "In the monopoly from Question 14 ($P = 100 - 2Q, MC = 20, Q_m = 20, P_m = 60$), what is the deadweight loss created by the monopoly?",
                "options": [
                    "$200",
                    "$400",
                    "$800",
                    "$1,600"
                ],
                "answer": "B",
                "explanation": "The socially efficient (competitive) output occurs where $P = MC$: $$100 - 2Q = 20 \\implies 2Q = 80 \\implies Q_c = 40.$$ Deadweight loss is the triangle between demand and MC from $Q = 20$ to $40$: $$DWL = \\frac{1}{2} \\times (P_m - MC) \\times (Q_c - Q_m) = \\frac{1}{2} \\times (60 - 20) \\times (40 - 20) = \\frac{1}{2} \\times 40 \\times 20 = 400.$$"
            },
            {
                "id": "ap-diag-micro_q16",
                "topic": "Natural Monopoly Regulation",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A natural monopoly with continuously declining Average Total Cost is regulated to charge the socially optimal price ($P = MC$). The firm will:",
                "options": [
                    "Earn a normal economic profit",
                    "Earn positive economic profits",
                    "Incur an economic loss because MC lies below ATC",
                    "Produce at the minimum point of its average total cost curve"
                ],
                "answer": "C",
                "explanation": "When $ATC$ is downward sloping due to economies of scale, $MC < ATC$. Imposing $P = MC$ forces price below average total cost, causing the firm to incur sustained economic losses. Regulators must provide a government subsidy or use fair-return pricing ($P = ATC$)."
            },
            {
                "id": "ap-diag-micro_q17",
                "topic": "Perfect Price Discrimination",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A monopolist practices perfect (first-degree) price discrimination. Compared with a single-price monopoly:",
                "options": [
                    "Output is lower and consumer surplus is higher",
                    "Output equals the competitive level, consumer surplus is zero, and there is no deadweight loss",
                    "Output is higher but deadweight loss remains substantial",
                    "Total profit is lower"
                ],
                "answer": "B",
                "explanation": "By charging each consumer their exact reservation price, the monopolist's marginal revenue curve equals the market demand curve ($MR = D$). The firm expands output until $P = MC$, achieving allocative efficiency (zero DWL) while converting 100% of consumer surplus into producer surplus."
            },
            {
                "id": "ap-diag-micro_q18",
                "topic": "Monopolistic Competition Long-Run Equilibrium",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In long-run equilibrium, a firm in monopolistic competition:",
                "options": [
                    "Earns positive economic profit in the presence of high barriers",
                    "Produces where price equals marginal cost ($P = MC$)",
                    "Produces where $P = ATC > MC$, with output below the minimum-ATC level (excess capacity)",
                    "Produces at the minimum of Average Total Cost"
                ],
                "answer": "C",
                "explanation": "Free entry shifts each firm's downward-sloping demand curve leftward until it is tangent to the $ATC$ curve ($P = ATC$, zero economic profit). Because demand slopes downward, tangency occurs on the downward-sloping portion of $ATC$, producing excess capacity ($P > MC$)."
            },
            {
                "id": "ap-diag-micro_q19",
                "topic": "Game Theory & Dominant Strategies",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Two firms choose Advertise (Ad) or No Advertise (No). Payoffs (Firm A, Firm B): (Ad, Ad) = (4, 4); (Ad, No) = (8, 2); (No, Ad) = (2, 8); (No, No) = (6, 6). The Nash equilibrium is:",
                "options": [
                    "(No, No)",
                    "(Ad, No)",
                    "(Ad, Ad)",
                    "There is no Nash equilibrium"
                ],
                "answer": "C",
                "explanation": "For Firm A: if B chooses Ad, A prefers Ad ($4 > 2$); if B chooses No, A prefers Ad ($8 > 6$). Ad is a strictly dominant strategy for A. By symmetry, Ad is dominant for B. Thus, (Ad, Ad) is the unique Nash equilibrium (a classic Prisoner's Dilemma where mutual cooperation at (6,6) is unachieved)."
            },
            {
                "id": "ap-diag-micro_q20",
                "topic": "Game Theory Coordination",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "Payoffs for players (X, Y): (High, High) = (6, 6); (High, Low) = (2, 4); (Low, High) = (4, 2); (Low, Low) = (5, 5). Which statement is true?",
                "options": [
                    "Only (High, High) is a Nash equilibrium",
                    "Only (Low, Low) is a Nash equilibrium",
                    "Both (High, High) and (Low, Low) are Nash equilibria; neither player has a dominant strategy",
                    "Each player has a dominant strategy of Low"
                ],
                "answer": "C",
                "explanation": "If Y plays High, X prefers High ($6 > 4$). If Y plays Low, X prefers Low ($5 > 2$). X's best response depends on Y's move (no dominant strategy). Symmetrically for Y: High is best against High, Low against Low. Both (High, High) and (Low, Low) are mutual best responses and thus Nash equilibria."
            },
            {
                "id": "ap-diag-micro_q21",
                "topic": "Cartel Instability",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Why are cartel agreements inherently difficult to maintain over time?",
                "options": [
                    "Output restrictions cause price to fall below Marginal Cost",
                    "At the cartel price, $P > MC$ for each member, giving each firm an incentive to secretly expand output",
                    "Cartels always earn zero economic profit",
                    "Industry market demand is perfectly elastic"
                ],
                "answer": "B",
                "explanation": "A cartel restricts collective output to raise price ($P > MC$). Because price exceeds marginal cost, an individual firm can increase its own profits by secretly producing beyond its allocated quota, leading to the eventual breakdown of the cartel."
            },
            {
                "id": "ap-diag-micro_q22",
                "topic": "Kinked Demand Curve Model",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "In the kinked demand curve oligopoly model, a small increase in Marginal Cost that remains within the vertical discontinuity of Marginal Revenue will cause the firm to:",
                "options": [
                    "Raise price and reduce output",
                    "Lower price to increase market share",
                    "Leave price and output unchanged",
                    "Exit the industry immediately"
                ],
                "answer": "C",
                "explanation": "The kinked demand curve creates a broken, vertical gap in the $MR$ curve at the prevailing price. As long as the shifting $MC$ curve intersects $MR$ within this vertical gap, the profit-maximizing output and price remain unchanged, explaining price rigidity."
            },
            {
                "id": "ap-diag-micro_q23",
                "topic": "Marginal Revenue Product Hiring",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A competitive firm sells output at $P = \\$5$ and pays a market wage of $W = \\$40$. The Marginal Product of the 4th worker is 10 units, and the 5th worker is 7 units. How many workers will the firm hire?",
                "options": [
                    "3 workers",
                    "4 workers",
                    "5 workers",
                    "6 workers"
                ],
                "answer": "B",
                "explanation": "$MRP = P \\times MP$. For worker 4: $MRP_4 = 5 \\times 10 = \\$50$. Since $\\$50 \\ge \\$40$ (wage), hire worker 4. For worker 5: $MRP_5 = 5 \\times 7 = \\$35$. Since $\\$35 < \\$40$, hiring worker 5 would reduce profit. The firm hires exactly 4 workers."
            },
            {
                "id": "ap-diag-micro_q24",
                "topic": "Monopsony Labor Market",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A monopsonist faces labor supply $W = 10 + 2L$ and $MRP = 70 - 2L$. How many workers does it hire and what wage does it pay?",
                "options": [
                    "L = 10 at W = $30",
                    "L = 15 at W = $40",
                    "L = 10 at W = $50",
                    "L = 12.5 at W = $35"
                ],
                "answer": "A",
                "explanation": "Total Factor Cost $TFC = W \\times L = (10 + 2L)L = 10L + 2L^2$. Marginal Factor Cost $MFC = 10 + 4L$. Set $MRP = MFC$: $$70 - 2L = 10 + 4L \\implies 6L = 60 \\implies L = 10.$$ The wage paid is read off the labor supply curve at $L = 10$: $$W = 10 + 2(10) = \\$30.$$ (A competitive market would hire $L = 15$ at $W = \\$40$.)"
            },
            {
                "id": "ap-diag-micro_q25",
                "topic": "Least-Cost Input Combination",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A firm has $MP_L = 24$, $w = \\$6$, $MP_K = 30$, and $r = \\$10$. To minimize cost for its current output level, the firm should:",
                "options": [
                    "Use more capital and less labor",
                    "Use more labor and less capital",
                    "Use more of both inputs",
                    "Change nothing; the firm is currently at minimum cost"
                ],
                "answer": "B",
                "explanation": "Calculate marginal product per dollar: $$\\frac{MP_L}{w} = \\frac{24}{6} = 4 \\text{ units/\\$}, \\qquad \\frac{MP_K}{r} = \\frac{30}{10} = 3 \\text{ units/\\$}.$$ Since $\\frac{MP_L}{w} > \\frac{MP_K}{r}$, labor produces more output per dollar than capital. The firm should substitute labor for capital until $\\frac{MP_L}{w} = \\frac{MP_K}{r}$."
            },
            {
                "id": "ap-diag-micro_q26",
                "topic": "Pigouvian Tax on Negative Externality",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Market demand is $P = 60 - Q$, private marginal cost is $P = 10 + Q$, and each unit generates an external environmental cost of $20. The optimal per-unit Pigouvian tax is:",
                "options": [
                    "$10",
                    "$15",
                    "$20",
                    "$25"
                ],
                "answer": "C",
                "explanation": "The optimal Pigouvian tax equals the marginal external damage (cost), which is $\\$20$ per unit. Imposing this tax shifts private marginal cost upward to equal Marginal Social Cost ($MSC = 10 + Q + 20 = 30 + Q$)."
            },
            {
                "id": "ap-diag-micro_q27",
                "topic": "Deadweight Loss of Negative Externality",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "In the market from Question 26 ($P = 60 - Q, MPC = 10 + Q, \\text{External Cost} = 20$), what is the deadweight loss of the unregulated private market equilibrium?",
                "options": [
                    "$50",
                    "$100",
                    "$200",
                    "$400"
                ],
                "answer": "B",
                "explanation": "Private market equilibrium ($D = MPC$): $$60 - Q = 10 + Q \\implies 2Q = 50 \\implies Q_m = 25.$$ Socially optimal equilibrium ($D = MSC$): $$60 - Q = 30 + Q \\implies 2Q = 30 \\implies Q_{opt} = 15.$$ Deadweight loss is the triangle between $MSC$ and $D$ over the overproduced quantity ($25 - 15 = 10$): $$DWL = \\frac{1}{2} \\times \\text{Marginal External Cost} \\times (Q_m - Q_{opt}) = \\frac{1}{2} \\times 20 \\times 10 = 100.$$"
            },
            {
                "id": "ap-diag-micro_q28",
                "topic": "Positive Externality Policy",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "To correct a positive externality in consumption (such as vaccinations) and achieve allocative efficiency, the appropriate government policy is:",
                "options": [
                    "A per-unit tax equal to the marginal external benefit",
                    "A per-unit subsidy equal to the marginal external benefit",
                    "A binding price ceiling",
                    "A production quota set below the market equilibrium quantity"
                ],
                "answer": "B",
                "explanation": "Because an unregulated market underproduces goods with positive externalities ($MSB > MPB$), providing a per-unit subsidy equal to the Marginal External Benefit ($MEB$) aligns private incentives with social benefits, expanding output to the socially optimal level."
            },
            {
                "id": "ap-diag-micro_q29",
                "topic": "Public Goods Demand Aggregation",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A public good has two consumers: Person A's marginal benefit is $MB_A = 10 - Q$, and Person B's is $MB_B = 6 - Q$. Marginal cost is constant at $MC = \\$8$. The socially efficient quantity of this public good is:",
                "options": [
                    "2 units",
                    "4 units",
                    "6 units",
                    "8 units"
                ],
                "answer": "B",
                "explanation": "Because public goods are non-rival, individual marginal benefits are added vertically: $$MSB = MB_A + MB_B = (10 - Q) + (6 - Q) = 16 - 2Q.$$ Equate $MSB$ with $MC$: $$16 - 2Q = 8 \\implies 2Q = 8 \\implies Q = 4.$$"
            },
            {
                "id": "ap-diag-micro_q30",
                "topic": "Coase Theorem Conditions",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "According to the Coase Theorem, private bargaining can resolve externality problems efficiently without government intervention if:",
                "options": [
                    "The government imposes a corrective tax schedule",
                    "Property rights are clearly defined and transaction costs are low or negligible",
                    "Only one single party is affected by the externality",
                    "The polluter holds all legal property rights"
                ],
                "answer": "B",
                "explanation": "The Coase Theorem proves that if property rights are well-established and enforced, and transaction/bargaining costs are low, the affected parties can negotiate a mutually beneficial agreement that eliminates deadweight loss regardless of the initial allocation of property rights."
            },
            {
                "id": "ap-diag-micro_q31",
                "topic": "Comparative Advantage & Terms of Trade",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Country A can produce 6 wheat or 12 cloth per labor hour; Country B can produce 2 wheat or 8 cloth per labor hour. Which terms of trade will benefit both countries?",
                "options": [
                    "1 wheat = 1.5 cloth",
                    "1 wheat = 3 cloth",
                    "1 wheat = 5 cloth",
                    "1 wheat = 2 cloth"
                ],
                "answer": "B",
                "explanation": "Opportunity cost of 1 wheat: Country A $= 12/6 = 2$ cloth; Country B $= 8/2 = 4$ cloth. Country A has a comparative advantage in wheat, Country B in cloth. Mutually beneficial terms of trade must fall between the domestic opportunity costs: $2 \\text{ cloth} < 1 \\text{ wheat} < 4 \\text{ cloth}$. 1 wheat = 3 cloth is the only price strictly inside this range."
            },
            {
                "id": "ap-diag-micro_q32",
                "topic": "Tax Progressivity",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "A taxpayer with an income of $20,000 pays $2,000 in income tax, while an individual earning $40,000 pays $3,200. This tax structure is classified as:",
                "options": [
                    "Progressive",
                    "Proportional",
                    "Regressive",
                    "Lump-sum"
                ],
                "answer": "C",
                "explanation": "Calculate average tax rates: at $\\$20,000$, $\\frac{2,000}{20,000} = 10\\%$. At $\\$40,000$, $\\frac{3,200}{40,000} = 8\\%$. Because the average tax rate declines as income increases, the tax is regressive."
            },
            {
                "id": "ap-diag-micro_q33",
                "topic": "Perfect Inelasticity & Tax Incidence",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Demand for a lifesaving medication is perfectly inelastic, and supply is upward sloping. If a per-unit excise tax is imposed on sellers, the economic burden falls:",
                "options": [
                    "Entirely on sellers",
                    "Entirely on buyers",
                    "Equally on buyers and sellers",
                    "Neither party, as trade is suspended"
                ],
                "answer": "B",
                "explanation": "When demand is perfectly inelastic ($E_d = 0$), buyers are completely unresponsive to price changes. Sellers pass 100% of the tax forward to consumers through a higher price ($P$ rises by the full tax amount), so buyers bear the entire tax burden."
            },
            {
                "id": "ap-diag-micro_q34",
                "topic": "Total Revenue Test",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Market demand is $Q = 100 - 5P$. At a current price of $P = \\$6$, a small price increase will:",
                "options": [
                    "Increase total revenue, because demand is inelastic",
                    "Decrease total revenue, because demand is elastic",
                    "Leave total revenue unchanged",
                    "Increase quantity demanded"
                ],
                "answer": "A",
                "explanation": "At $P = 6$, $Q = 100 - 5(6) = 70$. Point elasticity: $$E_d = \\left| \\frac{dQ}{dP} \\times \\frac{P}{Q} \\right| = \\left| -5 \\times \\frac{6}{70} \\right| = \\frac{30}{70} \\approx 0.43.$$ Since $E_d < 1$ (inelastic), price and total revenue move in the same direction: a price increase raises total revenue."
            },
            {
                "id": "ap-diag-micro_q35",
                "topic": "Consumer Surplus Calculation",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Demand is $P = 40 - 2Q$. If the market equilibrium price is $P = \\$10$, total consumer surplus is:",
                "options": [
                    "$150",
                    "$225",
                    "$300",
                    "$450"
                ],
                "answer": "B",
                "explanation": "At $P = 10$: $10 = 40 - 2Q \\implies 2Q = 30 \\implies Q = 15$. The maximum reservation price is the vertical intercept $P_{max} = 40$. $$CS = \\frac{1}{2} \\times (P_{max} - P_{market}) \\times Q = \\frac{1}{2} \\times (40 - 10) \\times 15 = \\frac{1}{2} \\times 30 \\times 15 = 225.$$"
            },
            {
                "id": "ap-diag-micro_q36",
                "topic": "Deadweight Loss of Price Ceiling",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "Demand is $P = 50 - Q$ and supply is $P = 10 + Q$. A government price ceiling is set at $P = \\$20$. What is the resulting deadweight loss?",
                "options": [
                    "$50",
                    "$100",
                    "$200",
                    "$400"
                ],
                "answer": "B",
                "explanation": "Competitive equilibrium: $50 - Q = 10 + Q \\implies 2Q = 40 \\implies Q^* = 20, P^* = 30$. Under the price ceiling $P = 20$: quantity supplied is $20 = 10 + Q \\implies Q_s = 10$. At $Q = 10$, demand price is $P_d = 50 - 10 = 40$. The deadweight loss triangle between $Q = 10$ and $Q = 20$ is: $$DWL = \\frac{1}{2} \\times (P_d - P_s) \\times (Q^* - Q_s) = \\frac{1}{2} \\times (40 - 20) \\times (20 - 10) = \\frac{1}{2} \\times 20 \\times 10 = 100.$$"
            },
            {
                "id": "ap-diag-micro_q37",
                "topic": "Price Floor Surplus",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "In the market from Question 36 ($Q_d = 50 - P$ and $Q_s = P - 10$), if the government establishes a price floor of $P = \\$40$, what size surplus is created?",
                "options": [
                    "10 units",
                    "20 units",
                    "30 units",
                    "40 units"
                ],
                "answer": "B",
                "explanation": "At $P = 40$: $Q_d = 50 - 40 = 10$ units, while $Q_s = 40 - 10 = 30$ units. $$\\text{Surplus} = Q_s - Q_d = 30 - 10 = 20 \\text{ units}.$$"
            },
            {
                "id": "ap-diag-micro_q38",
                "topic": "Simultaneous Supply and Demand Shifts",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A technological breakthrough lowers the cost of producing coffee, while at the same time tea (a close substitute for coffee) becomes significantly more popular. In the coffee market:",
                "options": [
                    "Price rises; quantity is ambiguous",
                    "Price falls; quantity is ambiguous",
                    "Price is ambiguous; quantity rises",
                    "Price and quantity both fall"
                ],
                "answer": "B",
                "explanation": "Technological advancement increases coffee supply ($S \\uparrow \\implies P \\downarrow, Q \\uparrow$). Greater popularity of tea reduces coffee demand ($D \\downarrow \\implies P \\downarrow, Q \\downarrow$). Both shifts drive price down unambiguously ($P \\downarrow$), while the net effect on quantity is ambiguous."
            },
            {
                "id": "ap-diag-micro_q39",
                "topic": "Accounting vs Economic Profit",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A business owner earns total revenue of $300,000, incurs explicit accounting costs of $200,000, and gives up an $80,000 executive salary and $30,000 in alternative investment returns. The firm's accounting profit and economic profit are:",
                "options": [
                    "$100,000 and −$10,000",
                    "$100,000 and $100,000",
                    "$20,000 and −$10,000",
                    "$90,000 and $20,000"
                ],
                "answer": "A",
                "explanation": "Accounting Profit $= \\text{Revenue} - \\text{Explicit Costs} = \\$300,000 - \\$200,000 = \\$100,000$. Economic Profit $= \\text{Accounting Profit} - \\text{Implicit Costs} = \\$100,000 - (\\$80,000 + \\$30,000) = \\$100,000 - \\$110,000 = -\\$10,000$ (an economic loss)."
            },
            {
                "id": "ap-diag-micro_q40",
                "topic": "Returns to Scale",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "A manufacturing firm doubles all of its productive inputs simultaneously, and as a consequence its output triples. This firm is experiencing:",
                "options": [
                    "Decreasing returns to scale and rising LRATC",
                    "Constant returns to scale",
                    "Increasing returns to scale and falling Long-Run Average Total Cost",
                    "Diminishing marginal returns in the short run"
                ],
                "answer": "C",
                "explanation": "When output increases more than proportionately to an increase in all inputs (output triples when inputs double), the firm exhibits increasing returns to scale (economies of scale), causing Long-Run Average Total Cost ($LRATC$) to decline."
            },
            {
                "id": "ap-diag-micro_q41",
                "topic": "Short-Run Shutdown Decision",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "A perfectly competitive firm's minimum Average Variable Cost ($AVC$) is $9. If the market price falls to $8, in the short run the firm should:",
                "options": [
                    "Produce where MR = MC",
                    "Shut down operations immediately",
                    "Raise its selling price to cover costs",
                    "Produce where P = ATC"
                ],
                "answer": "B",
                "explanation": "Because $P (\\$8) < \\min AVC (\\$9)$, the firm cannot even cover its variable operating costs. Producing any output would generate losses greater than fixed costs, so the firm minimizes losses by shutting down immediately."
            },
            {
                "id": "ap-diag-micro_q42",
                "topic": "Average Total Cost & Marginal Cost",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "At an output of 10 units, a firm's Average Total Cost ($ATC$) is $20. If producing the 11th unit has a Marginal Cost ($MC$) of $30, the new Average Total Cost for 11 units is approximately:",
                "options": [
                    "$19.10",
                    "$20.00",
                    "$20.91",
                    "$30.00"
                ],
                "answer": "C",
                "explanation": "Total Cost at 10 units: $TC_{10} = 10 \\times 20 = 200$. Total Cost at 11 units: $TC_{11} = 200 + 30 = 230$. New $ATC = \\frac{230}{11} \\approx 20.91$. Whenever $MC > ATC$, it pulls the average cost upward."
            },
            {
                "id": "ap-diag-micro_q43",
                "topic": "Monopoly Markup & Elasticity",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A profit-maximizing monopolist charges a price of $60 at an output level where the price elasticity of demand is $|E_d| = 3$. What is the firm's Marginal Cost ($MC$)?",
                "options": [
                    "$20",
                    "$30",
                    "$40",
                    "$60"
                ],
                "answer": "C",
                "explanation": "Using the relationship between Marginal Revenue, Price, and Elasticity: $$MR = P \\left(1 - \\frac{1}{|E_d|}\\right) = 60 \\left(1 - \\frac{1}{3}\\right) = 60 \\times \\frac{2}{3} = 40.$$ Since profit maximization requires $MR = MC$, Marginal Cost must be $\\$40$."
            },
            {
                "id": "ap-diag-micro_q44",
                "topic": "Third-Degree Price Discrimination",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A monopolist with constant $MC = \\$15$ sells in two separate markets: $|E_d| = 2$ in Market A and $|E_d| = 4$ in Market B. The profit-maximizing prices ($P_A$ and $P_B$) are:",
                "options": [
                    "PA = $20, PB = $30",
                    "PA = $30, PB = $20",
                    "PA = $15, PB = $15",
                    "PA = $25, PB = $25"
                ],
                "answer": "B",
                "explanation": "Set $MR = MC = 15$ in each market. For Market A: $$P_A \\left(1 - \\frac{1}{2}\\right) = 15 \\implies 0.5 P_A = 15 \\implies P_A = 30.$$ For Market B: $$P_B \\left(1 - \\frac{1}{4}\\right) = 15 \\implies 0.75 P_B = 15 \\implies P_B = 20.$$ A price-discriminating firm charges a higher price in the less elastic market."
            },
            {
                "id": "ap-diag-micro_q45",
                "topic": "Herfindahl-Hirschman Index (HHI)",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Four firms in an industry have market shares of 40%, 30%, 20%, and 10%. If the two smallest firms merge, the new Herfindahl-Hirschman Index (HHI) is:",
                "options": [
                    "3,000",
                    "3,200",
                    "3,400",
                    "3,600"
                ],
                "answer": "C",
                "explanation": "Before merger: $HHI = 40^2 + 30^2 + 20^2 + 10^2 = 1600 + 900 + 400 + 100 = 3,000$. After merging the 20% and 10% firms, the new shares are 40%, 30%, and 30%. $$HHI_{new} = 40^2 + 30^2 + 30^2 = 1600 + 900 + 900 = 3,400.$$ The merger increases HHI by 400 points."
            },
            {
                "id": "ap-diag-micro_q46",
                "topic": "Repeated Games & Collusion",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In an infinitely repeated Prisoner's Dilemma game, which strategy can successfully sustain cooperative collusion among firms?",
                "options": [
                    "Always defect (cheat)",
                    "Tit-for-tat (cooperate on the first round, then mirror the rival's previous move) with sufficiently patient players",
                    "A purely randomized coin-flip strategy",
                    "A one-time trigger deployed exclusively on the opening round"
                ],
                "answer": "B",
                "explanation": "In repeated games, the threat of future retaliation makes cooperation sustainable. The tit-for-tat strategy begins with cooperation and then mimics the opponent's previous choice, providing immediate punishment for defection and immediate reward for cooperation."
            },
            {
                "id": "ap-diag-micro_q47",
                "topic": "Minimum Wage in Monopsony",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "In the monopsony from Question 24 (Labor supply $W = 10 + 2L$, $MRP = 70 - 2L$, initial employment $L = 10$ at $W = 30$), a minimum wage of $35 is imposed. New employment will:",
                "options": [
                    "Fall to 7.5 workers",
                    "Remain unchanged at 10 workers",
                    "Rise to 12.5 workers",
                    "Rise to 15 workers"
                ],
                "answer": "C",
                "explanation": "A minimum wage of $\\$35$ makes the labor supply curve perfectly elastic at $\\$35$ up to the point where supply equals 35: $35 = 10 + 2L \\implies 2L = 25 \\implies L = 12.5$. For $L \\le 12.5$, $MFC = 35$. At $L = 12.5$, $MRP = 70 - 2(12.5) = 45 > 35$. The firm hires up to $L = 12.5$. In contrast to competitive markets, an effective minimum wage in a monopsony can increase both wages and employment."
            },
            {
                "id": "ap-diag-micro_q48",
                "topic": "Economic Rent & Inelastic Supply",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "A productive factor with a perfectly inelastic supply (such as raw, undeveloped land) earns a payment that is:",
                "options": [
                    "Normal accounting profit",
                    "Zero economic payment",
                    "Entirely economic rent",
                    "Exclusively a transfer earning"
                ],
                "answer": "C",
                "explanation": "Because the supply of land is perfectly fixed, zero payment is required to bring the resource into existence. Any positive price paid for its use exceeds its opportunity cost ($0$), meaning 100% of the payment constitutes pure economic rent."
            },
            {
                "id": "ap-diag-micro_q49",
                "topic": "Backward-Bending Labor Supply",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "An individual's labor supply curve bends backward at very high wage rates because:",
                "options": [
                    "The substitution effect exceeds the income effect",
                    "The income effect dominates the substitution effect, inducing the worker to consume more leisure",
                    "Leisure becomes an inferior good at higher income levels",
                    "Employers collude to restrict hours"
                ],
                "answer": "B",
                "explanation": "A wage increase has two conflicting effects: the substitution effect makes leisure more expensive (working more), while the income effect raises real wealth, increasing the demand for normal goods like leisure (working less). At high wages, the income effect dominates, causing hours worked to decline."
            },
            {
                "id": "ap-diag-micro_q50",
                "topic": "Lorenz Curve & Gini Coefficient",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A progressive wealth redistribution that transfers income from wealthy households to low-income households will:",
                "options": [
                    "Raise the Gini coefficient",
                    "Shift the Lorenz curve away from the 45-degree line of perfect equality",
                    "Lower the Gini coefficient and shift the Lorenz curve closer to the 45-degree line of equality",
                    "Have zero effect on either the Lorenz curve or the Gini coefficient"
                ],
                "answer": "C",
                "explanation": "Transferring income to poorer households reduces economic inequality. The Lorenz curve moves inward closer to the 45-degree line of perfect equality, and the Gini coefficient decreases toward zero."
            },
            {
                "id": "ap-diag-micro_q51",
                "topic": "Classification of Goods",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "An open-access, overfished freshwater lake with no property rights is an example of a:",
                "options": [
                    "Public good",
                    "Private good",
                    "Common resource (rival in consumption and non-excludable)",
                    "Club good"
                ],
                "answer": "C",
                "explanation": "Common pool resources are rival (one person catching a fish leaves fewer for others) but non-excludable (anyone can access the lake). This leads to the Tragedy of the Commons."
            },
            {
                "id": "ap-diag-micro_q52",
                "topic": "Asymmetric Information",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "In the market for used automobiles, sellers possess private information about vehicle quality that buyers cannot observe prior to purchase. Consequently, high-quality cars are driven out and only low-quality vehicles are traded at average prices. This phenomenon is known as:",
                "options": [
                    "Moral hazard",
                    "Adverse selection",
                    "A positive externality",
                    "First-degree price discrimination"
                ],
                "answer": "B",
                "explanation": "Adverse selection occurs prior to a transaction when asymmetric information causes high-quality goods to be underrepresented or eliminated from the market (the 'lemons problem'). Moral hazard occurs after an agreement is made when an insured party takes greater risks."
            },
            {
                "id": "ap-diag-micro_q53",
                "topic": "Tariff Revenue Calculation",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "The world price of a good is $10. Domestic demand is $Q_d = 100 - 2P$ and domestic supply is $Q_s = 3P$. If a $2 import tariff is imposed, government tariff revenue is:",
                "options": [
                    "$40",
                    "$60",
                    "$80",
                    "$100"
                ],
                "answer": "C",
                "explanation": "With a $\\$2$ tariff, domestic price rises to $P = 10 + 2 = \\$12$. Domestic quantity demanded: $Q_d = 100 - 2(12) = 76$. Domestic quantity supplied: $Q_s = 3(12) = 36$. Imports $= Q_d - Q_s = 76 - 36 = 40$ units. Government tariff revenue $= \\text{Tariff} \\times \\text{Imports} = 2 \\times 40 = \\$80$."
            },
            {
                "id": "ap-diag-micro_q54",
                "topic": "Deadweight Loss of Tariff",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "In the market from Question 53 ($P_{world} = 10, \\text{Tariff} = 2, P_{tariff} = 12, Q_d: 80 \\to 76, Q_s: 30 \\to 36$), what is the total deadweight loss generated by the tariff?",
                "options": [
                    "$4",
                    "$6",
                    "$10",
                    "$20"
                ],
                "answer": "C",
                "explanation": "At $P = 10$: $Q_s = 3(10) = 30$, $Q_d = 100 - 2(10) = 80$. With tariff $P = 12$: $Q_s = 36$, $Q_d = 76$. Production distortion (DWL triangle 1): $\\frac{1}{2} \\times 2 \\times (36 - 30) = 6$. Consumption distortion (DWL triangle 2): $\\frac{1}{2} \\times 2 \\times (80 - 76) = 4$. Total deadweight loss $= 6 + 4 = \\$10$."
            },
            {
                "id": "ap-diag-micro_q55",
                "topic": "Tariff vs Import Quota",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "Compared with an import tariff that produces the exact same domestic price and import volume, an import quota:",
                "options": [
                    "Generates substantial revenue for the domestic government",
                    "Transfers the economic rents to import license holders (or foreign exporters) instead of the domestic government",
                    "Creates zero deadweight loss for society",
                    "Lowers the domestic consumer price"
                ],
                "answer": "B",
                "explanation": "Both a tariff and a quota create the same price increase, quantity reduction, and deadweight loss triangles. However, under a tariff, the rectangular area is government revenue, whereas under an import quota, that revenue becomes 'quota rent' captured by import license holders or foreign firms."
            },
            {
                "id": "ap-diag-micro_q56",
                "topic": "Relative Elasticity & Tax Burden",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A per-unit tax is levied on a good whose demand is significantly more price-elastic than its supply. The economic burden of the tax will:",
                "options": [
                    "Fall predominantly on buyers",
                    "Fall predominantly on sellers",
                    "Be split precisely 50/50 between buyers and sellers",
                    "Fall entirely on consumers regardless of supply elasticity"
                ],
                "answer": "B",
                "explanation": "Tax incidence is inversely related to elasticity. Because consumers are highly responsive to price (elastic demand) while sellers have fewer alternative options (inelastic supply), sellers bear the larger portion of the tax burden."
            },
            {
                "id": "ap-diag-micro_q57",
                "topic": "Marginal Utility & Consumer Surplus",
                "difficulty": "medium",
                "type": "MCQ",
                "question": "A consumer's total utility from consuming 1 to 5 units is 10, 18, 24, 28, and 30 utils. The price of the good is $5, and 1 util equals $1. The consumer surplus earned is:",
                "options": [
                    "$6",
                    "$9",
                    "$12",
                    "$13"
                ],
                "answer": "B",
                "explanation": "Calculate marginal utility ($MU$): $MU_1 = 10, MU_2 = 8, MU_3 = 6, MU_4 = 4, MU_5 = 2$. The consumer buys units where $MU \\ge P (\\$5)$: units 1, 2, and 3 are purchased ($MU_4 = 4 < 5$). Consumer Surplus $= (10 - 5) + (8 - 5) + (6 - 5) = 5 + 3 + 1 = \\$9$."
            },
            {
                "id": "ap-diag-micro_q58",
                "topic": "Optimal Budget Allocation",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "A consumer has income $I = \\$20$, $P_X = \\$2$, and $P_Y = \\$4$. $MU_X$ for units 1–5 is 12, 10, 8, 6, 4; $MU_Y$ for units 1–4 is 20, 16, 12, 8. What is the utility-maximizing combination of X and Y?",
                "options": [
                    "3 units of X and 3 units of Y",
                    "4 units of X and 3 units of Y",
                    "2 units of X and 4 units of Y",
                    "6 units of X and 2 units of Y"
                ],
                "answer": "B",
                "explanation": "Marginal utility per dollar: $MU_X / P_X$: 6, 5, 4, 3, 2. $MU_Y / P_Y$: 5, 4, 3, 2. Purchasing 4 units of X and 3 units of Y: Cost $= 4(2) + 3(4) = 8 + 12 = \\$20$. At this bundle, the last dollar spent on X gives $6/2 = 3$ utils and the last on Y gives $12/4 = 3$ utils ($MU_X/P_X = MU_Y/P_Y = 3$)."
            },
            {
                "id": "ap-diag-micro_q59",
                "topic": "Long-Run Efficiencies in Perfect Competition",
                "difficulty": "easy",
                "type": "MCQ",
                "question": "In long-run equilibrium, a perfectly competitive firm achieves:",
                "options": [
                    "Allocative efficiency only ($P = MC$)",
                    "$P = MC = \\min ATC$, simultaneously achieving both allocative and productive efficiency",
                    "Zero economic profit with $P > MC$",
                    "$P = ATC > MC$, retaining excess capacity"
                ],
                "answer": "B",
                "explanation": "In long-run equilibrium for perfect competition, price equals marginal cost ($P = MC$, achieving allocative efficiency because social marginal benefit equals marginal cost) and price equals minimum average total cost ($P = \\min ATC$, achieving productive efficiency by producing at lowest unit cost)."
            },
            {
                "id": "ap-diag-micro_q60",
                "topic": "Input Price Change & Factor Demand",
                "difficulty": "hard",
                "type": "MCQ",
                "question": "The price of capital equipment falls significantly. For a competitive firm utilizing both labor and capital, the demand for labor:",
                "options": [
                    "Will definitely increase",
                    "Will definitely decrease",
                    "Is ambiguous: the substitution effect reduces labor demand, while the output effect increases it",
                    "Will remain completely unaffected"
                ],
                "answer": "C",
                "explanation": "When capital becomes cheaper, the substitution effect encourages the firm to replace labor with cheaper machines (labor demand falls). However, lower capital costs decrease total production costs, enabling output expansion, which requires hiring more labor (output effect). The net effect depends on which force dominates."
            },
            {
                "id": "ap-diag-micro_q61",
                "topic": "Monopoly Pricing, Efficiency, Taxation & Regulation",
                "difficulty": "hard",
                "type": "FRQ",
                "isFRQ": true,
                "maxMarks": 10,
                "question": "<div class=\"frq-header-badge\">📝 Section II: Free Response &middot; FRQ 1 (Long &middot; 10 Marks &middot; ~25 Min)</div>\n<div class=\"frq-scenario-box\">\n  A profit-maximizing single-price monopolist faces market demand <strong>\\(P = 80 - Q\\)</strong> and has Total Cost <strong>\\(TC = 100 + 20Q\\)</strong> (so <strong>\\(MC = 20\\)</strong>).\n</div>\n<div class=\"frq-parts-list\">\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(a)</span>\n    <div class=\"frq-part-content\">\n      Find the profit-maximizing quantity (\\(Q\\)) and price (\\(P\\)). <span class=\"frq-part-marks\">2 Marks</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(b)</span>\n    <div class=\"frq-part-content\">\n      Calculate the firm's economic profit. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(c)</span>\n    <div class=\"frq-part-content\">\n      Find the socially efficient quantity and calculate the deadweight loss generated by this monopoly. <span class=\"frq-part-marks\">2 Marks</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(d)</span>\n    <div class=\"frq-part-content\">\n      Suppose the government imposes a lump-sum tax of $300 on the monopolist. What happens to the profit-maximizing output, price, and economic profit? <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(e)</span>\n    <div class=\"frq-part-content\">\n      Instead of the lump-sum tax, the government imposes a per-unit excise tax of $10. Find the new profit-maximizing quantity, price, and economic profit. <span class=\"frq-part-marks\">2 Marks</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(f)</span>\n    <div class=\"frq-part-content\">\n      A regulatory agency considers two pricing policies: <strong>(i)</strong> Marginal Cost pricing (\\(P = MC\\)) and <strong>(ii)</strong> Fair-Return pricing (\\(P = ATC\\)). Explain the economic outcome of the \\(P = MC\\) rule for this firm, and calculate the approximate equilibrium quantity and price under \\(P = ATC\\). <span class=\"frq-part-marks\">2 Marks</span>\n    </div>\n  </div>\n</div>",
                "options": [
                    "Submit your detailed, step-by-step written response in the text area below."
                ],
                "answer": "See scoring rubric and model derivations below.",
                "explanation": "**Model Solution & Scoring Rubric (10 Marks Total):**\n\n**(a) [2 Marks]**\n- $MR$ has twice the slope of inverse demand: $MR = 80 - 2Q$.\n- Set $MR = MC$: $80 - 2Q = 20 \\implies 2Q = 60 \\implies \\mathbf{Q = 30}$. (1 mark)\n- Substitute $Q = 30$ into demand: $P = 80 - 30 = \\mathbf{\\$50}$. (1 mark)\n\n**(b) [1 Mark]**\n- Total Revenue $TR = P \\times Q = 50 \\times 30 = \\$1,500$.\n- Total Cost $TC = 100 + 20(30) = 100 + 600 = \\$700$.\n- $\\mathbf{\\text{Economic Profit} = TR - TC = 1500 - 700 = \\$800}$. (1 mark)\n\n**(c) [2 Marks]**\n- Social efficiency requires $P = MC$: $80 - Q = 20 \\implies \\mathbf{Q_{eff} = 60}$. (1 mark)\n- Deadweight loss is the triangle between demand and MC from $Q = 30$ to $60$:\n  $$\\mathbf{DWL = \\frac{1}{2} \\times (50 - 20) \\times (60 - 30) = \\frac{1}{2} \\times 30 \\times 30 = \\$450}.$$ (1 mark)\n\n**(d) [1 Mark]**\n- A lump-sum tax increases fixed cost, so $MC$ and $MR$ remain unchanged.\n- Output remains at **$Q = 30$**, price remains at **$P = \\$50$**.\n- Economic profit falls by $\\$300$ to $\\mathbf{\\$500}$ ($800 - 300$). (1 mark)\n\n**(e) [2 Marks]**\n- A $\\$10$ per-unit tax raises $MC$ to $20 + 10 = 30$.\n- Set $MR = MC_{new}$: $80 - 2Q = 30 \\implies 2Q = 50 \\implies \\mathbf{Q = 25}$. (1 mark)\n- New price: $P = 80 - 25 = \\mathbf{\\$55}$.\n- New profit: $TR - TC_{tax} = 55(25) - [100 + 20(25) + 10(25)] = 1375 - 850 = \\mathbf{\\$525}$. (1 mark)\n\n**(f) [2 Marks]**\n- (i) At $P = MC = \\$20$: $Q = 60$. $TR = 20 \\times 60 = 1200$, $TC = 100 + 20(60) = 1300$. The firm incurs an **economic loss of $100** (its fixed cost) because $MC < ATC$. The firm will shut down unless provided with a government subsidy. (1 mark)\n- (ii) Under Fair-Return pricing ($P = ATC$): $80 - Q = \\frac{100}{Q} + 20 \\implies 60 - Q = \\frac{100}{Q} \\implies Q^2 - 60Q + 100 = 0$. Solving quadratic: $\\mathbf{Q \\approx 58.3}$, and $\\mathbf{P \\approx \\$21.7}$. The firm breaks even (zero economic profit), and deadweight loss is minimal. (1 mark)"
            },
            {
                "id": "ap-diag-micro_q62",
                "topic": "Externalities and Corrective Subsidies",
                "difficulty": "medium",
                "type": "FRQ",
                "isFRQ": true,
                "maxMarks": 5,
                "question": "<div class=\"frq-header-badge\">📝 Section II: Free Response &middot; FRQ 2 (Short &middot; 5 Marks &middot; ~15 Min)</div>\n<div class=\"frq-scenario-box\">\n  A competitive market for influenza vaccinations has private demand <strong>\\(P = 50 - Q\\)</strong> and private supply (marginal private cost) <strong>\\(P = 10 + Q\\)</strong>. Each vaccination administered generates an external benefit of <strong>$10</strong> to the public.\n</div>\n<div class=\"frq-parts-list\">\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(a)</span>\n    <div class=\"frq-part-content\">\n      Calculate the unregulated private market equilibrium quantity and price. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(b)</span>\n    <div class=\"frq-part-content\">\n      Calculate the socially optimal quantity of vaccinations. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(c)</span>\n    <div class=\"frq-part-content\">\n      Identify the specific per-unit government policy that would achieve the socially optimal quantity. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(d)</span>\n    <div class=\"frq-part-content\">\n      Calculate the deadweight loss generated by the unregulated market. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(e)</span>\n    <div class=\"frq-part-content\">\n      Under the optimal policy (a per-unit subsidy paid to consumers), what price do consumers effectively pay out of pocket, and what price do vaccine producers receive? <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n</div>",
                "options": [
                    "Submit your detailed, step-by-step written response in the text area below."
                ],
                "answer": "See scoring rubric and model derivations below.",
                "explanation": "**Model Solution & Scoring Rubric (5 Marks Total):**\n\n**(a) [1 Mark]**\n- Equate private demand with private supply: $50 - Q = 10 + Q \\implies 2Q = 40 \\implies \\mathbf{Q_m = 20}$, $P_m = 50 - 20 = \\mathbf{\\$30}$. (1 mark)\n\n**(b) [1 Mark]**\n- Marginal Social Benefit incorporates external benefit: $MSB = MPB + MEB = (50 - Q) + 10 = 60 - Q$.\n- Equate $MSB$ with $MSC$ ($10 + Q$): $60 - Q = 10 + Q \\implies 2Q = 50 \\implies \\mathbf{Q_{opt} = 25}$. (1 mark)\n\n**(c) [1 Mark]**\n- Impose a **per-unit Pigouvian subsidy of $10** on vaccinations (equal to the Marginal External Benefit). (1 mark)\n\n**(d) [1 Mark]**\n- At $Q_m = 20$, $MSB = 60 - 20 = 40$, and $MPC = 10 + 20 = 30$. Gap $= 40 - 30 = 10$.\n- Underproduction gap $= 25 - 20 = 5$.\n- $$\\mathbf{DWL = \\frac{1}{2} \\times 10 \\times (25 - 20) = \\frac{1}{2} \\times 10 \\times 5 = \\$25}.$$ (1 mark)\n\n**(e) [1 Mark]**\n- At $Q = 25$: Producers require $P_{producer} = 10 + 25 = \\mathbf{\\$35}$ from the supply curve.\n- Consumers pay out of pocket based on private demand: $P_{consumer} = 50 - 25 = \\mathbf{\\$25}$. The $\\$10$ government subsidy bridges the difference ($35 - 10 = 25$). (1 mark)"
            },
            {
                "id": "ap-diag-micro_q63",
                "topic": "Factor Markets & Derived Demand",
                "difficulty": "medium",
                "type": "FRQ",
                "isFRQ": true,
                "maxMarks": 5,
                "question": "<div class=\"frq-header-badge\">📝 Section II: Free Response &middot; FRQ 3 (Short &middot; 5 Marks &middot; ~15 Min)</div>\n<div class=\"frq-scenario-box\">\n  A perfectly competitive firm sells its output at <strong>P = $3</strong> per unit and hires labor in a perfectly competitive labor market. The Marginal Product of Labor (<strong>\\(MP_L\\)</strong>) for workers 1 through 6 is <strong>20, 16, 12, 10, 8, and 6 units</strong>, respectively.\n</div>\n<div class=\"frq-parts-list\">\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(a)</span>\n    <div class=\"frq-part-content\">\n      Calculate the Marginal Revenue Product (<strong>\\(MRP\\)</strong>) of the 3rd worker. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(b)</span>\n    <div class=\"frq-part-content\">\n      If the competitive market wage is <strong>$27</strong>, how many workers will the firm hire? Justify using marginal analysis. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(c)</span>\n    <div class=\"frq-part-content\">\n      If product price increases from <strong>$3</strong> to <strong>$4</strong> while the wage remains at <strong>$27</strong>, how many workers will the firm hire? <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(d)</span>\n    <div class=\"frq-part-content\">\n      Explain what occurred to the firm's demand curve for labor in part (c). <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n  <div class=\"frq-part-card\">\n    <span class=\"frq-part-letter\">(e)</span>\n    <div class=\"frq-part-content\">\n      Identify and explain one non-price determinant that would cause the firm's demand for labor to shift to the left. <span class=\"frq-part-marks\">1 Mark</span>\n    </div>\n  </div>\n</div>",
                "options": [
                    "Submit your detailed, step-by-step written response in the text area below."
                ],
                "answer": "See scoring rubric and model derivations below.",
                "explanation": "**Model Solution & Scoring Rubric (5 Marks Total):**\n\n**(a) [1 Mark]**\n- $MRP_3 = P \\times MP_3 = 3 \\times 12 = \\mathbf{\\$36}$. (1 mark)\n\n**(b) [1 Mark]**\n- Calculate $MRP$ for all workers ($P = \\$3$):\n  - Worker 1: $3 \\times 20 = \\$60$\n  - Worker 2: $3 \\times 16 = \\$48$\n  - Worker 3: $3 \\times 12 = \\$36$\n  - Worker 4: $3 \\times 10 = \\$30$\n  - Worker 5: $3 \\times 8 = \\$24$\n- The firm hires while $MRP \\ge Wage (\\$27)$. Worker 4 yields $30 \\ge 27$, but Worker 5 yields $24 < 27$. The firm hires **4 workers**. (1 mark)\n\n**(c) [1 Mark]**\n- Recalculate $MRP$ at $P = \\$4$:\n  - Worker 4: $4 \\times 10 = \\$40 \\ge 27$\n  - Worker 5: $4 \\times 8 = \\$32 \\ge 27$\n  - Worker 6: $4 \\times 6 = \\$24 < 27$\n- The firm will hire **5 workers**. (1 mark)\n\n**(d) [1 Mark]**\n- The firm's **demand for labor increased (shifted to the right)** because labor demand is a derived demand; the increase in the output price increased the Marginal Revenue Product of every worker ($MRP_L = P \\times MP_L$). (1 mark)\n\n**(e) [1 Mark]**\n- Any one of the following valid explanations: (1 mark)\n  1. **A decrease in the price of the final good**: Lowers $MRP_L$ at every employment level.\n  2. **A decrease in worker productivity ($MP_L$)**: Less output per worker directly reduces $MRP_L$.\n  3. **A decrease in the price of a substitute input (capital)**: If the substitution effect dominates the output effect, the firm replaces labor with cheaper machinery, shifting labor demand to the left."
            }
        ]
    }
};
