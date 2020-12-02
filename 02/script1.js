import fs from 'fs';

const result = fs
  .readFileSync('./02/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => line.split(' '))
  .map(([range, letter, password]) => ({
    range: range.split('-').map((number) => Number(number)),
    letter: letter.charAt(0),
    password,
  }))
  .filter(({ range, letter, password }) => {
    const count = password.split('').filter((char) => char === letter).length;

    return range[0] <= count && count <= range[1];
  });

console.log(result.length);
