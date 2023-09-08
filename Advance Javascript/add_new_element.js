//! Push and pop method

var fruit = ["apple", "cake"];
console.log("<-------------PUSH METHOD add at last--------------->");
console.log(fruit);
console.log("<-----------updating-------------->");
fruit.push("Bannnana");
console.log(fruit);
console.log("<-------------POP METHOD delete from last--------------->");
fruit.pop();
console.log(fruit);



console.log("<-------------Function--------------->")

function arr(one, two, three, four) {
    var array = [];
    array.push(one, two, three, four);
    console.log(array)
}
arr(2, 4, 5, 6, 7);
