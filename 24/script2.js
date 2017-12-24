const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const pipes = input.split('\n').map(p => p.split('/').map(Number));

const build = (bridge = [], last = 0) => {
  const pos = pipes
    .filter(p => p[0] === last || p[1] === last)
    .filter(p => bridge.indexOf(pipes.indexOf(p)) < 0);

  if (pos.length === 0) return [bridge];

  return pos
    .map(p =>
      build(bridge.concat([pipes.indexOf(p)]), p[0] === last ? p[1] : p[0])
    )
    .reduce((a, r) => a.concat(r), []);
};

const bridges = build();

const maxLength = bridges
  .map(b => b.length)
  .reduce((a, l) => Math.max(a, l), 0);

const longest = bridges
  .filter(b => b.length === maxLength)
  .map(b => b.map(b => pipes[b]).reduce((a, p) => a + p[0] + p[1], 0))
  .reduce((a, s) => Math.max(a, s), 0);

console.log(longest);
