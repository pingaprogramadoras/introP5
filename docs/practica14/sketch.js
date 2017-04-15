/*
var r = 0;
var g = 255;
var b = 255;
var x = 200;
var y = 200;
var d = 100;
*/

// Sintaxis: Javascript Object Notation JSON
var miColor = {
  r: 0,
  g: 255,
  b: 255
}
var circle = {
  x: 200,
  y: 200,
  d: 100
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // dot syntax para acceder a las propiedades
  fill(miColor.r, miColor.g, miColor.b);
  ellipse(circle.x, circle.y, circle.d, circle.d);
}