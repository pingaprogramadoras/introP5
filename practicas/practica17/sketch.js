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
  for (var i = 0; i < width; i +=1) {
    stroke(ondaCoseno[i] * 255, 0, 0);
    line(i, y1, i, y2);
  }
  
  y1 = y2;
  y2 = height;
  for (var i = 0; i < width; i+=1) {
    stroke(255 - ondaCoseno[i]*255, 0, 0);
    line(i, y1, i, y2);
  }
}