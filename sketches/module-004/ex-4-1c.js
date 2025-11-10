createCanvas(600,400);
background(25);
colorMode(HSB);
noStroke();

let x = 200;
let y = 200;

for (let i = 0; i < 50000; i++){
    let x = random(0,600);
    let y = random(0,400);
    
    if ( y < 133){
    fill(0,100,100);
    rect(x,y,10,10);    
    } 
    else if (y < 266) {
     fill(255);
    rect(x,y,10,10); 
    } else {
    fill(190,100,100);
    rect(x,y,10,10); 
    }
}