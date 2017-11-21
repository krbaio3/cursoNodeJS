const Retriever = require('./retriever');

const retriever = new Retriever(10);

retriever
.on('start',() => console.log('started'))
.on('data',(data) => console.log(`data: ${data}`))
.on('end',(data) => console.log(`end: ${data}`));
