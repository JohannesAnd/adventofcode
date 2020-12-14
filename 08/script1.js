import fs from 'fs';
import { execute } from './utils.js';

const instructions = fs
  .readFileSync('./08/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => line.split(' '));

console.log(execute(instructions).acc);
