const startbtn = document.querySelector(".start");
const pausebtn = document.querySelector(".pause");
const resetbtn = document.querySelector(".reset");
const displayscreen = document.querySelector(".screen1");


let startTime=0;
let elapsedTime = 0;
let currentTime =0;
let mins =0;
let secs =0;
let hrs  =0;
let intervalId;
let paused = true;

startbtn.addEventListener("click",starttimer);
pausebtn.addEventListener("click",pausetimer);
resetbtn.addEventListener("click",resettimer);

function starttimer(){
    if(paused){
        paused =false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,75);
    }
}
function pausetimer(){
    if(!paused){
        paused =true;
        // elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
}
function resettimer(){
    paused =true;
    clearInterval(intervalId);
        startTime=0;
         elapsedTime = 0;
         currentTime =0;
         mins =0;
         secs =0;
         hrs  =0;
         intervalId;
        displayscreen.textContent = "00:00:00"
        }
function updateTime(){
    elapsedTime = Date.now() -startTime;
    identity.innerHTML = elapsedTime;
    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime/(1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime/(1000 * 60 *60)) % 60);
    
    secs = pads(secs);
    mins = pads(mins);
    hrs = pads(hrs);
    
    displayscreen.textContent = `${hrs} : ${mins} : ${secs}`;
    function pads(unit){
        return (("0")+unit).length > 2 ? unit : "0"+unit;
    }
}