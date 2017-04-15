// Loops anidados

var setup = function() {
  createCanvas(600, 400);

  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {
      console.log('x: ' + x + ', y: ' + y);
    }
  }
};

var draw = function() {
  background(0);

  for (var i = 0; i <= width; i += 20) {
    for (var j = height / 3; j <= height * 2 / 3; j += 20) {
      ellipse(i, j, 10, 10);
    }
  }
};