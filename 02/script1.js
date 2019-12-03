const numbers = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .split(",")
  .map(n => Number(n));

function run() {
  numbers[1] = 12;
  numbers[2] = 2
  for (let i = 0; i < numbers.length; i += 4) {
    switch (numbers[i]) {
      case 1:
        numbers[numbers[i + 3]] =
          numbers[numbers[i + 1]] + numbers[numbers[i + 2]];
        break;
      case 2:
        numbers[numbers[i + 3]] =
          numbers[numbers[i + 1]] * numbers[numbers[i + 2]];
        break;
      case 99:
        return numbers[0];
    }
  }
}

console.log(run());
