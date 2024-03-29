/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals */

class Area {
  // eslint-disable-line no-unused-vars
  constructor(
    id,
    terrain,
    canSupplyAllied,
    canSupplyGerman,
    control,
    centerX,
    centerY,
    vp = 0,
    fullName = ""
  ) {
    this._allNeighbours = []
    this._allUnits = []
    this._allAttackArrows = []
    this._id = id
    this._terrain = terrain
    this._canSupplyAllies = canSupplyAllied
    this._canSupplyGerman = canSupplyGerman
    this._control = control
    if (control == "German") {
      this._isGerman = true
    } else {
      this._isAllied = true
    }
    this._victoryPoints = vp
    this._name = fullName

    this._centerX = centerX
    this._centerY = centerY
  }
  addUnit(unit) {
    this._allUnits.push(unit)
  }
  get areaName() {
    let result = `${this._name}  ${this._id}  ${this._victoryPoints}`
    return result
  }
  addNeighbour(aNeighbour) {
    this._allNeighbours.push(aNeighbour)
  }

  addAttackArrow(anAttackArrow) {
    this._allAttackArrows.push(anAttackArrow)
  }

  findArrowOptions(id) {
    //let eneamyNeighbours = game.findAdjacentEneamyAreas(id)
    for (let arrow of this._allAttackArrows) {
      if (arrow[0] === id) {
        return arrow[1]
      }
      //let coords = document.getElementById(area._id).coords
      //highlightEneamy(coords)
    }
  }

  clearAttack() {
    this._hasAttacked = false
  }
  makeAttack() {
    this._hasAttacked = true
  }
}
