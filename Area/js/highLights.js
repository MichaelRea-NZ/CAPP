/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */
/* globals document console window */


function highlightArea(coords, highlightColor = PALE_ORANGE) {
  const borderPointsArray = coords.split(",").map((element) => {
    return Number(element);
  });

  // get ready to draw
  highlightsContext.beginPath();
  highlightsContext.lineWidth = 0.1;

  // starting point
  highlightsContext.moveTo(borderPointsArray[0], borderPointsArray[1]);

  // for all the border points
  for (
    var pointIndex = 2;
    pointIndex < borderPointsArray.length;
    pointIndex += 2
  ) {
    // draw a line to each point
    highlightsContext.lineTo(
      borderPointsArray[pointIndex],
      borderPointsArray[pointIndex + 1]
    );
  }
  // final line goes back to first point
  highlightsContext.lineTo(borderPointsArray[0], borderPointsArray[1]);

  //// finish up the drawing
  highlightsContext.fillStyle = highlightColor;
  highlightsContext.closePath();
  highlightsContext.fill();
  highlightsContext.stroke();
}

function highlightFriendly(coords, highlightColor = LIGHT_GREY) {
  const borderPointsArray = coords.split(",").map((element) => {
    return Number(element);
  });

  // get ready to draw
  highlightsContext.beginPath();
  highlightsContext.lineWidth = 0.1;

  // starting point
  highlightsContext.moveTo(borderPointsArray[0], borderPointsArray[1]);

  // for all the border points
  for (
    var pointIndex = 2;
    pointIndex < borderPointsArray.length;
    pointIndex += 2
  ) {
    // draw a line to each point
    highlightsContext.lineTo(
      borderPointsArray[pointIndex],
      borderPointsArray[pointIndex + 1]
    );
  }
  // final line goes back to first point
  highlightsContext.lineTo(borderPointsArray[0], borderPointsArray[1]);

  //// finish up the drawing
  highlightsContext.fillStyle = highlightColor;
  highlightsContext.closePath();
  highlightsContext.fill();
  highlightsContext.stroke();
}

function highlightEneamy(coords, highlightColor = LIGHT_PURPLE) {
  const borderPointsArray = coords.split(",").map((element) => {
    return Number(element);
  });

  // get ready to draw
  highlightsContext.beginPath();
  highlightsContext.lineWidth = 0.1;

  // starting point
  highlightsContext.moveTo(borderPointsArray[0], borderPointsArray[1]);

  // for all the border points
  for (
    var pointIndex = 2;
    pointIndex < borderPointsArray.length;
    pointIndex += 2
  ) {
    // draw a line to each point
    highlightsContext.lineTo(
      borderPointsArray[pointIndex],
      borderPointsArray[pointIndex + 1]
    );
  }
  // final line goes back to first point
  highlightsContext.lineTo(borderPointsArray[0], borderPointsArray[1]);

  //// finish up the drawing
  highlightsContext.fillStyle = highlightColor;
  highlightsContext.closePath();
  highlightsContext.fill();
  highlightsContext.stroke();
}

// see https://www.w3docs.com/snippets/javascript/how-to-clear-the-canvas-for-redrawing.html      
function clearHighlights() {
  highlightsContext.clearRect(
    0,
    0,
    highlightsCanvas.width,
    highlightsCanvas.height
  );
}

