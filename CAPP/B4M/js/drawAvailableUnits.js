/*eslint no-unused-vars: "error"*/
/*global  document*/
"use strict";
//This function displays the German units that are avalable to be deployed on the board and which unit is the next unit avalable for deployment.
var b4mUnits = [];
var drawUnit = { drawUnit: function () { } };
function drawAvailableUnits(avalableUnitBox, germanUnit) {
    if (germanUnit && germanUnit.length > 0) {
        //This makes the box wide enough to contain all the avalable German units
        var boxSize = 70 * germanUnit.length;
        avalableUnitBox.width = boxSize > 300 ? boxSize : 300, avalableUnitBox.height = 80;
        var unitImage = avalableUnitBox.getContext('2d');
        for (var germanUnitCount = 0; germanUnitCount < germanUnit.length; germanUnitCount++)
            for (var b4mUnitCount = 0; b4mUnitCount < b4mUnits.length; b4mUnitCount++)
                //Make sure only German units appear in the avalableUnitBox
                if (germanUnit[germanUnitCount].id === b4mUnits[b4mUnitCount].id) {
                    drawUnit(unitImage, b4mUnits[b4mUnitCount], 65 * germanUnitCount + 10, 10);
                    break;
                }
        //this puts a frame around the next avalable unit       
        var nextAvalableUnit = document.getElementById('frame');
        unitImage.drawImage(nextAvalableUnit, 0, 0, 128, 128, 8, 8, 64, 64);
    }
    else {
        avalableUnitBox.width = 300, avalableUnitBox.height = 80, avalableUnitBox.getContext('2d').clearRect(0, 0, avalableUnitBox.width, avalableUnitBox.height);
    }
}