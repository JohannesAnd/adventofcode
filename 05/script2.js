import fs from 'fs';

function getBinary(string, one, zero) {
  const binaryString = string
    .replace(new RegExp(one, 'g'), '1')
    .replace(new RegExp(zero, 'g'), '0');

  return Number.parseInt(binaryString, 2);
}

const taken = fs
  .readFileSync('./05/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((boarding) => {
    const row = getBinary(boarding.substring(0, 7), 'B', 'F');
    const column = getBinary(boarding.substring(7), 'R', 'L');

    return row * 8 + column;
  });

let seatID = null;
let i = 0;

while (seatID === null) {
  if (taken.includes(i - 1) && !taken.includes(i) && taken.includes(i + 1)) {
    seatID = i;
  }

  i++;
}

console.log(seatID);
