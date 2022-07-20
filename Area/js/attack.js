/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals document console window */

var destinationId
var originId
var allMovingUnits = []
var moveDestinationIds
var fromAreas

function startAttack(controller) {
  fromAreas = game.findAdjacentEneamyAreas(controller)
  hightlightUnitAreas(fromAreas)
  addMoveOriginListeners(fromAreas)
}

function findEnemyUnitsAreas(control) {
  let allOrigins = []
  let eneamyNeighbours = game.findAdjacentEneamyAreas(control)
  for (let area of game._allAreas) {
    // If the attacker does not control the area with ememy units on.
    if (area._control != control && area._allNeighbours === control) {
      for(let area of eneamyNeighbours){
        let coords = document.getElementById(area._id).coords
        highlightEneamy(coords)
      }
        //if (area._allUnits.length > 0) allOrigins.push(area._id)
     
    }
  }
  return allOrigins
}

function hightlightEnemyUnitAreas(allOrigins) {        
  for (let origin of allOrigins) {
    let coords = mapMap.children[origin].coords;
    highlightArea(coords);
  }
}

function addMoveOriginListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].addEventListener(
      'click',
      moveOriginHandler,
      false
    )
  }
}

function moveOriginHandler(event) {
  console.log(event.target.id)
  originId = event.target.id
  highlightFriendly(event.target.coords)
  let areas = game.findAdjacentFriendlyAreas(event.target.id)
  moveDestinationIds = []
  for (let area of areas) {
    moveDestinationIds.push(area._id)
  }
  console.log(moveDestinationIds)
  clearHighlights()
  hightlightEnemyUnitAreas(moveDestinationIds)
  removeOriginListeners(fromAreas)
  addMoveDestinationListeners(moveDestinationIds)

  mapMap.children[originId].addEventListener(
    'click',
    rotateUnitsHandler,
    false
  )
}

function removeOriginListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].removeEventListener(
      'click',
      moveOriginHandler,
      false
    )
  }
} 

function addMoveDestinationListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].addEventListener(
      'click',
      moveDestinationHandler,
      false
    )
  }
}



function moveDestinationHandler(event) {
  console.log(event.target.id)
  destinationId = event.target.id
  let allUnits = game.getUnitsInArea(originId)
  let unit = allUnits[allUnits.length - 1]
  unit._currentPosition = destinationId
  let originArea = game.getArea(originId)
  originArea._allUnits.pop()
  let destinationArea = game.getArea(destinationId)
  destinationArea._allUnits.push(unit)
  clearHighlights()
  clearUnits()
  displayUnits()
  removeDestinationListeners(moveDestinationIds)
  mapMap.children[originId].removeEventListener(
    'click',
    rotateUnitsHandler,
    false
  )
}

function removeDestinationListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].removeEventListener(
      'click',
      moveDestinationHandler,
      false
    )
  }
}

// Is this ever called
function displayMoveOptions(id) {
  let friendlyNeighbours = game.findAdjacentFriendlyAreas(id)
  for (let area of friendlyNeighbours) {
    let coords = document.getElementById(area._id).coords
    highlightFriendly(coords)
  }
}

//Can this go with display methods?
function clearUnits() {
  unitsContext.clearRect(0, 0, unitsCanvas.width, unitsCanvas.height)
}
