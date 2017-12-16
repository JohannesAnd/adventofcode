const input = 2900000;

let house = 600000;
let presents = 0;
let max = 0;

while (presents < input) {
  house++;

  let count = 0;

  for (let i = 1; i <= house; i++) {
    if (house % i === 0) {
      count += i;
    }
  }
  if (count > max) {
    max = count;
    console.log(house, max / input);
  }
  presents = count;
}

console.log(house);
