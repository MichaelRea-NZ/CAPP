/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* eslint no-unused-vars: "error" */


type Army = 'soviet' | 'german'
type Type = 'shock' | 'infantry' | 'tank'
type Strength = 'full' | 'reduced'
type Point = { x: number, y: number }
type Unit = {
    id: String,
    pos: number,
    army: Army,
    type: Type,
    size: string,
    combatFull: number,
    combatReduced: number,
    movement: number,
    strength: Strength,
    position?: Point
}
type B4mUnits = Unit[];

type Terrain = 'open' | 'forest' | 'fortification'

type Direction = 'SE'| 'S'| 'SW'| 'NW'| 'N'| 'NE' | 'E'

type Rail = Direction[]

type River = Direction[]

type City = 'normal' | 'moscow' | 'major' | 'none'

type Control = 'german' | 'soviet'

var b4mUnits : B4mUnits = []

var currentTurn = {
    turn: 0,
    army: 'german',
    phase: '',
    subphase: ''
};
var playAIAs = ''
var countersHighlights: { clearRect: (arg0: number,arg1: number,arg2: number,arg3: number) => any; drawImage: (arg0: HTMLElement|null,arg1: number,arg2: number,arg3: number,arg4: number) => any }
var tournamentMode = !1

class Area {
x:number = 1
y: number = 1
terrain : Terrain = 'open'
river?: River = ['SE']
rail?: Rail = ['S', 'N']
germanStart?: boolean = false
germanReplacement? : boolean = false
sovietReplacement? : boolean = false
city? : City = 'normal'
control? : Control = 'german'

}
class Grid {
get (where: Point): Area {
return new Area()
}
}
var grid = new Grid()
function combatAnnouncePhase(e:any){}
function redeploymentPhase(e:any){}

function turn1GermanSetupPhase() {
    currentTurn = {
        turn: 1,
        army: 'german',
        phase: 'setup',
        subphase: ''
    }, document.getElementById('turn_info')!.style.display = 'block', setTurnInfo(), document.getElementById('step_0_tip')!.innerText = 'german' !== playAIAs ? 'Set up one full-strength German unit on each hex containing a black cross.' : 'The German army sets up one full-strength unit on each hex containing a black cross.', document.getElementById('step_0')!.style.display = 'block';
    var e = document.getElementById('canvas_step_0'), t = b4mUnits.filter((function (e: { army: string }) {
        return 'german' === e.army;
    }));
    drawAvailableUnits(e, t), handleStep0 = function (n: any) {
        var i = grid.get(n);
        if (i && i.germanStart) {
            var n_3 = i.center().add(i.toPoint()), o = lookupUnit(i);
            if (o !== null)
                clearUnit(board, o, n_3.x - 40, n_3.y - 40), countersHighlights.clearRect(n_3.x - 40, n_3.y - 40, 80, 80), t.unshift(o), drawAvailableUnits(e, t);
            else {
                var o_1 = t.shift();
                o_1.position = {
                    x: i.x,
                    y: i.y
                }, drawUnit(board, o_1, n_3.x - 30, n_3.y - 30), countersHighlights.drawImage(document.getElementById('delete_counter'), n_3.x - 40, n_3.y - 40, 80, 80), drawAvailableUnits(e, t);
            }
        }
        0 === t.length ? tournamentMode ? (document.getElementById('next_step_0_tournament')!.style.display = 'block', document.getElementById('next_step_0_tournament_button')!.onclick = redeploymentPhase) : (document.getElementById('next_step_0')!.style.display = 'block', document.getElementById('next_step_0_button')!.onclick = combatAnnouncePhase) : (document.getElementById('next_step_0')!.style.display = 'none', document.getElementById('next_step_0_tournament')!.style.display = 'none');
    },handleStep0Click = function (e: any) {
        if ('counters_highlights' === e.target.id) {
            var t_8 = Grid.pointToHex(e.offsetX, e.offsetY);
            handleStep0(t_8);
        }
    };    
    if ('german' !== playAIAs)
        document.addEventListener('click', (_handleStep0Click:any)=>{});
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
        var _loop_2 = function (t_9: number) {
            setTimeout((function () {
                window.scrollTo(0, grid.get(e_11[t_9]).toPoint().y - window.innerHeight / 2), handleStep0(e_11[t_9]);
            }), 1e3 * (t_9 + 1));
        };
        for (var t_9 = 0; t_9 < e_11.length; t_9++) {
            _loop_2(t_9);
        }
    }
}

function setTurnInfo() {
throw new Error("Function not implemented.");
}

function drawAvailableUnits(e: HTMLElement|null,t: any) {
throw new Error("Function not implemented.");
}

function lookupUnit(i: any) {
throw new Error("Function not implemented.");
}



function board(board: any,o: never,arg2: number,arg3: number) {
throw new Error("Function not implemented.");
}

function drawUnit(board: (board: any,o: never,arg2: number,arg3: number) => void,o_1: any,arg2: number,arg3: number) {
throw new Error("Function not implemented.");
}

function handleStep0(t_8: any) {
throw new Error("Function not implemented.");
}

function handleStep0Click(arg0: string,handleStep0Click: any) {
throw new Error("Function not implemented.");
}

function clearUnit(board: (board: any,o: never,arg2: number,arg3: number) => void,o: void,arg2: number,arg3: number) {
throw new Error("Function not implemented.")
}
