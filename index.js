const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeOut');
  }, 0);

  setImmediate(() => {
    console.log('inmediate');
  });
});


// setTimeout(() => {
//   console.log('timeOut');
// }, 0);

// setImmediate(() => {
//   console.log('inmediate');
// });
