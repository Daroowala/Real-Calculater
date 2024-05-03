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

function backspace(){
    var display = document.getElementById("result")
display.value = display.value.slice(0, -1);
}