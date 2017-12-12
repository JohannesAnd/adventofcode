const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const { distances, cities } = input.split('\n').reduce(
  (a, e) => {
    const [from, , to, , distance] = e.split(' ');

    if (from in a.distances) {
      a.distances[from][to] = Number(distance);
    } else {
      a.distances[from] = {
        [to]: Number(distance)
      };
    }

    if (to in a.distances) {
      a.distances[to][from] = Number(distance);
    } else {
      a.distances[to] = {
        [from]: Number(distance)
      };
    }

    a.cities[from] = true;
    a.cities[to] = true;

    return a;
  },
  { distances: {}, cities: {} }
);

const getRoute = (prev = []) => {
  const remaining = Object.keys(cities).filter(c => prev.indexOf(c) === -1);

  if (remaining.length === 0) return [prev];

  return remaining
    .map(city => getRoute(prev.concat([city])))
    .reduce((a, d) => a.concat(d), []);
};

const result = getRoute()
  .map(route => {
    let distance = 0;

    for (let i = 0; i < route.length - 1; i++) {
      const from = route[i];
      const to = route[i + 1];

      if (from in distances) {
        if (to in distances[from]) {
          distance += distances[from][to];
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return distance;
  })
  .filter(d => d !== false);

console.log(Math.max(...result));
