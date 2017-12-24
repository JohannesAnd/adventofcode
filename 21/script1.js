const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const transform = input.split('\n').reduce((a, r) => {
  const [from, to] = r.split(' => ');

  a[from] = to;

  return a;
}, {});

let image = [['.', '#', '.'], ['.', '.', '#'], ['#', '#', '#']];

for (let i = 0; i < 5; i++) {
  if (image.length % 2 === 0) {
    for (let x = 0; x < image.length / 2; x++) {
      for (let y = 0; y < image.length / 2; y++) {}
    }
  } else {
  }
}
