for (let row = 1; row <= 4; row++) {
    let str = "";
    for (let col = 1; col <= 9; col++) {
        if (row + col == 6 | col - row == 4) {
            str += "*" + "\t";
        }
        else {
            str += "\t";
        }


    } console.log(str);
}

for(let row =1;row<=1; row++){
    let str="";
for(let col=1; col<=9; col++)
{
 str+="*"+"\t";
    
}console.log(str);
}




