const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const computeDiff = s => {
  const newString = s
    .substring(0)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');

  console.log(s, newString);

  return newString.length + 2 - s.length;
};

const result = input
  .split('\n')
  .map(computeDiff)
  .reduce((s, v) => s + v, 0);

console.log(result);
