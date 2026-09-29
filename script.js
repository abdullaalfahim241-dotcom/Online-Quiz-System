// =====================================================
//  ONLINE QUIZ SYSTEM
//  50 MIXED MCQ
//  ALL QUESTIONS SHOWN TOGETHER
//  TIME: 1 HOUR
// =====================================================


// =====================================================
// QUESTIONS
// =====================================================

const questions = [

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Computer Processing Unit"
        ],
        answer: 0
    },

    {
        question: "Which device is used to input text into a computer?",
        options: [
            "Monitor",
            "Keyboard",
            "Speaker",
            "Printer"
        ],
        answer: 1
    },

    {
        question: "Which of the following is an operating system?",
        options: [
            "Google",
            "Windows",
            "HTML",
            "Python"
        ],
        answer: 1
    },

    {
        question: "What does RAM stand for?",
        options: [
            "Read Access Memory",
            "Random Access Memory",
            "Run Access Memory",
            "Rapid Access Machine"
        ],
        answer: 1
    },

    {
        question: "Which one is a programming language?",
        options: [
            "Python",
            "Windows",
            "Chrome",
            "Google"
        ],
        answer: 0
    },

    {
        question: "Which data structure follows FIFO?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: 1
    },

    {
        question: "Which data structure follows LIFO?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Graph"
        ],
        answer: 1
    },

    {
        question: "What is the binary value of decimal 2?",
        options: [
            "01",
            "10",
            "11",
            "100"
        ],
        answer: 1
    },

    {
        question: "Which one is a database management system?",
        options: [
            "MySQL",
            "HTML",
            "CSS",
            "Windows"
        ],
        answer: 0
    },

    {
        question: "What does URL stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Reference Link",
            "User Resource Locator"
        ],
        answer: 0
    },


    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is mainly used to make web pages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<p>",
            "<a>",
            "<h1>",
            "<img>"
        ],
        answer: 1
    },

    {
        question: "Which HTML tag is used to insert an image?",
        options: [
            "<image>",
            "<pic>",
            "<img>",
            "<src>"
        ],
        answer: 2
    },

    {
        question: "Which CSS property changes text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "&"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for a class selector in CSS?",
        options: [
            "#",
            ".",
            "*",
            "$"
        ],
        answer: 1
    },

    {
        question: "Which language is used for database queries?",
        options: [
            "SQL",
            "CSS",
            "HTML",
            "XML"
        ],
        answer: 0
    },

    {
        question: "Which JavaScript keyword can declare a variable?",
        options: [
            "var",
            "variable",
            "define",
            "declare"
        ],
        answer: 0
    },


    {
        question: "What is 10 + 15?",
        options: [
            "20",
            "25",
            "30",
            "35"
        ],
        answer: 1
    },

    {
        question: "What is 12 × 5?",
        options: [
            "50",
            "55",
            "60",
            "65"
        ],
        answer: 2
    },

    {
        question: "What is the square of 8?",
        options: [
            "16",
            "32",
            "64",
            "80"
        ],
        answer: 2
    },

    {
        question: "What is √81?",
        options: [
            "7",
            "8",
            "9",
            "10"
        ],
        answer: 2
    },

    {
        question: "What is 25% of 200?",
        options: [
            "25",
            "40",
            "50",
            "75"
        ],
        answer: 2
    },

    {
        question: "What is the LCM of 4 and 6?",
        options: [
            "8",
            "10",
            "12",
            "24"
        ],
        answer: 2
    },

    {
        question: "What is the GCD of 12 and 18?",
        options: [
            "2",
            "3",
            "6",
            "9"
        ],
        answer: 2
    },

    {
        question: "Which number is a prime number?",
        options: [
            "9",
            "15",
            "17",
            "21"
        ],
        answer: 2
    },

    {
        question: "What is 2⁵?",
        options: [
            "10",
            "16",
            "25",
            "32"
        ],
        answer: 3
    },

    {
        question: "If x + 5 = 12, what is x?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 2
    },


    {
        question: "What is the capital of Bangladesh?",
        options: [
            "Chattogram",
            "Dhaka",
            "Sylhet",
            "Rajshahi"
        ],
        answer: 1
    },

    {
        question: "What is the national flower of Bangladesh?",
        options: [
            "Rose",
            "Water Lily",
            "Sunflower",
            "Lotus"
        ],
        answer: 1
    },

    {
        question: "What is the largest planet in our Solar System?",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        answer: 2
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: [
            "Venus",
            "Mars",
            "Jupiter",
            "Mercury"
        ],
        answer: 1
    },

    {
        question: "How many continents are there?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 2
    },

    {
        question: "Which is the largest ocean?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2
    },

    {
        question: "What is the chemical symbol of Oxygen?",
        options: [
            "O",
            "Ox",
            "C",
            "N"
        ],
        answer: 0
    },

    {
        question: "How many days are there in a leap year?",
        options: [
            "365",
            "366",
            "364",
            "367"
        ],
        answer: 1
    },

    {
        question: "Which gas do humans need for respiration?",
        options: [
            "Carbon dioxide",
            "Oxygen",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: 1
    },

    {
        question: "How many sides does a triangle have?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1
    },


    {
        question: "What is the SI unit of electric current?",
        options: [
            "Volt",
            "Watt",
            "Ampere",
            "Ohm"
        ],
        answer: 2
    },

    {
        question: "What is the SI unit of resistance?",
        options: [
            "Volt",
            "Ohm",
            "Ampere",
            "Watt"
        ],
        answer: 1
    },

    {
        question: "Which instrument measures voltage?",
        options: [
            "Ammeter",
            "Voltmeter",
            "Wattmeter",
            "Thermometer"
        ],
        answer: 1
    },

    {
        question: "Which instrument measures electric current?",
        options: [
            "Voltmeter",
            "Ammeter",
            "Wattmeter",
            "Oscilloscope"
        ],
        answer: 1
    },

    {
        question: "What is the full form of AI?",
        options: [
            "Automated Internet",
            "Artificial Intelligence",
            "Advanced Information",
            "Automatic Interface"
        ],
        answer: 1
    },

    {
        question: "What does IoT stand for?",
        options: [
            "Internet of Things",
            "Internet of Technology",
            "Input of Things",
            "Information of Technology"
        ],
        answer: 0
    },

    {
        question: "Which graph has vertices and edges?",
        options: [
            "Graph",
            "Array",
            "Stack",
            "Queue"
        ],
        answer: 0
    },

    {
        question: "A tree is a type of which structure?",
        options: [
            "Linear data structure",
            "Non-linear data structure",
            "Primitive data",
            "Database"
        ],
        answer: 1
    },

    {
        question: "How many vertices does a triangle graph have?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1
    },

    {
        question: "Which one is a renewable energy source?",
        options: [
            "Coal",
            "Natural Gas",
            "Solar Energy",
            "Petroleum"
        ],
        answer: 2
    }

];


