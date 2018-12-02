const input = 289326;

const getLength = n => {
  const root = Math.ceil(Math.sqrt(n));
  const diameter = root % 2 === 1 ? root : root + 1;
  const radius = (diameter - 1) / 2;

  const offset = n - Math.pow(diameter - 2, 2) - 1;
  const modOffset = offset % (diameter - 1) - radius + 1;

  return radius + Math.abs(modOffset);
};

const result = getLength(input);

console.log(result);
