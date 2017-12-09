const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const getLength = string => {
  console.log(string);
  if (string.length === 0 || string.indexOf('(') === -1) return string.length;
  const start = Number(string.indexOf('('));
  const end = Number(string.indexOf(')'));
  const split = Number(string.indexOf('x'));

  const length = Number(string.substring(start + 1, split));
  const repeats = Number(string.substring(split + 1, end));

  return (
    start + length * repeats + getLength(string.substring(end + 1 + length))
  );
};

console.log(getLength(input));
