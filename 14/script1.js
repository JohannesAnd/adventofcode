const fs = require('fs');
const knotHash = require('./knotHash');
const { hexToBin } = require('./utils');

const input = 'uugsqrei';
const result = new Array(128)
  .fill(false)
  .map((n, i) => knotHash(`${input}-${i}`))
  .map(hexToBin)
  .map(n =>
    n
      .split('')
      .map(Number)
      .reduce((s, v) => s + v, 0)
  )
  .reduce((s, v) => s + v, 0);

console.log(result);
