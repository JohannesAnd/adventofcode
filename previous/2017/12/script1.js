const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const pipes = input.split('\n').reduce((p, i) => {
  const [from, to] = i.split('<->').map(s => s.trim());

  p[from] = to.split(',').map(s => s.trim());

  return p;
}, {});

const open = { '0': true };
const closed = {};

while (Object.keys(open).length > 0) {
  const node = Object.keys(open)[0];
  const children = pipes[node];

  children.forEach(c => {
    if (!(c in closed || c in open)) {
      open[c] = true;
    }
  });

  delete open[node];
  closed[node] = true;
}

console.log(Object.keys(closed).length);
