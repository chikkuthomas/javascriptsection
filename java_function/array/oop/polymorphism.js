// method overloading
//== same method name different number of parameters

class Calc{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside one arg method");
    }
    add(num1,num2){
        
            console.log("inside two method");
        }
    
}

var obj=new Calc();
obj.add();
obj.add(10);
obj.add(12,15); // only last implemented method will work,for all the cases here and no error will be shown

// method overridding
class Parent{
    phone(){
        console.log("inside parent phone");
    }
}
class Child extends Parent{
    phone(){
        console.log("inside child phone");
    }

}
var obj=new Child();
obj.phone();  // here the child method will override the parent method