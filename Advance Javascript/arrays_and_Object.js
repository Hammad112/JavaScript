//! More info

//* Array
var names = ["hassan", 45, "pakistan"];
// ^printing Array
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//* SEcound method to print array
// ^Arrays are object
console.log("<----------SEcound method to print array-------------->")
names.place = "Abbottabad";

for (var named in names) {
    console.log(named +" Hello " + names[named]);
}


console.log("<----------OBJECT-------------->")

// *Object
var myobj = {
    name: "Hammad",
    courses: 45,
    Reident:"Abbottabad"
};

//^ Object
for (var prop in myobj) {
    console.log(prop + ":" + myobj[prop]);
}

