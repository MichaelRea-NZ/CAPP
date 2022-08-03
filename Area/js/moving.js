/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals  console game mapMap highlightArea highlightFriendly clearHighlights displayUnits unitsContext unitsCanvas */

var destinationId;
var originId;
var moveDestinationIds;
var fromAreas;

function startMove(controller) {
  // eslint-disable-line no-unused-vars
  fromAreas = findUnitsAreas(controller);
  hightlightUnitAreas(fromAreas);
  addMoveOriginListeners(fromAreas);
}

function findUnitsAreas(control) {
  let allOrigins = [];
  for (let area of game._allAreas) {
    if (area._control === control) {
      if (area._allUnits.length > 0) allOrigins.push(area._id);
    }
  }
  return allOrigins;
}

function hightlightUnitAreas(allOrigins) {
  for (let origin of allOrigins) {
    let coords = mapMap.children[origin].coords;
    highlightArea(coords);
  }
}

function addMoveOriginListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].addEventListener("click", moveOriginHandler, false);
  }
}

function moveOriginHandler(event) {
  console.log(event.target.id);
  originId = event.target.id;
  highlightFriendly(event.target.coords);
  let areas = game.findAdjacentFriendlyAreas(event.target.id);
  moveDestinationIds = [];
  for (let area of areas) {
    moveDestinationIds.push(area._id);
  }
  console.log(moveDestinationIds);
  clearHighlights();
  hightlightUnitAreas(moveDestinationIds);
  removeOriginListeners(fromAreas);
  addMoveDestinationListeners(moveDestinationIds);

  mapMap.children[originId].addEventListener(
    "click",
    rotateUnitsHandler,
    false
  );
}

function removeOriginListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].removeEventListener(
      "click",
      moveOriginHandler,
      false
    );
  }
}

function addMoveDestinationListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].addEventListener(
      "click",
      moveDestinationHandler,
      false
    );
  }
}

function rotateUnits(targetAreaId) {
  let area = game.getArea(targetAreaId);
  let unit = area._allUnits.pop();
  area._allUnits.splice(0, 0, unit);
}

function rotateUnitsHandler() {
  rotateUnits(originId);
  displayUnits();
}

function moveDestinationHandler(event) {
  console.log(event.target.id);
  destinationId = event.target.id;
  let allUnits = game.getUnitsInArea(originId);
  let unit = allUnits[allUnits.length - 1];
  unit._currentPosition = destinationId;
  let originArea = game.getArea(originId);
  originArea._allUnits.pop();
  let destinationArea = game.getArea(destinationId);
  destinationArea._allUnits.push(unit);
  clearHighlights();
  clearUnits();
  displayUnits();
  removeDestinationListeners(moveDestinationIds);
  mapMap.children[originId].removeEventListener(
    "click",
    rotateUnitsHandler,
    false
  );
  //Code here
}

function removeDestinationListeners(allOrigins) {
  for (let origin of allOrigins) {
    mapMap.children[origin].removeEventListener(
      "click",
      moveDestinationHandler,
      false
    );
  }
}

//Can this go with display methods?
function clearUnits() {
  unitsContext.clearRect(0, 0, unitsCanvas.width, unitsCanvas.height);
}
