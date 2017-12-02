const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input
  .split('\n')
  .map(a => Math.max(...a.split('\t')) - Math.min(...a.split('\t')))
  .reduce((s, v) => s + v, 0);

console.log(result);
