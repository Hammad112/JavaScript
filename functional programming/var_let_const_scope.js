console.log("<----Var let Constant ---->>  Scope------->")

// ^Block-Scope: it's state that variable declared inside a block
// ^ can be accesible inside the block <Let Constant>

// !All other code outside of code block can not access it
//

/*
 ?let: 
    ?strict mode accessible within block
   ? can be updated
    ? can not be redeclared

* const: cannot change value after declaration 
*accessible with in block
*cant be update

^var: linent mode
 ^   can be redeclared
  ^  can be updated
   ^can be used even declared later
    
*/

console.log("<---------Var--------->");

console.log("<------can be declare later------->")
console.log("user", user); //!will not throw an error
var user;

console.log("<------can be redeclared------->")
var user = "ali";
var user = "hasan";
console.log(user);




console.log("<-----------Let Keyword---------->");


console.log("Can't be access before declaring");
//! console.log(phone);
// !let phone;   //throw an error

console.log("Cant be redeclared");
// !let phone = 123456789;
//! let phone = 987654321; //throw an error  syntax Error
console.log("Can be accessed and changed but cant be redeclare again ");
let phone;
console.log(phone);
phone = 232;
console.log(phone);


console.log("<-----------Const Keyword---------->");
console.log("Can't be access before declaring");
//! console.log(error);
// !let error;   //throw an error

console.log("Cant be redeclared");
//! const error = "error";
//! const error = "error"; //throw an error  syntax Error
console.log("Can be accessed but cant be redeclare again and updated ");




