/* globals Unit game Area*/
/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */

class Game {
  // eslint-disable-line no-unused-vars
  constructor() {
    this._allUnits = []
    this._allAreas = []
    this._allMoves = []
    this._allAttacks = []
    this._allReinforcementUnits = []
    this._clock = new Clock()
  }

  //Used to create units
  addUnit(id, name, army, training, branch, startTurn, startPosition) {
    //The properties of Units
    let newUnit = new Unit(
      id,
      name,
      army,
      training,
      branch,
      startTurn,
      startPosition
    )
    //Pushes an units object to the _allUnits array
    this._allUnits.push(newUnit)
    //??? Somehow matches the startPosition (which is === to an area id to the area with that id0
    let area = this._allAreas.find((area) => area._id === startPosition)
    if (area) {
      //adds the unit to the matching area in the  _allUnits array
      area.addUnit(newUnit)
    }
  }

  addReinforcementUnit(
    id,
    name,
    army,
    training,
    branch,
    startTurn,
    startPosition
  ) {
    //The properties of Units
    let newUnit = new Unit(
      id,
      name,
      army,
      training,
      branch,
      startTurn,
      startPosition
    )
    //Pushes an units object to the _allUnits array
    this._allReinforcementUnits.push(newUnit)
  }

  reportAlliedUnits() {
    let result = ""
    for (let unit of game._allUnits) {
      if (unit.army == true) {
        result += unit.name + "\n"
      }
    }
    return result
  }

  reportGermanUnits() {
    let result = ""
    for (let unit of game._allUnits) {
      if (unit.army == false) {
        result += unit.name + "\n"
      }
    }
    return result
  }

  findAdjacentEneamyAreas(targetAreaId) {
    //Array to hold eneamy neighbours
    let result = []
    //Gets the id of an area ???
    const targetArea = this._allAreas.find((area) => area._id === targetAreaId)
    var eneamy
    //Works out wither a neighbour is an eneamy.
    if (targetArea._control === "Allied") {
      eneamy = "German"
    } else {
      eneamy = "Allied"
    }

    //goes through _allNeighbours to to find what neighbours are enemies
    for (let neighbourArea of targetArea._allNeighbours) {
      if (neighbourArea._control === eneamy) {
        result.push(neighbourArea)
      }
    }
    return result
  }

  findAdjacentFriendlyAreas(targetAreaId) {
    let result = []
    const targetArea = this._allAreas.find((area) => area._id === targetAreaId)
    var eneamy
    if (targetArea._control === "Allied") {
      eneamy = "Allied"
    } else {
      eneamy = "German"
    }

    for (let neighbourArea of targetArea._allNeighbours) {
      if (neighbourArea._control === eneamy) {
        result.push(neighbourArea)
      }
    }
    return result
  }

  addArea(
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
    let newArea = new Area(
      id,
      terrain,
      canSupplyAllied,
      canSupplyGerman,
      control,
      centerX,
      centerY,
      vp,
      fullName
    )
    this._allAreas.push(newArea)
  }

  reportAreas() {
    let result = ""
    for (let areas of game._allAreas) {
      result += areas.areaName + "\n"
    }
    return result
  }

  getUnitsInArea(targetAreaId) {
    const targetArea = this._allAreas.find((area) => area._id === targetAreaId)
    return targetArea._allUnits
  }

  getArea(targetAreaId) {
    return this._allAreas.find((area) => area._id === targetAreaId)
  }

  addNeighbours(targetAreaId, allNeighbourIds) {
    const targetArea = this._allAreas.find((area) => area._id === targetAreaId)
    for (let neighbourAreaId of allNeighbourIds) {
      const neighbourArea = this._allAreas.find(
        (area) => area._id === neighbourAreaId
      )
      targetArea.addNeighbour(neighbourArea)
    }
  }

  findAttackArrows(targetAreaId) {
    let allAttackers = []
    const targetArea = this._allAreas.find((area) => area._id === targetAreaId)

    for (let attackArea of targetArea._allAttackArrows) {
      allAttackers.push(attackArea[0])
    }
    let allArrows = []
    for (let attackAreaId of allAttackers) {
      const targetArea = this._allAreas.find(
        (area) => area._id === attackAreaId
      )
      for (let x of targetArea._allAttackArrows) {
        let id = x[0]
        if (id === targetAreaId) {
          allArrows.push(x[1])
        }
      }
    }
    return allArrows
  }

  displayAttackArrows(attackAreaId, allNeighbourIds) {
    const attackArea = this._allAreas.find((area) => area._id === attackAreaId)
    for (let arrowAttackAreaId of allNeighbourIds) {
      attackArea.addAttackArrow(arrowAttackAreaId)
    }
  }

  addAttackArrows(attackAreaId, allNeighbourIds) {
    const attackArea = this._allAreas.find((area) => area._id === attackAreaId)
    for (let arrowAttackAreaId of allNeighbourIds) {
      attackArea.addAttackArrow(arrowAttackAreaId)
    }
  }

  addMove(originId, destinationId, unitId) {
    let newMove = new Move(this._clock.turn, originId, destinationId, unitId)
    this._allMoves.push(newMove)
  }

  addAttack(defendingAreaId, attackingAreaId) {
    let newAttack = new Attack(
      this._clock.turn,
      defendingAreaId,
      attackingAreaId,      
    )
    this._allAttacks.push(newAttack)
  }
}
