const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const rows = input.split('\n');

const columns = new Array(rows[0].length)
  .fill(false)
  .map((c, i) => rows.map(r => r[i]).join(''));

const rowsRev = rows.map(s =>
  s
    .split('')
    .reverse()
    .join('')
);

const columnsRev = columns.map(s =>
  s
    .split('')
    .reverse()
    .join('')
);

let x = 169;
let y = 0;

let end = false;
let path = '';

const coords = [];

while (!end) {
  const up = columnsRev[x].slice(columnsRev[x].length - y).split(' ')[0];
  const down = columns[x].slice(y + 1).split(' ')[0];
  const left = rowsRev[y].slice(rowsRev[y].length - x).split(' ')[0];
  const rigth = rows[y].slice(x + 1).split(' ')[0];

  const prev = coords[coords.length - 1] || { x: null, y: null };

  if (prev.y === y && prev.x === x) {
    end = true;
  } else {
    coords.push({ x, y });

    if (up.length > 0 && prev.y !== y - up.length) {
      y -= up.length;
      path += up;
    }
    if (down.length > 0 && prev.y !== y + down.length) {
      y += down.length;
      path += down;
    }
    if (left.length > 0 && prev.x !== x - left.length) {
      x -= left.length;
      path += left;
    }
    if (rigth.length > 0 && prev.x !== x + rigth.length) {
      x += rigth.length;
      path += rigth;
    }
  }
}

const result = path.length + 1;

console.log(result);
