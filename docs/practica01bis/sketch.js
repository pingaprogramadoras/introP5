function setup() { 
  createCanvas(400, 400);
	background(220);
	
	// minion 1
	// cuerpo
	fill(255, 240, 100);
	noStroke();
	ellipse(100, 200, 100, 100);
	rect(50, 200, 100, 100);
	
	// ojos
	fill('black');
	ellipse(75, 200, 25, 25);
	stroke('black');
	strokeWeight(4);
	line(110, 190, 130, 210);
	line(130, 190, 110, 210);
	
	// boca
	noFill();
	stroke('black');
	strokeWeight(4);
	line(80, 240, 110, 250);

	// piernas
	strokeWeight(10);
	line(80, 300, 80, 320);
	line(120, 300, 120, 320);
	
	// Minion 2
	// cuerpo
	fill(255, 240, 100);
	noStroke();
	ellipse(300, 150, 100, 100);
	rect(250, 150, 100, 100);
	
	// ojos
	fill('black');
	ellipse(250, 150, 25, 25);
	ellipse(300, 150, 25, 17);
	
	// boca
	noFill();
	stroke('black');
	strokeWeight(4);
	arc(300, 180, 50, 25, 0, HALF_PI);
	
	// piernas
	strokeWeight(10);
	line(280, 250, 280, 270);
	line(320, 250, 320, 270);
}