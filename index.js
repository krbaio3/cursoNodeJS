const retriever = require('./retriever');

retriever(10)

.on('start',() => console.log('started'))
.on('data',(data) => console.log(`data: ${data}`))
.on('end',(data) => console.log(`end: ${data}`))
