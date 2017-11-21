// mousePressed(), mouseDragged()

var grosor = 40;

function setup() {
  createCanvas(400, 400);
  background(250, 250, 150);
  var azul;
}

function draw() {
  azul = color(100, 250, 250);
  stroke(azul);
  strokeWeight(grosor);
  line(mouseX, mouseY, pmouseX, pmouseY);
  noStroke();
  fill(azul);
  ellipse(mouseX, mouseY, grosor, grosor);
}

function mousePressed () {
  background(250, 250, 150);
}

function mouseDragged () {
  stroke(azul);
  strokeWeight(grosor);
  line(mouseX, mouseY, pmouseX, pmouseY);
  noStroke();
  fill(azul);
  ellipse(mouseX, mouseY, grosor, grosor);
}
