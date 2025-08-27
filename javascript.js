
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
let number=[]
 const display = document.querySelector(".display")
 const button = document.querySelectorAll(".button") ;
 button.forEach(elem=>{
    elem.addEventListener("click",(event)=>{
        let content = event.target.textContent ;
    display.textContent = content
    console.log(event)
    number.push(content)
 }
)
}
)
console.log(number)

//how the calculator work
// for(let i = 0 ;i<3 ;i++){
//     if(i===1){
//     button.addEventListener("click", event=>{
//     a=Number(event.target.textContent);
// })
// }
// else{
//     if(i===2){
//         button.addEventListener("click", event=>{
//     b=Number(event.target.textContent);
//     })
//     }
//     else{
//         button.addEventListener("click", event=>{
//     operator=event.target.textContent;
//     })
//     }

// }
// }
// button.addEventListener("click" , event =>{
//     let con = event.target.textContent;
// })
// if(con==="="){
//     let result=operate(a,b,operator);
// }
// display.textContent=result;
// console.log(a)