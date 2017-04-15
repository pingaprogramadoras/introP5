function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  /*  ellipse(0, 200, 25, 25);
    ellipse(50, 200, 25, 25);
    ellipse(100, 200, 25, 25);
    ellipse(150, 200, 25, 25);
    ellipse(200, 200, 25, 25);
    ellipse(250, 200, 25, 25);
    ellipse(300, 200, 25, 25);*/

/*  var x = 0;
  ellipse(x, 100, 25, 25);
  x = x + 50;
  ellipse(x, 100, 25, 25);
  x = x + 50;
  ellipse(x, 100, 25, 25);
  x = x + 50;
  ellipse(x, 100, 25, 25);
  x = x + 50;
  ellipse(x, 100, 25, 25);
  x = x + 50;
  ellipse(x, 100, 25, 25);
  x = x + 50;
  ellipse(x, 100, 25, 25);
  x = x + 50;*/

  var x = 0;
  while (x <= width) {
    ellipse(x, 300, 25, 25);
    x = x + 50;
  }
}