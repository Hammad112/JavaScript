// *charAt()
//* concat()
//* indexOf()
// *lastIndexOf()
// *split()
// *toUpperCase()
//* toLowerCase()


var uni = "University of Engineering and Technology Peshawar";
var student = "Hammad ";
// ?charAt()
console.log("<-------------CHARAT()------------>");
console.log("charAt(0)==", uni.charAt(0));
console.log("charAt(10)==", uni.charAt(11));

// ?concat()
console.log("<-------------CONCAT()------------>");
console.log("concat()==", student.concat(uni));

// ?indexOf()
console.log("<-------------INDEXOF()------------>");
console.log("indexOf()==", uni.indexOf("o"));
console.log("indexOf()==", uni.indexOf("Peshawar"));

// ?lastIndexOf()
console.log("<-------------LASTINDEXOF()------------>");
console.log("lastIndexOf()==", uni.lastIndexOf("o"));
console.log("lastIndexOf()==", uni.lastIndexOf("Peshawar"));

// ? to lower case
console.log("<------------to lower case ------------>");
console.log("toLowerCase()==", uni.toLowerCase());

// ? to upper Case
console.log("<--------------to upper case------------->")
console.log("UPPER CASE:", student.toUpperCase());

// ^split means skipping that word
let text = "How are you doing today?";
const myArray = text.split("How");
console.log("Split Function", myArray)

console.log("<-------MAtch------>")
var z = "LISON";
console.log(z.match(/I/));

// ^Exampple 1:
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
     var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
 
     if(condition1  && condition2){
     for(var i = 0; i < word.length; i++) {
         if(word[i] == match) {
             //if the current character at position i in the word is equal to the match
             console.log('Found the', match, 'at', i)
         } else {
             console.log('---No match found at', i)
         }
     }
     }
     else{
         console.log("Please pass correct arguments to the function.");
 
     }
 }
 
 letterFinder(3,5)
 letterFinder("cat", "c")
 