class Employee {
    constructor(id, name, desig, salary, exp) {
        this.id = id;
        this.name = name;
        this.desig = desig;
        this.salary = salary;
        this.exp = exp;
    }
    printDetails() {
        console.log(this.id, this.name, this.desig, this.salary, this.exp);
    }
    // highest_salary() {
    //     var arr = [];
    //     arr.push(this.salary)
    //     arr.sort((num1, num2) => num1 - num2)
    //     console.log(arr[arr.length - 1]);
    // }
    // experience() {
    //     var exp_arr = [];
    //     exp_arr.push(this.name, this.exp)
    //     exp_arr.sort((num1, num2) => num2- num1)
    //     console.log(exp_arr);
    // }
    // working_qa() {
    //     var arr_qa = [];
    //     var arr_qa_name = [];
    //     arr_qa.push(this.desig)
    //     arr_qa_name.push(this.name, this.desig)

    //     arr_qa.forEach(desg => {
    //         if (desg == "qa") {
    //             let arr_length = arr_qa.length - 1
    //             console.log(arr_qa_name[arr_length]);

    //         }
    //         else {
    //             console.log("no employee working as qa");
    //         }
    //     })


    // }

}

var obj1 = new Employee(1000, "ajay", "developer", 25000, 3)
var obj2 = new Employee(1001, "ram", "qa", 25000, 4);
var obj3 = new Employee(1002, "don", "manager", 35000, 6);
var obj4 = new Employee(1003, "ravi", "developer", 20000, 2);
var obj5 = new Employee(1004, "bon", "qa", 28000, 5);
var employees = []
employees.push(obj1, obj2, obj3, obj4, obj5)


//highest salary
var high_salary=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(high_salary);



// sort on experience
var experience = [];
experience.push((employees.sort((emp1, emp2) => emp2.exp - emp1.exp)))
console.log(experience);



//desig=qa
// employees.forEach(emp => {
//     if (emp.desig == "qa"){
// console.log(emp);
//     }
// })


//desig==qa
console.log(employees.filter(emp=>(emp.desig=="qa")));
