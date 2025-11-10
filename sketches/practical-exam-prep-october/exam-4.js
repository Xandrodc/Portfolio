function setup() {
  createCanvas(400, 400);
  background(15, 25, 50); // donkerblauwe zee

  // Luchtbellen
  noStroke();
  for (let j = 0; j < 5; j++) { // 5 kolommen
    let x = 80 * j + random(30, 50); // positie van de kolom
    let y = height;
    let grootte = random(5, 10);

    for (let i = 0; i < 30; i++) {
      y -= random(10, 20);
      x += random(-5, 5);
      fill(0, 200, 230, 180);
      circle(x, y, 40);
    }
  }

  // Vissen
  for (let k = 0; k < 6; k++) {
    let fishX = random(width);
    let fishY = random(height);
    let fishSize = random(8, 20);
    let richting = random([1, -1]); // 1 = rechts, -1 = links

    push();
    translate(fishX, fishY);
    scale(richting, 1); // spiegel vis horizontaal
    fill(random(180, 255), random(120, 180), 0); // geel/oranje tint
    ellipse(0, 0, fishSize * 2, fishSize); // lichaam
    triangle(fishSize, 0, fishSize + fishSize / 2, fishSize / 2, fishSize + fishSize / 2, -fishSize / 2); // staart
    pop();
  }
}