// arrays are used instead of lists in python
//[],different type of objects can be stored,updation possible,order preserved.

var expenses=[10000,15000,20000,"happy",35000,4000]

//expenses in march 
console.log(expenses[2]);

//change in value
expenses[1]=2000;

// to iterate array
for (let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
}

//iteration other method
for (let i of expenses){
    console.log(i);
}

// how to add elements
expenses.push(35248)

//to remove elements
expenses.pop()