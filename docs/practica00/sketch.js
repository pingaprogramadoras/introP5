// Formas simples

// Esto es un comentario de una sola línea

/*
  Esto es un comentario
  de varias líneas
*/

function setup() {
  // Creamos el canvas
  createCanvas(400, 400); // Aquí también puedo poner un comentario

  // Paredes
  rect(100, 200, 150, 150);

  // Tejado
  // triangle(X1, Y1, X2, Y2, X3, Y3) 
  triangle(100, 200, 250, 200, 175, 100);
  
  // Puerta
  rect(150, 250, 50, 100);
 
  // Luna
  ellipse(300, 125, 50, 50);

  
  // Para imprimir en la consola de la IDE
  print('hola, esta es mi casa');
}