import fs from 'fs';

const input = fs
  .readFileSync('./01/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => Number(line));

function isUnique(...array) {
  return array.length === [...new Set(array)].length;
}

function findSolution(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      for (let k = j; k < numbers.length; k++) {
        if (isUnique(i, j, k)) {
          if (numbers[i] + numbers[j] + numbers[k] === target)
            return numbers[i] * numbers[j] * numbers[k];
        }
      }
    }
  }

  return null;
}

console.log(findSolution(input, 2020));
