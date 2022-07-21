/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals document console window */

class Attacks {
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