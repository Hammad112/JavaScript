//! Assignment Operator

// Run it it seperately one by one

var a = 10;
var b = 20;

// + operator

var z = a + b;
console.log(z)

// - operator

var x = b - a;
console.log(x)

// // * operator

var z = a * b;
console.log(z)


//  / operator
var z = a / b ; // will give you the result of division, not integer.
console.log(z)

// // Comparison Operator

var d = 7;
var e = 7;

// // > greater then
if (d > e) {
    console.log(d)
}

// // < less then operator
else if (d < e) {
    console.log(e)
}

// // == equal to operator
else if (d == e) {
    console.log("equal")
}


// // >=
var f = 9;
var g = 10;
if (f >= g) {
    console.log("f=",f)
}

// // // <=
else if (f <= g) {
    console.log("g=",g)
}


// // !=
var a = 10;
var b = 20;
if (a != b) {
    console.log("not equal")
}


// // Logical operator
// // &&  if both are true then only if statement will be executed

var a = 40;
var b = 4;
if (a > 10 && b < 40) {
    console.log("and statement")    //return true both are true if any get false it will nit execute this statement
}

// // ||  if one condition is true it will run the  if condition 

var b = 12;
var c = 20;
if (b > 10 || c > 40) { 
    console.log("OR Statetment")   // it will return true bcz first statement b>10 is true
}


// //  ! not 
var a = 10;
if (!(a < 10)) {
    console.log("not")
}



