"use strict";
let startZeit,
    stopZeit,
    gesamtZeitWeiß = 0,
    gesamtZeitSchwarz = 0,
    letzterCheckZeit,
    seiteAmZug = 'w'; // s/w/-

function init() {
  startZeit = letzterCheckZeit = new Date().getTime();
  setInterval(function() {
    if (seiteAmZug === 'w') {
      gesamtZeitWeiß += zeitSeitLetztemCheck();
    } else if (seiteAmZug === 's') {
      gesamtZeitSchwarz += zeitSeitLetztemCheck();
    }
    letzterCheckZeit = new Date().getTime();
    let wHmsObj = secondsToHMS(gesamtZeitWeiß/1000);

    document.getElementById('whiteTimeHours').innerHTML = wHmsObj.h;
    document.getElementById('whiteTimeMinutes').innerHTML = wHmsObj.m;
    document.getElementById('whiteTimeSeconds').innerHTML = wHmsObj.s;
      
    let sHmsObj = secondsToHMS(gesamtZeitSchwarz/1000);
    document.getElementById('blackTimeHours').innerHTML = sHmsObj.h;
    document.getElementById('blackTimeMinutes').innerHTML = sHmsObj.m;
    document.getElementById('blackTimeSeconds').innerHTML = sHmsObj.s;
  }, 100);
}

function zeitSeitLetztemCheck() {
  return new Date().getTime() - letzterCheckZeit;
}

function wexel() {
  letzterCheckZeit = new Date().getTime();
  if (seiteAmZug === 'w') {
    seiteAmZug = 's';
  } else if (seiteAmZug === 's') {
    seiteAmZug = 'w';
  }
}

function numberFormat(number, stellen) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

function secondsToHMS(secs) {
  //console.log(secs);
  let h = Math.floor(secs/3600);
  secs = secs - h*3600;
  let m = Math.floor(secs/60);
  let s = Math.floor(secs - m*60);
  let ret = {
    h: numberFormat(h, 2),
    m: numberFormat(m, 2),
    s: numberFormat(s, 2)
  }
  //console.log(ret);
  return ret;
}
