////////////////////////////////////
//// Examen CC1 November '25    ////
//// Xandro De Croock           ////
////////////////////////////////////

createCanvas(400, 400);
colorMode(HSB);
background(0);

//aanmaken variabele size
let size = 40;


//maken testcirkel
//circle(20,200, size);

//rij van cirkels
let amount = 10;

let ran = round(random(1,10));
noStroke();
for (let i = 0; i < amount; i+= 1){
    //bepaalt de kleur van links naar rechts.
     fill(0+i * 36,100,100);
    let x = 20 + i * 40;
    let y = 200;
   circle(x,y, size);

    let ran2 =random(1,5);
     // Bepaal willekeurig hoeveel cirkels er in deze kolom komen te staan (tussen 1 en 5)
    for(let j = 0; j < ran2; j++) {
     //bepaalt de kleur van links naar rechts per kolom.
     fill(0+i * 36,100,100, 1 - j * 0.2);
     // de - of + bij de Y-coordinaat bepaalt of het boven of onder gaat.
        circle(20 +i * 40,200+j*40,40); 
    }
}


// 1. achtergrond instellen : check
// 2. Variabele van grootte : check
// 3. Rij van cirkels (for loop , en amount variabel): check
// 4. Kolommen van cirkel : half (willekeurig aantal maar alleen allemaal naar boven of naar beneden)
// 5. kleurverloop : check
// 6. brightness : check