const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const json = JSON.parse(input);

const getSum = data => {
  if (Number.isInteger(data)) {
    return data;
  }
  if (data instanceof Array) {
    return data.map(getSum).reduce((a, n) => a + n, 0);
  }
  if (data instanceof Object) {
    if (Object.values(data).indexOf('red') >= 0) {
      return 0;
    }
    return Object.values(data)
      .map(getSum)
      .reduce((a, n) => a + n, 0);
  }
  return 0;
};

const result = getSum(json);

console.log(result);
