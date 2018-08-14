// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen(divider: number): number {
  let devidedNumber = divider / 10;
  if (divider === 0) {
    console.log("fail");
  }
  return devidedNumber;
}

console.log(divideTen(0));