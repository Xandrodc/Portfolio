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

let current1 = "";
let current2 = "";
let current3 = "";

// per-word phase offsets for independent shaking
let phase1 = 0;
let phase2 = 1.5;
let phase3 = 3.0;

function setup() {
  createCanvas(600, 400);
  background(12);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);

  // pick initial words and randomize phases
  pickRandomWords();
}

function pickRandomWords() {
  current1 = random(part1);
  current2 = random(part2);
  current3 = random(part3);

  // randomize phase so shake feels organic every time words change
  phase1 = random(TWO_PI);
  phase2 = random(TWO_PI);
  phase3 = random(TWO_PI);
}

function draw() {
  background(12);

  // smaller, medium-fast shake parameters
  let shakeAmp = 3;      // reduced amplitude in pixels (smaller movements)
  let shakeFreq = 0.5;   // base frequency (medium-fast feeling)

  // per-word jitter using sine/cosine with different multipliers
  let dx1 = sin(frameCount * shakeFreq + phase1) * shakeAmp;
  let dy1 = cos(frameCount * (shakeFreq * 1.2) + phase1 * 1.1) * (shakeAmp * 0.4);

  let dx2 = sin(frameCount * (shakeFreq * 1.1) + phase2) * (shakeAmp * 0.9);
  let dy2 = cos(frameCount * (shakeFreq * 1.3) + phase2 * 1.2) * (shakeAmp * 0.4);

  let dx3 = sin(frameCount * (shakeFreq * 0.9) + phase3) * (shakeAmp * 0.8);
  let dy3 = cos(frameCount * (shakeFreq * 1.4) + phase3 * 1.3) * (shakeAmp * 0.4);

  // draw words with color tints
  textSize(34);
  fill(255, 0, 0);
  text(current1, width / 2 + dx1, height * 0.25 + dy1);

  fill(255, 255, 0);
  text(current2, width / 2 + dx2, height * 0.5 + dy2);

   fill(0, 0, 255);
  text(current3, width / 2 + dx3, height * 0.75 + dy3);
}

function keyPressed() {
  if (key === ' ' || keyCode === 32) {
    pickRandomWords();
  }
}