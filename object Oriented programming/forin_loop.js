// *for..in loop in JavaScript allows you to iterate over
// *all property keys of an object.


console.log("<-----iterate through object----->")
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

//^ using for...in
for ( let key in student ) {

    //^ display the properties
    console.log("key===>",key,"is",student[key]);
}



console.log("<-----iterate through object   updating value----->")

const superpowe = {
    name: 'Monica',
    class: 7,
    age: 12
}

//^ using for...in
for ( let key in superpowe ) {

    let nameis = "$" + superpowe[key];
    //^ display the properties
    console.log("key===>",key,"is",nameis);
}


console.log("<-----Strings----->")
const string = 'code';

//! using for...in loop
for (let i in string) {
    console.log(string[i]);
}


console.log("<-----Arrays----->")
//* define array
const arr = [ 'hello', 1, 'JavaScript' ];

//* using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}
