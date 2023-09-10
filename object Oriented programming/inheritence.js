// *Prototype
// ? prototype is an object which can hold properties of to be shared by multiple
// ? objects

var car = {
    name: "Hundai",
    model: 2023,
    price: 120000,
    
}
var car1 = Object.create(car);
console.log(car1);

console.log("Name is :", car1.name);
console.log("Name is :", car1.model);
console.log("Name is :", car1.price);

console.log("<-------Example 2 ---------->")
var car2 = Object.create(car);
console.log("Name is :", car2.name);
console.log("Name is :", car2.model);
console.log("Name is :", car2.price);
