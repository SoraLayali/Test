var yPos = 0;

function setup(){
	createCanvas(2000,2000);
}

function draw(){

	if(yPos > screen.height){
		yPos = 0;
	}
	background(50, 155, 255);
		fill(204, 101, 32);
		stroke(127, 63, 120);
		rect(400, yPos, 200, 200);
		rotate(45);
		rect(400, yPos, 200, 200);
	++yPos;
}