//person //setPerson(age,name) printPerson()
//camlin notation
//snake notation

// this.age this.name instance variables

class Person{
    setValues(age,name){
        this.age=age;  // initialising instance variable
        this.name=name;
    }
    printValues(){
        console.log(this.age,this.name);
    }

}
var obj=new Person();
obj.setValues(16,"jemy")
obj.printValues()

// class object reference

// constructor __init__ to initialise instance variables
// no need call the constructor ,it is called while creating object


class Detail{
    constructor(age,name){
        this.age=age;  // initialising instance variable
        this.name=name;
    }
    printValues(){
        console.log(this.age,this.name);
    }
}
var o=new Detail(15,"ajin")
o.printValues()
