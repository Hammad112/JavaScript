//* Arrays in JavaScript come with a handy method that allows you to
//*  loop over each of their members.

//^ The forEach() method calls a function for each element in an array.
//^ The forEach() method is not executed for empty elements

console.log("<-----------Exaple 1 Arrays------------>")
const num = [1, 2, 3, 45, 6, 7, 8, 9, 10];
function displays(numb, index) {
    console.log(`index is : ${index} and element is ${numb}`)
}
num.forEach(displays);

console.log("<-----------Exaple 2   Arrays------------>")

const fruits = ["kiwi", "Mango", "apple", "orange"];
fruits.forEach(function (item, index) {
    console.log(`index is : ${index} and element is ${item}`)
});


console.log("<-----------Exaple 2   Objects------------>")
const student = {
    names: "ali",
    age: 12,
    clas: 7,
    rollno: 123
}

const info = Object.keys(student);
info.forEach(function (std) {
    console.log(std,student[std]);
})