function getnumber(num){
var result = document.getElementById("result")
result.value += num
}
function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
}
function getresult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function backspace(input){
    var result = document.getElementById("result")
return input.slice(0, -1);
}