/*
 * Destructuring is a JavaScript expression that makes 
 * it possible to unpack values from arrays, or properties
  *from objects, into distinct variables.
 */


//  ^Destructuring an array

console.log("<-----------Example 1---------->")
const arr = [1, 2,4,5,6,7];
const [a, b] = arr;
console.log(a) // prints 1 on the console
console.log(b) // prints 2 on the console

console.log("<-----------Example 2---------->")

const array = [1, 2, 3, 4];
const [d, , c] = arr;
console.log(c) //^ prints 3
console.log(d) //^print 1


console.log("<-----------Object Destructuring----------> ")
console.log("<-----------Example 1 ---------->");
const car = {
    names: "Lemorgini",
    model: 2023,
    price: 120000,
    color: "Red",
    engine: "V8",
    speed: "200km/h",
    topSpeed: "300km/h",
}

const { names: firstname, model: year, price: current } = car;
console.log("Car Name=", firstname);
console.log("Car Model=", year);
console.log("Car Price=", current);

console.log("<-----------Example 2 ---------->");
const place = {
    name: "Abbottabad",
    famousplace: "Harnoi",
    famousplace2: "Thandiani",
    city:true
}
const { name: placename, famousplace: famous, city: is } = place;
console.log("Place Name:", placename);
console.log("Famous Place", famous);


/* 
  *Javascript's modern features, like destructuring, enable you to write 
 * *highly readable code. Using destructuring, you can quickly unpack values 
 * *from arrays and objects. Destructuring can also prove handy in other situations
 * *, like swapping values of two variables. Hopefully, you now understand what 
 * *destructuring means in JavaScript, and you can be able to use it while writing code. */