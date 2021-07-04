// var mobile={
//     code:1000,
//     brand_name:"samsung"
//     price:30000,
//     processor:"snapdragon"
// }
// console.log(mobile.brand_name);
// console.log(mobile["brand_name"]);
// // chk offer exist if not add offer of 20%
// if(!("offer" in mobile)){
//     mobile.offer="20%"
// }
// console.log(mobile);
// // price -2000
// mobile.price-=2000;
// console.log(mobile);




var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomato",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potato",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
    {code:1004,name:"potato",mrp:45,aval_qty:40},
]

//some()
// var is_aval_price=products.some(item=>item.mrp>=30)
// console.log(is_aval_price);







//searching for a product
//potato
// var srch=products.find(item=>item.name=="potato")
// console.log(srch);



// sort product upon avl_qty desc
// var srt_qty=products.sort((item1,item2)=>item2.aval_qty - item1.aval_qty)
// console.log(srt_qty);




//forEach()
// products.sort((item1,item2)=>item2.aval_qty - item1.aval_qty).forEach(item=>console.log(item));
products.sort((item1,item2)=>item2.aval_qty - item1.aval_qty).forEach(item=>
    {if(item.aval_qty>0)
    console.log(item)});





//print all product names in this shop
// var product_names=products.map(item=>item.name)
// console.log(product_names);




//print costly product using reduce()- ARRAY METHODS
// var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
// console.log(costly_product);




// low cost product
// var low_cost=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
// console.log(low_cost);




//print all product_names in upper case

// var p_name=products.map(item=>item.name.toUpperCase())
// console.log(p_name);

// var p_name=product_names.map(name=>name.toUpperCase())
// console.log(p_name);




// print all products whose price <50

// var below_fifty=products.filter(item=>item.mrp<50)
// console.log(below_fifty);





// print all products available in range of 30-50
// var product_range=products.filter(item=>item.mrp>=30&item.mrp<=50)
// console.log(product_range);






//print out of stock products 
// var out_stock=products.filter(item=>item.aval_qty==0)
// console.log(out_stock);





// var arr=[4,3,2,7,8,9,]
//op 3,2,1,8,9,10 array method
// for num<5?num-1:num+1



// var condition_arr=arr.map(num=>num<5?num-1:num+1)
// console.log(condition_arr);




//reduce()

// var arr=[3,4,2,8,7,9]
// var total=arr.reduce((num1,num2)=>num1+num2)
// console.log(total);

// var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max);

// var min=arr.reduce((num1,num2)=>num1>num2?num2:num1)
// console.log(min);

// var maximum=arr.reduceRight((num1,num2)=>num2)
// console.log(maximum);



