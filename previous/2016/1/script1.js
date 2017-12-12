const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const coords = input.split(', ').reduce(
  (coords, inst) => {
    const dir = inst.substr(0, 1);
    const length = Number(inst.substring(1));

    coords.direction += dir === 'R' ? 1 : -1;

    switch (coords.direction % 4) {
      case 0:
        coords.x += length;
        break;
      case 1:
        coords.y += length;
        break;
      case 2:
        coords.x -= length;
        break;
      case 3:
        coords.y -= length;
        break;
    }

    return coords;
  },
  { direction: 0, x: 0, y: 0 }
);

const result = Math.abs(coords.x) + Math.abs(coords.y);

console.log(result);
