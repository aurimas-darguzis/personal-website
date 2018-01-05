const http = require('http');

// req: http.ClientRequest
const req = http.get( // or we can use it like // const req = http.request(
  // { hostname: 'www.google.com'}, // and then specify the hostname
  'https://www.google.com',
  (res) => {
    // res: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

req.on('error', (e) => console.log(e));

// req.end();
console.log(req.agent); // http.agent
