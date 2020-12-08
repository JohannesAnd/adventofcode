import fs from 'fs';

export function buildMap() {
  return fs
    .readFileSync('./07/input.txt', { encoding: 'utf-8' })
    .split('\n')
    .reduce((acc, value) => {
      const [container, contains] = value
        .replace(/bags/g, 'bag')
        .replace(/\./, '')
        .split(' contain ');

      if ('no other bag' === contains) {
        acc[container] = null;
      } else {
        acc[container] = Object.fromEntries(
          contains.split(',').map((val) => {
            const [count, ...bag] = val.trim().split(' ');

            return [bag.join(' '), count];
          })
        );
      }

      return acc;
    }, {});
}
