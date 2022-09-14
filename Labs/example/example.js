function setup() {
    createCanvas(800,600);
}

function draw () {
    background(0,0,0);
}

function drawFace() {
    line(x, y, y+10);
    circle(x+10, y+10, 5);
    circle(x+30, y+10, 5);
    circle(x+15, y+30, 5);
}

// run the function
drawFace(400,400); // 400,400 is the starting location (x, y)
drawFace(10,10);
drawFace(400,10);
drawFace(mouseX, mouseY); // will draw a face wherever mouse is
