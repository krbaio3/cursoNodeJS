const EventEmitter = require('events').EventEmitter;

const deferredProcess = (triesCount, emitter) => {
  process.nextTick(() => {
    let count = 0;
    emitter.emit('superNabo');

    const interval = setInterval(() => {
      emitter.emit('data', ++count);
      if (count === triesCount) {
        emitter.emit('end', count);
        clearInterval(interval);
      }
    }, 300);
  });
}

const retriever = (triesCount) => {
  const emitter = new EventEmitter();
  deferredProcess(triesCount, emitter);
  return emitter;
}

module.exports= retriever
