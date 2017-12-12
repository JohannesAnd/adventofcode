const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const regs = {
  a: 0,
  b: 0,
  c: 0,
  d: 0
};

const instructions = input.split('\n').map(i => i.split(' '));
let pointer = 0;

while (pointer < instructions.length) {
  const [op, arg1, arg2] = instructions[pointer];
  const val1 = arg1 in regs ? regs[arg1] : Number(arg1);
  const val2 = arg2 in regs ? regs[arg2] : Number(arg2);

  switch (op) {
    case 'cpy':
      regs[arg2] = val1;
      pointer++;
      break;
    case 'jnz':
      pointer += val1 !== 0 ? val2 : 1;
      break;
    case 'inc':
      regs[arg1] += 1;
      pointer++;
      break;
    case 'dec':
      regs[arg1] -= 1;
      pointer++;
      break;
  }
}

console.log(regs.a);
