var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 3000;
var server = http.createServer(app);

require('./middleware')(app, express);
require('./routes')(app);

console.log('Listening on port ' + port);
server.listen(port);
module.exports = app;


