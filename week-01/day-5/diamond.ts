// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount1: number = 4;
let star: string = '*'
let space: string = '   '

for(let mm: number = 1; mm < 4; mm++){
    console.log(space + star)
    space = space.slice (0, -1)
    star += '**'
}
for(let mm: number = 1; mm < 5; mm++){
    console.log(space + star)
    space += " "
    star = star.slice (0, -2)
}