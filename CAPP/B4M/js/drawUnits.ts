// eslint-disable-next-line no-unused-vars
type Army = 'soviet' | 'german'
type Type = 'shock' | 'infantry' | 'tank'
type Strength = 'full' | 'reduced'
type Point = { x: number, y: number }
interface Area2  {
    x: number,
    y: number,
    terrain : Terrain,
    river?: River,
    rail?: Rail,
    germanStart?: boolean,
    germanReplacement? : boolean,
    sovietReplacement? : boolean,
    city? : City,
    control? : Control
    
    }
type Unit = {
    id: String,
    pos: number,
    army: Army,
    type: Type,
    size: string,
    combatFull: number,
    combatReduced: number,
    movement: number,
    strength: Strength,
    position?: Point
}
class Grid implements Area2 {}
var b4mUnits: string|any[] = [];
var grid = {get: function (Point):Area | 'none' {return new Grid() } };
function drawUnit(board: any, unit: Unit, boardX: number, boardY: number) {
    const FullUnit = 120;
    const HalfUnit = 60;
    if (unit.position)
        for (var e_1 = 0; e_1 < b4mUnits.length; e_1++)
            if (unit.id === b4mUnits[e_1].id) {
                b4mUnits[e_1].position = {
                    x: unit.position.x,
                    y: unit.position.y
                };
                var n_1 = grid.get(unit.position);
                n_1 && n_1.city && 'none' !== n_1.city && (n_1.control = unit.army);
                break;
            }
    var o = 'soviet' === unit.army ? document.getElementById('soviets') : document.getElementById('germans')
    var r = 'full' === unit.strength ? 0 : 120;
    board.drawImage(o, FullUnit * unit.pos, r, FullUnit, FullUnit, boardX, boardY, HalfUnit, HalfUnit);
}
function clearUnit(board: any, unit: Unit, boardX: number, boardY: number) {
    for (var unitNum = 0; unitNum < b4mUnits.length; unitNum++)
        if (unit.id === b4mUnits[unitNum].id) {
            b4mUnits[unitNum].position = null;
            break;
        }
    board.clearRect(boardX, boardY, 80, 80);
}