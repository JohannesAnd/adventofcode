const fs = require('fs');

const mod4 = n => (n % 4 + 4) % 4;

const input = fs
  .readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map(l => l.split(''));

const nodes = {};
const bursts = 10000000;

let x = Math.floor(input.length / 2);
let y = Math.floor(input[0].length / 2);

let infections = 0;
let dir = 0;

for (let yi = 0; yi < input.length; yi++) {
  for (let xi = 0; xi < input[yi].length; xi++) {
    if (input[yi][xi] === '#') {
      nodes[JSON.stringify({ x: xi, y: yi })] = 2;
    }
  }
}

for (let i = 0; i < bursts; i++) {
  switch (nodes[JSON.stringify({ x, y })]) {
    case 0:
    case undefined:
      dir = mod4(dir - 1);
      nodes[JSON.stringify({ x, y })] = 1;
      break;
    case 1:
      nodes[JSON.stringify({ x, y })] = 2;
      infections++;
      break;
    case 2:
      dir = mod4(dir + 1);
      nodes[JSON.stringify({ x, y })] = 3;
      break;
    case 3:
      dir = mod4(dir + 2);
      nodes[JSON.stringify({ x, y })] = 0;
      break;
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
