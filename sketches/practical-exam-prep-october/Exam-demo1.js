createCanvas(400,400);
background(0);
colorMode(HSB);
noStroke();

let size = 50;
let amount = width / size + 1;

for (let j = 0; j < amount + 3; j++) {
    for (let i = 0; i < amount; i++) {
        let offset = j % 2 * size / 2;
        let x = size / 2 + i * size + offset;
        let y = j * size / 1.3333;
        let d = dist(width / 2, height / 2, x, y);
        if (d > 60){
            cube(x, y, size, y / 2);
        }

    }
}

function cube(x, y, size, h){

let r = floor(random(0,2));
if (r == 0) {
    noStroke();
    fill(h,100, 100);
    quad(x,y, x - size / 2, y - size / 4, x , y - size / 2, x + size / 2, y - size / 4);
    fill(h,100,80);
    quad(x - size / 2, y - size / 4, x, y, x, y + size/2, x - size / 2, y + size / 4);
    fill(h,100,60);
    quad(x + size / 2, y - size/4, x + size / 2, y + size / 4, x, y + size / 2, x, y); 
} else {
    stroke(h,100, 100);
    fill(h,100, 0);
    quad(x,y, x - size / 2, y - size / 4, x , y - size / 2, x + size / 2, y - size / 4);
    fill(h,100,0);
    quad(x - size / 2, y - size / 4, x, y, x, y + size/2, x - size / 2, y + size / 4);
    fill(h,100,0);
    quad(x + size / 2, y - size/4, x + size / 2, y + size / 4, x, y + size / 2, x, y); 
}
}