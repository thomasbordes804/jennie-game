// ✏️ EDIT ALL GAME TEXT HERE — {her} {cat} {dog} are replaced automatically
window.CONTENT = {
  herName: "Cutie",
  catName: "Pip",
  dogName: "Fluffy",

  gameTitle: "Blob Pop!",
  groundLine: "{cat} is supervising",

  start: {
    heading: "Hi {her}!",
    body: "I'm Ditto ! Clear all 5 levels to unlock a secret message!",
    blobLegend: "Blob +1",
    dogLegend: "{dog} +2",
    button: "Let's play !"
  },

  levelClear: {
    heading: "Level {level} clear!",
    button: "Level {next} →",
    lines: {
      1: "Warm-up complete! The blobs are getting sneakier...",
      2: "Ditto says you are a natural. The blobs are speeding up!",
      3: "Halfway there! Even the dog bonus rounds are impressed.",
      4: "One more level! {cat} pretends not to care, but she is definitely watching."
    }
  },

  timeUp: {
    heading: "Time's up!",
    body: "The blobs got away... but Ditto believes in you. {cat} does too (probably).",
    button: "Retry level {level}"
  },

  win: {
    heading: "All 5 levels — you did it!",
    body: "{her}, I'm sorry I disappeared to a concert yesterday and left you waiting.",
    buttonYes: "Play games with me again?",
    buttonReplay: "or replay from level 1"
  },

  yay: {
    heading: "YAY!!",
    body: "Ditto is doing his happy wobble. You, me — game night.",
    couponTop: "★ PRIZE UNLOCKED ★",
    couponMain: "1 FREE DINNER",
    couponSmall: "on me · valid forever",
    button: "Play again"
  },

  links: {
    music: "https://www.youtube.com/watch?v=dg4dmNvxdu0&list=RDdg4dmNvxdu0&start_radio=1",
    surprise: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
  },

  // Gameplay tuning: goal = blobs to catch, seconds = time per level
  levels: {
    1: { goal: 8,  seconds: 25 },
    2: { goal: 10, seconds: 23 },
    3: { goal: 12, seconds: 21 },
    4: { goal: 14, seconds: 19 },
    5: { goal: 16, seconds: 17 }
  }
};
