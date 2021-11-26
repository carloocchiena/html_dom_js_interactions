
function calculator() {

    var initial = parseInt(document.getElementById("initial").value);
    var recurring = parseInt(document.getElementById("recurring").value);
    var interest = parseFloat(document.getElementById("interest").value);
    var maturity = parseInt(document.getElementById("maturity").value);

    var recurringAmount = 0;

    capitalAmount = initial * (1 + interest) ** maturity;

    maturity -- // this to evaluate the recurring amount at the end of each year

    while (maturity > 0) {
        var yearlyInterest = recurring * (1 + interest) ** maturity
        maturity --
        recurringAmount += yearlyInterest
    }
    
    var total = capitalAmount + recurringAmount + recurring

    result = document.getElementById("result").innerHTML = total.toFixed(2);
}
