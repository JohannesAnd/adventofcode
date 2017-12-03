const fs = require('fs');

const input = 289326;

const getLength = n => {
  const diameter = Math.ceil(Math.sqrt(n));
  return diameter;
};

const result = getLength(input);

console.log(result);

for (let i = 0; i < 26; i++) {
  console.log(i, getLength(i));
}
