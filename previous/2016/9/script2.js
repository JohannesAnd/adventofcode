const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const getLength = string => {
  if (string.length === 0 || string.indexOf('(') === -1) return string.length;

  const start = Number(string.indexOf('('));
  const end = Number(string.indexOf(')'));
  const split = Number(string.indexOf('x'));

  const length = Number(string.substring(start + 1, split));
  const repeats = Number(string.substring(split + 1, end));

  const repeatedString = string.substring(end + 1, end + length + 1);
  const restString = string.substring(end + 1 + length);

  return start + getLength(repeatedString) * repeats + getLength(restString);
};

console.log(getLength(input));
