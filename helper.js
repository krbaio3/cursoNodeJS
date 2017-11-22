const path = require('path');
const fs = require('fs');

exports.resolveFilePath = (dirname) => (file) => path.join(dirname, file);

exports.getFiles = (dirname) => fs.readdirSync(dirname);

const getMilisecondsPerDay = () => 24 * 60 * 60 * 1000;

exports.getMilisecondsPerDay = getMilisecondsPerDay;

exports.convertToUnixEpoch = (dayNumber) => (
  (Date.now() - dayNumber * getMilisecondsPerDay()) / 1000
);

exports.convertToLocalDate = (unixEpoch) => (
  new Date(unixEpoch * 1000)
);
