function setup() { 
  createCanvas(400, 400);
} 

function draw() { 

	var a= mouseX
	var b= mouseY

	
	ellipse(a,b,70,70)
	
	ellipse(a+12,b-12,15,15)
	
	ellipse(a-12,b-12,15,15)
	
	arc(a,b+5,30,30,TWO_PI,PI)
}
