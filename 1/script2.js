const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input
  .split('')
  .map(n => Number(n))
  .filter((v, i, a) => v === a[(i + a.length / 2) % a.length])
  .reduce((s, v) => s + v, 0);

console.log(result);
