/// <reference path="../TSDef/p5.global-mode.d.ts" />
/// <reference path="../svr/node_modules/socket.io/dist/client.d.ts" />
"use esversion: 6";
"use strict";
let cnv;
let cap;
let socket,sock;
function setup() {
socket = io('http://localhost:80');
sock = socket;
  sock.on('connect', function(){
    console.log('connected to server socket...');

  });
  sock.on('poop', function(data){
    console.log(data);
    
  });
  sock.on('disconnect', function(){
    console.warn('disconnected from server socket.');
  });
  angleMode(DEGREES);
  cnv = createCanvas(640, 480, P2D);
  var btn = createButton('snap');
  btn.mouseClicked(() => {
    grabimg();
  });
  cap = createCapture(VIDEO);
  cap.hide();
  background(0);
  stroke(0, 255, 0);
  noFill();

}

function draw() {
//  translate(width / 2, height / 2);

}

function grabimg() {
  image(cap,0,0,640,480);
  var imgdata = cnv.toDataURL();
  var img = createImg(imgdata);
var frame = get();
socket.emit('frame',frame);
}