 //From line 1026 in b4m.js. Paints the dashe blue lines for a retreat.
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