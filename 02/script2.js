import fs from 'fs';

const result = fs
  .readFileSync('./02/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => line.split(' '))
  .map(([positions, letter, password]) => ({
    positions: positions.split('-').map((number) => Number(number)),
    letter: letter.charAt(0),
    password,
  }))
  .filter(
    ({ positions, letter, password }) =>
      positions
        .map((index) => password[index - 1])
        .filter((char) => char === letter).length === 1
  );

console.log(result.length);
