const fs = require('fs');

const genAFactor = 16807;
const genBFactor = 48271;
const divider = 2147483647;

let i = 0;
let count = 0;
let genA = 699;
let genB = 124;

while (i < 40000000) {
  genA = (genA * genAFactor) % divider;
  genB = (genB * genBFactor) % divider;

  if (genA % 65536 === genB % 65536) {
    count++;
  }
  i++;
}

console.log(count);
