
//  var str = "";

// for (let row = 1; row <= 5; row++) {
   
//     for (let space = 5 - row; space >= 1; space--) {
//         str += "";
//     }
//     for (let star = 1; star <= row; star++) {
//         str += "*" + "\t";
//     }
//     console.log(str); 
// }

for(let row=1; row<=5; row++){
    let str="";
    for(let col=5-row; col>=1; col--){
        str+=" ";

    }
    for (let col=1; col<=row; col++){
        str+="*"+" ";
    }console.log(str);
}


 