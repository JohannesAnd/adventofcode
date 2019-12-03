const fs = require('fs');

const numbers = fs.readFileSync('./input.txt', 'utf-8').split('\n').map(n => Number(n));

let found = false;
let index = 0;
let frequency = 0;
let frequencies = new Set();

while(!found) {
  frequency = frequency + numbers[index];

  if (frequencies.has(frequency)) {
    found = true;
  }

  frequencies.add(frequency);
  index = (index + 1) % numbers.length;
}

console.log(frequency);