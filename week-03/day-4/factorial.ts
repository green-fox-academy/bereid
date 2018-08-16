function factorial(num: number): number {
  if (num == 0){
    return 1;
  }
  else{
  return num * factorial(num-1);
  }
}

console.log(factorial(6));

function powerN (base: number, exponent: number): number{
  let result: number = 1;
  if (exponent == 1){
    return base;
  } else {
    return base * powerN(base, exponent - 1);
  }
}

console.log(powerN(5, 6));