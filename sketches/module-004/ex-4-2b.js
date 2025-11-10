createCanvas(400,200);
background (0, 10, 10);
colorMode(HSB);
noStroke();



for (let i = 0; i < 3; i++){
let randomShape = floor(random(0,3));
let randomColor = floor(random(0,3));
let x = 100 + i * 100;
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
    circle(x,y,100);
    break;
    //square
    case 1 :
    square(x - 50,y - 50,100);
    break;
    //triangle
    case 2 :
    triangle(x - 50,y + 50,x - 50, y - 50, x + 50, y + 50);
    break;
}
}

