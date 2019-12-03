console.log(
  require("fs")
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .map(line => Number(line))
    .map(mass => Math.floor(mass / 3) - 2)
    .reduce((s, v) => s + v, 0)
);
