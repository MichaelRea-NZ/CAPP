/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals  */

class Move {// eslint-disable-line no-unused-vars
  constructor() {
    this._originId = undefined
    this._destinationId = undefined
    this._unitId = undefined
  }

  setOriginId(id) {
    this._originId = id
  }

  setDestinationId(id) {
    this._destinationId = id
  }

  setUnitId(id) {
    this._unitId = id
  }
}