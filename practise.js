
// to print numbers from 1 to 10
// for(let i=0;i<=10;i++){
//     console.log(i)
// }
//--------------------------------------------------------------------------

//to check various data types
// var num=10
// console.log(num)
// console.log(typeof num) 
//------------------------------------------------------------------------------

// health_issues=false
// console.log(typeof health_issues)

//---------------------------------------------------------------------------------
// you are eligle for vaccination:
// var age= 15
// health_issues=false
// if(18<=age<=65){
//     console.log("eligible for vaccination")
// }
// else if(age<18 & health_issues){
//     console.log(" eligible for vaccination")
// }
// else if(age>65){
//     console.log("eleigible for vaccination")
// }
// else{
//     console.log("not eligible for vaccination")
// }
// print numbers from 1 to 10
// for (let i=10;i>0;i--){
//     console.log(i);
// }


// to compare sum  of two elements with a value
// var arr=[1,2,3,4,5]
// var low=0, upp=arr.length-1;
// var res=5;
// while(low<upp){
//     let sum=arr[low]+arr[upp];
//     if(sum==res){
//         console.log(arr[low],arr[upp]);
//         break
//     }
//     else if(sum>res){
//         upp--
//     }
//     else if(sum<res){
//         low++
//     }
// }
// in javascript only first output will be shown

//factorial of a number
// var num = 0;
// var fact = 1;
// for (let i = 1; i <= num; i++) {
//     if (i == 0) {
//         fact = 1;
//     }
//     else {
//         fact = fact * i;
//     }
// }
// console.log("factorial of", num, "is", fact);

// var arr = [7, 8, 9, 10, 11, 12, 14, 15]
// // arr.sort((i,j)=>i-j)
// var low = 0, upp = arr.length - 1, flag = 0;
// var element = 11;
// while (low <=upp) {
//     let mid = Math.floor((low + upp) / 2)
//     if (element > arr[mid]) {
//         low = mid + 1;
//     }
//     else if (element < arr[mid]) {
//         upp = mid - 1;
//     }
//     else if (element == arr[mid]) {
//         flag++;
//         break;
//     }
// }
// if (flag == 0) {
//     console.log("element not found")
// }
// else {
//     console.log("element found")
// }

// // ABABC first recursive character
// var text="ABABC"
// var flag=0
// var chara=text.split("")
// // console.log(chara);
// dict={}
// for(alphabet of chara){
//     // console.log(alphabet);
//     if(!(alphabet in dict)){
//         dict[alphabet]=1
   
//     }
//     else{
//         dict[alphabet]+=1
//     }
    
// }
// console.log(dict);

// arrow function == lambda funcion
// var sqaure = num => num**2
// var oddeven =(num1)=> num%2==0? "even":"odd" 
// var largest =(num1,num2)=>num1>num2? num1:num2

// first recursive charecter: the first element which is repeating
// var string="ABABC"
// var dict={}
// for(char of string){
//    if(char in dict){
//        console.log("first recursive character is:",char);
//        break    
//    }
//    else{
//        dict[char]=1
//    }
// }
// console.log(dict);

// map,filter,reduce,find,some,sort
// var school=[
//     {rollno:1,name:"Anagha",class:5,marks:100},
//     {rollno:51,name:"Sreesha",class:8,marks:120},
//     {rollno:5,name:"Amal",class:6,marks:150},
//     {rollno:25,name:"Ram",class:10,marks:80},
//     {rollno:12,name:"jagan",class:3,marks:50},
//     {rollno:61,name:"zehala",class:12,marks:200}
// ]

// //--------------------------------------------------------------------------------------------------------------------------------------//

// //map

// // to get the name of students from school
// var names=school.map(students=>students.name)
// console.log("names of all the students in class",names);

// // to change the names of students to upper case
// var upp_name=school.map(students=>students.name.toUpperCase()) 
// console.log("upper case names",upp_name);


// //-------------------------------------------------------------------------------------------------------------------------------------//

// //filter

// // to get the details of students with mark more than 100
// var marks=school.filter(students=>students.marks>=100)
// console.log(" students with mark more than 100",marks);

// // details of students with marks less than 100
// var low_marks=school.filter(students=>students.marks<100)
// console.log("students with mark less than 100",low_marks);

// // fetch details of students who is studig in class over 8
// var students=school.filter(students=>students.class>=8)
// console.log("students studying in class greater than 8",students);


// //--------------------------------------------------------------------------------------------------------------------------------------//
// // sort

// // to sort deatils of students with descending order of marks
// var highest_marks=school.sort((mark1,mark2)=>mark2.marks-mark1.marks)  // here we are taking the marks for comparison
// console.log("details of students in the descending order of their marks ",highest_marks);

// // sort details of students in the ascending order of their roll no
// var roll_no=school.sort((no1,no2)=>no1.rollno-no2.rollno)
// console.log("details in ascending order of their roll no",roll_no);

// //----------------------------------------------------------------------------------------------------------------------------------------//

// //find----> is usd to find the deatils of one particular item
// var one_student=school.find(student=>student.class==8)  // either we can use == or we can use =
// console.log("details of student studying at class 8th",one_student);

// //---------------------------------------------------------------------------------------------------------------------------------------//

// //some--> is used to find the availablity , the output will be either true or false

// var amal=school.some(student=>student.name=="Amal")
// console.log(" is there student names amal",amal);

// var class_11=school.some(detail=>detail.class==11)
// console.log("is there details of student in class 11th",class_11);

// //------------------------------------------------------------------------------------------------------------------------------------------//

// //reduce-->to get the single value output,only 2 parameters

// var highest_mark=school.reduce((mark1,mark2)=>mark1>mark2?mark1:mark2)
// console.log("details of student with highest mark",highest_mark);

// // print the details of student with least mark:
// var lowest_mark=school.reduce((mark1,mark2)=>mark1.marks<mark2.marks?mark1:mark2)
// console.log("details of student with lowest mark",lowest_mark);

// //-------------------------------------------------------------------------------------------------------------------------------------------//

// // count the number of student details:
// var count=school.length
// console.log("the number of details of students:",count);

var age = 89
health_issues=false
 if (age>= 65)
  {
     console.log("eligible for vaccine")
 }
 else if(18<=age<= 65 & health_issues) 
 {
     console.log("eligible for vaccine")
 }

else {
    console.log("not eligible")
 }