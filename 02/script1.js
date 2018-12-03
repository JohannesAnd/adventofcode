const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input.split('\n').reduce(([two, three], word) => {
  const set = word.split('').reduce((s, c) => {
    s[c] = (s[c] || 0) + 1;

    return s;
  }, {})

  return [
    two + Object.values(set).includes(2),
    three + Object.values(set).includes(3)
  ];
}, [0, 0]).reduce((val, number) => val * number, 1);

console.log(result);