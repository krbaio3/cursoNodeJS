const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'old');
const {
  resolveFilePath,
  getFiles,
  getMilisecondsPerDay
} = require('./helper');


const pathResolver = resolveFilePath(dirname);
const files = getFiles(dirname);
const resolveMtime = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (error, stats) => {
      if (error) reject(error);
      resolve(stats.mtime);
    })
  });
};

const hasToBeUnlink = (mtime) => {
  const milisecondsPerWeek = 7 * getMilisecondsPerDay();
  return Date.now() - mtime.getTime() > milisecondsPerWeek;
};

const resolveUnlink = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) reject(error);
      resolve(filePath);
    })
  })
}

files.forEach((file) => {
  const filePath = pathResolver(file);
  resolveMtime(filePath)
    .then((result) => {
      if (hasToBeUnlink(result)) {
        return resolveUnlink(filePath);
      }
      console.log(result);
    })
    .then((file) => {
      if (file) {
        console.log(`File deleted ${file}`);
      }
    })
    .catch((error) => console.error(error));
});
