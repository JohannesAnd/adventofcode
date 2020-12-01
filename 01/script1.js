import fs from 'fs';

const sortedInput = fs
  .readFileSync('./01/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => Number(line))
  .sort((a, b) => a - b);

function findSolution(numbers, target) {
  let lowerIndex = 0;
  let higherIndex = numbers.length - 1;

  while (true) {
    const lower = numbers[lowerIndex];
    const higher = numbers[higherIndex];
    const sum = lower + higher;

    if (lowerIndex === higherIndex) return null;
    if (sum === target) return lower * higher;
    if (sum < target) {
      lowerIndex++;
    }
    if (sum > target) {
      higherIndex--;
    }
  }
}

console.log(findSolution(sortedInput, 2020));
