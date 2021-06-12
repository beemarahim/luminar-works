//var num1=10, num2=10;
//if (num1>num2){
//  console.log(`${num1} is largest`);
//}
//else if(num2>num1){
//   console.log(`${num2} is largest`);
// } 
//else{
//   console.log("both are equal");
// }




//var num1 = 10;
//var num2 = 30;
//var num3 = 20;


// if (num1 > num2 & num1 < num3) {
//  console.log(num1);
// }
// else if (num2 > num1 & num2 < num3) {
// }
// else if (num3 > num1 & num3 < num2) {
//     console.log(num3);
// }
// else if (num1 == num2 & num1 == num3){
//     console.log("all are same ");
// }

//  find the second largest num
// sort these numbers in asc or desc order
// read age= num, health_issues=true/false
//  age>65 eligible for vacc
//  age 18-45 and health issues  eligible
//  else not eliigible 


var num1 = 70;
var num2 = 10;
var num3 = 10;

if (num1 > num2 & num1 > num3) {
    console.log(num1);
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
        console.log(num2);
    }

}
else if (num2 > num1 & num2 > num3) {
    console.log(num2);
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
        console.log(num1);
    }
}
else if (num3 > num1 & num3 > num2) {
    console.log(num3);
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
        console.log(num1);
    }
}





var age =25;
var health_issues =false;
if (age>65) {
    console.log("eligible for vaccination");
}
else if (age>18 & age <45 & health_issues==true) {
    console.log("eligible for vaccination");
}
else{
    console.log("not eligible for vaccination ");
}



