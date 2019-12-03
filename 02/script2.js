const numbers = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .split(",")
  .map(n => Number(n));

function run(noun, verb) {
  const memory = numbers.map(n => n);

  memory[1] = noun;
  memory[2] = verb;

  for (let i = 0; i < memory.length; i += 4) {
    switch (memory[i]) {
      case 1:
        memory[memory[i + 3]] = memory[memory[i + 1]] + memory[memory[i + 2]];
        break;
      case 2:
        memory[memory[i + 3]] = memory[memory[i + 1]] * memory[memory[i + 2]];
        break;
      case 99:
        if (19690720 === memory[0]) {
          return noun * 100 + verb;
        } else {
          return null;
        }
    }
  }
}

for (let noun = 0; noun < 99; noun++) {
  for (let verb = 0; verb < 99; verb++) {
    const res = run(noun, verb);

    if (res) return console.log(res);
  }
}
