var col = 255;

function setup() {
	createCanvas(2048, 1280);
	col = map(mouseX, 0, 2048, 0, 255);
	background(col);
}

function draw() {	
	//ellipse
	fill(255, 255 ,0);
	ellipse(mouseX, mouseY, 100, 100);
}
