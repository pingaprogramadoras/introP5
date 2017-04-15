function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  var diams = [];
  background(0);
  // Asignamos valores al array
  var numCirc = map(mouseX, 0, width, 0, 25);
  for (var i = 0; i < numCirc; i++) {
    diams[i] = i * i;
  }
  
  // Usamos el array para dibujar los diámetros
  for (var x = 0; x < diams.length; x++) {
    noStroke();
    var s = map(mouseY, 0, height, 0, 360);
    fill(s, 100, 100, 0.1);
    ellipse(200, 200, diams[x], diams[x]);
  }
}

function mousePressed () {
  saveCanvas('myCanvas', 'jpg');
}