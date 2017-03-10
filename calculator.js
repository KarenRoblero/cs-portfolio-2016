//Defining Variables 
var num1Input = document.getElementById("num1Input");
var operator = document.getElementById("operator");
var input2 = document.getElementById("input2");
var calculatorbutton = document.getElementById("calculatorbutton");

// I start the function
function solve() {
    // I further define the variables specific to this function
    var num1 = num1Input.value; 
    var num2 = input2.value; 
    var answer = document.getElementById("answer");
    
    // I use if statements to say when the dropdown is a certain value, to do a certain operation to the two inputed numbers
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

// I tell the computer to run the function when it "hears" the click of the calculator button with the addEventListener function
calculatorbutton.addEventListener("click", solve);