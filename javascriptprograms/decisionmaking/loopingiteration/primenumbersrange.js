// print all prime nums bw 3 to 25


// var low = 21;
// var upp = 40;

// for (let num = low; num <= upp; num++) {
//     let flag = 0;
//     for (let j = 2; j < num; j++) {
//         if (num % j == 0) {
//             flag++;
//             break;
//         }
//         if (flag == 0) {
//             console.log(num);
//         }

//     }
// }


var low=21, upp=40;
for( var num =low; num<=upp; num++){
    let flag=0;
    for (let j=2; j<num; j++){
        if(num%j==0){
            flag++;
            break;
        }
    }
    if(flag==0)
    console.log(num);
}

