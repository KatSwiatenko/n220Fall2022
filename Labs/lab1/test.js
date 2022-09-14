function setup() {
    console.log(setup)
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  // Circle follows cursor
  
  
  function draw () {
    size = 20;
    console.log(size);
    circle(mouseX, mouseY, size);
    
    if(mouseIsPressed) {
      size = size + 20;
      circle(mouseX, mouseY, size);
    }
   
    // Circle gets no bigger than 50 px when clicked
    
    
  }