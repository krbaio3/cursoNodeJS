const fs = require('fs');

const readFileAsArray = (file, cb = () => { }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject(error);
        return cb(error);
      }

      const lines = data.toString().trim().split('\n');
      resolve(lines);
      cb(null, lines);
    });
  })
};

const countOddCallback = (file) => {
  readFileAsArray('./numbers', (error, lines) => {
    if (error) {
      throw error;
    }

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter((number) => number % 2 === 1);
    console.log(`Odd numbers count: ${oddNumbers.length}`);
  });
};

const countOddPromise = (file) => {
  readFileAsArray('./numbers')
    .then((lines) => {
      const numbers = lines.map(Number);
      const oddNumbers = numbers.filter((number) => number % 2 === 1);
      console.log(`Odd numbers count: ${oddNumbers.length}`);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  countOddCallback,
  countOddPromise,
}

