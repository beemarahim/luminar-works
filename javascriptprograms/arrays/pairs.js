// find pairs
// var [1,2,3,4,]
// op=3(1,2)
var arr = [5, 2, 4, 3]
var sum = 7;
var arr2=[];
for ( let i=0; i<=arr.length;i++){
    for (let j=i+1; j<=arr.length;j++){
        if(arr[i]+arr[j]==sum){
            console.log(`${arr[i]},${arr[j]}are pairs`);
        }
    }
}