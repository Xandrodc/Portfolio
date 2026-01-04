//Drawing animation using mouse   
    let x = 50;
    let speed = 1;
    let size = 50;
    let h = 0;
function setup(){
    createCanvas(400,400);
    colorMode(HSB);
    noStroke();
    fill("red");
}

function mouseMoved() {
h++;
fill(h,100,100);
circle(mouseX, mouseY, size);
}

function mouseWheel(event) {
    if(event.delta < 0) {
        size += 5;
    } else {
        size -= 5;
    }
}