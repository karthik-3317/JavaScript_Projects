const quizData = [
  {
    question: "Who is also called has the cool captain in cricket?",
    a: "Virat Kohli",
    b: "MS Dhoni",
    c: "Mitchel Starc",
    d: "Axar Patel",
    correct: "b",
  },
  {
    question:
      "Who is the god of cricket?",
    a: "Sachin Tendulkar",
    b: "Virendra Sehwag",
    c: "Anil Kumble",
    d: "Rahul Dravid",
    correct: "a",
  },
  {
    question: "Who has the highest strike rate in ODI?",
    a: "Vander Dussan",
    b: "David Miller",
    c: "Bhavuma",
    d: "Keshav Maharaj ",
    correct: "a",
  },
  {
    question: "Virat Kohli Highest Score in ODI Format?",
    a: "182",
    b: "196",
    c: "183",
    d: "199",
    correct: "c",
  },
  {
    question: "Select the allrounder present in the options",
    a: "Surya Kumar Yadav",
    b: "Mehidy Hassan",
    c: "Ms Dhoni",
    d: "Undadkat",
    correct: "b",
  },
  {
    question: "What is the largest stadium present in the world?",
    a:"Eden Gardens",
    b:'Melbourne Cricket Ground',
    c:"The Oval",
    d:"Narendra Modi Stadium",
    correct:'d'
  },
  {
    question: "When did India Won the World Cup?",
    a:"2010",
    b:"1983",
    c:"2000",
    d:"1963",
    correct:'b'
  },{
    question: "Who Made Hundred Centuries in his carrer",
    a:"Sachin Tendulkar",
    b:'VVS Laxman',
    c:"AB Devillers",
    d:"Ricky Ponting",
    correct:"a"
  }
];

const answerbackup = []

let currentQuestion = 0;
let correct_Answers = 0;
let incre =0;
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const question = document.querySelector("#question");
const submited = document.querySelector("#submited");
const submitedexam = document.querySelector("#submitexam");
const your_score = document.getElementById("your_score");
const your_score2 = document.getElementById("your_score2");
const prev_button = document.getElementById("hello")
const quizdata = document.querySelector("#quizdata");
const submitexam = document.querySelector("#submitexam");
const next_button = document.getElementById("hello2")
const timespent = document.getElementById("timespent")
const timeline = document.querySelector(".timeline");
const time = Date.now();
let secs =0;
let mins =0;
let hrs = 0;
const anothersubmission = document.querySelector("#anothersubmission")
let response = quizData[currentQuestion];
nextQuestion(response);
prev_button.addEventListener("click",()=>{
 
  if(currentQuestion == 0)return;
  else currentQuestion-=1;
  let sendprevques = quizData[currentQuestion];
  const blocking_star = document.querySelectorAll('input[name="blocking_star"]')
  let view = answerbackup[currentQuestion]
   //making the radio buttons to be marked true when you press the previous button when the answer is defined by the user
  if(view!==undefined){
  blocking_star.forEach((item)=>{
    if(item.id === view)
    item.checked = true
  })
}
//making the radio buttons to be marked false when you press the previous button when the answer is not marked by the user
else{
  const blocking_star = document.querySelectorAll(
    'input[name="blocking_star"]'
  );
  blocking_star.forEach((item) => {
    if(item.checked){
      item.checked = false;
    }
  });
}
  nextQuestion(sendprevques);
})
next_button.addEventListener("click",()=>{
  if(currentQuestion < quizData.length-1)currentQuestion+=1;
  else return;
  let sendnextques = quizData[currentQuestion];
  let view = answerbackup[currentQuestion];
  const blocking_star = document.querySelectorAll("input[name='blocking_star']");
  //making the radio buttons to be marked when the user is already answered to this question while pressing the next button 
  if(view!==undefined){
    console.log("coming when "+view)
  blocking_star.forEach((item)=>{
    if(item.id === view)
    item.checked = true
  })
}
  //making the radio buttons to be unmarked when the user is not answered to this question while pressing the next button 
else{
  const blocking_star = document.querySelectorAll(
    'input[name="blocking_star"]'
  );
  blocking_star.forEach((item) => {
    if(item.checked){
      item.checked = false;
    }
  });
}
    nextQuestion(sendnextques);
})

const submitedexam2 = ()=>{
  let increment = 0;
  //Checking the Answers Marked by the user with the correct answer already in the list
  answerbackup.forEach((item)=>{
    if(quizData[increment].correct === item){
      correct_Answers++;
    }
    console.log(increment)
    console.log("The Correct Answer is in quiz data " +quizData[increment].correct)
    console.log("The User Selected Answer is "+item)
    increment++;
  })
  your_score.innerHTML = correct_Answers;
  //Making the Answerbackup to be undefined when the quiz is submited
  let incrementer =0;
  answerbackup.forEach((item)=>{
    answerbackup[incrementer] = undefined;
    incrementer++;
  })
  quizdata.classList.toggle('quizdatavisible')
  anothersubmission.style.display ="block"
  submitexam.style.display = "none";
  timespent.innerHTML = `${hrs} : ${mins} : ${secs}`
  clearInterval(stopinterval);
  your_score2.innerHTML = `00 : 00 : 00`
  correct_Answers =0;
}

const finalcall = () => {
  submitted();
  const blocking_star = document.querySelectorAll(
    'input[name="blocking_star"]'
  );
  blocking_star.forEach((item) => {
    if(item.checked){
      item.checked = false;
    }
  });
  //Giving the answer when it is marked by submit button
  blocking_star.forEach((item)=>{
    let view = answerbackup[currentQuestion];
    if(view!==undefined){
      if(item.id === view){
        item.checked = true;
      }
    }
  })
}

submitedexam.addEventListener("click",submitedexam2)

submited.addEventListener("click",finalcall);

let stopinterval = setInterval(timeupdate,75)


function nextQuestion(responsee) {
  question.innerHTML = responsee.question;
  a_text.innerHTML = responsee.a;
  b_text.innerHTML = responsee.b;
  c_text.innerHTML = responsee.c;
  d_text.innerHTML = responsee.d;
  response = responsee;
}

function submitted() {
  const blocking_star = document.querySelectorAll(
    'input[name="blocking_star"]'
  );
  //Answer is storing inside the list answerbackup
  blocking_star.forEach((item) => {
    if(item.checked){
      answerbackup[currentQuestion] = item.id;
    }
  });
  //checking for the new question to display
  currentQuestion +=1
  console.log(currentQuestion)
  if(quizData.length > currentQuestion) {
    let sendthisnew = quizData[currentQuestion];
    nextQuestion(sendthisnew);
  }
  incre=0;
}

function timeupdate(){
  let currenttime =Date.now() - time 
  secs = Math.floor((currenttime/1000))%60
  mins = Math.floor((currenttime/(1000*60)))%60
  hrs = Math.floor((currenttime/(1000*60*60)))%60
  secs = pads(secs)
  mins = pads(mins)
  hrs = pads(hrs)
  timeline.style.width = incre + "%";
  if(incre > 99)
  {
  finalcall()
  incre =0
  console.log(quizData.length)
  console.log(currentQuestion)
  if(currentQuestion >= quizData.length )
  {
    submitedexam2()
  }
}
  else{
  incre+=0.7;
  your_score2.innerHTML = `${hrs} : ${mins} : ${secs}`
  }
}
function pads(secs){
  return (("0")+secs).length> 2 ? secs : "0"+secs;
}