const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const instructions = input.split('\n');

const registers = { a: 0, b: 0, c: 0, e: 0, f: 0, g: 0, h: 0 };

let pointer = 0;
let mulCount = 0;

while (pointer >= 0 && pointer < instructions.length) {
  const [op, arg1, arg2] = instructions[pointer].split(' ');

  const val1 = arg1 in registers ? registers[arg1] : Number(arg1);
  const val2 = arg2 in registers ? registers[arg2] : Number(arg2);

  switch (op) {
    case 'set':
      registers[arg1] = val2;
      pointer++;
      break;
    case 'sub':
      registers[arg1] -= val2;
      pointer++;
      break;
    case 'mul':
      registers[arg1] *= val2;
      pointer++;
      mulCount++;
      break;
    case 'jnz':
      pointer += val1 === 0 ? 1 : val2;
      break;
  }
}

console.log(mulCount);
