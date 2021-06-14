//sum of odd nums between low limit and upper limit, low 10, upp 50 , 10.....50
var num1=10;
var num2=60;
var sum=0;
while (num1<=num2) {
    if(num1%2!==0){
        sum=sum+num1;
        
    }
    num1++;
}
console.log(sum);