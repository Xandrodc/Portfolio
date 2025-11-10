createCanvas(600,400);
background("lightblue");
noStroke();

let barWidth = random(2,50);
let margin = 1;
let amount = width / (barWidth+margin);

output(amount);

for(let i = 0; i < amount; i++) {
    let randomHeight = random(0, height);
rect((barWidth+margin)*i,randomHeight,barWidth,height - randomHeight);
}

