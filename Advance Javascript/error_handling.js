// ^Error it will not stop a message 


try {
    console.log(c + d);
}
catch (err) {
    console.log("here is",err)
    console.log("Error is:")
}
console.log("Program hasn't stopped")
console.log("<----------------TRY------------------->");
//? using throw
try {
    throw new ReferenceError();
} catch (err) {
    console.log("Error is:", err)
}
 
console.log("Program hasn't run")


console.log("<----------------Example 2------------------->");
function addTwoNums(a,b){
    try{
        if (typeof (a) !== typeof (b)) {
            throw new RefernceError();
        } else {
            console.log(a + b);
        }
    }
    catch(err){
        console.log("Error!=>",err)
    }
}
addTwoNums("5",5)
addTwoNums(5,"5")
console.log("IT Still Works")