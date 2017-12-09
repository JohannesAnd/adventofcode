const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const removeExclamations = s => {
  let string = s.substring(0, s.length);
  let i = s.indexOf('!');

  while (i >= 0) {
    string = string.substring(0, i) + string.substring(i + 2);
    i = string.indexOf('!');
  }

  return string;
};

const removeGarbage = s => {
  let string = s.substring(0, s.length);
  let start = s.indexOf('<');
  let end = s.indexOf('>');

  while (start >= 0 && end >= 0) {
    string = string.substring(0, start) + string.substring(end + 1);
    start = string.indexOf('<');
    end = string.indexOf('>');
  }

  return string;
};

const clean = removeGarbage(removeExclamations(input));

let score = 0;
let depth = 0;

for (let i = 0; i < clean.length; i++) {
  switch (clean[i]) {
    case '{':
      depth++;
      score += depth;
      break;
    case '}':
      depth--;
      break;
  }
}

console.log(score);
