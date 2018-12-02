const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const instructions = input.split('\n');

const registers = { 0: { p: 0 }, 1: { p: 1 } };
const pointers = { 0: 0, 1: 0 };
const waiting = { 0: false, 1: false };
const queues = { 0: [], 1: [] };

let result = 0;

const run = pid => {
  if (pointers[pid] >= 0 && pointers[pid] < instructions.length) {
    const [op, arg1, arg2] = instructions[pointers[pid]].split(' ');

    const val1 = arg1 in registers[pid] ? registers[pid][arg1] : Number(arg1);
    const val2 = arg2 in registers[pid] ? registers[pid][arg2] : Number(arg2);

    switch (op) {
      case 'snd':
        queues[pid === 0 ? 1 : 0].push(val1);
        waiting[pid === 0 ? 1 : 0] = false;
        pointers[pid]++;
        if (pid === 1) result++;
        break;
      case 'set':
        registers[pid][arg1] = val2;
        pointers[pid]++;
        break;
      case 'add':
        registers[pid][arg1] += val2;
        pointers[pid]++;
        break;
      case 'mul':
        registers[pid][arg1] *= val2;
        pointers[pid]++;
        break;
      case 'mod':
        registers[pid][arg1] %= val2;
        pointers[pid]++;
        break;
      case 'rcv':
        if (queues[pid].length > 0) {
          registers[pid][arg1] = queues[pid].shift();
          pointers[pid]++;
        } else {
          waiting[pid] = true;
        }
        break;
      case 'jgz':
        pointers[pid] += val1 > 0 ? val2 : 1;
        break;
    }
  } else {
    waiting[pid] = true;
  }
};

let turn = 0;

while (!waiting[0] || !waiting[1]) {
  if (!waiting[turn]) {
    run(turn);
  }

  turn = turn === 0 ? 1 : 0;
}

console.log(result);
