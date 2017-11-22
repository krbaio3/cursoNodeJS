const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello word\n');
});

server.listen(3000);
