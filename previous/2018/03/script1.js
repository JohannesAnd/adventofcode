const fs = require('fs');

const input = fs
  .readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map(line => line
    .split(/[( @ )(,)(: )(x)]+/)
    .map((str, i) => i === 0 ? str : parseInt(str))
  );

const grid = {};

for ([id, xStart, yStart, width, height] of input) {
  for (let x = xStart; x < xStart + width; x++) {
    for (let y = yStart; y < yStart + height; y++) {
      const coord = `${x}|${y}`;
 
      grid[coord] = (grid[coord] || 0) + 1;
    }
  }
}

const result = Object.values(grid).filter(v => v > 1).length;

console.log(result);