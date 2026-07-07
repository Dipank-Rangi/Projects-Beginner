const questions = [
    {
        Question : "Which is largest animal in the world?",
        answers:[
            {text:"Elephant" , correct:false},
            {text:"Shark" , correct:false},
            {text:"Blue Whale" , correct:true},
            {text:"HippoPotomas" , correct:false},

        ]
    },

     {
        Question : "Which is smallest country in the world?",
        answers:[
            {text:"Vatican City" , correct:true},
            {text:"Bhutan" , correct:false},
            {text:"Nepal" , correct:false},
            {text:"Shri Lanka" , correct:false},

        ]
    },

     {
        Question : "Which is largest desert in the world?",
        answers:[
            {text:"Kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"Sahara" , correct:false},
            {text:"Antartica" , correct:true},

        ]
    },

     {
        Question : "Which is smallest continent in the world?",
        answers:[
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Arctic" , correct:false},
            {text:"Africa" , correct:false},

        ]
    }




];

const questionElement = document.querySelector('#question');
const answerButton = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next');

let currQuesIdx = 0;
let score = 0;


function startQuiz(){
    currQuesIdx = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currenQuestion = questions[currQuesIdx];
    let questionNo = currQuesIdx+1;
    questionElement.innerHTML = questionNo + ". " + currenQuestion.Question;

    currenQuestion.answers.forEach(answer=> {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click' , selectAnswer)
        // answerButton.style.display = 'block';
        // nextButton.style.display = 'block';
    });
}


function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
    

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currQuesIdx++;
    if(currQuesIdx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click" , ()=>{
    if(currQuesIdx < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

