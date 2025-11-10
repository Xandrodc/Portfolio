createCanvas(600,600);
background(255);
colorMode(HSB);
noStroke();
fill(0,100,100);

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 5; j++) {
        fill(j * 20, 100, 100);
        rect(50 + j * 100, 50 + i * 50, 100, 50);
        output(j);

    }
}

