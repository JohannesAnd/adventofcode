module.exports.hexToBin = hex => {
  let bin = '';

  for (let i = 0; i < hex.length; i++) {
    const char = hex.charAt(i);
    let string = parseInt(char, 16).toString(2);

    while (string.length < 4) {
      string = '0' + string;
    }

    bin += string;
  }

  return bin;
};

module.exports.findX = board => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 'X') return { x, y };
    }
  }
};

module.exports.getConnected = (board, startPos) => {
  const open = { [JSON.stringify(startPos)]: true };
  const closed = {};

  const get = (x, y) => {
    if (
      x >= 0 &&
      y >= 0 &&
      x < board.length &&
      y < board[x].length &&
      board[x][y] === 'X' &&
      !open[JSON.stringify({ x, y })] &&
      !closed[JSON.stringify({ x, y })]
    ) {
      return { x, y };
    }
  };

  const getNeighbours = (x, y) => {
    return [get(x + 1, y), get(x, y + 1), get(x - 1, y), get(x, y - 1)].filter(
      d => d
    );
  };

  while (Object.keys(open).length > 0) {
    const key = Object.keys(open)[0];
    const { x, y } = JSON.parse(key);

    const neighbors = getNeighbours(x, y).forEach(n => {
      open[JSON.stringify(n)] = true;
    });

    delete open[key];
    closed[key] = true;
  }

  return Object.keys(closed).map(d => JSON.parse(d));
};
