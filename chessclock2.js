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
    document.getElementById('whiteTime').innerHTML = Math.floor(gesamtZeitWeiß/1000);
    document.getElementById('blackTime').innerHTML = Math.floor(gesamtZeitSchwarz/1000);
  }, 50);
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