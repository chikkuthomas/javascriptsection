// abv 18 eligible
//below 18 not eligible
// below 18 and health_issues eligible
var age=10;
health_issues=true;
if (age>18){
    console.log("eligible for vaccine");
}
else if(age<18 & health_issues){
    console.log("eligible for vaccine");
}
else{
    console.log("not eligible");
}
