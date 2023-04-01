const startBtn = document.getElementById("start-btn");
const endBtn = document.getElementById("end-test");
const quizAnswers = document.getElementsByClassName("ans");
const nextBtn = document.getElementById("next-btn");
const questionText = document.getElementById("question-single");
const quizProvideAnswers = document.getElementById("quiz-answers")
const scoreTag = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    nextBtn.classList.remove("hide");
    endBtn.classList.remove("hide");
    startBtn.innerText ="Reset";
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const optionButton = document.createElement("button")
        optionButton.classList.add("ans");
        optionButton.textContent = answer.text
        quizProvideAnswers.appendChild(optionButton)
        optionButton.addEventListener("click", () =>{
            if (answer.correct == true){
                score++;
                console.log(score);
            }
            currentQuestionIndex++;
            quizProvideAnswers.innerHTML ='';
            if(currentQuestionIndex < questions.length){
                startQuiz()
            }else{
                questionText.innerText ="Quiz Complete!"
                scoreTag.textContent = score;
                console.log(score);
            }
        })
    })
}
startBtn.onclick =()=>{
    startQuiz();
}

const questions = [
    {
        question: "Which is a javascript framework!",
        answers: [
            {text: "React", correct: true},
            {text: "Django", correct: false},
            {text: "Python", correct: false},
            {text: "Eclipse", correct: false},
        ],
    },
    {
        question: "What is the average time frame for learning the Javascript fullstack programming course",
        answers: [
            {text: "2 months", correct: false},
            {text: "10 months", correct: false},
            {text: "1 year", correct: false},
            {text: "6 months", correct: true},
        ],
    },
    {
        question: "Which is not within Javascript?",
        answers: [
            {text: "this", correct: false},
            {text: "employ", correct: true},
            {text: "function", correct: false},
            {text: "const", correct: false},
        ],
    },
    {
        question: "Which is a javascript framework!",
        answers: [
            {text: "React", correct: true},
            {text: "Django", correct: false},
            {text: "Python", correct: false},
            {text: "Eclipse", correct: false},
        ],
    },
    {
        question: "Which is a javascript framework!",
        answers: [
            {text: "React", correct: true},
            {text: "Django", correct: false},
            {text: "Python", correct: false},
            {text: "Eclipse", correct: false},
        ],
    },

]