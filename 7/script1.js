const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const nodes = input.split('\n').reduce((nodes, node) => {
  const [string, children] = node.split('->');

  const [name, number] = string.split('(');

  nodes[name.trim()] = {
    value: Number(number.trim().substring(0, number.trim().length - 1)),
    children: children
      ? children
          .trim()
          .split(',')
          .map(c => c.trim())
      : null
  };

  return nodes;
}, {});

const children = Object.keys(nodes).reduce(
  (a, d) => a.concat(nodes[d].children || []),
  []
);

const roots = Object.keys(nodes).filter(n => !(children.indexOf(n) >= 0));

console.log(roots[0]);
