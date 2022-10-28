//  Make a page with one input and one button (Seeing a trend?). When the button is clicked (assuming the value typed into the input is numerical), calculate both the tip and the full value of the bill to be paid. Output both to the console, formatted as such: "Tip: $X. Total: $X"

let tipAmt = document.querySelector("#bill.value") * .10;
let totAmt = document.querySelector("#bill.value") + tipAmt;

// when button is pressed, display 10% of given value then the total of the given value and the 10%

function calTip() {
    calculator.innerHTML = "Tip: $" + tipAmt + ".  " + "Total: $" + totAmt + "."
}