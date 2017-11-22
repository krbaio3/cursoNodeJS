const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

class WithTime extends EventEmitter {

  execute(asyncFun, ...args) {
    console.time('Executed in');
    asyncFun(...args, (error, data) => {
      if (error) {
        this.emit('error', error);
        return console.timeEnd('Executed in');
      }

      this.emit('data', data);
      console.timeEnd('Executed in');
      this.emit('end');
    });
  }
}

const withTime = new WithTime();

withTime.on('data', (data) => console.log(data));
withTime.on('error', (error) => console.error(error));
withTime.on('end', () => console.log('end'));

withTime.execute(fs.readFile, __filename);
