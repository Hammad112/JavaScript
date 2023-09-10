// !for of Loop
// *The for..of loop in JavaScript allows you to
// *iterate over iterable objects
// !(arrays, sets, maps, strings etc)

// ^Arrays

const array1 = ["ali", 5, "hassan", 90, "develop"];

console.log("<-----------Arrays------------>")
//TODO: using for of loop on arrays.
for (let elements of array1) {
    console.log("Arrays =>", elements);
}

console.log("<-----------String------------>")
// ^ Strings
const str = "Universit";

for (let stive of str) {
    console.log("String =>", stive);
}


console.log("<-----------Sets------------>")
//* Sets
const set = new Set([1, 2, 3, 4, 5]);
for (let sett of set) {
    console.log("Sets =>", sett);
}


// ~Maps
console.log("<-----------Maps------------>")
let map = new Map();

// ?inserting Element
map.set('name', 'jack');
map.set('place', 'Abbottabad');

for (let [key,value] of map) {
    console.log(key,"Mapping:", value);
}