// dictionary = object
var person={
    id:100,
    age:28,
    name:"ram",
    bloodgroup:"AB+"
}
// person.gender="male" // to add key and value


person.salary=250000
person.salary+=500 // to add to the salary

// to check whether there i certain element
if(!("gender" in person)){
    person.gender="male"
}

console.log(person);

