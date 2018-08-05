// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount2: number = 4;
let starCount: string = '*'
let spaceCount: string = '   '

for(let mm: number = 1; mm <= lineCount2; mm++){
    console.log(spaceCount + starCount)
    spaceCount = spaceCount.slice (0, -1)
    starCount += '**'
}
