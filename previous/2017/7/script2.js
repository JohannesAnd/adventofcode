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
      : []
  };

  return nodes;
}, {});

const children = Object.keys(nodes).reduce(
  (a, d) => a.concat(nodes[d].children || []),
  []
);

const rootNode = Object.keys(nodes).filter(n => !(children.indexOf(n) >= 0))[0];

function buildTree(node) {
  const children = nodes[node].children.map(c => buildTree(c));

  const sumOfChildren =
    children.reduce((a, c) => a + c.sumOfChildren, 0) + nodes[node].value;

  const childrenAreEqual = children.length
    ? !!children.reduce(
        (a, c) => (a.sumOfChildren === c.sumOfChildren ? a : NaN)
      )
    : true;

  return {
    name: node,
    value: nodes[node].value,
    children: childrenAreEqual ? [] : children,
    sumOfChildren,
    childrenAreEqual
  };
}

const tree = buildTree(rootNode);

console.log(JSON.stringify(tree, null, 2));
