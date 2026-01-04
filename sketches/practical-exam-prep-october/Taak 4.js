let showTriangles = false;
let h = map(mouseX, 0, width, 0, 1);
let r = lerp(255, 0, h);
let g = 0;
let b = lerp(0, 255, h);
let mode = "";

//zelf geschreven code
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255);
    noStroke();
}

//function mouseMoved() {
//  background(r, g, b);
//}

// deze code is deels gemaakt met hulp van ChatGPT
function draw() {
  // rood → blauw achtergrond
  let t = constrain(mouseX / width, 0, 1);
  background(lerp(255, 0, t), 0, lerp(0, 255, t));

  if (mode === "triangles") {
    for (let i = 0; i < 40; i++) {
      let x = random(width);
      let y = random(height);
      let s = random(20, 60);

      triangle(
        x, y - s,
        x - s, y + s,
        x + s, y + s
      );
    }
  }

  if (mode === "circles") {
    for (let i = 0; i < 40; i++) {
      let x = random(width);
      let y = random(height);
      let s = 40 + random(-15, 15);

      circle(x, y, s);
    }
  }
}

function keyPressed() {
  if (key === 'A' || key === 'a') {
    mode = "triangles";
  } else if (key === 'E' || key === 'e') {
    mode = "circles";
  } else if (key === ' ') {
    mode = ""; // alles verdwijnt, alleen achtergrond blijft
  }
}