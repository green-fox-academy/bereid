// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";

function readFile(fileName: string) {
  try {
    console.log(fs.readFileSync(fileName, charBase));
    return fs.readFileSync(fileName, charBase);
  }
  catch (e) {
    console.log("Unable to read file: my-file.txt")
    return null;
  }
}

readFile("hello.txt");