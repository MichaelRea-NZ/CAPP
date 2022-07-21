/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals document console window */

var turn = 1

function defaultSetUp() {
  for (let unit of game._allUnits) {
    let areaName = unit._startPosition
    console.log(unit)
    let area = game._allAreas.find(
      (area) => area._id === unit._startPosition
    )
    if (area) {
      console.log(area._centerX, area._centerY, unit._id)
      if (unit._army === 'Allied') {
        displayAllied(area._centerX, area._centerY, unit._id)
      }
      if (unit._startTurn === 1 && unit._army === 'German') {
        displayGerman(area._centerX, area._centerY, unit._id)
      }
    }
  }

  //loops to get _centerX and _centerY and assigns value to x and y.
  for (let area of game._allAreas) {
    let x = area._centerX
    let y = area._centerY

    //loops through _allUnits
    for (let unit of area._allUnits) {
      console.log(area._centerX, area._centerY, unit._id)
      // checks that the unit is on the board during the start turn and that it is an Allied unit
      if (unit._startTurn <= turn && unit._army === 'Allied') {
        console.log('Testing Allied')
        // displays the Allied unit
        displayAllied(x, y, unit._id)
      }
      // checks that the unit is on the board during the start turn and that it is a German unit.
      if (unit._startTurn <= turn && unit._army === 'German') {
        // displays the German unit.
        console.log('Testing German')
        displayGerman(x, y, unit._id)
      }
      // Offsets the unit if there is another unit already on the area.
      x += 20
      y += 20
    }
  }
}

function displayUnits() {
  for (let area of game._allAreas) {
    let x = area._centerX
    let y = area._centerY
    for (unit of area._allUnits) {            
      if (unit._startTurn <= turn && unit._army === 'Allied') {
        displayAllied(x, y, unit._id)
      }
      if (unit._startTurn <= turn && unit._army === 'German') {
        displayGerman(x, y, unit._id)
      }
      x += 10
      y += 10
    }
  }
}

function displayAllied(mapX, mapY, unitIndex) {
  unitsContext.drawImage(
    alliedImage,
    UNIT_IMAGE_WIDTH * unitIndex,
    0, // position of top/left unit image in line of images
    UNIT_IMAGE_WIDTH,
    UNIT_IMAGE_HEIGHT, // width and height of unit image
    mapX,
    mapY, // draw position
    UNIT_DISPLAY_WIDTH,
    UNIT_DISPLAY_HEIGHT
  ) // draw width and height
}

function displayGerman(mapX, mapY, unitIndex) {
  unitsContext.drawImage(
    germanImage,
    UNIT_IMAGE_WIDTH * unitIndex,
    0, // position of top/left unit image in line of images
    UNIT_IMAGE_WIDTH,
    UNIT_IMAGE_HEIGHT, // width and height of unit image
    mapX,
    mapY, // draw position
    UNIT_DISPLAY_WIDTH,
    UNIT_DISPLAY_HEIGHT
  ) // draw width and height
}

