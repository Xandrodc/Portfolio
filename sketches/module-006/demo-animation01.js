// circle animtion right to left and back
let x = 50;
    let speed = 1;
function setup(){
    createCanvas(400,400);
    noStroke();
    fill("red");
}

function draw(){

output(1000 / deltaTime);
if (x >= 360) {
    speed = speed * -1;
} else if (x <= 40) {
speed = speed * -1;
}
x += speed;
    background(0);
    output(frameCount);
    circle(x,50,80);
}