const fs = require('fs');
const knotHash = require('./knotHash');
const { hexToBin, findX, getConnected } = require('./utils');

const input = 'uugsqrei';
const grid = new Array(128)
  .fill(false)
  .map((n, i) => knotHash(`${input}-${i}`))
  .map(hexToBin)
  .map(n => n.split('').map(n => (Number(n) ? 'X' : ' ')));

let groupNumber = 0;

let pos = findX(grid);

while (pos) {
  const group = getConnected(grid, pos);

  if (group.length > 0) groupNumber++;

  group.forEach(n => {
    grid[n.x][n.y] = groupNumber;
  });

  pos = findX(grid);
}

console.log(
  grid.filter((a, i) => i < 30).map(r =>
    r
      .filter((a, i) => i < 30)
      .map(
        s =>
          String(s).length < 3 ? (String(s).length < 2 ? '  ' + s : ' ' + s) : s
      )
      .join(' ')
  )
);
console.log(groupNumber);
