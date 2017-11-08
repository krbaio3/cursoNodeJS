const buffer = Buffer.alloc(8);
console.log(buffer);

const buffer2 = Buffer.allocUnsafe(8);
console.log(buffer2);

const string = 'avi\'on';
// const buffer3 = Buffer.from(string);
// console.log(buffer3.toString());

const buffer3 = Buffer.from(string, 'ascii');
console.log(string, string.toString(), string.length);
console.log(buffer3, buffer3.toString(), buffer3.length);
