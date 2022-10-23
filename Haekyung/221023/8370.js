const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

console.log(input);
console.log(input[0] * input[1] + input[2] * input[3]);
