// Usando variables para mover objetos

var circleX = 50;
var speed = 30;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(250, 250, 200);
  ellipse(circleX, 200, 100, 100);
  // circleX = circleX + speed;
  circleX += speed;
  // speed = speed + 1.05;
  speed /= 1.05;
}