// ! Functional Programming

var pair = 100;
var salestax = 0.4;
var othertax = 2.1;

function totalprice(price, Stax, Otax) {
    return price * Stax * Otax;
}

var topay = totalprice(pair, salestax, othertax);
console.log("The final amount to pay is: " + topay);


// !Object Oriented Programming

var price1 = {
    purchase: 100,
    Salingtax: 0.4,
    expense: 2.1,
    topay: function(){
        var Total = this.purchase * this.Salingtax * this.expense;
        console.log("Total oops price is==",Total)
    }
}

price1.topay();
//? Use of this: this strikes the object whatever name is 

var price2 = {
    purchase: 123,
    Salingtax: 0.4,
    expense: 2.1,
    topay: function(){
        var Total = this.purchase * this.Salingtax * this.expense;
        console.log("Total oops price is==",Total)
    }
}
price2.topay();