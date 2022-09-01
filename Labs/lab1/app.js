function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
  //   Pink circle will have blue outline
    stroke(0,100,500);
    strokeWeight(10);
    fill(500,10,100);
    ellipse(200, 200, 100);
    
  //   Red square will have purple outline
    stroke(100,75,500);
    strokeWeight(5);
    fill(400,5,50);
    square(250, 250, 50);
    
  //   Yellow line going through circle and square
    stroke(255,255,0);
    line(300,300,150,150);
    
    
  }