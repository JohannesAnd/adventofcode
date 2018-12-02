const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const acc = input.split('\n').map(l => {
  const [p, v, a] = l.split(', ').map(s => s.substring(3, s.length - 1));
  const [ax, ay, az] = a.split(',').map(Number);

  return Math.sqrt(Math.pow(ax, 2) + Math.pow(ay, 2) + Math.pow(az, 2));
});

const result = acc.indexOf(Math.min(...acc));

console.log(result);
