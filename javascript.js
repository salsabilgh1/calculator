
//operations :
function add(a,b){
    return a + b ;
}
function subtruct(a,b){
    return a - b ;
}

function multiply(a,b){
    return a * b ;
}

function divide(a,b){
    if(b===0){
        return "error"
    }{
        return a / b ;
    }
}

let a , b ,operator;

//operate
function operate(a , b ,operator){
    if(operator==="+"){
        return add(a,b);
    }
    else{
        if(operator==="-"){
            return subtruct(a,b) ;
        }
        else{
            if(operator==="*"){
                return multiply(a,b) ;
            }
            else{
                if(operator==="/"){
                    return divide(a,b);
                }
            }
        }
    }

}

//display result 
 const display = document.querySelector(".display")
 const button = document.querySelectorAll(".button") ;
 button.forEach(
    addEventListener("click",(event)=>{
        let content = event.target.textContent ;
    display.textContent = content
    console.log(event)
 }
)
)