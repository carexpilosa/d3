"use strict";

function init() {
  let clock = new ChessClock();
  document.body.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
      case 32:
        clock.isRunning = !clock.isRunning;
        if (clock.isRunning) {
          document.getElementById('pause').innerHTML = 'RUNNUNG';
          clock.toGreen('pause');
        } else {
          document.getElementById('pause').innerHTML = 'PAUSE';
          clock.toRed('pause');
        }
        break;
      case 17: //Strg: linker Spieler
        if (clock.isRunning) {
          clock.leftIsRunnung = true;
          clock.toGreen('right');
          clock.toRed('left');
        }
        break;
      case 13: //Enter: rechter Spieler
        if (clock.isRunning) {
          clock.rightIsRunnung = true;
          clock.toRed('right');
          clock.toGreen('left');
        }
        break;
      default:
        break;
    }
  });
  window.addEventListener('scroll', function(e) {
    console.log(e);
  });
}

class ChessClock {
  constructor()  {
    this._isRunning = false;
    this._leftIsRunnung = false;
    this._rightIsRunnung = false;
  }
  get isRunning() {
    return this._isRunning;
  }
  get leftIsRunnung() {
    return this._leftIsRunnung;
  }
  get rightIsRunnung() {
    return this._rightIsRunnung;
  }
  set isRunning(bool) {
    this._isRunning = bool;
  }
  set leftIsRunnung(bool) {
    this._leftIsRunnung = bool;
  }
  set rightIsRunnung(bool) {
    this._rightIsRunnung = bool;
  }

  toGreen(divId) {
    document.getElementById(divId).style.color = 'green';
  }
  toRed(divId) {
    document.getElementById(divId).style.color = 'red';
  }
  toBlack(divId) {
    document.getElementById(divId).style.color = 'black';
  }
}