//^ Classes are a template for creating objects. They encapsulate
//^  data with code to work on that data.Classes in JS are built on prototypes but
//^ also have some syntax and semantics that are unique to classes.

//^ Classes are in fact "special functions", and just as you can define function
//^ expressions and function declarations, the class syntax has two components:

//^ Class expressions
//^ Class declarations

class car{
    constructor(brand,model,price){
        this.carname = brand;
        this.carmodel = model;
        this.carprice = price;
    }
    present(){
        console.log('I have a '+ this.carname + 'and the price is =' + this.carprice);
    }
}
// ? creating an object 
const Car1 = new car("Hundai", 2023, 120000);
console.log(Car1);
 
// **Calling Function
Car1.present();


console.log("<---------Example 2 ------------>");
// create your classes here
class house{
    constructor(name,price,place,address){
        this.name=name;
        this.price=price;
        this.place=place;
        this.address=address;
    }
    presentAdress(){
        console.log("the house name is:"+this.name+"the price is:"+this.price);
        console.log("the house place is:"+this.place+"the address is:"+this.address);
    }   
}
const Housename=new house("hammad",12345678890,"Abbottabad","Pakistan,Abbottabad");
console.log(Housename);

console.log(Housename.presentAdress());