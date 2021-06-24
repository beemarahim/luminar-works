//values are stored in key value pairs
var employee={id:1000, name:"ajay", desig:"developer",salary:"250000", exp:2}
console.log(employee.exp);
console.log(employee["name"]);
var student ={id:100,name:"ram", course:"bca", total:450}
console.log(student.name);
console.log(student["course"]);
console.log("gender" in student);
student["gender"]="male"
console.log(student);

