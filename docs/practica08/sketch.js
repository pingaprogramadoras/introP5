var ladoRect = 100;
var mitadLado = ladoRect / 2;
var rectX;
var rectY;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  rectX = width / 2;
  rectY = height / 2;
}

function draw() {
  background(0);
  
  
  if (mouseX > rectX - mitadLado && mouseX < rectX + mitadLado && mouseY > rectY - mitadLado && mouseY < rectY + mitadLado) {
    fill(255, 0, 255);
    noStroke();
  } else {
    noFill();
    stroke(255);
  }
  
  rect(rectX, rectY, ladoRect, ladoRect);
}