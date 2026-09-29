// ===============================
// ADMIN LOGIN
// ===============================

function adminLogin() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        document
            .getElementById("login-page")
            .classList.add("hidden");

        document
            .getElementById("dashboard")
            .classList.remove("hidden");

        loadQuestions();

    } else {

        document.getElementById("login-message").textContent =
            "❌ Wrong username or password!";
    }
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    document
        .getElementById("dashboard")
        .classList.add("hidden");

    document
        .getElementById("login-page")
        .classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


// ===============================
// QUESTIONS STORAGE
// ===============================

let questions =
    JSON.parse(localStorage.getItem("quizQuestions")) || [];

let editIndex = -1;


// ===============================
// SAVE QUESTION
// ===============================

function saveQuestion() {

    const question =
        document.getElementById("question").value.trim();

    const optionA =
        document.getElementById("optionA").value.trim();

    const optionB =
        document.getElementById("optionB").value.trim();

    const optionC =
        document.getElementById("optionC").value.trim();

    const optionD =
        document.getElementById("optionD").value.trim();

    const correctAnswer =
        document.getElementById("correctAnswer").value;


    if (
        !question ||
        !optionA ||
        !optionB ||
        !optionC ||
        !optionD ||
        !correctAnswer
    ) {

        alert("⚠️ Please fill all fields.");
        return;
    }


    const newQuestion = {

        question: question,

        options: [
            optionA,
            optionB,
            optionC,
            optionD
        ],

        answer: correctAnswer

    };


    // EDIT
    if (editIndex !== -1) {

        questions[editIndex] = newQuestion;

        editIndex = -1;

        document.getElementById("form-title").textContent =
            "➕ Add Question";

        document
            .getElementById("cancel-btn")
            .classList.add("hidden");

    }

    // ADD
    else {

        if (questions.length >= 50) {

            alert("⚠️ Maximum 50 questions allowed.");
            return;
        }

        questions.push(newQuestion);
    }


    // SAVE TO BROWSER
    localStorage.setItem(
        "quizQuestions",
        JSON.stringify(questions)
    );


    clearForm();
    loadQuestions();

    alert("✅ Question saved successfully!");
}


// ===============================
// LOAD QUESTIONS
// ===============================

function loadQuestions() {

    const list =
        document.getElementById("question-list");

    const count =
        document.getElementById("question-count");


    count.textContent = questions.length;


    list.innerHTML = "";


    if (questions.length === 0) {

        list.innerHTML =
            "<p class='empty'>No questions added yet.</p>";

        return;
    }


    questions.forEach((q, index) => {

        const div =
            document.createElement("div");

        div.className = "question-item";


        div.innerHTML = `

            <h3>
                ${index + 1}. ${escapeHTML(q.question)}
            </h3>

            <p>A. ${escapeHTML(q.options[0])}</p>
            <p>B. ${escapeHTML(q.options[1])}</p>
            <p>C. ${escapeHTML(q.options[2])}</p>
            <p>D. ${escapeHTML(q.options[3])}</p>

            <strong>
                ✅ Correct Answer: ${q.answer}
            </strong>

            <div class="actions">

                <button
                    class="edit-btn"
                    onclick="editQuestion(${index})"
                >
                    ✏️ Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteQuestion(${index})"
                >
                    🗑️ Delete
                </button>

            </div>
        `;


        list.appendChild(div);

    });
}


// ===============================
// EDIT QUESTION
// ===============================

function editQuestion(index) {

    const q = questions[index];

    document.getElementById("question").value =
        q.question;

    document.getElementById("optionA").value =
        q.options[0];

    document.getElementById("optionB").value =
        q.options[1];

    document.getElementById("optionC").value =
        q.options[2];

    document.getElementById("optionD").value =
        q.options[3];

    document.getElementById("correctAnswer").value =
        q.answer;


    editIndex = index;


    document.getElementById("form-title").textContent =
        "✏️ Edit Question";


    document
        .getElementById("cancel-btn")
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// DELETE QUESTION
// ===============================

function deleteQuestion(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this question?");


    if (!confirmDelete) {
        return;
    }


    questions.splice(index, 1);


    localStorage.setItem(
        "quizQuestions",
        JSON.stringify(questions)
    );


    loadQuestions();
}


// ===============================
// CANCEL EDIT
// ===============================

function cancelEdit() {

    editIndex = -1;

    clearForm();

    document.getElementById("form-title").textContent =
        "➕ Add Question";

    document
        .getElementById("cancel-btn")
        .classList.add("hidden");
}


// ===============================
// CLEAR FORM
// ===============================

function clearForm() {

    document.getElementById("question").value = "";

    document.getElementById("optionA").value = "";

    document.getElementById("optionB").value = "";

    document.getElementById("optionC").value = "";

    document.getElementById("optionD").value = "";

    document.getElementById("correctAnswer").value = "";
}


// ===============================
// SECURITY HELPER
// ===============================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}