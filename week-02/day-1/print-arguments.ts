// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...printNums: number[]){
    for(let i = 0; i < printNums.length; i++){
        console.log(printNums[i])
    }
}

printParams(8, 9, 10, 11, 12, 13, 14);