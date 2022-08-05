/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals  */

/* !! fixed BUG.. 
        // without the following the canvas will capture the mouse events from the map of areas
        // SOLUTION
        // put a tranparent canvas on top of image and disable mouse stuff
        // from https://stackoverflow.com/questions/27587532/image-map-and-canvas
        // aslo see https://www.w3schools.com/cssref/pr_pos_z-index.asp
            // the following is in map.css
            #highlights_canvas  {
              pointer-events: none;       
              position:absolute;
              z-index: 2;
            }
        */
class Unit {
  // eslint-disable-line no-unused-vars
  constructor(id, name, army, training, branch, startTurn, startPosition) {
    this._id = id;
    this._name = name;
    this._army = army;
    this._training = training;
    this._branch = branch;
    this._startTurn = startTurn;
    this._startPosition = startPosition;
    this._currentPosition = startPosition;
    this._hasMoved = false;
  }
  get name() {
    let result = `${this._name} (${this._training} ${this._branch}) at ${this._currentPosition}`;
    if (this._startTurn !== 1) {
      result += ` on turn ${this._startTurn}`;
    }
    return result;
  }
  get army() {
    if (this._army == "Allied") {
      return true;
    } else {
      return false;
    }
  }

  clearMove() {
    this._hasMoved = false;
  }
  makeMove() {
    this._hasMoved = true;
  }
}
