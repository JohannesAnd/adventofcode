const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const bots = input.split('\n').reduce((a, i) => {
  const inst = i.split(' ');

  if (inst[0] === 'value') {
    const name = inst[4] + inst[5];

    if (name in a) {
      a[name].values.push(inst[1]);
    } else {
      a[name] = {
        low: null,
        high: null,
        values: [inst[1]]
      };
    }
  } else {
    const name = inst[0] + inst[1];

    const low = inst[5] + inst[6];
    const high = inst[10] + inst[11];

    if (!(low in a)) a[low] = { values: [] };
    if (!(high in a)) a[high] = { values: [] };

    if (name in a) {
      a[name].low = low;
      a[name].high = high;
    } else {
      a[name] = {
        low: low,
        high: high,
        values: []
      };
    }
  }

  return a;
}, {});

const start = Object.keys(bots).filter(b => bots[b].values.length > 1)[0];

const distribute = botName => {
  const bot = bots[botName];
  if (bot.low && bot.high && bot.values.length > 1) {
    const high = Math.max(...bot.values);
    const low = Math.min(...bot.values);

    bots[botName] = { ...bots[botName], values: [] };

    bots[bot.low].values.push(low);
    distribute(bot.low);
    bots[bot.high].values.push(high);
    distribute(bot.high);
  }
};
distribute(start);

console.log(
  bots.output0.values[0] * bots.output1.values[0] * bots.output2.values[0]
);
