const fs = require('fs');

const readFileAsArray = (file, cb = () => {}) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(error)
        return cb(err);
      }

      const lines = data.toString().trim().split('\n');
      resolve(lines);
      cb(null, lines);
    });
  })
};

readFileAsArray('./numbers', (error, lines) => {
if (error) {
  throw error;
}

const number = lines.map(Number);
const oddNumber = number.filter((number) => number % 2 === 1);
console.log(`Odd numbers count: ${oddNumber.length}`);
})

// .then((lines) => {
//     const number = lines.map(Number);
//     const oddNumber = number.filter((number) => number % 2 === 1);
//     console.log(`Odd numbers count: ${oddNumber.length}`)
//   })
//   .catch((error) => {
//     throw error;
//   });
