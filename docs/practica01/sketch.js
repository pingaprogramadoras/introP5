// Formas simples con colores

function setup() {
  // Creamos el canvas
  createCanvas(400, 400);
  // Creamos un background que no es más que un rectángulo del mismo tamaño
  // que el canvas con un color
  // Un sólo número es un tono de gris
  background(200);
  // Tres número entre 0 y 255 en RGB
  // background(200, 255, 255);
  
  // Todo lo que queremos aplicarle a una figura o a varias
  // hay que ponerlo antes

  // Paredes
  fill(0, 80, 80);
  noStroke();
  rect(100, 200, 150, 150);

  // Tejado
  fill(250, 150, 0);
  stroke(250, 100, 0);
  strokeWeight(15);
  // triangle(X1, Y1, X2, Y2, X3, Y3) 
  triangle(100, 200, 250, 200, 175, 100);
  
  // Puerta
  fill(0, 200, 200);
  noStroke();
  rect(150, 250, 50, 100);
 
  // Luna
  noStroke();
  fill('white');
  ellipse(300, 125, 50, 50);

  
  // Para imprimir en la consola de la IDE
  print('hola, esta es mi casa');
}