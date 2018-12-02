const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const layers = input.split('\n').map(i => {
  const [from, to] = i.split(': ').map(s => s.trim());

  return {
    pos: Number(from),
    round: Math.max(1, Number(to) + Number(to) - 2)
  };
});

let delay = -1;
let severity = 1000;

while (severity > 0) {
  delay++;

  severity = layers
    .map(({ pos, round }) => (pos + delay) % round === 0)
    .reduce((s, v) => s + v, 0);
}

console.log(delay);
