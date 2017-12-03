const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const directions = {
  x: {
    '<': -1,
    '>': 1
  },
  y: {
    '^': 1,
    v: -1
  }
};

const getNewPosition = (a, d) => ({
  x: (directions.x[d] || 0) + a[a.length - 1].x,
  y: (directions.y[d] || 0) + a[a.length - 1].y
});

const result = Object.keys(
  input
    .split('')
    .reduce((a, d) => a.concat(getNewPosition(a, d)), [{ x: 0, y: 0 }])
    .map(p => String(p.x) + '|' + String(p.y))
    .reduce((a, c) => Object.defineProperty(a, c, { enumerable: true }), {})
).length;

console.log(result);
