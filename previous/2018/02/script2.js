const fs = require('fs');

const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n');

function find() {
  for (let i = 0; i < lines.length; i++) {
    for (let j = i; j < lines.length; j++) {
      let diff = [];
      
      for (let l = 0; l < lines[0].length; l++) {
        if (lines[i][l] !== lines[j][l]) {
          diff.push(l);
        }
      }
      
      if (diff.length === 1) {
        return lines[i].substring(0, diff[0]) + lines[i].substring(diff[0] + 1);
      }
    }
  }
}

console.log(find());