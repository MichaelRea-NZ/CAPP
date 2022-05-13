//For movement phase. From line 1251 in b4m.js

function getValidNormalDestinations(e, t, n, i) {
    if (i === void 0) { i = !0; }
    var o = Hex(e);
    var r = 'german' === t ? 'soviet' : 'german';
    o.credit = 3 === currentTurn.turn || 4 === currentTurn.turn ? 1 : n, o.path = [];
    var a = [o], l = [o], s = [], c = 0;
    for (; a.length > 0;) {
        var e_33 = a.shift();
        c++, c > 1 && s.push(e_33);
        for (var _i = 0, _a = grid.neighborsOf(e_33); _i < _a.length; _i++) {
            var n_13 = _a[_i];
            var o_10 = Hex(n_13);
            if (o_10 && 'off' !== o_10.terrain) {
                o_10.credit = e_33.credit - 1, 'forest' === o_10.terrain && 3 !== currentTurn.turn && 4 !== currentTurn.turn && (o_10.credit > 0 ? o_10.credit-- : i && (o_10.credit = -1));
                var n_14 = lookupUnit(o_10);
                n_14 && n_14.army === r && (o_10.credit = -1), isEZOC(o_10, t) && o_10.credit > -1 && (o_10.credit = 0);
                var s_1 = indexOfHex(o_10, l);
                s_1 < 0 ? o_10.credit > -1 && (l.push(o_10), o_10.path = e_33.path.slice(), o_10.path.push({
                    x: e_33.x,
                    y: e_33.y
                }), a.push(o_10)) : o_10.credit > l[s_1].credit && (l[s_1].credit = o_10.credit, o_10.path = e_33.path.slice(), o_10.path.push({
                    x: e_33.x,
                    y: e_33.y
                }), a.push(o_10));
            }
        }
    }
    return s;
}