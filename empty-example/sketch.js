/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";
let cnv;
let cap;
let sock;
function setup() {
  sock = io('http://localhost');
  sock.on('connect', function(){});
  sock.on('event', function(data){});
  sock.on('disconnect', function(){});
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
  var img = createImg(cnv.toDataURL());

}