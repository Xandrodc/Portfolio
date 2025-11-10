//draw interaction using arrow keys

let x = 80;
let y = 80;
let speed = 1;
let size = 50;
let h = 0;

function setup() {
createCanvas(400,400);
colorMode(HSB);
noStroke();
}

function draw() {
background(0);
    if ( keyIsDown (LEFT_ARROW)) {
        x--;
    } else if (keyIsDown (RIGHT_ARROW)) {
        x++;
    }

    if ( keyIsDown (UP_ARROW)) {
        y--;
    } else if (keyIsDown (DOWN_ARROW)) {
        y++;
    }

    circle(x, y, size);
}