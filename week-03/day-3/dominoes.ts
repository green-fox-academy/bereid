// You have the list of Dominoes
// Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
// eg: [2, 4], [4, 3], [3, 5] ...

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(4, 6));
    return dominoes;
}

function sortDominoes(dominoes: Domino[]): Domino[] {
    let sortedDominoes: Domino[] = [];
    sortedDominoes.push(dominoes[0]);
    dominoes.splice(0, 1);
    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i].values[0] === sortedDominoes[sortedDominoes.length - 1].values[1]) {
            sortedDominoes.push(dominoes[i]);
        }
        else if (dominoes[i].values[1] === sortedDominoes[0].values[0]) {
            sortedDominoes.unshift(dominoes[i]);
        }
    }
    return sortedDominoes;
}



function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
print(sortDominoes(dominoes));