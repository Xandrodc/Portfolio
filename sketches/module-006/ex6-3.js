let x = 0;
let y = 0;
let xSpeed = 10;
let ySpeed = 10;
let size = 50;
//let h = 0;

function setup() {
createCanvas(600, 400);
colorMode(HSB);
noStroke();
x = width / 2;
y = height / 2;
}

function draw() {
        background(0, 0, 0, 0.1);
        fill(frameCount % 360, 100, 100);
        circle(x, y, size);
    if(x >= width - size / 2 || x <= size / 2)  {
        xSpeed = xSpeed * -1;
            //h += 20;
    }
    if(y >= height - size / 2 || y <= size / 2)  {
        ySpeed = ySpeed * -1;
            //h += 20;
    }

    x += xSpeed;
    y += ySpeed;
}