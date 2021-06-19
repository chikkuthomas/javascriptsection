var arr=[2,3,6,5,8,11,10]
// maximum number
var max_element=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log("highest number in the array",max_element);

// sum of array
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log("sum of numbers in the array",sum);

// to sort array