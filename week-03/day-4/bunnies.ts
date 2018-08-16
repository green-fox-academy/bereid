// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunny(bunnies: number): number{
    if (bunnies == 0) {
      return 0;
    }
    else {
      return bunny(bunnies - 1) + 2;
    }
}

console.log(bunny(120));