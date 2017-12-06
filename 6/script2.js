const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const memory = input.split(' ').map(Number);
const mutations = {};
let loop = false;
let steps = 0;

while (true) {
  if (loop) {
    steps++;
  }
  const index = memory.indexOf(Math.max(...memory));
  const toAdd = Math.floor(memory[index] / memory.length);
  const remainder = memory[index] % memory.length;

  for (let i = 0; i < memory.length; i++) {
    const insertIndex = (index + 1 + i) % memory.length;

    if (insertIndex === index) {
      memory[insertIndex] = i < remainder - 1 ? toAdd + 1 : toAdd;
    } else {
      memory[insertIndex] =
        i < remainder
          ? memory[insertIndex] + toAdd + 1
          : memory[insertIndex] + toAdd;
    }
  }

  if (memory.join('+') in mutations) {
    if (!loop) {
      loop = memory.join('+');
      console.log(loop);
    } else {
      if (loop === memory.join('+')) {
        break;
      }
    }
  }

  mutations[memory.join('+')] = true;
}

console.log('Steps: ', steps);
