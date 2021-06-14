

//palindrome


var num=123;
var res="";
while (num!=0) {
    let digit=num%10;//3 ,2 ,1
    res+=digit;//321
   num= Math.floor(num/10) //12 ,1 ,0
}
console.log(res);