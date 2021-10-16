'use esversion: 8';
const p5 = require('p5');
const json  = require('json');
const base64 = require('base64js');
const port = process.env['PORT'] || 8080;
import { createServer } from 'http';
const express = require('express');
var app = express();
let server = createServer(app);
const io = require('socket.io')(server);
app.use('/',express.static('../empty-example'));
app.use('/static',express.static('./node_modules'));
//app.use('/svr', express.static('.'));
io.on('connection', function(client){
  console.log("Connected succesfully to the socket ...");
  client.on('frame', getImg);
  client.emit('poop', {"poop": 5, "peepee": 9});
  client.on('disconnect', function(){
    console.warn('disconnected from socket,');
  });
});

function getImg(data) {
    var img = new p5.Image(data);

img.save('tmp.jpg');
}
server.listen(port, () => {
  console.log('listening on http://localhost:8080');
});
