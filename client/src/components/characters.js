
class Character {
    constructor(name, lvl, hp, mp, atk, spd) {
        this.name = name;
        this.lvl = lvl;
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
        this.spd = spd;
    }
    takeDamage(move, dmg) {
        this.hp = this.hp - dmg
        console.log(`${move} did ${dmg} Damage!!`)
    }

    getAttacked(move, attackLands, dmg) {
        attackLands ? this.takeDamage(move, dmg) : console.log(`${move} Attack Missed!!`)
    }


}

export default Character;
