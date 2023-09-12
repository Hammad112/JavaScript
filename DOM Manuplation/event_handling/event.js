
//^ Event Handler on Button
document.getElementById("btn").addEventListener('click', function (event) {
    var target = document.getElementById('text').value;
    if (target === "") {
        alert("Fill in the field");
    }
    else {
        alert("Thankyou");
    }
});

//^ Event handler on h1
document.getElementById('h1').addEventListener('click', function () { 
    document.getElementById('h1').innerText="ENGINEERING"
   
});