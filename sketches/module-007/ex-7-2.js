let n = 50;

let x = 200;
let y = 200;

let xPositions = [];
let yPositions = [];

function setup() {
    createCanvas(400, 400);
    background(0, 0, 0);
    fill(0, 255, 0);
    for (let i = 0; i < n; i++) {
        xPositions[i] = random(width);
        yPositions[i] = random(height);
    }
    output(xPositions);
}

function draw() {
    background(0,0,0);
    fill(0,255,0);  
    for (let i = 0; i < n; i++) {
    circle(xPositions[i], yPositions[i], 5);
    }  
    
    let origin = floor(random(n));
    stroke(0,255,0);
    strokeWeight(5);
    for (let i = 0; i < 10; i++) {
        let r = floor(random(n));
        xPositions[r] = xPositions[origin];
        yPositions[r] = yPositions[origin];
        line(xPositions[origin], yPositions[origin], xPositions[r], yPositions[r]);
    }
    noLoop();
}
