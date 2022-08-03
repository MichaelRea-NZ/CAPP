/* globals  */
/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */

class Attack {// eslint-disable-line no-unused-vars
  constructor() {
    this._attackingAreaId = undefined
    this._defendingAreaId = undefined
  }

  setAttackingArea(id) {
    this._attackingAreaId = id
  }

  setDefendingAreaId(id) {
    this._defendingAreaId = id
  }
}