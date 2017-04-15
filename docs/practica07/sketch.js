function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(5);
  
  if (mouseX < width / 2) {
    ellipse(width / 2, height / 2, 100, 100)
  } else {
    rect(width / 2 - 50, height / 2 - 50, 100, 100)
  }
}