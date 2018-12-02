const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input.split('\n').reduce(([two, three], word) => {
  const set = {};

  for (char of word) {
    set[char] = (set[char] || 0) + 1;
  }

  if (Object.values(set).includes(2)) {
    two += 1
  }

  if (Object.values(set).includes(3)) {
    three += 1
  }

  return [two, three];
}, [0, 0]).reduce((val, number) => val * number, 1);

console.log(result);