/* Create an application with three divs on the page, styled to be square and red. Write a function called "changeStyle" that takes an HTMLElement as an input, and changes the style of that element to have a backgroundColor of blue, and a smaller width than its height. Create a function for each button that is invoked when that button is clicked. Use the changeStyle function to change the style of the div that was clicked. */

let color = document.getElementById("divStyle").style.backgroundColor;

function changeStyle() {
    if(color === "red") {
        document.getElementById("divStyle").style.backgroundColor = "green";
    }
}