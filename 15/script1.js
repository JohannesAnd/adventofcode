const fs = require('fs');

const genAFactor = 16807;
const genBFactor = 48271;
const divider = 2147483647;

let i = 0;
let count = 0;
let genA = 65;
let genB = 8921;

while (i < 40000000) {
  genA = (genA * genAFactor) % divider;
  genB = (genB * genBFactor) % divider;

  if (genA === 65) {
    console.log((genA * genAFactor) % divider);
  }

  if (genA.toString(2).slice(-16) === genB.toString(2).slice(-16)) {
    count++;
    console.log(count, (i / 400000).toFixed(2), '%');
  }
}

console.log(count);
