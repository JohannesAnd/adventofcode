const fs = require('fs');

const mod4 = n => (n % 4 + 4) % 4;

const input = fs
  .readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map(l => l.split(''));

const nodes = {};
const bursts = 10000;

let x = Math.floor(input.length / 2);
let y = Math.floor(input[0].length / 2);

let infections = 0;
let dir = 0;

for (let yi = 0; yi < input.length; yi++) {
  for (let xi = 0; xi < input[yi].length; xi++) {
    if (input[yi][xi] === '#') {
      nodes[JSON.stringify({ x: xi, y: yi })] = true;
    }
  }
}

for (let i = 0; i < bursts; i++) {
  if (nodes[JSON.stringify({ x, y })]) {
    dir = mod4(dir + 1);
    delete nodes[JSON.stringify({ x, y })];
  } else {
    dir = mod4(dir - 1);
    nodes[JSON.stringify({ x, y })] = true;
    infections++;
  }

  switch (dir) {
    case 0:
      y -= 1;
      break;
    case 1:
      x += 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      x -= 1;
      break;
  }
}

console.log(infections);
