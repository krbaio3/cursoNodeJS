const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'old');
const {
  convertToLocalDate,
  convertToUnixEpoch,
  resolveFilePath
} = require('./helper');

if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname);
}

const writeFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        reject(error);
      }
      resolve('success');
    })
  })
};

const changeTimeStamp = (filePath, time) => {
  return new Promise((resolve, reject) => {
    fs.utimes(filePath, time, time, (error) => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
}

const iterations = new Array(10).fill(null);
const pathResolver = resolveFilePath(dirname);
iterations.forEach((_, index) => {
  const filePath = pathResolver(`file${index}`);
  const unixEpoch = convertToUnixEpoch(index);
  const time = convertToLocalDate(unixEpoch).toLocaleString();
  writeFile(filePath, time)
    .then(() => {
      return changeTimeStamp(filePath, unixEpoch);
    })
    .catch((error) => console.error(error));
});
