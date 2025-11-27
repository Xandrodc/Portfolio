let part1 = ["Electric", "Neon", "Crimson", "Midnight", "Golden", "Astral",
"Feral", "Broken", "Silent", "Endless", "Phantom", "Frozen", "Velvet", "Hollow",
"Solar", "Cosmic", "Doomed", "Fading", "Fuzzy", "Molten", "Violet", "Rusty",
"Emerald", "Starlit", "Enchanted", "Reckless", "Burning", "Iron", "Sacred",
"Wandering", "Synthetic", "Shadow", "Thunder", "Eternal", "Radiant", "Obsidian",
"Wicked", "Urban", "Wild", "Haunted", "Secret", "Lunar", "Glowing", "Stranded",
"Infinite", "Wired", "Ghostly", "Brutal", "Savage", "Blackened", "Infernal",
"Abyssal", "Grim", "Raging", "Toxic", "Gutter", "Anarchic", "Chaotic", "Vintage",
"Retro", "Turbo", "Chrome", "Analog", "Pastel", "Digital", "Quantum", "Hyper",
"Solarized", "Arcade", "Vapor", "Mystic", "Runic", "Rustic", "Worn", "Timber",
"Autumn", "Forest", "Woven", "Folkloric", "Echoing", "Bass-Driven", "Kinetic",
"Pulsing", "Fractal", "Synth-Laced", "Holographic", "Laser-Burned", "Boom-Bap",
"Golden-Era", "Flowing", "Rhythmic", "Cipher", "Concrete", "Skyline",
"Streetlight", "Echo-Chamber", "Afterglow", "Chromatic", "Fire-Forged",
"Spellbound"];
let part2 = ["Tigers", "Orbits", "Echoes", "Canyons", "Rituals", "Engineers",
"Crows", "Pirates", "Giants", "Mirrors", "Vipers", "Wolves", "Signals", "Dreamers",
"Cascades", "Monoliths", "Circuits", "Runaways", "Voyagers", "Vultures",
"Horizons", "Golems", "Skeletons", "Nomads", "Comets", "Rebels", "Banshees",
"Prophets", "Drifters", "Tempests", "Phantoms", "Machines", "Storms", "Sirens",
"Cacti", "Ghosts", "Dragons", "Dynamos", "Statues", "Knives", "Pilgrims", "Idols",
"Guardians", "Ravens", "Serpents", "Juggernauts", "Demons", "Warlords",
"Gravewalkers", "Mourners", "Executioners", "Cultists", "Gargoyles", "Panthers",
"Hydras", "Thrones", "Dungeons", "Crusaders", "Outlaws", "Saboteurs", "Sabers",
"Vandals", "Scorpions", "Bruisers", "Dropouts", "Rejects", "Decay", "Rioters",
"Misfits", "Retrogrades", "Arcaders", "Lasers", "Synths", "Daydreamers",
"Nightdrivers", "Lightchasers", "Specters", "Runecarvers", "Balladeers",
"Minstrels", "Wanderers", "Treetops", "Riverfolk", "Drumlords", "Basslines",
"Waveforms", "Shadows", "Subwoofers", "Beatmakers", "Rhymecasters", "Street Poets",
"Cipher Kids", "Turntablists", "Storytellers", "Dreamweavers", "Timekeepers",
"Gridrunners"];
let part3 = ["Collective", "Syndicate", "Division", "Assembly", "Uprising",
"Network", "Choir", "Alliance", "Empire", "Project", "Conspiracy", "Coalition",
"Movement", "Brotherhood", "Rebellion", "Legion", "Society", "Unit", "Machine",
"Protocol", "Council", "Company", "Dynasty", "Agenda", "Experiment", "Frontier",
"Order", "Manifesto", "Program", "Union", "Circuit", "Crew", "Cult", "Chapter",
"Engine", "Brigade", "Authority", "Faction", "Mob", "Sect", "Regiment", "Guild",
"Horde", "Pact", "Covenant", "Ritual", "Forge", "Circle", "Crusade", "Revue",
"Revival", "Ramblers", "Roamers", "Assembly", "Tribe", "Ensemble", "Campfire",
"Brotherhood", "Beat Unit", "Cipher Crew", "Bass Syndicate", "808 Order", "Vinyl", 
"Groove", "Wavefront", "Order", "Retro Society", "Synth", "Pulse Network", "Drift Project", 
"Midnight Union", "Thrash Battalion", "Punk Chapter", "Folk Brigade"];

let parts = [part1, part2, part3];
let current = ["","",""];
let yFractions = [0.25, 0.5, 0.75];

