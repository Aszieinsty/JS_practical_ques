const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale",
    }
];

let userAnswers = [];

function submitQuiz() {
    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
    
    if (selectedOptions.length === quizData.length) {
        selectedOptions.forEach((selectedOption, index) => {
            userAnswers[index] = selectedOption.value;
        });
        
        displayResult();
    } else {
        alert("Please answer all questions before submitting.");
    }
}

function displayResult() {
    const score = calculateScore();
    const resultMessage = score === quizData.length ? "Congratulations! You got all questions correct!" : `You got ${score} out of ${quizData.length} questions correct.`;

    // Redirect to the result page
    window.location.href = `result.html?score=${score}&message=${encodeURIComponent(resultMessage)}`;
}

function calculateScore() {
    return quizData.filter((question, index) => userAnswers[index] === question.correctAnswer).length;
}
