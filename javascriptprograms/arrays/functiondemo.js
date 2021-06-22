// // function for finding factorial

// // function factorial(num){
// //     let res=1;
// //     for(let i=1;i<=num;i++){

// //     }
// //     // while{num>1}{
// //         res = res*num;
// //     //     num--;
// //         return res;
// //     // }
// // }
// // console.log(factorial(5));






// function subtract(num1,num2){
//     return num1<num2?num2-num1:num1-num2
//     // if(num1<num2){
//     //     return num2-num1
//     // }
//     // else{
//     //     return num1-num2
//     // }
// }

// console.log(subtract(20,50));






function addNumbers(...args){ //args=[10,20,..]
let res=0;
for(let num of args){
    res+=num
}
return res
}
console.log(addNumbers(10,20));
console.log(addNumbers(10,20,30,40));



var arr1=[10,20,30]
var arr2=[50,60]
var res=[...arr1,...arr2]
console.log(res);













ob




