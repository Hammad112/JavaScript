//^ Recursion: Recursion is a process of calling itself. A function that
//^ calls itself is called a recursive function.

// *Alternative way to run without loop

// ?A recursive function must have a condition to stop
// ?calling itself.Otherwise, the function is called indefinitely.

// ^Once the condition is met, the function stops calling itself.
// ^This is called a base condition.

// !avoid infinite loops


console.log("<-------------Example 1----------------->")
let counter = 6;
function example() {
    console.log(counter);
    counter--;
    if (counter === 0) 
        return;
        example();
    
}
example();

console.log("<-------------Example 2----------------->")

let countdown = 10;
function counting() {
    console.log(countdown);
    countdown--;
    if (countdown === 0) 
        return;
        counting();
}
counting();