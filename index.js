const fs = require('fs');

const readFileAsArray = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err);
    }
    const lines = data.toString().trim().split('\n');
    cb(null, lines);
  });
};

readFileAsArray('./numbers', (error, lines) => {
  if(error){
    console.error(error);
    throw error;
  }

  const number = lines.map(Number);
  const oddNumber = number.filter((number) => number %2 ===1);
  console.log(`Odd numbers count: ${oddNumber.length}`)
});
