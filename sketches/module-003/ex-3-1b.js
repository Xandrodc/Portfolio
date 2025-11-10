createCanvas(600,600);
background(255);
colorMode(HSB);
noStroke();

  for(let i = 0; i < 13; i++) {
        fill(0, 0, 0 + i * 8);
        circle(100, 60 + i * 40, 100, 50);
        output(i);
  }