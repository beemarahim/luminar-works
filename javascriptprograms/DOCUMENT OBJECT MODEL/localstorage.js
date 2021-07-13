//localStorage

// localStorage.setItem(key,value)                                               to set the key,value pair

//adding new key value pairs

//account_num:1000
//password:abc123
// localStorage.setItem("account_num",1000)
// localStorage.setItem("password","abc123")

// fetching values
//fetching account_number

// localStorage.getItem(key)                                                     to get the value 

// var acc_no=localStorage.getItem("account_num")
// console.log(acc_no);


// var pwd=localStorage.getItem("password")
// console.log(pwd);

// console.log(localStorage.key(index));                                         to get the key

// console.log(localStorage.key(2));

// for(let i=0;i<localStorage.length;i++){
//     console.log(localStorage.key(i));
// }
 
// for (let i=0; i<localStorage.length;i++){
    
//     console.log(localStorage.key(i));
                                                                                //    to get key and value
//     console.log(localStorage.getItem(localStorage.key(i)));
                          
// }
// localStorage.setItem("password","abc123")
// localStorage.setItem("account_num",1000)
// for(let i=0;i<localStorage.length;i++){
//     var ke=localStorage.key(i)
//     var val=localStorage.getItem(ke)
//     console.log(ke,val);
// }



//removing account number key value 
// localStorage.removeItem("account_num")                                      // removing key,value

// localStorage.removeItem("password")

//clearing localstorage                                                       //clearing localstorage
// localStorage.clear()


// var book={book_name:"rainrising",author:"nirupama",price:123,no_copies:50}


// var user={username:"user2",password:"password2",name:"ravi",balance:3000}

//user.username=>key//value=>user
//JSON-javascript object notation
// localStorage.setItem(user.username,JSON.stringify(user));


// localStorage.clear()



var user={username:"user2",password:"password2",name:"ravi",balance:3000}
localStorage.setItem(user.username,JSON.stringify(user));