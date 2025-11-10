createCanvas(600,400);
background(25);
colorMode(HSB);
noStroke();

let x = 200;
let y = 200;

for (let i = 0; i < 50000; i++){
    let x = random(0,600);
    let y = random(0,400);
    let d = dist (x, y, width / 2, height / 2);

    if ( d < 100) {
     fill(0,70,90);
    } else {
    fill(255);
    }
    rect(x,y,10,10); 
}

