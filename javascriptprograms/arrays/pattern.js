var arr=[3,4,5] //o/p => 9,8,7
var sum=0;
for (let num of arr){
    sum+=num;
}
var op=[];
for(let num of arr){
    let res=sum-num;
    op.push(res);
}
console.log(op);
