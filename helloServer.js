'use strict';

var http = require('http');
// http method in node library


var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello world</h1>');
});

server.listen(port, function() {
  console.log(`Listening on port ${port}`);
  // start string with back tic and you can add varibles inside ${}
});
