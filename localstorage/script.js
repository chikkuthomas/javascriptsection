// localStorage.setItem("username","luminar")
// //                     // key:value
// localStorage.setItem("password","abc123")

//to fetch item from local storage to the console
// var uname=localStorage.getItem("username")
// console.log(uname);

// var paswrd=localStorage.getItem("password")
// console.log(paswrd);

// // //to remove a value
// localStorage.removeItem("username")

// localStorage.removeItem("password")

// // to clear all items
// localStorage.clear()

// // to get the values
// localStorage.setItem("bookname","alchemist")
// console.log(localStorage.key(0));

// localStorage.setItem("bookprice",150)
// console.log(localStorage.key(1));   // here the last entered data is considered as the value in 0th index

// var book={
//     bookname:"alchemist",
//     author:"paulo",
//     price:200,
//     pages:150
// }
// localStorage.setItem("book.bookname",JSON.stringify(book)) // here we get the op as a dictionary

// // to get the price of details of alchemist
// var data=JSON.parse(localStorage.getItem("alchemist"))
// console.log(data.price);

// var user={
//     username:"luminar",
//     email:"luminar@gmail.com",
//     password:"abc123",
// }

// var user1={
//     username:"technolab",
//     email:"technolab@gmail.com",
//     password:"test123"
// }

// localStorage.setItem(user.username,JSON.stringify(user))
// localStorage.setItem(user1.username,JSON.stringify(user1))

// var uname="luminar";
// var pwd="abc123";

// var user= JSON.parse(localStorage.getItem("luminar"))
// if(user.username==uname & user.password==pwd){
//     console.log("login success");
// }
// else{
//     console.log("login failed");
// }

// var uname="technolab";
// var pawd="test123";
// var user1 =JSON.parse(localStorage.getItem("technolab"))
// if(uname==user1.username & pawd==user1.password){
//     alert("login succesfull")
// }
// else{
//     alert("login failed")
// }