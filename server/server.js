// server.js
let jsonServer = require('json-server');
let express = require('express');
let morgan = require('morgan');
let compression = require('compression');

let server = express();
server.use(morgan('dev'));

// to compress the content over the wire
server.use(compression());

// to disable caching - use lower options
// let opts = {maxAge: '1y'};
let opts = {maxAge: 0, etag: false, lastModified: false};

server.use('/step-00',express.static('step-00-no-webpack', opts));
server.use('/step-01',express.static('step-01-hello-webpack', opts));
server.use('/step-02',express.static('step-02-with-webpack', opts));
server.use('/step-03',express.static('step-03-loaders', opts));
server.use('/step-04',express.static('step-04', opts));
server.use('/step-05',express.static('step-05', opts));
server.use('/step-06',express.static('step-06', opts));
server.use('/step-07',express.static('step-07', opts));
server.use('/step-08',express.static('step-08', opts));
server.use('/step-09',express.static('step-09', opts));
server.use('/step-10',express.static('step-10', opts));

server.use('/services', jsonServer.router('db.json'));

server.listen(3000, function () {
  console.log('JSON Server is running')
});