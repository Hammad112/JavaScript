// * Currency Exchange Rate

var Exchange_Rate = 310;

function convertcurrency(amount, rate) {
    return amount / rate;
}
console.log("Currency Converted Amount: " + convertcurrency(26578234 , Exchange_Rate));