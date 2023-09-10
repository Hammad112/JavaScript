//* difference between rest and spread is that the rest operator puts the rest of
// *some specific user - supplied values into a JavaScript array.But the spread syntax
// *expands iterables into individual elements.


// *Rest Operator
// *The rest operator is used to pass an indefinite number of parameters to a function.

console.log("<----------Example 1--------->");
function fruit(a, b,...restofthings) {
    console.log("Array::", a)
        console.log("B Array::", b);
    console.log("Rest::",restofthings)
}

fruit("Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple");


console.log("<----------Example 2--------->");
function car(a, b, c, ...d) {
    console.log("A==>", a);
    console.log("B==>", b);
    console.log("C==>", c);
    console.log("D==>", d);
    
}

car("Lemorgini", "pegotti", "hundai", "margala", "Civic")



console.log("<----------Rest operator Cancatenation--------------->");

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] //^ concatenate
console.log(fruitsAndBerries); //^ outputs a single array
    