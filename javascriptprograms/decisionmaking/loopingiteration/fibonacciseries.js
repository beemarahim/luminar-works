// fibonacci series 0,1,1,2,3,5,8,13,21

var num1=0;
var num2=1;
var num =0;
console.log(num1);   
console.log(num2);                          
                      
                                       
while (num<21) {    
    num=num1+num2;
    num1=num2;
    num2=num;     
    console.log(num);                 
    
}

