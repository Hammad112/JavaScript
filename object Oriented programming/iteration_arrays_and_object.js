// iterate through for loop

console.log("<--------Object-------->");
const car = {
    name: "Hundai",
    model: 2023,
    price: 120000,
    color: "Red",
}
// for (prop of car) {
//     console.log(prop);  //!Throw an error
// !it's important to know that a for of loop cannot work
// ! on an object directly, since an object is not iterable.
// }

console.log("<-------Arrays------->")

console.log("<--------Example 1----------->")
const arr = [1, 2, 3];
for (var number  of arr) {
    console.log("Array are iterateable=", arr);
}

console.log("<--------Example 2----------->")

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

