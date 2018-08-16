// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder (n: number): number{
  if(n === 0){
    return 1;
  } else {
    numberAdder(n - 1);
    console.log(n);
  }
}

numberAdder(10);