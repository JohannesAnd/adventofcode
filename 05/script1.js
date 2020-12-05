import fs from 'fs';

function getBinary(string, one, zero) {
  const binaryString = string
    .replace(new RegExp(one, 'g'), '1')
    .replace(new RegExp(zero, 'g'), '0');

  return Number.parseInt(binaryString, 2);
}

const result = fs
  .readFileSync('./05/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((boarding) => {
    const row = getBinary(boarding.substring(0, 7), 'B', 'F');
    const column = getBinary(boarding.substring(7), 'R', 'L');

    return row * 8 + column;
  });

console.log(Math.max(...result));
