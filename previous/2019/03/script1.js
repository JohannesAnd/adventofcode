const [wire1, wire2] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map(w => w.split(","));

function computePoints(wire) {
  let x = 0;
  let y = 0;

  return wire.flatMap(element => {
    const direction = element[0];
    const length = Number(element.substring(1));
    let points = [];

    switch (direction) {
      case "L":
        points = new Array(length).fill().map((_, i) => `${x - i - 1}:${y}`);
        x -= length;

        break;
      case "R":
        points = new Array(length).fill().map((_, i) => `${x + i + 1}:${y}`);
        x += length;

        break;
      case "U":
        points = new Array(length).fill().map((_, i) => `${x}:${y + i + 1}`);
        y += length;

        break;
      case "D":
        points = new Array(length).fill().map((_, i) => `${x}:${y - i - 1}`);
        y -= length;
    }

    return points;
  });
}

const wire1Points = computePoints(wire1);

const crossings = computePoints(wire2).filter(point =>
  wire1Points.includes(point)
);

const sortedDistances = crossings
  .map(point => {
    const [x, y] = point.split(":").map(p => Number(p));

    return x + y;
  })
  .sort((a, b) => a - b);

console.log(sortedDistances[0]);
