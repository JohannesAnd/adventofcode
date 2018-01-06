const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let x = 0;
let y = 2;

const result = input.split('\n').map(inst => {
  const keypad = [
    [false, false, 1, false, false],
    [false, 2, 3, 4, false],
    [5, 6, 7, 8, 9],
    [false, 'A', 'B', 'C', false],
    [false, false, 'D', false, false]
  ];

  inst.split('').forEach(i => {
    switch (i) {
      case 'U':
        if (keypad[y - 1] && keypad[y - 1][x]) {
          y -= 1;
        }
        break;
      case 'D':
        if (keypad[y + 1] && keypad[y + 1][x]) {
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
