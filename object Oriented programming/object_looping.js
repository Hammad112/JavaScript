


var clothes= {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothes)) {
    console.log(key, ":", clothes[key])
}


console.log("<------Example 2 using object upper--------->");

function access() {
    var key;
    if (Math.random() > 0.5) {
        key = "price";
    } else
    {
        key = "color";
    }
    console.log(clothes[key]);
}
access();