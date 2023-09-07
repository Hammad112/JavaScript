// * Object creation

var House = {
    // Properties
    rooms: 4,
    sharedEntrance: false,
    shared: {
        roof: "Both family",
        main: "main entrance door"
    },
    house_details: {
        "Area of House": "Abbottabad",
        street: "Karakoram",
        house_no: 123
    },
    $stock:110
};

// * printing object properties
console.log(House);

// *printing object properties one by one
console.log(House.rooms);

console.log(House.shared.roof);

console.log(House.house_details["Area of House"]);