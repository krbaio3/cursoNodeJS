const EventEmitter = require('events').EventEmitter;

class WithLog extends EventEmitter {

  execute(taskFunc) {
    console.log('Before');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('after');
  }
}


const withLog =new WithLog();

withLog.on('begin',() =>console.log('begin'));
withLog.on('end',() =>console.log('end'));

withLog.execute(() => console.log('executing'));
