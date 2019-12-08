const instructions = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .split(",")
  .map(n => Number(n));

let pointer = 0;
let halted = false;
let input = 5;

function getCodeAndModes(memory) {
  const code = memory
    .toString()
    .split("")
    .reverse()
    .join("");

  const opCode = Number(
    code
      .substring(0, 2)
      .split("")
      .reverse()
      .join("")
  );
  const modes = code
    .substring(2)
    .split("")
    .map(m => Number(m));

  return { opCode, modes };
}

while (pointer < instructions.length && !halted) {
  const { opCode, modes } = getCodeAndModes(instructions[pointer]);

  switch (opCode) {
    case 1:
      instructions[modes[2] ? pointer + 3 : instructions[pointer + 3]] =
        instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]] +
        instructions[modes[1] ? pointer + 2 : instructions[pointer + 2]];
      pointer += 4;
      break;
    case 2:
      instructions[modes[2] ? pointer + 3 : instructions[pointer + 3]] =
        instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]] *
        instructions[modes[1] ? pointer + 2 : instructions[pointer + 2]];
      pointer += 4;
      break;
    case 3:
      instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]] = input;
      pointer += 2;
      break;
    case 4:
      console.log(
        instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]]
      );
      pointer += 2;
      break;
    case 5:
      if (instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]]) {
        pointer =
          instructions[modes[1] ? pointer + 2 : instructions[pointer + 2]];
      } else {
        pointer += 3;
      }
      break;
    case 6:
      if (instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]]) {
        pointer += 3;
      } else {
        pointer =
          instructions[modes[1] ? pointer + 2 : instructions[pointer + 2]];
      }
      break;
    case 7:
      instructions[modes[2] ? pointer + 3 : instructions[pointer + 3]] = Number(
        instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]] <
          instructions[modes[1] ? pointer + 2 : instructions[pointer + 2]]
      );
      pointer += 4;
      break;
    case 8:
      instructions[modes[2] ? pointer + 3 : instructions[pointer + 3]] = Number(
        instructions[modes[0] ? pointer + 1 : instructions[pointer + 1]] ===
          instructions[modes[1] ? pointer + 2 : instructions[pointer + 2]]
      );
      pointer += 4;
      break;
    case 99:
      halted = true;
  }
}
