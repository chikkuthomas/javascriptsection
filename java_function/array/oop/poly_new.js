// method overridding
class Parent{
    phone(){
        console.log("inside parent phone");
    }
}
class Child extends Parent{
    
    phone(){
        super.phone()  // refers to parent, so here always parent method work first and then the child method works
        console.log("inside child phone");
    }

}
var obj=new Child();
obj.phone(); 