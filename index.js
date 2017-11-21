const fs = require('fs');

const fileSize = (fileName, cb) => {
  if (typeof fileName !== 'string') {
    return cb(new TypeError('args should be string'));
  }

  fs.stat(fileName, (err, stats) => {
    if (err) return cb(err);
    cb(null, stats.size);
  })
};

fileSize(__filename, (err, size) => {
  if (err) {
    throw err;
  }

  console.log(`Size in KB: ${size / 1024}`);
});

console.log('Hello');


// si cambiamos los argumentosde fileSize,__filename => 1,
// da error porque la funcion esta mal disenada porque funciona todo como una funcion sincrona en vez
// de asincrona
