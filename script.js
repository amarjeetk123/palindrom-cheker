
let str = "";
document.addEventListener("input", fn_name);
function fn_name(){
    let user_input = document.getElementById("user_input").value
    str = user_input  
}
  


function check(){
  let str_reverse = ""
    for(let i=str.length-1;i>=0;i--){
        str_reverse =  str_reverse + str[i]
     } 
     if(str == str_reverse){
        document.getElementById("res").innerHTML= "Text is Palindrom"
     }
    else{
        document.getElementById("res").innerHTML="Not Palindrom"
    }
}

function reset(){
    document.getElementById("user_input").value = "" 
    document.getElementById("res").innerHTML= ""
}

