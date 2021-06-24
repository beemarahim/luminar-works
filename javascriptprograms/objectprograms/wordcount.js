// var text="hai hello hai hello"
// //find word count
// // hai :2 hello:2
// var words=text.split(" ")
// console.log(words);
// var dict={}
// for (let word of words){
//     if(!(word in dict)){
//         dict[word]=1;
//     }
//     else{
//         dict[word]+=1
// }
// }
// console.log(dict);


// key                value
// hai                  2
//hello                 2


var text ="hello,hai,how,hello"
var words=text.split(",")
var obj={}
for(let word of words){
    if(word in obj){
        obj[word]+=1;
    }
    else{
        obj[word]=1;
    }
}
console.log(obj);