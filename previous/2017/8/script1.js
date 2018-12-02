const fs = require('fs');

const evaluateBool = (op, val1, val2) => {
  switch (op) {
    case '<':
      return val1 < val2;
    case '>':
      return val1 > val2;
    case '<=':
      return val1 <= val2;
    case '>=':
      return val1 >= val2;
    case '==':
      return val1 === val2;
    case '!=':
      return val1 != val2;
    default:
      console.log('Unknown operation', op);
      return false;
  }
};

const input = fs.readFileSync('./input.txt', 'utf-8');

const registers = input.split('\n').reduce((regs, inst) => {
  const [reg, task, number, _, condReg, op, condVal] = inst.split(' ');

  if (evaluateBool(op, regs[condReg] || 0, Number(condVal))) {
    regs[reg] =
      (regs[reg] || 0) + (task === 'inc' ? Number(number) : -Number(number));
  }

  return regs;
}, {});

console.log(registers);
