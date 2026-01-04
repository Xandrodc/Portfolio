function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // zodat het altijd uniek is
    noStroke();
    background(255);
// Abstract Emotions — randomized red triangles and blue circles
// Parameters at the top let you control amount, sizes and alpha ranges.

// TRIANGLE parameters
const TRI_COUNT_MIN = 6;
const TRI_COUNT_MAX = 20;
const TRI_SIZE_MIN = 12;
const TRI_SIZE_MAX = 120;
const TRI_ALPHA_MIN = 80;
const TRI_ALPHA_MAX = 220;

// CIRCLE parameters
const CIRC_COUNT_MIN = 6;
const CIRC_COUNT_MAX = 20;
const CIRC_SIZE_MIN = 6;
const CIRC_SIZE_MAX = 80;
const CIRC_ALPHA_MIN = 60;
const CIRC_ALPHA_MAX = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // draw once for a unique composition
    noStroke();
    background(255);
}

function draw() {
    background(255);

    // draw triangles (shades of red)
    drawRedTriangles();

    // draw circles (shades of blue)
    drawBlueCircles();
}

function drawRedTriangles(){
    const count = floor(random(TRI_COUNT_MIN, TRI_COUNT_MAX + 1));
    for(let i=0;i<count;i++){
        const s = random(TRI_SIZE_MIN, TRI_SIZE_MAX);
        const x = random(width);
        const y = random(height);

        // rich red tint: high red, low green/blue
        const r = floor(random(180, 256));
        const g = floor(random(0, 60));
        const b = floor(random(0, 40));
        const a = random(TRI_ALPHA_MIN, TRI_ALPHA_MAX);

        fill(r, g, b, a);
        // draw an approximately centered triangle
        triangle(x, y - s*0.55, x - s*0.5, y + s*0.45, x + s*0.5, y + s*0.45);
    }
}

function drawBlueCircles(){
    const count = floor(random(CIRC_COUNT_MIN, CIRC_COUNT_MAX + 1));
    for(let i=0;i<count;i++){
        const s = random(CIRC_SIZE_MIN, CIRC_SIZE_MAX);
        const x = random(width);
        const y = random(height);

        // blue tint: low red/green, high blue
        const r = floor(random(0, 60));
        const g = floor(random(0, 80));
        const b = floor(random(150, 256));
        const a = random(CIRC_ALPHA_MIN, CIRC_ALPHA_MAX);

        fill(r, g, b, a);
        ellipse(x, y, s, s);
    }
}

// Press SPACE to redraw (generate a new random composition)
function keyPressed(){
    if(key === ' ' || keyCode === 32) redraw();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}

