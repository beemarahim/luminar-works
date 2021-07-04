class Parent{
    m1(){
        console.log("inside parent");
    }
}

class Child extends Parent{
    m2(){
        console.log("inside child");
    }
}

class SubChild extends Child{
    m3(){
        console.log("inside sub child");
    }

}

var sub = new SubChild();
sub.m1();
sub.m2();
sub.m3();

var child1 =new Child();
child1.m1();

//child1.m3():error

var parent =new Parent();
//parent.m3();//error
parent.m1();

