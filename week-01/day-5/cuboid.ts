// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
// Surface Area: 600
// Volume: 1000

let cuboidSideA: number = 12
let cuboidSideB: number = 7
let cuboidSideC: number = 11

let surfaceArea: number = (cuboidSideA * cuboidSideB * 2) + (cuboidSideB * cuboidSideC * 2) + (cuboidSideA * cuboidSideC *2)
let cubeVolume: number = cuboidSideA * cuboidSideB * cuboidSideC

console.log("Surface Area: " + surfaceArea);
console.log("Volume: " + cubeVolume);