const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n');
  
  setTimeout(function () {
    res.write('Not gonna happen. It\'s over the default timeout limit. ');
  }, 13000);
});

server.timeout = 1000;
server.listen(8000);
