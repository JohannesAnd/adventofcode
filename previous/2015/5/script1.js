const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const hasThreeVowels = s =>
  s.split('').reduce((a, c) => a + ('aeiou'.indexOf(c) >= 0 ? 1 : 0), 0) > 2;

const hasDoubleLetter = s =>
  s.split('').reduce((a, c, i, array) => a || c === array[i + 1], false);

const noIllegalStrings = s =>
  !['ab', 'cd', 'pq', 'xy'].reduce((a, i) => a || s.indexOf(i) >= 0, false);

const isNice = s =>
  hasThreeVowels(s) && hasDoubleLetter(s) && noIllegalStrings(s);

const result = input
  .split('\n')
  .map(isNice)
  .reduce((a, c) => a + c, 0);

console.log(result);
