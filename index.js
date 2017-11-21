const fs = require('fs');

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        return cb(err);
      }

      const lines = data.toString().trim().split('\n');
      resolve(lines);
    });
  })
};

readFileAsArray('./numbers')
  .then((lines) => {
    const number = lines.map(Number);
    const oddNumber = number.filter((number) => number % 2 === 1);
    console.log(`Odd numbers count: ${oddNumber.length}`)
  })
  .catch((error) => {
    throw error;
  });
