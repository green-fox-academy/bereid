'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

function parametricAverage(x, y, z){
    if(x && y && z){
        console.log("Sum: " + (x+y+z), "Average: " + (x+y+z)/3);
}
}

parametricAverage(1, 7 ,100);