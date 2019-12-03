function getFuel(mass) {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) return 0;

  return fuel + getFuel(fuel);
}

console.log(
  require("fs")
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .map(line => Number(line))
    .map(mass => getFuel(mass))
    .reduce((s, v) => s + v, 0)
);
