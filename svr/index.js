const io = require('socket.io')(server);
const express = require('express');
var app = express();
app.use(express.static('../empty-example'))
io.on('connection', function(client){});
  client.on('event', function(data){});
  client.on('disconnect', function(){});
