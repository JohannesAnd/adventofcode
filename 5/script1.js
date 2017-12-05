const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const instructions = input.split('\n').map(Number);

let steps = 0;
let position = 0;

while (position >= 0 && position < instructions.length) {
  let prevPosition = position;

  position += instructions[position];
  instructions[prevPosition] += instructions[prevPosition] > 2 ? -1 : 1;
  steps++;
}

console.log(steps);
