import fs from 'fs';

const result = fs
  .readFileSync('./06/input.txt', { encoding: 'utf-8' })
  .split('\n\n')
  .map((answers) => answers.split('\n').map((s) => s.split('')))
  .map(
    (answers) =>
      [...new Set(answers.flat())].filter((answer) =>
        answers.every((a) => a.includes(answer))
      ).length
  )
  .reduce((a, v) => a + v, 0);

console.log(result);
