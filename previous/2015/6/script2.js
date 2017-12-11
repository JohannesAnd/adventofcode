const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const lights = new Array(1000).fill(false).map(() => new Array(1000).fill(0));

const modify = (from, to, func) => {
  const [fx, fy] = from.split(',').map(Number);
  const [tx, ty] = to.split(',').map(Number);

  for (let x = fx; x <= tx; x++) {
    for (let y = fy; y <= ty; y++) {
      lights[x][y] = func(lights[x][y]);
    }
  }
};

input.split('\n').forEach(instruction => {
  const inst = instruction.split(' ');

  if (inst[0] === 'toggle') {
    modify(inst[1], inst[3], l => l + 2);
  } else {
    modify(
      inst[2],
      inst[4],
      l => (inst[1] === 'on' ? l + 1 : Math.max(l - 1, 0))
    );
  }
});

const result = lights
  .map(row => row.reduce((a, r) => a + r), 0)
  .reduce((a, c) => a + c, 0);

console.log(result);
