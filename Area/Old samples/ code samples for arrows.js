

  addUnit(id, name, army, training, branch, startTurn, startPosition) {
        let newUnit = new Unit(id, name, army, training, branch, startTurn, startPosition)
        this._allUnits.push(newUnit)
        let area = this._allAreas.find(area => area._id === startPosition)
        if (area) {
            area.addUnit(newUnit)
        }
    }
                                                      
                
                
  addArea(id, terrain, canSupplyAllied, canSupplyGerman, control, centerX, centerY, vp = 0, fullName = '') {
      let newArea = new Area(id, terrain, canSupplyAllied, canSupplyGerman, control, centerX, centerY, vp, fullName)
      this._allAreas.push(newArea)
  }
  
     addNeighbour(aNeighbour) {
                    this._allNeighbours.push(aNeighbour)
                } 

     addAttackArrow(anAttackArrow){
       this._allAttackArrows.push(anAttackArrow)
     }
                
 addNeighbours(targetAreaId, allNeighbourIds) {
    const targetArea = this._allAreas.find(area => area._id === targetAreaId)
    for (let neighbourAreaId of allNeighbourIds) {
        const neighbourArea = this._allAreas.find(area => area._id === neighbourAreaId)
        targetArea.addNeighbour(neighbourArea)
    }
}

addAttackArrows(targetAreaId, allNeighbourIds){
  const attackArea = this._allAreas.find(area => area._id === targetAreaId)
  for (let ne of allNeighbourIds){
    const arrowAttackArea = this._allAreas.find(area => area._id === arrowAttackAreaId)
    attackArea.addAttackArrow(arrowAttackArea)      
  }
}
 findAttackArrows(targetAreaId){
    let result = []
    const attackArea = this._allAreas.find(area => area._id === targetAreaId)
    var enemy 

    for (let arrowAttackArea of targetArea._allNeighbours) {
      
        if(arrowAttackArea._control === eneamy){                          
          result.push(arrowAttackArea) 
        }
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
