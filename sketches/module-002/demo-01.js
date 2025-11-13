createCanvas(300,300);
background("white");

let x = random(0, width);
let y = random(0, height);

noStroke();
fill(random (0,360),random(0,360),random(0,360));
circle(x,y,100);
circle(x-50,y-50,50);
circle(x+50,y-50,50);