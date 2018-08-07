// array: tomb

var array = ["one", "two", "three", "four", "five"];

console.log(array[2]);
console.log(array[0]);
console.log(array[4]);

// multidimensional array: tobbdimenzios tomb

var array2: number[][] = new Array();

array2.push([1,2,3]);
array2.push([4,5,6]);
array2.push([7,8,9]);
array2.push([10,11,12]);
array2.push([13,14,15]);
array2.push([16,17,18]);
array2.push([19,20,21]);
array2.push([22,23,24]);
array2.push([25,26,27]);

console.log(array2[5][2]);

// array.concat

let concatstring = "Hello, my friend, "
let concatstring2 = "we support Liverpool!"
console.log(concatstring.concat(concatstring2));

// array.every

let myFolder = [9, 10, 11, 21, 8, 6, 34]

function isBigEnough(element, index, array){
    return (element >= 10);
}

let myFolder2 = myFolder.every(isBigEnough);
console.log(myFolder2);

// array.filter

let myFolder3 = [2, 3, 4, 5, 6, 7, 8, 1123];

function isLittleEnough(element, index, array){
    return (element <= 5);
}

let myFolder4 = myFolder3.filter(isLittleEnough);
console.log(myFolder4);

// array.map

let numFolder = [3, 4, 5];

function double(element){
    return element * 2;
}

let numFolder2 = numFolder.map(double);
console.log(numFolder2);

// array.forEach

let numberFolder = [5, 6, 7];

numberFolder.forEach(function (value){
    console.log(value);
});

// array.indexOf

let numberFolder2 = [12, 5, 8, 130, 44];
let indexOfNumberFolder = numberFolder2.indexOf(130);
console.log(indexOfNumberFolder);

