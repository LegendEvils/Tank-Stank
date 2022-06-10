import Character from './Characters';
import Moves from './Moves';

class Player extends Character {
    constructor(name, lvl, hp, mp, atk, spd, move1, move2, move3, move4) {
        super(name, lvl, hp, mp, atk, spd);
        this.move1 = move1(this.atk, this.mp, this.lvl, this.hp, this.spd );
        this.move2 = move2(this.atk, this.mp, this.lvl, this.hp, this.spd);
        this.move3 = move3(this.atk, this.mp, this.lvl, this.hp, this.spd);
        this.move4 = move4(this.atk, this.mp, this.lvl, this.hp, this.spd);
    }
}

const move = Moves;

let rick = new Player("Rick", 1, 150, 180, 5, 15, move.revolver, move.axeSwing, move.rickTatorship, move.caaarl );

console.log(rick);