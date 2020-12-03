import fs from 'fs';

const result = fs
  .readFileSync('./03/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line, index) => line[(index * 3) % line.length])
  .filter((position) => position === '#');

console.log(result.length);
