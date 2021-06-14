//chk given number 123(1**3+2**3+3**3)
var num1=235;
var sum=0;
while (num1%10>0) {
    let digit=(num1%10)**3;
    sum=sum+digit;
    num1=Math.floor(num1/10);
}
console.log(sum);