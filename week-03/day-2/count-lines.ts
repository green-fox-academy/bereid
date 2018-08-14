// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";

function countLines(fileName: string): number {
  try {
    let lengthOfFile: number = fs.readFileSync(fileName, charBase).split("\n").length;
    return lengthOfFile;
  }
  catch (e) {
    return 0;
  }
}

console.log(countLines("he.txt"));