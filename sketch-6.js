function setup() { 
  createCanvas(400, 400);
} 
var a=100
var b= 100
var c=3

function draw() { 
	background(255)

	ellipse(a,b,40,40)
	
	if(a>400) {
		c=-3
} else 
	
	if(a<0) {
	c=3
}
	a=a+c
	
}

function mousePressed() {
  a=mouseX
	b=mouseY
}
