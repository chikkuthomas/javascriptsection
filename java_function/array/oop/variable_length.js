function add(...args){
    // console.log(args);
    return  args.reduce((num1,num2)=>num1+num2)

}
console.log(add(10,20,30,40));

function findMax(...args){
 return args.reduce((num1,num2)=>num1>num2?num1:num2)
    
}
console.log(findMax(10,20,11,12));

// document object model