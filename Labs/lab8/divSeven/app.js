/* Create an application that with an input and a button. When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not. Use a separate function from the onclick function to discern if it is divisible. This function should return either true if it is divisible  or false if it is not. */

let number = document.getElementById("entNumber");
let result = document.getElementById("resultid");

// if button is pressed, determine whether the number is divisible by 7
// display "true" if true, "false" if false.

function divSeven() {
    if(number % 7 == 0) {
        console.log("True");
    }
}
