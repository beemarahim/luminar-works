var arr=[10,20,30,40]
var arr2=[9,10,11,20]
//find common elements from these arrays 10,20
var flag=0;
for(let obj of arr){
    
    for(let ele of arr2){
        if(obj==ele){
        flag++;
        console.log(`common element${flag}:${ele}`);
    }}
}