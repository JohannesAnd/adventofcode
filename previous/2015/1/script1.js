const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const directions = {
  '(': 1,
  ')': -1
};

const result = input.split('').reduce((a, v) => a + directions[v], 0);

console.log(result);
