const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const map = input.split('\n').reduce((a, g) => {
  const inst = g.split(' ');

  if (inst.length === 3) {
    a[inst[2]] = {
      operation: 'CONNECT',
      arg1: inst[0]
    };
  } else if (inst.length === 4) {
    a[inst[3]] = {
      operation: 'NOT',
      arg1: inst[1]
    };
  } else {
    a[inst[4]] = {
      operation: inst[1],
      arg1: inst[0],
      arg2: inst[2]
    };
  }

  return a;
}, {});

const cache = {};

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const calculate = (port, name) => {
  if (!port) return 0;

  if (name in cache) return cache[name];

  const arg1 = isNumeric(port.arg1)
    ? Number(port.arg1)
    : calculate(map[port.arg1], port.arg1);
  const arg2 =
    port.arg2 && isNumeric(port.arg2)
      ? Number(port.arg2)
      : calculate(map[port.arg2], port.arg2);

  switch (port.operation) {
    case 'AND':
      cache[name] = arg1 & arg2;
      return arg1 & arg2;
    case 'OR':
      cache[name] = arg1 | arg2;
      return arg1 | arg2;
    case 'LSHIFT':
      cache[name] = arg1 << arg2;
      return arg1 << arg2;
    case 'RSHIFT':
      cache[name] = arg1 >> arg2;
      return arg1 >> arg2;
    case 'NOT':
      cache[name] = 65535 - arg1;
      return 65535 - arg1;
    case 'CONNECT':
      cache[name] = arg1;
      return arg1;
  }
};

console.log(calculate(map.a));
