
var result = document.getElementById("result");


function display(number){
    result.value += number;
}

function calculate(){
    let final_number = result.value;
    let final_result = eval(final_number);
    result.value = final_result;
}

function del(){
    result.value = result.value.slice(0,-1); 
}

function cls(){
    result.value = "";
}