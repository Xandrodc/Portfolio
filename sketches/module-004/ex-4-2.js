createCanvas ( 400, 400);
background (0, 10, 10);
colorMode(HSB);
noStroke();

let randomShape = floor(random(0,3));
let randomColor = floor(random(0,3));
let x = width / 2;
let y = height / 2;

//random color
switch (randomColor){
    //pink
    case 0 :
    fill(330,90,100);
    break;
    //blue
    case 1 :
    fill(220,90,100);
    break;
    //purple
    case 2 :
    fill(290,80,70);
    break;
}

//random shape
switch (randomShape){
    //circle
    case 0 :
    circle(x,y,200);
    break;
    //square
    case 1 :
    square(x - 100,y - 100,200);
    break;
    //triangle
    case 2 :
    triangle(x - 100,y + 100,x - 100, y - 100, x + 100, y + 100);
    break;
}

