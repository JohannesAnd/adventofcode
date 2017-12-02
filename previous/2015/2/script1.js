const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const getArea = (a, d) => {
  const s1 = d[0] * d[1];
  const s2 = d[1] * d[2];
  const s3 = d[0] * d[2];

  return a + Math.min(s1, s2, s3) + 2 * (s1 + s2 + s3);
};

const result = input
  .split('\n')
  .map(s => s.split('x').map(Number))
  .reduce(getArea, 0);

console.log(result);
