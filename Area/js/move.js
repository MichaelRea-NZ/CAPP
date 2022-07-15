/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals document console window */

class Move {
  constructor() {
    this._originId = undefined;
    this._destinationId = undefined;
    this._unitId = undefined;
  }

  setOriginId(id) {
    this._originId = id;
  }

  setDestinationId(id) {
    this._destinationId = id;
  }

  setUnitId(id) {
    this._unitId = id;
  }
}