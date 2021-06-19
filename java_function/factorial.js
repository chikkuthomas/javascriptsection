// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(10,25));

//factorial
function factorial(num){     
    let fact=1;
    for(let i=1;i<=num;i++){  // i=1    i=2    i=3      i=4
        fact*=i               // 1*1=1   1*2=2  2*3=6   6*4=24
    }
    return fact
}
console.log(factorial(4));