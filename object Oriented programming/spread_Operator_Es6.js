// ^JavaScript spread operator (...) allows us to quickly copy all or part of an
// ^existing array or object into another array or object.


console.log("<------------Example 1-------------->")
function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
//!   spread Operator
  console.log(sum(...numbers));



console.log("<--------------Example 2------------------->")
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   //^ ["My", "name", "is", "Jack"]
console.log(...arrValue); //^ My name is Jack


// ^Example 3

console.log("<--------------Example 3-------------->")
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);



//* Object
const car1 = {
  speed: 200,
  color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)