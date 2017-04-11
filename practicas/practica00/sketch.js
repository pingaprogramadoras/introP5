// Formas simples

// Esto es un comentario de una sola línea

/*
  Esto es un comentario
  de varias líneas
*/

function setup() {
  // Creamos el canvas
  createCanvas(800, 400);
  // Creamos un background que no es más que un rectángulo del mismo tamaño
  // que el canvas con un color
  // Un sólo número es un tono de gris
  background(200);
  // Tres número entre 0 y 255 en RGB
  // background(200, 255, 255);
  
  // Todo lo que queremos aplicarle a una figura o a varias
  // hay que ponerlo antes
  
  // Le damos un color al perímetro
  stroke(255, 255, 0);
  // Le damos un grosor al perímetro
  strokeWeight(5);
  // Le damos un color al relleno
  fill(255, 0, 0);
  // Dibujamos un rectángulo
  rect(100, 100, 100, 50);

  noFill();
  stroke('darkMagenta');
  // Dibujamos un círculo
  ellipse(300, 125, 50, 50)

  noStroke();
  fill(50, 200, 100);
  // Dibujamos un triángulo: triangle(X1, Y1, X2, Y2, X3, Y3) 
  triangle(100, 200, 200, 200, 150, 250);
  
  // Para imprimir en la consola de la IDE
  print('hola');
  
}