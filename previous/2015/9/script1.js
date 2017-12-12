const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const computeDiff = s => {
  const newString = s
    .substring(1, s.length - 1)
    .replace(/\\\\/g, ',')
    .replace(/\\x[A-Fa-f0-9]{2}/g, '_')
    .replace(/\\"/g, '.');

  console.log(s, newString);
  return s.length - newString.length;
};

const result = input
  .split('\n')
  .map(computeDiff)
  .reduce((s, v) => s + v, 0);

console.log(result);
