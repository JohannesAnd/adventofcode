const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const instructions = input.split('\n');

const registers = { a: 0 };

let pointer = 0;
let lastSound = 0;
let recovered = false;

while (pointer >= 0 && pointer < instructions.length && !recovered) {
  const [op, arg1, arg2] = instructions[pointer].split(' ');

  const val1 = arg1 in registers ? registers[arg1] : Number(arg1);
  const val2 = arg2 in registers ? registers[arg2] : Number(arg2);

  switch (op) {
    case 'snd':
      lastSound = val1;
      pointer++;
      break;
    case 'set':
      registers[arg1] = val2;
      pointer++;
      break;
    case 'add':
      registers[arg1] += val2;
      pointer++;
      break;
    case 'mul':
      registers[arg1] *= val2;
      pointer++;
      break;
    case 'mod':
      registers[arg1] %= val2;
      pointer++;
      break;
    case 'rcv':
      console.log('Recovered', lastSound);
      recovered = true;
      break;
    case 'jgz':
      pointer += val1 > 0 ? val2 : 1;
      break;
  }
}
