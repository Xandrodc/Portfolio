// Simplified sketch with per-word colors, small shake, and
// random red triangles + blue circles appearing each frame.

let part1 = ["Electric","Neon","Crimson","Midnight","Golden","Astral","Feral","Broken","Silent","Endless","Phantom","Frozen","Velvet","Hollow","Solar","Cosmic","Doomed","Fading","Fuzzy","Molten","Violet","Rusty","Emerald","Starlit","Enchanted","Reckless","Burning","Iron","Sacred","Wandering","Synthetic","Shadow","Thunder","Eternal","Radiant","Obsidian","Wicked","Urban","Wild","Haunted","Secret","Lunar","Glowing","Stranded","Infinite","Wired","Ghostly","Brutal","Savage","Blackened","Infernal","Abyssal","Grim","Raging","Toxic","Gutter","Anarchic","Chaotic","Vintage","Retro","Turbo","Chrome","Analog","Pastel","Digital","Quantum","Hyper","Solarized","Arcade","Vapor","Mystic","Runic","Rustic","Worn","Timber","Autumn","Forest","Woven","Folkloric","Echoing","Bass-Driven","Kinetic","Pulsing","Fractal","Synth-Laced","Holographic","Laser-Burned","Boom-Bap","Golden-Era","Flowing","Rhythmic","Cipher","Concrete","Skyline","Streetlight","Echo-Chamber","Afterglow","Chromatic","Fire-Forged","Spellbound"];
let part2 = ["Tigers","Orbits","Echoes","Canyons","Rituals","Engineers","Crows","Pirates","Giants","Mirrors","Vipers","Wolves","Signals","Dreamers","Cascades","Monoliths","Circuits","Runaways","Voyagers","Vultures","Horizons","Golems","Skeletons","Nomads","Comets","Rebels","Banshees","Prophets","Drifters","Tempests","Phantoms","Machines","Storms","Sirens","Cacti","Ghosts","Dragons","Dynamos","Statues","Knives","Pilgrims","Idols","Guardians","Ravens","Serpents","Juggernauts","Demons","Warlords","Gravewalkers","Mourners","Executioners","Cultists","Gargoyles","Panthers","Hydras","Thrones","Dungeons","Crusaders","Outlaws","Saboteurs","Sabers","Vandals","Scorpions","Bruisers","Dropouts","Rejects","Decay","Rioters","Misfits","Retrogrades","Arcaders","Lasers","Synths","Daydreamers","Nightdrivers","Lightchasers","Specters","Runecarvers","Balladeers","Minstrels","Wanderers","Treetops","Riverfolk","Drumlords","Basslines","Waveforms","Shadows","Subwoofers","Beatmakers","Rhymecasters","Street Poets","Cipher Kids","Turntablists","Storytellers","Dreamweavers","Timekeepers","Gridrunners"];
let part3 = ["Collective","Syndicate","Division","Assembly","Uprising","Network","Choir","Alliance","Empire","Project","Conspiracy","Coalition","Movement","Brotherhood","Rebellion","Legion","Society","Unit","Machine","Protocol","Council","Company","Dynasty","Agenda","Experiment","Frontier","Order","Manifesto","Program","Union","Circuit","Crew","Cult","Chapter","Engine","Brigade","Authority","Faction","Mob","Sect","Regiment","Guild","Horde","Pact","Covenant","Ritual","Forge","Circle","Crusade","Revue","Revival","Ramblers","Roamers","Assembly","Tribe","Ensemble","Campfire","Brotherhood","Beat Unit","Cipher Crew","Bass Syndicate","808 Order","Vinyl","Groove","Wavefront","Order","Retro Society","Synth","Pulse Network","Drift Project","Midnight Union","Thrash Battalion","Punk Chapter","Folk Brigade"];

let parts = [part1, part2, part3];
let current = ["","",""];
let phases = [0,0,0];
let colors = [ [255,180,180], [255,255,170], [180,200,255] ];
let yFractions = [0.25, 0.5, 0.75];

function setup(){
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(36);
  noStroke();
  pickRandomWords();
  for(let i=0;i<3;i++) phases[i] = random(TWO_PI);
}

function pickRandomWords(){
  for(let i=0;i<parts.length;i++) current[i] = random(parts[i]);
  for(let i=0;i<3;i++) phases[i] = random(TWO_PI);
}

function draw(){
  background(12);

  // draw parameterized random red triangles each frame (behind the text)
  drawRedTriangles();

  // small smooth shake for each word
  let amp = 2.5; // smaller movements
  let freq = 0.6; // medium-fast
  textSize(34);
  for(let i=0;i<current.length;i++){
    let dx = sin(frameCount * freq + phases[i]) * amp;
    let dy = cos(frameCount * freq * 1.15 + phases[i] * 1.1) * (amp * 0.5);
    fill(colors[i][0], colors[i][1], colors[i][2]);
    text(current[i], width/2 + dx, height * yFractions[i] + dy);
  }

  // instruction
  textSize(12);
  fill(180);
  text("Press SPACE to generate a new 3-word phrase", width/2, height - 14);
}

// PARAMETERS: tweak these to change count, sizes and alpha of the red triangles
const TRI_COUNT_MIN = 4;
const TRI_COUNT_MAX = 12;
const TRI_SIZE_MIN = 8;
const TRI_SIZE_MAX = 80;
const TRI_ALPHA_MIN = 60;
const TRI_ALPHA_MAX = 200;

function drawRedTriangles(){
  // randomize how many triangles to draw this frame
  let count = floor(random(TRI_COUNT_MIN, TRI_COUNT_MAX + 1));
  for(let i=0;i<count;i++){
    let s = random(TRI_SIZE_MIN, TRI_SIZE_MAX);
    let x = random(width);
    let y = random(height);

    // choose a red shade: high red, low green/blue
    let r = floor(random(180, 256));
    let g = floor(random(0, 60));
    let b = floor(random(0, 40));
    let a = random(TRI_ALPHA_MIN, TRI_ALPHA_MAX);

    fill(r, g, b, a);
    // equilateral-ish triangle centered at (x,y)
    triangle(x, y - s*0.55, x - s*0.5, y + s*0.45, x + s*0.5, y + s*0.45);
  }
}

function keyPressed(){
  if(key === ' ' || keyCode === 32) pickRandomWords();
}
