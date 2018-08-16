// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerNo(base: number, n: number): number {
  if (n === 1) {
    return base;
  } else if (n < 1) {
    throw console.error("Can't do this, pls");
  } else {
    return base * powerNo(base, n - 1);
  }
}

console.log(powerNo(4, 7));