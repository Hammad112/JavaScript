//? Closure:
//^ A closure is the combination of a function bundled together 
//^ (enclosed) with references to its surrounding state(the lexical 
//^ environment).In other words, a closure gives you access to
//^ an outer function's scope from an inner function. In JavaScript
//^ ,closures are created every time a function is created, 
//^ at function creation time.



console.log("<---------Example 1 ----------->")

function makeMultiplier(multiplier) {
    // ^ var multiplier=2
    console.log("Multiplier is =",multiplier)
    return (
        function (x) {
            console.log("Value of x=",x)
            return multiplier * x;
       }
    );
}

var doubling = makeMultiplier(5);
console.log(doubling(10));

console.log("<---------Example 2 ----------->")

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add10(5));
console.log(add10(15));