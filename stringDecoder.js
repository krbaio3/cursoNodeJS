const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

//  0xE2, 0x82, 0xAC

// const buffer = Buffer.from([0xE2, 0x82, 0xAC]);
// console.log(buffer.toString());

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    const buffer = Buffer.from([chunk]);
    console.log('With .toString: ', buffer.toString());
    console.log('With StringDecoder: ', decoder.write(buffer));
  }
});
