createCanvas(400,400);
background("white");

let x = random(0,400);
let y = random(0,400);

noStroke();
fill("#ffdf40");
rect(0,0,x,y);
fill("#9f40ff");
rect(0,y,x,400);
fill("#3fff9f");
rect(x,0,400,y);
fill("#ff3f9f");
rect(x,y,400,400);