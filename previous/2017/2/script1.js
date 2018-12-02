const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input
  .split('\n')
  .map(a => a.split('\t'))
  .map(a => Math.max(...a) - Math.min(...a))
  .reduce((s, v) => s + v, 0);

console.log(result);
