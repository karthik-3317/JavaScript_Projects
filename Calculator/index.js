let screen=document.querySelector(".screen");
    let buttons=document.querySelectorAll(".btn")
    let equals=document.querySelector(".bn-equals")
    let clear=document.querySelector(".bn-clear")
    let del=document.querySelector(".bn-delete")
    
    buttons.forEach((button)=>
    {
        button.addEventListener("click",(e)=>{
            let value =e.target.dataset.num
            screen.value+=value
        });
    });
    equals.addEventListener("click",()=>{
        if(screen.value === '')
        {
            screen.value="NO VALUE GIVEN";
        }
        else{
            let answer=eval(screen.value);
            screen.value=answer;
             console.log(answer)
        }
    })
    clear.addEventListener("click",()=>{
        screen.value=""
    })
    del.addEventListener("click",(e)=>{
      let value = screen.value;
       console.log(typeof(value))
       screen.value =value.slice(0,value.length-1)
    })