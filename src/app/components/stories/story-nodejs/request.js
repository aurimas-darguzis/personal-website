const http = require('http');

// const req = http.request(
const req = http.get(
  // { hostname: 'www.google.com'},
  'https://www.google.com',
  (res) => {
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

req.on('error', (e) => console.log(e));

// req.end();
console.log(req.agent);
