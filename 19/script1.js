const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const map = input.split('\n').map(l => l.split(''));

let x;
let y;

let prevX;
let prevY;

let end = false;

for (let i = 0; i < map[0].length; i++) {
  if (map[0][i] === '|') {
    y = i;
    x = 0;
  }
}

while (!end) {
  // Do stuff
}
