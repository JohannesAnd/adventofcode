const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const layers = input.split('\n').map(i => {
  const [from, to] = i.split(': ').map(s => s.trim());

  return {
    pos: from,
    length: Number(to),
    round: Math.max(1, Number(to) + Number(to) - 2)
  };
});

const result = layers
  .map(({ pos, length, round }) => {
    if (pos % round === 0) {
      return pos * length;
    }
    return 0;
  })
  .reduce((s, v) => s + v, 0);

console.log(result);