function setup() {
  createCanvas(600, 400);
  background(12);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  pickRandomWords();
  noStroke();
  text("Press SPACE to generate a new 3-word phrase", width/2, height - 14);
}

const part1 = ["Electric","Neon","Crimson","Midnight","Golden","Astral","Feral","Broken","Silent","Endless","Phantom","Frozen","Velvet","Hollow","Solar","Cosmic","Doomed","Fading","Fuzzy","Molten","Violet","Rusty","Emerald","Starlit","Enchanted","Reckless","Burning","Iron","Sacred","Wandering","Synthetic","Shadow","Thunder","Eternal","Radiant","Obsidian","Wicked","Urban","Wild","Haunted","Secret","Lunar","Glowing","Stranded","Infinite","Wired","Ghostly","Brutal","Savage","Blackened","Infernal","Abyssal","Grim","Raging","Toxic","Gutter","Anarchic","Chaotic","Vintage","Retro","Turbo","Chrome","Analog","Pastel","Digital","Quantum","Hyper","Solarized","Arcade","Vapor","Mystic","Runic","Rustic","Worn","Timber","Autumn","Forest","Woven","Folkloric","Echoing","Bass-Driven","Kinetic","Pulsing","Fractal","Synth-Laced","Holographic","Laser-Burned","Boom-Bap","Golden-Era","Flowing","Rhythmic","Cipher","Concrete","Skyline","Streetlight","Echo-Chamber","Afterglow","Chromatic","Fire-Forged","Spellbound"];
const part2 = ["Tigers","Orbits","Echoes","Canyons","Rituals","Engineers","Crows","Pirates","Giants","Mirrors","Vipers","Wolves","Signals","Dreamers","Cascades","Monoliths","Circuits","Runaways","Voyagers","Vultures","Horizons","Golems","Skeletons","Nomads","Comets","Rebels","Banshees","Prophets","Drifters","Tempests","Phantoms","Machines","Storms","Sirens","Cacti","Ghosts","Dragons","Dynamos","Statues","Knives","Pilgrims","Idols","Guardians","Ravens","Serpents","Juggernauts","Demons","Warlords","Gravewalkers","Mourners","Executioners","Cultists","Gargoyles","Panthers","Hydras","Thrones","Dungeons","Crusaders","Outlaws","Saboteurs","Sabers","Vandals","Scorpions","Bruisers","Dropouts","Rejects","Decay","Rioters","Misfits","Retrogrades","Arcaders","Lasers","Synths","Daydreamers","Nightdrivers","Lightchasers","Specters","Runecarvers","Balladeers","Minstrels","Wanderers","Treetops","Riverfolk","Drumlords","Basslines","Waveforms","Shadows","Subwoofers","Beatmakers","Rhymecasters","Street Poets","Cipher Kids","Turntablists","Storytellers","Dreamweavers","Timekeepers","Gridrunners"];
const part3 = ["Collective","Syndicate","Division","Assembly","Uprising","Network","Choir","Alliance","Empire","Project","Conspiracy","Coalition","Movement","Brotherhood","Rebellion","Legion","Society","Unit","Machine","Protocol","Council","Company","Dynasty","Agenda","Experiment","Frontier","Order","Manifesto","Program","Union","Circuit","Crew","Cult","Chapter","Engine","Brigade","Authority","Faction","Mob","Sect","Regiment","Guild","Horde","Pact","Covenant","Ritual","Forge","Circle","Crusade","Revue","Revival","Ramblers","Roamers","Assembly","Tribe","Ensemble","Campfire","Brotherhood","Beat Unit","Cipher Crew","Bass Syndicate","808 Order","Vinyl","Groove","Wavefront","Order","Retro Society","Synth","Pulse Network","Drift Project","Midnight Union","Thrash Battalion","Punk Chapter","Folk Brigade"];

const parts = [part1, part2, part3];
let current = ["","",""];
const yFractions = [0.25, 0.5, 0.75];

