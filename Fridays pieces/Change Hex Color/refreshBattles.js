//For change battle hexs to yellow and adding arrows to attacking units. From b4m.js line 217.
function refreshBattles() {
    hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height), countersHighlights.clearRect(0, 0, canvasCountersHighlights.width, canvasCountersHighlights.height);
    var e = battles.slice();
    battle && (computeBattleOdds(), e.push(battle));
    for (var _i = 0, e_6 = e; _i < e_6.length; _i++) {
        var t = e_6[_i];
        var e_7 = grid.get(t.defendingUnit.position);
        highlightHex(hexHighlights, e_7);
        var n = grid.neighborsOf(e_7), i_3 = e_7.corners();
        var _loop_1 = function (o) {
            var r = lookupUnit(n[o]);
            if (r && r.army !== t.defendingUnit.army && t.attackingUnits.filter(function (e) { return e.id === r.id; }).length > 0) {
                highlightHex(hexHighlights, n[o]);
                var t_5 = i_3[o], r_1 = o < 5 ? i_3[o + 1] : i_3[0];
				//code for arrows
                countersHighlights.drawImage(arrows, o * arrows.height, 0, arrows.height, arrows.height, e_7.toPoint().x + (t_5.x + r_1.x) / 2 - arrows.height / 4, e_7.toPoint().y + (t_5.y + r_1.y) / 2 - arrows.height / 4, arrows.height / 2, arrows.height / 2);
            }
        };
        for (var o = 0; o < n.length; o++) {
            _loop_1(o);
        }
    }
    updateDashboardCombat();
}