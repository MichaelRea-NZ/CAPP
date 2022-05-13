//This code moves the units and stops the unit on each hex to animate the movement of the units. From line 100 in b4m.js


function moveUnit(e, t, n) {
    var i = {
        x: e.position.x,
        y: e.position.y
    }, o = Hex(i).center().add(Hex(i).toPoint()), r = null;
    setTimeout((function () {
		//setInterval delays the unit on each hex
        var a = setInterval((function () {
			//tick is applied to the unit here. Id = 'check_counter'
            0 === t.length ? (n && countersHighlights.drawImage(document.getElementById('check_counter'), o.x - 40, o.y - 40, 80, 80), clearInterval(a)) : (clearUnit(board, e, o.x - 40, o.y - 40), r && r.id !== e.id && drawUnit(board, r, o.x - 30, o.y - 30), i = t.shift(), r = lookupUnit(Hex(i)), o = Hex(i).center().add(Hex(i).toPoint()), e.position = {
                x: i.x,
                y: i.y
            }, drawUnit(board, e, o.x - 30, o.y - 30));
		// The delay time is set to 300
        }), 300);
    }), 100);
}