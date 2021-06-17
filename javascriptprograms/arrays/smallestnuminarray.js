var  arr = [11, 15, 35, 8, 5, 39, 12];
var smallest = arr[0];

for ( var i = 0; i <arr.length ; i++) {

    if (arr[i] <smallest) {
      smallest = arr[i];
      
    }


} console.log(`${smallest} is the smallest number in the array`);