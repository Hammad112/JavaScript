//* Number constants
//^ Here are some of the built-in number constants that exist on the Math object:
console.log("<---------MATH.PI--------->")
//^ The PI number: Math.PI which is approximately 3.14159
var h = Math.PI;
console.log("Value of Math.PI is=", h)

console.log("<---------MATH.E--------->")
//^ The Euler's constant: Math.E which is approximately 2.718
var i = Math.E;
console.log("Value of Math.E is=", i)

console.log("<---------MATH.LN2--------->")
//^ The natural logarithm of 2: Math.LN2 which is approximately 0.693
var j = Math.LN2;
console.log("Value of Math.LN2 is=", j);

console.log("<---------Rounding Methods--------->")


//! Rounding methods
console.log("<--------- Ceil  upgrade upwward--------->")
//~  Math.ceil() - rounds up to the closest integer
function ceil(num) {
    return Math.ceil(num);
}
console.log("Math.ceil==", ceil(4.5));

console.log("<--------MATH.FLOOR--------->");
//~  Math.floor() - rounds down to the closest integer
function floor(num) {
    return Math.floor(num);
}
console.log("Math.floor==", floor(9.5));

//~  Math.round() - rounds up to the closest integer if
// ~ the decimal is .5 or above; otherwise, rounds down to the closest integer
console.log("<--------MATH.ROUND--------->");
function round(num) {
    return Math.round(num);
}
console.log("Math.round==", round(15.5));
//~  Math.trunc() - trims the decimal, leaving only the integer
console.log("<--------MATH.TRUNC--------->");
function trunc(num) {
    return Math.trunc(num);
}
console.log("Math.trunc==", trunc(15.5));

//^ Arithmetic and calculus methods:
//? Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object:
console.log("<--------Math.power----------->");
// ?Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8
var x = Math.pow(2, 3);
console.log("x power n is equal to", x)

console.log("<--------Math.sqrt----------->");
//? Math.sqrt(16) - calculates the square root of 16, the result is 4 
var y = Math.sqrt(16);
console.log("square root of 16 is equal to", y)

console.log("<--------Math.cubeRoot----------->");
//? Math.cbrt(8) - finds the cube root of 8, the result is 2 
var z = Math.cbrt(8)
console.log("cube root of 8 is equal to", z);

console.log("<--------Math.abs----------->");
//? Math.abs(-10) - returns the absolute value, the result is 10 
var a = Math.abs(-12);
console.log("absolute value of -12 is equal to", a);

console.log("<--------Math.log----------->");
//? Logarithmic methods: Math.log(), Math.log2(), Math.log10()
var b = Math.log2(10)
console.log("Logaritmic=", b);

console.log("<--------Math.Minimum and Maximum----------->");
// ?Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
console.log("<----------Minimum---------->")
var c = Math.min(9, 8, 7);
console.log("Minimum value is", c);

console.log("<----------Maximum---------->")
var d = Math.max(12, 23, 345, 543)
console.log("Maximum value is", d);


console.log("<---------Trignometric----------->");
//?  Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.
console.log("<---------Sin--------->")
var e = Math.sin(90);
console.log("sin of 90 is", e);

console.log("<---------Cos--------->")
var f = Math.cos(90);
console.log("cos of 90 is", f);

console.log("<---------Tan--------->")
var g = Math.tan(90);
console.log("tan of 90 is", g);