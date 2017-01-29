function setup() { 
  createCanvas(400, 400);
} 
var a=100
var b= 100
var c=3
 
function draw() { 
	background(255)
	if(a < 400) {
	
	ellipse(a,b,40,40)
	
	a=a+c
 } else {
	 ellipse(a,b,40,40)
	 a=a-300
 }
 }
