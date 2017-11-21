const {
  countOddPromise,
  countOddCallback,
  countOddAsync,
} = require ('./countOdd');

countOddCallback('./numbers');
countOddPromise('./numbers');
countOddAsync('./numbers');
