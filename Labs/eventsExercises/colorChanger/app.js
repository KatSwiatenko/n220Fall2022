// When div is clicked, it should change color to red, green, or blue

let cBox = document.getElementById("cBox1");


// changes first box to red
function clickRed(event) {
    event.target.style.backgroundColor = "#900";
    console.log("Turned red");
}

// changes middle box to green
function clickGreen(event) {
    event.target.style.backgroundColor = "#090";
    console.log("Turned green");
}

// changes last box to blue
function clickBlue(event) {
    event.target.style.backgroundColor = "#009";
    console.log("Turned blue");
}