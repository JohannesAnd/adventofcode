const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const isDivisible = (n, d) => !(n % d) && n !== d;

const result = input
  .split('\n')
  .map(a => a.split('\t'))
  .map(a => a.map(e => e / a.find(d => isDivisible(e, d))).filter(e => e))
  .reduce((s, v) => s + v[0], 0);

console.log(result);
