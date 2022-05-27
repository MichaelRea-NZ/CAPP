function draw() {
  var highlightsCanvas = document.getElementById('highlightsCanvas');
  if (highlightsCanvas.getContext) {
    var highlightsContext = highlightsCanvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    highlightsContext.stroke(rectangle);
    highlightsContext.fill(circle);
  }
}

function draw() {
  var highlightsCanvas = document.getElementById('highlightsCanvas');
  if (highlightsCanvas.getContext) {
    var highlightsContext = highlightsCanvas.getContext('2d');

    highlightsContext.beginPath();
    highlightsContext.moveTo(175, 150);
    highlightsContext.lineTo(200, 175);
    highlightsContext.lineTo(200, 125);
    highlightsContext.fill();
  }
}