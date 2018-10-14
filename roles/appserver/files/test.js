var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome Node.js');
}).listen(3003, "172.31.42.129");
console.log('Server running at http://172.31.42.129:3003/');
