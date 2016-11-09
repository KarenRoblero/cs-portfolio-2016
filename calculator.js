//
var num1Input = document.getElementById("num1Input");
var operator = document.getElementById("operator");
var input2 = document.getElementById("input2");
var calculatorbutton = document.getElementById("calculatorbutton");

//
function solve() {
    //
    var num1 = num1Input.value; 
    var num2 = input2.value; 
    var answer = document.getElementById("answer");
    
    //
    if (operator.value === "+") {
        answer.innerHTML = Number(num1) + Number(num2);
    }
    else if (operator.value === "-"){
        answer.innerHTML = Number(num1) - Number(num2);
    }
    else if (operator.value === "/"){
        answer.innerHTML = Number(num1) / Number(num2);
    }
    else if (operator.value === "*"){
        answer.innerHTML = Number(num1) * Number(num2);
    }
    else if (operator.value === "%"){
        answer.innerHTML = Number(num1) % Number(num2);
    }
    else if (operator.value === ">"){
        answer.innerHTML = Number(num1) > Number (num2);
    }
}

//
calculatorbutton.addEventListener("click", solve);