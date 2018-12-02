const fs = require('fs');

const step = 366;

let pointer = 0;

let afterZeroValue = false;

for (let i = 1; i <= 50000000; i++) {
  pointer = (pointer + step) % i + 1;

  if (pointer === 1) {
    afterZeroValue = i;
  }
}

console.log(afterZeroValue, zeroPointer);
