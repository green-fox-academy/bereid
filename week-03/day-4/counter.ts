// Write a recursive function that takes one parameter: n and counts down from n.

function countsDown(n: number) {
  if (n === 0) {
    console.log(n);
  } else {
    console.log(n);
    countsDown(n -1);
  }
}

countsDown(20);