const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const hasPair = s => {
  const pairs = s.split('').reduce((a, c, i, array) => {
    if (i + 1 === array.length) return a;

    const pair = array.slice(i, i + 2).join('');

    if (pair in a) {
      a[pair].push(i);
    } else {
      a[pair] = [i];
    }

    return a;
  }, {});

  return Object.values(pairs).reduce(
    (a, p) => a || (p.length > 1 ? p[p.length - 1] - p[0] > 1 : false),
    false
  );

  return;
};

const hasRepeat = s => {
  return s
    .split('')
    .reduce((a, s, i, array) => a || array[i] === array[i + 2], false);
};

const isNice = s => hasPair(s) && hasRepeat(s);

const result = input
  .split('\n')
  .map(isNice)
  .reduce((a, c) => a + c, 0);

console.log(result);
