const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let line = 'abcdefghijklmnop'.split('');

const rotate = (arr, n) => {
  const L = arr.length;
  return arr.slice(L - n).concat(arr.slice(0, L - n));
};

const instructions = input.split(',');

const iterations = 1000000000 % 60;

let i = 0;

while (i < iterations) {
  i++;
  instructions.forEach(inst => {
    let p1, p2;

    switch (inst[0]) {
      case 's':
        line = rotate(line, Number(inst.substring(1)));
        break;
      case 'x':
        [p1, p2] = inst
          .substring(1)
          .split('/')
          .map(Number);

        [line[p1], line[p2]] = [line[p2], line[p1]];
        break;
      case 'p':
        [p1, p2] = inst
          .substring(1)
          .split('/')
          .map(d => line.indexOf(d));

        [line[p1], line[p2]] = [line[p2], line[p1]];
        break;
    }
  });
}

console.log(line.join(''));
