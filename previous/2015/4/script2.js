const crypto = require('crypto');

const input = 'ckczppom';

let number = -1;

let hash = '11111';

while (hash.substring(0, 5) !== '00000') {
  number++;

  hash = crypto
    .createHash('md5')
    .update(input + number)
    .digest('hex');
}

console.log(number);
