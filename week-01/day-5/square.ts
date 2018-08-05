// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let squareSide: string = "%%%%%%"
let squareInside: string = "    "

console.log(squareSide);
for(let i = 1; i <= 4; i++){
    console.log("%" + squareInside + "%")
}
console.log(squareSide);
