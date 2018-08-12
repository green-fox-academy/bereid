'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function beTogether(array, array2){
    let newarray: string[] = []
    array.forEach((elem, index) => {
        newarray.push(array[index]);
        if(array2[index] != undefined){
            newarray.push(array2[index])    
    }});
    return newarray;
}

console.log(beTogether(girls, boys));
export = beTogether;