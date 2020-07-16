// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
//   res.end("foo bar");
// }).listen(8080); 


var http = require('http');
var dt = require('./myFirstModule');


http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write("The current date and time : " + dt.myDateTime());
  res.end();

}).listen(8080);


