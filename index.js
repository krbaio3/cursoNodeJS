const server = require('http').createServer();
const fs = require('fs');

const routes = {
  '/home': (res, fs) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(fs.readFileSync('./index.html'));
  },

  '/': (res) => {
    res.writeHead(301, {
      'Location': '/home'
    });
    res.end();
  },
  '/api': (res) => {
    res.writeHead(200, {
      'Content-Type': 'aplication/json'
    });
    const data = { company: 'Lemoncode'};
    res.end(JSON.stringify(data));
  }
};

const notFoundResponse = (res) => {
  res.writeHead(404);
  res.end();
};

const routeHandler = (route) => (!!routes[route] ?
  routes[route] : notFoundResponse
);

server.on('request', (req, res) => {
  const route = routeHandler(req.url);
  route(res, fs);
});

server.listen(3000);
