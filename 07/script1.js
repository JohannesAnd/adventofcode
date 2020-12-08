import { buildMap } from './utils.js';

const SHINY_GOLD_BAG = 'shiny gold bag';

const map = buildMap();

function canContainGoldBag(bag) {
  if (bag === SHINY_GOLD_BAG) return true;
  if (!map[bag]) return false;

  return Object.keys(map[bag]).some((childBag) => canContainGoldBag(childBag));
}

const result = Object.keys(map)
  .filter((bag) => bag !== SHINY_GOLD_BAG)
  .filter((bag) => canContainGoldBag(bag));

console.log(Object.keys(result).length);
