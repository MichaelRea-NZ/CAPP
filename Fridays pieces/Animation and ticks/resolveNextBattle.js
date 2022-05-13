//Explosion animation. From resolveNextBattle function line 1173 b4m.js. Explosin code is on line 36 of this file and line 1205 in b4m.js

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
		//Explosion code
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