

var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10]
]

// print number of products in this shop

var flag=0
for (let pdt of products){
     flag++;
     
}console.log(`number of products:${flag}`);

// print  number of items in stock

var items=0;
for (let pdt of products){
    if(pdt[3]>0)
    items++;
}
console.log(`number of items in stock :${items}`);

// is there any item available under rs 10? true

for(let pdt of products){
    console.log(pdt[2]<10?true:false);
    break;
}

// print details of boost
for(let pdt of products){
    if(pdt[1]=="boost"){
    console.log(pdt);
    break;}
}