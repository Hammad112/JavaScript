//* Loops:Doing a task multiple times
//* For Loops
//* While Loops
//* Nesteed Loops
//* for loop
for (var i = 0; i <= 3; i++){
    console.log("For Loop number is: ", i);
}

//^ while loop code the repeatS until certain condition become true
var counter = 16;
while (counter > 0) {
    console.log("While Loop is:",counter);
    counter--;
}


//! Nested loop

for (var k = 2000; k <= 2023;k++){
    console.log("Year==", k);
    for (var l = 1; l <= 2; l++){
        console.log("Month is=",l)
    }
}


//! Example:1
for (var f = 1; f <= 12; f++){
    switch(f){
    case 1:
    console.log("Gold Medal");
    break;
    case 2:
    console.log("Silver Medal");
    break;
    case 3:
    console.log("Bronze Medal");
    break;
    default:
    console.log(f);
    break;
}
}
