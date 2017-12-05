const crypto = require('crypto');

const input = 'ckczppom';

let number = -1;

let hash = '111111';

while (hash.substring(0, 6) !== '000000') {
  number++;

  hash = crypto
    .createHash('md5')
    .update(input + number)
    .digest('hex');
}

console.log(number);
