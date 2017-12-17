const fs = require('fs');

const step = 366;

let buffer = [0];
let pointer = 0;

for (let i = 1; i <= 50000000; i++) {
  pointer = (pointer + step) % buffer.length + 1;
  buffer.splice(pointer, 0, i);
}

console.log(buffer[buffer.indexOf(0) + 1]);
