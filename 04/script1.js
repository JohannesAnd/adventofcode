const from = 136818;
const to = 685979;

let count = 0;

for (let i = from; i <= to; i++) {
  const nums = String(i)
    .split("")
    .map(s => Number(s));
    
  const hasPair = nums.some((n, i, a) => i && n === a[i - 1]);
  const isIncreasing = nums.every((n, i, a) => (i ? n >= a[i - 1] : true));

  if (hasPair && isIncreasing) count++;
}

console.log(count);
