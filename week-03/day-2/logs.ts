// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict'
export { };
declare function require(path: string): any;
const fs = require("fs");
const charBase: string = "utf-8";
let multiArray: string[][] = readAndSplitData("log.txt");

function readAndSplitData(fileName: string): string[][] {
  let arrayOfIp: string[] = fs.readFileSync(fileName, charBase).split("\n");
  let multiArray: string[][] = arrayOfIp.map(element => {
    return element.split("   ");
  });
  return multiArray;
}

function pushUniques(array: string[][]): string[] {
  let uniqueIps = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueIps.indexOf(array[i][1]) === -1) {
      uniqueIps.push(array[i][1]);
    }
  }
  return uniqueIps;
}

function ratioGetPost(array: string [][]): number {
  let numOfGets: number = 0
  let numOfPosts: number = 0
  array.map(element => {
    if(element[2] === "GET /"){
      numOfGets ++; 
    }
    else if (element[2] === "POST /"){
      numOfPosts ++;
    }
  });
  return numOfGets/numOfPosts;
}

console.log(pushUniques(multiArray));
console.log(ratioGetPost(multiArray));