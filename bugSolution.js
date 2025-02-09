const http = require('http');

const server = http.createServer((req, res) => {
  const responseBody = 'Hello, world!';
  res.writeHead(200, {
    'Content-Length': responseBody.length,
    'Content-Type': 'text/plain'
  });
  res.end(responseBody);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});