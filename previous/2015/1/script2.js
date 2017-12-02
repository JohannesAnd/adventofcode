const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const directions = {
  '(': 1,
  ')': -1
};

const result = input
  .split('')
  .reduce((s, v) => s.concat([s[s.length - 1] + directions[v]]), [0])
  .indexOf(-1);

console.log(result);