// =====================================================
// VARIABLES
// =====================================================

let timeLeft = 60 * 60;

let timer;

let studentName = "";

let studentId = "";


// =====================================================
// ELEMENTS
// =====================================================

const startPage =
    document.getElementById("start-page");

const quizPage =
    document.getElementById("quiz-page");

const resultPage =
    document.getElementById("result-page");

const questionsContainer =
    document.getElementById("questions-container");

const startButton =
    document.getElementById("start-btn");

const submitButton =
    document.getElementById("submit-btn");

const restartButton =
    document.getElementById("restart-btn");

const timerElement =
    document.getElementById("timer");


// =====================================================
// START QUIZ
// =====================================================

startButton.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    studentName =
        document.getElementById("student-name")
        .value.trim();

    studentId =
        document.getElementById("student-id")
        .value.trim();


    if (studentName === "") {

        alert("Please enter your name.");

        return;
    }


    if (studentId === "") {

        alert("Please enter your Student ID.");

        return;
    }


    document.getElementById(
        "display-name"
    ).textContent = studentName;


    document.getElementById(
        "display-id"
    ).textContent = studentId;


    startPage.classList.add("hidden");

    quizPage.classList.remove("hidden");


    showAllQuestions();

    startTimer();

}


// =====================================================
// SHOW ALL QUESTIONS
// =====================================================

