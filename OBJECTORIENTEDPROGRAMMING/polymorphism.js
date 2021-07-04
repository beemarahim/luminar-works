// many forms (more than one form) => polymorphism

//methodoverloading
// same method name differnt number of parameters
class Calculation{
    // add(){
    //     console.log("inside no arg method");
    // }
    // add(num1){
    //     console.log("inside single arg method");
    // }
    // add(num1,num2){
    //     console.log("inside two arg method");
    // }

    // only recently added method will work
    
    add(...args){
        console.log("inside two arg method");
    }
}
var calc = new Calculation();
calc.add();
calc.add(10);
calc.add(10,20);







//methodoverriding
