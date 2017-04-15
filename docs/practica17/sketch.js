var circulosY = [];

var setup = function() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSB);

  for (var i = 0; i < 100; i++) {
    circulosY[i] = random(0, width);
  }
}

var draw = function() {
  background(50);

  for (var i = 0; i < 100; i++) {
     var h = map(circulosY[i], 0, width, 0, 360);
    //var h = map(i, 0, 100, 0, 360);
    fill(h, 100, 100);
    strokeWeight(1.5);
    var x = map(i, 0, 100, 0, width);
    ellipse(x, circulosY[i], 15, 15);
    var x1 = map(i+1, 0, 100, 0, width);
    
    stroke(h, 100, 100);
    line(x, circulosY[i], x1, circulosY[i + 1]);

    circulosY[i]++;
    if (circulosY[i] > width) {
      circulosY[i] = 0;
    }
  }
}