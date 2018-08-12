export {}

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

/*let numList = [1,2,3,4,5]
let answer = numList.map(function (num){
    if(num % 3 == 0){
        return num + 1;
    }
    else {
        return num;
    }
})
console.log(answer);
*/

/* masik megoldas

let numList = [1,2,3,4,5]
numList[2]++;
console.log(numList);

*/

let numList = [1,2,3,4,5]

numList.map(function (num) {
    if(num == 2){
        num + 1
    }
});

console.log(numList[2]);