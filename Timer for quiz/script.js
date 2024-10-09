const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee",
    },
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");
const timeDisplay = document.getElementById("time");

let timeLeft = 60; // Set timer duration in seconds
let timerInterval;

function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<h3>${index + 1}. ${item.question}</h3>`;

        item.options.forEach(option => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
                <br>
            `;
        });

        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;

    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });

    return score;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    const score = calculateScore();
    resultContainer.innerHTML = `Time's up! You scored ${score} out of ${quizData.length}.`;
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
}

submitButton.addEventListener("click", submitQuiz);

// Load the quiz and start the timer on page load
loadQuiz();
startTimer();
