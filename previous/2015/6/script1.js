const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const lights = new Array(1000)
  .fill(false)
  .map(() => new Array(1000).fill(false));

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
    modify(inst[1], inst[3], l => !l);
  } else {
    modify(inst[2], inst[4], () => inst[1] === 'on');
  }
});

const result = lights
  .map(row => row.reduce((a, r) => a + r), 0)
  .reduce((a, c) => a + c, 0);

console.log(result);
