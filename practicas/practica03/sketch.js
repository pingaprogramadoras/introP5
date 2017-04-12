// Usando variables para asignar colores
function setup() {
  createCanvas(800, 400);
  noStroke();
  
  var gris = color(188, 188, 188);
  var rosa = color(187, 62, 141);
  var amarillo = color(244, 252, 99);
  var azul = color(71, 227, 255);

  background(gris);
  
  // cuadrado grande izq
  fill(rosa);
  rect(50, 50, 300, 300);
  
  // cuadrado mediano izq
  fill(amarillo);
  rect(100, 100, 200, 200);
  
  // cuadrado pequeño izq
  fill(azul);
  rect(150, 150, 100, 100);
  
  // cuadrado grande der
  fill(amarillo);
  rect(450, 50, 300, 300);
  
  // cuadrado mediano der
  fill(azul);
  rect(500, 100, 200, 200);
  
  // cuadrado pequeño der
  fill(rosa);
  rect(550, 150, 100, 100);
}