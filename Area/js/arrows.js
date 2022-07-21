/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals document console window */

function displayAttacks(areaId) {
  let allArrowCoords = game.findAttackArrows(areaId)
  for (let arrowCoords of allArrowCoords) {
    displayArrow(arrowCoords[0], arrowCoords[1], arrowCoords[2])
  }
}
function displayArrow(mapX, mapY, unitIndex) {
  arrowsContext.drawImage(
    arrowImage,
    ARROW_IMAGE_WIDTH * unitIndex,
    0, // position of top/left unit image in line of images
    ARROW_IMAGE_WIDTH,
    ARROW_IMAGE_HEIGHT, // width and height of unit image
    mapX,
    mapY, // draw position
    ARROW_DISPLAY_WIDTH,
    ARROW_DISPLAY_HEIGHT
  ) // draw width and height
}

function displayAttackOptions(id) {
  let eneamyNeighbours = game.findAdjacentEneamyAreas(id)
  for (let area of eneamyNeighbours) {
    let coords = document.getElementById(area._id).coords
    highlightEneamy(coords)
  }
}



function clearArrows() {
  arrowsContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height)
}