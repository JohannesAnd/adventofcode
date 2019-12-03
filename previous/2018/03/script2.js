const fs = require('fs');

const input = fs
  .readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map(line => line
    .split(/[( @ )(,)(: )(x)]+/)
    .map((str, i) => i === 0 ? str : parseInt(str))
  );

const grid = {};
const free = new Set();

for ([id, xStart, yStart, width, height] of input) {
  let overlaps = [];

  for (let x = xStart; x < xStart + width; x++) {
    for (let y = yStart; y < yStart + height; y++) {
      const coord = `${x}|${y}`;

      if (grid[coord]) {
        overlaps = overlaps.concat(grid[coord]);
      }

      grid[coord] = [...(grid[coord] || []), id];
    }
  }

  if (overlaps.length === 0) {
    free.add(id)
  } else {
    overlaps.forEach(id => {
      free.delete(id);
    })
  }
}

console.log(free.values());