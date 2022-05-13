//Shows up the grids for replacements from line 1771 in b4m.js 

 i() && (o = b4mGrid.filter((function (e) {
        var t = grid.get({
            x: e.x,
            y: e.y
        }), n = !1;
        return !('soviet' === currentTurn.army ? t.sovietReplacement : t.germanReplacement) || lookupUnit(t) || isEZOC(t, currentTurn.army) ? t.city && 'none' !== t.city && t.control === currentTurn.army && !lookupUnit(t) && ('soviet' === currentTurn.army && 'moscow' === t.city || isInCommunication(t, currentTurn.army)) && (highlightHex(hexHighlights, t), n = !0) : (highlightHex(hexHighlights, t), n = !0), n;
    }