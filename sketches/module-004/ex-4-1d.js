createCanvas(600,400);
background(25);
colorMode(HSB);
noStroke();

let x = 200;
let y = 200;

for (let i = 0; i < 50000; i++){
    let x = random(0,600);
    let y = random(0,400);
    
    if ( x < 150 && y < 100 ){
    fill(290,100,100);
    rect(x,y,10,10);    
    } 
    else if (x < 300 && y < 200) {
     fill(290, 100,90);
    rect(x,y,10,10); 
    } 
    else if (x < 450 && y < 300) {
    fill(290,100,80);
    rect(x,y,10,10); 
    } else {
    fill(290,100,70);
    rect(x,y,10,10); 
    }
}