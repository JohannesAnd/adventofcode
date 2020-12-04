import fs from 'fs';

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const result = fs
  .readFileSync('./04/input.txt', { encoding: 'utf-8' })
  .split('\n\n')
  .map((s) => Object.fromEntries(s.split(/ |\n/).map((v) => v.split(':'))))
  .filter((passport) => required.every((property) => passport[property]))
  .length;

console.log(result);
