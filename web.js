#!/usr/bin/env node
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

fs.readFile('index.html',function(err,data){
    if (err) return console.log(err.stack);
     app.get('/', function(request, response) {
	response.send(data.toString());
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
