import fs from 'fs';

const required = {
  byr(val) {
    return 1920 <= val && val <= 2002;
  },
  iyr(val) {
    return 2010 <= val && val <= 2020;
  },
  eyr(val) {
    return 2020 <= val && val <= 2030;
  },
  hgt(val) {
    const unit = val.slice(-2);
    const value = val.slice(0, -2);

    if (unit === 'cm') return 150 <= value && value <= 193;
    if (unit === 'in') return 59 <= value && value <= 76;

    return false;
  },
  hcl(val) {
    return /^\#[0-9a-f]{6}$/.test(val);
  },
  ecl(val) {
    const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

    return valid.includes(val);
  },
  pid(val) {
    return /^[0-9]{9}$/.test(val);
  },
};

const result = fs
  .readFileSync('./04/input.txt', { encoding: 'utf-8' })
  .split('\n\n')
  .map((s) => Object.fromEntries(s.split(/ |\n/).map((v) => v.split(':'))))
  .filter((passport) =>
    Object.entries(required).every(([property, test]) => {
      return passport[property] && test(passport[property]);
    })
  ).length;

console.log(result);
