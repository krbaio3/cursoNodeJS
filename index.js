const m = require('./mathfun');

const processResult = (error, result, time) => {
  if (error) {
    console.log(`ERROR: ${error.message}`);
  }else{
console.log(`The result is: ${result} (${time} ms)`)
  }
};
[5,25,4,8,64].forEach(value => m.intSqrt(value, processResult));
