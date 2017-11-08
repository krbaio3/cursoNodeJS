const maxTime = 2000;

const intSqrt = (value, callback) => {
  const waitTime = Math.floor((Math.random() * (maxTime + 1)));
  const result = Math.sqrt(value);
  (Number.isInteger(result)) ?
  callback(null, result, waitTime):
    callback(new Error('Not integer square'))
}

module.exports.intSqrt = intSqrt;
