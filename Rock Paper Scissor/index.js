const rockbtn = document.querySelector("#Rock")
const paperbtn = document.querySelector('#Paper')
const scissorbtn = document.querySelector("#Scissor")

var choice = ["Rock","Paper","Scissor"]

const display = document.getElementById("display")
const display2 = document.getElementById("display2")
rockbtn.addEventListener("click",()=>{
    var chot = Math.floor(Math.random()*3)
    display.innerHTML = choice[chot]
    choice[chot] =="Scissor" ? display2.innerHTML =" You Win " : choice[chot] =="Paper" ? display2.innerHTML ="You Lose " : display2.innerHTML = "Both Are Equal"
})

paperbtn.addEventListener("click",()=>{
    var chot1 = Math.floor(Math.random()*3)
    display.innerHTML = choice[chot1]
    choice[chot1] == "Scissor" ? display2.innerHTML= "You Lose " : choice[chot1] == "Rock" ? display2.innerHTML= "You Win" : display2.innerHTML ="Both Are Equal"
})

scissorbtn.addEventListener("click",()=>{
    var chot2 = Math.floor(Math.random()*3)
    display.innerHTML = choice[chot2]
    choice[chot2] == "Paper" ? display2.innerHTML= "You Lose" : choice[chot2] =="Rock" ? display2.innerHTML = "You Win" : display2.innerHTML ="Both are Equal"
})