// if button is pressed, then display "Hello" and the given name

let nameInput = document.querySelector("#nameInput");
let introduction = document.querySelector("#introduction");

// when button is pressed, display "Hello, [name]"

function sayHello() {
    introduction.innerHTML = "Hello, " + nameInput.value;
}