createCanvas(400,400);
background("#30bfbf");

let y = 200;
let strength = 100;

noStroke();
fill("#208080");
rect(0,y,400,400);
ellipse(0,y,100,strength);
ellipse(200,y,100,strength);
ellipse(400,y,100,strength);

fill("#30bfbf");
ellipse(100,y,100,strength);
ellipse(300,y,100,strength);
