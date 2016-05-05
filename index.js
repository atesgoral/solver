'use strict';

const solver = require('./solver');

function solveIncrementally(sampleMap) {
  const subsetMap = {};

  const keyList = Object.keys(sampleMap);

  while (keyList.length) {
    const key = keyList.shift();

    subsetMap[key] = sampleMap[key];

    try {
      const solution = solver.solve(subsetMap);

      if (solution !== null) {
        return solution;
      }
    } catch (err) {
      if (err instanceof solver.NeedMoreSamplesError) {
        console.log('Increasing sample size');
      } else {
        throw err;
      }
    }
  }
}

function tryAbcd() {
  return solveIncrementally({
    a: 1,
    baxs: 2,
    c: 3,
    bcd: 10
  });
}

function tryNumbers() {
  return solveIncrementally({
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20
  });
}

function tryFrenchNumbers() {
  return solveIncrementally({
    'zéro': 0,
    'un': 1,
    'deux': 2,
    'trois': 3,
    'quatre': 4,
    'cinq': 5,
    'six': 6,
    'sept': 7,
    'huit': 8,
    'neuf': 9,
    'dix': 10,
    'onze': 11,
    'douze': 12,
    'treize': 13,
    'quatorze': 14,
    'quinze': 15,
    'seize': 16,
    'dix-sept': 17,
    'dix-huit': 18,
    'dix-neuf': 19,
    'vingt': 20,
    'vingt et un': 21,
    'vingt-deux': 22,
    'vingt-trois': 23,
    'vingt-quatre': 24,
    'vingt-cinq': 25,
    'vingt-six': 26,
    'vingt-sept': 27,
    'vingt-huit': 28,
    'vingt-neuf': 29,
    'trente': 30,
    'Trente et un': 31,
    'Trente-deux': 32,
    'Trente-trois': 33,
    'Trente-quatre': 34,
    'Trente-cinq': 35,
    'Trente-six': 36,
    'Trente-sept': 37,
    'Trente-huit': 38,
    'Trente-neuf': 39,
    'quarante': 40,
    'quarante et un': 41,
    'quarante-deux': 42,
    'quarante-trois': 43,
    'quarante-quatre': 44,
    'quarante-cinq': 45,
    'quarante-six': 46,
    'quarante-sept': 47,
    'quarante-huit': 48,
    'quarante-neuf': 49,
    'cinquante': 50,
    'cinquante et un': 51,
    'cinquante-deux': 52,
    'cinquante-trois': 53,
    'cinquante-quatre': 54,
    'cinquante-cinq': 55,
    'cinquante-six': 56,
    'cinquante-sept': 57,
    'cinquante-huit': 58,
    'cinquante-neuf': 59,
    'soixante': 60,
    'soixante et un': 61,
    'soixante-deux': 62,
    'soixante-trois': 63,
    'soixante-quatre': 64,
    'soixante-cinq': 65,
    'soixante-six': 66,
    'soixante-sept': 67,
    'soixante-huit': 68,
    'soixante-neuf': 69,
    'soixante-dix': 70,
    'soixante-et-onze': 71,
    'soixante-douze': 72,
    'soixante-treize': 73,
    'soixante-quatorze': 74,
    'soixante-quinze': 75,
    'soixante-seize': 76,
    'soixante-dix-sept': 77,
    'soixante-dix-huit': 78,
    'soixante-dix-neuf': 79,
    'quatre-vingts': 80,
    'quatre-vingt-un': 81,
    'quatre-vingt-deux': 82,
    'quatre-vingt-trois': 83,
    'quatre-vingt-quatre': 84,
    'quatre-vingt-cinq': 85,
    'quatre-vingt-six': 86,
    'quatre-vingt-sept': 87,
    'quatre-vingt-huit': 88,
    'quatre-vingt-neuf': 89,
    'quatre-vingt-dix': 90,
    'quatre-vingt-onze': 91,
    'quatre-vingt-douze': 92,
    'quatre-vingt-treize': 93,
    'quatre-vingt-quatorze': 94,
    'quatre-vingt-quinze': 95,
    'quatre-vingt-seize': 96,
    'quatre-vingt-dix-sept': 97,
    'quatre-vingt-dix-huit': 98,
    'quatre-vingt-dix-neuf': 99,
    'cent': 100,
  });
}

