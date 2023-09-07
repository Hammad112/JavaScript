//* Function
//^  Fundamental building block in the program
//^  A function is a set of statements that performs a task or calculates a value
//^  To use a function, you must define it somewhere in the scope from which you wish to call it
//^  A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
//^  The name of the function.
//^  A list of parameters to the function, enclosed in parentheses and separated by commas.
//^  The JavaScript statements that define the function, enclosed in curly brackets, {...}.

//~ Example:1
//? without parameters

function addTwoNum() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log("Addition=",c);
}
//! Function Call
addTwoNum();

//* With Parameters

function table(a, b) {
    var result = a * b;
    console.log("Multiplication=",result);
}
//~ Function Call
table(5, 8);

//! Arrow Function
//^  An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
const numb = () => {
          console.log("Hello World")
}
// Call Function
numb();