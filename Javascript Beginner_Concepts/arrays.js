// Arrays


//~ Create an array named colors that contains five different names of colors as strings.
var color = ["white", "blue", "green", "Yellow", "Red"];

//~ Access the first color in the array and print it to the console using console.log()
console.log("index 0", color[0]);

//~ Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log("index 1", color[2]);

//~ Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
color[4] = "ultraviolet";

// !Printing the updated value
console.log("index 4", color[4])


// ! using function and array concept
// ^Your task in this exercise is to code a function which will be able to take
// ^a word and locate the position of a chosen letter in that given word.  

function letterFinder(word,match){
    for(var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test","t")