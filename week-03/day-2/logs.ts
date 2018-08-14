// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";
let multiArray = readAndSplitData("log.txt");

function readAndSplitData(fileName: string) {
  try {
    let arrayOfIp = fs.readFileSync(fileName, charBase).split("\n");
    let multiArray = arrayOfIp.map(element => {
      return element.split("   ");
    })
    return multiArray;
  }
  catch (e) {
    return e.message;
  }
}

function pushUniques(array) {
  let uniqueIps = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueIps.indexOf(array[i][1]) === - 1) {
      uniqueIps.push(array[i][1]);
    }
  }
  return uniqueIps;
}

function ratioGetPost (){
  
}

console.log(pushUniques(multiArray));