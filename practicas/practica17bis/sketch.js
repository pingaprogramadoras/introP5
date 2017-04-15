var ondaCoseno = [];

function setup() {
  createCanvas(720, 360);

  // Añadimos valores al array ondaCoseno
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, PI);
    ondaCoseno[i] = abs(cos(amount));
  }

  background(255);
  
  var y1 = 0;
  var y2 = height/2;
  for (var j = 0; j < width; j +=1) {
    stroke(ondaCoseno[j] * 255, 0, 0);
    line(j, y1, j, y2);
  }
  
  y1 = y2;
  y2 = height;
  for (var k = 0; k < width; k+=1) {
    stroke(255 - ondaCoseno[k]*255, 0, 0);
    line(k, y1, k, y2);
  }
}