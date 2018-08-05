// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let numSum: number
let numAvg: number

var promptNum = prompt("Please enter a number")
var promptNum2 = prompt("Please, enter an another number")
if (promptNum != null && promptNum2 != null){
    let numAvg = promptNum + promptNum2 / 2 
    let numSum = promptNum * promptNum2
}else {
    console.log("Please insert a higher number than 0")
}

console.log("Sum: " + numSum, "Average: " + numAvg)


//hibakodot ad ki azert, mert a prompt value nem lehet number, csak string, marpedig nekem number kell - MEGKERDEZNI!!