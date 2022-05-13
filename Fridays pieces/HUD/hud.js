function movementPhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('movementPhase'), currentTurn.phase = 'movement', currentTurn.subphase = '', document.querySelector('#step_movement > div.hud_title > img').src = 'img/' + currentTurn.army + '_turn.png', document.getElementById('step_movement').style.display = 'block', '' === playAIAs || playAIAs !== currentTurn.army ? (document.getElementById('step_movement_tip').innerText = 'Select all the units you choose to move and their destination in order to conclude the turn.', document.getElementById('skip_movement').style.display = 'block', document.getElementById('undo_movement').style.display = 'inline-block', 7 === currentTurn.turn && 'soviet' === currentTurn.army ? (document.getElementById('next_step_movement').style.display = 'none', document.getElementById('skip_to_other_player').onclick = function () {
        document.getElementById('next_step_final').style.display = this.checked ? 'block' : 'none', document.getElementById('next_step_final').onclick = finalResults;
    }) : (document.getElementById('next_step_final').style.display = 'none', document.getElementById('skip_to_other_player').onclick = function () {
        document.getElementById('next_step_movement').style.display = this.checked ? 'block' : 'none', 4 === currentTurn.turn && 'german' === currentTurn.army ? document.getElementById('next_step_movement').onclick = reinforcementPhase : document.getElementById('next_step_movement').onclick = replacementPhase, document.getElementById('undo_movement').style.display = this.checked ? 'none' : 'inline-block';
    })) : (document.getElementById('step_movement_tip').innerText = '', document.getElementById('skip_movement').style.display = 'none', document.getElementById('undo_movement').style.display = 'none'), hexSelected = null, available = [], hasMoved = [], handleMovementClick = function (e) {
        handleMovement(Grid.pointToHex(e.offsetX, e.offsetY), getValidNormalDestinations);
    };
    '' === playAIAs || playAIAs !== currentTurn.army ? document.addEventListener('click', handleMovementClick) : (document.getElementById('step_movement_tip').innerHTML = '<i class="fa fa-spinner fa-spin" style="font-size: 2.5em; margin-left: 12px;"></i>', setTimeout((function () {
        var e = function () {
            var e = [];
            if ('soviet' === currentTurn.army) {
                aiSelectMovesToFocus(Hex({
                    x: 10,
                    y: 2
                }), 1, e);
                var t = Hex({
                    x: 10,
                    y: 6
                }), n = lookupUnit(t);
                (!n || 'soviet' === n.army || 'german' === n.army && ('full' === n.strength ? n.combatFull : n.combatReduced) <= 8) && aiSelectMovesToFocus(t, 1, e), aiSelectMovesToFocus(Hex({
                    x: 13,
                    y: 5
                }), 1, e), aiSelectMovesToFocus(Hex({
                    x: 10,
                    y: 0
                }), 0, e), aiSelectMovesToFocus(Hex({
                    x: 12,
                    y: 3
                }), 0, e), aiSelectMovesToFocus(Hex({
                    x: 12,
                    y: 2
                }), 0, e), aiSelectMovesToFocus(Hex({
                    x: 13,
                    y: 3
                }), 0, e);
            }
            else {
                var t_38 = Hex({
                    x: 10,
                    y: 2
                }), n = lookupUnit(t_38);
                currentTurn.turn > 1 && aiSelectMovesToFocus(t_38, n && 'german' === n.army ? 1 : 2, e, currentTurn.turn < 5 ? 'tank' : null);
                var i_14 = Hex({
                    x: 10,
                    y: 6
                }), o = lookupUnit(i_14), r = Hex({
                    x: 13,
                    y: 5
                });
                currentTurn.turn > 1 && (aiSelectMovesToFocus(r, 1, e), o && 'german' === o.army || aiSelectMovesToFocus(i_14, 1, e));
                var _loop_12 = function (n_18) {
                    var i_15 = grid.get(n_18.position);
                    var o_11 = getValidNormalDestinations(i_15, currentTurn.army, n_18.movement).filter((function (t) {
                        return t.x > i_15.x && (!lookupUnit(t) || lookupUnit(t) && e.filter((function (e) {
                            return t.x === e[0].x && t.y === e[0].y;
                        })).length > 0) && 0 === e.filter((function (e) {
                            return t.x === e[1].x && t.y === e[1].y;
                        })).length;
                    })).sort((function (e, i) {
                        return currentTurn.turn <= 3 ? e.distance(t_38) - i.distance(t_38) || i.x - e.x || (n_18.position.y > 4 ? e.y - i.y : i.y - e.y) : i.x - e.x || (n_18.position.y > 4 ? e.y - i.y : i.y - e.y);
                    }));
                    o_11.length > 0 && e.push([n_18.position, {
                            x: o_11[0].x,
                            y: o_11[0].y
                        }]);
                };
                for (var _i = 0, _a = b4mUnits.filter((function (t) {
                    return t.army === currentTurn.army && t.position && t.position.x < 8 && 'tank' === t.type && 0 === e.filter((function (e) {
                        return t.position.x === e[0].x && t.position.y === e[0].y;
                    })).length;
                })).sort((function (e, t) {
                    return t.position.x - e.position.x;
                })); _i < _a.length; _i++) {
                    var n_18 = _a[_i];
                    _loop_12(n_18);
                }
                for (var _b = 0, _c = b4mUnits.filter((function (e) {
                    return 'soviet' === e.army && e.position && (e.position.x < 9 || e.position.x >= 9 && e.position.y >= 6);
                })).sort((function (e, t) {
                    return t.position.x - e.position.x;
                })); _b < _c.length; _b++) {
                    var t_39 = _c[_b];
                    aiSelectMovesToFocus(Hex({
                        x: t_39.position.x,
                        y: t_39.position.y
                    }), 1, e);
                }
                currentTurn.turn > 4 && grid.forEach((function (t) {
                    t && t.x < 9 && t.city && 'soviet' === t.control && aiSelectMovesToFocus(Hex({
                        x: t.x,
                        y: t.y
                    }), 0, e);
                })), currentTurn.turn > 4 && (aiSelectMovesToFocus(Hex({
                    x: 9,
                    y: 10
                }), 0, e), aiSelectMovesToFocus(Hex({
                    x: 12,
                    y: 9
                }), 0, e));
            }
            var _loop_13 = function (t) {
                var n = grid.get(t.position);
                var i_16 = getValidNormalDestinations(n, currentTurn.army, t.movement).filter((function (t) {
                    return t.x > n.x && t.x <= 10 && (!lookupUnit(t) || lookupUnit(t) && e.filter((function (e) {
                        return t.x === e[0].x && t.y === e[0].y;
                    })).length > 0) && 0 === e.filter((function (e) {
                        return t.x === e[1].x && t.y === e[1].y;
                    })).length;
                })).sort((function (e, n) {
                    return n.x - e.x || (t.position.y > 4 ? e.y - n.y : n.y - e.y);
                }));
                i_16.length > 0 && e.push([t.position, {
                        x: i_16[0].x,
                        y: i_16[0].y
                    }]);
            };
            for (var _d = 0, _e = b4mUnits.filter((function (t) {
                return t.army === currentTurn.army && t.position && t.position.x < 9 && 0 === e.filter((function (e) {
                    return t.position.x === e[0].x && t.position.y === e[0].y;
                })).length;
            })).sort((function (e, t) {
                return t.position.x - e.position.x;
            })); _d < _e.length; _d++) {
                var t = _e[_d];
                _loop_13(t);
            }
            return e;
        }();
        if (0 === e.length)
            document.getElementById('step_movement_tip').innerText = 'The enemy has chosen to complete the turn without moving any unit.';
        else {
            document.getElementById('step_movement_tip').innerText = 'The enemy has selected units to move in order to complete this turn.';
            var _loop_11 = function (t) {
                setTimeout((function () {
                    window.scrollTo(grid.get(e[t][0]).toPoint().x - window.innerWidth / 2, grid.get(e[t][0]).toPoint().y - window.innerHeight / 2), handleMovement(e[t][0], getValidNormalDestinations), handleMovement(e[t][1], getValidNormalDestinations);
                }), 2100 * (t + 1));
            };
            for (var t = 0; t < e.length; t++) {
                _loop_11(t);
            }
        }
        setTimeout((function () {
            7 === currentTurn.turn && 'soviet' === currentTurn.army ? (document.getElementById('next_step_movement').style.display = 'none', document.getElementById('next_step_final').style.display = 'block', document.getElementById('next_step_final').onclick = finalResults) : (document.getElementById('next_step_final').style.display = 'none', document.getElementById('next_step_movement').style.display = 'block', 4 === currentTurn.turn && 'german' === currentTurn.army ? document.getElementById('next_step_movement').onclick = reinforcementPhase : document.getElementById('next_step_movement').onclick = replacementPhase);
        }), 2150 * e.length);
    }), 100));
}