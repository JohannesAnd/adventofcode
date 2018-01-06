const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let x = 1;
let y = 1;

const result = input.split('\n').map(inst => {
  const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  inst.split('').forEach(i => {
    switch (i) {
      case 'U':
        if (keypad[y - 1]) {
          y -= 1;
        }
        break;
      case 'D':
        if (keypad[y + 1]) {
          y += 1;
        }
        break;
      case 'L':
        if (keypad[y][x - 1]) {
          x -= 1;
        }
        break;
      case 'R':
        if (keypad[y][x + 1]) {
          x += 1;
        }
        break;
    }
  });

  return keypad[y][x];
});

console.log(result);
