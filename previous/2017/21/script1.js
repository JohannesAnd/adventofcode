const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const transform = input.split('\n').reduce((a, r) => {
  const [from, to] = r.split(' => ');

  a[from] = to;

  return a;
}, {});

let image = [['.', '#', '.'], ['.', '.', '#'], ['#', '#', '#']];

const iterations = 12;

for (let i = 0; i < iterations; i++) {
  const transformSize = image.length % 2 === 0 ? 2 : 3;
  const grids = image.length / transformSize;
  const newSize = grids * (transformSize + 1);
  const newImage = new Array(newSize)
    .fill(false)
    .map(() => new Array(newSize).fill('-'));

  for (let y = 0; y < grids; y++) {
    for (let x = 0; x < grids; x++) {}
  }
}
