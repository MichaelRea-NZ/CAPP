function drawUnit(e, t, n, i) {
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
    e.drawImage(o, 120 * t.pos, r, 120, 120, n, i, 60, 60);
}
function clearUnit(e, t, n, i) {
    for (var e_2 = 0; e_2 < b4mUnits.length; e_2++)
        if (t.id === b4mUnits[e_2].id) {
            b4mUnits[e_2].position = null;
            break;
        }
    e.clearRect(n, i, 80, 80);
}