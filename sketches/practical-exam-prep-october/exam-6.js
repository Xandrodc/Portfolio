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
// Maakt een lege string aan om alle karakters op te slaan.

for (let i = 0; i < 128; i++) {
    allChars += String.fromCharCode(i); 
    // Voegt alle ASCII-karakters met codes 0 t/m 127 toe aan de string allChars.
    // Zo hebben we een “bibliotheek” van tekens om uit te kiezen.
}

fill(0, 255, 0); 
// Stelt de vulkleur in op felgroen (RGB: 0,255,0), zoals in de Matrix-effecten.


    let numChars = floor(random(20, 60)); 
    // Bepaal willekeurig hoeveel karakters er in deze kolom komen te staan (tussen 20 en 60).

    for (let i = 0; i < numChars; i++) {
        let r = round(random(0, 128)); 
        // Kies een willekeurig indexnummer voor een karakter uit allChars.

        let char = allChars.substring(r, r + 1); 
        // Haal het karakter op van positie r in de string allChars.

        let alpha = random(50, 255); 
        // Kies een willekeurige doorzichtigheid (alpha) voor dit karakter.
        // Zo lijkt het alsof sommige karakters feller zijn en sommige vaag.

        fill(0, 255, 0, alpha); 
        // Stel de vulkleur in op groen met de gekozen alpha.

        text(char, 10, i * 7); 
        // Teken het karakter op positie (x, i*7). 
        // i*7 zorgt voor verticale afstand tussen de karakters.
    }
