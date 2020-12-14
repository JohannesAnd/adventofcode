import fs from 'fs';

const PREAMBLE = 5;

const numbers = fs
  .readFileSync('./09/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => Number(line));

function makesSum(number, array) {
  const sorted = array.sort((a, b) => a - b);

  let top = array.length - 1;
  let bottom = 0;

  while (top > bottom) {
    const sum = sorted[top] + sorted[bottom];

    if (sum === number) return true;
    if (sum > number) top--;
    else if (sum < number) bottom++;
  }

  return false;
}

console.log(
  numbers.find(
    (number, index) =>
      index >= PREAMBLE &&
      !makesSum(number, numbers.slice(index - PREAMBLE, index))
  )
);
