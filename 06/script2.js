const tree = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .reduce((a, v) => {
    const [c, o] = v.split(")");

    if (c in a) {
      a[c].push(o);
    } else {
      a[c] = [o];
    }

    if (o in a) {
      a[o].push(c);
    } else {
      a[o] = [c];
    }

    return a;
  }, {});

const visited = new Set();
let found = false;

function findSan(node, steps = 0) {
  steps === 3 && console.log(node)
  visited.add(node);

  if (!(node in tree) || found) return 0;

  if (node === "SAN") return steps;

  return tree[node]
    .filter(node => !visited.has(node))
    .reduce((a, v) => a + findSan(v, steps + 1), 0);
}

console.log(findSan("YOU") - 2);
