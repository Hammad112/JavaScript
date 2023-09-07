//*passing by value
//! like b=a in such way that changing value b doesnot effect a
// !permitives are passed by values
//* memory allocation and updation is done without effecting a value in memory
var t = 6;
var yy = t;
console.log("t not updated =", t);
console.log("Y not updated =", yy)
// !upadating yy
console.log("t updating ");
yy = 19;
console.log("t  not updated=", t);
console.log("yy updated=", yy);

console.log("t updated=", t);

//^ like b=a in such way that changing value b does effect a
// ^objects are passed by reference
var q = { fg: 8 };
var w = q;
console.log("not updated Q=", q.fg)
console.log("not updated W=", w.fg);
// !upadating w
console.log("t updating ");
w.fg = 9;
console.log(" updated Q=", q.fg)
console.log(" updated W=", w.fg)

console.log("Function call by reference and value")

//* Function
//^ By Value
function change(permit) {
    console.log("permit=", permit);
    console.log("UPDATED");
    permit = 7;
    console.log("permit=", permit);
}
var value = 4;
change(value);
console.log("Original Value is=", value)


//^ Function by reference

function refernece(permitobj) {
    console.log("permit=", permitobj.fg);
    console.log("UPDATED");
    permitobj.fg = 9;
    console.log("permit=", permitobj.fg);
}
var value = { fg: 8 };
refernece(value);
console.log("Original Value is=", value.fg)
