//^ method is used to map each array item over to another array's item, based on whatever work is performed inside
//^ the function that is passed -in to the map as a parameter.
//^ The map() method creates a new array with the results of calling a function for every array element.

const array = [5,6,7,8,9,10,11,12,13,14,15];
array.map(function (ar) {
    console.log(ar / 10)
});



console.log("<-----------Example 2------------->");
let play = new Map();
play.set(1, "Baber Azam");
play.set(2, "Shahid Afridi");
play.set(3, "Iftikhar chacha");

console.log(play)