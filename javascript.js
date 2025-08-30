
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
console.log(operate(6,2,"*"))
let a=""
let b=""
let operator 
let result;

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
                   return Math.round(divide(a, b) * 1000) / 1000;
                }
            }
        }
    }

}

//display result 
let number=[]
let content=""
 const display = document.querySelector(".display")
 const button = document.querySelectorAll(".button") ;
 button.forEach(elem=>{
    elem.addEventListener("click",(event)=>{
        let cur =event.target.textContent
        if(cur==="+" || cur ==="-" || cur ==="*" || cur==="/" ){
            if(a!==""){
                if(b===""){
                  if(operator===undefined){
                   operator = cur ;
                   content +=cur ;
                   display.textContent =content;
                  }
                  }else{
                    if(operator !== undefined){
                    a = Number(a) ;
                    b = Number(b) ;
                    result =operate(a,b,operator);
                    a = result ;
                    content =result +" "+ cur ;
                    display.textContent =content ;
                    b ="" ;
                    operator = cur ;
                    }
                  }
                
            }

        }else{
            if(cur==="="){
                if(a!=="" && b!=="" && operator!==undefined){
                    a = Number(a) ;
                    b = Number(b) ;
                    result = operate(a,b,operator);
                    content = result ;
                    display.textContent =content ;
                    a = "";
                    b = "";
                    operator = undefined ;
                    content=""
                }

            }else{
                if(cur==="clear"){
                  content=""
                  display.textContent=content ;
                  a="";
                  b="";
                  operator=undefined
                }else{
                    content+=cur;
                    display.textContent=content
                    if(operator===undefined){
                        a +=cur;
                    }else{
                        b+=cur;
                    }
                }
            }
        }

       
}
 )
 }    
)





