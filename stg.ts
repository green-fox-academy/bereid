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
console.log(j % 5 == 0 || j % 3 == 0);

let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k+k+k+k);

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
// Surface Area: 600
// Volume: 1000

let cuboidSideA: number = 12
let cuboidSideB: number = 7
let cuboidSideC: number = 11

let surfaceArea: number = (cuboidSideA * cuboidSideB * 2) + (cuboidSideB * cuboidSideC * 2) + (cuboidSideA * cuboidSideC *2)
let cubeVolume: number = cuboidSideA * cuboidSideB * cuboidSideC

console.log(surfaceArea, cubeVolume);

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let dayAllseconds: number = 24 * 60 * 60

console.log(dayAllseconds - (currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds));

//Ujabb feladat szinten cim nelkul

let l: number = 24;
let out: number = 0;

// if l is even increment out by one
if(l % 2 == 0){
    out = out++
    console.log(out)
}

let n: number = 13;
let out2: string = '';

// if n is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

if(20 > n || n > 10){
   out2 = "Sweet"
   console.log(out2) 
}

let m: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement m by 2
// if credits are smaller than 50,
// and is_bonus is false decrement m by 1
// if is_bonus is true m should remain the same

if(credits >= 50 && isBonus === false){
    m = m-2
}
if(credits < 50 && isBonus === false){
    m = m-1
}
if(isBonus){
    m = m-0
}

console.log(m);

let q: number =  8;
let time: number = 120;
let out3: string = '';

// if q is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if(q % 4 == 0 && time <= 200){
    out3 = "Check"
}
if(time > 200){
    out3 = "Time out"
} 
else{
    out3 = "Run Forest Run!"
}

console.log(out3);

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let u = 1
let iDontCheat = "I won't cheat on the exam!"

for(u; u <= 100; u++){
    console.log(iDontCheat)
}