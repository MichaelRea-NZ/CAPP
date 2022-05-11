//This function displays the German units that are avalable to be deployed on the board and which unit is the next unit avalable for deployment.
//type Unit = any
type b4mUnits = Unit[];
//var drawUnit = {drawUnit: function(){}};
//clearRect: { (arg0: number,arg1: number,arg2: any,arg3: any): any; new(): any; }; };
//germanUnit: string|any[])
type ContextType = "2d"
//getContext: (contextType: ContextType) any;

type AvalableUnitBox = { width: number; height: number; getContext: function (ContextType ): any }


function drawAvailableUnits(avalableUnitBox: AvalableUnitBox, germanUnit: b4mUnits) {
    const BOX_WIDTH = 70
    const HUD_WIDTH = 300
    const BOX_HEIGHT = 80
    if (germanUnit && germanUnit.length > 0) {
        //This makes the box wide enough to contain all the avalable German units
        var boxSize = BOX_WIDTH * germanUnit.length;
        //avalableUnitBox.width = boxSize > HUD_WIDTH ? boxSize : HUD_WIDTH, avalableUnitBox.height = BOX_HEIGHT;
        if (boxSize > HUD_WIDTH) {
            avalableUnitBox.width = boxSize
        }
        else {
            avalableUnitBox.width = HUD_WIDTH
        }
        avalableUnitBox.height = BOX_HEIGHT;

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
        avalableUnitBox.width = HUD_WIDTH
        avalableUnitBox.height = BOX_HEIGHT
        avalableUnitBox.getContext('2d').clearRect(0, 0, avalableUnitBox.width, avalableUnitBox.height);
    }
}