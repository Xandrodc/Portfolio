let h = 0;
function setup() {
    createCanvas(400,400);
    colorMode(HSB);
}

function draw() {
    background(0, 0, 0); 
    fill(h % 360, 100, 100);
    circle(width / 2, height / 2, frameCount % 400);
}

function mouseClicked() {
    h += 30;
}
