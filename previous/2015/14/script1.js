const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');
const time = 2503;

const result = input.split('\n').map(r => {
  const d = r.split(' ');
  const name = d[0];
  const speed = Number(d[3]);
  const dur = Number(d[6]);
  const pause = Number(d[13]);

  const fullCycles = Math.floor(time / (dur + pause));
  const remaining = Math.min(dur, time % (dur + pause));

  const distance = speed * dur * fullCycles + speed * remaining;

  return distance;
});

console.log(Math.max(...result));
