import { buildMap } from './utils.js';

const SHINY_GOLD_BAG = 'shiny gold bag';

const map = buildMap();

function getBagCount(bag) {
  return Object.entries(map[bag] || {})
    .map(([childBag, count]) => getBagCount(childBag) * count)
    .reduce((acc, val) => acc + val, 1);
}

console.log(getBagCount(SHINY_GOLD_BAG) - 1);
