// Constructor is a function that is used to create an object,
//  the prototype is an object that contains properties and methods
// that are inherited by objects created from a constructor.

// * Example 1
console.log("<-------------Example 1-------------->")
//! Constructor
function Person(name,uni) {
    this.name = name;
    this.uni = uni;
}

//* Prototyping
Person.prototype.speak = function () {
    console.log(`My Name is ${this.name}`);
    console.log(`I am studying in ${this.uni}`);
}

//^ Creating Object
var myname = new Person("Hammad","University of Engineering and tecnology");

// ~Calling Function
myname.speak();
  

console.log("<-------------Example 2-------------->")
// !Example 2:

function House(place, Area, price) {
    this.place = place;
    this.Area = Area;
    this.price = price;
}
House.prototype.details = function () {
    console.log(`House is located in place ${this.place}.`);
    console.log(`Area of the house is ${this.Area}.`);
    console.log(`Price of the house is ${this.price}`);
 }



// ^Creating Object
var myHouse = new House("Abbottabad", "796 sqkm", 120300000);

// *Calling Function
myHouse.details();