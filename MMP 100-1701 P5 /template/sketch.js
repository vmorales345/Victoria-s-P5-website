var diameter = 200;


//The setup function only happens once
function setup() {
	createCanvas(1000, 2500); //create a 500px X 500px canvas
}


//The draw function happens over and over again
function draw() {

	fill(255,0,0);
	ellipse(mouseX,mouseY,40,40);
	textSize(100);
	textFont("Georgia");
	textStyle(ITALIC);
	textAlign(CENTER);
	text("WONDERLAND",500,200);





  fill(random(0,255), random (0, 255), random(0, 255)); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  stroke("#ffff00");
	strokeWeight(10)
	ellipse(mouseX, mouseY, diameter, diameter); // center of canvas, 20px dia
  ellipse(mouseX, mouseY, diameter, diameter);
	ellipse(mouseX, mouseY, diameter, diameter);
	ellipse(mouseX, mouseY, diameter, diameter);


  if (mouseIsPressed) {
  diameter = 50;
	fill(255, 0, 0);
 } else {
	diameter = 200;
 }
	//consol.log(random(0, 255));


}


function mousePressed () {
	if (diameter > 200) {
		diameter =50;
	} else {
		diameter = diameter - 50;
	}



}
