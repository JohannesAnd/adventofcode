const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let currentPosition = 0;
let skipSize = 0;

const lengths = input.split(',').map(Number);

const list = new Array(256).fill().map((e, i) => i);

lengths.forEach(length => {
  const end = (currentPosition + length) % list.length;

  if (currentPosition === end) {
  } else if (currentPosition < end) {
    const newArray = list
      .slice(currentPosition, currentPosition + length)
      .reverse();

    list.splice(currentPosition, length, ...newArray);
  } else {
    const newArray = []
      .concat(list.slice(currentPosition), list.slice(0, end))
      .reverse();

    list.splice(
      currentPosition,
      list.length,
      ...newArray.slice(0, list.length - currentPosition)
    );
    list.splice(0, end, ...newArray.slice(list.length - currentPosition));
  }

  currentPosition = (currentPosition + length + skipSize) % list.length;
  skipSize++;
});

console.log(list[0] * list[1]);