function showAllQuestions() {

    questionsContainer.innerHTML = "";


    questions.forEach(
        (question, questionIndex) => {

            const questionBox =
                document.createElement("div");


            questionBox.classList.add(
                "question-box"
            );


            const questionTitle =
                document.createElement("div");


            questionTitle.classList.add(
                "question-title"
            );


            questionTitle.textContent =
                `${questionIndex + 1}. ${question.question}`;


            questionBox.appendChild(
                questionTitle
            );


            question.options.forEach(
                (option, optionIndex) => {

                    const label =
                        document.createElement("label");


                    label.classList.add(
                        "option"
                    );


                    const radio =
                        document.createElement("input");


                    radio.type = "radio";

                    radio.name =
                        `question-${questionIndex}`;

                    radio.value =
                        optionIndex;


                    label.appendChild(radio);


                    label.appendChild(
                        document.createTextNode(
                            option
                        )
                    );


                    questionBox.appendChild(
                        label
                    );

                }
            );


            questionsContainer.appendChild(
                questionBox
            );

        }
    );

}


// =====================================================
// TIMER
// =====================================================

function startTimer() {

    timer =
        setInterval(
            function () {

                let minutes =
                    Math.floor(
                        timeLeft / 60
                    );


                let seconds =
                    timeLeft % 60;


                minutes =
                    String(minutes)
                    .padStart(2, "0");


                seconds =
                    String(seconds)
                    .padStart(2, "0");


                timerElement.textContent =
                    `${minutes}:${seconds}`;


                timeLeft--;


                if (timeLeft < 0) {

                    clearInterval(timer);

                    alert(
                        "Time is over! Your quiz will be submitted automatically."
                    );

                    submitQuiz();

                }

            },
            1000
        );

}


// =====================================================
// SUBMIT BUTTON
// =====================================================

submitButton.addEventListener(
    "click",
    function () {

        const confirmation =
            confirm(
                "Are you sure you want to submit the quiz?"
            );


        if (confirmation) {

            submitQuiz();

        }

    }
);


// =====================================================
// SUBMIT QUIZ
// =====================================================

