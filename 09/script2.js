import fs from 'fs';

const TARGET = 248131121;

const numbers = fs
  .readFileSync('./09/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => Number(line));

function sumArray(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function compute() {
  for (let start = 0; start < numbers.length; start++) {
    let notTooLarge = true;

    let length = 2;

    while (notTooLarge) {
      const range = numbers.slice(start, start + length);
      const sum = sumArray(range);

      if (sum === TARGET) return Math.min(...range) + Math.max(...range);
      else if (sum > TARGET) notTooLarge = false;
      else length++;
    }
  }
}

console.log(compute());
