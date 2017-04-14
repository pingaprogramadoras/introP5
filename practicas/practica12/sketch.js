// Arrays

var nums = [3, 20, 50, 84];
var words = ['puntos', 'circulos', 'bolas', 'redondeles'];

var index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  // ellipse(200, 200, 50, 50);
  ellipse(200, 100, nums[index], nums[index]);
  ellipse(200, 300, nums[index], nums[index]);
  
  fill(255);
  textSize(35);
  text(words[index], 20, 200);
}

function mousePressed () {
  index = index + 1; 
  if (index >= words.length) {
    index = 0; 
  }
}