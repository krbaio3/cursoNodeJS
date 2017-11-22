const http = require('http');
let count = 0;
const req = http.request({
  hostname: 'www.elmundo.com'
}, (res) => {
  // console.log(`Status code: ${res.statusCode}`);
  // console.log(res.headers);
  res.on('data', (data) => {
    count += 1;
    // console.log(data.toString());
    console.log(count)
  });
});

req.on('error', (error) => {
  console.error(error);
});

// console.log(req.agent);

req.end();
