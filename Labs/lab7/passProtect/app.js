/* Create an application with two input fields and one button.

When the button is clicked, verify the user has written these (exact) strings in the first and second field:

First field should be  "Username"
Second field should be  "Password"
If the two fields match, update a DIV on the page with the text "Success" or else "Wrong information". */

let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

function login() {
    if(user.value === "Username" && pass.value === "Password") {
        UP.innerHTML = "Success!";
    }   else {
        UP.innerHTML = "Wrong Information."
    }
};