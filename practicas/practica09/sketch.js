var circleX = 50;
var speed = 10;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  stroke(255);
  ellipse(circleX, 200, 100, 100);
  
  if (circleX > width) {
    speed = -10;
  } else if (circleX < 0) {
    speed = 10;
  }
  
  circleX = circleX + speed;
}