const AP_TEST_DATA = {
    "ap-diag-stats": {
        "id": "ap-diag-stats",
        "title": "AP Statistics Diagnostic Assessment",
        "subtitle": "Evaluates baseline readiness across Data Analysis & Probability",
        "timeLimitMinutes": 40,
        "testType": "Diagnostic",
        "subject": "AP Statistics",
        "questions": [
            {
                "id": "dstats_1",
                "topic": "Data",
                "difficulty": "easy",
                "question": "Which measure of center is resistant to extreme outliers?",
                "options": [
                    "Mean",
                    "Median",
                    "Standard Deviation",
                    "Range"
                ],
                "answer": "B",
                "explanation": "The median is resistant to extreme values."
            },
            {
                "id": "stat_2",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "The mean of {2, 4, 6, 8, 10} is:",
                "options": [
                "5",
                "6",
                "7",
                "8"
                ],
                "answer": "B",
                "explanation": "Sum = 30, n = 5, mean = 30/5 = 6."
            },
            {
                "id": "stat_3",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "The median of {3, 7, 5, 1, 9} is:",
                "options": [
                "3",
                "5",
                "7",
                "1"
                ],
                "answer": "B",
                "explanation": "Sorted: {1, 3, 5, 7, 9}. Middle value = 5."
            },
            {
                "id": "stat_4",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "Which measure of spread is most resistant to outliers?",
                "options": [
                "Range",
                "Standard deviation",
                "IQR",
                "Variance"
                ],
                "answer": "C",
                "explanation": "IQR uses the middle 50% of data and is not affected by extreme values."
            },
            {
                "id": "stat_5",
                "topic": "Probability",
                "difficulty": "easy",
                "question": "If P(A) = 0.4 and P(B) = 0.3 and A, B are independent, P(A and B) = ?",
                "options": [
                "0.7",
                "0.12",
                "0.1",
                "0.5"
                ],
                "answer": "B",
                "explanation": "For independent events: P(A and B) = P(A) * P(B) = 0.4 * 0.3 = 0.12."
            },
            {
                "id": "stat_6",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "P(A or B) = 0.7, P(A) = 0.4, P(B) = 0.5. What is P(A and B)?",
                "options": [
                "0.2",
                "0.3",
                "0.1",
                "0.9"
                ],
                "answer": "A",
                "explanation": "P(A or B) = P(A)+P(B)-P(A and B) => 0.7 = 0.9 - P(A and B) => P(A and B) = 0.2."
            },
            {
                "id": "stat_7",
                "topic": "Normal Distribution",
                "difficulty": "medium",
                "question": "Approximately what percentage of data falls within 1 standard deviation in a normal distribution?",
                "options": [
                "68%",
                "95%",
                "99.7%",
                "50%"
                ],
                "answer": "A",
                "explanation": "The empirical rule: ~68% of data falls within +-1 sigma of the mean."
            },
            {
                "id": "stat_8",
                "topic": "Normal Distribution",
                "difficulty": "medium",
                "question": "z-score for a data point of 80, mean=70, SD=5?",
                "options": [
                "1",
                "2",
                "10",
                "-2"
                ],
                "answer": "B",
                "explanation": "z = (80 - 70)/5 = 2."
            },
            {
                "id": "stat_9",
                "topic": "Sampling",
                "difficulty": "medium",
                "question": "A simple random sample (SRS) ensures:",
                "options": [
                "Every individual has an equal chance of selection",
                "The sample is perfectly representative",
                "No bias exists",
                "Stratification by group"
                ],
                "answer": "A",
                "explanation": "In an SRS, every individual has an equal probability of being selected."
            },
            {
                "id": "stat_10",
                "topic": "Hypothesis Testing",
                "difficulty": "medium",
                "question": "The null hypothesis (H0) typically states:",
                "options": [
                "There is a significant effect",
                "There is no effect or no difference",
                "The alternative is true",
                "p < 0.05"
                ],
                "answer": "B",
                "explanation": "H0 is the claim of no effect or no difference that we test against."
            },
            {
                "id": "stat_11",
                "topic": "Hypothesis Testing",
                "difficulty": "medium",
                "question": "A p-value of 0.03 with alpha = 0.05 means:",
                "options": [
                "Fail to reject H0",
                "Reject H0",
                "Accept H1 definitively",
                "Repeat the test"
                ],
                "answer": "B",
                "explanation": "Since p-value (0.03) < alpha (0.05), we reject the null hypothesis."
            },
            {
                "id": "stat_12",
                "topic": "Confidence Intervals",
                "difficulty": "medium",
                "question": "A 95% confidence interval means:",
                "options": [
                "95% of data falls in the interval",
                "The true parameter is definitely in this interval",
                "If repeated many times, 95% of such intervals contain the true parameter",
                "The sample mean equals the population mean"
                ],
                "answer": "C",
                "explanation": "Confidence intervals are interpreted in terms of repeated sampling procedures."
            },
            {
                "id": "stat_13",
                "topic": "Regression",
                "difficulty": "medium",
                "question": "In y-hat = 3 + 2x, what does the slope 2 represent?",
                "options": [
                "The y-intercept",
                "For each 1-unit increase in x, y increases by 2 on average",
                "The correlation coefficient",
                "The predicted value when x = 0"
                ],
                "answer": "B",
                "explanation": "The slope represents the average change in the response variable for each 1-unit increase in the explanatory variable."
            },
            {
                "id": "stat_14",
                "topic": "Regression",
                "difficulty": "medium",
                "question": "Correlation coefficient r = -0.85 indicates:",
                "options": [
                "Weak positive relationship",
                "Strong positive relationship",
                "Strong negative relationship",
                "No relationship"
                ],
                "answer": "C",
                "explanation": "r close to -1 indicates a strong negative linear relationship between variables."
            },
            {
                "id": "stat_15",
                "topic": "Categorical Data",
                "difficulty": "easy",
                "question": "A chi-square test is used to analyze:",
                "options": [
                "Means of two groups",
                "Association between categorical variables",
                "Correlation of quantitative variables",
                "Differences in medians"
                ],
                "answer": "B",
                "explanation": "Chi-square tests analyze whether a significant association exists between categorical variables."
            },
            {
                "id": "stat_16",
                "topic": "Binomial",
                "difficulty": "medium",
                "question": "For a binomial distribution with n=10, p=0.5, what is the mean?",
                "options": [
                "5",
                "2.5",
                "10",
                "0.5"
                ],
                "answer": "A",
                "explanation": "Mean of binomial distribution = n*p = 10 * 0.5 = 5."
            },
            {
                "id": "stat_17",
                "topic": "Binomial",
                "difficulty": "medium",
                "question": "Which condition is NOT required for a binomial setting?",
                "options": [
                "Fixed number of trials",
                "Independent trials",
                "Same probability of success each trial",
                "Continuous outcomes"
                ],
                "answer": "D",
                "explanation": "Binomial requires discrete binary outcomes (success/failure), not continuous outcomes."
            },
            {
                "id": "stat_18",
                "topic": "Sampling Distributions",
                "difficulty": "hard",
                "question": "As sample size increases, the standard error of the mean:",
                "options": [
                "Increases",
                "Decreases",
                "Stays the same",
                "Doubles"
                ],
                "answer": "B",
                "explanation": "Standard error = sigma/sqrt(n). As n increases, standard error decreases."
            },
            {
                "id": "stat_19",
                "topic": "Two-sample Tests",
                "difficulty": "hard",
                "question": "A two-sample t-test compares:",
                "options": [
                "A sample mean to a known population mean",
                "Means of two independent groups",
                "A single proportion",
                "Normality of a distribution"
                ],
                "answer": "B",
                "explanation": "Two-sample t-test compares means from two separate, independent groups."
            },
            {
                "id": "stat_20",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "The complement of event A is:",
                "options": [
                "A and B",
                "Not A",
                "A or B",
                "A given B"
                ],
                "answer": "B",
                "explanation": "The complement of A is the event that A does NOT occur: P(A-complement) = 1 - P(A)."
            },
            {
                "id": "stat_21",
                "topic": "Descriptive Statistics",
                "difficulty": "easy",
                "question": "Which plot best shows shape, center, and spread of a distribution?",
                "options": [
                "Bar chart",
                "Pie chart",
                "Boxplot",
                "Scatter plot"
                ],
                "answer": "C",
                "explanation": "A boxplot displays the five-number summary revealing shape and spread."
            },
            {
                "id": "stat_22",
                "topic": "Experimental Design",
                "difficulty": "medium",
                "question": "In a completely randomized experiment, subjects are assigned to groups:",
                "options": [
                "Based on their scores",
                "By stratification",
                "Randomly",
                "By researcher's choice"
                ],
                "answer": "C",
                "explanation": "Random assignment is the defining feature of a completely randomized experiment."
            },
            {
                "id": "stat_23",
                "topic": "Experimental Design",
                "difficulty": "medium",
                "question": "The purpose of a control group is:",
                "options": [
                "To receive the treatment",
                "To provide a baseline for comparison",
                "To maximize sample size",
                "To eliminate all variability"
                ],
                "answer": "B",
                "explanation": "A control group receives no treatment to serve as a baseline for comparison."
            },
            {
                "id": "stat_24",
                "topic": "Inference for Proportions",
                "difficulty": "hard",
                "question": "A one-proportion z-test is used when:",
                "options": [
                "Comparing two population means",
                "Testing whether a population proportion equals a specific value",
                "Testing independence of categorical variables",
                "Comparing two variances"
                ],
                "answer": "B",
                "explanation": "A one-proportion z-test tests whether a sample provides evidence that a population proportion differs from a claimed value."
            },
            {
                "id": "stat_25",
                "topic": "Normal Distribution",
                "difficulty": "hard",
                "question": "If X ~ N(100, 225), what is P(X > 130)?",
                "options": [
                "~0.023",
                "~0.159",
                "~0.5",
                "~0.977"
                ],
                "answer": "A",
                "explanation": "z = (130-100)/15 = 2. P(Z > 2) is approximately 0.023."
            },
            {
                "id": "stat_26",
                "topic": "Probability",
                "difficulty": "medium",
                "question": "Two events are mutually exclusive if:",
                "options": [
                "They are independent",
                "They cannot occur simultaneously",
                "Their probabilities sum to 1",
                "One causes the other"
                ],
                "answer": "B",
                "explanation": "Mutually exclusive events cannot happen at the same time: P(A and B) = 0."
            },
            {
                "id": "stat_27",
                "topic": "Regression",
                "difficulty": "hard",
                "question": "R-squared = 0.81 means:",
                "options": [
                "The correlation is 0.81",
                "81% of variability in y is explained by x",
                "r = 0.81 squared",
                "The model predicts 81 data points correctly"
                ],
                "answer": "B",
                "explanation": "R-squared represents the proportion of variation in the response variable explained by the regression model."
            },
            {
                "id": "stat_28",
                "topic": "Sampling",
                "difficulty": "medium",
                "question": "Stratified random sampling:",
                "options": [
                "Uses random clusters",
                "Divides population into homogeneous groups then samples from each",
                "Uses self-selected volunteers",
                "Uses consecutive subjects"
                ],
                "answer": "B",
                "explanation": "Stratified sampling divides the population into subgroups (strata) and randomly samples from each stratum."
            },
            {
                "id": "stat_29",
                "topic": "Descriptive Statistics",
                "difficulty": "medium",
                "question": "Which statistic is most affected by extreme outliers?",
                "options": [
                "Median",
                "IQR",
                "Mean",
                "Mode"
                ],
                "answer": "C",
                "explanation": "The mean uses all data values in its calculation and is heavily influenced by extreme values."
            },
            {
                "id": "stat_30",
                "topic": "Type I Error",
                "difficulty": "hard",
                "question": "A Type I error occurs when you:",
                "options": [
                "Fail to reject a false H0",
                "Reject a true H0",
                "Accept H1 with certainty",
                "Set alpha too low"
                ],
                "answer": "B",
                "explanation": "Type I error: rejecting the null hypothesis when it is actually true (false positive)."
            }
        ]
    }
};
