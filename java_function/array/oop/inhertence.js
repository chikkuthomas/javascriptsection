//multi level inheritence

// parent child 
class Parent{
    mobile(){
        console.log("inside parent mobile method");
    }
}

class Parent2 extends Parent{
    m2(){
        console.log("inside parent2");
    }
}

class Child extends Parent2{  // this is the way to inherit -->extends instead of ()

}
var child=new Child();
child.mobile();
child.m2();

//multiple inhertence is not allowed in javaScript