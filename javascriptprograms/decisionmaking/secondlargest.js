//  find the second largest num


var num1 = 10;
var num2 = 30;
var num3 = 20;


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

if(num1>num2&num1>num3){
    if(num2>num3){
        
        console.log(`second ${num2}`);
   
    }
    else{
        console.log(`second ${num3}`);
    }
}
else if (num2>num1&num2>num3) {
    if (num1>num3) {
        console.log(num1);
        
    }
    else{
        console.log(num3);
    }
    
}
else if (num3>num1&num3>num2) {
    
}


