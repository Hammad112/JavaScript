//^A set is a collection of unique values.
//^ To build a new set, you can use the Set constructor:
//^ The Set object lets you store unique values of any type, whether primitive values or object references.


const Fruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(Fruits);
console.log(uniqueFruits);

// ^new Set
let alpha = new Set();