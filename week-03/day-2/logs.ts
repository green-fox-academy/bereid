// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";

function readAndSplitData(fileName: string){
  try{
    let arrayOfIp = fs.readFileSync(fileName, charBase).split("\n");
    let multiArray = arrayOfIp.map(element => {
      return element.split("   ");
    });;
    let justIps = []
    multiArray.forEach(element => {
      justIps.push(element[1]);
    });
    return justIps;
  }
  catch(e){
    return e.message;
  }
}

console.log(readAndSplitData("log.txt"));
