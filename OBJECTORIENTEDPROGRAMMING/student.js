class Student{
//this.name,this.name etc are instance variable
// inside class this.instance variable
//outside class reference.instance variable
//"this" is used to point current class / instance variable
//duty of setStudent() is to initialize instance variable
// duty of constructor is to initialize instance variable
// constructor name is always same as class name in java and c++
// in js constructor name always constructor()
// in python constructor name always _init_()
// constructor will automatically invoked during object creation
    constructor(rol,name,course,total){ //local variable
        this.rol=rol;
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printDetails(){
        console.log(this.rol,this.name,this.course,this.total);
    }
}

var stud1=new Student(1000,"ram","bca",145)
console.log(stud1.name);
stud1.printDetails()

var stud2= new Student(1001,"ravi","bca",150)
stud2.printDetails()