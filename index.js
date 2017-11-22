const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hello word\n');

  setTimeout(() => {
    res.write('Another hello\n');
  }, 1000);

  setTimeout(() => {
    res.write('super nabo\n');
  },2000);
});

server.listen(3000);
