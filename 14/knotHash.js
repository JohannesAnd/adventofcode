module.exports = input => {
  const lengths = input
    .split('')
    .map(c => c.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);

  const xor = list =>
    list.length > 1 ? list[0] ^ xor(list.slice(1)) : list[0];

  const hash = (lengths, iterations) => {
    const list = new Array(256).fill().map((e, i) => i);
    let currentPosition = 0;
    let skipSize = 0;

    for (let i = 0; i < iterations; i++) {
      lengths.forEach(length => {
        const end = (currentPosition + length) % list.length;

        if (currentPosition === end) {
        } else if (currentPosition < end) {
          const newArray = list
            .slice(currentPosition, currentPosition + length)
            .reverse();

          list.splice(currentPosition, length, ...newArray);
        } else {
          const newArray = []
            .concat(list.slice(currentPosition), list.slice(0, end))
            .reverse();

          list.splice(
            currentPosition,
            list.length,
            ...newArray.slice(0, list.length - currentPosition)
          );
          list.splice(0, end, ...newArray.slice(list.length - currentPosition));
        }

        currentPosition = (currentPosition + length + skipSize) % list.length;
        skipSize++;
      });
    }

    return list;
  };

  const dense = list => {
    const res = [];

    for (let i = 0; i < list.length; i += 16) {
      res.push(xor(list.slice(i, i + 16)));
    }

    return res;
  };

  const pad = n => (n.length < 2 ? '0' + n : n);

  const result = dense(hash(lengths, 64))
    .map(n => n.toString(16))
    .map(pad)
    .join('');

  return result;
};
