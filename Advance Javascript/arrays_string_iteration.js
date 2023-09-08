//* Array
// ? Arrays are not string
var array1 = [12, "Hammad", 12.5, "oops", 90];

//* outputing elements of array
for (var i = 0; i < array1.length; i++){
    console.log(i,": Array=",array1[i])
}

// ^String
var string1 = "Hammad";
// ~Outputing String
for (var j = 0; j < string1.length; j++){
    console.log(j,": String :",string1[j])
}


// ~Concat wor pop and push will not work on string