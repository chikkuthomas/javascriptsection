// create employee object with eid:1000,ename:ram, desig:"developer",salary:30000
var employee={
    eid:1000,ename:"ajay",designation:"developer",salary:30000
}

// print employee name
console.log(employee.ename);

//print employee designation
console.log(employee.designation);

// update salary as 40000
employee["salary"]+=4000 ; // to add more salary
console.log(employee.salary);

// check for gender key is present if not add gender as male
if(!("gender" in employee)){
    employee["gender"]="male"
    console.log(employee);
}


// word count
// ABABC first recursive character