var num1input = document.getElementById ("num1input")
var select = document.getElementById ("select")
var output = document.getElementById ("output")
var inputButton = document.getElementById ("inputButton")

inputButton.addEventListener ("click", function (program) {
    
    var task = "<p>" + num1input.value + "<p>" + "<br>";
    output.innerHTML = output.innerHTML + task; 

});