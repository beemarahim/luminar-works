var num1=439;
var sum=0;
while (num1%10>0) {
    let digit=(num1%10)**3;
    sum=sum+digit;
    num1=Math.floor(num1/10);
}
console.log(sum);