function tryColors() {
  return solveIncrementally({
    indianred: 0xCD5C5C,
    lightcoral: 0xF08080,
    salmon: 0xFA8072,
    darksalmon: 0xE9967A,
    lightsalmon: 0xFFA07A,
    crimson: 0xDC143C,
    red: 0xFF0000,
    firebrick: 0xB22222,
    darkred: 0x8B0000,

    pink: 0xFFC0CB,
    lightpink: 0xFFB6C1,
    hotpink: 0xFF69B4,
    deeppink: 0xFF1493,
    mediumvioletred: 0xC71585,
    palevioletred: 0xDB7093,

    lightsalmon: 0xFFA07A,
    coral: 0xFF7F50,
    tomato: 0xFF6347,
    orangered: 0xFF4500,
    darkorange: 0xFF8C00,
    orange: 0xFFA500,

    gold: 0xFFD700,
    yellow: 0xFFFF00,
    lightyellow: 0xFFFFE0,
    lemonchiffon: 0xFFFACD,
    lightgoldenrodyellow: 0xFAFAD2,
    papayawhip: 0xFFEFD5,
    moccasin: 0xFFE4B5,
    peachpuff: 0xFFDAB9,
    palegoldenrod: 0xEEE8AA,
    khaki: 0xF0E68C,
    darkkhaki: 0xBDB76B,

    lavender: 0xE6E6FA,
    thistle: 0xD8BFD8,
    plum: 0xDDA0DD,
    violet: 0xEE82EE,
    orchid: 0xDA70D6,
    fuchsia: 0xFF00FF,
    magenta: 0xFF00FF,
    mediumorchid: 0xBA55D3,
    mediumpurple: 0x9370DB,
    blueviolet: 0x8A2BE2,
    darkviolet: 0x9400D3,
    darkorchid: 0x9932CC,
    darkmagenta: 0x8B008B,
    purple: 0x800080,
    indigo: 0x4B0082,
    slateblue: 0x6A5ACD,
    darkslateblue: 0x483D8B,
    mediumslateblue: 0x7B68EE,

    greenyellow: 0xADFF2F,
    chartreuse: 0x7FFF00,
    lawngreen: 0x7CFC00,
    lime: 0x00FF00,
    limegreen: 0x32CD32,
    palegreen: 0x98FB98,
    lightgreen: 0x90EE90,
    mediumspringgreen: 0x00FA9A,
    springgreen: 0x00FF7F,
    mediumseagreen: 0x3CB371,
    seagreen: 0x2E8B57,
    forestgreen: 0x228B22,
    green: 0x008000,
    darkgreen: 0x006400,
    yellowgreen: 0x9ACD32,
    olivedrab: 0x6B8E23,
    olive: 0x808000,
    darkolivegreen: 0x556B2F,
    mediumaquamarine: 0x66CDAA,
    darkseagreen: 0x8FBC8F,
    lightseagreen: 0x20B2AA,
    darkcyan: 0x008B8B,
    teal: 0x008080,

    aqua: 0x00FFFF,
    cyan: 0x00FFFF,
    lightcyan: 0xE0FFFF,
    paleturquoise: 0xAFEEEE,
    aquamarine: 0x7FFFD4,
    turquoise: 0x40E0D0,
    mediumturquoise: 0x48D1CC,
    darkturquoise: 0x00CED1,
    cadetblue: 0x5F9EA0,
    steelblue: 0x4682B4,
    lightsteelblue: 0xB0C4DE,
    powderblue: 0xB0E0E6,
    lightblue: 0xADD8E6,
    skyblue: 0x87CEEB,
    lightskyblue: 0x87CEFA,
    deepskyblue: 0x00BFFF,
    dodgerblue: 0x1E90FF,
    cornflowerblue: 0x6495ED,
    mediumslateblue: 0x7B68EE,
    royalblue: 0x4169E1,
    blue: 0x0000FF,
    mediumblue: 0x0000CD,
    darkblue: 0x00008B,
    navy: 0x000080,
    midnightblue: 0x191970,

    cornsilk: 0xFFF8DC,
    blanchedalmond: 0xFFEBCD,
    bisque: 0xFFE4C4,
    navajowhite: 0xFFDEAD,
    wheat: 0xF5DEB3,
    burlywood: 0xDEB887,
    tan: 0xD2B48C,
    rosybrown: 0xBC8F8F,
    sandybrown: 0xF4A460,
    goldenrod: 0xDAA520,
    darkgoldenrod: 0xB8860B,
    peru: 0xCD853F,
    chocolate: 0xD2691E,
    saddlebrown: 0x8B4513,
    sienna: 0xA0522D,
    brown: 0xA52A2A,
    maroon: 0x800000,

    white: 0xFFFFFF,
    snow: 0xFFFAFA,
    honeydew: 0xF0FFF0,
    mintcream: 0xF5FFFA,
    azure: 0xF0FFFF,
    aliceblue: 0xF0F8FF,
    ghostwhite: 0xF8F8FF,
    whitesmoke: 0xF5F5F5,
    seashell: 0xFFF5EE,
    beige: 0xF5F5DC,
    oldlace: 0xFDF5E6,
    floralwhite: 0xFFFAF0,
    ivory: 0xFFFFF0,
    antiquewhite: 0xFAEBD7,
    linen: 0xFAF0E6,
    lavenderblush: 0xFFF0F5,
    mistyrose: 0xFFE4E1,

    gainsboro: 0xDCDCDC,
    lightgrey: 0xD3D3D3,
    silver: 0xC0C0C0,
    darkgray: 0xA9A9A9,
    gray: 0x808080,
    dimgray: 0x696969,
    lightslategray: 0x778899,
    slategray: 0x708090,
    darkslategray: 0x2F4F4F,
    black: 0x000000
  });
}

try {
  //const solution = tryAbcd();
  const solution = tryNumbers();
  //const solution = tryFrenchNumbers();
  //const solution = tryColors();

  console.log(solution || 'No solution');
} catch (err) {
  console.error('ERROR:', err.message);
}
