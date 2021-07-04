// class Parent{
//     phone(){
//         console.log("samsungf41");
//     }
// }
// class Child extends Parent{
// phone(){
//     super.phone()
//     console.log("iphone");
// }
// }
// var child = new Child();
// child.phone();

class Rectangle{
    area(...args){
        console.log(args);
        console.log("area rectangle",args[0]*args[1]);
    }
}

class Shape extends Rectangle{
    area(...args){
        console.log(args);
        console.log("shape area",args[2]*args[2]);
        super.area(args[0],args[1])
    }
}
var shape=new Shape();
shape.area(10,10,20);