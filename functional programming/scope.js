// ^ Global Scope
// ?Local scope

var count = 100;  //^Global Scope: define outside a function

function countdon(){
    var counting = 15;    //^Local Scope : define inside a function
    // ^  scoped gto the function in which it is created
    return counting;

}
console.log("Local Scope", countdon());
console.log("Global Scope==", count);

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
