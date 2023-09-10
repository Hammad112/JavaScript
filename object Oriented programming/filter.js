//^The filter() method creates a new array filled with elements that pass
// ^ a test provided by a function.
//^The filter() method does not execute the function for empty elements.
//^The filter() method does not change the original array.



// ~ it filters your arrays based on a specific test.
// ~ For example, you can use it to filter out all the odd numbers in an array.

console.log("<-----------Example 1------------->");
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
number.filter( function (numb) {
    console.log( numb > 10,numb);
})


console.log("<-----------Example 2------------->");

const age = [12, 14, 18, 19, 23, 29, 33, 36, 38, 85, 90];
age.filter(function (age) {
    console.log(age>18?"Adult":"not a adult")
})