function submitQuiz() {

    clearInterval(timer);

    let correct = 0;
    let answered = 0;

    // Answer Script container
    const answerReview =
        document.getElementById("answer-review");

    answerReview.innerHTML = "";


    // Check every question
    questions.forEach(
        (question, questionIndex) => {

            const selected =
                document.querySelector(
                    `input[name="question-${questionIndex}"]:checked`
                );


            let userAnswerIndex = null;


            if (selected) {

                userAnswerIndex =
                    Number(selected.value);

                answered++;

            }


            // Check correct answer

            if (
                userAnswerIndex ===
                question.answer
            ) {

                correct++;

            }


            // =========================
            // CREATE ANSWER REVIEW
            // =========================

            const review =
                document.createElement("div");


            review.classList.add(
                "review-question"
            );


            // Question

            const title =
                document.createElement("h3");


            title.textContent =
                `${questionIndex + 1}. ${question.question}`;


            review.appendChild(title);


            // User Answer

            const userAnswer =
                document.createElement("p");


            if (userAnswerIndex === null) {

                userAnswer.innerHTML =
                    `Your Answer:
                    <span class="user-answer">
                    Not Answered
                    </span>`;

            } else {

                userAnswer.innerHTML =
                    `Your Answer:
                    <span class="user-answer">
                    ${question.options[userAnswerIndex]}
                    </span>`;

            }


            review.appendChild(userAnswer);


            // Correct Answer

            const correctAnswer =
                document.createElement("p");


            correctAnswer.innerHTML =
                `Correct Answer:
                <span class="correct-answer">
                ${question.options[question.answer]}
                </span>`;


            review.appendChild(correctAnswer);


            // Status

            const status =
                document.createElement("p");


            if (
                userAnswerIndex ===
                question.answer
            ) {

                review.classList.add("correct");

                status.innerHTML =
                    `<span class="status-correct">
                    ✅ Correct
                    </span>`;

            }

            else if (
                userAnswerIndex === null
            ) {

                review.classList.add(
                    "unanswered"
                );

                status.innerHTML =
                    `<span class="status-unanswered">
                    ⚪ Unanswered
                    </span>`;

            }

            else {

                review.classList.add("wrong");

                status.innerHTML =
                    `<span class="status-wrong">
                    ❌ Wrong
                    </span>`;

            }


            review.appendChild(status);


            // Add question to Answer Script

            answerReview.appendChild(review);

        }
    );


    // =========================
    // RESULT CALCULATION
    // =========================

    const total =
        questions.length;


    const wrong =
        answered - correct;


    const unanswered =
        total - answered;


    const percentage =
        (
            (correct / total) * 100
        ).toFixed(2);


    // =========================
    // GRADE
    // =========================

    let grade;


    if (percentage >= 80) {

        grade = "A+";

    }

    else if (percentage >= 70) {

        grade = "A";

    }

    else if (percentage >= 60) {

        grade = "A-";

    }

    else if (percentage >= 50) {

        grade = "B";

    }

    else if (percentage >= 40) {

        grade = "C";

    }

    else if (percentage >= 33) {

        grade = "D";

    }

    else {

        grade = "F";

    }


    // =========================
    // SHOW RESULT
    // =========================

    document.getElementById(
        "result-name"
    ).textContent = studentName;


    document.getElementById(
        "result-id"
    ).textContent = studentId;


    document.getElementById(
        "total"
    ).textContent = total;


    document.getElementById(
        "correct"
    ).textContent = correct;


    document.getElementById(
        "wrong"
    ).textContent = wrong;


    document.getElementById(
        "unanswered"
    ).textContent = unanswered;


    document.getElementById(
        "score"
    ).textContent =
        `${correct} / ${total}`;


    document.getElementById(
        "percentage"
    ).textContent = percentage;


    document.getElementById(
        "grade"
    ).textContent = grade;


    // Hide Quiz

    quizPage.classList.add("hidden");


    // Show Result

    resultPage.classList.remove("hidden");


    window.scrollTo(
        0,
        0
    );

}


    // =========================
    // GRADE
    // =========================

    let grade;


    if (percentage >= 80) {

        grade = "A+";

    } else if (percentage >= 70) {

        grade = "A";

    } else if (percentage >= 60) {

        grade = "A-";

    } else if (percentage >= 50) {

        grade = "B";

    } else if (percentage >= 40) {

        grade = "C";

    } else if (percentage >= 33) {

        grade = "D";

    } else {

        grade = "F";

    }


    // =========================
    // SHOW RESULT
    // =========================

    document.getElementById(
        "result-name"
    ).textContent = studentName;


    document.getElementById(
        "result-id"
    ).textContent = studentId;


    document.getElementById(
        "total"
    ).textContent = total;


    document.getElementById(
        "correct"
    ).textContent = correct;


    document.getElementById(
        "wrong"
    ).textContent = wrong;


    document.getElementById(
        "unanswered"
    ).textContent = unanswered;


    document.getElementById(
        "score"
    ).textContent =
        `${correct} / ${total}`;


    document.getElementById(
        "percentage"
    ).textContent = percentage;


    document.getElementById(
        "grade"
    ).textContent = grade;


    // Hide quiz

    quizPage.classList.add("hidden");


    // Show result

    resultPage.classList.remove("hidden");


    // Scroll to top

    window.scrollTo(
        0,
        0
    );




// =====================================================
// RESTART QUIZ
// =====================================================

restartButton.addEventListener(
    "click",
    function () {

        clearInterval(timer);


        timeLeft =
            60 * 60;


        studentName = "";

        studentId = "";


        document.getElementById(
            "student-name"
        ).value = "";


        document.getElementById(
            "student-id"
        ).value = "";


        resultPage.classList.add(
            "hidden"
        );


        startPage.classList.remove(
            "hidden"
        );


        window.scrollTo(
            0,
            0
        );

    }
);