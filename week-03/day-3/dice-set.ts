// You have a `DiceSet` class which has a list for 6 dices
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dices until all of the dices are 6

class DiceSet {
    dices: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dices = [];
        for (var i = 0; i < this.numOfDices; i++) {
            this.dices.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dices;
    }

    reroll(index?: number) {
        if (index == undefined) {
            for (var i = 0; i < this.numOfDices; i++) {
                this.dices[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dices[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index?: number) {
        if (index == undefined) {
            for (var i = 0; i < this.numOfDices; i++) {
                console.log(this.dices[i]);
            }
        } else {
            console.log(this.dices[index]);
        }
    }
}

let diceSet = new DiceSet();
diceSet.roll();
diceSet.getCurrent();

function is6(value: number) {
    return value === 6
}

function findFirstIndex(array: number[]): number {
    for (let i = 0; i < array.length; i++) {
        if (!is6(array[i])) {
            return i;
        }
    }
    return -1;
}

while (!diceSet.dices.every(is6)) {
    console.log("Before reroll: " + diceSet.getCurrent());
    diceSet.reroll(findFirstIndex(diceSet.dices));
    console.log("After reroll: " + diceSet.getCurrent());
}