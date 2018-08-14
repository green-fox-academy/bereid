// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";
let myName: string = "Daniel Berei";

function writeNameToFile(fileName: string, data: string){
  try {
    fs.writeFileSync(fileName, data);
  }
  catch(e){
    console.log("Unable to write file: my-file.txt");
  }
  return "Ready";
}

console.log(writeNameToFile("hell.txt", myName));