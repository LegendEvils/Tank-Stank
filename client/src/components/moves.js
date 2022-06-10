
const Moves = {

    "axeSwing": (atk) => {
        let damage = atk * 2;
        let axe = {
            "name": "Axe Swing",
            "dmg": damage
        }
        return axe;
    },

    "bite": (atk) => {
        let damage = atk * 3;
        let bite = {
            "name": "Bite",
            "dmg": damage
        }
        return bite;
    },

    "caaarl": () => {
        let damage = 0;
        let carl = {
            "name": "Caaaarl...",
            "dmg": damage,
            "effect": "Caaaaaarrrl...",
            "cost": 0
        }
        return carl;
    },

    "revolver": (atk, mp) => {
        let damage = atk * 5;
        let shot = {
            "name": "Revolver Shot",
            "dmg": damage,
            "cost": mp/6
        }
        return shot
    },

    "rickTatorship": (atk, mp, lvl) => {
        let buff = {
            "name": "Ricktatorship",
            "effect": "Attack buff to party",
            "cost": 30
        }
        return buff
    },

    "scratch": (atk) => {
        let damage = atk * 1.5;
        let scratch = {
            "name": "Scratch",
            "dmg": damage,
        }
        return scratch;
    },

    "zombieTrip": () => {
        let damage = 0;
        let trip = {
            "name": "Zombie Trip",
            "dmg": damage,
            "effect": "Zombie stumbles like a turd..."
        }
        return trip;
    },

    "empty": () => {

    }


}

export default Moves;