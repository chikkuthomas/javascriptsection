function displayvalue(num){
    let inputbox=document.getElementById("inpt")
    inputbox.value+=num // to get more input in the text box

}
function evaluateExpression(){
    let curvalue=inpt.value // t get the value of the input in text box
    let result=eval(curvalue) // to display the result
    inpt.value=result
}

function clearbox(){
    inpt.value="";  // setting empty to clear the value in text box
}
// to remove each element
function removeElement(){
    inpt.value=inpt.value.slice(0,-1)
}
