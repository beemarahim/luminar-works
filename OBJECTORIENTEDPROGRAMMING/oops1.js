//object oriented programming

//class ?  plan , designpattern,template           tv
//object ? real world entity                       sonybraviatv
//reference ? to perform operations on object      remote

// class Person{
//     setpeson(age,name,gender){
//         this.age=age;
//         this.name=name;
//         this.gender=gender;
//     }
//     printDetails(){
//         console.log(this.age,this.name,this.gender);
//     }
// }
// var person=new Person(); //create an object reference person
// person.setpeson(25,"ram","male")
// person.printDetails()

class Employee{
    setEmployee(eid,e_name,desig,salary){
        this.emp_id=eid;
        this.emp_name=e_name;
        this.designation=desig;
        this.salary=salary;
    }
    printEmployee(){
        console.log(this.emp_id,this.emp_name,this.designation,this.salary);
    }
}

var emp = new Employee()
emp.setEmployee(1000,"ravi","developer",25000)
emp.printEmployee()

var emp1= new Employee()
emp1.setEmployee(1001,"ram","developer",25000)
emp1.printEmployee()