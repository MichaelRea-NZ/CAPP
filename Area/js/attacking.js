/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals  console game hightlightUnitAreas mapMap highlightArea displayAttackOptions displayArrow clearHighlights */

var attackingAreaId
var defendingAreaId
var allFriendlyFrontLineAreas = []
var enemyNeighbours = []

function startAttack(friendly) {
  // eslint-disable-line no-unused-vars
  //collects the front line areas that have enemy neighbours
  allFriendlyFrontLineAreas = findFrontline(friendly)
  //highlights the friendly areas that have enemy neighbours
  hightlightUnitAreas(allFriendlyFrontLineAreas)
  // listens for a click event on (friendly areas that have enemy neighbours)
  addAttackAreaListeners(allFriendlyFrontLineAreas)
}

function findFrontline(friendly) {
  let allFrontLineAreas = []
  //go through allAreas
  for (let area of game._allAreas) {
    //find all areas that are friendly
    if (area._control === friendly) {
      // go through all the neighbours of each area
      for (let neighbour of area._allNeighbours) {
        // look for neighbours that are not friendly
        if (neighbour._control !== friendly) {
          //if they are not friendly push to allFrontLineAreas Array
          allFrontLineAreas.push(area._id)
          // not sure why the break is here
          break
        }
      }
    }
  }
  return allFrontLineAreas
}

//allows an attacking area to be clicked on
function addAttackAreaListeners(allAttackAreaIds) {
  for (let origin of allAttackAreaIds) {
    mapMap.children[origin].addEventListener("click", attackAreaHandler, false)
  }
}

// origin and allOrigins I am not totally certain about how come about. Could we discuss in the morning.
/* function hightlightEnemyUnitAreas(allOrigins) {// eslint-disable-line no-unused-vars
  for (let origin of allOrigins) {
    let coords = mapMap.children[origin].coords
    //calls 
    highlightArea(coords)
  }
} */

//Used when an attacking unit is clicked on.
function attackAreaHandler(event) {
  console.log(event.target.id)
  //picks up the click event of the area that was clicked on and collects it's id
  attackingAreaId = event.target.id
  //calls the displayAttackOptions of the attacking area which displays the areas that can be attacked from the friendly area that was clicked on
  displayAttackOptions(attackingAreaId)
  // Not sure whatis happening here. Though this was already called in findAdjacentEneamyAreas.
  // Or is just rebuilding a new enemyNeighbours of the attacking area that was click on?
  enemyNeighbours = game.findAdjacentEneamyAreas(attackingAreaId)
  //calls addAttackedAreaListeners
  addDefenderAreaListeners(enemyNeighbours)
  // ditto
  removeAttackAreaListeners(allFriendlyFrontLineAreas)
}

// When an attacking area is clicked on this stops it being clicked on again.
function removeAttackAreaListeners(allAttackAreaIds) {
  for (let origin of allAttackAreaIds) {
    // removes the event listner of all the children of the map element
    mapMap.children[origin].removeEventListener(
      "click",
      attackAreaHandler,
      false
    )
  }
}

//Same as above but for the enemy unit that is clicked on.
function addDefenderAreaListeners(allDefendingAreaIds) {
  for (let origin of allDefendingAreaIds) {
    //allows for a click method
    mapMap.children[origin._id].addEventListener(
      "click",
      defenderAreaHandler,
      false
    )
  }
}

//Same as above but for the enemy unit that is clicked on.
function defenderAreaHandler(event) {
  console.log(event.target.id)
  //picks up the click event on the enemy that is to be attacked and collects it's id
  defendingAreaId = event.target.id
  // collects the id of the area that is attacking.
  let attackArea = game.getArea(attackingAreaId)
  // finds the arrow that points from the attackArea to the defending area
  let arrow = attackArea.findArrowOptions(defendingAreaId)
  //displays the selected arrow arrow
  displayArrow(...arrow)
  // clears the highlights from the board
  clearHighlights()
  //removes the listener from enemy areas.
  removeDefendingAreaListeners(enemyNeighbours)
}

//Same as above but for the enemy unit that is clicked on.
function removeDefendingAreaListeners(allDefendingAreaIds) {
  for (let origin of allDefendingAreaIds) {
    mapMap.children[origin._id].removeEventListener(
      "click",
      defenderAreaHandler,
      false
    )
  }
}
