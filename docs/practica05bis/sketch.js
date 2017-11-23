var	grosor = 50;
var canvas;

function setup(){
  canvas = createCanvas(600,400);
  canvas.mouseOut(limpiameLaPantallaPorfa);
  background(250, 250, 150);
}

function draw(){ 
  var rojo = mouseX % 255;
  var azul = mouseY % 255;
  miColor = color(rojo, 150, azul, 90);
}

function mouseDragged(){
  var amarillo = color(180,200,20);
  noStroke();
  var posicionDelRatonX = mouseX;
  var posicionDelRatonY = mouseY;
  
  stroke(miColor);
  strokeWeight(mouseY % grosor);
  line(mouseX, mouseY, pmouseX, pmouseY);
  noStroke();
  fill(miColor);
	ellipse(posicionDelRatonX,posicionDelRatonY,mouseY % grosor,mouseY % grosor);
}


function limpiameLaPantallaPorfa(){
  background(250, 250, 150);
}

function keyPressed(){
	saveCanvas('rain', 'jpg');
}
