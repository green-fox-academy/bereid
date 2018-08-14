'use strict';
export { };
declare function require(path: string): any;

const fs = require("fs");

function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, "utf-8");
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToFile(fileName: string, data: string): void {
  fs.writeFileSync(fileName, data);
}

function countChar(char: string) {
  let result: number = 0;
  const fileContent = readFromFile("hello.txt");
  if (fileContent !== null) {
    fileContent.split("\n").forEach(e => {
      e.split("").forEach(elem => {
        if (elem === char) {
          result += 1;
        }
      })
    });
    return result;
  }
}


console.log(countChar("t"));