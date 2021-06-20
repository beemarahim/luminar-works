// var arr=[10,12,13,14,15]
// srch=13 found / not found

var arr=[10,12,13,14,15];
var flag=0;
for(let num of arr){
    if(num==13){
        flag=1;
        
        break;
    }
}

    console.log(flag==0?"element not found":"13  found in the arr");

