const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const isValid = p =>
  Object.keys(
    p.split(' ').reduce(
      (a, w) =>
        Object.defineProperty(
          a,
          w
            .split('')
            .sort()
            .join(''),
          { enumerable: true }
        ),
      {}
    )
  ).length === p.split(' ').length;

const result = input.split('\n').reduce((s, v) => s + isValid(v), 0);

console.log(result);
