// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";

function copyFile(copyFileName: string, newFileName){
  try{
    let newFileContent: string = fs.readFileSync(copyFileName, charBase);
    fs.writeFileSync(newFileName, newFileContent);
  }
  catch(e){
    console.log("Unable to re-write the file")
  }
  return true;
}

console.log(copyFile("hello.txt", "hell.txt"));