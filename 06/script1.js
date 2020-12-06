import fs from 'fs';

const result = fs
  .readFileSync('./06/input.txt', { encoding: 'utf-8' })
  .split('\n\n')
  .map((answers) => answers.replace(/\n/g, '').split(''))
  .map((answers) => [...new Set(answers)].length)
  .reduce((a, v) => a + v, 0);

console.log(result);
