// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//  Example output:
//  John Doe
//  31
//  1.87

let myName = "Daniel Berei"
let myAge = 25
let myHeight = 1.70 

console.log(myName);
console.log(myAge);
console.log(myHeight);

// Create a program that prints a few operations on two numbers: 22 and 13
// Print the result of 13 added to 22
// Print the result of 13 substracted from 22
// Print the result of 22 multiplied by 13
// Print the result of 22 divided by 13 (as a decimal fraction)
// Print the reminder of 22 divided by 13

let x = 13
let y = 22

console.log(x + y);
console.log(y - x);
console.log(y * x);
console.log(y / x);
console.log(y % x);

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codingHours = 6
let semesterLenght = 17
let weekDays = 5

console.log (codingHours * semesterLenght * weekDays);

let codingHoursAll = (codingHours * semesterLenght * weekDays)

console.log ((codingHoursAll / (52 * semesterLenght)) * 100 + "%")

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'

let favoriteNumber: number = 8

console.log('My favourite number: ' + favoriteNumber);

// Swap the values of these variables

let a: number = 123;
let b: number = 526;

[a,b] = [b,a]
console.log(a);
console.log(b);

// Print the Body mass index (BMI) based on these values

let massInKg: number = 81.2;
let heightInM: number = 1.78;

console.log(massInKg / (heightInM ** 2));

// Define several things as a variable, then print their values
// Your name as a string
// Your age as an integer
// Your height in meters as a float
// Whether you are married or not as a boolean

let myFullName: string = 'Daniel Berei'
let myRealAge: number = 25
let myRealHeight: number = 1.7
let iamMarried: boolean = false 

console.log(myFullName, myRealAge, myRealHeight, iamMarried);

//Uj feladat cim nelkul

let z: number = 3;
// make it bigger by 10
console.log(z + 10);

let w: number = 100;
// make it smaller by 7
console.log(w - 7);

let c: number = 44;
// double c's value
console.log(c * 2);

let d: number = 125;
// divide d's value by 5
console.log(d / 5);

let e: number = 8;
// what's the cube of e's value?
console.log(e ** 2);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log(2 * g2 > g1);

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
console.log(h % 11 == 0);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1 > i2 ** 2 && i1 < i2 ** 3);


let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k);