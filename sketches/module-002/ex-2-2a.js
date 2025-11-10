createCanvas(400,400);
background("white");

colorMode(HSB);

let c = random(0,255);
noStroke();

fill(c,100,100);
square(0,0,400);

fill(c,80,80);
square(50,50,300);

fill(c,50,50);
square(100,100,200);

fill(c,30,30);
square(150,150,100);