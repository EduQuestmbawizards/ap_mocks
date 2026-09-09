// Specific Question Bank for Test: ap-topic-stats-data
const AP_TEST_DATA = {
    "ap-topic-stats-data": {
        "id": "ap-topic-stats-data",
        "title": "AP Statistics: Exploring Data & Probability",
        "subject": "AP Statistics",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 25,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-stats-data_q1",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "If events A and B are independent with P(A) = 0.4 and P(B) = 0.5, what is P(A and B)?",
                "options": [
                    "0.1",
                    "0.2",
                    "0.9",
                    "0.45"
                ],
                "answer": "B",
                "explanation": "For independent events: $P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$."
            },
            {
                "id": "ap-topic-stats-data_q2",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "A dataset has $Q_1 = 24$ and $Q_3 = 40$. According to the standard $1.5 \\times \\text{IQR}$ outlier rule, any observation below what cutoff is an outlier?",
                "options": [
                    "0",
                    "8",
                    "16",
                    "24"
                ],
                "answer": "A",
                "explanation": "$\\text{IQR} = Q_3 - Q_1 = 40 - 24 = 16$. Lower outlier threshold $= Q_1 - 1.5 \\times \\text{IQR} = 24 - 1.5(16) = 24 - 24 = 0$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q3",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "In a strongly right-skewed distribution of household incomes, what is the expected relationship between the mean and the median?",
                "options": [
                    "The mean is greater than the median",
                    "The mean is equal to the median",
                    "The mean is less than the median",
                    "The relationship cannot be predicted"
                ],
                "answer": "A",
                "explanation": "Extreme high income values in the right tail pull the non-resistant mean upward, whereas the resistant median remains relatively unaffected. Therefore, in a right-skewed distribution, $\\text{mean} > \\text{median}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q4",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "Exam scores are normally distributed with mean $\\mu = 72$ and standard deviation $\\sigma = 8$. Approximately what percentage of students scored between 64 and 88?",
                "options": [
                    "81.5%",
                    "68%",
                    "95%",
                    "84%"
                ],
                "answer": "A",
                "explanation": "Using standard deviations: $64 = \\mu - 1\\sigma$ and $88 = \\mu + 2\\sigma$. By the 68-95-99.7 Empirical Rule, the interval from $-1\\sigma$ to $+1\\sigma$ contains $68\\%$, and from $+1\\sigma$ to $+2\\sigma$ contains $\\frac{95\\% - 68\\%}{2} = 13.5\\%$. Total percentage between $-1\\sigma$ and $+2\\sigma$ is $68\\% + 13.5\\% = 81.5\\%$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q5",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "If events $A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.5$, what is $P(A \\cup B)$?",
                "options": [
                    "0.70",
                    "0.90",
                    "0.20",
                    "0.60"
                ],
                "answer": "A",
                "explanation": "By independence, $P(A \\cap B) = P(A)P(B) = 0.4 \\times 0.5 = 0.20$. By the addition rule: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.20 = 0.70$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q6",
                "topic": "Exploring Data & Probability",
                "difficulty": "hard",
                "question": "A linear regression model produces $r = -0.80$. What percentage of the variation in the response variable is explained by the linear relationship with the explanatory variable?",
                "options": [
                    "64%",
                    "80%",
                    "-80%",
                    "36%"
                ],
                "answer": "A",
                "explanation": "The proportion of variation explained by linear regression is given by the coefficient of determination $r^2 = (-0.80)^2 = 0.64$, or $64\\%$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q7",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "What is the primary indicator on a residual plot that a linear regression model is appropriate?",
                "options": [
                    "A random scatter of points with no discernible pattern around the horizontal zero line",
                    "A distinct curved U-shaped pattern across the plot",
                    "All residuals strictly positive above the zero line",
                    "A strong linear trend sloping from bottom-left to top-right"
                ],
                "answer": "A",
                "explanation": "A random scatter of residual points with uniform variance and no curve confirms that a linear model appropriately captures the relationship without missing non-linear trends.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q8",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "In a random sample of 100 students, 60 favor a new policy. What is the standard error of the sample proportion $\\hat{p}$?",
                "options": [
                    "0.049",
                    "0.0024",
                    "0.49",
                    "0.024"
                ],
                "answer": "A",
                "explanation": "$\\hat{p} = \\frac{60}{100} = 0.60$. The standard error is $\\text{SE}(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}} = \\sqrt{\\frac{0.60(0.40)}{100}} = \\sqrt{\\frac{0.24}{100}} = \\sqrt{0.0024} \\approx 0.04899 \\approx 0.049$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q9",
                "topic": "Exploring Data & Probability",
                "difficulty": "hard",
                "question": "What happens to the width of a confidence interval for a population mean when the sample size $n$ is quadrupled, assuming confidence level and standard deviation remain constant?",
                "options": [
                    "The width is halved (reduced by a factor of 2)",
                    "The width is reduced by a factor of 4",
                    "The width is doubled",
                    "The width remains unchanged"
                ],
                "answer": "A",
                "explanation": "Margin of error is $E = z^* \\frac{\\sigma}{\\sqrt{n}}$. If $n$ becomes $4n$, the new margin of error is $z^* \\frac{\\sigma}{\\sqrt{4n}} = \\frac{1}{2} \\left(z^* \\frac{\\sigma}{\\sqrt{n}}\\right)$. Thus, the width is halved.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q10",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "In hypothesis testing, what is a Type I error?",
                "options": [
                    "Rejecting a true null hypothesis ($H_0$ is true, but rejected)",
                    "Failing to reject a false null hypothesis ($H_0$ is false, but not rejected)",
                    "Calculating an incorrect standard error formula",
                    "Choosing an unrepresentative sample"
                ],
                "answer": "A",
                "explanation": "A Type I error (false positive) occurs when the null hypothesis $H_0$ is actually true, but the researcher erroneously rejects it. The probability of this error is the significance level $\\alpha$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q11",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "A fair six-sided die is rolled 5 times. What is the probability of rolling exactly two 4s?",
                "options": [
                    "$\\binom{5}{2} (1/6)^2 (5/6)^3$",
                    "$(1/6)^2 (5/6)^3$",
                    "$\\binom{5}{2} (1/6)^3 (5/6)^2$",
                    "$(1/6)^2$"
                ],
                "answer": "A",
                "explanation": "By the binomial probability formula $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$ with $n = 5$, $k = 2$, and $p = 1/6$: $P(X = 2) = \\binom{5}{2} (1/6)^2 (5/6)^3$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q12",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "Which sampling method divides a population into homogeneous subgroups (such as grade levels) and takes a simple random sample from within every subgroup?",
                "options": [
                    "Stratified random sampling",
                    "Cluster sampling",
                    "Convenience sampling",
                    "Systematic sampling"
                ],
                "answer": "A",
                "explanation": "Stratified random sampling partitions the population into non-overlapping homogeneous strata and then draws an independent SRS from each stratum, guaranteeing representation across all groups.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q13",
                "topic": "Exploring Data & Probability",
                "difficulty": "hard",
                "question": "A test of $H_0: \\mu = 50$ versus $H_a: \\mu > 50$ yields a $p$-value of 0.032. At the $\\alpha = 0.05$ significance level, what is the appropriate conclusion?",
                "options": [
                    "Reject $H_0$; there is convincing statistical evidence that the true mean is greater than 50",
                    "Fail to reject $H_0$; there is convincing statistical evidence that the true mean is equal to 50",
                    "Accept $H_0$; there is insufficient evidence that the true mean is greater than 50",
                    "Reject $H_a$; the test is inconclusive"
                ],
                "answer": "A",
                "explanation": "Since $p = 0.032 < \\alpha = 0.05$, we reject $H_0$. There is statistically significant evidence at the 5% level to support the alternative hypothesis that $\\mu > 50$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q14",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "A medical test has sensitivity $P(+|\\text{Disease}) = 0.95$ and specificity $P(-|\\text{No Disease}) = 0.90$. If disease prevalence is $1\\%$, what is the probability that a randomly chosen person tests positive?",
                "options": [
                    "0.1085",
                    "0.0095",
                    "0.0990",
                    "0.9500"
                ],
                "answer": "A",
                "explanation": "By the Law of Total Probability: $P(+) = P(+|D)P(D) + P(+|D^c)P(D^c)$. Here $P(D) = 0.01$, $P(D^c) = 0.99$. $P(+|D^c) = 1 - 0.90 = 0.10$. Thus $P(+) = (0.95)(0.01) + (0.10)(0.99) = 0.0095 + 0.0990 = 0.1085$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q15",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "What does the Central Limit Theorem state regarding the sampling distribution of the sample mean $\\bar{x}$ when sample size $n$ is sufficiently large ($n \\ge 30$)?",
                "options": [
                    "The distribution of $\\bar{x}$ is approximately normal regardless of the shape of the population distribution",
                    "The population distribution itself transforms into a normal distribution",
                    "The standard deviation of $\\bar{x}$ increases proportionally with $\\sqrt{n}$",
                    "The sample mean $\\bar{x}$ will equal the population mean $\\mu$ in every single sample"
                ],
                "answer": "A",
                "explanation": "The Central Limit Theorem guarantees that the sampling distribution of sample means becomes approximately normal as $n$ grows large, even if the underlying population distribution is skewed or bimodal.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q16",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "The least-squares regression line for predicting plant height ($y$, in cm) from days of growth ($x$) is $\\hat{y} = 4.5 + 1.8x$. For a plant measured at day 10 with an actual height of 25 cm, what is the residual?",
                "options": [
                    "2.5 cm",
                    "-2.5 cm",
                    "22.5 cm",
                    "0 cm"
                ],
                "answer": "A",
                "explanation": "Predicted height: $\\hat{y} = 4.5 + 1.8(10) = 4.5 + 18 = 22.5\\text{ cm}$. Residual $= y - \\hat{y} = 25 - 22.5 = +2.5\\text{ cm}$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q17",
                "topic": "Exploring Data & Probability",
                "difficulty": "hard",
                "question": "Random variables $X$ and $Y$ are independent with $\\mu_X = 10$, $\\sigma_X = 3$, $\\mu_Y = 6$, and $\\sigma_Y = 4$. What is the standard deviation of $W = X - Y$?",
                "options": [
                    "5",
                    "1",
                    "7",
                    "25"
                ],
                "answer": "A",
                "explanation": "For independent random variables, variances always add: $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) = 3^2 + 4^2 = 9 + 16 = 25$. The standard deviation is $\\sigma_W = \\sqrt{25} = 5$.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q18",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "What is a key difference between an observational study and an experiment?",
                "options": [
                    "In an experiment, researchers actively impose treatments on experimental units to establish causation; in an observational study, no treatments are assigned",
                    "Observational studies allow establishing cause-and-effect relationships, whereas experiments do not",
                    "Experiments cannot utilize random assignment",
                    "Observational studies always eliminate confounding variables"
                ],
                "answer": "A",
                "explanation": "An experiment deliberately applies treatments to units to observe consequences, enabling causal inference. An observational study only observes and measures conditions without intervening.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q19",
                "topic": "Exploring Data & Probability",
                "difficulty": "hard",
                "question": "A two-way table shows 40 men and 60 women. 16 men and 24 women prefer Option A. Are gender and preference for Option A independent?",
                "options": [
                    "Yes, because $P(\\text{Option A}|\\text{Men}) = P(\\text{Option A}|\\text{Women}) = 0.40$",
                    "No, because more women than men chose Option A",
                    "No, because the total counts are unequal",
                    "Yes, because $16 + 24 = 40$"
                ],
                "answer": "A",
                "explanation": "$P(\\text{A}|\\text{Men}) = \\frac{16}{40} = 0.40$. $P(\\text{A}|\\text{Women}) = \\frac{24}{60} = 0.40$. Overall $P(\\text{A}) = \\frac{40}{100} = 0.40$. Since the conditional probabilities equal the overall probability, the events are independent.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-stats-data_q20",
                "topic": "Exploring Data & Probability",
                "difficulty": "medium",
                "question": "Which statistic is resistant to extreme outliers?",
                "options": [
                    "Interquartile Range (IQR)",
                    "Range",
                    "Mean",
                    "Standard deviation"
                ],
                "answer": "A",
                "explanation": "The Interquartile Range (IQR) and median are resistant statistics because they depend on the middle 50% of ranked observations, remaining unaffected by extreme values in the tails.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
