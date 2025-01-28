const WORD_LEN_DFLT_MSG = "Select a # from 5 - 8";
const SELECT_ERROR_MSG = "You must select one:";
const GAME_OVER_MSG = "Game Over!";
const TIMES_UP_STR = "TIME'S UP!!!";

const removeElFromArray = (arr, indexToRemove)=>{
  if (indexToRemove > -1)
    arr.splice(indexToRemove, 1);
  
  return arr;
};

const ANAGRAMS_LIST = {
  5: [ // length 9, high score = 26
      [
        "abets",
        "baste",
        "betas",
        "beast",
        "beats",
        "bates"
      ],
      [
        "acres",
        "cares",
        "races",
        "scare"
      ],
      [
        "alert",
        "alter",
        "later"
      ],
      [
        "angel",
        "angle",
        "glean"
      ],
      [
        "baker",
        "brake",
        "break"
      ],
      [
        "bared",
        "beard",
        "bread",
        "debar"
      ],
      [
        "dater",
        "rated",
        "trade",
        "tread"
      ],
      [
        "below",
        "bowel",
        "elbow"
      ],
      [
        "caret",
        "cater",
        "crate",
        "trace",
        "react"
      ]
  ],
  6: [ // length 5, highScore = 19
      [
        "arrest",
        "rarest",
        "raster",
        "raters",
        "starer"
      ],
      [
        "carets",
        "caters",
        "caster",
        "crates",
        "reacts",
        "recast",
        "traces"
      ],
      [
        "canter",
        "nectar",
        "recant",
        "trance"
      ],
      [
        "danger",
        "gander",
        "garden",
        "ranged"
      ],
      [
        "daters",
        "trades",
        "treads",
        "stared"
      ]
  ],
  7: [ // length 5, highScore = 16
      [
        "allergy",
        "gallery",
        "largely",
        "regally"
      ],
      [
        "aspired",
        "despair",
        "diapers",
        "praised"
      ],
      [
        "claimed",
        "decimal",
        "declaim",
        "medical"
      ],
      [
        "dearths",
        "hardest",
        "hatreds",
        "threads",
        "trashed"
      ],
      [
        "detains",
        "instead",
        "sainted",
        "stained"
      ]
  ],
  8: [ // length 4, , highScore = 13
      [
        "parroted",
        "predator",
        "prorated",
        "teardrop"
      ],
      [
        "repaints",
        "painters",
        "pantries",
        "pertains"
      ],
      [
        "restrain",
        "retrains",
        "strainer",
        "terrains",
        "trainers"
      ],
      [
        "construe",
        "counters",
        "recounts",
        "trounces"
      ]
  ]
};

export {
  WORD_LEN_DFLT_MSG,
  SELECT_ERROR_MSG,
  GAME_OVER_MSG,
  TIMES_UP_STR,
  ANAGRAMS_LIST,
  removeElFromArray
};