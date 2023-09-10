//! Object.keys() method
//^The Object.keys() method receives an object as its paramete
const ali = {
    uni: "UET",
    sem: 5,
    live:"Peshawar"
}
console.log("<-----------Object key-------------->")

console.log("Using Object key method=", Object.keys(ali));


console.log("<-----------Object Value-------------->")
//*when I run Object.keys() and pass it my cali object, the returned
//* value is an array of strings, where each string is a property key
//* of the properties contained in my ali object.
console.log("Using Object Value method=", Object.values(ali))



console.log("<-----------Object entries-------------->")
// ^ Object.entries() method
//^Object.entries(), which returns an array listing both the keys and the values.

console.log("Using object entries method",Object.entries(ali))