const fs = require('fs');

const genAFactor = 16807;
const genBFactor = 48271;
const divider = 2147483647;

let i = 0;
let count = 0;
let genA = 699;
let genB = 124;

const getA = () => {
  while (true) {
    const newGenA = (genA * genAFactor) % divider;

    if (newGenA % 4 === 0) {
      genA = newGenA;
    }
  }
};

const getB = () => {
  while (true) {
    const newGenB = (genB * genBFactor) % divider;

    if (newGenB % 8 === 0) {
      genB = newGenB;
    }
  }
};

while (i < 5000000) {
  getA();
  getB();
  console.log(genA);
  if (genA % 65536 === genB % 65536) {
    count++;
    console.log(count);
  }
  i++;
}

console.log(count);
