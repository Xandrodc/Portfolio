
function setup() {
createCanvas( 600, 400);
colorMode(HSB);
}


function draw(){
    background(0, 0, 0);
    output(frameCount);

    for(let i = 0; i < 80; i++) {
    stroke(0,100,100, 0 + i * 0.01 );
    strokeWeight(1.3);
    line((frameCount * 2) % 650 + i * 1, 5, (frameCount * 2) % 650 + 50 + i * 1, 200);
    line((frameCount * 2) % 650 + i * 1, 395, (frameCount * 2) % 650 + 50 + i * 1, 200); 
}
}