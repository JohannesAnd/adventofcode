import fs from 'fs';
import { execute } from './utils.js';

const instructions = fs
  .readFileSync('./08/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => line.split(' '));

function tryCombinations() {
  for (let i = 0; i < instructions.length; i++) {
    const [op, arg] = instructions[i];

    if (['jmp', 'nop'].includes(op)) {
      const { terminated, acc } = execute([
        ...instructions.slice(0, i),
        [op === 'nop' ? 'jmp' : 'nop', arg],
        ...instructions.slice(i + 1),
      ]);

      if (terminated) return acc;
    }
  }
}

console.log(tryCombinations());
