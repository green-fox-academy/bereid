// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;

for(let star: string = '*'; star.length <= lineCount; star += '*'){
    console.log(star);
}