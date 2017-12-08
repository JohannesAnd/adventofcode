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

let highest = 0;

const registers = input.split('\n').reduce((regs, inst) => {
  const [reg, task, number, _, condReg, op, condVal] = inst.split(' ');

  if (evaluateBool(op, regs[condReg] || 0, Number(condVal))) {
    const newValue =
      (regs[reg] || 0) + (task === 'inc' ? Number(number) : -Number(number));

    regs[reg] = newValue;

    highest = Math.max(highest, newValue);
  }

  return regs;
}, {});

console.log(highest);
