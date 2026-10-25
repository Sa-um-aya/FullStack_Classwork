const list = [
    {
        question: "What is your father's name?",
        options: ["Bhardra", "Bhanu", "Bharat", "Pratap","Bhadaru"],
        correct: 1 
    },
    {
        question: "What is the color of the sky?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correct: 2 
    },
    {
        question: "What is the name of the pigment that provides color to the skin?",
        options: ["chlorophyl", "betadin", "melanin", "chromosome"],
        correct: 2 
    },
    {
        question: "What is the color of the Ashok Chakra?",
        options: ["Green", "Bhagwa", "Blue", "Red"], 
        correct: 2
    },
    {
        question: "Who is the father of computers?",
        options: ["Charles Babbage", "Julius Ceasar", "Barles Cabbage", "None of the above"], 
        correct: 0 
    }
];

let currentIndex = 0;
let score = 0;
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const quizArea = document.getElementById("quiz-area");
const resultArea = document.getElementById("result-area");
const finalScoreEl = document.getElementById("final-score");

function loadQuestion() {
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = " ";
    const currentItem = list[currentIndex];

    progressEl.innerText = `Q ${currentIndex + 1}/${list.length}`;
    scoreEl.innerText = `Score: ${score}`;
    questionEl.innerText = currentItem.question;

    currentItem.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => handleAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    const currentItem = list[currentIndex];
    if (selectedIndex === currentItem.correct) {
        score++;
        scoreEl.innerText = `Score: ${score}`;
    }
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);
    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < list.length) {
        loadQuestion();
    } else {
        quizArea.classList.add("hidden");
        resultArea.classList.remove("hidden");
        finalScoreEl.innerText = `You scored ${score} out of ${list.length}`;
    }
};

loadQuestion();
