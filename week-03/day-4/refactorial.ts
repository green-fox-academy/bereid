// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio (factorNum: number): number{
  if(factorNum == 0){
    return 1;
  } else {
    return factorNum * refactorio(factorNum - 1);
  }
}

console.log(refactorio(7));