var x = 0;

function setup() {
  createCanvas(800, 200);
  colorMode(HSB);
  background(255);
}

function draw() {
  var H = random(0, 360);
  var S = random(60, 100);
  var B = random(60, 100);
  var a = 0.5;
  var miColor = [H, S, B, a];
  stroke(miColor);
  strokeWeight(10);
  line(x, 0, x + random(-50, 50), height);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
}

function mousePressed () {
  saveCanvas('myCanvas', 'jpg');
}