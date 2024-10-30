const quizData = [
    {
        question: "What is the capital of Philippines?",
        options: ["Manila", "Davao ", "Cebu", "Panacan"],
        answer: "Manila"
    },
    {
        question: "Whats 1+1?",
        options: ["3", "2", "4", "6"],
        answer: "2"
    },
    {
        question: "What is the currency in Philippines?",
        options: ["Yen", "Euro", "Dollar", "Peso"],
        answer: "Peso"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the smallest country on Earth?",
        options: ["Afghanistan", "Japan", "Vatican ", "Europe"],
        answer: "Vatican"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = currentQuestion.question;

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    currentQuestion.options.forEach(option => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="radio" name="option" value="${option}" /> ${option}`;
        optionsList.appendChild(listItem);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsList);
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    const resultElement = document.getElementById("result");
    resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}