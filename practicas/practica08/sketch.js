var ladoRect = 100;
var mitadLadoRect = 100 / 2;
var rectX;
var rectY;

function setup() {
  createCanvas(400, 400);
  rectX = width / 2 - mitadLadoRect;
  rectY = height / 2 - mitadLadoRect;
}

function draw() {
  background(0);
  
  
  if (mouseX > rectX && mouseX < (rectX + ladoRect) && mouseY > rectY && mouseY < (rectY + ladoRect)) {
    fill(255, 0, 255);
    noStroke();
  } else {
    noFill();
    stroke(255);
  }
  
  rect(rectX, rectY, ladoRect, ladoRect);
}