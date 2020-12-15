import fs from 'fs';

const differences = fs
  .readFileSync('./10/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => Number(line))
  .sort((a, b) => a - b)
  .map((number, index, array) =>
    index === 0 ? number : number - array[index - 1]
  )
  .reduce((diff, d) => {
    diff[d] = (diff[d] || 0) + 1;

    return diff;
  }, {});

console.log(differences[1] * (differences[3] + 1));
