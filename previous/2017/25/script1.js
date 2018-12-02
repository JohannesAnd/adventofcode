const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

const nodes = {};

for (let i = 0; i < (input.length - 3) / 10; i++) {
  const index = i * 10 + 3;
  const name = input[index]
    .split(' ')
    .slice(-1)[0]
    .slice(0, -1);

  const writeZero = input[index + 2]
    .split(' ')
    .slice(-1)[0]
    .slice(0, -1);

  const moveZero =
    input[index + 3]
      .split(' ')
      .slice(-1)[0]
      .slice(0, -1) === 'right'
      ? 1
      : -1;

  const nextZero = input[index + 4]
    .split(' ')
    .slice(-1)[0]
    .slice(0, -1);

  const writeOne = input[index + 2 + 4]
    .split(' ')
    .slice(-1)[0]
    .slice(0, -1);

  const moveOne =
    input[index + 3 + 4]
      .split(' ')
      .slice(-1)[0]
      .slice(0, -1) === 'right'
      ? 1
      : -1;

  const nextOne = input[index + 4 + 4]
    .split(' ')
    .slice(-1)[0]
    .slice(0, -1);

  nodes[name] = {
    0: {
      write: Number(writeZero),
      move: moveZero,
      next: nextZero
    },
    1: {
      write: Number(writeOne),
      move: moveOne,
      next: nextOne
    }
  };
}

const iterations = 12656374;
let state = 'A';
let tape = {};
let cursor = 0;

for (let i = 0; i < iterations; i++) {
  const { write, move, next } = nodes[state][tape[cursor] || 0];

  tape[cursor] = write;
  cursor += move;
  state = next;
}

console.log(Object.values(tape).reduce((a, v) => a + Number(v), 0));
