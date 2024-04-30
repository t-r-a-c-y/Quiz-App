const questions=[
   {
      question:"What color is a ripe banana?",
      answers:[
         {text:"Red" ,correct:"false"},
         {text:"Green" , correct:"false"},
         {text:"Yellow" , correct:"true"},
         {text:"Giraffe", correct:"false"}
      ]
   },
   {
      question:"Which of the following animals is known for its long trunk?",
      answers:[
         {text:"Lion" ,correct:"false"},
         {text:"Elephant" , correct:"true"},
         {text:"Kangaroo" , correct:"false"},
         {text:"Giraffe", correct:"false"}
      ]
   },
   {
      question:"Which shape has three sides?",
      answers:[
         {text:"Square" ,correct:"false"},
         {text:"Circle" , correct:"false"},
         {text:"Triangle" , correct:"true"},
         {text:"Rectangle", correct:"false"}
      ]
   },
   {
      question:"How many minutes are there in an hour?",
      answers:[
         {text:"10" ,correct:"false"},
         {text:"20" , correct:"false"},
         {text:"30" , correct:"false"},
         {text:"60", correct:"true"}
      ]
   },
   {
      question:"If you're facing north, which direction is to your left?",
      answers:[
         {text:"East" ,correct:"false"},
         {text:"West" , correct:"true"},
         {text:"North" , correct:"false"},
         {text:"South", correct:"false"}
      ]
   },
   {
      question:"What comes after the number 5?",
      answers:[
         {text:"3" ,correct:"false"},
         {text:"6" , correct:"false"},
         {text:"10" , correct:"true"},
         {text:"2", correct:"false"}
      ]
   }
]
const questionElement = document.getElementById('question');
const questionAnswer = document.getElementById('button');
const nextbutton =document.getElementById('nextbbb');
let currentIndex =0;
let score =0;

function showQuiz(){
   currentIndex =0;
   score =0;
   nextbutton.innerHTML="next";
   showQuestion();
}
function showQuestion(){
   removeState()
   let currentQuestion=questions[currentIndex];
   let noQue =currentIndex + 1;
   questionElement.innerHTML= noQue+'.'+currentQuestion.question;

   currentQuestion.answers.forEach(answer=>{
      const button = document.createElement('button')
      button.innerHTML=answer.text
      button.classList.add('bbb')
      questionAnswer.appendChild(button);
      if(answer.correct){
         button.dataset.correct=answer.correct
      }
      button.addEventListener("click", selectAnswer)
   });
}

function removeState(){
   nextbutton.style.display="none";
   while (questionAnswer.firstChild) {
      questionAnswer.removeChild(questionAnswer.firstChild)
   }
}

function selectAnswer(e){
  const selectBtn =e.target;
  const isCorrect =selectBtn.dataset.correct ==="true"
  if(isCorrect){
   selectBtn.classList.add("correct");
  }else{
   selectBtn.classList.add("incorrect")
  }
  Array.from(button.children).forEach(button=>{
   if(button.dataset.correct ==="true"){
      button.classList.add("correct")
   }
   button.disabled=true;
  });
}

showQuiz()