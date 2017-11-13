"use strict";
let startTime;

function init() {
  startTime = new Date().getTime();
  setInterval(function() {
    let ms = 40000 - new Date().getTime() + startTime;
    let s = Math.floor(ms/1000);
    document.getElementById('blackTimeSec').innerHTML = s;
  }, 33)
}