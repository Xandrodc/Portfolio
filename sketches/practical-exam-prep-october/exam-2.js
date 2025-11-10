createCanvas(600,600); 
// Maakt een canvas van 600 bij 600 pixels waar je op kunt tekenen.

background("red"); 
// Zet de achtergrondkleur van het canvas op rood. Dit is de “basislaag” van je tekening.

for (let i =300; i > 0; i-=2){
    // Een for-loop die begint bij i=300 en aftelt met stappen van 2 tot i>0. 
    // Wordt gebruikt om meerdere concentrische cirkels te tekenen met aflopende grootte.

    let bright = map(i, 100, 0, 0, 40); 
    // map() zet de waarde van i om van het bereik 100-0 naar het bereik 0-40.
    // Dit wordt gebruikt om de doorzichtigheid (alpha) van de cirkels aan te passen.
    // Hoe kleiner i, hoe hoger de alpha, dus dichter bij het midden wordt de cirkel meer zichtbaar.

    fill(255, 200, 0, bright); 
    // Zet de vulkleur van de cirkel op geelachtig (RGB: 255,200,0) met alpha=bright.
    // Alpha bepaalt de transparantie (0 = volledig doorzichtig, 255 = volledig ondoorzichtig).

    noStroke(); 
    // Zorgt ervoor dat de cirkels geen randlijn hebben, alleen gevuld zijn.

    ellipse(width / 2, height / 2, i * 2); 
    // Teken een cirkel in het midden van het canvas (width/2, height/2).
    // De diameter van de cirkel is i*2, waardoor cirkels kleiner worden naarmate i kleiner wordt.
}

noStroke(); 
// Zet de randlijnen uit voor het volgende object dat getekend wordt.

fill(0,0,100); 
// Zet de vulkleur op donkerblauw (RGB: 0,0,100).

rect(0,300,600,300); 
// Teken een rechthoek die het onderste deel van het canvas bedekt (van y=300 tot y=600).
// Dit vormt de “grond” of onderste helft van de tekening.

stroke("yellow"); 
// Zet de kleur van lijnen op geel. Dit geldt voor alle lijnen die daarna getekend worden.

for (let i = 0; i < 150; i++) {
    // Een for-loop die 150 keer herhaalt. 
    // Wordt gebruikt om meerdere horizontale lijnen te tekenen die variëren in positie en kleur.

    let y = 300 + i * 5; 
    // Berekent de y-positie van de lijn. 
    // Begin bij 300 (bovenkant van de “grond”) en verhoog voor elke lijn met 5 pixels.

    let offset = random(-i * 2, i * 2); 
    // Genereert een willekeurige horizontale verschuiving, groter voor lagere lijnen.
    // Zorgt voor een “schuine/stromende” look van de lijnen.

    let x = width / 2 + offset; 
    // Berekent het startpunt van de lijn op basis van het midden van het canvas en de offset.

    let brightness = map(i, 0, 150, 255, 50); 
    // Zet de helderheid van de lijn om van 255 (lichtgeel) bovenaan tot 50 (donkergeel) onderaan.

    stroke(brightness, brightness, 0); 
    // Past de strokekleur toe met de berekende helderheid. RGB: geel met variabele lichtheid.

    line(x - i * 5, y, x + i * 5, y); 
    // Teken een horizontale lijn van links naar rechts, steeds breder naarmate i toeneemt.
    // De breedte neemt toe door i*5 toe te voegen/subtracten van x.
}