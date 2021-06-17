// print even nos
var arr=[10,11,12,13,14,15,16];
// for(let val of arr){
//     if(val%2==0){
//     console.log(val);}
// }

// total sum
// var sum=0;
// for (let num of arr){
//      sum+=num;
//      }
// console.log(sum);
// push()=>inserting an object at end of array 



var odd=[], even=[];
for (let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
console.log("odd array", odd);
console.log("even array", even);