const part1 = ["Electric","Neon","Crimson","Midnight","Golden","Astral","Feral","Broken","Silent","Endless","Phantom","Frozen","Velvet","Hollow","Solar","Cosmic","Doomed","Fading","Fuzzy","Molten","Violet","Rusty","Emerald","Starlit","Enchanted","Reckless","Burning","Iron","Sacred","Wandering","Synthetic","Shadow","Thunder","Eternal","Radiant","Obsidian","Wicked","Urban","Wild","Haunted","Secret","Lunar","Glowing","Stranded","Infinite","Wired","Ghostly","Brutal","Savage","Blackened","Infernal","Abyssal","Grim","Raging","Toxic","Gutter","Anarchic","Chaotic","Vintage","Retro","Turbo","Chrome","Analog","Pastel","Digital","Quantum","Hyper","Solarized","Arcade","Vapor","Mystic","Runic","Rustic","Worn","Timber","Autumn","Forest","Woven","Folkloric","Echoing","Bass-Driven","Kinetic","Pulsing","Fractal","Synth-Laced","Holographic","Laser-Burned","Boom-Bap","Golden-Era","Flowing","Rhythmic","Cipher","Concrete","Skyline","Streetlight","Echo-Chamber","Afterglow","Chromatic","Fire-Forged","Spellbound"];
const part2 = ["Tigers","Orbits","Echoes","Canyons","Rituals","Engineers","Crows","Pirates","Giants","Mirrors","Vipers","Wolves","Signals","Dreamers","Cascades","Monoliths","Circuits","Runaways","Voyagers","Vultures","Horizons","Golems","Skeletons","Nomads","Comets","Rebels","Banshees","Prophets","Drifters","Tempests","Phantoms","Machines","Storms","Sirens","Cacti","Ghosts","Dragons","Dynamos","Statues","Knives","Pilgrims","Idols","Guardians","Ravens","Serpents","Juggernauts","Demons","Warlords","Gravewalkers","Mourners","Executioners","Cultists","Gargoyles","Panthers","Hydras","Thrones","Dungeons","Crusaders","Outlaws","Saboteurs","Sabers","Vandals","Scorpions","Bruisers","Dropouts","Rejects","Decay","Rioters","Misfits","Retrogrades","Arcaders","Lasers","Synths","Daydreamers","Nightdrivers","Lightchasers","Specters","Runecarvers","Balladeers","Minstrels","Wanderers","Treetops","Riverfolk","Drumlords","Basslines","Waveforms","Shadows","Subwoofers","Beatmakers","Rhymecasters","Street Poets","Cipher Kids","Turntablists","Storytellers","Dreamweavers","Timekeepers","Gridrunners"];
const part3 = ["Collective","Syndicate","Division","Assembly","Uprising","Network","Choir","Alliance","Empire","Project","Conspiracy","Coalition","Movement","Brotherhood","Rebellion","Legion","Society","Unit","Machine","Protocol","Council","Company","Dynasty","Agenda","Experiment","Frontier","Order","Manifesto","Program","Union","Circuit","Crew","Cult","Chapter","Engine","Brigade","Authority","Faction","Mob","Sect","Regiment","Guild","Horde","Pact","Covenant","Ritual","Forge","Circle","Crusade","Revue","Revival","Ramblers","Roamers","Assembly","Tribe","Ensemble","Campfire","Brotherhood","Beat Unit","Cipher Crew","Bass Syndicate","808 Order","Vinyl","Groove","Wavefront","Order","Retro Society","Synth","Pulse Network","Drift Project","Midnight Union","Thrash Battalion","Punk Chapter","Folk Brigade"];

const parts = [part1, part2, part3];
let current = ["","",""];
const yFractions = [0.25, 0.5, 0.75];

// colors for the three words (RGB)
const colors = [ [255,160,160], [255,255,170], [180,200,255] ];

// per-word shake phase offsets
let phases = [0, 1.7, 3.2];

function pickRandomWords(){
  for(let i=0;i<parts.length;i++){
    current[i] = random(parts[i]);
    phases[i] = random(TWO_PI); // randomize phase for organic shake
  }
}

function draw(){
  background(12);

  // small shake settings
  const amp = 2.5;       // small amplitude (pixels)
  const freq = 0.6;      // medium-fast feel

  textSize(34);
  for(let i=0;i<current.length;i++){
    const dx = sin(frameCount * freq * (1 + i*0.05) + phases[i]) * amp;
    const dy = cos(frameCount * freq * (1.1 + i*0.06) + phases[i]*1.1) * (amp * 0.5);
    fill(colors[i][0], colors[i][1], colors[i][2]);
    text(current[i], width/2 + dx, height * yFractions[i] + dy);
  }

  // instruction
  textSize(12);
  fill(180);
  noStroke();
  text("Press SPACE to generate a new 3-word phrase", width/2, height - 14);
}

function keyPressed(){
  if(key === ' ' || keyCode === 32) pickRandomWords();
}
}

function pickRandomWords() {
  for (let i = 0; i < parts.length; i++) {
    current[i] = random(parts[i]);
  }
}

function draw() {
  background(12);
  fill(255);
  textSize(34);
  for (let i = 0; i < current.length; i++) {
    text(current[i], width / 2, height * yFractions[i]);
  }
  textSize(12);
  fill(180);
}

function keyPressed() {
  if (key === ' ' || keyCode === 32) pickRandomWords();
}