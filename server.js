// set up ========================
var express = require('express');
var	morgan = require('morgan');
var app = express();

// configuration =================
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log('Angular starter listening on port:%s', 8080);