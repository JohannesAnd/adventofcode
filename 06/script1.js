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

    return a;
  }, {});

function getOrbit(node, level = 0) {
  if (!(node in tree)) return level;

  return tree[node].reduce((a, v) => a + getOrbit(v, level + 1), level);
}

console.log(getOrbit('COM'))