/* globals b4mUnits */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*eslint-env es6*/
/*eslint quotes: ["error", "single"]*/
/*eslint semi: ["error", "never"]*/
var originalUnitSize = 120, displayUnitSize = 60, extendHexProperties = {
    size: {
        width: 114.55,
        height: 101.9
    },
    orientation: 'flat',
    offset: 1
}, templateCustomProperties = {
    terrain: 'off',
    city: 'none',
    river: [],
    rail: [],
    germanStart: !1,
    control: null
}, Hex = Honeycomb.extendHex(__assign(__assign({}, extendHexProperties), templateCustomProperties)), Grid = Honeycomb.defineGrid(Hex), grid = Grid.rectangle({
    width: 14,
    height: 11,
    start: [0, 0],
    direction: 1
})/* , b4mGrid = [{
        x: 0,
        y: 0,
        terrain: 'open',
        germanReplacement: !0
    }, {
        x: 0,
        y: 1,
        terrain: 'open',
        rail: ['NW', 'NE'],
        germanReplacement: !0
    }, {
        x: 0,
        y: 2,
        terrain: 'open',
        germanStart: !0,
        germanReplacement: !0
    }, {
        x: 0,
        y: 3,
        terrain: 'open',
        germanStart: !0,
        germanReplacement: !0
    }, {
        x: 0,
        y: 4,
        terrain: 'open',
        river: ['S', 'SE'],
        rail: ['NW', 'NE'],
        germanReplacement: !0
    }, {
        x: 0,
        y: 5,
        terrain: 'open',
        river: ['N'],
        germanStart: !0,
        germanReplacement: !0
    }, {
        x: 0,
        y: 6,
        terrain: 'open',
        germanReplacement: !0
    }, {
        x: 0,
        y: 7,
        terrain: 'open',
        germanReplacement: !0
    }, {
        x: 0,
        y: 8,
        terrain: 'forest',
        germanReplacement: !0
    }, {
        x: 0,
        y: 9,
        terrain: 'open',
        rail: ['SW', 'NE'],
        germanReplacement: !0
    }, {
        x: 0,
        y: 10,
        terrain: 'open',
        germanReplacement: !0
    }, {
        x: 1,
        y: 1,
        terrain: 'forest',
        rail: ['SW', 'SE'],
        germanStart: !0
    }, {
        x: 1,
        y: 2,
        terrain: 'forest',
        germanStart: !0
    }, {
        x: 1,
        y: 3,
        terrain: 'forest',
        germanStart: !0
    }, {
        x: 1,
        y: 4,
        terrain: 'open',
        city: 'normal',
        river: ['S'],
        rail: ['SW', 'S', 'SE'],
        germanStart: !0,
        control: 'german'
    }, {
        x: 1,
        y: 5,
        terrain: 'open',
        river: ['NW', 'N', 'NE'],
        rail: ['N', 'SE'],
        germanStart: !0
    }, {
        x: 1,
        y: 6,
        terrain: 'open',
        germanStart: !0
    }, {
        x: 1,
        y: 7,
        terrain: 'forest'
    }, {
        x: 1,
        y: 8,
        terrain: 'forest'
    }, {
        x: 1,
        y: 9,
        terrain: 'forest',
        rail: ['SW', 'SE'],
        germanStart: !0
    }, {
        x: 1,
        y: 10,
        terrain: 'forest',
        germanStart: !0
    }, {
        x: 2,
        y: 0,
        terrain: 'forest'
    }, {
        x: 2,
        y: 1,
        terrain: 'open',
        rail: ['NW', 'NE']
    }, {
        x: 2,
        y: 2,
        terrain: 'open'
    }, {
        x: 2,
        y: 3,
        terrain: 'open'
    }, {
        x: 2,
        y: 4,
        terrain: 'open',
        river: ['SW', 'S', 'SE'],
        rail: ['NW', 'NE'],
        germanStart: !0
    }, {
        x: 2,
        y: 5,
        terrain: 'open',
        river: ['N'],
        rail: ['NW', 'S'],
        germanStart: !0
    }, {
        x: 2,
        y: 6,
        terrain: 'open',
        city: 'normal',
        rail: ['N', 'SE'],
        germanStart: !0,
        control: 'german'
    }, {
        x: 2,
        y: 7,
        terrain: 'forest'
    }, {
        x: 2,
        y: 8,
        terrain: 'forest',
        germanStart: !0
    }, {
        x: 2,
        y: 9,
        terrain: 'open',
        rail: ['NW', 'NE'],
        germanStart: !0
    }, {
        x: 2,
        y: 10,
        terrain: 'forest'
    }, {
        x: 3,
        y: 1,
        terrain: 'forest',
        rail: ['SW', 'SE']
    }, {
        x: 3,
        y: 2,
        terrain: 'open'
    }, {
        x: 3,
        y: 3,
        terrain: 'open',
        river: ['E']
    }, {
        x: 3,
        y: 4,
        terrain: 'open',
        river: ['S', 'SE', 'NE'],
        rail: ['SW', 'NE'],
        germanStart: !0
    }, {
        x: 3,
        y: 5,
        terrain: 'forest',
        river: ['NW', 'N']
    }, {
        x: 3,
        y: 6,
        terrain: 'open',
        germanStart: !0
    }, {
        x: 3,
        y: 7,
        terrain: 'open',
        rail: ['NW', 'SE'],
        germanStart: !0
    }, {
        x: 3,
        y: 8,
        terrain: 'forest',
        germanStart: !0
    }, {
        x: 3,
        y: 9,
        terrain: 'forest',
        rail: ['SW', 'NE'],
        germanStart: !0
    }, {
        x: 3,
        y: 10,
        terrain: 'open',
        germanStart: !0
    }, {
        x: 4,
        y: 0,
        terrain: 'fortification'
    }, {
        x: 4,
        y: 1,
        terrain: 'fortification',
        rail: ['NW', 'NE']
    }, {
        x: 4,
        y: 2,
        terrain: 'fortification',
        river: ['S', 'SE']
    }, {
        x: 4,
        y: 3,
        terrain: 'fortification',
        river: ['SW', 'NW', 'N'],
        rail: ['SW', 'NE']
    }, {
        x: 4,
        y: 4,
        terrain: 'fortification',
        river: ['S', 'SW', 'NE']
    }, {
        x: 4,
        y: 5,
        terrain: 'fortification',
        river: ['N']
    }, {
        x: 4,
        y: 6,
        terrain: 'fortification'
    }, {
        x: 4,
        y: 7,
        terrain: 'open',
        rail: ['NW', 'S']
    }, {
        x: 4,
        y: 8,
        terrain: 'open',
        city: 'normal',
        rail: ['N', 'SW', 'S', 'SE', 'NE'],
        control: 'soviet'
    }, {
        x: 4,
        y: 9,
        terrain: 'forest',
        rail: ['N', 'S']
    }, {
        x: 4,
        y: 10,
        terrain: 'forest',
        rail: ['N', 'S']
    }, {
        x: 5,
        y: 1,
        terrain: 'open',
        city: 'nornal',
        rail: ['SW', 'S', 'SE'],
        control: 'soviet'
    }, {
        x: 5,
        y: 2,
        terrain: 'open',
        rail: ['N', 'S']
    }, {
        x: 5,
        y: 3,
        terrain: 'open',
        city: 'normal',
        river: ['NW', 'S'],
        rail: ['SW', 'N', 'SE'],
        control: 'soviet'
    }, {
        x: 5,
        y: 4,
        terrain: 'forest',
        river: ['SW', 'NW', 'N', 'NE', 'SE']
    }, {
        x: 5,
        y: 5,
        terrain: 'open',
        river: ['NW', 'NE']
    }, {
        x: 5,
        y: 6,
        terrain: 'open'
    }, {
        x: 5,
        y: 7,
        terrain: 'open'
    }, {
        x: 5,
        y: 8,
        terrain: 'open',
        rail: ['SW', 'NE']
    }, {
        x: 5,
        y: 9,
        terrain: 'open',
        rail: ['NW', 'SE']
    }, {
        x: 5,
        y: 10,
        terrain: 'open'
    }, {
        x: 6,
        y: 0,
        terrain: 'forest'
    }, {
        x: 6,
        y: 1,
        terrain: 'forest',
        rail: ['NW', 'SE']
    }, {
        x: 6,
        y: 2,
        terrain: 'forest'
    }, {
        x: 6,
        y: 3,
        terrain: 'forest',
        river: ['SW'],
        rail: ['NW', 'NE']
    }, {
        x: 6,
        y: 4,
        terrain: 'open',
        river: ['NW', 'SW', 'S']
    }, {
        x: 6,
        y: 5,
        terrain: 'open',
        river: ['N', 'NW']
    }, {
        x: 6,
        y: 6,
        terrain: 'open',
        rail: ['S', 'NE']
    }, {
        x: 6,
        y: 7,
        terrain: 'forest',
        rail: ['SW', 'N']
    }, {
        x: 6,
        y: 8,
        terrain: 'open'
    }, {
        x: 6,
        y: 9,
        terrain: 'open',
        rail: ['NW', 'NE']
    }, {
        x: 6,
        y: 10,
        terrain: 'open'
    }, {
        x: 7,
        y: 1,
        terrain: 'fortification'
    }, {
        x: 7,
        y: 2,
        terrain: 'fortification',
        rail: ['NW', 'NE']
    }, {
        x: 7,
        y: 3,
        terrain: 'fortification',
        city: 'normal',
        rail: ['SW', 'NE'],
        control: 'soviet'
    }, {
        x: 7,
        y: 4,
        terrain: 'fortification'
    }, {
        x: 7,
        y: 5,
        terrain: 'fortification',
        city: 'normal',
        river: ['SW', 'S'],
        rail: ['S', 'NE'],
        control: 'soviet'
    }, {
        x: 7,
        y: 6,
        terrain: 'forest',
        river: ['N', 'NE', 'SE'],
        rail: ['N', 'SW']
    }, {
        x: 7,
        y: 7,
        terrain: 'open',
        river: ['NE', 'SE']
    }, {
        x: 7,
        y: 8,
        terrain: 'open',
        river: ['NE']
    }, {
        x: 7,
        y: 9,
        terrain: 'open',
        city: 'normal',
        rail: ['SW', 'NE'],
        control: 'soviet'
    }, {
        x: 7,
        y: 10,
        terrain: 'open'
    }, {
        x: 8,
        y: 0,
        terrain: 'forest',
        rail: ['NW', 'SE']
    }, {
        x: 8,
        y: 1,
        terrain: 'forest',
        rail: ['SW', 'SE']
    }, {
        x: 8,
        y: 2,
        terrain: 'open',
        rail: ['SW', 'SE']
    }, {
        x: 8,
        y: 3,
        terrain: 'open',
        river: ['S'],
        rail: ['S', 'NE']
    }, {
        x: 8,
        y: 4,
        terrain: 'forest',
        river: ['N', 'NE'],
        rail: ['SW', 'N']
    }, {
        x: 8,
        y: 5,
        terrain: 'forest',
        river: ['SW', 'S', 'SE']
    }, {
        x: 8,
        y: 6,
        terrain: 'open',
        river: ['SW', 'NW', 'N']
    }, {
        x: 8,
        y: 7,
        terrain: 'open',
        river: ['S', 'SW', 'NW']
    }, {
        x: 8,
        y: 8,
        terrain: 'open',
        river: ['N', 'NE', 'SE'],
        rail: ['SW', 'NE']
    }, {
        x: 8,
        y: 9,
        terrain: 'open',
        river: ['NE', 'SE']
    }, {
        x: 8,
        y: 10,
        terrain: 'open',
        river: ['NE']
    }, {
        x: 9,
        y: 1,
        terrain: 'fortification',
        river: ['NE', 'SE'],
        rail: ['NW', 'S']
    }, {
        x: 9,
        y: 2,
        terrain: 'fortification',
        river: ['NE', 'SE'],
        rail: ['NW', 'N', 'SE']
    }, {
        x: 9,
        y: 3,
        terrain: 'fortification',
        river: ['NE'],
        rail: ['NW', 'SW', 'NE']
    }, {
        x: 9,
        y: 4,
        terrain: 'fortification',
        river: ['SW', 'S']
    }, {
        x: 9,
        y: 5,
        terrain: 'open',
        river: ['N', 'NE', 'SE', 'S']
    }, {
        x: 9,
        y: 6,
        terrain: 'open',
        river: ['NW', 'N']
    }, {
        x: 9,
        y: 7,
        terrain: 'open'
    }, {
        x: 9,
        y: 8,
        terrain: 'open',
        river: ['SW'],
        rail: ['SW', 'NE']
    }, {
        x: 9,
        y: 9,
        terrain: 'open',
        river: ['NW', 'SW']
    }, {
        x: 9,
        y: 10,
        terrain: 'open',
        river: ['NW', 'SW'],
        sovietReplacement: !0
    }, {
        x: 10,
        y: 0,
        terrain: 'open',
        river: ['SW'],
        sovietReplacement: !0
    }, {
        x: 10,
        y: 1,
        terrain: 'fortification',
        river: ['SW', 'NW'],
        rail: ['S', 'NE']
    }, {
        x: 10,
        y: 2,
        terrain: 'open',
        city: 'moscow',
        river: ['S', 'SW', 'NW'],
        rail: ['N', 'NE', 'SE', 'S', 'SW', 'NW'],
        control: 'soviet'
    }, {
        x: 10,
        y: 3,
        terrain: 'fortification',
        river: ['N', 'NE'],
        rail: ['S', 'N']
    }, {
        x: 10,
        y: 4,
        terrain: 'fortification',
        river: ['SW', 'S', 'SE'],
        rail: ['S', 'N']
    }, {
        x: 10,
        y: 5,
        terrain: 'fortification',
        river: ['NW', 'N'],
        rail: ['S', 'N']
    }, {
        x: 10,
        y: 6,
        terrain: 'fortification',
        city: 'major',
        rail: ['S', 'N'],
        control: 'soviet'
    }, {
        x: 10,
        y: 7,
        terrain: 'open',
        rail: ['N', 'SW']
    }, {
        x: 10,
        y: 8,
        terrain: 'open'
    }, {
        x: 10,
        y: 9,
        terrain: 'open'
    }, {
        x: 10,
        y: 10,
        terrain: 'open',
        sovietReplacement: !0
    }, {
        x: 11,
        y: 1,
        terrain: 'forest',
        rail: ['SW', 'SE', 'NE'],
        sovietReplacement: !0
    }, {
        x: 11,
        y: 2,
        terrain: 'open',
        rail: ['SW', 'SE']
    }, {
        x: 11,
        y: 3,
        terrain: 'fortification',
        river: ['SW', 'S'],
        rail: ['NW', 'S', 'SE']
    }, {
        x: 11,
        y: 4,
        terrain: 'open',
        river: ['S', 'SE', 'NE', 'N'],
        rail: ['N', 'SE']
    }, {
        x: 11,
        y: 5,
        terrain: 'open',
        river: ['N', 'NW']
    }, {
        x: 11,
        y: 6,
        terrain: 'open'
    }, {
        x: 11,
        y: 7,
        terrain: 'open'
    }, {
        x: 11,
        y: 8,
        terrain: 'open'
    }, {
        x: 11,
        y: 9,
        terrain: 'open'
    }, {
        x: 11,
        y: 10,
        terrain: 'open',
        sovietReplacement: !0
    }, {
        x: 12,
        y: 0,
        terrain: 'open',
        rail: ['SW', 'NE'],
        sovietReplacement: !0
    }, {
        x: 12,
        y: 1,
        terrain: 'open',
        rail: ['NW', 'NE']
    }, {
        x: 12,
        y: 2,
        terrain: 'forest',
        rail: ['NW', 'NE']
    }, {
        x: 12,
        y: 3,
        terrain: 'open',
        river: ['S', 'SW'],
        rail: ['NW', 'NE']
    }, {
        x: 12,
        y: 4,
        terrain: 'open',
        river: ['NW', 'N', 'NE'],
        rail: ['NW', 'SE']
    }, {
        x: 12,
        y: 5,
        terrain: 'open'
    }, {
        x: 12,
        y: 6,
        terrain: 'open'
    }, {
        x: 12,
        y: 7,
        terrain: 'open'
    }, {
        x: 12,
        y: 8,
        terrain: 'open'
    }, {
        x: 12,
        y: 9,
        terrain: 'open'
    }, {
        x: 12,
        y: 10,
        terrain: 'open',
        sovietReplacement: !0
    }, {
        x: 13,
        y: 1,
        terrain: 'open',
        rail: ['SW', 'SE'],
        sovietReplacement: !0
    }, {
        x: 13,
        y: 2,
        terrain: 'open',
        rail: ['SW', 'SE'],
        sovietReplacement: !0
    }, {
        x: 13,
        y: 3,
        terrain: 'open',
        rail: ['SW', 'SE'],
        sovietReplacement: !0
    }, {
        x: 13,
        y: 4,
        terrain: 'forest',
        river: ['SW', 'S'],
        sovietReplacement: !0
    }, {
        x: 13,
        y: 5,
        terrain: 'open',
        city: 'normal',
        river: ['N'],
        rail: ['NW', 'S'],
        sovietReplacement: !0,
        control: 'soviet'
    }, {
        x: 13,
        y: 6,
        terrain: 'open',
        rail: ['N', 'SE'],
        sovietReplacement: !0
    }, {
        x: 13,
        y: 7,
        terrain: 'open',
        sovietReplacement: !0
    }, {
        x: 13,
        y: 8,
        terrain: 'open',
        sovietReplacement: !0
    }, {
        x: 13,
        y: 9,
        terrain: 'open',
        sovietReplacement: !0
    }, {
        x: 13,
        y: 10,
        terrain: 'open',
        sovietReplacement: !0
    }]; */
