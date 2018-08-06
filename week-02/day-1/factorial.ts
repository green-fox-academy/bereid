export {}

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(inputNumber: number){
    let factorio = inputNumber;
    for(let i = 1; i < inputNumber; i++){
        factorio *= i;
    }
    return factorio;
}

console.log(factorio(7));

