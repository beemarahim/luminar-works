//inheritance
// class Parent{
//     phone(){
//         console.log("samsungf41");
//     }
// }

// class Child extends Parent{

// }
// var child =new Child()
// child.phone()


//single inheritance
class Person{
    setPerson(name,age){
        this.name=name;
        this.age=age;
    }
    printperson(){
        console.log(this.age,this.name);
    }
}
class Student extends Person{
    setStudent(rol,course){
        this.rol=rol;
        this.course=course;
    }
    printStudent(){
        console.log(this.rol,this.course);
    }
}
var stud1=new Student()
stud1.setPerson("ram",25)
stud1.setStudent("100","bca")
stud1.printStudent()
stud1.printperson()