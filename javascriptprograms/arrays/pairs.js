// find pairs
// var [1,2,3,4,]
// op=3(1,2)
// var arr = [5, 2, 4, 3]
// var sum = 7;
// var arr2=[];
// var cnt =0;
// for ( let i=0; i<=arr.length;i++){
//     for (let j=i+1; j<=arr.length;j++){
//         if(arr[i]+arr[j]==sum){
            
//             console.log(`${arr[i]},${arr[j]}are pairs`);
//         }cnt++
//     }
// }console.log(cnt);

//BigO =>space complexity(memory), time complexity

var arr=[3,3,4,2]
arr.sort((i,j)=>i-j)
var cnt=0;
var elem =6;
var low=0;
var upp=arr.length-1;
while (low<upp) {

    let total=arr[low]+arr[upp];
    if(elem==total){
        console.log(`pairs are ${arr[low]},${arr[upp]}`);
        low++;
    }
    else if(elem>total){
        low=low+1;
    }
    else if(elem<total){
        upp=upp-1;
    }
    cnt++;
}console.log(`counter${cnt}`);