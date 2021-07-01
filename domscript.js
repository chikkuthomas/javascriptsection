
// var currenturl=document.URL;
// console.log(currenturl); //to get the url
// alert(currenturl) // to get the url as alert message on screen

// var htwos=document.getElementsByTagName("h2") //to get the tags
// for(let tag of htwos){ // iterate each tags in the htwos
//     tag.style.color="purple"; // styling 
// }

// // to get particular id
// var hone=document.getElementById("one");
// hone.style.color="red";

// //to get tags
// var list=document.getElementsByTagName("li")
// for(let lis of list){
//     lis.style.color="blue";
// }

// // to get class
// var elements=document.getElementsByClassName("second")
// for(let ele of elements){
//     ele.style.color="green"; //use ; else no output
// }

var litems=document.querySelectorAll("h2")
for(let lit of litems){
    lit.style.color="green";
}

var htwo= document.querySelector("#one")
htwo.style.color="purple";

var query=document.querySelectorAll(".third")
for(let que of query){
    que.style.color="blue";
}


var tag=document.querySelectorAll(".second")
for(let que of tag){
    que.style.color="red";
}

var meth=document.querySelector("#method")
meth.textContent="Document Object Model Methods" // to change contents
meth.innerHTML="<em>Document Object Model Methods</em>"

//document object method
// attributes

//URL
//head
//textContent
//innerHTML
//link

//methods

//getElementByTagName()
//getElementByClassName()
//getElementById()
//querySelectorAll()
//querySelector()

//postman tool