// eslint-disable-next-line no-unused-vars
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

export var b4mUnits: Array<Unit> = [{
    id: 's1sh',
    pos: 0,
    army: 'soviet',
    type: 'shock',
    size: 'XXXX',
    combatFull: 10,
    combatReduced: 5,
    movement: 4,
    strength: 'full'
},
{
    id: 's3',
    pos: 1,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 2,
        y: 0
    }
}, {
    id: 's5',
    pos: 2,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 2,
        y: 1
    }
}, {
    id: 's10',
    pos: 3,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 2,
        y: 2
    }
}, {
    id: 's13',
    pos: 4,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 2,
        y: 3
    }
}, {
    id: 's16',
    pos: 5,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 2
    }
}, {
    id: 's19',
    pos: 6,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 3,
        y: 5
    }
}, {
    id: 's20',
    pos: 7,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 5
    }
}, {
    id: 's24',
    pos: 8,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 6
    }
}, {
    id: 's29',
    pos: 9,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 7
    }
}, {
    id: 's30',
    pos: 10,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 5,
        y: 8
    }
}, {
    id: 's32',
    pos: 11,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 8
    }
}, {
    id: 's33',
    pos: 12,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 9
    }
}, {
    id: 's40',
    pos: 13,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 4,
        y: 10
    }
}, {
    id: 's43',
    pos: 14,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced',
    position: {
        x: 7,
        y: 3
    }
}, {
    id: 's49',
    pos: 15,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced'
}, {
    id: 's50',
    pos: 16,
    army: 'soviet',
    type: 'infantry',
    size: 'XXXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'reduced'
}, {
    id: 'g24',
    pos: 0,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 12,
    combatReduced: 6,
    movement: 6,
    strength: 'full'
}, {
    id: 'g41',
    pos: 1,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 12,
    combatReduced: 6,
    movement: 6,
    strength: 'full'
}, {
    id: 'g57',
    pos: 2,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 12,
    combatReduced: 6,
    movement: 6,
    strength: 'full'
}, {
    id: 'g46',
    pos: 3,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 10,
    combatReduced: 5,
    movement: 6,
    strength: 'full'
}, {
    id: 'g47',
    pos: 4,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 9,
    combatReduced: 4,
    movement: 6,
    strength: 'full'
}, {
    id: 'g56',
    pos: 5,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 9,
    combatReduced: 4,
    movement: 6,
    strength: 'full'
}, {
    id: 'g40',
    pos: 6,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 6,
    strength: 'full'
}, {
    id: 'g48',
    pos: 7,
    army: 'german',
    type: 'tank',
    size: 'XXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 6,
    strength: 'full'
}, {
    id: 'g23',
    pos: 8,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'full'
}, {
    id: 'g35',
    pos: 9,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: 'full'
}, {
    id: 'g7',
    pos: 10,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 7,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g8',
    pos: 11,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 7,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g9',
    pos: 12,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 7,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g5',
    pos: 13,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g13',
    pos: 14,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g20',
    pos: 15,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g27',
    pos: 16,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g53',
    pos: 17,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: 'full'
}, {
    id: 'g6',
    pos: 18,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 5,
    combatReduced: 2,
    movement: 4,
    strength: 'full'
}, {
    id: 'g12',
    pos: 19,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 5,
    combatReduced: 2,
    movement: 4,
    strength: 'full'
}, {
    id: 'g34',
    pos: 20,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 4,
    combatReduced: 2,
    movement: 4,
    strength: 'full'
}, {
    id: 'g42',
    pos: 21,
    army: 'german',
    type: 'infantry',
    size: 'XXX',
    combatFull: 4,
    combatReduced: 2,
    movement: 4,
    strength: 'full'
}]