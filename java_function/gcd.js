// find the highest commn factor or gcd of two numbers
// var num1=63,num2=14;
// if(num1<num2){
//     low=num1;
// }
// else{
//     low=num2;
// }
// var factor=0;
// for(let i=0;i<=low;i++){
//     if(num1%i==0 & num2%i==0){
//         factor=i;
//     }
// }
// console.log(factor);

// highest common factors
//..........................................................................................................
var num1=45,num2=18;

if(num1>num2){    // checking which number is the lowest
    low=num2
}
else{
    low=num1      // lowest number is set to the low
}
var factor=0;     // to avoid repeatation of gcd values we set a variable
for(let i=2;i<=low;i++){  // i is set to start from 2 and can be only upto the lowest number, since 1 can divide any number
    if(num1%i==0 & num2%i==0){ // checking whther the number can divide both numbers without any remainder
        factor=i;      // the umber which can divide both is set as factor
        
    }
}
console.log("gcd:",factor) // the factor is the gcd or hcf value.