import fs from 'fs';

const input = fs
  .readFileSync('./10/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => Number(line))
  .sort((a, b) => a - b);

const target = input[input.length - 1] + 3;

const adapters = [0, ...input, target].reduce((acc, adapter, index, array) => {
  acc[adapter] = array.slice(index + 1).filter((v) => adapter + 3 >= v);

  return acc;
}, {});

const cache = {};

function get(adapter) {
  if (cache[adapter]) return cache[adapter];

  if (adapter === target) {
    return 1;
  }

  const value = adapters[adapter].map((a) => get(a)).reduce((a, v) => a + v, 0);

  cache[adapter] = value;

  return value;
}

console.log(get(0));
