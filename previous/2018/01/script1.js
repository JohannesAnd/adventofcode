const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input.split('\n').map(n => Number(n)).reduce((s, v) => s +v, 0);

console.log(result);