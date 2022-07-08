<!DOCTYPE html>
<html lang="en">

<head>
  <title>Area Selection and Highlight Demo v2</title>
  <link rel="stylesheet" type="text/css" href="map.css" />
</head>

<body>
  <!--
<img id="map_image" src="map.png" usemap="#map_map" width="800" height="800" alt="Villers_Map">
Image seems to be offset from the defined area
-->

  <canvas id="highlights_canvas"></canvas>

  <img id="map_image" src="map.png" usemap="#map_map" alt="Map of Villers Bretonneux">

  <map id="map_map" name="map_map">
    <area id="A1" target="" alt="A1" title="A1" href="#"
                coords="11,48,38,47,51,68,66,81,83,90,106,98,128,99,160,101,188,101,180,128,172,154,171,178,169,199,168,213,168,226,145,227,131,227,96,229,65,229,42,230,26,231,10,233"
                shape="poly">
            <area id="A2" target="" alt="A2" title="A2" href="#"
                coords="13,240,60,235,99,234,117,232,157,233,188,235,212,237,229,245,236,255,223,275,216,298,213,316,210,337,210,353,209,371,192,380,177,391,162,401,138,409,119,415,101,413,70,403,47,394,11,381"
                shape="poly">
            <area id="A3" target="" alt="A3" title="A3" href="#"
                coords="12,384,88,413,108,418,127,418,145,413,155,410,179,467,184,495,183,520,175,554,173,576,170,605,170,638,170,673,169,708,12,706"
                shape="poly">
            <area id="B1" target="" alt="B1" title="B1" href="#"
                coords="194,99,252,96,296,93,321,92,339,88,347,85,358,121,370,139,386,155,395,169,395,181,386,201,377,213,365,223,346,230,335,234,325,243,316,254,292,248,275,248,255,248,239,250,217,235,195,230,174,229,172,198"
                shape="poly">
            <area id="B2" target="" alt="B2" title="B2" href="#"
                coords="242,258,257,252,273,251,287,253,299,254,315,260,321,279,320,304,319,319,318,341,316,367,309,392,306,408,300,419,294,425,287,424,243,399,227,388,215,369,216,341,218,317,225,292,229,274"
                shape="poly">
            <area id="B3" target="" alt="B3" title="B3" href="#"
                coords="158,408,170,403,181,396,196,387,211,376,223,389,236,401,252,410,264,418,279,426,288,430,298,448,301,457,311,471,285,489,260,507,237,525,213,546,202,557,186,569,180,573,184,541,188,521,190,502,186,480,180,458"
                shape="poly">
            <area id="B4" target="" alt="B4" title="B4" href="#"
                coords="215,552,241,528,256,515,276,501,293,489,313,477,331,490,343,500,357,512,345,523,334,533,325,543,317,557,316,574,314,589,308,611,303,626,281,603,252,579"
                shape="poly">
            <area id="B5" target="" alt="B5" title="B5" href="#"
                coords="178,583,200,563,211,555,235,574,248,582,262,596,273,607,284,617,298,631,298,650,303,673,312,697,315,708,176,706,176,669,176,641,176,613"
                shape="poly">
            <area id="C1" target="" alt="C1" title="C1" href="#"
                coords="351,82,374,74,387,64,396,54,398,43,563,43,556,67,553,83,549,100,548,112,554,132,561,156,564,179,562,199,549,217,542,227,523,216,503,208,488,203,455,193,433,191,412,188,401,188,402,172,395,158,379,140,363,123"
                shape="poly">
            <area id="C2" target="" alt="C2" title="C2" href="#"
                coords="321,260,337,237,360,230,372,227,384,215,393,204,400,193,421,194,444,196,458,198,472,201,484,207,483,215,472,253,462,276,451,302,440,325,427,351,408,370,364,401,343,418,312,412,320,373,323,345,327,314,327,280"
                shape="poly">
            <area id="C3" target="" alt="C3" title="C3" href="#"
                coords="490,209,510,215,525,222,539,231,532,250,524,265,519,285,519,301,520,316,524,331,528,345,538,368,539,396,539,423,535,443,531,448,348,417,403,380,426,363,447,331,466,280,478,254"
                shape="poly">
            <area id="C4" target="" alt="C4" title="C4" href="#"
                coords="526,455,314,416,306,423,294,432,302,447,306,456,316,470,357,506,362,511,385,497,398,493,412,495,426,499,444,502,463,507,480,503,493,497,501,490,514,484,520,474"
                shape="poly">
            <area id="C5" target="" alt="C5" title="C5" href="#"
                coords="340,532,370,554,385,568,406,584,423,599,436,611,426,625,420,641,418,660,422,677,426,693,429,706,322,708,310,668,305,646,309,617,320,590,319,570,319,558,330,545"
                shape="poly">
            <area id="D1" target="" alt="D1" title="D1" href="#"
                coords="564,44,661,41,660,153,654,211,654,222,653,239,638,300,608,289,577,287,552,286,534,291,523,294,534,260,542,237,554,218,564,201,569,181,569,158,561,138,555,122,553,100"
                shape="poly">
            <area id="D2" target="" alt="D2" title="D2" href="#"
                coords="525,300,545,292,567,289,592,294,603,295,636,304,619,377,610,404,604,437,599,457,588,483,527,467,540,445,544,429,546,401,542,373,534,345,526,322"
                shape="poly">
            <area id="D3" target="" alt="D3" title="D3" href="#"
                coords="525,473,585,485,577,516,569,529,557,551,547,561,518,582,496,591,444,608,395,567,360,541,343,530,371,509,386,503,395,499,419,501,439,506,458,510,472,512,493,503,512,488"
                shape="poly">
            <area id="D4" target="" alt="D4" title="D4" href="#"
                coords="444,614,472,605,490,598,498,598,529,615,546,625,559,640,561,654,560,674,554,692,552,706,434,706,428,685,424,665,424,645,430,630"
                shape="poly">
            <area id="E1" target="" alt="E1" title="E1" href="#"
                coords="665,42,771,40,771,248,717,240,678,235,659,233,664,182,665,141,668,116,666,90" shape="poly">
            <area id="E2" target="" alt="E2" title="E2" href="#" coords="659,237,769,251,770,491,606,458" shape="poly">
            <area id="E3" target="" alt="E3" title="E3" href="#"
                coords="604,464,769,498,773,708,558,708,567,683,568,661,568,640,555,623,530,609,505,596,530,582,550,566,566,555,577,530"
                shape="poly">
  </map>



  <script>

    /* eslint quotes: ["error", "single"] */
    /* eslint semi: ["error", "never"] */
    /* eslint no-unused-vars: "error" */
    /* globals document console window */
    
    class Unit {
                constructor(id, name, army, training, branch, startTurn, startPosition) {
                    this._id = id
                    this._name = name
                    this._army = army
                    this._training = training
                    this._branch = branch
                    this._startTurn = startTurn
                    this._startPosition = startPosition
                    this._currentPosition = startPosition
                }
                get name() {
                    let result = `${this._name} (${this._training} ${this._branch}) at ${this._currentPosition}`
                    if (this._startTurn !== 1) {
                        result += ` on turn ${this._startTurn}`
                    }
                    return result
                }
                get army() {
                    if (this._army == 'Allied') {
                        return true
                    }
                    else {
                        return false
                    }
                }
            }
            class Area {
                constructor(id, terrain, canSupplyAllied, canSupplyGerman, control, centerX, centerY, vp = 0, fullName = '') {
                    this._allNeighbours = []
                    this._allUnits = []
                    this._allAttackArrows = []
                    this._id = id
                    this._terrain = terrain
                    this._canSupplyAllies = canSupplyAllied
                    this._canSupplyGerman = canSupplyGerman
                    this._control = control
                    if (control == 'German') {
                        this._isGerman = true
                    }
                    else {
                        this._isAllied = true
                    }
                    this._victoryPoints = vp
                    this._name = fullName

                    this._centerX = centerX
                    this._centerY = centerY
                }
                addUnit(unit) {
                    this._allUnits.push(unit)
                }
                get areaName() {
                    let result = `${this._name}  ${this._id}  ${this._victoryPoints}`
                    return result
                }
                addNeighbour(aNeighbour) {
                    this._allNeighbours.push(aNeighbour)
                }
                
                addAttackArrow(anAttackArrow){
                  this._allAttackArrows.push(anAttackArrow)
                }
     
            }
            class Game {
                constructor() {
                    this._allUnits = []
                    this._allAreas = []
                }

                addUnit(id, name, army, training, branch, startTurn, startPosition) {
                    let newUnit = new Unit(id, name, army, training, branch, startTurn, startPosition)
                    this._allUnits.push(newUnit)
                    let area = this._allAreas.find(area => area._id === startPosition)
                    if (area) {
                        area.addUnit(newUnit)
                    }
                }

                reportAlliedUnits() {
                    let result = ''
                    for (let unit of game._allUnits) {
                        if (unit.army == true) {
                            result += unit.name + '\n'
                        }
                    }
                    return result
                }

                reportGermanUnits() {
                    let result = ''
                    for (let unit of game._allUnits) {
                        if (unit.army == false) {
                            result += unit.name + '\n'
                        }
                    }
                    return result
                }

                addArea(id, terrain, canSupplyAllied, canSupplyGerman, control, centerX, centerY, vp = 0, fullName = '') {
                    let newArea = new Area(id, terrain, canSupplyAllied, canSupplyGerman, control, centerX, centerY, vp, fullName)
                    this._allAreas.push(newArea)
                }

                reportAreas() {
                    let result = ''
                    for (let areas of game._allAreas) {
                        result += areas.areaName + '\n'
                    }
                    return result
                }
                
                findAdjacentEneamyAreas(targetAreaId) {
                    let result = []
                    const targetArea = this._allAreas.find(area => area._id === targetAreaId)
                    var eneamy 
                    if(targetArea._control === 'Allied'){
                    eneamy = 'German'
                    }
                    else{
                    eneamy = 'Allied'
                    }                   
                    
                    for (let neighbourArea of targetArea._allNeighbours) {
                      //const neighbourArea = this._allAreas.find(area => area._id === areaID)
                        if(neighbourArea._control === eneamy){                          
                          result.push(neighbourArea) 
                        }
                    }
                    return result
                }
                
                findAdjacentFriendlyAreas(targetAreaId) {
                    let result = []
                    const targetArea = this._allAreas.find(area => area._id === targetAreaId)
                    var eneamy 
                    if(targetArea._control === 'Allied'){
                    eneamy = 'Allied'
                    }
                    else{
                    eneamy = 'German'
                    }                   
                    
                    for (let neighbourArea of targetArea._allNeighbours) {
                      //const neighbourArea = this._allAreas.find(area => area._id === areaID)
                        if(neighbourArea._control === eneamy){                          
                          result.push(neighbourArea) 
                        }
                    }
                    return result
                }
                
                 findAttackArrows(targetAreaId){
                    let result = []
                    const attackArea = this._allAreas.find(area => area._id === targetAreaId)
                    var enemy 

                    for (let arrowAttackArea of attackArea._allAttackArrows) {
                      
                        if(arrowAttackArea._control === eneamy){                          
                          result.push(arrowAttackArea) 
                        }
                    }
                    return result
                  }

                addNeighbours(targetAreaId, allNeighbourIds) {
                    const targetArea = this._allAreas.find(area => area._id === targetAreaId)
                    for (let neighbourAreaId of allNeighbourIds) {
                        const neighbourArea = this._allAreas.find(area => area._id === neighbourAreaId)
                        targetArea.addNeighbour(neighbourArea)
                    }
                }
                
                addAttackArrows(attackAreaId, allNeighbourIds){
                    const attackArea = this._allAreas.find(area => area._id === attackAreaId)
                    for (let arrowAttackAreaId of allNeighbourIds){
                      const arrowAttackArea = this._allAreas.find(area => area._id === arrowAttackAreaId)
                      attackArea.addAttackArrow(arrowAttackArea)      
                    }
                 }

            }

                const NORTH = 0
                const EAST = 1
                const SOUTH = 2
                const WEST = 3
  
            let game = new Game()

            game.addArea('A1', 'open', true, false, 'Allied', 60, 124)
            game.addArea('A2', 'woods', true, false, 'Allied', 50, 300, 80, 'D’Arquenne Wood')
            game.addArea('A3', 'open', true, false, 'Allied', 50, 520, 60, 'Cachy')
            game.addArea('B1', 'woods', true, false, 'Allied', 220, 111, 80, 'Fouilloy/Hill 104')
            game.addArea('B2', 'city', true, false, 'Allied', 230, 320, 60, 'Villers-Bretonneux')
            game.addArea('B3', 'open', true, false, 'Allied', 200, 460, 20)
            game.addArea('B4', 'trench', true, false, 'Allied', 270, 550)
            game.addArea('B5', 'trench', true, false, 'Allied', 230, 650)
            game.addArea('C1', 'open', true, false, 'Allied', 440, 110)
            game.addArea('C2', 'open', true, false, 'Allied', 370, 230, 20, 'Rue de Péronnes')
            game.addArea('C3', 'trench', true, false, 'Allied', 470, 280)
            game.addArea('C4', 'trench', true, false, 'Allied', 375, 440, 20, 'Monument Wood')
            game.addArea('C5', 'trench', false, true, 'German', 320, 615)
            game.addArea('D1', 'trench', false, true, 'German', 580, 160)
            game.addArea('D2', 'trench', false, true, 'German', 555, 360)
            game.addArea('D3', 'trench', false, true, 'German', 490, 490)
            game.addArea('D4', 'woods', false, true, 'German', 450, 650)
            game.addArea('E1', 'open', false, true, 'German', 680, 70)
            game.addArea('E2', 'open', false, true, 'German', 670, 270)
            game.addArea('E3', 'open', false, true, 'German', 570, 550)

            game.addNeighbours('A1', ['B1', 'A2'])
            game.addNeighbours('A2', ['A1', 'B1', 'B2', 'B3', 'A3'])
            game.addNeighbours('A3', ['A2', 'B3', 'B5'])
            game.addNeighbours('B1', ['A1', 'A2', 'B2', 'C2', 'C1'])
            game.addNeighbours('B2', ['B1', 'C2', 'C4', 'B3', 'A2'])
            game.addNeighbours('B3', ['B2', 'C4', 'B4', 'B5', 'A3', 'A2'])
            game.addNeighbours('B4', ['B3', 'C4', 'D3', 'C5', 'B5'])
            game.addNeighbours('B5', ['A3', 'B3', 'B4', 'C5'])
            game.addNeighbours('C1', ['D1', 'C3', 'C2', 'B1'])
            game.addNeighbours('C2', ['B1', 'C1', 'C3', 'C4', 'B2'])
            game.addNeighbours('C3', ['C1', 'D1', 'D2', 'C4', 'C2'])
            game.addNeighbours('C4', ['B2', 'C2', 'C3', 'D2', 'D3', 'B4', 'B3'])
            game.addNeighbours('C5', ['B4', 'D3', 'D4', 'B5'])
            game.addNeighbours('D1', ['E1', 'E2', 'D2', 'C3', 'C1'])
            game.addNeighbours('D2', ['D1', 'E2', 'E3', 'D3', 'C4', 'C3'])
            game.addNeighbours('D3', ['C4', 'D2', 'B4', 'E3', 'D4', 'C5'])
            game.addNeighbours('D4', ['C5', 'D3', 'E3'])
            game.addNeighbours('E1', ['D1', 'E2'])
            game.addNeighbours('E2', ['D1', 'D2', 'E1', 'E3'])
            game.addNeighbours('E3', ['D4', 'D3', 'D2', 'E2'])

            //Allied units
            game.addUnit(4, 'No 2 - A Coy Grove', 'Allied', 'Veteran', 'Mark IV tanks', 1, 'A1')
            game.addUnit(7, 'No 1 – A Coy Mitchell ', 'Allied', 'Veteran', 'Mark IV tanks', 1, 'A2')
            game.addUnit(8, 'X Coy Price', 'Allied', 'Trained', 'Whippet tanks', 1, 'A2')
            game.addUnit(2, '24 Bde', 'Allied', 'Trained', 'Infantry', 1, 'B2')
            game.addUnit(5, '58 Bn MGC ', 'Allied', 'Trained', 'HMG', 1, 'B4')
            game.addUnit(6, '173 Bde', 'Allied', 'Trained', 'Infantry', 1, 'B5')
            game.addUnit(0, '14 Bde AIF', 'Allied', 'Veteran', 'Infantry', 1, 'C1')
            game.addUnit(3, '25 Bde', 'Allied', 'Trained', 'Infantry', 1, 'C3')
            game.addUnit(1, '23 Bde', 'Allied', 'Trained', 'Infantry', 1, 'C4')
            game.addUnit(9, '13 Bde AIF', 'Allied', 'Veteran', 'Infantry', 2, 'C2')
            game.addUnit(10, '13 Bde AIF', 'Allied', 'Veteran', 'Infantry', 2, 'C2')
            game.addUnit(11, '15 Bde AIF', 'Allied', 'Veteran', 'Infantry', 2, 'B1')
            game.addUnit(12, '15 Bde AIF', 'Allied', 'Veteran', 'Infantry', 2, 'B1')

            //German units
            game.addUnit(0, 'Group II Uihlein', 'German', 'Trained', 'A7V tanks', 1, 'C5')
            game.addUnit(1, '257', 'German', 'Fearless', 'Stoss', 1, 'C5')
            game.addUnit(2, '419 RIR', 'German', 'Trained', 'Infantry', 1, 'C5')
            game.addUnit(3, '478 RIR', 'German', 'Veteran', 'Infantry', 1, 'D1')
            game.addUnit(4, 'Group I Skopnik', 'German', 'Veteran', 'A7V tanks', 1, 'D2')
            game.addUnit(5, '48 RIR', 'German', 'Veteran', 'Infantry', 1, 'D2')
            game.addUnit(6, '207 RIR', 'German', 'Veteran', 'Infantry', 1, 'D2')
            game.addUnit(7, 'G Gr. 5', 'German', 'Fearless', 'Stoss', 1, 'D3')
            game.addUnit(8, '93 RIR', 'German', 'Veteran', 'Infantry', 1, 'D3')
            game.addUnit(9, 'Group III Steinhardt', 'German', 'Trained', 'A7V tanks', 1, 'D3')
            game.addUnit(10, 'MG Abt 228', 'German', 'Veteran', 'HMG', 2, 'Any German controlled area')
            game.addUnit(11, 'MG Abt 4G', 'German', 'Veteran', 'HMG', 2, 'Any German controlled area')
            
            game.addAttackArrows('A1', [('B1', [110, 100, EAST]), ('A2', [20,160,SOUTH])])
            game.addAttackArrows('A2', [('A1', [20, 160, NORTH]), ('B1', [120,160,NORTH]), ('B2', [125,250,EAST]), ('B3', [120,350,SOUTH]), ('A3', [20,360,SOUTH])])
            game.addAttackArrows('A3', [('A2', [20, 350, NORTH]), ('B3', [80,410,EAST]), ('B5', [80,560,EAST])])
            game.addAttackArrows('B1', [('A1', [100, 60, WEST]), ('A2', [115, 190, SOUTH]), ('B2', [190, 190, SOUTH]),  ('C2', [280, 155, EAST]),  ('C1', [280, 60, EAST])])
            game.addAttackArrows('B2', [('B1', [195, 175, NORTH]), ('C2', [270, 230, EAST]), ('C4', [240, 310, SOUTH]),  ('B3', [160, 325, SOUTH]),  ('A2', [100, 230, WEST])])
            game.addAttackArrows('B3', [('B2', [180, 320, NORTH]), ('C4', [250, 390, EAST]), ('B4', [190, 430, SOUTH]),  ('B5', [135, 495, SOUTH]),  ('A3', [80, 420, WEST]),  ('A2', [110, 330, NORTH])])
            game.addAttackArrows('B4', [('B3', [195, 430, WEST]), ('C4', [270, 430, NORTH]), ('D3', [280, 470, EAST]), ('C5', [245, 520, EAST]), ('B5', [155, 535, SOUTH])])
            game.addAttackArrows('B5', [('A3', [ 70, 590, WEST]), ('B3', [140, 500, NORTH]), ('B4', [200, 530, NORTH]), ('C5', [230, 590, EAST])])
            game.addAttackArrows('C1', [('D1', [480, 40, EAST]), ('C3', [430, 130, SOUTH]), ('C2', [360, 130, SOUTH]), ('B1', [290, 50, WEST])])
            game.addAttackArrows('C2', [('B1', [280, 140, WEST]), ('C1', [360, 120, NORTH]), ('C3', [350, 255, EAST]), ('C4', [270, 320, SOUTH]), ('B2', [280, 140, WEST])])
            game.addAttackArrows('C3', [('C1', [435, 115, NORTH]), ('D1', [465, 190, EAST]), ('D2', [450, 295, EAST]), ('C4', [370, 330, SOUTH]), ('C2', [360, 235, WEST])])
            game.addAttackArrows('C4', [('B2', [270, 340, WEST]), ('C2', [290, 340, NORTH]), ('C3', [400, 350, NORTH]), ('D2', [430, 375, EAST]), ('D3', [370, 430, SOUTH]), ('B4', [230, 400, SOUTH]), ('B3', [220, 385, WEST])])
            game.addAttackArrows('C5', [('B4', [250, 495, WEST]), ('D3', [330, 520, NORTH]), ('D4', [350, 595, EAST]), ('B5', [ 220, 595, WEST])])
            game.addAttackArrows('D1', [('E1', [590, 40, EAST]), ('E2', [600, 200, EAST]), ('D2', [500, 250, SOUTH]), ('C3', [485, 185, WEST]), ('C1', [480, 85, WEST])])
            game.addAttackArrows('D2', [('D1', [510, 200, NORTH]), ('E2', [570, 300, EAST]), ('E3', [530, 415, EAST]), ('D3', [470, 400, SOUTH]), ('C4', [430, 390, WEST]), ('C3', [445, 285, WEST])])
            game.addAttackArrows('D3', [('C4', [370, 450, NORTH]), ('D2', [490, 380, NORTH]), ('B4', [270, 460, WEST]), ('E3', [500, 475, EAST]), ('D4', [410, 530, SOUTH]), ('C5', [315, 520, SOUTH])])
            game.addAttackArrows('D4', [('C5', [350, 575, WEST]), ('D3', [410, 520, NORTH]), ('E3', [500, 575, EAST])])
            game.addAttackArrows('E1', [('D1', [575, 55, WEST]), ('E2', [630, 180, SOUTH])])
            game.addAttackArrows('E2', [('D1', [575, 190, WEST]), ('D2', [560, 300, WEST]), ('E1', [640, 140, NORTH]), ('E3', [630, 420, SOUTH])])
            game.addAttackArrows('E3', [('D4', [480, 580, WEST]), ('D3', [470, 475, WEST]), ('D2', [545, 395, WEST]), ('E2', [620, 410, NORTH])])




            console.table(game._allAreas, [game._allAreas._name, game._allAreas._id])

            console.log(game.reportAreas())

            console.log(game.reportAlliedUnits())

            console.log(game.reportGermanUnits())


    const PALE_ORANGE = 'rgba(255, 165, 0, 0.3)'
    const LIGHT_GREY = "rgb(0, 0, 0, 0.4)"
    const LIGHT_PURPLE = "rgba(0, 0, 255, 0.25)"


    var selectedArea = undefined

    var mapMap = document.getElementById('map_map')
    var highlightsCanvas = document.getElementById('highlights_canvas')
    var highlightsContext = highlightsCanvas.getContext('2d')

    /* !! fixed BUG.. 
    // without the following the canvas will capture the mouse events from the map of areas
    // SOLUTION
    // put a tranparent canvas on top of image and disable mouse stuff
    // from https://stackoverflow.com/questions/27587532/image-map-and-canvas
    // aslo see https://www.w3schools.com/cssref/pr_pos_z-index.asp
        // the following is in map.css
        #highlights_canvas  {
          pointer-events: none;       
          position:absolute;
          z-index: 2;
        }
    */
    highlightsCanvas.width = document.getElementById('map_image').width
    highlightsCanvas.height = document.getElementById('map_image').height

    function highlightArea(coords, highlightColor = PALE_ORANGE) {

      const borderPointsArray = coords.split(',').map(element => { return Number(element) })

      // get ready to draw
      highlightsContext.beginPath()
      highlightsContext.lineWidth = 0.1

      // starting point
      highlightsContext.moveTo(borderPointsArray[0], borderPointsArray[1])

      // for all the border points
      for (var pointIndex = 2; pointIndex < borderPointsArray.length; pointIndex += 2) {
        // draw a line to each point
        highlightsContext.lineTo(borderPointsArray[pointIndex], borderPointsArray[pointIndex + 1])
      }
      // final line goes back to first point
      highlightsContext.lineTo(borderPointsArray[0], borderPointsArray[1])

      //// finish up the drawing
      highlightsContext.fillStyle = highlightColor
      highlightsContext.closePath()
      highlightsContext.fill()
      highlightsContext.stroke()
    }
    
    function highlightFriendly(coords, highlightColor = LIGHT_GREY) {

      const borderPointsArray = coords.split(',').map(element => { return Number(element) })

      // get ready to draw
      highlightsContext.beginPath()
      highlightsContext.lineWidth = 0.1

      // starting point
      highlightsContext.moveTo(borderPointsArray[0], borderPointsArray[1])

      // for all the border points
      for (var pointIndex = 2; pointIndex < borderPointsArray.length; pointIndex += 2) {
        // draw a line to each point
        highlightsContext.lineTo(borderPointsArray[pointIndex], borderPointsArray[pointIndex + 1])
      }
      // final line goes back to first point
      highlightsContext.lineTo(borderPointsArray[0], borderPointsArray[1])

      //// finish up the drawing
      highlightsContext.fillStyle = highlightColor
      highlightsContext.closePath()
      highlightsContext.fill()
      highlightsContext.stroke()
    }
    
    function highlightEneamy(coords, highlightColor = LIGHT_PURPLE) {

      const borderPointsArray = coords.split(',').map(element => { return Number(element) })

      // get ready to draw
      highlightsContext.beginPath()
      highlightsContext.lineWidth = 0.1

      // starting point
      highlightsContext.moveTo(borderPointsArray[0], borderPointsArray[1])

      // for all the border points
      for (var pointIndex = 2; pointIndex < borderPointsArray.length; pointIndex += 2) {
        // draw a line to each point
        highlightsContext.lineTo(borderPointsArray[pointIndex], borderPointsArray[pointIndex + 1])
      }
      // final line goes back to first point
      highlightsContext.lineTo(borderPointsArray[0], borderPointsArray[1])

      //// finish up the drawing
      highlightsContext.fillStyle = highlightColor
      highlightsContext.closePath()
      highlightsContext.fill()
      highlightsContext.stroke()
    }

    // see https://www.w3docs.com/snippets/javascript/how-to-clear-the-canvas-for-redrawing.html
    function clearHighlights() {
      highlightsContext.clearRect(0, 0, highlightsCanvas.width, highlightsCanvas.height)
    }

    function displayAttackOptions(id) {
      let eneamyNeighbours = game.findAdjacentEneamyAreas(id)
      for(let area of eneamyNeighbours){
        let coords = document.getElementById(area._id).coords
        highlightEneamy(coords)
      }
              
    }
    
    function displayMoveOptions(id) {
      let friendlyNeighbours = game.findAdjacentFriendlyAreas(id)
      for(let area of friendlyNeighbours){
        let coords = document.getElementById(area._id).coords
        highlightFriendly(coords)
      }
              
    }

    function areaClickHandler(event) {
      // NOTE: the same handler can be used for many areas
      // event.target is the area of the map that was clicked
      console.log(event.target.id, event.target.coords)
      // NOTE: without this clicking again shades an area deeper
      // and previous clicked areas remain shaded
      //clearHighlights()
      // just use the area coords to draw the highlight
      // no 2nd parameter so uses default pale orange colour
      highlightArea(event.target.coords)
      // a global variable is used to track the just clicked on  area
      selectedArea = event.target.id
      document.getElementById("C3").removeEventListener('click', areaClickHandler, false)
      document.getElementById("C4").removeEventListener('click', areaClickHandler, false)
    }

    //attachs click to map of ALL areas
    function loadHandler() {
      mapMap.addEventListener('click', areaClickHandler, false)
      //document.getElementById("C3").addEventListener('click', areaClickHandler, false)
      //document.getElementById("C4").addEventListener('click', areaClickHandler, false)
      //displayAttackOptions('D2')
    }

    window.onload = loadHandler

  </script>
</body>