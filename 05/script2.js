const h = { get: (o, i) => (i in o ? o[i] : -1) };

const from = 136818;
const to = 685979;

let count = 0;

for (let i = from; i <= to; i++) {
  const nums = String(i)
    .split("")
    .map(s => Number(s));

  const proxy = new Proxy(nums, handler);
  const hasPair = proxy.some(
    (number, index, array) =>
      number === array[index - 1] &&
      number !== array[index - 2] &&
      number !== array[index + 1]
  );
  const isIncreasing = proxy.every(
    (number, index, array) => number >= array[index - 1]
  );

  if (hasPair && isIncreasing) count++;
}

console.log(count);
