import fs from 'fs';

const grid = fs
  .readFileSync('./03/input.txt', { encoding: 'utf-8' })
  .split('\n');

function getNumberOfTrees(down, right) {
  return grid
    .filter((line, index) => index % down === 0)
    .map((line, index) => line[(index * right) % line.length])
    .filter((position) => position === '#').length;
}

const result =
  getNumberOfTrees(1, 1) *
  getNumberOfTrees(1, 3) *
  getNumberOfTrees(1, 5) *
  getNumberOfTrees(1, 7) *
  getNumberOfTrees(2, 1);

console.log(result);
