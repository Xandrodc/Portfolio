// De setup-functie wordt één keer uitgevoerd bij het starten van het programma
function setup() {
  // Maak een canvas van 600 pixels breed en 400 pixels hoog
  createCanvas(600, 400);

  // Stel het kleurensysteem in op HSB (Hue, Saturation, Brightness)
  // HSB is vaak makkelijker om natuurlijke kleuren te kiezen
  colorMode(HSB);

  // Stel de achtergrondkleur van de canvas in
  // Hier: hue = 170 (blauwgroen), saturation = 100%, brightness = 40%
  background(170, 100, 40);

  // Stel de dikte van lijnen en randen in op 2 pixels
  strokeWeight(2);

  // Roep de functie drawGradient aan om een luchtverloop te tekenen
  drawGradient();

  // Roep de functie drawSun aan om de zon te tekenen
  drawSun();

  // Roep de functie drawClouds aan om wolken te tekenen
  drawClouds();
}

// Deze functie tekent een verticale gradient voor de lucht
function drawGradient() {
  // Loop door elke pixelrij van boven naar beneden
  for (let i = 0; i <= height; i += 1) {
    // Stel de kleur van de lijn in
    // Hue = 180 (lichtblauw), saturation = 100%
    // Brightness = (hoogte - huidige pixelrij) / 360 * 100 + 20
    // Hierdoor wordt het bovenaan lichter en onderaan donkerder
    stroke(180, 100, (height - i) / 360 * 100 + 20);

    // Teken een horizontale lijn van links naar rechts op de huidige y-positie
    line(0, i, width, i);
  }
}

// Deze functie tekent de zon
function drawSun() {
  // Geen rand rond de cirkel
  noStroke();

  // Vul de cirkel met gele kleur
  fill("yellow");

  // Teken een cirkel in het midden van de canvas met diameter 130 pixels
  circle(300, 200, 130);
}

// Deze functie tekent meerdere wolken
function drawClouds() {
  // Loop 10 keer, zodat er 10 wolken worden getekend
  for (let j = 0; j < 10; j++) {
    // Kies een willekeurige y-positie voor de wolk, ergens op de canvas
    let y = random(height);

    // Kies een willekeurige x-positie voor de wolk
    let x = random(width);

    // Vul de wolk met een willekeurige kleur tussen 40 en 255 (lichtgrijs tot wit)
    fill(random(40, 255));

    // Geen rand om de wolkcirkels
    noStroke();

    // Teken de middelste cirkel van de wolk
    circle(x, y, 80);

    // Teken de linker buitenste cirkel van de wolk
    circle(x - 50, y + 50 - 30, 60);

    // Teken de rechter buitenste cirkel van de wolk
    circle(x + 50, y + 50 - 30, 60);

    // Teken de rechthoek onder de wolk als “bodem”
    rect(x - 50, y, 100, 50);
  }
}