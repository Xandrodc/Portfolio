createCanvas(600, 400); 
// Maakt een canvas van 600 pixels breed en 400 pixels hoog.

background(0); 
// Zet de achtergrondkleur op zwart (RGB: 0,0,0).

textAlign(CENTER, CENTER); 
// Stelt uitlijning van tekst in: horizontaal en verticaal gecentreerd rond de opgegeven coördinaten.

textFont('Consolas'); 
// Stelt het lettertype van de tekst in op 'Consolas', een monospaced font.

textSize(12); 
// Stelt de standaard tekstgrootte in op 12 pixels.

let allChars = ""; 

fill(0, 255, 0); 
// Stelt de vulkleur in op felgroen (RGB: 0,255,0), zoals in de Matrix-effecten.

for (let x = 10; x < width; x += 40) {
    // Loop over de breedte van het canvas in stappen van 10 pixels.
    // Dit bepaalt de x-positie van elke “kolom” van karakters.

    let numChars = floor(random(1, 5)); 
    // Bepaal willekeurig hoeveel karakters er in deze kolom komen te staan (tussen 20 en 60).

    for (let i = 0; i < numChars; i++) {

        let alpha = random(50, 255); 
        // Kies een willekeurige doorzichtigheid (alpha) voor dit karakter.
        // Zo lijkt het alsof sommige karakters feller zijn en sommige vaag.

        fill(0, 255, 0, alpha); 
        // Stel de vulkleur in op groen met de gekozen alpha.

          circle(20, 200+i * 40,40); 
        // Teken het karakter op positie (x, i*7). 
        // i*7 zorgt voor verticale afstand tussen de karakters.
    }
}