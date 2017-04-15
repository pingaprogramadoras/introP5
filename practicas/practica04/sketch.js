// mouseX, mouseY

function setup() {
  createCanvas(400, 400);
  background(250, 250, 150);
  var azulTrans;
  var magentaTrans;
}

function draw() {
  azulTrans = color(100, 250, 250, 30);
  magentaTrans = color(250, 0, 250, 30);
  noFill();
  stroke(azulTrans);
  strokeWeight(5);
  ellipse(mouseX, mouseY, mouseY / 2, mouseY / 2);
  noFill();
  stroke(magentaTrans);
  strokeWeight(5);
  ellipse(mouseX, mouseY, mouseX / 2, mouseX / 2);
}

function mousePressed () {
  saveCanvas('myCanvas', 'jpg');
}