export {}

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList = [1,2,3,4,5]

numList.forEach(function (num) {
    if(num == 2){
        num + 1
    }
});

console.log(numList[2]);