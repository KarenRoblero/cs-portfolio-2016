//define all variableds
var num1input = document.getElementById ("num1input");
var select = document.getElementById("select");
var urgent = document.getElementById("urgentthingsdiv");
var mustdo = document.getElementById("mustdodiv");
var shoulddo = document.getElementById("shoulddodiv");
var inputButton = document.getElementById("inputButton");
var output = document.getElementById("output");
var all = document.getElementById("all");

//says when input Button is clicked, it runs the function where data inputed into the num1input slot is added
inputButton.addEventListener ("click", function (program) {
    
    var task = "<p>" + num1input.value + "<p>" + "<br>";

//this is where it shows the location of where the data is added; I used if statements with the drop down as the value put
//in with the drop down determines the location
if (select.value == "urgent") {
    urgent.innerHTML += num1input.innerHTML + task;
}

else if(select.value == "mustdo") {
    mustdo.innerHTML = num1input.innerHTML + task;
}

else if(select.value == "shoulddo") {
    shoulddo.innerHTML = num1input.innerHTML + task;
}

 output.addEventListener("click", function (evt) {
     var targettext=evt.target;
     targettext.style.textDecoration = "line-through";
     
 });
 
});
//I tell the computer to listen for a click on any data in the all div and say that if it hears it, it should add a line-through
all.addEventListener("click", function (evt) {
    var targettext=evt.target;
    targettext.style.textDecoration = "line-through";
    
});


