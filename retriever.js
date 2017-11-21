const EventEmitter = require('events').EventEmitter;
const util = require('util');

const deferredProcess = (triesCount, emitter) => {
  process.nextTick(() => {
    let count = 0;
    emitter.emit('start');

    const interval = setInterval(() => {
      emitter.emit('data', ++count);
      if (count === triesCount) {
        emitter.emit('end', count);
        clearInterval(interval);
      }
    }, 300);
  });
};

const Retriever = function (triesCount) {
  deferredProcess(triesCount, this);
};

util.inherits(Retriever, EventEmitter);

module.exports = Retriever;
