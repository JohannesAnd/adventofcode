const input = 289326;

const getValue = (matrix, posX, posY) => {
  let sum = 0;

  for (var x = posX - 1; x <= posX + 1; x++) {
    for (var y = posY - 1; y <= posY + 1; y++) {
      if (matrix[x + ',' + y]) {
        sum += matrix[x + ',' + y];
      }
    }
  }
  return sum;
};

let x = 0;
let y = 0;
let matrix = {};

matrix[x + ',' + y] = 1;

while (true) {
  const val = getValue(matrix, x, y);

  if (val >= input) {
    console.log(val);
    break;
  }

  matrix[x + ',' + y] = val;

  if ((x !== y || x >= 0) && Math.abs(x) <= Math.abs(y)) {
    x += y >= 0 ? 1 : -1;
  } else {
    y += x >= 0 ? -1 : 1;
  }
}
