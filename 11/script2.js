import fs from 'fs';

let grid = fs
  .readFileSync('./11/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => line.split(''));

function getOccupiedCount(row, column) {
  return [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ].filter(([x, y]) => {
    let c = grid?.[row + x]?.[column + y];
    let i = 1;

    while (c) {
      if (c && c === '#') return true;
      if (c && c === 'L') return false;

      c = grid?.[row + x * i]?.[column + y * i];
      i++;
    }

    return false;
  }).length;
}

let hasChanged = true;

while (hasChanged) {
  const newGrid = [...grid.map((r) => [...r])];

  hasChanged = false;

  grid.forEach((column, c) => {
    column.forEach((s, r) => {
      if ('.' === s) return;

      const count = getOccupiedCount(c, r);

      if ('L' === s && count === 0) {
        newGrid[c][r] = '#';
        hasChanged = true;
      }

      if ('#' === s && count >= 5) {
        newGrid[c][r] = 'L';
        hasChanged = true;
      }
    });
  });

  grid = newGrid;
}

const occupied = grid.flatMap((g) => g.filter((s) => '#' === s)).length;

console.log(occupied);
