// chk number is prime or not 
var num =15;
var flag=0;
for (let i=2; i<15; i++){
if (num%i==0) {
    flag+=1;
}
}
if(flag==0){
    console.log("number is prime");
}
else{
    console.log("number is not prime");
}