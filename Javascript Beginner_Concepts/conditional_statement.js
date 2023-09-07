//! Conditional Statement
//* if else statement

//* if : condition true if block will be executed
//* else condition will be executed if condition of if is not true

//! Example 1
var result = 94;
if (result = 90 && result < 100) {
    console.log("Congratulations you passed ");
}
else {
    console.log("Sorry you failed");
}

//! Example 2

var score = 88;
if (score >= 90 && score <= 100) {
    console.log("A+ Grade");
}
else if (score >= 80 && score < 90) {
    console.log("A Grade");
}
else if (score >= 70 && score < 80) {
    console.log("B Grade");
}

else if (score >= 60 && score < 70) {
    console.log("C Grade");
}

else {
    console.log("Fail");
}

//! Switch Statement

var place = 'Pakistan';

switch (place) {
    case 'Pakistan':
        console.log("Pakistani");
        break;
    case 'Bangladesh':
        console.log('Bangladeshi')
        break;
    case 'Kashmir':
        console.log("Kashmiri people");
        break;
    default:
        console.log("NULL");
}