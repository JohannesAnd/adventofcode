const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const steps = input.split(',');

let x = 0;
let y = 0;
let z = 0;

steps.forEach(step => {
  switch (step) {
    case 'n':
      y += 1;
      z -= 1;
      break;
    case 'ne':
      x += 1;
      z -= 1;
      break;
    case 'se':
      x += 1;
      y -= 1;
      break;
    case 's':
      z += 1;
      y -= 1;
      break;
    case 'sw':
      z += 1;
      x -= 1;
      break;
    case 'nw':
      y += 1;
      x -= 1;
      break;
  }
});

const distance = (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2;

console.log(distance);
