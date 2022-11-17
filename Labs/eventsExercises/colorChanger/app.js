// When div is clicked, it should change color to red, green, or blue

let cBox = document.getElementById("cBox1");

function clickRed(event) {
    event.target.style.backgroundColor = "#900";
    console.log("Turned red");
}

function clickGreen(event) {
    event.target.style.backgroundColor = "#090";
    console.log("Turned green");
}

function clickBlue(event) {
    event.target.style.backgroundColor = "#009";
    console.log("Turned blue");
}