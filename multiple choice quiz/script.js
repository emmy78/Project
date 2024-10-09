const quizData = [
    {
        question: "The earliest data processing equipment were all manual-mechanical devices due to ",
        options: ["needs of the time ", "lack of adequate funds ", "absence of electricity and adequate technology ", "lack of government support"],
        answer: "absence of electricity and adequate technology",
    },
    {
        question: "The conversion of raw data into a meaningful form is called ",
        options: ["data processing ", "real processing ", "online processing ", "information processing"],
        answer: "data processing",
    },

    {
        question: "All computers have common basic functions which are",
        options: ["recording, processing and output arth", "input, storage and  merging", "processing, sorting, classifying and output ", "Sinput, processing, storage and output aturn"],
        answer: "input, processing, storage and output",
    },

    {
        question: "New and slim laptop computers merge the CPU and GPU into what is called ",
        options: ["ALU", "APU ", "CPU ", "DUP"],
        answer: "DUP",
    },
    {
        question: "Complex scientific research is usually done using",
        options: ["mainframe computer ", "super computer ", "minicomputer", "micro computerurn"],
        answer: "super computer",
    },
    {
        question: "Google drive is best example of what means of digitalization?",
        options: ["learning management system ", "web- based sharing ", "groups on social network ", "Satdigital publicationn"],
        answer: "web- based sharing",
    },
    {
        question: "The following are sources of information except",
        options: ["internet", "manipulation", "database", "magazine"],
        answer: "Mars",
    },
    {
        question: "A good information must possess the following characteristic except",
        options: ["accurate", "timely", "irrelevant", "cost effective "],
        answer: "irrelevant",
    },
    {
        question: "The process of ensuring that data is obtained, stored and disposed in a manner that it retains its integrity in a secured manner is called ",
        options: ["data handling ", "data model ", "data management", "data storage"],
        answer: "data management",
    },
    {
        question: "The buying and selling of goods on the internet is called",
        options: ["e-communication ", "e-commerce ", "e-banking ", "e-mining"],
        answer: "e-commerce",
    },
   
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");

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

submitButton.addEventListener("click", () => {
    const score = calculateScore();
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}.`;
});

// Load the quiz on page load
loadQuiz();
