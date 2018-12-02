const fs = require('fs');

const genAFactor = 16807;
const genBFactor = 48271;
const divider = 2147483647;

let i = 0;
let count = 0;
let genA = 699;
let genB = 124;

const getA = () => {
  let newGenA = genA;
  while (true) {
    newGenA = (newGenA * genAFactor) % divider;

    if (newGenA % 4 === 0) {
      genA = newGenA;
      return;
    }
  }
};

const getB = () => {
  let newGenB = genB;
  while (true) {
    newGenB = (newGenB * genBFactor) % divider;

    if (newGenB % 8 === 0) {
      genB = newGenB;
      return;
    }
  }
};

while (i < 5000000) {
  getA();
  getB();
  if (genA % 65536 === genB % 65536) {
    count++;
  }
  i++;
}

console.log(count);
