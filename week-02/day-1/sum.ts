export {}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(inputNumber: number){
    let sum: number = 0;
    for(let i = 0; i <= inputNumber; i++){
        sum += i; 
    }
    return sum;
}

console.log(sum(43));

