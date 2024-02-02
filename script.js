

const questions = [
    {
    question : "What is the correct way to declare a variable in Javascript?",
    answers: [
        {text:"var myVar = 10;",correct:false},
        {text:"let myVar = 10;",correct:true},
        {text:"const myVar = 10;",correct:false},
        {text:"All of the above ;",correct:false},
        
    ]},

    {
    question : "Which of the following is  a falsy value in Javascript?",
    answers: [
        {text:"0;",correct:false},
        {text:" '';",correct:false},
        {text:"null;",correct:false},
        {text:"All of the above ;",correct:true},
    ]},

    {
    question :"Which HTML tag is used  to create a hyperlink?",
    answers: [
        {text:"link;",correct:false},
        {text:" a;",correct:true},
        {text:"href;",correct:false},
        {text:"hyper;",correct:false},
    ]},

    {
    question : "What does HTML stands for??",
    answers: [
        {text:"HyperText Markup Language;",correct:true},
        {text:"HyperText Makeup Language;",correct:false},
        
        {text:"HyperTransfer Markup Language;",correct:false},
        {text:"HighText Markup Language ;",correct:false},
    ]},

    {
    question : "Which HTML tag is used for creating an unordered list?",
    answers: [
        {text:"list;",correct:false},
        {text:"ol;",correct:false},
        {text:"li ;",correct:false},
        {text:"ul;",correct:true},
    ]},

    {
    question : "What is the purpose of the jQuery library?",
    answers: [
        {text:"To style HTML elements;",correct:false},
        {text:"To manipulate HTML documents;",correct:true},
        {text:"To create HTML forms;",correct:false},
        {text:"To validate HTML code ;",correct:false},
    ]},
    
     {
    question : "Which of the following is the correct syntax to select an element with id 'myElement' using jQuery?",
    answers: [
        {text:"$('myElement');",correct:false},
        {text:"$('#myElement');",correct:true},
        {text:"$('.myElement');",correct:false},
        {text:"Tdiv[myElement] ;",correct:false},
    ]},

    {
    question : "What does the $(document).ready() function do in jQuery?",
    answers: [
        {text:"It waits for the DOM to be ready before executing the code inside;",correct:true},
        {text:"It defines a new document.;",correct:false},
        {text:"It triggers a function when the document is loaded.;",correct:false},
        {text:"It initializes a document for jQuery operations. ;",correct:false},
    ]},
    
    

    
];

const questionElement = document.getElementById("question");
const answerButtons =  document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
let score = 0;

function quizBoardStart(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    DisplayQuestion();

}


function DisplayQuestion(){
    changeState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +  currentQuestion.question;



     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
         });
         
}


  function changeState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    }


    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;

        } else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");

            }
            button.disabled = true;
            
        });
         nextButton.style.display = "block";
    }


    //function that will show the score of the user

   function DisplayResult(){
   changeState();
   questionElement.innerHTML = 'Congratulations!,Your score is'  +  score  + 'out of'  + questions.length + '!';

  nextButton.innerHTML = "Attempt again!";
  nextButton.style.display = "block";   
   }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            DisplayQuestion();

        }
        else{
            DisplayResult();
        }
    }

    nextButton.addEventListener("click",()=>{
     if(currentQuestionIndex < questions.length){
        handleNextButton();
     }else{
      quizBoardStart();  
     }

    });

quizBoardStart();