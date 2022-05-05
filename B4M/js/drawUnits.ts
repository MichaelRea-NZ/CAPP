// eslint-disable-next-line no-unused-vars
import{b4mUnits} from "./units.js";
import{grid} from "./b4m.js";


function drawUnit(e:any, t:any, n:any, i:any) {
    const FullUnit = 120;
    const HalfUnit = 60;
    if (t.position)
        for (var e_1 = 0; e_1 < b4mUnits.length; e_1++)
            if (t.id === b4mUnits[e_1].id) {
                b4mUnits[e_1].position = {
                    x: t.position.x,
                    y: t.position.y
                };
                var n_1 = grid.get(t.position);
                n_1 && n_1.city && 'none' !== n_1.city && (n_1.control = t.army);
                break;
            }
    var o = 'soviet' === t.army ? document.getElementById('soviets') : document.getElementById('germans'), r = 'full' === t.strength ? 0 : 120;
    e.drawImage(o, FullUnit * t.pos, r, FullUnit, FullUnit, n, i, HalfUnit, HalfUnit);
}
function clearUnit(e:any, t:any, n:any, i:any) {
    for (var unitNum = 0; unitNum < b4mUnits.length; unitNum++)
        if (t.id === b4mUnits[unitNum].id) {
            b4mUnits[unitNum].position = null;
            break;
        }
    e.clearRect(n, i, 80, 80);
}