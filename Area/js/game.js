class Game {
  constructor() {
    this._allUnits = [];
    this._allAreas = [];
  }

  addUnit(id, name, army, training, branch, startTurn, startPosition) {
    let newUnit = new Unit(
      id,
      name,
      army,
      training,
      branch,
      startTurn,
      startPosition
    );
    this._allUnits.push(newUnit);
    let area = this._allAreas.find((area) => area._id === startPosition);
    if (area) {
      area.addUnit(newUnit);
    }
  }

  reportAlliedUnits() {
    let result = "";
    for (let unit of game._allUnits) {
      if (unit.army == true) {
        result += unit.name + "\n";
      }
    }
    return result;
  }

  reportGermanUnits() {
    let result = "";
    for (let unit of game._allUnits) {
      if (unit.army == false) {
        result += unit.name + "\n";
      }
    }
    return result;
  }

  findAdjacentEneamyAreas(targetAreaId) {
    let result = [];
    const targetArea = this._allAreas.find(
      (area) => area._id === targetAreaId
    );
    var eneamy;
    if (targetArea._control === "Allied") {
      eneamy = "German";
    } else {
      eneamy = "Allied";
    }

    for (let neighbourArea of targetArea._allNeighbours) {            
      if (neighbourArea._control === eneamy) {
        result.push(neighbourArea);
      }
    }
    return result;
  }

  findAdjacentFriendlyAreas(targetAreaId) {
    let result = [];
    const targetArea = this._allAreas.find(
      (area) => area._id === targetAreaId
    );
    var eneamy;
    if (targetArea._control === "Allied") {
      eneamy = "Allied";
    } else {
      eneamy = "German";
    }

    for (let neighbourArea of targetArea._allNeighbours) {           
      if (neighbourArea._control === eneamy) {
        result.push(neighbourArea);
      }
    }
    return result;
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
    );
    this._allAreas.push(newArea);
  }

  reportAreas() {
    let result = "";
    for (let areas of game._allAreas) {
      result += areas.areaName + "\n";
    }
    return result;
  }

  getUnitsInArea(targetAreaId) {
    const targetArea = this._allAreas.find(
      (area) => area._id === targetAreaId
    );
    return targetArea._allUnits;
  }

  getArea(targetAreaId) {
    return this._allAreas.find((area) => area._id === targetAreaId);
  }

  addNeighbours(targetAreaId, allNeighbourIds) {
    const targetArea = this._allAreas.find(
      (area) => area._id === targetAreaId
    );
    for (let neighbourAreaId of allNeighbourIds) {
      const neighbourArea = this._allAreas.find(
        (area) => area._id === neighbourAreaId
      );
      targetArea.addNeighbour(neighbourArea);
    }
  }

  findAttackArrows(targetAreaId) {
    let allAttackers = [];
    const targetArea = this._allAreas.find(
      (area) => area._id === targetAreaId
    );

    for (let attackArea of targetArea._allAttackArrows) {
      allAttackers.push(attackArea[0]);
    }
    let allArrows = [];
    for (let attackAreaId of allAttackers) {
      const targetArea = this._allAreas.find(
        (area) => area._id === attackAreaId
      );
      for (let x of targetArea._allAttackArrows) {
        let id = x[0];
        if (id === targetAreaId) {
          allArrows.push(x[1]);
        }
      }
    }
    return allArrows;
  }

  addAttackArrows(attackAreaId, allNeighbourIds) {
    const attackArea = this._allAreas.find(
      (area) => area._id === attackAreaId
    );
    for (let arrowAttackAreaId of allNeighbourIds) {          
      attackArea.addAttackArrow(arrowAttackAreaId);
    }
  }
}

