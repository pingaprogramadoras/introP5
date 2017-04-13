var ladoRect = 100;
var mitadLado = ladoRect / 2;
var rectX;
var rectY;
var bgColor = 0;
var bgIsBlack = true;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  rectX = width / 2;
  rectY = height / 2;
}

function draw() {
  background(bgColor);
  
  if (mouseX > rectX - mitadLado && mouseX < rectX + mitadLado && mouseY > rectY - mitadLado && mouseY < rectY + mitadLado) {
    fill(255, 0, 255);
    noStroke();
    bgIsBlack = false;
  } else {
    noFill();
    stroke(255);
    bgIsBlack = true;
  }
  
  if (bgIsBlack === true) {
    bgColor = 0;
  } else {
    bgColor = 255;
  }
  
  rect(rectX, rectY, ladoRect, ladoRect);
}