for (var i = 0; i < b4mGrid.length; i++)
    grid.set([b4mGrid[i].x, b4mGrid[i].y], Hex(__assign(__assign({}, templateCustomProperties), b4mGrid[i])));
"use strict";

function b4mUnitsIndex(e) {
    for (var t = 0; t < b4mUnits.length; t++)
        if (e.id === b4mUnits[t].id)
            return t;
    return -1;
}
var b4mSave = null, tournamentMode = !1, playAIAs = '';
var toNeighborsDirections = ['SE', 'S', 'SW', 'NW', 'N', 'NE'], fromNeighborsDirections = ['NW', 'N', 'NE', 'SE', 'S', 'SW'];
var canvasBoard, board, canvasHexHighlights, hexHighlights, canvasCountersHighlights, countersHighlights, arrows, handleStep0Click, handleRedeploymentClick, handleCombatAnnounceClick, handleMovementClick, handleReinforcementClick, handleReplacementClick, handleSpecialMovementClick;
function cleanAndSaveBeforeNewPhase(e) {
    e && (b4mSave = {}, b4mSave.units = b4mUnits, b4mSave.cities = [], grid.forEach((function (e) {
        e && e.city && 'none' !== e.city && b4mSave.cities.push({
            position: {
                x: e.x,
                y: e.y
            },
            control: e.control
        });
    })), b4mSave.battles = battles.slice(), b4mSave.current_turn = {}, b4mSave.current_turn.turn = currentTurn.turn, b4mSave.current_turn.army = currentTurn.army, b4mSave.current_turn.phase = currentTurn.phase, b4mSave.current_turn.subphase = currentTurn.subphase, b4mSave.followingReinforcement = followingReinforcement, b4mSave.function_name = e, b4mSave.play_ai_as = playAIAs, window.localStorage.setItem('b4mSave', JSON.stringify(b4mSave))), hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height), countersHighlights.clearRect(0, 0, canvasCountersHighlights.width, canvasCountersHighlights.height), document.getElementById('canvas_step_reinforcement').style.display = 'none', document.getElementById('step_0').style.display = 'none', document.getElementById('step_redeployment_tournament').style.display = 'none', document.getElementById('step_combat').style.display = 'none', document.getElementById('next_step_combat').style.display = 'none', document.getElementById('step_movement').style.display = 'none', document.getElementById('next_step_movement').style.display = 'none', document.getElementById('step_replacement').style.display = 'none', document.getElementById('undo_replacement').style.display = 'none', document.getElementById('next_step_replacement').style.display = 'none', document.getElementById('step_special_movement').style.display = 'none', document.getElementById('next_step_special_movement').style.display = 'none', document.getElementById('skip_to_movement').checked = !1, document.getElementById('skip_to_resolution').checked = !1, document.getElementById('skip_to_other_player').checked = !1, document.getElementById('skip_to_special_movement').checked = !1, document.getElementById('skip_to_combat').checked = !1, document.getElementById('skip_to_combat_after_redeployment').checked = !1, document.removeEventListener('click', handleStep0Click), document.removeEventListener('click', handleRedeploymentClick), document.removeEventListener('click', handleCombatAnnounceClick), document.removeEventListener('click', handleMovementClick), document.removeEventListener('click', handleReinforcementClick), document.removeEventListener('click', handleReplacementClick), document.removeEventListener('click', handleSpecialMovementClick);
}
function indexOfHex(e, t) {
    for (var n = 0; n < t.length; n++)
        if (e.equals(t[n]))
            return n;
    return -1;
}
function highlightHex(e, t, n) {
    var i = t.corners().map(function (e) { return e.add(t.toPoint()); });
    e.beginPath(), e.lineWidth = .1, e.moveTo(i[0].x, i[0].y);
    for (var t_1 = 1; t_1 < i.length; t_1++)
        e.lineTo(i[t_1].x, i[t_1].y);
    e.lineTo(i[0].x, i[0].y), e.fillStyle = n || 'rgba(255, 165, 0, 0.3)', e.closePath(), e.fill(), e.stroke();
}
function clearHex(e, t) {
    e.globalCompositeOperation = 'destination-out', highlightHex(e, t, 'black'), e.globalCompositeOperation = 'source-over';
}
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
function moveUnit(e, t, n) {
    var i = {
        x: e.position.x,
        y: e.position.y
    }, o = Hex(i).center().add(Hex(i).toPoint()), r = null;
    setTimeout((function () {
        var a = setInterval((function () {
            0 === t.length ? (n && countersHighlights.drawImage(document.getElementById('check_counter'), o.x - 40, o.y - 40, 80, 80), clearInterval(a)) : (clearUnit(board, e, o.x - 40, o.y - 40), r && r.id !== e.id && drawUnit(board, r, o.x - 30, o.y - 30), i = t.shift(), r = lookupUnit(Hex(i)), o = Hex(i).center().add(Hex(i).toPoint()), e.position = {
                x: i.x,
                y: i.y
            }, drawUnit(board, e, o.x - 30, o.y - 30));
        }), 300);
    }), 100);
}
function lookupUnit(e) {
    if (e)
        for (var _i = 0, b4mUnits_1 = b4mUnits; _i < b4mUnits_1.length; _i++) {
            var t = b4mUnits_1[_i];
            if (t.position && e.equals(t.position)) {
                var e_3 = {
                    id: t.id,
                    pos: t.pos,
                    army: t.army,
                    type: t.type,
                    size: t.size,
                    combatFull: t.combatFull,
                    combatReduced: t.combatReduced,
                    movement: t.movement,
                    strength: t.strength
                };
                return t.position && (e_3.position = {
                    x: t.position.x,
                    y: t.position.y
                }), e_3;
            }
        }
    return null;
}
function isEZOC(e, t) {
    var n = 'soviet' === t ? 'german' : 'soviet';
    for (var _i = 0, _a = grid.neighborsOf(e); _i < _a.length; _i++) {
        var t_2 = _a[_i];
        if (neighborUnit = lookupUnit(t_2), neighborUnit && neighborUnit.army === n)
            return !0;
    }
    return !1;
}
function drawPositionedUnits() {
    hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height), countersHighlights.clearRect(0, 0, canvasCountersHighlights.width, canvasCountersHighlights.height), board.clearRect(0, 0, canvasBoard.width > 1250 ? 1250 : canvasBoard.width, canvasBoard.height);
    for (var e = 0; e < b4mUnits.length; e++)
        if (b4mUnits[e].position) {
            var t = Hex(b4mUnits[e].position), n = t.center().add(t.toPoint());
            drawUnit(board, b4mUnits[e], n.x - 30, n.y - 30);
        }
}
function drawAvailableUnits(e, t) {
    if (t && t.length > 0) {
        var n = 70 * t.length;
        e.width = n > 300 ? n : 300, e.height = 80;
        var i_1 = e.getContext('2d');
        for (var e_4 = 0; e_4 < t.length; e_4++)
            for (var n_2 = 0; n_2 < b4mUnits.length; n_2++)
                if (t[e_4].id === b4mUnits[n_2].id) {
                    drawUnit(i_1, b4mUnits[n_2], 65 * e_4 + 10, 10);
                    break;
                }
        var o = document.getElementById('frame');
        i_1.drawImage(o, 0, 0, 128, 128, 8, 8, 64, 64);
    }
    else {
        e.width = 300, e.height = 80, e.getContext('2d').clearRect(0, 0, e.width, e.height);
    }
}
function computeBattleOdds() {
    if (battle) {
        var e = grid.get(battle.defendingUnit.position), t = [];
        ('fortification' === e.terrain && 'soviet' === battle.defendingUnit.army || 'forest' === e.terrain) && t.push(e.terrain), !e.city || 'major' !== e.city && 'moscow' !== e.city || t.push('major');
        var n = !0;
        for (var _i = 0, _a = battle.attackingUnits; _i < _a.length; _i++) {
            var t_3 = _a[_i];
            if (-1 === e.river.indexOf(t_3.attackFrom)) {
                n = !1;
                break;
            }
        }
        n && t.push('river');
        var i_2 = 0;
        for (var _b = 0, _c = battle.attackingUnits; _b < _c.length; _b++) {
            var e_5 = _c[_b];
            var t_4 = 'full' === e_5.strength ? e_5.combatFull : e_5.combatReduced;
            3 !== currentTurn.turn && 4 !== currentTurn.turn || 'tank' !== e_5.type || (t_4 /= 2), i_2 += t_4;
        }
        var o = Math.floor(i_2 / ('full' === battle.defendingUnit.strength ? battle.defendingUnit.combatFull : battle.defendingUnit.combatReduced));
        o > 6 && (o = 6), battle.attackingStrength = i_2, battle.modifiers = t, battle.battleOdds = o - t.length;
    }
}
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
                countersHighlights.drawImage(arrows, o * arrows.height, 0, arrows.height, arrows.height, e_7.toPoint().x + (t_5.x + r_1.x) / 2 - arrows.height / 4, e_7.toPoint().y + (t_5.y + r_1.y) / 2 - arrows.height / 4, arrows.height / 2, arrows.height / 2);
            }
        };
        for (var o = 0; o < n.length; o++) {
            _loop_1(o);
        }
    }
    updateDashboardCombat();
}
function updateDashboardCombat() {
    if (document.getElementById('dashboard_combat').innerHTML = '', battles.length > 0 || battle) {
        '' === playAIAs || playAIAs !== currentTurn.army ? document.getElementById('step_combat_tip').innerText = 'Upon choosing a defending unit, all compatible attacking units are selected. Adjust the ones taking part in this battle by clicking on them. Then, add each battle to the stack.' : document.getElementById('step_combat_tip').innerText = 'The enemy is announcing the battles of this turn...', document.getElementById('skip_combat').style.display = 'none', document.getElementById('skip_to_movement').checked = !1, document.getElementById('skip_announce').style.display = 'none', document.getElementById('next_step_combat').style.display = 'none', document.getElementById('skip_to_resolution').checked = !1, document.getElementById('next_step_resolve_battles').style.display = 'none', document.getElementById('dashboard_combat').innerHTML = '<table class="table_battle"></table>';
        for (var e = 0; e < battles.length; e++) {
            var t = document.createElement('tr');
            t.setAttribute('id', 'row' + (new Date).getTime() + '_' + e);
            var n = '<td class="cell_attackers"><img src="img/' + battles[e].attackingUnits[0].army + '_marker.png" /> ' + battles[e].attackingStrength + '</td>', i_4 = '<td class="cell_defender"><img src="img/' + battles[e].defendingUnit.army + '_marker.png" /> ' + ('full' === battles[e].defendingUnit.strength ? battles[e].defendingUnit.combatFull : battles[e].defendingUnit.combatReduced) + '</td>';
            var o = '<td class="cell_modifiers">';
            for (var _i = 0, _a = battles[e].modifiers; _i < _a.length; _i++) {
                var t_6 = _a[_i];
                o += '<img src="img/' + t_6 + '_marker.png" /> ';
            }
            o += '</td>', t.innerHTML = n + i_4 + o + '<td class="cell_odds">' + battles[e].battleOdds + ':1</td>';
            var r = document.createElement('td');
            if (r.setAttribute('class', 'cell_action'), '' === playAIAs || playAIAs !== currentTurn.army) {
                var t_7 = document.createElement('i');
                t_7.setAttribute('id', (new Date).getTime() + '_' + e), t_7.setAttribute('class', 'fa fa-minus-circle'), t_7.setAttribute('style', 'font-size: 1.4em;'), t_7.setAttribute('aria-hidden', 'true'), t_7.addEventListener('click', (function (e) {
                    e.stopPropagation();
                    var t = parseInt(RegExp('[0-9]+_([0-9]+)', 'g').exec(this.id)[1]);
                    battles.splice(t, 1), refreshBattles();
                })), r.appendChild(t_7);
            }
            t.appendChild(r), t.addEventListener('click', (function (e) {
                if ('announce' !== currentTurn.subphase)
                    return;
                e.stopPropagation();
                var t = parseInt(RegExp('row[0-9]+_([0-9]+)', 'g').exec(this.id)[1]);
                refreshBattles(), '' !== playAIAs && playAIAs === currentTurn.army && (document.getElementById('step_combat_tip').innerText = 'The enemy has announced all the battles for this turn. Click below to highlight each battle or proceed to the resolution.', document.getElementById('step_combat_tip').style.display = 'block', document.getElementById('next_step_resolve_battles').style.display = 'block'), document.querySelector('.table_battle > tr:nth-child(' + (t + 1) + ')').style.backgroundColor = 'rgba(0, 0, 255, 0.25)';
                for (var _i = 0, _a = battles[t].attackingUnits; _i < _a.length; _i++) {
                    var e_8 = _a[_i];
                    highlightHex(hexHighlights, grid.get(e_8.position), 'rgba(0, 0, 255, 0.25)');
                }
                var n = grid.get(battles[t].defendingUnit.position);
                highlightHex(hexHighlights, n, 'rgba(0, 0, 255, 0.25)'), window.scrollTo(n.toPoint().x - window.innerWidth / 2, n.toPoint().y - window.innerHeight / 2);
            })), document.getElementById('dashboard_combat').firstChild.appendChild(t);
        }
        if (battle) {
            var e = document.createElement('table');
            e.setAttribute('class', 'table_battle'), e.setAttribute('style', 'background-color: rgba(255, 255, 255, 0.2)');
            var t = document.createElement('tr');
            var n = '<td class="cell_attackers"><img src="img/' + battle.attackingUnits[0].army + '_marker.png" /> ' + battle.attackingStrength + '</td>', i_5 = '<td class="cell_defender"><img src="img/' + battle.defendingUnit.army + '_marker.png" /> ' + ('full' === battle.defendingUnit.strength ? battle.defendingUnit.combatFull : battle.defendingUnit.combatReduced) + '</td>';
            var o = '<td class="cell_modifiers">';
            for (var _b = 0, _c = battle.modifiers; _b < _c.length; _b++) {
                var e_9 = _c[_b];
                o += '<img src="img/' + e_9 + '_marker.png" /> ';
            }
            o += '</td>', t.innerHTML = n + i_5 + o + '<td class="cell_odds">' + battle.battleOdds + ':1</td>';
            var r = document.createElement('td');
            if (r.setAttribute('class', 'cell_action'), '' === playAIAs || playAIAs !== currentTurn.army) {
                var e_10 = document.createElement('i');
                e_10.setAttribute('id', 'add_battle_button'), e_10.setAttribute('class', 'fa fa-plus-circle'), e_10.setAttribute('style', 'font-size: 1.4em;'), e_10.setAttribute('aria-hidden', 'true'), r.appendChild(e_10), r.addEventListener('click', (function (e) {
                    e.stopPropagation(), battle.battleOdds > 0 && (battles.push(battle), battle = null, refreshBattles());
                }));
            }
            t.appendChild(r), e.appendChild(t), document.getElementById('dashboard_combat').appendChild(e);
        }
        else
            '' !== playAIAs && playAIAs === currentTurn.army || (document.getElementById('skip_announce').style.display = 'block', document.getElementById('skip_to_resolution').onclick = function () {
                document.getElementById('next_step_resolve_battles').style.display = this.checked ? 'block' : 'none', document.getElementById('next_step_resolve_battles').onclick = combatResolvePhase;
            });
    }
    else
        document.getElementById('step_combat').style.display = 'block', document.getElementById('step_combat_tip').innerText = 'Announce all the battles of this turn by selecting each set of defending and attacking units (or skip combat and go to the movement phase).', document.getElementById('step_combat_tip').style.display = 'block', document.getElementById('skip_combat').style.display = 'block', document.getElementById('skip_announce').style.display = 'none', document.getElementById('skip_to_resolution').checked = !1, document.getElementById('next_step_resolve_battles').style.display = 'none';
}
var currentTurn = {
    turn: 0,
    army: 'german',
    phase: '',
    subphase: ''
};
function setTurnInfo() {
    var e = '';
    switch (currentTurn.turn) {
        case 1:
            e = 'October 2nd, 1941 - Turn 1/7';
            break;
        case 2:
            e = 'October 10th, 1941 - Turn 2/7';
            break;
        case 3:
            e = 'October 17th, 1941 - Turn 3/7 (Mud)';
            break;
        case 4:
            e = 'November 1st, 1941 - Turn 4/7 (Mud)';
            break;
        case 5:
            e = 'November 16th, 1941 - Turn 5/7';
            break;
        case 6:
            e = 'November 23rd, 1941 - Turn 6/7';
            break;
        case 7:
            e = 'December 1st, 1941 - Turn 7/7';
            break;
        default:
            console.log('ERROR - Invalid turn: ', currentTurn);
    }
    document.getElementById('turn_info_title').innerText = e;
}
function turn1GermanSetupPhase() {
    currentTurn = {
        turn: 1,
        army: 'german',
        phase: 'setup',
        subphase: ''
    }, document.getElementById('turn_info').style.display = 'block', setTurnInfo(), document.getElementById('step_0_tip').innerText = 'german' !== playAIAs ? 'Set up one full-strength German unit on each hex containing a black cross.' : 'The German army sets up one full-strength unit on each hex containing a black cross.', document.getElementById('step_0').style.display = 'block';
    var e = document.getElementById('canvas_step_0'), t = b4mUnits.filter((function (e) {
        return 'german' === e.army;
    }));
    drawAvailableUnits(e, t), handleStep0 = function (n) {
        var i = grid.get(n);
        if (i && i.germanStart) {
            var n_3 = i.center().add(i.toPoint()), o = lookupUnit(i);
            if (o)
                clearUnit(board, o, n_3.x - 40, n_3.y - 40), countersHighlights.clearRect(n_3.x - 40, n_3.y - 40, 80, 80), t.unshift(o), drawAvailableUnits(e, t);
            else {
                var o_1 = t.shift();
                o_1.position = {
                    x: i.x,
                    y: i.y
                }, drawUnit(board, o_1, n_3.x - 30, n_3.y - 30), countersHighlights.drawImage(document.getElementById('delete_counter'), n_3.x - 40, n_3.y - 40, 80, 80), drawAvailableUnits(e, t);
            }
        }
        0 === t.length ? tournamentMode ? (document.getElementById('next_step_0_tournament').style.display = 'block', document.getElementById('next_step_0_tournament_button').onclick = redeploymentPhase) : (document.getElementById('next_step_0').style.display = 'block', document.getElementById('next_step_0_button').onclick = combatAnnouncePhase) : (document.getElementById('next_step_0').style.display = 'none', document.getElementById('next_step_0_tournament').style.display = 'none');
    }, handleStep0Click = function (e) {
        if ('counters_highlights' === e.target.id) {
            var t_8 = Grid.pointToHex(e.offsetX, e.offsetY);
            handleStep0(t_8);
        }
    };
    if ('german' !== playAIAs)
        document.addEventListener('click', handleStep0Click);
    else {
        var e_11 = [
            [{
                    x: 3,
                    y: 6
                }, {
                    x: 3,
                    y: 7
                }, {
                    x: 3,
                    y: 8
                }, {
                    x: 3,
                    y: 4
                }, {
                    x: 2,
                    y: 4
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 1,
                    y: 4
                }, {
                    x: 1,
                    y: 3
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 1,
                    y: 2
                }, {
                    x: 3,
                    y: 9
                }, {
                    x: 3,
                    y: 10
                }, {
                    x: 2,
                    y: 6
                }, {
                    x: 1,
                    y: 5
                }, {
                    x: 1,
                    y: 6
                }, {
                    x: 0,
                    y: 2
                }, {
                    x: 0,
                    y: 3
                }, {
                    x: 2,
                    y: 8
                }, {
                    x: 2,
                    y: 9
                }, {
                    x: 0,
                    y: 5
                }, {
                    x: 1,
                    y: 9
                }, {
                    x: 1,
                    y: 10
                }],
            [{
                    x: 3,
                    y: 8
                }, {
                    x: 3,
                    y: 7
                }, {
                    x: 3,
                    y: 6
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 2,
                    y: 4
                }, {
                    x: 3,
                    y: 4
                }, {
                    x: 1,
                    y: 4
                }, {
                    x: 1,
                    y: 3
                }, {
                    x: 1,
                    y: 2
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 3,
                    y: 10
                }, {
                    x: 3,
                    y: 9
                }, {
                    x: 2,
                    y: 9
                }, {
                    x: 2,
                    y: 8
                }, {
                    x: 2,
                    y: 6
                }, {
                    x: 1,
                    y: 6
                }, {
                    x: 1,
                    y: 5
                }, {
                    x: 0,
                    y: 5
                }, {
                    x: 0,
                    y: 3
                }, {
                    x: 0,
                    y: 2
                }, {
                    x: 1,
                    y: 9
                }, {
                    x: 1,
                    y: 10
                }],
            [{
                    x: 1,
                    y: 1
                }, {
                    x: 1,
                    y: 2
                }, {
                    x: 1,
                    y: 3
                }, {
                    x: 1,
                    y: 4
                }, {
                    x: 2,
                    y: 4
                }, {
                    x: 3,
                    y: 4
                }, {
                    x: 3,
                    y: 6
                }, {
                    x: 3,
                    y: 7
                }, {
                    x: 3,
                    y: 8
                }, {
                    x: 3,
                    y: 9
                }, {
                    x: 3,
                    y: 10
                }, {
                    x: 2,
                    y: 9
                }, {
                    x: 2,
                    y: 8
                }, {
                    x: 2,
                    y: 6
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 1,
                    y: 6
                }, {
                    x: 1,
                    y: 5
                }, {
                    x: 0,
                    y: 2
                }, {
                    x: 0,
                    y: 3
                }, {
                    x: 0,
                    y: 5
                }, {
                    x: 1,
                    y: 9
                }, {
                    x: 1,
                    y: 10
                }],
            [{
                    x: 3,
                    y: 6
                }, {
                    x: 3,
                    y: 9
                }, {
                    x: 3,
                    y: 10
                }, {
                    x: 3,
                    y: 4
                }, {
                    x: 2,
                    y: 4
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 3,
                    y: 7
                }, {
                    x: 3,
                    y: 8
                }, {
                    x: 1,
                    y: 3
                }, {
                    x: 1,
                    y: 2
                }, {
                    x: 1,
                    y: 4
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 2,
                    y: 8
                }, {
                    x: 2,
                    y: 9
                }, {
                    x: 2,
                    y: 6
                }, {
                    x: 1,
                    y: 6
                }, {
                    x: 1,
                    y: 5
                }, {
                    x: 0,
                    y: 2
                }, {
                    x: 0,
                    y: 3
                }, {
                    x: 0,
                    y: 5
                }, {
                    x: 1,
                    y: 9
                }, {
                    x: 1,
                    y: 10
                }]
        ][Math.floor(4 * Math.random())];
        var _loop_2 = function (t_9) {
            setTimeout((function () {
                window.scrollTo(0, grid.get(e_11[t_9]).toPoint().y - window.innerHeight / 2), handleStep0(e_11[t_9]);
            }), 1e3 * (t_9 + 1));
        };
        for (var t_9 = 0; t_9 < e_11.length; t_9++) {
            _loop_2(t_9);
        }
    }
}
var hexSelectedForRedeployment = null;
function redeploymentPhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('redeploymentPhase'), currentTurn.army = 'soviet', currentTurn.phase = 'redeployment', currentTurn.subphase = '', document.getElementById('step_redeployment_tournament').style.display = 'block', document.getElementById('next_step_redeployment_tournament').style.display = 'none', '' === playAIAs || playAIAs !== currentTurn.army ? (document.getElementById('step_redeployment_tournament_tip').innerText = 'Redeploy some, none or all three Russian "reserve" armies  located in the highlighted hexes.', document.getElementById('skip_redeployment_tournament').style.display = 'block', document.getElementById('undo_redeployment_tournament').style.display = 'inline-block') : (document.getElementById('step_redeployment_tournament_tip').innerText = '', document.getElementById('skip_redeployment_tournament').style.display = 'none', document.getElementById('undo_redeployment_tournament').style.display = 'none'), document.getElementById('skip_to_combat_after_redeployment').onclick = function () {
        document.getElementById('next_step_redeployment_tournament').style.display = this.checked ? 'block' : 'none', document.getElementById('next_step_redeployment_tournament').onclick = combatAnnouncePhase, document.getElementById('undo_redeployment_tournament').style.display = this.checked ? 'none' : 'inline-block';
    }, hexSelectedForRedeployment = null;
    var t = [{
            x: 4,
            y: 2
        }, {
            x: 5,
            y: 8
        }, {
            x: 7,
            y: 3
        }], n = function () {
        t.forEach((function (e) {
            var t = lookupUnit(Hex(e));
            t && 'soviet' === t.army && t.position.x === e.x && t.position.y === e.y && highlightHex(hexHighlights, Hex(e));
        }));
    };
    n();
    var i = function (e) {
        'off' === e.terrain || lookupUnit(e) || highlightHex(hexHighlights, e, 'rgba(255, 255, 255, 0.35)');
    }, o = function (e) {
        var o = Hex(grid.get(e)), r = lookupUnit(o);
        if (hexSelectedForRedeployment) {
            if (!lookupUnit(o) && 'off' !== o.terrain && (3 === o.x && (1 === o.y || 2 === o.y) || 4 === o.x && (0 === o.y || 1 === o.y || 2 === o.y) || o.x >= 5)) {
                hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
                var e_12 = hexSelectedForRedeployment.center().add(hexSelectedForRedeployment.toPoint());
                var t_10 = lookupUnit(hexSelectedForRedeployment);
                t_10.position.x = o.x, t_10.position.y = o.y, clearUnit(board, t_10, e_12.x - 40, e_12.y - 40);
                var i_6 = o.center().add(o.toPoint());
                drawUnit(board, t_10, i_6.x - 30, i_6.y - 30), countersHighlights.drawImage(document.getElementById('check_counter'), i_6.x - 40, i_6.y - 40, 80, 80), hexSelectedForRedeployment = null, n();
            }
        }
        else if (hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height), n(), o && r && 'soviet' === r.army && t.filter((function (e) {
            return r.position.x === e.x && r.position.y === e.y;
        })).length > 0) {
            hexSelectedForRedeployment = o, i(grid.get({
                x: 3,
                y: 1
            })), i(grid.get({
                x: 3,
                y: 2
            })), i(grid.get({
                x: 4,
                y: 0
            })), i(grid.get({
                x: 4,
                y: 1
            })), i(grid.get({
                x: 4,
                y: 2
            }));
            for (var e_13 = 5; e_13 < 14; e_13++)
                for (var t_11 = 0; t_11 < 11; t_11++)
                    i(grid.get({
                        x: e_13,
                        y: t_11
                    }));
        }
    };
    handleRedeploymentClick = function (e) {
        var t = Grid.pointToHex(e.offsetX, e.offsetY);
        o(t);
    };
    if ('' === playAIAs || playAIAs !== currentTurn.army)
        document.addEventListener('click', handleRedeploymentClick);
    else {
        hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
        var e_14 = [
            [],
            [
                [{
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }],
                [{
                        x: 7,
                        y: 3
                    }, {
                        x: 8,
                        y: 4
                    }],
                [{
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 7
                    }]
            ],
            [
                [{
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }]
            ],
            [
                [{
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 5
                    }],
                [{
                        x: 5,
                        y: 8
                    }, {
                        x: 7,
                        y: 9
                    }]
            ]
        ][Math.floor(4 * Math.random())];
        if (e_14.length > 0) {
            document.getElementById('step_redeployment_tournament_tip').innerText = 'The enemy has decided to redeploy ' + e_14.length + ' unit' + (e_14.length > 1 ? 's' : '') + ' for this turn.';
            var _loop_3 = function (t_12) {
                setTimeout((function () {
                    window.scrollTo(grid.get(e_14[t_12][0]).toPoint().x - window.innerWidth / 2, grid.get(e_14[t_12][0]).toPoint().y - window.innerHeight / 2), o(e_14[t_12][0]), o(e_14[t_12][1]), t_12 === e_14.length - 1 && (document.getElementById('next_step_redeployment_tournament').style.display = 'block', document.getElementById('next_step_redeployment_tournament').onclick = combatAnnouncePhase);
                }), 2e3 * (t_12 + 1));
            };
            for (var t_12 = 0; t_12 < e_14.length; t_12++) {
                _loop_3(t_12);
            }
        }
        else
            document.getElementById('step_redeployment_tournament_tip').innerText = 'The enemy has decided to not redeploy any unit for this turn.', document.getElementById('next_step_redeployment_tournament').style.display = 'block', document.getElementById('next_step_redeployment_tournament').onclick = combatAnnouncePhase;
    }
}
var battles = [], battle = null, battleResult = '', currentBattle = null;
function combatAnnouncePhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('combatAnnouncePhase'), tournamentMode && 'soviet' === currentTurn.army && 'redeployment' === currentTurn.phase && (currentTurn.army = 'german'), currentTurn.phase = 'combat', currentTurn.subphase = 'announce', document.querySelector('#step_combat > div.hud_title > img').src = 'img/' + currentTurn.army + '_turn.png', document.getElementById('step_combat').style.display = 'block', '' === playAIAs || playAIAs !== currentTurn.army ? (document.getElementById('step_combat_tip').innerText = 'Announce all the battles of this turn by selecting each set of defending and attacking units (or skip combat and go to the movement phase).', document.getElementById('skip_combat').style.display = 'block', document.getElementById('skip_to_movement').onclick = function () {
        document.getElementById('next_step_combat').style.display = this.checked ? 'block' : 'none', document.getElementById('next_step_combat').onclick = movementPhase;
    }) : (document.getElementById('step_combat_tip').innerText = 'The enemy is announcing the battles of this turn...', document.getElementById('skip_combat').style.display = 'none'), document.getElementById('step_combat_tip').style.display = 'block';
    var t = function (e, t) {
        for (var _i = 0, t_13 = t; _i < t_13.length; _i++) {
            var n_4 = t_13[_i];
            for (var _a = 0, _b = n_4.attackingUnits; _a < _b.length; _a++) {
                var t_14 = _b[_a];
                if (e.id === t_14.id)
                    return !0;
            }
        }
        return !1;
    }, n = function (e) {
        var n = 'german' === currentTurn.army ? 'soviet' : 'german';
        var i = grid.get(e);
        if (!i)
            return;
        var o = lookupUnit(i), r = grid.neighborsOf(i);
        if (o && o.army === n && !function (e, t) {
            for (var _i = 0, t_15 = t; _i < t_15.length; _i++) {
                var n_5 = t_15[_i];
                if (e.id === n_5.defendingUnit.id)
                    return !0;
            }
            return !1;
        }(o, battles)) {
            if (!battle || battle.defendingUnit.id !== o.id) {
                battle = null;
                var e_15 = [];
                for (var i_7 = 0; i_7 < r.length; i_7++) {
                    var o_2 = lookupUnit(r[i_7]);
                    o_2 && o_2.army !== n && !t(o_2, battles) && (o_2.attackFrom = toNeighborsDirections[i_7], e_15.push(o_2));
                }
                e_15.length > 0 && (battle = {
                    attackingUnits: e_15,
                    defendingUnit: o
                }), refreshBattles();
            }
        }
        else {
            if (o && o.army !== n && battle && !t(o, battles))
                if (battle.attackingUnits.filter(function (e) { return e.id === o.id; }).length > 0)
                    battle.attackingUnits = battle.attackingUnits.filter(function (e) { return e.id !== o.id; }), 0 === battle.attackingUnits.length && (battle = null);
                else {
                    var e_16 = !1;
                    for (var t_16 = 0; t_16 < r.length; t_16++) {
                        var n_6 = lookupUnit(r[t_16]);
                        if (n_6 && n_6.id === battle.defendingUnit.id) {
                            o.attackFrom = fromNeighborsDirections[t_16], e_16 = !0;
                            break;
                        }
                    }
                    e_16 ? battle.attackingUnits.push(o) : battle = null;
                }
            else
                battle = null;
            refreshBattles();
        }
    };
    handleCombatAnnounceClick = function (e) {
        if ('counters_highlights' === e.target.id) {
            var t_17 = Grid.pointToHex(e.offsetX, e.offsetY);
            n(t_17);
        }
    };
    var i = function () {
        var e = 'german' === currentTurn.army ? 'soviet' : 'german';
        var n = [];
        var i = function (i) {
            var o = grid.neighborsOf(Hex(i.position));
            battle = null;
            var r = [];
            for (var i_8 = 0; i_8 < o.length; i_8++) {
                var a = lookupUnit(o[i_8]);
                a && a.army !== e && !t(a, n) && (a.attackFrom = toNeighborsDirections[i_8], r.push(a));
            }
            r.length > 0 && (battle = {
                attackingUnits: r,
                defendingUnit: i
            }, computeBattleOdds(), ((10 === i.position.x && 2 === i.position.y || 10 === i.position.x && 6 === i.position.y) && battle.battleOdds >= 1 || Hex(i.position).distance(Hex({
                x: 10,
                y: 2
            })) <= 2 && battle.battleOdds >= 1 && r.length > 1 || battle.battleOdds >= 2) && n.push(battle)), battle = null;
        };
        var o = [{
                x: 10,
                y: 2
            }, {
                x: 10,
                y: 1
            }, {
                x: 11,
                y: 2
            }, {
                x: 11,
                y: 3
            }, {
                x: 10,
                y: 3
            }, {
                x: 9,
                y: 3
            }, {
                x: 9,
                y: 2
            }, {
                x: 13,
                y: 5
            }, {
                x: 10,
                y: 6
            }, {
                x: 4,
                y: 5
            }, {
                x: 4,
                y: 6
            }, {
                x: 4,
                y: 7
            }];
        for (var _i = 0, o_3 = o; _i < o_3.length; _i++) {
            var t_18 = o_3[_i];
            var n_7 = lookupUnit(Hex(t_18));
            n_7 && n_7.army === e && n_7.position && n_7.position.x >= 4 && i(n_7);
        }
        for (var _a = 0, _b = b4mUnits.filter((function (t) {
            return t.army === e && t.position && t.position.x >= 2 && !function (e, t) {
                for (var _i = 0, o_4 = o; _i < o_4.length; _i++) {
                    var n_8 = o_4[_i];
                    if (n_8.x === e && n_8.y === t)
                        return !0;
                }
                return !1;
            }(t.position.x, t.position.y);
        })).sort((function (e, t) {
            return t.position.y - e.position.y;
        })); _a < _b.length; _a++) {
            var t_19 = _b[_a];
            i(t_19);
        }
        return n.map((function (e) {
            return {
                x: e.defendingUnit.position.x,
                y: e.defendingUnit.position.y
            };
        }));
    };
    if ('' === playAIAs || playAIAs !== currentTurn.army)
        document.addEventListener('click', handleCombatAnnounceClick);
    else {
        var e_17 = i();
        if (0 === e_17.length)
            document.getElementById('step_combat_tip').innerText = 'The enemy doesn\'t announce any battle for this turn and goes straight to the movement phase.', document.getElementById('next_step_combat').style.display = 'block', document.getElementById('next_step_combat').onclick = movementPhase;
        else {
            var _loop_4 = function (t_20) {
                setTimeout((function () {
                    window.scrollTo(grid.get(e_17[t_20]).toPoint().x - window.innerWidth / 2, grid.get(e_17[t_20]).toPoint().y - window.innerHeight / 2), n(e_17[t_20]), battles.push(battle), battle = null, refreshBattles(), t_20 === e_17.length - 1 && (document.getElementById('step_combat_tip').innerText = 'The enemy has announced all the battles for this turn. Click below to highlight each battle or proceed to the resolution.', document.getElementById('next_step_resolve_battles').style.display = 'block', document.getElementById('next_step_resolve_battles').onclick = combatResolvePhase);
                }), 1500 * (t_20 + 1));
            };
            for (var t_20 = 0; t_20 < e_17.length; t_20++) {
                _loop_4(t_20);
            }
        }
    }
}
var validRetreat = [], singleValidRetreat = [], currentDefendingUnit = null, initialDefendingUnitPosition = {
    x: -1,
    y: -1
};
function handleRetreatSelection(e) {
    var t = grid.get(e);
    if (!t)
        return;
    var n = singleValidRetreat.filter((function (e) {
        return e.equals(t);
    }));
    if (n.length > 0) {
        var e_18 = n[0].from.slice();
        e_18.push({
            x: n[0].x,
            y: n[0].y
        }), moveUnit(currentDefendingUnit, e_18);
        for (var _i = 0, singleValidRetreat_1 = singleValidRetreat; _i < singleValidRetreat_1.length; _i++) {
            var e_19 = singleValidRetreat_1[_i];
            var _loop_5 = function (t_21) {
                clearHex(hexHighlights, Hex(t_21)), battles.filter((function (e) {
                    return Hex(t_21).equals(e.defendingUnit.position);
                })).length > 0 && highlightHex(hexHighlights, Hex(t_21));
            };
            for (var _a = 0, _b = e_19.from; _a < _b.length; _a++) {
                var t_21 = _b[_a];
                _loop_5(t_21);
            }
            clearHex(hexHighlights, e_19);
        }
        clearHex(hexHighlights, Hex(currentDefendingUnit.position)), document.removeEventListener('click', handleRetreatSelectionClick), 'EX' === battleResult ? matchLoss() : advanceAfterCombat();
    }
}
function handleRetreatSelectionClick(e) {
    handleRetreatSelection(Grid.pointToHex(e.offsetX, e.offsetY));
}
function findRetreat(e) {
    var t = grid.get(currentDefendingUnit.position);
    var n = t.center().add(t.toPoint()), i = document.querySelector('.table_battle div.battle_result');
    validRetreat = [];
    var o = 'soviet' === currentDefendingUnit.army ? 'german' : 'soviet', r = grid.neighborsOf(t).filter((function (e) {
        return e && 'off' !== e.terrain && (!lookupUnit(e) || lookupUnit(e).army !== o);
    }));
    for (var _i = 0, r_2 = r; _i < r_2.length; _i++) {
        var e_20 = r_2[_i];
        var n_9 = Hex(e_20);
        isEZOC(n_9, currentDefendingUnit.army) ? n_9.cost = 1 : n_9.cost = 0, identifyRetreat(t, n_9, 1);
    }
    validRetreat.sort((function (e, t) {
        return e.cost - t.cost || e.dist - t.dist;
    }));
    var a = 'reduced' === currentDefendingUnit.strength ? 0 : 1;
    if (validRetreat.length > 0 && validRetreat[0].cost <= a) {
        validRetreat[0].cost > 0 && (currentDefendingUnit.strength = 'reduced', b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = 'reduced', clearUnit(board, currentDefendingUnit, n.x - 40, n.y - 40), drawUnit(board, currentDefendingUnit, n.x - 30, n.y - 30), i.innerText += ' It loses 1 step as it must retreat through an EZOC.');
        var o_6 = validRetreat.filter((function (e) {
            return validRetreat[0].cost === e.cost && validRetreat[0].dist === e.dist;
        }));
        if (singleValidRetreat = [], o_6.length > 1) {
            for (var _a = 0, o_5 = o_6; _a < o_5.length; _a++) {
                var e_21 = o_5[_a];
                var n_10 = !1;
                for (var _b = 0, singleValidRetreat_2 = singleValidRetreat; _b < singleValidRetreat_2.length; _b++) {
                    var t_22 = singleValidRetreat_2[_b];
                    if (t_22.x === e_21.x && t_22.y === e_21.y) {
                        n_10 = !0;
                        break;
                    }
                }
                if (!n_10) {
                    singleValidRetreat.push(e_21);
                    var n_11 = Hex(e_21).center().add(Hex(e_21).toPoint());
                    hexHighlights.setLineDash([10, 10]), hexHighlights.strokeStyle = 'rgba(0, 0, 255, 0.3)', hexHighlights.lineWidth = 7, hexHighlights.beginPath();
                    var i_9 = t.center().add(t.toPoint());
                    var o_7 = void 0;
                    hexHighlights.moveTo(i_9.x, i_9.y);
                    for (var _c = 0, _d = e_21.from; _c < _d.length; _c++) {
                        var t_23 = _d[_c];
                        o_7 = Hex(t_23).center().add(Hex(t_23).toPoint()), hexHighlights.lineTo(o_7.x, o_7.y);
                    }
                    hexHighlights.lineTo(n_11.x, n_11.y), hexHighlights.stroke(), hexHighlights.beginPath(), hexHighlights.lineWidth = 4, hexHighlights.setLineDash([]);
                    var r_3 = 20, a_1 = n_11.x - o_7.x, l = n_11.y - o_7.y, s = Math.atan2(l, a_1);
                    hexHighlights.moveTo(n_11.x, n_11.y), hexHighlights.lineTo(n_11.x - r_3 * Math.cos(s - Math.PI / 6), n_11.y - r_3 * Math.sin(s - Math.PI / 6)), hexHighlights.moveTo(n_11.x, n_11.y), hexHighlights.lineTo(n_11.x - r_3 * Math.cos(s + Math.PI / 6), n_11.y - r_3 * Math.sin(s + Math.PI / 6)), hexHighlights.stroke();
                }
            }
            '' === playAIAs || playAIAs !== currentTurn.army ? (document.querySelector('.table_battle div.battle_result_action').innerHTML = '<strong>Select a valid destination</strong> for the retreat...', document.addEventListener('click', handleRetreatSelectionClick)) : handleRetreatSelection({
                x: o_6[0].x,
                y: o_6[0].y
            });
        }
        else {
            var n_12 = validRetreat[0].from.slice();
            n_12.push({
                x: validRetreat[0].x,
                y: validRetreat[0].y
            }), moveUnit(currentDefendingUnit, n_12), clearHex(hexHighlights, t), e();
        }
    }
    else
        i.innerText += ' But there is no valid retreat so it is eliminated.', clearUnit(board, currentDefendingUnit, n.x - 40, n.y - 40), clearHex(hexHighlights, t), e();
}
function identifyRetreat(e, t, n) {
    var i = 'soviet' === lookupUnit(e).army ? 'german' : 'soviet';
    var o = grid.neighborsOf(t).filter((function (t) {
        return t && 'off' !== t.terrain && (!lookupUnit(t) || lookupUnit(t).army !== i) && t.distance(e) > n;
    }));
    for (var _i = 0, o_8 = o; _i < o_8.length; _i++) {
        var i_10 = o_8[_i];
        var o_9 = Hex(i_10);
        o_9.dist = o_9.distance(e), o_9.from = [], t.from && t.from.length > 0 && (o_9.from = t.from.slice()), o_9.from.push({
            x: t.x,
            y: t.y
        }), o_9.dist === n + 1 && (isEZOC(o_9, lookupUnit(e).army) ? o_9.cost = t.cost + 1 : o_9.cost = t.cost, o_9.cost < 2 && (lookupUnit(o_9) || isEZOC(o_9, lookupUnit(e).army) ? identifyRetreat(e, o_9, n + 1) : validRetreat.push(o_9)));
    }
}
function handleAdvanceAfterCombat(e) {
    var t = grid.get(e);
    if (!t)
        return;
    var n = currentBattle.attackingUnits.filter((function (e) {
        return Hex(e.position).equals(t);
    }));
    n.length > 0 && b4mUnits[b4mUnitsIndex(n[0])].position && (moveUnit(n[0], [initialDefendingUnitPosition]), document.removeEventListener('click', handleAdvanceAfterCombatClick));
}
function handleAdvanceAfterCombatClick(e) {
    handleAdvanceAfterCombat(Grid.pointToHex(e.offsetX, e.offsetY));
}
function advanceAfterCombat() {
    if ('' === playAIAs || playAIAs !== currentTurn.army)
        document.querySelector('.table_battle div.battle_result_action').innerHTML = '<strong>Use the option to advance</strong> into the vacated hex by clicking on the attacking unit, <strong>or continue without</strong>...', document.addEventListener('click', handleAdvanceAfterCombatClick);
    else if ('none' !== grid.get(currentBattle.defendingUnit.position).city || Hex(currentBattle.defendingUnit.position).distance(Hex({
        x: 10,
        y: 2
    })) <= 1 || currentBattle.defendingUnit.position.x <= 8)
        for (var _i = 0, _a = currentBattle.attackingUnits.sort((function (e, t) {
            var n = 'full' === e.strength ? e.combatFull : e.combatReduced, i = 'full' === t.strength ? t.combatFull : t.combatReduced;
            return currentBattle.defendingUnit.position.x <= 8 && e.position.x - t.position.x || i - n;
        })); _i < _a.length; _i++) {
            var e = _a[_i];
            var t = grid.get(e.position);
            if (b4mUnits[b4mUnitsIndex(e)].position && 'moscow' !== t.city && 'major' !== t.city) {
                handleAdvanceAfterCombat(e.position);
                break;
            }
        }
    document.querySelector('.table_battle div.next_battle_button').style.display = 'inline-block';
}
function handleMatchLoss(e) {
    var t = grid.get(e);
    if (!t)
        return;
    var n = -1;
    for (var e_22 = 0; e_22 < currentBattle.attackingUnits.length; e_22++)
        if (Hex(currentBattle.attackingUnits[e_22].position).equals(t) && !currentBattle.attackingUnits[e_22].matchedLoss) {
            n = e_22;
            break;
        }
    if (n > -1) {
        var e_23 = 0, t_24 = document.querySelector('.table_battle div.battle_result'), i_11 = document.querySelector('.table_battle div.battle_result_action'), o = Hex(currentBattle.attackingUnits[n].position).center().add(Hex(currentBattle.attackingUnits[n].position).toPoint());
        clearUnit(board, currentBattle.attackingUnits[n], o.x - 40, o.y - 40), 'reduced' === currentBattle.attackingUnits[n].strength ? (e_23 = currentBattle.attackingUnits[n].combatReduced, t_24.innerText += ' The selected attacking unit is eliminated during the exchange.') : currentBattle.attackingUnits[n].combatFull - currentBattle.attackingUnits[n].combatReduced < matchLossValue - totalMatchedLoss ? (e_23 = currentBattle.attackingUnits[n].combatFull, t_24.innerText += ' The selected attacking unit is eliminated during the exchange.') : (e_23 = currentBattle.attackingUnits[n].combatFull - currentBattle.attackingUnits[n].combatReduced, currentBattle.attackingUnits[n].strength = 'reduced', b4mUnits[b4mUnitsIndex(currentBattle.attackingUnits[n])].strength = 'reduced', drawUnit(board, currentBattle.attackingUnits[n], o.x - 30, o.y - 30), t_24.innerText += ' The selected attacking unit loses 1 step during the exchange.'), currentBattle.attackingUnits[n].matchedLoss = e_23, totalMatchedLoss = 0;
        for (var _i = 0, _a = currentBattle.attackingUnits; _i < _a.length; _i++) {
            var e_24 = _a[_i];
            e_24.matchedLoss && (totalMatchedLoss += e_24.matchedLoss);
        }
        if (totalMatchedLoss >= matchLossValue)
            matchLossValue = 0, totalMatchedLoss = 0, advanceAfterCombat(), document.removeEventListener('click', handleMatchLossClick);
        else {
            var e_25 = matchLossValue - totalMatchedLoss > 1 ? 's' : '';
            i_11.innerHTML += ' with ' + (matchLossValue - totalMatchedLoss) + ' more point' + e_25 + ' to lose...';
        }
    }
}
function handleMatchLossClick(e) {
    handleMatchLoss(Grid.pointToHex(e.offsetX, e.offsetY));
}
var matchLossValue = 0, totalMatchedLoss = 0;
function matchLoss() {
    if (matchLossValue = currentDefendingUnit.combatFull - currentDefendingUnit.combatReduced, 'reduced' === currentDefendingUnit.strength && (matchLossValue = currentDefendingUnit.combatReduced), 1 === currentBattle.attackingUnits.length) {
        var e = document.querySelector('.table_battle div.battle_result'), t = Hex(currentBattle.attackingUnits[0].position).center().add(Hex(currentBattle.attackingUnits[0].position).toPoint());
        clearUnit(board, currentBattle.attackingUnits[0], t.x - 40, t.y - 40), 'reduced' === currentBattle.attackingUnits[0].strength || currentBattle.attackingUnits[0].combatFull - currentBattle.attackingUnits[0].combatReduced < matchLossValue ? (e.innerText += ' The attacking unit is eliminated during the exchange.', document.querySelector('.table_battle div.next_battle_button').style.display = 'inline-block') : (currentBattle.attackingUnits[0].strength = 'reduced', b4mUnits[b4mUnitsIndex(currentBattle.attackingUnits[0])].strength = 'reduced', drawUnit(board, currentBattle.attackingUnits[0], t.x - 30, t.y - 30), e.innerText += ' The attacking unit loses 1 step during the exchange.', advanceAfterCombat());
    }
    else if ('' === playAIAs || playAIAs !== currentTurn.army)
        document.querySelector('.table_battle div.battle_result_action').innerHTML = '<strong>Select the attacking unit(s) to match the defending unit\'s loss</strong> (at least ' + matchLossValue + ' strength points)...', document.addEventListener('click', handleMatchLossClick);
    else {
        var e = currentBattle.attackingUnits.sort((function (e, t) {
            return ('full' === e.strength ? e.combatFull : e.combatReduced) - ('full' === t.strength ? t.combatFull : t.combatReduced);
        })), t = [];
        for (var _i = 0, e_26 = e; _i < e_26.length; _i++) {
            var n = e_26[_i];
            if (10 === n.position.x && 2 === n.position.y || 10 === n.position.x && 6 === n.position.y || 13 === n.position.x && 5 === n.position.y)
                t.push(n);
            else if (handleMatchLoss(n.position), 0 === matchLossValue)
                break;
        }
        0 !== matchLossValue && handleMatchLoss(t[0].position);
    }
}
function handleAttackingUnitLoss(e) {
    var t = grid.get(e);
    if (!t)
        return;
    var n = currentBattle.attackingUnits.filter((function (e) {
        return Hex(e.position).equals(t);
    }));
    if (n.length > 0) {
        var e_27 = document.querySelector('.table_battle div.battle_result'), t_25 = Hex(n[0].position).center().add(Hex(n[0].position).toPoint());
        clearUnit(board, n[0], t_25.x - 40, t_25.y - 40), 'reduced' === n[0].strength ? e_27.innerText += ' The attacking unit strength is already reduced so it is eliminated.' : (n[0].strength = 'reduced', b4mUnits[b4mUnitsIndex(n[0])].strength = 'reduced', drawUnit(board, n[0], t_25.x - 30, t_25.y - 30)), document.querySelector('.table_battle div.next_battle_button').style.display = 'inline-block', document.removeEventListener('click', handleAttackingUnitLossClick);
    }
}
function handleAttackingUnitLossClick(e) {
    handleAttackingUnitLoss(Grid.pointToHex(e.offsetX, e.offsetY));
}
function resolveNextBattle(e) {
    e && e.stopPropagation(), document.removeEventListener('click', handleAdvanceAfterCombatClick), document.removeEventListener('click', handleAttackingUnitLossClick), document.removeEventListener('click', handleMatchLossClick), document.removeEventListener('click', handleRetreatSelectionClick), refreshBattles(), document.getElementById('step_combat').style.display = 'block', document.getElementById('skip_announce').style.display = 'none', document.getElementById('skip_to_resolution').checked = !1, document.getElementById('next_step_resolve_battles').style.display = 'none';
    var t = document.querySelectorAll('.table_battle > tr i');
    for (var _i = 0, t_26 = t; _i < t_26.length; _i++) {
        var e_28 = t_26[_i];
        e_28.parentNode.removeChild(e_28);
    }
    var n = document.querySelectorAll('.table_battle > tr');
    if (n.length > 0) {
        currentBattle = battles.shift();
        var e_29 = 'rgba(0, 0, 255, 0.25)';
        n[0].style.backgroundColor = e_29;
        for (var _a = 0, _b = currentBattle.attackingUnits; _a < _b.length; _a++) {
            var t_27 = _b[_a];
            highlightHex(hexHighlights, grid.get(t_27.position), e_29);
        }
        currentDefendingUnit = currentBattle.defendingUnit, initialDefendingUnitPosition.x = currentDefendingUnit.position.x, initialDefendingUnitPosition.y = currentDefendingUnit.position.y;
        var t_28 = grid.get(currentDefendingUnit.position);
        highlightHex(hexHighlights, t_28, e_29);
        var i_12 = t_28.center().add(t_28.toPoint());
        window.scrollTo(t_28.toPoint().x - window.innerWidth / 2, t_28.toPoint().y - window.innerHeight / 2);
        var o = Math.floor(6 * Math.random()) + 1;
        var r = document.createElement('tr');
        r.innerHTML = '<td colspan="5" style="padding-bottom: 20px;"><img class="die_roll" src="img/' + o + '.png" /><table class="table_battle_odds"><tr><td>1:1</td><td>2:1</td><td>3:1</td><td>4:1</td><td>5:1</td><td>6:1</td></tr><tr><td>DR</td><td>DR</td><td>DR</td><td>DR</td><td>DR</td><td>DRL</td></tr><tr><td>EX</td><td>DR</td><td>DR</td><td>DR</td><td>DRL</td><td>DRL</td></tr><tr><td>EX</td><td>EX</td><td>DR</td><td>EX</td><td>DRL</td><td>DE</td></tr><tr><td>NE</td><td>EX</td><td>EX</td><td>DRL</td><td>DRL</td><td>DE</td></tr><tr><td>NE</td><td>NE</td><td>EX</td><td>DRL</td><td>DE</td><td>DE</td></tr><tr><td>AL</td><td>NE</td><td>DRL</td><td>DE</td><td>DE</td><td>DE</td></tr></table><div class="battle_result"></div><div class="battle_result_action"></div><div class="next_battle_button" style="display:none;" onclick="resolveNextBattle(event);">Next <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div></td>', n.length > 1 ? document.querySelector('.table_battle').insertBefore(r, n[1]) : document.querySelector('.table_battle').appendChild(r);
        var a = document.querySelectorAll('.table_battle_odds td:nth-child(' + currentBattle.battleOdds + ')');
        var l = 'solid thin lightgray';
        for (var _c = 0, a_2 = a; _c < a_2.length; _c++) {
            var e_30 = a_2[_c];
            e_30.style.borderLeft = l, e_30.style.borderRight = l;
        }
        document.querySelector('.table_battle_odds tr:nth-child(1) td:nth-child(' + currentBattle.battleOdds + ')').style.borderTop = l, document.querySelector('.table_battle_odds tr:last-child td:nth-child(' + currentBattle.battleOdds + ')').style.borderBottom = l, document.querySelector('.table_battle_odds tr:nth-child(' + (o + 1) + ')').style.border = l, document.querySelector('.table_battle_odds tr:nth-child(' + (o + 1) + ') td:nth-child(' + currentBattle.battleOdds + ')').style.fontWeight = 'bold';
        var s = t_28.toPoint(), c = document.createElement('div');
        c.setAttribute('class', 'explosion'), c.style.display = 'block', c.style.top = s.y - 10 + 'px', c.style.left = s.x - 10 + 'px', document.body.appendChild(c), battleResult = document.querySelector('.table_battle_odds tr:nth-child(' + (o + 1) + ') td:nth-child(' + currentBattle.battleOdds + ')').innerText;
        var d = document.querySelector('.table_battle div.battle_result');
        switch (battleResult) {
            case 'NE':
                d.innerText = 'The battle has no effect.', document.querySelector('.table_battle div.next_battle_button').style.display = 'inline-block';
                break;
            case 'DR':
                d.innerText = 'The defending unit needs to retreat 2 hexes.', !t_28.city || 'moscow' !== t_28.city && 'major' !== t_28.city || 'full' !== currentDefendingUnit.strength ? findRetreat(advanceAfterCombat) : (currentDefendingUnit.strength = 'reduced', b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = 'reduced', clearUnit(board, currentDefendingUnit, i_12.x - 40, i_12.y - 40), drawUnit(board, currentDefendingUnit, i_12.x - 30, i_12.y - 30), d.innerText += ' But it is in a major city, so it takes a step loss instead and doesn\'t retreat.', document.querySelector('.table_battle div.next_battle_button').style.display = 'inline-block');
                break;
            case 'DRL':
                d.innerText = 'The defending unit loses 1 step and is retreated 2 hexes.', 'reduced' === currentDefendingUnit.strength ? (d.innerText += ' But its strength is already reduced so it is eliminated.', clearUnit(board, currentDefendingUnit, i_12.x - 40, i_12.y - 40), clearHex(hexHighlights, t_28), advanceAfterCombat()) : (currentDefendingUnit.strength = 'reduced', b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = 'reduced', clearUnit(board, currentDefendingUnit, i_12.x - 40, i_12.y - 40), drawUnit(board, currentDefendingUnit, i_12.x - 30, i_12.y - 30), findRetreat(advanceAfterCombat));
                break;
            case 'DE':
                d.innerText = 'The defending unit is eliminated.', clearUnit(board, currentDefendingUnit, i_12.x - 40, i_12.y - 40), clearHex(hexHighlights, t_28), advanceAfterCombat();
                break;
            case 'EX':
                d.innerText = 'Exchange!', 'reduced' === currentDefendingUnit.strength ? (d.innerText += ' The defending unit strength is already reduced so it is eliminated.', clearUnit(board, currentDefendingUnit, i_12.x - 40, i_12.y - 40), clearHex(hexHighlights, t_28), matchLoss()) : (currentDefendingUnit.strength = 'reduced', b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = 'reduced', clearUnit(board, currentDefendingUnit, i_12.x - 40, i_12.y - 40), drawUnit(board, currentDefendingUnit, i_12.x - 30, i_12.y - 30), findRetreat(matchLoss));
                break;
            case 'AL':
                if (d.innerText = 'One attacking unit needs to lose 1 step.', 1 === currentBattle.attackingUnits.length) {
                    var e_31 = Hex(currentBattle.attackingUnits[0].position).center().add(Hex(currentBattle.attackingUnits[0].position).toPoint());
                    clearUnit(board, currentBattle.attackingUnits[0], e_31.x - 40, e_31.y - 40), 'reduced' === currentBattle.attackingUnits[0].strength ? d.innerText += ' The attacking unit strength is already reduced so it is eliminated.' : (currentBattle.attackingUnits[0].strength = 'reduced', b4mUnits[b4mUnitsIndex(currentBattle.attackingUnits[0])].strength = 'reduced', drawUnit(board, currentBattle.attackingUnits[0], e_31.x - 30, e_31.y - 30)), document.querySelector('.table_battle div.next_battle_button').style.display = 'inline-block';
                }
                else if ('' === playAIAs || playAIAs !== currentTurn.army)
                    document.querySelector('.table_battle div.battle_result_action').innerHTML = '<strong>Select the attacking unit</strong> to be impacted...', document.addEventListener('click', handleAttackingUnitLossClick);
                else {
                    handleAttackingUnitLoss(currentBattle.attackingUnits.sort((function (e, t) {
                        return ('full' === e.strength ? e.combatFull : e.combatReduced) - ('full' === t.strength ? t.combatFull : t.combatReduced);
                    }))[0].position);
                }
                break;
            default:
                console.log('ERROR - Invalid battle result: ' + battleResult);
        }
    }
    else {
        document.getElementById('step_combat_tip').innerText = 'All battles have been resolved.', document.getElementById('skip_combat').style.display = 'none', document.getElementById('next_step_combat').style.display = 'block', document.getElementById('next_step_combat').onclick = movementPhase;
        for (var _d = 0, _e = document.querySelectorAll('div.explosion'); _d < _e.length; _d++) {
            var e_32 = _e[_d];
            document.body.removeChild(e_32);
        }
    }
}
function combatResolvePhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('combatResolvePhase'), currentTurn.phase = 'combat', currentTurn.subphase = 'resolve', battle = null, document.getElementById('step_combat_tip').style.display = 'none', resolveNextBattle(e);
}
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
var hexSelected = null, available = [], hasMoved = [];
function handleMovement(e, t) {
    var n = Hex(grid.get(e)), i = lookupUnit(n);
    if (hexSelected) {
        var e_34 = null;
        for (var t_29 = 0; t_29 < available.length; t_29++)
            if (n.equals(available[t_29])) {
                e_34 = Hex(available[t_29]);
                break;
            }
        if (e_34) {
            var t_30 = e_34.path.slice(1);
            t_30.push({
                x: e_34.x,
                y: e_34.y
            });
            var n_15 = lookupUnit(hexSelected);
            moveUnit(n_15, t_30, !0), hasMoved.push(n_15);
        }
        hexSelected = null, available = [], hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
    }
    else {
        var e_35 = !1;
        for (var _i = 0, hasMoved_1 = hasMoved; _i < hasMoved_1.length; _i++) {
            var t_31 = hasMoved_1[_i];
            n && i && t_31.id === i.id && (e_35 = !0);
        }
        if (!n || !i || i.army !== currentTurn.army || e_35)
            return hexSelected = null, available = [], void hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
        hexSelected = Hex(n);
        var o = i.movement;
        var r = t(n, currentTurn.army, o);
        for (var e_36 = 0; e_36 < r.length; e_36++) {
            var t_32 = lookupUnit(grid.get(r[e_36]));
            t_32 && t_32.army === currentTurn.army || (available.push(r[e_36]), highlightHex(hexHighlights, r[e_36], 'rgba(255, 255, 255, 0.35)'));
        }
    }
}
function aiSelectMovesToFocus(e, t, n, i) {
    var o = grid.hexesInRange(e, t).filter((function (e) {
        return e && 'off' !== e.terrain;
    })).map((function (t) {
        return [t, lookupUnit(t), t.distance(e)];
    })).sort((function (e, t) {
        var n = e[1] ? 1 : 0, i = t[1] ? 1 : 0;
        return 'soviet' === currentTurn.army ? e[2] - t[2] || n - i || e[0].x - t[0].x || t[0].y - e[0].y : e[2] - t[2] || n - i || t[0].x - e[0].x || e[0].y - t[0].y;
    }));
    var _loop_6 = function (r, a) {
        if (a[1] && a[1].army !== currentTurn.army)
            return "continue";
        if (n.filter((function (e) {
            return a[0].x === e[1].x && a[0].y === e[1].y;
        })).length > 0)
            return "continue";
        var r_4 = 'soviet' === currentTurn.army ? 4 : 6;
        a[0] && 'forest' === a[0].terrain && r_4--;
        var l = getValidNormalDestinations(a[0], currentTurn.army, r_4, !1);
        if ('soviet' === currentTurn.army && a[0].rail.length > 0) {
            var e_39 = getValidRailDestinations(a[0], 'soviet', 4), t_33 = l.slice();
            var _loop_7 = function (n_16) {
                0 === t_33.filter((function (e) {
                    return n_16.x === e.x && n_16.y === e.y;
                })).length && l.push(n_16);
            };
            for (var _c = 0, e_37 = e_39; _c < e_37.length; _c++) {
                var n_16 = e_37[_c];
                _loop_7(n_16);
            }
        }
        var s = l.filter((function (t) {
            var n = lookupUnit(t);
            return !!(n && n.position && n.army === currentTurn.army && ('soviet' === n.army || n.movement >= r_4 - t.credit || 1 === t.distance(a[0])) && t.distance(e) > a[2] && (e.equals(Hex({
                x: 10,
                y: 2
            })) || Hex(n.position).distance(Hex({
                x: 10,
                y: 2
            })) > ('german' === currentTurn.army ? 2 : 1)) && (e.equals(Hex({
                x: 13,
                y: 5
            })) || Hex(n.position).distance(Hex({
                x: 13,
                y: 5
            })) > 1) && (e.equals(Hex({
                x: 10,
                y: 6
            })) || Hex(n.position).distance(Hex({
                x: 10,
                y: 6
            })) > 1)) && (!i || i === n.type);
        })).map((function (e) {
            return lookupUnit(e);
        })).sort((function (e, t) {
            var n = 'full' === e.strength ? e.combatFull : e.combatReduced;
            return ('full' === t.strength ? t.combatFull : t.combatReduced) - n;
        }));
        if (a[1]) {
            if (a[1].army === currentTurn.army && (!i || i === a[1].type)) {
                var i_13 = s.filter((function (e) {
                    return 'full' === e.strength && 0 === n.filter((function (t) {
                        return e.position.x === t[0].x && e.position.y === t[0].y;
                    })).length;
                })), r_5 = getValidNormalDestinations(a[0], currentTurn.army, a[1].movement);
                if ('soviet' === currentTurn.army && a[0].rail.length > 0) {
                    var e_40 = getValidRailDestinations(a[0], 'soviet', 4), t_34 = r_5.slice();
                    var _loop_8 = function (n_17) {
                        0 === t_34.filter((function (e) {
                            return n_17.x === e.x && n_17.y === e.y;
                        })).length && r_5.push(n_17);
                    };
                    for (var _d = 0, e_38 = e_40; _d < e_38.length; _d++) {
                        var n_17 = e_38[_d];
                        _loop_8(n_17);
                    }
                }
                var l_1 = r_5.filter((function (i) {
                    return !lookupUnit(i) && i.distance(e) > t && 0 === n.filter((function (e) {
                        return i.x === e[1].x && i.y === e[1].y;
                    })).length;
                })).sort((function (t, n) {
                    return t.distance(e) - n.distance(e) || n.x - t.x;
                }));
                if (i_13.length > 0 && l_1.length > 0 && ('reduced' === a[1].strength || 'full' === a[1].strength && i_13[0].combatFull > a[1].combatFull)) {
                    n.push([{
                            x: a[0].x,
                            y: a[0].y
                        }, {
                            x: l_1[0].x,
                            y: l_1[0].y
                        }]), n.push([i_13[0].position, {
                            x: a[0].x,
                            y: a[0].y
                        }]);
                    for (var e_41 = 0; e_41 < o.length; e_41++)
                        if (o[e_41][0].x === i_13[0].position.x && o[e_41][0].y === i_13[0].position.y) {
                            o[e_41][1] = null;
                            break;
                        }
                }
            }
        }
        else {
            var t_35 = !1;
            var _loop_9 = function (e_42) {
                if (0 === n.filter((function (t) {
                    return e_42.position.x === t[0].x && e_42.position.y === t[0].y;
                })).length) {
                    n.push([e_42.position, {
                            x: a[0].x,
                            y: a[0].y
                        }]), t_35 = !0;
                    for (var t_36 = 0; t_36 < o.length; t_36++)
                        if (o[t_36][0].x === e_42.position.x && o[t_36][0].y === e_42.position.y) {
                            o[t_36][1] = null;
                            break;
                        }
                    return "break";
                }
            };
            for (var _e = 0, s_2 = s; _e < s_2.length; _e++) {
                var e_42 = s_2[_e];
                var state_1 = _loop_9(e_42);
                if (state_1 === "break")
                    break;
            }
            if (!t_35 && a[2] > 0) {
                var _loop_10 = function (r_6) {
                    var e_43 = lookupUnit(r_6);
                    if (e_43 && e_43.position && e_43.army === currentTurn.army && (!i || i === e_43.type) && 0 === n.filter((function (t) {
                        return e_43.position.x === t[0].x && e_43.position.y === t[0].y;
                    })).length) {
                        n.push([e_43.position, {
                                x: a[0].x,
                                y: a[0].y
                            }]), t_35 = !0;
                        for (var t_37 = 0; t_37 < o.length; t_37++)
                            if (o[t_37][0].x === e_43.position.x && o[t_37][0].y === e_43.position.y) {
                                o[t_37][1] = null;
                                break;
                            }
                        return "break";
                    }
                };
                for (var _f = 0, _g = grid.neighborsOf(a[0]).filter((function (t) {
                    return t && t.distance(e) === a[2];
                })); _f < _g.length; _f++) {
                    var r_6 = _g[_f];
                    var state_2 = _loop_10(r_6);
                    if (state_2 === "break")
                        break;
                }
            }
            if (!t_35 && 1 === a[2] && o[0][1] && o[0][1].army === currentTurn.army && 0 === n.filter((function (e) {
                return o[0][1].position.x === e[0].x && o[0][1].position.y === e[0].y;
            })).length) {
                var r_7 = grid.neighborsOf(e).map((function (e) {
                    return lookupUnit(e);
                })).filter((function (e) {
                    return e && e.army === currentTurn.army && (!i || i === e.type) && 0 === n.filter((function (t) {
                        return e.position.x === t[0].x && e.position.y === t[0].y;
                    })).length;
                })).sort((function (e, t) {
                    var n = 'full' === e.strength ? e.combatFull : e.combatReduced;
                    return ('full' === t.strength ? t.combatFull : t.combatReduced) - n;
                }));
                if (r_7.length > 0) {
                    n.push([o[0][1].position, {
                            x: a[0].x,
                            y: a[0].y
                        }]), n.push([r_7[0].position, o[0][1].position]);
                    for (var e_44 = 1; e_44 < o.length; e_44++)
                        if (o[e_44][0].x === r_7[0].position.x && o[e_44][0].y === r_7[0].position.y) {
                            o[e_44][1] = null;
                            break;
                        }
                    t_35 = !0;
                }
            }
        }
    };
    for (var _i = 0, _a = o.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], r = _b[0], a = _b[1];
        _loop_6(r, a);
    }
}
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
var followingReinforcement = !1;
function reinforcementPhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('reinforcementPhase'), currentTurn.army = 'soviet', currentTurn.phase = 'replacement', currentTurn.subphase = 'reinforcement', document.getElementById('step_replacement_count').innerHTML = '', document.getElementById('skip_replacement').style.display = 'none', document.getElementById('undo_replacement').style.display = 'none', document.getElementById('next_step_replacement').style.display = 'none', document.getElementById('next_step_reinforcement').style.display = 'none', document.getElementById('step_replacement').style.display = 'block', document.querySelector('#step_replacement > div.hud_title > img').src = 'img/' + currentTurn.army + '_turn.png', '' === playAIAs || playAIAs !== currentTurn.army ? (document.getElementById('step_replacement_tip').innerText = 'Place the reinforcement unit in the eligible area of the map.', document.getElementById('undo_replacement').style.display = 'inline-block') : (document.getElementById('step_replacement_tip').innerText = 'The enemy places the reinforcement unit in the eligible area of the map.', document.getElementById('undo_replacement').style.display = 'none');
    var t = b4mGrid.filter((function (e) {
        var t = grid.get({
            x: e.x,
            y: e.y
        }), n = !1;
        return !t.sovietReplacement || lookupUnit(t) || isEZOC(t, 'soviet') || (highlightHex(hexHighlights, t), n = !0), n;
    })).sort((function (e, t) {
        var n = e.rail ? e.rail.length : 0;
        return (t.rail ? t.rail.length : 0) - n || e.y - t.y;
    })), n = document.getElementById('canvas_step_reinforcement');
    n.style.display = 'block';
    var i = b4mUnits.filter((function (e) {
        return 'soviet' === e.army && 'shock' === e.type;
    }));
    drawAvailableUnits(n, i);
    var o = function (e) {
        var o = grid.get(e), r = -1;
        for (var e_45 = 0; e_45 < t.length; e_45++)
            if (Hex(t[e_45]).equals(o)) {
                r = e_45;
                break;
            }
        if (r > -1) {
            var e_46 = o.center().add(o.toPoint()), t_40 = lookupUnit(o);
            if (t_40)
                clearUnit(board, t_40, e_46.x - 40, e_46.y - 40), countersHighlights.clearRect(e_46.x - 40, e_46.y - 40, 80, 80), i.unshift(t_40), drawAvailableUnits(n, i);
            else {
                var t_41 = i.shift();
                t_41.position = {
                    x: o.x,
                    y: o.y
                }, drawUnit(board, t_41, e_46.x - 30, e_46.y - 30), countersHighlights.drawImage(document.getElementById('delete_counter'), e_46.x - 40, e_46.y - 40, 80, 80), drawAvailableUnits(n, i);
            }
        }
        0 === i.length ? (followingReinforcement = !0, document.getElementById('next_step_reinforcement').style.display = 'block', document.getElementById('next_step_reinforcement').onclick = replacementPhase) : document.getElementById('next_step_reinforcement').style.display = 'none';
    };
    handleReinforcementClick = function (e) {
        if ('counters_highlights' === e.target.id) {
            var t_42 = Grid.pointToHex(e.offsetX, e.offsetY);
            o(t_42);
        }
    };
    if (0 === t.length)
        followingReinforcement = !0, document.getElementById('step_replacement_tip').innerText += ' But there is no valid location, so the only choice is to move to the next phase.', document.getElementById('next_step_reinforcement').style.display = 'block', document.getElementById('next_step_reinforcement').onclick = replacementPhase;
    else if ('' === playAIAs || playAIAs !== currentTurn.army)
        document.addEventListener('click', handleReinforcementClick);
    else {
        var e_47 = function () {
            var e = [];
            return t.length > 0 && e.push({
                x: t[0].x,
                y: t[0].y
            }), e;
        }();
        var _loop_14 = function (t_43) {
            setTimeout((function () {
                window.scrollTo(grid.get(e_47[t_43]).toPoint().x - window.innerWidth / 2, grid.get(e_47[t_43]).toPoint().y - window.innerHeight / 2), o(e_47[t_43]);
            }), 1500 * (t_43 + 1));
        };
        for (var t_43 = 0; t_43 < e_47.length; t_43++) {
            _loop_14(t_43);
        }
    }
}
var isInCommunication = function (e, t) {
    var n = Hex(grid.get(e));
    if ('soviet' === t ? n.sovietReplacement : n.germanReplacement)
        return !0;
    var i = 'soviet' === t ? 10 * (13 - n.x) : 10 * n.x, o = 'german' === t ? 'soviet' : 'german';
    n.credit = i, n.path = [];
    var r = [n], a = [n], l = 0;
    for (; r.length > 0;) {
        var e_48 = r.shift();
        l++;
        var n_19 = 'soviet' === t ? e_48.sovietReplacement : e_48.germanReplacement, i_17 = lookupUnit(e_48);
        if (l > 1 && n_19 && (!i_17 || i_17.army === t) && !isEZOC(e_48, t))
            return !0;
        for (var _i = 0, _a = grid.neighborsOf(e_48); _i < _a.length; _i++) {
            var n_20 = _a[_i];
            var i_18 = Hex(n_20);
            if (i_18 && 'off' !== i_18.terrain) {
                i_18.credit = e_48.credit - 1;
                var n_21 = lookupUnit(i_18);
                n_21 && n_21.army === o && (i_18.credit = -1), isEZOC(i_18, t) && i_18.credit > -1 && (i_18.credit = 0);
                var l_2 = indexOfHex(i_18, a);
                l_2 < 0 ? i_18.credit > -1 && (a.push(i_18), i_18.path = e_48.path.slice(), i_18.path.push({
                    x: e_48.x,
                    y: e_48.y
                }), r.push(i_18)) : i_18.credit > a[l_2].credit && (a[l_2].credit = i_18.credit, i_18.path = e_48.path.slice(), i_18.path.push({
                    x: e_48.x,
                    y: e_48.y
                }), r.push(i_18));
            }
        }
    }
    return !1;
};
function replacementPhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('replacementPhase'), 'german' === currentTurn.army ? currentTurn.army = 'soviet' : (followingReinforcement || (currentTurn.turn++, setTurnInfo(), currentTurn.army = 'german'), followingReinforcement = !1), currentTurn.phase = 'replacement', currentTurn.subphase = 'standard', document.getElementById('step_replacement').style.display = 'block', document.getElementById('next_step_reinforcement').style.display = 'none', document.querySelector('#step_replacement > div.hud_title > img').src = 'img/' + currentTurn.army + '_turn.png', '' === playAIAs || playAIAs !== currentTurn.army ? (document.getElementById('step_replacement_tip').innerText = 'Place new half-strength units in the eligible area of the map or flip a half-strength unit that is currently on the map over to its full-strength side.', document.getElementById('skip_replacement').style.display = 'block', document.getElementById('undo_replacement').style.display = 'inline-block') : (document.getElementById('step_replacement_tip').innerText = 'The enemy places new half-strength units in the eligible area of the map or flips half-strength units that are currently on the map over to their full-strength side.', document.getElementById('skip_replacement').style.display = 'none', document.getElementById('undo_replacement').style.display = 'none'), document.getElementById('skip_to_special_movement').onclick = function () {
        document.getElementById('next_step_replacement').style.display = this.checked ? 'block' : 'none', document.getElementById('next_step_replacement').onclick = specialMovementPhase, document.getElementById('undo_replacement').style.display = this.checked ? 'none' : 'inline-block';
    };
    var t = 0;
    t = 'soviet' === currentTurn.army ? 3 === currentTurn.turn || 4 === currentTurn.turn ? 4 : 5 : 1;
    var n = function () {
        t > 0 ? '' === playAIAs || playAIAs !== currentTurn.army ? document.getElementById('step_replacement_count').innerHTML = 'You have <strong>' + t + '</strong> replacement step' + (t > 1 ? 's' : '') + ' left to assign.' : document.getElementById('step_replacement_count').innerHTML = 'The enemy has <strong>' + t + '</strong> replacement step' + (t > 1 ? 's' : '') + ' left to assign.' : ('' === playAIAs || playAIAs !== currentTurn.army ? document.getElementById('step_replacement_count').innerHTML = 'You have finished assigning your replacements.' : document.getElementById('step_replacement_count').innerHTML = 'The enemy has finished assigning replacements.', document.getElementById('skip_replacement').style.display = 'none', document.getElementById('next_step_replacement').style.display = 'block', document.getElementById('next_step_replacement').onclick = specialMovementPhase);
    };
    n();
    var i = function () {
        var e = b4mUnits.filter((function (e) {
            return e.army === currentTurn.army && ('shock' !== e.type || currentTurn.turn > 4) && !e.position;
        })).sort((function (e, t) {
            return 'infantry' === e.type && 'tank' === t.type || 'shock' === t.type ? 1 : 'tank' === e.type && 'infantry' === t.type || 'shock' === e.type ? -1 : t.combatFull - e.combatFull;
        }));
        return 0 === e.length ? null : (e[0].strength = 'reduced', e[0]);
    };
    var o = [];
    i() && (o = b4mGrid.filter((function (e) {
        var t = grid.get({
            x: e.x,
            y: e.y
        }), n = !1;
        return !('soviet' === currentTurn.army ? t.sovietReplacement : t.germanReplacement) || lookupUnit(t) || isEZOC(t, currentTurn.army) ? t.city && 'none' !== t.city && t.control === currentTurn.army && !lookupUnit(t) && ('soviet' === currentTurn.army && 'moscow' === t.city || isInCommunication(t, currentTurn.army)) && (highlightHex(hexHighlights, t), n = !0) : (highlightHex(hexHighlights, t), n = !0), n;
    })).sort((function (e, t) {
        var n = 0;
        switch (e.city) {
            case 'moscow':
                n = 3;
                break;
            case 'major':
                n = 2;
                break;
            case 'normal':
                n = 1;
        }
        var i = 0;
        switch (t.city) {
            case 'moscow':
                i = 3;
                break;
            case 'major':
                i = 2;
                break;
            case 'normal':
                i = 1;
        }
        return i - n || e.y - t.y;
    })));
    var r = b4mUnits.filter((function (e) {
        return !(e.army !== currentTurn.army || 'reduced' !== e.strength || !e.position || !('soviet' === currentTurn.army && 'moscow' === grid.get(e.position).city || isInCommunication(Hex(e.position), currentTurn.army))) && (highlightHex(hexHighlights, Hex(e.position)), !0);
    }));
    var a = function (e) {
        if (e && e.x >= 0 && e.y >= 0) {
            var a_3 = Hex(grid.get(e)), l = lookupUnit(a_3);
            if (a_3 && t > 0) {
                var e_49 = -1;
                for (var t_44 = 0; t_44 < o.length; t_44++)
                    if (Hex(o[t_44]).equals(a_3)) {
                        e_49 = t_44;
                        break;
                    }
                if (e_49 > -1) {
                    var r_8 = i();
                    if (r_8) {
                        clearHex(hexHighlights, a_3);
                        var i_19 = a_3.center().add(a_3.toPoint());
                        r_8.position = {
                            x: a_3.x,
                            y: a_3.y
                        }, drawUnit(board, r_8, i_19.x - 30, i_19.y - 30), countersHighlights.drawImage(document.getElementById('check_counter'), i_19.x - 40, i_19.y - 40, 80, 80), o.splice(e_49, 1), t--, n();
                    }
                }
                else if (l && l.army === currentTurn.army) {
                    var e_50 = -1;
                    for (var t_45 = 0; t_45 < r.length; t_45++)
                        if (Hex(r[t_45].position).equals(a_3)) {
                            e_50 = t_45;
                            break;
                        }
                    if (e_50 > -1) {
                        r[e_50].strength = 'full', clearHex(hexHighlights, a_3);
                        var i_20 = a_3.center().add(a_3.toPoint());
                        drawUnit(board, r[e_50], i_20.x - 30, i_20.y - 30), countersHighlights.drawImage(document.getElementById('check_counter'), i_20.x - 40, i_20.y - 40, 80, 80), r.splice(e_50, 1), t--, n();
                    }
                }
            }
        }
    };
    handleReplacementClick = function (e) {
        var t = Grid.pointToHex(e.offsetX, e.offsetY);
        a(t);
    };
    if ('' === playAIAs || playAIAs !== currentTurn.army)
        document.addEventListener('click', handleReplacementClick);
    else {
        var e_51 = function () {
            var e = [];
            isStrategicCityHex = function (e, t) {
                if (10 === e && 2 === t || 10 === e && 6 === t || currentTurn.turn > 1 && 13 === e && 5 === t || currentTurn.turn < 4 && 7 === e && 3 === t)
                    return !0;
            }, isStrategicMoscowAreaHex = function (e, t) {
                return Hex({
                    x: e,
                    y: t
                }).distance(Hex({
                    x: 10,
                    y: 2
                })) < 2;
            }, isStrategicTulaAreaHex = function (e, t) {
                return Hex({
                    x: e,
                    y: t
                }).distance(Hex({
                    x: 10,
                    y: 6
                })) < 2;
            }, isStrategicRyazanAreaHex = function (e, t) {
                return Hex({
                    x: e,
                    y: t
                }).distance(Hex({
                    x: 13,
                    y: 5
                })) < 2;
            }, isStrategicRailwayHex = function (e, t) {
                return 13 === e && 3 === t || 13 === e && 2 === t || 13 === e && 1 === t || 11 === e && 1 === t || 11 === e && 3 === t || 12 === e && 0 === t;
            }, 'soviet' === currentTurn.army ? r.sort((function (e, t) {
                return e.position.x - t.position.x;
            })) : r.sort((function (e, t) {
                return t.combatFull - e.combatFull || t.position.x - e.position.x;
            })), 'soviet' === currentTurn.army ? o.sort((function (e, t) {
                return e.y - t.y;
            })) : o.sort((function (e, t) {
                return t.x - e.x;
            }));
            var _loop_16 = function (n_22) {
                if (e.length === t)
                    return "break";
                isStrategicCityHex(n_22.position.x, n_22.position.y) && 0 === e.filter((function (e) {
                    return n_22.position.x === e.x && n_22.position.y === e.y;
                })).length && e.push({
                    x: n_22.position.x,
                    y: n_22.position.y
                });
            };
            for (var _i = 0, r_9 = r; _i < r_9.length; _i++) {
                var n_22 = r_9[_i];
                var state_3 = _loop_16(n_22);
                if (state_3 === "break")
                    break;
            }
            var _loop_17 = function (n_23) {
                if (e.length === t)
                    return "break";
                isStrategicCityHex(n_23.x, n_23.y) && 0 === e.filter((function (e) {
                    return n_23.x === e.x && n_23.y === e.y;
                })).length && e.push({
                    x: n_23.x,
                    y: n_23.y
                });
            };
            for (var _a = 0, o_12 = o; _a < o_12.length; _a++) {
                var n_23 = o_12[_a];
                var state_4 = _loop_17(n_23);
                if (state_4 === "break")
                    break;
            }
            var _loop_18 = function (n_24) {
                if (e.length === t)
                    return "break";
                isStrategicMoscowAreaHex(n_24.position.x, n_24.position.y) && 0 === e.filter((function (e) {
                    return n_24.position.x === e.x && n_24.position.y === e.y;
                })).length && e.push({
                    x: n_24.position.x,
                    y: n_24.position.y
                });
            };
            for (var _b = 0, r_10 = r; _b < r_10.length; _b++) {
                var n_24 = r_10[_b];
                var state_5 = _loop_18(n_24);
                if (state_5 === "break")
                    break;
            }
            var _loop_19 = function (n_25) {
                if (e.length === t)
                    return "break";
                isStrategicTulaAreaHex(n_25.position.x, n_25.position.y) && 0 === e.filter((function (e) {
                    return n_25.position.x === e.x && n_25.position.y === e.y;
                })).length && e.push({
                    x: n_25.position.x,
                    y: n_25.position.y
                });
            };
            for (var _c = 0, r_11 = r; _c < r_11.length; _c++) {
                var n_25 = r_11[_c];
                var state_6 = _loop_19(n_25);
                if (state_6 === "break")
                    break;
            }
            var _loop_20 = function (n_26) {
                if (e.length === t)
                    return "break";
                isStrategicRyazanAreaHex(n_26.position.x, n_26.position.y) && 0 === e.filter((function (e) {
                    return n_26.position.x === e.x && n_26.position.y === e.y;
                })).length && e.push({
                    x: n_26.position.x,
                    y: n_26.position.y
                });
            };
            for (var _d = 0, r_12 = r; _d < r_12.length; _d++) {
                var n_26 = r_12[_d];
                var state_7 = _loop_20(n_26);
                if (state_7 === "break")
                    break;
            }
            if ('soviet' === currentTurn.army) {
                var _loop_21 = function (n_27) {
                    if (e.length === t)
                        return "break";
                    isStrategicRailwayHex(n_27.position.x, n_27.position.y) && 0 === e.filter((function (e) {
                        return n_27.position.x === e.x && n_27.position.y === e.y;
                    })).length && e.push({
                        x: n_27.position.x,
                        y: n_27.position.y
                    });
                };
                for (var _e = 0, r_13 = r; _e < r_13.length; _e++) {
                    var n_27 = r_13[_e];
                    var state_8 = _loop_21(n_27);
                    if (state_8 === "break")
                        break;
                }
                var _loop_22 = function (n_28) {
                    if (e.length === t)
                        return "break";
                    isStrategicRailwayHex(n_28.x, n_28.y) && 0 === e.filter((function (e) {
                        return n_28.x === e.x && n_28.y === e.y;
                    })).length && e.push({
                        x: n_28.x,
                        y: n_28.y
                    });
                };
                for (var _f = 0, o_13 = o; _f < o_13.length; _f++) {
                    var n_28 = o_13[_f];
                    var state_9 = _loop_22(n_28);
                    if (state_9 === "break")
                        break;
                }
            }
            var n = i(), a = 'german' === currentTurn.army && r.length > 0 && 'infantry' === r[0].type && n && 'tank' === n.type;
            if ('soviet' === currentTurn.turn || !a) {
                var _loop_23 = function (n_29) {
                    if (e.length === t)
                        return "break";
                    0 === e.filter((function (e) {
                        return n_29.position.x === e.x && n_29.position.y === e.y;
                    })).length && e.push({
                        x: n_29.position.x,
                        y: n_29.position.y
                    });
                };
                for (var _g = 0, r_14 = r; _g < r_14.length; _g++) {
                    var n_29 = r_14[_g];
                    var state_10 = _loop_23(n_29);
                    if (state_10 === "break")
                        break;
                }
            }
            var _loop_24 = function (n_30) {
                if (e.length === t)
                    return "break";
                0 === e.filter((function (e) {
                    return n_30.x === e.x && n_30.y === e.y;
                })).length && e.push({
                    x: n_30.x,
                    y: n_30.y
                });
            };
            for (var _h = 0, o_14 = o; _h < o_14.length; _h++) {
                var n_30 = o_14[_h];
                var state_11 = _loop_24(n_30);
                if (state_11 === "break")
                    break;
            }
            return e;
        }();
        if (0 === e_51.length)
            t = 0, n();
        else {
            var _loop_15 = function (i_21) {
                setTimeout((function () {
                    window.scrollTo(grid.get(e_51[i_21]).toPoint().x - window.innerWidth / 2, grid.get(e_51[i_21]).toPoint().y - window.innerHeight / 2), a(e_51[i_21]), i_21 === e_51.length - 1 && t > 0 && (t = 0, n());
                }), 1e3 * (i_21 + 1));
            };
            for (var i_21 = 0; i_21 < e_51.length; i_21++) {
                _loop_15(i_21);
            }
        }
    }
}
function getValidRailDestinations(e, t, n) {
    var i = Hex(e), o = [];
    if (i.rail && i.rail.length > 0) {
        var e_52 = 'german' === t ? 'soviet' : 'german';
        i.credit = n, i.path = [];
        var r = [i], a = [i], l = 0;
        for (; r.length > 0;) {
            var n_31 = r.shift();
            l++, l > 1 && o.push(n_31);
            var i_22 = grid.neighborsOf(n_31), s = [];
            for (var _i = 0, _a = n_31.rail; _i < _a.length; _i++) {
                var e_53 = _a[_i];
                s.push(i_22[toNeighborsDirections.indexOf(e_53)]);
            }
            for (var _b = 0, s_3 = s; _b < s_3.length; _b++) {
                var i_23 = s_3[_b];
                var o_15 = Hex(i_23);
                if (o_15 && 'off' !== o_15.terrain) {
                    o_15.credit = n_31.credit - 1;
                    var i_24 = lookupUnit(o_15);
                    i_24 && i_24.army === e_52 && (o_15.credit = -1), isEZOC(o_15, t) && o_15.credit > -1 && (o_15.credit = 0);
                    var l_3 = indexOfHex(o_15, a);
                    l_3 < 0 ? o_15.credit > -1 && (a.push(o_15), o_15.path = n_31.path.slice(), o_15.path.push({
                        x: n_31.x,
                        y: n_31.y
                    }), r.push(o_15)) : o_15.credit > a[l_3].credit && (a[l_3].credit = o_15.credit, o_15.path = n_31.path.slice(), o_15.path.push({
                        x: n_31.x,
                        y: n_31.y
                    }), r.push(o_15));
                }
            }
        }
    }
    return o;
}
function getValidPanzerDestinations(e, t, n) {
    var i = lookupUnit(e);
    return i && 'german' === i.army && 'tank' === i.type ? getValidNormalDestinations(e, t, n) : [];
}
function specialMovementPhase(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('specialMovementPhase'), currentTurn.phase = 'special movement', currentTurn.subphase = '', document.getElementById('step_special_movement').style.display = 'block', document.querySelector('#step_special_movement > div.hud_title > img').src = 'img/' + currentTurn.army + '_turn.png';
    var t = 'soviet' === currentTurn.army ? 'All units that begin this phase on a rail line may move along it.' : 'All armor/panzer units may move.';
    '' === playAIAs || playAIAs !== currentTurn.army ? (document.getElementById('step_special_movement_tip').innerText = t + ' Select the ones you choose to move and their destination.', document.getElementById('skip_special_movement').style.display = 'block', document.getElementById('skip_to_combat').onclick = function () {
        document.getElementById('next_step_special_movement').style.display = this.checked ? 'block' : 'none', document.getElementById('next_step_special_movement').onclick = combatAnnouncePhase, document.getElementById('undo_special_movement').style.display = this.checked ? 'none' : 'inline-block';
    }, document.getElementById('undo_special_movement').style.display = 'inline-block') : (document.getElementById('step_special_movement_tip').innerText = '', document.getElementById('skip_special_movement').style.display = 'none', document.getElementById('undo_special_movement').style.display = 'none'), hexSelected = null, available = [], hasMoved = [], handleSpecialMovementClick = function (e) {
        var t = Grid.pointToHex(e.offsetX, e.offsetY);
        'soviet' === currentTurn.army ? handleMovement(t, getValidRailDestinations) : handleMovement(t, getValidPanzerDestinations);
    };
    '' === playAIAs || playAIAs !== currentTurn.army ? document.addEventListener('click', handleSpecialMovementClick) : (document.getElementById('step_special_movement_tip').innerHTML = '<i class="fa fa-spinner fa-spin" style="font-size: 2.5em; margin-left: 12px;"></i>', setTimeout((function () {
        var e = 'soviet' === currentTurn.army ? function () {
            var e = [];
            var t = function (t) {
                var n = b4mUnits.filter((function (e) {
                    return 'german' === e.army && e.position && Hex(e.position).distance(t) < 2;
                })).sort((function (e, n) {
                    var i = 'full' === e.strength ? e.combatFull : e.combatReduced, o = 'full' === n.strength ? n.combatFull : n.combatReduced;
                    return Hex(e.position).distance(t) - Hex(n.position).distance(t) || i - o;
                })), i = [];
                var _loop_27 = function (o) {
                    var n_33 = [], r = [];
                    var a = grid.get(o.position), l = grid.neighborsOf(a);
                    for (var _a = 0, l_4 = l; _a < l_4.length; _a++) {
                        var e_55 = l_4[_a];
                        if (!e_55)
                            continue;
                        var a_4 = !1;
                        for (var _b = 0, i_25 = i; _b < i_25.length; _b++) {
                            var t_46 = i_25[_b];
                            if (e_55.x === t_46.x && e_55.y === t_46.y) {
                                a_4 = !0;
                                break;
                            }
                        }
                        if (!a_4 && (i.push(e_55), e_55 && e_55.rail.length > 0 && !lookupUnit(e_55))) {
                            var i_26 = getValidRailDestinations(e_55, 'soviet', 4).filter((function (e) {
                                var n = lookupUnit(e);
                                return n && 'soviet' === n.army && Hex(n.position).distance(t) > Hex(o.position).distance(t) && Hex(n.position).distance(Hex({
                                    x: 10,
                                    y: 2
                                })) > 1;
                            })).sort((function (e, t) {
                                var n = lookupUnit(e), i = lookupUnit(t), o = 'full' === n.strength ? n.combatFull : n.combatReduced;
                                return ('full' === i.strength ? i.combatFull : i.combatReduced) - o;
                            }));
                            i_26.length > 0 && (n_33.push(e_55), r.push(i_26));
                        }
                    }
                    for (var t_47 = 0; t_47 < r.length; t_47++)
                        for (var _c = 0, _d = r[t_47]; _c < _d.length; _c++) {
                            var i_27 = _d[_c];
                            isInCoords = !1;
                            for (var _e = 0, e_54 = e; _e < e_54.length; _e++) {
                                var t_48 = e_54[_e];
                                if (i_27.x === t_48[0].x && i_27.y === t_48[0].y) {
                                    isInCoords = !0;
                                    break;
                                }
                            }
                            if (!isInCoords) {
                                e.push([{
                                        x: i_27.x,
                                        y: i_27.y
                                    }, {
                                        x: n_33[t_47].x,
                                        y: n_33[t_47].y
                                    }]);
                                break;
                            }
                        }
                };
                for (var _i = 0, n_32 = n; _i < n_32.length; _i++) {
                    var o = n_32[_i];
                    _loop_27(o);
                }
            }, n = function (t, n) {
                var i = Hex(t), o = lookupUnit(i), r = Hex(n), a = lookupUnit(r);
                o && 'soviet' === o.army && 0 === e.filter((function (e) {
                    return i.x === e[0].x && i.y === e[0].y;
                })).length && !a && 0 === e.filter((function (e) {
                    return r.x === e[1].x && r.y === e[1].y;
                })).length && e.push([t, n]);
            };
            t(Hex({
                x: 10,
                y: 2
            })), n({
                x: 13,
                y: 3
            }, {
                x: 12,
                y: 3
            }), n({
                x: 12,
                y: 0
            }, {
                x: 11,
                y: 1
            }), n({
                x: 13,
                y: 1
            }, {
                x: 12,
                y: 1
            }), n({
                x: 13,
                y: 2
            }, {
                x: 12,
                y: 2
            }), t(Hex({
                x: 13,
                y: 5
            })), t(Hex({
                x: 10,
                y: 6
            }));
            var _loop_26 = function (t_49) {
                var n_34 = grid.get(t_49.position);
                var i_28 = getValidRailDestinations(n_34, currentTurn.army, t_49.movement).filter((function (t) {
                    return t.x > n_34.x && t.x <= 10 && (!lookupUnit(t) || lookupUnit(t) && e.filter((function (e) {
                        return t.x === e[0].x && t.y === e[0].y;
                    })).length > 0) && 0 === e.filter((function (e) {
                        return t.x === e[1].x && t.y === e[1].y;
                    })).length;
                })).sort((function (e, n) {
                    return n.x - e.x || (t_49.position.y > 4 ? e.y - n.y : n.y - e.y);
                }));
                i_28.length > 0 && e.push([t_49.position, {
                        x: i_28[0].x,
                        y: i_28[0].y
                    }]);
            };
            for (var _i = 0, _a = b4mUnits.filter((function (t) {
                return t.army === currentTurn.army && t.position && t.position.x < 9 && 0 === e.filter((function (e) {
                    return t.position.x === e[0].x && t.position.y === e[0].y;
                })).length;
            })).sort((function (e, t) {
                return t.position.x - e.position.x;
            })); _i < _a.length; _i++) {
                var t_49 = _a[_i];
                _loop_26(t_49);
            }
            return e;
        }() : function () {
            var e = [], t = Hex({
                x: 10,
                y: 2
            }), n = lookupUnit(t);
            aiSelectMovesToFocus(t, n && 'german' === n.army ? 1 : 2, e, 'tank'), aiSelectMovesToFocus(Hex({
                x: 10,
                y: 6
            }), 1, e, 'tank'), aiSelectMovesToFocus(Hex({
                x: 13,
                y: 5
            }), 1, e, 'tank');
            var _loop_28 = function (t_50) {
                var n_35 = grid.get(t_50.position);
                var i_29 = getValidNormalDestinations(n_35, currentTurn.army, t_50.movement).filter((function (t) {
                    return t.x > n_35.x && t.x <= 10 && (!lookupUnit(t) || lookupUnit(t) && e.filter((function (e) {
                        return t.x === e[0].x && t.y === e[0].y;
                    })).length > 0) && 0 === e.filter((function (e) {
                        return t.x === e[1].x && t.y === e[1].y;
                    })).length;
                })).sort((function (e, n) {
                    return n.x - e.x || (t_50.position.y > 4 ? e.y - n.y : n.y - e.y);
                }));
                i_29.length > 0 && e.push([t_50.position, {
                        x: i_29[0].x,
                        y: i_29[0].y
                    }]);
            };
            for (var _i = 0, _a = b4mUnits.filter((function (t) {
                return t.army === currentTurn.army && 'tank' === t.type && t.position && t.position.x < 9 && 0 === e.filter((function (e) {
                    return t.position.x === e[0].x && t.position.y === e[0].y;
                })).length;
            })).sort((function (e, t) {
                return t.position.x - e.position.x;
            })); _i < _a.length; _i++) {
                var t_50 = _a[_i];
                _loop_28(t_50);
            }
            return e;
        }();
        if (0 === e.length)
            document.getElementById('step_special_movement_tip').innerText = t + ' But the enemy has decided not to use this capability during this phase.';
        else {
            document.getElementById('step_special_movement_tip').innerText = t;
            var _loop_25 = function (t_51) {
                setTimeout((function () {
                    window.scrollTo(grid.get(e[t_51][1]).toPoint().x - window.innerWidth / 2, grid.get(e[t_51][1]).toPoint().y - window.innerHeight / 2), handleMovement(e[t_51][0], 'soviet' === currentTurn.army ? getValidRailDestinations : getValidNormalDestinations), handleMovement(e[t_51][1], 'soviet' === currentTurn.army ? getValidRailDestinations : getValidNormalDestinations);
                }), 2e3 * (t_51 + 1));
            };
            for (var t_51 = 0; t_51 < e.length; t_51++) {
                _loop_25(t_51);
            }
        }
        setTimeout((function () {
            document.getElementById('next_step_special_movement').style.display = 'block', document.getElementById('next_step_special_movement').onclick = combatAnnouncePhase;
        }), 2050 * e.length);
    }), 100));
}
function finalResults(e) {
    e && e.stopPropagation(), cleanAndSaveBeforeNewPhase('finalResults'), currentTurn.phase = 'game over', currentTurn.subphase = '', document.getElementById('final_results').style.display = 'block';
    var t = '', n = '', i = '', o = '', r = 0;
    for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
        var e_56 = grid_1[_i];
        if (e_56 && e_56.city && 'moscow' === e_56.city) {
            i = e_56.control;
            break;
        }
    }
    if (tournamentMode) {
        var e_57 = grid.get({
            x: 10,
            y: 6
        }).control;
        'german' === i && 'german' === e_57 ? (o = 'german', r = 3, t = '<img src="img/german_marker.png" /><span>German Decisive Victory!</span>', n = 'The German Army wins <strong>3 points</strong> because it controls Moscow and Tulla at the end of Game Turn 7.') : 'german' === i && 'soviet' === e_57 ? (o = 'german', r = 2, t = '<img src="img/german_marker.png" /><span>German Major Victory!</span>', n = 'The German Army wins <strong>2 points</strong> because it controls Moscow at the end of Game Turn 7, while the Red Army still controls Tulla.') : 'soviet' !== i || 'german' !== e_57 || isInCommunication(grid.get({
            x: 10,
            y: 2
        }), 'soviet') ? 'soviet' === i && 'german' === e_57 && isInCommunication(grid.get({
            x: 10,
            y: 2
        }), 'soviet') ? (o = 'soviet', r = 1, t = '<img src="img/soviet_marker.png" /><span>Russian Minor Victory!</span>', n = 'The Red Army wins <strong>1 point</strong> because it controls Moscow at the end of Game Turn 7, and the city is in communication, while the German Army controls Tulla.') : 'soviet' !== i || 'soviet' !== e_57 || isInCommunication(grid.get({
            x: 10,
            y: 2
        }), 'soviet') && isInCommunication(grid.get({
            x: 10,
            y: 6
        }), 'soviet') ? 'soviet' === i && 'soviet' === e_57 && isInCommunication(grid.get({
            x: 10,
            y: 2
        }), 'soviet') && isInCommunication(grid.get({
            x: 10,
            y: 6
        }), 'soviet') && (o = 'soviet', r = 3, t = '<img src="img/soviet_marker.png" /><span>Russian Decisive Victory!</span>', n = 'The Red Army wins <strong>3 points</strong> because it controls Moscow and Tulla at the end of Game Turn 7, and both cities are in communication.') : (o = 'soviet', r = 2, t = '<img src="img/soviet_marker.png" /><span>Russian Major Victory!</span>', n = 'The Red Army wins <strong>2 points</strong> because it controls Moscow and Tulla at the end of Game Turn 7, but either or both cities are not in communication.') : (o = 'german', r = 1, t = '<img src="img/german_marker.png" /><span>German Minor Victory!</span>', n = 'The German Army wins <strong>1 point</strong> because it controls Tulla at the end of Game Turn 7, while the Red Army still controls Moscow, but Moscow is not in communication.');
        var a = b4mUnits.reduce((function (e, t) {
            var n = 0;
            return 'german' === t.army && 'tank' === t.type && t.position && ('full' === t.strength ? n = 2 : 'reduced' === t.strength && (n = 1)), e + n;
        }), 0);
        'german' === o && a >= 12 ? n += '<br />The Germans get an extra point because they have 12 or more Panzer steps on the map at the end of the game, bringing their total to <strong>' + (r + 1) + ' points</strong>.' : 'soviet' === o && a <= 7 && (n += '<br />The Red Army gets an extra point because the Germans have 7 or fewer Panzer steps on the map at the end of the game, bringing the Red Army\'s total to <strong>' + (r + 1) + ' points</strong>.');
    }
    else if ('german' === i)
        t = '<img src="img/german_marker.png" /><span>The German Army won!</span>', n = 'The German Army wins because it controls Moscow at the end of Game Turn 7.';
    else {
        b4mGrid.filter((function (e) {
            var t = grid.get(e);
            return t.city && 'moscow' !== t.city && 'soviet' === t.control;
        })).length > 0 ? (t = '<img src="img/soviet_marker.png" /><span>The Red Army won!</span>', n = 'The Red Army wins because it controls Moscow and one other city at the end of Game Turn 7.') : (t = '<span>It is a draw!</span>', n = 'The Red Army still controls Moscow but the German Army controls all the other cities at the end of Game Turn 7.');
    }
    document.querySelector('#final_results > div.hud_title').innerHTML = t, document.getElementById('final_results_tip').innerHTML = n;
}
function newGame() {
    window.localStorage.removeItem('b4mSave'), window.location.reload(!0);
}
function continueGame() {
    b4mSave = JSON.parse(window.localStorage.getItem('b4mSave')), startGame();
}
function startGameVsSovietAI() {
    playAIAs = 'soviet', startGame();
}
function startGameVsGermanAI() {
    playAIAs = 'german', startGame();
}
function continueFromSave() {
    b4mUnits = b4mSave.units.slice();
    for (var _i = 0, _a = b4mSave.cities; _i < _a.length; _i++) {
        var e = _a[_i];
        var t = grid.get(e.position);
        t && t.city && 'none' !== t.city && (t.control = e.control);
    }
    battles = b4mSave.battles.slice(), currentTurn.turn = b4mSave.current_turn.turn, currentTurn.army = b4mSave.current_turn.army, currentTurn.phase = b4mSave.current_turn.phase, currentTurn.subphase = b4mSave.current_turn.subphase, followingReinforcement = b4mSave.followingReinforcement, playAIAs = b4mSave.play_ai_as, document.getElementById('turn_info').style.display = 'block', setTurnInfo(), drawPositionedUnits(), window[b4mSave.function_name]();
}
function restartPhase() {
    b4mSave = JSON.parse(window.localStorage.getItem('b4mSave')), continueFromSave();
}
function startGame() {
    document.getElementById('next_solitaire_button').removeEventListener('click', startGame), document.getElementById('next_human_vs_soviet_button').removeEventListener('click', startGameVsSovietAI), document.getElementById('next_human_vs_german_button').removeEventListener('click', startGameVsGermanAI), document.getElementById('next_continue_button').removeEventListener('click', continueGame), document.getElementById('help_menu').addEventListener('click', (function () {
        document.getElementById('help_content').style.display = 'block';
    }), !0), document.getElementById('help_close').addEventListener('click', (function () {
        document.getElementById('help_content').style.display = 'none';
    }), !0), window.innerWidth < 1e3 && (document.getElementById('help_content').style.width = '100%', document.getElementById('help_content').style.height = '100%'), window.localStorage.getItem('b4mStart') || (document.getElementById('help_content').style.display = 'block', window.localStorage.setItem('b4mStart', (new Date).toISOString())), document.getElementById('turn_info').addEventListener('click', (function (e) {
        if (e.stopPropagation(), 'block' === document.getElementById('turn_report').style.display) {
            document.getElementById('turn_report').innerHTML = '', document.getElementById('turn_report').style.display = 'none', document.getElementById('turn_info').style.height = 'auto';
            var e_58 = document.getElementById('cities_highlights');
            e_58.getContext('2d').clearRect(0, 0, document.getElementById('map').width, document.getElementById('map').height), document.body.removeChild(e_58);
        }
        else {
            document.getElementById('turn_info').style.height = '90px';
            var e_59 = document.createElement('canvas');
            e_59.setAttribute('id', 'cities_highlights'), document.body.appendChild(e_59), e_59.width = document.getElementById('map').width, e_59.height = document.getElementById('map').height;
            var t_52 = e_59.getContext('2d'), n = grid.get({
                x: 10,
                y: 2
            }), i_30 = n.control;
            highlightHex(t_52, n, 'rgb(0, 0, 0, 0.4)');
            var o = document.getElementById(i_30 + '_marker'), r = n.center().add(n.toPoint());
            t_52.drawImage(o, r.x - 15, r.y - 15, 30, 30);
            var a_5 = 0;
            grid.forEach((function (e) {
                if (e && e.city && 'moscow' !== e.city && 'german' === e.control) {
                    a_5++, highlightHex(t_52, e, 'rgb(0, 0, 0, 0.4)');
                    var n_36 = document.getElementById(e.control + '_marker'), i_31 = e.center().add(e.toPoint());
                    t_52.drawImage(n_36, i_31.x - 15, i_31.y - 15, 30, 30);
                }
            }));
            var l_5 = 0;
            grid.forEach((function (e) {
                if (e && e.city && 'moscow' !== e.city && 'soviet' === e.control) {
                    l_5++, highlightHex(t_52, e, 'rgb(0, 0, 0, 0.4)');
                    var n_37 = document.getElementById(e.control + '_marker'), i_32 = e.center().add(e.toPoint());
                    t_52.drawImage(n_37, i_32.x - 15, i_32.y - 15, 30, 30);
                }
            })), document.getElementById('turn_report').innerHTML += '<div style="text-align: left; margin-top: 20px; margin-bottom: 5px;">- Army in control of Moscow: <img src="img/' + i_30 + '_marker.png"></img><div>', document.getElementById('turn_report').innerHTML += '<div style="text-align: left;">- Other cities: <img src="img/german_marker.png"></img> ' + a_5 + '<img src="img/soviet_marker.png"></img> ' + l_5 + '<div>', document.getElementById('turn_report').style.display = 'block';
        }
    })), document.body.style.overflow = 'visible';
    var e = document.getElementById('splash_title');
    document.body.removeChild(e);
    var t = document.getElementById('splash_background');
    if (document.body.removeChild(t), canvasBoard = document.getElementById('board'), canvasBoard.width = window.innerWidth > document.getElementById('map').width ? window.innerWidth : document.getElementById('map').width, canvasBoard.height = document.getElementById('map').height, board = canvasBoard.getContext('2d'), canvasHexHighlights = document.getElementById('hex_highlights'), canvasHexHighlights.width = document.getElementById('map').width, canvasHexHighlights.height = document.getElementById('map').height, hexHighlights = canvasHexHighlights.getContext('2d'), canvasCountersHighlights = document.getElementById('counters_highlights'), canvasCountersHighlights.width = document.getElementById('map').width, canvasCountersHighlights.height = document.getElementById('map').height, countersHighlights = canvasCountersHighlights.getContext('2d'), window.innerWidth > 2e3) {
        var e_60 = document.getElementById('help_terrain_img');
        board.drawImage(e_60, 1290, 530, 693, 600);
    }
    if (window.innerWidth > 2400) {
        var e_61 = document.getElementById('help_crt_img');
        board.drawImage(e_61, 0, 0, 600, 480, 2e3, 530, 381, 305), board.drawImage(e_61, 601, 0, 534, 480, 2e3, 830, 339, 305);
    }
    arrows = document.getElementById('arrows_counter'), document.getElementById('help_menu').style.display = 'block', b4mSave ? continueFromSave() : (drawPositionedUnits(), turn1GermanSetupPhase(board, hexHighlights, countersHighlights));
}
window.addEventListener('load', (function () {
    setTimeout((function () {
        scrollTo(0, 0);
    }), 100), window.localStorage.getItem('b4mSave') && (document.getElementById('next_continue_button').style.display = 'inline-block'), document.getElementById('next_continue_button').addEventListener('click', continueGame, !0), document.getElementById('next_solitaire_button').addEventListener('click', startGame, !0), document.getElementById('next_human_vs_soviet_button').addEventListener('click', startGameVsSovietAI, !0), document.getElementById('next_human_vs_german_button').addEventListener('click', startGameVsGermanAI, !0), 'yes' === window.localStorage.getItem('b4mTournamentMode') && (document.getElementById('tournament_mode').checked = !0, tournamentMode = !0), document.getElementById('tournament_mode').addEventListener('click', (function () {
        window.localStorage.setItem('b4mTournamentMode', this.checked ? 'yes' : 'no'), tournamentMode = this.checked;
    }), !0);
}));
