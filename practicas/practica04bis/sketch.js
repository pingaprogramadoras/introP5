function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  background(0, 0, 0, 0.05);
  strokeWeight(20);
  stroke(mouseX, 100, 100);
  line(mouseX, 0, mouseX, 400);
  stroke(mouseX, 100, 100);
  line(0, mouseY, 400, mouseY);
}

function mousePressed () {
  saveCanvas('myCanvas', 'jpg');
}