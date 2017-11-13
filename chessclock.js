"use strict";
let clock, frame;

function init() {
  clock = new ChessClock();  
  document.body.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
      case 32: //space
        clock.isRunning = !clock.isRunning;
        if (clock.isRunning) {
          clock.start('all');
        } else {
          clock.stop('all');
        }
        break;
      case 17: //Strg: linker Spieler
        if (clock.isRunning) {
          clock.start('left');
        }
        break;
      case 13: //Enter: rechter Spieler
        if (clock.isRunning) {
          clock.start('right');
        }
        break;
      default:
        break;
    }
  });
}

class ChessClock {
  constructor()  {
    this.resetVars();
  }
  resetVars() {
    this._isRunning = false;
    this._leftIsRunning = false;
    this._rightIsRunning = false;
    this._timeLeft = undefined;
    this._timeRight = undefined;
    this._lastStarted = undefined;
  }
  get isRunning() {
    return this._isRunning;
  }
  get leftIsRunning() {
    return this._leftIsRunning;
  }
  get rightIsRunning() {
    return this._rightIsRunning;
  }
  set isRunning(bool) {
    this._isRunning = bool;
  }
  set leftIsRunning(bool) {
    this._leftIsRunning = bool;
  }
  set rightIsRunning(bool) {
    this._rightIsRunning = bool;
  }

  start(divId) {
    document.getElementById(divId).style.color = 'green';
    if (divId === 'left') {
      this.leftIsRunning = true;
      this._lastStarted = new Date().getTime();
      this.ohrwerk('left');
      this.stop('right');
    } else if (divId === 'right') {
      this.rightIsRunning = true;
      this._lastStarted = new Date().getTime();
      this.ohrwerk('right');
      this.stop('left');
    }
  }
  stop(divId) {
    document.getElementById(divId).style.color = 'red';
    if (divId === 'left') {
      this.leftIsRunning = false;
    } else if(divId === 'right') {
      this.rightIsRunning = false;
    }
    
  }
  restart(divId) {
    document.getElementById(divId).style.color = 'black';
  }

  reset() {
    this.restart('left');
    this.restart('right');
    this.stop('all');
    clock.resetVars();
  }

  ohrwerk(which) {
    cancelAnimationFrame(frame);
    console.log(new Date().getTime() - clock._lastStarted);
    console.log(which);
    frame = requestAnimationFrame(function() {
      clock.ohrwerk(which);
    });
  }
}