createCanvas(600,400);
background("#add8e5");
noStroke();

let amount = random(0,50);
let barWidth = 600/amount;
let margin = width/height;

    for(let i = 0; i < amount; i++) {
        fill("white");
        rect(0+i * barWidth, 50, barWidth - margin, 600);
        output(i);

    }
