//greatest common divisor 14,63 =>7
var num1=24;

var num2=32;

for( var i=num1; i>=1; i--){
    if (num1%i==0){
    
        if(num2%i==0){
            console.log(i);
            break;
            
        }
    }
}