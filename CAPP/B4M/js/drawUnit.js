"use strict";
// eslint-disable-next-line no-unused-vars
//import{b4mUnits} from "./units.js";
//import{grid} from "./b4m.js";
var b4mUnits = [];
var grid = { grid: function () { } };
function drawUnit(board, unit, boardX, boardY) {
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
    var o = 'soviet' === unit.army ? document.getElementById('soviets') : document.getElementById('germans'), r = 'full' === unit.strength ? 0 : 120;
    board.drawImage(o, FullUnit * unit.pos, r, FullUnit, FullUnit, boardX, boardY, HalfUnit, HalfUnit);
}
function clearUnit(board, unit, boardX, boardY) {
    for (var unitNum = 0; unitNum < b4mUnits.length; unitNum++)
        if (unit.id === b4mUnits[unitNum].id) {
            b4mUnits[unitNum].position = null;
            break;
        }
    board.clearRect(boardX, boardY, 80, 80);
}